---
title: "HMLR Spatial Data: GeoJSON, Shapefile, British National Grid · LandControl"
description: "Part-title contractual control rights need a GeoJSON or Shapefile in British National Grid. How to turn a contract plan into a file HMLR accepts."
h1: "GeoJSON, Shapefile and British National Grid."
card: "Spatial data for part-title rights"
eyebrow: "Formats"
lede: "If a right covers whole titles, the title numbers are enough. If it covers only part of a title, HMLR needs to know which part, and the method it currently accepts is a Shapefile or GeoJSON in British National Grid coordinates. A scanned plan will not do."
facts: [["Whole titles","Title numbers only"],["Part titles","Spatial file"],["Formats","Shapefile, GeoJSON"],["Coordinates","British National Grid"]]
order: 1
updated: "2026-11-06"
sources:
  - ["HM Land Registry: Practice guide 84, section 7.1.9","https://www.gov.uk/government/publications/contractual-control-rights-pg-84/practice-guide-84-contractual-control-rights"]
  - ["HM Land Registry: New reporting rules for contractual control rights","https://www.gov.uk/guidance/hm-land-registry-new-reporting-rules-for-contractual-control-rights"]
faq:
  - ["What spatial data format does HMLR accept for contractual control rights?","Practice guide 84 says the currently accepted formats are Shapefile or GeoJSON using British National Grid coordinates, where a right affects only part of a registered title. HMLR says other methods will be provided where no file is available."]
  - ["Do I need spatial data if the right covers the whole title?","No. Where whole titles are affected, the title numbers are enough and no further location information is needed."]
  - ["Does the spatial file need to show the exact legal boundary?","Practice guide 84 says it does not require the precise legal extent, only which land is affected. No tolerance has been published."]
related: ["hmlr/information-required","hmlr/practice-guide-84","compliance/transitional-period"]
---

## When you need a file

| Right covers | Location information |
|---|---|
| One or more whole registered titles | Title numbers only |
| Part of a registered title | Identify the part: spatial file, or another method HMLR provides |

Practice guide 84 section 7.1.9 sets this out. HMLR’s own note for conveyancers and commentary from practitioners point the same way: machine-readable data, not a scanned PDF plan.

## The formats

**GeoJSON** is a single text file describing shapes as coordinates. Most GIS and mapping tools can export it, and it is easy to email and check.

**Shapefile** is the older GIS standard. It is not one file but a set (at minimum `.shp`, `.shx` and `.dbf`, usually with a `.prj` describing the coordinate system). Send the whole set together, usually zipped.

Either way, the coordinates must be in **British National Grid** (EPSG:27700): eastings and northings in metres, the system Ordnance Survey mapping uses. Many web tools export in latitude and longitude (WGS84, EPSG:4326) by default. That is the most likely mistake, and it is easy to avoid if you check before sending.

## Turning a contract plan into a file

1. **Start from the source drawing.** The surveyor or planning consultant who drew the contract plan almost always has it in CAD or GIS. Ask for the red line as a polygon in BNG.
2. **One polygon per right.** If different rights in the same contract cover different land, keep them as separate features.
3. **Check the coordinate system.** In GeoJSON, BNG coordinates look like six-digit eastings and northings (e.g. `[350000, 520000]`); latitude and longitude look like small decimals. In a Shapefile, the `.prj` file should name British National Grid.
4. **Overlay it on the title plan.** Open the file over the HMLR title plan and an OS base map and make sure it sits on the right land.
5. **Name files by right.** Use the grantor, site and right type in the filename so the conveyancer can match them to submissions.

## How precise it needs to be

Practice guide 84 says HMLR does not require the precise legal extent, only which land is affected, and no tolerance has been published. Aim for the contract plan’s red line as drawn. A file that is roughly right and clearly identifies the land is better than one that arrives a week after the deadline.

## What we are watching

HMLR has promised technical guidance before the service launches on 6 April 2027. When it publishes, we will update this page with any file-size limits, attribute requirements or validation rules. Get the [Contractual Control Alert](/#briefing) to hear the day it lands.
