const express = require("express");
const router = express.Router();

const CollectionSection = require("../../models/collection-section.model");
// const Collection = require("../../models/collection.model");
// const CollectionItem = require("../../models/collection-item.model");

router.get('/test', (req, res) => res.json({ msg: "This is the collections route" }))

router.get('/sections', (req, res) => {
  CollectionSection.find()
    .then(collectionSections => {
      res.json(collectionSections);
    })
    .catch(error => res.status(404).json({ error: "Cannot find Sections!"}))
})

// router.post('/sections', (req, res) => {
//   const section = new CollectionSection({
//     title: req.title,
//     imageUrl: req.imageUrl,
//     size: req.size,
//     linkUrl: req.linkUrl
//   })

//   section.save()
//     .then(section => res.json(section))
//     .catch(error => res.send(400).json({ error: 'Cannot save section!'}));
// })

module.exports = router;