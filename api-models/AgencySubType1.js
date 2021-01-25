'use strict';
module.exports = (sequelize, DataTypes) => {
  const AgencySubType1 = sequelize.define(
    'AgencySubType1', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        defaultValue: 1
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'agency_sub_type_1',
      plural: 'agency_sub_types_1',
      tableName: 'agency_sub_type_1',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'XWK_22 - AGENCY SUB-TYPE 1'
    }
  );

  return AgencySubType1;
};
