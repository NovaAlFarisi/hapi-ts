export default (statusCode: Number, payload) => {
    return {
      code: statusCode,
      err: isError(statusCode),
      data: payload
    }
  }
  
const isError = (code) => {
    return (code >= 200 && code <= 299) ? false : true
}