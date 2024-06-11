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
import profilePicture from '../../assets/images/hero/basile-vannhaverbeke.webp';
import profilePictureLazy from '../../assets/images/hero/basile-vannhaverbeke@lazy.webp';

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
        const timeout = setTimeout(cycleSubtitles, 7000);
        return () => clearTimeout(timeout);
    }, [currentIndex, isAnimationPaused]);


    const cycleSubtitles = (isDirectionRight = isDirectionForward) => {
        if (isDirectionRight != isDirectionForward) setIsDirectionForwards(isDirectionRight);
        const nextIndex = (isDirectionRight ? currentIndex + 1 : currentIndex - 1);
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
                    cycleSubtitles={cycleSubtitles}
                />

                <div className="header__cover__darkmode-toggle" tabIndex={-1}>
                    <DarkModeToggle onClick={toggleDarkMode} isDarkMode={isDarkMode} />
                </div>
                <div className="header__cover__language-toggle" tabIndex={-1}>
                    <LanguageToggle onClick={toggleLanguage} isDarkMode={isDarkMode} />
                </div>
            </div>

            <motion.div
                // initial={{ scale: .7, opacity: 0 }}
                // animate={{ scale: 1, opacity: 1 }}
                // transition={{ delay: 1, type: 'spring' }}
                className="header__content"
            >
                <div className="header__content__profile">
                    <Image src={profilePicture} lazySrc={profilePictureLazy} alt={t('header.name')} aspectRatio="1x1" className="header__content__profile_picture" />
                    <div className="header__content__profile__icon">
                        <MorphIcon currentIndex={currentIndex} isDarkMode={isDarkMode} />
                    </div>
                </div>
                <div className="header__content__text">
                    
                    <p className="header__content__text__subtitle">
                        <span className="header__content__text__subtitle__animate">
                            <AnimatePresence>
                                <motion.span
                                    key={currentSubtitle.key}
                                    initial={isDirectionForward ? { y: '100%' } : { y: '-100%' }}
                                    animate={{ y: 0 }}
                                    exit={isDirectionForward ? { y: '-100%' } : { y: '100%' }}
                                    transition={{ duration: 1, type: 'spring' }}
                                >{t(`header.subtitles.${currentSubtitle.key}`)}</motion.span>
                            </AnimatePresence>
                        </span>
                    </p>
                    <h1 className="header__content__text__name">{t('header.name')}</h1>
                    <div className="header__content__text__contact">
                        <Button
                            isDarkMode={isDarkMode}
                            label={t('header.contact.label')}
                            icon="send"
                            onClick={(e) => sendMail(e)}
                        />
                    </div>
                </div>
            </motion.div>
        </header>
    );
}

export default Header;