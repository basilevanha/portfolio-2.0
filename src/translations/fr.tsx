import cv from '../assets/pdf/resume.pdf';

// Trek-in
import trekinSpecification from '../assets/projects/trekin/trek-in-cahier-des-charges.pdf';

// Scoutapp
import scoutappSpecification from '../assets/projects/scoutapp/scoutapp-graduation-work.pdf';

// Betacowork
import betacoworkSpecification from '../assets/projects/betacowork/betacowork-rapport-de-stage.pdf';

export const fr = {
    translation: {
        en: 'EN',
        fr: "FR",
        darkModeToggle: 'Activer le thème sombre',
        languageToggle: 'Basculer de français à anglais',
        macbook: "Chassis d'un macbook",
        mailto: {
            subject: "✨ De quoi sagit-il ? ✨",
            body: "D'une proposition excitante à propos d'un super projet sur lequel nous pourrions collaborer ? 🤝 \n \n Dites m'en plus et parlons-en autour d'un café ☕️",
        },

        icon: {
            'arrow-down': 'flèche vers le bas',
            'arrow-left': 'flèche vers la gauche',
            'arrow-right': 'flèche vers la droite',
            'arrow-up': 'flèche vers le haut',
            'css': 'logo CSS',
            'emakina': 'logo emakina',
            'external-link': 'lien externe',
            'language': 'planète',
            'laniche': 'logo laniche',
            'logo': "logo de Basile Vanhaverbeke's",
            'proximus': 'logo Proximus',
            'versett': 'logo Versett',
            'sun': 'Thème clair',
            'moon': 'Thème sombre',
            'send': 'Envoyer',
            'adobe': 'Suite adobe',
            'framer': 'Framer Motion',
            'wordpress': 'Wordpress',
            'storybook': 'Storybook',
            'figma': 'Figma',
            'html': 'HTML',
            'javascript': 'Javascript',
            'react': 'React',
            'illustrator': 'Adobe Illustrator',
            'invision': 'Invision',
            'typescript': 'Typescript',
            'xd': 'Adobe XD'
        },

        jobs: {
            uxui: 'UX/UI Designer',
            developer: 'Développeur'
        },

        header: {
            name: 'Basile Vanhaverbeke',
            contact: {
                label: 'Contactez-moi'
            },
            subtitles: {
                available: 'Actuellement disponible 😉',
                designer: "Designer",
                outdoor: 'Développeur',
                drone: "Pilote de drone",
                cofee: "Amateur de café"
            },
        },

        infos: {
            experience: {
                title: 'Expérience',
                items: {
                    proximus: 'Proximus',
                    versett: 'Versett',
                    laniche: 'La niche',
                    emakina: 'Emakina'
                }
            },
            expertise: {
                title: 'Expertise',
                items: {
                    html: 'HTML',
                    css: 'CSS',
                    javascript: 'Javasctipt',
                    react: 'React Js'
                }
            },
            tools: {
                title: 'Outils',
                items: {
                    adobe: 'Suite adobe',
                    figma: 'Figma',
                    storybook: 'Storybook',
                    wordpress: 'Wordpress'
                }
            },
            links: {
                title: 'Quelques liens',
                items: {
                    cv: {
                        label: 'CV',
                        href: cv,
                    },
                    linkedin: {
                        label: 'Linkedin',
                        href: 'https://www.linkedin.com/in/basile-vanhaverbeke-946868150/',
                    },
                    github: {
                        label: 'Github',
                        href: 'https://github.com/basilevanha/',
                    },
                }
            }
        },

        projectstitle: 'Projets',

        projects: {
            portfolio: {
                title: "Portfolio 2.0",
                cover: 'Ecrans de mon portfolio',
                intro: `C'est la deuxième version de mon portfolio. Après 3 ans en tant qu'employé, j'ai décidé de partir un an en Martinique pour vivre de nouvelles aventures. Il me fallait dès lors une nouvelle vitrine qui refleterait mon expérience acquise durant 3 années passées comme développeur frontend. J'ai entièrement designé le site d'abord sur Figma et je lui ai ensuite donné vie via React, typescript & framer-motion.`,
                content: {
                },
            },
            oldportfolio: {
                title: "Portfolio 1.0",
                cover: `Capture d'écran de mon ancie portfolio`,
                intro: `Il s'agit d'un portfolio réalisé après un stage chez Emakina où j'ai appris React.js. C'était pour moi l'occasion de refléter mes dernières compétences acquises au travers d'un site plus complexe et dynamique que mon précédent portfolio étudiant.`,
                content: {
                    video: {
                        name: 'Ancien portfolio',
                        description: 'Mon ancien portfolio affiché sur un écran qui défile en boucle.'
                    }
                },
                ressources: {
                    website: {
                        label: "Voir le site",
                        href: '/portfolio-old'
                    },
                },
            },
            scoutapp: {
                title: "Scoutapp",
                cover: `Main tenant un smartphone affichant scoutapp`,
                intro: `Scoutapp est un prototype d'application pour les animateurs scouts. Il s'agit de mon TFE dans le cadre de mes études en écriture multimédia. J'ai réussi ce travail avec une très grande distinction.`,
                content: {
                },
                ressources: {
                    graduation: {
                        label: "Voir le TFE",
                        href: scoutappSpecification
                    },
                    prototype: {
                        label: 'Voir le prototype',
                        href: 'https://xd.adobe.com/view/8e0e7054-b8a3-4141-4d44-bf1112c95f1c-f83f/?fullscreen&fbclid=IwAR2LkQU7pmAZpLk5huaZ01qgXCoVoPzVvmOpOdTdW78TFfVNenxnf4Uf1yI'
                    }
                },
            },
            betacowork: {
                title: "Betacowork",
                cover: `Ordinateur affichant la page d'accueil de Betacowork`,
                intro: `Betacowork est un espace de coworking basé à Etterbeek dans les locaux de l'ICAB, un incubateur à startups. Pour notre stage de BAC 2 en écriture multimédia à l'ISFC, nous avons dû avec Anthony Charlier remettre entièrement à neuf leur ancien site web.`,
                content: {
                    video: {
                        name: 'Défilement',
                        description: 'Site de betacowork qui défile en boucle'
                    }
                },
                ressources: {
                    website: {
                        label: "Voir le site",
                        href: "https://www.betacowork.com/fr/"
                    },
                    specifications: {
                        label: 'Lire le rapport de stage',
                        href: betacoworkSpecification
                    }
                },
            },
            trekin: {
                title: "Trek-in",
                cover: 'Trek-in',
                intro: `Trek-in est un prototype d'application nomade basé sur la randonnée, réalisé avec Anthony Charlier dans le cadre de nos études en écriture multimédia en BAC 1 à <a href='https://www.isfsc.be/' target="_blank">l'ISFSC</a>.`,
                content: {
                    about: `Il s'agit d'un dispositif nomade qui permet de trouver de manière efficace un partenaire ou groupe de personnes afin de réaliser ensemble une randonnée interactive et multimédia dans la région Wallonne ainsi que de tisser des liens entre les utilisateurs.`,
                    showcase: 'Some trekin screens displayed in a graphical way.',
                    history: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
                },
                ressources: {
                    isfsc: {
                        label: "Article de l'ISFSC",
                        href: 'https://www.isfsc.be/projets/trek-in/',
                    },
                    prototype: {
                        label: 'Voir le prototype',
                        href: 'https://projects.invisionapp.com/share/4TDUZL2WS#/screens'
                    },
                    specifications: {
                        label: 'Cahier des charges',
                        href: trekinSpecification
                    },
                },
            },
        },

        footer: {
            copyrights: 'Fait avec ♥ par Basile Vanhaverbeke ©2023'
        }
    }
}