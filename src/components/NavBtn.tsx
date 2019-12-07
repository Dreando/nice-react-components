import React from "react";
import './NavBtn.scss'
import {Link} from "react-router-dom";

export enum NavBtnType {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary"
}

interface BtnProps {
    to: string
    text: string,
    type: NavBtnType
}

export const NavBtn = (props: BtnProps) => {
    const className = `NavBtn NavBtn--${props.type}`;
    return (
        <Link className={className} to={props.to}>{props.text} <span className="NavBtn__arrow">&rarr;</span></Link>
    )
};