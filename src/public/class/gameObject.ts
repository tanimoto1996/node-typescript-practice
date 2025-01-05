import { Point2D, Size, GameObjectParams } from "../utility/type.js";

export default class GameObject {
    protected readonly _element: HTMLElement;
    protected readonly _size: Size;
    protected _position: Point2D;
    protected readonly _timerId: ReturnType<typeof setInterval>;

    constructor(params: GameObjectParams) {
        this._element = params.element;
        this._size = params.size ?? { x: 0, y: 0 };
        this._position = params.position;
        this._timerId = setInterval(this.update.bind(this), 50);
        const width = this._size.x.toString() + "px";
        const height = this._size.y.toString() + "px";
        this._element.style.width = width;
        this._element.style.height = height;
        this._element.style.transition = "all 0.1s linear 0s";
        this._element.style.opacity = "0";
        document.body.appendChild(this._element);
    }

    get element(): HTMLElement {
        return this._element;
    }
    get size(): Size {
        return this._size;
    }
    get position(): Point2D {
        return this._position;
    }
    set position(position: Point2D) {
        this._position = position;
    }
    get timerId(): ReturnType<typeof setInterval> {
        return this._timerId;
    }

    /**
     * 描画する
     */
    draw(): void {
        const left = (this.position.x - this.size.x / 2).toString() + "px";
        const bottom = (this.position.y - this.size.y / 2).toString() + "px";
        this.element.style.position = "fixed";
        this.element.style.left = left;
        this.element.style.bottom = bottom;
        this.element.style.opacity = "1";
    }

    /**
     * 更新する
     */
    update(): void {
        this.draw();
    }

    /**
     * 破棄する
     */
    dispose(): void {
        this.element.remove();
        clearInterval(this.timerId);
    }


}