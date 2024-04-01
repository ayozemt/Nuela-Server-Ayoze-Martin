const router = require("express").Router();
const teacherController = require("../controllers/teacher.controller");

// CREATE
router.post("/", teacherController.create);

// READ
router.get("/", teacherController.list);

// READ
router.get("/:teacherId", teacherController.detail);

// UPDATE
router.put("/:teacherId", teacherController.edit);

// DELETE
router.delete("/:teacherId", teacherController.delete);

module.exports = router;