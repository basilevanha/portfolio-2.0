import classNames from "classnames";
import { useState } from "react";

function Image({
    src,
    lazySrc,
    alt,
    fit,
    aspectRatio,
    className,
}: {
    className?: string,
    // Specify the image source
    src: string,
    lazySrc: string,
    // Image description
    alt: string,
    // Provide an aspect ratio
    aspectRatio?: '1x1' | '4x3' | '16x9'
    fit?: 'cover' | 'contain' | 'fill',
}) {
    const [isLoaded, setIsLoaded] = useState(false);

    const onLoad = () => {
        setIsLoaded(true);
    }

    return (
        <div className={classNames('image', className, {
            'loading': lazySrc && !isLoaded,
            'aspect-ratio': aspectRatio,
            'ar-1x1': aspectRatio === '1x1',
            'ar-4x4': aspectRatio === '4x3',
            'ar-16x9': aspectRatio === '16x9',
            'fit-cover': fit === 'cover',
            'fit-contain': fit === 'contain',
            'fit-fill': fit === 'fill',
        })}>
            <img src={lazySrc} className="image-placeholder" alt={alt} />

            <picture>
                <img src={src} className="image-original" alt={alt} onLoad={onLoad} loading="lazy" />
            </picture>

        </div>
    );
}

export default Image;