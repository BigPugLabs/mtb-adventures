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
                    {data.map((dat, i) => (<Card key={i}
                        img={dat.coverImg}
                        rating={dat.stats.rating}
                        reviewCount={dat.stats.reviewCount}
                        location={dat.location}
                        title={dat.title}
                        price={dat.price} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
