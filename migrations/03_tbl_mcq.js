// exports.shorthands = mcqs;

exports.up = (pgm) => {
  pgm.createTable('tbl_mcqs', {
    id: 'id',
    mcq: { type: 'VARCHAR(1000)', notNull: true },
    set_id: {
      type: 'id',
      notNull: true,
      foreignKeys: { table: 'tbl_mcq_sets', mapping: 'id' },
    },
    is_active: { type: 'boolean', notNull: true },
    difficulty: { type: 'integer', notNull: true },
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
  });
};

exports.down = () => {

};
