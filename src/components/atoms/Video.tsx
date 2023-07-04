// Import utils
import { t } from "i18next";
import cn from "classnames";

// Import assets
import macbookLayout from '../../assets/images/macbook.png';

function Video({
    classNames,
    src,
    project,
    tkey,
}: {
    classNames?: string,
    src: string,
    project: string,
    tkey: string
}) {

    const name = t('projects.' + project + '.content.' + tkey + '.name');
    const description = t('projects.' + project + '.content.' + tkey + '.description');
    const macbookLayoutAlt = t('macbook');

    return (
        <div className={cn('video', classNames)}>
            <img src={macbookLayout} alt={macbookLayoutAlt}></img>
            <video muted autoPlay loop>
                <source src={src} type="video/webm" />
                <meta itemProp="name" content={name} />
                <meta itemProp="description" content={description} />
                {/* <meta itemProp="thumbnail" content="my-video-thumbnail-path.jpg" /> */}
            </video>
        </div>
    );
}

export default Video;