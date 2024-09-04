
import Hero from "./components/Hero/Hero"
import TitleSection from "../../common/TitleSection/TitleSection"
import BooksRow from "../../common/BooksRow/BooksRow"

export default function Home() {

    return (
        <>
            <Hero />
            <TitleSection titleContent='Explore nosso católogo' />
            <BooksRow />
        </>
    )
}