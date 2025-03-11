import { ButtonProps } from '../components/atoms/Button';
import { IconName } from '../components/atoms/Icon';

// Bouts de ficelle
import boutsdeficelleCover from '../assets/projects/bouts-de-ficelle/cover.webp';
import boutsdeficelleCoverLazy from '../assets/projects/bouts-de-ficelle/cover@lazy.webp';
import boutsdeficelleNewScrollingVideo from '../assets/projects/bouts-de-ficelle/new-site-scrolling.webm';
import boutsdeficelleBeforeAfterVideo from '../assets/projects/bouts-de-ficelle/before-after.webm';
import boutsdeficelleWireframes from '../assets/projects/bouts-de-ficelle/wireframes.webp';
import boutsdeficelleWireframesLazy from '../assets/projects/bouts-de-ficelle/wireframes@lazy.webp';
import boutsdeficelleFigma from '../assets/projects/bouts-de-ficelle/figma.webp';
import boutsdeficelleFigmaLazy from '../assets/projects/bouts-de-ficelle/figma@lazy.webp';

// Portfolio
import portfolioCover from '../assets/projects/portfolio/portfolio-cover.webp';
import portfolioCoverLazy from '../assets/projects/portfolio/portfolio-cover@lazy.webp';
import portfolioVideo from '../assets/projects/portfolio/portfolio-video.webm';
import portfolioLoading from '../assets/projects/portfolio/portfolio-loading.webp';
import portfolioLoadingLazy from '../assets/projects/portfolio/portfolio-loading@lazy.webp';


// Proximus
import proximusCover from '../assets/projects/proximus/proximus-cover.webp';
import proximusCoverLazy from '../assets/projects/proximus/proximus-cover@lazy.webp';
import proximusShowcase from '../assets/projects/proximus/proximus-showcase.webp';
import proximusShowcaseLazy from '../assets/projects/proximus/proximus-showcase@lazy.webp';
import proximusArticles from '../assets/projects/proximus/article-showcase.webp';
import proximusArticlesLazy from '../assets/projects/proximus/article-showcase@lazy.webp';
import proximusFestivals from '../assets/projects/proximus/festivals-showcase.webp';
import proximusFestivalsLazy from '../assets/projects/proximus/festivals-showcase@lazy.webp';


// Old portfolio
import oldPortfolioCover from '../assets/projects/portfolio-old/portfolio-old-cover.webp';
import oldPortfolioCoverLazy from '../assets/projects/portfolio-old/portfolio-old-cover@lazy.webp';
import oldPortfolioShowcase from '../assets/projects/portfolio-old/portfolio-old-showcase.webp';
import oldPortfolioShowcaseLazy from '../assets/projects/portfolio-old/portfolio-old-showcase@lazy.webp';
import oldPortfolioVideo from '../assets/projects/portfolio-old/portfolio-old-video.webm';


// Emakina
import emakinaCover from '../assets/projects/emakina/emakina-cover.webp';
import emakinaCoverLazy from '../assets/projects/emakina/emakina-cover@lazy.webp';
import emakinaMemory from '../assets/projects/emakina/emakina-memory.webp';
import emakinaMemoryLazy from '../assets/projects/emakina/emakina-memory@lazy.webp';
import emakinaHiddenElements from '../assets/projects/emakina/emakina-hidden-elements.webp';
import emakinaHiddenElementsLazy from '../assets/projects/emakina/emakina-hidden-elements@lazy.webp';
import emakinaHitTheTimer from '../assets/projects/emakina/emakina-hit-the-timer.webp';
import emakinaHitTheTimerLazy from '../assets/projects/emakina/emakina-hit-the-timer@lazy.webp';


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
        key: 'boutsdeficelle',
        coverImg: {
            src: boutsdeficelleCover,
            lazySrc: boutsdeficelleCoverLazy
        },
        jobs: ['uxui', 'developer'],
        tools: ['figma', 'wordpress', 'twig' ],
        content: [
            {
                type: 'video',
                key: 'video',
                src: boutsdeficelleBeforeAfterVideo
            },
            {
                type: 'text',
                key: 'old'
            },
            {
                type: 'image',
                key: 'wireframes',
                src: boutsdeficelleWireframes,
                lazySrc: boutsdeficelleWireframesLazy
            },
            {
                type: 'text',
                key: 'figma'
            },
            {
                type: 'image',
                key: 'wireframes',
                src: boutsdeficelleFigma,
                lazySrc: boutsdeficelleFigmaLazy
            },
            {
                type: 'text',
                key: 'wordpress'
            },
            {
                type: 'video',
                key: 'video',
                src: boutsdeficelleNewScrollingVideo
            },
        ],
        ressources: [
            {
                key: 'website',
                icon: 'external-link',
                target: '_blank'
            },
        ]
    },
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
                type: 'video',
                key: 'video',
                src: portfolioVideo
            },
            {
                type: 'text',
                key: 'loading'
            },
            {
                type: 'image',
                key: 'loadingimg',
                src: portfolioLoading,
                lazySrc: portfolioLoadingLazy
            },
        ],
    },
    {
        key: 'proximus',
        coverImg: {
            src: proximusCover,
            lazySrc: proximusCoverLazy
        },
        jobs: ['developer'],
        tools: ['twig', 'storybook', 'react', 'typescript', 'figma'],
        content: [
            {
                type: 'image',
                key: 'showcase',
                src: proximusShowcase,
                lazySrc: proximusShowcaseLazy,
            },
            {
                type: 'text',
                key: 'storybook'
            },
            {
                type: 'text',
                key: 'articles'
            },
            {
                type: 'image',
                key: 'articlesimg',
                src: proximusArticles,
                lazySrc: proximusArticlesLazy
            },
            {
                type: 'text',
                key: 'festivals'
            },
            {
                type: 'image',
                key: 'festivalsimg',
                src: proximusFestivals,
                lazySrc: proximusFestivalsLazy,
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
        key: 'emakina',
        coverImg: {
            src: emakinaCover,
            lazySrc: emakinaCoverLazy,
        },
        jobs: ['developer'],
        tools: ['react', 'framer', 'adobe'],
        content: [
            {
                type: 'text',
                key: 'games'
            },
            {
                type: 'image',
                key: 'timer',
                src: emakinaHitTheTimer,
                lazySrc: emakinaHitTheTimerLazy
            },
            {
                type: 'text',
                key: 'memory'
            },
            {
                type: 'image',
                key: 'memory',
                src: emakinaMemory,
                lazySrc: emakinaMemoryLazy
            },
            {
                type: 'text',
                key: 'elements'
            },
            {
                type: 'image',
                key: 'hidden',
                src: emakinaHiddenElements,
                lazySrc: emakinaHiddenElementsLazy
            },
        ],
        ressources: [
            {
                key: 'report',
                icon: 'pdf',
                target: '_blank'
            },
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
        jobs: ['uxui', 'developer'],
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