import React, { useEffect, useState, useCallback } from 'react'
import Offer from '../components/Offer'
import "./css/index.css"

const Home = (props) => {
    const [wishes, setwishes] = useState([]);
    const authtoken = localStorage.getItem("tokenflg");

    const fetchPosts = useCallback(async () => {
        // const url = "http://jinil.rf.gd/api/routes/fetchWishes.php";
        const url = "http://localhost/api/routes/fetchWishes.php";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ authtoken })
            });
            const json = await response.json();
            if (json["response_code"] === 200) {
                let rwishes = json["response_data"];
                rwishes.reverse();
                setwishes(rwishes);
            } else {
                alert("Something Went Wrong!");
            }

        } catch (error) {
            alert("Something Went Wrong!");
            console.log(error);
        }
    }, [authtoken])

    useEffect(() => {
        document.title = "JiniL | Home";
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div className='offers'>
            {wishes.map((item, index) => {
                return <Offer key={index} item={item} token={authtoken} />
            })}
        </div>
    )
}

export default Home