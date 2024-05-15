export class Album {
    constructor(
        public id: number,
        public name: string,
        public artists: string[],
        public releaseDate: string,
        public totalTracks: number
    ) {}
}