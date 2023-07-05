import { useTranslation } from 'react-i18next';
import Image from '../atoms/Image';

// Import content
import projects from '../../content/projects';
import { useScroll, useTransform, motion } from 'framer-motion';
import { RefObject } from 'react';
import cn from 'classnames';

function Catalog({
    isDarkMode,
    contentRef,
    projectsRefs
}: {
    isDarkMode: boolean,
    contentRef: RefObject<HTMLElement>;
    projectsRefs: React.MutableRefObject<RefObject<HTMLElement>[]>
}) {

    const { t } = useTranslation();

    const goToProject = (el: RefObject<HTMLElement>) => {
        contentRef.current?.classList.add('fade-out');

        setTimeout(() => {
            el.current?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                contentRef.current?.classList.remove('fade-out');
            }, 700);

        }, 200);

    }

    return (
        <div className={cn('projects__catalog', { 'dark-mode': isDarkMode })}>
            {projects.map((project, id: number) => {
                const projectScrollProgress = useScroll({
                    target: projectsRefs.current[id],
                    offset: ['start start', 'end end']
                }).scrollYProgress;

                const width = useTransform(
                    projectScrollProgress,
                    [0, 1],
                    ['0%', '100%']
                )
                return (
                    <button onClick={() => goToProject(projectsRefs.current[id])} className='projects__catalog__thumbnail' key={id}>
                        <Image src={project.coverImg.src} lazySrc={project.coverImg.lazySrc} alt={t(`projects.${project.key}.alt`)} fit='cover' />
                        <motion.span style={{ width }} className="overlay"></motion.span>
                        <span className='projects__catalog__thumbnail__title'><p>{t(`projects.${project.key}.title`)}</p></span>
                    </button>
                )
            })}
        </div>
    );
}

export default Catalog;