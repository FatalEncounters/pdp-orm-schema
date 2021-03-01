module.exports = (sequelize, DataTypes) => {
  const Gunshots = sequelize.define(
    'Gunshots', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      agency_id: {
        type: DataTypes.UUID(15),
        allowNull: false,
      },
      ori9: {
        type: DataTypes.STRING(9),
        comment: 'VIC_1 ORI9, Vice',
      },
      agency: {
        type: DataTypes.STRING(100),
        comment: 'VIC_2 Agency, Vice',
      },
      shots_fired: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_3 Total Number of Shots Fired Count, Vice',
      },
      fatal_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_4 Fatal Shootings Count, Vice',
      },
      possible_fatal_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_5 Unknown if Fatal Shootings Count, Vice',
      },
      non_fatal_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_6 Nonfatal Shootings Count, Vice',
      },
      unarmed_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_7 Subject Unarmed Shootings Count, Vice',
      },
      possible_armed_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_8 Unknown if Subject Armed Shootings Count, Vice',
      },
      armed_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_9 Subject Armed Shootings Count, Vice',
      },
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'gunshot',
      plural: 'gunshots',
      tableName: 'gunshots',
      engine: 'InnoDB',
      comment: 'Gunshot Measures',
    },
  );

  return Gunshots;
};
