import classNames from "classnames";
import React, { useState } from "react";


function Image({
    src,
    lazySrc,
    alt,
    fit,
    aspectRatio,
    className,
    onlyLoading = false,
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
    onlyLoading?: boolean
}) {
    const [isLoaded, setIsLoaded] = useState(false);

    const imageTag = React.useRef<HTMLImageElement>(null);

    if(imageTag.current && imageTag.current.complete && !isLoaded) {
        setIsLoaded(true);
    }

    const onLoad = () => {
        !isLoaded && setIsLoaded(true);
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

            {!onlyLoading && <img src={src} ref={imageTag} className="image-original" alt={alt} onLoad={onLoad} loading="lazy" />}

        </div>
    );
}

export default Image;