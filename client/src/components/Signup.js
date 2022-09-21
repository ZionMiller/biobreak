import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


const Signup = ({updateUser}) => {

        //storing data from the form
        const [formData, setFormData] = useState({
            name: "",
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
                    history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    
          //reset form
          setFormData({
            name: "",
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
        <label >Full name:</label><br></br>
        <input type="text" id="name" name="name" value ={formData.name}  onChange={handleChange}/><br></br>
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