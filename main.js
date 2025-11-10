"use strict";
var transformers_1 = require("@huggingface/transformers");
var classifier = await (0, transformers_1.pipeline)("sentiment-analysis");
console.log("Loading model...");
var result = await classifier("Who are you?");
console.log("Loaded model!");
console.log(result[0]);
