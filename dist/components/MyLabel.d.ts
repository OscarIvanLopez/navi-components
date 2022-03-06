/// <reference types="react" />
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
declare const MyLabel: ({ label, size, allCaps, color, customFontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
export default MyLabel;
