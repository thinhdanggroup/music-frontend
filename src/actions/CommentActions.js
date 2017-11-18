import { callApi } from '../utils/ApiUtils';

const postCommentStatus = (json) => ({
  type: "COMMENT_USER",
  json,
});
const postCommentCC = (email, noiDung, idBaiHat) => async (dispatch) => {
  let { json } = await callApi(`SELECT postComment('${email}','${noiDung}','${idBaiHat}')`);
  console.log(json.status);
  dispatch(postCommentStatus(json.status));
};
export const postComment = (email, noiDung, idBaiHat) => (dispatch) => {
  console.log(`You comment ${noiDung}`);
  dispatch(postCommentCC(email, noiDung, idBaiHat));
};

// import axios from 'axios'

// const backendInfo = {
//   url: 'http://localhost:4000'
// }
// export function postComment(email, noiDung, idBaiHat, then) {
//   axios({
//     method: 'post',
//     url: `${backendInfo.url}/query-db`,
//     data: {
//       query: `SELECT postComment('${email}','${noiDung}','${idBaiHat}')`
//     }
//   }).then(then)
// }

 