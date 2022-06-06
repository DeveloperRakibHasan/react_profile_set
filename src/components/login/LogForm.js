import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import MesiaSignin from "../signmedia/MesiaSignin";
import Form from "../signup/Form";
import TextInput from "../signup/TextInput";
import LoginButton from "./LoginButton";

function LogForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const navigate = useHistory();

  const histry = useHistory();

  const { login, googleSignIn, facebookSignIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      histry.push("/profile");
    } catch (err) {
      setLoading(false);
      setError("Faild to login");
    }
  }

  const handleGoogleSignin = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/profile");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleFacebookChange = async (e) => {
    e.preventDefault();

    try {
      await facebookSignIn();
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

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
      <p className="mt-4">
        You don't have any account! please
        <Link className="text-blue-400 ml-2" to="/signup">
          Sign Up
        </Link>
      </p>
      {error && <p className="p-2 bg-red-300 rounded-lg mt-2">{error}</p>}
      <MesiaSignin
        handleChange={handleGoogleSignin}
        handleFacebookChange={handleFacebookChange}
      />
    </Form>
  );
}

export default LogForm;
