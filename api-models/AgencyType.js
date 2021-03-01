module.exports = (sequelize, DataTypes) => {
  const AgencyType = sequelize.define(
    'AgencyType', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        defaultValue: 0,
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'agency_type',
      plural: 'agency_types',
      tableName: 'agency_type',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'XWK_21 - AGENCY TYPE',
    },
  );

  return AgencyType;
};
