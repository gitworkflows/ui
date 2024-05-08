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

// Transform colorList from an object to an array of objects
const transformedColorList = Object.keys(colorList).map((colorName) => ({
  label: colorName.replace("--", ""),
  value: colorList[colorName],
}));

// Get the background and text color values of each palette item
const getPaletteItemStyle = (color: Color) => {
  const itemTextColor = color.label.substring(color.label.length - 2);

  return {
    backgroundColor: color.value,
    color: parseInt(itemTextColor, 10) >= 50 ? "#ffffff" : "#0a0a23",
  };
};

// Get palette colors by name
const getPaletteByColorName = (name: string) =>
  transformedColorList.filter((color) => color.label.includes(name));

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
  // Attempt to get palette colors, handle error if colors.A is undefined
  let paletteColors = [];
  try {
    paletteColors = getPaletteByColorName("gray");
  } catch (error) {
    console.error("Error getting palette colors:", error);
  }

  return (
    <>
      <Palette colors={paletteColors} />
      <Palette colors={getPaletteByColorName("purple")} />
      <Palette colors={getPaletteByColorName("yellow")} />
      <Palette colors={getPaletteByColorName("blue")} />
      <Palette colors={getPaletteByColorName("green")} />
      <Palette colors={getPaletteByColorName("red")} />
    </>
  );
};
