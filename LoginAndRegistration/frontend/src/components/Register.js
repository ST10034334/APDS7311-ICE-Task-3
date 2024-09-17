import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap/css/bootstrap-grid.min.css";
import "../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../assets/dropdown/css/style.css";
import "../assets/theme/css/style.css";
import "../assets/mobirise/css/mbr-additional.css?v=Wo4LBh";
import "../assets/mobirise/css/mbr-additional.css?v=Wo4LBh";



{/* Site made with Mobirise Website Builder v5.9.18, https://mobirise.com */}
function Register() {

//Initializes form state with empty name and password.
const [form, setForm] = useState({
name: "",
password: "" 
});

//Hook to programmatically navigate within the app.
const navigate = useNavigate();

//Function to update form state.
function updateForm(value) {
     //Merge previous state with new values.
  return setForm( (prev) => {
    return {...prev, ...value};
  });
};

//Function to handle form submission.
async function onSubmit(e) {

    //Prevents default form submission behavior.
    e.preventDefault();

     //Creates a new user object from the form state.
    const newUser = {...form};

    //Sends POST request to the server with the user data.
    await fetch("https://localhost:3001/user/signup", {
       method: "POST",
       //Specifies content type as JSON.
       headers: {
        "Content-Type": "application/json",
       },
       //Converts user object to JSON string.
       body: JSON.stringify(newUser),
    })
    .catch(error => {
    //Shows an alert if there is an error.
       window.alert(error);
       return;
    });

    //Resets form state after successful submission.
    setForm({ name: "", password: ""});

   //Redirects to the posts page.
    navigate("/");
}


    return (
<section data-bs-version="5.1" className="form5 cid-uoDftvCWyQ" id="form02-0">
    
    
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 content-head">
                <div className="mbr-section-head mb-5">
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong><br></br></strong><br></br><strong>Register</strong></h3>
                    
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                {/* Form element with onSubmit event handler */}
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
                            //Binds name input value to form state.
                            value={form.name} 
                            //Update state on change.
                            onChange={ (e) => updateForm({ name: e.target.value})}/>
                        </div>
                        
                        
                        <div className="col-12 form-group mb-3" data-for="textarea">
                            <input 
                            type= "password" 
                            id="password" 
                            placeholder="Password" 
                            className="form-control" 
                            //Binds password input value to form state.
                            value={form.password}
                            //Update state on change.
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

export default Register;
