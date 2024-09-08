
import Hero from "./components/Hero/Hero"
import TitleSection from "../../common/TitleSection/TitleSection"
import BooksRow from "../../common/BooksRow/BooksRow"
import Header from "../../layouts/Header/Header"

export default function Home() {

    return (
        <>
            <Header />
            <Hero />
            <TitleSection titleContent='Explore nosso católogo' />
            <BooksRow />
        </>
    )
}