import { useEffect } from "react"
import LetterList from "./components/LetterList"
import { useAnim } from "./context/AnimContext"


function HolaBot() {
    const {addLetter, letter} = useAnim()

    useEffect(() => {
        addLetter(letter)
    }, [letter])

    return <LetterList />
}

export default HolaBot