import axios from 'axios'
import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { avaliacaoCondicional } from '../FuncoesUtilitarias.jsx'

export const ListagemModulos = () => {

  const [modulos, setModulos] = useState([])
  const [filtro, setFiltro] = useState("mais_populares")

  const getModulos = async() => {
    try {
            
      if (filtro == "mais_populares") {
        const {data} = await axios.get("http://localhost:3004/cursos?_sort=matriculados&_order=desc&_limit=3")
        setModulos(data)
          
      } else if (filtro == "bem_avaliados") {
        const {data} = await axios.get("http://localhost:3004/cursos?_sort=avaliacao&_order=desc&_limit=3")
        setModulos(data)

      } else if (filtro == "mais_recentes") {
        let {data} = await axios.get("http://localhost:3004/cursos")
            
        {/* Função para transformar as strings de data em objetos Date, 
        permitindo a comparação das datas vindas da API. */}
        function desestruturaData (dateString){
          dateString = dateString.criado_em.split("/")
          let newDate = new Date(dateString[2],dateString[1],dateString[0])
          return newDate
        }
        data = data.sort((prev, next) => {
          prev = desestruturaData(prev)
          next = desestruturaData(next)
          return next - prev
        }).slice(0,3)

        setModulos(data)
      }
        
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getModulos();
  }, [filtro]);
  
  return (
    <div className='grid grid-cols-1 justify-items-center items-center caixa'>

      <h2 className='text-color-fot1 mb-6'>Módulos Educacionais</h2>

      <nav className='justify-self-start'>
        <ul className='flex text-link-color text-[1.6rem] font-semibold'>
          <li className={filtro === "mais_populares" ? "filtros active" : "filtros"} onClick={() => setFiltro("mais_populares")}>Mais Populares</li>
          <li className={filtro === "bem_avaliados" ? "filtros active" : "filtros"} onClick={() => setFiltro("bem_avaliados")}>Mais bem avaliados</li>
          <li className={filtro === "mais_recentes" ? "filtros active" : "filtros"} onClick={() => setFiltro("mais_recentes")}>Mais recentes</li>
        </ul>
      </nav>
      
      { modulos.map((value) =>
      <div key={value.id} className='modulos-inicio flex items-center py-4 mb-5'>
        <img src={value.capa} className='mx-6'></img>

        <span className='span-title'>
          <h3 className='mb-2 text-link-color font-semibold'>{value.titulo}</h3>
          <h4 className='text-base font-semibold text-color-icons'>{value.parceiros}</h4>
        </span>
        

        <span className='flex items-center ml-2 mr-4'>
          <img src='mod_matriculados.svg' className='w-[2.6rem] mr-4'></img>
          <p className='text-[1.4rem] text-link-color'>{value.matriculados}</p>
        </span>

        <span className='flex items-center mr-4'>
          <img src='mod_duracao.svg' className='w-[2rem] mr-4'></img>
          <p className='text-[1.4rem] text-link-color'>{value.duracao}</p>
        </span>

        <span className='flex items-center'>
          <img src={avaliacaoCondicional(value.avaliacao)} className='w-[10rem] mr-2'></img>
          <p className='text-[1.4rem] text-link-color'>{value.avaliacao}</p>
        </span>
        
        <button className='btn-ver-modulo ml-auto mr-6 px-10 py-2 font-medium bg-bot-color text-white'>Ver módulo</button>

      </div>)}
      
      <Link to="/cursos" className='btn-ver-mais font-semibold bg-bot-color text-white'>Ver mais</Link>
    </div>
  )
}
