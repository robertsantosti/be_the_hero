import React from "react";
import {Link} from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logo from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>

                    <h1>Cadastrar nove caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="form-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/> Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição"></textarea>
                    <input type="number" step="0.01" placeholder="Valor em reais"/>

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}