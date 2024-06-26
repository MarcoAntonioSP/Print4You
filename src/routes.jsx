const { BrowserRouter , Routes } = from "react-router-dom";
import Home from './pages/Home';
import Home from './pages/secondpage';
function Approutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Secondpage" element={< Secondpage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes;