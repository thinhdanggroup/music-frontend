import * as types from '../constants/ActionTypes';
import { callApi } from '../utils/ApiUtils';

const ratingBHSuccess = (id, avgRate) => ({
  type: types.FETCH_SONG_COMMENTS_SUCCESS,
  entities: {
    songs: {
      [id]: { avgRate },
    },
  },
});
const ratingBHrequest = (email, id, rate) => async (dispatch) => {
  let { json } = await callApi(`SELECT rateBaiHat('${email}','${id}','${rate}');`);
  json = json.data.ratebaihat;
  console.log(json);
  // dispatch(RatingBHSuccess(id,rate));
};

const rateSong = (email, id, rate) => (dispatch) => {
  dispatch(ratingBHrequest(email, id, rate));
};
export default rateSong;