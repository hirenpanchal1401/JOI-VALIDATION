// exports.shorthands = basic_question_answers;

exports.up = (pgm) => {
  pgm.createTable('tbl_basic_que_ans', {
    id: 'id',
    basic_que_id: {
      type: 'id',
      foreignKeys: { table: 'tbl_basic_ques', mapping: 'id' },
      notNull: true,
    },
    answer: {
      type: 'text',
      notNull: true,
    },
    candidate_id: {
      type: 'id',
      foreignKeys: { table: 'tbl_candidate_infos', mapping: 'id' },
      notNull: true,
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updatedAt: {
      type: 'timestamp',
    },
    deletedAt: { type: 'timestamp' },
  });
};

exports.down = () => {

};
