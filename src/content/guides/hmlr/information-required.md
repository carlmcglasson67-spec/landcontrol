---
title: "Contractual Control Information HMLR Requires · LandControl"
description: "Every field HMLR will ask for under Practice guide 84 section 7: parties, identifiers, type of right, period of control, titles, location and UPRN."
h1: "What HMLR will ask for, field by field."
card: "Information required"
eyebrow: "Section 7"
lede: "Section 7 of Practice guide 84 sets out the contractual control information. Most answers in the digital service will be multiple choice, but the data behind them has to be right, and some of it sits with the landowner, not you."
facts: [["Fields","Eleven groups"],["Published","Most of it, from April 2028"],["Not published","Birth details, conveyancer number"],["Part titles","Spatial file"]]
order: 3
updated: "2026-11-06"
sources:
  - ["HM Land Registry: Practice guide 84, section 7","https://www.gov.uk/government/publications/contractual-control-rights-pg-84/practice-guide-84-contractual-control-rights"]
  - ["MHCLG: Contractual control agreements guidance","https://www.gov.uk/government/publications/contractual-control-agreements/contractual-control-agreements"]
faq:
  - ["Do landowners have to give their date of birth?","Where the grantor is an individual, Practice guide 84 asks for their date and place of birth for identification. It is not published. The registrar may accept that providing it is unreasonable in some cases."]
  - ["What is the initial period of control?","The period from the date of the contract to the latest date on which the right can be exercised, disregarding any extensions. Extensions and termination rights are given separately."]
related: ["spatial-data/geojson-shapefile-british-national-grid","hmlr/practice-guide-84","professionals/landowners"]
---

## The fields

| PG 84 | Field | What to give | Published? |
|---|---|---|---|
| 7.1.1 | Parties | Full names. For entities: registration number, issuing authority, country of incorporation. For an individual grantor: date and place of birth | Names and entity details yes; birth details no |
| 7.1.2 | Type of right | Option, conditional contract, pre-emption, or right to direct or request a sale or lease | Yes |
| 7.1.3 | Contract | Date, parties, title or description | — |
| 7.1.4 | Exercise | Date from which it can be exercised, or the conditions. Not needed for pre-emption | — |
| 7.1.5 | Initial period of control | Contract date to latest exercise date, ignoring extensions | Duration yes |
| 7.1.6 | Extensions | Every provision that can extend the initial period | — |
| 7.1.7 | Termination | Either party’s entitlement to terminate | — |
| 7.1.8 | Title numbers | Every affected title, including provisional numbers | — |
| 7.1.9 | Location | Nothing more for whole titles; for part, a spatial file or other method | Location and extent yes |
| 7.1.10 | Address | Physical location, postcode, any UPRN | — |
| 7.1.11 | Sub-surface and airspace | Whether separately held land or airspace is included | — |

The MHCLG guidance says the published dataset will include land location and extent, grantee identity, right type and duration, and grant or exercise date. Dates and places of birth, and conveyancers’ professional registration numbers, are not published. Where a dash appears above, the guidance does not say either way.

## When a right changes or ends

- **Variation:** the nature of the change and its effective date.
- **Assignment:** the new grantee’s details.
- **Ending:** how the right ended (exercise, determination, expiry) and whether wholly or partly, and which part of the land or right has ended.

## The fields that cause trouble

**Individual grantors’ birth details.** Farmers and family landowners may not expect to be asked. Explain early that it is a legal requirement, that it is not published, and that the registrar can accept in some cases that it is unreasonable to provide.

**Entity identifiers for overseas companies.** You need the registration number, the authority that issued it and the country of incorporation.

**The initial period of control.** It is a defined term, not the commercial term. Count from the contract date to the latest exercise date, then list extensions separately.

**Provisional title numbers.** Where land is mid-registration or titles have been split since the deal, use every relevant number.

**Part-title rights.** You need machine-readable spatial data. See [spatial data for HMLR](/spatial-data/geojson-shapefile-british-national-grid/).

Collect all of this with the [readiness checklist](/readiness-checklist/).
