import {Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/home";
import Create from "./views/create";
import Preview from "./views/preview";
import CvNavbar from "./components/Nav";
import Error from "./views/404";
function App() {
    return (
        <div className="App">
            <CvNavbar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/preview" element={<Preview />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
