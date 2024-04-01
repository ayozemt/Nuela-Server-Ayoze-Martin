const router = require("express").Router();
const subjectController = require("../controllers/subject.controller");

// CREATE
router.post("/", subjectController.create);

// READ all subjects
router.get("/", subjectController.list);

// READ subject by ID
router.get("/:subjectId", subjectController.detail);

// READ subjects by teacher ID
router.get("/teacher/:teacherId", subjectController.listByTeacher);

// UPDATE
router.put("/:subjectId", subjectController.edit);

// DELETE
router.delete("/:subjectId", subjectController.delete);

module.exports = router;
