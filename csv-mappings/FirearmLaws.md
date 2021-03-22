CSV to Model Mapping
===

MODEL: `FirearmLaws`
---

> Constructed Contextual Firearm Measures

| CSV Header | Model Name  | Model Field                    | Model Type | Required |
|------------|-------------|--------------------------------|------------|:--------:|
| `SIE_1`    | FirearmLaws | `state_firearm`                | string(50) |          |
| `SIE_2`    | FirearmLaws | `violent_misdemeanor`          | boolean    |          |
| `SIE_3`    | FirearmLaws | `universal_background_check`   | boolean    |          |
| `SIE_4`    | FirearmLaws | `may_issue`                    | boolean    |          |
| `SIE_5`    | FirearmLaws | `count_of_three_laws`          | integer(1) |          |
| `SIE_6`    | FirearmLaws | `count_of_three_laws_weighted` | float(3)   |          |
| `SIE_7`    | FirearmLaws | `state_gun_ownership`          | string(50) |          |
| `SIE_8`    | FirearmLaws | `gun_ownership_proxy_original` | float(3)   |          |
| `SIE_9`    | FirearmLaws | `gun_ownership_proxy_improved` | float(3)   |          |
