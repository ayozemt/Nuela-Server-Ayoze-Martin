const Subject = require("../models/Subject.model");

module.exports.create = async (req, res, next) => {
  try {
    const { name, type, grade, group, hours } = req.body;
    const { teacherId } = req.params;

    if (!name || !type || !grade || !group || !hours || !teacherId) {
      return res
        .status(400)
        .json({ message: "Bad request: All fields are mandatory" });
    }
    const subject = await Subject.create({
      name,
      type,
      grade,
      group,
      hours,
      teacher: teacherId,
    });

    return res.status(201).json(subject);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.list = async (req, res, next) => {
  try {
    const subjects = await Subject.find();

    return res.status(200).json(subjects);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.listByTeacher = async (req, res, next) => {
  try {
    const { teacherId } = req.params;

    const subjects = await Subject.find({ teacher: teacherId });

    if (!subjects) {
      return res
        .status(404)
        .json({ message: "No subjects found for this teacher" });
    }

    return res.status(200).json(subjects);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.detail = async (req, res, next) => {
  try {
    const { subjectId } = req.params;

    const subject = await Subject.findById(subjectId);

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    return res.status(200).json(subject);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.edit = async (req, res, next) => {
  try {
    const { subjectId } = req.params;
    const { name, type, grade, group, hours, espacio } = req.body;

    if (!name || !type || !grade || !group || !hours || !espacio) {
      return res
        .status(400)
        .json({ message: "Bad request: All fields are mandatory" });
    }

    const updatedSubject = await Subject.findByIdAndUpdate(
      subjectId,
      { name, type, grade, group, hours, espacio },
      { new: true }
    );

    if (!updatedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    return res.status(200).json({ message: "Subject updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const { subjectId } = req.params;

    const deletedSubject = await Subject.findByIdAndDelete(subjectId);

    if (!deletedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    return res.status(200).json({ message: "Subject deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
