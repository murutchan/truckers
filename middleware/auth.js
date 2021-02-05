const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");
  //Check if not a token
  if (!token) {
    return res.status(401).json({
      message: "No token, authorization denied",
    });
  }
  //Verify token
  try {
    jwt.verify(token, config.get("jwtSecret"), (error, decode) => {
      if (error) {
        return res.status(401).json({
          message: "Token is not valid",
        });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with the auth middleware");
    res.status(500).json({
      message: "Server error",
    });
  }
};
