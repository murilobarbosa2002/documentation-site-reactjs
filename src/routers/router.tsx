import { Routes, Route } from 'react-router-dom'
import { DocsPage } from "../screens/Docs"
import { HomePage } from "../screens/Home"
export function AppRouter(){
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='docs' element={<DocsPage />} />
        </Routes>
    )
}