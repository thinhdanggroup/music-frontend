// import { callApi } from '../utils/ApiUtils';

// // const postCommentStatus = (email, noiDung, idBaiHat) => ({
// //   email, noiDung, idBaiHat
// // });
// const postCommentStatus = (json) => ({
//   json
//   });
//  const postCommentCC = (email, noiDung, idBaiHat) => async (dispatch) => {

//   let { json } = await callApi(`SELECT postComment('${email}','${noiDung}','${idBaiHat}')`);
//   console.log(json);

//   // const result = id;
//   // const entities = {
//   //   songs: {
//   //     [id]: json
//   //   }
//   // }

//   dispatch(postCommentStatus(json));
//   // dispatch(fetchSongs(playlist, USER_SONGS_URL.replace(':id', userId)));
// };
// export const postComment = (email, noiDung, idBaiHat) => (dispatch) => {
//   alert(1);
//   dispatch(postCommentCC(email, noiDung, idBaiHat));
// };

import axios from 'axios'

const backendInfo = {
  url: 'http://localhost:4000'
}
export function postComment(email, noiDung, idBaiHat, then) {
  axios({
    method: 'post',
    url: `${backendInfo.url}/query-db`,
    data: {
      query: `SELECT postComment('${email}','${noiDung}','${idBaiHat}')`
    }
  }).then(then)
}

const fetchSongCommentsSuccess = (id, comments) => ({
  type: types.FETCH_SONG_COMMENTS_SUCCESS,
  entities: {
    songs: {
      [id]: { comments },
    },
  },
});

export const fetchSongComments = id => async (dispatch) => {
  const { json } = await callApi(`SELECT getBaiHatById(idbaihat:='${id}')`);

  dispatch(fetchSongCommentsSuccess(id, json.data.getbaihatbyid.comments));
};
