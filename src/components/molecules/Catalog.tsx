// Import utils
import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import cn from 'classnames';

// Import components
import Image from '../atoms/Image';

// Import Google Analytics
import ReactGA from "react-ga4";

// Import content
import projects from '../../content/projects';

function Catalog({
    isDarkMode,
    contentRef,
    projectsRefs
}: {
    isDarkMode: boolean,
    contentRef: RefObject<HTMLElement>;
    projectsRefs: React.MutableRefObject<RefObject<HTMLElement>[]>
}) {

    const catalog = React.useRef<HTMLInputElement>(null);

    const isInView = useInView(catalog, { once: true });

    const { t } = useTranslation();

    const goToProject = (el: RefObject<HTMLElement>, name: string) => {
        ReactGA.event({
            category: "btn",
            action: 'click',
            label: name,
        });

        contentRef.current?.classList.add('fade-out');

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        contentRef.current?.parentNode?.classList.add('loading');
        
        setTimeout(() => {
            el.current?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                contentRef.current?.classList.remove('fade-out');
                
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                contentRef.current?.parentNode?.classList.remove('loading');
            }, 1000);

        }, 200);
    }

    return (
        <div ref={catalog} className={cn('projects__catalog', { 'dark-mode': isDarkMode })}>
            {projects.map((project, id: number) => {
                const targetProject = projectsRefs.current[id];
                const projectName = projects[id].key;

                const projectScrollProgress = useScroll({
                    target: targetProject,
                    layoutEffect: false,
                    offset: ['start start', 'end end']
                }).scrollYProgress;

                const width = useTransform(
                    projectScrollProgress,
                    [0, 1],
                    ['0%', '100%']
                )
                return (
                    <button onClick={() => goToProject(targetProject, projectName)} className='projects__catalog__thumbnail' key={id}>
                        <Image
                            src={project.coverImg.src}
                            lazySrc={project.coverImg.lazySrc}
                            alt={t(`projects.${project.key}.alt`)}
                            fit='cover'
                            onlyLoading={!isInView}
                        />
                        <motion.span style={{ width }} className="overlay"></motion.span>
                        <span className='projects__catalog__thumbnail__title'><p>{t(`projects.${project.key}.title`)}</p></span>
                    </button>
                )
            })}
        </div>
    );
}

export default Catalog;