import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const StatSchema = new Schema({
  guildCount: {
    type: Number,
    required: true,
  },
  userCount: {
    type: Number,
    required: false,
  },
});

const Stats = models.Stats || model("Stats", StatSchema);

export default Stats;
