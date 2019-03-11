module.exports = (app, db) => {
  app.get("/post/:id/author", (req, res) =>
    db.post
      .find({
        include: [db.author],
        where: { id: req.params.id }
      })
      .then(result => res.json(result))
  );
};
