import Screen from "./screen.js";
import Keyboard from "./keyboard.js";
import Score from "./score.js";
import Level from "./level.js";
import Comet from "./comet.js";
import Meteo from "./meteo.js";
import Shot from "./shot.js";
import Player from "./player.js";
import { Util } from "../utility/util.js";
import { Point2D } from "../utility/type.js";

/**
 * Game クラス
 */
export default class Game {
    private readonly _player: Player; // 自機
    private _shots: Array<Shot>; // 弾
    private _comets: Array<Comet>; // 流星
    private _meteos: Array<Meteo>; // 隕石
    // テキスト
    private _score: number; // スコア
    private _level: number // レベルの値
    private readonly _scoreBoard: Score; // スコアボード
    private readonly _levelBoard: Level; // レベルボード
    // タイマー
    private readonly _mainTimer: number; // メインタイマー
    private readonly _cometTimer: number; // 流星タイマー
    private _shotTImer: number; // 弾タイマー
    private _meteoTimer: number; // 隕石タイマー
    private _shotInterval: number; // 弾の発射間隔
    private _meteoInterval: number; // 隕石の発射間隔

    /**
     * コンストラクタ
     */
    constructor() {
        // オブジェクトを初期化
        // ゲームの状態を復元
        // 各種タイマーを起動
    }

    /**
     * メインタイマー処理
     */
    private mainTimer(): void {
        // スコアを加算
        // 境界チェック
        // 衝突判定
        // ゲームの状態を保存
    }

    /**
     * スコア加算
     */
    private addScore(): void {
        // スコアを更新
        // updateLevelを呼び出す
    }

    /**
     * レベル更新
     */
    private updateLevel(): void {
        // レベルを更新
    }

    /**
     * 境界チェック
     */
    private checkBoundary(): void {
        // 境界チェック
    }

    /**
     * 衝突判定
     */
    private detectCollision(): void {
        // 衝突判定
    }

    /**
     * 弾の生成
     */
    private createShot(): void {
        // 同時発射数と初期位置を決める
        // 弾の強度を求める
        // 弾を生成して配列に追加
        // 弾を生成するタイマーの間隔を更新
    }

    /**
     * 隕石の生成
     */
    private createMeteo(): void {
        // 初期位置を決める
        // 隕石の強度を求める
        // 隕石を生成して配列に追加
        // 隕石を生成するタイマーの間隔を更新
    }

    /**
     * 流星の生成
     */
    private createComet(): void {
        // 初期位置を決める
        // 流星を生成して配列に追加
    }

    /**
     * 保存
     */
    private save(): void {
        // ゲームの状態を保存する
    }

    /**
     * ロード
     */
    private load(): void {
        // ゲームの状態を復元する
    }
}