import React from "react";
import './Btn.scss'

interface BtnProps {
    onClick: Function
    text: string
    type: BtnType
    size?: BtnSize
}

export enum BtnType {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary"
}

export enum BtnSize {
    Large = "lg",
    Small = "sm",
}

export const Btn = (props: BtnProps) => {
    const className = `Btn Btn--${props.type}`;
    const classNameWithSize = props.size != null ? `${className} Btn--${props.size}` : className;
    return (
        <button className={classNameWithSize} onClick={(e) => props.onClick(e)}>{props.text}</button>
    )
};