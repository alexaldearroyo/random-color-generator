import randomHex from 'random-hex';

const width = 31;
const height = 9;
const startBlankColumn = 6;
const endBlankColumn = 25;
const randomColor = randomHex.generate();

for (let i = 0; i < height; i++) {
  if (i >= 3 && i <= 5) {
    if (i === 4) {
      // Center the random color between startBlankColumn and endBlankColumn
      const padding = Math.floor(
        (endBlankColumn - startBlankColumn - randomColor.length) / 2,
      );
      console.log(
        '#'.repeat(startBlankColumn - 1) +
          ' '.repeat(padding) +
          randomColor +
          ' '.repeat(padding + (randomColor.length % 2 === 0 ? 0 : 1)) +
          '#'.repeat(width - endBlankColumn),
      );
    } else {
      // Print empty rows with spaces
      console.log(
        '#'.repeat(startBlankColumn - 1) +
          ' '.repeat(endBlankColumn - startBlankColumn + 1) +
          '#'.repeat(width - endBlankColumn),
      );
    }
  } else {
    // Print full-width rows
    console.log('#'.repeat(width));
  }
}
