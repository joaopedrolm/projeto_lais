import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Map from "../components/Map"
/* import "../components/mapChart" */

export default function Transparencia() {

    const dadosCurso = new Array()
    const dadosEstado = new Array()

    const data = dadosEstado;
    
    (async () => {
        const topology = await fetch('https://code.highcharts.com/mapdata/countries/br/br-all.topo.json').then((response) => response.json());
    
        Highcharts.mapChart('container', {
            chart: {
              map: topology,
              backgroundColor: '#ffffff00',
            },
            title: {
              text: '',
            },
            colorAxis: {
              minColor: '#EE7171',
              maxColor: '#CC0000',
            },
            series: [
                {
                  data,
                  name: 'Usuários',
                  states: {
                    hover: {
                      color: '#505050',
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                },
            ],
        });
    })();

    const [transparencia, setTransparencia] = useState([])
    const [usuariosCurso, setUsuariosCurso] = useState([])
    const [usuariosEstado, setUsuariosEstado] = useState([])

    const getTransparencia = async() => {
        try {
            const {data} = await axios.get("http://localhost:3004/transparecia")
            
            setTransparencia(data) 

        } catch (error) {
            console.log(error);
        }
    }

    const getUsuariosCurso = async() => {
        try {
            const {data} = await axios.get("http://localhost:3004/transparecia")
            
            setUsuariosCurso(data?.usuarios_por_curso) 

        } catch (error) {
            console.log(error);
        }
    }

    const getUsuariosEstado = async() => {
        try {
            const {data} = await axios.get("http://localhost:3004/transparecia")
            
            setUsuariosEstado(data.usuarios_por_estado) 

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTransparencia();
        getUsuariosCurso();
        getUsuariosEstado();
      }, []);

    function formataEstado(estado){
        return "br-"+ estado.toLowerCase()
    }

    usuariosCurso.map((value) => {
        dadosCurso.push([value?.curso, value?.usuarios])
    })
    
    usuariosEstado.map((value) => {
        dadosEstado.push([formataEstado(value.estados), value.usuarios_totais])
    })

    function formataCasaDecimal(valor) {
        return valor?.toLocaleString('pt-BR');
    }

    return (
        <div className='grid grid-cols-1 justify-items-center items-center caixa mb-64'>
            <div className="justify-self-start marcadores mt-2">
                <h3 className="text-bot-color inline-block">Início&nbsp;</h3>
                <h3 className="text-link-color inline-block"> / Transparência</h3>
            </div>

            <h1 className="text-color-fot1 text-6xl my-10">Transparência</h1>

            <div className="transparencia-dados grid grid-flow-row auto-rows-max justify-center mb-12">
                <h3 className="text-[2rem] text-color-fot1 font-bold mt-10 mb-2 justify-self-center">Dados Gerais</h3>

                <div className="flex linha2 w-[90rem] justify-evenly mt-6">
                    <div>
                        <span>
                            <img src='transparencia/usuarios_registrados.svg' width='20rem'></img>
                            <p>Total de usuários registrados</p>
                        </span>
                        
                        <h2 className='mt-3'>{formataCasaDecimal(transparencia.dados_gerais?.usuarios_registrados)}</h2>

                    </div>
                    <div>
                        <span>
                            <img src='transparencia/inscricoes_realizadas.svg' width='15rem'></img>
                            <p>Inscrições realizadas</p>
                        </span>
                        <h2 className='mt-3'>{formataCasaDecimal(transparencia.dados_gerais?.incricoes_realizadas)}</h2>
                    </div>
                    <div>
                        <span>
                            <img src='transparencia/cursos_ativos.svg' width='20rem'></img>
                            <p>Cursos ativos</p>
                        </span>
                        <h2 className='mt-3'>{formataCasaDecimal(transparencia.dados_gerais?.cursos_ativos)}</h2>
                    </div>
                    <div>
                        <span>
                            <img src='transparencia/certificacao.svg' width='18rem'></img>
                            <p>Direito à certificação</p>
                        </span>
                        <h2 className='mt-3'>{transparencia.dados_gerais?.direito_certificacao}</h2>
                    </div>
                </div>
                <div className="flex linha2 w-[90rem] justify-evenly mt-12">
                    <div>
                        <span>
                            <img src='transparencia/investimento_curso.svg' width='20rem'></img>
                            <p>Investimento médio por curso</p>
                        </span>
                        <h2 className='mt-3'>{transparencia.dados_gerais?.investimento_medio_curso}</h2>
                    </div>
                    <div>
                        <span>
                            <img src='transparencia/investimento_aluno.svg' width='18rem'></img>
                            <p>Investimento médio por aluno</p>
                        </span>
                        <h2 className='mt-3'>{transparencia.dados_gerais?.investimento_medio_aluno}</h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10 w-[100%]">
                <div className="transparencia-cursos">
                    <h3 className='text-3xl font-semibold text-color-icons'>Usuários por Curso</h3>
                    <Map type='pie' data={dadosCurso}  />
                </div>
                <div className="transparencia-usuarios">
                    <h3 className='mb-10 text-3xl font-semibold text-color-icons'>Usuários por Estado</h3>
                    <div id='container'></div>
                </div>
            </div>        
    
        </div>
    )
}