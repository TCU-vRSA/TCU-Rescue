const zoom = {
  "type": "flex",
  "altText": "Zoom関連のヘルプ",
  "contents": {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "Zoom関連のヘルプ",
          "align": "center",
          "weight": "bold"
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "以下から選択してください。"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "Zoomが立ち上がらない",
            "text": "Zoom---Zoomが立ち上がらない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "ミーティングが開始できない",
            "text": "Zoom---ミーティングが開始できない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "学生が入室できない",
            "text": "Zoom---学生が入室できない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "途中で終了してしまった",
            "text": "Zoom---途中で終了してしまった"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "使えない機能がある",
            "text": "Zoom---使えない機能がある"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "操作方法がわからない",
            "text": "Zoom---操作方法がわからない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "その他",
            "text": "Zoom---その他"
          },
          "style": "link"
        }
      ]
    },
    "styles": {
      "header": {
        "separator": true
      }
    }
  }
}

const classroom = {
  "type": "flex",
  "altText": "教室設備関連のヘルプ",
  "contents": {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "教室設備関連のヘルプ",
          "align": "center",
          "weight": "bold"
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "以下から選択してください。"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "マイクの音がZoomに入らない",
            "text": "教室---マイクの音がZoomに入らない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "マイクの音が小さい",
            "text": "教室---マイクの音が小さい"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "教室にZoomの音が入らない",
            "text": "教室---教室にZoomの音が入らない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "プロジェクターが映らない",
            "text": "教室---プロジェクターが映らない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "その他",
            "text": "教室---その他"
          },
          "style": "link"
        }
      ]
    },
    "styles": {
      "header": {
        "separator": true
      }
    }
  }
}

const pc = {
  "type": "flex",
  "altText": "パソコン関連のヘルプ",
  "contents": {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "PCに関してのヘルプ",
          "align": "center",
          "weight": "bold"
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "以下から選択してください。"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "PCが立ち上がらない",
            "text": "PC---PCが立ち上がらない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "PCが固まってしまった",
            "text": "PC---PCが固まってしまった"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "ソフトが立ち上がらない",
            "text": "PC---ソフトが立ち上がらない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "その他",
            "text": "PC---その他"
          },
          "style": "link"
        }
      ]
    },
    "styles": {
      "header": {
        "separator": true
      }
    }
  }
}

const choose_classroom = {
  "type": "flex",
  "altText": "教室選択",
  "contents": {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "教室選択: 2号館",
              "weight": "bold",
              "align": "center"
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "今いる教室を選んでください",
              "offsetBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "21A",
                    "text": "21A"
                  },
                  "style": "primary"
                }
              ],
              "paddingBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "22B",
                    "text": "22B"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "22C",
                    "text": "22C"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "22D",
                    "text": "22D"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "22E",
                    "text": "22E"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "22H",
                    "text": "22H"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "22G",
                    "text": "22G"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "margin": "sm",
              "paddingBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "2号館その他",
                    "text": "2号館その他"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            }
          ]
        }
      },
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "教室選択: 3号館1階",
              "weight": "bold",
              "align": "center"
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "今いる教室を選んでください",
              "offsetBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "FEISホール",
                    "text": "FEISホール"
                  },
                  "style": "primary"
                }
              ],
              "paddingBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "31A",
                    "text": "31A"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "31B",
                    "text": "31B"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "31C",
                    "text": "31C"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "31D",
                    "text": "31D"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "31E",
                    "text": "31E"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "31F",
                    "text": "31F"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "margin": "sm",
              "paddingBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "3号館1階その他",
                    "text": "3号館1階その他"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            }
          ]
        }
      },
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "教室選択: 3号館2階",
              "weight": "bold",
              "align": "center"
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "今いる教室を選んでください",
              "offsetBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32A",
                    "text": "32A"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32B",
                    "text": "32B"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32C",
                    "text": "32C"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32D",
                    "text": "32D"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32E",
                    "text": "32E"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32F",
                    "text": "32F"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "margin": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32G",
                    "text": "32G"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32H",
                    "text": "32H"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32I",
                    "text": "32I"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "margin": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32J",
                    "text": "32J"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "32K",
                    "text": "32K"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "margin": "sm",
              "paddingBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "3号館2階その他",
                    "text": "3号館2階その他"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            }
          ]
        }
      },
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "教室選択: 3号館3階",
              "weight": "bold",
              "align": "center"
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "今いる教室を選んでください",
              "offsetBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33A",
                    "text": "33A"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33B",
                    "text": "33B"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33C",
                    "text": "33C"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33D",
                    "text": "33D"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33E",
                    "text": "33E"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33F",
                    "text": "33F"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "margin": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33G",
                    "text": "33G"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33H",
                    "text": "33H"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33I",
                    "text": "33I"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "margin": "sm"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "33K",
                    "text": "33K"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "margin": "sm",
              "paddingBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "3号館3階その他",
                    "text": "3号館3階その他"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            }
          ]
        }
      },
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "教室選択: 3号館4階以上",
              "weight": "bold",
              "align": "center"
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "今いる教室を選んでください",
              "offsetBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "34A",
                    "text": "34A"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "34B",
                    "text": "34B"
                  },
                  "style": "primary"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "34C",
                    "text": "34C"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "paddingBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "YCホール(5階)",
                    "text": "YCホール"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm",
              "paddingBottom": "15px"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "message",
                    "label": "3号館4階以上その他",
                    "text": "3号館4階以上その他"
                  },
                  "style": "primary"
                }
              ],
              "spacing": "sm"
            }
          ]
        }
      }
    ]
  }
}

const finish = {
  "type": "text",
  "text": "ヘルプリクエストを受け付けました。10分経っても担当者が来ない場合は、情報基盤センターに電話をお願いします。"
}

const error = {
  "type": "text",
  "text": "エラーが発生しました。操作を最初からやり直してください。"
}

const default_msg = {
  "type": "text",
  "text": "このメッセージは対応していません。選択肢から選んでください。"
}

const submsg_list = [
  "Zoom---Zoomが立ち上がらない",
  "Zoom---ミーティングが開始できない",
  "Zoom---学生が入室できない",
  "Zoom---途中で終了してしまった",
  "Zoom---使えない機能がある",
  "Zoom---操作方法がわからない",
  "Zoom---その他",
  "教室---マイクの音がZoomに入らない",
  "教室---マイクの音が小さい",
  "教室---教室にZoomの音が入らない",
  "教室---プロジェクターが映らない",
  "教室---その他",
  "PC---PCが立ち上がらない",
  "PC---PCが固まってしまった",
  "PC---ソフトが立ち上がらない",
  "PC---その他",
  "とにかく来てほしい",
]

const classroom_list = [
  "21A",
  "22B",
  "22C",
  "22D",
  "22E",
  "22H",
  "22G",
  "FEISホール",
  "31A",
  "31B",
  "31C",
  "31D",
  "31E",
  "31F",
  "32A",
  "32B",
  "32C",
  "32D",
  "32E",
  "32F",
  "32G",
  "32H",
  "32I",
  "32J",
  "32K",
  "33A",
  "33B",
  "33C",
  "33D",
  "33E",
  "33F",
  "33G",
  "33H",
  "33I",
  "33K",
  "34A",
  "34B",
  "34C",
  "YCホール",
  "2号館その他",
  "3号館1階その他",
  "3号館2階その他",
  "3号館3階その他",
  "3号館4階以上その他"
]


module.exports = {
  zoom,
  classroom,
  pc,
  choose_classroom,
  finish,
  error,
  default_msg,
  submsg_list,
  classroom_list
}