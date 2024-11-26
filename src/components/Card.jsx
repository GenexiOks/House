import styles from "./Card.module.css";
import Painting from "./Painting.jsx";

function Card() {
    return (
        <>
            <div className={styles.card__container}>
                <Painting />
            </div>
        </>
    );
}

export default Card;
