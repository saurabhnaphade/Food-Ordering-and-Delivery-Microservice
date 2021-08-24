function createResult(error, data) {
  const result = {}
  if (error) {
    result['error'] = error
    result['status'] = 'error'
  } else {
    result['status'] = 'success'
    result['data'] = data
  }

  return result
}

function createError(error) {
  const result = {}
  result['error'] = error
  result['status'] = 'error'

  return result
}

function createData(data) {
  const result = {}
  result['data'] = data
  result['status'] = 'success'

  return result
}

module.exports = {
  createResult: createResult,
  createError: createError,
  createData : createData
}
