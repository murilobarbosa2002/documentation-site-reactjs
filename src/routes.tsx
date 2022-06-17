import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "./screens/home"
import { DocsPage } from "./screens/docs"
export function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="docs" element={<DocsPage />} />
            </Routes>
        </Router>
    )
}
