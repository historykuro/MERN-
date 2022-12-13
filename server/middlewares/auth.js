import jwt, { decode } from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // const authHeader = req.header("Authorization");
  // const token = authHeader && authHeader.split(" ")[1];

  // if (!token) {
  //   return res
  //     .status(401)
  //     .json({ success: false, message: "Access  token not found" });
  // }
  // try {
  //   const decoded = jwt.verify(token, process.env.ACCESS.TOKEN.SECRET);

  //   req.userId = decoded.userId;
  //   next();
  // } catch (error) {
  //   console.log(error);
  //   return res.status(403).json({ success: false, message: "Invalid Token" });
  // }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default verifyToken;
