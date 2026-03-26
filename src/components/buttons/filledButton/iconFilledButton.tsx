import Styles from "../filledButton/filled-button.module.css";
import { svgIcons } from "../../icons/icons";

type Props = {
  icon?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secundary" | "neutral" | "danger" | "inverse";
}

function IconFilledButton({ icon, type='button', disabled = false, size = "lg", variant="primary" }: Props) {
  const getIcon = (iconName?: string) => {
    if (!iconName) return null;

    const Icon = svgIcons[iconName];
    if (!Icon) return null;

    return <Icon width={16} height={16} />;
  };

  return (
    <button type={ type } disabled={disabled} className={`${Styles.buttonWrapper} ${Styles[size]} ${Styles.icon} ${Styles[variant]}`}
    >
      { getIcon(icon) }
    </button>
  );
}

export { IconFilledButton };