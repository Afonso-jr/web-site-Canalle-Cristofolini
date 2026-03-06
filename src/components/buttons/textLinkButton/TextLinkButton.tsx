import Styles from "../textLinkButton/text-link-button.module.css";
import { svgIcons } from "../../icons/icons";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
};

function TextLinkButton({ children, leftIcon, rightIcon, disabled = false, size = "lg", }: Props) {
  const getIcon = (iconName?: string) => {
    if (!iconName) return null;

    const Icon = svgIcons[iconName];
    if (!Icon) return null;

    return <Icon width={16} height={16} />;
  };

  return (
    <button disabled={disabled} className={`${Styles.buttonWrapper} ${Styles[size]}`}
    >
      {leftIcon && getIcon(leftIcon)}

      {children && <span>{children}</span>}

      {rightIcon && getIcon(rightIcon)}
    </button>
  );
}

export { TextLinkButton };