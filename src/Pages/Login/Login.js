import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

  const [error, setError] = useState('')
  const {signIn, setUser} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const form = event.target;
         const email = form.email.value;
         const password = form.password.value;

      signIn(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          form.reset()
          setError('');
      })
        .catch(error => {
          console.log(error);
          setError(error.message)
      })
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
          <Form.Text className="text-muted d-inline">
           {error}
          </Form.Text>
        </Form>
      </div>
    );
};

export default Login;