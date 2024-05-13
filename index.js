import chalk from 'chalk';
import chroma from 'chroma-js';
import randomHex from 'random-hex';

// Generate a random color within a specific hue range, avoiding black and gray
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
  if (hues.hasOwnProperty(hueArg)) {
    return generateRandomHueColor(hues[hueArg], luminosity);
  } else if (!hueArg) {
    return randomHex.generate(); // Fallback to any random color
  } else {
    console.error('Invalid hue argument');
    process.exit(1);
  }
};

const userHue = process.argv[2];
const userLuminosity = process.argv[3]; // Accepts 'dark' or 'light'
const color = getHueColor(userHue, userLuminosity);

// Use a template literal to display the graphic
console.log(
  chalk.hex(color)(
    `###############################
###############################
###############################
#####                     #####
#####      ${String(color)}        #####
#####                     #####
###############################
###############################
###############################`,
  ),
);
