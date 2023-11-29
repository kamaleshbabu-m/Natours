const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`./dev-data/data/users.json`));

exports.checkId = (req, res, next, val) => {
  console.log(`val is ${val}`);
  if (req.params.id * 1 > users.length) {
    return res.status(404).json({
      statuscode: 404,
      statustype: `Not found`,
      entity: 'Invalid Id',
    });
  }
  next();
};

exports.getUsers = (req, res) => {
  res.status(200).json({
    'requested on': req.requesttime,
    users: users,
  });
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  const user = { id: newId, ...req.body };
  users.push(user);

  // eslint-disable-next-line no-unused-vars
  fs.writeFile(`./dev-data/data/users.json`, JSON.stringify(users), (err) => {
    res.status(201).json({
      statuscode: 201,
      statustype: `Success`,
      entity: user,
    });
  });
};

exports.getUserbyID = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const user = users.find((user) => user._id === id);

  if (id > users.length || !user) {
    return res.status(404).json({
      statuscode: 404,
      statustype: `Not found`,
      entity: 'Invalid Id',
    });
  }

  res.status(200).json({
    statuscode: 200,
    statustype: `Success`,
    entity: user,
  });
};
