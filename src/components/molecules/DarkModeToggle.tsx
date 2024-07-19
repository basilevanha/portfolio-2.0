import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Icon from '../atoms/Icon';

function DarkModeToggle({
    onClick,
    isDarkMode
}: {
    onClick: () => void,
    isDarkMode: boolean
}) {

    const { t } = useTranslation();
    const ariaLabel = t('darkModeToggle');

    return (
        <button
            className={cn('dark-mode-toggle', { "dark-mode": isDarkMode })}
            onClick={onClick}
            aria-label={ariaLabel}
            aria-pressed={isDarkMode}
            tabIndex={1}
            id="dark-mode-toggle"
        >
            <span className='dark-mode-toggle__icon'>
                <Icon name="sun" />
            </span>
            <span className='dark-mode-toggle__icon'>
                <Icon name="moon" />
            </span>
        </button>
    );
}

export default DarkModeToggle;