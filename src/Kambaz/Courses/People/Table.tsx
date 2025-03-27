import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as enrollmentsClient from "../../Enrollments/client";
import * as accountClient from "../../Account/client";
import { setEnrollments } from "../../Enrollments/reducer";
import { setPeople } from "./reducer";
import { useEffect } from "react";
export default function PeopleTable() {
  const { cid } = useParams();
  const { people } = useSelector((state: any) => state.peopleReducer);
  const fetchPeople = async () => {
    const people = await accountClient.findAllUsers();
    dispatch(setPeople(people));
  };
  useEffect(() => {
    fetchPeople();
  }, []);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const fetchEnrollments = async () => {
    const enrollments = await enrollmentsClient.getEnrollments();
    dispatch(setEnrollments(enrollments));
  };
  useEffect(() => {
    fetchEnrollments();
  }, []);
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people
            .filter((user: any) =>
              enrollments.some(
                (enrollment: any) =>
                  enrollment.user === user._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
