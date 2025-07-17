import { model, Schema } from "mongoose";
<<<<<<< HEAD

const appointmentSchema = new Schema(
  {
    pateint: { ref: "Patient", type: Schema.Types.ObjectId, required: true },
    doctor: { ref: "Doctor", type: Schema.Types.ObjectId, required: true },
    type: { type: String, required: true }, // online, offline, emergency,
    status: { type: String }, // upcoming, pending, done, cancelled
    price: { type: Number, required: true }, //
=======
// import autopopulate from "mongoose-autopopulate";

const appointmentSchema = new Schema(
  {
    patient: {
      ref: "Patient",
      type: Schema.Types.ObjectId,
      // autopopulate: { select: "name" },
    },
    doctor: {
      ref: "Doctor",
      type: Schema.Types.ObjectId,
      // autopopulate: { select: "speciality" }, // autopopulate health care provider details
    },
    type: { type: String, required: true }, // online, offline, emergency,
    status: { type: String }, // upcoming, pending, done, cancelled
    price: { type: Number }, //
>>>>>>> origin/shougBE
    date: { type: Date, required: true },
    time: { type: Number, required: true }, // 10:00 AM
    duration: { type: Number, required: true }, // 15min, 30min, 60min
    AItranscript: { ref: "Transcript", type: Schema.Types.ObjectId }, // icebox
    notes: { type: [String] },
  },
  { timestamps: true }
);
<<<<<<< HEAD
=======

// appointmentSchema.plugin(autopopulate);
>>>>>>> origin/shougBE
const Appointment = model("Appointment", appointmentSchema);
export default Appointment;
