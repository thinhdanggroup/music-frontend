import { normalize } from 'normalizr';
import { fetchSongs, fetchSongsSuccess } from '../actions/PlaylistActions';
import * as types from '../constants/ActionTypes';
import { QUERY_DB_URL } from '../constants/ApiConstants';
import { songSchema } from '../constants/Schemas';
import { callApi } from '../utils/ApiUtils';

const fetchSongCommentsSuccess = (id, comments) => ({
  type: types.FETCH_SONG_COMMENTS_SUCCESS,
  entities: {
    songs: {
      [id]: { comments },
    },
  },
});

const fetchSong = (id, playlist) => async (dispatch) => {
  let { json } = await callApi(`SELECT getBaiHatById('${id}')`);
  json = json.data.getbaihatbyid
  // const { userId } = json;

  const { entities, result } = normalize(json, songSchema);
  // dispatch(fetchSongsSuccess(playlist, [result], entities, null, null));
  const comments = json.comments.sort((a, b) => b.timestamp - a.timestamp);

  dispatch(fetchSongCommentsSuccess(id, comments));
  // dispatch(fetchSongs(playlist, USER_SONGS_URL.replace(':id', userId)));
};

const shouldFetchSong = (id, state) => {
  const { entities } = state;
  const { songs } = entities;
  const songExists = id in songs;
  const songHasComments = songExists ? 'comments' in songs[id] : false;

  return !songExists || !songHasComments;
};

const fetchSongIfNeeded = (id, playlist) => (dispatch, getState) => {
  if (shouldFetchSong(id, getState())) {
    dispatch(fetchSong(id, playlist));
  }
};

export default fetchSongIfNeeded;
