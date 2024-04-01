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
    class: {
      type: String,
      enum: ["A", "B", "C", "D"],
      required: [true, "El grupo es necesario"],
    },
    hours: {
      type: Number,
      required: [true, "El número de horas es necesario"],
      min: 0,
    },
    group: {
      type: String,
    },
    // Para esta prueba técnica no se va a utilizar, pero en la vida real supongo que las asignaturas irían referenciadas a un profesor
    // teacher: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Teacher",
    // },
  },
  { timestamps: true }
);

subjectSchema.pre("save", function (next) {
  this.group = `${this.grade} - Grupo ${this.class}`;
  next();
});

const Subject = model("Subject", subjectSchema);

module.exports = Subject;
