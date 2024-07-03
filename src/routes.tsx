import { Routes, Route } from "react-router-dom"

//importacion de todas las rutas de la app
import Home from "./pages/Home";

export const Router:React.FC = () => {
    return (
            <Routes>

                {/* Paginas de login */}
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />

            </Routes>
    );
}

export default Router;