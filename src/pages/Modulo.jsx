import { useParams } from "react-router-dom";
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { avaliacaoCondicional } from '../FuncoesUtilitarias.jsx'

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

    return (
        <div>
            <div className="topo" style={{backgroundImage: `url(${modulo?.capa})`}}>
                <div className="flex justify-center efeito-topo">
                    <div className="w-[90rem] grid-flow-row auto-rows-max justify-self-center text-[1.3rem] mt-2">
                        <span>
                            <h3 className="text-[#ddd] inline-block mt-6">Início / Cursos / Módulos /&nbsp;</h3>
                            <h3 className="text-white inline-block">{modulo?.titulo}</h3>
                        </span>

                        <h1 className="text-white">{modulo?.titulo}</h1>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}