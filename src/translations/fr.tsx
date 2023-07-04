import cv from '../assets/pdf/resume.pdf';

// Trek-in
import trekinSpecification from '../assets/projects/trekin/trek-in-cahier-des-charges.pdf';
import trekinGraphicalCharter from '../assets/projects/trekin/trek-in-charte-graphique.pdf'

export const fr = {
    translation: {
        en: 'EN',
        fr: "FR",
        darkModeToggle: 'Activer le thème sombre',
        languageToggle: 'Basculer de français à anglais',
        macbook: "Chassis d'un macbook",

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
            'invision': 'Invision'
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
                        label: 'Linkedin fr',
                        href: 'https://www.linkedin.com/in/basile-vanhaverbeke-946868150/',
                    },
                    github: {
                        label: 'Github',
                        href: cv,
                    },
                }
            }
        },

        projectstitle: 'Projects',

        projects: {
            trekin: {
                title: "Trek-in",
                cover: 'Trek-in',
                intro: `Trek-in est un prototype d'application nomade basé sur la randonnée, réalisé avec Anthony Charlier dans le cadre de nos études en écriture multimédia en BAC 1 à <a href='https://www.isfsc.be/'>l'ISFSC</a>.`,
                content: {
                    about: `Il s'agit d'un dispositif nomade qui permet de trouver de manière efficace un partenaire ou groupe de personnes afin de réaliser ensemble une randonnée interactive et multimédia dans la région Wallonne ainsi que de tisser des liens entre les utilisateurs.`,
                    showcase: 'Some trekin screens displayed in a graphical way.',
                    history: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
                },
                ressources: {
                    isfsc: {
                        label: "Article de l'ISFSC",
                        href: 'https://www.isfsc.be/projets/trek-in/'
                    },
                    prototype: {
                        label: 'Voir le prototype',
                        href: 'https://projects.invisionapp.com/share/4TDUZL2WS#/screens'
                    },
                    specifications: {
                        label: 'Cahier des charges',
                        href: trekinSpecification
                    },
                    graphical: {
                        label: 'Charte graphique',
                        href: trekinGraphicalCharter
                    }
                }
            }
        },

        footer: {
            copyrights: 'Fait avec ♥ par Basile Vanhaverbeke ©2023'
        }
    }
}