import MovableObject from "./movableObject.js";
import { MeteoParams } from "../utility/type.js";
import { Util } from "../utility/util.js";

export default class Meteo extends MovableObject {

    protected _power: number; // パワー
    protected readonly _inital_power: number; // 初期パワー

    /**
     * コンストラクト
     * @param params 初期パラメーター
     */
    constructor(params: MeteoParams) {
        super({
            element: Util.createElement({
                name: "img",
                attr: {
                    src: './assets/images/meteo.png',
                    class: 'blink'
                }
            }),
            ...params
        });
        this._power = params.power;
        this._inital_power = params.power;
    }

    get power(): number {
        return this._power;
    }
    set power(power: number) {
        this._power = power;
    }
    get inital_power(): number {
        return this._inital_power;
    }

    /**
     * 描画する
     */
    draw(): void {
        // パワー減少に伴って小さくなる
        const scale = (this.power / this.inital_power).toString();
        this.element.style.transform = "scale(" + scale + ")";
        // パワーに応じて色相を変える
        const h_angle = ((this.power % 12) * 30).toString();
        this.element.style.filter = "hue-rotate(" + h_angle + "deg)";
        super.draw();
    }


}