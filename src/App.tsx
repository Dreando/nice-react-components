import './App.scss';
import {Btn, BtnSize, BtnType} from "./components/Btn";
import {NavBtn, NavBtnType} from "./components/NavBtn";
import {BrowserRouter} from "react-router-dom";
import Input, {InputGroupOrientation, InputType} from "./components/form/Input";

import React, {Component} from 'react';
import {stringify} from "querystring";

interface State {
    input1Val: string,
    input2Val: string
}

export default class App extends Component<any, State> {

    state = {
        input1Val: "",
        input2Val: ""
    };

    render() {
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
                                <Btn text={"Primary Button"} type={BtnType.Primary}
                                     onClick={(e: any) => console.log(e)}/>
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
                                <Btn text={"Tertiary Button"} type={BtnType.Tertiary}
                                     onClick={(e: any) => console.log(e)}/>
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

                    {/* Section Inputs */}

                    <section className="Section">
                        <p className="Section__title">
                            Input
                        </p>
                        <p className="Section__subtitle">
                            Horizontal relation between input and label
                        </p>
                        <div className="Section__showcase">
                            <pre className="Section__code">
{`<Input
    orientation={InputGroupOrientation.Horizontal}
    id={"input2"}
    type={InputType.Text}
    label={"Login"}
    placeholder={"E.g. John84"}
    value={this.state.input2Val}
    onChange={(value: string) => this.setState({input2Val: value})}
    validate={(val) => val !== ''}
/>`}
                            </pre>
                            <div className="Section__demo">
                                <Input
                                    orientation={InputGroupOrientation.Horizontal}
                                    id={"input2"}
                                    type={InputType.Text}
                                    label={"Login"}
                                    placeholder={"E.g. John84"}
                                    value={this.state.input1Val}
                                    onChange={(value: string) => this.setState({input1Val: value})}
                                    validate={(val) => val !== ''}
                                />
                            </div>
                        </div>
                        <p className="Section__subtitle">
                            Vertical relation between input and label
                        </p>
                        <div className="Section__showcase">
                            <pre className="Section__code">
{`<Input
    orientation={InputGroupOrientation.Vertical}
    id={"input2"}
    type={InputType.Text}
    label={"Login"}
    placeholder={"E.g. John84"}
    value={this.state.input2Val}
    onChange={(value: string) => this.setState({input2Val: value})}
    validate={(val) => val !== ''}
/>`}
                            </pre>
                            <div className="Section__demo">
                                <Input
                                    orientation={InputGroupOrientation.Vertical}
                                    id={"input2"}
                                    type={InputType.Text}
                                    label={"Login"}
                                    placeholder={"E.g. John84"}
                                    value={this.state.input2Val}
                                    onChange={(value: string) => this.setState({input2Val: value})}
                                    validate={(val) => val !== ''}
                                />
                            </div>
                        </div>
                    </section>
                    {/* Section form */}
                    <section className="Section">
                        <p className="Section__title">
                            Full form
                        </p>
                    </section>
                </div>
            </BrowserRouter>
        );
    }
}