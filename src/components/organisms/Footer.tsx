// Import utils
import cn from 'classnames';
import Icon from '../atoms/Icon';
import { t } from 'i18next';
import { useTheme } from '../../context/ThemeProvider';

function Footer() {

    const {theme} = useTheme();

    return (
        <footer className={cn('footer', { 'dark-mode': theme === 'dark' })}>
            <span className='footer-logo'><Icon name={'logo'} /></span>
            <p>{t('footer.copyrights')}</p>
        </footer>
    );
}

export default Footer;