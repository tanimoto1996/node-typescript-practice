
import GameObject from "../class/gameObject.js";
import { Point2D } from "./type.js";
import Screen from "../class/screen.js";

type createElementOptions = {
    name: string;
    attr?: Record<string, string>;
}

export namespace Util {
    /**
     * HTML要素の作成
     * 
     * @param name タグの名前
     * @param attr 属性
     * @returns HTMLElement オブジェクト
     */
    export const createElement = ({name, attr}: createElementOptions): HTMLElement => {
        const element = document.createElement(name);
        if(typeof attr !== "undefined") {
            let key:keyof typeof attr;
            for (key in attr) {
                const value = attr[key];
                element.setAttribute(key, value);
            }
        }

        return element;
    }

    /**
     * オブジェクトの座標を画面内に制限
     * @param obj 検査対象のオブジェクト
     * @param strict true: 厳密な制限/false: 緩い制限
     * @returns Point2D オブジェクト
     */
    export const clampScreen = <T extends GameObject>(obj: T, strict: boolean = false): Point2D => {
        let [x, y] = [obj.position.x, obj.position.y];
        let offsetX = strict ? obj.size.x / 2 : -(obj.size.x /2);
        let offsetY = strict ? obj.size.y / 2 : -(obj.size.y /2);
        // X座標を制限
        x = Math.max(x, offsetX);
        x = Math.min(x, Screen.width - offsetX);
        // Y座標を制限
        y = Math.max(y, offsetY);
        y = Math.min(y, Screen.height - offsetY);
        return {x: x, y: y};
    }
}