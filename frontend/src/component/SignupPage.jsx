import React, { useReducer, useState } from 'react'
import axios from "axios"
let initalstate={
name:"",email:"",gender:"",password:""
}
const reducer=(state=initalstate,action)=>{

    switch(action.type){
        case "Name" :{
            return {
                ...state,
                name:action.payload
            }
        }
        case "Email" :{
            return {
                ...state,
                email:action.payload
            }
        }
        case "Password" :{
            return {
                ...state,
                password:action.payload
            }
        }
        case "Gender" :{
            return {
                ...state,
                gender:action.payload
            }
        }
        default:{
            return state
        }
    }
}
export const SignupPage = () => {
    let [state,dispatch]=useReducer(reducer,initalstate)
    const {name,email,gender,password}=state
    const handlesubmit=(e)=>{
     e.preventDefault()
    axios.post("https://vast-teal-tuna-cap.cyclic.app/users/register",state)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    }
  return (
    <div>
        <h1>SignupPage</h1>
        <form onSubmit={handlesubmit}>
           name :- <input type="text"  onChange={(e)=>dispatch({type:"Name",payload:e.target.value})} name='name' value={name} placeholder='Name' /> <br />
           Email :- <input type="text"  onChange={(e)=>dispatch({type:"Email",payload:e.target.value})} name='email' value={email} placeholder='email' /> <br />
           Password :- <input type="text"  onChange={(e)=>dispatch({type:"Password",payload:e.target.value})} name='password' value={password} placeholder='Password' /> <br />
           Gender:- <input type="text"  onChange={(e)=>dispatch({type:"Gender",payload:e.target.value})} name='gender' value={gender} placeholder='Gender' /> <br />
           <input type="submit" /> 
        </form>
    </div>
  )
}
