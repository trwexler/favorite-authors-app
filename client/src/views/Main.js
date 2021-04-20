import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

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
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/newAuthor"}><p>Add an author</p></Link>
            <table> 
                <tbody>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>

                    {
                        author.map((item, index)=>(
                            <tr key={index}>
                                <td>{item.firstName} {item.lastName}</td>
                                <td>
                                <Link to={`/author/${item._id}/edit`}><button>Edit</button></Link>
                                <button>
                                Delete
                                </button>
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