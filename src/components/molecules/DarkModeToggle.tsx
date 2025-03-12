import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Icon from '../atoms/Icon';
import { useTheme } from '../../context/ThemeProvider';

function DarkModeToggle() {
    
    const {theme, toggleTheme} = useTheme();
    const { t } = useTranslation();
    const ariaLabel = t('darkModeToggle');

    return (
        <button
            className={cn('dark-mode-toggle')}
            onClick={toggleTheme}
            aria-label={ariaLabel}
            aria-pressed={theme === 'dark'}
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