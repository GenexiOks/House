import styles from "./Painting.module.css";

function Painting(props) {
    return (
        <>
            <div className={styles.painting__container}>
                <img className={styles.paintin__img} src={props.img} alt="#" />
                <p className={styles.painting__author}>{props.author}</p>
                <h1 className={styles.painting__title_work}>{props.title_work}</h1>
                <p className={styles.painting__about}>{props.about}</p>
                <p className={styles.painting__cost}>{props.cost}</p>
                <button className={styles.painting__btn}>В корзину</button>
            </div>
        </>
    );
}

export default Painting;
