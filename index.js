import randomHex from 'random-hex';

const width = 31;
const height = 9;
const startBlankColumn = 6;
const endBlankColumn = 25;
const randomColor = randomHex.generate();

for (let i = 0; i < height; i++) {
  if (i >= 3 && i <= 5) {
    console.log(
      '#'.repeat(startBlankColumn - 1) +
        ' '.repeat(endBlankColumn - startBlankColumn + 1) +
        '#'.repeat(width - endBlankColumn),
    );
  } else {
    console.log('#'.repeat(width));
  }
}

console.log(randomColor);
