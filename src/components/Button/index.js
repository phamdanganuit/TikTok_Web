import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({ to, href, primary, children, onClick,className, disabled = false, ...props }) {
    let Comp = 'button';
    const componentProps = { onClick, ...props };
    if(disabled)
    {
        delete componentProps.onClick;
    }


    if (to) {
        Comp = Link;
        componentProps.href = to;
    } else if (href) {
        Comp = 'a';
        componentProps.href = href;
    }

    const classes = cx('wrapper', { primary, disabled,[className]:className });

    return (
        <Comp className={classes} {...componentProps}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
