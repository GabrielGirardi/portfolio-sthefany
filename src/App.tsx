import { BrowserRouter } from "react-router-dom";
import Header from "@/components/layout/header";
import Layout from "@/components/layout/content";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-[--base] w-full min-h-screen">
                <Header />
                <Layout />
            </div>
        </BrowserRouter>
    )
}

export default App
