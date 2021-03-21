CSV to Model Mapping
===

MODEL: `AnnualOfficerDeaths`
---

> Officers Assaulted and Killed Annual Death Counts

| CSV Header | Model Name          | Model Field                               | Model Type  | Required |
|------------|---------------------|-------------------------------------------|-------------|:--------:|
| `LEO_1`    | AnnualOfficerDeaths | `group_code`                              | string(2)   |          |
| `LEO_2`    | AnnualOfficerDeaths | `total_population`                        | double(9)   |          |
| `LEO_3`    | AnnualOfficerDeaths | `male_officers`                           | double(5)   |          |
| `LEO_4`    | AnnualOfficerDeaths | `female_officers`                         | double(5)   |          |
| `LEO_5`    | AnnualOfficerDeaths | `total_employees`                         | double(5)   |          |
| `LEO_6`    | AnnualOfficerDeaths | `total_officers`                          | integer(3)  |          |
| `LEO_7`    | AnnualOfficerDeaths | `officer_rate_per_10k`                    | integer(3)  |          |
| `LEO_8`    | AnnualOfficerDeaths | `annual_assaults_with_injury`             | float(7)    |          |
| `LEO_9`    | AnnualOfficerDeaths | `annual_assaults_without_injury`          | float(7)    |          |
| `LEO_10`   | AnnualOfficerDeaths | `months_reported_assaults_with_injury`    | double(3)   |          |
| `LEO_11`   | AnnualOfficerDeaths | `months_reported_assaults_without_injury` | double(3)   |          |
| `LEO_12`   | AnnualOfficerDeaths | `annual_officers_killed_felony`           | float(3)    |          |
| `LEO_13`   | AnnualOfficerDeaths | `annual_officers_killed_accident`         | float(3)    |          |
