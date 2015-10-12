# Mapcode Library for JavaScript

Copyright (C) 2014-2015 Stichting Mapcode Foundation (http://www.mapcode.com)

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

# Version History

* 2.2.0

    Solved 1-microdegree gap in a few spots on Earth, noticable now extreme precision is possible;

    Ran source through code prettifier

* 2.1.5

    Added maxErrorInMeters to API;

    Enforce encode(decode(m))=m except near territory borders

    Stricter unit tests;

* 2.1.1

    Added DistanceInMeters to API

* 2.1.0

    Rewrote fraction floating points to integer arithmetic

* 2.0.3

    Minor fix. Added unittest\unittest.html - open to peform
    tests that try to verify that the library works as intended;

* 2.0.1

    Minor fixes.

* 2.0.0 - July 2015

    Fixes to the data rectangles (primarily intended for ISO proposal), see Word document for details.

* 1.54 - June 2015

    Removed unneeded mminfo flags (no effect on functionality).

* 1.50.3 - May 2015

    Redesign of the API to conform to Javascript standards and match the Java implementation of the mapcode system

* 1.50.1 - May 2015

    Bugfix for mapcodes in IN-DD (in India).

* 1.50 - May 2015

    Major release. This version is not backwards compatible with mapcode 1.4x: is has dropped support for
    Antartica AT0-8 codes and has a changed (improved) way of dealing with the Greek alphabet.

    Added 22-chararcter post-processing of all-digit mapcodes for the Greek alphabet.

    Retired legacy aliases EAZ and SKM, AU-QL, AU-TS, AU-NI and AU-JB.

    Retired legacy Antarctica claims AT0 through AT8.

* 1.41 - January 2015

    Added the India state Telangana (IN-TG), until 2014 a region in Adhra Pradesh.

* 1.33 - August 2014

    Normalise results when longitude below -180 degrees.

* 1.32 - August 2014

    Prevent FIJI failing to decode at exactly 180 degrees; prevent invalid filtering near the territory bounding rectangle.

* 1.31 - April 2014

    Make iso2ccode() even more forgiving by allowing a state alias to be recognized in context.

* 1.3 - April 2014

    Disable 7-char state codes for large states in India, and instead generate country mapcodes for states.

* 1.28 - April 2014

    Fix for starpipe "zoning" error, causing the last 2 mapcode characters to be ignored in certain areas.

* 1.27 - April 2014

    Support undefined ranges in data array (useful for partial JavaScript builds).

* 1.26 - May 2013

    Added alias OD for India, and 2.3 code for Daman and Diu.

* 1.25 - May 2013

    Ccode2iso(c,2) support added.

* 1.24 - May 2013

    Public domain release.

