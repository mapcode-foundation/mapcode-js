/*
 * Copyright (C) 2014-2015 Stichting Mapcode Foundation (http://www.mapcode.com)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var entity_iso = [
    'VAT', 'MCO', 'GIB', 'TKL', 'CCK', 'BLM', 'NRU', 'TUV', 'MAC', 'SXM', 
    'MAF', 'NFK', 'PCN', 'BVT', 'BMU', 'IOT', 'SMR', 'GGY', 'AIA', 'MSR', 
    'JEY', 'CXR', 'WLF', 'VGB', 'LIE', 'ABW', 'MHL', 'ASM', 'COK', 'SPM', 
    'NIU', 'KNA', 'CYM', 'BES', 'MDV', 'SHN', 'MLT', 'GRD', 'VIR', 'MYT', 
    'SJM', 'VCT', 'HMD', 'BRB', 'ATG', 'CUW', 'SYC', 'PLW', 'MNP', 'AND', 
    'GUM', 'IMN', 'LCA', 'FSM', 'SGP', 'TON', 'DMA', 'BHR', 'KIR', 'TCA', 
    'STP', 'HKG', 'MTQ', 'FRO', 'GLP', 'COM', 'MUS', 'REU', 'LUX', 'WSM', 
    'SGS', 'PYF', 'CPV', 'TTO', 'BRN', 'ATF', 'PRI', 'CYP', 'LBN', 'JAM', 
    'GMB', 'QAT', 'FLK', 'VUT', 'MNE', 'BHS', 'TLS', 'SWZ', 'KWT', 'FJI', 
    'NCL', 'SVN', 'ISR', 'PSE', 'SLV', 'BLZ', 'DJI', 'MKD', 'RWA', 'HTI', 
    'BDI', 'GNQ', 'ALB', 'SLB', 'ARM', 'LSO', 'BEL', 'MDA', 'GNB', 'TWN', 
    'BTN', 'CHE', 'NLD', 'DNK', 'EST', 'DOM', 'SVK', 'CRI', 'BIH', 'HRV', 
    'TGO', 'LVA', 'LTU', 'LKA', 'GEO', 'IRL', 'SLE', 'PAN', 'CZE', 'GUF', 
    'ARE', 'AUT', 'AZE', 'SRB', 'JOR', 'PRT', 'HUN', 'KOR', 'ISL', 'GTM', 
    'CUB', 'BGR', 'LBR', 'HND', 'BEN', 'ERI', 'MWI', 'PRK', 'NIC', 'GRC', 
    'TJK', 'BGD', 'NPL', 'TUN', 'SUR', 'URY', 'KHM', 'SYR', 'SEN', 'KGZ', 
    'BLR', 'GUY', 'LAO', 'ROU', 'GHA', 'UGA', 'GBR', 'GIN', 'ECU', 'ESH', 
    'GAB', 'NZL', 'BFA', 'PHL', 'ITA', 'OMN', 'POL', 'CIV', 'NOR', 'MYS', 
    'VNM', 'FIN', 'COG', 'DEU', 'JPN', 'ZWE', 'PRY', 'IRQ', 'MAR', 'UZB', 
    'SWE', 'PNG', 'CMR', 'TKM', 'ESP', 'THA', 'YEM', 'FRA', 'ALA', 'KEN', 
    'BWA', 'MDG', 'UKR', 'SSD', 'CAF', 'SOM', 'AFG', 'MMR', 'ZMB', 'CHL', 
    'TUR', 'PAK', 'MOZ', 'NAM', 'VEN', 'NGA', 'TZA', 'EGY', 'MRT', 'BOL', 
    'ETH', 'COL', 'ZAF', 'MLI', 'AGO', 'NER', 'TCD', 'PER', 'MNG', 'IRN', 
    'LBY', 'SDN', 'IDN', 'DIF', 'TLA', 'MOR', 'AGU', '5CL', 'QUE', 'HID', 
    '5MX', 'TAB', 'NAY', 'GUA', 'PUE', 'YUC', 'ROO', 'SIN', 'CAM', 'MIC', 
    'SLP', 'GRO', 'NLE', 'BCN', 'VER', 'CHP', 'BCS', 'ZAC', 'JAL', 'TAM', 
    'OAX', 'DUR', 'COA', 'SON', 'CHH', 'GRL', 'SAU', 'COD', 'DZA', 'KAZ', 
    'ARG', '2DD', '2DN', '2CH', '2AN', '2LD', '2DL', '2ML', '2NL', '2MN', 
    '2TR', '2MZ', '2SK', '2PB', '2HR', '2AR', '2AS', '2BR', '2UT', '2GA', 
    '2KL', '2TN', '2HP', '2JK', '2CT', '2JH', '2KA', '2RJ', '2OR', '2GJ', 
    '2WB', '2MP', '2TG', '2AP', '2MH', '2UP', '2PY', 'NSW', 'ACT', 'JBT', 
    '4NT', '4SA', 'TAS', 'VIC', '4WA', 'QLD', '6DF', '6SE', '6AL', '6RJ', 
    '6ES', '6RN', '6PB', '6SC', '6PE', '6AP', '6CE', '6AC', '6PR', '6RR', 
    '6RO', '6SP', '6PI', '6TO', '6RS', '6MA', '6GO', '6MS', '6BA', '6MG', 
    '6MT', '6PA', '6AM', '1DC', '1RI', '1DE', '1CT', '1NJ', '1NH', '1VT', 
    '1MA', '1HI', '1MD', '1WV', '1SC', '1ME', '1IN', '1KY', '1TN', '1VA', 
    '1OH', '1PA', '1MS', '1LA', '1AL', '1AR', '1NC', '1NY', '1IA', '1IL', 
    '1GA', '1WI', '1FL', '1MO', '1OK', '1ND', '1WA', '1SD', '1NE', '1KS', 
    '1ID', '1UT', '1MN', '1MI', '1WY', '1OR', '1CO', '1NV', '1AZ', '1NM', 
    '1MT', '1CA', '1TX', '1AK', '3BC', '3AB', '3ON', '3QC', '3SK', '3MB', 
    '3NL', '3NB', '3NS', '3PE', '3YT', '3NT', '3NU', 'IND', 'AUS', 'BRA', 
    'USA', 'MEX', 'MOW', 'SPE', 'KGD', '7IN', '7AD', '7SE', '7KB', '7KC', 
    '7CE', '7CU', 'IVA', 'LIP', 'ORL', 'TUL', '7BE', 'VLA', 'KRS', 'KLU', 
    '7TT', 'BRY', 'YAR', 'RYA', 'AST', 'MOS', 'SMO', '7DA', 'VOR', 'NGR', 
    'PSK', 'KOS', 'STA', 'KDA', '7KL', 'TVE', 'LEN', 'ROS', 'VGG', 'VLG', 
    'MUR', '7KR', 'NEN', '7KO', 'ARK', '7MO', 'NIZ', 'PNZ', '7KI', '7ME', 
    'ORE', 'ULY', '7PM', '7BA', '7UD', '7TA', 'SAM', 'SAR', 'YAN', '7KM', 
    'SVE', 'TYU', 'KGN', '7CH', '7BU', 'ZAB', 'IRK', 'NVS', 'TOM', 'OMS', 
    '7KK', 'KEM', '7AL', 'ALT', '7TY', 'KYA', 'MAG', 'CHU', 'KAM', 'SAK', 
    '7PO', 'YEV', 'KHA', 'AMU', '7SA', 'CAN', 'RUS', '8SH', '8TJ', '8BJ', 
    '8HI', '8NX', '8CQ', '8ZJ', '8JS', '8FJ', '8AH', '8LN', '8SD', '8SX', 
    '8JX', '8HA', '8GZ', '8GD', '8HB', '8JL', '8HE', '8SN', '8NM', '8HL', 
    '8HN', '8GX', '8SC', '8YN', '8XZ', '8GS', '8QH', '8XJ', 'CHN', 'UMI', 
    'CPT', 'ATA', 'AAA', '?'];


var aliases = "2UK=2UT,2CG=2CT,1GU=GUM,1UM=UMI,1VI=VIR,1PR=PRI,1AS=ASM,1MP=MNP,4CX=CXR,4CC=CCK,4NF=NFK,4HM=HMD,COL=5CL,5ME=5MX,MEX=5MX,5TM=TAM,5AG=AGU,5BC=BCN,5BS=BCS,5CM=CAM,5CS=CHP,5CH=CHH,5CO=COA,5DF=DIF,5DG=DUR,5GT=GUA,5GR=GRO,5HG=HID,5JA=JAL,5MI=MIC,5MO=MOR,5NA=NAY,5NL=NLE,5OA=OAX,5PB=PUE,5QE=QUE,5QR=ROO,5SL=SLP,5SI=SIN,5SO=SON,5TB=TAB,5TL=TLA,5VE=VER,5YU=YUC,5ZA=ZAC,811=8BJ,812=8TJ,813=8HE,814=8SX,815=8NM,821=8LN,822=8JL,823=8HL,831=8SH,832=8JS,833=8ZJ,834=8AH,835=8FJ,836=8JX,837=8SD,841=8HA,842=8HB,843=8HN,844=8GD,845=8GX,846=8HI,850=8CQ,851=8SC,852=8GZ,853=8YN,854=8XZ,861=8SN,862=8GS,863=8QH,864=8NX,865=8XJ,871=TWN,891=HKG,892=MAC,8TW=TWN,8HK=HKG,8MC=MAC,BEL=7BE,KIR=7KI,PRI=7PO,CHE=7CH,KHM=7KM,PER=7PM,TAM=7TT,0US=USA,0AU=AUS,0RU=RUS,0CN=CHN,TAA=SHN,ASC=SHN,DGA=IOT,WAK=MHL,JTN=UMI,MID=1HI,2OD=2OR,";

var dependency = [
	27, 410, 50, 410, 26, 410, 53, 410, 48, 410, 47, 410, 76, 410, 529, 410, 38, 410, 
    21, 408, 4, 408, 42, 408, 11, 408, 
    61, 528, 8, 528, 109, 528, 
    63, 113, 265, 113, 
    198, 181, 
    530, 197, 129, 197, 71, 197, 75, 197, 64, 197, 62, 197, 90, 197, 67, 197, 29, 197, 5, 197, 10, 197, 22, 197, 
    18, 166, 14, 166, 15, 166, 23, 166, 32, 166, 82, 166, 2, 166, 17, 166, 51, 166, 20, 166, 19, 166, 12, 166, 35, 166, 70, 166, 59, 166, 
    18, 166, 14, 166, 15, 166, 23, 166, 32, 166, 82, 166, 2, 166, 17, 166, 51, 166, 20, 166, 19, 166, 12, 166, 35, 166, 70, 166, 59, 166, 
    25, 112, 33, 112, 45, 112, 9, 112, 
    28, 171, 30, 171, 3, 171, 
    18, 166, 14, 166, 15, 166, 23, 166, 32, 166, 82, 166, 2, 166, 17, 166, 51, 166, 20, 166, 19, 166, 12, 166, 35, 166, 70, 166, 59, 166, 
    13, 178, 40, 178, 
    18, 166, 14, 166, 15, 166, 23, 166, 32, 166, 82, 166, 2, 166, 17, 166, 51, 166, 20, 166, 19, 166, 12, 166, 35, 166, 70, 166, 59, 166, 
    77, 210, 
    18, 166, 14, 166, 15, 166, 23, 166, 32, 166, 82, 166, 2, 166, 17, 166, 51, 166, 20, 166, 19, 166, 12, 166, 35, 166, 70, 166, 59, 166, 
    27, 410, 50, 410, 26, 410, 53, 410, 48, 410, 47, 410, 76, 410, 529, 410, 38, 410, 
    27, 410, 50, 410, 26, 410, 53, 410, 48, 410, 47, 410, 76, 410, 529, 410, 38, 410, 
    -1];

var usa_from = 343;
var usa_upto = 393;
var ccode_usa = 410;
var ind_from = 271;
var ind_upto = 306;
var ccode_ind = 407;
var can_from = 394;
var can_upto = 406;
var ccode_can = 495;
var aus_from = 307;
var aus_upto = 315;
var ccode_aus = 408;
var mex_from = 233;
var mex_upto = 264;
var ccode_mex = 411;
var bra_from = 316;
var bra_upto = 342;
var ccode_bra = 409;
var chn_from = 497;
var chn_upto = 527;
var ccode_chn = 528;
var rus_from = 412;
var rus_upto = 494;
var ccode_rus = 496;
var ccode_ata = 531;
var ccode_earth = 532;

var parents3 = "USA,IND,CAN,AUS,MEX,BRA,RUS,CHN,";
var parents2 = "US,IN,CA,AU,MX,BR,RU,CN,";


var ccode_start = 112; // NLD
var mapcode_cversion = "2.0.0";

// *************************** mapcode_org *********************

var mapcode_javaversion = '2.0.0/C' + mapcode_cversion;

/// PRIVATE returns string without leading spaces and plus-signs, and trailing spaces
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

/// PRIVATE return 2-letter parent country abbreviation (disam in range 1..8)
function parentname2(disam) {
    return parents2.substr(disam * 3 - 3, 2);
}

/// PRIVATE given a parent country abbreviation, return disam (in range 1-8) or negative if error
function parentletter(territoryAlphaCode) {
    var p = -1;
    var srch = String(territoryAlphaCode).toUpperCase() + ',';
    var len = srch.length;
    if (len == 3) p = parents2.indexOf(srch); else if (len == 4) p = parents3.indexOf(srch);
    if (p < 0)
        return -2;
    return 1 + (p / len);
}

/// PRIVATE given an ISO abbreviation, set disambiguation for future calls to iso2ccode(); returns nonzero in case of error
var disambiguate = 1; // GLOBAL
function set_disambiguate(territoryAlphaCode) {
    var p = parentletter(territoryAlphaCode);
    if (p < 0)
        return -2;
    disambiguate = p;
    return 0;
}

/// PRIVATE returns alias of ISO abbreviation (if any), or return empty
function alias2iso(territoryAlphaCode) {
    var rx;
    if (territoryAlphaCode.length == 2) rx = '[0-9]' + territoryAlphaCode; else rx = territoryAlphaCode;
    rx = new RegExp(rx + '=', '');
    var p = aliases.search(rx);
    if (p >= 0)
        return aliases.substring(p + 4, p + 7);
    return '';
}

/// PRIVATE given ISO code, return territoryNumber (or negative if error)
function iso2ccode(territoryAlphaCode) {
    if (territoryAlphaCode=="" || typeof territoryAlphaCode=="undefined")
      return undefined;
    if (!isNaN(territoryAlphaCode)) 
      return territoryAlphaCode;
    territoryAlphaCode = trim(String(territoryAlphaCode)).toUpperCase();

    var sep = territoryAlphaCode.lastIndexOf('-');
    if (sep < 0) sep = territoryAlphaCode.lastIndexOf(' ');
    if (sep >= 0) {

        var prefix = territoryAlphaCode.substring(0, sep);
        territoryAlphaCode = trim(territoryAlphaCode.substring(sep + 1));

        if (territoryAlphaCode.length != 2 && territoryAlphaCode.length != 3)
            return -1;
        if (set_disambiguate(prefix))
            return -2;

        // FIRST see if the territoryAlphaCode is in this disambiguation
        if (territoryAlphaCode.length == 2) {
            return iso2ccode(disambiguate + '' + territoryAlphaCode);
        }
        else if (territoryAlphaCode.length == 3) {
            var isoa = alias2iso(territoryAlphaCode);
            if (isoa) {
                if (isoa.charAt(0) == disambiguate) {
                    territoryAlphaCode = isoa;
                }
            }
        }
    }

    if (territoryAlphaCode.length != 2 && territoryAlphaCode.length != 3)
        return -1;

    {
        var testiso = (territoryAlphaCode.length == 2 ? disambiguate + '' + territoryAlphaCode : territoryAlphaCode);
        var i;
        for (i = 0; i < entity_iso.length; i++) if (testiso == entity_iso[i]) return i;

        // 1.31 improvement: recognise alias in current context
        if (territoryAlphaCode.length == 2 && testiso.length == 3) {
            var aliasiso = alias2iso(testiso);
            if (aliasiso)
                return iso2ccode(aliasiso);
        }

        // look for any iso2 match
        if (territoryAlphaCode.length == 2) {
            for (i = 0; i < entity_iso.length; i++)
                if (entity_iso[i].charCodeAt(0) <= 57 && territoryAlphaCode == entity_iso[i].substring(1, 3))
                    return i;
        }

        territoryAlphaCode = alias2iso(territoryAlphaCode);
        if (territoryAlphaCode)
            return iso2ccode(territoryAlphaCode);
    }

    return -1;
}

/// PUBLIC given an alphacode (such as US-AL), returns the territory number (or negative).
/// A contextTerritoryNumber helps to interpret ambiguous (abbreviated) AlphaCodes, such as "AL"
function getTerritoryNumber( territoryAlphaCode, contextTerritoryNumber ) {
    if (contextTerritoryNumber)
      set_disambiguate(entity_iso[contextTerritoryNumber]);
    return iso2ccode(territoryAlphaCode);
}

/// PUBLIC return full name of territory
function getTerritoryFullname(territory) {
    var territoryNumber = getTerritoryNumber(territory);
    if (territoryNumber==undefined || territoryNumber<0 || territoryNumber>ccode_earth)
        return undefined;
    var idx = isofullname[territoryNumber].indexOf(' (');
    if (idx > 0)
      return isofullname[territoryNumber].substr(0, idx);
    return isofullname[territoryNumber];
}

/// PUBLIC return parent country of territoryNumber (negative if territoryNumber is not a state)
function getParentOf(territory) {
    var territoryNumber = getTerritoryNumber(territory);
    if (territoryNumber >= usa_from && territoryNumber <= usa_upto) return ccode_usa;
    if (territoryNumber >= ind_from && territoryNumber <= ind_upto) return ccode_ind;
    if (territoryNumber >= can_from && territoryNumber <= can_upto) return ccode_can;
    if (territoryNumber >= aus_from && territoryNumber <= aus_upto) return ccode_aus;
    if (territoryNumber >= mex_from && territoryNumber <= mex_upto) return ccode_mex;
    if (territoryNumber >= bra_from && territoryNumber <= bra_upto) return ccode_bra;
    if (territoryNumber >= rus_from && territoryNumber <= rus_upto) return ccode_rus;
    if (territoryNumber >= chn_from && territoryNumber <= chn_upto) return ccode_chn;
    return -199;
}

/// PUBLIC returns true iff territoryNumber is a state
function isSubdivision(territory) {
    return getParentOf(territory) >= 0;
}

/// PUBLIC returns true iff territoryNumber is a country that has states
function hasSubdivision(territory) {
    var territoryNumber = getTerritoryNumber(territory);
    return (territoryNumber == ccode_usa || territoryNumber == ccode_ind || territoryNumber == ccode_can || territoryNumber == ccode_aus || territoryNumber == ccode_mex || territoryNumber == ccode_bra || territoryNumber == ccode_chn || territoryNumber == ccode_rus);
}

/// PRIVATE returns true iff x in range (all values in millionths)
function isInRangeX(x, minx, maxx) {
    if (minx <= x && x < maxx) return true;
    if (x < minx) x += 360000000; else x -= 360000000; // 1.32 fix FIJI edge case
    if (minx <= x && x < maxx) return true;
    return false;
}

/// PRIVATE returns true iff coordinate inside rectangle (all values in millionths)
function fitsInside( y, x, minx, maxx, miny, maxy )
{
    return ( miny <= y && y < maxy && isInRangeX(x, minx, maxx) );
}

/// PRIVATE returns true iff coordinate inside rectangle with some room to spare (all values in millionths)
function fitsInsideWithRoom( coord, minx, maxx, miny, maxy )
{
    if ( (( miny - 45) > coord.y) || (coord.y >= (maxy + 45)) )
        return false;
    var xroom = xDivider4(miny, maxy)/4;
    return isInRangeX(coord.x, minx - xroom, maxx + xroom);
}


/// PUBLIC return the AlphaCode (usually an ISO 3166 code) of a territory
/// format: 0=local (often ambiguous), 1=international (full and unambiguous, DEFAULT), 2=shortest (shortest non-ambiguous abbreviation)
function getTerritoryAlphaCode(territoryNumber, format) {
    if (format == undefined) 
        format=1;
    if (territoryNumber >= 0 && territoryNumber <= ccode_earth) {
        var n = entity_iso[territoryNumber];
        if (/^[0-9]/.test(n)) n = n.substring(1);
        if (format) {
            var parent = getParentOf(territoryNumber);
            if (parent >= 0) {
                if (format == 2) {
                    // see if n occurs multiple times, if not, don't bother with parent
                    var count = 0;
                    var i = aliases.indexOf(n + '=');
                    if (i >= 0) count = 2; else if (n.length == 2) {
                        for (i = 0; i < entity_iso.length; i++) {
                            if (entity_iso[i].substr(1) == n)
                                if (entity_iso[i].charAt(0) >= '0') if (entity_iso[i].charAt(0) <= '9') {
                                    count++;
                                    if (count > 1) break;
                                }
                        }
                    } else {
                        for (i = 0; i < entity_iso.length; i++)
                            if (entity_iso[i] == n) {
                                count++;
                                if (count > 1) break;
                            }
                    }
                    if (count == 1) return n;
                }
                return parentname2(parentletter(entity_iso[parent])) + '-' + n;
            }
        }
        return n;
    }
}

/// PRIVATE low-level routines for data access
var minx, miny, maxx, maxy; // GLOBAL
function dataFirstRecord(territoryNumber) {
    return data_start[territoryNumber];
}
function dataLastRecord(territoryNumber) {
    return data_start[++territoryNumber] - 1;
}
function minmaxSetup(i) {
    miny = data_miny[i];
    var d = data_maxy[i];
    if (d < 10) {
        var shortmaxy = [0, 122309, 27539, 27449, 149759, 2681190, 60119, 62099, 491040, 86489];
        d = shortmaxy[d];
    }
    maxy = miny + d;
    minx = data_minx[i];
    maxx = minx + data_maxx[i];
}

/// DEPRECATED return a territoryNumber which could PROBABLY encode coordinate (y,x) in degrees; optional preferredTerritoryNumber is returned if possible; returns "international" if all else fails;
function find_bestiso(y, x, preferredTerritoryNumber) {
    var ox = Math.round(x * 1000000);
    var oy = Math.round(y * 1000000);
    // see if inside preferredTerritoryNumber?
    if (preferredTerritoryNumber && preferredTerritoryNumber >= 0 && preferredTerritoryNumber <= ccode_earth) {
        minmaxSetup(dataLastRecord(preferredTerritoryNumber)); // get encompassing rectangle
        if (fitsInside(oy, ox, minx, maxx, miny, maxy))
            return preferredTerritoryNumber;
    }    
    // find first fit
    var i;
    for (i = 0; i < ccode_earth; i++) {
        minmaxSetup(dataLastRecord(i)); // get encompassing rectangle
        if (fitsInside(oy, ox, minx, maxx, miny, maxy))
            return i;
    }
    // assume earth
    return ccode_earth;
}

/// low-level tables for mapcode encoding and decoding
var xdivider19 = [
    360, 360, 360, 360, 360, 360, 361, 361, 361, 361,    //  5.2429 degrees
    362, 362, 362, 363, 363, 363, 364, 364, 365, 366,    // 10.4858 degrees
    366, 367, 367, 368, 369, 370, 370, 371, 372, 373,    // 15.7286 degrees
    374, 375, 376, 377, 378, 379, 380, 382, 383, 384,    // 20.9715 degrees
    386, 387, 388, 390, 391, 393, 394, 396, 398, 399,    // 26.2144 degrees
    401, 403, 405, 407, 409, 411, 413, 415, 417, 420,    // 31.4573 degrees
    422, 424, 427, 429, 432, 435, 437, 440, 443, 446,    // 36.7002 degrees
    449, 452, 455, 459, 462, 465, 469, 473, 476, 480,    // 41.9430 degrees
    484, 488, 492, 496, 501, 505, 510, 515, 520, 525,    // 47.1859 degrees
    530, 535, 540, 546, 552, 558, 564, 570, 577, 583,    // 52.4288 degrees
    590, 598, 605, 612, 620, 628, 637, 645, 654, 664,    // 57.6717 degrees
    673, 683, 693, 704, 715, 726, 738, 751, 763, 777,    // 62.9146 degrees
    791, 805, 820, 836, 852, 869, 887, 906, 925, 946,    // 68.1574 degrees
    968, 990, 1014, 1039, 1066, 1094, 1123, 1154, 1187, 1223,    // 73.4003 degrees
    1260, 1300, 1343, 1389, 1438, 1490, 1547, 1609, 1676, 1749,    // 78.6432 degrees
    1828, 1916, 2012, 2118, 2237, 2370, 2521, 2691, 2887, 3114,    // 83.8861 degrees
    3380, 3696, 4077, 4547, 5139, 5910, 6952, 8443, 10747, 14784,    // 89.1290 degrees
    23681, 59485];

var nc = [1, 31, 961, 29791, 923521, 28629151, 887503681];
var xside = [0, 5, 31, 168, 961, 168 * 31, 29791, 165869, 923521, 5141947, 28629151];
var yside = [0, 6, 31, 176, 961, 176 * 31, 29791, 165869, 923521, 5141947, 28629151];

var decodeChar = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1,
    -1, -2, 10, 11, 12, -3, 13, 14, 15, 1, 16, 17, 18, 19, 20, 0,
    21, 22, 23, 24, 25, -4, 26, 27, 28, 29, 30, -1, -1, -1, -1, -1,
    -1, -2, 10, 11, 12, -3, 13, 14, 15, 1, 16, 17, 18, 19, 20, 0,
    21, 22, 23, 24, 25, -4, 26, 27, 28, 29, 30, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

var encodeChar = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'E', 'U'];

/// PRIVATE given a minimum and maximum latitude, returns a relative stretch factor (in 360th) for the longitude
function xDivider4(miny, maxy) {
    if (miny >= 0)
        return xdivider19[(miny) >> 19];
    if (maxy >= 0)
        return xdivider19[0];
    return xdivider19[(-maxy) >> 19];
}

/// PRIVATE lowest level encode/decode routines

function decodeBase31(str) {
    var value = 0;
    var i;
    for (i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c == 46) // dot!
            return value;
        if (decodeChar[c] < 0)
            return NaN;
        value = value * 31 + decodeChar[c];
    }
    return value;
}


function decodeTriple(result) {
    var triplex, tripley;
    var c1 = decodeChar[result.charCodeAt(0)];
    var x = decodeBase31(result.substr(1));
    if (c1 < 24) {
        triplex = (c1 % 6) * 28 + Math.floor(x / 34);
        tripley = Math.floor(c1 / 6) * 34 + Math.floor(x % 34);
    }
    else {
        tripley = (x % 40) + 136;
        triplex = Math.floor(x / 40) + 24 * (c1 - 24);
    }
    return {y: tripley, x: triplex}
}

function decodeSixWide(v, width, height) {
    var D = 6;
    var col = Math.floor(v / (height * 6));
    var maxcol = Math.floor((width - 4) / 6);
    if (col >= maxcol) {
        col = maxcol;
        D = width - maxcol * 6;
    }
    var w = v - (col * height * 6 );
    var x6 = col * 6 + (w % D);
    var y6 = height - 1 - Math.floor(w / D);
    return {y: y6, x: x6}
}

function encodeSixWide(x, y, width, height) {
    var D = 6;
    var col = Math.floor(x / 6);
    var maxcol = Math.floor((width - 4) / 6);
    if (col >= maxcol) {
        col = maxcol;
        D = width - maxcol * 6;
    }
    return (height * 6 * col) + (height - 1 - y) * D + (x - col * 6);
}

var getDebugInfo;    // caller must set this to 1 to get debug info about first successful encode
var mcInfo;
/*
    type: 1=topdown nameless, 2=sixwide nameless, 3=regulargrid 4=irregular grid 5=rounded groups 6=unrounded groups
    rectangles:
        rectEncompassing : encompassing rectangle of country or subdivision
        rectArea         : area of the encoding record
        rectSubarea      : subArea (as determined by prefix)
        rectZone         : subArea zone (only exists for huge regular grids, e.g. Antarctica)
        rectRegion       : region in Subarea
        rectCell         : cell for the mapcode (usually 10x10 meters)
        rectCell1        : precision 1 cell (usually 2x2 meters)
        rectCell2        : precision 2 cell (usually 33x33 cm)
    other debug information:
        form = alphanumeric description of mapcode form
        dotPosition = position to insert dot in mapcode
        prefixDivx,prefixDivy = how prefix divides the area (if any)
*/

function asDegreeRect(minx,miny,dx,dy) { return {minx:minx/1000000,miny:miny/1000000,maxx:(minx+dx)/1000000,maxy:(miny+dy)/1000000}; }

/// high-precision extension routines
function maxMapcodePrecision() { return 8; }
var use_high_precision = 0; // nr of letters of high-precision postfix (if any) // GLOBAL
var extrapostfix = ''; // GLOBAL
var fraclat=0,fraclon=0;
function encodeExtension(result, extrax4, extray, dividerx4, dividery,extraDigits,ydirection) {
  if (!extraDigits) 
    return result;
  if (extraDigits > maxMapcodePrecision())
    extraDigits = maxMapcodePrecision();
  var encx = (extrax4+4*fraclon) / (dividerx4);
  var ency = (extray +  fraclat*ydirection) / (dividery );
  extrapostfix='';    
  while (extraDigits-->0) {
    encx*=30;
    var gx=Math.floor(encx); 
    if (gx<0) gx=0; else if (gx>29) gx=29;      
    ency*=30; 
    var gy=Math.floor(ency); 
    if (gy<0) gy=0; else if (gy>29) gy=29;
    var column1=Math.floor(gx/6);
    var column2=(gx%6);
    var row1=Math.floor(gy/5);
    var row2=(gy%5);
    // add postfix:
    extrapostfix += encodeChar[ row1*5+column1 ];
    if (extraDigits-->0)
      extrapostfix += encodeChar[ row2*6+column2 ];
    encx-=gx;
    ency-=gy;
  } // while
  return result + '-' + extrapostfix;
}

function decodeExtension(y, x, dividerx4, dividery, ydirection, orginput)
{
  var extrax, extray;
  var dividerx=dividerx4 / 4;
  var processor=1.0;
  extrax=0;
  extray=0;
  var idx = 0;
  while (idx < extrapostfix.length) {
    var column1,row1,column2,row2;
    var halfcolumn=0;
    var c1 = decodeChar[extrapostfix.charCodeAt(idx++)];
    if (c1<0) c1=0; else if (c1>29) c1=29;
    row1 = Math.floor(c1/5); column1 = (c1%5);
    if (idx < extrapostfix.length) {
      var c2 = decodeChar[extrapostfix.charCodeAt(idx++)];
      if (c2<0) c2=0; else if (c2>29) c2=29;
      row2 =Math.floor(c2/6); column2 = (c2%6);
    } else { //
      row2 = 2; 
      halfcolumn = 0.5;
      column2 = 3;
    } //
    processor *= 30;
    extrax += ((column1*6 + column2 ))/processor;
    extray += ((row1*5 + row2 - halfcolumn))/processor;    
  } //
  extrax += (0.5/processor);
  extray += (0.5/processor);  
  extrax *= dividerx;
  extray *= dividery;
  extrax = x + extrax;
  extray = y + extray*ydirection;
  return {y: extray, x: extrax}
}

function decodeGrid(result, minx, miny, maxx, maxy, headerletter, territoryNumber, m) // for a well-formed result, and integer variables // returns millionths
{
    var relx, rely;
    var orgresult = result;
    var prefixlength = result.indexOf('.');
    var postfixlength = result.length - 1 - prefixlength;
    if (prefixlength == 1 && postfixlength == 4) {
        prefixlength++;
        postfixlength--;
        result = result.charAt(0) + result.charAt(2) + '.' + result.substring(3);
    }

    divy = smartdiv(m);
    if (divy == 1) {
        divx = xside[prefixlength];
        divy = yside[prefixlength];
    } else divx = Math.floor(nc[prefixlength] / divy);

    if (prefixlength == 4 && divx == xside[4] && divy == yside[4]) {
        result = result.charAt(0) + result.charAt(2) + result.charAt(1) + result.substr(3);
    }

    var d;
    var v = decodeBase31(result);

    if (divx != divy && prefixlength > 2) // D==6
    {
        d = decodeSixWide(v, divx, divy);
        relx = d.x;
        rely = d.y;
    }
    else {
        relx = Math.floor(v / divy);
        rely = v % divy;
        rely = divy - 1 - rely;
    }

    var ygridsize = Math.floor((maxy - miny + divy - 1) / divy);
    var xgridsize = Math.floor((maxx - minx + divx - 1) / divx);

    rely = miny + (rely * ygridsize);
    relx = minx + (relx * xgridsize);

    var dividery = Math.floor(( (((ygridsize)) + yside[postfixlength] - 1) / yside[postfixlength] ));
    var dividerx = Math.floor(( (((xgridsize)) + xside[postfixlength] - 1) / xside[postfixlength] ));

    var rest = result.substr(prefixlength + 1);

    // decoderelative (postfix vs rely,relx)
    var difx;
    var dify;
    if (postfixlength == 3) {
        d = decodeTriple(rest);
        difx = d.x;
        dify = d.y;
    }
    else {
        if (postfixlength == 4)
            rest = rest.charAt(0) + rest.charAt(2) + rest.charAt(1) + rest.charAt(3);
        v = decodeBase31(rest);
        difx = Math.floor(v / yside[postfixlength]);
        dify = Math.floor(v % yside[postfixlength]);
    }

    dify = yside[postfixlength] - 1 - dify;

    var cornery = rely + (dify * dividery);
    var cornerx = relx + (difx * dividerx);
    return decodeExtension(cornery, cornerx, dividerx << 2, dividery, 1, headerletter + result)
}


function encodeBase31(value, nrchars) {
    var result = '';
    while (nrchars-- > 0) {
        result = encodeChar[value % 31] + result;
        value = Math.floor(value / 31);
    }
    return result;
}

function encodeTriple(difx, dify, dividerx, dividery) {
    if (dify < 4 * 34)
    {
        var rx=Math.floor(difx / 28);
        var ry=Math.floor(dify / 34);
        var cx=(difx % 28);
        var cy=(dify % 34);
        if (getDebugInfo) mcInfo.rectRegion=asDegreeRect( (1000000*mcInfo.rectSubarea.minx)+((28 * rx * dividerx)), (1000000*(mcInfo.rectSubarea.maxy))-(((34*ry)+34) * dividery),28*dividerx,34*dividery);
        return encodeChar[(rx + 6 * ry)] + encodeBase31(cx * 34 + cy, 2);
    }
    else
    {
        var rx=Math.floor(difx / 24);
        var cx=(difx % 24);
        if (getDebugInfo) mcInfo.rectRegion=asDegreeRect( (1000000*mcInfo.rectSubarea.minx)+(24 * rx * dividerx) , 1000000*mcInfo.rectSubarea.miny, 24*dividerx, 40*dividery );
        return encodeChar[rx + 24] + encodeBase31(cx * 40 + (dify - 136), 2);
    }
}


function encodeGrid(m, y, x, codex, minx, miny, maxx, maxy, headerletter, territoryNumber) {
    var orgcodex = codex;
    if (codex == 14) codex = 23;
    var prefixlength = Math.floor(codex / 10);
    var postfixlength = (codex % 10);

    divy = smartdiv(m);
    if (divy == 1) {
        divx = xside[prefixlength];
        divy = yside[prefixlength];
        if (getDebugInfo) mcInfo={type:3,regular:true,form:(prefixlength==2 ? 'rr' : 'rrrr')};
    }
    else {
        divx = Math.floor(nc[prefixlength] / divy);
        if (getDebugInfo) mcInfo={type:4,regular:false,form:(prefixlength==2 ? 'ss' : prefixlength==3 ? 'sss' : 'ssss')};
        
    }

    if (getDebugInfo) {
        mcInfo.dotPosition = (headerletter ? prefixlength+1 : prefixlength);
        if (headerletter) mcInfo.form = 'h' + mcInfo.form;
        mcInfo.headerletter = headerletter;
        mcInfo.prefixDivx = divx;
        mcInfo.prefixDivy = divy;
    }

    var ygridsize = Math.floor((maxy - miny + divy - 1) / divy);
    var rely = y - miny;
    rely = Math.floor(rely / ygridsize);
    var xgridsize = Math.floor((maxx - minx + divx - 1) / divx);

    var relx = x - minx;
    if (relx < 0) {
        x += 360000000;
        relx += 360000000;
    } else if (relx >= 360000000) {
        x -= 360000000;
        relx -= 360000000;
    } // 1.32 fix FIJI edge case
    if (relx < 0)
        return NaN;
    relx = Math.floor(relx / xgridsize);
    if (relx >= divx)
        return NaN;

    var v;
    if (divx != divy && codex > 24) // D==6
    {
        v = encodeSixWide(relx, rely, divx, divy);
    }
    else {
        v = relx * divy + (divy - 1 - rely);
    }
    result = encodeBase31(v, prefixlength);


    if (prefixlength == 4 && divx == 961 && divy == 961) {
        result = result.charAt(0) + result.charAt(2) + result.charAt(1) + result.charAt(3);        
    }

    if (getDebugInfo && prefixlength == 4 && divx == 961 && divy == 961) 
       mcInfo.rectZone=asDegreeRect( minx + 31 * xgridsize * Math.floor(relx/31), miny + 31 * ygridsize * Math.floor(rely/31), xgridsize * 31, ygridsize * 31 );

    rely = miny + (rely * ygridsize);
    relx = minx + (relx * xgridsize);

    var dividery = Math.floor((((ygridsize)) + yside[postfixlength] - 1) / yside[postfixlength]);
    var dividerx = Math.floor((((xgridsize)) + xside[postfixlength] - 1) / xside[postfixlength]);

    result += '.';

    // encoderelative

    var difx = x - relx;
    var dify = y - rely;
    var extrax = difx % dividerx;
    var extray = dify % dividery;
    difx = Math.floor(difx / dividerx);
    dify = Math.floor(dify / dividery);
    dify = yside[postfixlength] - 1 - dify;

    if (getDebugInfo) {
        mcInfo.rectSubarea=asDegreeRect( relx, rely, dividerx * xside[postfixlength], dividery * yside[postfixlength] );
        mcInfo.rectCell=asDegreeRect( (relx+difx*dividerx), (rely+(yside[postfixlength] - 1 - dify)*dividery) , dividerx, dividery );
        mcInfo.form += (postfixlength==2 ? 'pp' : (postfixlength==3 ? 'ppp' : 'pppp'))
        mcInfo.postfixType=postfixlength;
    }

    if (postfixlength == 3) {
        result += encodeTriple(difx, dify, dividerx, dividery);
    }
    else {
        var postfix = encodeBase31((difx) * yside[postfixlength] + dify, postfixlength);
        if (postfixlength == 4) {
            postfix = postfix.charAt(0) + postfix.charAt(2) + postfix.charAt(1) + postfix.charAt(3);
            if (getDebugInfo) mcInfo.rectRegion=asDegreeRect( relx + (31 * Math.floor(difx/31) * dividerx), rely + (31 * Math.floor((yside[postfixlength] - 1 - dify)/31) * dividery), 31*dividerx, 31*dividery );
        }
        result += postfix;
    }
    // encoderelative

    if (orgcodex == 14) {
        result = result.charAt(0) + '.' + result.charAt(1) + result.substring(3);
        if (getDebugInfo) mcInfo.dotPosition--;
    }

    return encodeExtension(headerletter + result, extrax << 2, extray, dividerx << 2, dividery,use_high_precision,1); // grid
}


/// alphabet support

var MAXLANS = 14;
var asc2lan = [
    [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Roman
    [913, 914, 926, 916, 63, 917, 915, 919, 921, 928, 922, 923, 924, 925, 927, 929, 920, 936, 931, 932, 63, 934, 937, 935, 933, 918, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Greek
    [1040, 1042, 1057, 1044, 1045, 1046, 1043, 1053, 1048, 1055, 1050, 1051, 1052, 1047, 1054, 1056, 1060, 1071, 1062, 1058, 1069, 1063, 1064, 1061, 1059, 1041, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Cyrillic
    [1488, 1489, 1490, 1491, 1507, 1492, 1494, 1495, 1493, 1496, 1497, 1498, 1499, 1500, 1505, 1501, 1502, 1504, 1506, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Hebrew
    [2309, 2325, 2327, 2328, 2319, 2330, 2332, 2335, 63, 2336, 2339, 2340, 2342, 2343, 63, 2344, 2346, 2349, 2350, 2352, 2347, 2354, 2357, 2360, 2361, 2337, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415], // Hindi
    [3346, 3349, 3350, 3351, 3339, 3354, 3356, 3359, 3335, 3361, 3364, 3365, 3366, 3367, 3360, 3368, 3374, 3376, 3377, 3378, 3337, 3380, 3381, 3382, 3384, 3385, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439], // Malay
    [4256, 4257, 4259, 4262, 4260, 4265, 4267, 4268, 4275, 4270, 4272, 4273, 4274, 4276, 4269, 4277, 4278, 4279, 4280, 4281, 4264, 4282, 4283, 4285, 4286, 4287, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Georgian
    [12450, 12459, 12461, 12463, 12458, 12465, 12467, 12469, 12452, 12473, 12481, 12488, 12490, 12492, 12454, 12498, 12501, 12504, 12507, 12513, 12456, 12514, 12520, 12521, 12525, 12530, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Katakana
    [3632, 3585, 3586, 3588, 3634, 3591, 3592, 3593, 3633, 3594, 3601, 3604, 3606, 3607, 3597, 3608, 3610, 3612, 3617, 3619, 3628, 3621, 3623, 3629, 3630, 3631, 3664, 3665, 3666, 3667, 3668, 3669, 3670, 3671, 3672, 3673], // Thai
    [3760, 3713, 3714, 3716, 3779, 3719, 3720, 3722, 3780, 3725, 3732, 3735, 3737, 3738, 3782, 3740, 3742, 3745, 3746, 3747, 3773, 3751, 3754, 3755, 3757, 3759, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Lao
    [1366, 1330, 1331, 1332, 1333, 1336, 1337, 1338, 1339, 1341, 1343, 1344, 1345, 1347, 1365, 1351, 1352, 1354, 1357, 1358, 1349, 1359, 1360, 1361, 1362, 1363, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Armenian
    [2437, 2444, 2453, 2454, 2447, 2455, 2457, 2458, 63, 2461, 2464, 2465, 2466, 2467, 63, 2468, 2469, 2470, 2472, 2474, 2451, 2476, 2477, 2479, 2482, 2489, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543], // Bengali
    [2565, 2581, 2583, 2584, 2575, 2586, 2588, 2591, 63, 2592, 2595, 2596, 2598, 2599, 63, 2600, 2602, 2605, 2606, 2608, 2603, 2610, 2613, 2616, 2617, 2593, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671], // Gurmukhi
    [3928, 3904, 3905, 3906, 3940, 3908, 3909, 3910, 63, 3911, 3914, 3916, 3918, 3919, 63, 3921, 3923, 3924, 3926, 3934, 3941, 3935, 3937, 3938, 3939, 3942, 3872, 3873, 3874, 3875, 3876, 3877, 3878, 3879, 3880, 3881] // Tibetan
];

// *UI*
var lannam = [
    ["Roman"],
    ["Greek"],
    ["Cyrillic"],
    ["Hebrew"],
    ["Hindi"],
    ["Malay"],
    ["Georgian"],
    ["Katakana"],
    ["Thai"],
    ["Lao"],
    ["Armenian"],
    ["Bengali"],
    ["Gurmukhi"],
    ["Tibetan"]
];

// *UI*
var lanlannam = [
    ["Roman"],
    ["&#949;&#955;&#955;&#951;&#957;&#953;&#954;&#940;"],
    ["&#1082;&#1080;&#1088;&#1080;&#1083;&#1083;&#1080;&#1094;&#1072;"],
    ["&#1506;&#1460;&#1489;&#1456;&#1512;&#1460;&#1497;&#1514;"],
    ["&#2361;&#2367;&#2306;&#2342;&#2368;"],
    ["Melayu"],
    ["&#4325;&#4304;&#4320;&#4311;&#4323;&#4314;&#4312;"],
    ["&#12459;&#12479;&#12459;&#12490;"],
    ["&#3616;&#3634;&#3625;&#3634;&#3652;&#3607;&#3618;"],
    ["&#3742;&#3762;&#3754;&#3762;&#3749;&#3762;&#3751;"],
    ["&#1392;&#1377;&#1397;&#1381;&#1408;&#1381;&#1398;"],
    ["&#2476;&#2494;&#2434;&#2482;&#2494;"],
    ["&#2583;&#2625;&#2608;&#2606;&#2625;&#2582;&#2624;"],
    ["&#3921;&#3926;&#3956;&#3851;&#3909;&#3923;&#3851;"]
];


/// PRIVATE substitute characters in str with characters form the specified language (pass asHTML=1 to explicitly HTML-encode characters)
function showinlan(str, lan, asHTML) {
    if (!lan) return str;

    var result = '';

    // unpack for languages that do not support E and U
    if (asc2lan[lan][4] == 63) { // is there no equivalent for the letter E in this language?
        if (str.indexOf('E') >= 0 || str.indexOf('U') >= 0) {
            str = aeu_pack(aeu_unpack(str), true);
            /* v1.50 repack! */
        }
    }

    // substitute
    {
        var i;
        for (i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c >= 65 && c <= 90)
                c = asc2lan[lan][c - 65];
            else if (c >= 48 && c <= 57)
                c = asc2lan[lan][c + 26 - 48];

            if (asHTML && (c<32 || c>93))
                result += '&#' + c + ';';
            else
                result += String.fromCharCode(c);
        }
    }
    return result;
}

/// PRIVATE convert all characters to Roman (ASCII) alphabet (if possible)
function to_ascii(str) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var result = '';
    str=trim(str).toUpperCase();
    var len = str.length;
    var i;
    var trans = 0;
    for (i = 0; i < len; i++) {
        var c = str.charCodeAt(i);
        if (c > 0 && c < 127) result += str.charAt(i); else {
            var lan;
            for (lan = 0; lan < MAXLANS; lan++) {
                var nrc = asc2lan[lan].length;
                var found = 0;
                var j;
                for (j = 0; j < nrc; j++) {
                    if (c == asc2lan[lan][j]) {
                        result += letters.charAt(j);
                        found = 1;
                        trans = 1;
                        break;
                    }
                }
                if (found) break;
            }
            if (!found) result += '?';
        }
    }
    if (result.charAt(0) == 'A') {
        result = aeu_pack(aeu_unpack(result), false);
        /* v1.50 repack A-voweled to AEU-voweled */
    }
    return result;
}


/// PRIVATE lowest-level data access 

var flags, codex, codexlo, codexhi, codexlen; // GLOBAL
var isnameless, isrestricted, recType, isSpecialShape22; // GLOBAL

function dataSetup(i) {
    flags = data_flags[i];
    codexhi = Math.floor((flags & 31) / 5);
    codexlo = ((flags & 31) % 5) + 1;
    codexlen = codexlo + codexhi;
    codex = 10 * codexhi + codexlo;
    // iscountry = (flags & 32);
    isnameless = (flags & 64);
    isrestricted = (flags & 512);
    isSpecialShape22 = (flags & 1024);
    recType = ((flags >> 7) & 3); // 1=pipe 2=plus 3=star
    if (codex == 21 && isnameless == 0) {
        codex++;
        codexlo++;
        codexlen++;
    }
    minmaxSetup(i);
}

function headerLetter(i) {
    var flags = data_flags[i];
    if (((flags >> 7) & 3)==1)
        return encodeChar[(flags >> 11) & 31];
    return '';
}
function smartdiv(i) {
    return data_special1[i];
}
function isRestricted(i) {
    return data_flags[i] & 512;
}
function isNameless(i) {
    return data_flags[i] & 64;
}
function isAutoHeader(i) {
    return data_flags[i] & (8 << 5);
}
function CodexLen(i) {
    flags = data_flags[i];
    codexhi = Math.floor((flags & 31) / 5);
    return codexhi + ((flags & 31) % 5) + 1;
}
function Codex(i) {
    flags = data_flags[i];
    codexhi = Math.floor((flags & 31) / 5);
    return 10 * codexhi + ((flags & 31) % 5) + 1;
}
function isSpecialShape(i) {
    return data_flags[i] & 1024;
}

function firstNamelessRecord(samecodex, index, firstcode) {
    var i = index;
    while (i >= firstcode && Codex(i) == samecodex && isNameless(i)) i--;
    i++;
    return i;
}

function countNamelessRecords(samecodex, index, firstcode) {
    var i = firstNamelessRecord(samecodex, index, firstcode);
    var e = index;
    while (Codex(e) == samecodex) e++;
    return (e-i);
}


// mid-level encode/decode
function encodeNameless(x, y, index, firstcode) {
    var A = countNamelessRecords(codex, index, firstcode);
    var p = Math.floor(31 / A);
    var r = (31 % A);
    var X = index - firstNamelessRecord(codex, index, firstcode);

    if (A > 1) {
        var storage_offset = 0;

        if (codex != 21 && A <= 31) {
            storage_offset = (X * p + (X < r ? X : r)) * (961 * 961);
        }
        else if (codex != 21 && A < 62) {
            if (X < (62 - A)) {
                storage_offset = X * (961 * 961);
            }
            else {
                storage_offset = (62 - A + Math.floor((X - 62 + A) / 2) ) * (961 * 961);
                if ((X + A) & 1) {
                    storage_offset += (16 * 961 * 31);
                }
            }
        }
        else {
            var BASEPOWER = (codex == 21) ? 961 * 961 : 961 * 961 * 31;
            var BASEPOWERA = Math.floor(BASEPOWER / A);
            if (A == 62)
                BASEPOWERA++;
            else
                BASEPOWERA = (961) * Math.floor(BASEPOWERA / 961);

            storage_offset = X * BASEPOWERA;
        }

        var SIDE = smartdiv(index);
        var orgSIDE = SIDE;
        var xSIDE = SIDE;
        if (isSpecialShape22) {
            xSIDE *= SIDE;
            SIDE = 1 + Math.floor((maxy - miny) / 90);
            xSIDE = Math.floor(xSIDE / SIDE);
        }

        var dividerx4 = xDivider4(miny, maxy); // note that xDivider4 is 4 times too large
        var xFracture = Math.floor(4*fraclon);
        var dx = Math.floor((4 * (x - minx) + xFracture) / dividerx4); // dx is in millionths
        var extrax4 = (x - minx) * 4 - dx * dividerx4; // extrax4 is in quarter-millionths

        var dividery = 90;
        var dy = Math.floor((maxy - y) / dividery);
        var extray = (maxy - y) % dividery;

        if (extray==0 && fraclat>0) {
            dy--;
            extray += dividery;              
        }

        var v = storage_offset;
        if (isSpecialShape22) {
            v += encodeSixWide(dx, SIDE - 1 - dy, xSIDE, SIDE);
        }
        else {
            v += (dx * SIDE + dy);
        }

        if (getDebugInfo) {
            mcInfo={type:(isSpecialShape22 ? 2 : 1),regular:false}; 
            mcInfo.rectCell=asDegreeRect( minx + dx*(dividerx4/4), maxy - (dy+1)*dividery, dividerx4/4, dividery );
            mcInfo.prefixDivx = xSIDE;
            mcInfo.prefixDivy = SIDE;
            mcInfo.dotPosition = (codex==22 ? 3 : 2);
            mcInfo.form = (codexlen == 3 ? 'nnnn' : 'nnnnn');
            mcInfo.postfixType=0;
        }

        var result = encodeBase31(v, codexlen + 1);

        if (codexlen == 3) {
            result = result.substr(0, 2) + '.' + result.substr(2);
        }
        else if (codexlen == 4) {
            if (codex == 22 && orgSIDE == 961 && !isSpecialShape22) {
                if (getDebugInfo) {
                    mcInfo.form = 'hrrpp';
                    mcInfo.headerletter = encodeChar[storage_offset/(961*961)];
                    mcInfo.postfixType=2;
                    mcInfo.regular = true;
                    mcInfo.rectRegion=asDegreeRect( (minx+(31*Math.floor(dx/31)*dividerx4/4)), maxy - (31 * dividery) * (1 + Math.floor(dy/31)), 31*dividerx4/4, 31*dividery );
                }
                result = result.charAt(0) + result.charAt(1) + result.charAt(3) + result.charAt(2) + result.charAt(4);
            }
            if (codex == 13)
                result = result.substr(0, 2) + '.' + result.substr(2);
            else
                result = result.substr(0, 3) + '.' + result.substr(3);
        }

        return encodeExtension(result, extrax4, extray, dividerx4, dividery,use_high_precision,-1); // nameless
    }
}


function decodeNameless(result, firstrec) // returns millionths
{
    if (codex == 22)
        result = result.substr(0, 3) + result.substr(4);
    else
        result = result.substr(0, 2) + result.substr(3);

    var A = countNamelessRecords(codex, firstrec, firstrec);
    if (A < 2) A = 1; // paranoia

    var p = Math.floor(31 / A);
    var r = (31 % A);
    var v;
    var X = -1;
    var swapletters = 0;

    if (codex != 21 && A <= 31) {
        var offset = decodeChar[result.charCodeAt(0)];

        if (offset < r * (p + 1)) {
            X = Math.floor(offset / (p + 1));
        }
        else {
            swapletters = (p == 1 && codex == 22);
            X = r + Math.floor((offset - (r * (p + 1))) / p);
        }
    }
    else if (codex != 21 && A < 62) {
        X = decodeChar[result.charCodeAt(0)];
        if (X < (62 - A)) {
            swapletters = (codex == 22);
        }
        else {
            X = X + (X - (62 - A));
        }
    }
    else // codex==21 || A>=62
    {
        var BASEPOWER = (codex == 21) ? 961 * 961 : 961 * 961 * 31;
        var BASEPOWERA = Math.floor(BASEPOWER / A);
        if (A == 62) BASEPOWERA++; else BASEPOWERA = 961 * Math.floor(BASEPOWERA / 961);

        // decode and determine x
        v = decodeBase31(result);
        X = Math.floor(v / BASEPOWERA);
        v %= BASEPOWERA;
    }

    if (swapletters) {
        if (!isSpecialShape(firstrec + X))
            result = result.charAt(0) + result.charAt(1) + result.charAt(3) + result.charAt(2) + result.charAt(4);
    }

    if (codex != 21 && A <= 31) {
        v = decodeBase31(result);
        if (X > 0) {
            v -= ( (X * p + (X < r ? X : r)) * (961 * 961) );
        }
    }
    else if (codex != 21 && A < 62) {
        v = decodeBase31(result.substr(1));
        if (X >= (62 - A))
            if (v >= (16 * 961 * 31)) {
                v -= (16 * 961 * 31);
                X++;
            }
    }

    if (X > A) return false; // past end!
    dataSetup(firstrec + X);

    SIDE = smartdiv(firstrec + X);
    var xSIDE = SIDE;

    if (isSpecialShape22) {
        xSIDE *= SIDE;
        SIDE = 1 + Math.floor((maxy - miny) / 90);
        xSIDE = Math.floor(xSIDE / SIDE);
    }

    var dx, dy;
    if (isSpecialShape22) {
        var d = decodeSixWide(v, xSIDE, SIDE);
        dx = d.x;
        dy = SIDE - 1 - d.y;
    }
    else {
        dy = (v % SIDE);
        dx = Math.floor(v / SIDE);
    }

    if (dx >= xSIDE) // else out-of-range!
        return false;

    var dividerx4 = xDivider4(miny, maxy); // 4 times too large!
    var dividery = 90;

    var cornerx = minx + Math.floor((dx * dividerx4) / 4); // FIRST multiply, THEN divide!
    var cornery = maxy - (dy * dividery);
    var ret = decodeExtension(cornery, cornerx, dividerx4, dividery, -1, result);
    ret.x += ((dx * dividerx4)%4) / 4.0;
    return ret;
}


function encodeAutoHeader(y, x, thiscodexlen, thisindex, territoryNumber) 
{
    var STORAGE_START = 0;

    // search back to first of the group
    var firstindex = thisindex;
    while (isAutoHeader(firstindex - 1) && CodexLen(firstindex - 1) == thiscodexlen)
        firstindex--;

    var i;
    for (i = firstindex; CodexLen(i) == thiscodexlen; i++) {
        dataSetup(i);
        var H = Math.floor((maxy - miny + 89) / 90);
        var xdiv = xDivider4(miny, maxy);
        var W = Math.floor(( (maxx - minx) * 4 + (xdiv - 1) ) / xdiv);

        H = 176 * Math.floor((H + 176 - 1) / 176);
        W = 168 * Math.floor((W + 168 - 1) / 168);

        var product = Math.floor(W / 168) * Math.floor(H / 176) * 961 * 31;

        if (recType == 2) { // *+
            var GOODROUNDER = codex >= 23 ? (961 * 961 * 31) : (961 * 961);
            product = Math.floor((STORAGE_START + product + GOODROUNDER - 1) / GOODROUNDER) * GOODROUNDER - STORAGE_START;
        }

        if (i == thisindex) {
            if (fitsInside(y, x, minx, maxx, miny, maxy)) {
                var dividerx = Math.floor((maxx - minx + W - 1) / W);
                var vx = Math.floor((x - minx) / dividerx);
                var extrax = ((x - minx) % dividerx);

                var dividery = Math.floor((maxy - miny + H - 1) / H);
                var vy = Math.floor((maxy - y) / dividery);
                var extray = ((maxy - y) % dividery);

                var spx = vx % 168;
                var spy = vy % 176;

                vx = Math.floor(vx / 168);
                var value = vx * Math.floor(H / 176);

                if ( extray==0 && fraclat>0 ) {
                  if (vy==0) { 
                    STORAGE_START += product;
                    continue;
                  }
                  vy--;
                  extray += dividery;
                }

                vy = Math.floor(vy / 176);
                value += vy;


                if (getDebugInfo) {
                    mcInfo={type:(recType == 2 ? 6 : 5),regular:false}; // 5=unrounded groups / 6=rounded groups
                    mcInfo.form = (codexlen==4 ? 'ggppp' : 'gggppp');
                    mcInfo.postfixType=3;
                    mcInfo.dotPosition = codexlen-2;
                    mcInfo.prefixDivx = Math.floor(W / 168);
                    mcInfo.prefixDivy = Math.floor(H / 176);
                    mcInfo.rectSubarea=asDegreeRect(minx + (vx*168    )*dividerx, maxy - ((vy+1)*176      )* dividery,168 * dividerx,176 * dividery);                
                    mcInfo.rectCell   =asDegreeRect(minx + (vx*168+spx)*dividerx, maxy - ((vy  )*176+spy+1)* dividery,      dividerx,      dividery);                
                }

                var mapc = encodeBase31(Math.floor(STORAGE_START / (961 * 31)) + value, codexlen - 2) + '.' + encodeTriple(spx, spy, dividerx, dividery);

                return encodeExtension(mapc, extrax << 2, extray, dividerx << 2, dividery,use_high_precision,-1); // autoheader
            }
        }
        STORAGE_START += product;
    }
    return ''; // fail
}

function decodeAutoHeader(input, firstindex, territoryNumber) {
    var STORAGE_START = 0;
    var thiscodexlen = codexlen;

    var value = decodeBase31(input); // decode top (before dot)
    value *= (961 * 31);
    var triple = decodeTriple(input.substr(input.length - 3)); // decode bottom 3 chars

    var i;
    for (i = firstindex; ; i++) {
        if (CodexLen(i) != thiscodexlen) {
            return false;
        }
        if (i > firstindex) dataSetup(i);

        var H = Math.floor((maxy - miny + 89) / 90);
        var xdiv = xDivider4(miny, maxy);
        var W = Math.floor(( (maxx - minx) * 4 + (xdiv - 1) ) / xdiv);

        H = 176 * Math.floor((H + 176 - 1) / 176);
        W = 168 * Math.floor((W + 168 - 1) / 168);

        var product = Math.floor(W / 168) * Math.floor(H / 176) * 961 * 31;

        if (recType == 2) { // *+
            var GOODROUNDER = codex >= 23 ? (961 * 961 * 31) : (961 * 961);
            product = Math.floor((STORAGE_START + product + GOODROUNDER - 1) / GOODROUNDER) * GOODROUNDER - STORAGE_START;
        }

        if (value >= STORAGE_START && value < STORAGE_START + product) // code belongs here?
        {
            var dividerx = Math.floor((maxx - minx + W - 1) / W);
            var dividery = Math.floor((maxy - miny + H - 1) / H);

            value -= STORAGE_START;
            value = Math.floor(value / (961 * 31));

            var vx = Math.floor(value / Math.floor(H / 176)) * 168 + triple.x;
            var vy = (value % Math.floor(H / 176)) * 176 + triple.y;

            var cornery = maxy - vy * dividery;
            var cornerx = minx + vx * dividerx;

            var retval = decodeExtension(cornery, cornerx, dividerx << 2, dividery, -1, input);
            if (retval.x < minx || retval.x >= maxx || retval.y < miny || retval.y > maxy)
                return false;
            return retval;
        }
        STORAGE_START += product;
    }
}


/// PRIVATE add vowels to prevent a mapcode r from being all-digit
function aeu_pack(r, short) /* v1.50 */ {
    var dotpos = -9;
    var rlen = r.length;
    var d;
    var rest = '';
    for (d = 0; d < rlen; d++)
        if (r.charAt(d) < '0' || r.charAt(d) > '9') // not digit?
            if (r.charAt(d) == '.' && dotpos < 0) // first dot?
                dotpos = d;
            else if (r.charAt(d) == '-') {
                rest = r.substring(d);
                r = r.substring(0, d);
                rlen = d;
            }
            else
                return r; // not alldigit (or multiple dots)

    var v;
    if (rlen - 2 > dotpos) { // does r have a dot, AND at least 2 chars after the dot?
        if (short) { /* v1.50 new way: use only A */
            v = (r.charCodeAt(0) - 48) * 100 + (r.charCodeAt(rlen - 2) - 48) * 10 + (r.charCodeAt(rlen - 1) - 48);
            r = 'A' + r.substring(1, rlen - 2) + encodeChar[Math.floor(v / 32)] + encodeChar[v % 32]; // 1.50
        }
        else { /* old way: use A, E and U */
            v = (r.charCodeAt(rlen - 2) - 48) * 10 + (r.charCodeAt(rlen - 1) - 48);
            r = r.substring(0, rlen - 2) + encodeChar[Math.floor(v / 34) + 31] + encodeChar[v % 34]; // v1.50
        }
    }
    return r + rest;
}

// PRIVATE (defaults for last 4 are false,false,false,-1)
var debugStopRecord = -1; // GLOBAL
/// returns result, or empty if error
var results; // GLOBAL
function mapcoderEngine(orgy, orgx, tn, getshortest, isrecursive, state_override) 
{
    // round to millionths and normalise
    if (isNaN(orgx)) orgx = 0;
    if (isNaN(orgy)) orgy = 0;
    orgy=Number(orgy);
    orgx=Number(orgx);
    if (orgy > 90) orgy = 90; else if (orgy < -90) orgy = -90; // cut within [-90..+90]
    if (orgx >= 180) orgx -= 360; else if (orgx < -180) orgx += 360; // move within [-180..+180>

{ // seperate out the fraction
    var y = orgy +  90;
    var x = orgx + 180;
    y*=1000000;
    x*=1000000;
    var lat32=Math.floor(y);
    var lon32=Math.floor(x);
    fraclat=y-lat32; // get fraction
    fraclon=x-lon32; // get fraction
  
    // for 8-digit precision, cells are divided into 810,000 by 810,000 minicells. So take care of math errors
    fraclat *= 810000; if (fraclat<1) fraclat=0; else { if (fraclat>809999) { fraclat=0; lat32++; } else fraclat /= 810000; }
    fraclon *= 810000; if (fraclon<1) fraclon=0; else { if (fraclon>809999) { fraclon=0; lon32++; } else fraclon /= 810000; }


    y = lat32 -  90000000;
    x = lon32 - 180000000;
} //

    mcInfo = {type:0};
	
    if (!isrecursive) results=[];

    var fromTerritory=0;
    var uptoTerritory=ccode_earth;
    if (tn!=undefined) {
        if (isNaN(tn) || tn < 0 || tn > ccode_earth)
            tn = ccode_earth;
        fromTerritory=tn;
        uptoTerritory=tn;
    }

  var debugStopFailed = 1;
  var territoryNumber;
  for(territoryNumber=fromTerritory;territoryNumber<=uptoTerritory;territoryNumber++)
  {
    var original_length = results.length;
    var from = dataFirstRecord(territoryNumber);
    if (!data_flags[from]) continue;   // 1.27 survive partially filled data_ array
    var upto = dataLastRecord(territoryNumber);

    // make sure it fits the country
    if (territoryNumber != ccode_earth) {
        minmaxSetup(upto); // find encompassing rect
        if (!(fitsInside(y, x, minx, maxx, miny, maxy))) { // does not fit?
            if (isrecursive)
                return;
            from = upto + 1; // empty the range
        }
    }

    for (var i=from; i <= upto; i++) {
        dataSetup(i);
        if (codex < 54) // exlude 54 and 55
        {
            if (fitsInside(y, x, minx, maxx, miny, maxy)) {
                var r;
                if (isnameless) {
                    r = encodeNameless(x, y, i, from);
                }
                else if (recType > 1) {
                    r = encodeAutoHeader(y, x, codexlen, i, territoryNumber);
                }
                else if (isrestricted && i == upto && getParentOf(territoryNumber) >= 0) {
                    mapcoderEngine(orgy, orgx, getParentOf(territoryNumber), getshortest, true/*recursive*/, territoryNumber);
                    continue;
                }                
                else {
                    if (isrestricted && results.length == original_length) {
                        r = ''; // restricted, and no shorter mapcodes exist: do not generate mapcodes
                    }
                    else {
                        r = encodeGrid(i, y, x, codex, minx, miny, maxx, maxy, headerLetter(i), territoryNumber);
                    }
                }
                
                if (r.length > 4) {
                    r = aeu_pack(r);

                    var storecode = territoryNumber;
                    if (state_override != undefined && state_override >= 0)
                        storecode = state_override;

                    if (debugStopRecord==i) { 
                        debugStopFailed = 0; 
                        results.length = 0; // clear all other results
                    }

					
                    if (getDebugInfo) {
                        mcInfo.mapcode=r;
                        mcInfo.record=i;
                        mcInfo.rectArea=asDegreeRect(minx,miny,maxx-minx,maxy-miny);
                        mcInfo.form=mcInfo.form.substr(0,mcInfo.dotPosition)+'.'+mcInfo.form.substr(mcInfo.dotPosition);
                        dataSetup(upto);
                        mcInfo.rectEncompassing=asDegreeRect(minx,miny,maxx-minx,maxy-miny);
                    }
                    else {
                        mcInfo={mapcode:r};
                    }
                    mcInfo.territoryAlphaCode=getTerritoryAlphaCode(storecode);
                    mcInfo.fullmapcode=(storecode==ccode_earth ? '' : mcInfo.territoryAlphaCode+' ') + r;
                    mcInfo.territoryNumber=storecode;
                    results.push(mcInfo);

                    if (getshortest || debugStopRecord==i)
                        break;
                }
            } // inside territory rectangle
        }
    }
  }

  if (debugStopRecord>=0 && debugStopFailed)
        results.length = 0;

  return results;
}


/// PRIVATE remove vowels from mapcode str into an all-digit mapcode (assumes str is already uppercase!)
function aeu_unpack(str)
{
    var voweled = 0;
    var lastpos = str.length - 1;
    var dotpos = str.indexOf('.');
    if (dotpos < 2 || lastpos < dotpos + 2) return ''; // Error: no dot, or less than 2 letters before dot, or less than 2 letters after dot

    if (str.charAt(0) == 'A') /* V1.50 */
    {
        var v1 = decodeChar[str.charCodeAt(lastpos)];
        if (v1 < 0) v1 = 31;
        var v2 = decodeChar[str.charCodeAt(lastpos - 1)];
        if (v2 < 0) v2 = 31;
        var s = String(1000 + v1 + 32 * v2);
        str = s.charAt(1) + str.substring(1, lastpos - 1) + s.charAt(2) + s.charAt(3);
        voweled = 1;
    }
    else if (str.charAt(0) == 'U') /* V1.50 */
    {
        voweled = 1;
        str = str.substring(1);
        dotpos--;
    }
    else {
        var v = str.charAt(lastpos - 1);
        if (v == 'A') v = 0; else if (v == 'E') v = 34; else if (v == 'U') v = 68; else v = -1;
        if (v >= 0) {
            var e = str.charAt(lastpos);
            if (e == 'A') v += 31; else if (e == 'E') v += 32; else if (e == 'U') v += 33; else {
                var ve = decodeChar[str.charCodeAt(lastpos)];
                if (ve < 0) return '';
                v += ve;
            }
            if (v >= 100) return '';
            voweled = 1;
            str = str.substring(0, lastpos - 1) + encodeChar[Math.floor(v / 10)] + encodeChar[Math.floor(v % 10)];
        }
    }

    if (dotpos < 2 || dotpos > 5) return '';

    for (v = 0; v <= lastpos; v++) if (v != dotpos)
        if (decodeChar[str.charCodeAt(v)] < 0)
            return ''; // bad char!
        else if (voweled && decodeChar[str.charAt(v)] > 9)
            return ''; // nonodigit!


    return str;
}

/// PRIVATE decode a PROPER mapcode within a KNOWN territory number to an x,y coordinate (or false)
function master_decode(mapcode, territoryNumber) // returns object with y and x fields, or false
{
    mapcode = to_ascii(mapcode);

    var minpos = mapcode.indexOf('-');
    if (minpos > 0) {
        extrapostfix = trim(mapcode.substring(minpos + 1));
        mapcode = trim(mapcode.substring(0, minpos));
    } else {
        extrapostfix = '';
    }

    mapcode = aeu_unpack(mapcode);
    if (mapcode == '')
        return false; // failed to decode!


    var mclen = mapcode.length;

    if (mclen >= 10) territoryNumber = ccode_earth;
    // *** long codes in states are handled by the country
    var parent = getParentOf(territoryNumber);
    if (parent>=0)
        if (mclen >= 9 || (mclen >= 8 && (parent == ccode_ind || parent == ccode_mex)))
            territoryNumber = parent;

    var from = dataFirstRecord(territoryNumber);
    if (!data_flags[from]) return false; // 1.27 survive partially filled data_ array
    var upto = dataLastRecord(territoryNumber);

    var prefixlength = mapcode.indexOf('.');
    var postfixlength = mclen - 1 - prefixlength;
    
    var result;
    var i;
    for (i = from; i <= upto; i++) {
        dataSetup(i);
        if (recType == 0 && isnameless == 0 && codexhi == prefixlength && codexlo == postfixlength) {
            result = decodeGrid(mapcode, minx, miny, maxx, maxy, '', territoryNumber, i);
            if (isrestricted && result) {
                var fitssomewhere = 0;
                var j;
                for (j = upto - 1; j >= from; j--) { // look in previous rects
                    dataSetup(j);
                    if (isrestricted) continue;
                    if (fitsInsideWithRoom(result, minx, maxx, miny, maxy)) {
                        fitssomewhere = 1;
                        break;
                    }
                }
                if (!fitssomewhere) result = 0;
            }
            break;
        }
        else if (recType == 1 && codexlo == postfixlength && codexhi + 1 == prefixlength && headerLetter(i) == mapcode.charAt(0)) {
            result = decodeGrid(mapcode.substr(1), minx, miny, maxx, maxy, mapcode.substr(0, 1), territoryNumber, i);
            break;
        }
        else if (isnameless && ((codex == 21 && prefixlength == 2 && postfixlength == 2 ) || (codex == 22 && prefixlength == 3 && postfixlength == 2) || (codex == 13 && prefixlength == 2 && postfixlength == 3))) {
            result = decodeNameless(mapcode, i);
            break;
        }
        else if (recType > 1 && postfixlength == 3 && codexlo + codexhi == prefixlength+2) {
            result = decodeAutoHeader(mapcode, i, territoryNumber);
            break;
        }
    }

    if (result) {
        if (result.x > 180000000) result.x -= 360000000; else if (result.x < -180000000) result.x += 360000000; // 1.33 normalize <-180

        // make sure result is in the country
        if (territoryNumber != ccode_earth) {
            minmaxSetup(upto); // find encompassing rect
            if (!(fitsInsideWithRoom(result, minx, maxx, miny, maxy))) { // does not fit?
                return false;
            }
        }
    }

    if (result) {
        result.x = result.x / 1000000.0;
        result.y = result.y / 1000000.0; if (result.y>90) result.y=90;
    }
    return result;
}

// ******************** legacy interface *****************

function hasStates(territoryNumber) {return hasSubdivision(territoryNumber);} 
function isState(territoryNumber) {return isSubdivision(territoryNumber);}
function StateParent(territoryNumber) {return getParentOf(territoryNumber);}
function ccode2iso(territoryNumber, format) { return getTerritoryAlphaCode(territoryNumber,format); }
function fullname(territoryNumber, keepindex) {
    if (keepindex)
        return isofullname[territoryNumber];
    return getTerritoryFullname(territoryNumber);
}
function master_encode(orgy, orgx, tn, isrecursive, stop_with_one_result, allowworld, state_override) {
	mapcoderEngine(orgy, orgx, tn, stop_with_one_result, isrecursive, state_override);
    if (allowworld && !isrecursive && tn!=ccode_earth && (results.length==0 || results[results.length-1].territoryNumber!=ccode_earth))
        mapcoderEngine(orgy, orgx, ccode_earth, stop_with_one_result, true/*recursive*/, -1);
    var strArray=[];
    for(var i=0;i<results.length;i++) strArray.push([results[i].mapcode,results[i].territoryNumber]);
    return strArray;
}

// ******************** public interface *****************

/// PUBLIC returns {distance,width,height}, the distance between two coordinates, and the longitudinal distance ("width") and latitudinal distance ("height") - all expressed in meters
/// Warning: accurate only for coordinates within a few hundred meters of each other
function distanceInMeters( latDeg1,lonDeg1,latDeg2,lonDeg2 ) {
	if (latDeg1>latDeg2) { var t=latDeg1; latDeg1=latDeg2; latDeg2=t; }	
	var worstParallel=0; // assume equator
	if (latDeg2<0) 
		worstParallel=latDeg1;
	else if (latDeg1>0)
		worstParallel=latDeg2;
	var dy=(latDeg2-latDeg1) * 1000000/9;	
	var dx=(lonDeg2-lonDeg1) * Math.cos( Math.PI * worstParallel / 180 ) * 1000000/9;
	return { distance:Math.sqrt(dx*dx+dy*dy), width:(dx<0 ? -dx : dx), height:(dy<0 ? -dy : dy) };
}

/// PUBLIC convert a mapcode (without territory abbreviation) into a particular alphabet
/// targetAlphabet: 0=roman, 1=greek etc.
/// returns: string
function convertToAlphabet( mapcode, targetAlphabet ) {
  return showinlan(to_ascii(mapcode),targetAlphabet,false)
}

/// PUBLIC convert a mapcode (without territory abbreviation) into a particular alphabet
/// targetAlphabet: 0=roman, 1=greek etc.
/// returns: HTML-encoded string
function convertToAlphabetAsHTML( mapcode, targetAlphabet) {
  return showinlan(to_ascii(mapcode),targetAlphabet,true)
}

/// PUBLIC decode a string (which may contain a full mapcode, including a territory)
/// the optional contextTerritoryNumber is used in case the mapcode specifies no (unambiguous) territory.
/// returns coordinate, or false.
function decode(mapcodeString,territory)
{
    mapcodeString = trim(mapcodeString);
    var contextTerritoryNumber = getTerritoryNumber(territory);
    if (contextTerritoryNumber == undefined) 
        contextTerritoryNumber = ccode_earth;
    var parts = mapcodeString.split(/\s+/);
    var dec = undefined;
    if (parts.length==2) {
        if (isSubdivision(contextTerritoryNumber))
            contextTerritoryNumber=getParentOf(contextTerritoryNumber);
        var territoryNumber = getTerritoryNumber(parts[0],contextTerritoryNumber);
        if (territoryNumber>=0)
            dec = master_decode(parts[1], territoryNumber); 
    }
    else if (parts.length==1) {
        dec = master_decode(parts[0], contextTerritoryNumber);
    }
    if (dec) return dec;
    return {x:undefined,y:undefined};
}

/// PUBLIC encode variants.
/// return an array of mapcodes, each representing the specified coordinate.
/// if a territory number is specified, only mapcodes (if any) within that territory are returned.
/// the Shortest variants return at most one mapcode (the "default" and "shortest possible" mapcode) in any territory.
/// the International variants only return the 9-letter "international" mapcode
/// the WithPrecision variants produce mapcodes extended with high-precision letters (the parameter specifies how many letters: 0, 1, or 2).

function encodeWithPrecision(latitudeDegrees,longitudeDegrees,precision,territory)
{
    use_high_precision=precision;
    return mapcoderEngine(latitudeDegrees,longitudeDegrees,getTerritoryNumber(territory),false/*getshortest*/,false/*recursive*/,-1/*override*/);
}

function encode(latitudeDegrees,longitudeDegrees,territory)
{
    return encodeWithPrecision(latitudeDegrees,longitudeDegrees,0,getTerritoryNumber(territory))
}

function encodeInternational(latitudeDegrees,longitudeDegrees)
{    
    return encodeWithPrecision(latitudeDegrees,longitudeDegrees,0,ccode_earth)
}

function encodeInternationalWithPrecision(latitudeDegrees,longitudeDegrees,precision)
{
    return encodeWithPrecision(latitudeDegrees,longitudeDegrees,precision,ccode_earth)
}

function encodeShortestWithPrecision(latitudeDegrees,longitudeDegrees,precision,territory)
{
    use_high_precision=precision;
    return mapcoderEngine(latitudeDegrees,longitudeDegrees,getTerritoryNumber(territory),true/*getshortest*/,false/*recursive*/,-1/*override*/);
}

function encodeShortest(latitudeDegrees,longitudeDegrees, territory )
{    
    return encodeShortestWithPrecision(latitudeDegrees,longitudeDegrees,0,getTerritoryNumber(territory));
}
