import cn from 'classnames';

import Button from "../atoms/Button";
import Image from '../atoms/Image';

import { t } from 'i18next'

import { subTitlesType } from '../../content/subTitles';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Carousel({
    isDarkMode,
    className,
    subTitles,
    currentIndex,
    isDirectionForward,
    isAnimationPaused,
    setIsAnimationPaused,
    cycleSubtitles
}: {
    isDarkMode: boolean,
    className?: string,
    subTitles: subTitlesType[],
    currentIndex: number,
    isDirectionForward: boolean,
    isAnimationPaused: boolean,
    setIsAnimationPaused: (value: boolean) => void,
    cycleSubtitles: (value: boolean) => void
}) {
    const [areButtonDisabled, setAreButtonDisabled] = useState(false);

    useEffect(() => {
        setAreButtonDisabled(true);
    }, [currentIndex])

    const onAnimationComplete = () => {
        setAreButtonDisabled(false);
    }

    const handleOnClick = (value: boolean) => {
        cycleSubtitles(value)
    };

    const transition = {
        duration: 1,
        type: 'spring',
        display: {
            delay: 1
        }
    }

    const variants = {
        prev: { zIndex: 1, x: "-100%", display: 'block', transition },
        inView: { zIndex: 2, x: "0%", transition: { duration: 1, type: 'spring', onComplete: () => onAnimationComplete() } },
        next: { zIndex: 1, x: "100%", display: 'block', transition },
        hidden: { display: 'none' }
    }

    const imgAlt = t(`header.subtitles.${subTitles[currentIndex].key}`);


    return (
        <div className={cn('carousel', className, { 'dark-mode': isDarkMode })} tabIndex={-1}>

            {subTitles.map((subTitle, index) => {
                const isInView = index === currentIndex;
                const isNext = index === (currentIndex + 1) % subTitles.length;
                const isPrev = (currentIndex - 1) < 0
                    ? index === (subTitles.length - 1)
                    : index === (currentIndex - 1);

                function animate() {
                    if (isInView) return 'inView';
                    if (isNext) return 'next';
                    if (isPrev) return 'prev';
                    return 'hidden'
                }

                return (
                    <motion.div
                        key={subTitle.key}
                        className='header__cover__carousel__motion'
                        variants={variants}
                        animate={animate()}
                    >
                        <Image
                            className={cn('header__cover__carousel__picture')}
                            src={subTitle.img.src}
                            lazySrc={subTitle.img.lazySrc}
                            alt={imgAlt}
                            fit='cover'
                        />
                    </motion.div>
                )
            })}

            <div className="header__cover__btns">
                <Button
                    className={cn(areButtonDisabled && !isDirectionForward && 'pressed')}
                    appearance="only-icon"
                    icon="arrow-left"
                    isDarkMode={isDarkMode}
                    disabled={areButtonDisabled}
                    label={t('header.btn.prev')}
                    onClick={() => handleOnClick(false)}
                />
                <Button
                    appearance="only-icon"
                    icon={isAnimationPaused ? 'play' : "pause"}
                    isDarkMode={isDarkMode}
                    label={t('header.btn.prev')}
                    onClick={() => setIsAnimationPaused(!isAnimationPaused)}
                />
                <Button
                    className={cn(areButtonDisabled && isDirectionForward && 'pressed')}
                    appearance="only-icon"
                    icon="arrow-right"
                    isDarkMode={isDarkMode}
                    disabled={areButtonDisabled}
                    label={t('header.btn.next')}
                    onClick={() => handleOnClick(true)}
                />
            </div>
        </div>
    );
}

export default Carousel;