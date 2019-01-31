// exports.shorthands = candidates;

exports.up = (pgm) => {
  pgm.createTable('tbl_candidate_infos', {
    id: 'id',
    f_name: { type: 'VARCHAR(20)', notNull: true },
    l_name: { type: 'VARCHAR(20)' },
    email: { type: 'VARCHAR(20)', unique: true },
    DoB: { type: 'DATE', notNull: true },
    enro_no: { type: 'VARCHAR(20)', notNull: true, unique: true },
    clg_id: {
      type: 'id',
      notNull: true,
      foreignKeys: { table: 'tbl_clg_infos', mapping: 'id' },
    },
    course_id: {
      type: 'id',
      notNull: true,
      foreignKeys: { table: 'tbl_courses', mapping: 'id' },
    },
    passing_year: { type: 'INT', notNull: true },
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
