import Keyboard from "../class/keyboard.js";
import MovableObject from "../class/movableObject.js";

/**
 * Point3D型：3次元座標
 */
export type Point3D = {
    x: number;
    y: number;
    z: number;
}

/**
 * Point2D型：2次元座標
 */
export type Point2D = Omit<Point3D, 'z'>;

/**
 * Size型：サイズ
 */
export type Size = Omit<Point3D, 'z'>;

/**
 * GameObjectParams型：コンストラクタ引数
 */
export type GameObjectParams = {
    element: HTMLElement;
    position: Point2D;
    size?: Size;
}

/**
 * TextObjectParams型：コンストラクタ引数
 */
export type TextObjectParams = {
    position: Point2D;
    fontName: string;
    fontSize: number;
    text?: string;
}

/**
 * MovableObjectParams型：コンストラクタ引数
 */
export type MovableObjectParams = {
    element: HTMLElement; // 要素
    position: Point2D; // 位置
    size: Size; // サイズ
    velocity: Point2D; // 速度
    acceleration: Point2D; // 加速度
}

/**
 * ScoreParams型：コンストラクタ引数
 */
export type ScoreParams = Omit<TextObjectParams, 'text'> & {
    score: number; // スコア
}

/**
 * LevelParams型：コンストラクタ引数
 */
export type LevelParams = Omit<TextObjectParams, 'text'> & {
    level: number; // レベル
}

/**
 * CometParams型：コンストラクタ引数
 */
export type CometParams = Omit<MovableObjectParams, 'element'>;

/**
 * MeteoParams型：コンストラクタ引数
 */
export type MeteoParams = Omit<MovableObjectParams, 'element'> & {
    power: number; // 威力
};

/**
 * ShotParams型：コンストラクタ引数
 */
export type ShotParams = Omit<MovableObjectParams, 'element'> & {
    power: number; // 威力
}

/**
 * PlayerParams型：コンストラクタ引数
 */
export type PlayerParams = Omit<MovableObjectParams, 'element' | "velocity" | "acceleration"> & {
    speed: number; // 速度
    keyboad: Keyboard; // キーボード
}