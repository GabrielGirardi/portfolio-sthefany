import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import { Error404 } from "@/pages/404";

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}

export default router;