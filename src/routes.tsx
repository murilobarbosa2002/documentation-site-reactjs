import { Routes, Route } from "react-router-dom"
import { HomePage } from "./screens/Home"
import { DocsPage } from "./screens/Docs"
export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
        </Routes>
    )
}
