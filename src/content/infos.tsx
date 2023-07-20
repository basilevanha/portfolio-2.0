import { IconName } from "../components/atoms/Icon";
import { ButtonProps } from "../components/atoms/Button";

export type BoxType = {
    key: string
} & ({
    type: 'list'
    items: IconName[]
} | {
    type: 'btns'
    items: BtnsItemProps[]
});

export type BtnsItemProps = {
    key: string
    icon: IconName
    target?: ButtonProps['target']
}

export type InfosProps = BoxType[];

export const infos: InfosProps = [
    {
        type: 'list',
        key: 'experience',
        items: [
            'proximus', 'versett', 'emakina', 'laniche'
        ]
    },
    {
        type: 'list',
        key: 'expertise',
        items: [
            'twig', 'javascript', 'react', 'typescript',
        ]
    },
    {
        type: 'list',
        key: 'tools',
        items: [
            'figma', 'adobe', 'wordpress', 'storybook'
        ]
    },
    {
        type: 'btns',
        key: 'links',
        items: [
            {
                key: 'cv',
                icon: 'pdf',
                target: '_blank'
            },
            {
                key: 'linkedin',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'github',
                icon: 'external-link',
                target: '_blank'
            },
        ]
    }
];
