import React from "react"
import './App.css';

function App() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "",  email: ""}
    )
    
    console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form className="form">
            <input className="input"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input className="input"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
        />
         <input className="input"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
            />
        </form>
    )
}

export default App;
