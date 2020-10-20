const { validationResult } = require('express-validator');

exports.getCollabs = (req, res, next) => {
  res.status(200).json({
    collabs: [
      {
        _id: '1',
        title: 'Collaborator name',
        content: 'Any content',
        creator: {
          name: 'CreatorOfPost',
        },
        date: new Date()
      }
    ]
  });
}

exports.postCollab = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed, entered data is incorrect',
      errors: errors.array()
    })
  }
  const title = req.body.title;
  const content = req.body.content;
  //Create collab in db
  res.status(201).json({
    message: 'Collab added successfully!',
    collab: {id: new Date().toISOString(), title: title, content: content}
  });
};