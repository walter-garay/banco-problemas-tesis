import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLAnchorElement> {}

export default function Button(props: Props) {
    const { href, target, children, className, ...rest } = props;

    return (
        <a
        href={href}
        target={target}
        className={`cursor-pointer font-semibold 
        rounded-md shadow-md flex items-center justify-center ${className}`}
        
        {...rest}
        >
        {children}
        </a>
    );
}