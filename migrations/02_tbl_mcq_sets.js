// exports.shorthands = mcq_sets;

exports.up = (pgm) => {
  pgm.createTable('tbl_mcq_sets', {
    id: 'id',
    name: { type: 'VARCHAR(20)', notNull: true },
    difficulty: { type: 'INT', notNull: true },
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
