'use strict';
module.exports = (sequelize, DataTypes) => {
  var Banners = sequelize.define('Banners', {
    source: DataTypes.STRING,
    description: DataTypes.STRING,
    topicId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "Topics",
        key: "id",
        as: "topicId",
      }
    }
  }, {});
  Banners.associate = function(models) {
    // associations can be defined here
    Banners.belongsTo(models.Topics, {
      foreignKey: "topicId",
      onDelete: "CASCADE",
    });
  };
  return Banners;
};
