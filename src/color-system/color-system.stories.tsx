import React from "react";
import { AllPalettes } from "./color-system";

// Define the story for the Color System component
const ColorSystemStory = {
  title: "Design System/Color",
  component: AllPalettes,
};

// Export the Color System component story
export const ColorSystemStoryComponent = (): JSX.Element => <AllPalettes />;

export default ColorSystemStory;
