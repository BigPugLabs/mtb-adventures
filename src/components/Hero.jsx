import photoGrid from "../assets/photo-grid.png"

export function Hero() {
    return (
        <div className="hero">
            <img src={photoGrid} />  
            <h1>Outdoor Experiences</h1>
            <p>Join unique extreme activities led by one-of-a-kind adventurers—all while leaving home.</p>
        </div>
    )
}
