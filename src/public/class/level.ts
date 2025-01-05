import TextObject from "./textObject.js";
import { LevelParams } from "../utility/type.js";

export default class Level extends TextObject {
    protected _level: number; // レベル値

    constructor(params: LevelParams) {
        super(params);
        this._level = 1;
    }

    set level(level: number) {
        this._level = level;
    }

    /**
     * 描画する
     */
    draw(): void {
        this._text = "LEVEL:" + this._level.toString();
        super.draw();
    }
}