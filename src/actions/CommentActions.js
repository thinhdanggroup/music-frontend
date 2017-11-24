import * as types from '../constants/ActionTypes';
import { callApi } from '../utils/ApiUtils';

const fetchSongCommentsSuccess = (id, comments, commentCount) => ({
  type: types.FETCH_SONG_COMMENTS_SUCCESS,
  entities: {
    songs: {
      [id]: { comments, commentCount },
    },
  },
});

const fetchSongComments = idBaiHat => async (dispatch) => {
  const { json } = await callApi(`SELECT getCmtByIdBaiHat(idbaihat:='${idBaiHat}')`);

  const comments = json.data.getcmtbyidbaihat
  const commentCount = comments.length

  dispatch(fetchSongCommentsSuccess(idBaiHat, json.data.getcmtbyidbaihat, commentCount));
};

const postfetchComments = (email, noiDung, idBaiHat) => async (dispatch) => {
  var data = await callApi(`SELECT postComment('${email}','${noiDung}','${idBaiHat}')`);

  dispatch(fetchSongComments(idBaiHat))
};

export const postComment = (email, noiDung, idBaiHat) => (dispatch) => {
  dispatch(postfetchComments(email, noiDung, idBaiHat));
};
