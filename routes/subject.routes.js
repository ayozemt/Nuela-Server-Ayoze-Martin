const router = require("express").Router();
const subjectController = require("../controllers/subject.controller");

// CREATE
router.post("/", subjectController.create);

// READ
router.get("/", subjectController.list);

// READ
router.get("/:subjectId", subjectController.detail);

// UPDATE
router.put("/:subjectId", subjectController.edit);

// DELETE
router.delete("/:subjectId", subjectController.delete);

module.exports = router;
