import React, { RefObject, createRef, useRef, useState } from 'react';

// Import utils
import { t } from 'i18next';
import cn from 'classnames';
import { motion, useScroll, useMotionValueEvent, HTMLMotionProps } from 'framer-motion'

// Import components
import ProjectCard from "../molecules/ProjectCard";
import Catalog from '../molecules/Catalog';

// Import content
import projects from '../../content/projects';

export interface ProjectsProps {
    isDarkMode: boolean;
}

export interface projectProps {
    title: string;
    description: string;
    alt: string;
    src: string;
}

const Header = ({
    isDarkMode,
}: ProjectsProps) => {

    const projectsContent = React.useRef<HTMLInputElement>(null);

    // const myRefs = useRef<Array<RefObject<HTMLElement>>>([]);
    const myRefs = useRef([]);
    myRefs.current = projects.map((element, id) => myRefs.current[id] ?? createRef());

    return (
        <div className={cn('projects', { 'dark-mode': isDarkMode })}>
            <div className="projects__title">
                <h2>{t('projectstitle')}</h2>
            </div>
            <Catalog
                isDarkMode={isDarkMode}
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
                            isDarkMode={isDarkMode}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Header;