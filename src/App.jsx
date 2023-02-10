import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import { Hero } from "./components/Hero"
import data from "./data"

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="inline-container">
                <div className="cards">
                    {data.map(dat => <Card key={dat.id} {...dat} />)}
                </div>
            </div>
        </>
    )
}

export default App
