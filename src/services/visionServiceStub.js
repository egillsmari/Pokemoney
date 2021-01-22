
/*
  Sevice stub for development. Use when testing the google vision api.
*/
export const visionServiceStub = async image => {
  return exampleJson;
}

const exampleJson = {
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 31
            },
            {
              "x": 749,
              "y": 31
            },
            {
              "x": 749,
              "y": 968
            },
            {
              "y": 968
            }
          ]
        },
        "confidence": 0.38958332,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 50
            },
            {
              "x": 749,
              "y": 50
            },
            {
              "x": 749,
              "y": 800
            },
            {
              "y": 800
            }
          ]
        },
        "confidence": 0.48697916,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 100
            },
            {
              "x": 749,
              "y": 100
            },
            {
              "x": 749,
              "y": 725
            },
            {
              "y": 725
            }
          ]
        },
        "confidence": 0.53125,
        "importanceFraction": 0.90909094
      }
    ]
  },
  "fullTextAnnotation": {
    "pages": [
      {
        "blocks": [
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 106,
                  "y": 70
                },
                {
                  "x": 224,
                  "y": 73
                },
                {
                  "x": 224,
                  "y": 91
                },
                {
                  "x": 106,
                  "y": 88
                }
              ]
            },
            "confidence": 0.99,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 106,
                      "y": 70
                    },
                    {
                      "x": 224,
                      "y": 73
                    },
                    {
                      "x": 224,
                      "y": 91
                    },
                    {
                      "x": 106,
                      "y": 88
                    }
                  ]
                },
                "confidence": 0.99,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "en"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 106,
                          "y": 70
                        },
                        {
                          "x": 145,
                          "y": 71
                        },
                        {
                          "x": 145,
                          "y": 89
                        },
                        {
                          "x": 106,
                          "y": 88
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 106,
                              "y": 71
                            },
                            {
                              "x": 114,
                              "y": 71
                            },
                            {
                              "x": 114,
                              "y": 88
                            },
                            {
                              "x": 106,
                              "y": 88
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "B"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 117,
                              "y": 71
                            },
                            {
                              "x": 123,
                              "y": 71
                            },
                            {
                              "x": 123,
                              "y": 88
                            },
                            {
                              "x": 117,
                              "y": 88
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 127,
                              "y": 71
                            },
                            {
                              "x": 132,
                              "y": 71
                            },
                            {
                              "x": 132,
                              "y": 88
                            },
                            {
                              "x": 127,
                              "y": 88
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 134,
                              "y": 71
                            },
                            {
                              "x": 138,
                              "y": 71
                            },
                            {
                              "x": 138,
                              "y": 88
                            },
                            {
                              "x": 134,
                              "y": 88
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 141,
                              "y": 72
                            },
                            {
                              "x": 145,
                              "y": 72
                            },
                            {
                              "x": 145,
                              "y": 89
                            },
                            {
                              "x": 141,
                              "y": 89
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 153,
                          "y": 71
                        },
                        {
                          "x": 224,
                          "y": 73
                        },
                        {
                          "x": 224,
                          "y": 91
                        },
                        {
                          "x": 153,
                          "y": 89
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 153,
                              "y": 72
                            },
                            {
                              "x": 161,
                              "y": 72
                            },
                            {
                              "x": 161,
                              "y": 89
                            },
                            {
                              "x": 153,
                              "y": 89
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "P"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 163,
                              "y": 72
                            },
                            {
                              "x": 171,
                              "y": 72
                            },
                            {
                              "x": 171,
                              "y": 89
                            },
                            {
                              "x": 163,
                              "y": 89
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 173,
                              "y": 72
                            },
                            {
                              "x": 181,
                              "y": 72
                            },
                            {
                              "x": 181,
                              "y": 89
                            },
                            {
                              "x": 173,
                              "y": 89
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 183,
                              "y": 73
                            },
                            {
                              "x": 189,
                              "y": 73
                            },
                            {
                              "x": 189,
                              "y": 90
                            },
                            {
                              "x": 183,
                              "y": 90
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "é"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 192,
                              "y": 73
                            },
                            {
                              "x": 205,
                              "y": 73
                            },
                            {
                              "x": 205,
                              "y": 90
                            },
                            {
                              "x": 192,
                              "y": 90
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 207,
                              "y": 73
                            },
                            {
                              "x": 215,
                              "y": 73
                            },
                            {
                              "x": 215,
                              "y": 90
                            },
                            {
                              "x": 207,
                              "y": 90
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 217,
                              "y": 73
                            },
                            {
                              "x": 224,
                              "y": 73
                            },
                            {
                              "x": 224,
                              "y": 90
                            },
                            {
                              "x": 217,
                              "y": 90
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 1,
                  "languageCode": "en"
                }
              ]
            }
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 106,
                  "y": 88
                },
                {
                  "x": 251,
                  "y": 90
                },
                {
                  "x": 250,
                  "y": 126
                },
                {
                  "x": 105,
                  "y": 124
                }
              ]
            },
            "confidence": 0.97,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 106,
                      "y": 88
                    },
                    {
                      "x": 251,
                      "y": 90
                    },
                    {
                      "x": 250,
                      "y": 126
                    },
                    {
                      "x": 105,
                      "y": 124
                    }
                  ]
                },
                "confidence": 0.97,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "vi"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 106,
                          "y": 88
                        },
                        {
                          "x": 251,
                          "y": 90
                        },
                        {
                          "x": 250,
                          "y": 126
                        },
                        {
                          "x": 105,
                          "y": 124
                        }
                      ]
                    },
                    "confidence": 0.97,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "vi"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 106,
                              "y": 89
                            },
                            {
                              "x": 126,
                              "y": 89
                            },
                            {
                              "x": 125,
                              "y": 124
                            },
                            {
                              "x": 105,
                              "y": 124
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "vi"
                            }
                          ]
                        },
                        "text": "P"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 131,
                              "y": 89
                            },
                            {
                              "x": 143,
                              "y": 89
                            },
                            {
                              "x": 142,
                              "y": 124
                            },
                            {
                              "x": 130,
                              "y": 124
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "vi"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 148,
                              "y": 89
                            },
                            {
                              "x": 161,
                              "y": 89
                            },
                            {
                              "x": 160,
                              "y": 124
                            },
                            {
                              "x": 147,
                              "y": 124
                            }
                          ]
                        },
                        "confidence": 0.93,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "vi"
                            }
                          ]
                        },
                        "text": "k"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 169,
                              "y": 90
                            },
                            {
                              "x": 184,
                              "y": 90
                            },
                            {
                              "x": 183,
                              "y": 125
                            },
                            {
                              "x": 168,
                              "y": 125
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "vi"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 191,
                              "y": 90
                            },
                            {
                              "x": 205,
                              "y": 90
                            },
                            {
                              "x": 204,
                              "y": 125
                            },
                            {
                              "x": 190,
                              "y": 125
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "vi"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 211,
                              "y": 90
                            },
                            {
                              "x": 228,
                              "y": 90
                            },
                            {
                              "x": 227,
                              "y": 125
                            },
                            {
                              "x": 210,
                              "y": 125
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "vi"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 238,
                              "y": 91
                            },
                            {
                              "x": 251,
                              "y": 91
                            },
                            {
                              "x": 250,
                              "y": 126
                            },
                            {
                              "x": 237,
                              "y": 126
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "vi"
                            }
                          ]
                        },
                        "text": "u"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 1,
                  "languageCode": "vi"
                }
              ]
            }
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 487,
                  "y": 97
                },
                {
                  "x": 584,
                  "y": 93
                },
                {
                  "x": 585,
                  "y": 128
                },
                {
                  "x": 489,
                  "y": 132
                }
              ]
            },
            "confidence": 0.99,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 487,
                      "y": 97
                    },
                    {
                      "x": 584,
                      "y": 93
                    },
                    {
                      "x": 585,
                      "y": 128
                    },
                    {
                      "x": 489,
                      "y": 132
                    }
                  ]
                },
                "confidence": 0.99,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "id"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 487,
                          "y": 97
                        },
                        {
                          "x": 526,
                          "y": 95
                        },
                        {
                          "x": 527,
                          "y": 130
                        },
                        {
                          "x": 489,
                          "y": 132
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "id"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 487,
                              "y": 97
                            },
                            {
                              "x": 504,
                              "y": 96
                            },
                            {
                              "x": 505,
                              "y": 131
                            },
                            {
                              "x": 489,
                              "y": 132
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "id"
                            }
                          ]
                        },
                        "text": "5"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 507,
                              "y": 96
                            },
                            {
                              "x": 526,
                              "y": 95
                            },
                            {
                              "x": 527,
                              "y": 130
                            },
                            {
                              "x": 509,
                              "y": 131
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "id"
                            }
                          ]
                        },
                        "text": "0"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 541,
                          "y": 95
                        },
                        {
                          "x": 584,
                          "y": 93
                        },
                        {
                          "x": 585,
                          "y": 128
                        },
                        {
                          "x": 543,
                          "y": 130
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "id"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 541,
                              "y": 95
                            },
                            {
                              "x": 562,
                              "y": 94
                            },
                            {
                              "x": 563,
                              "y": 129
                            },
                            {
                              "x": 543,
                              "y": 130
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "id"
                            }
                          ]
                        },
                        "text": "H"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 565,
                              "y": 94
                            },
                            {
                              "x": 584,
                              "y": 93
                            },
                            {
                              "x": 585,
                              "y": 128
                            },
                            {
                              "x": 567,
                              "y": 129
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "id"
                            }
                          ]
                        },
                        "text": "P"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 1,
                  "languageCode": "id"
                }
              ]
            }
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 77,
                  "y": 520
                },
                {
                  "x": 119,
                  "y": 519
                },
                {
                  "x": 120,
                  "y": 537
                },
                {
                  "x": 78,
                  "y": 538
                }
              ]
            },
            "confidence": 0.49,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 77,
                      "y": 520
                    },
                    {
                      "x": 119,
                      "y": 519
                    },
                    {
                      "x": 120,
                      "y": 537
                    },
                    {
                      "x": 78,
                      "y": 538
                    }
                  ]
                },
                "confidence": 0.49,
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 77,
                          "y": 520
                        },
                        {
                          "x": 119,
                          "y": 519
                        },
                        {
                          "x": 120,
                          "y": 537
                        },
                        {
                          "x": 78,
                          "y": 538
                        }
                      ]
                    },
                    "confidence": 0.49,
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 77,
                              "y": 520
                            },
                            {
                              "x": 87,
                              "y": 520
                            },
                            {
                              "x": 88,
                              "y": 537
                            },
                            {
                              "x": 78,
                              "y": 537
                            }
                          ]
                        },
                        "confidence": 0.95,
                        "text": "O"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 93,
                              "y": 520
                            },
                            {
                              "x": 102,
                              "y": 520
                            },
                            {
                              "x": 103,
                              "y": 537
                            },
                            {
                              "x": 94,
                              "y": 537
                            }
                          ]
                        },
                        "confidence": 0.22,
                        "text": "T"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 108,
                              "y": 520
                            },
                            {
                              "x": 119,
                              "y": 520
                            },
                            {
                              "x": 120,
                              "y": 537
                            },
                            {
                              "x": 109,
                              "y": 537
                            }
                          ]
                        },
                        "confidence": 0.3,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          }
                        },
                        "text": "O"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 162,
                  "y": 525
                },
                {
                  "x": 581,
                  "y": 525
                },
                {
                  "x": 581,
                  "y": 548
                },
                {
                  "x": 162,
                  "y": 548
                }
              ]
            },
            "confidence": 0.96,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 162,
                      "y": 525
                    },
                    {
                      "x": 581,
                      "y": 525
                    },
                    {
                      "x": 581,
                      "y": 548
                    },
                    {
                      "x": 162,
                      "y": 548
                    }
                  ]
                },
                "confidence": 0.96,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "en"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 162,
                          "y": 525
                        },
                        {
                          "x": 227,
                          "y": 525
                        },
                        {
                          "x": 227,
                          "y": 548
                        },
                        {
                          "x": 162,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 162,
                              "y": 525
                            },
                            {
                              "x": 178,
                              "y": 525
                            },
                            {
                              "x": 178,
                              "y": 548
                            },
                            {
                              "x": 162,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "M"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 186,
                              "y": 525
                            },
                            {
                              "x": 198,
                              "y": 525
                            },
                            {
                              "x": 198,
                              "y": 548
                            },
                            {
                              "x": 186,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 197,
                              "y": 525
                            },
                            {
                              "x": 205,
                              "y": 525
                            },
                            {
                              "x": 205,
                              "y": 548
                            },
                            {
                              "x": 197,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "u"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 209,
                              "y": 525
                            },
                            {
                              "x": 217,
                              "y": 525
                            },
                            {
                              "x": 217,
                              "y": 548
                            },
                            {
                              "x": 209,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 219,
                              "y": 525
                            },
                            {
                              "x": 227,
                              "y": 525
                            },
                            {
                              "x": 227,
                              "y": 548
                            },
                            {
                              "x": 219,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 235,
                          "y": 525
                        },
                        {
                          "x": 316,
                          "y": 525
                        },
                        {
                          "x": 316,
                          "y": 548
                        },
                        {
                          "x": 235,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 235,
                              "y": 525
                            },
                            {
                              "x": 244,
                              "y": 525
                            },
                            {
                              "x": 244,
                              "y": 548
                            },
                            {
                              "x": 235,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "P"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 248,
                              "y": 525
                            },
                            {
                              "x": 256,
                              "y": 525
                            },
                            {
                              "x": 256,
                              "y": 548
                            },
                            {
                              "x": 248,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 257,
                              "y": 525
                            },
                            {
                              "x": 265,
                              "y": 525
                            },
                            {
                              "x": 265,
                              "y": 548
                            },
                            {
                              "x": 257,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 269,
                              "y": 525
                            },
                            {
                              "x": 277,
                              "y": 525
                            },
                            {
                              "x": 277,
                              "y": 548
                            },
                            {
                              "x": 269,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "é"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 277,
                              "y": 525
                            },
                            {
                              "x": 289,
                              "y": 525
                            },
                            {
                              "x": 289,
                              "y": 548
                            },
                            {
                              "x": 277,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 297,
                              "y": 525
                            },
                            {
                              "x": 308,
                              "y": 525
                            },
                            {
                              "x": 308,
                              "y": 548
                            },
                            {
                              "x": 297,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 308,
                              "y": 525
                            },
                            {
                              "x": 316,
                              "y": 525
                            },
                            {
                              "x": 316,
                              "y": 548
                            },
                            {
                              "x": 308,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 318,
                          "y": 525
                        },
                        {
                          "x": 324,
                          "y": 525
                        },
                        {
                          "x": 324,
                          "y": 548
                        },
                        {
                          "x": 318,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 318,
                              "y": 525
                            },
                            {
                              "x": 324,
                              "y": 525
                            },
                            {
                              "x": 324,
                              "y": 548
                            },
                            {
                              "x": 318,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 329,
                          "y": 525
                        },
                        {
                          "x": 386,
                          "y": 525
                        },
                        {
                          "x": 386,
                          "y": 548
                        },
                        {
                          "x": 329,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 329,
                              "y": 525
                            },
                            {
                              "x": 338,
                              "y": 525
                            },
                            {
                              "x": 338,
                              "y": 548
                            },
                            {
                              "x": 329,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "L"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 342,
                              "y": 525
                            },
                            {
                              "x": 348,
                              "y": 525
                            },
                            {
                              "x": 348,
                              "y": 548
                            },
                            {
                              "x": 342,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 351,
                              "y": 525
                            },
                            {
                              "x": 359,
                              "y": 525
                            },
                            {
                              "x": 359,
                              "y": 548
                            },
                            {
                              "x": 351,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 363,
                              "y": 525
                            },
                            {
                              "x": 370,
                              "y": 525
                            },
                            {
                              "x": 370,
                              "y": 548
                            },
                            {
                              "x": 363,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "g"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 374,
                              "y": 525
                            },
                            {
                              "x": 379,
                              "y": 525
                            },
                            {
                              "x": 379,
                              "y": 548
                            },
                            {
                              "x": 374,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 382,
                              "y": 525
                            },
                            {
                              "x": 386,
                              "y": 525
                            },
                            {
                              "x": 386,
                              "y": 548
                            },
                            {
                              "x": 382,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 390,
                          "y": 525
                        },
                        {
                          "x": 394,
                          "y": 525
                        },
                        {
                          "x": 394,
                          "y": 548
                        },
                        {
                          "x": 390,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 390,
                              "y": 525
                            },
                            {
                              "x": 394,
                              "y": 525
                            },
                            {
                              "x": 394,
                              "y": 548
                            },
                            {
                              "x": 390,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": ":"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 405,
                          "y": 525
                        },
                        {
                          "x": 431,
                          "y": 525
                        },
                        {
                          "x": 431,
                          "y": 548
                        },
                        {
                          "x": 405,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.8,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 405,
                              "y": 525
                            },
                            {
                              "x": 410,
                              "y": 525
                            },
                            {
                              "x": 410,
                              "y": 548
                            },
                            {
                              "x": 405,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.6,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "1"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 411,
                              "y": 525
                            },
                            {
                              "x": 418,
                              "y": 525
                            },
                            {
                              "x": 418,
                              "y": 548
                            },
                            {
                              "x": 411,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.92,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "'"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 422,
                              "y": 525
                            },
                            {
                              "x": 431,
                              "y": 525
                            },
                            {
                              "x": 431,
                              "y": 548
                            },
                            {
                              "x": 422,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.9,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "4"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 433,
                          "y": 525
                        },
                        {
                          "x": 439,
                          "y": 525
                        },
                        {
                          "x": 439,
                          "y": 548
                        },
                        {
                          "x": 433,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.91,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 433,
                              "y": 525
                            },
                            {
                              "x": 439,
                              "y": 525
                            },
                            {
                              "x": 439,
                              "y": 548
                            },
                            {
                              "x": 433,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.91,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "\""
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 441,
                          "y": 525
                        },
                        {
                          "x": 447,
                          "y": 525
                        },
                        {
                          "x": 447,
                          "y": 548
                        },
                        {
                          "x": 441,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.85,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 441,
                              "y": 525
                            },
                            {
                              "x": 447,
                              "y": 525
                            },
                            {
                              "x": 447,
                              "y": 548
                            },
                            {
                              "x": 441,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.85,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": ","
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 448,
                          "y": 525
                        },
                        {
                          "x": 515,
                          "y": 525
                        },
                        {
                          "x": 515,
                          "y": 548
                        },
                        {
                          "x": 448,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.98,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 448,
                              "y": 525
                            },
                            {
                              "x": 463,
                              "y": 525
                            },
                            {
                              "x": 463,
                              "y": 548
                            },
                            {
                              "x": 448,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.91,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "W"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 470,
                              "y": 525
                            },
                            {
                              "x": 480,
                              "y": 525
                            },
                            {
                              "x": 480,
                              "y": 548
                            },
                            {
                              "x": 470,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 480,
                              "y": 525
                            },
                            {
                              "x": 485,
                              "y": 525
                            },
                            {
                              "x": 485,
                              "y": 548
                            },
                            {
                              "x": 480,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 486,
                              "y": 525
                            },
                            {
                              "x": 492,
                              "y": 525
                            },
                            {
                              "x": 492,
                              "y": 548
                            },
                            {
                              "x": 486,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "g"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 495,
                              "y": 525
                            },
                            {
                              "x": 503,
                              "y": 525
                            },
                            {
                              "x": 503,
                              "y": 548
                            },
                            {
                              "x": 495,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 506,
                              "y": 525
                            },
                            {
                              "x": 515,
                              "y": 525
                            },
                            {
                              "x": 515,
                              "y": 548
                            },
                            {
                              "x": 506,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 513,
                          "y": 525
                        },
                        {
                          "x": 519,
                          "y": 525
                        },
                        {
                          "x": 519,
                          "y": 548
                        },
                        {
                          "x": 513,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.97,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 513,
                              "y": 525
                            },
                            {
                              "x": 519,
                              "y": 525
                            },
                            {
                              "x": 519,
                              "y": 548
                            },
                            {
                              "x": 513,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": ":"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 527,
                          "y": 525
                        },
                        {
                          "x": 544,
                          "y": 525
                        },
                        {
                          "x": 544,
                          "y": 548
                        },
                        {
                          "x": 527,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 527,
                              "y": 525
                            },
                            {
                              "x": 534,
                              "y": 525
                            },
                            {
                              "x": 534,
                              "y": 548
                            },
                            {
                              "x": 527,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "1"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 536,
                              "y": 525
                            },
                            {
                              "x": 544,
                              "y": 525
                            },
                            {
                              "x": 544,
                              "y": 548
                            },
                            {
                              "x": 536,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "3"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 552,
                          "y": 525
                        },
                        {
                          "x": 575,
                          "y": 525
                        },
                        {
                          "x": 575,
                          "y": 548
                        },
                        {
                          "x": 552,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 552,
                              "y": 525
                            },
                            {
                              "x": 557,
                              "y": 525
                            },
                            {
                              "x": 557,
                              "y": 548
                            },
                            {
                              "x": 552,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "l"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 558,
                              "y": 525
                            },
                            {
                              "x": 564,
                              "y": 525
                            },
                            {
                              "x": 564,
                              "y": 548
                            },
                            {
                              "x": 558,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "b"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 567,
                              "y": 525
                            },
                            {
                              "x": 575,
                              "y": 525
                            },
                            {
                              "x": 575,
                              "y": 548
                            },
                            {
                              "x": 567,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 575,
                          "y": 525
                        },
                        {
                          "x": 581,
                          "y": 525
                        },
                        {
                          "x": 581,
                          "y": 548
                        },
                        {
                          "x": 575,
                          "y": 548
                        }
                      ]
                    },
                    "confidence": 0.82,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 575,
                              "y": 525
                            },
                            {
                              "x": 581,
                              "y": 525
                            },
                            {
                              "x": 581,
                              "y": 548
                            },
                            {
                              "x": 575,
                              "y": 548
                            }
                          ]
                        },
                        "confidence": 0.82,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 1,
                  "languageCode": "en"
                }
              ]
            }
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 178,
                  "y": 595
                },
                {
                  "x": 545,
                  "y": 595
                },
                {
                  "x": 545,
                  "y": 741
                },
                {
                  "x": 178,
                  "y": 741
                }
              ]
            },
            "confidence": 0.98,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 178,
                      "y": 595
                    },
                    {
                      "x": 545,
                      "y": 595
                    },
                    {
                      "x": 545,
                      "y": 741
                    },
                    {
                      "x": 178,
                      "y": 741
                    }
                  ]
                },
                "confidence": 0.98,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "en"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 180,
                          "y": 595
                        },
                        {
                          "x": 259,
                          "y": 595
                        },
                        {
                          "x": 259,
                          "y": 631
                        },
                        {
                          "x": 180,
                          "y": 631
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 180,
                              "y": 595
                            },
                            {
                              "x": 192,
                              "y": 595
                            },
                            {
                              "x": 192,
                              "y": 631
                            },
                            {
                              "x": 180,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "S"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 195,
                              "y": 595
                            },
                            {
                              "x": 211,
                              "y": 595
                            },
                            {
                              "x": 211,
                              "y": 631
                            },
                            {
                              "x": 195,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "p"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 213,
                              "y": 595
                            },
                            {
                              "x": 228,
                              "y": 595
                            },
                            {
                              "x": 228,
                              "y": 631
                            },
                            {
                              "x": 213,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 231,
                              "y": 595
                            },
                            {
                              "x": 242,
                              "y": 595
                            },
                            {
                              "x": 242,
                              "y": 631
                            },
                            {
                              "x": 231,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 244,
                              "y": 595
                            },
                            {
                              "x": 259,
                              "y": 595
                            },
                            {
                              "x": 259,
                              "y": 631
                            },
                            {
                              "x": 244,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 275,
                          "y": 595
                        },
                        {
                          "x": 286,
                          "y": 595
                        },
                        {
                          "x": 286,
                          "y": 631
                        },
                        {
                          "x": 275,
                          "y": 631
                        }
                      ]
                    },
                    "confidence": 0.97,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 275,
                              "y": 595
                            },
                            {
                              "x": 277,
                              "y": 595
                            },
                            {
                              "x": 277,
                              "y": 631
                            },
                            {
                              "x": 275,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "I"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 280,
                              "y": 595
                            },
                            {
                              "x": 286,
                              "y": 595
                            },
                            {
                              "x": 286,
                              "y": 631
                            },
                            {
                              "x": 280,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "f"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 294,
                          "y": 595
                        },
                        {
                          "x": 339,
                          "y": 595
                        },
                        {
                          "x": 339,
                          "y": 631
                        },
                        {
                          "x": 294,
                          "y": 631
                        }
                      ]
                    },
                    "confidence": 0.98,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 294,
                              "y": 595
                            },
                            {
                              "x": 303,
                              "y": 595
                            },
                            {
                              "x": 303,
                              "y": 631
                            },
                            {
                              "x": 294,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "y"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 305,
                              "y": 595
                            },
                            {
                              "x": 316,
                              "y": 595
                            },
                            {
                              "x": 316,
                              "y": 631
                            },
                            {
                              "x": 305,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 319,
                              "y": 595
                            },
                            {
                              "x": 328,
                              "y": 595
                            },
                            {
                              "x": 328,
                              "y": 631
                            },
                            {
                              "x": 319,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "u"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 332,
                              "y": 595
                            },
                            {
                              "x": 339,
                              "y": 595
                            },
                            {
                              "x": 339,
                              "y": 631
                            },
                            {
                              "x": 332,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 349,
                          "y": 595
                        },
                        {
                          "x": 445,
                          "y": 595
                        },
                        {
                          "x": 445,
                          "y": 631
                        },
                        {
                          "x": 349,
                          "y": 631
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 349,
                              "y": 595
                            },
                            {
                              "x": 360,
                              "y": 595
                            },
                            {
                              "x": 360,
                              "y": 631
                            },
                            {
                              "x": 349,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 363,
                              "y": 595
                            },
                            {
                              "x": 372,
                              "y": 595
                            },
                            {
                              "x": 372,
                              "y": 631
                            },
                            {
                              "x": 363,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "p"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 375,
                              "y": 595
                            },
                            {
                              "x": 385,
                              "y": 595
                            },
                            {
                              "x": 385,
                              "y": 631
                            },
                            {
                              "x": 375,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "p"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 388,
                              "y": 595
                            },
                            {
                              "x": 399,
                              "y": 595
                            },
                            {
                              "x": 399,
                              "y": 631
                            },
                            {
                              "x": 388,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 402,
                              "y": 595
                            },
                            {
                              "x": 410,
                              "y": 595
                            },
                            {
                              "x": 410,
                              "y": 631
                            },
                            {
                              "x": 402,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 414,
                              "y": 595
                            },
                            {
                              "x": 423,
                              "y": 595
                            },
                            {
                              "x": 423,
                              "y": 631
                            },
                            {
                              "x": 414,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 426,
                              "y": 595
                            },
                            {
                              "x": 435,
                              "y": 595
                            },
                            {
                              "x": 435,
                              "y": 631
                            },
                            {
                              "x": 426,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 437,
                              "y": 595
                            },
                            {
                              "x": 445,
                              "y": 595
                            },
                            {
                              "x": 445,
                              "y": 631
                            },
                            {
                              "x": 437,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 454,
                          "y": 595
                        },
                        {
                          "x": 484,
                          "y": 595
                        },
                        {
                          "x": 484,
                          "y": 631
                        },
                        {
                          "x": 454,
                          "y": 631
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 454,
                              "y": 595
                            },
                            {
                              "x": 463,
                              "y": 595
                            },
                            {
                              "x": 463,
                              "y": 631
                            },
                            {
                              "x": 454,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 466,
                              "y": 595
                            },
                            {
                              "x": 475,
                              "y": 595
                            },
                            {
                              "x": 475,
                              "y": 631
                            },
                            {
                              "x": 466,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 477,
                              "y": 595
                            },
                            {
                              "x": 484,
                              "y": 595
                            },
                            {
                              "x": 484,
                              "y": 631
                            },
                            {
                              "x": 477,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 494,
                          "y": 595
                        },
                        {
                          "x": 525,
                          "y": 595
                        },
                        {
                          "x": 525,
                          "y": 631
                        },
                        {
                          "x": 494,
                          "y": 631
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 494,
                              "y": 595
                            },
                            {
                              "x": 503,
                              "y": 595
                            },
                            {
                              "x": 503,
                              "y": 631
                            },
                            {
                              "x": 494,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 505,
                              "y": 595
                            },
                            {
                              "x": 514,
                              "y": 595
                            },
                            {
                              "x": 514,
                              "y": 631
                            },
                            {
                              "x": 505,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 516,
                              "y": 595
                            },
                            {
                              "x": 525,
                              "y": 595
                            },
                            {
                              "x": 525,
                              "y": 631
                            },
                            {
                              "x": 516,
                              "y": 631
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "EOL_SURE_SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "y"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 178,
                          "y": 630
                        },
                        {
                          "x": 263,
                          "y": 629
                        },
                        {
                          "x": 263,
                          "y": 653
                        },
                        {
                          "x": 178,
                          "y": 654
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 178,
                              "y": 630
                            },
                            {
                              "x": 190,
                              "y": 630
                            },
                            {
                              "x": 190,
                              "y": 653
                            },
                            {
                              "x": 178,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "B"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 193,
                              "y": 630
                            },
                            {
                              "x": 202,
                              "y": 630
                            },
                            {
                              "x": 202,
                              "y": 653
                            },
                            {
                              "x": 193,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 205,
                              "y": 630
                            },
                            {
                              "x": 215,
                              "y": 630
                            },
                            {
                              "x": 215,
                              "y": 653
                            },
                            {
                              "x": 205,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 218,
                              "y": 630
                            },
                            {
                              "x": 226,
                              "y": 630
                            },
                            {
                              "x": 226,
                              "y": 653
                            },
                            {
                              "x": 218,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 229,
                              "y": 630
                            },
                            {
                              "x": 237,
                              "y": 630
                            },
                            {
                              "x": 237,
                              "y": 653
                            },
                            {
                              "x": 229,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 242,
                              "y": 630
                            },
                            {
                              "x": 251,
                              "y": 630
                            },
                            {
                              "x": 251,
                              "y": 653
                            },
                            {
                              "x": 242,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 254,
                              "y": 630
                            },
                            {
                              "x": 263,
                              "y": 630
                            },
                            {
                              "x": 263,
                              "y": 653
                            },
                            {
                              "x": 254,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "d"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 275,
                          "y": 629
                        },
                        {
                          "x": 365,
                          "y": 628
                        },
                        {
                          "x": 365,
                          "y": 652
                        },
                        {
                          "x": 275,
                          "y": 653
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 275,
                              "y": 630
                            },
                            {
                              "x": 285,
                              "y": 630
                            },
                            {
                              "x": 285,
                              "y": 653
                            },
                            {
                              "x": 275,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "P"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 289,
                              "y": 630
                            },
                            {
                              "x": 296,
                              "y": 630
                            },
                            {
                              "x": 296,
                              "y": 653
                            },
                            {
                              "x": 289,
                              "y": 653
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 300,
                              "y": 629
                            },
                            {
                              "x": 308,
                              "y": 629
                            },
                            {
                              "x": 308,
                              "y": 652
                            },
                            {
                              "x": 300,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 315,
                              "y": 629
                            },
                            {
                              "x": 323,
                              "y": 629
                            },
                            {
                              "x": 323,
                              "y": 652
                            },
                            {
                              "x": 315,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "é"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 323,
                              "y": 629
                            },
                            {
                              "x": 334,
                              "y": 629
                            },
                            {
                              "x": 334,
                              "y": 652
                            },
                            {
                              "x": 323,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 345,
                              "y": 629
                            },
                            {
                              "x": 356,
                              "y": 629
                            },
                            {
                              "x": 356,
                              "y": 652
                            },
                            {
                              "x": 345,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 360,
                              "y": 629
                            },
                            {
                              "x": 365,
                              "y": 629
                            },
                            {
                              "x": 365,
                              "y": 652
                            },
                            {
                              "x": 360,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 369,
                          "y": 629
                        },
                        {
                          "x": 374,
                          "y": 629
                        },
                        {
                          "x": 374,
                          "y": 652
                        },
                        {
                          "x": 369,
                          "y": 652
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 369,
                              "y": 629
                            },
                            {
                              "x": 374,
                              "y": 629
                            },
                            {
                              "x": 374,
                              "y": 652
                            },
                            {
                              "x": 369,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": ","
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 381,
                          "y": 628
                        },
                        {
                          "x": 451,
                          "y": 627
                        },
                        {
                          "x": 451,
                          "y": 651
                        },
                        {
                          "x": 381,
                          "y": 652
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 381,
                              "y": 629
                            },
                            {
                              "x": 389,
                              "y": 629
                            },
                            {
                              "x": 389,
                              "y": 652
                            },
                            {
                              "x": 381,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 392,
                              "y": 629
                            },
                            {
                              "x": 401,
                              "y": 629
                            },
                            {
                              "x": 401,
                              "y": 652
                            },
                            {
                              "x": 392,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 404,
                              "y": 629
                            },
                            {
                              "x": 415,
                              "y": 629
                            },
                            {
                              "x": 415,
                              "y": 652
                            },
                            {
                              "x": 404,
                              "y": 652
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 418,
                              "y": 628
                            },
                            {
                              "x": 429,
                              "y": 628
                            },
                            {
                              "x": 429,
                              "y": 651
                            },
                            {
                              "x": 418,
                              "y": 651
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 432,
                              "y": 628
                            },
                            {
                              "x": 439,
                              "y": 628
                            },
                            {
                              "x": 439,
                              "y": 651
                            },
                            {
                              "x": 432,
                              "y": 651
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 441,
                              "y": 628
                            },
                            {
                              "x": 451,
                              "y": 628
                            },
                            {
                              "x": 451,
                              "y": 651
                            },
                            {
                              "x": 441,
                              "y": 651
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 465,
                          "y": 628
                        },
                        {
                          "x": 467,
                          "y": 628
                        },
                        {
                          "x": 467,
                          "y": 651
                        },
                        {
                          "x": 465,
                          "y": 651
                        }
                      ]
                    },
                    "confidence": 0.24,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 465,
                              "y": 628
                            },
                            {
                              "x": 467,
                              "y": 628
                            },
                            {
                              "x": 467,
                              "y": 651
                            },
                            {
                              "x": 465,
                              "y": 651
                            }
                          ]
                        },
                        "confidence": 0.24,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "l"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 481,
                          "y": 628
                        },
                        {
                          "x": 500,
                          "y": 628
                        },
                        {
                          "x": 500,
                          "y": 651
                        },
                        {
                          "x": 481,
                          "y": 651
                        }
                      ]
                    },
                    "confidence": 0.81,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 481,
                              "y": 628
                            },
                            {
                              "x": 492,
                              "y": 628
                            },
                            {
                              "x": 492,
                              "y": 651
                            },
                            {
                              "x": 481,
                              "y": 651
                            }
                          ]
                        },
                        "confidence": 0.75,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 494,
                              "y": 628
                            },
                            {
                              "x": 500,
                              "y": 628
                            },
                            {
                              "x": 500,
                              "y": 651
                            },
                            {
                              "x": 494,
                              "y": 651
                            }
                          ]
                        },
                        "confidence": 0.87,
                        "property": {
                          "detectedBreak": {
                            "type": "EOL_SURE_SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "f"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 178,
                          "y": 658
                        },
                        {
                          "x": 228,
                          "y": 657
                        },
                        {
                          "x": 228,
                          "y": 679
                        },
                        {
                          "x": 178,
                          "y": 680
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 178,
                              "y": 658
                            },
                            {
                              "x": 184,
                              "y": 658
                            },
                            {
                              "x": 184,
                              "y": 680
                            },
                            {
                              "x": 178,
                              "y": 680
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 187,
                              "y": 658
                            },
                            {
                              "x": 196,
                              "y": 658
                            },
                            {
                              "x": 196,
                              "y": 680
                            },
                            {
                              "x": 187,
                              "y": 680
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 200,
                              "y": 658
                            },
                            {
                              "x": 209,
                              "y": 658
                            },
                            {
                              "x": 209,
                              "y": 680
                            },
                            {
                              "x": 200,
                              "y": 680
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 212,
                              "y": 658
                            },
                            {
                              "x": 228,
                              "y": 658
                            },
                            {
                              "x": 228,
                              "y": 680
                            },
                            {
                              "x": 212,
                              "y": 680
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "m"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 239,
                          "y": 657
                        },
                        {
                          "x": 273,
                          "y": 657
                        },
                        {
                          "x": 273,
                          "y": 680
                        },
                        {
                          "x": 239,
                          "y": 680
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 239,
                              "y": 658
                            },
                            {
                              "x": 248,
                              "y": 658
                            },
                            {
                              "x": 248,
                              "y": 680
                            },
                            {
                              "x": 239,
                              "y": 680
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 250,
                              "y": 658
                            },
                            {
                              "x": 259,
                              "y": 658
                            },
                            {
                              "x": 259,
                              "y": 680
                            },
                            {
                              "x": 250,
                              "y": 680
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 263,
                              "y": 657
                            },
                            {
                              "x": 273,
                              "y": 657
                            },
                            {
                              "x": 273,
                              "y": 679
                            },
                            {
                              "x": 263,
                              "y": 679
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "d"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 283,
                          "y": 657
                        },
                        {
                          "x": 317,
                          "y": 657
                        },
                        {
                          "x": 317,
                          "y": 679
                        },
                        {
                          "x": 283,
                          "y": 679
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 283,
                              "y": 657
                            },
                            {
                              "x": 290,
                              "y": 657
                            },
                            {
                              "x": 290,
                              "y": 679
                            },
                            {
                              "x": 283,
                              "y": 679
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 292,
                              "y": 657
                            },
                            {
                              "x": 300,
                              "y": 657
                            },
                            {
                              "x": 300,
                              "y": 679
                            },
                            {
                              "x": 292,
                              "y": 679
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 305,
                              "y": 657
                            },
                            {
                              "x": 307,
                              "y": 657
                            },
                            {
                              "x": 307,
                              "y": 679
                            },
                            {
                              "x": 305,
                              "y": 679
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 310,
                              "y": 657
                            },
                            {
                              "x": 317,
                              "y": 657
                            },
                            {
                              "x": 317,
                              "y": 679
                            },
                            {
                              "x": 310,
                              "y": 679
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 327,
                          "y": 656
                        },
                        {
                          "x": 386,
                          "y": 655
                        },
                        {
                          "x": 386,
                          "y": 678
                        },
                        {
                          "x": 327,
                          "y": 679
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 327,
                              "y": 657
                            },
                            {
                              "x": 336,
                              "y": 657
                            },
                            {
                              "x": 336,
                              "y": 679
                            },
                            {
                              "x": 327,
                              "y": 679
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 339,
                              "y": 656
                            },
                            {
                              "x": 344,
                              "y": 656
                            },
                            {
                              "x": 344,
                              "y": 678
                            },
                            {
                              "x": 339,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 347,
                              "y": 656
                            },
                            {
                              "x": 353,
                              "y": 656
                            },
                            {
                              "x": 353,
                              "y": 678
                            },
                            {
                              "x": 347,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 356,
                              "y": 656
                            },
                            {
                              "x": 364,
                              "y": 656
                            },
                            {
                              "x": 364,
                              "y": 678
                            },
                            {
                              "x": 356,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 368,
                              "y": 656
                            },
                            {
                              "x": 374,
                              "y": 656
                            },
                            {
                              "x": 374,
                              "y": 678
                            },
                            {
                              "x": 368,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 378,
                              "y": 656
                            },
                            {
                              "x": 386,
                              "y": 656
                            },
                            {
                              "x": 386,
                              "y": 678
                            },
                            {
                              "x": 378,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 396,
                          "y": 655
                        },
                        {
                          "x": 441,
                          "y": 654
                        },
                        {
                          "x": 441,
                          "y": 677
                        },
                        {
                          "x": 396,
                          "y": 678
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 396,
                              "y": 656
                            },
                            {
                              "x": 405,
                              "y": 656
                            },
                            {
                              "x": 405,
                              "y": 678
                            },
                            {
                              "x": 396,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "d"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 409,
                              "y": 656
                            },
                            {
                              "x": 420,
                              "y": 656
                            },
                            {
                              "x": 420,
                              "y": 678
                            },
                            {
                              "x": 409,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 423,
                              "y": 655
                            },
                            {
                              "x": 432,
                              "y": 655
                            },
                            {
                              "x": 432,
                              "y": 677
                            },
                            {
                              "x": 423,
                              "y": 677
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 435,
                              "y": 655
                            },
                            {
                              "x": 441,
                              "y": 655
                            },
                            {
                              "x": 441,
                              "y": 677
                            },
                            {
                              "x": 435,
                              "y": 677
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 456,
                          "y": 655
                        },
                        {
                          "x": 471,
                          "y": 655
                        },
                        {
                          "x": 471,
                          "y": 677
                        },
                        {
                          "x": 456,
                          "y": 677
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 456,
                              "y": 655
                            },
                            {
                              "x": 457,
                              "y": 655
                            },
                            {
                              "x": 457,
                              "y": 677
                            },
                            {
                              "x": 456,
                              "y": 677
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "1"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 462,
                              "y": 655
                            },
                            {
                              "x": 471,
                              "y": 655
                            },
                            {
                              "x": 471,
                              "y": 677
                            },
                            {
                              "x": 462,
                              "y": 677
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "EOL_SURE_SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "0"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 178,
                          "y": 687
                        },
                        {
                          "x": 253,
                          "y": 686
                        },
                        {
                          "x": 253,
                          "y": 716
                        },
                        {
                          "x": 178,
                          "y": 717
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 178,
                              "y": 687
                            },
                            {
                              "x": 188,
                              "y": 687
                            },
                            {
                              "x": 188,
                              "y": 716
                            },
                            {
                              "x": 178,
                              "y": 716
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "d"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 192,
                              "y": 687
                            },
                            {
                              "x": 200,
                              "y": 687
                            },
                            {
                              "x": 200,
                              "y": 716
                            },
                            {
                              "x": 192,
                              "y": 716
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 203,
                              "y": 687
                            },
                            {
                              "x": 213,
                              "y": 687
                            },
                            {
                              "x": 213,
                              "y": 716
                            },
                            {
                              "x": 203,
                              "y": 716
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 221,
                              "y": 687
                            },
                            {
                              "x": 231,
                              "y": 687
                            },
                            {
                              "x": 231,
                              "y": 716
                            },
                            {
                              "x": 221,
                              "y": 716
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 234,
                              "y": 687
                            },
                            {
                              "x": 242,
                              "y": 687
                            },
                            {
                              "x": 242,
                              "y": 716
                            },
                            {
                              "x": 234,
                              "y": 716
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "g"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 247,
                              "y": 686
                            },
                            {
                              "x": 253,
                              "y": 686
                            },
                            {
                              "x": 253,
                              "y": 715
                            },
                            {
                              "x": 247,
                              "y": 715
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 263,
                          "y": 686
                        },
                        {
                          "x": 283,
                          "y": 686
                        },
                        {
                          "x": 283,
                          "y": 715
                        },
                        {
                          "x": 263,
                          "y": 715
                        }
                      ]
                    },
                    "confidence": 1,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 263,
                              "y": 686
                            },
                            {
                              "x": 270,
                              "y": 686
                            },
                            {
                              "x": 270,
                              "y": 715
                            },
                            {
                              "x": 263,
                              "y": 715
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 272,
                              "y": 686
                            },
                            {
                              "x": 283,
                              "y": 686
                            },
                            {
                              "x": 283,
                              "y": 715
                            },
                            {
                              "x": 272,
                              "y": 715
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 294,
                          "y": 686
                        },
                        {
                          "x": 306,
                          "y": 686
                        },
                        {
                          "x": 306,
                          "y": 715
                        },
                        {
                          "x": 294,
                          "y": 715
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 294,
                              "y": 686
                            },
                            {
                              "x": 300,
                              "y": 686
                            },
                            {
                              "x": 300,
                              "y": 715
                            },
                            {
                              "x": 294,
                              "y": 715
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 302,
                              "y": 686
                            },
                            {
                              "x": 306,
                              "y": 686
                            },
                            {
                              "x": 306,
                              "y": 715
                            },
                            {
                              "x": 302,
                              "y": 715
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 306,
                          "y": 685
                        },
                        {
                          "x": 310,
                          "y": 685
                        },
                        {
                          "x": 310,
                          "y": 714
                        },
                        {
                          "x": 306,
                          "y": 714
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 306,
                              "y": 685
                            },
                            {
                              "x": 310,
                              "y": 685
                            },
                            {
                              "x": 310,
                              "y": 714
                            },
                            {
                              "x": 306,
                              "y": 714
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 318,
                          "y": 685
                        },
                        {
                          "x": 326,
                          "y": 685
                        },
                        {
                          "x": 326,
                          "y": 714
                        },
                        {
                          "x": 318,
                          "y": 714
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 318,
                              "y": 685
                            },
                            {
                              "x": 326,
                              "y": 685
                            },
                            {
                              "x": 326,
                              "y": 714
                            },
                            {
                              "x": 318,
                              "y": 714
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "("
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 324,
                          "y": 685
                        },
                        {
                          "x": 375,
                          "y": 684
                        },
                        {
                          "x": 375,
                          "y": 714
                        },
                        {
                          "x": 324,
                          "y": 715
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 324,
                              "y": 685
                            },
                            {
                              "x": 338,
                              "y": 685
                            },
                            {
                              "x": 338,
                              "y": 714
                            },
                            {
                              "x": 324,
                              "y": 714
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "D"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 345,
                              "y": 685
                            },
                            {
                              "x": 353,
                              "y": 685
                            },
                            {
                              "x": 353,
                              "y": 714
                            },
                            {
                              "x": 345,
                              "y": 714
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 355,
                              "y": 685
                            },
                            {
                              "x": 361,
                              "y": 685
                            },
                            {
                              "x": 361,
                              "y": 714
                            },
                            {
                              "x": 355,
                              "y": 714
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 364,
                              "y": 685
                            },
                            {
                              "x": 370,
                              "y": 685
                            },
                            {
                              "x": 370,
                              "y": 714
                            },
                            {
                              "x": 364,
                              "y": 714
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "'"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 373,
                              "y": 684
                            },
                            {
                              "x": 375,
                              "y": 684
                            },
                            {
                              "x": 375,
                              "y": 713
                            },
                            {
                              "x": 373,
                              "y": 713
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 385,
                          "y": 684
                        },
                        {
                          "x": 434,
                          "y": 683
                        },
                        {
                          "x": 434,
                          "y": 713
                        },
                        {
                          "x": 385,
                          "y": 714
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 385,
                              "y": 684
                            },
                            {
                              "x": 396,
                              "y": 684
                            },
                            {
                              "x": 396,
                              "y": 713
                            },
                            {
                              "x": 385,
                              "y": 713
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 399,
                              "y": 684
                            },
                            {
                              "x": 407,
                              "y": 684
                            },
                            {
                              "x": 407,
                              "y": 713
                            },
                            {
                              "x": 399,
                              "y": 713
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "p"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 411,
                              "y": 684
                            },
                            {
                              "x": 418,
                              "y": 684
                            },
                            {
                              "x": 418,
                              "y": 713
                            },
                            {
                              "x": 411,
                              "y": 713
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "p"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 421,
                              "y": 684
                            },
                            {
                              "x": 426,
                              "y": 684
                            },
                            {
                              "x": 426,
                              "y": 713
                            },
                            {
                              "x": 421,
                              "y": 713
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "l"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 428,
                              "y": 684
                            },
                            {
                              "x": 434,
                              "y": 684
                            },
                            {
                              "x": 434,
                              "y": 713
                            },
                            {
                              "x": 428,
                              "y": 713
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "y"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 440,
                          "y": 683
                        },
                        {
                          "x": 532,
                          "y": 682
                        },
                        {
                          "x": 532,
                          "y": 712
                        },
                        {
                          "x": 440,
                          "y": 713
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 440,
                              "y": 683
                            },
                            {
                              "x": 453,
                              "y": 683
                            },
                            {
                              "x": 453,
                              "y": 712
                            },
                            {
                              "x": 440,
                              "y": 712
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "W"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 461,
                              "y": 683
                            },
                            {
                              "x": 471,
                              "y": 683
                            },
                            {
                              "x": 471,
                              "y": 712
                            },
                            {
                              "x": 461,
                              "y": 712
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 475,
                              "y": 683
                            },
                            {
                              "x": 481,
                              "y": 683
                            },
                            {
                              "x": 481,
                              "y": 712
                            },
                            {
                              "x": 475,
                              "y": 712
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 483,
                              "y": 683
                            },
                            {
                              "x": 490,
                              "y": 683
                            },
                            {
                              "x": 490,
                              "y": 712
                            },
                            {
                              "x": 483,
                              "y": 712
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 495,
                              "y": 683
                            },
                            {
                              "x": 503,
                              "y": 683
                            },
                            {
                              "x": 503,
                              "y": 712
                            },
                            {
                              "x": 495,
                              "y": 712
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 507,
                              "y": 682
                            },
                            {
                              "x": 515,
                              "y": 682
                            },
                            {
                              "x": 515,
                              "y": 711
                            },
                            {
                              "x": 507,
                              "y": 711
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 519,
                              "y": 682
                            },
                            {
                              "x": 526,
                              "y": 682
                            },
                            {
                              "x": 526,
                              "y": 711
                            },
                            {
                              "x": 519,
                              "y": 711
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 529,
                              "y": 682
                            },
                            {
                              "x": 532,
                              "y": 682
                            },
                            {
                              "x": 532,
                              "y": 711
                            },
                            {
                              "x": 529,
                              "y": 711
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "EOL_SURE_SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 178,
                          "y": 714
                        },
                        {
                          "x": 212,
                          "y": 714
                        },
                        {
                          "x": 212,
                          "y": 741
                        },
                        {
                          "x": 178,
                          "y": 741
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 178,
                              "y": 714
                            },
                            {
                              "x": 187,
                              "y": 714
                            },
                            {
                              "x": 187,
                              "y": 741
                            },
                            {
                              "x": 178,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 190,
                              "y": 714
                            },
                            {
                              "x": 199,
                              "y": 714
                            },
                            {
                              "x": 199,
                              "y": 741
                            },
                            {
                              "x": 190,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 202,
                              "y": 714
                            },
                            {
                              "x": 212,
                              "y": 714
                            },
                            {
                              "x": 212,
                              "y": 741
                            },
                            {
                              "x": 202,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "d"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 222,
                          "y": 714
                        },
                        {
                          "x": 318,
                          "y": 713
                        },
                        {
                          "x": 318,
                          "y": 740
                        },
                        {
                          "x": 222,
                          "y": 741
                        }
                      ]
                    },
                    "confidence": 0.97,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 222,
                              "y": 714
                            },
                            {
                              "x": 233,
                              "y": 714
                            },
                            {
                              "x": 233,
                              "y": 741
                            },
                            {
                              "x": 222,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "R"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 236,
                              "y": 714
                            },
                            {
                              "x": 244,
                              "y": 714
                            },
                            {
                              "x": 244,
                              "y": 741
                            },
                            {
                              "x": 236,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 246,
                              "y": 714
                            },
                            {
                              "x": 253,
                              "y": 714
                            },
                            {
                              "x": 253,
                              "y": 741
                            },
                            {
                              "x": 246,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 255,
                              "y": 714
                            },
                            {
                              "x": 258,
                              "y": 714
                            },
                            {
                              "x": 258,
                              "y": 741
                            },
                            {
                              "x": 255,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 260,
                              "y": 714
                            },
                            {
                              "x": 267,
                              "y": 714
                            },
                            {
                              "x": 267,
                              "y": 741
                            },
                            {
                              "x": 260,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 0.77,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 269,
                              "y": 714
                            },
                            {
                              "x": 275,
                              "y": 714
                            },
                            {
                              "x": 275,
                              "y": 741
                            },
                            {
                              "x": 269,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 277,
                              "y": 714
                            },
                            {
                              "x": 286,
                              "y": 714
                            },
                            {
                              "x": 286,
                              "y": 741
                            },
                            {
                              "x": 277,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 288,
                              "y": 714
                            },
                            {
                              "x": 297,
                              "y": 714
                            },
                            {
                              "x": 297,
                              "y": 741
                            },
                            {
                              "x": 288,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 300,
                              "y": 714
                            },
                            {
                              "x": 308,
                              "y": 714
                            },
                            {
                              "x": 308,
                              "y": 741
                            },
                            {
                              "x": 300,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 310,
                              "y": 714
                            },
                            {
                              "x": 318,
                              "y": 714
                            },
                            {
                              "x": 318,
                              "y": 741
                            },
                            {
                              "x": 310,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 329,
                          "y": 714
                        },
                        {
                          "x": 353,
                          "y": 714
                        },
                        {
                          "x": 353,
                          "y": 741
                        },
                        {
                          "x": 329,
                          "y": 741
                        }
                      ]
                    },
                    "confidence": 0.96,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 329,
                              "y": 714
                            },
                            {
                              "x": 336,
                              "y": 714
                            },
                            {
                              "x": 336,
                              "y": 741
                            },
                            {
                              "x": 329,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 0.9,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "f"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 337,
                              "y": 714
                            },
                            {
                              "x": 343,
                              "y": 714
                            },
                            {
                              "x": 343,
                              "y": 741
                            },
                            {
                              "x": 337,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 348,
                              "y": 714
                            },
                            {
                              "x": 353,
                              "y": 714
                            },
                            {
                              "x": 353,
                              "y": 741
                            },
                            {
                              "x": 348,
                              "y": 741
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 362,
                          "y": 713
                        },
                        {
                          "x": 440,
                          "y": 713
                        },
                        {
                          "x": 440,
                          "y": 740
                        },
                        {
                          "x": 362,
                          "y": 740
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 362,
                              "y": 713
                            },
                            {
                              "x": 373,
                              "y": 713
                            },
                            {
                              "x": 373,
                              "y": 740
                            },
                            {
                              "x": 362,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "B"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 375,
                              "y": 713
                            },
                            {
                              "x": 383,
                              "y": 713
                            },
                            {
                              "x": 383,
                              "y": 740
                            },
                            {
                              "x": 375,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 386,
                              "y": 713
                            },
                            {
                              "x": 395,
                              "y": 713
                            },
                            {
                              "x": 395,
                              "y": 740
                            },
                            {
                              "x": 386,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 397,
                              "y": 713
                            },
                            {
                              "x": 405,
                              "y": 713
                            },
                            {
                              "x": 405,
                              "y": 740
                            },
                            {
                              "x": 397,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 407,
                              "y": 713
                            },
                            {
                              "x": 417,
                              "y": 713
                            },
                            {
                              "x": 417,
                              "y": 740
                            },
                            {
                              "x": 407,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 420,
                              "y": 713
                            },
                            {
                              "x": 427,
                              "y": 713
                            },
                            {
                              "x": 427,
                              "y": 740
                            },
                            {
                              "x": 420,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 430,
                              "y": 713
                            },
                            {
                              "x": 440,
                              "y": 713
                            },
                            {
                              "x": 440,
                              "y": 740
                            },
                            {
                              "x": 430,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "d"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 450,
                          "y": 713
                        },
                        {
                          "x": 533,
                          "y": 713
                        },
                        {
                          "x": 533,
                          "y": 740
                        },
                        {
                          "x": 450,
                          "y": 740
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 450,
                              "y": 713
                            },
                            {
                              "x": 459,
                              "y": 713
                            },
                            {
                              "x": 459,
                              "y": 740
                            },
                            {
                              "x": 450,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "P"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 461,
                              "y": 713
                            },
                            {
                              "x": 469,
                              "y": 713
                            },
                            {
                              "x": 469,
                              "y": 740
                            },
                            {
                              "x": 461,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 472,
                              "y": 713
                            },
                            {
                              "x": 481,
                              "y": 713
                            },
                            {
                              "x": 481,
                              "y": 740
                            },
                            {
                              "x": 472,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 483,
                              "y": 713
                            },
                            {
                              "x": 492,
                              "y": 713
                            },
                            {
                              "x": 492,
                              "y": 740
                            },
                            {
                              "x": 483,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "é"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 494,
                              "y": 713
                            },
                            {
                              "x": 510,
                              "y": 713
                            },
                            {
                              "x": 510,
                              "y": 740
                            },
                            {
                              "x": 494,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 513,
                              "y": 713
                            },
                            {
                              "x": 522,
                              "y": 713
                            },
                            {
                              "x": 522,
                              "y": 740
                            },
                            {
                              "x": 513,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 524,
                              "y": 713
                            },
                            {
                              "x": 533,
                              "y": 713
                            },
                            {
                              "x": 533,
                              "y": 740
                            },
                            {
                              "x": 524,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 535,
                          "y": 713
                        },
                        {
                          "x": 537,
                          "y": 713
                        },
                        {
                          "x": 537,
                          "y": 740
                        },
                        {
                          "x": 535,
                          "y": 740
                        }
                      ]
                    },
                    "confidence": 0.95,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 535,
                              "y": 713
                            },
                            {
                              "x": 537,
                              "y": 713
                            },
                            {
                              "x": 537,
                              "y": 740
                            },
                            {
                              "x": 535,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.95,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 539,
                          "y": 713
                        },
                        {
                          "x": 545,
                          "y": 713
                        },
                        {
                          "x": 545,
                          "y": 740
                        },
                        {
                          "x": 539,
                          "y": 740
                        }
                      ]
                    },
                    "confidence": 0.93,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 539,
                              "y": 713
                            },
                            {
                              "x": 545,
                              "y": 713
                            },
                            {
                              "x": 545,
                              "y": 740
                            },
                            {
                              "x": 539,
                              "y": 740
                            }
                          ]
                        },
                        "confidence": 0.93,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": ")"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 1,
                  "languageCode": "en"
                }
              ]
            }
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 587,
                  "y": 639
                },
                {
                  "x": 636,
                  "y": 639
                },
                {
                  "x": 636,
                  "y": 678
                },
                {
                  "x": 587,
                  "y": 678
                }
              ]
            },
            "confidence": 0.99,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 587,
                      "y": 639
                    },
                    {
                      "x": 636,
                      "y": 639
                    },
                    {
                      "x": 636,
                      "y": 678
                    },
                    {
                      "x": 587,
                      "y": 678
                    }
                  ]
                },
                "confidence": 0.99,
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 587,
                          "y": 639
                        },
                        {
                          "x": 636,
                          "y": 639
                        },
                        {
                          "x": 636,
                          "y": 678
                        },
                        {
                          "x": 587,
                          "y": 678
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 587,
                              "y": 639
                            },
                            {
                              "x": 610,
                              "y": 639
                            },
                            {
                              "x": 610,
                              "y": 678
                            },
                            {
                              "x": 587,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "text": "2"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 613,
                              "y": 639
                            },
                            {
                              "x": 636,
                              "y": 639
                            },
                            {
                              "x": 636,
                              "y": 678
                            },
                            {
                              "x": 613,
                              "y": 678
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          }
                        },
                        "text": "0"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 98,
                  "y": 793
                },
                {
                  "x": 183,
                  "y": 793
                },
                {
                  "x": 183,
                  "y": 811
                },
                {
                  "x": 98,
                  "y": 811
                }
              ]
            },
            "confidence": 0.94,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 98,
                      "y": 793
                    },
                    {
                      "x": 183,
                      "y": 793
                    },
                    {
                      "x": 183,
                      "y": 811
                    },
                    {
                      "x": 98,
                      "y": 811
                    }
                  ]
                },
                "confidence": 0.94,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "en"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 98,
                          "y": 793
                        },
                        {
                          "x": 183,
                          "y": 793
                        },
                        {
                          "x": 183,
                          "y": 811
                        },
                        {
                          "x": 98,
                          "y": 811
                        }
                      ]
                    },
                    "confidence": 0.94,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 98,
                              "y": 793
                            },
                            {
                              "x": 114,
                              "y": 793
                            },
                            {
                              "x": 114,
                              "y": 811
                            },
                            {
                              "x": 98,
                              "y": 811
                            }
                          ]
                        },
                        "confidence": 0.71,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "w"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 120,
                              "y": 793
                            },
                            {
                              "x": 127,
                              "y": 793
                            },
                            {
                              "x": 127,
                              "y": 811
                            },
                            {
                              "x": 120,
                              "y": 811
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 129,
                              "y": 793
                            },
                            {
                              "x": 135,
                              "y": 793
                            },
                            {
                              "x": 135,
                              "y": 811
                            },
                            {
                              "x": 129,
                              "y": 811
                            }
                          ]
                        },
                        "confidence": 0.93,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 139,
                              "y": 793
                            },
                            {
                              "x": 146,
                              "y": 793
                            },
                            {
                              "x": 146,
                              "y": 811
                            },
                            {
                              "x": 139,
                              "y": 811
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 150,
                              "y": 793
                            },
                            {
                              "x": 157,
                              "y": 793
                            },
                            {
                              "x": 157,
                              "y": 811
                            },
                            {
                              "x": 150,
                              "y": 811
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 161,
                              "y": 793
                            },
                            {
                              "x": 167,
                              "y": 793
                            },
                            {
                              "x": 167,
                              "y": 811
                            },
                            {
                              "x": 161,
                              "y": 811
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 169,
                              "y": 793
                            },
                            {
                              "x": 175,
                              "y": 793
                            },
                            {
                              "x": 175,
                              "y": 811
                            },
                            {
                              "x": 169,
                              "y": 811
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 180,
                              "y": 793
                            },
                            {
                              "x": 183,
                              "y": 793
                            },
                            {
                              "x": 183,
                              "y": 811
                            },
                            {
                              "x": 180,
                              "y": 811
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 1,
                  "languageCode": "en"
                }
              ]
            }
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 328,
                  "y": 790
                },
                {
                  "x": 411,
                  "y": 789
                },
                {
                  "x": 411,
                  "y": 806
                },
                {
                  "x": 328,
                  "y": 807
                }
              ]
            },
            "confidence": 0.99,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 328,
                      "y": 790
                    },
                    {
                      "x": 411,
                      "y": 789
                    },
                    {
                      "x": 411,
                      "y": 806
                    },
                    {
                      "x": 328,
                      "y": 807
                    }
                  ]
                },
                "confidence": 0.99,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "en"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 328,
                          "y": 790
                        },
                        {
                          "x": 411,
                          "y": 789
                        },
                        {
                          "x": 411,
                          "y": 806
                        },
                        {
                          "x": 328,
                          "y": 807
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 328,
                              "y": 790
                            },
                            {
                              "x": 334,
                              "y": 790
                            },
                            {
                              "x": 334,
                              "y": 806
                            },
                            {
                              "x": 328,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 335,
                              "y": 790
                            },
                            {
                              "x": 341,
                              "y": 790
                            },
                            {
                              "x": 341,
                              "y": 806
                            },
                            {
                              "x": 335,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 346,
                              "y": 790
                            },
                            {
                              "x": 351,
                              "y": 790
                            },
                            {
                              "x": 351,
                              "y": 806
                            },
                            {
                              "x": 346,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 354,
                              "y": 790
                            },
                            {
                              "x": 356,
                              "y": 790
                            },
                            {
                              "x": 356,
                              "y": 806
                            },
                            {
                              "x": 354,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 358,
                              "y": 790
                            },
                            {
                              "x": 363,
                              "y": 790
                            },
                            {
                              "x": 363,
                              "y": 806
                            },
                            {
                              "x": 358,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 368,
                              "y": 790
                            },
                            {
                              "x": 373,
                              "y": 790
                            },
                            {
                              "x": 373,
                              "y": 806
                            },
                            {
                              "x": 368,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 376,
                              "y": 790
                            },
                            {
                              "x": 381,
                              "y": 790
                            },
                            {
                              "x": 381,
                              "y": 806
                            },
                            {
                              "x": 376,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 384,
                              "y": 790
                            },
                            {
                              "x": 390,
                              "y": 790
                            },
                            {
                              "x": 390,
                              "y": 806
                            },
                            {
                              "x": 384,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 396,
                              "y": 790
                            },
                            {
                              "x": 402,
                              "y": 790
                            },
                            {
                              "x": 402,
                              "y": 806
                            },
                            {
                              "x": 396,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 405,
                              "y": 790
                            },
                            {
                              "x": 411,
                              "y": 790
                            },
                            {
                              "x": 411,
                              "y": 806
                            },
                            {
                              "x": 405,
                              "y": 806
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 1,
                  "languageCode": "en"
                }
              ]
            }
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 543,
                  "y": 789
                },
                {
                  "x": 643,
                  "y": 789
                },
                {
                  "x": 643,
                  "y": 804
                },
                {
                  "x": 543,
                  "y": 804
                }
              ]
            },
            "confidence": 0.99,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 543,
                      "y": 789
                    },
                    {
                      "x": 643,
                      "y": 789
                    },
                    {
                      "x": 643,
                      "y": 804
                    },
                    {
                      "x": 543,
                      "y": 804
                    }
                  ]
                },
                "confidence": 0.99,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "en"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 543,
                          "y": 789
                        },
                        {
                          "x": 600,
                          "y": 789
                        },
                        {
                          "x": 600,
                          "y": 804
                        },
                        {
                          "x": 543,
                          "y": 804
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 543,
                              "y": 789
                            },
                            {
                              "x": 550,
                              "y": 789
                            },
                            {
                              "x": 550,
                              "y": 804
                            },
                            {
                              "x": 543,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 553,
                              "y": 789
                            },
                            {
                              "x": 557,
                              "y": 789
                            },
                            {
                              "x": 557,
                              "y": 804
                            },
                            {
                              "x": 553,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 560,
                              "y": 789
                            },
                            {
                              "x": 565,
                              "y": 789
                            },
                            {
                              "x": 565,
                              "y": 804
                            },
                            {
                              "x": 560,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 568,
                              "y": 789
                            },
                            {
                              "x": 573,
                              "y": 789
                            },
                            {
                              "x": 573,
                              "y": 804
                            },
                            {
                              "x": 568,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 576,
                              "y": 789
                            },
                            {
                              "x": 581,
                              "y": 789
                            },
                            {
                              "x": 581,
                              "y": 804
                            },
                            {
                              "x": 576,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 585,
                              "y": 789
                            },
                            {
                              "x": 592,
                              "y": 789
                            },
                            {
                              "x": 592,
                              "y": 804
                            },
                            {
                              "x": 585,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 596,
                              "y": 789
                            },
                            {
                              "x": 600,
                              "y": 789
                            },
                            {
                              "x": 600,
                              "y": 804
                            },
                            {
                              "x": 596,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 609,
                          "y": 789
                        },
                        {
                          "x": 643,
                          "y": 789
                        },
                        {
                          "x": 643,
                          "y": 804
                        },
                        {
                          "x": 609,
                          "y": 804
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 609,
                              "y": 789
                            },
                            {
                              "x": 616,
                              "y": 789
                            },
                            {
                              "x": 616,
                              "y": 804
                            },
                            {
                              "x": 609,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 618,
                              "y": 789
                            },
                            {
                              "x": 626,
                              "y": 789
                            },
                            {
                              "x": 626,
                              "y": 804
                            },
                            {
                              "x": 618,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 628,
                              "y": 789
                            },
                            {
                              "x": 634,
                              "y": 789
                            },
                            {
                              "x": 634,
                              "y": 804
                            },
                            {
                              "x": 628,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 636,
                              "y": 789
                            },
                            {
                              "x": 643,
                              "y": 789
                            },
                            {
                              "x": 643,
                              "y": 804
                            },
                            {
                              "x": 636,
                              "y": 804
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 1,
                  "languageCode": "en"
                }
              ]
            }
          },
          {
            "blockType": "TEXT",
            "boundingBox": {
              "vertices": [
                {
                  "x": 71,
                  "y": 859
                },
                {
                  "x": 655,
                  "y": 851
                },
                {
                  "x": 656,
                  "y": 924
                },
                {
                  "x": 72,
                  "y": 932
                }
              ]
            },
            "confidence": 0.95,
            "paragraphs": [
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 113,
                      "y": 858
                    },
                    {
                      "x": 633,
                      "y": 853
                    },
                    {
                      "x": 633,
                      "y": 876
                    },
                    {
                      "x": 113,
                      "y": 881
                    }
                  ]
                },
                "confidence": 0.99,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 1,
                      "languageCode": "en"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 113,
                          "y": 858
                        },
                        {
                          "x": 162,
                          "y": 858
                        },
                        {
                          "x": 162,
                          "y": 880
                        },
                        {
                          "x": 113,
                          "y": 880
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 113,
                              "y": 858
                            },
                            {
                              "x": 126,
                              "y": 858
                            },
                            {
                              "x": 126,
                              "y": 880
                            },
                            {
                              "x": 113,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "W"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 131,
                              "y": 858
                            },
                            {
                              "x": 140,
                              "y": 858
                            },
                            {
                              "x": 140,
                              "y": 880
                            },
                            {
                              "x": 131,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 146,
                              "y": 858
                            },
                            {
                              "x": 152,
                              "y": 858
                            },
                            {
                              "x": 152,
                              "y": 880
                            },
                            {
                              "x": 146,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 155,
                              "y": 858
                            },
                            {
                              "x": 162,
                              "y": 858
                            },
                            {
                              "x": 162,
                              "y": 880
                            },
                            {
                              "x": 155,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 170,
                          "y": 857
                        },
                        {
                          "x": 229,
                          "y": 856
                        },
                        {
                          "x": 229,
                          "y": 879
                        },
                        {
                          "x": 170,
                          "y": 880
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 170,
                              "y": 858
                            },
                            {
                              "x": 178,
                              "y": 858
                            },
                            {
                              "x": 178,
                              "y": 880
                            },
                            {
                              "x": 170,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 181,
                              "y": 858
                            },
                            {
                              "x": 186,
                              "y": 858
                            },
                            {
                              "x": 186,
                              "y": 880
                            },
                            {
                              "x": 181,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 189,
                              "y": 858
                            },
                            {
                              "x": 196,
                              "y": 858
                            },
                            {
                              "x": 196,
                              "y": 880
                            },
                            {
                              "x": 189,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "v"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 199,
                              "y": 858
                            },
                            {
                              "x": 205,
                              "y": 858
                            },
                            {
                              "x": 205,
                              "y": 880
                            },
                            {
                              "x": 199,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 208,
                              "y": 858
                            },
                            {
                              "x": 214,
                              "y": 858
                            },
                            {
                              "x": 214,
                              "y": 880
                            },
                            {
                              "x": 208,
                              "y": 880
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 217,
                              "y": 857
                            },
                            {
                              "x": 223,
                              "y": 857
                            },
                            {
                              "x": 223,
                              "y": 879
                            },
                            {
                              "x": 217,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 227,
                              "y": 857
                            },
                            {
                              "x": 229,
                              "y": 857
                            },
                            {
                              "x": 229,
                              "y": 879
                            },
                            {
                              "x": 227,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "l"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 237,
                          "y": 857
                        },
                        {
                          "x": 256,
                          "y": 857
                        },
                        {
                          "x": 256,
                          "y": 879
                        },
                        {
                          "x": 237,
                          "y": 879
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 237,
                              "y": 857
                            },
                            {
                              "x": 246,
                              "y": 857
                            },
                            {
                              "x": 246,
                              "y": 879
                            },
                            {
                              "x": 237,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 248,
                              "y": 857
                            },
                            {
                              "x": 256,
                              "y": 857
                            },
                            {
                              "x": 256,
                              "y": 879
                            },
                            {
                              "x": 248,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "f"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 261,
                          "y": 857
                        },
                        {
                          "x": 307,
                          "y": 857
                        },
                        {
                          "x": 307,
                          "y": 879
                        },
                        {
                          "x": 261,
                          "y": 879
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 261,
                              "y": 857
                            },
                            {
                              "x": 269,
                              "y": 857
                            },
                            {
                              "x": 269,
                              "y": 879
                            },
                            {
                              "x": 261,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 271,
                              "y": 857
                            },
                            {
                              "x": 277,
                              "y": 857
                            },
                            {
                              "x": 277,
                              "y": 879
                            },
                            {
                              "x": 271,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 282,
                              "y": 857
                            },
                            {
                              "x": 290,
                              "y": 857
                            },
                            {
                              "x": 290,
                              "y": 879
                            },
                            {
                              "x": 282,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 293,
                              "y": 857
                            },
                            {
                              "x": 298,
                              "y": 857
                            },
                            {
                              "x": 298,
                              "y": 879
                            },
                            {
                              "x": 293,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 302,
                              "y": 857
                            },
                            {
                              "x": 307,
                              "y": 857
                            },
                            {
                              "x": 307,
                              "y": 879
                            },
                            {
                              "x": 302,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 314,
                          "y": 856
                        },
                        {
                          "x": 393,
                          "y": 855
                        },
                        {
                          "x": 393,
                          "y": 878
                        },
                        {
                          "x": 314,
                          "y": 879
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 314,
                              "y": 857
                            },
                            {
                              "x": 324,
                              "y": 857
                            },
                            {
                              "x": 324,
                              "y": 879
                            },
                            {
                              "x": 314,
                              "y": 879
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "P"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 326,
                              "y": 856
                            },
                            {
                              "x": 335,
                              "y": 856
                            },
                            {
                              "x": 335,
                              "y": 878
                            },
                            {
                              "x": 326,
                              "y": 878
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 337,
                              "y": 856
                            },
                            {
                              "x": 345,
                              "y": 856
                            },
                            {
                              "x": 345,
                              "y": 878
                            },
                            {
                              "x": 337,
                              "y": 878
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "k"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 347,
                              "y": 856
                            },
                            {
                              "x": 355,
                              "y": 856
                            },
                            {
                              "x": 355,
                              "y": 878
                            },
                            {
                              "x": 347,
                              "y": 878
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "é"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 357,
                              "y": 856
                            },
                            {
                              "x": 371,
                              "y": 856
                            },
                            {
                              "x": 371,
                              "y": 878
                            },
                            {
                              "x": 357,
                              "y": 878
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 373,
                              "y": 856
                            },
                            {
                              "x": 382,
                              "y": 856
                            },
                            {
                              "x": 382,
                              "y": 878
                            },
                            {
                              "x": 373,
                              "y": 878
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 385,
                              "y": 856
                            },
                            {
                              "x": 393,
                              "y": 856
                            },
                            {
                              "x": 393,
                              "y": 878
                            },
                            {
                              "x": 385,
                              "y": 878
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 405,
                          "y": 855
                        },
                        {
                          "x": 459,
                          "y": 854
                        },
                        {
                          "x": 459,
                          "y": 877
                        },
                        {
                          "x": 405,
                          "y": 878
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 405,
                              "y": 856
                            },
                            {
                              "x": 412,
                              "y": 856
                            },
                            {
                              "x": 412,
                              "y": 878
                            },
                            {
                              "x": 405,
                              "y": 878
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "g"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 413,
                              "y": 856
                            },
                            {
                              "x": 421,
                              "y": 856
                            },
                            {
                              "x": 421,
                              "y": 878
                            },
                            {
                              "x": 413,
                              "y": 878
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 424,
                              "y": 855
                            },
                            {
                              "x": 431,
                              "y": 855
                            },
                            {
                              "x": 431,
                              "y": 877
                            },
                            {
                              "x": 424,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 431,
                              "y": 855
                            },
                            {
                              "x": 438,
                              "y": 855
                            },
                            {
                              "x": 438,
                              "y": 877
                            },
                            {
                              "x": 431,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 442,
                              "y": 855
                            },
                            {
                              "x": 450,
                              "y": 855
                            },
                            {
                              "x": 450,
                              "y": 877
                            },
                            {
                              "x": 442,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 452,
                              "y": 855
                            },
                            {
                              "x": 459,
                              "y": 855
                            },
                            {
                              "x": 459,
                              "y": 877
                            },
                            {
                              "x": 452,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 457,
                          "y": 855
                        },
                        {
                          "x": 462,
                          "y": 855
                        },
                        {
                          "x": 462,
                          "y": 877
                        },
                        {
                          "x": 457,
                          "y": 877
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 457,
                              "y": 855
                            },
                            {
                              "x": 462,
                              "y": 855
                            },
                            {
                              "x": 462,
                              "y": 877
                            },
                            {
                              "x": 457,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": ","
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 466,
                          "y": 855
                        },
                        {
                          "x": 506,
                          "y": 855
                        },
                        {
                          "x": 506,
                          "y": 877
                        },
                        {
                          "x": 466,
                          "y": 877
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 466,
                              "y": 855
                            },
                            {
                              "x": 472,
                              "y": 855
                            },
                            {
                              "x": 472,
                              "y": 877
                            },
                            {
                              "x": 466,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 474,
                              "y": 855
                            },
                            {
                              "x": 482,
                              "y": 855
                            },
                            {
                              "x": 482,
                              "y": 877
                            },
                            {
                              "x": 474,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 485,
                              "y": 855
                            },
                            {
                              "x": 492,
                              "y": 855
                            },
                            {
                              "x": 492,
                              "y": 877
                            },
                            {
                              "x": 485,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 495,
                              "y": 855
                            },
                            {
                              "x": 498,
                              "y": 855
                            },
                            {
                              "x": 498,
                              "y": 877
                            },
                            {
                              "x": 495,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 500,
                              "y": 855
                            },
                            {
                              "x": 506,
                              "y": 855
                            },
                            {
                              "x": 506,
                              "y": 877
                            },
                            {
                              "x": 500,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 513,
                          "y": 854
                        },
                        {
                          "x": 597,
                          "y": 853
                        },
                        {
                          "x": 597,
                          "y": 876
                        },
                        {
                          "x": 513,
                          "y": 877
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 513,
                              "y": 855
                            },
                            {
                              "x": 522,
                              "y": 855
                            },
                            {
                              "x": 522,
                              "y": 877
                            },
                            {
                              "x": 513,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 524,
                              "y": 855
                            },
                            {
                              "x": 528,
                              "y": 855
                            },
                            {
                              "x": 528,
                              "y": 877
                            },
                            {
                              "x": 524,
                              "y": 877
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "l"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 530,
                              "y": 854
                            },
                            {
                              "x": 536,
                              "y": 854
                            },
                            {
                              "x": 536,
                              "y": 876
                            },
                            {
                              "x": 530,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 542,
                              "y": 854
                            },
                            {
                              "x": 548,
                              "y": 854
                            },
                            {
                              "x": 548,
                              "y": 876
                            },
                            {
                              "x": 542,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 549,
                              "y": 854
                            },
                            {
                              "x": 553,
                              "y": 854
                            },
                            {
                              "x": 553,
                              "y": 876
                            },
                            {
                              "x": 549,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 556,
                              "y": 854
                            },
                            {
                              "x": 561,
                              "y": 854
                            },
                            {
                              "x": 561,
                              "y": 876
                            },
                            {
                              "x": 556,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 563,
                              "y": 854
                            },
                            {
                              "x": 567,
                              "y": 854
                            },
                            {
                              "x": 567,
                              "y": 876
                            },
                            {
                              "x": 563,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 570,
                              "y": 854
                            },
                            {
                              "x": 575,
                              "y": 854
                            },
                            {
                              "x": 575,
                              "y": 876
                            },
                            {
                              "x": 570,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 578,
                              "y": 854
                            },
                            {
                              "x": 583,
                              "y": 854
                            },
                            {
                              "x": 583,
                              "y": 876
                            },
                            {
                              "x": 578,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 584,
                              "y": 854
                            },
                            {
                              "x": 588,
                              "y": 854
                            },
                            {
                              "x": 588,
                              "y": 876
                            },
                            {
                              "x": 584,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 591,
                              "y": 854
                            },
                            {
                              "x": 597,
                              "y": 854
                            },
                            {
                              "x": 597,
                              "y": 876
                            },
                            {
                              "x": 591,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "y"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 601,
                          "y": 854
                        },
                        {
                          "x": 633,
                          "y": 854
                        },
                        {
                          "x": 633,
                          "y": 876
                        },
                        {
                          "x": 601,
                          "y": 876
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 601,
                              "y": 854
                            },
                            {
                              "x": 601,
                              "y": 854
                            },
                            {
                              "x": 601,
                              "y": 876
                            },
                            {
                              "x": 601,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 603,
                              "y": 854
                            },
                            {
                              "x": 623,
                              "y": 854
                            },
                            {
                              "x": 623,
                              "y": 876
                            },
                            {
                              "x": 603,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 625,
                              "y": 854
                            },
                            {
                              "x": 633,
                              "y": 854
                            },
                            {
                              "x": 633,
                              "y": 876
                            },
                            {
                              "x": 625,
                              "y": 876
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      }
                    ]
                  }
                ]
              },
              {
                "boundingBox": {
                  "vertices": [
                    {
                      "x": 71,
                      "y": 881
                    },
                    {
                      "x": 655,
                      "y": 871
                    },
                    {
                      "x": 656,
                      "y": 922
                    },
                    {
                      "x": 72,
                      "y": 932
                    }
                  ]
                },
                "confidence": 0.93,
                "property": {
                  "detectedLanguages": [
                    {
                      "confidence": 0.62,
                      "languageCode": "et"
                    },
                    {
                      "confidence": 0.33,
                      "languageCode": "en"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 111,
                          "y": 880
                        },
                        {
                          "x": 154,
                          "y": 879
                        },
                        {
                          "x": 154,
                          "y": 902
                        },
                        {
                          "x": 111,
                          "y": 903
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 111,
                              "y": 880
                            },
                            {
                              "x": 121,
                              "y": 880
                            },
                            {
                              "x": 121,
                              "y": 902
                            },
                            {
                              "x": 111,
                              "y": 902
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "b"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 124,
                              "y": 880
                            },
                            {
                              "x": 130,
                              "y": 880
                            },
                            {
                              "x": 130,
                              "y": 902
                            },
                            {
                              "x": 124,
                              "y": 902
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "u"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 134,
                              "y": 880
                            },
                            {
                              "x": 140,
                              "y": 880
                            },
                            {
                              "x": 140,
                              "y": 902
                            },
                            {
                              "x": 134,
                              "y": 902
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 141,
                              "y": 880
                            },
                            {
                              "x": 145,
                              "y": 880
                            },
                            {
                              "x": 145,
                              "y": 902
                            },
                            {
                              "x": 141,
                              "y": 902
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "l"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 148,
                              "y": 880
                            },
                            {
                              "x": 154,
                              "y": 880
                            },
                            {
                              "x": 154,
                              "y": 902
                            },
                            {
                              "x": 148,
                              "y": 902
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "d"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 158,
                          "y": 879
                        },
                        {
                          "x": 194,
                          "y": 878
                        },
                        {
                          "x": 194,
                          "y": 901
                        },
                        {
                          "x": 158,
                          "y": 902
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 158,
                              "y": 880
                            },
                            {
                              "x": 158,
                              "y": 880
                            },
                            {
                              "x": 158,
                              "y": 902
                            },
                            {
                              "x": 158,
                              "y": 902
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 160,
                              "y": 880
                            },
                            {
                              "x": 171,
                              "y": 880
                            },
                            {
                              "x": 171,
                              "y": 902
                            },
                            {
                              "x": 160,
                              "y": 902
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 173,
                              "y": 879
                            },
                            {
                              "x": 194,
                              "y": 879
                            },
                            {
                              "x": 194,
                              "y": 901
                            },
                            {
                              "x": 173,
                              "y": 901
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "d"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 202,
                          "y": 878
                        },
                        {
                          "x": 250,
                          "y": 877
                        },
                        {
                          "x": 250,
                          "y": 900
                        },
                        {
                          "x": 202,
                          "y": 901
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 202,
                              "y": 879
                            },
                            {
                              "x": 210,
                              "y": 879
                            },
                            {
                              "x": 210,
                              "y": 901
                            },
                            {
                              "x": 202,
                              "y": 901
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "c"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 212,
                              "y": 879
                            },
                            {
                              "x": 219,
                              "y": 879
                            },
                            {
                              "x": 219,
                              "y": 901
                            },
                            {
                              "x": 212,
                              "y": 901
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 224,
                              "y": 879
                            },
                            {
                              "x": 231,
                              "y": 879
                            },
                            {
                              "x": 231,
                              "y": 901
                            },
                            {
                              "x": 224,
                              "y": 901
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "u"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 233,
                              "y": 878
                            },
                            {
                              "x": 238,
                              "y": 878
                            },
                            {
                              "x": 238,
                              "y": 900
                            },
                            {
                              "x": 233,
                              "y": 900
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 242,
                              "y": 878
                            },
                            {
                              "x": 250,
                              "y": 878
                            },
                            {
                              "x": 250,
                              "y": 900
                            },
                            {
                              "x": 242,
                              "y": 900
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "e"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 257,
                          "y": 878
                        },
                        {
                          "x": 331,
                          "y": 877
                        },
                        {
                          "x": 331,
                          "y": 899
                        },
                        {
                          "x": 257,
                          "y": 900
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 257,
                              "y": 878
                            },
                            {
                              "x": 263,
                              "y": 878
                            },
                            {
                              "x": 263,
                              "y": 900
                            },
                            {
                              "x": 257,
                              "y": 900
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "l"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 264,
                              "y": 878
                            },
                            {
                              "x": 267,
                              "y": 878
                            },
                            {
                              "x": 267,
                              "y": 900
                            },
                            {
                              "x": 264,
                              "y": 900
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 270,
                              "y": 878
                            },
                            {
                              "x": 275,
                              "y": 878
                            },
                            {
                              "x": 275,
                              "y": 900
                            },
                            {
                              "x": 270,
                              "y": 900
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "g"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 278,
                              "y": 878
                            },
                            {
                              "x": 284,
                              "y": 878
                            },
                            {
                              "x": 284,
                              "y": 900
                            },
                            {
                              "x": 278,
                              "y": 900
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "h"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 288,
                              "y": 878
                            },
                            {
                              "x": 294,
                              "y": 878
                            },
                            {
                              "x": 294,
                              "y": 900
                            },
                            {
                              "x": 288,
                              "y": 900
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 297,
                              "y": 877
                            },
                            {
                              "x": 303,
                              "y": 877
                            },
                            {
                              "x": 303,
                              "y": 899
                            },
                            {
                              "x": 297,
                              "y": 899
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 307,
                              "y": 877
                            },
                            {
                              "x": 312,
                              "y": 877
                            },
                            {
                              "x": 312,
                              "y": 899
                            },
                            {
                              "x": 307,
                              "y": 899
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 313,
                              "y": 877
                            },
                            {
                              "x": 319,
                              "y": 877
                            },
                            {
                              "x": 319,
                              "y": 899
                            },
                            {
                              "x": 313,
                              "y": 899
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 324,
                              "y": 877
                            },
                            {
                              "x": 331,
                              "y": 877
                            },
                            {
                              "x": 331,
                              "y": 899
                            },
                            {
                              "x": 324,
                              "y": 899
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "g"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 338,
                          "y": 876
                        },
                        {
                          "x": 397,
                          "y": 875
                        },
                        {
                          "x": 397,
                          "y": 898
                        },
                        {
                          "x": 338,
                          "y": 899
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 338,
                              "y": 877
                            },
                            {
                              "x": 345,
                              "y": 877
                            },
                            {
                              "x": 345,
                              "y": 899
                            },
                            {
                              "x": 338,
                              "y": 899
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 348,
                              "y": 877
                            },
                            {
                              "x": 353,
                              "y": 877
                            },
                            {
                              "x": 353,
                              "y": 899
                            },
                            {
                              "x": 348,
                              "y": 899
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 354,
                              "y": 877
                            },
                            {
                              "x": 360,
                              "y": 877
                            },
                            {
                              "x": 360,
                              "y": 899
                            },
                            {
                              "x": 354,
                              "y": 899
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 366,
                              "y": 876
                            },
                            {
                              "x": 372,
                              "y": 876
                            },
                            {
                              "x": 372,
                              "y": 898
                            },
                            {
                              "x": 366,
                              "y": 898
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 372,
                              "y": 876
                            },
                            {
                              "x": 380,
                              "y": 876
                            },
                            {
                              "x": 380,
                              "y": 898
                            },
                            {
                              "x": 372,
                              "y": 898
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 387,
                              "y": 876
                            },
                            {
                              "x": 397,
                              "y": 876
                            },
                            {
                              "x": 397,
                              "y": 898
                            },
                            {
                              "x": 387,
                              "y": 898
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 396,
                          "y": 876
                        },
                        {
                          "x": 398,
                          "y": 876
                        },
                        {
                          "x": 398,
                          "y": 898
                        },
                        {
                          "x": 396,
                          "y": 898
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 396,
                              "y": 876
                            },
                            {
                              "x": 398,
                              "y": 876
                            },
                            {
                              "x": 398,
                              "y": 898
                            },
                            {
                              "x": 396,
                              "y": 898
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 417,
                          "y": 875
                        },
                        {
                          "x": 433,
                          "y": 875
                        },
                        {
                          "x": 433,
                          "y": 898
                        },
                        {
                          "x": 417,
                          "y": 898
                        }
                      ]
                    },
                    "confidence": 0.66,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 417,
                              "y": 876
                            },
                            {
                              "x": 426,
                              "y": 876
                            },
                            {
                              "x": 426,
                              "y": 898
                            },
                            {
                              "x": 417,
                              "y": 898
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "L"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 429,
                              "y": 875
                            },
                            {
                              "x": 433,
                              "y": 875
                            },
                            {
                              "x": 433,
                              "y": 897
                            },
                            {
                              "x": 429,
                              "y": 897
                            }
                          ]
                        },
                        "confidence": 0.36,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "V"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 435,
                          "y": 875
                        },
                        {
                          "x": 438,
                          "y": 875
                        },
                        {
                          "x": 438,
                          "y": 897
                        },
                        {
                          "x": 435,
                          "y": 897
                        }
                      ]
                    },
                    "confidence": 0.89,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 435,
                              "y": 875
                            },
                            {
                              "x": 438,
                              "y": 875
                            },
                            {
                              "x": 438,
                              "y": 897
                            },
                            {
                              "x": 435,
                              "y": 897
                            }
                          ]
                        },
                        "confidence": 0.89,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 448,
                          "y": 875
                        },
                        {
                          "x": 463,
                          "y": 875
                        },
                        {
                          "x": 463,
                          "y": 897
                        },
                        {
                          "x": 448,
                          "y": 897
                        }
                      ]
                    },
                    "confidence": 0.87,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 448,
                              "y": 875
                            },
                            {
                              "x": 451,
                              "y": 875
                            },
                            {
                              "x": 451,
                              "y": 897
                            },
                            {
                              "x": 448,
                              "y": 897
                            }
                          ]
                        },
                        "confidence": 0.86,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "1"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 455,
                              "y": 875
                            },
                            {
                              "x": 463,
                              "y": 875
                            },
                            {
                              "x": 463,
                              "y": 897
                            },
                            {
                              "x": 455,
                              "y": 897
                            }
                          ]
                        },
                        "confidence": 0.89,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "4"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 483,
                          "y": 875
                        },
                        {
                          "x": 494,
                          "y": 875
                        },
                        {
                          "x": 494,
                          "y": 897
                        },
                        {
                          "x": 483,
                          "y": 897
                        }
                      ]
                    },
                    "confidence": 0.61,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 483,
                              "y": 875
                            },
                            {
                              "x": 494,
                              "y": 875
                            },
                            {
                              "x": 494,
                              "y": 897
                            },
                            {
                              "x": 483,
                              "y": 897
                            }
                          ]
                        },
                        "confidence": 0.61,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "#"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 496,
                          "y": 874
                        },
                        {
                          "x": 514,
                          "y": 874
                        },
                        {
                          "x": 514,
                          "y": 896
                        },
                        {
                          "x": 496,
                          "y": 896
                        }
                      ]
                    },
                    "confidence": 0.98,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "en"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 496,
                              "y": 874
                            },
                            {
                              "x": 503,
                              "y": 874
                            },
                            {
                              "x": 503,
                              "y": 896
                            },
                            {
                              "x": 496,
                              "y": 896
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "2"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 506,
                              "y": 874
                            },
                            {
                              "x": 514,
                              "y": 874
                            },
                            {
                              "x": 514,
                              "y": 896
                            },
                            {
                              "x": 506,
                              "y": 896
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "EOL_SURE_SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "en"
                            }
                          ]
                        },
                        "text": "5"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 72,
                          "y": 911
                        },
                        {
                          "x": 99,
                          "y": 911
                        },
                        {
                          "x": 99,
                          "y": 931
                        },
                        {
                          "x": 72,
                          "y": 931
                        }
                      ]
                    },
                    "confidence": 0.8,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 72,
                              "y": 911
                            },
                            {
                              "x": 75,
                              "y": 911
                            },
                            {
                              "x": 75,
                              "y": 931
                            },
                            {
                              "x": 72,
                              "y": 931
                            }
                          ]
                        },
                        "confidence": 0.34,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "I"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 76,
                              "y": 911
                            },
                            {
                              "x": 78,
                              "y": 911
                            },
                            {
                              "x": 78,
                              "y": 931
                            },
                            {
                              "x": 76,
                              "y": 931
                            }
                          ]
                        },
                        "confidence": 0.94,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "l"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 80,
                              "y": 911
                            },
                            {
                              "x": 83,
                              "y": 911
                            },
                            {
                              "x": 83,
                              "y": 931
                            },
                            {
                              "x": 80,
                              "y": 931
                            }
                          ]
                        },
                        "confidence": 0.91,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "l"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 84,
                              "y": 911
                            },
                            {
                              "x": 88,
                              "y": 911
                            },
                            {
                              "x": 88,
                              "y": 931
                            },
                            {
                              "x": 84,
                              "y": 931
                            }
                          ]
                        },
                        "confidence": 0.92,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "u"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 92,
                              "y": 911
                            },
                            {
                              "x": 99,
                              "y": 911
                            },
                            {
                              "x": 99,
                              "y": 931
                            },
                            {
                              "x": 92,
                              "y": 931
                            }
                          ]
                        },
                        "confidence": 0.93,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 99,
                          "y": 911
                        },
                        {
                          "x": 104,
                          "y": 911
                        },
                        {
                          "x": 104,
                          "y": 931
                        },
                        {
                          "x": 99,
                          "y": 931
                        }
                      ]
                    },
                    "confidence": 0.87,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 99,
                              "y": 911
                            },
                            {
                              "x": 104,
                              "y": 911
                            },
                            {
                              "x": 104,
                              "y": 931
                            },
                            {
                              "x": 99,
                              "y": 931
                            }
                          ]
                        },
                        "confidence": 0.87,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 108,
                          "y": 910
                        },
                        {
                          "x": 128,
                          "y": 910
                        },
                        {
                          "x": 128,
                          "y": 931
                        },
                        {
                          "x": 108,
                          "y": 931
                        }
                      ]
                    },
                    "confidence": 0.97,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 108,
                              "y": 911
                            },
                            {
                              "x": 115,
                              "y": 911
                            },
                            {
                              "x": 115,
                              "y": 931
                            },
                            {
                              "x": 108,
                              "y": 931
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "K"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 118,
                              "y": 911
                            },
                            {
                              "x": 123,
                              "y": 911
                            },
                            {
                              "x": 123,
                              "y": 931
                            },
                            {
                              "x": 118,
                              "y": 931
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 124,
                              "y": 910
                            },
                            {
                              "x": 128,
                              "y": 910
                            },
                            {
                              "x": 128,
                              "y": 930
                            },
                            {
                              "x": 124,
                              "y": 930
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "n"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 139,
                          "y": 910
                        },
                        {
                          "x": 195,
                          "y": 909
                        },
                        {
                          "x": 195,
                          "y": 930
                        },
                        {
                          "x": 139,
                          "y": 931
                        }
                      ]
                    },
                    "confidence": 0.94,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 139,
                              "y": 910
                            },
                            {
                              "x": 143,
                              "y": 910
                            },
                            {
                              "x": 143,
                              "y": 930
                            },
                            {
                              "x": 139,
                              "y": 930
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "S"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 144,
                              "y": 910
                            },
                            {
                              "x": 149,
                              "y": 910
                            },
                            {
                              "x": 149,
                              "y": 930
                            },
                            {
                              "x": 144,
                              "y": 930
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "u"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 153,
                              "y": 910
                            },
                            {
                              "x": 158,
                              "y": 910
                            },
                            {
                              "x": 158,
                              "y": 930
                            },
                            {
                              "x": 153,
                              "y": 930
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "g"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 161,
                              "y": 910
                            },
                            {
                              "x": 165,
                              "y": 910
                            },
                            {
                              "x": 165,
                              "y": 930
                            },
                            {
                              "x": 161,
                              "y": 930
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 164,
                              "y": 910
                            },
                            {
                              "x": 170,
                              "y": 910
                            },
                            {
                              "x": 170,
                              "y": 930
                            },
                            {
                              "x": 164,
                              "y": 930
                            }
                          ]
                        },
                        "confidence": 0.89,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "m"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 175,
                              "y": 910
                            },
                            {
                              "x": 183,
                              "y": 910
                            },
                            {
                              "x": 183,
                              "y": 930
                            },
                            {
                              "x": 175,
                              "y": 930
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "o"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 184,
                              "y": 909
                            },
                            {
                              "x": 189,
                              "y": 909
                            },
                            {
                              "x": 189,
                              "y": 929
                            },
                            {
                              "x": 184,
                              "y": 929
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 191,
                              "y": 909
                            },
                            {
                              "x": 195,
                              "y": 909
                            },
                            {
                              "x": 195,
                              "y": 929
                            },
                            {
                              "x": 191,
                              "y": 929
                            }
                          ]
                        },
                        "confidence": 0.78,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "i"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 236,
                          "y": 908
                        },
                        {
                          "x": 260,
                          "y": 908
                        },
                        {
                          "x": 260,
                          "y": 928
                        },
                        {
                          "x": 236,
                          "y": 928
                        }
                      ]
                    },
                    "confidence": 0.8,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 236,
                              "y": 908
                            },
                            {
                              "x": 241,
                              "y": 908
                            },
                            {
                              "x": 241,
                              "y": 928
                            },
                            {
                              "x": 236,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 0.81,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "1"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 243,
                              "y": 908
                            },
                            {
                              "x": 248,
                              "y": 908
                            },
                            {
                              "x": 248,
                              "y": 928
                            },
                            {
                              "x": 243,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 0.87,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "9"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 250,
                              "y": 908
                            },
                            {
                              "x": 254,
                              "y": 908
                            },
                            {
                              "x": 254,
                              "y": 928
                            },
                            {
                              "x": 250,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 0.88,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "9"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 256,
                              "y": 908
                            },
                            {
                              "x": 260,
                              "y": 908
                            },
                            {
                              "x": 260,
                              "y": 928
                            },
                            {
                              "x": 256,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 0.64,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "5"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 260,
                          "y": 908
                        },
                        {
                          "x": 265,
                          "y": 908
                        },
                        {
                          "x": 265,
                          "y": 928
                        },
                        {
                          "x": 260,
                          "y": 928
                        }
                      ]
                    },
                    "confidence": 0.63,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 260,
                              "y": 908
                            },
                            {
                              "x": 265,
                              "y": 908
                            },
                            {
                              "x": 265,
                              "y": 928
                            },
                            {
                              "x": 260,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 0.63,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": ","
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 266,
                          "y": 908
                        },
                        {
                          "x": 278,
                          "y": 908
                        },
                        {
                          "x": 278,
                          "y": 928
                        },
                        {
                          "x": 266,
                          "y": 928
                        }
                      ]
                    },
                    "confidence": 0.8,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 266,
                              "y": 908
                            },
                            {
                              "x": 273,
                              "y": 908
                            },
                            {
                              "x": 273,
                              "y": 928
                            },
                            {
                              "x": 266,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 0.61,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "9"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 275,
                              "y": 908
                            },
                            {
                              "x": 278,
                              "y": 908
                            },
                            {
                              "x": 278,
                              "y": 928
                            },
                            {
                              "x": 275,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "6"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 280,
                          "y": 908
                        },
                        {
                          "x": 282,
                          "y": 908
                        },
                        {
                          "x": 282,
                          "y": 928
                        },
                        {
                          "x": 280,
                          "y": 928
                        }
                      ]
                    },
                    "confidence": 1,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 280,
                              "y": 908
                            },
                            {
                              "x": 282,
                              "y": 908
                            },
                            {
                              "x": 282,
                              "y": 928
                            },
                            {
                              "x": 280,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": ","
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 286,
                          "y": 907
                        },
                        {
                          "x": 298,
                          "y": 907
                        },
                        {
                          "x": 298,
                          "y": 928
                        },
                        {
                          "x": 286,
                          "y": 928
                        }
                      ]
                    },
                    "confidence": 0.99,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 286,
                              "y": 908
                            },
                            {
                              "x": 292,
                              "y": 908
                            },
                            {
                              "x": 292,
                              "y": 928
                            },
                            {
                              "x": 286,
                              "y": 928
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "9"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 294,
                              "y": 907
                            },
                            {
                              "x": 298,
                              "y": 907
                            },
                            {
                              "x": 298,
                              "y": 927
                            },
                            {
                              "x": 294,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "8"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 304,
                          "y": 907
                        },
                        {
                          "x": 352,
                          "y": 906
                        },
                        {
                          "x": 352,
                          "y": 927
                        },
                        {
                          "x": 304,
                          "y": 928
                        }
                      ]
                    },
                    "confidence": 0.96,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 304,
                              "y": 907
                            },
                            {
                              "x": 309,
                              "y": 907
                            },
                            {
                              "x": 309,
                              "y": 927
                            },
                            {
                              "x": 304,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 0.74,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "N"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 313,
                              "y": 907
                            },
                            {
                              "x": 316,
                              "y": 907
                            },
                            {
                              "x": 316,
                              "y": 927
                            },
                            {
                              "x": 313,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 317,
                              "y": 907
                            },
                            {
                              "x": 319,
                              "y": 907
                            },
                            {
                              "x": 319,
                              "y": 927
                            },
                            {
                              "x": 317,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 322,
                              "y": 907
                            },
                            {
                              "x": 327,
                              "y": 907
                            },
                            {
                              "x": 327,
                              "y": 927
                            },
                            {
                              "x": 322,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 330,
                              "y": 907
                            },
                            {
                              "x": 333,
                              "y": 907
                            },
                            {
                              "x": 333,
                              "y": 927
                            },
                            {
                              "x": 330,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 333,
                              "y": 907
                            },
                            {
                              "x": 337,
                              "y": 907
                            },
                            {
                              "x": 337,
                              "y": 927
                            },
                            {
                              "x": 333,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "n"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 341,
                              "y": 907
                            },
                            {
                              "x": 346,
                              "y": 907
                            },
                            {
                              "x": 346,
                              "y": 927
                            },
                            {
                              "x": 341,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "d"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 349,
                              "y": 907
                            },
                            {
                              "x": 352,
                              "y": 907
                            },
                            {
                              "x": 352,
                              "y": 927
                            },
                            {
                              "x": 349,
                              "y": 927
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "o"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 352,
                          "y": 906
                        },
                        {
                          "x": 354,
                          "y": 906
                        },
                        {
                          "x": 354,
                          "y": 926
                        },
                        {
                          "x": 352,
                          "y": 926
                        }
                      ]
                    },
                    "confidence": 0.97,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 352,
                              "y": 906
                            },
                            {
                              "x": 354,
                              "y": 906
                            },
                            {
                              "x": 354,
                              "y": 926
                            },
                            {
                              "x": 352,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": ","
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 360,
                          "y": 906
                        },
                        {
                          "x": 413,
                          "y": 905
                        },
                        {
                          "x": 413,
                          "y": 926
                        },
                        {
                          "x": 360,
                          "y": 927
                        }
                      ]
                    },
                    "confidence": 0.98,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 360,
                              "y": 906
                            },
                            {
                              "x": 367,
                              "y": 906
                            },
                            {
                              "x": 367,
                              "y": 926
                            },
                            {
                              "x": 360,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "C"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 369,
                              "y": 906
                            },
                            {
                              "x": 373,
                              "y": 906
                            },
                            {
                              "x": 373,
                              "y": 926
                            },
                            {
                              "x": 369,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 376,
                              "y": 906
                            },
                            {
                              "x": 379,
                              "y": 906
                            },
                            {
                              "x": 379,
                              "y": 926
                            },
                            {
                              "x": 376,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 380,
                              "y": 906
                            },
                            {
                              "x": 383,
                              "y": 906
                            },
                            {
                              "x": 383,
                              "y": 926
                            },
                            {
                              "x": 380,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 385,
                              "y": 906
                            },
                            {
                              "x": 390,
                              "y": 906
                            },
                            {
                              "x": 390,
                              "y": 926
                            },
                            {
                              "x": 385,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "t"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 393,
                              "y": 906
                            },
                            {
                              "x": 396,
                              "y": 906
                            },
                            {
                              "x": 396,
                              "y": 926
                            },
                            {
                              "x": 393,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "u"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 397,
                              "y": 906
                            },
                            {
                              "x": 400,
                              "y": 906
                            },
                            {
                              "x": 400,
                              "y": 926
                            },
                            {
                              "x": 397,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 402,
                              "y": 906
                            },
                            {
                              "x": 406,
                              "y": 906
                            },
                            {
                              "x": 406,
                              "y": 926
                            },
                            {
                              "x": 402,
                              "y": 926
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "e"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 409,
                              "y": 905
                            },
                            {
                              "x": 413,
                              "y": 905
                            },
                            {
                              "x": 413,
                              "y": 925
                            },
                            {
                              "x": 409,
                              "y": 925
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 413,
                          "y": 905
                        },
                        {
                          "x": 415,
                          "y": 905
                        },
                        {
                          "x": 415,
                          "y": 925
                        },
                        {
                          "x": 413,
                          "y": 925
                        }
                      ]
                    },
                    "confidence": 0.98,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 413,
                              "y": 905
                            },
                            {
                              "x": 415,
                              "y": 905
                            },
                            {
                              "x": 415,
                              "y": 925
                            },
                            {
                              "x": 413,
                              "y": 925
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 419,
                          "y": 905
                        },
                        {
                          "x": 486,
                          "y": 904
                        },
                        {
                          "x": 486,
                          "y": 925
                        },
                        {
                          "x": 419,
                          "y": 926
                        }
                      ]
                    },
                    "confidence": 0.96,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 419,
                              "y": 905
                            },
                            {
                              "x": 426,
                              "y": 905
                            },
                            {
                              "x": 426,
                              "y": 925
                            },
                            {
                              "x": 419,
                              "y": 925
                            }
                          ]
                        },
                        "confidence": 0.8,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "G"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 430,
                              "y": 905
                            },
                            {
                              "x": 435,
                              "y": 905
                            },
                            {
                              "x": 435,
                              "y": 925
                            },
                            {
                              "x": 430,
                              "y": 925
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "A"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 437,
                              "y": 905
                            },
                            {
                              "x": 443,
                              "y": 905
                            },
                            {
                              "x": 443,
                              "y": 925
                            },
                            {
                              "x": 437,
                              "y": 925
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "M"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 448,
                              "y": 905
                            },
                            {
                              "x": 454,
                              "y": 905
                            },
                            {
                              "x": 454,
                              "y": 925
                            },
                            {
                              "x": 448,
                              "y": 925
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "E"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 456,
                              "y": 905
                            },
                            {
                              "x": 459,
                              "y": 905
                            },
                            {
                              "x": 459,
                              "y": 925
                            },
                            {
                              "x": 456,
                              "y": 925
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "F"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 461,
                              "y": 905
                            },
                            {
                              "x": 466,
                              "y": 905
                            },
                            {
                              "x": 466,
                              "y": 925
                            },
                            {
                              "x": 461,
                              "y": 925
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "R"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 469,
                              "y": 904
                            },
                            {
                              "x": 474,
                              "y": 904
                            },
                            {
                              "x": 474,
                              "y": 924
                            },
                            {
                              "x": 469,
                              "y": 924
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "E"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 476,
                              "y": 904
                            },
                            {
                              "x": 480,
                              "y": 904
                            },
                            {
                              "x": 480,
                              "y": 924
                            },
                            {
                              "x": 476,
                              "y": 924
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "A"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 483,
                              "y": 904
                            },
                            {
                              "x": 486,
                              "y": 904
                            },
                            {
                              "x": 486,
                              "y": 924
                            },
                            {
                              "x": 483,
                              "y": 924
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "K"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 490,
                          "y": 904
                        },
                        {
                          "x": 492,
                          "y": 904
                        },
                        {
                          "x": 492,
                          "y": 924
                        },
                        {
                          "x": 490,
                          "y": 924
                        }
                      ]
                    },
                    "confidence": 0.51,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 490,
                              "y": 904
                            },
                            {
                              "x": 492,
                              "y": 904
                            },
                            {
                              "x": 492,
                              "y": 924
                            },
                            {
                              "x": 490,
                              "y": 924
                            }
                          ]
                        },
                        "confidence": 0.51,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": ","
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 497,
                          "y": 904
                        },
                        {
                          "x": 502,
                          "y": 904
                        },
                        {
                          "x": 502,
                          "y": 924
                        },
                        {
                          "x": 497,
                          "y": 924
                        }
                      ]
                    },
                    "confidence": 0.62,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 497,
                              "y": 904
                            },
                            {
                              "x": 502,
                              "y": 904
                            },
                            {
                              "x": 502,
                              "y": 924
                            },
                            {
                              "x": 497,
                              "y": 924
                            }
                          ]
                        },
                        "confidence": 0.62,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "©"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 509,
                          "y": 903
                        },
                        {
                          "x": 531,
                          "y": 903
                        },
                        {
                          "x": 531,
                          "y": 924
                        },
                        {
                          "x": 509,
                          "y": 924
                        }
                      ]
                    },
                    "confidence": 0.93,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 509,
                              "y": 904
                            },
                            {
                              "x": 514,
                              "y": 904
                            },
                            {
                              "x": 514,
                              "y": 924
                            },
                            {
                              "x": 509,
                              "y": 924
                            }
                          ]
                        },
                        "confidence": 0.8,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "1"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 516,
                              "y": 904
                            },
                            {
                              "x": 520,
                              "y": 904
                            },
                            {
                              "x": 520,
                              "y": 924
                            },
                            {
                              "x": 516,
                              "y": 924
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "9"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 522,
                              "y": 904
                            },
                            {
                              "x": 526,
                              "y": 904
                            },
                            {
                              "x": 526,
                              "y": 924
                            },
                            {
                              "x": 522,
                              "y": 924
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "9"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 529,
                              "y": 903
                            },
                            {
                              "x": 531,
                              "y": 903
                            },
                            {
                              "x": 531,
                              "y": 923
                            },
                            {
                              "x": 529,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "9"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 536,
                          "y": 903
                        },
                        {
                          "x": 581,
                          "y": 902
                        },
                        {
                          "x": 581,
                          "y": 923
                        },
                        {
                          "x": 536,
                          "y": 924
                        }
                      ]
                    },
                    "confidence": 0.98,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 536,
                              "y": 903
                            },
                            {
                              "x": 545,
                              "y": 903
                            },
                            {
                              "x": 545,
                              "y": 923
                            },
                            {
                              "x": 536,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 0.96,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "W"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 549,
                              "y": 903
                            },
                            {
                              "x": 553,
                              "y": 903
                            },
                            {
                              "x": 553,
                              "y": 923
                            },
                            {
                              "x": 549,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "i"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 554,
                              "y": 903
                            },
                            {
                              "x": 557,
                              "y": 903
                            },
                            {
                              "x": 557,
                              "y": 923
                            },
                            {
                              "x": 554,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "z"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 559,
                              "y": 903
                            },
                            {
                              "x": 562,
                              "y": 903
                            },
                            {
                              "x": 562,
                              "y": 923
                            },
                            {
                              "x": 559,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "a"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 564,
                              "y": 903
                            },
                            {
                              "x": 568,
                              "y": 903
                            },
                            {
                              "x": 568,
                              "y": 923
                            },
                            {
                              "x": 564,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 1,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "r"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 570,
                              "y": 903
                            },
                            {
                              "x": 574,
                              "y": 903
                            },
                            {
                              "x": 574,
                              "y": 923
                            },
                            {
                              "x": 570,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "d"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 577,
                              "y": 903
                            },
                            {
                              "x": 581,
                              "y": 903
                            },
                            {
                              "x": 581,
                              "y": 923
                            },
                            {
                              "x": 577,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "property": {
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "s"
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 580,
                          "y": 903
                        },
                        {
                          "x": 584,
                          "y": 903
                        },
                        {
                          "x": 584,
                          "y": 923
                        },
                        {
                          "x": 580,
                          "y": 923
                        }
                      ]
                    },
                    "confidence": 0.95,
                    "property": {
                      "detectedLanguages": [
                        {
                          "languageCode": "et"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 580,
                              "y": 903
                            },
                            {
                              "x": 584,
                              "y": 903
                            },
                            {
                              "x": 584,
                              "y": 923
                            },
                            {
                              "x": 580,
                              "y": 923
                            }
                          ]
                        },
                        "confidence": 0.95,
                        "property": {
                          "detectedBreak": {
                            "type": "SPACE"
                          },
                          "detectedLanguages": [
                            {
                              "languageCode": "et"
                            }
                          ]
                        },
                        "text": "."
                      }
                    ]
                  },
                  {
                    "boundingBox": {
                      "vertices": [
                        {
                          "x": 615,
                          "y": 902
                        },
                        {
                          "x": 655,
                          "y": 901
                        },
                        {
                          "x": 655,
                          "y": 919
                        },
                        {
                          "x": 615,
                          "y": 920
                        }
                      ]
                    },
                    "confidence": 0.97,
                    "symbols": [
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 615,
                              "y": 902
                            },
                            {
                              "x": 622,
                              "y": 902
                            },
                            {
                              "x": 622,
                              "y": 919
                            },
                            {
                              "x": 615,
                              "y": 919
                            }
                          ]
                        },
                        "confidence": 0.99,
                        "text": "6"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 625,
                              "y": 902
                            },
                            {
                              "x": 630,
                              "y": 902
                            },
                            {
                              "x": 630,
                              "y": 919
                            },
                            {
                              "x": 625,
                              "y": 919
                            }
                          ]
                        },
                        "confidence": 1,
                        "text": "0"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 632,
                              "y": 902
                            },
                            {
                              "x": 637,
                              "y": 902
                            },
                            {
                              "x": 637,
                              "y": 919
                            },
                            {
                              "x": 632,
                              "y": 919
                            }
                          ]
                        },
                        "confidence": 0.97,
                        "text": "/"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 638,
                              "y": 902
                            },
                            {
                              "x": 645,
                              "y": 902
                            },
                            {
                              "x": 645,
                              "y": 919
                            },
                            {
                              "x": 638,
                              "y": 919
                            }
                          ]
                        },
                        "confidence": 0.94,
                        "text": "6"
                      },
                      {
                        "boundingBox": {
                          "vertices": [
                            {
                              "x": 649,
                              "y": 902
                            },
                            {
                              "x": 655,
                              "y": 902
                            },
                            {
                              "x": 655,
                              "y": 919
                            },
                            {
                              "x": 649,
                              "y": 919
                            }
                          ]
                        },
                        "confidence": 0.98,
                        "property": {
                          "detectedBreak": {
                            "type": "LINE_BREAK"
                          }
                        },
                        "text": "4"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedLanguages": [
                {
                  "confidence": 0.54,
                  "languageCode": "en"
                },
                {
                  "confidence": 0.43,
                  "languageCode": "et"
                }
              ]
            }
          }
        ],
        "height": 1000,
        "property": {
          "detectedLanguages": [
            {
              "confidence": 0.77,
              "languageCode": "en"
            },
            {
              "confidence": 0.18,
              "languageCode": "et"
            },
            {
              "confidence": 0.02,
              "languageCode": "vi"
            },
            {
              "confidence": 0.01,
              "languageCode": "id"
            }
          ]
        },
        "width": 750
      }
    ],
    "text": "Basic Pokémon\nPikachu\n50 HP\nOTO\nMouse Pokémon. Length: 1'4\", Weight: 13 lbs.\nSpark If your opponent has any\nBenched Pokémon, choose l of\nthem and this attack does 10\ndamage to it. (Don't apply Weakness\nand Resistance for Benched Pokémon.)\n20\nweakness\nresistance\nretreat cost\nWhen several of these Pokémon gather, their electricity can\nbuild and cause lightning storms. LV. 14 #25\nIllus. Ken Sugimori 1995, 96, 98 Nintendo, Creatures. GAMEFREAK, ©1999 Wizards. 60/64\n"
  },
  "imagePropertiesAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 31
            },
            {
              "x": 749,
              "y": 31
            },
            {
              "x": 749,
              "y": 968
            },
            {
              "y": 968
            }
          ]
        },
        "confidence": 0.38958332,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 50
            },
            {
              "x": 749,
              "y": 50
            },
            {
              "x": 749,
              "y": 800
            },
            {
              "y": 800
            }
          ]
        },
        "confidence": 0.48697916,
        "importanceFraction": 1
      },
      {
        "boundingPoly": {
          "vertices": [
            {
              "y": 100
            },
            {
              "x": 749,
              "y": 100
            },
            {
              "x": 749,
              "y": 725
            },
            {
              "y": 725
            }
          ]
        },
        "confidence": 0.53125,
        "importanceFraction": 0.90909094
      }
    ],
    "dominantColors": {
      "colors": [
        {
          "color": {
            "blue": 57,
            "green": 193,
            "red": 221
          },
          "hex": "DDC139",
          "percent": 38.89578816279919,
          "percentRounded": 39,
          "pixelFraction": 0.014381591,
          "rgb": "221, 193,\n 57",
          "score": 0.2639761
        },
        {
          "color": {
            "blue": 165,
            "green": 198,
            "red": 219
          },
          "hex": "DBC6A5",
          "percent": 11.106950849581704,
          "percentRounded": 11,
          "pixelFraction": 0.118408434,
          "rgb": "219, 198,\n 165",
          "score": 0.07538013
        },
        {
          "color": {
            "blue": 85,
            "green": 124,
            "red": 107
          },
          "hex": "6B7C55",
          "percent": 7.73997954444435,
          "percentRounded": 8,
          "pixelFraction": 0.018516298,
          "rgb": "107, 124,\n 85",
          "score": 0.052529328
        },
        {
          "color": {
            "blue": 50,
            "green": 53,
            "red": 48
          },
          "hex": "303532",
          "percent": 3.226330850811803,
          "percentRounded": 3,
          "pixelFraction": 0.028583413,
          "rgb": "48, 53,\n 50",
          "score": 0.02189631
        },
        {
          "color": {
            "blue": 142,
            "green": 196,
            "red": 222
          },
          "hex": "DEC48E",
          "percent": 10.164878820501968,
          "percentRounded": 10,
          "pixelFraction": 0.106363855,
          "rgb": "222, 196,\n 142",
          "score": 0.06898652
        },
        {
          "color": {
            "blue": 95,
            "green": 153,
            "red": 174
          },
          "hex": "AE995F",
          "percent": 6.4677278168501235,
          "percentRounded": 6,
          "pixelFraction": 0.06399808,
          "rgb": "174, 153,\n 95",
          "score": 0.04389487
        },
        {
          "color": {
            "blue": 90,
            "green": 193,
            "red": 217
          },
          "hex": "D9C15A",
          "percent": 6.151882071933188,
          "percentRounded": 6,
          "pixelFraction": 0.08515101,
          "rgb": "217, 193,\n 90",
          "score": 0.041751303
        },
        {
          "color": {
            "blue": 66,
            "green": 120,
            "red": 137
          },
          "hex": "897842",
          "percent": 5.812806808543825,
          "percentRounded": 6,
          "pixelFraction": 0.02307047,
          "rgb": "137, 120,\n 66",
          "score": 0.039450083
        },
        {
          "color": {
            "blue": 57,
            "green": 90,
            "red": 74
          },
          "hex": "4A5A39",
          "percent": 5.414783914290252,
          "percentRounded": 5,
          "pixelFraction": 0.014381591,
          "rgb": "74, 90,\n 57",
          "score": 0.0367488
        },
        {
          "color": {
            "blue": 87,
            "green": 118,
            "red": 128
          },
          "hex": "807657",
          "percent": 5.018871160243612,
          "percentRounded": 5,
          "pixelFraction": 0.027684564,
          "rgb": "128, 118,\n 87",
          "score": 0.034061838
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "description": "Yellow",
      "mid": "/m/088fh",
      "score": 0.9753415,
      "topicality": 0.9753415
    },
    {
      "description": "Amber",
      "mid": "/m/04d01f",
      "score": 0.9163871,
      "topicality": 0.9163871
    },
    {
      "description": "Cartoon",
      "mid": "/m/0215n",
      "score": 0.84941196,
      "topicality": 0.84941196
    },
    {
      "description": "Felidae",
      "mid": "/m/0307l",
      "score": 0.72989935,
      "topicality": 0.72989935
    },
    {
      "description": "Animated cartoon",
      "mid": "/m/095bb",
      "score": 0.6938866,
      "topicality": 0.6938866
    },
    {
      "description": "Collectible card game",
      "mid": "/m/0216z",
      "score": 0.5901603,
      "topicality": 0.5901603
    },
    {
      "description": "Number",
      "mid": "/m/05fwb",
      "score": 0.506313,
      "topicality": 0.506313
    },
    {
      "description": "Fictional character",
      "mid": "/m/02h7lkt",
      "score": 0.50555944,
      "topicality": 0.50555944
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.31319216,
            "y": 0.17404896
          },
          {
            "x": 0.6698799,
            "y": 0.17404896
          },
          {
            "x": 0.6698799,
            "y": 0.45858625
          },
          {
            "x": 0.31319216,
            "y": 0.45858625
          }
        ]
      },
      "mid": "/m/0jbk",
      "name": "Animal",
      "score": 0.6871215
    },
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0.033754878,
            "y": 0.04496998
          },
          {
            "x": 0.9578441,
            "y": 0.04496998
          },
          {
            "x": 0.9578441,
            "y": 0.973352
          },
          {
            "x": 0.033754878,
            "y": 0.973352
          }
        ]
      },
      "mid": "/m/06z37_",
      "name": "Picture frame",
      "score": 0.557896
    }
  ],
  "logoAnnotations": [
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 587,
            "y": 84
          },
          {
            "x": 637,
            "y": 84
          },
          {
            "x": 637,
            "y": 136
          },
          {
            "x": 587,
            "y": 136
          }
        ]
      },
      "description": "Daemon Tools",
      "mid": "/m/0b6ffd7",
      "score": 0.70814824
    }
  ],
  "safeSearchAnnotation": {
    "adult": "VERY_UNLIKELY",
    "medical": "VERY_UNLIKELY",
    "racy": "VERY_UNLIKELY",
    "spoof": "VERY_UNLIKELY",
    "violence": "VERY_UNLIKELY"
  },
  "textAnnotations": [
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 72,
            "y": 70
          },
          {
            "x": 655,
            "y": 70
          },
          {
            "x": 655,
            "y": 931
          },
          {
            "x": 72,
            "y": 931
          }
        ]
      },
      "description": "Basic Pokémon\nPikachu\n50 HP\nOTO\nMouse Pokémon. Length: 1'4\", Weight: 13 lbs.\nSpark If your opponent has any\nBenched Pokémon, choose l of\nthem and this attack does 10\ndamage to it. (Don't apply Weakness\nand Resistance for Benched Pokémon.)\n20\nweakness\nresistance\nretreat cost\nWhen several of these Pokémon gather, their electricity can\nbuild and cause lightning storms. LV. 14 #25\nIllus. Ken Sugimori 1995, 96, 98 Nintendo, Creatures. GAMEFREAK, ©1999 Wizards. 60/64\n",
      "locale": "en"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 106,
            "y": 70
          },
          {
            "x": 145,
            "y": 71
          },
          {
            "x": 145,
            "y": 89
          },
          {
            "x": 106,
            "y": 88
          }
        ]
      },
      "description": "Basic"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 153,
            "y": 71
          },
          {
            "x": 224,
            "y": 73
          },
          {
            "x": 224,
            "y": 91
          },
          {
            "x": 153,
            "y": 89
          }
        ]
      },
      "description": "Pokémon"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 106,
            "y": 88
          },
          {
            "x": 251,
            "y": 90
          },
          {
            "x": 250,
            "y": 126
          },
          {
            "x": 105,
            "y": 124
          }
        ]
      },
      "description": "Pikachu"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 487,
            "y": 97
          },
          {
            "x": 526,
            "y": 95
          },
          {
            "x": 527,
            "y": 130
          },
          {
            "x": 489,
            "y": 132
          }
        ]
      },
      "description": "50"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 541,
            "y": 95
          },
          {
            "x": 584,
            "y": 93
          },
          {
            "x": 585,
            "y": 128
          },
          {
            "x": 543,
            "y": 130
          }
        ]
      },
      "description": "HP"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 77,
            "y": 520
          },
          {
            "x": 119,
            "y": 519
          },
          {
            "x": 120,
            "y": 537
          },
          {
            "x": 78,
            "y": 538
          }
        ]
      },
      "description": "OTO"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 162,
            "y": 525
          },
          {
            "x": 227,
            "y": 525
          },
          {
            "x": 227,
            "y": 548
          },
          {
            "x": 162,
            "y": 548
          }
        ]
      },
      "description": "Mouse"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 235,
            "y": 525
          },
          {
            "x": 316,
            "y": 525
          },
          {
            "x": 316,
            "y": 548
          },
          {
            "x": 235,
            "y": 548
          }
        ]
      },
      "description": "Pokémon"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 318,
            "y": 525
          },
          {
            "x": 324,
            "y": 525
          },
          {
            "x": 324,
            "y": 548
          },
          {
            "x": 318,
            "y": 548
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 329,
            "y": 525
          },
          {
            "x": 386,
            "y": 525
          },
          {
            "x": 386,
            "y": 548
          },
          {
            "x": 329,
            "y": 548
          }
        ]
      },
      "description": "Length"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 390,
            "y": 525
          },
          {
            "x": 394,
            "y": 525
          },
          {
            "x": 394,
            "y": 548
          },
          {
            "x": 390,
            "y": 548
          }
        ]
      },
      "description": ":"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 405,
            "y": 525
          },
          {
            "x": 431,
            "y": 525
          },
          {
            "x": 431,
            "y": 548
          },
          {
            "x": 405,
            "y": 548
          }
        ]
      },
      "description": "1'4"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 433,
            "y": 525
          },
          {
            "x": 439,
            "y": 525
          },
          {
            "x": 439,
            "y": 548
          },
          {
            "x": 433,
            "y": 548
          }
        ]
      },
      "description": "\""
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 441,
            "y": 525
          },
          {
            "x": 447,
            "y": 525
          },
          {
            "x": 447,
            "y": 548
          },
          {
            "x": 441,
            "y": 548
          }
        ]
      },
      "description": ","
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 448,
            "y": 525
          },
          {
            "x": 515,
            "y": 525
          },
          {
            "x": 515,
            "y": 548
          },
          {
            "x": 448,
            "y": 548
          }
        ]
      },
      "description": "Weight"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 513,
            "y": 525
          },
          {
            "x": 519,
            "y": 525
          },
          {
            "x": 519,
            "y": 548
          },
          {
            "x": 513,
            "y": 548
          }
        ]
      },
      "description": ":"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 527,
            "y": 525
          },
          {
            "x": 544,
            "y": 525
          },
          {
            "x": 544,
            "y": 548
          },
          {
            "x": 527,
            "y": 548
          }
        ]
      },
      "description": "13"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 552,
            "y": 525
          },
          {
            "x": 575,
            "y": 525
          },
          {
            "x": 575,
            "y": 548
          },
          {
            "x": 552,
            "y": 548
          }
        ]
      },
      "description": "lbs"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 575,
            "y": 525
          },
          {
            "x": 581,
            "y": 525
          },
          {
            "x": 581,
            "y": 548
          },
          {
            "x": 575,
            "y": 548
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 180,
            "y": 595
          },
          {
            "x": 259,
            "y": 595
          },
          {
            "x": 259,
            "y": 631
          },
          {
            "x": 180,
            "y": 631
          }
        ]
      },
      "description": "Spark"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 275,
            "y": 595
          },
          {
            "x": 286,
            "y": 595
          },
          {
            "x": 286,
            "y": 631
          },
          {
            "x": 275,
            "y": 631
          }
        ]
      },
      "description": "If"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 294,
            "y": 595
          },
          {
            "x": 339,
            "y": 595
          },
          {
            "x": 339,
            "y": 631
          },
          {
            "x": 294,
            "y": 631
          }
        ]
      },
      "description": "your"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 349,
            "y": 595
          },
          {
            "x": 445,
            "y": 595
          },
          {
            "x": 445,
            "y": 631
          },
          {
            "x": 349,
            "y": 631
          }
        ]
      },
      "description": "opponent"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 454,
            "y": 595
          },
          {
            "x": 484,
            "y": 595
          },
          {
            "x": 484,
            "y": 631
          },
          {
            "x": 454,
            "y": 631
          }
        ]
      },
      "description": "has"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 494,
            "y": 595
          },
          {
            "x": 525,
            "y": 595
          },
          {
            "x": 525,
            "y": 631
          },
          {
            "x": 494,
            "y": 631
          }
        ]
      },
      "description": "any"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 178,
            "y": 630
          },
          {
            "x": 263,
            "y": 629
          },
          {
            "x": 263,
            "y": 653
          },
          {
            "x": 178,
            "y": 654
          }
        ]
      },
      "description": "Benched"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 275,
            "y": 629
          },
          {
            "x": 365,
            "y": 628
          },
          {
            "x": 365,
            "y": 652
          },
          {
            "x": 275,
            "y": 653
          }
        ]
      },
      "description": "Pokémon"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 369,
            "y": 629
          },
          {
            "x": 374,
            "y": 629
          },
          {
            "x": 374,
            "y": 652
          },
          {
            "x": 369,
            "y": 652
          }
        ]
      },
      "description": ","
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 381,
            "y": 628
          },
          {
            "x": 451,
            "y": 627
          },
          {
            "x": 451,
            "y": 651
          },
          {
            "x": 381,
            "y": 652
          }
        ]
      },
      "description": "choose"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 465,
            "y": 628
          },
          {
            "x": 467,
            "y": 628
          },
          {
            "x": 467,
            "y": 651
          },
          {
            "x": 465,
            "y": 651
          }
        ]
      },
      "description": "l"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 481,
            "y": 628
          },
          {
            "x": 500,
            "y": 628
          },
          {
            "x": 500,
            "y": 651
          },
          {
            "x": 481,
            "y": 651
          }
        ]
      },
      "description": "of"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 178,
            "y": 658
          },
          {
            "x": 228,
            "y": 657
          },
          {
            "x": 228,
            "y": 679
          },
          {
            "x": 178,
            "y": 680
          }
        ]
      },
      "description": "them"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 239,
            "y": 657
          },
          {
            "x": 273,
            "y": 657
          },
          {
            "x": 273,
            "y": 680
          },
          {
            "x": 239,
            "y": 680
          }
        ]
      },
      "description": "and"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 283,
            "y": 657
          },
          {
            "x": 317,
            "y": 657
          },
          {
            "x": 317,
            "y": 679
          },
          {
            "x": 283,
            "y": 679
          }
        ]
      },
      "description": "this"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 327,
            "y": 656
          },
          {
            "x": 386,
            "y": 655
          },
          {
            "x": 386,
            "y": 678
          },
          {
            "x": 327,
            "y": 679
          }
        ]
      },
      "description": "attack"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 396,
            "y": 655
          },
          {
            "x": 441,
            "y": 654
          },
          {
            "x": 441,
            "y": 677
          },
          {
            "x": 396,
            "y": 678
          }
        ]
      },
      "description": "does"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 456,
            "y": 655
          },
          {
            "x": 471,
            "y": 655
          },
          {
            "x": 471,
            "y": 677
          },
          {
            "x": 456,
            "y": 677
          }
        ]
      },
      "description": "10"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 178,
            "y": 687
          },
          {
            "x": 253,
            "y": 686
          },
          {
            "x": 253,
            "y": 716
          },
          {
            "x": 178,
            "y": 717
          }
        ]
      },
      "description": "damage"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 263,
            "y": 686
          },
          {
            "x": 283,
            "y": 686
          },
          {
            "x": 283,
            "y": 715
          },
          {
            "x": 263,
            "y": 715
          }
        ]
      },
      "description": "to"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 294,
            "y": 686
          },
          {
            "x": 306,
            "y": 686
          },
          {
            "x": 306,
            "y": 715
          },
          {
            "x": 294,
            "y": 715
          }
        ]
      },
      "description": "it"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 306,
            "y": 685
          },
          {
            "x": 310,
            "y": 685
          },
          {
            "x": 310,
            "y": 714
          },
          {
            "x": 306,
            "y": 714
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 318,
            "y": 685
          },
          {
            "x": 326,
            "y": 685
          },
          {
            "x": 326,
            "y": 714
          },
          {
            "x": 318,
            "y": 714
          }
        ]
      },
      "description": "("
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 324,
            "y": 685
          },
          {
            "x": 375,
            "y": 684
          },
          {
            "x": 375,
            "y": 714
          },
          {
            "x": 324,
            "y": 715
          }
        ]
      },
      "description": "Don't"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 385,
            "y": 684
          },
          {
            "x": 434,
            "y": 683
          },
          {
            "x": 434,
            "y": 713
          },
          {
            "x": 385,
            "y": 714
          }
        ]
      },
      "description": "apply"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 440,
            "y": 683
          },
          {
            "x": 532,
            "y": 682
          },
          {
            "x": 532,
            "y": 712
          },
          {
            "x": 440,
            "y": 713
          }
        ]
      },
      "description": "Weakness"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 178,
            "y": 714
          },
          {
            "x": 212,
            "y": 714
          },
          {
            "x": 212,
            "y": 741
          },
          {
            "x": 178,
            "y": 741
          }
        ]
      },
      "description": "and"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 222,
            "y": 714
          },
          {
            "x": 318,
            "y": 713
          },
          {
            "x": 318,
            "y": 740
          },
          {
            "x": 222,
            "y": 741
          }
        ]
      },
      "description": "Resistance"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 329,
            "y": 714
          },
          {
            "x": 353,
            "y": 714
          },
          {
            "x": 353,
            "y": 741
          },
          {
            "x": 329,
            "y": 741
          }
        ]
      },
      "description": "for"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 362,
            "y": 713
          },
          {
            "x": 440,
            "y": 713
          },
          {
            "x": 440,
            "y": 740
          },
          {
            "x": 362,
            "y": 740
          }
        ]
      },
      "description": "Benched"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 450,
            "y": 713
          },
          {
            "x": 533,
            "y": 713
          },
          {
            "x": 533,
            "y": 740
          },
          {
            "x": 450,
            "y": 740
          }
        ]
      },
      "description": "Pokémon"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 535,
            "y": 713
          },
          {
            "x": 537,
            "y": 713
          },
          {
            "x": 537,
            "y": 740
          },
          {
            "x": 535,
            "y": 740
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 539,
            "y": 713
          },
          {
            "x": 545,
            "y": 713
          },
          {
            "x": 545,
            "y": 740
          },
          {
            "x": 539,
            "y": 740
          }
        ]
      },
      "description": ")"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 587,
            "y": 639
          },
          {
            "x": 636,
            "y": 639
          },
          {
            "x": 636,
            "y": 678
          },
          {
            "x": 587,
            "y": 678
          }
        ]
      },
      "description": "20"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 98,
            "y": 793
          },
          {
            "x": 183,
            "y": 793
          },
          {
            "x": 183,
            "y": 811
          },
          {
            "x": 98,
            "y": 811
          }
        ]
      },
      "description": "weakness"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 328,
            "y": 790
          },
          {
            "x": 411,
            "y": 789
          },
          {
            "x": 411,
            "y": 806
          },
          {
            "x": 328,
            "y": 807
          }
        ]
      },
      "description": "resistance"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 543,
            "y": 789
          },
          {
            "x": 600,
            "y": 789
          },
          {
            "x": 600,
            "y": 804
          },
          {
            "x": 543,
            "y": 804
          }
        ]
      },
      "description": "retreat"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 609,
            "y": 789
          },
          {
            "x": 643,
            "y": 789
          },
          {
            "x": 643,
            "y": 804
          },
          {
            "x": 609,
            "y": 804
          }
        ]
      },
      "description": "cost"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 113,
            "y": 858
          },
          {
            "x": 162,
            "y": 858
          },
          {
            "x": 162,
            "y": 880
          },
          {
            "x": 113,
            "y": 880
          }
        ]
      },
      "description": "When"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 170,
            "y": 857
          },
          {
            "x": 229,
            "y": 856
          },
          {
            "x": 229,
            "y": 879
          },
          {
            "x": 170,
            "y": 880
          }
        ]
      },
      "description": "several"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 237,
            "y": 857
          },
          {
            "x": 256,
            "y": 857
          },
          {
            "x": 256,
            "y": 879
          },
          {
            "x": 237,
            "y": 879
          }
        ]
      },
      "description": "of"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 261,
            "y": 857
          },
          {
            "x": 307,
            "y": 857
          },
          {
            "x": 307,
            "y": 879
          },
          {
            "x": 261,
            "y": 879
          }
        ]
      },
      "description": "these"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 314,
            "y": 856
          },
          {
            "x": 393,
            "y": 855
          },
          {
            "x": 393,
            "y": 878
          },
          {
            "x": 314,
            "y": 879
          }
        ]
      },
      "description": "Pokémon"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 405,
            "y": 855
          },
          {
            "x": 459,
            "y": 854
          },
          {
            "x": 459,
            "y": 877
          },
          {
            "x": 405,
            "y": 878
          }
        ]
      },
      "description": "gather"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 457,
            "y": 855
          },
          {
            "x": 462,
            "y": 855
          },
          {
            "x": 462,
            "y": 877
          },
          {
            "x": 457,
            "y": 877
          }
        ]
      },
      "description": ","
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 466,
            "y": 855
          },
          {
            "x": 506,
            "y": 855
          },
          {
            "x": 506,
            "y": 877
          },
          {
            "x": 466,
            "y": 877
          }
        ]
      },
      "description": "their"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 513,
            "y": 854
          },
          {
            "x": 597,
            "y": 853
          },
          {
            "x": 597,
            "y": 876
          },
          {
            "x": 513,
            "y": 877
          }
        ]
      },
      "description": "electricity"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 601,
            "y": 854
          },
          {
            "x": 633,
            "y": 854
          },
          {
            "x": 633,
            "y": 876
          },
          {
            "x": 601,
            "y": 876
          }
        ]
      },
      "description": "can"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 111,
            "y": 880
          },
          {
            "x": 154,
            "y": 879
          },
          {
            "x": 154,
            "y": 902
          },
          {
            "x": 111,
            "y": 903
          }
        ]
      },
      "description": "build"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 158,
            "y": 879
          },
          {
            "x": 194,
            "y": 878
          },
          {
            "x": 194,
            "y": 901
          },
          {
            "x": 158,
            "y": 902
          }
        ]
      },
      "description": "and"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 202,
            "y": 878
          },
          {
            "x": 250,
            "y": 877
          },
          {
            "x": 250,
            "y": 900
          },
          {
            "x": 202,
            "y": 901
          }
        ]
      },
      "description": "cause"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 257,
            "y": 878
          },
          {
            "x": 331,
            "y": 877
          },
          {
            "x": 331,
            "y": 899
          },
          {
            "x": 257,
            "y": 900
          }
        ]
      },
      "description": "lightning"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 338,
            "y": 876
          },
          {
            "x": 397,
            "y": 875
          },
          {
            "x": 397,
            "y": 898
          },
          {
            "x": 338,
            "y": 899
          }
        ]
      },
      "description": "storms"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 396,
            "y": 876
          },
          {
            "x": 398,
            "y": 876
          },
          {
            "x": 398,
            "y": 898
          },
          {
            "x": 396,
            "y": 898
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 417,
            "y": 875
          },
          {
            "x": 433,
            "y": 875
          },
          {
            "x": 433,
            "y": 898
          },
          {
            "x": 417,
            "y": 898
          }
        ]
      },
      "description": "LV"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 435,
            "y": 875
          },
          {
            "x": 438,
            "y": 875
          },
          {
            "x": 438,
            "y": 897
          },
          {
            "x": 435,
            "y": 897
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 448,
            "y": 875
          },
          {
            "x": 463,
            "y": 875
          },
          {
            "x": 463,
            "y": 897
          },
          {
            "x": 448,
            "y": 897
          }
        ]
      },
      "description": "14"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 483,
            "y": 875
          },
          {
            "x": 494,
            "y": 875
          },
          {
            "x": 494,
            "y": 897
          },
          {
            "x": 483,
            "y": 897
          }
        ]
      },
      "description": "#"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 496,
            "y": 874
          },
          {
            "x": 514,
            "y": 874
          },
          {
            "x": 514,
            "y": 896
          },
          {
            "x": 496,
            "y": 896
          }
        ]
      },
      "description": "25"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 72,
            "y": 911
          },
          {
            "x": 99,
            "y": 911
          },
          {
            "x": 99,
            "y": 931
          },
          {
            "x": 72,
            "y": 931
          }
        ]
      },
      "description": "Illus"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 99,
            "y": 911
          },
          {
            "x": 104,
            "y": 911
          },
          {
            "x": 104,
            "y": 931
          },
          {
            "x": 99,
            "y": 931
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 108,
            "y": 910
          },
          {
            "x": 128,
            "y": 910
          },
          {
            "x": 128,
            "y": 931
          },
          {
            "x": 108,
            "y": 931
          }
        ]
      },
      "description": "Ken"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 139,
            "y": 910
          },
          {
            "x": 195,
            "y": 909
          },
          {
            "x": 195,
            "y": 930
          },
          {
            "x": 139,
            "y": 931
          }
        ]
      },
      "description": "Sugimori"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 236,
            "y": 908
          },
          {
            "x": 260,
            "y": 908
          },
          {
            "x": 260,
            "y": 928
          },
          {
            "x": 236,
            "y": 928
          }
        ]
      },
      "description": "1995"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 260,
            "y": 908
          },
          {
            "x": 265,
            "y": 908
          },
          {
            "x": 265,
            "y": 928
          },
          {
            "x": 260,
            "y": 928
          }
        ]
      },
      "description": ","
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 266,
            "y": 908
          },
          {
            "x": 278,
            "y": 908
          },
          {
            "x": 278,
            "y": 928
          },
          {
            "x": 266,
            "y": 928
          }
        ]
      },
      "description": "96"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 280,
            "y": 908
          },
          {
            "x": 282,
            "y": 908
          },
          {
            "x": 282,
            "y": 928
          },
          {
            "x": 280,
            "y": 928
          }
        ]
      },
      "description": ","
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 286,
            "y": 907
          },
          {
            "x": 298,
            "y": 907
          },
          {
            "x": 298,
            "y": 928
          },
          {
            "x": 286,
            "y": 928
          }
        ]
      },
      "description": "98"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 304,
            "y": 907
          },
          {
            "x": 352,
            "y": 906
          },
          {
            "x": 352,
            "y": 927
          },
          {
            "x": 304,
            "y": 928
          }
        ]
      },
      "description": "Nintendo"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 352,
            "y": 906
          },
          {
            "x": 354,
            "y": 906
          },
          {
            "x": 354,
            "y": 926
          },
          {
            "x": 352,
            "y": 926
          }
        ]
      },
      "description": ","
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 360,
            "y": 906
          },
          {
            "x": 413,
            "y": 905
          },
          {
            "x": 413,
            "y": 926
          },
          {
            "x": 360,
            "y": 927
          }
        ]
      },
      "description": "Creatures"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 413,
            "y": 905
          },
          {
            "x": 415,
            "y": 905
          },
          {
            "x": 415,
            "y": 925
          },
          {
            "x": 413,
            "y": 925
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 419,
            "y": 905
          },
          {
            "x": 486,
            "y": 904
          },
          {
            "x": 486,
            "y": 925
          },
          {
            "x": 419,
            "y": 926
          }
        ]
      },
      "description": "GAMEFREAK"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 490,
            "y": 904
          },
          {
            "x": 492,
            "y": 904
          },
          {
            "x": 492,
            "y": 924
          },
          {
            "x": 490,
            "y": 924
          }
        ]
      },
      "description": ","
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 497,
            "y": 904
          },
          {
            "x": 502,
            "y": 904
          },
          {
            "x": 502,
            "y": 924
          },
          {
            "x": 497,
            "y": 924
          }
        ]
      },
      "description": "©"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 509,
            "y": 903
          },
          {
            "x": 531,
            "y": 903
          },
          {
            "x": 531,
            "y": 924
          },
          {
            "x": 509,
            "y": 924
          }
        ]
      },
      "description": "1999"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 536,
            "y": 903
          },
          {
            "x": 581,
            "y": 902
          },
          {
            "x": 581,
            "y": 923
          },
          {
            "x": 536,
            "y": 924
          }
        ]
      },
      "description": "Wizards"
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 580,
            "y": 903
          },
          {
            "x": 584,
            "y": 903
          },
          {
            "x": 584,
            "y": 923
          },
          {
            "x": 580,
            "y": 923
          }
        ]
      },
      "description": "."
    },
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 615,
            "y": 902
          },
          {
            "x": 655,
            "y": 901
          },
          {
            "x": 655,
            "y": 919
          },
          {
            "x": 615,
            "y": 920
          }
        ]
      },
      "description": "60/64"
    }
  ]
}
