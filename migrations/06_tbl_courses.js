// exports.shorthands = college_cources;

exports.up = (pgm) => {
  pgm.createTable('tbl_courses', {
    id: 'id',
    college_id: {
      type: 'id',
      notNull: true,
      onDelete: 'cascade',
      foreignKeys: { table: 'tbl_clg_infos', mapping: 'id' },
    },
    name: {
      type: 'varchar(20)',
      notNull: true,
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    deletedAt: { type: 'timestamp' },
    updated_at: {
      type: 'timestamp',
    },
    updatedAt: {
      type: 'timestamp',
    },
  });
};

exports.down = () => {

};
