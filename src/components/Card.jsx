import styles from "./Card.module.css";
import Painting from "./Painting.jsx";

const France = [
    {
        img: "/Card/France/01.png",
        author: "Марсель Руссо",
        title_work: "Охота Амура",
        about: "Холст, масло (50х80) ",
        cost: "14 500 руб",
    },
    {
        img: "/Card/France/02.png",
        author: "Анри Селин",
        title_work: "Дама с собачкой",
        about: "Акрил, бумага (50х80)",
        cost: "16 500 руб",
    },
    {
        img: "/Card/France/03.png",
        author: "Франсуа Дюпон",
        title_work: "Процедура",
        about: "Цветная литография (40х60) ",
        cost: "20 000 руб",
    },
    {
        img: "/Card/France/04.png",
        author: "Луи Детуш",
        title_work: "Роза",
        about: "Бумага, акрил (50х80) ",
        cost: "12 000 руб",
    },
    {
        img: "/Card/France/05.png",
        author: "Луи Детуш",
        title_work: "Птичья трапеза",
        about: "Цветная литография (40х60) ",
        cost: "22 500 руб",
    },
    {
        img: "/Card/France/06.png",
        author: "Пьер Моранж",
        title_work: "Пейзаж с рыбой",
        about: "Цветная литография (40х60) ",
        cost: "20 000 руб",
    },
];

function Card() {
    const card = France.map((value) => (
        <Painting
            img={value.img}
            author={value.author}
            title_work={value.title_work}
            about={value.about}
            cost={value.cost}
        />
    ));

    return (
        <>
            <div className={styles.card__container}>{card}</div>
        </>
    );
}

export default Card;
