import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"
import "bootstrap/dist/css/bootstrap.min.css"
import First from "./components/First"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<First />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/forgotPassword" element={<ForgotPassword />}/>
      <Route path="/resetPassword/:token" element={<ResetPassword />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App