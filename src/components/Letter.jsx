export default function Letter({ letter, cssClass = "Letra" }) {
    return <span className={cssClass}>{letter}</span>
}