import * as types from '../constants/ActionTypes';
import { callApi } from '../utils/ApiUtils';
import * as types from '../constants/ActionTypes';
const fetchSongCommentsSuccess = (id, comments) => ({
  type: types.FETCH_SONG_COMMENTS_SUCCESS,
  entities: {
    songs: {
      [id]: { comments },
    },
  },
});

const fetchSongComments = id => async (dispatch) => {
  const { json } = await callApi(`SELECT getBaiHatById(idbaihat:='${id}')`);

  dispatch(fetchSongCommentsSuccess(id, json.data.getbaihatbyid.comments));
};
// const postCommentStatus = (json) => ({
//   type: types.FETCH_SONG_COMMENTS_SUCCESS,
//   json,
// });
const postCommentCC = (email, noiDung, idBaiHat) => async (dispatch) => {
  let { jsons } = await callApi(`SELECT postComment('${email}','${noiDung}','${idBaiHat}')`);
  const { json } = await callApi(`SELECT getBaiHatById(idbaihat:='${idBaiHat}')`);
  dispatch(fetchSongCommentsSuccess(idBaiHat, json.data.getbaihatbyid.comments));

  // dispatch(postCommentStatus(json.status));
};
export const postComment = (email, noiDung, idBaiHat) => (dispatch) => {
  console.log(`You comment ${noiDung}`);
  dispatch(postCommentCC(email, noiDung, idBaiHat));
};
