import cn from "classnames";
import Icon, { IconName } from "./Icon";
import { MouseEvent } from "react";

// Import Google Analytics
import ReactGA from "react-ga4";

export interface ButtonProps {
    className?: string,
    isDarkMode: boolean,
    onClick?: (e: any) => void,
    href?: string,
    icon?: IconName,
    label: string,
    appearance?: 'primary' | 'secondary' | 'only-icon',
    disabled?: boolean,
    onlyIcon?: boolean,
    target?: '_blank' | '_self'
}

function Button({
    className,
    isDarkMode,
    onClick,
    href,
    icon,
    label,
    appearance = 'primary',
    disabled = false,
    target = '_self'

}: ButtonProps) {

    const classNames = cn(
        'button', className, {
        'button--primary': appearance == 'primary',
        'button--secondary': appearance == 'secondary',
        'button--only-icon': appearance == 'only-icon',
        'dark-mode': isDarkMode,
    });

    const ga4OnClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        ReactGA.event({
            category: "btn",
            action: 'click',
            label: label,
        });
        if (onClick) onClick(e);
    };

    const Content = () => (
        <>
            {icon ? (
                appearance == 'only-icon' ? (
                    <Icon name={icon} />
                ) : (
                    <>
                        <span>{label}</span>
                        <Icon name={icon} />
                    </>
                )
            ) : (
                <span>
                    {label}
                </span>
            )
            }
        </>
    );

    return (
        <>
            {onClick && !href &&
                <button disabled={disabled} className={classNames} aria-label={label} onClick={(e) => ga4OnClick(e)}>
                    <Content />
                </button>
            }

            {href && !onClick &&
                <a href={href} className={classNames} target={target}>
                    <Content />
                </a>
            }
        </>
    );
}

export default Button;