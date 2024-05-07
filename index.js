import chalk from 'chalk';
import randomHex from 'random-hex';

// Predefined hex values for specific hues
const hues = {
  red: '#FF0000',
  orange: '#FFA500',
  yellow: '#FFFF00',
  blue: '#0000FF',
  violet: '#EE82EE',
  green: '#008000',
  cyan: '#00FFFF',
};

// Function to get the hue based on the argument
const getHue = (arg) => {
  if (arg in hues) {
    return hues[arg];
  } else if (!arg) {
    return randomHex.generate();
  } else {
    console.log('Invalid argument');
    process.exit(1);
  }
};

const userHue = process.argv[2];
const randomHue = getHue(userHue);

const width = 31;
const height = 9;
const startBlankColumn = 6;
const endBlankColumn = 25;

// Create a styled hash character with the random hue
const styledHash = chalk.hex(randomHue)('#');

for (let i = 0; i < height; i++) {
  if (i >= 3 && i <= 5) {
    if (i === 4) {
      // Center the random hue between startBlankColumn and endBlankColumn
      const padding = Math.floor(
        (endBlankColumn - startBlankColumn - randomHue.length) / 2,
      );
      console.log(
        styledHash.repeat(startBlankColumn - 1) +
          ' '.repeat(padding) +
          chalk.hex(randomHue)(randomHue) +
          ' '.repeat(padding + (randomHue.length % 2 === 0 ? 0 : 1)) +
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
