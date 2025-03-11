import React, { useEffect, useState } from 'react';

// Import utils
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { projectType } from '../../content/projects';
import { useTheme } from '../../context/ThemeProvider';

// Import Components
import Image from '../atoms/Image';
import cn from 'classnames';
import { t } from 'i18next';
import Video from '../atoms/Video';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';


export interface ProjectCardProps {
    index: number;
    classNames?: string;
    project: projectType
}

const ProjectCard = ({
    classNames,
    index,
    project,
}: ProjectCardProps) => {

    const {theme} = useTheme();

    const projectCard = React.useRef<HTMLInputElement>(null);
    const stickyLoader = React.useRef<HTMLInputElement>(null);
    const cardWrapper = React.useRef<HTMLInputElement>(null);
    const cardContent = React.useRef<HTMLInputElement>(null);

    const [contentHeight, setContentHeight] = useState(0);
    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [stickyLoaderHeight, setStickyLoaderHeight] = useState(0);

    useEffect(() => {
        stickyLoader.current && setStickyLoaderHeight(stickyLoader.current?.offsetHeight)
    }, [contentHeight]);

    const isInView = useInView(projectCard, { once: true });

    useEffect(() => {
        setTimeout(() => {
            if (cardContent.current) {
                setContentHeight(cardContent.current?.offsetHeight);
            }
            if (cardWrapper.current) {
                setWrapperHeight(cardWrapper.current?.offsetHeight);
            }
        }, 0)
    });

    const scaleInProgress = useScroll({
        target: stickyLoader,
        offset: ['start end', 'start start']
    }).scrollYProgress;

    const scaleIn = index > 0 ? useTransform(
        scaleInProgress,
        [0, 1],
        [.7, 1]
    ) : 1;

    const borderRadius = index > 0 ? useTransform(
        scaleInProgress,
        [.7, 1],
        ['10px 10px 10px 10px', '0px 0px 10px 10px']
    ) : '0px 0px 10px 10px';

    const scaleOutProgress = useScroll({
        target: stickyLoader,
        offset: ['end end', 'end start']
    }).scrollYProgress;

    const scaleOut = useTransform(
        scaleOutProgress,
        [0, 1],
        [1, .8]
    )

    // 200vh + wrapper height + content = 1 ratio
    const stickyLoaderStyleHeight = `calc(${wrapperHeight}px + ${contentHeight}px + ${wrapperHeight}px)`;

    const stickyLoaderProgress = useScroll({
        target: stickyLoader,
        offset: ['start start', 'end end']
    }).scrollYProgress;

    const negativeMargin = useTransform(
        stickyLoaderProgress,
        [0, 1],
        [0, -contentHeight]
    );

    const projectKey = 'projects.' + project.key;

    const introduction = t(projectKey + '.intro', { interpolation: { escapeValue: false } });


    return (
        <motion.div
            style={{ scale: scaleIn, width: '100%' }}
        >
            <motion.div
                className={cn('project-card', classNames, { 'dark-mode': theme === 'dark' })}
                ref={projectCard}
                style={{ scale: scaleOut }}
            >
                <motion.div
                    className="project-card__wrapper"
                    ref={cardWrapper}
                    style={{ borderRadius }}
                >
                    <motion.div
                        className='project-card__img-wrapper'
                        style={{ marginTop: negativeMargin }}
                    >
                        <Image
                            className='project-card__img'
                            src={project.coverImg.src}
                            lazySrc={project.coverImg.lazySrc}
                            alt={t(`projects.${project.key}.cover`)}
                            fit='cover'
                            onlyLoading={!isInView}
                        />
                    </motion.div>

                    <motion.div
                        className="project-card__content"
                        ref={cardContent}
                    >
                        <div className='project-infos'>
                            <h2>{t(projectKey + '.title')}</h2>
                            <ul className='project-infos__jobs'>
                                {project.jobs.map((job, i) => (
                                    <li key={i}><p>{t(`jobs.${job}`)}{!(project.jobs.length == i + 1) && ','}</p></li>
                                ))}
                            </ul>
                            <ul className='project-infos__tools'>
                                {project.tools.map((tool, i) => (
                                    <li key={i}>
                                        <Icon name={tool} />
                                        {t(`icon.${tool}`)}
                                    </li>
                                ))}
                            </ul>
                            <ul className="project-infos__ressources">
                                {project.ressources?.map((ressource, i) => {
                                    const href = t(`${projectKey}.ressources.${ressource.key}.href`);

                                    return (
                                        <li key={i}>
                                            <Button
                                                href={href}
                                                label={t(projectKey + '.ressources.' + ressource.key + '.label')}
                                                target={ressource.target}
                                                appearance='secondary'
                                                icon={ressource.icon}
                                                id={`${projectKey}-${ressource.key}`}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className='project-content'>
                            <p
                                className='project-content__text'
                                dangerouslySetInnerHTML={{ __html: introduction }}
                            />
                            {project.content?.map((content, i) => {
                                const paragraph = t(projectKey + `.content.${content.key}`, { interpolation: { escapeValue: false } });
                                if (content.type == 'text') {
                                    return (
                                        <p
                                            key={i}
                                            className='project-content__text'
                                            dangerouslySetInnerHTML={{ __html: paragraph }}
                                        />
                                    )
                                } else if (content.type == 'image') {
                                    return (
                                        <Image
                                            key={i}
                                            className='project-content__img'
                                            src={content.src}
                                            lazySrc={content.lazySrc}
                                            alt={t(projectKey + `.content.${content.key}`)}
                                            onlyLoading={!isInView}
                                        />
                                    )
                                } else if (content.type == 'video') {
                                    return (
                                        <Video
                                            key={i}
                                            classNames='project-content__video'
                                            tkey={content.key}
                                            src={content.src}
                                            project={project.key}
                                            onlyLoading={!isInView}
                                        />
                                    )
                                }
                            })}
                        </div>

                    </motion.div>

                </motion.div>

                <motion.span className='sticky-loader' ref={stickyLoader} style={{ height: stickyLoaderStyleHeight }}></motion.span>
            </motion.div>
        </motion.div>
    )
}

export default ProjectCard;