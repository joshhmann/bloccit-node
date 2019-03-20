const Topics = require("./models").Topics;

module.exports = {
  getAllTopics(callback){
    return Topics.all()

    .then((topics) => {
      callback(null, topics);
    })

    .catch((err) => {
      callback(err);
    })
  },

  getTopics(id, callback){
    return Topics.findById(id)
    .then((topics) => {
      callback(null, topics);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addTopics(newTopics, callback){
    return Topics.create({
      title: newTopics.description
    })
    .then((topics) => {
      callback(null, topics);
    })
    .catch((err) => {
      callback(err);
    })
  },

  deleteTopics(id, callback){
    return Topics.destroy({
      where: {id}
    })
    .then((topics) => {
      callback(null, topics);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
