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
      query: `SELECT getBaiHatById('${idBaiHat}')`
    }
  }).then(then)
}

export function getInfoForPersonalPage(email, then) {
  axios({
    method: 'post',
    url: `${backendInfo.url}/query-db`,
    data: {
      query: `SELECT getInfoForPersonalPage('${email}')`
    }
  }).then(then)
}

export function getInfoForPlaylistPage(name, email, then) {
  axios({
    method: 'post',
    url: `${backendInfo.url}/query-db`,
    data: {
      query: `SELECT getInfoForPlaylistPage('${name}','${email}')`
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

export function postComment(email, noiDung, idBaiHat, then) {
  axios({
    method: 'post',
    url: `${backendInfo.url}/query-db`,
    data: {
      query: `SELECT postComment('${email}','${noiDung}','${idBaiHat}')`
    }
  }).then(then)
}

export function ratingBH(email, idBaiHat, soSao, then) {
  axios({
    method: 'post',
    url: `${backendInfo.url}/query-db`,
    data: {
      query: `SELECT rateBaiHat('${email}','${idBaiHat}','${soSao}')`
    }
  }).then(then)
}