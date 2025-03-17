import styles from "./Button.module.css";

const Button = ({
  label,
  variant = "primary",
  size = "medium",
  width = "default",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[width]}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;
