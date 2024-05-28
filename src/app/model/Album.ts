export class Album {
    constructor(
        public id: string,
        public name: string,
        public artists: string[],
        public releaseDate: string,
        public totalTracks: number,
        public imageRef: string
    ) {}
}