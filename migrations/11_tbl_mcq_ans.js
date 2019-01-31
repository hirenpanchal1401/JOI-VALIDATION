// exports.shorthands = mcq_answers;

exports.up = (pgm) => {
  pgm.createTable('tbl_mcq_ans', {
    id: 'id',
    question_id: {
      type: 'id',
      notNull: true,
      foreignKeys: { table: 'tbl_mcqs', mapping: 'id' },
    },
    candidate_id: {
      type: 'id',
      notNull: true,
      foreignKeys: { table: 'tbl_candidate_infos', mapping: 'id' },
    },
    attempted_ans_id: {
      type: 'id',
      foreignKeys: { table: 'tbl_mcq_opts', mapping: 'id' },
    },
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
    result: {
      type: 'boolean',
      notNull: true,
    },
  });
};

exports.down = () => {

};
