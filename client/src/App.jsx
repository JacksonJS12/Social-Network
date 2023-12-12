import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/home/Home";
import About from "./components/about/About";
import Create from "./components/create-post/Create";
import Login from "./components/login/Login";
import Register from "./components/register/Rgister";
function App() {
    return (
        <>
            <div id="box">
                <Header />

                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
