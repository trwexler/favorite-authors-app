import react, {useState, useEffect} from 'react';
import axios from 'axios';
import InputForm from '../components/InputForm';
import {navigate} from '@reach/router';


const Create = (props)=>{

    const [newAuthor, setNewAuthor] = useState({
        firstName: "",
        lastName: ""
    })

    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then((response)=>{
                setNewAuthor(response.data);
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
                console.log(err.message);
            })
        },[])


    const createSubmitHandler = (e)=> {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author/', newAuthor)
            .then((response)=>{
                setNewAuthor(response.data);
                console.log(response.data);
                navigate("/");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
              
                setErrors(errorArr);
            })            
    }
        
    return(
        <div>
        
            <InputForm formText={<p>Add an author:</p>} author={newAuthor} setAuthor={setNewAuthor} submitHandler={createSubmitHandler}/>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    )
}


export default Create;