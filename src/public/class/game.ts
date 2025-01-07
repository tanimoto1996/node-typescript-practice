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
    private readonly _mainTimer: ReturnType<typeof setInterval>;
    private readonly _cometTimer: ReturnType<typeof setInterval>;
    private _shotTimer: ReturnType<typeof setInterval>;
    private _meteoTimer: ReturnType<typeof setInterval>;
    private _shotInterval: number; // 弾の発射間隔
    private _meteoInterval: number; // 隕石の発射間隔

    /**
     * コンストラクタ
     */
    constructor() {
        // 自機を生成
        this._player = new Player({
            position: { x: Screen.width / 2 , y: 45 },
            size: { x: 100, y: 90 },
            speed: 20,
            keyboad: new Keyboard()
        });
    
        // 配列を初期化
        this._shots = [];
        this._comets = [];
        this._meteos = [];
    
        // スコア表示を初期化
        this._score = 0;
        this._scoreBoard = new Score({
            position: { x: 25, y: Screen.height - 25 },  // 例: 下から50ピクセルの位置に
            fontName: "Bungee Inline",
            fontSize: 40,
            score: this._score
        });
    
        // レベル表示を初期化
        this._level = 1;
        this._levelBoard = new Level({
            position: { x: 25, y: Screen.height - 75 }, // 例: スコアより少し上に
            fontName: "Bungee Inline",
            fontSize: 24,
            level: this._level
        });
    
        // ゲームの状態を復元
        this.load();
    
        // タイマーの実行間隔
        this._shotInterval = 1000;
        this._meteoInterval = 2000;
    
        // 各種タイマーを起動
        this._mainTimer = setInterval(this.mainTimer.bind(this), 50);
    
        // タイポを修正して _shotTimer に
        this._shotTimer = setInterval(this.createShot.bind(this), this._shotInterval);
    
        this._cometTimer = setInterval(this.createComet.bind(this), 5000);
        this._meteoTimer = setInterval(this.createMeteo.bind(this), this._meteoInterval);
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
