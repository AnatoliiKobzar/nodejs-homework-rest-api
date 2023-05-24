const { controllerWrapper } = require('../utils');
const { registerService, loginService } = require('../services/authServices');

const register = controllerWrapper(async (req, res) => {
  const user = await registerService(req.body);
  res.status(201).json({
    user: {
      email: user.email,
      subscription: 'starter',
    },
  });
});

const login = controllerWrapper(async (req, res) => {
  const result = await loginService(req.body);
  res.status(200).json({
    token: result,
    user: {
      email: req.body.email,
      subscription: 'starter',
    },
  });
});

const logout = controllerWrapper(async (req, res) => {});

module.exports = {
  register,
  login,
  logout,
};
