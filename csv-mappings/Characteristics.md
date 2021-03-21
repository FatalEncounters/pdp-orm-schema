CSV to Model Mapping
===

MODEL: `Characteristics`
---

> Police Department Characteristics

| CSV Header      | Model Name      | Model Field                                         | Model Type | Required |
|-----------------|-----------------|-----------------------------------------------------|------------|:--------:|
| `LEM_1-39` `^1` | Characteristics | `is_imputed`                                        | boolean    | ✓        |
| `LEM_1`         | Characteristics | `sworn_full_time_men`                               | integer(6) |          |
| `LEM_2`         | Characteristics | `sworn_full_time_women`                             | integer(6) |          |
| `LEM_3`         | Characteristics | `incentives_education`                              | boolean    |          |
| `LEM_4`         | Characteristics | `incentives_tuition`                                | boolean    |          |
| `LEM_5`         | Characteristics | `training_types`                                    | integer(3) |          |
| `LEM_6`         | Characteristics | `training_types_normalized`                         | integer(3) |          |
| `LEM_7`         | Characteristics | `required_training_hours_all`                       | integer(4) |          |
| `LEM_8`         | Characteristics | `required_training_hours_recruits`                  | integer(4) |          |
| `LEM_9`         | Characteristics | `minimum_education_requirement`                     | integer(1) |          |
| `LEM_10`        | Characteristics | `sworn_full_time_white`                             | integer(6) |          |
| `LEM_11`        | Characteristics | `sworn_full_time_black`                             | integer(6) |          |
| `LEM_12`        | Characteristics | `sworn_full_time_hispanic`                          | integer(6) |          |
| `LEM_13`        | Characteristics | `sworn_full_time_indian`                            | integer(6) |          |
| `LEM_14`        | Characteristics | `sworn_full_time_asian`                             | integer(6) |          |
| `LEM_15`        | Characteristics | `sworn_full_time_hawaiian`                          | integer(6) |          |
| `LEM_16`        | Characteristics | `sworn_full_time_unreported`                        | integer(6) |          |
| `LEM_17`        | Characteristics | `sworn_full_time_other`                             | integer(6) |          |
| `LEM_18`        | Characteristics | `sworn_full_time_total`                             | integer(6) |          |
| `LEM_19`        | Characteristics | `sworn_full_time_white_percent`                     | integer(3) |          |
| `LEM_20`        | Characteristics | `sworn_full_time_black_percent`                     | integer(3) |          |
| `LEM_21`        | Characteristics | `sworn_full_time_hispanic_percent`                  | integer(3) |          |
| `LEM_22`        | Characteristics | `sworn_full_time_indian_percent`                    | integer(3) |          |
| `LEM_23`        | Characteristics | `sworn_full_time_asian_percent`                     | integer(3) |          |
| `LEM_24`        | Characteristics | `sworn_full_time_hawaiian_percent`                  | integer(3) |          |
| `LEM_25`        | Characteristics | `sworn_full_time_other_percent`                     | integer(3) |          |
| `LEM_26`        | Characteristics | `sworn_full_time_unreported_percent`                | integer(3) |          |
| `LEM_27`        | Characteristics | `sworn_full_time_women_percent`                     | integer(3) |          |
| `LEM_28`        | Characteristics | `sworn_full_time_men_percent`                       | integer(3) |          |
| `LEM_29`        | Characteristics | `has_lethal_force_policy`                           | boolean    |          |
| `LEM_30`        | Characteristics | `has_less_than_lethal_force_policy`                 | boolean    |          |
| `LEM_31`        | Characteristics | `has_conduct_appearance_policy`                     | boolean    |          |
| `LEM_32`        | Characteristics | `has_off_duty_employee_policy`                      | boolean    |          |
| `LEM_33`        | Characteristics | `has_off_max_hours_policy`                          | boolean    |          |
| `LEM_34`        | Characteristics | `policy_pursuit`                                    | integer(1) |          |
| `LEM_35`        | Characteristics | `pursuits_must_be_reviewed`                         | boolean    |          |
| `LEM_36`        | Characteristics | `has_domestic_dispute_policy`                       | boolean    |          |
| `LEM_37`        | Characteristics | `has_civilian_board_for_excessive_force_complaints` | boolean    |          |
| `LEM_38`        | Characteristics | `has_independent_investigative_authority_board`     | boolean    |          |
| `LEM_39`        | Characteristics | `non_missing`                                       | integer(1) |          |

**FOOTNOTES:**

* `^1` - Columns `LEM_1-39` with `_i` in Column Name _( Indicates Record Substitutes Missing Data )_
