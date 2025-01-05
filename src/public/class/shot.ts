import MovableObject from "./movableObject.js";
import { ShotParams } from "../utility/type.js";
import { Util } from "../utility/util.js";

export default class Shot extends MovableObject {
    protected _power: number; // パワー

    /**
     * コンストラクト
     * @param params 初期パラメーター
     */
    constructor(params: ShotParams) {
        super({
            element: Util.createElement({
                name: "img",
                attr: {
                    src: './assets/images/shot.png',
                    class: 'blink'
                }
            }),
            ...params
        });
        this._power = params.power;
    }


    get power(): number {
        return this._power;
    }

    draw(): void {
        const h_angle = ((this.power % 12) * 30).toString();
        this.element.style.filter = "hue-rotate(" + h_angle + "deg)";
        const { x, y } = this.velocity;
        const r = Math.sqrt(x ** 2 + y ** 2);
        let r_angle = 0;
        if(y >= 0) {
            r_angle = Math.asin(x / r) * (180 / Math.PI);
        } else {
            if (x <= 0) {
                r_angle = Math.asin(y/r) * (180 / Math.PI) - 90;
            } else {
                r_angle = Math.asin(x/r) * (180 / Math.PI) + 90;
            }
        }
        this.element.style.transform = "rotate(" + r_angle + "deg)";
        super.draw();
    }

}