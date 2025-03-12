import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control
        id="wd-username"
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        placeholder="username"
        className="mb-2"
      />
      <Form.Control
        id="wd-password"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100">
        Sign in
      </Button>
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
