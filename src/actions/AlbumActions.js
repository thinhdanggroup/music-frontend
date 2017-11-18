import { normalize } from 'normalizr';
import { fetchSongsSuccess } from '../actions/PlaylistActions';
import * as types from '../constants/ActionTypes';
import { songSchema } from '../constants/Schemas';
import { callApi } from '../utils/ApiUtils';


const fetchAlbumSuccess = entities => ({
  type: types.FETCH_USER_SUCCESS,
  entities,
});

const fetchAlbum = (id, playlist) => async (dispatch) => {
  let { json } = await callApi(`SELECT getAlbumById(artistId := '${id}')`);
  json = json.data.getalbumbyid

  dispatch(fetchAlbumSuccess({
    musicians: {
      [id]: json
    }
  }));

  const normSongs = normalize(json.artistSongs, [songSchema]);

  dispatch(fetchSongsSuccess(playlist, normSongs.result, normSongs.entities, null, null));
};

const fetchAlbumIfNeeded = (shouldFetchUser, id, playlist) => (dispatch) => {
  if (shouldFetchUser) {
    dispatch(fetchAlbum(id, playlist));
  }
};

export default fetchAlbumIfNeeded;