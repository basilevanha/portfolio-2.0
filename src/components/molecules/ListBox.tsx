import cn from 'classnames';
import Icon from '../atoms/Icon';
import { BoxType } from '../../content/infos';
import { t } from 'i18next';

import Button from '../atoms/Button';

function ListBox({
    classNames,
    isDarkMode,
    content
}: {
    classNames?: string,
    isDarkMode: boolean,
    content: BoxType
}) {

    return (
        <div className={cn('list-box', classNames, {
            "dark-mode": isDarkMode
        })}>
            <h2 className='list-box__title'>{content.type === 'btns' ? t(`infos.links.title`) : t(`infos.${content.key}.title`)}</h2>
            <ul className='list-box__list'>
                {content.type == 'list' && content.items.map((item, index) => (
                    <li key={index} className='list-box__item'>
                        <span className='list-box__item__icon'><Icon name={item}></Icon></span>
                        <p>{t(`icon.${item}`)}</p>
                    </li>
                ))}

                {content.type == 'btns' && content.items.map((item, index) => {

                    const btnhref = t(`infos.links.items.${item.key}.href`);

                    return (
                        <li key={index} className='list-box__item'>
                            <Button
                                isDarkMode={isDarkMode}
                                href={btnhref}
                                label={t(`infos.links.items.${item.key}.label`)}
                                target={item.target}
                                icon={item.icon}
                                appearance='secondary'
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListBox;