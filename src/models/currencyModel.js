import mongoose from "mongoose"

const Schema = mongoose.Schema

export const CurrencySchema = new Schema({
    flagUrl : {
        type: String
    },
    code : {
        type: String,
        unique: true,
        required: "Enter a country code."
    },
    buy : {
        type: Number,
        required: "Enter a buying price."
    },
    sell : {
        type: Number,
        required: "Enter a selling price."
    },
    author: {
        type: String,
        required: "Please enter an author."
    },
    created_date : {
        type: Date,
        default: Date.now
    }
})