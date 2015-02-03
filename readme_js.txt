Javascript files for mapcode support
=====================================

mapcode.js	- key routines for mapcode support
ndata.js	- data table for mapcode support

sample.html	- sample code to interpret / generate mapcodes
ctrynams.js	- optional js array with the names of territories (in English)


Version History
===============

JANUARI 2015
	1.41 Added the India state Telangana (IN-TG), until 2014 a region in Adhra Pradesh.

AUGUST 2014
	1.33 normalise results when longitude below -180 degrees
	1.32 prevent FIJI failing to decode at exactly 180 degrees; prevent invalid filtering near the territory bounding rectangle

APRIL 2014
	1.31 make iso2ccode() even more forgiving by allowing a state alias to be recognized in context
	1.3  disable 7-char state codes for large states in India, and instead generate country mapcodes for states
	1.28 fix for starpipe "zoning" error, causing the last 2 mapcode characters to be ignored in certain areas
	1.27 support undefined ranges in data_ array (useful for partial JavaScript builds)

MAY 2013
	1.26 added alias OD for India, and 2.3 code for Daman and Diu
	1.25 ccode2iso(c,2) support added
	1.24 public domain release
