import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const Main = (props)=>{
    const [author, setAuthor] = useState([]);

    const {id} = props;


    useEffect(()=>{
    axios.get('http://localhost:8000/api')
        .then((response)=>{
            setAuthor(response.data);
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])

    return(
        <div className="mx-auto">
            <h1 className="text-3xl">Favorite Authors</h1>
            <Link  to={"/newAuthor"}><p className="underline inline text-blue-900">Add an author</p></Link>
            <p className="text-purple-900"> We have quotes by:</p>
            <table className=" mt-3 border-4 border-black mx-auto w-80"> 
                <tbody className="border-2 border-black">
                    <tr className="border-2 border-black h-12">
                        <td className="border-2 border-black">Author</td>
                        <td className="border-2 border-black">Actions available</td>
                    </tr>
                    {
                        author.map((item, index)=>(
                            <tr key={index} className="border-2 border-black h-16">
                                <td className="border-2 border-black">{item.firstName} {item.lastName}</td>
                                <td className="flex justify-evenly">

                                <Link className="p-2 mt-2 mx-1 border border-black w-20 bg-gradient-to-b from-yellow-300  to-gray-700 text-white rounded" to={`/author/${item._id}/edit`}><button >Edit</button></Link>

                                <DeleteButton author={author} setAuthor={setAuthor} id={item._id}/>
                                
                                </td>

                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;