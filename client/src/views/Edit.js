import React, {useState, useEffect} from 'react';
import InputForm from '../components/InputForm';
import axios from 'axios';
import {navigate} from '@reach/router';


const Edit = (props)=>{

    const [editAuthor, setEditAuthor] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/' + props.id)
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


    const editSubmitHandler = (e)=> {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + props.id)
            .then((response)=>{
                setEditAuthor({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName
                });
                console.log(response.data.firstName);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

    return(
        <div>
            <InputForm author={editAuthor} setAuthor={setEditAuthor}
                submitHandler={editSubmitHandler}
            />
        </div>

    )
}


export default Edit;