module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: { type:DataTypes.STRING, allowNull: false, validation: { notEmpty: true}},
    devoured:{type: DataTypes.BOOLEAN, defaultValue: false }
  });
  return Burger;
};