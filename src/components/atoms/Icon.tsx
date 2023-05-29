import React from 'react';

const Icon = ({
    name
}: {
    name: string
}) => {
    return (
        <svg className={"icon-" + name} width="100" height="100" viewBox="0 0 100 100">
            <use href={'sprite.svg#' + name} />
        </svg>
    )
}

export default Icon;