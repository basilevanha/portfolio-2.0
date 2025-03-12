// Import utils
import cn from 'classnames';
import Icon from '../atoms/Icon';
import { t } from 'i18next';

function Footer() {
    return (
        <footer className={cn('footer')}>
            <span className='footer-logo'><Icon name={'logo'} /></span>
            <p>{t('footer.copyrights')}</p>
        </footer>
    );
}

export default Footer;