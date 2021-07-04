"use strict";

namespace Dht11Model {

  const mongoose: any = require("mongoose");

  const Schema: any = mongoose.Schema;

  const Dht11 = new Schema({
	  temperature: { type: Number },
	  humidity: { type: Number},
    createOn: {type: Date}
  });

  module.exports = mongoose.model("Dht11", Dht11);

}
