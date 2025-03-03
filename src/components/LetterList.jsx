import { useEffect } from "react"
import { useAnim } from "../context/AnimContext"
import Letter from "./Letter"


export default function LetterList() {
    const {letters, isAtEnd, play} = useAnim()

    useEffect(()=> {
        if (isAtEnd) play()
    }, [isAtEnd])

    return <div className="main">
        {
            letters.map((letra, idx) => {
                return <Letter key={idx} letter={letra.caracter} cssClass={letra.class} />
            })
        }
  </div>
}