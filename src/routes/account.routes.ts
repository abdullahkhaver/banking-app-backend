// src/routes/account.routes.ts
router.post("/transfer", auth, async (req, res) => {
  const { toAccountId, amount } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const from = await Account.findOne({ userId: req.userId }).session(session);
    const to = await Account.findById(toAccountId).session(session);

    if (!from || !to || from.balance < amount) {
      throw new Error("Invalid transfer");
    }

    from.balance -= amount;
    to.balance += amount;

    await from.save();
    await to.save();

    await Transaction.create([{
      from: from._id,
      to: to._id,
      amount,
      status: "COMPLETED"
    }], { session });

    await session.commitTransaction();
    res.json({ success: true });
  } catch (e) {
    await session.abortTransaction();
    res.status(400).json({ error: "Transfer failed" });
  } finally {
    session.endSession();
  }
});
