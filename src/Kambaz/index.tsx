import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import { setCourses } from "./Courses/reducer";
export default function Kambaz() {
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      dispatch(setCourses(courses));
      console.log(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  const addCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
    window.location.reload();
  };
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    dispatch(
      setCourses(courses.filter((course: any) => course._id !== courseId))
    );
    await fetchCourses();
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c: any) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
