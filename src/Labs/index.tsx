import Lab1 from "./Lab1"
import Lab2 from "./Lab2"
import { Routes, Route, Navigate } from "react-router-dom"
export default function Labs() {
    return (
        <div>
            <h1>Labs</h1>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
            </Routes>
        </div>
    );
}