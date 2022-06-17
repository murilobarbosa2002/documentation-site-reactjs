import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './screens/Home'
import { DocsPage } from './screens/Docs'
export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='docs' element={<DocsPage />} />
            </Routes>
        </Router>
    )
}