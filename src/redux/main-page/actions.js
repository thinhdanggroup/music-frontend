import axios from 'axios'

// import * as actionTypes from './types'
import * as backendInfo from '../backend-info'

export function pingBackendServer(then) {
  axios({
    method: 'get',
    url: `${backendInfo.url}`,
  }).then(then)
}

export function getBaiHatById(idBaiHat, then) {
  axios({
    method: 'post',
    url: `${backendInfo.url}/query-db`,
    data: {
      query: `SELECT * FROM getBaiHatById('${idBaiHat}')`
    }
  }).then(then)
}

export function getAlbumById(idAlbum, then) {
  axios({
    method: 'post',
    url: `${backendInfo.url}/query-db`,
    data: {
      query: `SELECT getAlbumById('${idAlbum}')`
    }
  }).then(then)
}