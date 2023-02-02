import { Link } from "react-router-dom"

export default function Footer() {
    
    return (
        <footer className="text-white">
            <div className="grid grid-rows-2 justify-items-center items-center bg-color-fot1 hfooter1">
                <p className="text-white text-3xl font-semibold mt-1">Realização</p>
                <div className="grid grid-cols-2 self-start">
                    <img className="mr-8" src="../../public/lais1.svg" width="200rem"></img>
                    <img className="ml-16" src="../../public/ufrn.svg" width="180rem"></img>
                </div>
            </div>

            <div className="grid grid-cols-3 justify-items-center items-center hfooter2 bg-color-fot2">
                <div className="self-start ml-auto mt-20">
                    <img className="mb-2" src="../../public/lais1.svg" width="100rem"></img>
                    <p className="text-xl font-light">Laboratório de Inovação<br></br>Tecnológica em Saúde</p>
                </div>
                <div>
                    <h2 className=" font-medium mb-2">Links Úteis</h2>
                    <ul className="text-2xl font-light">
                        <li className="plink">
                            <Link to="/">Início</Link>
                        </li>
                        <li className="plink">
                            <Link to="/sobreNos">Sobre Nós</Link>
                        </li>
                        <li className="plink">
                            <Link to="/parceiros">Módulos</Link>
                        </li>
                        <li className="plink">
                            <Link to="/parceiros">Parceiros</Link>
                        </li>
                        <li className="plink">
                            <Link to="/transparencia">Transparência</Link>
                        </li> 
                    </ul>
                </div>
                <div className="self-start mr-auto mt-20">
                    <h2 className="font-medium mb-2">Redes Sociais</h2>
                    <div className="grid grid-cols-3 justify-items-center items-center mt-5">
                        <img className="" src="../../public/facebook.svg" width="10rem"></img>
                        <img className="" src="../../public/twitter.svg" width="20rem"></img>
                        <img className="" src="../../public/instagram.svg" width="20rem"></img>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center hfooter3 bg-color-fot3">
                <p className="font-light text-2xl">2022 &#169; LAIS (HUOL). Todos os direitos reservados </p>
            </div>
        </footer>
    )
}