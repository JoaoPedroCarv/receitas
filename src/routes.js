import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/cabecalho";
import Inicio from "./paginas/adicionar";
import Erro from "./paginas/erro";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                
                <Route path="*" element={<Erro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;

//<Route path="/add" element={<Sobre />}></Route>