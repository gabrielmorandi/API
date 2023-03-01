import React from 'react'

import { Link } from 'react-router-dom'

import '../css/home.css'
import Box from '../../assets/box.svg'


const HomeMain = () => {
  return (
    <main>
        <div className="container-flex">
            <section>
                <div>
                    <h1>Plataforma de impressão de arquivos!</h1>
                    <h2>Experimente agora e descubra como a nossa plataforma de impressão de arquivos pode simplificar sua vida e melhorar a qualidade das suas impressões. Estamos ansiosos para atendê-lo!</h2>
                    <div>
                        <button className='btn-primary btn-color-primary'><Link to={'/'}>Envie seu arquivo!</Link></button>
                    </div>
                </div>
                <img src={Box} alt="Box" />
            </section>
        </div>
    </main>
  )
}

export default HomeMain