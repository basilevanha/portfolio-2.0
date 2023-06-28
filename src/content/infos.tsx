import { IconName } from "../components/atoms/Icon";
import { ButtonProps } from "../components/atoms/Button";

type InfosProps = {
    key: string,
    items: { key: string, icon: IconName }[]
}[];

type ExtLinksProps = {
    key: string,
    icon: IconName,
    target?: ButtonProps['target']
}[];

export const infos: InfosProps = [
    {
        key: 'experience',
        items: [
            {
                key: 'proximus',
                icon: 'proximus',
            },
            {
                key: 'versett',
                icon: 'versett',
            },
            {
                key: 'laniche',
                icon: 'laniche',
            },
            {
                key: 'emakina',
                icon: 'emakina',
            },
        ]
    },
    {
        key: 'expertise',
        items: [
            {
                key: 'html',
                icon: 'html',
            },
            {
                key: 'css',
                icon: 'css',
            },
            {
                key: 'javascript',
                icon: 'javascript',
            },
            {
                key: 'react',
                icon: 'react',
            },
        ]
    },
    {
        key: 'tools',
        items: [
            {
                key: 'figma',
                icon: 'figma',
            },
            {
                key: 'storybook',
                icon: 'storybook',
            },
            {
                key: 'wordpress',
                icon: 'wordpress',
            },
            {
                key: 'adobe',
                icon: 'adobe',
            },
        ]
    }
];

export const extLinks: ExtLinksProps = [
    {
        key: 'cv',
        icon: 'external-link',
        target: '_blank'
    },
    {
        key: 'linkedin',
        icon: 'external-link',
        target: '_blank'
    },
    {
        key: 'github',
        icon: 'external-link'
    },
];