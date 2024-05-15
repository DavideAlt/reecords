export class Song {
    constructor(
        public id: number,
        public name: string,
        public artists: string[],
        public album: string
    ) {}
}