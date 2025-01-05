import TextObject from "./textObject.js";
export default class Score extends TextObject {
    _score; // スコア値
    constructor(params) {
        super(params);
        this._score = params.score;
    }
    set score(score) {
        this.score = score;
    }
    /**
     * 描画する
     */
    draw() {
        this._text = this._score.toString().padStart(10, "0");
        super.draw();
    }
}
