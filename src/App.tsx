import { BrowserRouter as Router } from "react-router-dom"
import { AppRouter } from './routes'
export function App() {
  return(
      <Router>
        <AppRouter />
      </Router>
    )
}