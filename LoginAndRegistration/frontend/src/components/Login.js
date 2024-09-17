
import React, { useState } from 'react';import { useNavigate } from 'react-router-dom';
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap/css/bootstrap-grid.min.css";
import "../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../assets/dropdown/css/style.css";
import "../assets/theme/css/style.css";
import "../assets/mobirise/css/mbr-additional.css?v=Wo4LBh";
import "../assets/mobirise/css/mbr-additional.css?v=Wo4LBh";


{/* The IIE (2024) demonstrates how to work with backend API - Login Page */}
{/* Site made with Mobirise Website Builder v5.9.18, https://mobirise.com */}
function Login() {
const [form, setForm] = useState({
name: "",
password: "" 
});

const navigate = useNavigate();

function updateForm(value) {
  return setForm( (prev) => {
    return {...prev, ...value};
  });
};


async function onSubmit(e) {
    e.preventDefault();

    const newUser = {...form};

   const response = await fetch("https://localhost:3001/user/login", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(newUser),
    })
    .catch(error => {
       window.alert(error);
       return;
    });

//Waits for the response to be converted to JSON.
const data = await response.json();

//Extracts the `token` and `name` properties from the JSON data.
const { token, name } = data;

//Logs the `name` and `token` to the console.
console.log(name + " " + token);

//Stores the JWT token in localStorage for future use.
localStorage.setItem("jwt", token);


    setForm({ name: "", password: ""});
    navigate("/");
}


    return (
<section data-bs-version="5.1" className="form5 cid-uoDftvCWyQ" id="form02-0">
    
    
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 content-head">
                <div className="mbr-section-head mb-5">
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong><br></br></strong><br></br><strong>Login</strong></h3>
                    
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                <form onSubmit={onSubmit} className="mbr-form form-with-styler" data-form-title="Form Name">
                    <div className="row">
                        <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Thanks for filling out the form!</div>
                        <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">
                            Oops...! some problem!
                        </div>
                    </div>
                    <div className="dragArea row">
                        <div className="col-md col-sm-12 form-group mb-3" data-for="name">
                            <input 
                            type="text" 
                            id="name" 
                            placeholder="Full Name" 
                            className="form-control" 
                            value={form.name} 
                            onChange={ (e) => updateForm({ name: e.target.value})}/>
                        </div>
                        
                        
                        <div className="col-12 form-group mb-3" data-for="textarea">
                            <input 
                            type= "password" 
                            id="password" 
                            placeholder="Password" 
                            className="form-control" 
                            value={form.password}
                            onChange={ (e) => updateForm({ password: e.target.value})} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn"><button type="submit" className="btn btn-primary display-7">Save</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>


);
};

export default Login;

{/* REFERENCE LIST:
The IIE. 2024. LAB GUIDE 2024 [APDS7311/w Learn]. The Independent Institute of Education:
Unpublished.    
*/}