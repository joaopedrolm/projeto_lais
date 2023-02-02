import React from 'react'
import { Link } from 'react-router-dom'

export const ParceirosInicio = () => {
  return (
    <div className='grid grid-flow-row auto-rows-max justify-center mt-12'>
        <h2 className=' text-color-fot1 mb-8 font-semibold justify-self-center'>
            <Link to="/parceiros">Parceiros</Link>
        </h2>

        <div className='grid grid-cols-4 justify-center items-start parceiros_ini'>
            <span>
                <h3>Governo do RN</h3>
                <p>Governo do Estado do <br></br> Rio Grande do Norte.</p>
            </span>
            <span>
                <h3>SESAP</h3>
                <p>Secretaria de Saúde <br></br> Pública do Estado do Rio Grande do Norte.</p>
            </span>
            <span>
                <h3>UFRN</h3>
                <p>Universidade Federal do <br></br> Rio Grande do Norte.</p>
            </span>
            <span>
                <h3>HUOL</h3>
                <p>
                    Hospital Onofre Lopes:<br></br> Hospital Universitário da 
                    <br></br> UFRN (Universidade <br></br> Federal do Rio Grande do <br></br> Norte).
                </p>
            </span>
        </div>
    </div>
  )
}