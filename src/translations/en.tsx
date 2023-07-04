import cv from '../assets/pdf/resume.pdf';

// Trek-in
import trekinSpecification from '../assets/projects/trekin/trek-in-cahier-des-charges.pdf';
import trekinGraphicalCharter from '../assets/projects/trekin/trek-in-charte-graphique.pdf'

export const en = {
    translation: {
        en: "EN",
        fr: "FR",
        darkModeToggle: 'Enable dark mode',
        languageToggle: 'Switch between french and english',
        macbook: 'Macbook layout',

        icon: {
            'arrow-down': 'arrow to the bottom',
            'arrow-left': 'arrow to the left',
            'arrow-right': 'arrow to the right',
            'arrow-up': 'arrow to the top',
            'emakina': 'eamkina logo',
            'external-link': 'external link',
            'language': 'planet',
            'laniche': 'laniche logo',
            'logo': "Basile Vanhaverbeke's logo",
            'proximus': 'Proximus logo',
            'versett': 'Versett logo',
            'sun': 'Light mode',
            'moon': 'Dark mode',
            'send': 'Send',
            'adobe': 'Adobe suit',
            'css': 'CSS',
            'figma': 'Figma',
            'html': 'HTML',
            'javascript': 'Javascript',
            'react': 'React',
            'storybook': ' Storybook',
            'wordpress': 'Wordpress',
            'framer': 'Framer Motion',
            'illustrator': 'Adobe Illustrator',
            'invision': 'Invision'
        },

        jobs: {
            uxui: 'UX/UI Designer',
            developer: 'Developer'
        },

        header: {
            name: 'Basile Vanhaverbeke',
            contact: {
                label: 'Contact me'
            },
            subtitles: {
                available: 'Currently available 😉',
                designer: "Designer",
                outdoor: 'Developer',
                drone: "Drone pilot",
                cofee: "Cofee addict"
            },
        },

        infos: {
            experience: {
                title: 'Experience',
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
                title: 'Tools',
                items: {
                    adobe: 'Adobe suit',
                    figma: 'Figma',
                    storybook: 'Storybook',
                    wordpress: 'Wordpress'
                }
            },
            links: {
                title: 'Some links',
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
                intro: `Trek-in is a hiking-based app prototype made with Anthony Charlier as part of our multimedia writing studies in BAC 1 at <a href="https://www.isfsc.be/">ISFSC</a>.`,
                content: {
                    about: `This is an app that makes it possible to efficiently find a partner or group of people in order to realize together an interactive and multimedia hike in the Walloon region as well as to create links between the users.`,
                    showcase: 'Some trekin screens displayed in a graphical way.',
                    history: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
                },
                ressources: {
                    isfsc: {
                        label: "ISFSC's article",
                        href: 'https://www.isfsc.be/projets/trek-in/'
                    },
                    prototype: {
                        label: 'See prototype',
                        href: 'https://projects.invisionapp.com/share/4TDUZL2WS#/screens'
                    },
                    specifications: {
                        label: 'Specifications',
                        href: trekinSpecification
                    },
                    graphical: {
                        label: 'Graphical charter',
                        href: trekinGraphicalCharter
                    }
                }
            }
        },

        footer: {
            copyrights: 'Made with ♥ by Basile Vanhaverbeke ©2023'
        }
    }
}