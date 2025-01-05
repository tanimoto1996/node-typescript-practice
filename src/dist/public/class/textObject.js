import GameObject from "./gameObject.js";
import { Util } from "../utility/util.js";
export default class TextObject extends GameObject {
    _fontName; // 書体
    _fontSize; // 文字サイズ
    _text; // テキストの内容
    constructor(params) {
        super({
            element: Util.createElement({
                name: "div"
            }),
            ...params
        });
        this._fontName = params.fontName;
        this._fontSize = params.fontSize;
        this._text = params.text ?? "";
    }
    get fontName() {
        return this._fontName;
    }
    get fontSize() {
        return this._fontSize;
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._text = text;
    }
    /**
     * 描画する
     */
    draw() {
        this.element.style.fontFamily = this.fontName;
        this.element.style.fontSize = this.fontSize.toString() + "px";
        this.element.innerText = this.text;
        super.draw();
    }
}
