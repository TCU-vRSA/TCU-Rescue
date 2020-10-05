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
            "text": "Zoom・Zoomが立ち上がらない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "ミーティングが開始できない",
            "text": "Zoom・ミーティングが開始できない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "学生が入室できない",
            "text": "Zoom・学生が入室できない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "途中で終了してしまった",
            "text": "Zoom・途中で終了してしまった"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "使えない機能がある",
            "text": "Zoom・使えない機能がある"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "操作方法がわからない",
            "text": "Zoom・操作方法がわからない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "その他",
            "text": "Zoom・その他"
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
            "text": "教室・マイクの音がZoomに入らない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "マイクの音が小さい",
            "text": "教室・マイクの音が小さい"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "教室にZoomの音が入らない",
            "text": "教室・教室にZoomの音が入らない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "プロジェクターが映らない",
            "text": "教室・プロジェクターが映らない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "その他",
            "text": "教室・その他"
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
            "text": "PC・PCが立ち上がらない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "PCが固まってしまった",
            "text": "PC・PCが固まってしまった"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "ソフトが立ち上がらない",
            "text": "PC・ソフトが立ち上がらない"
          },
          "style": "link"
        },
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "その他",
            "text": "PC・その他"
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

const submsg_list = [
  "Zoom・Zoomが立ち上がらない",
  "Zoom・ミーティングが開始できない",
  "Zoom・学生が入室できない",
  "Zoom・途中で終了してしまった",
  "Zoom・使えない機能がある",
  "Zoom・操作方法がわからない",
  "Zoom・その他",
  "マイクの音がZoomに入らない",
  "教室・マイクの音がZoomに入らない",
  "教室・マイクの音が小さい",
  "教室・教室にZoomの音が入らない",
  "教室・プロジェクターが映らない",
  "教室・その他",
  "PC・PCが立ち上がらない",
  "PC・PCが固まってしまった",
  "PC・ソフトが立ち上がらない",
  "PC・その他",
  "とにかく来てほしい",
]

module.exports = {
  zoom,
  classroom,
  pc,
  submsg_list
}