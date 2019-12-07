import React from 'react';
import './App.scss';
import {Btn, BtnSize, BtnType} from "./components/Btn";
import {NavBtn, NavBtnType} from "./components/NavBtn";
import {BrowserRouter} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="Header">
                {/* Section buttons */}
                <section className="Section">
                    <p className="Section__title">
                        Button
                    </p>
                    <div className="Section__showcase">
                    <span className="Section__code">
                        {'<Btn text={"Primary Button"} type={BtnType.Primary} onClick={(e) => console.log(e)} />'}
                    </span>
                        <div className="Section__demo">
                            <Btn text={"Primary Button"} type={BtnType.Primary} onClick={(e: any) => console.log(e)}/>
                        </div>
                    </div>
                    <div className="Section__showcase">
                    <span className="Section__code">
                        {'<Btn text={"Secondary Button"} type={BtnType.Secondary} onClick={(e) => console.log(e)} />'}
                    </span>
                        <div className="Section__demo">
                            <Btn text={"Secondary Button"} type={BtnType.Secondary}
                                 onClick={(e: any) => console.log(e)}/>
                        </div>
                    </div>
                    <div className="Section__showcase">
                    <span className="Section__code">
                        {'<Btn text={"Tertiary Button"} type={BtnType.Tertiary} onClick={(e) => console.log(e)} />'}
                    </span>
                        <div className="Section__demo">
                            <Btn text={"Tertiary Button"} type={BtnType.Tertiary} onClick={(e: any) => console.log(e)}/>
                        </div>
                    </div>
                    <div className="Section__showcase">
                    <span className="Section__code">
                        {'<Btn text={"Button Small"} type={BtnType.Primary} size={BtnSize.Small} onClick={(e: any) => console.log(e)}/>'}
                    </span>
                        <div className="Section__demo">
                            <Btn text={"Button Small"} type={BtnType.Primary} size={BtnSize.Small}
                                 onClick={(e: any) => console.log(e)}/>
                        </div>
                    </div>
                    <div className="Section__showcase">
                    <span className="Section__code">
                        {'<Btn text={"Button Large"} type={BtnType.Primary} size={BtnSize.Large} onClick={(e: any) => console.log(e)}/>'}
                    </span>
                        <div className="Section__demo">
                            <Btn text={"Button Large"} type={BtnType.Primary} size={BtnSize.Large}
                                 onClick={(e: any) => console.log(e)}/>
                        </div>
                    </div>
                </section>

                {/* Section nav buttons */}

                <section className="Section">
                    <p className="Section__title">
                        Navigation Button (depends on react-router-dom)
                    </p>
                    <div className="Section__showcase">
                    <span className="Section__code">
                        {'<NavBtn type={NavBtnType.Primary} text={"Primary Link"} to={"#"}/>'}
                    </span>
                        <div className="Section__demo">
                            <NavBtn type={NavBtnType.Primary} text={"Primary Link"} to={"#"}/>
                        </div>
                    </div>
                    <div className="Section__showcase">
                    <span className="Section__code">
                        {'<NavBtn type={NavBtnType.Secondary} text={"Secondary Link"} to={"#"}/>'}
                    </span>
                        <div className="Section__demo">
                            <NavBtn type={NavBtnType.Secondary} text={"Secondary Link"} to={"#"}/>
                        </div>
                    </div>
                    <div className="Section__showcase">
                    <span className="Section__code">
                        {'<NavBtn type={NavBtnType.Tertiary} text={"Tertiary Link"} to={"#"}/>'}
                    </span>
                        <div className="Section__demo">
                            <NavBtn type={NavBtnType.Tertiary} text={"Tertiary Link"} to={"#"}/>
                        </div>
                    </div>
                </section>

            </div>
        </BrowserRouter>
    );
};

export default App;
