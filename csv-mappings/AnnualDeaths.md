CSV to Model Mapping
===

MODEL: `AnnualDeaths`
---

> Officer Involved Annual Death Counts

| CSV Header     | Model Name   | Model Field             | Model Type | Required |
|----------------|--------------|-------------------------|------------|:--------:|
| `FE_1-29` `^1` | AnnualDeaths | `is_imputed`            | boolean    | ✓        |
| `XWK_6`        | AnnualDeaths | `year`                  | integer(4) |          |
| `FE_1-29` `^2` | AnnualDeaths | `type`                  | enum       |          |
| `FE_1-29` `^3` | AnnualDeaths | `death_count`           | decimal    |          |
| `FE_1-29` `^4` | AnnualDeaths | `ethnicity`             | enum       |          |
| `FE_1-29` `^5` | AnnualDeaths | `suicides_omitted`      | boolean    |          |
| `SHR_1`        | AnnualDeaths | `justifiable_homicides` | integer    |          |

**FOOTNOTES:**

* `^1` - Columns `FE_1-29` with `_i` in Column Name _( Indicates Record Substitutes Missing Data )_
* `^2` - Types pulled from `FE_1-29` _( Type of Death )_
* `^3` - Number pulled from `FE_1-29` for Specific Death Type
* `^4` - Columns `FE_1-29` with `_b`, `_w`, `_h`, `_a`, `_me`, `_na`, `_ur` in Column Name
  * `_b`: `black`
  * `_w`: `white`
  * `_h`: `hispanic`
  * `_a`: `asian`
  * `_me`: `middle-eastern`
  * `_na`: `native-american`
  * `_ur`: `unspecified`
* `^5` - Columns `FE_1-29` with `_ns` in Column Name _( Suicides Omitted )_
