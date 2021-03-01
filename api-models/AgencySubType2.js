module.exports = (sequelize, DataTypes) => {
  const AgencySubType2 = sequelize.define(
    'AgencySubType2', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        defaultValue: 888,
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'agency_sub_type_2',
      plural: 'agency_sub_types_2',
      tableName: 'agency_sub_type_2',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'XWK_23 - AGENCY SUB-TYPE 2',
    },
  );

  return AgencySubType2;
};
