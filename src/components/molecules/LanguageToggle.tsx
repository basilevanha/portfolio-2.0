import { useTranslation } from 'react-i18next';
import cn from 'classnames';

function LanguageToggle({
    onClick,
    isDarkMode
}: {
    onClick: () => void,
    isDarkMode: boolean
}) {

    const { t, i18n } = useTranslation();
    const ariaLabel = t('languageToggle');
    const isActive = i18n.language.includes("fr") ? false : true;

    return (
        <button
            className={cn('language-toggle', { "dark-mode": isDarkMode, "is-active": isActive })}
            onClick={onClick}
            aria-label={ariaLabel}
            aria-pressed={isActive}
            tabIndex={2}
            id="language-toggle"
        >
            <span className='language-toggle__lng fr'>
                {t('fr')}
            </span>
            <span className='language-toggle__lng en'>
                {t('en')}
            </span>
        </button>
    );
}

export default LanguageToggle;