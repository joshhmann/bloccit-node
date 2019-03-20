'use strict';
module.exports = (sequelize, DataTypes) => {
  var Banners = sequelize.define('Banners', {
    source: DataTypes.STRING,
    description: DataTypes.STRING,
    topicsId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "Topics",
        key: "id",
        as: "topicsId",
      }
    }
  }, {});
  Banners.associate = function(models) {
    // associations can be defined here
    Banners.belongsTo(models.Topics, {
      foreignKey: "topicsId",
      onDelete: "CASCADE",
    });
  };
  return Banners;
};
