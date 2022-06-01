import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Form from "../signup/Form";
import TextInput from "../signup/TextInput";
import LoginButton from "./LoginButton";

function LogForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const histry = useHistory();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      histry.push("/");
    } catch (err) {
      setLoading(false);
      setError("Faild to login");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="email"
        Placeholder="Enter Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        Placeholder="Enter Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton type="submit" disabled={loading}>
        Login
      </LoginButton>
      {error && <p className="p-2 bg-red-300 rounded-lg mt-2">{error}</p>}
    </Form>
  );
}

export default LogForm;
