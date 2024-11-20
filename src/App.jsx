import classNames from "classnames";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
    const [hiddenMenu, setHiddenMenu] = useState(false);

    function hiddenHandler() {
        hiddenMenu ? setHiddenMenu(false) : setHiddenMenu(true);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={classNames(styles.header_container, styles._container)}>
                    <div className={styles.logo_container}>
                        <svg
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
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
                                <span className={styles.quantity}>1</span>
                                <svg
                                    className={styles.basket_svg}
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_4_1148)">
                                        <path
                                            d="M8.24992 20.1667C8.75618 20.1667 9.16658 19.7563 9.16658 19.25C9.16658 18.7438 8.75618 18.3334 8.24992 18.3334C7.74366 18.3334 7.33325 18.7438 7.33325 19.25C7.33325 19.7563 7.74366 20.1667 8.24992 20.1667Z"
                                            stroke="#2C2D35"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M18.3334 20.1667C18.8397 20.1667 19.2501 19.7563 19.2501 19.25C19.2501 18.7438 18.8397 18.3334 18.3334 18.3334C17.8272 18.3334 17.4167 18.7438 17.4167 19.25C17.4167 19.7563 17.8272 20.1667 18.3334 20.1667Z"
                                            stroke="#2C2D35"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M0.916748 0.916626H4.58341L7.04008 13.1908C7.12391 13.6128 7.3535 13.9919 7.68866 14.2617C8.02383 14.5315 8.44322 14.6749 8.87341 14.6666H17.7834C18.2136 14.6749 18.633 14.5315 18.9682 14.2617C19.3033 13.9919 19.5329 13.6128 19.6167 13.1908L21.0834 5.49996H5.50008"
                                            stroke="#2C2D35"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                                            fill="#598D66"
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
                <div
                    className={classNames(
                        !hiddenMenu ? styles.mobil__menu_container : styles._hidden
                    )}
                >
                    <button
                        className={!hiddenMenu ? styles.mobil__menu_btn : styles._hidden}
                        onClick={hiddenHandler}
                    >
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.6875 21.5625C4.6875 21.3139 4.78627 21.0754 4.96209 20.8996C5.1379 20.7238 5.37636 20.625 5.625 20.625H24.375C24.6236 20.625 24.8621 20.7238 25.0379 20.8996C25.2137 21.0754 25.3125 21.3139 25.3125 21.5625C25.3125 21.8111 25.2137 22.0496 25.0379 22.2254C24.8621 22.4012 24.6236 22.5 24.375 22.5H5.625C5.37636 22.5 5.1379 22.4012 4.96209 22.2254C4.78627 22.0496 4.6875 21.8111 4.6875 21.5625ZM4.6875 14.0625C4.6875 13.8139 4.78627 13.5754 4.96209 13.3996C5.1379 13.2238 5.37636 13.125 5.625 13.125H24.375C24.6236 13.125 24.8621 13.2238 25.0379 13.3996C25.2137 13.5754 25.3125 13.8139 25.3125 14.0625C25.3125 14.3111 25.2137 14.5496 25.0379 14.7254C24.8621 14.9012 24.6236 15 24.375 15H5.625C5.37636 15 5.1379 14.9012 4.96209 14.7254C4.78627 14.5496 4.6875 14.3111 4.6875 14.0625ZM4.6875 6.5625C4.6875 6.31386 4.78627 6.0754 4.96209 5.89959C5.1379 5.72377 5.37636 5.625 5.625 5.625H24.375C24.6236 5.625 24.8621 5.72377 25.0379 5.89959C25.2137 6.0754 25.3125 6.31386 25.3125 6.5625C25.3125 6.81114 25.2137 7.0496 25.0379 7.22541C24.8621 7.40123 24.6236 7.5 24.375 7.5H5.625C5.37636 7.5 5.1379 7.40123 4.96209 7.22541C4.78627 7.0496 4.6875 6.81114 4.6875 6.5625Z"
                                fill="#4C5866"
                            />
                        </svg>
                    </button>
                    <button className={!hiddenMenu ? styles.mobil__basket_btn : styles._hidden}>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_62285_487)">
                                <path
                                    d="M8.24967 20.1667C8.75593 20.1667 9.16634 19.7563 9.16634 19.25C9.16634 18.7438 8.75593 18.3334 8.24967 18.3334C7.74341 18.3334 7.33301 18.7438 7.33301 19.25C7.33301 19.7563 7.74341 20.1667 8.24967 20.1667Z"
                                    stroke="#2C2D35"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M18.3337 20.1667C18.8399 20.1667 19.2503 19.7563 19.2503 19.25C19.2503 18.7438 18.8399 18.3334 18.3337 18.3334C17.8274 18.3334 17.417 18.7438 17.417 19.25C17.417 19.7563 17.8274 20.1667 18.3337 20.1667Z"
                                    stroke="#2C2D35"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M0.916992 0.916626H4.58366L7.04033 13.1908C7.12415 13.6128 7.35374 13.9919 7.68891 14.2617C8.02408 14.5315 8.44346 14.6749 8.87366 14.6666H17.7837C18.2139 14.6749 18.6332 14.5315 18.9684 14.2617C19.3036 13.9919 19.5332 13.6128 19.617 13.1908L21.0837 5.49996H5.50033"
                                    stroke="#2C2D35"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_62285_487">
                                    <rect width="22" height="22" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className={hiddenHandler ? styles.mobil_hidden_menu : styles._hidden}>
                    <button className={styles.mobil__close_btn} onClick={hiddenHandler}>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.75 6.75C6.94891 6.55109 7.2187 6.43934 7.5 6.43934C7.7813 6.43934 8.05109 6.55109 8.25 6.75L23.25 21.75C23.4489 21.9489 23.5606 22.2187 23.5606 22.5C23.5606 22.7813 23.4489 23.0511 23.25 23.25C23.0511 23.4489 22.7813 23.5606 22.5 23.5606C22.2187 23.5606 21.9489 23.4489 21.75 23.25L6.75 8.25C6.55109 8.05109 6.43934 7.7813 6.43934 7.5C6.43934 7.21869 6.55109 6.94891 6.75 6.75Z"
                                fill="#2C2D35"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
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
        </>
    );
}

export default App;
