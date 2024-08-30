import './App.css';

import Header from './components/Header/Header';

import BooksRow from './components/BooksRow/BooksRow';

import Hero from './components/Hero/Hero';

import TitleSection from './components/TitleSection/TitleSection';

import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />

      <Hero />

      <TitleSection titleContent='Explore nosso católogo' />

      <BooksRow />

      <Footer/>

    </>
  )
}

export default App