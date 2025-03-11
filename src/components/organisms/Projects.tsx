import React, { createRef, useRef } from 'react';

// Import utils
import { t } from 'i18next';
import cn from 'classnames';
import { motion } from 'framer-motion'

// Import components
import ProjectCard from "../molecules/ProjectCard";
import Catalog from '../molecules/Catalog';

// Import content
import projects from '../../content/projects';
import { useTheme } from '../../context/ThemeProvider';

export interface projectProps {
    title: string;
    description: string;
    alt: string;
    src: string;
}

const Header = () => {
    const {theme} = useTheme();
    const projectsContent = React.useRef<HTMLInputElement>(null);

    // const myRefs = useRef<Array<RefObject<HTMLElement>>>([]);
    const myRefs = useRef([]);
    myRefs.current = projects.map((element, id) => myRefs.current[id] ?? createRef());

    return (
        <div className={cn('projects', { 'dark-mode': theme === 'dark' })}>
            <div className="projects__title">
                <h2>{t('projectstitle')}</h2>
            </div>
            <Catalog
                contentRef={projectsContent}
                projectsRefs={myRefs}
            />
            <div
                className="projects_content"
                ref={projectsContent}
            >
                {projects.map((project, id: number) => (
                    <motion.div
                        key={id}
                        // ref={(el: RefObject<HTMLElement>) => { return el && (myRefs.current[id] = el); }}
                        ref={myRefs.current[id]}
                        className='projects__card-wrapper'
                    >
                        <ProjectCard
                            index={id}
                            project={project}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Header;