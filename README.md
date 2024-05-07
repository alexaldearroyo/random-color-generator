## RANDOM COLOR GENERATOR

### Node.js app that returns a random color in the command app

- When a user enters `node index.js` block of 31x9 # characters colored with a random color gets generated.

- The app also accepts for a hue and/or luminosity as command line arguments and then generate random colors that match those choices.

**Usage examples:**

`node index.js`: Returns a block of 31x9 # characters with a random color.

`node index.js blue light`: Returns a block of 31x9 # characters with a random color of blue hue and light luminosity.

---

### TO-DOs

- [x] Print block of 31x9 # characters when running `node index.js`
- [x] Make that in the rows 4, 5 and 6 of the block there are blank spaces instead of '#' between the columns 6 and 25
- [x] Generate random hex color
- [x] Make hex code appear in the center of row 5
- [x] Make text color equal to the randomized hexcode
