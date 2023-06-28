// Import utils
import cn from 'classnames';
import Icon from '../atoms/Icon';
import { t } from 'i18next';

function Footer({
    isDarkMode
}: {
    isDarkMode: boolean,
}) {

    return (
        <footer className={cn('footer', { 'dark-mode': isDarkMode })}>
            <span className='footer-logo'><Icon name={'logo'} /></span>
            <p>{t('footer.copyrights')}</p>
        </footer>
    );
}

export default Footer;