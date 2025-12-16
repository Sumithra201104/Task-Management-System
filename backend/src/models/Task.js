const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    dueDate: Date,
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending"
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
