import { useEffect, useState } from "react"
import { useTyping } from "./hooks/useTyping"


function Letter({ letter, cssClass = "Letra" }) {
    return <span className={cssClass}>{letter}</span>
}


function HolaBot() {
    const [elements, setElements] = useState([])
    const [index, setIndex] = useState(0)

    const { textOut, letter, isAtEnd } = useTyping({
        mainText: "Atte:Martinez"
    })


    useEffect(() => {
        if (letter === "") return
        setElements([...elements, <Letter key={elements.length} letter={letter} />])
    }, [textOut, letter])


    useEffect(() => {
        if (!isAtEnd || index === 10) {
            return
        }

        const timer = setInterval(() => {
            setElements(elements.map((e, pos) => {
                if (index === pos) {
                    return <Letter key={pos} letter={e.props.letter} cssClass="Letra pisar" />
                }
                return <Letter key={pos} letter={e.props.letter} cssClass="Letra" />
            }))

            setIndex(index + 1)
        }, 500)

        return () => {
            clearInterval(timer)
        }

    }, [isAtEnd, index, elements])


    useEffect(() => {
        if (index < 10) {
            return
        }
        const timer = setInterval(() => {            
            setElements(elements.map((e, pos) => {
                return <Letter key={pos} letter={e.props.letter} cssClass="Letra" />
            }))
        }, 1000)

        return ()=> {
            clearInterval(timer)
        }
    }, [index])

    return <div className="main">
        {elements}
    </div>
}

export default HolaBot