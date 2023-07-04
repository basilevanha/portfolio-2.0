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

// Import content
import { subTitles } from '../../content/subTitles';

// Import images
import profilePicture from '../../assets/images/hero/basile-vannhaverbeke.png';

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
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
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
        setIsButtonDisabled(true);
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

    const imgAlt = t(`header.subtitles.${currentSubtitle.key}`);

    return (
        <header
            className={cn('header', { 'dark-mode': isDarkMode })}
        >
            <div className="header__cover">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentSubtitle.key}
                        initial={isDirectionForward ? { x: '100%' } : { x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={isDirectionForward ? { x: '-100%' } : { x: '100%' }}
                        transition={{ duration: 1, type: 'spring' }}
                        onAnimationComplete={() => setIsButtonDisabled(false)}
                        src={currentSubtitle.img}
                        alt={imgAlt}
                    />
                </AnimatePresence>
                <div className="header__cover__darkmode-toggle">
                    <DarkModeToggle onClick={toggleDarkMode} isDarkMode={isDarkMode} />
                </div>
                <div className="header__cover__language-toggle">
                    <LanguageToggle onClick={toggleLanguage} isDarkMode={isDarkMode} />
                </div>
                <div className="header__cover__btns">
                    <Button className={cn(isButtonDisabled && !isDirectionForward && 'pressed')} appearance="only-icon" icon="arrow-left" isDarkMode={isDarkMode} disabled={isButtonDisabled} label={t('header.btn.prev')} onClick={() => handleOnClick(false)} />
                    <Button appearance="only-icon" icon={isAnimationPaused ? 'play' : "pause"} isDarkMode={isDarkMode} label={t('header.btn.prev')} onClick={() => setIsAnimationPaused(!isAnimationPaused)} />
                    <Button className={cn(isButtonDisabled && isDirectionForward && 'pressed')} appearance="only-icon" icon="arrow-right" isDarkMode={isDarkMode} disabled={isButtonDisabled} label={t('header.btn.next')} onClick={() => handleOnClick(true)} />
                </div>
            </div>

            <div className="header__content">
                <div className="header__content__profile">
                    <Image src={profilePicture} alt={t('header.name')} aspectRatio="1x1" className="header__content__profile_picture" />
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