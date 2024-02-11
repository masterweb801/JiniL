import React, { useEffect, useState } from 'react'
import "./css/work.css"

const Work = () => {
    const [working, setworking] = useState(false);
    const [wrkd, setwrkd] = useState([]);
    const [state, setState] = useState(15);

    async function getWork() {
        const authtoken = localStorage.getItem("tokenflg");
        const url = "https://jinil.rf.gd/api/routes/getWork.php";
        // const url = "http://localhost/api/routes/getWork.php";
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

            if (rwishes['stc']) {
                if (rwishes['status'] == "done") {
                    setworking(false);
                } else {
                    setworking(true);
                    setwrkd(rwishes);
                    setTimeout(() => {
                        document.getElementById("prog-bar").style.width = `${rwishes['stc']}%`;
                    }, 1000)
                }
            } else {
                setworking(false);
            }
        } else {
            alert("Something Went Wrong!");
            console.log(json['response_desc']);
        }

        // } catch (error) {
        //     alert("Something Went Wrong!");
        //     console.log(error);
        // }
    }

    async function Update() {
        const authtoken = localStorage.getItem("tokenflg");
        const url = "https://jinil.rf.gd/api/routes/setState.php";
        // const url = "http://localhost/api/routes/setState.php";
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken,
            },
            body: JSON.stringify({
                "id": wrkd['id'],
                "state": state,
            })
        });
        const json = await response.json();
        if (json["response_code"] === 200) {
            let rwishes = json["response_data"];
            if (rwishes) {
                document.getElementById("update-btn").disabled = true;
                document.getElementById("prog-bar").style.width = `${state}%`;
            } else {
                alert("Something Went Wrong!");
                console.log(json['response_desc']);
            }
        } else {
            alert("Something Went Wrong!");
            console.log(json['response_desc']);
        }
        // } catch (error) {
        //     alert("Something Went Wrong!");
        //     console.log(error);
        // }
    }

    async function Complete() {
        const authtoken = localStorage.getItem("tokenflg");
        const url = "https://jinil.rf.gd/api/routes/setState.php";
        // const url = "http://localhost/api/routes/setState.php";
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken,
            },
            body: JSON.stringify({
                "id": wrkd['id'],
                "state": 100,
            })
        });
        const json = await response.json();
        if (json["response_code"] === 200) {
            let rwishes = json["response_data"];
            if (rwishes) {
                document.getElementById("done-btn").disabled = true;
                document.getElementById("prog-bar").style.width = '100%';
            } else {
                alert("Something Went Wrong!");
                console.log(json['response_desc']);
            }
        } else {
            alert("Something Went Wrong!");
            console.log(json['response_desc']);
        }
        // } catch (error) {
        //     alert("Something Went Wrong!");
        //     console.log(error);
        // }
    }

    useEffect(() => {
        document.title = "JiniL | Work";
        getWork();
    }, [working])

    return (
        <div className='container' id="work-main">
            {working === true ?
                <>
                    <h1>{wrkd['title']}</h1>
                    <div className="progress">
                        <div className="bar" id='prog-bar'></div>
                    </div>
                    <div className='main'>

                        <ul className='extra'>
                            <li>
                                <label>
                                    <i className='bx bxs-id-card'></i>
                                    <b>WISH ID</b>
                                </label>
                                <p>{wrkd['id']}</p>
                            </li>
                            <li>
                                <label>
                                    <i className='bx bx-street-view'></i>
                                    <b>NAME</b>
                                </label>
                                <p>{wrkd['name']}</p>
                            </li>
                            <li>
                                <label>
                                    <i className='bx bxs-envelope'></i>
                                    <b>EMAIL</b>
                                </label>
                                <a id='email-link' target='_blank' rel="noreferrer" href={`mailto:${wrkd['email']}`}>{wrkd['email']}</a>
                            </li>
                            <li>
                                <label>
                                    <i className='bx bxs-category' ></i>
                                    <b>CATEGORY</b>
                                </label>
                                <p>{wrkd['category']}</p>
                            </li>
                            <li>
                                <label>
                                    <i className='bx bx-money'></i>
                                    <b>BUDGET</b>
                                </label>
                                <p>{wrkd['budget']} $</p>
                            </li>
                        </ul>
                        <div className='content'>
                            <h2>Details :-</h2>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;{wrkd['details']}
                            </p>
                        </div>
                    </div>

                    <div className='upandown'>
                        {wrkd['status'] === "checking" ?
                            <>
                                <div className='review-msg'>
                                    Your Project Is Being Reviewed
                                </div>
                            </> : <>
                                <div className='state-in'>
                                    <input type='number' min={30} max={90} placeholder='Proccess Status (%)' value={state} onChange={(e) => { setState(e.target.value) }} />
                                </div>
                                <div className='up-btn'>
                                    <button className='button-72' id='update-btn' onClick={Update}>Update</button>
                                </div>
                                <div className='done-btn'>
                                    <button className='button-77' id='done-btn' onClick={Complete}>Complete</button>
                                </div>
                            </>
                        }
                    </div>
                </>
                : <div className='work-error'>
                    You Are Not Working On Any Project!
                </div>
            }
        </div>
    )
}

export default Work