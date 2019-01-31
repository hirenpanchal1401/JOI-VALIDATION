// exports.shorthands = problems;

exports.up = (pgm) => {
  pgm.createTable('tbl_prob_defs', {
    id: 'id',
    prob_defination: { type: 'text', notNull: true, unique: true },
    level_difficulty: { type: 'integer', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    deletedAt: {
      type: 'timestamp',
    },
    updatedAt: {
      type: 'timestamp',
    },
    is_active: {
      type: 'boolean',
      notNull: true,
    },
  });
};

exports.down = () => {

};
