import { Artist } from "./Artist";

export class Album {
    constructor(
        public id: string,
        public name: string,
        public artists: Artist[],
        public release_date: string,
        public total_tracks: number,
        public imageRef: string
    ) {}
}