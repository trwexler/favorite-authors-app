import react, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'


const InputForm = (props)=>{

    const {submitHandler, author, setAuthor, inputChange} = props;
    


    return(
        <form onSubmit={submitHandler}>

            <label htmlFor="">First Name</label>
            <input name="firstName" type="text" onChange={inputChange} value={author.firstName}/>
            
            <label htmlFor="">Last Name:</label>
            <input name="lastName" type="text" onChange={inputChange} value={author.lastName}/>

            <input type="submit"/>

        </form>
    )
}


export default InputForm;