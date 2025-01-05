import TextObject from "./textObject.js";
export default class Level extends TextObject {
    _level; // レベル値
    constructor(params) {
        super(params);
        this._level = 1;
    }
    set level(level) {
        this._level = level;
    }
    /**
     * 描画する
     */
    draw() {
        this._text = "LEVEL:" + this._level.toString();
        super.draw();
    }
}
