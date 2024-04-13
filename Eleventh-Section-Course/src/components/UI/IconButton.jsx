import { log } from "../../log.js";

export default function IconButton({ children, icon, ...props }) {
  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
}
