import { Link } from "react-router-dom";

function Erro() {
    return (
        <div className="princ">
            <h2>Ops! Parece que essa página não existe!</h2>
            <span>Encontramos essas páginas aqui:</span>
            <Link to="/">Receitas</Link>
            <Link to="/add">Adicionar</Link>
        </div>
    )
}

export default Erro;