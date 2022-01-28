const express = require("express");
const router = express.Router();
const { User } = require("../db/models");
const { requireAuth } = require("../auth");
const { asyncHandler } = require("./utils");

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.session.auth.userId);

    res.render("settings", { user, title: "Settings" });
  })
);

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { description, profile_pic_url } = req.body;
    const user = await User.findByPk(req.session.auth.userId);
    await user.update({
      description,
      profile_pic_url,
    });
    res.redirect("/settings");
  })
);

module.exports = router;
