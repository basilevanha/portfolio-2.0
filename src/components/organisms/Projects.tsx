import ProjectCard from "../molecules/ProjectCard";
import { t } from 'i18next';
import { en } from '../../translations/en';
import cn from 'classnames';


export interface ProjectsProps {
    isDarkMode: boolean;
}

export interface projectProps {
    title: string;
    description: string;
    alt: string;
    src: string;
}

function Header({
    isDarkMode,
}: ProjectsProps) {


    const translationProjectsArray = Object.entries(en.translation.projects);

    return (
        <div className={cn('projects', { 'dark-mode': isDarkMode })}>
            <div className="projects_content">
                {translationProjectsArray.map((project, id: number) => (
                    <ProjectCard
                        key={id}
                        name={t(`projects.${project[0]}.title`)}
                        description={t(`projects.${project[0]}.description`)}
                        img={{
                            alt: t(`projects.${project[0]}.alt`),
                            src: t(`projects.${project[0]}.src`)
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Header;