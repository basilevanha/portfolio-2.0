import { useEffect, useState } from "react";

// Import utils
import { AnimatePresence, motion } from "framer-motion";
import { t } from "i18next";
import cn from "classnames";

// Import components
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import DarkModeToggle from "../molecules/DarkModeToggle";
import LanguageToggle from "../molecules/LanguageToggle";
import MorphIcon from "../molecules/MorphIcon";
import Carousel from "../molecules/Carousel";

// Import content
import { subTitles } from '../../content/subTitles';

// Import images
import profilePicture from '../../assets/images/hero/basile-vannhaverbeke.png';
import profilePictureLazy from '../../assets/images/hero/basile-vannhaverbeke@lazy.jpg';

function Header({
    isDarkMode,
    toggleDarkMode,
    toggleLanguage
}: {
    isDarkMode: boolean,
    toggleDarkMode: () => void
    toggleLanguage: () => void,
}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDirectionForward, setIsDirectionForwards] = useState(true);
    const [watchButtonClicked, setWatchButtonClicked] = useState(false);
    const [isAnimationPaused, setIsAnimationPaused] = useState(false);

    const currentSubtitle = subTitles[currentIndex];

    window.addEventListener('blur', () => {
        setIsAnimationPaused(true);
    });

    window.addEventListener('focus', () => {
        setIsAnimationPaused(false);
    });

    useEffect(() => {
        if (isAnimationPaused) return;
        const timeout = setTimeout(cycleSubtitles, 4000);
        return () => clearTimeout(timeout);
    }, [currentIndex, isAnimationPaused]);

    // First step when buttton is clicked : change the animation direction to avoid glitch
    // Then switch the "button" state
    const handleOnClick = (direction = true) => {
        setIsDirectionForwards(direction);
        setWatchButtonClicked(!watchButtonClicked);
    }

    // Watch "button" state to trigger animation
    useEffect(() => {
        cycleSubtitles();
    }, [watchButtonClicked])

    const cycleSubtitles = () => {
        const nextIndex = (isDirectionForward ? currentIndex + 1 : currentIndex - 1);
        nextIndex < 0 ? setCurrentIndex(subTitles.length - 1) : setCurrentIndex(nextIndex % subTitles.length);
    }

    const sendMail = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const cryptedMailB64 = "YmFzaWxlLnZhbmhhQG91dGxvb2suZnI=";

        const formattedBody = t('mailto.body', { interpolation: { escapeValue: false } })
        const encodedBody = encodeURIComponent(formattedBody);

        const mailTo = 'mailto:' + atob(cryptedMailB64) + '?subject=' + t("mailto.subject") + '&body=' + encodedBody;
        document.location.href = mailTo;
    }

    return (
        <header
            className={cn('header', { 'dark-mode': isDarkMode })}
        >
            <div className="header__cover">
                <Carousel
                    className="header__cover__carousel"
                    subTitles={subTitles}
                    currentIndex={currentIndex}
                    isDarkMode={isDarkMode}
                    isDirectionForward={isDirectionForward}
                    isAnimationPaused={isAnimationPaused}
                    setIsAnimationPaused={setIsAnimationPaused}
                    handleOnClick={handleOnClick}
                />

                <div className="header__cover__darkmode-toggle">
                    <DarkModeToggle onClick={toggleDarkMode} isDarkMode={isDarkMode} />
                </div>
                <div className="header__cover__language-toggle">
                    <LanguageToggle onClick={toggleLanguage} isDarkMode={isDarkMode} />
                </div>
            </div>

            <div className="header__content">
                <div className="header__content__profile">
                    <Image src={profilePicture} lazySrc={profilePictureLazy} alt={t('header.name')} aspectRatio="1x1" className="header__content__profile_picture" />
                    <div className="header__content__profile__icon">
                        <MorphIcon currentIndex={currentIndex} />
                    </div>
                </div>
                <div className="header__content__text">
                    <h1>{t('header.name')}</h1>
                    <p>
                        <AnimatePresence>
                            <motion.span
                                key={currentSubtitle.key}
                                initial={isDirectionForward ? { y: '100%' } : { y: '-100%' }}
                                animate={{ y: 0 }}
                                exit={isDirectionForward ? { y: '-100%' } : { y: '100%' }}
                                transition={{ duration: 1, type: 'spring' }}
                            >{t(`header.subtitles.${currentSubtitle.key}`)}</motion.span>
                        </AnimatePresence>
                    </p>
                    <Button
                        isDarkMode={isDarkMode}
                        label={t('header.contact.label')}
                        icon="send"
                        onClick={(e) => sendMail(e)}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;