const jwt = require("jsonwebtoken");

//Alternative authController.protect || Authentication Middleware
exports.authUser = async (req, res, next) => {
  try {
    let tmp = req.header("Authorization");
    const token = tmp ? tmp.slice(7, tmp.length) : "nothing";
    //Bearer JWTTOKEN
    //^^^^^^^ <--- 7 chars in infront doesnt contain JWT thats why we used slice to extract only the JWT token
    if (!token) {
      return res.status(400).json({ message: "Invalid Authentication" });
    }
    console.log(token);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Authentication" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
