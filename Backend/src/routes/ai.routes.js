const express = require('express');
const { Router } = express;
const aiController = require('../controller/ai.controller');

const router = Router();

router.post("/get-review", aiController.getReview);

module.exports = router;
