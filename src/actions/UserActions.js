import { normalize } from 'normalizr';
// import { fetchSongs } from '../actions/PlaylistActions';
import * as types from '../constants/ActionTypes';
import { userSchema } from '../constants/Schemas';
import { callApi } from '../utils/ApiUtils';

// const fetchUserFollowingsSuccess = entities => ({
//   type: types.FETCH_USER_FOLLOWINGS_SUCCESS,
//   entities,
// });

// const fetchUserFollowings = id => async (dispatch) => {
//   const { json } = await callApi();
//   const { collection } = json;
//   const { entities, result } = normalize(collection, [userSchema]);

//   dispatch(fetchUserFollowingsSuccess({
//     users: {
//       ...entities.users,
//       [id]: { followings: result },
//     },
//   }));
// };

const fetchUserProfilesSuccess = (id, profiles) => ({
  type: types.FETCH_USER_PROFILES_SUCCESS,
  entities: {
    users: {
      [id]: { profiles },
    },
  },
});

const fetchUserProfiles = id => async (dispatch) => {
  const { json } = await callApi();
  dispatch(fetchUserProfilesSuccess(id, json.slice(0, 6)));
};

const fetchUserSuccess = entities => ({
  type: types.FETCH_USER_SUCCESS,
  entities,
});

const fetchUser = (id, playlist) => async (dispatch) => {
  const { json } = await callApi(`SELECT getInfoForArtistPage(artistId := ${id})`);
  const { entities } = normalize(json, userSchema);
  dispatch(fetchUserSuccess(entities));

  // dispatch(fetchSongs(playlist, USER_SONGS_URL.replace(':id', id)));
  // dispatch(fetchUserFollowings(id));
  dispatch(fetchUserProfiles(id));
};

const fetchUserIfNeeded = (shouldFetchUser, id, playlist) => (dispatch) => {
  if (shouldFetchUser) {
    dispatch(fetchUser(id, playlist));
  }
};

export default fetchUserIfNeeded;
