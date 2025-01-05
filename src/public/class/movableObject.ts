import GameObject from "./gameObject.js";
import IMovable from "../interface/movable.js";
import { Point2D, MovableObjectParams } from "../utility/type.js";

export default class MovableObject extends GameObject implements IMovable {
    protected _velocity: Point2D; // 速度
    protected _acceleration: Point2D; // 加速度

    constructor(params: MovableObjectParams) {
        super(params);
        this._velocity = params.velocity;
        this._acceleration = params.acceleration;
    }

    get velocity(): Point2D {
        return this._velocity;
    }
    set velocity(velocity: Point2D) {
        this._velocity = velocity;
    }
    get acceleration(): Point2D {
        return this._acceleration;
    }
    set acceleration(acceleration: Point2D) {
        this._acceleration = acceleration;
    }

    /**
     * 移動
     */
    move(): void {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    /**
     * 加速
     */
    accelerate(): void {
        this.velocity.x = this.acceleration.x;
        this.velocity.y = this.acceleration.y;
    }

    /**
     * 停止
     */
    stop(): void {
        this.acceleration = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
    }

    update(): void {
        this.accelerate();
        this.move();
        super.update();
    }
}