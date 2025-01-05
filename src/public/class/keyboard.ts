export default class Keyboard {

    protected _key:Record<string, boolean>;

    constructor() {
        this._key = {};
        this.watchEvent();
    }

    get up(): boolean {
        return this._key['ArrowUp'];
    }
    get down(): boolean {
        return this._key['ArrowDown'];
    }
    get left(): boolean {
        return this._key['ArrowLeft'];
    }
    get right(): boolean {
        return this._key['ArrowRight'];
    }

    watchEvent(): void {
        document.addEventListener('keydown', (e: KeyboardEvent) => {
            this._key[e.key] = true;
            console.log(this._key);
        });

        document.addEventListener('keyup', (e: KeyboardEvent) => {
            this._key[e.key] = false;
            console.log(this._key);
        });
    }
}