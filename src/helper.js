import _ from 'lodash'

/**
 * Parse dates string to UTC format as a number array
 * @param {Array} dates 
 */
export function parseDates(dates) {
  const times = []

  if (dates) {
    dates.forEach(function (element) {
      times.push(Date.parse(element))
    }, this);
  }

  return times
}

/**
 * Pair each element in array1 with each element in array2
 * Example: array1 = [1,2] array2 = [4,3] --> result = [[1,4], [2,3]]
 * @param {Array} array1 
 * @param {Array} array2 
 */
export function pairDataWithDate(array1, array2) {
  if (!array2) return []

  const pairedData = []

  for (var idx = 0; idx < array1.length; idx++) {
    pairedData.push([array2[idx], array1[idx]])
  }

  return pairedData
}

/**
 * Process data, handle missing value
 * @param {Array} data data to be process
 */
export function processData(data) {
  if (!data) return []

  const processedData = []
  var latestNotNullData = 0

  for (var idx = 0; idx < data.length; idx++) {
    processedData.push(parseFloat(data[idx]))

    if (!isNaN(processedData[idx])) {
      latestNotNullData = processedData[idx]
    }
    else {
      processedData[idx] = latestNotNullData
    }
  }

  return processedData
}

/**
 * Average all element in an array, return '--' if catch any error
 * @param {*} data data array to take average
 */
export function getMean(data) {
  try {
    return (_.sum(data) / data.length).toFixed(2)
  }
  catch (err) {
    return '--'
  }
}

export function getVariance(data) {
  try {
    const mean = getMean(data)
    var temp = 0

    data.forEach(function (element) {
      temp += (element - mean) * (element - mean);

    }, this)

    return (temp / (data.length - 1)).toFixed(2)
  }
  catch (err) {
    return '--'
  }
}

export function getMin(data) {
  try {
    return _.min(data).toFixed(2)
  }
  catch (err) {
    return '--'
  }
}

export function getMax(data) {
  try {
    return _.max(data).toFixed(2)
  }
  catch (err) {
    return '--'
  }
}

/**
 * Shuffle data
 * @param {Array} data 
 */
export function shuffle(data) {
  return _.shuffle(data)
}
