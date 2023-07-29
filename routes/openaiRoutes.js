const express = require("express");
const {
  summaryController,
  ParagraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openaiController");

const router = express.Router();

//routes
router.post("/summary", summaryController);
router.post("/paragraph", ParagraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

module.exports = router;

//we weill import this file in server.js file
