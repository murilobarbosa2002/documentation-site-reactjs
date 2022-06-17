import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DocsPage } from "./screens/Docs"
import { HomePage } from "./screens/Home"
export function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="docs" element={<DocsPage />} />
        </Routes>
      </Router>
    )
}