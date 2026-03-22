import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Auth Failed",
      error,
    });
  }
};

export default authMiddleware;