import Header from '../../layouts/Header/Header';
import AboutSection from './components/AboutSection';
import styles from './AboutUsPage.module.css';

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <div className={styles.aboutUsContainer}>
        <h1>Sobre nós</h1>

        <AboutSection
          title="Nossa Missão"
          content="Conectar leitores ao redor do mundo, ajudando-os a organizar suas leituras e a descobrir novas histórias e conhecimentos."
        />

        <AboutSection
          title="Quem Somos"
          content="Somos uma equipe apaixonada por leitura e tecnologia, dedicada a criar um espaço digital onde livros se tornam pontes entre pessoas."
        />

        <AboutSection
          title="O que Oferecemos"
          content={
            <>
              <ul>
                <li>Ferramentas para rastrear e organizar leituras.</li>
                <li>Recomendações personalizadas de livros.</li>
                <li>Comunidade ativa para compartilhar e descobrir insights literários.</li>
              </ul>
            </>
          }
        />

        <p className={styles.thankYou}>
          Obrigado por fazer parte do <strong>MyBookShelf</strong>. Vamos embarcar nessa jornada juntos!
        </p>
      </div>
    </>
  );
}
