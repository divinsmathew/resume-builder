import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App initialMode="create" />} />
                <Route path="/create" element={<App initialMode="create" />} />
                <Route path="/view" element={<App initialMode="view" />} />
                <Route path="/edit" element={<App initialMode="edit" />} />
            </Routes>
        </Router>
    );
}
