import React from 'react';
import { t } from 'i18next';
import cn from 'classnames';

// Name is equal to the svg id in "src/assets/icons"
export type IconName = 'adobe'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-up'
    | 'css'
    | 'emakina'
    | 'external-link'
    | 'figma'
    | 'html'
    | 'javascript'
    | 'language'
    | 'laniche'
    | 'logo'
    | 'proximus'
    | 'react'
    | 'storybook'
    | 'versett'
    | 'wordpress'
    | 'sun'
    | 'moon'
    | 'send'
    | 'play'
    | 'pause'
    | 'framer'
    | 'illustrator'
    | 'invision'
    | 'pdf'
    | 'typescript'
    | 'xd'
    | 'twig';

interface IconProps {
    name: IconName
}

const Icon = ({
    name
}: IconProps) => {
    return (
        <svg
            className={cn('icon', { [`icon-${name}`]: true })}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            aria-labelledby={`${t(`icon.${name}`)}`}
            role="graphics-symbol"
        >
            <use href={'sprite.svg#' + name} />
        </svg>
    )
}

export default Icon;