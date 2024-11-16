import classNames from "classnames";
import styles from "./App.module.css";

function App() {
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
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_61519_102)">
                                        <path
                                            d="M8.25001 20.1667C8.75627 20.1667 9.16668 19.7563 9.16668 19.25C9.16668 18.7438 8.75627 18.3334 8.25001 18.3334C7.74375 18.3334 7.33334 18.7438 7.33334 19.25C7.33334 19.7563 7.74375 20.1667 8.25001 20.1667Z"
                                            stroke="#2C2D35"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M18.3333 20.1667C18.8396 20.1667 19.25 19.7563 19.25 19.25C19.25 18.7438 18.8396 18.3334 18.3333 18.3334C17.8271 18.3334 17.4167 18.7438 17.4167 19.25C17.4167 19.7563 17.8271 20.1667 18.3333 20.1667Z"
                                            stroke="#2C2D35"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M0.916656 0.916626H4.58332L7.03999 13.1908C7.12381 13.6128 7.35341 13.9919 7.68857 14.2617C8.02374 14.5315 8.44313 14.6749 8.87332 14.6666H17.7833C18.2135 14.6749 18.6329 14.5315 18.9681 14.2617C19.3032 13.9919 19.5328 13.6128 19.6167 13.1908L21.0833 5.49996H5.49999"
                                            stroke="#2C2D35"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61519_102">
                                            <rect width="22" height="22" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default App;
