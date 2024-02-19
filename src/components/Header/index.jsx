import { Link } from 'react-router-dom'
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <Link to="/">
                <span>LeonardoCave.dev</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}

export default Header