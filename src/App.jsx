import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import { Hero } from "./components/Hero"
import data from "./data"

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            {data.map(dat => (<Card img={dat.coverImg}
                rating={dat.stats.rating}
                reviewCount={dat.stats.reviewCount}
                location={dat.location}
                title={dat.title}
                price={dat.price} />
            ))}
        </>
    )
}

export default App
