import { useEffect, useState } from "react";

// Import utils
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { t } from "i18next";

// Import components
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import DarkModeToggle from "../molecules/DarkModeToggle";
import LanguageToggle from "../molecules/LanguageToggle";

// Import images
import profilePicture from '../../assets/images/hero/basile-vannhaverbeke.png';
import cofeePicture from '../../assets/images/hero/cofee.jpg';
import designerPicture from '../../assets/images/hero/designer.jpg';
import dronePicture from '../../assets/images/hero/drone.jpg';
import outdoorCodingPicture from '../../assets/images/hero/perfectionnist.jpg';
import classNames from "classnames";

function Header({
    isDarkMode,
    toggleDarkMode,
    toggleLanguage
}: {
    isDarkMode: boolean,
    toggleDarkMode: () => void
    toggleLanguage: () => void,
}) {

    const [currentSubtitleIndex, setCurrentubtitleIndex] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [currentDirection, setCurrentDirection] = useState('up');

    const subTitles = [
        {
            img: designerPicture,
            txt: t(''),
            svgPath: '',
        },
        {
            img: cofeePicture,
            txt: t(''),
            svgPath: '',
        },
        {
            img: dronePicture,
            txt: t(''),
            svgPath: '',
        },
        {
            img: outdoorCodingPicture,
            txt: t(''),
            svgPath: '',
        }
    ]

    useEffect(() => {
        const timeout = setTimeout(cycleSubtitles, 5000);
        return () => clearTimeout(timeout);
    }, [currentSubtitleIndex]);

    const cycleSubtitles = (direction: 'up' | 'down' = 'up') => {
        toggleButtonState(true);
        setCurrentDirection(direction);

        const nextIndex = direction === 'up' ? currentSubtitleIndex + 1 : currentSubtitleIndex - 1;

        if (nextIndex > subTitles.length - 1) {
            setCurrentubtitleIndex(0);
        } else if (nextIndex < 0) {
            setCurrentubtitleIndex(subTitles.length - 1);
        } else {
            setCurrentubtitleIndex(nextIndex);
        }
    }

    const toggleButtonState = (disabled: boolean) => {
        console.log('button is disabled ? ', disabled);
        setIsButtonDisabled(disabled);
    }

    const currentSubtitle = subTitles[currentSubtitleIndex];

    return (
        <header
            className={classNames('header', { 'dark-mode': isDarkMode })}
        >
            <div className="header__cover">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentSubtitle.img}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 1, type: 'spring' }}
                        onAnimationComplete={() => toggleButtonState(false)}
                        src={currentSubtitle.img}
                        alt=""
                    />
                </AnimatePresence>
                <div className="header__cover__darkmode-toggle">
                    <DarkModeToggle onClick={toggleDarkMode} isDarkMode={isDarkMode} />
                </div>
                <div className="header__cover__language-toggle">
                    <LanguageToggle onClick={toggleLanguage} isDarkMode={isDarkMode} />
                </div>

                <div className="header__cover__btns">
                    <Button className={classNames(isButtonDisabled && currentDirection === 'down' && 'pressed')} appearance="only-icon" icon="arrow-left" isDarkMode={isDarkMode} disabled={isButtonDisabled} label={t('header.btn.prev')} onClick={() => cycleSubtitles('down')} />
                    <Button className={classNames(isButtonDisabled && currentDirection === 'up' && 'pressed')} appearance="only-icon" icon="arrow-right" isDarkMode={isDarkMode} disabled={isButtonDisabled} label={t('header.btn.next')} onClick={() => cycleSubtitles('up')} />
                </div>
            </div>

            <div className="header__content"></div>
        </header>
    );
}

export default Header;