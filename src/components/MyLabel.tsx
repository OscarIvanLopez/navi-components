import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Text that is gonna be displayed on the label
   */
  label?: string;
  /**
   * The Size of the Text
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all characters
   */
  allCaps?: false | true;
  /**
   * The Size of the Text
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color of the font
   */
  customFontColor?: string;
  /**
   * Color of the font
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  customFontColor = "black",
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      style={{ color: customFontColor, backgroundColor: backgroundColor }}
      className={`label ${size} text-${color}`}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
