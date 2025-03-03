import { useEffect, useState } from "react"

export default function useAplastador({aplastador, letters, setLetters, posFinal, caracter}) {
    const [index, setIndex] = useState(0)

    const update = index => {
        setLetters(letters.map((l, idx) => {
            if (idx === index) {
                return { ...l, class: "Letra aplastar" }
            }
            return { ...l, class: "Letra" }
        }))
    }

    const reset = () => {
        setLetters(letters.map((l, idx) => {
            if (idx === posFinal) {
                return { ...l, caracter, class: "Letra" }
            }
            return { ...l, class: "Letra" }
        }))
    }

    useEffect(() => {
        if (!aplastador) return
        let timer = null
        if (index === posFinal+1) {
            timer = setInterval(reset, 500)
        } else {
            timer = setInterval(() => {
                update(index)
                setIndex(index + 1)
            }, 500)
        }

        return () => {
            clearInterval(timer)
        }
    }, [index, aplastador])

}