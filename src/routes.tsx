import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './screens/Home'
import { DocsPage } from './screens/Docs'
export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='docs' element={<DocsPage />} />
            </Routes>
        </BrowserRouter>
    )
}