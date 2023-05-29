import React from 'react';
import cn from 'classnames';

const Icon = ({
    name,
    alt
}: {
    name: string,
    alt: string,
}) => {
    return (
        <svg
            className={cn('icon', { [`icon-${name}`]: true })}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            aria-labelledby={alt}
            role="graphics-symbol"
        >
            <use href={'sprite.svg#' + name} />
        </svg>
    )
}

export default Icon;