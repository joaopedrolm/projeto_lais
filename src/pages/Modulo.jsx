import { useParams } from "react-router-dom";
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { avaliacaoCondicional, formataCasaDecimal } from '../FuncoesUtilitarias.jsx'

export default function Modulo() {

    const {id} = useParams()
    const [modulo, setModulo] = useState()

    const getModulo = async() => {
        try {
            const {data} = await axios.get(`http://localhost:3004/cursos/${id}`)
            setModulo(data)
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        getModulo();
        /* window.scrollTo({ top: 0, behavior: 'smooth' }) */
    }, []);


    function diminuiTamanho(tag, texto){
        switch(tag){
            case 'h1':
                if (texto?.length >= 80){
                    return 'text-[2.4rem]'
                }else {
                    return 'text-[3.2rem]'
                }
            case 'h2':
                if (texto?.length >= 80){
                    return 'text-[1rem]'
                }else {
                    return 'text-[1.8rem]'
                }
        }
    }

    return (
        <div className="grid grid-flow-row auto-rows-max">
            <section className="topo" style={{backgroundImage: `url(${modulo?.capa})`}}>
                <div className="grid grid-cols-1 efeito-topo text-white">
                    <div className="w-[90rem] grid grid-flow-row auto-rows-max justify-self-center gap-5">
                        <span className="text-left text-[1.3rem] mt-2">
                            <h3 className="text-[#ddd] inline-block mt-6">Início / Cursos / Módulos /&nbsp;</h3>
                            <h3 className="inline">{modulo?.titulo}</h3>
                        </span>

                        <h1 className={diminuiTamanho('h1',modulo?.titulo)}>{modulo?.titulo}</h1>

                        <h2 className={diminuiTamanho('h2',modulo?.titulo)}>{modulo?.parceiros}</h2>

                    </div>
                </div>
            </section>

            <section className="w-[90rem] justify-self-center conteudo">
                <h1 className="text-[3.2rem] text-color-fot1 text-center mt-6 mb-8">Informações Gerais do Curso</h1>

                <div className='flex justify-between my-3 text-link-color'>
                    <span className='flex items-center mr-4'>
                        <img src='../../mod_duracao.svg' className='w-[2.2rem] mr-4'></img>
                        <p className='text-[1.2rem] text-link-color'>{(modulo?.duracao)?.slice(0, -1)} horas</p>
                    </span>

                    <span className='flex items-center ml-2 mr-4'>
                        <img src='../../calendario.svg' className='w-[2.2rem] mr-4'></img>
                        <p className='text-[1.2rem] text-link-color'>Desde&nbsp;{modulo?.criado_em}</p>
                    </span>

                    <span className='flex items-center ml-2 mr-4'>
                        <img src='../../mod_matriculados.svg' className='w-[2.2rem] mr-4'></img>
                        <p className='text-[1.2rem] text-link-color'>{formataCasaDecimal(modulo?.matriculados)} alunos matriculados</p>
                    </span>

                    <span className='flex items-center'>
                        <img src={"../../" + avaliacaoCondicional(modulo?.avaliacao)} className='w-[10rem] m-4'></img>
                        <p className='text-[1.2rem] text-link-color'>{modulo?.avaliacao}&nbsp;({formataCasaDecimal(modulo?.numero_avaliacoes)} avaliações)</p>
                    </span>
                </div>

                <div className="my-8">
                    <h3>Sobre o curso</h3>
                    <p className="">{modulo?.sobre}</p>
                </div>

                <div className="objetivos mb-8">
                    <h3>Objetivos</h3>

                    <h4>Objetivo Geral</h4>
                    <p className="mb-8">{modulo?.objetivo_geral}</p>

                    <h4>Objetivos Específicos</h4>
                    <p>{modulo?.objetivo_especifico}</p>
                </div>

                <div>
                    <h3>Recursos educacionais</h3>
                    <p>{modulo?.recursos_educacionais}</p>
                </div>

                <div className="mt-[3rem] mb-[5rem]">
                    <h3>Créditos</h3>
                    <div className="grid grid-cols-4 items-center">
                    {modulo?.creditos.map((value) =>
                        <img className="max-w-[20rem]" src={value?.capa} title={value?.titulo}></img> 
                    )}
                    </div>
                </div>

            </section>
        </div>
    )
}