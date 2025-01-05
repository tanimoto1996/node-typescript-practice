import MovableObject from "./movableObject.js";
import { CometParams } from "../utility/type.js";
import { Util } from "../utility/util.js";

export default class Comet extends MovableObject {

    /**
     * コンストラクト
     * @param params 初期パラメーター
     */
    constructor(params: CometParams) {
        super({
            element: Util.createElement({
                name: "img",
                attr: {
                    src: './assets/images/comet.png',
                    class: 'blink'
                }
            }),
            ...params
        });
    }

    
}


