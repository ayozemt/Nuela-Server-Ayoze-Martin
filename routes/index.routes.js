const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const subjectRoutes = require("./subject.routes");
router.use("/subject", subjectRoutes);

const teacherRoutes = require("./teacher.routes");
router.use("/teacher", teacherRoutes);

module.exports = router;
