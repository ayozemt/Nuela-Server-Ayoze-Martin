const { Schema, model } = require("mongoose");

const subjectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Nombre de la asignatura necesario"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["Obligatoria", "Optativa"],
      required: [true, "El tipo de asignatura es necesario"],
    },
    grade: {
      type: String,
      enum: [
        "1 de ESO",
        "2 de ESO",
        "3 de ESO",
        "4 de ESO",
        "1 de Bachillerato",
        "2 de Bachillerato",
      ],
      required: [true, "Curso necesario"],
    },
    group: {
      type: String,
      enum: ["A", "B", "C", "D"],
      required: [true, "El grupo es necesario"],
    },
    hours: {
      type: Number,
      required: [true, "El número de horas es necesario"],
      min: 0,
    },
    espacio: {
      type: String,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
  },
  { timestamps: true }
);

subjectSchema.pre("save", function (next) {
  this.espacio = `${this.grade} - Grupo ${this.group}`;
  next();
});

const Subject = model("Subject", subjectSchema);

module.exports = Subject;
