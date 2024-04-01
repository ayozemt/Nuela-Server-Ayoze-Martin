const Subject = require("../models/Subject.model");

module.exports.create = async (req, res, next) => {
  try {
    if (
      !req.body ||
      !req.body.name ||
      !req.body.type ||
      !req.body.grade ||
      !req.body.class ||
      !req.body.hours
    ) {
      return res
        .status(400)
        .json({ message: "Bad request: All fields are mandatory" });
    }
    const subject = await Subject.create(req.body);

    // const { _id, name, type, grade, class, hours, group } = subject;
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

    const updatedSubject = await Subject.findByIdAndUpdate(
      subjectId,
      req.body,
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
