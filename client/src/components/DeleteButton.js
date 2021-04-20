import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';


const DeleteButton = (props) => {

    const {author, setAuthor, id} = props;
   
    const deleteAuthor = id => {
        setAuthor(author.filter(item => item._id !== id));
    }

    const removeAuthor = ()=>{
        axios.delete('http://localhost:8000/api/author/' + props.id)
            .then(response=>{
                deleteAuthor(id);
                console.log(response.data); 
            })
            .catch((err)=>console.log(err));
    }

    return (
        <button className="p-2 mt-2 mx-1 border border-black w-20 bg-gradient-to-b from-red-400  to-gray-700 text-white rounded" onClick={(e)=>removeAuthor(id)}>
            Delete
        </button>
    )
}
export default DeleteButton;
