import cv from '../assets/pdf/resume.pdf';

export const fr = {
    translation: {
        en: 'EN',
        fr: "FR",
        darkModeToggle: 'Activer le thème sombre',
        languageToggle: 'Basculer de français à anglais',

        icon: {
            'adobe': 'logo adobe',
            'arrow-down': 'flèche vers le bas',
            'arrow-left': 'flèche vers la gauche',
            'arrow-right': 'flèche vers la droite',
            'arrow-up': 'flèche vers le haut',
            'css': 'logo CSS',
            'emakina': 'logo emakina',
            'external-link': 'lien externe',
            'figma': 'logo figma',
            'html': 'logo HTML',
            'javascript': 'logo Javascript',
            'language': 'planète',
            'laniche': 'logo laniche',
            'logo': "logo de Basile Vanhaverbeke's",
            'proximus': 'logo Proximus',
            'react': 'logo React',
            'storybook': 'logo Storybook',
            'versett': 'logo Versett',
            'wordpress': 'logo Wordpress',
            'sun': 'Thème clair',
            'moon': 'Thème sombre',
            'send': 'Envoyer',
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

        projects: {
            trekin: {
                title: "Trek-in",
                description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
            },
            trekin2: {
                title: "Trek-in 2",
                alt: 'Mon projet',
                src: trekinCover,
                description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
            },
            trekin3: {
                title: "Trek-in 3",
                alt: 'Mon projet',
                src: trekinCover,
                description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
            },
            trekin4: {
                title: "Trek-in 4",
                alt: 'Mon projet',
                src: trekinCover,
                description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
            }
        }
    }
}