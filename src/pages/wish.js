import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./css/wish.css"

const Wish = () => {
    let { id } = useParams();
    useEffect(() => {
        document.title = `Wish No. ${id}`;
    }, [id]);
    return (
        <div className='container'>

            <h1>{`Wish No. ${id}`}</h1>

            <div className='main'>

                <ul className='extra'>
                    <li>
                        <label>
                            <i className='bx bxs-id-card'></i>
                            <b>WISH ID</b>
                        </label>
                        <p>{id}</p>
                    </li>
                    <li>
                        <label>
                            <i className='bx bx-street-view'></i>
                            <b>NAME</b>
                        </label>
                        <p>MD Mobashshirul Karim</p>
                    </li>
                    <li>
                        <label>
                            <i className='bx bxs-envelope'></i>
                            <b>EMAIL</b>
                        </label>
                        <a id='email-link' target='_blank' rel="noreferrer" href='mailto:masterweb801@gmail.com'>masterweb801@gmail.com</a>
                    </li>
                    <li>
                        <label>
                            <i className='bx bxs-category' ></i>
                            <b>CATEGORY</b>
                        </label>
                        <p>Video Editing</p>
                    </li>
                    <li>
                        <label>
                            <i className='bx bx-money'></i>
                            <b>BUDGET</b>
                        </label>
                        <p>69 $</p>
                    </li>
                </ul>

                <div className='content'>
                    <h2>Details :-</h2>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                        Velit fugiat aliqua amet est consectetur ut consequat cillum adipisicing. Consectetur dolore eiusmod incididunt et velit. Dolor dolor cillum laborum adipisicing amet exercitation.
                    </p>
                </div>
            </div>
            <button className='button-89'>Start Working</button>
        </div>
    )
}

export default Wish