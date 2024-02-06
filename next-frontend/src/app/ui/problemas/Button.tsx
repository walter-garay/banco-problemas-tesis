import React from 'react';

interface Props extends React.HTMLProps<HTMLAnchorElement> {}

export default function Button(props: Props) {
    const { href, target, children, ...rest } = props;

    return (
        <a
        href={href}
        target={target}
        className="bg-blue-700 hover:bg-blue-800 w-44 h-10 text-white font-semibold rounded-md shadow-md flex items-center justify-center"
        {...rest}
        >
        {children}
        </a>
    );
}
