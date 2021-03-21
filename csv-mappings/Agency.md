CSV to Model Mapping
===

MODEL: `Agency`
---

> Agency Information about Police / Sheriff Department

| CSV Header | Model Name | Model Field          | Model Type  | Required |
|------------|------------|----------------------|-------------|:--------:|
| `XWK_1`    | Agency     | `ori9`               | string(9)   | ✓        |
| `XWK_2`    | Agency     | `ori9_imp`           | boolean     | ✓        |
| `XWK_3`    | Agency     | `ori7`               | string(7)   | ✓        |
| `XWK_4`    | Agency     | `ori7_imp`           | boolean     | ✓        |
| `XWK_5`    | Agency     | `ori_fbi`            | string(9)   |          |
| `XWK_6`    | Agency     | `source_year`        | integer(4)  | ✓        |
| `XWK_7`    | Agency     | `source_name`        | string(50)  |          |
| `XWK_8`    | -- `^1`    | --                   | --          |          |
| `XWK_9`    | -- `^2`    | --                   | --          |          |
| `XWK_10`   | -- `^3`    | --                   | --          |          |
| `XWK_11`   | Agency     | `fips_place_code`    | string(5)   | ✓        |
| `XWK_12`   | Agency     | `fips_state_code`    | string(2)   | ✓        |
| `XWK_13`   | Agency     | `fips_county_code`   | string(3)   | ✓        |
| `XWK_14`   | -- `^4`    | --                   | --          |          |
| `XWK_15`   | Agency     | `agency_name`        | string(50)  | ✓        |
| `XWK_16`   | Agency     | `urban_code`         | integer(7)  | ✓        |
| `XWK_17`   | Agency     | `geo_state_name`     | string(25)  | ✓        |
| `XWK_18`   | Agency     | `geo_county_name`    | string(25)  | ✓        |
| `XWK_19`   | Agency     | `urban_name`         | string(50)  |          |
| `XWK_20`   | Agency     | `is_sub_agency`      | boolean     | ✓        |
| `XWK_21`   | Agency     | `agency_type`        | integer(1)  | ✓        |
| `XWK_22`   | Agency     | `agency_sub_type_1`  | integer(3)  | ✓        |
| `XWK_23`   | Agency     | `agency_sub_type_2`  | integer(3)  | ✓        |
| `XWK_24`   | Agency     | `government_id`      | integer(9)  | ✓        |
| `XWK_25`   | Agency     | `census_name`        | string(50)  | ✓        |
| `XWK_26`   | Agency     | `address_name`       | string(50)  | ✓        |
| `XWK_27`   | Agency     | `address_street_1`   | string(100) | ✓        |
| `XWK_28`   | Agency     | `address_street_2`   | string(100) |          |
| `XWK_29`   | Agency     | `address_city`       | string(50)  | ✓        |
| `XWK_30`   | Agency     | `address_state`      | string(2)   | ✓        |
| `XWK_31`   | Agency     | `address_zip_code`   | string(5)   |          |
| `XWK_32`   | Agency     | `reported_offenses`  | boolean     | ✓        |
| `XWK_33`   | Agency     | `csllea_agency_id`   | integer(8)  |          |
| `XWK_34`   | Agency     | `lemas_files_id`     | integer(15) |          |
| `XWK_35`   | Agency     | `ucr_state_code`     | integer(2)  |          |
| `XWK_36`   | Agency     | `ucr_county_code`    | integer(2)  |          |
| `XWK_37`   | Agency     | `group_number`       | string(4)   |          |
| `XWK_38`   | Agency     | `ucr_population`     | integer(15) |          |
| `XWK_39`   | Agency     | `census_population`  | integer(15) |          |
| `XWK_40`   | Agency     | `leaic_subset_flag`  | boolean     | ✓        |
| `XWK_41`   | Agency     | `comments`           | text        |          |
| `XWK_42`   | Agency     | `geo_latitude`       | decimal     | ✓        |
| `XWK_43`   | Agency     | `geo_longitude`      | decimal     | ✓        |
| `XWK_44`   | Agency     | `district` `^5`      | integer(2)  |          |
| `XWK_45`   | Agency     | `districts` `^5`     | string(10)  |          |
| `XWK_46`   | Agency     | `district_name`      | string(25)  | ✓        |
| `XWK_47`   | Agency     | `source_csllea_2008` | boolean     | ✓        |
| `XWK_48`   | Agency     | `source_ucr_2010`    | boolean     | ✓        |
| `XWK_49`   | Agency     | `source_ucr_2011`    | boolean     | ✓        |
| `XWK_50`   | Agency     | `source_ucr_2012`    | boolean     | ✓        |
| `XWK_51`   | Agency     | `source_ncic_2012`   | boolean     | ✓        |
| `XWK_52`   | Agency     | `source_vendor_2012` | boolean     | ✓        |

NOTE: `--` Columns are not used, either because they are duplicates or can be derived from other columns.

**FOOTNOTES:**

* `^1` - This is an incomplete duplicate of `XWK_15`
* `^2` - This is a numeric duplicate of `XWK_12`
* `^3` - This is a numeric duplicate of `XWK_13`
* `^4` - This can be derived from `XWK_12` & `XWK_13`
* `^5` - There are outstanding questions to Brian on what these columns mean.
