
import Hero from "../../components/Hero/Hero"
import TitleSection from "../../components/TitleSection/TitleSection"
import BooksRow from "../../components/BooksRow/BooksRow"

export default function Home() {

    return (
        <>
            <Hero />
            <TitleSection titleContent='Explore nosso católogo' />
            <BooksRow />
        </>
    )
}