import Login from "./pages/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import HomeAfterLoggedIn from "./pages/AfterLoggedin/home/home";
// import PaymetPage from "./pages/AfterLoggedin/payment/payment";
// import OTPPage from "./pages/AfterLoggedin/payment/otp";
import PaymentPic from "./pages/AfterLoggedin/screenshots/PaymentPic";
function App() {
  return (
    <>
    {/* <IndexPage/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<HomeAfterLoggedIn/>}/>
        {/* <Route path="/payment" element={<PaymetPage/>}/>
        <Route path="/payment/otp" element={<OTPPage/>}/> */}
        <Route path="/payment" element={<PaymentPic/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
