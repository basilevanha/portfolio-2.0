import { ButtonProps } from '../components/atoms/Button';
import { IconName } from '../components/atoms/Icon';

import trekinCover from '../assets/projects/trekin/trekin-cover.jpg';
import trekinShowcase from '../assets/projects/trekin/showcase.jpg';


//Laniche
import lanicheCover from '../assets/projects/laniche/laniche-cover.png';
import lanicheVideo from '../assets/projects/laniche/laniche-lampiris.mp4';

type contentType = {
    key: string,
    type: 'text',
} | {
    key: string,
    type: 'image',
    src: string,
} | {
    key: string,
    type: 'video',
    src: string,
};

type jobsType = 'developer'
    | 'uxui';

export type projectType = {
    key: string;
    coverImg: string;
    jobs: jobsType[],
    tools: IconName[],
    content?: contentType[],
    ressources?: {
        key: string,
        icon: IconName,
        target?: ButtonProps['target']
    }[]
}

const projects: projectType[] = [
    {
        key: 'trekin',
        coverImg: trekinCover,
        jobs: ['uxui'],
        tools: ['illustrator', 'invision'],
        content: [
            {
                type: 'text',
                key: 'about'
            },
            {
                type: 'image',
                key: 'showcase',
                src: trekinShowcase
            },
        ],
        ressources: [
            {
                key: 'isfsc',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'prototype',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'specifications',
                icon: 'pdf',
                target: '_blank'
            }
        ]
    },
    {
        key: 'trekin',
        coverImg: trekinCover,
        jobs: ['uxui'],
        tools: ['illustrator', 'invision'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: trekinShowcase
            },
        ],
        ressources: [
            {
                key: 'isfsc',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'prototype',
                icon: 'external-link',
                target: '_blank'
            }
        ]
    },
    {
        key: 'trekin',
        coverImg: trekinCover,
        jobs: ['uxui'],
        tools: ['illustrator', 'invision'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: trekinShowcase
            },
        ],
        ressources: [
            {
                key: 'isfsc',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'prototype',
                icon: 'external-link',
                target: '_blank'
            }
        ]
    },
    {
        key: 'trekin',
        coverImg: trekinCover,
        jobs: ['uxui'],
        tools: ['illustrator', 'invision'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: trekinShowcase
            },
        ],
        ressources: [
            {
                key: 'isfsc',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'prototype',
                icon: 'external-link',
                target: '_blank'
            }
        ]
    },
    {
        key: 'trekin',
        coverImg: trekinCover,
        jobs: ['uxui'],
        tools: ['illustrator', 'invision'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: trekinShowcase
            },
        ],
        ressources: [
            {
                key: 'isfsc',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'prototype',
                icon: 'external-link',
                target: '_blank'
            }
        ]
    },
    {
        key: 'trekin',
        coverImg: trekinCover,
        jobs: ['uxui'],
        tools: ['illustrator', 'invision'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: trekinShowcase
            },
        ],
        ressources: [
            {
                key: 'isfsc',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'prototype',
                icon: 'external-link',
                target: '_blank'
            }
        ]
    },
    {
        key: 'trekin',
        coverImg: trekinCover,
        jobs: ['uxui'],
        tools: ['illustrator', 'invision'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: trekinShowcase
            },
            {
                type: 'video',
                key: 'showcase',
                src: lanicheVideo
            },
        ],
        ressources: [
            {
                key: 'isfsc',
                icon: 'external-link',
                target: '_blank'
            },
            {
                key: 'prototype',
                icon: 'external-link',
                target: '_blank'
            }
        ]
    },
]

export default projects;