import { useState, useEffect } from "react";
import "./styles.scss";

const HomePage = ({data}) => {

    const [info, setInfo] = useState("Home page");

    useEffect(() => {
        if (data) {
            setInfo(data)
        }
    }, data);

    return (
        <div className="home-page">
            {info}
        </div>
    );
}

export default HomePage;
