import { useEffect } from "react";
import PeopleTable from "./Table";
import * as coursesClient from "../client";
import { useDispatch, useSelector } from "react-redux";
import { setPeople } from "./reducer";
import { useParams } from "react-router-dom";
export default function People() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { people } = useSelector((state: any) => state.peopleReducer);
  const fetchUsers = async () => {
    const people = await coursesClient.findUsersForCourse(cid as string);
    dispatch(setPeople(people));
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);
  return <PeopleTable users={people} />;
}
