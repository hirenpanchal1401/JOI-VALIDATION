module.exports = (sequelize, Sequelize) => {
  const mcqSets = sequelize.define('tbl_mcq_sets', {
    name: Sequelize.STRING,
    is_active: Sequelize.BOOLEAN,
    difficulty: Sequelize.INTEGER,
  });
  return mcqSets;
};
