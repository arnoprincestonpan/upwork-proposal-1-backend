import mongoose from "mongoose"
import {CurrencySchema} from "../models/currencyModel"

const Currency = mongoose.model("Currency", CurrencySchema)

export const addNewCurrency = async (req, res) => {
    let newCurrency = new Currency(req.body)
    await newCurrency.save()
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    res.json(Currency)
}

export const getCurrency = async (req, res) => {
    await Currency.find()
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    res.json(Currency)
}

export const getCurrencyByCode = async(req, res) => {
    await Currency.findOne({code : req.params.code.toUpperCase()}, req.body, { new: true})
    .then(docs => {
        res.json(docs)
    })
    .catch(err => {
        console.error(err)
        res.json({
            errMsg: "Please Enter a proper code."
        })
    })
}

export const updateCurrencyByCode = async(req, res) => {
    await Currency.findOneAndUpdate({ code: req.params.code.toUpperCase()}, req.body, { new: true})
    .then(docs => {
        res.json(docs)
    })
    .catch(err => {
        console.error(err)
        res.json({
            errMsg: "Not found or improper code."
        })
    })
}

export const deleteCurrencyByCode = async(req, res) => {
    await Currency.findOneAndDelete({ code: req.params.code.toUpperCase()}, req.body)
    .then(res =>{
        res.json({
            msg: `${req.params.code.toUpperCase()} deleted.`
        })
    })
    .catch(err => {
        console.error(err)
        res.json({
            errMsg: "Not found or improper code."
        })
    })
}