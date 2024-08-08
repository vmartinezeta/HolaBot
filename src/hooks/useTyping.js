import { useEffect, useRef, useState } from "react"


export function useTyping({mainText, velocidad=200}) {
    const textIn = useRef(mainText)
    const [textOut, setTextOut] = useState("")
    const [letter, setLetter] = useState("")

    useEffect(() => {
        const cortarAlInicio = (total = 1) => {
            const toTextArray = Array.from(textIn.current)
            return toTextArray.slice(total).join("")
        }

        const timer = setInterval(() => {
            setLetter(textIn.current.charAt(0))
            setTextOut(textOut + textIn.current.charAt(0))
            textIn.current = cortarAlInicio()        
        }, velocidad)

        return () => {
            clearInterval(timer)
        }

    }, [textOut, mainText, velocidad])

    const isAtEnd = textOut.length === mainText.length
    return {textOut, letter, isAtEnd}
}