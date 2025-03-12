import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div id="wd-profile-screen" style={{ maxWidth: "400px", margin: "auto" }}>
      <h3 className="mb-3">Profile</h3>
      {profile && (
        <div>
          <Form.Control
            id="wd-username"
            defaultValue={profile.username}
            placeholder="Username"
            className="mb-2"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <Form.Control
            id="wd-password"
            defaultValue={profile.password}
            placeholder="Password"
            type="password"
            className="mb-2"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <Form.Control
            id="wd-firstname"
            defaultValue={profile.firstName}
            placeholder="First Name"
            className="mb-2"
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <Form.Control
            id="wd-lastname"
            defaultValue={profile.lastName}
            placeholder="Last Name"
            className="mb-2"
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <Form.Control
            id="wd-dob"
            defaultValue={profile.dob}
            type="date"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <Form.Control
            id="wd-email"
            defaultValue={profile.email}
            type="email"
            placeholder="Email"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Form.Select
            id="wd-role"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            defaultValue="User"
            className="mb-3"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Faculty">Faculty</option>
            <option value="Student">Student</option>
          </Form.Select>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
