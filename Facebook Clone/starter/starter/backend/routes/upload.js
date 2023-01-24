const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
} = require("../controllers/user");
const { uploadImages, listImages } = require("../controllers/upload");
const { authUser } = require("../middlewares/auth");
const imageUpload = require("../middlewares/imageUpload");

const router = express.Router();

router.post("/uploadImages", authUser, imageUpload, uploadImages);
router.post("/listImages", authUser, listImages);
module.exports = router;
