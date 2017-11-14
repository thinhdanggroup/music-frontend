import axios from 'axios'

import * as actionTypes from './types'
import * as backendInfo from '../backend-info'

export function pingBackendServer() {
  const request = axios({
    method: 'get',
    url: `${backendInfo.url}`,
  })

  return {
    type: actionTypes.PING_BACKEND_SERVER,
    payload: request
  }
}

export function loadWeather(numLatestMeasurement) {
  const request = axios({
    method: 'get',
    url: `${backendInfo.url}/information`,
    params: {
      numData: numLatestMeasurement
    },
  })

  return {
    type: actionTypes.LOAD_WEATHER,
    payload: request
  }
}

export function loadRealTimeWeather(nodeName) {
  const request = axios({
    method: 'get',
    url: `${backendInfo.url}/information-real-time`,
    params: {
      nodeName: nodeName
    },
  })

  return {
    type: actionTypes.LOAD_REAL_TIME_WEATHER,
    payload: request
  }
}

export function loadForecastWeather(cityId) {
  const request = axios({
    method: 'get',
    url: `${backendInfo.url}/information-forecast`,
    params: {
      cityId: cityId
    },
  })

  return {
    type: actionTypes.LOAD_FORECAST,
    payload: request
  }
}