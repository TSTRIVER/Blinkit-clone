import jwt from "jsonwebtoken";
export const setToken = (new_user,statusCode,res) => {

  const token = jwt.sign({id: new_user._id }, "abcdefghij");
  res.status(statusCode).cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  }).json({
    success:true,
    err:false,
    new_user,
    token
  });
};
