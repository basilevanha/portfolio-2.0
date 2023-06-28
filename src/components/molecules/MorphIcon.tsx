import { interpolate } from "flubber";
import { tween, Action, ColdSubscription } from 'popmotion';
import posed from "react-pose";

//Import content
import { subTitles } from '../../content/subTitles';

interface MorpIconProps {
    currentIndex: number;
}

export interface PathsObjectType {
    [key: string]: string,
}

interface configType {
    [key: string]: {
        d: string,
        transition: ({ from, to }: { from: any; to: any; }) => Action<ColdSubscription>;
    };
}

const morphTransition = ({ from, to }: { from: any, to: any }) =>
    tween({
        from: 0,
        to: 1,
        duration: 400
    }).pipe(interpolate(from, to));

const pathsObject: PathsObjectType = subTitles.reduce((acc, cur) => ({ ...acc, [cur.key]: cur.svgPath }), {});
const pathIds = Object.keys(pathsObject);

const Path = posed.path(
    pathIds.reduce((config: configType, id) => {
        config[id] = {
            d: pathsObject[id],
            transition: morphTransition
        };
        return config;
    }, {})
);

const MorphIcon = ({ currentIndex }: MorpIconProps) => {

    return (
        <svg viewBox="0 0 512 512" style={{ fill: subTitles[currentIndex].color && subTitles[currentIndex].color }}>
            <Path pose={pathIds[currentIndex]} />
        </svg>
    )
}

export default MorphIcon