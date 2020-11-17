import React, { useState, useEffect } from "react";
import { PageLayout, Input, PasswordInput, Button, Spinner } from "../common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  margin-top: 20px;
  color: #000;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formFields.username}
              onChange={handleChange}
            />

            <PasswordInput
              value={formFields.password}
              onChange={handleChange}
            />
          </>
        )}

        <Button secondary type="submit" disabled={loading}>
          {loading ? "Loading" : "Login"}
        </Button>

        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button primary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
