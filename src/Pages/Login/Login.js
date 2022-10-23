import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
    }

    return (
      <div className="border p-4 rounded shadow-md">
        <h3 className="text-center text-primary">Login Now</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-muted"></Form.Text>
        </Form>
      </div>
    );
};

export default Login;