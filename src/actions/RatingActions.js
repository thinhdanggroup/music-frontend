import * as types from '../constants/ActionTypes';
import { callApi } from '../utils/ApiUtils';

const RatingBHSuccess = (id, avgRate) => ({
  type: types.FETCH_SONG_COMMENTS_SUCCESS,
  entities: {
    songs: {
      [id]: { avgRate },
    },
  },
});
const RatingBHrequest = (email,id, rate) => async (dispatch) => {
  let { json } = await callApi(`SELECT rateBaiHat('${email}','${id}','${rate}');`);
  json = json.data.ratebaihat;
  console.log(json);
  // dispatch(RatingBHSuccess(id,rate));
  // const normSongs = normalize(json.baiHats, [songSchema]);

  // dispatch(fetchSongsSuccess(playlist,normSongs.result, normSongs.entities, null, null));
};

const toggleLike = (email, id, rate) => (dispatch) => {
  dispatch(RatingBHrequest(email,id, rate));
  // rateBaiHat
  // const oauthToken = getOauthToken(getState());
  // const { error } = await callApi(
  //   `${TOGGLE_LIKE_URL.replace(':id', id)}?oauth_token=${oauthToken}`,
  //   { method: liked ? 'PUT' : 'DELETE' },
  // );

  // if (error) {
  //   return dispatch(toggleLikeError(id, !liked));
  // }

  // return dispatch(toggleLikeSuccess(id, liked));
};
export default toggleLike;