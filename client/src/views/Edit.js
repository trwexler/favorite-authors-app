import React, {useState, useEffect} from 'react';
import InputForm from '../components/InputForm';
import axios from 'axios';
import {navigate} from '@reach/router';


const Edit = (props)=>{

    const [editAuthor, setEditAuthor] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/' + props.id)
            .then((response)=>{
                setEditAuthor({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName 
                });
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        },[])

        // const editInputChange = (e) => {
        //     console.log("e.target.name:  " + e.target.name);
        //     console.log("e.target.value: " + e.target.value);
        
        //     let newEditStateObject = {...editAuthor}; 
        //     newEditStateObject[e.target.name] = e.target.value;
            
        //     setEditAuthor(newEditStateObject);
        //   }

    const editSubmitHandler = (e)=> {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + props.id , {
            firstName:editAuthor.firstName, lastName:editAuthor.lastName
        })
            .then((response)=>{
                setEditAuthor({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName
                });
                console.log(response.data.firstName);
                navigate('/');
            })
            .catch((err)=>{
                console.log(err);
            })
        }

    return(
        <div>
            <InputForm author={editAuthor} setAuthor={setEditAuthor}
            submitHandler={editSubmitHandler}/>
        </div>

    )
}


export default Edit;