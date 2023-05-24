const express = require('express');
const router = express.Router();
const { validateBody } = require('../../middlewares');
const { register, login, logout } = require('../../controllers/authControllers');
const { createUserValidationSchema, loginValidationSchema } = require('../../schemas/authSchema');

router.post('/register', validateBody(createUserValidationSchema), register);

router.post('/login', validateBody(loginValidationSchema), login);

router.post('/logout', logout);

module.exports = router;
