import type { PracticeSet } from "../types";

export const normalSets: PracticeSet[] = [
  // 1번: 틀린 1개
  {
    id: 1,
    original: ["아빠는 요리를 잘 하세요.", "동생은 그림 그리기를 좋아해요."],
    words: [
      [
        { id: "8-1-0", text: "아빠는", answer: "아빠는", isWrong: false },
        { id: "8-1-1", text: "요리를", answer: "요리를", isWrong: false },
        { id: "8-1-2", text: "잘하세요.", answer: "잘 하세요.", isWrong: true }
      ],
      [
        { id: "8-3-0", text: "동생은", answer: "동생은", isWrong: false },
        { id: "8-3-1", text: "그림", answer: "그림", isWrong: false },
        { id: "8-3-2", text: "그리기를", answer: "그리기를", isWrong: false },
        { id: "8-3-3", text: "조아해요.", answer: "좋아해요.", isWrong: true }
      ]
    ],
    keysCovered: []
  },
  // 2번: 틀린 2개
  {
    id: 2,
    original: ["선생님 말씀을 잘 들어요.", "급식 시간에 맛있게 먹어요."],
    words: [
      [
        { id: "4-1-0", text: "선생님", answer: "선생님", isWrong: false },
        { id: "4-1-1", text: "말씀을", answer: "말씀을", isWrong: false },
        { id: "4-1-2", text: "잘", answer: "잘", isWrong: false },
        { id: "4-1-3", text: "드러요.", answer: "들어요.", isWrong: true }
      ],
      [
        { id: "4-3-0", text: "급식", answer: "급식", isWrong: false },
        { id: "4-3-1", text: "시간에", answer: "시간에", isWrong: false },
        { id: "4-3-2", text: "마싯게", answer: "맛있게", isWrong: true },
        { id: "4-3-3", text: "먹어요.", answer: "먹어요.", isWrong: false }
      ]
    ],
    keysCovered: []
  },
  // 3번: 틀린 2개
  {
    id: 3,
    original: ["가족과 제주도 여행을 갔어요.", "한라산 꼭대기까지 올라갔어요."],
    words: [
      [
        { id: "10-0-0", text: "가족과", answer: "가족과", isWrong: false },
        { id: "10-0-1", text: "제주도", answer: "제주도", isWrong: false },
        { id: "10-0-2", text: "여행을", answer: "여행을", isWrong: false },
        { id: "10-0-3", text: "갓어요.", answer: "갔어요.", isWrong: true }
      ],
      [
        { id: "10-2-0", text: "한라산", answer: "한라산", isWrong: false },
        {
          id: "10-2-1",
          text: "꼭대기까지",
          answer: "꼭대기까지",
          isWrong: false
        },
        {
          id: "10-2-2",
          text: "올라갓어요.",
          answer: "올라갔어요.",
          isWrong: true
        }
      ]
    ],
    keysCovered: []
  },
  // 4번: 틀린 3개
  {
    id: 4,
    original: [
      "줄넘기를 백 번이나 넘었어요.",
      "태권도를 열심히 배우고 있어요."
    ],
    words: [
      [
        { id: "9-1-0", text: "줄넘기를", answer: "줄넘기를", isWrong: false },
        { id: "9-1-1", text: "백", answer: "백", isWrong: false },
        { id: "9-1-2", text: "번이나", answer: "번이나", isWrong: false },
        { id: "9-1-3", text: "너머써요.", answer: "넘었어요.", isWrong: true }
      ],
      [
        { id: "9-3-0", text: "태권도를", answer: "태권도를", isWrong: false },
        { id: "9-3-1", text: "여름히", answer: "열심히", isWrong: true },
        { id: "9-3-2", text: "배우고", answer: "배우고", isWrong: false },
        { id: "9-3-3", text: "잇어요.", answer: "있어요.", isWrong: true }
      ]
    ],
    keysCovered: []
  },
  // 5번: 틀린 3개
  {
    id: 5,
    original: [
      "여름에는 수박으로 더위를 식혀요.",
      "가을에는 단풍이 빨갛게 물들어요."
    ],
    words: [
      [
        { id: "6-1-0", text: "여름에는", answer: "여름에는", isWrong: false },
        { id: "6-1-1", text: "수박으로", answer: "수박으로", isWrong: false },
        { id: "6-1-2", text: "더이를", answer: "더위를", isWrong: true },
        { id: "6-1-3", text: "식혀요.", answer: "식혀요.", isWrong: false }
      ],
      [
        { id: "6-2-0", text: "가을에는", answer: "가을에는", isWrong: false },
        { id: "6-2-1", text: "단풍이", answer: "단풍이", isWrong: false },
        { id: "6-2-2", text: "말갛게", answer: "빨갛게", isWrong: true },
        { id: "6-2-3", text: "물드러요.", answer: "물들어요.", isWrong: true }
      ]
    ],
    keysCovered: []
  },
  // 6번: 틀린 4개
  {
    id: 6,
    original: ["동물원에 귀여운 동물이 많아요.", "기린은 목이 아주 길어요."],
    words: [
      [
        { id: "7-0-0", text: "동물원에", answer: "동물원에", isWrong: false },
        { id: "7-0-1", text: "귀여운", answer: "귀여운", isWrong: false },
        { id: "7-0-2", text: "동물이", answer: "동물이", isWrong: false },
        { id: "7-0-3", text: "마나요.", answer: "많아요.", isWrong: true }
      ],
      [
        { id: "7-1-0", text: "기린은", answer: "기린은", isWrong: false },
        { id: "7-1-1", text: "목이", answer: "목이", isWrong: false },
        { id: "7-1-2", text: "아주", answer: "아주", isWrong: false },
        { id: "7-1-3", text: "기러요.", answer: "길어요.", isWrong: true }
      ]
    ],
    keysCovered: []
  },
  // 7번: 틀린 5개 (한/영 전환)
  {
    id: 7,
    original: ["오늘은 날씨가 맑고 화창해요.", "바람이 살랑살랑 불어와요."],
    words: [
      [
        { id: "3-0-0", text: "오늘은", answer: "오늘은", isWrong: false },
        { id: "3-0-1", text: "날시가", answer: "날씨가", isWrong: true },
        { id: "3-0-2", text: "맑고", answer: "맑고", isWrong: false },
        { id: "3-0-3", text: "sunny해요.", answer: "화창해요.", isWrong: true }
      ],
      [
        { id: "3-1-0", text: "wind", answer: "바람이", isWrong: true },
        { id: "3-1-1", text: "살랑살랑", answer: "살랑살랑", isWrong: false },
        { id: "3-1-2", text: "불어와요.", answer: "불어와요.", isWrong: false }
      ]
    ],
    keysCovered: []
  },
  // 8번: 틀린 5개
  {
    id: 8,
    original: ["뽀송뽀송한 털이 참 예뻐요.", "강아지는 뼈다귀를 좋아해요."],
    words: [
      [
        {
          id: "2-1-0",
          text: "보송보송한",
          answer: "뽀송뽀송한",
          isWrong: true
        },
        { id: "2-1-1", text: "털이", answer: "털이", isWrong: false },
        { id: "2-1-2", text: "참", answer: "참", isWrong: false },
        { id: "2-1-3", text: "이뻐요.", answer: "예뻐요.", isWrong: true }
      ],
      [
        { id: "2-2-0", text: "강아지는", answer: "강아지는", isWrong: false },
        { id: "2-2-1", text: "베다귀를", answer: "뼈다귀를", isWrong: true },
        { id: "2-2-2", text: "조아해요.", answer: "좋아해요.", isWrong: true }
      ]
    ],
    keysCovered: []
  },
  // 9번: 틀린 5개
  {
    id: 9,
    original: ["엄마가 떡볶이를 만들어 줘요.", "달콤한 케이크를 먹고 싶어요."],
    words: [
      [
        { id: "5-1-0", text: "엄마가", answer: "엄마가", isWrong: false },
        { id: "5-1-1", text: "덕볶이를", answer: "떡볶이를", isWrong: true },
        { id: "5-1-2", text: "만들어", answer: "만들어", isWrong: false },
        { id: "5-1-3", text: "줘요.", answer: "줘요.", isWrong: false }
      ],
      [
        { id: "5-2-0", text: "달꼼한", answer: "달콤한", isWrong: true },
        { id: "5-2-1", text: "캐이쿠를", answer: "케이크를", isWrong: true },
        { id: "5-2-2", text: "먹고", answer: "먹고", isWrong: false },
        { id: "5-2-3", text: "십어요.", answer: "싶어요.", isWrong: true }
      ]
    ],
    keysCovered: []
  },
  // 10번: 틀린 9개 (가장 어려움)
  {
    id: 10,
    original: [
      "토끼가 깡총깡총 뛰고 있어요.",
      "토끼를 깨우지 않도록 조심해요."
    ],
    words: [
      [
        { id: "1-0-0", text: "토기가", answer: "토끼가", isWrong: true },
        { id: "1-0-1", text: "강총강총", answer: "깡총깡총", isWrong: true },
        { id: "1-0-2", text: "뒤고", answer: "뛰고", isWrong: true },
        { id: "1-0-3", text: "잇어요.", answer: "있어요.", isWrong: true }
      ],
      [
        { id: "1-3-0", text: "토기를", answer: "토끼를", isWrong: true },
        { id: "1-3-1", text: "개우지", answer: "깨우지", isWrong: true },
        { id: "1-3-2", text: "않도록", answer: "않도록", isWrong: false },
        { id: "1-3-3", text: "조심해요.", answer: "조심해요.", isWrong: false }
      ]
    ],
    keysCovered: []
  }
];
