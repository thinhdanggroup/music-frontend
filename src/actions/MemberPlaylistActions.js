import { normalize } from 'normalizr';
import { fetchSongsSuccess } from '../actions/PlaylistActions';
import * as types from '../constants/ActionTypes';
import { songSchema } from '../constants/Schemas';
import { callApi } from '../utils/ApiUtils';


const fetchMemberPlaylistSuccess = entities => ({
  type: types.FETCH_USER_SUCCESS,
  entities,
});

const fetchMemberPlaylist = (id, playlist) => async (dispatch) => {
  const splittedId = id.split('|')
  const email = splittedId[0]
  const playlistName = splittedId[1].replace(/\-/g, ' ')

  // http://localhost:3000/#/member/garen@gmail.com/Nhac-hay-thang-11
  // SELECT getInfoOfAPlaylist(playlistName := 'Nhac hay thang 11', memEmail := 'garen@gmail.com')
  let { json } = await callApi(`SELECT getInfoOfAPlaylist(playlistName := '${playlistName}', memEmail := '${email}')`);
  json = json.data.getinfoofaplaylist

  dispatch(fetchMemberPlaylistSuccess({
    memPlaylists: {
      [id]: json
    }
  }));

  const normSongs = normalize(json.baiHats, [songSchema]);

  dispatch(fetchSongsSuccess(playlist, normSongs.result, normSongs.entities, null, null));
};

const fetchMemberPlaylistIfNeeded = (shouldFetchUser, id, playlist) => (dispatch) => {
  if (shouldFetchUser) {
    dispatch(fetchMemberPlaylist(id, playlist));
  }
};

export default fetchMemberPlaylistIfNeeded;
