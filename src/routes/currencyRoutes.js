import { addNewCurrency,
    getCurrency,
    getCurrencyByCode,
    updateCurrencyByCode
 } from "../controllers/currencyController"

 const routes = (app) => {
    app.route("/currency")
    // middlware
    .get(async(req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request from: ${req.method}`)
        next()
    }, getCurrency)
    .post(addNewCurrency)

    app.route("/currency/:code")
    .get(getCurrencyByCode)
    .put(updateCurrencyByCode)
 }

 export default routes