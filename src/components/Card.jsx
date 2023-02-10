import star from "../assets/star.png"

export function Card({ coverImg, stats: { rating, reviewCount }, location, title, price, openSpots }) {

    // handle adding hash to static assets
    const imgUrl = new URL(`../assets/${coverImg}`, import.meta.url).href

    // handle image overlay text info
    let badgeText
    if (openSpots == 0) {
        badgeText = "SOLD OUT"
    } else if (location == "Online") {
        badgeText = "Online"
    }

    return (
        <section className="card">
            <div className="card--image">
                {badgeText && <span>{badgeText}</span>}
                <img src={imgUrl} alt={coverImg} />
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

