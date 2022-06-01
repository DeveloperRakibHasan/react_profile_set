import Illustration from "../login/Illustration";
import LogForm from "../login/LogForm";

export function Login() {
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="mb-20">Login to your account</h1>

        <div className="grid gap-10 grid-flow-row grid-cols-2">
          <Illustration />
          <LogForm />
        </div>
      </div>
    </section>
  );
}

export default Login;
