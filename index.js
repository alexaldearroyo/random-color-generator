import chalk from 'chalk';
import chroma from 'chroma-js';
import randomHex from 'random-hex';

// Generate a random color in a specific hue range avoiding black/gray
const generateRandomHueColor = (hue, luminosity) => {
  const randomSaturation = 0.5 + Math.random() * 0.5; // Avoid very low saturation (gray)

  let randomLightness;
  if (luminosity === 'dark') {
    randomLightness = 0.15 + Math.random() * 0.2; // Dark range (not black)
  } else if (luminosity === 'light') {
    randomLightness = 0.8 + Math.random() * 0.15; // Light range (very light)
  } else {
    randomLightness = 0.3 + Math.random() * 0.4; // Default mid-range
  }

  return chroma.hsl(hue, randomSaturation, randomLightness).hex();
};

// Predefined hue values
const hues = {
  red: 0,
  orange: 30,
  yellow: 60,
  green: 120,
  cyan: 180,
  blue: 240,
  violet: 300,
};

// Function to get a random color matching the hue argument
const getHueColor = (hueArg, luminosity) => {
  if (hueArg in hues) {
    return generateRandomHueColor(hues[hueArg], luminosity);
  } else if (!hueArg) {
    return randomHex.generate(); // Fall back to any random color
  } else {
    console.log('Invalid hue argument');
    process.exit(1);
  }
};

const userHue = process.argv[2];
const userLuminosity = process.argv[3]; // Accepts 'dark' or 'light'
const randomHueColor = getHueColor(userHue, userLuminosity);

const width = 31;
const height = 9;
const startBlankColumn = 6;
const endBlankColumn = 25;

// Create a styled hash character with the random hue color
const styledHash = chalk.hex(randomHueColor)('#');

for (let i = 0; i < height; i++) {
  if (i >= 3 && i <= 5) {
    if (i === 4) {
      // Center the random hue color between startBlankColumn and endBlankColumn
      const padding = Math.floor(
        (endBlankColumn - startBlankColumn - randomHueColor.length) / 2,
      );
      console.log(
        styledHash.repeat(startBlankColumn - 1) +
          ' '.repeat(padding) +
          chalk.hex(randomHueColor)(randomHueColor) +
          ' '.repeat(padding + (randomHueColor.length % 2 === 0 ? 0 : 1)) +
          styledHash.repeat(width - endBlankColumn),
      );
    } else {
      // Print empty rows with spaces
      console.log(
        styledHash.repeat(startBlankColumn - 1) +
          ' '.repeat(endBlankColumn - startBlankColumn + 1) +
          styledHash.repeat(width - endBlankColumn),
      );
    }
  } else {
    // Print full-width rows
    console.log(styledHash.repeat(width));
  }
}
