// src/models/Account.ts
import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  balance: { type: Number, required: true, min: 0 }
}, { timestamps: true });

export const Account = mongoose.model("Account", AccountSchema);
