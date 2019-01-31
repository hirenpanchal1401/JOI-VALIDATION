// exports.shorthands = mcq_options;

exports.up = (pgm) => {
  pgm.createTable('tbl_mcq_opts', {
    id: 'id',
    question_id: {
      type: 'id',
      foreignKeys: { table: 'tbl_mcqs', mapping: 'id' },
    },
    is_true: { type: 'boolean', notNull: true },
    is_active: { type: 'boolean', notNull: true },
    option: { type: 'varchar', notNull: true },
    createdAt: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    deletedAt: { type: 'timestamp' },
    updatedAt: {
      type: 'timestamp',
    },
  });
};

exports.down = () => {

};
