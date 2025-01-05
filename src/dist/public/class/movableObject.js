import GameObject from "./gameObject.js";
export default class MovableObject extends GameObject {
    _velocity; // 速度
    _acceleration; // 加速度
    constructor(params) {
        super(params);
        this._velocity = params.velocity;
        this._acceleration = params.acceleration;
    }
    get velocity() {
        return this._velocity;
    }
    set velocity(velocity) {
        this._velocity = velocity;
    }
    get acceleration() {
        return this._acceleration;
    }
    set acceleration(acceleration) {
        this._acceleration = acceleration;
    }
    /**
     * 移動
     */
    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    /**
     * 加速
     */
    accelerate() {
        this.velocity.x = this.acceleration.x;
        this.velocity.y = this.acceleration.y;
    }
    /**
     * 停止
     */
    stop() {
        this.acceleration = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
    }
    update() {
        this.accelerate();
        this.move();
        super.update();
    }
}
