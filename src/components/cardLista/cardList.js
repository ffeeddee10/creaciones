import React, { useEffect, useState } from "react";
import "./cardcss.css";
import axios from "axios";

import { Link } from "react-router-dom";
import Cards from "../card/card";

const CardList = () => {
    const [character, setUsers] = useState([]);

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/character").then((res) =>
            setUsers(res.data)
        );
    }, []);

    return (
        <div className="Cards-List">
            {character.map((user) => {
                return (
                    <div key={user.id}>
                        <Link to={`/user-detail/${user.id}`}>
                            <Cards data={user} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CardList;
