import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Info from "./components/Info";

const App = () => {
    return (
        <div className="container mx-auto mt-5 flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 md:m-6">
                <ul className=" text-blue-500 border border-b-4">
                    <li className="border border-b-2 p-2">
                        <Link className="text-decoration-none" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="border border-b-2 p-2 my-2">
                        <Link className="text-decoration-none" to="/create">
                            Create
                        </Link>
                    </li>
                    <li className="border border-b-2 p-2">
                        <Link className="text-decoration-none" to="/show">
                            Show
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-3/4">
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/show" element={<Show />}>
                        <Route path="/show/:id" element={<Info />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;
