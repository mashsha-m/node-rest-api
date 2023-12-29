export function requestTime(req, res, next) {
    req.requestTime = Date.now()
    next()
}
export function sayHi(req, res, next) {
    console.log('Hi!!!~')
    next()
}