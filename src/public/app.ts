import Screen from "./class/screen.js";
import Player from "./class/player.js";
import Keyboard from "./class/keyboard.js";

const player = new Player({
    position: {x: Screen.width / 2, y: 50},
    size: {x: 100, y: 90},
    speed: 20,
    keyboad: new Keyboard()
});