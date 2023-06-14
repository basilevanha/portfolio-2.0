import classNames from "classnames";

function Image({
    src,
    srcMd = src,
    srcLg = src,
    alt,
    fit,
    aspectRatio,
    className
}: {
    className?: string,
    // Specify the image source
    src: string,
    // Give a tablet version
    srcMd?: string,
    // Give a desktop version
    srcLg?: string,
    // Image description
    alt: string,
    // Provide an aspect ratio
    aspectRatio?: '1x1' | '4x3' | '16x9'
    fit?: 'cover' | 'contain' | 'fill',
}) {
    return (
        <div className={classNames('image', className, {
            'aspect-ratio': aspectRatio,
            'ar-1x1': aspectRatio === '1x1',
            'ar-4x4': aspectRatio === '4x3',
            'ar-16x9': aspectRatio === '16x9',
            'fit-cover': fit === 'cover',
            'fit-contain': fit === 'contain',
            'fit-fill': fit === 'fill',
        })}>
            <picture>
                <source srcSet={srcLg} media="min-width: 768px" />
                <source srcSet={srcMd} media="min-width: 1440px" />
                <img src={src} alt={alt} />
            </picture>
        </div>
    );
}

export default Image;