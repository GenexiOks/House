import classNames from "classnames";
import styles from "./App.module.css";
import { useState } from "react";
import Card from "./components/Card.jsx";

const france = [
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

const england = [
    {
        img: "/Card/england/01.png",
        author: "Пол Смит",
        title_work: "Дикий зверь",
        about: "Акварель, бумага (50х80)  ",
        cost: "19 500 руб",
    },
    {
        img: "/Card/england/02.png",
        author: "Джон Уайт",
        title_work: "Скалистый берег",
        about: "Цветная литография (40х60) ",
        cost: "17 500 руб",
    },
    {
        img: "/Card/england/03.png",
        author: "Джим Уотсон",
        title_work: "Река и горы",
        about: "Акварель, бумага (50х80) ",
        cost: "20 500 руб",
    },
    {
        img: "/Card/england/04.png",
        author: "Юджин Зиллион",
        title_work: "Белый попугай",
        about: "Цветная литография (40х60) ",
        cost: "15 500 руб",
    },
    {
        img: "/Card/england/05.png",
        author: "Эрик Гиллман",
        title_work: "Ночная рыба",
        about: "Бумага, акрил (50х80) ",
        cost: "12 500 руб",
    },
    {
        img: "/Card/england/06.png",
        author: "Альфред Барр",
        title_work: "Рыжий кот",
        about: "Цветная литография (40х60) ",
        cost: "21 000 руб",
    },
];

function App() {
    const [hiddenMenu, setHiddenMenu] = useState(false);
    const [country, setCountry] = useState(france);

    function hiddenHandler() {
        hiddenMenu ? setHiddenMenu(false) : setHiddenMenu(true);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={classNames(styles.header_container, styles._container)}>
                    <div className={styles.logo_container}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 0L19.9652 9.10444L26.9612 2.77806L24.1128 11.77L33.4186 10.2302L26.1609 16.2547L34.8219 19.9905L25.4593 21.1349L30.7256 28.9601L22.2306 24.861L22.4303 34.2911L17.5 26.25L12.5697 34.2911L12.7694 24.861L4.27438 28.9601L9.54072 21.1349L0.178125 19.9905L8.83906 16.2547L1.58144 10.2302L10.8872 11.77L8.03879 2.77806L15.0348 9.10444L17.5 0Z"
                                fill="#598D66"
                            />
                        </svg>
                        <p>Ink. House</p>
                    </div>
                    <hr className={styles.line} />
                    <ul className={styles.ul_container}>
                        <li>
                            <a href="#">Репродукции</a>
                        </li>
                        <li>
                            <a href="#">Новинки</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <button className={styles.btn_basket}>
                                <svg className={styles.basket_svg} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4_1148)">
                                        <path
                                            d="M8.24992 20.1667C8.75618 20.1667 9.16658 19.7563 9.16658 19.25C9.16658 18.7438 8.75618 18.3334 8.24992 18.3334C7.74366 18.3334 7.33325 18.7438 7.33325 19.25C7.33325 19.7563 7.74366 20.1667 8.24992 20.1667Z"
                                            stroke="#2C2D35"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M18.3334 20.1667C18.8397 20.1667 19.2501 19.7563 19.2501 19.25C19.2501 18.7438 18.8397 18.3334 18.3334 18.3334C17.8272 18.3334 17.4167 18.7438 17.4167 19.25C17.4167 19.7563 17.8272 20.1667 18.3334 20.1667Z"
                                            stroke="#2C2D35"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M0.916748 0.916626H4.58341L7.04008 13.1908C7.12391 13.6128 7.3535 13.9919 7.68866 14.2617C8.02383 14.5315 8.44322 14.6749 8.87341 14.6666H17.7834C18.2136 14.6749 18.633 14.5315 18.9682 14.2617C19.3033 13.9919 19.5329 13.6128 19.6167 13.1908L21.0834 5.49996H5.50008"
                                            stroke="#2C2D35"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4_1148">
                                            <rect width="22" height="22" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={classNames(!hiddenMenu ? styles.mobil__menu_container : styles._hidden)}>
                    <button className={!hiddenMenu ? styles.mobil__menu_btn : styles._hidden} onClick={hiddenHandler}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.6875 21.5625C4.6875 21.3139 4.78627 21.0754 4.96209 20.8996C5.1379 20.7238 5.37636 20.625 5.625 20.625H24.375C24.6236 20.625 24.8621 20.7238 25.0379 20.8996C25.2137 21.0754 25.3125 21.3139 25.3125 21.5625C25.3125 21.8111 25.2137 22.0496 25.0379 22.2254C24.8621 22.4012 24.6236 22.5 24.375 22.5H5.625C5.37636 22.5 5.1379 22.4012 4.96209 22.2254C4.78627 22.0496 4.6875 21.8111 4.6875 21.5625ZM4.6875 14.0625C4.6875 13.8139 4.78627 13.5754 4.96209 13.3996C5.1379 13.2238 5.37636 13.125 5.625 13.125H24.375C24.6236 13.125 24.8621 13.2238 25.0379 13.3996C25.2137 13.5754 25.3125 13.8139 25.3125 14.0625C25.3125 14.3111 25.2137 14.5496 25.0379 14.7254C24.8621 14.9012 24.6236 15 24.375 15H5.625C5.37636 15 5.1379 14.9012 4.96209 14.7254C4.78627 14.5496 4.6875 14.3111 4.6875 14.0625ZM4.6875 6.5625C4.6875 6.31386 4.78627 6.0754 4.96209 5.89959C5.1379 5.72377 5.37636 5.625 5.625 5.625H24.375C24.6236 5.625 24.8621 5.72377 25.0379 5.89959C25.2137 6.0754 25.3125 6.31386 25.3125 6.5625C25.3125 6.81114 25.2137 7.0496 25.0379 7.22541C24.8621 7.40123 24.6236 7.5 24.375 7.5H5.625C5.37636 7.5 5.1379 7.40123 4.96209 7.22541C4.78627 7.0496 4.6875 6.81114 4.6875 6.5625Z"
                                fill="#4C5866"
                            />
                        </svg>
                    </button>
                    <button className={!hiddenMenu ? styles.mobil__basket_btn : styles._hidden}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_26_1379)">
                                <path
                                    d="M9.24967 21.1667C9.75593 21.1667 10.1663 20.7563 10.1663 20.25C10.1663 19.7438 9.75593 19.3334 9.24967 19.3334C8.74341 19.3334 8.33301 19.7438 8.33301 20.25C8.33301 20.7563 8.74341 21.1667 9.24967 21.1667Z"
                                    stroke="#2C2D35"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19.3337 21.1667C19.8399 21.1667 20.2503 20.7563 20.2503 20.25C20.2503 19.7438 19.8399 19.3334 19.3337 19.3334C18.8274 19.3334 18.417 19.7438 18.417 20.25C18.417 20.7563 18.8274 21.1667 19.3337 21.1667Z"
                                    stroke="#2C2D35"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1.91699 1.91663H5.58366L8.04033 14.1908C8.12415 14.6128 8.35374 14.9919 8.68891 15.2617C9.02408 15.5315 9.44346 15.6749 9.87366 15.6666H18.7837C19.2139 15.6749 19.6332 15.5315 19.9684 15.2617C20.3036 14.9919 20.5332 14.6128 20.617 14.1908L22.0837 6.49996H6.50033"
                                    stroke="#2C2D35"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_26_1379">
                                    <rect width="22" height="22" fill="white" transform="translate(1 1)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                {/* ------------Mobile UI 320px -----------------------------------------------------*/}
                <div className={hiddenMenu ? styles.mobil_hidden_menu : styles._hidden}>
                    <button className={styles.mobil__close_btn} onClick={hiddenHandler}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.75 6.75C6.94891 6.55109 7.2187 6.43934 7.5 6.43934C7.7813 6.43934 8.05109 6.55109 8.25 6.75L23.25 21.75C23.4489 21.9489 23.5606 22.2187 23.5606 22.5C23.5606 22.7813 23.4489 23.0511 23.25 23.25C23.0511 23.4489 22.7813 23.5606 22.5 23.5606C22.2187 23.5606 21.9489 23.4489 21.75 23.25L6.75 8.25C6.55109 8.05109 6.43934 7.7813 6.43934 7.5C6.43934 7.21869 6.55109 6.94891 6.75 6.75Z"
                                fill="#2C2D35"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.25 6.75C23.4489 6.94891 23.5607 7.2187 23.5607 7.5C23.5607 7.7813 23.4489 8.05109 23.25 8.25L8.25001 23.25C8.0511 23.4489 7.78132 23.5606 7.50001 23.5606C7.21871 23.5606 6.94893 23.4489 6.75002 23.25C6.55111 23.0511 6.43936 22.7813 6.43936 22.5C6.43936 22.2187 6.5511 21.9489 6.75002 21.75L21.75 6.75C21.9489 6.55109 22.2187 6.43934 22.5 6.43934C22.7813 6.43934 23.0511 6.55109 23.25 6.75Z"
                                fill="#2C2D35"
                            />
                        </svg>
                    </button>
                    <ul className={styles.hidden_menu_container}>
                        <li>
                            <a href="#">Репродукции</a>
                        </li>
                        <li>
                            <a href="#">Новинки</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                    </ul>
                </div>
            </header>
            <main className={styles.page}>
                <div className={classNames(styles.main, styles._container)}>
                    <img className={styles.main__img} src="/header/MainBird.png" />
                    <div className={styles.main__contant}>
                        <h1>
                            Реплики картин <br /> от <span>Ink. House</span>
                        </h1>
                        <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
                        <button className={styles.main__btn}>Продукция</button>
                    </div>
                </div>
                <div className={styles.catalog}>
                    <div className={classNames(classNames(styles.catalog__container, styles._container))}>
                        <div className={classNames(styles.catalog__menu, styles._container)}>
                            <h1 className={styles.catalog__title}>Репродукции</h1>
                            <nav className={styles.catalog__btn_container}>
                                <button
                                    autoFocus
                                    onClick={function () {
                                        setCountry(france);
                                    }}
                                    className={classNames(styles.catalog__btn, styles.catalog__btn_france)}
                                >
                                    Франция
                                </button>
                                <button
                                    onClick={function () {
                                        setCountry(germany);
                                    }}
                                    className={classNames(styles.catalog__btn, styles.catalog__btn_germany)}
                                >
                                    Гeрмания
                                </button>
                                <button
                                    onClick={function () {
                                        setCountry(england);
                                    }}
                                    className={classNames(styles.catalog__btn, styles.catalog__btn_england)}
                                >
                                    Англия
                                </button>
                            </nav>
                        </div>
                        <Card country={country} />
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>Подвал</footer>
        </>
    );
}

export default App;
