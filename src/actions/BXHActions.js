import { normalize } from 'normalizr';
import { fetchSongsSuccess } from '../actions/PlaylistActions';
import * as types from '../constants/ActionTypes';
import { songSchema } from '../constants/Schemas';
import { callApi } from '../utils/ApiUtils';


const fetchBXHSuccess = entities => ({
  type: types.FETCH_BXH_SUCCESS,
  entities,
});

const fetchBXH = () => async (dispatch) => {
  let { json } = await callApi(`SELECT getTopBXH(10);`);
  json = json.data.gettopbxh;
  console.log(json);
  // dispatch(fetchBXHSuccess({
  //   albums: {
  //     [id]: json
  //   }
  // }));

  const normSongs = normalize(json.baiHats, [songSchema]);

  dispatch(fetchSongsSuccess(null,normSongs.result, normSongs.entities, null, null));
};

const fetchBXHIfNeeded = (shouldFetchUser) => (dispatch) => {
  if (shouldFetchUser) {
    dispatch(fetchBXH());
  }
};

export default fetchBXHIfNeeded;
