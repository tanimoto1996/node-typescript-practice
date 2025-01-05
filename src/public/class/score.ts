import TextObject from "./textObject.js";
import { ScoreParams } from "../utility/type.js";

export default class Score extends TextObject {
    protected _score: number; // スコア値

    constructor(params: ScoreParams) {
        super(params);
        this._score = params.score;
    }

    set score(score: number) {
        this.score = score;
    }

    /**
     * 描画する
     */
    draw(): void {
        this._text = this._score.toString().padStart(10, "0");
        super.draw();
    }
}