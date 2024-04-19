module.exports = function (db, method, query, params) {
    return new Promise((resolve, reject) => {
        db[method](query, params, (err, result) => {
            if (err) {
                reject(err)
            } else {
                console.log(result)
                resolve(result || method == 'get' ? result : {message: 'Успешно'})
            }
        })
    })
}