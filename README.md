# Mapcode Library for JavaScript

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c86dbf5e7deb493db7ac1a3483dfddfb)](https://www.codacy.com/app/rijnb/mapcode-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mapcode-foundation/mapcode-js&amp;utm_campaign=Badge_Grade)
[![License](http://img.shields.io/badge/license-APACHE2-blue.svg)]()
[![Release](https://img.shields.io/github/release/mapcode-foundation/mapcode-js.svg?maxAge=3600)](https://github.com/mapcode-foundation/mapcode-js/releases)


**Copyright (C) 2014-2017 Stichting Mapcode Foundation (http://www.mapcode.com)**

----

**Online documentation can be found at: http://mapcode-foundation.github.io/mapcode-js/**

If you plan to use mapcodes in HTML/Javascript extensively, you may be interested in
looking at running an instance of a Mapcode REST API server in your applications
landscape.

This reduces the payload the HTML/Javascript tremendously, as the mapcode tables will
not need to be transported to the client.

You can find the Mapcode REST API sources, ready to be deployed on any JVM server,
like Tomcat or Jetty, on: **https://github.com/mapcode-foundation/mapcode-rest-service**

# License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Original C library created by Pieter Geelen. Work on Java version
of the Mapcode library by Rijn Buve and Matthew Lowden.

# Javascript Files for Mapcode Support

The following files provide the Javascript interfaces for mapcodes:

    mapcode.js  - Key routines for mapcode support
    ndata.js    - Data table for mapcode support

    sample.html - Sample code to interpret / generate mapcodes
    ctrynams.js - Optional js array with the names of territories (in English)

To run the Javascript unit tests, simply open the file `unittest/unittest/html`.

# Using the Library

## Converting a Coordinate into a Mapcode

In the mapcode system, territories are limited by rectangles, not by actual or political borders. 
This means that a coordinate will often yield mapcode possibilities in more than one territory. 
Each possibility correctly represents the coordinate, but which one is *politically* correct is a 
choice that must be made (in advance or afterwards) by the caller or user of the routines.

There are several routines to generate the possible mapcodes for a coordinate.
The right one to use depends on the situation. All routines take a latitude and a longitude,
and all routines yield an array of possible mapcodes, with the following structure:

attribute | description 
--- | --- 
fullmapcode | string, full mapcode including full territory alphacode 
mapcode | string, full mapcode excluding territory alphacode 
territoryAlphaCode | string, full territory alphacode 

### The Shortest Mapcode

The most widely used routine to generate mapcodes is probably:

    encodeShortest(lat, lon, territory)

parameter | description 
--- | --- 
lat | latitude in degrees (maximized by routine to 90.0 and minimized to -90.0)
lon | longitude in degrees (all values allowed, wrapped to -180.0 and +180.0)
territory | a territory (an iso code such as “NLD”)
return value | an array of result records (see above)

This routine will yield at most one result: the shortest mapcode (if any) that exists
for that coordinate within the specified territory. Such a mapcode is also 
sometimes called the “default mapcode” for a particular territory.

Example Javascript:

    function displayMapcodes(e) {
      document.write('<u>',e.length,' result(s)</u><br/>');
      for(var i = 0; i < e.length; i++) {
        if (e[i].territoryAlphaCode != "AAA") {
          document.write(e[i].territoryAlphaCode, ' ');
        }
        document.write('<b>', e[i].mapcode, '</b><br/>');
      }
    }
    displayMapcodes(encodeShortest(34.00956, -118.210572, 'US-CA'));

Output:

    1 result(s):
    US-CA XX.XX

To get a mapcode for every territory in which a coordinate can be encoded, use

    encodeShortest(lat, lon)

Since any coordinate is somewhere on the world, this routine is guaranteed to deliver at least one possibility.

Example Javascript:

    var e = encodeShortest(34.00956, -118.210572);

Output using displayMapcodes(e):

    3 result(s)
    US-CA XX.XX
    USA KKYP.19MN
    R59KJ.W5FT

This particular coordinate thus has a California mapcode (`XX.XX`), a national 8-letter mapcode, 
and (like any coordinate) an international 9-letter mapcode (by tradition shown without its 
alphacode “`AAA`”).

### All Possible Mapcodes

Even within a particular territory, there are often several possible mapcodes. 

    encode(lat,lon, territory)

will yield all possible mapcodes (if any) within the specified territory, while

    encode(lat, lon)
    
will simply yield all mapcodes that can represent the coordinate.

Example Javascript:

    var e = encode(36.115, -115.1731, 'US-NV');

Output using `displayMapcodes(e)`:

    5 result(s)
    US-NV CN.NN
    US-NV BX.5KF
    US-NV NJ7.127
    US-NV F978.JY1
    US-NV L70X.6V4G

The results are ordered by length, the first is the shortest (the default). 
The last is usually the “national” encoding, i.e. a format that all coordinates within a 
country share. Of course, the shortest mapcode is preferred in almost every circumstance.

Example Javascript:

    var e = encode(36.115, -115.1731);

Output using `displayMapcodes(e)`:

    9 result(s)
    US-NV CN.NN
    US-NV BX.5KF
    US-NV NJ7.127
    US-NV F978.JY1
    US-NV L70X.6V4G
    US-CA F978.JY1
    US-CA L70X.6V4G
    USA L70X.6V4G
    R5KDM.C8C8

Note that two of these (in `US-CA`) are politically incorrect, since the specified coordinate 
lies within the borders of Nevada and not California. However, they are valid in that the 
mapcodes correctly represent the original coordinate.

### International Mapcodes

For very specific applications, the following routine only returns the international mapcode

    encodeInternational(lat, lon)

returns an array with exactly one result: the 9-letter international mapcode representing 
the coordinate.

### Higher Precision Mapcodes

A mapcode represents a coordinate with a precision of a few meters. To be precise, 
most mapcodes represent the center point of a 10x10 meter area. The coordinate may 
thus be 5 meters off both longitudinally and latitudinal, or 3.6 meters on average. 
This is precise enough for everyday use, but mapcodes can also be generate with higher 
precisions. With one extra letter (after a hyphen), a mapcode represents a 2x2 meter area, 
with two letters, an area of a square foot. The extra letters defeat the purpose of the 
mapcode system (which is to offer short, easy codes for everyday use) but there may be 
cases where the extra letters are appropriate.

For all routines mentioned, there are “`WithPrecision`” variants:

    encodeShortestWithPrecision(lat, lon, territory, precision)
    encodeShortestWithPrecision(lat, lon, precision)
    encodeWithPrecision(lat, lon, territory, precision)
    encodeWithPrecision(lat, lon, precision)
    encodeInternationalWithPrecision(lat, lon, precision)

where precision is an integer specifying how many extra letters must be generated. 
Using the value 0 just yields normal mapcodes.

## Converting a Mapcode into a Coordinate

Given a string with a mapcode (which may or may not include a territory alphacode and may or may not include high-precision letters at the end), the following routines are available to decode them back to a coordinate:

    decode(mapcodeString)

parameter | description |
--- | --- 
mapcodeString | a string containing a mapcode
return value | an object with fields `x` (longitude) and `y` (latitude), or false

This routine is sufficient to decode a full mapcodeString into a coordinate.

Example Javascript:

    var result = decode('NLD 49.4V');
    document.write(result.y + ',' + result.x + '<br/>');

Output:

    52.376514, 4. 908543375
    
However, in daily life you will often have to cope with mapcodes provided by people who 
abbreviate or completely leave out the alphacode of the territory. For example, the 
alphacode `US-AR` may have been abbreviated to `AR`, which within the context of the 
United States of America clearly identifies the state of Arkansas, but could in fact 
just as well represent Arunachal Pradesh, India. Someone in The Netherlands may even 
abbreviate a mapcode to just “`49.4V`”, assuming that the country is obvious.

The following routine provides an argument to “help” decoding such input:

    decode(mapcodeString, contextTerritory)

parameter | description
--- | ---
mapcodeString | a string containing a mapcode
contextTerritory | a string (an ISO code such as “NLD”)
return value | an object with fields `x` (longitude) and `y` (latitude), or false

By passing a context territory, you allow the decode routine to solve any ambiguities.

Example Javascript:

    // Assume the user of the system is Delhi, India
    var defaultcontext = 'IN-DL';
    
    var result;
    result = decode('US-AR 49.4V', defaultcontext); 
    document.write(result.y + ',' + result.x + '<br/>'); 
    result = decode('AR 49.4V', defaultcontext); 
    document.write(result.y + ',' + result.x + '<br/>'); 
    result = decode('49.4V', defaultcontext); 
    document.write(result.y + ',' + result.x + '<br/>'); 
    result = decode('xxx.xxxx', defaultcontext); 
    document.write(result.y + ',' + result.x + '<br/>'); 

Output:
    
    34.77035,-92.3273875
    27.0693605,93.59582
    28.648506,77.183788
    24.423323,92.506517

Thus, the first, complete mapcode (`US-AR 49.4V`) does not require the provided context, 
and simply returns a coordinate in Arkansas. But the second, specifying only `AR`, 
is interpreted as `IN-AR` (without the context, it might just as well have been 
interpreted as Arkansas, USA). The third and fourth examples specify no territory 
whatsoever so could never be interpreted correctly without the aid of the context provided. 
The third, `49.4V`, is simply interpreted within the specified context, `IN-DL`, and yields a 
New Delhi address. The fourth can not be interpreted in the state of Delhi, but can be 
interpreted in India and yields a coordinate in Assam. Note that the input “`49.4V`” 
would not have yielded results if the context had been `IND` (since many states in 
India have mapcode `49.4V`).

## Routines Related to Territories

    getTerritoryFullname(territory)

parameter | description
--- | ---
territory | an string (an ISO code such as “`NLD`”)
return value | string (the full name of the territory)

    isSubdivision(territory)

parameter | description
--- | ---
territory | an string (an ISO code such as “`NLD`”)
return value | true iff territory is a subdivision of a country

    hasSubdivisions(territory)

parameter | description
--- | ---
territory | an string (an ISO code such as “`NLD`”)
return value | true iff territory is a country that has subdivisions

    getTerritoryAlphaCode(territory, format)

parameter | description
--- | ---
territory | string (or internal integer between 0 and `ccode_earth`)
format | 0: leave out country for subdivisions
. | undefined or 1: always return full abbreviation
. | 2: leave out country for subdivisions unless this would make the abbreviation ambigious
return value | territory abbreviation in the specified format, or empty

## Routines Related to Distance

    distanceInMeters(lat1, lon1, lat2, lon2)

parameter | description
--- | ---
lat1, lon1 | a latitude/longitude (in degrees)
lat2, lon2 | another latitude/longitude (in degrees)
return value | distance between the coordinates, in meters

**Note:** estimate, only correct for coordinates that are within a few miles of each other.

    maxErrorInMeters(precision)
    
parameter | description
--- | ---
precision |  the number of “high precision digits” in a mapcode
return value | worst-case distance in meters between the original coordinate and the decode location of the mapcode.

## Routines Related to Unicode and Alphabets

Mapcodes may be specified in other alphabets. These routines takes a mapcode in any 
alphabet and returns its equivalent in the target alphabet. Characters that have no 
roman equivalent in the mapcode system are replaced by question marks. Territories 
(in fact anything before a separating space) are left untouched.

    convertToAlphabet(mapcode, targetAlphabet)
    convertToAlphabetAsHTML(mapcode, targetAlphabet)

parameter | description
--- | ---
mapcode | a string
targetAlphabet | an integer (identifying one of the languages)
return value | a string

Example Javascript:

	document.write(convertToAlphabetAsHTML(‘PQ.RS’, 4) ,’<br/>’)
	document.write(convertToAlphabetAsHTML(‘PQ.RS’, 2) ,’<br/>’)

Output:

    नप.भम
    РФ.ЯЦ

The following alphabets have been approved for official use, 

    0: roman
    2: cyrillic
    4: hindi
    12: gurmukhi

Other values are available but have not yet officially been formally approved:

    1: Greek
    3: Hebrew
    5: Malay
    6: Georgian
    7: Katakana
    8: Thai
    9: Lao
    10: Armenian
    11: Bengali
    13: Tibetan

Please check http://www.mapcode.com to see if there is a more up-to-date version.


# Version History

### 2.4.1 - 2.4.2

* Fixed bug in `getTerritoryAlphaCode` when getting the shortest unambiguous code for `US-CA`,
which is `CA`, not `US-CA`.

### 2.4.0

* Added scripts for Korean (Choson'gul / Hangul), Burmese, Khmer, Sinhalese, Thaana (Maldivan), 
  Chinese (Zhuyin, Bopomofo), Tifinagh (Berber), Tamil, Amharic, Telugu, Odia, Kannada, Gujarati.

* Renamed language strings to more correct terms (Malay to Malayalam; Hindi to Devanagari). 

* Added var `alphabetsForTerritory[t]`, returning the most commonly used alphabets for territory `t`.

* Improved some characters for Arabic and Devanagari.
* 
    Fixed Bengali to also support Assamese.

* For some alphabets, removed recognition of letters `I` and/or `O` unless looking like digits `1` and/or `0`.

* Replaced internal encoded `entity_iso[]` array by non-encoded `iso3166alpha[]`.

### 2.3.1

* Minor fixes to prevent some compiler warnings, or multiple inclusion of `.h` files.

* Minor data fix (`ndata.js`) for Gansu Province, China (where mountain range extending further west).

### 2.3.0

* Arabic script added. 
* Tibetan script changed so all characters can be typed on a computer keyboard without using the SHIFT key.

* Greek, Hebrew and Arabic, the scripts that have (implied) vowels in mapcode sequences, have been extended with 
  ABJAD conversion, to prevent more than two consecutive non-digits from occurring. 
  
* NOTE: as a result, mapcodes in Greek, Arab and Hebrew scripts are now often one character longer than in the roman script.

### 2.2.0

* Solved 1-microdegree gap in a few spots on Earth, noticable now extreme precision is possible;

* Ran source through code prettifier

### 2.1.5

* Added maxErrorInMeters to API;

* Enforce `encode(decode(m)) == m` except near territory borders

* Stricter unit tests;

### 2.1.1

* Added DistanceInMeters to API

### 2.1.0

* Rewrote fraction floating points to integer arithmetic

### 2.0.3

* Minor fix. Added `unittest\unittest.html` - open to peform
  tests that try to verify that the library works as intended;

### 2.0.1

* Minor fixes.

### 2.0.0 - July 2015

* Fixes to the data rectangles (primarily intended for ISO proposal), see Word document for details.

### 1.54 - June 2015

* Removed unneeded mminfo flags (no effect on functionality).

### 1.50.3 - May 2015

* Redesign of the API to conform to Javascript standards and match the Java implementation of the mapcode system

### 1.50.1 - May 2015

* Bugfix for mapcodes in IN-DD (in India).

### 1.50 - May 2015

* Major release. This version is not backwards compatible with mapcode 1.4x: it has dropped support for
    Antartica AT0-8 codes and has a changed (improved) way of dealing with the Greek alphabet.

* Added 22-chararcter post-processing of all-digit mapcodes for the Greek alphabet.

* Retired legacy aliases EAZ and SKM, AU-QL, AU-TS, AU-NI and AU-JB.

* Retired legacy Antarctica claims AT0 through AT8.

### 1.41 - January 2015

* Added the India state Telangana (IN-TG), until 2014 a region in Adhra Pradesh.

### 1.33 - August 2014

* Normalise results when longitude below -180 degrees.

### 1.32 - August 2014

* Prevent FIJI failing to decode at exactly 180 degrees.

* Prevent invalid filtering near the territory bounding rectangle.

### 1.31 - April 2014

* Make `iso2ccode()` even more forgiving by allowing a state alias to be recognized in context.

### 1.3 - April 2014

* Disable 7-char state codes for large states in India, and instead generate country mapcodes for states.

### 1.28 - April 2014

* Fix for starpipe "zoning" error, causing the last 2 mapcode characters to be ignored in certain areas.

### 1.27 - April 2014

* Support undefined ranges in data array (useful for partial JavaScript builds).

### 1.26 - May 2013

* Added alias OD for India, and 2.3 code for Daman and Diu.

### 1.25 - May 2013

* `Ccode2iso(c, 2)` support added.

### 1.24 - May 2013

* Public domain release.

