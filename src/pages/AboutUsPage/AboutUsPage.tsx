import Header from '../../layouts/Header/Header';
import styles from './AboutUsPage.module.css';

export default function AboutUsPage() {
    return (
        <>

            <Header />

            <div className={styles.aboutUsContainer}>
                <h1>Sobre nós</h1>
                <p>
                    Bem-vindo ao MyBookShelf!
                    Somos apaixonados por ajudar leitores a se conectar, organizar suas listas de leitura e descobrir novos livros.
                    Nossa plataforma oferece um espaço para os amantes de livros rastrearem suas leituras, compartilharem insights e explorarem um mundo de conhecimento.
                </p>
                <p>
                    Nossa missão é criar uma comunidade vibrante onde os leitores possam interagir uns com os outros,
                    trocar recomendações e enriquecer suas experiências de leitura.
                </p>
                <p>Obrigado por fazer parte do MyBookShelf. Vamos embarcar nessa jornada juntos!</p>
            </div>
        </>
    );
}
