import React from 'react';
import ReactDOM from 'react-dom';
import CustomRulesBuilder from './CustomRulesBuilder';
import './index.css';

const customRulesBlob = {
  "conditions": {
    "client": {
      "help": "Build a condition based on client-side's attributes.<h4>Format: <i>client.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match client ip address 172.26.10.123</p><p><code>client.ip.address EQUAL <strong>\"172.26.10.123\"</strong></code></p><p>Match any origin except anonymous proxies</p><p><code>client.ip.geolocation NOT.EQUAL <strong>\"A1\"</strong></code></p>",
      "standalone": false,
      "tokens": {
        "ip": {
          "help": "Build a condition based on client's ip attributes.<h4>Format: <i>client.ip.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match client ip address 172.26.10.123</p><p><code>client.ip.address EQUAL <strong>\"172.26.10.123\"</strong></code></p><p>Match any origin country except US</p><p><code>client.ip.geolocation NOT.EQUAL <strong>\"US\"</strong></code></p>",
          "standalone": false,
          "tokens": {
            "address": {
              "help": "Build a condition based on client ip address.<h4>Format: <i>client.ip.address</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match client ip address 172.26.10.123</p><p><code>client.ip.address EQUAL <strong>\"172.26.10.123\"</strong></code></p>",
              "operators": [{
                  "format": "^(\\d{1,3}(-\\d{1,3})?\\.\\d{1,3}(-\\d{1,3})?\\.\\d{1,3}(-\\d{1,3})?\\.\\d{1,3}(-\\d{1,3})?(\/\\d{1,2})?|([a-fA-F0-9]{0,4}\\:){1,7}([a-fA-F0-9]{0,4}))$",
                  "invalidText": "{0} must be an IPV4/IPV6 address or address range (form xxx.xxx.xxx.xxx/xx).",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "CIDR",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression for matching IPV4/IPV6 address.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "geolocation": {
              "help": "Build a condition based on client's origin country code.<h4>Format: <i>client.ip.geolocation</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match a Satellite Provider</p><p><code>client.ip.geolocation EQUAL <strong>\"A1\"</strong></code></p><p>Match any origin country except US</p><p><code>client.ip.geolocation NOT.EQUAL <strong>\"US\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid country code (2 digits), continent code (AME, EU or AP), anonymous-proxy (A1), satellite provider (A2), or unknown (XX).",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "list",
                  "values": [
                    "A1",
                    "A2",
                    "AD",
                    "AE",
                    "AF",
                    "AG",
                    "AI",
                    "AL",
                    "AM",
                    "AO",
                    "AP",
                    "AQ",
                    "AR",
                    "AS",
                    "AT",
                    "AU",
                    "AW",
                    "AX",
                    "AZ",
                    "BA",
                    "BB",
                    "BD",
                    "BE",
                    "BF",
                    "BG",
                    "BH",
                    "BI",
                    "BJ",
                    "BL",
                    "BM",
                    "BN",
                    "BO",
                    "BQ",
                    "BR",
                    "BS",
                    "BT",
                    "BW",
                    "BY",
                    "BZ",
                    "CA",
                    "CC",
                    "CD",
                    "CF",
                    "CG",
                    "CH",
                    "CI",
                    "CK",
                    "CL",
                    "CM",
                    "CN",
                    "CO",
                    "CR",
                    "CU",
                    "CV",
                    "CW",
                    "CX",
                    "CY",
                    "CZ",
                    "DE",
                    "DJ",
                    "DK",
                    "DM",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ER",
                    "ES",
                    "ET",
                    "EU",
                    "FI",
                    "FJ",
                    "FK",
                    "FM",
                    "FO",
                    "FR",
                    "GA",
                    "GB",
                    "GD",
                    "GE",
                    "GF",
                    "GG",
                    "GH",
                    "GI",
                    "GL",
                    "GM",
                    "GN",
                    "GP",
                    "GQ",
                    "GR",
                    "GS",
                    "GT",
                    "GU",
                    "GW",
                    "GY",
                    "HK",
                    "HN",
                    "HR",
                    "HT",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IM",
                    "IN",
                    "IO",
                    "IQ",
                    "IR",
                    "IS",
                    "IT",
                    "JE",
                    "JM",
                    "JO",
                    "JP",
                    "KE",
                    "KG",
                    "KH",
                    "KI",
                    "KM",
                    "KN",
                    "KP",
                    "KR",
                    "KW",
                    "KY",
                    "KZ",
                    "LA",
                    "LB",
                    "LC",
                    "LI",
                    "LK",
                    "LR",
                    "LS",
                    "LT",
                    "LU",
                    "LV",
                    "LY",
                    "MA",
                    "MC",
                    "MD",
                    "ME",
                    "MF",
                    "MG",
                    "MH",
                    "MK",
                    "ML",
                    "MM",
                    "MN",
                    "MO",
                    "MP",
                    "MQ",
                    "MR",
                    "MS",
                    "MT",
                    "MU",
                    "MV",
                    "MW",
                    "MX",
                    "MY",
                    "MZ",
                    "NA",
                    "NC",
                    "NE",
                    "NF",
                    "NG",
                    "NI",
                    "NL",
                    "NO",
                    "NP",
                    "NR",
                    "NU",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PF",
                    "PG",
                    "PH",
                    "PK",
                    "PL",
                    "PM",
                    "PN",
                    "PR",
                    "PS",
                    "PT",
                    "PW",
                    "PY",
                    "QA",
                    "RE",
                    "RO",
                    "RS",
                    "RU",
                    "RW",
                    "SA",
                    "SB",
                    "SC",
                    "SD",
                    "SE",
                    "SG",
                    "SH",
                    "SI",
                    "SJ",
                    "SK",
                    "SL",
                    "SM",
                    "SN",
                    "SO",
                    "SR",
                    "SS",
                    "ST",
                    "SV",
                    "SX",
                    "SY",
                    "SZ",
                    "TC",
                    "TD",
                    "TF",
                    "TG",
                    "TH",
                    "TJ",
                    "TK",
                    "TL",
                    "TM",
                    "TN",
                    "TO",
                    "TR",
                    "TT",
                    "TV",
                    "TW",
                    "TZ",
                    "UA",
                    "UG",
                    "UM",
                    "US",
                    "UY",
                    "UZ",
                    "VA",
                    "VC",
                    "VE",
                    "VG",
                    "VI",
                    "VN",
                    "VU",
                    "WF",
                    "WS",
                    "XX",
                    "YE",
                    "YT",
                    "ZA",
                    "ZM",
                    "ZW"
                  ],
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression for matching geolocation code(s).",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "protocol": {
              "help": "Build a condition based on client ip protocol version.<h4>Format: <i>client.ip.protocol</i> <b>OPERATOR</b> <i>\"IPV4|IPV6\"</i>.</h4><p><i>Examples</i></p><p>Match any IPV4 source-ip address</p><p><code>client.ip.protocol EQUAL <strong>\"IPV4\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be either IPV4 or IPV6.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "list",
                  "values": [
                    "IPV4",
                    "IPV6"
                  ],
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression in order to identify TCP/IP protocol(s).",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            }
          }
        },
        "ssl": {
          "help": "Build a condition based on client-side SSL/TLS attributes.<h4>Format: <i>client.ssl.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match client-side ssl/tls protocol sslv2</p><p><code>client.ssl.protocol EQUAL <strong>\"sslv2\"</strong></code></p>",
          "standalone": false,
          "tokens": {
            "cipher": {
              "help": "Build a condition based on client-side SSL/TLS cipher.<h4>Format: <i>client.ssl.cipher</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match client-side ssl/tls cipher ECDHE-RSA-AES128-SHA256</p><p><code>client.ssl.cipher EQUAL <strong>\"ECDHE-RSA-AES128-SHA256\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid cipher.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression in order to identify SSL cipher(s).",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "protocol": {
              "help": "Build a condition based on client-side SSL/TLS protocol version.<h4>Format: <i>client.ssl.protocol</i> <b>OPERATOR</b> <i>\"sslv2|sslv3|tlsv1.0|tlsv1.1|tlsv1.2\"</i>.</h4><p><i>Examples</i></p><p>Match sslv2 protocol on client-side</p><p><code>client.ssl.protocol EQUAL <strong>\"sslv2\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid SSL/TLS protocol version (sslv2, sslv3,tlsv1.0, tlsv1.1, tlsv1.2).",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "list",
                  "values": [
                    "sslv2",
                    "sslv3",
                    "tlsv1.0",
                    "tlsv1.1",
                    "tlsv1.2"
                  ],
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression in order to identify SSL protocol(s).",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "session": {
              "help": "Build a condition based on client-side SSL/TLS session.<p><i>Examples</i></p><p>Match client-side ssl session lifetime reaching 60 seconds</p><p><code>client.ssl.session.timeout EQUAL <strong>\"60000\"</strong></code></p>",
              "standalone": false,
              "tokens": {
                "timeout": {
                  "help": "Build a condition based on client-side SSL/TLS session lifetime (milliseconds).<h4>Format: <i>client.ssl.session.timeout</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match client-side ssl session lifetime reaching 60 seconds</p><p><code>client.ssl.session.timeout EQUAL <strong>\"60000\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.3.0"
                    }
                  ],
                  "standalone": true
                }
              }
            }
          }
        },
        "tcp": {
          "help": "Build a condition based on client-side TCP attributes.<h4>Format: <i>client.tcp.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match client source-port 45678</p><p><code>client.tcp.port EQUAL <strong>\"45678\"</strong></code></p>",
          "standalone": false,
          "tokens": {
            "port": {
              "help": "Build a condition based on client TCP source-port.<h4>Format: <i>client.tcp.port</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match client source-port 45678</p><p><code>client.tcp.port EQUAL <strong>\"45678\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid TCP port.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid TCP port.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid TCP port.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid TCP port.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid TCP port.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid TCP port range .",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            }
          }
        }
      }
    },
    "request": {
      "help": "Build a condition based on request's attributes.<h4>Format: <i>request.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><h4><b>or</b></h4><h4>Format: <i>request.special-key</i> <i>\"name\"</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request body parameter foo</p><p><code>request.body.parameter.name EQUAL <strong>\"foo\"</strong></code></p>",
      "standalone": false,
      "tokens": {
        "body": {
          "help": "Build a condition based on body attributes.<h4>Format: <i>request.body.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request body parameter value is true</p><p><code>request.body.parameter.value EQUAL <strong>true</strong></code></p>",
          "standalone": false,
          "tokens": {
            "charset": {
              "help": "Build a condition based on request body charset.<h4>Format: <i>request.body.charset</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request body charset UTF-8</p><p><code>request.body.charset EQUAL <strong>\"UTF-8\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid charset.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression in order to identify charset(s).",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "length": {
              "help": "Build a condition based on request body's length.<h4>Format: <i>request.body.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request body exceeding 50 bytes</p><p><code>request.body.length GREATER <strong>\"50\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid integer range.",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "parameter": {
              "help": "Build a condition based on request body's parameter.<h4>Format: <i>request.body.parameter.value</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><h4><b>or</b></h4><h4>Format: <i>request.body.parameter</i> <i>\"name\"</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request body parameter foo greater than 1000</p><p><code>request.body.parameter <strong>\"foo\"</strong> GREATER <strong>\"1000\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid string or a QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.3.0"
                }
              ],
              "specialKey": true,
              "standalone": true,
              "tokens": {
                "count": {
                  "help": "Build a condition based on request body's parameter count.<h4>Format: <i>request.body.parameter.count</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request body with more than 10 parameters</p><p><code>request.body.parameter.count GREATER <strong>\"10\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.3.0"
                    }
                  ],
                  "standalone": true
                },
                "name": {
                  "help": "Build a condition based on request body's parameter name.<h4>Format: <i>request.body.parameter.name</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request body parameter name foo</p><p><code>request.body.parameter.name EQUAL <strong>\"foo\"</strong></code></p>",
                  "operators": [{
                      "invalidText": "{0} must be a valid string.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "string",
                      "version": "1.3.0"
                    },
                    {
                      "invalidText": "{0} must be a valid regular expression.",
                      "name": "MATCH",
                      "negation": "NOT.MATCH",
                      "type": "regexp",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^.+$",
                      "invalidText": "{0} must be a valid QID.",
                      "name": "DETECT",
                      "type": "qid",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true,
                  "tokens": {
                    "length": {
                      "help": "Build a condition based on longest request body parameter's name length.<h4>Format: <i>request.body.parameter.name.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request with longest parameter name exceeding 50 bytes</p><p><code>request.body.parameter.name.length GREATER <strong>\"50\"</strong></code></p>",
                      "operators": [{
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "EQUAL",
                          "negation": "NOT.EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "GREATER",
                          "negation": "NOT.GREATER",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "GREATER-EQUAL",
                          "negation": "NOT.GREATER-EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "LOWER",
                          "negation": "NOT.LOWER",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "LOWER-EQUAL",
                          "negation": "NOT.LOWER-EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+,\\d+$",
                          "invalidText": "{0} must be a valid integer range.",
                          "name": "IN-RANGE",
                          "negation": "NOT.IN-RANGE",
                          "type": "intRange",
                          "version": "1.3.0"
                        }
                      ],
                      "standalone": true
                    }
                  }
                },
                "value": {
                  "help": "Build a condition based on request body's longest parameter value.<h4>Format: <i>request.body.parameter.value</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match longest request parameter value foo</p><p><code>request.body.parameter.value EQUAL <strong>\"foo\"</strong></code></p>",
                  "operators": [{
                      "invalidText": "{0} must be a valid string.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "string",
                      "version": "1.3.0"
                    },
                    {
                      "invalidText": "{0} must be a valid regular expression.",
                      "name": "MATCH",
                      "negation": "NOT.MATCH",
                      "type": "regexp",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^.+$",
                      "invalidText": "{0} must be a valid QID.",
                      "name": "DETECT",
                      "type": "qid",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true,
                  "tokens": {
                    "length": {
                      "help": "Build a condition based on request body's parameter value length.<h4>Format: <i>request.body.parameter.value.length</i> <b>OPERATOR</b> <i>foo</i>.</h4><p><i>Examples</i></p><p>Match request with parameter value exceeding 50 bytes</p><p><code>request.body.parameter.value.length GREATER <strong>\"50\"</strong></code></p>",
                      "operators": [{
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "EQUAL",
                          "negation": "NOT.EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "GREATER",
                          "negation": "NOT.GREATER",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "GREATER-EQUAL",
                          "negation": "NOT.GREATER-EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "LOWER",
                          "negation": "NOT.LOWER",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "LOWER-EQUAL",
                          "negation": "NOT.LOWER-EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+,\\d+$",
                          "invalidText": "{0} must be a valid integer range.",
                          "name": "IN-RANGE",
                          "negation": "NOT.IN-RANGE",
                          "type": "intRange",
                          "version": "1.3.0"
                        }
                      ],
                      "standalone": true
                    }
                  }
                }
              }
            },
            "type": {
              "help": "Build a condition based on request body's envelope.<h4>Format: <i>request.body.type</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request body type application/json</p><p><code>request.body.type EQUAL <strong>\"application/json\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            }
          }
        },
        "duration": {
          "help": "Build a condition based on request duration (milliseconds).<h4>Format: <i>request.duration</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request duration exceeding 1000 ms</p><p><code>request.duration GREATER <strong>\"1000\"</strong></code></p>",
          "operators": [{
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "GREATER",
              "negation": "NOT.GREATER",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "GREATER-EQUAL",
              "negation": "NOT.GREATER-EQUAL",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "LOWER",
              "negation": "NOT.LOWER",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "LOWER-EQUAL",
              "negation": "NOT.LOWER-EQUAL",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+,\\d+$",
              "invalidText": "{0} must be a valid integer range.",
              "name": "IN-RANGE",
              "negation": "NOT.IN-RANGE",
              "type": "intRange",
              "version": "1.3.0"
            }
          ],
          "standalone": true
        },
        "header": {
          "help": "Build a condition based on a specific request header.<h4>Format: <i>request.header</i> <i>\"name\"</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request header X-Forwarded-For: 8.8.8.8</p><p><code>request.header <strong>\"X-Forwarded-For\"</strong> EQUAL <strong>\"8.8.8.8\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid string.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "string",
              "version": "1.3.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression.",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.3.0"
            },
            {
              "format": "^.+$",
              "invalidText": "{0} must be a valid QID.",
              "name": "DETECT",
              "type": "qid",
              "version": "1.4.0"
            }
          ],
          "specialKey": true,
          "standalone": true,
          "tokens": {
            "content-length": {
              "help": "Build a condition based on Content-Length header value.<h4>Format: <i>request.header.content-length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request content-length header greater than 500 bytes</p><p><code>request.header.content-length GREATER <strong>\"500\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid integer range.",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "content-type": {
              "help": "Build a condition based on Content-Type header's value.<h4>Format: <i>request.header.content-type</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match requests with application/json content</p><p><code>request.header.content-type EQUAL <strong>\"application/json\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            },
            "cookie": {
              "help": "Build a condition based on request's cookie attributes.<h4>Format: <i>request.header.cookie</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request cookie JSESSID=1234</p><p><code>request.header.cookie <strong>\"JSESSID\"</strong> EQUAL <strong>\"1234\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "specialKey": true,
              "standalone": true,
              "tokens": {
                "count": {
                  "help": "Build a condition based on request cookie count.<h4>Format: <i>request.header.cookie.count</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request cookie count greater than 5</p><p><code>request.header.cookie.count GREATER <strong>\"5\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.3.0"
                    }
                  ],
                  "standalone": true
                },
                "name": {
                  "help": "Build a condition based on request cookie name.<h4>Format: <i>request.header.cookie.name</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request cookie JSESSID</p><p><code>request.header.cookie.name EQUAL <strong>\"JSESSID\"</strong></code></p>",
                  "operators": [{
                      "invalidText": "{0} must be a valid string.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "string",
                      "version": "1.3.0"
                    },
                    {
                      "invalidText": "{0} must be a valid regular expression.",
                      "name": "MATCH",
                      "negation": "NOT.MATCH",
                      "type": "regexp",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^.+$",
                      "invalidText": "{0} must be a valid QID.",
                      "name": "DETECT",
                      "type": "qid",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true
                },
                "value": {
                  "help": "Build a condition based on request cookie value.<h4>Format: <i>request.header.cookie.value</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request cookie value 1234</p><p><code>request.header.cookie.value EQUAL <strong>\"1234\"</strong></code></p>",
                  "operators": [{
                      "invalidText": "{0} must be a valid string.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "string",
                      "version": "1.3.0"
                    },
                    {
                      "invalidText": "{0} must be a valid regular expression.",
                      "name": "MATCH",
                      "negation": "NOT.MATCH",
                      "type": "regexp",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^.+$",
                      "invalidText": "{0} must be a valid QID.",
                      "name": "DETECT",
                      "type": "qid",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true
                }
              }
            },
            "line": {
              "help": "Build a condition based on request's header lines.<h4>Format: <i>request.header.line.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request header count not greater than 32</p><p><code>request.header.line.count NOT.GREATER <strong>\"32\"</strong></code></p>",
              "standalone": false,
              "tokens": {
                "count": {
                  "help": "Build a condition based on request header count.<h4>Format: <i>request.header.line.count</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request header count not greater than 32</p><p><code>request.header.line.count NOT.GREATER <strong>\"32\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.3.0"
                    }
                  ],
                  "standalone": true
                },
                "length": {
                  "help": "Build a condition based on request's line length.<h4>Format: <i>request.header.line.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request line length not greater than 64 bytes</p><p><code>request.header.line.length NOT.GREATER <strong>\"64\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.3.0"
                    }
                  ],
                  "standalone": true
                }
              }
            },
            "name": {
              "help": "Build a condition based on request header's name.<h4>Format: <i>request.header.name</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request header X-Forwarded-For</p><p><code>request.header.name EQUAL <strong>\"X-Forwarded-For\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            },
            "referer": {
              "help": "Build a condition based on request referer.<h4>Format: <i>request.header.referer</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request header referer https://www.domain.com/flow/page?cart=abc&amp;transaction=payment</p><p><code>request.header.referer EQUAL <strong>\"https://www.domain.com/flow/page?cart=abc&amp;transaction=payment\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "user-agent": {
              "help": "Build a condition based on request's User-Agent.<h4>Format: <i>request.header.user-agent</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match user-agent curl</p><p><code>request.header.user-agent MATCH <strong>\"^.*curl.*$\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "value": {
              "help": "Build a condition based on request header's value.<h4>Format: <i>request.header.value</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request header value foo</p><p><code>request.header.value EQUAL <strong>\"foo\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            }
          }
        },
        "method": {
          "help": "Build a condition based on HTTP request's method.<h4>Format: <i>request.method</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request's HTTP method TRACE</p><p><code>request.method EQUAL <strong>\"TRACE\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid HTTP method.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "list",
              "values": [
                "CONNECT",
                "COPY",
                "DELETE",
                "GET",
                "HEAD",
                "LOCK",
                "MKCOL",
                "MOVE",
                "OPTIONS",
                "POST",
                "PROPFIND",
                "PROPPATCH",
                "PUT",
                "TRACE",
                "TRACK"
              ],
              "version": "1.3.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression in orderto identify HTTP method(s).",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.3.0"
            }
          ],
          "standalone": true
        },
        "path": {
          "help": "Build a condition based on request path.<h4>Format: <i>request.path</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request path /admin/</p><p><code>request.method EQUAL <strong>\"/admin/\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid string.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "string",
              "version": "1.3.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression.",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.3.0"
            },
            {
              "format": "^.+$",
              "invalidText": "{0} must be a valid QID.",
              "name": "DETECT",
              "type": "qid",
              "version": "1.4.0"
            }
          ],
          "standalone": true,
          "tokens": {
            "extension": {
              "help": "Build a condition based on request file extension.<h4>Format: <i>request.path.extension</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request file extension pdf</p><p><code>request.path.extension EQUAL <strong>\"pdf\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "length": {
              "help": "Build a condition based on request's path length.<h4>Format: <i>request.path.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request's path length not exceeding 1000 bytes</p><p><code>request.path.length NOT.GREATER <strong>\"1000\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid integer range.",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            }
          }
        },
        "protocol": {
          "help": "Build a condition based on HTTP request protocol's version.<h4>Format: <i>request.protocol</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request's HTTP protocol version 1.1</p><p><code>request.protocol EQUAL <strong>\"HTTP/1.1\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid HTTP protocol.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "list",
              "values": [
                "HTTP/0.9",
                "HTTP/1.0",
                "HTTP/1.1",
                "HTTP/2.0"
              ],
              "version": "1.3.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression in order to match HTTP protocol(s).",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.4.0"
            }
          ],
          "standalone": true
        },
        "query-string": {
          "help": "Build a condition based on request's query-string.<h4>Format: <i>request.query-string</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request's query-string ?redirect-url=foo&amp;user=admin</p><p><code>request.query-string EQUAL <strong>\"redirect-url=foo&amp;user=admin\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid string.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "string",
              "version": "1.3.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression.",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.3.0"
            },
            {
              "format": "^.+$",
              "invalidText": "{0} must be a valid QID.",
              "name": "DETECT",
              "type": "qid",
              "version": "1.4.0"
            }
          ],
          "standalone": true,
          "tokens": {
            "length": {
              "help": "Build a condition based on query-string's length.<h4>Format: <i>request.query-string.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request query-string length beyond 1000</p><p><code>request.query-string.length GREATER <strong>\"1000\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid integer range.",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "parameter": {
              "help": "Build a condition based on query-string's parameter.<h4>Format: <i>request.query-string.parameter</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><h4><b>or</b></h4><h4>Format: <i>request.query-string.parameter</i> <i>\"name\"</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request query-string parameter foo with value greater than 1000</p><p><code>request.query-string.parameter <strong>\"foo\"</strong> GREATER <strong>\"1000\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "specialKey": true,
              "standalone": true,
              "tokens": {
                "count": {
                  "help": "Build a condition based on query-string's parameter count.<h4>Format: <i>request.query-string.parameter.count</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request query-string with more than 10 parameters</p><p><code>request.query-string.parameter.count GREATER <strong>\"10\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.3.0"
                    }
                  ],
                  "standalone": true
                },
                "name": {
                  "help": "Build a condition based on query-string's parameter name.<h4>Format: <i>request.query-string.parameter</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request query-string parameter name foo</p><p><code>request.query-string.parameter.name EQUAL <strong>\"foo\"</strong></code></p>",
                  "operators": [{
                      "invalidText": "{0} must be a valid string.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "string",
                      "version": "1.3.0"
                    },
                    {
                      "invalidText": "{0} must be a valid regular expression.",
                      "name": "MATCH",
                      "negation": "NOT.MATCH",
                      "type": "regexp",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^.+$",
                      "invalidText": "{0} must be a valid QID.",
                      "name": "DETECT",
                      "type": "qid",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true,
                  "tokens": {
                    "length": {
                      "help": "Build a condition based on query-string's longest parameter name length.<h4>Format: <i>request.query-string.parameter.name.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request query-string parameter longest name greater than 10 chars</p><p><code>request.query-string.parameter.name.length GREATER <strong>\"10\"</strong></code></p>",
                      "operators": [{
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "EQUAL",
                          "negation": "NOT.EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "GREATER",
                          "negation": "NOT.GREATER",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "GREATER-EQUAL",
                          "negation": "NOT.GREATER-EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "LOWER",
                          "negation": "NOT.LOWER",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "LOWER-EQUAL",
                          "negation": "NOT.LOWER-EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+,\\d+$",
                          "invalidText": "{0} must be a valid integer range.",
                          "name": "IN-RANGE",
                          "negation": "NOT.IN-RANGE",
                          "type": "intRange",
                          "version": "1.3.0"
                        }
                      ],
                      "standalone": true
                    }
                  }
                },
                "value": {
                  "help": "Build a condition based on query-string's parameter value.<h4>Format: <i>request.query-string.parameter.value</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request parameter value foo</p><p><code>request.query-string.parameter.value EQUAL <strong>\"foo\"</strong></code></p>",
                  "operators": [{
                      "invalidText": "{0} must be a valid string.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "string",
                      "version": "1.3.0"
                    },
                    {
                      "invalidText": "{0} must be a valid regular expression.",
                      "name": "MATCH",
                      "negation": "NOT.MATCH",
                      "type": "regexp",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^.+$",
                      "invalidText": "{0} must be a valid QID.",
                      "name": "DETECT",
                      "type": "qid",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true,
                  "tokens": {
                    "length": {
                      "help": "Build a condition based on query-string's longest parameter value length.<h4>Format: <i>request.query-string.parameter.value.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request longest parameter value length 64</p><p><code>request.query-string.parameter.value.length EQUAL <strong>\"64\"</strong></code></p>",
                      "operators": [{
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "EQUAL",
                          "negation": "NOT.EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "GREATER",
                          "negation": "NOT.GREATER",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "GREATER-EQUAL",
                          "negation": "NOT.GREATER-EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "LOWER",
                          "negation": "NOT.LOWER",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+$",
                          "invalidText": "{0} must be a valid integer.",
                          "name": "LOWER-EQUAL",
                          "negation": "NOT.LOWER-EQUAL",
                          "type": "int",
                          "version": "1.3.0"
                        },
                        {
                          "format": "^\\d+,\\d+$",
                          "invalidText": "{0} must be a valid integer range.",
                          "name": "IN-RANGE",
                          "negation": "NOT.IN-RANGE",
                          "type": "intRange",
                          "version": "1.3.0"
                        }
                      ],
                      "standalone": true
                    }
                  }
                }
              }
            }
          }
        },
        "url": {
          "help": "Build a condition based on request url.<h4>Format: <i>request.url</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request url that is not /foo/bar/resource?param=value</p><p><code>request.url NOT.EQUAL <strong>\"/foo/bar/resource?param=value\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid string.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "string",
              "version": "1.3.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression.",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.3.0"
            },
            {
              "format": "^.+$",
              "invalidText": "{0} must be a valid QID.",
              "name": "DETECT",
              "type": "qid",
              "version": "1.4.0"
            }
          ],
          "standalone": true,
          "tokens": {
            "length": {
              "help": "Build a condition based on request url length.<h4>Format: <i>request.url.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match request url length not exceeding <strong>1000 bytes</strong></p><p><code>request.url.length NOT.GREATER <strong>\"1000\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid integer range.",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            }
          }
        }
      }
    },
    "response": {
      "help": "Build a condition based on response's attributes.<h4>Format: <i>response.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response day Monday</p><p><code>response.day EQUAL <strong>\"Monday\"</strong></code></p>",
      "standalone": false,
      "tokens": {
        "code": {
          "help": "Build a condition based on HTTP response's code.<h4>Format: <i>response.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response code 500</p><p><code>response.code EQUAL <strong>\"500\"</strong></code></p>",
          "operators": [{
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "GREATER",
              "negation": "NOT.GREATER",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "GREATER-EQUAL",
              "negation": "NOT.GREATER-EQUAL",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "LOWER",
              "negation": "NOT.LOWER",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "LOWER-EQUAL",
              "negation": "NOT.LOWER-EQUAL",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+,\\d+$",
              "invalidText": "{0} must be a valid integer range.",
              "name": "IN-RANGE",
              "negation": "NOT.IN-RANGE",
              "type": "intRange",
              "version": "1.4.0"
            }
          ],
          "standalone": true
        },
        "date": {
          "help": "Build a condition based on response date.<h4>Format: <i>response.date</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response date 02-07-2017</p><p><code>response.date EQUAL <strong>\"02-07-2017\"</strong></code></p><p>Match response date between 02-04-2017 and 02-08-2017</p><p><code>response.date BETWEEN <strong>\"02-04-2017,02-08-2017\"</strong></code></p>",
          "operators": [{
              "format": "^\\d{2}\\-\\d{2}\\-\\d{4}$",
              "invalidText": "{0} must be a valid date.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "date",
              "version": "1.4.0"
            },
            {
              "format": "^\\d{2}\\-\\d{2}\\-\\d{4}\\,\\d{2}\\-\\d{2}\\-\\d{4}$",
              "invalidText": "{0} must be a valid date range.",
              "name": "BETWEEN",
              "negation": "NOT.BETWEEN",
              "type": "dateRange",
              "version": "1.4.0"
            }
          ],
          "standalone": true
        },
        "duration": {
          "help": "Build a condition based on response duration (milliseconds).<h4>Format: <i>response.duration</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response duration exceeding 1000 ms</p><p><code>response.duration GREATER <strong>\"1000\"</strong></code></p>",
          "operators": [{
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "GREATER",
              "negation": "NOT.GREATER",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "GREATER-EQUAL",
              "negation": "NOT.GREATER-EQUAL",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "LOWER",
              "negation": "NOT.LOWER",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "LOWER-EQUAL",
              "negation": "NOT.LOWER-EQUAL",
              "type": "int",
              "version": "1.4.0"
            },
            {
              "format": "^\\d+,\\d+$",
              "invalidText": "{0} must be a valid integer range.",
              "name": "IN-RANGE",
              "negation": "NOT.IN-RANGE",
              "type": "intRange",
              "version": "1.4.0"
            }
          ],
          "standalone": true
        },
        "header": {
          "help": "Build a condition based on a specific response header.<h4>Format: <i>response.header</i> <i>\"name\"</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response header X-Forwarded-For: 8.8.8.8</p><p><code>response.header <strong>\"X-Forwarded-For\"</strong> EQUAL <strong>\"8.8.8.8\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid string.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "string",
              "version": "1.4.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression.",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.4.0"
            },
            {
              "format": "^.+$",
              "invalidText": "{0} must be a valid QID.",
              "name": "DETECT",
              "type": "qid",
              "version": "1.4.0"
            }
          ],
          "specialKey": true,
          "standalone": true,
          "tokens": {
            "content-length": {
              "help": "Build a condition based on Content-Length header value.<h4>Format: <i>response.header.content-length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response content-length header greater than 500 bytes</p><p><code>response.header.content-length GREATER <strong>\"500\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid integer range.",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            },
            "content-type": {
              "help": "Build a condition based on Content-Type header's value.<h4>Format: <i>response.header.content-type</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match responses with application/json content</p><p><code>response.header.content-type EQUAL <strong>\"application/json\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.4.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.4.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            },
            "cookie": {
              "help": "Build a condition based on response's set-cookie attributes.<h4>Format: <i>response.header.cookie</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response cookie JSESSID=1234</p><p><code>response.header.cookie <strong>\"JSESSID\"</strong> EQUAL <strong>\"1234\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.4.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.4.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "specialKey": true,
              "standalone": true,
              "tokens": {
                "name": {
                  "help": "Build a condition based on response set-cookie name.<h4>Format: <i>response.header.cookie.name</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response cookie JSESSID</p><p><code>response.header.cookie.name EQUAL <strong>\"JSESSID\"</strong></code></p>",
                  "operators": [{
                      "invalidText": "{0} must be a valid string.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "string",
                      "version": "1.3.0"
                    },
                    {
                      "invalidText": "{0} must be a valid regular expression.",
                      "name": "MATCH",
                      "negation": "NOT.MATCH",
                      "type": "regexp",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^.+$",
                      "invalidText": "{0} must be a valid QID.",
                      "name": "DETECT",
                      "type": "qid",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true
                },
                "value": {
                  "help": "Build a condition based on response set-cookie value.<h4>Format: <i>response.header.cookie.value</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response cookie value 1234</p><p><code>response.header.cookie.value EQUAL <strong>\"1234\"</strong></code></p>",
                  "operators": [{
                      "invalidText": "{0} must be a valid string.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "string",
                      "version": "1.4.0"
                    },
                    {
                      "invalidText": "{0} must be a valid regular expression.",
                      "name": "MATCH",
                      "negation": "NOT.MATCH",
                      "type": "regexp",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^.+$",
                      "invalidText": "{0} must be a valid QID.",
                      "name": "DETECT",
                      "type": "qid",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true
                }
              }
            },
            "length": {
              "help": "Build a condition based on response's headers total length.<h4>Format: <i>response.header.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response headers total length not greater than 1000 bytes</p><p><code>response.header.length NOT.GREATER <strong>\"1000\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid integer.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.4.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid integer range.",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            },
            "line": {
              "help": "Build a condition based on response's header lines.<h4>Format: <i>response.header.line.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response header length not greater than 64 bytes</p><p><code>response.header.line.length NOT.GREATER <strong>\"64\"</strong></code></p>",
              "standalone": false,
              "tokens": {
                "count": {
                  "help": "Build a condition based on response's header lines count.<h4>Format: <i>response.header.line.count</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response header lines counts not greater than 64</p><p><code>response.header.line.count NOT.GREATER <strong>\"64\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true
                },
                "length": {
                  "help": "Build a condition based on response's line length.<h4>Format: <i>response.header.line.length</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response line length not greater than 64 bytes</p><p><code>response.header.line.length NOT.GREATER <strong>\"64\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.4.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.4.0"
                    }
                  ],
                  "standalone": true
                }
              }
            },
            "name": {
              "help": "Build a condition based on response header's name.<h4>Format: <i>response.header.name</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response header X-Forwarded-For</p><p><code>response.header.name EQUAL <strong>\"X-Forwarded-For\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.4.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.4.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            },
            "value": {
              "help": "Build a condition based on response header's value.<h4>Format: <i>response.header.value</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response header value foo</p><p><code>response.header.value EQUAL <strong>\"foo\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid string.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.4.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.4.0"
                },
                {
                  "format": "^.+$",
                  "invalidText": "{0} must be a valid QID.",
                  "name": "DETECT",
                  "type": "qid",
                  "version": "1.4.0"
                }
              ],
              "standalone": true
            }
          }
        },
        "protocol": {
          "help": "Build a condition based on HTTP response protocol's version.<h4>Format: <i>response.protocol</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response's HTTP protocol version 1.1</p><p><code>response.protocol EQUAL <strong>\"HTTP/1.1\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid HTTP protocol.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "list",
              "values": [
                "HTTP/0.9",
                "HTTP/1.0",
                "HTTP/1.1",
                "HTTP/2.0"
              ],
              "version": "1.4.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression in order to match HTTP protocol(s).",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.4.0"
            }
          ],
          "standalone": true
        },
        "time": {
          "help": "Build a condition based on response time.<h4>Format: <i>response.time</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match response time 00:00</p><p><code>response.time EQUAL <strong>\"18:00\"</strong></code></p><p>Match response time between 08:00 and 19:00</p><p><code>response.time BETWEEN <strong>\"08:00,19:00\"</strong></code></p>",
          "operators": [{
              "format": "^\\d{1,2}\\:\\d{1,2}$",
              "invalidText": "{0} must be a valid time.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "time",
              "version": "1.4.0"
            },
            {
              "format": "^\\d{1,2}\\:\\d{1,2},\\d{1,2}\\:\\d{1,2}$",
              "invalidText": "{0} must be a valid time range.",
              "name": "BETWEEN",
              "negation": "NOT.BETWEEN",
              "type": "timeRange",
              "version": "1.4.0"
            }
          ],
          "standalone": true
        }
      }
    },
    "server": {
      "help": "Build a condition based on server-side's attributes.<h4>Format: <i>server.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match server ip address 172.26.10.123</p><p><code>server.ip.address EQUAL <strong>\"172.26.10.123\"</strong></code></p><p>Match server name that is not frodo</p><p><code>server.name NOT.EQUAL <strong>\"frodo\"</strong></code></p>",
      "standalone": false,
      "tokens": {
        "ip": {
          "help": "Build a condition based on server's ip attributes.<h4>Format: <i>server.ip.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match server ip address 172.26.10.123</p><p><code>server.ip.address EQUAL <strong>\"172.26.10.123\"</strong></code></p>",
          "standalone": false,
          "tokens": {
            "address": {
              "help": "Build a condition based on server ip address.<h4>Format: <i>server.ip.address</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match server ip address 172.26.10.123</p><p><code>server.ip.address EQUAL <strong>\"172.26.10.123\"</strong></code></p><p>Match server ip range 172.26.10.10-50</p><p><code>server.ip.address IN-RANGE <strong>\"172.26.10.10-50\"</strong></code></p>",
              "operators": [{
                  "format": "^(?i:\\d{1,3}(?:-\\d{1,3})?\\.\\d{1,3}(?:-\\d{1,3})?\\.\\d{1,3}(?:-\\d{1,3})?\\.\\d{1,3}(?:-\\d{1,3})?(?:\/\\d{1,2})?|(?:[a-f0-9]{0,4}\\:){1,7}(?:[a-f0-9]{0,4}))$",
                  "invalidText": "{0} must be an IPV4/IPV6 address or address range (form xxx.xxx.xxx.xxx/xx).",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "CIDR",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression for matching IPV4/IPV6 address.",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "protocol": {
              "help": "Build a condition based on server IP protocol version.<h4>Format: <i>server.ip.protocol</i> <b>OPERATOR</b> <i>\"IPV4|IPV6\"</i>.</h4><p><i>Examples</i></p><p>Match any IPV4 server address</p><p><code>server.ip.protocol EQUAL <strong>\"IPV4\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be either IPV4 or IPV6.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "list",
                  "values": [
                    "IPV4",
                    "IPV6"
                  ],
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression in order to identify TCP/IP protocol(s).",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            }
          }
        },
        "ssl": {
          "help": "Build a condition based on server's SSL/TLS attributes.<h4>Format: <i>server.ssl.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match server ssl cipher ECDHE-ECDSA-AES256-GCM-SHA384</p><p><code>server.ssl.cipher EQUAL <strong>\"ECDHE-ECDSA-AES256-GCM-SHA384\"</strong></code></p>",
          "standalone": false,
          "tokens": {
            "cipher": {
              "help": "Build a condition based on server's SSL/TLS attributes.<h4>Format: <i>server.ssl.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match server ssl cipher ECDHE-ECDSA-AES256-GCM-SHA384</p><p><code>server.ssl.cipher EQUAL <strong>\"ECDHE-ECDSA-AES256-GCM-SHA384\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid cipher.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "string",
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression in order to identify SSL cipher(s).",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "protocol": {
              "help": "Build a condition based on server-side SSL/TLS protocol version.<h4>Format: <i>server.ssl.protocol</i> <b>OPERATOR</b> <i>\"sslv2|sslv3|tlsv1.0|tlsv1.1|tlsv1.2\"</i>.</h4><p><i>Examples</i></p><p>Match sslv2 protocol on server-side</p><p><code>server.ssl.protocol EQUAL <strong>\"sslv2\"</strong></code></p>",
              "operators": [{
                  "invalidText": "{0} must be a valid SSL/TLS protocol version (sslv2, sslv3,tlsv1.0, tlsv1.1, tlsv1.2).",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "list",
                  "values": [
                    "sslv2",
                    "sslv3",
                    "tlsv1.0",
                    "tlsv1.1",
                    "tlsv1.2"
                  ],
                  "version": "1.3.0"
                },
                {
                  "invalidText": "{0} must be a valid regular expression in order to identify SSL protocol(s).",
                  "name": "MATCH",
                  "negation": "NOT.MATCH",
                  "type": "regexp",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            },
            "session": {
              "help": "Build a condition based on server-side SSL/TLS session.<p><i>Examples</i></p><p>Match server-side ssl session lifetime reaching 60 seconds</p><p><code>server.ssl.session.timeout EQUAL <strong>\"60000\"</strong></code></p>",
              "standalone": false,
              "tokens": {
                "timeout": {
                  "help": "Build a condition based on server-side SSL/TLS session lifetime (milliseconds).<h4>Format: <i>server.ssl.session.timeout</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match server-side ssl session lifetime reaching 60 seconds</p><p><code>server.ssl.session.timeout EQUAL <strong>\"60000\"</strong></code></p>",
                  "operators": [{
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "EQUAL",
                      "negation": "NOT.EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER",
                      "negation": "NOT.GREATER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "GREATER-EQUAL",
                      "negation": "NOT.GREATER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER",
                      "negation": "NOT.LOWER",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+$",
                      "invalidText": "{0} must be a valid integer.",
                      "name": "LOWER-EQUAL",
                      "negation": "NOT.LOWER-EQUAL",
                      "type": "int",
                      "version": "1.3.0"
                    },
                    {
                      "format": "^\\d+,\\d+$",
                      "invalidText": "{0} must be a valid integer range.",
                      "name": "IN-RANGE",
                      "negation": "NOT.IN-RANGE",
                      "type": "intRange",
                      "version": "1.3.0"
                    }
                  ],
                  "standalone": true
                }
              }
            }
          }
        },
        "tcp": {
          "help": "Build a condition based on server's tcp attributes.<h4>Format: <i>server.tcp.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match server tcp port 80</p><p><code>server.tcp.port EQUAL <strong>\"80\"</strong></code></p>",
          "standalone": false,
          "tokens": {
            "port": {
              "help": "Build a condition based on server's tcp attributes.<h4>Format: <i>server.tcp.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match server tcp port 80</p><p><code>server.tcp.port EQUAL <strong>\"80\"</strong></code></p>",
              "operators": [{
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid port number.",
                  "name": "EQUAL",
                  "negation": "NOT.EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid port number.",
                  "name": "GREATER",
                  "negation": "NOT.GREATER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid port number.",
                  "name": "GREATER-EQUAL",
                  "negation": "NOT.GREATER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid port number.",
                  "name": "LOWER",
                  "negation": "NOT.LOWER",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+$",
                  "invalidText": "{0} must be a valid port number.",
                  "name": "LOWER-EQUAL",
                  "negation": "NOT.LOWER-EQUAL",
                  "type": "int",
                  "version": "1.3.0"
                },
                {
                  "format": "^\\d+,\\d+$",
                  "invalidText": "{0} must be a valid port number range.",
                  "name": "IN-RANGE",
                  "negation": "NOT.IN-RANGE",
                  "type": "intRange",
                  "version": "1.3.0"
                }
              ],
              "standalone": true
            }
          }
        }
      }
    },
    "transaction": {
      "help": "Build a condition based on transaction's attributes.<h4>Format: <i>transaction.key</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match transaction day Monday</p><p><code>transaction.day EQUAL <strong>\"Monday\"</strong></code></p>",
      "standalone": false,
      "tokens": {
        "date": {
          "help": "Build a condition based on transaction date.<h4>Format: <i>transaction.date</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match transaction date 02-07-2017</p><p><code>transaction.date EQUAL <strong>\"02-07-2017\"</strong></code></p><p>Match transaction date between 02-04-2017 and 02-08-2017</p><p><code>transaction.date BETWEEN <strong>\"02-04-2017,02-08-2017\"</strong></code></p>",
          "operators": [{
              "format": "^\\d{2}\\-\\d{2}\\-\\d{4}$",
              "invalidText": "{0} must be a valid date.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "date",
              "version": "1.3.0"
            },
            {
              "format": "^\\d{2}\\-\\d{2}\\-\\d{4}\\,\\d{2}\\-\\d{2}\\-\\d{4}$",
              "invalidText": "{0} must be a valid date range.",
              "name": "BETWEEN",
              "negation": "NOT.BETWEEN",
              "type": "dateRange",
              "version": "1.3.0"
            }
          ],
          "standalone": true
        },
        "day": {
          "help": "Build a condition based on transaction day.<h4>Format: <i>transaction.day</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match transaction day Sunday</p><p><code>transaction.day EQUAL <strong>\"Sunday\"</strong></code></p>",
          "operators": [{
              "invalidText": "{0} must be a valid day.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "list",
              "values": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "version": "1.3.0"
            },
            {
              "invalidText": "{0} must be a valid regular expression in order to identify week day(s).",
              "name": "MATCH",
              "negation": "NOT.MATCH",
              "type": "regexp",
              "version": "1.3.0"
            }
          ],
          "standalone": true
        },
        "duration": {
          "help": "Build a condition based on transaction duration (milliseconds).<h4>Format: <i>transaction.duration</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match transation duration exceeding 1000 ms</p><p><code>transaction.duration GREATER <strong>\"1000\"</strong></code></p>",
          "operators": [{
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "GREATER",
              "negation": "NOT.GREATER",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "GREATER-EQUAL",
              "negation": "NOT.GREATER-EQUAL",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "LOWER",
              "negation": "NOT.LOWER",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+$",
              "invalidText": "{0} must be a valid integer.",
              "name": "LOWER-EQUAL",
              "negation": "NOT.LOWER-EQUAL",
              "type": "int",
              "version": "1.3.0"
            },
            {
              "format": "^\\d+,\\d+$",
              "invalidText": "{0} must be a valid integer range.",
              "name": "IN-RANGE",
              "negation": "NOT.IN-RANGE",
              "type": "intRange",
              "version": "1.3.0"
            }
          ],
          "standalone": true
        },
        "time": {
          "help": "Build a condition based on transaction time.<h4>Format: <i>transaction.time</i> <b>OPERATOR</b> <i>\"value\"</i>.</h4><p><i>Examples</i></p><p>Match transaction time 00:00</p><p><code>transaction.time EQUAL <strong>\"18:00\"</strong></code></p><p>Match transaction time between 08:00 and 19:00</p><p><code>transaction.time BETWEEN <strong>\"08:00,19:00\"</strong></code></p>",
          "operators": [{
              "format": "^\\d{1,2}\\:\\d{1,2}$",
              "invalidText": "{0} must be a valid time.",
              "name": "EQUAL",
              "negation": "NOT.EQUAL",
              "type": "time",
              "version": "1.4.0"
            },
            {
              "format": "^\\d{1,2}\\:\\d{1,2},\\d{1,2}\\:\\d{1,2}$",
              "invalidText": "{0} must be a valid time range.",
              "name": "BETWEEN",
              "negation": "NOT.BETWEEN",
              "type": "timeRange",
              "version": "1.4.0"
            }
          ],
          "standalone": true
        }
      }
    }
  }
};

// ========================================

ReactDOM.render(
  <CustomRulesBuilder description={customRulesBlob.conditions} />,
  document.getElementById('root')
);