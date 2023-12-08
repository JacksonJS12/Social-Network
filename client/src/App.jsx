import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/home/Home";
import About from "./components/about/About";
import Create from "./components/create-post/Create";
function App() {
    return (
        <>
            <div id="box">
                <Header />

                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
