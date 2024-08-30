import './App.css';

import Header from './components/Header/Header';

import BooksRow from './components/BooksRow/BooksRow';

import Hero from './components/Hero/Hero';

import TitleSection from './components/TitleSection/TitleSection';

function App() {

  return (
    <>
      <Header />

      <Hero />

      <TitleSection titleContent='Explore nosso católogo' />

      <BooksRow />

    </>
  )
}

export default App