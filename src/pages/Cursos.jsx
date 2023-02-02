import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { avaliacaoCondicional } from '../FuncoesUtilitarias.jsx'
import { Link } from "react-router-dom"

export default function Cursos() {
    
    const [modulos, setModulos] = useState([])
    const [filtro, setFiltro] = useState("Covid 19")
    const [tamanhoArray, setTamanhoArray] = useState([])

    const limite = 6
    const [pagina, setPagina] = useState(1)
    const qntPaginas = Math.ceil(tamanhoArray / limite)

    const getModulos = async() => {
        try {
          if (filtro == "Covid 19") {
            const {data} = await axios.get(`http://localhost:3004/cursos?cateroria=Covid+19&_page=${pagina}&_limit=6`)
            setModulos(data)
          } else if (filtro == "Síflis e outras ist") {
            const {data} = await axios.get(`http://localhost:3004/cursos?cateroria=Síflis+e+outras+ist&_page=${pagina}&_limit=6`)
            setModulos(data)
          } else if (filtro == "Preceptoria"){
            const {data} = await axios.get(`http://localhost:3004/cursos?cateroria=Preceptoria&_page=${pagina}&_limit=6`)
            setModulos(data)
          } else if (filtro == "Doenças raras"){
            const {data} = await axios.get(`http://localhost:3004/cursos?cateroria=Doenças+raras&_page=${pagina}&_limit=6`)
            setModulos(data)
          } else if (filtro == "WebPalestras"){
            const {data} = await axios.get(`http://localhost:3004/cursos?cateroria=WebPalestras&_page=${pagina}&_limit=6`)
            setModulos(data)
          } else if (filtro == "Sistema prisional"){
            const {data} = await axios.get(`http://localhost:3004/cursos?cateroria=Sistema+prisional&_page=${pagina}&_limit=6`)
            setModulos(data)
          } else if (filtro == "OPAS"){
            const {data} = await axios.get(`http://localhost:3004/cursos?cateroria=OPAS&_page=${pagina}&_limit=6`)
            setModulos(data)
          }
        } catch (error) {
          console.log(error);
        }
    }

    const getTamanho = async() => {
        try {
            const {data} = await axios.get(`http://localhost:3004/cursos?cateroria=${filtro}`)
            setTamanhoArray(data.length)
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        getModulos();
        getTamanho();
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [filtro, pagina]);

    useEffect(() => {
      setPagina(1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [filtro]);

    function formataNav(valorFiltro){
        return filtro == valorFiltro ? "filtroMod active" : "filtroMod"
    }

    function modificarResumo(string){
        return string.length - 9
    }

    function imprimePagina(pag){
      return pag?.toString()
    }

    return (
        <div className='grid grid-cols-1 justify-items-center items-center caixa w-[93rem] mb-64'>
            <div className="justify-self-start marcadores mt-2">
                <h3 className="text-bot-color inline-block">Início&nbsp;/&nbsp;Cursos&nbsp;</h3>
                <h3 className="text-link-color inline-block"> / Módulos</h3>
            </div>

            <h1 className="text-color-fot1 text-6xl my-10">Módulos Educacionais</h1>

            <nav className='justify-self-start'>
                <ul className='flex w-[90rem] text-link-color text-[1.6rem] font-semibold justify-evenly'>
                    <li className={formataNav("Covid 19")} onClick={() => setFiltro("Covid 19")}>Covid 19</li>
                    <li className={formataNav("Síflis e outras ist")} onClick={() => setFiltro("Síflis e outras ist")}>Sífilis e outras Ist's</li>
                    <li className={formataNav("Preceptoria")} onClick={() => setFiltro("Preceptoria")}>Preceptoria</li>
                    <li className={formataNav("Doenças raras")} onClick={() => setFiltro("Doenças raras")}>Doenças Raras</li>
                    <li className={formataNav("WebPalestras")} onClick={() => setFiltro("WebPalestras")}>Web Palestras</li>
                    <li className={"capitalize " + formataNav("Sistema prisional")} onClick={() => setFiltro("Sistema prisional")}>Sistema Prisional</li>
                    <li className={formataNav("OPAS")} onClick={() => setFiltro("OPAS")}>OPAS</li>
                </ul>
            </nav>

            <h3 className='italic text-[1.3rem] justify-self-start ml-[2.2rem] mb-4'>
              {pagina == qntPaginas ? (tamanhoArray) : (pagina * limite)}&nbsp;de&nbsp;{tamanhoArray}&nbsp;resultados
            </h3>

            <div className='flex flex-wrap justify-evenly'>
                { modulos.map((value) =>
                <div key={value.id} className='modulos-cursos mb-10'>

                    <img src={value.capa} className=''></img>

                    <h3 className='mb-2 text-3xl text-link-color font-semibold'>{value.titulo}</h3>

                    <h4 className='text-base font-semibold text-color-icons'>{value.parceiros}</h4>
                    
                    <div className='flex justify-between my-3'>
                        <span className='flex items-center ml-2 mr-4'>
                            <img src='mod_matriculados.svg' className='w-[2.2rem] mr-2'></img>
                            <p className='text-[1.2rem] text-link-color'>{value.matriculados}</p>
                        </span>

                        <span className='flex items-center mr-4'>
                            <img src='mod_duracao.svg' className='w-[1.6rem] mr-2'></img>
                            <p className='text-[1.2rem] text-link-color'>{value.duracao}</p>
                        </span>

                        <span className='flex items-center'>
                            <img src={avaliacaoCondicional(value.avaliacao)} className='w-[8rem] mr-2'></img>
                            <p className='text-[1.2rem] text-link-color'>{value.avaliacao}</p>
                        </span>
                    </div>

                    <p className='text-[1.2rem] text-justify'>{value.resumo.slice(0,modificarResumo(value.resumo))+"..."}</p>

                    <button className='text-2xl text-bot-color font-semibold ml-[20.4rem] hover:text-color-fot1'>
                      <Link to={`/modulo/${value.id}`}>Ver Curso</Link>
                    </button>
                      
                </div>)}
            </div>

            <nav className='flex paginacao'>
                <button onClick={() => setPagina(pagina == 1 ? pagina : pagina - 1)} className={pagina == 1 ? "prev desativado" : "prev"}>Anterior</button>
                {Array.from({ length: qntPaginas })
                .map((_,index) => {
                  if (index - 1 <= pagina && index + 3 >= pagina ){
                    return <button className={pagina == index+1 ? "pagina ativa" : ""} key={index} onClick={() => setPagina(index + 1)}>{index + 1}</button>
                  } 
                  return null
                })}
                <button onClick={() => setPagina(pagina == qntPaginas ? pagina : pagina + 1)} className={pagina == qntPaginas ? "next desativado" : "next"}>Próximo</button>
            </nav> 
    
        </div>
    )
}