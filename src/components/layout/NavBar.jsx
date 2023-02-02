import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <header className="bg-white">
            <nav className="flex items-center px-10 mb-3">
                <img className="my-10 ml-28 mr-24" src="../../../logo1.svg" width="160rem"></img>

                <ul className="flex text-link-color font-semibold mb-1">
                    <li className="plink">
                        <Link to="/">Início</Link>
                    </li>
                    <li className="plink">
                        <Link to="/sobreNos">Sobre Nós</Link>
                    </li>
                    <li className="plink">
                        <Link to="/cursos">Cursos</Link>
                    </li>
                    <li className="plink">
                        <Link to="/parceiros">Parceiros</Link>
                    </li>
                    <li className="plink">
                        <Link to="/transparencia">Transparência</Link>
                    </li> 
                    <li className="plink">
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>

                <div className="flex text-lg text-black/50 rounded-3xl pl-6 pr-10 py-2 ml-10 mr-5 border-2 border-black/20">
                    <img width="15rem" src="../../../lupa.svg"></img>
                    <input className="ml-2 mr-16" type="text" placeholder="Busca por um assunto..."></input>
                </div>

                <div className="space-x-5">  
                    <button className="rounded-3xl px-9 py-1 text-bot-color border border-bot-color">Entrar</button>
                    <button className="rounded-3xl px-9 py-1 bg-bot-color border-bot-color text-white font-medium">Cadastrar</button>
                </div>
            </nav>
        </header>
    )
}