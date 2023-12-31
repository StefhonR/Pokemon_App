const mongoose = require("mongoose")

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    img: String
  },
  {
    timestamps: true,
  }
)

const Pokemon = mongoose.model("Pokemon", pokemonSchema)

module.exports = Pokemon