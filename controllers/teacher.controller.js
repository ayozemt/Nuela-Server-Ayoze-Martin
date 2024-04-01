const Teacher = require("../models/Teacher.model");

exports.create = async (req, res, next) => {
  try {
    const { name, email, telephone, photo } = req.body;

    if (!name || !email || !telephone || !photo) {
      return res
        .status(400)
        .json({ message: "Bad request: All fields are mandatory" });
    }

    const newTeacher = await Teacher.create({ name, email, telephone, photo });

    return res.status(201).json(newTeacher);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.list = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();

    return res.status(200).json(teachers);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.detail = async (req, res, next) => {
  try {
    const { teacherId } = req.params;

    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json(teacher);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.edit = async (req, res, next) => {
  try {
    const { teacherId } = req.params;
    const { name, email, telephone, photo } = req.body;

    if (!name || !email || !telephone || !photo) {
      return res
        .status(400)
        .json({ message: "Bad request: All fields are mandatory" });
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      { name, email, telephone, photo },
      { new: true }
    );

    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json({ message: "Teacher updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { teacherId } = req.params;

    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);

    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
