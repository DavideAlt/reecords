import { Album } from "./Album";
import { Artist } from "./Artist";

export class Song {
    constructor(
        public id: string,
        public name: string,
        public artists: Artist[],
        public album: Album
    ) {}
}