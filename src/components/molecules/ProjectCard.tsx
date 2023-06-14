import React from 'react';

// Import utils
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Import Components
import Image from '../atoms/Image';

export interface ProjectCardProps {
    name: string;
    img: {
        alt: string;
        src: string;
    };
    description: string;
}

const ProjectCard = ({
    name,
    img,
    description,
}: ProjectCardProps) => {

    const projectCard = React.useRef<HTMLInputElement>(null);

    const { scrollYProgress } = useScroll({
        target: projectCard,
        offset: ['start end', 'end start']
    });

    const springParams = { stiffness: 200 };
    const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [0.8, 1, 1, 0.9]), springParams);
    // const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [-60, 0, 0, 60]));

    // const scale = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [0.8, 1, 1, 0.9]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [-30, 0, 0, 20]);

    return (
        <motion.div
            className='project-card'
            ref={projectCard}
            style={{ scale, rotateX }}
        >
            <h3>{name}</h3>
            <p>{description}</p>
            <Image src={img.src} alt={img.alt} className='project-card__img' fit='cover' />
        </motion.div>
    )
}

export default ProjectCard;