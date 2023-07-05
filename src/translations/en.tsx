import cv from '../assets/pdf/resume.pdf';

// Trek-in
import trekinSpecification from '../assets/projects/trekin/trek-in-cahier-des-charges.pdf';

// Scoutapp
import scoutappSpecification from '../assets/projects/scoutapp/scoutapp-graduation-work.pdf';

// Betacowork
import betacoworkSpecification from '../assets/projects/betacowork/betacowork-rapport-de-stage.pdf';

export const en = {
    translation: {
        en: "EN",
        fr: "FR",
        darkModeToggle: 'Enable dark mode',
        languageToggle: 'Switch between french and english',
        macbook: 'Macbook layout',
        mailto: {
            subject: "✨ What is it about ? ✨",
            body: "Is it an exciting proposal about a wonderful project we could collaborate on? 🤝 \n \n Tell me more and let's have a cofee together ☕️",
        },

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
            'invision': 'Invision',
            'typescript': 'Typescript',
            'xd': 'Adobe XD'
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
                        href: 'https://github.com/basilevanha/',
                    },
                }
            }
        },

        projectstitle: 'Projects',

        projects: {
            portfolio: {
                title: "Portfolio 2.0",
                cover: 'Layout from my portfolio',
                intro: `This is the second iteration of my portfolio. After 3years as an employee I decided to leave for one year in Martinique so I needed a new visit card. This portfolio was designed with Figma and coded using React, Typescript & framer-motion.`,
                content: {
                },
            },
            oldportfolio: {
                title: "Portfolio 1.0",
                cover: 'Layout from old portfolio',
                intro: `This portfolio was made after an internship at Emakina where I learned React.  I decided to update my old student portfolio with a more modern and technical website to use my latest learned skills. `,
                content: {
                    video: {
                        name: 'Old portfolio',
                        description: 'Old portfolio being scrolled in loop.'
                    }
                },
                ressources: {
                    website: {
                        label: "See website",
                        href: '/portfolio-old'
                    },
                },
            },
            scoutapp: {
                title: "Scoutapp",
                cover: `Hand holding a smartphone displaying scoutapp`,
                intro: `Scoutapp is an app prototype for Scout animators. This is my graduation work for my studies in multimedia writing. I managed this work with great distinction.`,
                content: {
                },
                ressources: {
                    graduation: {
                        label: "Graduation work",
                        href: scoutappSpecification
                    },
                    prototype: {
                        label: 'See prototype',
                        href: 'https://xd.adobe.com/view/8e0e7054-b8a3-4141-4d44-bf1112c95f1c-f83f/?fullscreen&fbclid=IwAR2LkQU7pmAZpLk5huaZ01qgXCoVoPzVvmOpOdTdW78TFfVNenxnf4Uf1yI'
                    }
                },
            },
            betacowork: {
                title: "Betacowork",
                cover: `Laptop displaying Betacowork website`,
                intro: `Betacowork is a coworking space based in Etterbeek in the premises of ICAB, a startup incubator. For our internship of BAC 2 in multimedia writing at the ISFC, we had with Anthony Charlier to completely rework their old website.`,
                content: {
                    video: {
                        name: 'Scrolling website',
                        description: 'Betacowork website scrolling in loop.'
                    }
                },
                ressources: {
                    website: {
                        label: "See website",
                        href: "https://www.betacowork.com/"
                    },
                    specifications: {
                        label: 'Internship report',
                        href: betacoworkSpecification
                    }
                },
            },
            trekin: {
                title: "Trek-in",
                cover: 'Trek-in',
                intro: `Trek-in is a hiking-based app prototype made with Anthony Charlier as part of our multimedia writing studies in BAC 1 at <a href="https://www.isfsc.be/ " target="_blank">ISFSC</a>.`,
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
                    }
                }
            }
        },

        footer: {
            copyrights: 'Made with ♥ by Basile Vanhaverbeke ©2023'
        }
    }
}