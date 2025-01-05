export default class Keyboard {
    _key;
    constructor() {
        this._key = {};
        this.watchEvent();
    }
    get up() {
        return this._key['ArrowUp'];
    }
    get down() {
        return this._key['ArrowDown'];
    }
    get left() {
        return this._key['ArrowLeft'];
    }
    get right() {
        return this._key['ArrowRight'];
    }
    watchEvent() {
        document.addEventListener('keydown', (e) => {
            this._key[e.key] = true;
            console.log(this._key);
        });
        document.addEventListener('keyup', (e) => {
            this._key[e.key] = false;
            console.log(this._key);
        });
    }
}
