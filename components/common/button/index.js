import React from 'react';
import { ChevronRight,Send } from 'react-feather';

function Button(props) {
    return (
        <button a={`#`+props.href} className={props.Class} onClick={props.Clickble}>
            <span className={`title ${props.Title ? props.Title : ''}`}>{props.Name}</span>
            {props.BtnIcon &&
                <span className={props.BtnIcon}>
                   {!props.send ? <ChevronRight />: <Send/>}
                </span>
            }
        </button>
    );
}

export default Button;