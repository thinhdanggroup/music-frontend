import { schema } from 'normalizr';

const song = new schema.Entity('songs');
const musician = new schema.Entity('musicians');
const album = new schema.Entity('albums');
const playlist = new schema.Entity('playlists');

song.define({
  musician,
});

playlist.define({
  tracks: [song],
});

export const songSchema = song;
export const playlistSchema = playlist;
export const musicianSchema = musician;
export const albumSchema = album;

