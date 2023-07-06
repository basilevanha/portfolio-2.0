import { ButtonProps } from '../components/atoms/Button';
import { IconName } from '../components/atoms/Icon';

// Portfolio
import portfolioCover from '../assets/projects/portfolio/portfolio-cover.webp';
import portfolioCoverLazy from '../assets/projects/portfolio/portfolio-cover@lazy.webp';
import portfolioShowcase from '../assets/projects/portfolio/portfolio-showcase.webp';
import portfolioShowcaseLazy from '../assets/projects/portfolio/portfolio-showcase@lazy.webp';
import portfolioVideo from '../assets/projects/portfolio/portfolio-video.mov';


// Old portfolio
import oldPortfolioCover from '../assets/projects/portfolio-old/portfolio-old-cover.webp';
import oldPortfolioCoverLazy from '../assets/projects/portfolio-old/portfolio-old-cover@lazy.webp';
import oldPortfolioShowcase from '../assets/projects/portfolio-old/portfolio-old-showcase.webp';
import oldPortfolioShowcaseLazy from '../assets/projects/portfolio-old/portfolio-old-showcase@lazy.webp';
import oldPortfolioVideo from '../assets/projects/portfolio-old/portfolio-old-video.mov';

// Scoutapp
import scoutappCover from '../assets/projects/scoutapp/scoutapp-cover.webp';
import scoutappCoverLazy from '../assets/projects/scoutapp/scoutapp-cover@lazy.webp';
import scoutappShowcase from '../assets/projects/scoutapp/scoutapp-showcase.webp';
import scoutappShowcaseLazy from '../assets/projects/scoutapp/scoutapp-showcase@lazy.webp';
import scoutappShowcase2 from '../assets/projects/scoutapp/scoutapp-showcase-2.webp';
import scoutappShowcase2Lazy from '../assets/projects/scoutapp/scoutapp-showcase-2@lazy.webp';

// Betacowork
import betacoworkCover from '../assets/projects/betacowork/betacowork-cover.webp';
import betacoworkCoverLazy from '../assets/projects/betacowork/betacowork-cover@lazy.webp';
import betacoworkShowcase from '../assets/projects/betacowork/betacowork-showcase.webp';
import betacoworkShowcaseLazy from '../assets/projects/betacowork/betacowork-showcase@lazy.webp';
import betacoworkVideo from '../assets/projects/betacowork/betacowork-home.webm';

// Trek-in
import trekinCover from '../assets/projects/trekin/trekin-cover.webp';
import trekinCoverLazy from '../assets/projects/trekin/trekin-cover@lazy.webp';
import trekinShowcase from '../assets/projects/trekin/showcase.webp';
import trekinShowcaseLazy from '../assets/projects/trekin/showcase@lazy.webp';


type contentType = {
    key: string,
    type: 'text',
} | {
    key: string,
    type: 'image',
    src: string,
    lazySrc: string
} | {
    key: string,
    type: 'video',
    src: string,
};

type jobsType = 'developer'
    | 'uxui';

export type projectType = {
    key: string;
    coverImg: {
        src: string;
        lazySrc: string
    }
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
        key: 'portfolio',
        coverImg: {
            src: portfolioCover,
            lazySrc: portfolioCoverLazy
        },
        jobs: ['uxui', 'developer'],
        tools: ['figma', 'react', 'typescript', 'framer'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: portfolioShowcase,
                lazySrc: portfolioShowcaseLazy
            },
            {
                type: 'video',
                key: 'video',
                src: portfolioVideo
            },
        ],
    },
    {
        key: 'oldportfolio',
        coverImg: {
            src: oldPortfolioCover,
            lazySrc: oldPortfolioCoverLazy
        },
        jobs: ['uxui', 'developer'],
        tools: ['react', 'framer', 'illustrator'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: oldPortfolioShowcase,
                lazySrc: oldPortfolioShowcaseLazy,
            },
            {
                type: 'video',
                key: 'video',
                src: oldPortfolioVideo
            },
        ],
        ressources: [
            {
                key: 'website',
                icon: 'external-link',
                target: '_blank'
            }
        ]
    },
    {
        key: 'scoutapp',
        coverImg: {
            src: scoutappCover,
            lazySrc: scoutappCoverLazy
        },
        jobs: ['uxui'],
        tools: ['adobe', 'xd'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: scoutappShowcase,
                lazySrc: scoutappShowcaseLazy,
            },
            {
                type: 'image',
                key: 'showcase',
                src: scoutappShowcase2,
                lazySrc: scoutappShowcase2Lazy,
            },
        ],
        ressources: [
            {
                key: 'graduation',
                icon: 'pdf',
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
        key: 'betacowork',
        coverImg: {
            src: betacoworkCover,
            lazySrc: betacoworkCoverLazy
        },
        jobs: ['uxui'],
        tools: ['wordpress', 'illustrator'],
        content: [
            {
                type: 'image',
                key: 'shpwcase',
                src: betacoworkShowcase,
                lazySrc: betacoworkShowcaseLazy,
            },
            {
                type: 'video',
                key: 'video',
                src: betacoworkVideo
            },
        ],
        ressources: [
            {
                key: 'website',
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
        coverImg: {
            src: trekinCover,
            lazySrc: trekinCoverLazy
        },
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
                src: trekinShowcase,
                lazySrc: trekinShowcaseLazy,
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
]

export default projects;