import React, {useState} from 'react';

const Results = (props) => {
    const [result, setResult] = useState;
    return (
        <div>
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>
        </div>

    )
}

export default Results;