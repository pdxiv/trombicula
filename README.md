# trombicula

## Introduction

Trombicula is a web-based player/interpreter for text adventure games in the Scott Adams file format.

## How to use

To run this on a web server, simply put the `index.html` , `style.css` and `handleGameData.js` in a directory together with a compatible game data file. The name of the game data file must be specified with the `gameFile` argument in the URL, so that if your game file is called `adv01.dat` the URL would look something like this: `https://www.mysuperawesomewebserver.com/index.html?gameFile=adv01.dat` .

To test this locally, you can use Python as a local web server in the local directory by using `python -m http.server` or `python3 -m http.server` (whichever works best), and navigating to `http://localhost:8000/?gameFile=adv01.dat` in a web browser.

## Files

| Filename | Description |
| -------- | ----------- |
| README.md | The file you're currently reading |
| handleGameData.js | Most of the adventure game logic |
| index.html | The main HTML file that's needed to show the GUI |
| style.css  | CSS file that contains colors and styling information |
