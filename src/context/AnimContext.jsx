import { createContext, useContext, useState } from "react"
import { useTyping } from "../hooks/useTyping"
import useAplastador from "../hooks/useAplastador"

const AnimContext = createContext()

export function useAnim() {
    const context = useContext(AnimContext)
    if (!context) {
        throw new TypeError("Falta el componente AnimProvider.")
    }
    return context
}


export function AnimProvider({ children }) {
    const [letters, setLetters] = useState([])
    const { letter, isAtEnd } = useTyping({
        mainText: "Atte:Mart¡nez"
    })
    const [aplastador, setAplastador] = useState(false)
    useAplastador({
        aplastador,
        letters,
        setLetters,
        posFinal: 9,
        caracter: "í"
    })


    const play = () => {
        setAplastador(true)
    }

    const addLetter = (letter) => {
        setLetters([...letters, letter])
    }


    return <AnimContext.Provider
        value={{
            letters,
            isAtEnd,
            letter,
            addLetter,
            play
        }}
    >
        {children}
    </AnimContext.Provider>
}