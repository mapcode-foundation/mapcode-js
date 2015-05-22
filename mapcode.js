/*
 * Copyright (C) 2014 Stichting Mapcode Foundation (http://www.mapcode.com)
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

var mapcode_cversion = "1.50.1";
var MAX_CCODE = 533;

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


// *************************** mapcode_org *********************

var mapcode_javaversion = '1.50/C' + mapcode_cversion;

/// returns string without leading spaces and plus-signs, and trailing spaces
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

/// return 2-letter parent country abbreviation (disam in range 1..8)
function parentname2(disam) {
    return parents2.substr(disam * 3 - 3, 2);
}

/// given a parent country abbreviation, return disam (in range 1-8) or negative if error
function parentletter(isocode) {
    var p = -1;
    var len = isocode.length;
    var srch = isocode.toUpperCase() + ',';
    if (len == 2) p = parents2.indexOf(srch); else if (len == 3) p = parents3.indexOf(srch);
    if (p < 0)
        return -2;
    return 1 + (p / (len + 1));
}

/// given an ISO abbreviation, set disambiguation for future calls to iso2ccode(); returns nonzero in case of error
var disambiguate = 1; // GLOBAL
function set_disambiguate(isocode) {
    var p = parentletter(isocode);
    if (p < 0)
        return -2;
    disambiguate = p;
    return 0;
}

/// returns alias of ISO abbreviation (if any), or return empty
function alias2iso(isocode) {
    var rx;
    if (isocode.length == 2) rx = '[0-9]' + isocode; else rx = isocode;
    rx = new RegExp(rx + '=', '');
    var p = aliases.search(rx);
    if (p >= 0)
        return aliases.substring(p + 4, p + 7);
    return '';
}

/// given ISO code, return internal ccode (or negative if error)
function iso2ccode(isocode) {
    if (typeof isocode != "string")
        return -1;

    isocode = trim(isocode).toUpperCase();

    var sep = isocode.lastIndexOf('-');
    if (sep < 0) sep = isocode.lastIndexOf(' ');
    if (sep >= 0) {

        prefix = isocode.substring(0, sep);
        isocode = trim(isocode.substring(sep + 1));

        if (isocode.length != 2 && isocode.length != 3)
            return -1;
        if (set_disambiguate(prefix))
            return -2;

        // FIRST see if the isocode is in this disambiguation
        if (isocode.length == 2) {
            return iso2ccode(disambiguate + '' + isocode);
        }
        else if (isocode.length == 3) {
            var isoa = alias2iso(isocode);
            if (isoa) {
                if (isoa.charAt(0) == disambiguate) {
                    isocode = isoa;
                }
            }
        }
    }

    if (isocode.length != 2 && isocode.length != 3)
        return -1;

    {
        var i;

        var testiso = (isocode.length == 2 ? disambiguate + '' + isocode : isocode);
        for (i = 0; i < entity_iso.length; i++) if (testiso == entity_iso[i]) return i;

        // 1.31 improvement: recognise alias in current context
        if (isocode.length == 2 && testiso.length == 3) {
            var aliasiso = alias2iso(testiso);
            if (aliasiso)
                return iso2ccode(aliasiso);
        }

        // look for any iso2 match
        if (isocode.length == 2) {
            for (i = 0; i < entity_iso.length; i++)
                if (entity_iso[i].charCodeAt(0) <= 57 && isocode == entity_iso[i].substring(1, 3))
                    return i;
        }

        isocode = alias2iso(isocode);
        if (isocode)
            return iso2ccode(isocode);
    }

    return -1;
}

/// return parent country of ccode (just returns ccode if ccode is itself a country)
function StateParent(ccode) {
    if (ccode >= usa_from && ccode <= usa_upto) return ccode_usa;
    if (ccode >= ind_from && ccode <= ind_upto) return ccode_ind;
    if (ccode >= can_from && ccode <= can_upto) return ccode_can;
    if (ccode >= aus_from && ccode <= aus_upto) return ccode_aus;
    if (ccode >= mex_from && ccode <= mex_upto) return ccode_mex;
    if (ccode >= bra_from && ccode <= bra_upto) return ccode_bra;
    if (ccode >= rus_from && ccode <= rus_upto) return ccode_rus;
    if (ccode >= chn_from && ccode <= chn_upto) return ccode_chn;
    return -199;
}

/// return name of iso (optional keepindex=1 for bracketed aliases)
function fullname(ccode, keepindex) {
    if (ccode < 0) return;
    if (keepindex != 1) {
        var idx = isofullname[ccode].indexOf(' (');
        if (idx > 0)
            return isofullname[ccode].substr(0, idx);
    }
    return isofullname[ccode];
}

/// returns true iff ccode is a state
function isState(ccode) {
    return StateParent(ccode) >= 0;
}

/// returns true iff ccode is a country that has states
function hasStates(ccode) {
    return (ccode == ccode_usa || ccode == ccode_ind || ccode == ccode_can || ccode == ccode_aus || ccode == ccode_mex || ccode == ccode_bra || ccode == ccode_chn || ccode == ccode_rus);
}

/// returns true iff x in range [minx...maxx> in millionths
function isInRange(x, minx, maxx) {
    if (minx <= x && x < maxx) return true;
    if (x < minx) x += 360000000; else x -= 360000000; // 1.32 fix FIJI edge case
    if (minx <= x && x < maxx) return true;
    return false;
}

/// return isocode (international=1:get full code; international=2:get shortest non-ambiguous code)
function ccode2iso(ccode, international) {
    if (ccode >= 0 && ccode < MAX_CCODE) {
        var n = entity_iso[ccode];
        if (/^[0-9]/.test(n)) n = n.substring(1);
        if (international) {
            var parent = StateParent(ccode);
            if (parent >= 0) {
                if (international == 2) {
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
                } //international==2
                return parentname2(parentletter(entity_iso[parent])) + '-' + n;
            } //parent>=0
        }
        return n;
    }
}

/// low-level routines for data access
var minx, miny, maxx, maxy; // GLOBAL
function dataFirstRecord(ccode) {
    return data_start[ccode];
}
function dataLastRecord(ccode) {
    return data_start[++ccode] - 1;
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

/// return a ccode which could PROBABLY encode coordinate (y,x) in degrees; preferred_ccode is returned if possible; returns "Worldwide" if all else fails;
function find_bestiso(y, x, preferred_ccode) {
    var ox = Math.round(x * 1000000);
    var oy = Math.round(y * 1000000);

    var run;
    for (run = 0; run <= 1; run++) {
        var i;
        for (i = 0; i < ccode_earth; i++) {
            if (run == 0 && preferred_ccode && preferred_ccode >= 0 && preferred_ccode <= ccode_earth)
                i = preferred_ccode;

            var upto = dataLastRecord(i);
            minmaxSetup(upto); // find encompassing rect
            if (oy >= miny && oy < maxy && isInRange(ox, minx, maxx))
                return i;
            if (run == 0) break;
        }
    }
    return ccode_earth;
}

/// low-level tables for mapcode encoding and decosing
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

var decode_chars = [
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

var encode_chars = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'E', 'U'];
/* 1.50 */

function x_divider(miny, maxy) {
    if (miny >= 0)
        return xdivider19[(miny) >> 19];
    if (maxy >= 0)
        return xdivider19[0];
    return xdivider19[(-maxy) >> 19];
}

/// lowest level encode/decode routines
function fast_decode(code) {
    var value = 0;
    var i;
    for (i = 0; i < code.length; i++) {
        var c = code.charCodeAt(i);
        if (c == 46) // dot!
            return value;
        if (decode_chars[c] < 0)
            return NaN;
        value = value * 31 + decode_chars[c];
    }
    return value;
}


function decode_triple(result) {
    var triplex, tripley;
    var c1 = decode_chars[result.charCodeAt(0)];
    var x = fast_decode(result.substr(1));
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

function decode6(v, width, height) {
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

function encode6(x, y, width, height) {
    var D = 6;
    var col = Math.floor(x / 6);
    var maxcol = Math.floor((width - 4) / 6);
    if (col >= maxcol) {
        col = maxcol;
        D = width - maxcol * 6;
    }
    return (height * 6 * col) + (height - 1 - y) * D + (x - col * 6);
}

/// high-precision extension routines
var use_high_precision = 0; // nr of letters of high-precision postfix (if any) // GLOBAL
var extrapostfix = ''; // GLOBAL
function addpostfix(result, extrax4, extray, dividerx4, dividery) {
    if (!use_high_precision)
        return result;

    var gx = Math.floor((30 * extrax4) / dividerx4);
    var gy = Math.floor((30 * extray ) / dividery);
    var x1 = Math.floor(gx / 6);
    var x2 = (gx % 6);
    var y1 = Math.floor(gy / 5);
    var y2 = (gy % 5);

    extrapostfix = encode_chars[y1 * 5 + x1];
    if (use_high_precision == 2) extrapostfix += encode_chars[y2 * 6 + x2];
    return result + '-' + extrapostfix;
}

function add2res(y, x, dividerx4, dividery, ydirection, orginput) // returns millionths
{
    var extrax, extray;
    if (extrapostfix.length > 0) {
        var c1 = extrapostfix.charCodeAt(0);
        c1 = decode_chars[c1];
        if (c1 < 0) c1 = 0; else if (c1 > 29) c1 = 29;
        var y1 = Math.floor(c1 / 5);
        var x1 = (c1 % 5);
        var c2 = (extrapostfix.length == 2) ? extrapostfix.charCodeAt(1) : 72; // 72='H'=code 15=(3+2*6)
        c2 = decode_chars[c2];
        if (c2 < 0) c2 = 0; else if (c2 > 29) c2 = 29;
        var y2 = Math.floor(c2 / 6);
        var x2 = (c2 % 6);

        extrax = Math.floor(((x1 * 12 + 2 * x2 + 1) * dividerx4 + 120) / 240);
        extray = Math.floor(((y1 * 10 + 2 * y2 + 1) * dividery + 30) / 60);
    }
    else {
        extrax = Math.floor(dividerx4 / 8);
        extray = Math.floor(dividery / 2);
    }

    x += extrax;
    y += extray * ydirection;
    return {y: y, x: x}
}


var zonedata = '?'; //    zonedata=?|0|1|array, 0=want zone/dot, 1=want zone/dot/letter, array=res [minx miny maxx maxy,...] set when decoding/encoding // GLOBAL
var zonebase; //    zonebase=mapcode base for zone (set iff zonedata=0/1) // GLOBAL
function addzonedata(rely, relx, ygridsize, xgridsize, RESULT, ccode, c1, dividerx, dividery) // returns millionths
{
    zonedata = [rely, relx, rely + ygridsize, relx + xgridsize, RESULT + (RESULT.indexOf('.') < 0 ? '.' : '') + (c1 < 0 ? '' : encode_chars[c1]), ccode];
    if (c1 >= 0) {
        var dx, dy;
        var nx, ny;
        if (c1 < 24) {
            nx = (c1 % 6) * 28;
            dx = 28;
            ny = Math.floor(c1 / 6) * 34;
            dy = 34;
        }
        else {
            nx = 24 * (c1 - 24);
            dx = 24;
            ny = 136;
            dy = 40;
        }

        zonedata[6] = rely + ygridsize - ((ny + dy) * dividery);
        zonedata[7] = relx + (nx * dividerx);
        zonedata[8] = rely + ygridsize - ((ny   ) * dividery);
        zonedata[9] = relx + ((nx + dx) * dividerx);
        return {y: (zonedata[6] + zonedata[8]) / 2, x: (zonedata[7] + zonedata[9]) / 2};
    } else {
        return {y: (rely + ygridsize / 2), x: (relx + xgridsize / 2)};
    }
}

function decode_grid(result, minx, miny, maxx, maxy, pipe, ccode, m) // for a well-formed result, and integer variables // returns millionths
{
    var relx, rely;
    var orgresult = result;
    var codexlen = result.length - 1;
    var dc = result.indexOf('.');
    if (dc == 1 && codexlen == 5) {
        dc++;
        result = result.charAt(0) + result.charAt(2) + '.' + result.substring(3);
    }
    var codexlow = codexlen - dc;
    var codex = 10 * dc + codexlow;

    divy = smartdiv(m);
    if (divy == 1) {
        divx = xside[dc];
        divy = yside[dc];
    } else divx = Math.floor(nc[dc] / divy);

    if (dc == 4 && divx == xside[4] && divy == yside[4]) {
        result = result.charAt(0) + result.charAt(2) + result.charAt(1) + result.substr(3);
    }

    var d;
    var v = fast_decode(result);

    if (divx != divy && codex > 24) // D==6
    {
        d = decode6(v, divx, divy);
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

    var dividery = Math.floor(( (((ygridsize)) + yside[codexlow] - 1) / yside[codexlow] ));
    var dividerx = Math.floor(( (((xgridsize)) + xside[codexlow] - 1) / xside[codexlow] ));

    var rest = result.substr(dc + 1);

    if (zonedata == 0 || zonedata == 1) {
        var c1 = (zonedata == 0 || rest.length != 3) ? -1 : decode_chars[rest.charCodeAt(0)];
        return addzonedata(rely, relx, dividery * yside[codexlow], dividerx * xside[codexlow], pipe + orgresult.substring(0, dc), ccode, c1, dividerx, dividery);
    }

    // decoderelative (postfix vs rely,relx)
    var difx;
    var dify;
    var nrchars = rest.length;

    if (nrchars == 3) {
        d = decode_triple(rest);
        difx = d.x;
        dify = d.y;
    }
    else {
        if (nrchars == 4)
            rest = rest.charAt(0) + rest.charAt(2) + rest.charAt(1) + rest.charAt(3);
        v = fast_decode(rest);
        difx = Math.floor(v / yside[nrchars]);
        dify = Math.floor(v % yside[nrchars]);
    }

    dify = yside[nrchars] - 1 - dify;

    var cornery = rely + (dify * dividery);
    var cornerx = relx + (difx * dividerx);
    return add2res(cornery, cornerx, dividerx << 2, dividery, 1, pipe + result)
}


function fast_encode(value, nrchars) {
    var result = '';
    while (nrchars-- > 0) {
        result = encode_chars[value % 31] + result;
        value = Math.floor(value / 31);
    }
    return result;
}

function encode_triple(difx, dify) {
    if (dify < 4 * 34)
        return encode_chars[(Math.floor(difx / 28) + 6 * Math.floor(dify / 34))] + fast_encode((difx % 28) * 34 + (dify % 34), 2);
    else
        return encode_chars[Math.floor(difx / 24) + 24] + fast_encode((difx % 24) * 40 + (dify - 136), 2);
}


function encode_grid(m, y, x, codex, minx, miny, maxx, maxy, pipe, ccode) {
    var orgcodex = codex;
    if (codex == 14) codex = 23;
    var dc = Math.floor(codex / 10);
    var codexlow = (codex % 10);

    divy = smartdiv(m);
    if (divy == 1) {
        divx = xside[dc];
        divy = yside[dc];
    } else divx = Math.floor(nc[dc] / divy);


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
        v = encode6(relx, rely, divx, divy);
    }
    else {
        v = relx * divy + (divy - 1 - rely);
    }
    result = fast_encode(v, dc);


    if (dc == 4 && divx == xside[4] && divy == yside[4])
        result = result.charAt(0) + result.charAt(2) + result.charAt(1) + result.charAt(3);

    rely = miny + (rely * ygridsize);
    relx = minx + (relx * xgridsize);

    var dividery = Math.floor((((ygridsize)) + yside[codexlow] - 1) / yside[codexlow]);
    var dividerx = Math.floor((((xgridsize)) + xside[codexlow] - 1) / xside[codexlow]);

    result += '.';

    // encoderelative

    var nrchars = codexlow;

    var difx = x - relx;
    var dify = y - rely;
    var extrax = difx % dividerx;
    var extray = dify % dividery;
    difx = Math.floor(difx / dividerx);
    dify = Math.floor(dify / dividery);

    dify = yside[nrchars] - 1 - dify;
    if (nrchars == 3) {
        result += encode_triple(difx, dify);
    }
    else {

        var postfix = fast_encode((difx) * yside[nrchars] + dify, nrchars);
        if (nrchars == 4) {
            postfix = postfix.charAt(0) + postfix.charAt(2) + postfix.charAt(1) + postfix.charAt(3);
        }
        result += postfix;
    }
    // encoderelative

    if (orgcodex == 14) {
        result = result.charAt(0) + '.' + result.charAt(1) + result.substring(3);
    }

    if (codexlow == 3 || (codex == 44)) if (zonedata == 0 || zonedata == 1) {
        var c1 = (zonedata == 0 || codexlow != 3) ? -1 : decode_chars[result.charCodeAt(dc + 1)];
        addzonedata(rely, relx, dividery * yside[codexlow], dividerx * xside[codexlow], pipe + result.substring(0, dc + 1), ccode, c1, dividerx, dividery)
    }

    return addpostfix(pipe + result, extrax << 2, extray, dividerx << 2, dividery);
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
    [4256, 4257, 4259, 4262, 4260, 4265, 4267, 4268, 4275, 4270, 4272, 4273, 4274, 4276, 4269, 4277, 4278, 4279, 4280, 4281, 4264, 4282, 4283, 4285, 4286, 4287, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // Georgisch
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
    ["Georgisch"],
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


/// substitute characters in str with characters form the specified language (pass asHTML=1 to explicitly HTML-encode characters)
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
            if (c >= 65 && c <= 93)
                c = asc2lan[lan][c - 65];
            else if (c >= 48 && c <= 57)
                c = asc2lan[lan][c + 26 - 48];

            if (asHTML)
                result += '&#' + c + ';';
            else
                result += String.fromCharCode(c);
        }
    }
    return result;
}


function to_ascii(str) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var result = '';
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


/// low-level data access // GLOBAL
var flags, codex, codexlo, codexhi, codexlen;
var iscountry, isnameless, isuseless, pipetype, pipeletter, isSpecialShape22;

function dataSetup(i) {
    flags = data_flags[i];
    codexhi = Math.floor((flags & 31) / 5);
    codexlo = ((flags & 31) % 5) + 1;
    codexlen = codexlo + codexhi;
    codex = 10 * codexhi + codexlo;
    iscountry = (flags & 32);
    isnameless = (flags & 64);
    isuseless = (flags & 512);
    isSpecialShape22 = (flags & 1024);
    pipetype = ((flags >> 5) & 12); // 4=pipe 8=plus 12=star
    if (pipetype == 4)
        pipeletter = encode_chars[(flags >> 11) & 31];
    if (codex == 21 && isnameless == 0) {
        codex++;
        codexlo++;
        codexlen++;
    }
    minmaxSetup(i);
}

function smartdiv(i) {
    return data_special1[i];
}
function isUseless(i) {
    return data_flags[i] & 512;
}
function isNameless(i) {
    return data_flags[i] & 64;
}
function isStarpipe(i) {
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

var first_nameless_record; // GLOBAL
function count_city_coordinates_for_country(samecodex, index, firstcode) {
    var i = index;
    while (i >= firstcode && Codex(i) == samecodex && isNameless(i)) i--;
    i++;
    first_nameless_record = i;
    var e = index;
    while (Codex(e) == samecodex) e++;
    e--;
    return (e - i + 1);
}

// mid-level encode/decode
function encode_nameless(x, y, index, firstcode) {
    var A = count_city_coordinates_for_country(codex, index, firstcode);
    var p = Math.floor(31 / A);
    var r = (31 % A);
    var X = index - first_nameless_record;

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

        var dividerx4 = x_divider(miny, maxy); // 4 times too large
        var dx = Math.floor((4 * (x - minx)) / dividerx4); // div with floating point value
        var extrax4 = (x - minx) * 4 - dx * dividerx4; // mod with floating point value

        var dividery = 90;
        var dy = Math.floor((maxy - y) / dividery);
        var extray = (maxy - y) % dividery;

        var v = storage_offset;
        if (isSpecialShape22)
            v += encode6(dx, SIDE - 1 - dy, xSIDE, SIDE);
        else
            v += (dx * SIDE + dy);

        var result = fast_encode(v, codexlen + 1);

        if (codexlen == 3) {
            result = result.substr(0, 2) + '.' + result.substr(2);
        }
        else if (codexlen == 4) {
            if (codex == 22 && A < 62 && orgSIDE == 961 && !isSpecialShape22)
                result = result.charAt(0) + result.charAt(1) + result.charAt(3) + result.charAt(2) + result.charAt(4);
            if (codex == 13)
                result = result.substr(0, 2) + '.' + result.substr(2);
            else
                result = result.substr(0, 3) + '.' + result.substr(3);
        }

        return addpostfix(result, extrax4, extray, dividerx4, dividery)
    }
}


function decode_nameless(result, firstrec) // returns millionths
{
    if (codex == 22)
        result = result.substr(0, 3) + result.substr(4);
    else
        result = result.substr(0, 2) + result.substr(3);

    var A = count_city_coordinates_for_country(codex, firstrec, firstrec);
    if (A < 2) A = 1; // paranoia

    var p = Math.floor(31 / A);
    var r = (31 % A);
    var v;
    var X = -1;
    var swapletters = 0;

    if (codex != 21 && A <= 31) {
        var offset = decode_chars[result.charCodeAt(0)];

        if (offset < r * (p + 1)) {
            X = Math.floor(offset / (p + 1));
        }
        else {
            swapletters = (p == 1 && codex == 22);
            X = r + Math.floor((offset - (r * (p + 1))) / p);
        }
    }
    else if (codex != 21 && A < 62) {
        X = decode_chars[result.charCodeAt(0)];
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
        v = fast_decode(result);
        X = Math.floor(v / BASEPOWERA);
        v %= BASEPOWERA;
    }

    if (swapletters) {
        if (!isSpecialShape(firstrec + X))
            result = result.charAt(0) + result.charAt(1) + result.charAt(3) + result.charAt(2) + result.charAt(4);
    }

    if (codex != 21 && A <= 31) {
        v = fast_decode(result);
        if (X > 0) {
            v -= ( (X * p + (X < r ? X : r)) * (961 * 961) );
        }
    }
    else if (codex != 21 && A < 62) {
        v = fast_decode(result.substr(1));
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
        var d = decode6(v, xSIDE, SIDE);
        dx = d.x;
        dy = SIDE - 1 - d.y;
    }
    else {
        dy = (v % SIDE);
        dx = Math.floor(v / SIDE);
    }

    if (dx >= xSIDE) // else out-of-range!
        return false;

    var dividerx4 = x_divider(miny, maxy); // 4 times too large!
    var dividery = 90;

    var cornerx = minx + Math.floor((dx * dividerx4) / 4); // FIRST multiply, THEN divide!
    var cornery = maxy - (dy * dividery);
    return add2res(cornery, cornerx, dividerx4, dividery, -1, result)
}


/// returns result, or empty if error
var first_encode_record = -1; // GLOBAL
var results = []; // GLOBAL

function encode_starpipe(y, x, thiscodexlen, thisindex, ccode) {
    var starpipe_result;
    var done = false;
    var STORAGE_START = 0;

    // search back to first pipe star
    var firstindex = thisindex;
    while (isStarpipe(firstindex - 1) && CodexLen(firstindex - 1) == thiscodexlen)
        firstindex--;

    starpipe_result = '';

    for (i = firstindex; ; i++) {
        if (CodexLen(i) != thiscodexlen) {
            return starpipe_result;
        }

        dataSetup(i);
        if (!done) {
            var H = Math.floor((maxy - miny + 89) / 90);
            var xdiv = x_divider(miny, maxy);
            var W = Math.floor(( (maxx - minx) * 4 + (xdiv - 1) ) / xdiv);

            H = 176 * Math.floor((H + 176 - 1) / 176);
            W = 168 * Math.floor((W + 168 - 1) / 168);

            var product = Math.floor(W / 168) * Math.floor(H / 176) * 961 * 31;

            if (pipetype == 8) { // *+
                var GOODROUNDER = codex >= 23 ? (961 * 961 * 31) : (961 * 961);
                product = Math.floor((STORAGE_START + product + GOODROUNDER - 1) / GOODROUNDER) * GOODROUNDER - STORAGE_START;
            }

            if (i == thisindex)
                if (miny <= y && y < maxy && isInRange(x, minx, maxx)) {
                    var dividerx = Math.floor((maxx - minx + W - 1) / W);
                    var vx = Math.floor((x - minx) / dividerx);
                    var extrax = ((x - minx) % dividerx);

                    var dividery = Math.floor((maxy - miny + H - 1) / H);
                    var vy = Math.floor((maxy - y) / dividery);
                    var extray = ((maxy - y) % dividery);

                    var spx = vx % 168;
                    var spy = vy % 176;

                    vx = Math.floor(vx / 168);
                    vy = Math.floor(vy / 176);

                    var value = (vx * Math.floor(H / 176) + vy);

                    starpipe_result = fast_encode(Math.floor(STORAGE_START / (961 * 31)) + value, codexlen - 2);
                    starpipe_result += '.';
                    starpipe_result += encode_triple(spx, spy);

                    if (zonedata == 0 || zonedata == 1) {
                        var c1 = (zonedata == 0) ? -1 : decode_chars[starpipe_result.charCodeAt(starpipe_result.length - 3)];
                        addzonedata(maxy - (vy + 1) * dividery * 176, minx + vx * dividerx * 168, 176 * dividery, 168 * dividerx, starpipe_result.substring(0, starpipe_result.length - 3), ccode, c1, dividerx, dividery);
                    }

                    if (results.length == 0) first_encode_record = i;

                    starpipe_result = addpostfix(starpipe_result, extrax << 2, extray, dividerx << 2, dividery);
                    done = true; // will be returned soon, but look for end of pipes
                }
            STORAGE_START += product;

        } //!done
    }
}

function decode_starpipe(input, firstindex, ccode) {
    var STORAGE_START = 0;
    var thiscodexlen = codexlen;

    var value = fast_decode(input); // decode top (before dot)
    value *= (961 * 31);
    var triple = decode_triple(input.substr(input.length - 3)); // decode bottom 3 chars

    var i;
    for (i = firstindex; ; i++) {
        if (CodexLen(i) != thiscodexlen) {
            return false;
        }
        if (i > firstindex) dataSetup(i);

        var H = Math.floor((maxy - miny + 89) / 90);
        var xdiv = x_divider(miny, maxy);
        var W = Math.floor(( (maxx - minx) * 4 + (xdiv - 1) ) / xdiv);

        H = 176 * Math.floor((H + 176 - 1) / 176);
        W = 168 * Math.floor((W + 168 - 1) / 168);

        var product = Math.floor(W / 168) * Math.floor(H / 176) * 961 * 31;

        if (pipetype == 8) { // *+
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
            /* 1.28 commented out for now while looking into problem feedback
             {
             var c1 = (zonedata==0) ? -1 : decode_chars[input.charCodeAt(input.length-3)];
             var zd=addzonedata(cornery+(triple.y-176)*dividery,cornerx-triple.x*dividerx,176*dividery,168*dividerx,input.substring(0,input.length-3),ccode,c1,dividerx,dividery);
             cornery=zd.y;
             cornerx=zd.x;
             }
             */
            var retval = add2res(cornery, cornerx, dividerx << 2, dividery, -1, input);
            if (retval.x < minx || retval.x >= maxx || retval.y < miny || retval.y > maxy)
                return false;
            return retval;
        }
        STORAGE_START += product;
    }
}


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
            r = 'A' + r.substring(1, rlen - 2) + encode_chars[Math.floor(v / 32)] + encode_chars[v % 32]; // 1.50
        }
        else { /* old way: use A, E and U */
            v = (r.charCodeAt(rlen - 2) - 48) * 10 + (r.charCodeAt(rlen - 1) - 48);
            r = r.substring(0, rlen - 2) + encode_chars[Math.floor(v / 34) + 31] + encode_chars[v % 34]; // v1.50
        }
    }
    return r + rest;
}

var stop_at_encode = -1; // GLOBAL
function master_encode(orgy, orgx, ccode, isrecursive, stop_with_one_result, allowworld, state_override) {
    if (!isrecursive) {
        results.length = 0;
        first_encode_record = -1;
    }
    var first_result_index = results.length;

    if (isNaN(ccode) || ccode < 0 || ccode > ccode_earth) ccode = ccode_earth;
    if (isNaN(orgx)) orgx = 0;
    if (isNaN(orgy)) orgy = 0;
    if (orgy > 90) orgy -= 180; else if (orgy < -90) orgy += 180;
    if (orgx > 179.999999) orgx -= 360; else if (orgx < -180) orgx += 180;

    var from = dataFirstRecord(ccode);
    if (!data_flags[from]) return '';   // 1.27 survive partially filled data_ array
    var upto = dataLastRecord(ccode);

    var y = Math.round(orgy * 1000000);
    var x = Math.round(orgx * 1000000);

    // LIMIT_TO_OUTRECT : make sure it fits the country
    if (ccode != ccode_earth) {
        minmaxSetup(upto); // find encompassing rect
        if (!( miny <= y && y < maxy && isInRange(x, minx, maxx) )) // no fit?
        {
            if (isrecursive)
                return '';
            from = upto + 1; // empty the range
        }
    }

    var i;
    for (i = from; i <= upto; i++) {
        dataSetup(i);
        if (codex < 54) // exlude 54 and 55
        {
            if (miny <= y && y < maxy && isInRange(x, minx, maxx)) {
                var r = '';
                if (results.length == 0) first_encode_record = i;
                if (isuseless && i == upto && StateParent(ccode) >= 0) {
                    //if ( ! isrecursive ) // 1.30 always produce recursive results
                    {
                        master_encode(orgy, orgx, StateParent(ccode), true, stop_with_one_result, allowworld, ccode); // ccode= state override
                    }
                    continue;
                }
                else if (pipetype == 0 && isnameless == 0) {
                    if (isuseless && results.length == first_result_index) {
                        // RESTRICTUSELESS : ignore! nothing was found yet in non-useless records!
                    }
                    else {
                        r = encode_grid(i, y, x, codex, minx, miny, maxx, maxy, '', ccode);
                    }
                }
                else if (pipetype == 4) {
                    r = encode_grid(i, y, x, codex, minx, miny, maxx, maxy, pipeletter, ccode);
                }
                else if (isnameless) { // auto-pipe 21/22
                    r = encode_nameless(x, y, i, from);
                }
                else { // pipe star, pipe plus
                    r = encode_starpipe(y, x, codexlen, i, ccode);
                }

                var rlen = r.length;
                if (rlen > 4) {
                    r = aeu_pack(r);

                    var storecode = ccode;
                    if (typeof state_override != undefined)
                        if (state_override >= 0)
                            storecode = state_override;

                    if (stop_at_encode >= 0 && stop_at_encode == i) {
                        results.length = 0;
                        results[0] = [r, storecode];
                        return results;
                    }

                    results[results.length] = [r, storecode];

                    if (stop_with_one_result)
                        return results;


                }
            } // in rect
        }
    }

    if (allowworld)
        if (!isrecursive)
            if (ccode != ccode_earth)
                return master_encode(orgy, orgx, ccode_earth, true, stop_with_one_result, false, -1);

    if (stop_at_encode >= 0)
        results.length = 0;

    return results;
}


function aeu_unpack(str) // unpack encoded into all-digit (assume str already uppercase!)
{
    var voweled = 0;
    var lastpos = str.length - 1;
    var dotpos = str.indexOf('.');
    if (dotpos < 2 || lastpos < dotpos + 2) return ''; // Error: no dot, or less than 2 letters before dot, or less than 2 letters after dot

    if (str.charAt(0) == 'A') /* V1.50 */
    {
        var v1 = decode_chars[str.charCodeAt(lastpos)];
        if (v1 < 0) v1 = 31;
        var v2 = decode_chars[str.charCodeAt(lastpos - 1)];
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
                var ve = decode_chars[str.charCodeAt(lastpos)];
                if (ve < 0) return '';
                v += ve;
            }
            if (v >= 100) return '';
            voweled = 1;
            str = str.substring(0, lastpos - 1) + encode_chars[Math.floor(v / 10)] + encode_chars[Math.floor(v % 10)];
        }
    }

    if (dotpos < 2 || dotpos > 5) return '';

    for (v = 0; v <= lastpos; v++) if (v != dotpos)
        if (decode_chars[str.charCodeAt(v)] < 0)
            return ''; // bad char!
        else if (voweled && decode_chars[str.charAt(v)] > 9)
            return ''; // nonodigit!


    return str;
}

function master_decode(mapcode, ccode) // returns object with y and x fields, or false
{
    var result;

    var minpos = mapcode.indexOf('-');
    if (minpos > 0) {
        extrapostfix = trim(mapcode.substring(minpos + 1));
        mapcode = mapcode.substring(0, minpos);
    } else {
        extrapostfix = '';
    }

    mapcode = trim(aeu_unpack(mapcode));
    if (mapcode == '')
        return false; // failed to decode!


    var incodexlen = mapcode.length - 1;

    // *** long codes in states are handled by the country
    if (incodexlen >= 9) ccode = ccode_earth;
    else if (incodexlen >= 8 && StateParent(ccode) == ccode_usa) ccode = ccode_usa;
    else if (incodexlen >= 7 && StateParent(ccode) == ccode_ind) ccode = ccode_ind;
    else if (incodexlen >= 8 && StateParent(ccode) == ccode_can) ccode = ccode_can;
    else if (incodexlen >= 8 && StateParent(ccode) == ccode_aus) ccode = ccode_aus;
    else if (incodexlen >= 7 && StateParent(ccode) == ccode_mex) ccode = ccode_mex;
    else if (incodexlen >= 8 && StateParent(ccode) == ccode_bra) ccode = ccode_bra;
    else if (incodexlen >= 8 && StateParent(ccode) == ccode_chn) ccode = ccode_chn;
    else if (incodexlen >= 8 && StateParent(ccode) == ccode_rus) ccode = ccode_rus;

    var from = dataFirstRecord(ccode);
    if (!data_flags[from]) return false; // 1.27 survive partially filled data_ array
    var upto = dataLastRecord(ccode);

    var incodexhi = mapcode.indexOf('.');
    var xdiv8;
    for (i = from; i <= upto; i++) {
        dataSetup(i);
        if (pipetype == 0 && isnameless == 0 && codexlen == incodexlen && codexhi == incodexhi) {
            result = decode_grid(mapcode, minx, miny, maxx, maxy, '', ccode, i);
            // RESTRICTUSELESS
            if (isuseless && result) {
                var fitssomewhere = 0;
                var j;
                for (j = upto - 1; j >= from; j--) { // look in previous rects
                    dataSetup(j);
                    if (isuseless) continue;
                    xdiv8 = x_divider(miny, maxy) / 4; // 1.32 allow extra room, just like for all other results
                    if (miny - 45 <= result.y && result.y < maxy + 45 && isInRange(result.x, minx - xdiv8, maxx + xdiv8)) {
                        fitssomewhere = 1;
                        break;
                    }
                }
                if (!fitssomewhere) result = 0;
            }
            break;
        }
        else if (pipetype == 4 && codexlen + 1 == incodexlen && codexhi + 1 == incodexhi && pipeletter == mapcode.charAt(0)) {
            result = decode_grid(mapcode.substr(1), minx, miny, maxx, maxy, mapcode.substr(0, 1), ccode, i);
            break;
        }
        else if (isnameless && ((codex == 21 && incodexlen == 4 && incodexhi == 2) || (codex == 22 && incodexlen == 5 && incodexhi == 3) || (codex == 13 && incodexlen == 5 && incodexhi == 2))) {
            result = decode_nameless(mapcode, i);
            break;
        }
        else if (pipetype > 4 && incodexlen == incodexhi + 3 && codexlen + 1 == incodexlen) {
            result = decode_starpipe(mapcode, i, ccode);
            break;
        }
    }

    if (result) {
        if (result.x > 180000000) result.x -= 360000000; else if (result.x < -180000000) result.x += 360000000; // 1.33 normalize <-180

        // LIMIT_TO_OUTRECT : make sure it fits the country
        if (ccode != ccode_earth) {
            minmaxSetup(upto); // find encompassing rect
            xdiv8 = x_divider(miny, maxy) / 4; // should be /8 but there's some extra margin
            if (!( miny - 45 <= result.y && result.y < maxy + 45 && isInRange(result.x, minx - xdiv8, maxx + xdiv8) )) { // no fit?
                return false;
            }
        }
    }

    if (result) {
        result.x = result.x / 1000000.0;
        result.y = result.y / 1000000.0;
    }
    return result;
}
