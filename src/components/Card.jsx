import star from "../assets/star.png"

export function Card({ img, rating, reviewCount, location, title, price }) {
    const imgUrl = new URL(`../assets/${img}`, import.meta.url).href

    return (
        <section className="card">
            <div className="card--image">
                <span>SOLD OUT</span>
                <img src={imgUrl} alt={img} />
            </div>
            <div className="card--rating">
                <img src={star} alt="star" />
                <span>{rating.toFixed(1)}</span>
                <span>({reviewCount}) · {location}</span>
            </div>
            <h3>{title}</h3>
            <p><span>From ${price}</span> / person</p>
        </section>
    )
}

