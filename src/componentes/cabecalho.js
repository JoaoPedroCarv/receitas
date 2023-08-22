import { Link } from "react-router-dom";
import './estilo.css'

function Header() {
    return (
        <header>
            <h2>Receitas On-Line</h2>

            <div className="">
                <Link to="/">Receitas</Link>
                <Link to="/add">Adicionar receita</Link>
            </div>
        </header>
    )
}

export default Header;