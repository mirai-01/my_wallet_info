// Signup.js

// Imports
import React, {useRef, useState} from 'react';
import {Card, Button, Form, Alert} from 'react-bootstrap';
import { useAuth } from "../Contexts/AuthContext"

// Functional Component
function Signup() {

    // State Variables
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Refs
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const { signup, currentUser } = useAuth();
    

    // Handle Submit function
    async function handleSubmit(e){
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
    
        }catch {
            setError("Failed to create an account");
        }

    setLoading(false)
    }

    // Return
  return( 
    <>
        {/* Card */}
        <Card> 
            
            {/* Card Body */}
            <Card.Body>

                {/* Heading */}
                <h2 className="text-center mb-3">My Wallet Info</h2>

                {/* Sub Heading */}
                <h4 className="text-center mb-3">Sign Up</h4>

                {/* Error */}
                {error && <Alert variant="danger" className="text-center mb-3">{error}</Alert>}

                {/* See the current user - TEMP */}
                {currentUser && JSON.stringify(currentUser.email)}
            

            {/* Form */}
            <Form onSubmit={handleSubmit}>

                {/* Email Form Group */}
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                {/* Password Form Group */}
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                {/* Confirm Password Form Group */}
                <Form.Group id="password">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                
                {/* Form Submit Button */}
                <Button className="w-100 mt-3" type="submit" disabled={loading}>
                    Sign Up
                </Button>
            </Form>
            </Card.Body>
        </Card>

        {/* Login Suggestion */}
        <div className="w-100 text-center mt-2">
            Already have an account? Login
        </div>
    </>)
}


// Exports
export default Signup;