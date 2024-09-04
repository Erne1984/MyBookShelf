import './Hero.css';

import PrimaryButton from "../../../../common/PrimaryButton/PrimaryButton";

export default function Hero() {

    return (
        <div className="hero-container">

            <div className="hero-box">

                <h1>MyBookShelf</h1>

                <p>Organize suas leituras, conecte-se com outros apaixonados por livros e explore um mundo de conhecimento!</p>

                <PrimaryButton btnContent="Conecte-se!" />

            </div>


        </div>
    )
}