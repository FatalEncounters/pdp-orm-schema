'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deaths = sequelize.define(
    'Deaths', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      agency_id: {
        type: DataTypes.UUID(15),
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM,
        values: ['asian-deaths', 'asphyxiated-or-restrained', 'beaten-or-bludgeoned', 'black-deaths', 'burned-or-smoke-inhalation', 'chemical-agent-or-pepper-spray', 'drowned', 'drug-overdose', 'fell-from-height', 'fell-from-height-or-drowned', 'gunshot', 'hispanic-deaths', 'imputed-race', 'intentional-use-of-force', 'justifiable-homicide', 'medical-emergency', 'medical-emergency-or-overdose', 'middle-eastern-deaths', 'native-american-deaths', 'officer-involved', 'other', 'other-or-undetermined', 'stabbed', 'suicide-by-police-deaths', 'suicide-deaths', 'tasered', 'undetermined', 'unknown-race-deaths', 'vehicle', 'white-deaths'],
        allowNull: false,
        defaultValue: 'undetermined',
        comment: 'FE_1-29 & SHR_1 Type of Death'
      },
      ethnicity: {
        type: DataTypes.ENUM,
        values: ['black', 'white', 'hispanic', 'asian', 'middle-eastern', 'native-american', 'unspecified'],
        allowNull: false,
        defaultValue: 'unspecified',
        comment: 'FE_1-29 Ethnicity of Death'
      },
      is_imputed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'FE_1-29 Indicates Record Substitues Missing Data'
      },
      suicides_omitted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'FE_1-29 Indicates Record Subtracted Deaths by Suicide'
      },
      death_count: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        comment: 'FE_1-29 Number of Deaths'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'death',
      plural: 'deaths',
      tableName: 'deaths',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Officer Involved Death Counts'
    }
  );

  return Deaths;
};
