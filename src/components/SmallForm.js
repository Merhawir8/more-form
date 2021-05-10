import React, {useState} from 'react';

const SmallForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChangeHandler = (event) => {
        setForm({
            ...form, //spread out what is already instated 
            [event.target.name]:event.target.value
        })
    }

    const nameValid = (str) => {
        return str.length >=2;
    }
    
    const emailValid = (str) => {
        return str.length === 5;
    }

    const passwordValid = (str) => {
        return str.length >= 8;
    }

    const allValid = (allInputs) =>{
        return nameValid(allInputs.firstName) && nameValid(allInputs.lastName) && emailValid(allInputs.email) && passwordValid(allInputs.password);
    }
    return (
        <div className="mx-auto center">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6 mx-auto center mb-3">
                        <label for="firstName">First Name:</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="firstName" />
                        {!nameValid(form.firstName) && form.firstName.length !=0 && <span className="alert-danger">must be at least 2 characters</span>}
                    </div>
                    <div className="form-group col-md-6 mx-auto center m-3">
                        <label for="lastName">Last Name:</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="lastName"/>
                        {!nameValid(form.lastName) && form.lastName.length !=0 && <span className="alert-danger">must be at least 2 characters</span>}
                    </div>
                </div>

                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="email">Email:</label>
                    <input type="email" onChange={onChangeHandler} className="form-control" name="email"/>
                    {!emailValid(form.email) && form.email.length != 0 &&  <span className="alert-danger">must be at least 5 characters</span>}
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="Password">Password:</label>
                    <input type="password" onChange={onChangeHandler} className="form-control" name="password"/>
                    {!passwordValid(form.password)  &&  form.password.length != 0 &&<span className="alert-danger">must be at least 8 characters</span>}
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" onChange={onChangeHandler} className="form-control" name="confirmPassword"/>
                    {!passwordValid(form.password) &&  form.password.length != 0 &&<span className="alert-danger">must be at least 8 characters</span>}
                </div>
                {
                    allValid(form) ?
                    <button type="submit" className="btn btn-primary btn-Ig m-3">Sign in</button> :
                    <button type="submit" className="btn btn-primary btn-Ig m-3" disabled>Sign in</button>
                }

            </form>
            <div>
                <h1>Form Result</h1>
            <h3>Your Form Data</h3>
            <p>First Name: {form.firstName}</p>
            <p>Last Name: {form.lastName}</p>
            <p>Email: {form.email}</p>
            <p>Password: {form.password}</p>
            <p>Confirm Password: {form.confirmPassword}</p>
        </div>
        </div>
    )
}

export default SmallForm;