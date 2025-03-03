import { useEffect, useRef, useState } from "react"

export function useTyping({ mainText, velocity = 200 }) {
    const textIn = useRef(mainText)
    const [textOut, setTextOut] = useState("")
    const [letter, setLetter] = useState({ caracter: "", class: "Letra" })
    const [isAtEnd, setAtEnd] = useState(false)


    const cortarAlInicio = () => {
        const toTextArray = Array.from(textIn.current)
        const caracter = toTextArray.shift()
        textIn.current = toTextArray.join("")
        return caracter
    }

    const main = () => {
        const caracter = cortarAlInicio()
        setLetter({ ...letter, caracter})
        setTextOut(textOut + caracter)
        setAtEnd(textIn.current.length ===0)
    }

    if (textOut.length === 0) {
        main()
    }

    useEffect(() => {
        if (isAtEnd) return

        const timer = setInterval(main, velocity)

        return () => {
            clearInterval(timer)
        }

    }, [textOut, mainText, velocity])

    return { textOut, letter, isAtEnd }
}