import * as types from '../constants/ActionTypes';
import { callApi } from '../utils/ApiUtils';
const fetchSongCommentsSuccess = (id, comments,count) => ({
  type: types.FETCH_SONG_COMMENTS_SUCCESS,
  entities: {
    songs: {
      [id]: { comments },
    },
    countComment: count,
  },
});

const postfetchComments = (email, noiDung, idBaiHat) => async (dispatch) => {
  var data = await callApi(`SELECT postComment('${email}','${noiDung}','${idBaiHat}')`);
  const { json } = await callApi(`SELECT getBaiHatById(idbaihat:='${idBaiHat}')`);
  console.log(json.data.getbaihatbyid.commentCount);
  dispatch(fetchSongCommentsSuccess(idBaiHat, json.data.getbaihatbyid.comments,json.data.getbaihatbyid.commentCount));

  // dispatch(postCommentStatus(json.status));
};
export const postComment = (email, noiDung, idBaiHat) => (dispatch) => {
  console.log(`You comment ${noiDung}`);
  dispatch(postfetchComments(email, noiDung, idBaiHat));
};
