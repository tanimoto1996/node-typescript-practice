import Screen from "./screen.js";
import Keyboard from "./keyboard.js";
import Score from "./score.js";
import Level from "./level.js";
import Player from "./player.js";
/**
 * Game クラス
 */
export default class Game {
    _player; // 自機
    _shots; // 弾
    _comets; // 流星
    _meteos; // 隕石
    // テキスト
    _score; // スコア
    _level; // レベルの値
    _scoreBoard; // スコアボード
    _levelBoard; // レベルボード
    // タイマー
    _mainTimer;
    _cometTimer;
    _shotTimer;
    _meteoTimer;
    _shotInterval; // 弾の発射間隔
    _meteoInterval; // 隕石の発射間隔
    /**
     * コンストラクタ
     */
    constructor() {
        // 自機を生成
        this._player = new Player({
            position: { x: Screen.width / 2, y: 45 },
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
            position: { x: 25, y: Screen.height - 25 }, // 例: 下から50ピクセルの位置に
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
    mainTimer() {
        // スコアを加算
        // 境界チェック
        // 衝突判定
        // ゲームの状態を保存
    }
    /**
     * スコア加算
     */
    addScore() {
        // スコアを更新
        // updateLevelを呼び出す
    }
    /**
     * レベル更新
     */
    updateLevel() {
        // レベルを更新
    }
    /**
     * 境界チェック
     */
    checkBoundary() {
        // 境界チェック
    }
    /**
     * 衝突判定
     */
    detectCollision() {
        // 衝突判定
    }
    /**
     * 弾の生成
     */
    createShot() {
        // 同時発射数と初期位置を決める
        // 弾の強度を求める
        // 弾を生成して配列に追加
        // 弾を生成するタイマーの間隔を更新
    }
    /**
     * 隕石の生成
     */
    createMeteo() {
        // 初期位置を決める
        // 隕石の強度を求める
        // 隕石を生成して配列に追加
        // 隕石を生成するタイマーの間隔を更新
    }
    /**
     * 流星の生成
     */
    createComet() {
        // 初期位置を決める
        // 流星を生成して配列に追加
    }
    /**
     * 保存
     */
    save() {
        // ゲームの状態を保存する
    }
    /**
     * ロード
     */
    load() {
        // ゲームの状態を復元する
    }
}
