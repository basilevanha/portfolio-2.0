import cn from 'classnames';
import Icon, { IconName } from '../atoms/Icon';
import { t } from 'i18next';

import Button, { ButtonProps } from '../atoms/Button';

function ListBox({
    classNames,
    isDarkMode,
    tkey,
    items,
    isLinks
}: {
    classNames?: string,
    isDarkMode: boolean,
    tkey?: string,
    items: {
        key: string,
        icon: IconName,
        target?: ButtonProps['target']
    }[],
    isLinks?: boolean
}) {
    return (
        <div className={cn('list-box', classNames, {
            "dark-mode": isDarkMode
        })}>
            <h2 className='list-box__title'>{isLinks ? t(`infos.links.title`) : t(`infos.${tkey}.title`)}</h2>
            <ul className='list-box__list'>
                {items.map((item, index) => {

                    const btnHref = t(`infos.links.items.${item.key}.href`);

                    return (
                        <li key={index} className='list-box__item'>
                            {isLinks
                                ?
                                <Button isDarkMode={isDarkMode} href={btnHref} label={t(`infos.links.items.${item.key}.label`)} target={item.target} icon={item.icon} appearance='secondary' />
                                :
                                <>
                                    <span className='list-box__item__icon'><Icon name={item.icon}></Icon></span>
                                    <p>{t(`infos.${tkey}.items.${item.key}`)}</p>
                                </>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListBox;