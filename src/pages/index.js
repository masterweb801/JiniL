import React, { useEffect, useState, useCallback } from 'react'
import Offer from '../components/Offer'
import "./css/index.css"

const Home = () => {
    const [wishes, setwishes] = useState([]);
    const [ws, setws] = useState(false);
    const authtoken = localStorage.getItem("tokenflg");

    const fetchPosts = useCallback(async () => {
        // const url = "https://jinil.rf.gd/api/routes/fetchWishes.php";
        const url = "http://localhost/api/routes/fetchWishes.php";
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            }
        });
        const json = await response.json();
        if (json["response_code"] === 200) {
            let rwishes = json["response_data"];
            rwishes.reverse();
            if (rwishes.length > 0) {
                setwishes(rwishes);
                setws(true);
            } else {
                setws(false);
            }
        } else {
            alert("Something Went Wrong!");
            console.log(json['response_desc']);
        }

        // } catch (error) {
        //     alert("Something Went Wrong!");
        //     console.log(error);
        // }
    }, [authtoken])

    useEffect(() => {
        document.title = "JiniL | Home";
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div className='index-main'>
            {ws === true ?
                <div className='offers'>
                    {wishes.map((item, index) => {
                        return <Offer key={index} item={item} token={authtoken} />
                    })}
                </div> :
                <div className='index-error'>
                    No Wishes Availabe OR You Are already Working On Something!
                </div>
            }
        </div>
    )
}

export default Home