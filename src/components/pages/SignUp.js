import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Checkbox from "../signup/Checkbox";
import Form from "../signup/Form";
import Illustration from "../signup/Illustration";
import SignupButton from "../signup/SignupButton";
import TextInput from "../signup/TextInput";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const histry = useHistory();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      histry.push("/profile");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Faild to create an account");
    }
  }

  return (
    <section className="bg-gray-100 py-10">
      <div className="container">
        <h1 className="mb-20">Create an account</h1>

        <div className="grid gap-10 grid-flow-row grid-cols-2">
          <Illustration />
          <Form onSubmit={handleSubmit}>
            <TextInput
              required
              type="text"
              Placeholder="Enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextInput
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
              required
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextInput
              required
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Checkbox
              text="I agree to the Terms & condition"
              required
              value={agree}
              onChange={(e) => setAgree(e.target.value)}
            />

            <SignupButton disabled={loading} type="submit">
              Sign Up
            </SignupButton>

            {error && <p className="my-2 w-full p-4 bg-red-300">{error}</p>}

            <div className="mt-4 text-center">
              Already have an account?
              <Link to="/login" className="cursor-pointer mx-1 text-blue-500">
                Log In
              </Link>
              instead.
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
