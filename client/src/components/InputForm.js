import react, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router'


const InputForm = (props)=>{

    const {submitHandler, author, setAuthor, formText} = props;

    const inputChange = (e) => {
        console.log("e.target.name:  " + e.target.name);
        console.log("e.target.value: " + e.target.value);
    
        let newStateObject = {...author}; 
        newStateObject[e.target.name] = e.target.value;
        
        setAuthor(newStateObject);
      }
    


    return(
        <div>
            <h1 className="text-3xl">Favorite Authors</h1>
            <Link  to={"/"}>
            <p className="underline inline text-blue-900">Home</p>
            </Link>
            <p className="text-purple-900">{props.formText}</p>


            <form onSubmit={submitHandler} className="mt-3 border border-black w-80 mx-auto py-4">
                    <div>
                        <label className=" my-1 mr-32" htmlFor="firstName">First Name:</label>
                        <br/>
                        <input className=" mt-1 mb-3  pl-2 border border-black" name="firstName" type="text" onChange={inputChange} value={author.firstName}/>
                    </div>

                    <div>
                        <label className=" my-1 mr-32"  htmlFor="lastName">Last Name:</label>
                        <br/>
                        <input className=" my-1  pl-2 border border-black" name="lastName" type="text" onChange={inputChange} value={author.lastName}/>
                    </div>
                        <Link to={'/'}><button className="border w-24 py-2 mx-2 mt-2 text-white font-bold rounded-2xl bg-blue-300">Cancel</button></Link>
                        <input className="w-24 py-2 mx-2 mt-2 text-white font-bold rounded-2xl bg-blue-300" type="submit" value="Submit"/>
        
            </form>
            </div>
    )
}


export default InputForm;