// src/models/Transaction.ts
import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  from: mongoose.Types.ObjectId,
  to: mongoose.Types.ObjectId,
  amount: { type: Number, min: 1 },
  status: { type: String, enum: ["PENDING", "COMPLETED", "FAILED"] }
}, { timestamps: true });

export const Transaction = mongoose.model("Transaction", TransactionSchema);
