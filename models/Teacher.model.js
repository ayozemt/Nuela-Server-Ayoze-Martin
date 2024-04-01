const { Schema, model } = require("mongoose");

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    telephone: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Teacher = model("Teacher", teacherSchema);

module.exports = Teacher;
