import styles from "./Card.module.css";
import Painting from "./Painting.jsx";

function Card(props) {
    const countryData = props.country;
    const card = countryData.map((value, i) => <Painting img={value.img} author={value.author} title_work={value.title_work} about={value.about} cost={value.cost} key={i} />);

    return (
        <>
            <div className={styles.card__container}>{card}</div>
        </>
    );
}

export default Card;
