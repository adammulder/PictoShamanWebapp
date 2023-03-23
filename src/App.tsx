import Navbar from "./components/Navbar"
import routes from "./config/routes"
import { Routes, Route, HashRouter } from "react-router-dom"
import './app.css'


function App() {


  return (
   
    <HashRouter>
    <Navbar />
          <Routes>
            { routes.map((route, index) =>(
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component />
                }
                />
            ))}
          </Routes>
    </HashRouter>
  )
}

export default App