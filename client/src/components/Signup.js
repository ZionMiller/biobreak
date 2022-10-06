import React, {useState} from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
// add user agreement & other policies, only allow signup if checked

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
        const navigate = useNavigate()

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
                    navigate(`/profile`)
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
    <Segment placeholder>
        <Grid relaxed='very' stackable>
        <Grid.Column style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
        }}>
        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        {/* {errors? <div align-items='center'>{errors}</div>:null} */}
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                icon='user'
                iconPosition='left'
                placeholder='First Name'
                type="text" 
                id="first_name" 
                name="first_name" 
                value ={formData.first_name}
                onChange={handleChange}
            />
            <Form.Input
                icon='user'
                iconPosition='left'
                placeholder='Last Name'
                type="text" 
                id="last_name" 
                name="last_name" 
                value ={formData.last_name}  
                onChange={handleChange}
            />
            <Form.Input 
                icon='mail'
                iconPosition='left'
                placeholder='Email'
                type="text" 
                id="email" 
                name="email" 
                value ={formData.email}  
                onChange={handleChange}
            />
            <Form.Input
                icon='location arrow'
                iconPosition='left'
                placeholder='Zipcode'
                type="text" 
                id="zipcode" 
                name="zipcode" 
                value ={formData.zipcode}  
                onChange={handleChange}
             />
            <Form.Input 
                icon='user'
                iconPosition='left'
                placeholder='Username'
                type="text" 
                id="username" 
                name="username" 
                value ={formData.username}  
                onChange={handleChange}
            />
            <Form.Input
                icon='lock'
                iconPosition='left'
                placeholder='password'
                type="password" 
                id="password" 
                name="password" 
                value ={formData.password}  
                onChange={handleChange}
            />
            <Button style={{backgroundColor: "#FFB52E"}} onSubmit={handleSubmit}>Signup</Button>
        </Form>
        </Grid.Column >
        </Grid>
    </Segment>
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