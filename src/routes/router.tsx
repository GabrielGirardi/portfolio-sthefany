import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import { Error404 } from "@/pages/404";
import About from "@/pages/About";

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<Error404/>}/>
            <Route path="/sobre" element={<About/>}/>
        </Routes>
    )
}

export default router;