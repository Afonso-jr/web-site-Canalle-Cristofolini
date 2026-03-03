import Styles from "../button/button.module.css";
import { svgIcons } from "../icons/icons";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  leftIcon?: string;
  rightIcon?: string;
};

function Button({ children, leftIcon, rightIcon }: Props) {
  const getIcon = (iconName?: string) => {
    if (!iconName) return null;

    const Icon = svgIcons[iconName];
    if (!Icon) return null;

    return <Icon width={16} height={16} />;
  };

  return (
    <button className={Styles.buttonWrapper}>
      {leftIcon && getIcon(leftIcon)}

      {children && <span>{children}</span>}

      {rightIcon && getIcon(rightIcon)}
    </button>
  );
}

export { Button };