import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/auth/SignUpPage/SignUpPage";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      <Toaster />
    </Layout>
  )
}