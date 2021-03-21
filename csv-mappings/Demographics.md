CSV to Model Mapping
===

MODEL: `Demographics`
---

> Socio-Demographic Measures

| CSV Header | Model Name   | Model Field                          | Model Type  | Required |
|------------|--------------|--------------------------------------|-------------|:--------:|
| `^1`       | Demographics | `is_normalized_place`                | boolean     |          |
| `^2`       | Demographics | `is_place`                           | boolean     |          |
| `^3`       | Demographics | `is_county`                          | boolean     |          |
| `^4`       | Demographics | `is_geo`                             | boolean     |          |
| `CEN_1`    | Demographics | `proportion_white`                   | float(9)    |          |
| `CEN_2`    | Demographics | `proportion_black`                   | float(9)    |          |
| `CEN_3`    | Demographics | `proportion_hispanic`                | float(9)    |          |
| `CEN_4`    | Demographics | `population`                         | integer(11) |          |
| `CEN_5`    | Demographics | `proportion_minor`                   | float(9)    |          |
| `CEN_6`    | Demographics | `proportion_owner_occupied`          | float(9)    |          |
| `CEN_7`    | Demographics | `proportion_foreign_born`            | float(9)    |          |
| `CEN_8`    | Demographics | `proportion_unemployed`              | float(9)    |          |
| `CEN_9`    | Demographics | `proportion_below_poverty`           | float(9)    |          |
| `CEN_10`   | Demographics | `proportion_receiving_welfare`       | float(9)    |          |
| `CEN_11`   | Demographics | `proportion_head_by_women`           | float(9)    |          |
| `CEN_12`   | Demographics | `proportion_less_highschool`         | float(9)    |          |
| `CEN_13`   | Demographics | `proportion_highschool`              | float(9)    |          |
| `CEN_14`   | Demographics | `proportion_some_college`            | float(9)    |          |
| `CEN_15`   | Demographics | `proportion_college`                 | float(9)    |          |
| `CEN_16`   | Demographics | `rank_order_income_segregation`      | float(9)    |          |
| `CEN_17`   | Demographics | `index_dissimilarity_white_black`    | float(9)    |          |
| `CEN_18`   | Demographics | `index_isolation_white_black`        | float(9)    |          |
| `CEN_19`   | Demographics | `index_info_theory_white_black`      | float(9)    |          |
| `CEN_20`   | Demographics | `index_dissimilarity_white_hispanic` | float(9)    |          |
| `CEN_21`   | Demographics | `index_isolation_white_hispanic`     | float(9)    |          |
| `CEN_22`   | Demographics | `index_info_theory_white_hispanic`   | float(9)    |          |
| `CEN_23`   | Demographics | `index_dissimilarity_white_asian`    | float(9)    |          |
| `CEN_24`   | Demographics | `index_isolation_white_asian`        | float(9)    |          |
| `CEN_25`   | Demographics | `index_info_theory_white_asian`      | float(9)    |          |
| `CEN_26`   | Demographics | `geographic_level`                   | boolean     |          |

**FOOTNOTES:**

* `^1` - Columns `CEN_1-26` with `_np` in Column Name _( Normalized Place Indicator )_
* `^2` - Columns `CEN_1-26` with `_p` in Column Name _( Place Indicator )_
* `^3` - Columns `CEN_1-26` with `_c` in Column Name _( County Indicator )_
* `^4` - Columns `CEN_1-26` with `_f` in Column Name _( Lowest Geographic Unit Indicator )_
