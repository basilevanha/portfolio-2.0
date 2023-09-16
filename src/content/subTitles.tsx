// Import images
import availablePicture from '../assets/images/hero/available.webp';
import availablePictureLazy from '../assets/images/hero/available@lazy.webp';
import coderPicture from '../assets/images/hero/coder.webp';
import coderPictureLazy from '../assets/images/hero/coder@lazy.webp';
import designerPicture from '../assets/images/hero/designer.webp';
import designerPictureLazy from '../assets/images/hero/designer@lazy.webp';
import coffeePicture from '../assets/images/hero/coffee.webp';
import coffeePictureLazy from '../assets/images/hero/coffee@lazy.webp';
import dronePicture from '../assets/images/hero/drone.webp';
import dronePictureLazy from '../assets/images/hero/drone@lazy.webp';

export type subTitlesType = {
    key: string;
    img: {
        src: string;
        lazySrc: string;
    };
    svgPath: string;
    colorDark?: string;
    colorLight?: string;
}

export const subTitles = [
    {
        key: 'code',
        img: {
            src: coderPicture,
            lazySrc: coderPictureLazy,
        },
        svgPath: 'M217.213 155.578C225.896 169.215 221.843 187.285 208.162 195.94L104.37 261.593L177.03 309.751L295.906 165.24C311.387 146.419 338.736 142.52 358.89 156.26L455.498 222.118C483.011 240.874 482.794 281.404 455.082 299.866L345.208 373.066C331.737 382.041 313.516 378.431 304.512 365.004C295.508 351.576 299.129 333.415 312.601 324.44L408.212 260.742L334.54 210.52L215.753 354.924C200.421 373.563 173.415 377.593 153.278 364.247L57.0114 300.443C28.6364 281.636 29.0826 239.944 57.8534 221.745L176.72 146.556C190.401 137.902 208.531 141.941 217.213 155.578Z',
        colorLight: '#8F00FF'
    },
    {
        key: 'available',
        img: {
            src: availablePicture,
            lazySrc: availablePictureLazy,
        },
        svgPath: 'M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z',
        colorLight: 'green',
        colorDark: 'green',
    },
    {
        key: 'designer',
        img: {
            src: designerPicture,
            lazySrc: designerPictureLazy,
        },
        svgPath: 'M385.83,142.74l-8.57-8.58a12.17,12.17,0,0,0-17.16,0L149.17,345.1s0,0,0,0-.21.25-.3.37-.15.18-.21.27-.11.22-.17.33a2.93,2.93,0,0,0-.19.4.15.15,0,0,0,0,.07l-11,30.48-5.41,5.41a4,4,0,0,0,2.86,6.9,4,4,0,0,0,2.86-1.18l5.41-5.41,30.48-11,.07,0,.4-.2c.11-.06.22-.1.33-.17l.27-.21a3.47,3.47,0,0,0,.37-.3.1.1,0,0,1,.05,0l195-195,2.92,2.92-71.33,71.34a4,4,0,0,0,5.71,5.72l74.2-74.2a4,4,0,0,0,0-5.72l-5.78-5.78,10.19-10.19A12.14,12.14,0,0,0,385.83,142.74Z',
    },
    {
        key: 'coffee',
        img: {
            src: coffeePicture,
            lazySrc: coffeePictureLazy,
        },
        svgPath: 'M329.91,335.92h-.05c.43-.29.81-.63,1.23-.93,3-2.11,5.83-4.38,8.58-6.73q1.95-1.68,3.84-3.43c2.05-1.91,4-3.91,5.92-5.95,1.37-1.46,2.73-2.93,4-4.46A121.46,121.46,0,0,0,372.67,283c.91-2.16,1.78-4.32,2.56-6.52s1.45-4.46,2.11-6.72,1.26-4.27,1.76-6.44c.56-2.42.95-4.89,1.36-7.35.35-2.1.78-4.18,1-6.3.31-2.77.39-5.58.51-8.38.08-1.75.28-3.49.28-5.25V162.48H137.73V236c0,1.76.2,3.5.28,5.25.12,2.8.2,5.61.51,8.38.24,2.12.67,4.2,1,6.3.41,2.46.8,4.93,1.36,7.35.5,2.17,1.14,4.3,1.76,6.44s1.32,4.51,2.11,6.72,1.65,4.36,2.56,6.52a121.46,121.46,0,0,0,19.21,31.42c1.3,1.53,2.66,3,4,4.46,1.91,2,3.87,4,5.92,5.95q1.89,1.76,3.84,3.43c2.75,2.35,5.6,4.62,8.58,6.73.42.3.8.64,1.23.93H137.81v21.6H382.19v-21.6Z',
        colorLight: '#462e01'
    },
    {
        key: 'drone',
        img: {
            src: dronePicture,
            lazySrc: dronePictureLazy,
        },
        svgPath: 'M415.62,260c0-12.45-10.89-23.34-23.34-23.34H306.69l-77.81-124.5H197.75l38.91,124.5H151.07l-23.35-31.13H104.38L119.94,260l-15.56,54.47h23.34l23.35-31.13h85.59l-38.91,124.5h31.13l77.81-124.5h85.59C404.73,283.34,415.62,272.45,415.62,260Z',
    },
]