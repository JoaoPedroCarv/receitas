import { BrowserRouter, Routes, Route } from "react-router-dom";


import DetalhesReceita from "./paginas/detalhesReceitas";

import Header from "./componentes/cabecalho";

import Erro from "./paginas/erro";

import ListaTitulosReceitas from "./paginas/listarReceitas";
import CriarReceita from "./paginas/novaReceita";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ListaTitulosReceitas />}></Route>
                <Route path="/detalhes/:id" element={<DetalhesReceita />} />
                <Route path="*" element={<Erro />}></Route>
                <Route path="/add" element={<CriarReceita />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;

//<Route path="/add" element={<Sobre />}></Route>