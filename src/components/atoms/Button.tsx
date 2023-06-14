import cn from "classnames";
import Icon, { IconProps } from "./Icon";

export interface ButtonProps {
    className?: string,
    isDarkMode: boolean,
    onClick?: () => void,
    href?: string,
    icon?: IconProps["name"],
    label: string,
    appearance?: 'primary' | 'secondary' | 'only-icon',
    disabled?: boolean,
    onlyIcon?: boolean
}

function Button({
    className,
    isDarkMode,
    onClick,
    href,
    icon,
    label,
    appearance = 'primary',
    disabled = false

}: ButtonProps) {

    const classNames = cn(
        'button', className, {
        'button--primary': appearance == 'primary',
        'button--secondary': appearance == 'secondary',
        'button--only-icon': appearance == 'only-icon',
        'dark-mode': isDarkMode,
    });

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
            {onClick &&
                <button disabled={disabled} className={classNames} aria-label={label} onClick={onClick}>
                    <Content />
                </button>
            }

            {href &&
                <a href={href} className={classNames}>
                    <Content />
                </a>
            }
        </>
    );
}

export default Button;