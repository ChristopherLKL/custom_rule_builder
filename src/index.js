import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lightBlob = {
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
                }
              ]
            }
          }
        }
      }
    }
  }
};

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

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if(e.key === "Enter") {
      this.props.onSubmit();
    } else if(e.key === "Tab") {
      e.preventDefault();
      this.props.onAutoComplete();
    }
  }

  render() {
    return (
      <>
        When <input type="text" name="search" value={this.props.keywords} onChange={this.props.onChange} onKeyDown={this.handleKeyDown} size="100" />
        <input type="button" name="add" value="Add" onClick={this.props.onSubmit} />
      </>
    );
  }
}

class FilteredResults extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td width="50%" valign="top">
              {this.props.step === 1 &&                
                <KeywordsPanel keywordsList={this.props.keywordsList} onClick={this.props.onKeywordsClick} onMouseOver={this.props.onMouseOver} />
              }
              {((this.props.isSpecialKey !== true && this.props.step === 2) ||
                (this.props.isSpecialKey === true && this.props.step === 3)) &&
                <OperatorsPanel operatorsList={this.props.operatorsList} onClick={this.props.onOperatorsClick} />
              }
              {this.props.step === 3 &&
                <ValuesPanel valuesList={this.props.valuesList} onClick={this.props.onValuesClick} />
              }
            </td>
            <td>
              {this.props.step === 1 &&
                <DescriptionPanel helpText={this.props.helpText} />
              }
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class ValuesPanel extends React.Component {
  render() {
    return (
      <>
        {this.props.valuesList && this.props.valuesList.map((entry) => {
          return (
            <div key={entry.id}>
              <button onClick={(value) => this.props.onClick(entry.value)}>{entry.value}</button>
            </div>
          );
        })}
      </>
    );
  }
}

class OperatorsPanel extends React.Component {
  render() {
    return (
      <>
        {this.props.operatorsList && this.props.operatorsList.map((operator) => {
          return (
            <div key={operator.id}>
              <button onClick={(name, value) => this.props.onClick(operator.name, operator.operator)}>{operator.name}</button>
            </div>
          );
        })}
      </>
    );
  }
}

class KeywordsPanel extends React.Component {
  render() {
    return (
      <>
        {this.props.keywordsList && this.props.keywordsList.map((keywords) => {
          return (
            <div key={keywords.id}>
              <button onClick={(id) => this.props.onClick(keywords.id)} onMouseOver={(id) => this.props.onMouseOver(keywords.id)}>{keywords.keyword}</button>
            </div>
          );
        })}
      </>
    );
  }
}

class DescriptionPanel extends React.Component {
  render() {
    return (
      <>
        {this.props.helpText}
      </>
    );
  }
}

class CustomRulesBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: "",
      keywordsList: [],
      operatorsList: [],
      valuesList: [],
      ruleConditions: [],
      helpText: "",
      isSpecialKey: false,
      id: -1,
      step: 0,
      errorMessage: ""
    };
    this.indexCondition = 0;
    this.keywordsFullList = [];
    this.indexKeyword = 0;
    this.fullOperatorsList = [];
    this.fullValuesList = [];
    this.handleOperatorsClick = this.handleOperatorsClick.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);
    this.handleKeywordsClick = this.handleKeywordsClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleValuesClick = this.handleValuesClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAutoComplete = this.handleAutoComplete.bind(this);
  }

  UNSAFE_componentWillMount() {
    let rulePart = "";
    rulePart = this.buildChildrenList(this.props.description, "");
    this.setKeywordFullList(rulePart);
    console.log(this.keywordsFullList);
  }

  setKeywordFullList(rulePart, object) {
    if(rulePart !== "" && this.keywordsFullList.indexOf(rulePart) < 0) {
      let name = rulePart.substring(rulePart.lastIndexOf(".") + 1);
      this.keywordsFullList.push({id: this.indexKeyword, keyword: rulePart, name: name, description: object});
      this.indexKeyword++;
    }
  }

  buildChildrenList(object, rulePart) {
    for(const property in object) {
      const currentRulePart = (rulePart !== "" ? rulePart + "." + property : property);
      this.setKeywordFullList(currentRulePart, object[property]);
    }

    for(const property in object) {
      if(typeof object[property] === "object" && object[property].tokens !== undefined) {
        let currentRulePart = (rulePart !== "" ? rulePart + "." + property : property);

        currentRulePart = this.buildChildrenList(object[property].tokens, currentRulePart);
        this.setKeywordFullList(currentRulePart, object[property]);
      }
    }

    return "";
  }

  getDataFromKeywordsFullList(ruleParts, property) {
    let value = null;
    for(let i = 0; value === null && i < this.keywordsFullList.length; i++) {
      if(this.keywordsFullList[i].keyword.trim() === ruleParts[0].trim() && this.keywordsFullList[i].description.operators !== undefined) {
        switch(property) {
          case "id":
            value = this.keywordsFullList[i].id;
            break;
          case "standalone":
            value = this.keywordsFullList[i].description.standalone;
            break;
          case "specialkey":
            value = this.keywordsFullList[i].description.specialKey;
            break;
          case "type":
            for(let j = 0; value === null && j < this.keywordsFullList[i].description.operators.length; j++) {
              if(this.keywordsFullList[i].description.operators[j].name === ruleParts[1].toUpperCase() ||
                (this.keywordsFullList[i].description.operators[j].negation !== undefined &&
                  this.keywordsFullList[i].description.operators[j].negation === ruleParts[1].toUpperCase())) {
                value = this.keywordsFullList[i].description.operators[j].type;
              }
            }
            break;
          case "values":
            for(let j = 0; value === null && j < this.keywordsFullList[i].description.operators.length; j++) {
              if(this.keywordsFullList[i].description.operators[j].name === ruleParts[1].toUpperCase() ||
                (this.keywordsFullList[i].description.operators[j].negation !== undefined &&
                  this.keywordsFullList[i].description.operators[j].negation === ruleParts[1].toUpperCase())) {
                value = [];
                for(let k = 0; k < this.keywordsFullList[i].description.operators[j].values.length; k++) {
                  if(this.keywordsFullList[i].description.operators[j].values[k] !== ruleParts[2].replaceAll("\"", "").toUpperCase() &&
                    this.keywordsFullList[i].description.operators[j].values[k].startsWith(ruleParts[2].replaceAll("\"", "").toUpperCase())) {
                    value.push(this.keywordsFullList[i].description.operators[j].values[k]);
                  }
                }
              }
            }
            break;
          default:
            
        }
      }
    }
    return value;
  }

  handleFiltering(event) {
    let keywords = (event !== undefined ? event.target.value : this.state.keywords);
    let operatorsList = [];
    let valuesList = [];
    let isSpecialKey = false;
    const keywordsList = [];
    const ruleParts = keywords.replaceAll("  ", " ").split(" ");
    const step = ruleParts.length;
    switch(step) {
      case 1:
        this.keywordsFullList.map((entry) => {
          if(entry.keyword.startsWith(ruleParts[0])) {
            let pointsInSearchCount = 0;
            for(let j = 0; j < ruleParts[0].length; j++) {
              if(ruleParts[0][j] === ".") {
                pointsInSearchCount++;
              }
            }
            let pointsInListCount = 0;
            for(let j = 0; j < entry.keyword.length; j++) {
              if(entry.keyword[j] === ".") {
                pointsInListCount++;
              }
            }
            if(pointsInSearchCount === pointsInListCount) {
              keywordsList.push(entry);
            }
          }
          return true;
        });
        break;
      case 2:
        isSpecialKey = this.getDataFromKeywordsFullList(ruleParts, "specialkey");
        if(isSpecialKey === true) {
          keywords = ruleParts[0] + " \"" + ruleParts[1].replaceAll("\"", "") + "\" ";
          const event = {
            target: {
              value: keywords
            }
          };
          this.handleFiltering(event);
        } else {
          operatorsList = this.loadOperators(ruleParts, 1, operatorsList);
          if(ruleParts[1].replaceAll("\"", "").trim() === "") {
            this.fullOperatorsList = operatorsList;
          }
          keywords = ruleParts[0] + " " + ruleParts[1].toUpperCase();
        }
        break;
      case 3:
        isSpecialKey = this.getDataFromKeywordsFullList(ruleParts, "specialkey");
        if(isSpecialKey === true) {
          operatorsList = this.loadOperators(ruleParts, 2, operatorsList);
          if(ruleParts[2].replaceAll("\"", "").trim() === "") {
            this.fullOperatorsList = operatorsList;
          }
          keywords = ruleParts[0] + " " + ruleParts[1] + " " + ruleParts[2].toUpperCase();
        } else {
          const type = this.getDataFromKeywordsFullList(ruleParts, "type");
          if(type === "list") {
            valuesList = this.getDataFromKeywordsFullList(ruleParts, "values");
            if(valuesList.length > 0) {
              let i = 0;
              valuesList = valuesList.map((value) => {
                return (
                    {id: i++, value: value}
                );
              });
            }
            if(ruleParts[2].replaceAll("\"", "").trim() === "") {
              this.fullValuesList = valuesList;
            }
            keywords = ruleParts[0] + " " + ruleParts[1].toUpperCase() + " \"" + ruleParts[2].toUpperCase().replaceAll("\"", "") + "\"";
          }
        }
        break;
      default:
    }
    let state = {};
    if(keywordsList.length > 0) {
      state["keywordsList"] = keywordsList;
      state["helpText"] = keywordsList[0].description.help;
    }
    if(operatorsList.length > 0) {
      state["operatorsList"] = operatorsList;
    }
    if(valuesList.length > 0) {
      state["valuesList"] = valuesList;
    }
    state["keywords"] = keywords;
    state["step"] = step;
    state["isSpecialKey"] = isSpecialKey;
//    console.log(state);
    this.setState(state);
  }

  loadOperators(ruleParts, partIndex, operatorsList) {
    let id = this.getDataFromKeywordsFullList(ruleParts, "id");
    if(this.keywordsFullList[id] === undefined || this.keywordsFullList[id].description.standalone !== true) {
      return false;
    }
    let name = "";
    let j = 0;
    for(let i = 0; this.keywordsFullList[id] !== undefined && i < this.keywordsFullList[id].description.operators.length; i++) {
      if(ruleParts[partIndex].toUpperCase().trim() === "" ||
        this.keywordsFullList[id].description.operators[i].name.toUpperCase().trim().startsWith(ruleParts[partIndex].toUpperCase().trim())) {
        name = this.keywordsFullList[id].description.operators[i].name;
        operatorsList.push({id: j, name: name, operator: this.keywordsFullList[id].description.operators[i]});
        j++;
      }
      if((ruleParts[partIndex].toUpperCase().trim() === "" && this.keywordsFullList[id].description.operators[i].negation !== undefined) ||
        (this.keywordsFullList[id].description.operators[i].negation !== undefined &&
          this.keywordsFullList[id].description.operators[i].negation.toUpperCase().trim().startsWith(ruleParts[partIndex].toUpperCase().trim()))) {
        name = this.keywordsFullList[id].description.operators[i].negation;
        operatorsList.push({id: j, name: name, operator: this.keywordsFullList[id].description.operators[i]});
        j++;
      }
    }
    return operatorsList;
  }

  handleOperatorsClick(name, value) {
    const ruleParts = this.state.keywords.split(" ");
    let isSpecialKey = this.getDataFromKeywordsFullList(ruleParts, "specialkey");
    const keywords = ruleParts[0] + (isSpecialKey === true ? " " + ruleParts[1] : "") + " " + name + " \"\"";
    this.setKeywords(keywords);
  }

  handleValuesClick(value) {
    const ruleParts = this.state.keywords.split(" ");
    const keywords = ruleParts[0] + " " + ruleParts[1] + " \"" + value + "\"";
    this.setKeywords(keywords, undefined, true);
  }
  
  handleKeywordsClick(id) {
    const keywords = this.keywordsFullList[id].keyword + (this.keywordsFullList[id].description.tokens !== undefined ? "." : " ");
    this.setKeywords(keywords, id);
  }

  setKeywords(keywords, id, resetValuesList) {
    const event = {
      target: {
        value: keywords
      }
    };
    let objectKeywords = {
      keywords: keywords
    };
    if(id !== undefined) {
      objectKeywords["id"] = id;
    }
    if(resetValuesList === true) {
      objectKeywords["valuesList"] = [];
    }
    this.setState(objectKeywords);
    this.handleFiltering(event);
  }

  handleMouseOver(id) {
    this.setState({helpText: this.keywordsFullList[id].description.help});
  }

  handleAutoComplete() {
    const ruleParts = this.state.keywords.split(" ");
    let keywords = null;
    let toAutoComplete = false;
    if(ruleParts.length === 1 && this.state.keywordsList[0] !== undefined) {
      keywords = this.state.keywordsList[0].keyword;
      toAutoComplete = true;
    } else if(this.state.isSpecialKey !== true && ruleParts.length === 2 && this.state.operatorsList[0] !== undefined) {
      keywords = ruleParts[0] + " " + this.state.operatorsList[0].name;
      toAutoComplete = true;
    } else if(this.state.isSpecialKey === true && ruleParts.length === 3 && this.state.operatorsList[0] !== undefined) {
      keywords = ruleParts[0] + " \"" + ruleParts[1].replaceAll("\"", "") + "\" " + this.state.operatorsList[0].name;
      toAutoComplete = true;
    }
    if(toAutoComplete === true) {
      this.setKeywords(keywords);
    }
  }

  handleSubmit() {
    const ruleConditions = this.state.ruleConditions;
    const firstPartObjects = this.buildRuleConditionFirstPartObjects();
    const ruleParts = this.state.keywords.split(" ");
    const isStandalone = this.getDataFromKeywordsFullList(ruleParts, "standalone");
    const isSpecialKey = this.getDataFromKeywordsFullList(ruleParts, "specialkey");
    if(isStandalone === true &&
      ((isSpecialKey === true && ruleParts.length === 4 && ruleParts[1].replaceAll("\"", "") !== "" && ruleParts[3].replaceAll("\"", "") !== "") ||
        (isSpecialKey !== true && ruleParts.length === 3 && ruleParts[2].replaceAll("\"", "") !== ""))) {
      const paramName = (isSpecialKey !== true ? null : ruleParts[1].replaceAll("\"", ""));
      const operator = (isSpecialKey !== true ? ruleParts[1] : ruleParts[2]);
      const conditionValue = (isSpecialKey !== true ? ruleParts[2].replaceAll("\"", "") : ruleParts[3].replaceAll("\"", ""));
      let operatorObject = null;
      for(let i = 0; operatorObject === null && i < this.fullOperatorsList.length; i++) {
        if(operator === this.fullOperatorsList[i].name) {
          operatorObject = this.fullOperatorsList[i].operator;
        }
      }
      if(operatorObject !== null) {
        let isConditionValueValid = true;
        if(operatorObject.format !== undefined) {
          const pattern = new RegExp(operatorObject.format);
          if(pattern.test(conditionValue) !== true) {
            isConditionValueValid = false;
          }
        }

        if(operatorObject.type === "list") {
          let values = this.fullValuesList.map((valueObject) => {
            return (valueObject.value);
          });
          if(values.indexOf(conditionValue) < 0) {
            isConditionValueValid = false;
          }
        }

        if(isConditionValueValid === true) {
          this.setState({
            ruleConditions: ruleConditions.concat([{
              id: this.indexCondition,
              condition: this.state.keywords,
              firstPartObjects: firstPartObjects,
              isSpecialKey: isSpecialKey,
              fullOperatorsList: this.fullOperatorsList,
              paramName: paramName,
              operator: operator,
              conditionValue: conditionValue,
              fullValuesList: this.fullValuesList
            }]),
            keywords: "",
            errorMessage: "",
            valuesList: []
          });
          this.indexCondition++;
        } else {
          this.setState({
            errorMessage: operatorObject.invalidText.replaceAll("{0}", ruleParts[0])
          });
        }
      }
    } else {
      this.handleAutoComplete();
    }
  }

  buildRuleConditionFirstPartObjects() {
    const firstParts = this.state.keywords.split(" ")[0].split(".");
    let firstPartsObject = [];
    for(let currentPart="", i=0; i < firstParts.length; i++) {
      currentPart += (currentPart !== "" ? "." : "" ) + firstParts[i];
      const object = this.keywordsFullList.filter((keywordEntry) => {
        if(keywordEntry.keyword === currentPart) {
          return keywordEntry;
        }
        return null;
      })[0];
      firstPartsObject.push(object);
    }
    return firstPartsObject;
  }

  handleRemove(id) {
    const ruleConditions = this.state.ruleConditions;
    let newConditions = [];
    for(let i=0; i < ruleConditions.length; i++) {
      if(ruleConditions[i].id !== id) {
        newConditions.push({
          id: ruleConditions[i].id,
          condition: ruleConditions[i].condition,
          firstPartObjects: ruleConditions[i].firstPartObjects,
          isSpecialKey: ruleConditions[i].isSpecialKey,
          fullOperatorsList: ruleConditions[i].fullOperatorsList,
          paramName: ruleConditions[i].paramName,
          operator: ruleConditions[i].operator,
          conditionValue: ruleConditions[i].conditionValue,
          fullValuesList: ruleConditions[i].fullValuesList
        });
      }
    }
    this.setState({ruleConditions: newConditions});
  }

  render() {
    return (
      <>
        <SearchBar keywords={this.state.keywords} onChange={this.handleFiltering} onSubmit={this.handleSubmit} onAutoComplete={this.handleAutoComplete} />
        <FilteredResults keywordsList={this.state.keywordsList} operatorsList={this.state.operatorsList} valuesList={this.state.valuesList} isSpecialKey={this.state.isSpecialKey} step={this.state.step} helpText={this.state.helpText} onKeywordsClick={this.handleKeywordsClick} onOperatorsClick={this.handleOperatorsClick} onValuesClick={this.handleValuesClick} onMouseOver={this.handleMouseOver} />
        <ErrorLabel errorMessage={this.state.errorMessage} />
        <RuleConditions conditions={this.state.ruleConditions} onSubmit={this.handleRemove} />
      </>
    );
  }
}

class ErrorLabel extends React.Component {
  render() {
    return (
      <div>{this.props.errorMessage}</div>
    );
  }
}

class ConditionRow extends React.Component {
  UNSAFE_componentWillMount() {
    console.log(this.props.condition);
  }

  render() {
    return (
      <div>
        {this.props.condition.firstPartObjects.map((object) => {
          return (
            <button key={object.id}>{object.name}</button>
          );
        })}
        {this.props.condition.isSpecialKey && <input type="text" value={this.props.condition.paramName} />}
        <button>{this.props.condition.operator}</button>
        <input type="text" value={this.props.condition.conditionValue} />
        <button onClick={(id) => this.props.onSubmit(this.props.condition.id)}>Remove</button>
      </div>
    );
  }
}

class RuleConditions extends React.Component {
  render() {
    return (
      <>
        {this.props.conditions && this.props.conditions.map((ruleCondition) => {
          return (
            <ConditionRow key={ruleCondition.id} condition={ruleCondition} onSubmit={this.props.onSubmit} />
          );
        })}
      </>
    );
  }
}

// ========================================

ReactDOM.render(
  <CustomRulesBuilder description={customRulesBlob.conditions} />,
  document.getElementById('root')
);