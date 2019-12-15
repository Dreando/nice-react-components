import React, {Component} from 'react';
import './Input.scss'

export enum InputState {
    Pristine,
    Focused,
    ValidatedSuccess,
    ValidatedFailure
}

export enum InputType {
    Text = "text",
    Password = "password",
    Email = "email"
}

export enum InputGroupOrientation {
    Vertical = "vertical",
    Horizontal = "horizontal"
}

interface Props {
    id: string,
    type: InputType,
    label: string,
    placeholder: string,
    orientation: InputGroupOrientation,
    value: string,
    onChange: Function
    validate: (value: string) => boolean
}

interface State {
    inputState: InputState
}

export default class Input extends Component<Props, State> {

    state = {
        inputState: InputState.Pristine
    };

    render() {
        return (
            <div className={`InputGroup InputGroup--${this.props.orientation}`}>
                <label className="InputGroup__label" htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    id={this.props.id}
                    type={this.props.type}
                    className={this.deriveClassName()}
                    value={this.props.value}
                    onChange={(e) => this.props.onChange(e.target.value)}
                    onBlur={() => this.onBlurAction()}
                    onFocus={() => this.onFocusAction()}
                    placeholder={this.props.placeholder}/>
            </div>
        );
    }

    private deriveClassName(): string {
        switch (+this.state.inputState) {
            case InputState.ValidatedSuccess:
                return 'InputGroup__input InputGroup__input--positive';
            case InputState.ValidatedFailure:
                return 'InputGroup__input InputGroup__input--negative';
            default:
                return 'InputGroup__input';
        }
    }

    private onBlurAction() {
        const validationResult = this.props.validate(this.props.value);
        if(validationResult) {
            this.setState({
                inputState: InputState.ValidatedSuccess
            })
        } else {
            this.setState({
                inputState: InputState.ValidatedFailure
            })
        }
    }

    private onFocusAction() {
        this.setState({
            inputState: InputState.Focused
        })
    }
}