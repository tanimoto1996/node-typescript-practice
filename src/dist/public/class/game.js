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
    _mainTimer; // メインタイマー
    _cometTimer; // 流星タイマー
    _shotTImer; // 弾タイマー
    _meteoTimer; // 隕石タイマー
    _shotInterval; // 弾の発射間隔
    _meteoInterval; // 隕石の発射間隔
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
