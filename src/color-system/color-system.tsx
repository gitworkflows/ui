import React from "react";
import colorList from "../colors.css";
import { Color, PaletteProps } from "./types";

// ---------------------------------------------------------- //
//                      HELPER FUNCTIONS                      //
// ---------------------------------------------------------- //
/**
 * Transform colorList from an object to an array of objects
 * @example
 * Input: { '--blue10': 'var(--blue10)' }
 * Output: [{ label: 'blue10', value: 'var(--blue10)' }]
 */

// Get the background and text color values of each palette item
const getPaletteItemStyle = (color: Color) => {
  const itemTextColor = color.label.substring(color.label.length - 2);
  const textColor = parseInt(itemTextColor, 10) >= 50 ? "#ffffff" : "#0a0a23";

  return {
    backgroundColor: color.value,
    color: textColor,
  };
};

// Get palette colors by name
const getPaletteByColorName = (name: string): Color[] => {
  const filteredColors: Color[] = [];

  for (const colorName in colorList) {
    if (colorName.includes(name)) {
      const label = colorName.replace("--", "");
      const value = colorList[colorName];
      filteredColors.push({ label, value });
    }
  }

  return filteredColors;
};

// Palette component
const Palette: React.FC<PaletteProps> = ({ colors }) => {
  return (
    <div className="inline-flex flex-col m-4 w-3/12">
      {colors.map((color) => (
        <div
          className="flex items-center p-2 h-8"
          key={color.label}
          style={getPaletteItemStyle(color)}
        >
          {color.label}
        </div>
      ))}
    </div>
  );
};

// AllPalettes component
export const AllPalettes: React.FC = () => {
  return (
    <>
      <Palette colors={getPaletteByColorName("gray")} />
      <Palette colors={getPaletteByColorName("purple")} />
      <Palette colors={getPaletteByColorName("yellow")} />
      <Palette colors={getPaletteByColorName("blue")} />
      <Palette colors={getPaletteByColorName("green")} />
      <Palette colors={getPaletteByColorName("red")} />
    </>
  );
};
