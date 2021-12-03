/**
 *  The CONFIGURATION constant currently holds the data relevant to building image URLs as well as the change key map.
 *  To build an image URL, you will need 3 pieces of data. The base_url, size and file_path. Simply combine them all
 *  and you will have a fully qualified URL. Here’s an example URL:
 *
 *  https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
 *
 *  The configuration constant also contains the list of change keys which can be useful
 *  iif you want to consumes data from the change feed.
 */
export const CONFIGURATIONS = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: ["w300", "w780", "w1280", "original"],
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    profile_sizes: ["w45", "w185", "h632", "original"],
    still_sizes: ["w92", "w185", "w300", "original"],
  },
  change_keys: [
    "adult",
    "air_date",
    "also_known_as",
    "alternative_titles",
    "biography",
    "birthday",
    "budget",
    "cast",
    "certifications",
    "character_names",
    "created_by",
    "crew",
    "deathday",
    "episode",
    "episode_number",
    "episode_run_time",
    "freebase_id",
    "freebase_mid",
    "general",
    "genres",
    "guest_stars",
    "homepage",
    "images",
    "imdb_id",
    "languages",
    "name",
    "network",
    "origin_country",
    "original_name",
    "original_title",
    "overview",
    "parts",
    "place_of_birth",
    "plot_keywords",
    "production_code",
    "production_companies",
    "production_countries",
    "releases",
    "revenue",
    "runtime",
    "season",
    "season_number",
    "season_regular",
    "spoken_languages",
    "status",
    "tagline",
    "title",
    "translations",
    "tvdb_id",
    "tvrage_id",
    "type",
    "video",
    "videos",
  ],
};

// Get the list of countries (ISO 3166-1 tags) used throughout API.
export const COUNTRIES = [
  {
    iso_3166_1: "AD",
    english_name: "Andorra",
  },
  {
    iso_3166_1: "AE",
    english_name: "United Arab Emirates",
  },
  {
    iso_3166_1: "AF",
    english_name: "Afghanistan",
  },
  {
    iso_3166_1: "AG",
    english_name: "Antigua and Barbuda",
  },
  {
    iso_3166_1: "AI",
    english_name: "Anguilla",
  },
  {
    iso_3166_1: "AL",
    english_name: "Albania",
  },
  {
    iso_3166_1: "AM",
    english_name: "Armenia",
  },
  {
    iso_3166_1: "AN",
    english_name: "Netherlands Antilles",
  },
  {
    iso_3166_1: "AO",
    english_name: "Angola",
  },
  {
    iso_3166_1: "AQ",
    english_name: "Antarctica",
  },
  {
    iso_3166_1: "AR",
    english_name: "Argentina",
  },
  {
    iso_3166_1: "AS",
    english_name: "American Samoa",
  },
  {
    iso_3166_1: "AT",
    english_name: "Austria",
  },
  {
    iso_3166_1: "AU",
    english_name: "Australia",
  },
  {
    iso_3166_1: "AW",
    english_name: "Aruba",
  },
  {
    iso_3166_1: "AZ",
    english_name: "Azerbaijan",
  },
  {
    iso_3166_1: "BA",
    english_name: "Bosnia and Herzegovina",
  },
  {
    iso_3166_1: "BB",
    english_name: "Barbados",
  },
  {
    iso_3166_1: "BD",
    english_name: "Bangladesh",
  },
  {
    iso_3166_1: "BE",
    english_name: "Belgium",
  },
  {
    iso_3166_1: "BF",
    english_name: "Burkina Faso",
  },
  {
    iso_3166_1: "BG",
    english_name: "Bulgaria",
  },
  {
    iso_3166_1: "BH",
    english_name: "Bahrain",
  },
  {
    iso_3166_1: "BI",
    english_name: "Burundi",
  },
  {
    iso_3166_1: "BJ",
    english_name: "Benin",
  },
  {
    iso_3166_1: "BM",
    english_name: "Bermuda",
  },
  {
    iso_3166_1: "BN",
    english_name: "Brunei Darussalam",
  },
  {
    iso_3166_1: "BO",
    english_name: "Bolivia",
  },
  {
    iso_3166_1: "BR",
    english_name: "Brazil",
  },
  {
    iso_3166_1: "BS",
    english_name: "Bahamas",
  },
  {
    iso_3166_1: "BT",
    english_name: "Bhutan",
  },
  {
    iso_3166_1: "BV",
    english_name: "Bouvet Island",
  },
  {
    iso_3166_1: "BW",
    english_name: "Botswana",
  },
  {
    iso_3166_1: "BZ",
    english_name: "Belize",
  },
  {
    iso_3166_1: "BY",
    english_name: "Belarus",
  },
  {
    iso_3166_1: "CA",
    english_name: "Canada",
  },
  {
    iso_3166_1: "CC",
    english_name: "Cocos Islands",
  },
  {
    iso_3166_1: "CD",
    english_name: "Congo",
  },
  {
    iso_3166_1: "CF",
    english_name: "Central African Republic",
  },
  {
    iso_3166_1: "CG",
    english_name: "Congo",
  },
  {
    iso_3166_1: "CH",
    english_name: "Switzerland",
  },
  {
    iso_3166_1: "CI",
    english_name: "Cote D'Ivoire",
  },
  {
    iso_3166_1: "CK",
    english_name: "Cook Islands",
  },
  {
    iso_3166_1: "CL",
    english_name: "Chile",
  },
  {
    iso_3166_1: "CM",
    english_name: "Cameroon",
  },
  {
    iso_3166_1: "CN",
    english_name: "China",
  },
  {
    iso_3166_1: "CO",
    english_name: "Colombia",
  },
  {
    iso_3166_1: "CR",
    english_name: "Costa Rica",
  },
  {
    iso_3166_1: "CS",
    english_name: "Serbia and Montenegro",
  },
  {
    iso_3166_1: "CU",
    english_name: "Cuba",
  },
  {
    iso_3166_1: "CV",
    english_name: "Cape Verde",
  },
  {
    iso_3166_1: "CX",
    english_name: "Christmas Island",
  },
  {
    iso_3166_1: "CY",
    english_name: "Cyprus",
  },
  {
    iso_3166_1: "CZ",
    english_name: "Czech Republic",
  },
  {
    iso_3166_1: "DE",
    english_name: "Germany",
  },
  {
    iso_3166_1: "DJ",
    english_name: "Djibouti",
  },
  {
    iso_3166_1: "DK",
    english_name: "Denmark",
  },
  {
    iso_3166_1: "DM",
    english_name: "Dominica",
  },
  {
    iso_3166_1: "DO",
    english_name: "Dominican Republic",
  },
  {
    iso_3166_1: "DZ",
    english_name: "Algeria",
  },
  {
    iso_3166_1: "EC",
    english_name: "Ecuador",
  },
  {
    iso_3166_1: "EE",
    english_name: "Estonia",
  },
  {
    iso_3166_1: "EG",
    english_name: "Egypt",
  },
  {
    iso_3166_1: "EH",
    english_name: "Western Sahara",
  },
  {
    iso_3166_1: "ER",
    english_name: "Eritrea",
  },
  {
    iso_3166_1: "ES",
    english_name: "Spain",
  },
  {
    iso_3166_1: "ET",
    english_name: "Ethiopia",
  },
  {
    iso_3166_1: "FI",
    english_name: "Finland",
  },
  {
    iso_3166_1: "FJ",
    english_name: "Fiji",
  },
  {
    iso_3166_1: "FK",
    english_name: "Falkland Islands",
  },
  {
    iso_3166_1: "RS",
    english_name: "Serbia",
  },
  {
    iso_3166_1: "FM",
    english_name: "Micronesia",
  },
  {
    iso_3166_1: "FO",
    english_name: "Faeroe Islands",
  },
  {
    iso_3166_1: "FR",
    english_name: "France",
  },
  {
    iso_3166_1: "GA",
    english_name: "Gabon",
  },
  {
    iso_3166_1: "GB",
    english_name: "United Kingdom",
  },
  {
    iso_3166_1: "GD",
    english_name: "Grenada",
  },
  {
    iso_3166_1: "GE",
    english_name: "Georgia",
  },
  {
    iso_3166_1: "GF",
    english_name: "French Guiana",
  },
  {
    iso_3166_1: "GH",
    english_name: "Ghana",
  },
  {
    iso_3166_1: "GI",
    english_name: "Gibraltar",
  },
  {
    iso_3166_1: "GL",
    english_name: "Greenland",
  },
  {
    iso_3166_1: "GM",
    english_name: "Gambia",
  },
  {
    iso_3166_1: "GN",
    english_name: "Guinea",
  },
  {
    iso_3166_1: "GP",
    english_name: "Guadaloupe",
  },
  {
    iso_3166_1: "GQ",
    english_name: "Equatorial Guinea",
  },
  {
    iso_3166_1: "GR",
    english_name: "Greece",
  },
  {
    iso_3166_1: "GS",
    english_name: "South Georgia and the South Sandwich Islands",
  },
  {
    iso_3166_1: "GT",
    english_name: "Guatemala",
  },
  {
    iso_3166_1: "GU",
    english_name: "Guam",
  },
  {
    iso_3166_1: "GW",
    english_name: "Guinea-Bissau",
  },
  {
    iso_3166_1: "GY",
    english_name: "Guyana",
  },
  {
    iso_3166_1: "HK",
    english_name: "Hong Kong",
  },
  {
    iso_3166_1: "HM",
    english_name: "Heard and McDonald Islands",
  },
  {
    iso_3166_1: "HN",
    english_name: "Honduras",
  },
  {
    iso_3166_1: "HR",
    english_name: "Croatia",
  },
  {
    iso_3166_1: "HT",
    english_name: "Haiti",
  },
  {
    iso_3166_1: "HU",
    english_name: "Hungary",
  },
  {
    iso_3166_1: "ID",
    english_name: "Indonesia",
  },
  {
    iso_3166_1: "IE",
    english_name: "Ireland",
  },
  {
    iso_3166_1: "IL",
    english_name: "Israel",
  },
  {
    iso_3166_1: "IN",
    english_name: "India",
  },
  {
    iso_3166_1: "IO",
    english_name: "British Indian Ocean Territory",
  },
  {
    iso_3166_1: "IQ",
    english_name: "Iraq",
  },
  {
    iso_3166_1: "IR",
    english_name: "Iran",
  },
  {
    iso_3166_1: "IS",
    english_name: "Iceland",
  },
  {
    iso_3166_1: "IT",
    english_name: "Italy",
  },
  {
    iso_3166_1: "JM",
    english_name: "Jamaica",
  },
  {
    iso_3166_1: "JO",
    english_name: "Jordan",
  },
  {
    iso_3166_1: "JP",
    english_name: "Japan",
  },
  {
    iso_3166_1: "KE",
    english_name: "Kenya",
  },
  {
    iso_3166_1: "KG",
    english_name: "Kyrgyz Republic",
  },
  {
    iso_3166_1: "KH",
    english_name: "Cambodia",
  },
  {
    iso_3166_1: "KI",
    english_name: "Kiribati",
  },
  {
    iso_3166_1: "KM",
    english_name: "Comoros",
  },
  {
    iso_3166_1: "KN",
    english_name: "St. Kitts and Nevis",
  },
  {
    iso_3166_1: "KP",
    english_name: "North Korea",
  },
  {
    iso_3166_1: "KW",
    english_name: "Kuwait",
  },
  {
    iso_3166_1: "KY",
    english_name: "Cayman Islands",
  },
  {
    iso_3166_1: "KZ",
    english_name: "Kazakhstan",
  },
  {
    iso_3166_1: "LA",
    english_name: "Lao People's Democratic Republic",
  },
  {
    iso_3166_1: "LB",
    english_name: "Lebanon",
  },
  {
    iso_3166_1: "LC",
    english_name: "St. Lucia",
  },
  {
    iso_3166_1: "LI",
    english_name: "Liechtenstein",
  },
  {
    iso_3166_1: "LK",
    english_name: "Sri Lanka",
  },
  {
    iso_3166_1: "LR",
    english_name: "Liberia",
  },
  {
    iso_3166_1: "LS",
    english_name: "Lesotho",
  },
  {
    iso_3166_1: "LT",
    english_name: "Lithuania",
  },
  {
    iso_3166_1: "LU",
    english_name: "Luxembourg",
  },
  {
    iso_3166_1: "LV",
    english_name: "Latvia",
  },
  {
    iso_3166_1: "LY",
    english_name: "Libyan Arab Jamahiriya",
  },
  {
    iso_3166_1: "MA",
    english_name: "Morocco",
  },
  {
    iso_3166_1: "MC",
    english_name: "Monaco",
  },
  {
    iso_3166_1: "MD",
    english_name: "Moldova",
  },
  {
    iso_3166_1: "MG",
    english_name: "Madagascar",
  },
  {
    iso_3166_1: "MH",
    english_name: "Marshall Islands",
  },
  {
    iso_3166_1: "MK",
    english_name: "Macedonia",
  },
  {
    iso_3166_1: "ML",
    english_name: "Mali",
  },
  {
    iso_3166_1: "MM",
    english_name: "Myanmar",
  },
  {
    iso_3166_1: "MN",
    english_name: "Mongolia",
  },
  {
    iso_3166_1: "MO",
    english_name: "Macao",
  },
  {
    iso_3166_1: "MP",
    english_name: "Northern Mariana Islands",
  },
  {
    iso_3166_1: "MQ",
    english_name: "Martinique",
  },
  {
    iso_3166_1: "MR",
    english_name: "Mauritania",
  },
  {
    iso_3166_1: "MS",
    english_name: "Montserrat",
  },
  {
    iso_3166_1: "MT",
    english_name: "Malta",
  },
  {
    iso_3166_1: "MU",
    english_name: "Mauritius",
  },
  {
    iso_3166_1: "MV",
    english_name: "Maldives",
  },
  {
    iso_3166_1: "MW",
    english_name: "Malawi",
  },
  {
    iso_3166_1: "MX",
    english_name: "Mexico",
  },
  {
    iso_3166_1: "MY",
    english_name: "Malaysia",
  },
  {
    iso_3166_1: "MZ",
    english_name: "Mozambique",
  },
  {
    iso_3166_1: "NA",
    english_name: "Namibia",
  },
  {
    iso_3166_1: "NC",
    english_name: "New Caledonia",
  },
  {
    iso_3166_1: "NE",
    english_name: "Niger",
  },
  {
    iso_3166_1: "NF",
    english_name: "Norfolk Island",
  },
  {
    iso_3166_1: "NG",
    english_name: "Nigeria",
  },
  {
    iso_3166_1: "ME",
    english_name: "Montenegro",
  },
  {
    iso_3166_1: "NI",
    english_name: "Nicaragua",
  },
  {
    iso_3166_1: "NL",
    english_name: "Netherlands",
  },
  {
    iso_3166_1: "NO",
    english_name: "Norway",
  },
  {
    iso_3166_1: "NP",
    english_name: "Nepal",
  },
  {
    iso_3166_1: "NR",
    english_name: "Nauru",
  },
  {
    iso_3166_1: "NU",
    english_name: "Niue",
  },
  {
    iso_3166_1: "NZ",
    english_name: "New Zealand",
  },
  {
    iso_3166_1: "OM",
    english_name: "Oman",
  },
  {
    iso_3166_1: "PA",
    english_name: "Panama",
  },
  {
    iso_3166_1: "PE",
    english_name: "Peru",
  },
  {
    iso_3166_1: "PF",
    english_name: "French Polynesia",
  },
  {
    iso_3166_1: "PG",
    english_name: "Papua New Guinea",
  },
  {
    iso_3166_1: "PH",
    english_name: "Philippines",
  },
  {
    iso_3166_1: "YU",
    english_name: "Yugoslavia",
  },
  {
    iso_3166_1: "XK",
    english_name: "Kosovo",
  },
  {
    iso_3166_1: "XC",
    english_name: "Czechoslovakia",
  },
  {
    iso_3166_1: "PK",
    english_name: "Pakistan",
  },
  {
    iso_3166_1: "PL",
    english_name: "Poland",
  },
  {
    iso_3166_1: "PM",
    english_name: "St. Pierre and Miquelon",
  },
  {
    iso_3166_1: "PN",
    english_name: "Pitcairn Island",
  },
  {
    iso_3166_1: "PR",
    english_name: "Puerto Rico",
  },
  {
    iso_3166_1: "PS",
    english_name: "Palestinian Territory",
  },
  {
    iso_3166_1: "PT",
    english_name: "Portugal",
  },
  {
    iso_3166_1: "PW",
    english_name: "Palau",
  },
  {
    iso_3166_1: "PY",
    english_name: "Paraguay",
  },
  {
    iso_3166_1: "QA",
    english_name: "Qatar",
  },
  {
    iso_3166_1: "RE",
    english_name: "Reunion",
  },
  {
    iso_3166_1: "RO",
    english_name: "Romania",
  },
  {
    iso_3166_1: "RU",
    english_name: "Russia",
  },
  {
    iso_3166_1: "RW",
    english_name: "Rwanda",
  },
  {
    iso_3166_1: "SA",
    english_name: "Saudi Arabia",
  },
  {
    iso_3166_1: "SB",
    english_name: "Solomon Islands",
  },
  {
    iso_3166_1: "SC",
    english_name: "Seychelles",
  },
  {
    iso_3166_1: "SD",
    english_name: "Sudan",
  },
  {
    iso_3166_1: "SE",
    english_name: "Sweden",
  },
  {
    iso_3166_1: "SG",
    english_name: "Singapore",
  },
  {
    iso_3166_1: "SH",
    english_name: "St. Helena",
  },
  {
    iso_3166_1: "SI",
    english_name: "Slovenia",
  },
  {
    iso_3166_1: "SJ",
    english_name: "Svalbard & Jan Mayen Islands",
  },
  {
    iso_3166_1: "SK",
    english_name: "Slovakia",
  },
  {
    iso_3166_1: "SL",
    english_name: "Sierra Leone",
  },
  {
    iso_3166_1: "SM",
    english_name: "San Marino",
  },
  {
    iso_3166_1: "SN",
    english_name: "Senegal",
  },
  {
    iso_3166_1: "SO",
    english_name: "Somalia",
  },
  {
    iso_3166_1: "SR",
    english_name: "Suriname",
  },
  {
    iso_3166_1: "ST",
    english_name: "Sao Tome and Principe",
  },
  {
    iso_3166_1: "SV",
    english_name: "El Salvador",
  },
  {
    iso_3166_1: "SY",
    english_name: "Syrian Arab Republic",
  },
  {
    iso_3166_1: "SZ",
    english_name: "Swaziland",
  },
  {
    iso_3166_1: "TC",
    english_name: "Turks and Caicos Islands",
  },
  {
    iso_3166_1: "TD",
    english_name: "Chad",
  },
  {
    iso_3166_1: "TF",
    english_name: "French Southern Territories",
  },
  {
    iso_3166_1: "TG",
    english_name: "Togo",
  },
  {
    iso_3166_1: "TH",
    english_name: "Thailand",
  },
  {
    iso_3166_1: "TJ",
    english_name: "Tajikistan",
  },
  {
    iso_3166_1: "TK",
    english_name: "Tokelau",
  },
  {
    iso_3166_1: "TL",
    english_name: "Timor-Leste",
  },
  {
    iso_3166_1: "TM",
    english_name: "Turkmenistan",
  },
  {
    iso_3166_1: "TN",
    english_name: "Tunisia",
  },
  {
    iso_3166_1: "TO",
    english_name: "Tonga",
  },
  {
    iso_3166_1: "TR",
    english_name: "Turkey",
  },
  {
    iso_3166_1: "TT",
    english_name: "Trinidad and Tobago",
  },
  {
    iso_3166_1: "TV",
    english_name: "Tuvalu",
  },
  {
    iso_3166_1: "TW",
    english_name: "Taiwan",
  },
  {
    iso_3166_1: "TZ",
    english_name: "Tanzania",
  },
  {
    iso_3166_1: "UA",
    english_name: "Ukraine",
  },
  {
    iso_3166_1: "UG",
    english_name: "Uganda",
  },
  {
    iso_3166_1: "UM",
    english_name: "United States Minor Outlying Islands",
  },
  {
    iso_3166_1: "US",
    english_name: "United States of America",
  },
  {
    iso_3166_1: "UY",
    english_name: "Uruguay",
  },
  {
    iso_3166_1: "UZ",
    english_name: "Uzbekistan",
  },
  {
    iso_3166_1: "VA",
    english_name: "Holy See",
  },
  {
    iso_3166_1: "VC",
    english_name: "St. Vincent and the Grenadines",
  },
  {
    iso_3166_1: "VE",
    english_name: "Venezuela",
  },
  {
    iso_3166_1: "VG",
    english_name: "British Virgin Islands",
  },
  {
    iso_3166_1: "VI",
    english_name: "US Virgin Islands",
  },
  {
    iso_3166_1: "VN",
    english_name: "Vietnam",
  },
  {
    iso_3166_1: "VU",
    english_name: "Vanuatu",
  },
  {
    iso_3166_1: "WF",
    english_name: "Wallis and Futuna Islands",
  },
  {
    iso_3166_1: "WS",
    english_name: "Samoa",
  },
  {
    iso_3166_1: "YE",
    english_name: "Yemen",
  },
  {
    iso_3166_1: "YT",
    english_name: "Mayotte",
  },
  {
    iso_3166_1: "ZA",
    english_name: "South Africa",
  },
  {
    iso_3166_1: "ZM",
    english_name: "Zambia",
  },
  {
    iso_3166_1: "ZW",
    english_name: "Zimbabwe",
  },
  {
    iso_3166_1: "KR",
    english_name: "South Korea",
  },
  {
    iso_3166_1: "XG",
    english_name: "East Germany",
  },
  {
    iso_3166_1: "SU",
    english_name: "Soviet Union",
  },
  {
    iso_3166_1: "SS",
    english_name: "South Sudan",
  },
];

// Get the list of languages (ISO 639-1 tags) used throughout API.
export const LANGUAGES = [
  {
    iso_639_1: "xx",
    english_name: "No Language",
    name: "No Language",
  },
  {
    iso_639_1: "aa",
    english_name: "Afar",
    name: "",
  },
  {
    iso_639_1: "af",
    english_name: "Afrikaans",
    name: "Afrikaans",
  },
  {
    iso_639_1: "ak",
    english_name: "Akan",
    name: "",
  },
  {
    iso_639_1: "an",
    english_name: "Aragonese",
    name: "",
  },
  {
    iso_639_1: "as",
    english_name: "Assamese",
    name: "",
  },
  {
    iso_639_1: "av",
    english_name: "Avaric",
    name: "",
  },
  {
    iso_639_1: "ae",
    english_name: "Avestan",
    name: "",
  },
  {
    iso_639_1: "ay",
    english_name: "Aymara",
    name: "",
  },
  {
    iso_639_1: "az",
    english_name: "Azerbaijani",
    name: "Azərbaycan",
  },
  {
    iso_639_1: "ba",
    english_name: "Bashkir",
    name: "",
  },
  {
    iso_639_1: "bm",
    english_name: "Bambara",
    name: "Bamanankan",
  },
  {
    iso_639_1: "bi",
    english_name: "Bislama",
    name: "",
  },
  {
    iso_639_1: "bo",
    english_name: "Tibetan",
    name: "",
  },
  {
    iso_639_1: "br",
    english_name: "Breton",
    name: "",
  },
  {
    iso_639_1: "ca",
    english_name: "Catalan",
    name: "Català",
  },
  {
    iso_639_1: "cs",
    english_name: "Czech",
    name: "Český",
  },
  {
    iso_639_1: "ce",
    english_name: "Chechen",
    name: "",
  },
  {
    iso_639_1: "cu",
    english_name: "Slavic",
    name: "",
  },
  {
    iso_639_1: "cv",
    english_name: "Chuvash",
    name: "",
  },
  {
    iso_639_1: "kw",
    english_name: "Cornish",
    name: "",
  },
  {
    iso_639_1: "co",
    english_name: "Corsican",
    name: "",
  },
  {
    iso_639_1: "cr",
    english_name: "Cree",
    name: "",
  },
  {
    iso_639_1: "cy",
    english_name: "Welsh",
    name: "Cymraeg",
  },
  {
    iso_639_1: "da",
    english_name: "Danish",
    name: "Dansk",
  },
  {
    iso_639_1: "de",
    english_name: "German",
    name: "Deutsch",
  },
  {
    iso_639_1: "dv",
    english_name: "Divehi",
    name: "",
  },
  {
    iso_639_1: "dz",
    english_name: "Dzongkha",
    name: "",
  },
  {
    iso_639_1: "eo",
    english_name: "Esperanto",
    name: "Esperanto",
  },
  {
    iso_639_1: "et",
    english_name: "Estonian",
    name: "Eesti",
  },
  {
    iso_639_1: "eu",
    english_name: "Basque",
    name: "euskera",
  },
  {
    iso_639_1: "fo",
    english_name: "Faroese",
    name: "",
  },
  {
    iso_639_1: "fj",
    english_name: "Fijian",
    name: "",
  },
  {
    iso_639_1: "fi",
    english_name: "Finnish",
    name: "suomi",
  },
  {
    iso_639_1: "fr",
    english_name: "French",
    name: "Français",
  },
  {
    iso_639_1: "fy",
    english_name: "Frisian",
    name: "",
  },
  {
    iso_639_1: "ff",
    english_name: "Fulah",
    name: "Fulfulde",
  },
  {
    iso_639_1: "gd",
    english_name: "Gaelic",
    name: "",
  },
  {
    iso_639_1: "ga",
    english_name: "Irish",
    name: "Gaeilge",
  },
  {
    iso_639_1: "gl",
    english_name: "Gallegan",
    name: "Galego",
  },
  {
    iso_639_1: "gv",
    english_name: "Manx",
    name: "",
  },
  {
    iso_639_1: "gn",
    english_name: "Guarani",
    name: "",
  },
  {
    iso_639_1: "gu",
    english_name: "Gujarati",
    name: "",
  },
  {
    iso_639_1: "ht",
    english_name: "Haitian; Haitian Creole",
    name: "",
  },
  {
    iso_639_1: "ha",
    english_name: "Hausa",
    name: "Hausa",
  },
  {
    iso_639_1: "sh",
    english_name: "Serbo-Croatian",
    name: "",
  },
  {
    iso_639_1: "hz",
    english_name: "Herero",
    name: "",
  },
  {
    iso_639_1: "ho",
    english_name: "Hiri Motu",
    name: "",
  },
  {
    iso_639_1: "hr",
    english_name: "Croatian",
    name: "Hrvatski",
  },
  {
    iso_639_1: "hu",
    english_name: "Hungarian",
    name: "Magyar",
  },
  {
    iso_639_1: "ig",
    english_name: "Igbo",
    name: "",
  },
  {
    iso_639_1: "io",
    english_name: "Ido",
    name: "",
  },
  {
    iso_639_1: "ii",
    english_name: "Yi",
    name: "",
  },
  {
    iso_639_1: "iu",
    english_name: "Inuktitut",
    name: "",
  },
  {
    iso_639_1: "ie",
    english_name: "Interlingue",
    name: "",
  },
  {
    iso_639_1: "ia",
    english_name: "Interlingua",
    name: "",
  },
  {
    iso_639_1: "id",
    english_name: "Indonesian",
    name: "Bahasa indonesia",
  },
  {
    iso_639_1: "ik",
    english_name: "Inupiaq",
    name: "",
  },
  {
    iso_639_1: "is",
    english_name: "Icelandic",
    name: "Íslenska",
  },
  {
    iso_639_1: "it",
    english_name: "Italian",
    name: "Italiano",
  },
  {
    iso_639_1: "jv",
    english_name: "Javanese",
    name: "",
  },
  {
    iso_639_1: "ja",
    english_name: "Japanese",
    name: "日本語",
  },
  {
    iso_639_1: "kl",
    english_name: "Kalaallisut",
    name: "",
  },
  {
    iso_639_1: "kn",
    english_name: "Kannada",
    name: "?????",
  },
  {
    iso_639_1: "ks",
    english_name: "Kashmiri",
    name: "",
  },
  {
    iso_639_1: "kr",
    english_name: "Kanuri",
    name: "",
  },
  {
    iso_639_1: "kk",
    english_name: "Kazakh",
    name: "қазақ",
  },
  {
    iso_639_1: "km",
    english_name: "Khmer",
    name: "",
  },
  {
    iso_639_1: "ki",
    english_name: "Kikuyu",
    name: "",
  },
  {
    iso_639_1: "rw",
    english_name: "Kinyarwanda",
    name: "Kinyarwanda",
  },
  {
    iso_639_1: "ky",
    english_name: "Kirghiz",
    name: "??????",
  },
  {
    iso_639_1: "kv",
    english_name: "Komi",
    name: "",
  },
  {
    iso_639_1: "kg",
    english_name: "Kongo",
    name: "",
  },
  {
    iso_639_1: "ko",
    english_name: "Korean",
    name: "한국어/조선말",
  },
  {
    iso_639_1: "kj",
    english_name: "Kuanyama",
    name: "",
  },
  {
    iso_639_1: "ku",
    english_name: "Kurdish",
    name: "",
  },
  {
    iso_639_1: "lo",
    english_name: "Lao",
    name: "",
  },
  {
    iso_639_1: "la",
    english_name: "Latin",
    name: "Latin",
  },
  {
    iso_639_1: "lv",
    english_name: "Latvian",
    name: "Latviešu",
  },
  {
    iso_639_1: "li",
    english_name: "Limburgish",
    name: "",
  },
  {
    iso_639_1: "ln",
    english_name: "Lingala",
    name: "",
  },
  {
    iso_639_1: "lt",
    english_name: "Lithuanian",
    name: "Lietuvikai",
  },
  {
    iso_639_1: "lb",
    english_name: "Letzeburgesch",
    name: "",
  },
  {
    iso_639_1: "lu",
    english_name: "Luba-Katanga",
    name: "",
  },
  {
    iso_639_1: "lg",
    english_name: "Ganda",
    name: "",
  },
  {
    iso_639_1: "mh",
    english_name: "Marshall",
    name: "",
  },
  {
    iso_639_1: "ml",
    english_name: "Malayalam",
    name: "",
  },
  {
    iso_639_1: "mr",
    english_name: "Marathi",
    name: "",
  },
  {
    iso_639_1: "mg",
    english_name: "Malagasy",
    name: "",
  },
  {
    iso_639_1: "mt",
    english_name: "Maltese",
    name: "Malti",
  },
  {
    iso_639_1: "mo",
    english_name: "Moldavian",
    name: "",
  },
  {
    iso_639_1: "mn",
    english_name: "Mongolian",
    name: "",
  },
  {
    iso_639_1: "mi",
    english_name: "Maori",
    name: "",
  },
  {
    iso_639_1: "ms",
    english_name: "Malay",
    name: "Bahasa melayu",
  },
  {
    iso_639_1: "my",
    english_name: "Burmese",
    name: "",
  },
  {
    iso_639_1: "na",
    english_name: "Nauru",
    name: "",
  },
  {
    iso_639_1: "nv",
    english_name: "Navajo",
    name: "",
  },
  {
    iso_639_1: "nr",
    english_name: "Ndebele",
    name: "",
  },
  {
    iso_639_1: "nd",
    english_name: "Ndebele",
    name: "",
  },
  {
    iso_639_1: "ng",
    english_name: "Ndonga",
    name: "",
  },
  {
    iso_639_1: "ne",
    english_name: "Nepali",
    name: "",
  },
  {
    iso_639_1: "nl",
    english_name: "Dutch",
    name: "Nederlands",
  },
  {
    iso_639_1: "nn",
    english_name: "Norwegian Nynorsk",
    name: "",
  },
  {
    iso_639_1: "nb",
    english_name: "Norwegian Bokmål",
    name: "Bokmål",
  },
  {
    iso_639_1: "no",
    english_name: "Norwegian",
    name: "Norsk",
  },
  {
    iso_639_1: "ny",
    english_name: "Chichewa; Nyanja",
    name: "",
  },
  {
    iso_639_1: "oc",
    english_name: "Occitan",
    name: "",
  },
  {
    iso_639_1: "oj",
    english_name: "Ojibwa",
    name: "",
  },
  {
    iso_639_1: "or",
    english_name: "Oriya",
    name: "",
  },
  {
    iso_639_1: "om",
    english_name: "Oromo",
    name: "",
  },
  {
    iso_639_1: "os",
    english_name: "Ossetian; Ossetic",
    name: "",
  },
  {
    iso_639_1: "pi",
    english_name: "Pali",
    name: "",
  },
  {
    iso_639_1: "pl",
    english_name: "Polish",
    name: "Polski",
  },
  {
    iso_639_1: "pt",
    english_name: "Portuguese",
    name: "Português",
  },
  {
    iso_639_1: "qu",
    english_name: "Quechua",
    name: "",
  },
  {
    iso_639_1: "rm",
    english_name: "Raeto-Romance",
    name: "",
  },
  {
    iso_639_1: "ro",
    english_name: "Romanian",
    name: "Română",
  },
  {
    iso_639_1: "rn",
    english_name: "Rundi",
    name: "Kirundi",
  },
  {
    iso_639_1: "ru",
    english_name: "Russian",
    name: "Pусский",
  },
  {
    iso_639_1: "sg",
    english_name: "Sango",
    name: "",
  },
  {
    iso_639_1: "sa",
    english_name: "Sanskrit",
    name: "",
  },
  {
    iso_639_1: "si",
    english_name: "Sinhalese",
    name: "",
  },
  {
    iso_639_1: "sk",
    english_name: "Slovak",
    name: "Slovenčina",
  },
  {
    iso_639_1: "sl",
    english_name: "Slovenian",
    name: "Slovenščina",
  },
  {
    iso_639_1: "se",
    english_name: "Northern Sami",
    name: "",
  },
  {
    iso_639_1: "sm",
    english_name: "Samoan",
    name: "",
  },
  {
    iso_639_1: "sn",
    english_name: "Shona",
    name: "",
  },
  {
    iso_639_1: "sd",
    english_name: "Sindhi",
    name: "",
  },
  {
    iso_639_1: "so",
    english_name: "Somali",
    name: "Somali",
  },
  {
    iso_639_1: "st",
    english_name: "Sotho",
    name: "",
  },
  {
    iso_639_1: "es",
    english_name: "Spanish",
    name: "Español",
  },
  {
    iso_639_1: "sq",
    english_name: "Albanian",
    name: "shqip",
  },
  {
    iso_639_1: "sc",
    english_name: "Sardinian",
    name: "",
  },
  {
    iso_639_1: "sr",
    english_name: "Serbian",
    name: "Srpski",
  },
  {
    iso_639_1: "ss",
    english_name: "Swati",
    name: "",
  },
  {
    iso_639_1: "su",
    english_name: "Sundanese",
    name: "",
  },
  {
    iso_639_1: "sw",
    english_name: "Swahili",
    name: "Kiswahili",
  },
  {
    iso_639_1: "sv",
    english_name: "Swedish",
    name: "svenska",
  },
  {
    iso_639_1: "ty",
    english_name: "Tahitian",
    name: "",
  },
  {
    iso_639_1: "ta",
    english_name: "Tamil",
    name: "தமிழ்",
  },
  {
    iso_639_1: "tt",
    english_name: "Tatar",
    name: "",
  },
  {
    iso_639_1: "te",
    english_name: "Telugu",
    name: "తెలుగు",
  },
  {
    iso_639_1: "tg",
    english_name: "Tajik",
    name: "",
  },
  {
    iso_639_1: "tl",
    english_name: "Tagalog",
    name: "",
  },
  {
    iso_639_1: "th",
    english_name: "Thai",
    name: "ภาษาไทย",
  },
  {
    iso_639_1: "ti",
    english_name: "Tigrinya",
    name: "",
  },
  {
    iso_639_1: "to",
    english_name: "Tonga",
    name: "",
  },
  {
    iso_639_1: "tn",
    english_name: "Tswana",
    name: "",
  },
  {
    iso_639_1: "ts",
    english_name: "Tsonga",
    name: "",
  },
  {
    iso_639_1: "tk",
    english_name: "Turkmen",
    name: "",
  },
  {
    iso_639_1: "tr",
    english_name: "Turkish",
    name: "Türkçe",
  },
  {
    iso_639_1: "tw",
    english_name: "Twi",
    name: "",
  },
  {
    iso_639_1: "ug",
    english_name: "Uighur",
    name: "",
  },
  {
    iso_639_1: "uk",
    english_name: "Ukrainian",
    name: "Український",
  },
  {
    iso_639_1: "ur",
    english_name: "Urdu",
    name: "اردو",
  },
  {
    iso_639_1: "uz",
    english_name: "Uzbek",
    name: "ozbek",
  },
  {
    iso_639_1: "ve",
    english_name: "Venda",
    name: "",
  },
  {
    iso_639_1: "vi",
    english_name: "Vietnamese",
    name: "Tiếng Việt",
  },
  {
    iso_639_1: "vo",
    english_name: "Volapük",
    name: "",
  },
  {
    iso_639_1: "wa",
    english_name: "Walloon",
    name: "",
  },
  {
    iso_639_1: "wo",
    english_name: "Wolof",
    name: "Wolof",
  },
  {
    iso_639_1: "xh",
    english_name: "Xhosa",
    name: "",
  },
  {
    iso_639_1: "yi",
    english_name: "Yiddish",
    name: "",
  },
  {
    iso_639_1: "za",
    english_name: "Zhuang",
    name: "",
  },
  {
    iso_639_1: "zu",
    english_name: "Zulu",
    name: "isiZulu",
  },
  {
    iso_639_1: "ab",
    english_name: "Abkhazian",
    name: "",
  },
  {
    iso_639_1: "zh",
    english_name: "Mandarin",
    name: "普通话",
  },
  {
    iso_639_1: "ps",
    english_name: "Pushto",
    name: "پښتو",
  },
  {
    iso_639_1: "am",
    english_name: "Amharic",
    name: "",
  },
  {
    iso_639_1: "ar",
    english_name: "Arabic",
    name: "العربية",
  },
  {
    iso_639_1: "bg",
    english_name: "Bulgarian",
    name: "български език",
  },
  {
    iso_639_1: "cn",
    english_name: "Cantonese",
    name: "广州话 / 廣州話",
  },
  {
    iso_639_1: "mk",
    english_name: "Macedonian",
    name: "",
  },
  {
    iso_639_1: "el",
    english_name: "Greek",
    name: "ελληνικά",
  },
  {
    iso_639_1: "fa",
    english_name: "Persian",
    name: "فارسی",
  },
  {
    iso_639_1: "he",
    english_name: "Hebrew",
    name: "עִבְרִית",
  },
  {
    iso_639_1: "hi",
    english_name: "Hindi",
    name: "हिन्दी",
  },
  {
    iso_639_1: "hy",
    english_name: "Armenian",
    name: "",
  },
  {
    iso_639_1: "en",
    english_name: "English",
    name: "English",
  },
  {
    iso_639_1: "ee",
    english_name: "Ewe",
    name: "Èʋegbe",
  },
  {
    iso_639_1: "ka",
    english_name: "Georgian",
    name: "ქართული",
  },
  {
    iso_639_1: "pa",
    english_name: "Punjabi",
    name: "ਪੰਜਾਬੀ",
  },
  {
    iso_639_1: "bn",
    english_name: "Bengali",
    name: "বাংলা",
  },
  {
    iso_639_1: "bs",
    english_name: "Bosnian",
    name: "Bosanski",
  },
  {
    iso_639_1: "ch",
    english_name: "Chamorro",
    name: "Finu' Chamorro",
  },
  {
    iso_639_1: "be",
    english_name: "Belarusian",
    name: "беларуская мова",
  },
];

// Get the list of timezones used throughout API.
export const TIMEZONES = [
  {
    iso_3166_1: "AD",
    zones: ["Europe/Andorra"],
  },
  {
    iso_3166_1: "AE",
    zones: ["Asia/Dubai"],
  },
  {
    iso_3166_1: "AF",
    zones: ["Asia/Kabul"],
  },
  {
    iso_3166_1: "AG",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "AI",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "AL",
    zones: ["Europe/Tirane"],
  },
  {
    iso_3166_1: "AM",
    zones: ["Asia/Yerevan"],
  },
  {
    iso_3166_1: "AO",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "AQ",
    zones: [
      "Antarctica/Casey",
      "Antarctica/Davis",
      "Antarctica/DumontDUrville",
      "Antarctica/Mawson",
      "Antarctica/Palmer",
      "Antarctica/Rothera",
      "Antarctica/Syowa",
      "Antarctica/Troll",
      "Antarctica/Vostok",
      "Pacific/Auckland",
    ],
  },
  {
    iso_3166_1: "AR",
    zones: [
      "America/Argentina/Buenos_Aires",
      "America/Argentina/Cordoba",
      "America/Argentina/Salta",
      "America/Argentina/Jujuy",
      "America/Argentina/Tucuman",
      "America/Argentina/Catamarca",
      "America/Argentina/La_Rioja",
      "America/Argentina/San_Juan",
      "America/Argentina/Mendoza",
      "America/Argentina/San_Luis",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Ushuaia",
    ],
  },
  {
    iso_3166_1: "AS",
    zones: ["Pacific/Pago_Pago"],
  },
  {
    iso_3166_1: "AT",
    zones: ["Europe/Vienna"],
  },
  {
    iso_3166_1: "AU",
    zones: [
      "Australia/Lord_Howe",
      "Antarctica/Macquarie",
      "Australia/Hobart",
      "Australia/Currie",
      "Australia/Melbourne",
      "Australia/Sydney",
      "Australia/Broken_Hill",
      "Australia/Brisbane",
      "Australia/Lindeman",
      "Australia/Adelaide",
      "Australia/Darwin",
      "Australia/Perth",
      "Australia/Eucla",
    ],
  },
  {
    iso_3166_1: "AW",
    zones: ["America/Curacao"],
  },
  {
    iso_3166_1: "AX",
    zones: ["Europe/Helsinki"],
  },
  {
    iso_3166_1: "AZ",
    zones: ["Asia/Baku"],
  },
  {
    iso_3166_1: "BA",
    zones: ["Europe/Belgrade"],
  },
  {
    iso_3166_1: "BB",
    zones: ["America/Barbados"],
  },
  {
    iso_3166_1: "BD",
    zones: ["Asia/Dhaka"],
  },
  {
    iso_3166_1: "BE",
    zones: ["Europe/Brussels"],
  },
  {
    iso_3166_1: "BF",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "BG",
    zones: ["Europe/Sofia"],
  },
  {
    iso_3166_1: "BH",
    zones: ["Asia/Qatar"],
  },
  {
    iso_3166_1: "BI",
    zones: ["Africa/Maputo"],
  },
  {
    iso_3166_1: "BJ",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "BL",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "BM",
    zones: ["Atlantic/Bermuda"],
  },
  {
    iso_3166_1: "BN",
    zones: ["Asia/Brunei"],
  },
  {
    iso_3166_1: "BO",
    zones: ["America/La_Paz"],
  },
  {
    iso_3166_1: "BQ",
    zones: ["America/Curacao"],
  },
  {
    iso_3166_1: "BR",
    zones: [
      "America/Noronha",
      "America/Belem",
      "America/Fortaleza",
      "America/Recife",
      "America/Araguaina",
      "America/Maceio",
      "America/Bahia",
      "America/Sao_Paulo",
      "America/Campo_Grande",
      "America/Cuiaba",
      "America/Santarem",
      "America/Porto_Velho",
      "America/Boa_Vista",
      "America/Manaus",
      "America/Eirunepe",
      "America/Rio_Branco",
    ],
  },
  {
    iso_3166_1: "BS",
    zones: ["America/Nassau"],
  },
  {
    iso_3166_1: "BT",
    zones: ["Asia/Thimphu"],
  },
  {
    iso_3166_1: "BV",
    zones: [],
  },
  {
    iso_3166_1: "BW",
    zones: ["Africa/Maputo"],
  },
  {
    iso_3166_1: "BY",
    zones: ["Europe/Minsk"],
  },
  {
    iso_3166_1: "BZ",
    zones: ["America/Belize"],
  },
  {
    iso_3166_1: "CA",
    zones: [
      "America/St_Johns",
      "America/Halifax",
      "America/Glace_Bay",
      "America/Moncton",
      "America/Goose_Bay",
      "America/Blanc-Sablon",
      "America/Toronto",
      "America/Nipigon",
      "America/Thunder_Bay",
      "America/Iqaluit",
      "America/Pangnirtung",
      "America/Atikokan",
      "America/Winnipeg",
      "America/Rainy_River",
      "America/Resolute",
      "America/Rankin_Inlet",
      "America/Regina",
      "America/Swift_Current",
      "America/Edmonton",
      "America/Cambridge_Bay",
      "America/Yellowknife",
      "America/Inuvik",
      "America/Creston",
      "America/Dawson_Creek",
      "America/Fort_Nelson",
      "America/Vancouver",
      "America/Whitehorse",
      "America/Dawson",
    ],
  },
  {
    iso_3166_1: "CC",
    zones: ["Indian/Cocos"],
  },
  {
    iso_3166_1: "CD",
    zones: ["Africa/Maputo", "Africa/Lagos"],
  },
  {
    iso_3166_1: "CF",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "CG",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "CH",
    zones: ["Europe/Zurich"],
  },
  {
    iso_3166_1: "CI",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "CK",
    zones: ["Pacific/Rarotonga"],
  },
  {
    iso_3166_1: "CL",
    zones: ["America/Santiago", "America/Punta_Arenas", "Pacific/Easter"],
  },
  {
    iso_3166_1: "CM",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "CN",
    zones: ["Asia/Shanghai", "Asia/Urumqi"],
  },
  {
    iso_3166_1: "CO",
    zones: ["America/Bogota"],
  },
  {
    iso_3166_1: "CR",
    zones: ["America/Costa_Rica"],
  },
  {
    iso_3166_1: "CU",
    zones: ["America/Havana"],
  },
  {
    iso_3166_1: "CV",
    zones: ["Atlantic/Cape_Verde"],
  },
  {
    iso_3166_1: "CW",
    zones: ["America/Curacao"],
  },
  {
    iso_3166_1: "CX",
    zones: ["Indian/Christmas"],
  },
  {
    iso_3166_1: "CY",
    zones: ["Asia/Nicosia", "Asia/Famagusta"],
  },
  {
    iso_3166_1: "CZ",
    zones: ["Europe/Prague"],
  },
  {
    iso_3166_1: "DE",
    zones: ["Europe/Berlin", "Europe/Zurich"],
  },
  {
    iso_3166_1: "DJ",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "DK",
    zones: ["Europe/Copenhagen"],
  },
  {
    iso_3166_1: "DM",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "DO",
    zones: ["America/Santo_Domingo"],
  },
  {
    iso_3166_1: "DZ",
    zones: ["Africa/Algiers"],
  },
  {
    iso_3166_1: "EC",
    zones: ["America/Guayaquil", "Pacific/Galapagos"],
  },
  {
    iso_3166_1: "EE",
    zones: ["Europe/Tallinn"],
  },
  {
    iso_3166_1: "EG",
    zones: ["Africa/Cairo"],
  },
  {
    iso_3166_1: "EH",
    zones: ["Africa/El_Aaiun"],
  },
  {
    iso_3166_1: "ER",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "ES",
    zones: ["Europe/Madrid", "Africa/Ceuta", "Atlantic/Canary"],
  },
  {
    iso_3166_1: "ET",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "FI",
    zones: ["Europe/Helsinki"],
  },
  {
    iso_3166_1: "FJ",
    zones: ["Pacific/Fiji"],
  },
  {
    iso_3166_1: "FK",
    zones: ["Atlantic/Stanley"],
  },
  {
    iso_3166_1: "FM",
    zones: ["Pacific/Chuuk", "Pacific/Pohnpei", "Pacific/Kosrae"],
  },
  {
    iso_3166_1: "FO",
    zones: ["Atlantic/Faroe"],
  },
  {
    iso_3166_1: "FR",
    zones: ["Europe/Paris"],
  },
  {
    iso_3166_1: "GA",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "GB",
    zones: ["Europe/London"],
  },
  {
    iso_3166_1: "GD",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "GE",
    zones: ["Asia/Tbilisi"],
  },
  {
    iso_3166_1: "GF",
    zones: ["America/Cayenne"],
  },
  {
    iso_3166_1: "GG",
    zones: ["Europe/London"],
  },
  {
    iso_3166_1: "GH",
    zones: ["Africa/Accra"],
  },
  {
    iso_3166_1: "GI",
    zones: ["Europe/Gibraltar"],
  },
  {
    iso_3166_1: "GL",
    zones: [
      "America/Godthab",
      "America/Danmarkshavn",
      "America/Scoresbysund",
      "America/Thule",
    ],
  },
  {
    iso_3166_1: "GM",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "GN",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "GP",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "GQ",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "GR",
    zones: ["Europe/Athens"],
  },
  {
    iso_3166_1: "GS",
    zones: ["Atlantic/South_Georgia"],
  },
  {
    iso_3166_1: "GT",
    zones: ["America/Guatemala"],
  },
  {
    iso_3166_1: "GU",
    zones: ["Pacific/Guam"],
  },
  {
    iso_3166_1: "GW",
    zones: ["Africa/Bissau"],
  },
  {
    iso_3166_1: "GY",
    zones: ["America/Guyana"],
  },
  {
    iso_3166_1: "HK",
    zones: ["Asia/Hong_Kong"],
  },
  {
    iso_3166_1: "HM",
    zones: [],
  },
  {
    iso_3166_1: "HN",
    zones: ["America/Tegucigalpa"],
  },
  {
    iso_3166_1: "HR",
    zones: ["Europe/Belgrade"],
  },
  {
    iso_3166_1: "HT",
    zones: ["America/Port-au-Prince"],
  },
  {
    iso_3166_1: "HU",
    zones: ["Europe/Budapest"],
  },
  {
    iso_3166_1: "ID",
    zones: ["Asia/Jakarta", "Asia/Pontianak", "Asia/Makassar", "Asia/Jayapura"],
  },
  {
    iso_3166_1: "IE",
    zones: ["Europe/Dublin"],
  },
  {
    iso_3166_1: "IL",
    zones: ["Asia/Jerusalem"],
  },
  {
    iso_3166_1: "IM",
    zones: ["Europe/London"],
  },
  {
    iso_3166_1: "IN",
    zones: ["Asia/Kolkata"],
  },
  {
    iso_3166_1: "IO",
    zones: ["Indian/Chagos"],
  },
  {
    iso_3166_1: "IQ",
    zones: ["Asia/Baghdad"],
  },
  {
    iso_3166_1: "IR",
    zones: ["Asia/Tehran"],
  },
  {
    iso_3166_1: "IS",
    zones: ["Atlantic/Reykjavik"],
  },
  {
    iso_3166_1: "IT",
    zones: ["Europe/Rome"],
  },
  {
    iso_3166_1: "JE",
    zones: ["Europe/London"],
  },
  {
    iso_3166_1: "JM",
    zones: ["America/Jamaica"],
  },
  {
    iso_3166_1: "JO",
    zones: ["Asia/Amman"],
  },
  {
    iso_3166_1: "JP",
    zones: ["Asia/Tokyo"],
  },
  {
    iso_3166_1: "KE",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "KG",
    zones: ["Asia/Bishkek"],
  },
  {
    iso_3166_1: "KH",
    zones: ["Asia/Bangkok"],
  },
  {
    iso_3166_1: "KI",
    zones: ["Pacific/Tarawa", "Pacific/Enderbury", "Pacific/Kiritimati"],
  },
  {
    iso_3166_1: "KM",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "KN",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "KP",
    zones: ["Asia/Pyongyang"],
  },
  {
    iso_3166_1: "KR",
    zones: ["Asia/Seoul"],
  },
  {
    iso_3166_1: "KW",
    zones: ["Asia/Riyadh"],
  },
  {
    iso_3166_1: "KY",
    zones: ["America/Panama"],
  },
  {
    iso_3166_1: "KZ",
    zones: [
      "Asia/Almaty",
      "Asia/Qyzylorda",
      "Asia/Aqtobe",
      "Asia/Aqtau",
      "Asia/Atyrau",
      "Asia/Oral",
    ],
  },
  {
    iso_3166_1: "LA",
    zones: ["Asia/Bangkok"],
  },
  {
    iso_3166_1: "LB",
    zones: ["Asia/Beirut"],
  },
  {
    iso_3166_1: "LC",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "LI",
    zones: ["Europe/Zurich"],
  },
  {
    iso_3166_1: "LK",
    zones: ["Asia/Colombo"],
  },
  {
    iso_3166_1: "LR",
    zones: ["Africa/Monrovia"],
  },
  {
    iso_3166_1: "LS",
    zones: ["Africa/Johannesburg"],
  },
  {
    iso_3166_1: "LT",
    zones: ["Europe/Vilnius"],
  },
  {
    iso_3166_1: "LU",
    zones: ["Europe/Luxembourg"],
  },
  {
    iso_3166_1: "LV",
    zones: ["Europe/Riga"],
  },
  {
    iso_3166_1: "LY",
    zones: ["Africa/Tripoli"],
  },
  {
    iso_3166_1: "MA",
    zones: ["Africa/Casablanca"],
  },
  {
    iso_3166_1: "MC",
    zones: ["Europe/Monaco"],
  },
  {
    iso_3166_1: "MD",
    zones: ["Europe/Chisinau"],
  },
  {
    iso_3166_1: "ME",
    zones: ["Europe/Belgrade"],
  },
  {
    iso_3166_1: "MF",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "MG",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "MH",
    zones: ["Pacific/Majuro", "Pacific/Kwajalein"],
  },
  {
    iso_3166_1: "MK",
    zones: ["Europe/Belgrade"],
  },
  {
    iso_3166_1: "ML",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "MM",
    zones: ["Asia/Yangon"],
  },
  {
    iso_3166_1: "MN",
    zones: ["Asia/Ulaanbaatar", "Asia/Hovd", "Asia/Choibalsan"],
  },
  {
    iso_3166_1: "MO",
    zones: ["Asia/Macau"],
  },
  {
    iso_3166_1: "MP",
    zones: ["Pacific/Guam"],
  },
  {
    iso_3166_1: "MQ",
    zones: ["America/Martinique"],
  },
  {
    iso_3166_1: "MR",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "MS",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "MT",
    zones: ["Europe/Malta"],
  },
  {
    iso_3166_1: "MU",
    zones: ["Indian/Mauritius"],
  },
  {
    iso_3166_1: "MV",
    zones: ["Indian/Maldives"],
  },
  {
    iso_3166_1: "MW",
    zones: ["Africa/Maputo"],
  },
  {
    iso_3166_1: "MX",
    zones: [
      "America/Mexico_City",
      "America/Cancun",
      "America/Merida",
      "America/Monterrey",
      "America/Matamoros",
      "America/Mazatlan",
      "America/Chihuahua",
      "America/Ojinaga",
      "America/Hermosillo",
      "America/Tijuana",
      "America/Bahia_Banderas",
    ],
  },
  {
    iso_3166_1: "MY",
    zones: ["Asia/Kuala_Lumpur", "Asia/Kuching"],
  },
  {
    iso_3166_1: "MZ",
    zones: ["Africa/Maputo"],
  },
  {
    iso_3166_1: "NA",
    zones: ["Africa/Windhoek"],
  },
  {
    iso_3166_1: "NC",
    zones: ["Pacific/Noumea"],
  },
  {
    iso_3166_1: "NE",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "NF",
    zones: ["Pacific/Norfolk"],
  },
  {
    iso_3166_1: "NG",
    zones: ["Africa/Lagos"],
  },
  {
    iso_3166_1: "NI",
    zones: ["America/Managua"],
  },
  {
    iso_3166_1: "NL",
    zones: ["Europe/Amsterdam"],
  },
  {
    iso_3166_1: "NO",
    zones: ["Europe/Oslo"],
  },
  {
    iso_3166_1: "NP",
    zones: ["Asia/Kathmandu"],
  },
  {
    iso_3166_1: "NR",
    zones: ["Pacific/Nauru"],
  },
  {
    iso_3166_1: "NU",
    zones: ["Pacific/Niue"],
  },
  {
    iso_3166_1: "NZ",
    zones: ["Pacific/Auckland", "Pacific/Chatham"],
  },
  {
    iso_3166_1: "OM",
    zones: ["Asia/Dubai"],
  },
  {
    iso_3166_1: "PA",
    zones: ["America/Panama"],
  },
  {
    iso_3166_1: "PE",
    zones: ["America/Lima"],
  },
  {
    iso_3166_1: "PF",
    zones: ["Pacific/Tahiti", "Pacific/Marquesas", "Pacific/Gambier"],
  },
  {
    iso_3166_1: "PG",
    zones: ["Pacific/Port_Moresby", "Pacific/Bougainville"],
  },
  {
    iso_3166_1: "PH",
    zones: ["Asia/Manila"],
  },
  {
    iso_3166_1: "PK",
    zones: ["Asia/Karachi"],
  },
  {
    iso_3166_1: "PL",
    zones: ["Europe/Warsaw"],
  },
  {
    iso_3166_1: "PM",
    zones: ["America/Miquelon"],
  },
  {
    iso_3166_1: "PN",
    zones: ["Pacific/Pitcairn"],
  },
  {
    iso_3166_1: "PR",
    zones: ["America/Puerto_Rico"],
  },
  {
    iso_3166_1: "PS",
    zones: ["Asia/Gaza", "Asia/Hebron"],
  },
  {
    iso_3166_1: "PT",
    zones: ["Europe/Lisbon", "Atlantic/Madeira", "Atlantic/Azores"],
  },
  {
    iso_3166_1: "PW",
    zones: ["Pacific/Palau"],
  },
  {
    iso_3166_1: "PY",
    zones: ["America/Asuncion"],
  },
  {
    iso_3166_1: "QA",
    zones: ["Asia/Qatar"],
  },
  {
    iso_3166_1: "RE",
    zones: ["Indian/Reunion"],
  },
  {
    iso_3166_1: "RO",
    zones: ["Europe/Bucharest"],
  },
  {
    iso_3166_1: "RS",
    zones: ["Europe/Belgrade"],
  },
  {
    iso_3166_1: "RU",
    zones: [
      "Europe/Kaliningrad",
      "Europe/Moscow",
      "Europe/Simferopol",
      "Europe/Volgograd",
      "Europe/Kirov",
      "Europe/Astrakhan",
      "Europe/Saratov",
      "Europe/Ulyanovsk",
      "Europe/Samara",
      "Asia/Yekaterinburg",
      "Asia/Omsk",
      "Asia/Novosibirsk",
      "Asia/Barnaul",
      "Asia/Tomsk",
      "Asia/Novokuznetsk",
      "Asia/Krasnoyarsk",
      "Asia/Irkutsk",
      "Asia/Chita",
      "Asia/Yakutsk",
      "Asia/Khandyga",
      "Asia/Vladivostok",
      "Asia/Ust-Nera",
      "Asia/Magadan",
      "Asia/Sakhalin",
      "Asia/Srednekolymsk",
      "Asia/Kamchatka",
      "Asia/Anadyr",
    ],
  },
  {
    iso_3166_1: "RW",
    zones: ["Africa/Maputo"],
  },
  {
    iso_3166_1: "SA",
    zones: ["Asia/Riyadh"],
  },
  {
    iso_3166_1: "SB",
    zones: ["Pacific/Guadalcanal"],
  },
  {
    iso_3166_1: "SC",
    zones: ["Indian/Mahe"],
  },
  {
    iso_3166_1: "SD",
    zones: ["Africa/Khartoum"],
  },
  {
    iso_3166_1: "SE",
    zones: ["Europe/Stockholm"],
  },
  {
    iso_3166_1: "SG",
    zones: ["Asia/Singapore"],
  },
  {
    iso_3166_1: "SH",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "SI",
    zones: ["Europe/Belgrade"],
  },
  {
    iso_3166_1: "SJ",
    zones: ["Europe/Oslo"],
  },
  {
    iso_3166_1: "SK",
    zones: ["Europe/Prague"],
  },
  {
    iso_3166_1: "SL",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "SM",
    zones: ["Europe/Rome"],
  },
  {
    iso_3166_1: "SN",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "SO",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "SR",
    zones: ["America/Paramaribo"],
  },
  {
    iso_3166_1: "SS",
    zones: ["Africa/Juba"],
  },
  {
    iso_3166_1: "ST",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "SV",
    zones: ["America/El_Salvador"],
  },
  {
    iso_3166_1: "SX",
    zones: ["America/Curacao"],
  },
  {
    iso_3166_1: "SY",
    zones: ["Asia/Damascus"],
  },
  {
    iso_3166_1: "SZ",
    zones: ["Africa/Johannesburg"],
  },
  {
    iso_3166_1: "TC",
    zones: ["America/Grand_Turk"],
  },
  {
    iso_3166_1: "TD",
    zones: ["Africa/Ndjamena"],
  },
  {
    iso_3166_1: "TF",
    zones: ["Indian/Kerguelen", "Indian/Reunion"],
  },
  {
    iso_3166_1: "TG",
    zones: ["Africa/Abidjan"],
  },
  {
    iso_3166_1: "TH",
    zones: ["Asia/Bangkok"],
  },
  {
    iso_3166_1: "TJ",
    zones: ["Asia/Dushanbe"],
  },
  {
    iso_3166_1: "TK",
    zones: ["Pacific/Fakaofo"],
  },
  {
    iso_3166_1: "TL",
    zones: ["Asia/Dili"],
  },
  {
    iso_3166_1: "TM",
    zones: ["Asia/Ashgabat"],
  },
  {
    iso_3166_1: "TN",
    zones: ["Africa/Tunis"],
  },
  {
    iso_3166_1: "TO",
    zones: ["Pacific/Tongatapu"],
  },
  {
    iso_3166_1: "TR",
    zones: ["Europe/Istanbul"],
  },
  {
    iso_3166_1: "TT",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "TV",
    zones: ["Pacific/Funafuti"],
  },
  {
    iso_3166_1: "TW",
    zones: ["Asia/Taipei"],
  },
  {
    iso_3166_1: "TZ",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "UA",
    zones: ["Europe/Kiev", "Europe/Uzhgorod", "Europe/Zaporozhye"],
  },
  {
    iso_3166_1: "UG",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "UM",
    zones: ["Pacific/Wake", "Pacific/Pago_Pago", "Pacific/Honolulu"],
  },
  {
    iso_3166_1: "US",
    zones: [
      "America/New_York",
      "America/Detroit",
      "America/Kentucky/Louisville",
      "America/Kentucky/Monticello",
      "America/Indiana/Indianapolis",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Indiana/Marengo",
      "America/Indiana/Petersburg",
      "America/Indiana/Vevay",
      "America/Chicago",
      "America/Indiana/Tell_City",
      "America/Indiana/Knox",
      "America/Menominee",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/North_Dakota/Beulah",
      "America/Denver",
      "America/Boise",
      "America/Phoenix",
      "America/Los_Angeles",
      "America/Anchorage",
      "America/Juneau",
      "America/Sitka",
      "America/Metlakatla",
      "America/Yakutat",
      "America/Nome",
      "America/Adak",
      "Pacific/Honolulu",
    ],
  },
  {
    iso_3166_1: "UY",
    zones: ["America/Montevideo"],
  },
  {
    iso_3166_1: "UZ",
    zones: ["Asia/Samarkand", "Asia/Tashkent"],
  },
  {
    iso_3166_1: "VA",
    zones: ["Europe/Rome"],
  },
  {
    iso_3166_1: "VC",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "VE",
    zones: ["America/Caracas"],
  },
  {
    iso_3166_1: "VG",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "VI",
    zones: ["America/Port_of_Spain"],
  },
  {
    iso_3166_1: "VN",
    zones: ["Asia/Ho_Chi_Minh", "Asia/Bangkok"],
  },
  {
    iso_3166_1: "VU",
    zones: ["Pacific/Efate"],
  },
  {
    iso_3166_1: "WF",
    zones: ["Pacific/Wallis"],
  },
  {
    iso_3166_1: "WS",
    zones: ["Pacific/Apia"],
  },
  {
    iso_3166_1: "YE",
    zones: ["Asia/Riyadh"],
  },
  {
    iso_3166_1: "YT",
    zones: ["Africa/Nairobi"],
  },
  {
    iso_3166_1: "ZA",
    zones: ["Africa/Johannesburg"],
  },
  {
    iso_3166_1: "ZM",
    zones: ["Africa/Maputo"],
  },
  {
    iso_3166_1: "ZW",
    zones: ["Africa/Maputo"],
  },
];
