CSV to Model Mapping
===

MODEL: `Agency`
---

The following table represents how we will be importing data from the Police Data Portal CSV file into this specific model.

> NOTE: `--` Columns are not used, either because they are duplicates or can be derived from other columns.

| CSV Column | CSV Header | Model Name | Model Field          | Model Type  | Required |
|------------|------------|------------|----------------------|-------------|:--------:|
| D / 4      | `XWK_1`    | Agency     | `ori9`               | string(9)   | ✓        |
| I / 9      | `XWK_2`    | Agency     | `ori9_imp`           | boolean     | ✓        |
| A / 1      | `XWK_3`    | Agency     | `ori7`               | string(7)   | ✓        |
| J / 10     | `XWK_4`    | Agency     | `ori7_imp`           | boolean     | ✓        |
| E / 5      | `XWK_5`    | Agency     | `ori_fbi`            | string(9)   |          |
| F / 6      | `XWK_6`    | Agency     | `source_year`        | integer(4)  | ✓        |
| G / 7      | `XWK_7`    | Agency     | `source_name`        | string(50)  |          |
| H / 8      | `XWK_8`    | -- `^1`    | --                   | --          |          |
| K / 11     | `XWK_9`    | -- `^2`    | --                   | --          |          |
| L / 12     | `XWK_10`   | -- `^3`    | --                   | --          |          |
| M / 13     | `XWK_11`   | Agency     | `fips_place_code`    | string(5)   | ✓        |
| N / 14     | `XWK_12`   | Agency     | `fips_state_code`    | string(2)   | ✓        |
| O / 15     | `XWK_13`   | Agency     | `fips_county_code`   | string(3)   | ✓        |
| P / 16     | `XWK_14`   | -- `^4`    | --                   | --          |          |
| Q / 17     | `XWK_15`   | Agency     | `agency_name`        | string(50)  | ✓        |
| R / 18     | `XWK_16`   | Agency     | `urban_code`         | integer(7)  | ✓        |
| S / 19     | `XWK_17`   | Agency     | `geo_state_name`     | string(25)  | ✓        |
| T / 20     | `XWK_18`   | Agency     | `geo_county_name`    | string(25)  | ✓        |
| U / 21     | `XWK_19`   | Agency     | `urban_name`         | string(50)  |          |
| V / 22     | `XWK_20`   | Agency     | `is_sub_agency`      | boolean     | ✓        |
| W / 23     | `XWK_21`   | Agency     | `agency_type`        | integer(1)  | ✓        |
| X / 24     | `XWK_22`   | Agency     | `agency_sub_type_1`  | integer(3)  | ✓        |
| Y / 25     | `XWK_23`   | Agency     | `agency_sub_type_2`  | integer(3)  | ✓        |
| Z / 26     | `XWK_24`   | Agency     | `government_id`      | integer(9)  | ✓        |
| AA / 27    | `XWK_25`   | Agency     | `census_name`        | string(50)  | ✓        |
| AB / 28    | `XWK_26`   | Agency     | `address_name`       | string(50)  | ✓        |
| AC / 29    | `XWK_27`   | Agency     | `address_street_1`   | string(100) | ✓        |
| AD / 30    | `XWK_28`   | Agency     | `address_street_2`   | string(100) |          |
| AE / 31    | `XWK_29`   | Agency     | `address_city`       | string(50)  | ✓        |
| AF / 32    | `XWK_30`   | Agency     | `address_state`      | string(2)   | ✓        |
| AG / 33    | `XWK_31`   | Agency     | `address_zip_code`   | string(5)   |          |
| AH / 34    | `XWK_32`   | Agency     | `reported_offenses`  | boolean     | ✓        |
| AI / 35    | `XWK_33`   | Agency     | `csllea_agency_id`   | integer(8)  |          |
| AJ / 36    | `XWK_34`   | Agency     | `lemas_files_id`     | integer(15) |          |
| AK / 37    | `XWK_35`   | Agency     | `ucr_state_code`     | integer(2)  |          |
| AL / 38    | `XWK_36`   | Agency     | `ucr_county_code`    | integer(2)  |          |
| AM / 39    | `XWK_37`   | Agency     | `group_number`       | string(4)   |          |
| AN / 40    | `XWK_38`   | Agency     | `ucr_population`     | integer(15) |          |
| AO / 41    | `XWK_39`   | Agency     | `census_population`  | integer(15) |          |
| AP / 42    | `XWK_40`   | Agency     | `leaic_subset_flag`  | boolean     | ✓        |
| AQ / 43    | `XWK_41`   | Agency     | `comments`           | text        |          |
| AR / 44    | `XWK_42`   | Agency     | `geo_latitude`       | decimal     | ✓        |
| AS / 45    | `XWK_43`   | Agency     | `geo_longitude`      | decimal     | ✓        |
| AT / 46    | `XWK_44`   | Agency     | `district` `^5`      | integer(2)  |          |
| AU / 47    | `XWK_45`   | Agency     | `districts` `^5`     | string(10)  |          |
| AV / 48    | `XWK_46`   | Agency     | `district_name`      | string(25)  | ✓        |
| AW / 49    | `XWK_47`   | Agency     | `source_csllea_2008` | boolean     | ✓        |
| AX / 50    | `XWK_48`   | Agency     | `source_ucr_2010`    | boolean     | ✓        |
| AY / 51    | `XWK_49`   | Agency     | `source_ucr_2011`    | boolean     | ✓        |
| AZ / 52    | `XWK_50`   | Agency     | `source_ucr_2012`    | boolean     | ✓        |
| B1 / 53    | `XWK_51`   | Agency     | `source_ncic_2012`   | boolean     | ✓        |
| B2 / 54    | `XWK_52`   | Agency     | `source_vendor_2012` | boolean     | ✓        |

**FOOTNOTES:**

* `^1` - This is an incomplete duplicate of `XWK_15`
* `^2` - This is a numeric duplicate of `XWK_12`
* `^3` - This is a numeric duplicate of `XWK_13`
* `^4` - This can be derived from `XWK_12` & `XWK_13`
* `^5` - There are outstanding questions to Brian on what these columns mean.
