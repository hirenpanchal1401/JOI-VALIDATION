// exports.shorthands = problem_answers;

exports.up = (pgm) => {
  pgm.createTable('tbl_prob_sols', {
    id: 'id',
    prob_solution: { type: 'text' },
    prob_id: {
      type: 'id',
      notNull: true,
      foreignKeys: { table: 'tbl_prob_defs', mapping: 'id' },
    },
    candidate_id: {
      type: 'id',
      notNull: true,
      foreignKeys: { table: 'tbl_candidate_infos', mapping: 'id' },
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
    attempt: {
      type: 'integer',
      notNull: true,
    },
  });
};

exports.down = () => {

};
