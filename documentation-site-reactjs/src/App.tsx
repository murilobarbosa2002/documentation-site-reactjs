import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './routers/router'
export function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}
