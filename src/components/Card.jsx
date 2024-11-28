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

const germany = [
    {
        img: "/Card/germany/01.png",
        author: "Курт Вернер",
        title_work: "Над городом",
        about: "Цветная литография (40х60) ",
        cost: "16 000 руб",
    },
    {
        img: "/Card/germany/02.png",
        author: "Макс Рихтер",
        title_work: "Птенцы",
        about: "Холст, масло (50х80) ",
        cost: "14 500 руб",
    },
    {
        img: "/Card/germany/03.png",
        author: "Мартин Майер",
        title_work: "Среди листьев",
        about: "Цветная литография (40х60) ",
        cost: "20 000 руб",
    },
    {
        img: "/Card/germany/04.png",
        author: "Герман Беккер",
        title_work: "Яркая птица",
        about: "Цветная литография (40х60) ",
        cost: "13 000 руб",
    },
    {
        img: "/Card/germany/05.png",
        author: "Вульф Бауэр",
        title_work: "Дятлы",
        about: "Бумага, акрил (50х80) ",
        cost: "20 000 руб",
    },
    {
        img: "/Card/germany/06.png",
        author: "Вальтер Хартманн",
        title_work: "Большие воды",
        about: "Бумага, акрил (50х80) ",
        cost: "23 000 руб",
    },
];

const engalnd = [
    {
        img: "/Card/england/01.png",
        author: "Марсель Руссо",
        title_work: "Охота Амура",
        about: "Холст, масло (50х80) ",
        cost: "14 500 руб",
    },
    {
        img: "/Card/england/01.png",
        author: "Анри Селин",
        title_work: "Дама с собачкой",
        about: "Акрил, бумага (50х80)",
        cost: "16 500 руб",
    },
    {
        img: "/Card/england/01.png",
        author: "Франсуа Дюпон",
        title_work: "Процедура",
        about: "Цветная литография (40х60) ",
        cost: "20 000 руб",
    },
    {
        img: "/Card/england/01.png",
        author: "Луи Детуш",
        title_work: "Роза",
        about: "Бумага, акрил (50х80) ",
        cost: "12 000 руб",
    },
    {
        img: "/Card/england/01.png",
        author: "Луи Детуш",
        title_work: "Птичья трапеза",
        about: "Цветная литография (40х60) ",
        cost: "22 500 руб",
    },
    {
        img: "/Card/england/01.png",
        author: "Пьер Моранж",
        title_work: "Пейзаж с рыбой",
        about: "Цветная литография (40х60) ",
        cost: "20 000 руб",
    },
];

function Card() {
    const card = germany.map((value) => (
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
