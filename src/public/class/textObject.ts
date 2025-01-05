import GameObject from "./gameObject.js"
import IText from "../interface/text.js"
import { TextObjectParams } from "../utility/type.js"
import { Util } from "../utility/util.js";

export default class TextObject extends GameObject implements IText {
    public readonly _fontName: string; // 書体
    public readonly _fontSize: number; // 文字サイズ
    public _text: string; // テキストの内容

    constructor(params: TextObjectParams) {
        super({
            element: Util.createElement({
                name: "div"
            }),
            ...params
        })
        this._fontName = params.fontName;
        this._fontSize = params.fontSize;
        this._text = params.text ?? "";
    }

    get fontName(): string {
        return this._fontName;
    }
    get fontSize(): number {
        return this._fontSize;
    }
    get text(): string {
        return this._text;
    }
    set text(text: string) {
        this._text = text;
    }

    /**
     * 描画する
     */
    draw(): void {
        this.element.style.fontFamily = this.fontName;
        this.element.style.fontSize = this.fontSize.toString() + "px";
        this.element.innerText = this.text;
        super.draw();
    }
}