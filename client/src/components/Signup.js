import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'


const Signup = ({updateUser}) => {

        //storing data from the form
        const [formData, setFormData] = useState({
            first_name: "",
            last_name: "",
            email: "",
            zipcode: "",
            username: "",
            password: ""
        })
    
        //to display the errors
        const [errors, setErrors] = useState([])
    
        //gives you access to the history instance that you may use to navigate.
        const history = useHistory()
    
        const handleSubmit = (e) => {
            e.preventDefault()
            setFormData(formData);
            console.log(formData)
    
            //make post request on submit
           fetch(`/signup`,{
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
          })
          .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/profile`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    
          //reset form
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            zipcode: "",
            username: "",
            password: ""
          })
        }
    
        const handleChange = (e) => {
            setFormData({...formData,
                [e.target.name]: e.target.value
                })
        }

  return (
    <div>
        <h2>Sign Up</h2>
        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        <form onSubmit={handleSubmit}>
            <label >First Name:</label><br></br>
                <input type="text" id="first_name" name="first_name" value ={formData.first_name}  onChange={handleChange}/><br></br>
            <label >Last Name:</label><br></br>
                <input type="text" id="last_name" name="last_name" value ={formData.last_name}  onChange={handleChange}/><br></br>
            <label >Email:</label><br></br>
                <input type="text" id="email" name="email" value ={formData.email}  onChange={handleChange}/><br></br>
            <label >Zip Code:</label><br></br>
                <input type="text" id="zipcode" name="zipcode" value ={formData.zipcode}  onChange={handleChange}/><br></br>
            <label >Username:</label><br></br>
                <input type="text" id="username" name="username" value ={formData.username}  onChange={handleChange}/><br></br>
            <label>Password:</label><br></br>
                <input type="password" id="password" name="password" value ={formData.password}  onChange={handleChange}/><br></br>
                <input type="submit" value="Sign Up"/>
        </form>
    </div>
  )
}

export default Signup
        // <Form onSubmit={handleSubmit}>
        //     <Form.Input 
        //       type="text" 
        //       id="first_name" 
        //       placeholder='first name'
        //       name="first_name" 
        //       value={formData.first_name}  
        //       onChange={handleChange}
        //     />
        //     <Form.Input 
        //       type="text" 
        //       id="last_name" 
        //       placeholder='last name'
        //       name="last_name" 
        //       value={formData.last_name}  
        //       onChange={handleChange}
        //     />
        //     <Form.Input 
        //       type="text" 
        //       id="email" 
        //       placeholder='email'
        //       name="email" 
        //       value={formData.email}  
        //       onChange={handleChange}
        //     />
        //     <Form.Input 
        //       type="text" 
        //       id="zipcode" 
        //       placeholder='zipcode'
        //       name="zipcode" 
        //       value={formData.zipcode}  
        //       onChange={handleChange}
        //     />
        //     <Form.Input 
        //       type="text" 
        //       id="username" 
        //       placeholder='username'
        //       name="username" 
        //       value={formData.username}  
        //       onChange={handleChange}
        //     />
        //     <Form.Input 
        //       type="password" 
        //       id="password"
        //       placeholder='password' 
        //       name="password" 
        //       value={formData.password}  
        //       onChange={handleChange}
        //     />
        // </Form>