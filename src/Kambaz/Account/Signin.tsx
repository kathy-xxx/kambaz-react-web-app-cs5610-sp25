import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

const DEMO_ACCOUNTS = {
  FACULTY: { username: "iron_man", password: "stark123" },
  STUDENT: { username: "dark_knight", password: "wayne123" },
  ADMIN: { username: "ada", password: "123" },
} as const;

type Creds = { username: string; password: string };

export default function Signin() {
  const [credentials, setCredentials] = useState<Creds>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  const fillDemo = (role: keyof typeof DEMO_ACCOUNTS) => {
    setCredentials({ ...DEMO_ACCOUNTS[role] });
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <div className="mb-3 small text-muted">
        <div className="mb-1">Try a demo account:</div>
        <div className="d-flex gap-2 flex-wrap">
          <Button
            variant="outline-secondary"
            size="sm"
            id="wd-demo-faculty"
            onClick={() => fillDemo("FACULTY")}
            aria-label="Fill faculty demo credentials"
          >
            Faculty — iron_man / stark123
          </Button>
          <Button
            variant="outline-secondary"
            size="sm"
            id="wd-demo-student"
            onClick={() => fillDemo("STUDENT")}
            aria-label="Fill student demo credentials"
          >
            Student — dark_knight / wayne123
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            id="wd-demo-admin"
            onClick={() => fillDemo("ADMIN")}
          >
            Admin — ada / 123
          </Button>
        </div>
      </div>
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
