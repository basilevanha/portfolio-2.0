// Import utils
import { t } from "i18next";
import cn from "classnames";

import Image from "./Image";

// Import assets
import macbookLayout from '../../assets/images/macbook.webp';
import macbookLayoutLazy from '../../assets/images/macbook@lazy.webp';

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
            <Image src={macbookLayout} alt={macbookLayoutAlt} lazySrc={macbookLayoutLazy} />
            <video muted autoPlay loop>
                <source src={src} type="video/webm" />
                <meta itemProp="name" content={name} />
                <meta itemProp="description" content={description} />
                {/* <meta itemProp="thumbnail" content="my-video-thumbnail-path.webp" /> */}
            </video>
        </div>
    );
}

export default Video;