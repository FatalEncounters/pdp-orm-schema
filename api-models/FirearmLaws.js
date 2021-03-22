module.exports = (sequelize, DataTypes) => {
  const FirearmLaws = sequelize.define(
    'FirearmLaws', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      agency_id: {
        type: DataTypes.UUID(15),
        allowNull: false,
      },
      state_firearm: {
        type: DataTypes.STRING(50),
        comment: 'SIE_1 - State, Siegel Firearm',
      },
      state_gun_ownership: {
        type: DataTypes.STRING(50),
        comment: 'SIE_7 - State, Siegel Gun Ownership',
      },
      violent_misdemeanor: {
        type: DataTypes.BOOLEAN,
        comment: 'SIE_2 - Firearm Law-Violent Misdemeanor, Siegel Firearm',
      },
      universal_background_check: {
        type: DataTypes.BOOLEAN,
        comment: 'SIE_3 - Firearm Law-Universal Background Check, Siegel Firearm',
      },
      may_issue: {
        type: DataTypes.BOOLEAN,
        comment: 'SIE_4 - Firearm Law-May Issue, Siegel Firearm',
      },
      count_of_three_laws: {
        type: DataTypes.INTEGER(1),
        comment: 'SIE_5 - Firearm Law-Count of Three Laws, Siegel Firearm',
      },
      count_of_three_laws_weighted: {
        type: DataTypes.FLOAT(4),
        comment: 'SIE_6 - Firearm Law-Weighted Count of Three Laws, Siegel Firearm',
      },
      gun_ownership_proxy_original: {
        type: DataTypes.FLOAT(3),
        comment: 'SIE_8 - Gun Ownership Proxy, Original, Siegel Gun Ownership',
      },
      gun_ownership_proxy_improved: {
        type: DataTypes.FLOAT(3),
        comment: 'SIE_9 - Gun Ownership Proxy, Improved, Siegel Gun Ownership',
      },
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'firearm_law',
      plural: 'firearm_laws',
      tableName: 'firearm_law',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Constructed Contextual Firearm Measures',
    },
  );

  return FirearmLaws;
};
