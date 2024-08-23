import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ai from '../assets/img/ai.gif'
import app from '../assets/img/app.gif'
import game from '../assets/img/game.gif'
import es from '../assets/img/es.gif'
import wd from '../assets/img/wd.gif'
import erp from '../assets/img/erp.svg'
import ttu from '../assets/img/ttu.svg'
import soc from '../assets/img/soc.svg'
import psy from '../assets/img/psy.svg'
import newapp from '../assets/img/napp.svg'
import meta from '../assets/img/metaverse.svg'
import tech from '../assets/img/techBlog.svg'
import ContactUs from "./ContactUs";



function Home() {
    const [activeButton, setActiveButton] = useState(app);
    const [page, setPage] = useState("page1")

    const handleMouseOver = (buttonName:any) => {
        setActiveButton(buttonName);
    };

    const handleMouseOut = () => {
        setActiveButton("");
    };

    const handleChangePage2 = () => {
        setPage("page3");
    }

    const handleChangePage1 = () => {
        setPage("page2");
    }

    const handleChangePage = () => {
        setPage("page1");
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPage((prevPage) => {
                switch (prevPage) {
                    case "page1":
                        return "page2";
                    case "page2":
                        return "page3";
                    case "page3":
                        return "page1";
                    default:
                        return "page1";
                }
            });
        }, 5000);

        return () => clearInterval(intervalId);
    });

    return (
        <div>
            <div className="Home" style={{
                backgroundImage: activeButton ? `url(${activeButton})` : `url(${app})`
            }}>
                <button
                    onMouseOver={() => handleMouseOver(`${app}`)}
                    onMouseOut={handleMouseOut}
                    className="app-button buttons"
                ></button>
                <button
                    className="game-button buttons"
                    onMouseOver={() => handleMouseOver(`${game}`)}
                    onMouseOut={handleMouseOut}
                ></button>
                <button
                    className="ai-button buttons"
                    onMouseOver={() => handleMouseOver(`${ai}`)}
                    onMouseOut={handleMouseOut}
                ></button>
                <button
                    className="es-button buttons"
                    onMouseOver={() => handleMouseOver(`${es}`)}
                    onMouseOut={handleMouseOut}
                ></button>
                <button
                    className="wd-button buttons"
                    onMouseOver={() => handleMouseOver(`${wd}`)}
                    onMouseOut={handleMouseOut}
                ></button>
            </div>
            <div className="second-area-home">
                <div className="first-container">
                    <h1>Which of our applications should
                        you use according to your interests?</h1>
                    <p>Answer three questions to help us tailor our software <br/>
                        solutions to your interests.</p>
                </div>
                <div className="divider"></div>
                <div className="second-container">
                    <h1>Pick your like:</h1>
                    <div className="sc-buttons">
                        <button>Social Media</button>
                        <button>Pholosophy</button>
                        <button>Psychologhy</button>
                        <button>HR</button>
                        <button>Book</button>
                        <button>Play Game</button>
                        <button>Taxi</button>
                        <button>Management</button>
                        <button>Horror</button>
                        <button>Adventure</button>
                    </div>
                </div>
            </div>
            <div className="background-divider"></div>
            <div className="third-container">
                <h1>Featured Contents</h1>
                <input
                    type="radio"
                    name="pages-selection"
                    className="button-slide"
                    onClick={handleChangePage}
                    checked={page === "page1"}
                ></input>
                <input
                    type="radio"
                    name="pages-selection"
                    className="button-slide"
                    onClick={handleChangePage1}
                    checked={page === "page2"}
                ></input>
                <input
                    type="radio"
                    name="pages-selection"
                    className="button-slide"
                    onClick={handleChangePage2}
                    checked={page === "page3"}
                ></input>
                {
                    page === "page1" ? (
                        <CSSTransition
                            in={page === "page1"}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="first-page-area">
                                <div className="page-one">
                                    <img src={erp}/>
                                    <div className="first-container-pages">
                                        <h3>ARTICLE - ERP</h3>
                                        <p>Cognitive Flexibility in Early Childhood:
                                            A Contemporary View of the Development of
                                            Flexible Goal-Oriented Behavior </p>
                                    </div>
                                </div>
                                <div className="page-two">
                                    <img src={ttu}/>
                                    <div className="second-container-pages">
                                        <h3>APP NEWS</h3>
                                        <p>desMos Software Team announced
                                            that the necessary work has started
                                            to create scale in the application called
                                            "Pholosophy App"! </p>
                                    </div>
                                </div>
                                <div className="page-three">
                                    <div className="second-container-pages">
                                        <h3>ARTICLE-SOC</h3>
                                        <p>Evaluation of Social
                                            Development Projects:
                                            Can There be a Single Model? </p>
                                    </div>
                                    <img src={soc}/>
                                </div>
                            </div>
                        </CSSTransition>

                    ) : page === "page2" ? (
                        <CSSTransition
                            in={page === "page2"}
                            timeout={300}
                            classNames="page"
                            unmountOnExit>
                            <div className="first-page-area">
                                <div className="page-one">
                                    <img src={meta}/>
                                    <div className="first-container-pages">
                                        <h3>ARTICLE - W3</h3>
                                        <p>Cognitive Flexibility in Early Childhood:
                                            A Contemporary View of the Development of
                                            Flexible Goal-Oriented Behavior</p>
                                    </div>
                                </div>
                                <div className="page-two">
                                    <img src={newapp}/>
                                    <div className="second-container-pages">
                                        <h3>APP UPDATE</h3>
                                        <p>desMos Software Team announced
                                            that the necessary work has started
                                            to create scale in the application called
                                            "Pholosophy App"! </p>
                                    </div>
                                </div>
                                <div className="page-three">
                                    <div className="second-container-pages">
                                        <h3>ARTICLE-SOC</h3>
                                        <p>Evaluation of Social
                                            Development Projects:
                                            Can There be a Single Model? </p>
                                    </div>
                                    <img src={soc}/>
                                </div>
                            </div>
                        </CSSTransition>

                    ) : page === "page3" ? (
                        <CSSTransition
                            in={page === "page3"}
                            timeout={300}
                            classNames="page"
                            unmountOnExit>
                            <div className="first-page-area">
                                <div className="page-one">
                                    <img src={psy}/>
                                    <div className="first-container-pages">
                                        <h3>ARTICLE - PSY</h3>
                                        <p>Cognitive Flexibility in Early Childhood:
                                            A Contemporary View of the Development of
                                            Flexible Goal-Oriented Behavior</p>
                                    </div>
                                </div>
                                <div className="page-two">
                                    <img src={ttu}/>
                                    <div className="second-container-pages">
                                        <h3>APP NEWS</h3>
                                        <p>desMos Software Team announced
                                            that the necessary work has started
                                            to create scale in the application called
                                            "Pholosophy App"! </p>
                                    </div>
                                </div>
                                <div className="page-three">
                                    <div className="second-container-pages">
                                        <h3>ARTICLE-SOC</h3>
                                        <p>Evaluation of Social
                                            Development Projects:
                                            Can There be a Single Model? </p>
                                    </div>
                                    <img src={soc}/>
                                </div>
                            </div>
                        </CSSTransition>
                    ) : null
                }
            </div>
            <ContactUs/>
        </div>
    );
}

export default Home;