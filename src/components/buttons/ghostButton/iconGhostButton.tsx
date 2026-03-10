import Styles from "../ghostButton/ghost-button.module.css";
import { svgIcons } from "../../icons/icons";

type Props = {
  icon: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
};

function IconGhostButton({ icon, disabled = false, size = "lg", }: Props) {
  const getIcon = (iconName?: string) => {
    if (!iconName) return null;

    const Icon = svgIcons[iconName];
    if (!Icon) return null;

    return <Icon width={16} height={16} />;
  };

  return (
    <button disabled={disabled} className={`${Styles.buttonWrapper} ${Styles[size]} ${Styles.icon}`}
    >
      { getIcon(icon) }
    </button>
  );
}

export { IconGhostButton };