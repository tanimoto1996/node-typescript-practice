import MovableObject from "./movableObject.js";
import { Util } from "../utility/util.js";
export default class Meteo extends MovableObject {
    _power; // パワー
    _inital_power; // 初期パワー
    /**
     * コンストラクト
     * @param params 初期パラメーター
     */
    constructor(params) {
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
    get power() {
        return this._power;
    }
    set power(power) {
        this._power = power;
    }
    get inital_power() {
        return this._inital_power;
    }
    /**
     * 描画する
     */
    draw() {
        // パワー減少に伴って小さくなる
        const scale = (this.power / this.inital_power).toString();
        this.element.style.transform = "scale(" + scale + ")";
        // パワーに応じて色相を変える
        const h_angle = ((this.power % 12) * 30).toString();
        this.element.style.filter = "hue-rotate(" + h_angle + "deg)";
        super.draw();
    }
}
