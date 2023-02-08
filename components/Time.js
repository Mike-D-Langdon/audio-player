import styless from "./Time.module.css";

export const Time = ({ time }) => {
    return <h1 className={styles.time}>{time}</h1>;
};