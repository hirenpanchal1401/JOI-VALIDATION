// exports.shorthands = colleges;

exports.up = (pgm) => {
  pgm.createTable('tbl_clg_infos', {
    id: 'id',
    name: { type: 'varchar(50)', notNull: true },
    city: { type: 'varchar(30)' },
    state: { type: 'varchar(30)' },
    is_active: { type: 'boolean', notNull: true },
    createdAt: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    deletedAt: { type: 'timestamp' },
    updatedAt: {
      type: 'timestamp',
    },
  });
};

exports.down = () => {

};
