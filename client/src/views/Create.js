import react, {useState, useEffect} from 'react';
import axios from 'axios';
import InputForm from '../components/InputForm';
import {navigate} from '@reach/router';


const Create = (props)=>{

    const [newAuthor, setNewAuthor] = useState({
        firstName: "",
        lastName: ""
    })

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then((response)=>{
                setNewAuthor(response.data);
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        },[])

        // const createInputChange = (e) => {
        //     console.log("e.target.name:  " + e.target.name);
        //     console.log("e.target.value: " + e.target.value);
        
        //     let newStateObject = { ...newAuthor }; 
        //     newStateObject[e.target.name] = e.target.value;
    
        //     setNewAuthor(newStateObject);
        //   }
    


    const createSubmitHandler = (e)=> {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author/', newAuthor)
            .then((response)=>{
                setNewAuthor(response.data);
                console.log(response.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        
    return(
        <div>
            <InputForm author={newAuthor} setAuthor={setNewAuthor} submitHandler={createSubmitHandler}/>
        </div>
    )
}


export default Create;