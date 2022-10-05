import React, {useState} from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'
import Signup from './Signup';


const Login = ({updateUser}) => {

        //storing data from the form
        const [formData, setFormData] = useState({
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
    
            //make post request on submit
           fetch(`/login`,{
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
                    updateUser(user);
                    navigate("/profile")
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    
          //reset form
          setFormData({
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
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column       
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
        }}>
        {errors? <div align-items='center'>{errors}</div>:null}
          <Form onSubmit={handleSubmit}>
          {/* <label style={{textAlign: 'center'}}>First Name</label> */}
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
            <Button style={{backgroundColor: "#FFB52E"}} onSubmit={handleSubmit}>Login</Button>
          </Form>
        </Grid.Column>
          <Signup position='center'/>
        <Grid.Column verticalAlign='middle'>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
    
    )
  }
  
  export default Login
  
  {/* <h2>Log In</h2>
  {errors? <div>{errors}</div>:null}
  <form onSubmit={handleSubmit}>
  <label >Username:</label><br></br>
  <input type="text" id="username" name="username" value ={formData.username}  onChange={handleChange}/><br></br>
  <label>Password:</label><br></br>
  <input type="password" id="password" name="password" value ={formData.password}  onChange={handleChange}/><br></br>
  <input type="submit" value="Log In"/>
  </form> */}