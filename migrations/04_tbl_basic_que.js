// exports.shorthands = basic_questions;

exports.up = (pgm) => {
  pgm.createTable('tbl_basic_ques', {
    id: 'id',
    question: { type: 'text', notNull: true },
    is_active: { type: 'boolean', notNull: true },
    createdAt: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    deletedAt: { type: 'timestamp' },
    updatedAt: { type: 'timestamp' },
  });
};

exports.down = () => {

};
