import cv from '../assets/pdf/resume.pdf';

// Trek-in
const trekinSpecification = 'https://drive.google.com/file/d/1161_ZJ7K2n87pXG3--EBc-vWsjlzP-12/view';

// Scoutapp
const scoutappSpecification = 'https://drive.google.com/file/d/1CsD8fRasNmvw93AkX_q-d7OsNLRVrYFM/view';

// Emakina
const emakinaReport = 'https://drive.google.com/file/d/1I-8DCKtxdF1xnOReFfOxcIWvH3_lXBSx/view';

// Betacowork
const betacoworkSpecification = 'https://drive.google.com/file/d/1qQI29KrlnAa9Of9CIGsvzFCPLUCJmk8S/view';

export const fr = {
    translation: {
        en: 'EN',
        fr: "FR",
        darkModeToggle: 'Activer le thème sombre',
        languageToggle: 'Basculer de français à anglais',
        macbook: "Chassis d'un macbook",

        mailto: {
            subject: "✨ De quoi sagit-il ? ✨",
            body: "Dites moi tout, je vous répondrai au plus vite 😉",
        },

        icon: {
            'arrow-down': 'flèche vers le bas',
            'arrow-left': 'flèche vers la gauche',
            'arrow-right': 'flèche vers la droite',
            'arrow-up': 'flèche vers le haut',
            'css': 'CSS',
            'emakina': 'Emakina',
            'external-link': 'lien externe',
            'language': 'planète',
            'laniche': 'La niche',
            'logo': "Basile Vanhaverbeke",
            'proximus': 'Proximus',
            'versett': 'Versett',
            'sun': 'Thème claire',
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
            'xd': 'Adobe XD',
            'twig': 'Twig'
        },

        jobs: {
            uxui: 'UX/UI Designer',
            developer: 'Développeur FE'
        },

        header: {
            name: 'Basile Vanhaverbeke',
            subtitles: {
                designer: "Designer d'interfaces",
                martinique: `Code depuis n'importe où`,
                available: 'Disponible pour une mission',
                code: "Développeur frontend",
                drone: "Pilote de drone",
            },
            contact: {
                label: 'Contactez-moi'
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

        projectstitle: 'Scroll à travers mes projets',

        projects: {
            boutsdeficelle: {
                title: "Bouts de ficelle",
                cover: 'Quelques captures d\'écrans du nouveau site de l\'asbl Bouts de ficelle',
                intro: `J'ai redesigné et codé l'ancien site de l'ASBL Bouts de ficelle pour le mettre aux gouts du jour. Nous avons entrepris ce projet ensemble durant plus d'un an afin de sortir un produit qui leur ressemblait et répondait à leurs attentes.`,
                content: {
                    old: `J'ai d'abord commencé par réaliser une analyse de leur ancien site et j'ai fait une comparaison avec les différentes entités dans le même secteur. Nous avons ensuite fait le tri et avons créé une nouvelle hiérarchie du contenu.`,
                    figma: `Nous avons ensuite réfléchis à une charte graphique et avons créé un moodboard, un logo, une palette de couleur et  une sélection typographique. J'ai par la suite proposé une maquette que nous avons challengé pour arriver à un design final que j'ai traduit en un prototype figma fonctionnel.`,
                    wordpress: `Le site a été codé avec wordpress en utilisant ACF pour proposer une administration sur mesure. J'ai ensuite fournis un tutoriel en version vidéo & PDF pour la gestion du site.`
                },
                ressources: {
                    website: {
                        label: "Voir le site",
                        href: `https://boutsdeficelle.be`
                    },
                }
            },
            portfolio: {
                title: "Portfolio 2.0",
                cover: 'Ecrans de mon portfolio',
                intro: `Ce site est la deuxième version de mon portfolio. Après 3 ans en tant qu'employé, j'ai décidé de partir un an en Martinique pour vivre de nouvelles aventures. Il me fallait dès lors une nouvelle vitrine qui refleterait mon expérience acquise durant 3 années passées comme développeur frontend. J'ai entièrement designé le site d'abord sur Figma et je lui ai ensuite donné vie via React, typescript & framer-motion.`,
                content: {
                    loading: `Pour des raisons de performances, j'ai implémenté un système de lazy loading personnalisé basé sur le scroll de la page. C'est à dire que le contenu ne se charge entièrement que lorsque l'utilisateur arrive sur la section correspondante. Pour éviter d'avoir des problèmes liés au CLS (Cumulative Layout Shift), j'affiche par défaut une version minifiée des images qui permet au navigateur de calculer à l'avance l'espace que va occuper l'image avant qu'elle ne charge réellement.`
                },
            },
            proximus: {
                title: "Proximus Pickx",
                cover: '',
                intro: `J'ai été engagé chez proximus en tant que développeur front-end au sein de l'équipe pickx, leur partie vidéo à la demande. Avec mes collègues, nous étions chargés de la maintenance du site sur plusieurs aspects ; la mise en avant de différents contenus en fonction de l'actualité, la création de nouvelles pages et le redesign d'autres, l'implémentation de nouvelles fonctionnalités et la résolution de bogues au quotidien.`,
                content: {
                    storybook: `Nous travaillions également sur la création d'un design system en utilisant "Storybook", c'est à dire sur la mise en place d'une librairie de plusieurs composants réutilisables au sein du projet afin d'en faciliter la maitenance. Il a fallut pour ce faire migrer en douceur d'une infrasturucture symfony vers une architecture en node.js, plus moderne et modulable.`,
                    festivals: `Nous avons créé un site indépendant au site principal afin de couvrir les actualités de certains festivals dont Proximus Pickx était partenaire. L'utilisateur peut ainsi y regarder en livestream les concerts des festivals et regarder en différé les vods.`,
                    articles: `Voici un exemple d'une page retravaillée par les designers que j'ai pu intégrer d'abord dans le site principal en twig et scss et ensuite dans le design system en react & typescript :`
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
            },
            emakina: {
                title: 'Emakina',
                cover: `Quelques captures d'écrans de jeux en développement agencés de manières graphiques.`,
                intro: `
                    <p>Pour mon stage de troisième année en écriture multimédia à l’ISFSC j’ai rejoint la société EMAKINA, une agence de communication digitale basée en Belgique à Bruxelles. Durant le stage j’ai pu travailler de manière autonome sur un projet à gros budget tout en collaborant d’égal à égal avec les autres membres de l’équipe.
                    <br /><br />J’ai ainsi acquis durant mon stage plusieurs compétences techniques :</p>
                    <ul style={{marginTop: 15, marginLeft: 20}}>
                        <li>Prise en main de NodeJs et de Yarn</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>CSS in Js</li>
                    </ul>
                `,
                content: {
                    games: `
                        Nous avons développé trois jeux qui s'intégraient dans une campagne promotionnelle :
                        <br><br>Un compteur qu'il fallait arrêter au bon moment ;
                    `,
                    memory: 'Un memory ;',
                    elements: `Et une image où il fallait retrouver certains produits de la marque.`,
                },
                ressources: {
                    report: {
                        label: 'Rapport de stage',
                        href: emakinaReport
                    },
                    website: {
                        label: 'emakina.com',
                        href: 'https://www.emakina.com/'
                    }
                }
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