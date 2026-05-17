import type { PracticeSet } from "../types";

export const normalSets: PracticeSet[] = [
  // Set 8 → 1번: 틀린 어절 1개
  {
    id: 8,
    original: [
      "우리 가족은 다섯 명이에요.",
      "아빠는 요리를 잘 하세요.",
      "엄마는 노래를 잘 부르세요.",
      "동생은 그림 그리기를 좋아해요."
    ],
    words: [
      [
        { id: "8-0-0", text: "우리", answer: "우리", isWrong: false },
        { id: "8-0-1", text: "가족은", answer: "가족은", isWrong: false },
        { id: "8-0-2", text: "다섯", answer: "다섯", isWrong: false },
        { id: "8-0-3", text: "명이에요.", answer: "명이에요.", isWrong: false }
      ],
      [
        { id: "8-1-0", text: "아빠는", answer: "아빠는", isWrong: false },
        { id: "8-1-1", text: "요리를", answer: "요리를", isWrong: false },
        {
          id: "8-1-2",
          text: "잘하세요.",
          answer: "잘 하세요.",
          isWrong: true
        }
      ],
      [
        { id: "8-2-0", text: "엄마는", answer: "엄마는", isWrong: false },
        { id: "8-2-1", text: "노래를", answer: "노래를", isWrong: false },
        { id: "8-2-2", text: "잘", answer: "잘", isWrong: false },
        { id: "8-2-3", text: "부르세요.", answer: "부르세요.", isWrong: false }
      ],
      [
        { id: "8-3-0", text: "동생은", answer: "동생은", isWrong: false },
        { id: "8-3-1", text: "그림", answer: "그림", isWrong: false },
        { id: "8-3-2", text: "그리기를", answer: "그리기를", isWrong: false },
        { id: "8-3-3", text: "조아해요.", answer: "좋아해요.", isWrong: true }
      ]
    ],
    keysCovered: ["한/영 전환", "쌍자음(Shift)", "백스페이스"]
  },
  // Set 4 → 2번: 틀린 어절 2개
  {
    id: 4,
    original: [
      "학교에서 친구들과 공부해요.",
      "선생님 말씀을 잘 들어요.",
      "쉬는 시간에 운동장에서 뛰어놀아요.",
      "급식 시간에 맛있게 먹어요."
    ],
    words: [
      [
        { id: "4-0-0", text: "학교에서", answer: "학교에서", isWrong: false },
        { id: "4-0-1", text: "친구들과", answer: "친구들과", isWrong: false },
        { id: "4-0-2", text: "공부해요.", answer: "공부해요.", isWrong: false }
      ],
      [
        { id: "4-1-0", text: "선생님", answer: "선생님", isWrong: false },
        { id: "4-1-1", text: "말씀을", answer: "말씀을", isWrong: false },
        { id: "4-1-2", text: "잘", answer: "잘", isWrong: false },
        { id: "4-1-3", text: "드러요.", answer: "들어요.", isWrong: true }
      ],
      [
        { id: "4-2-0", text: "쉬는", answer: "쉬는", isWrong: false },
        { id: "4-2-1", text: "시간에", answer: "시간에", isWrong: false },
        {
          id: "4-2-2",
          text: "운동장에서",
          answer: "운동장에서",
          isWrong: false
        },
        {
          id: "4-2-3",
          text: "뛰어놀아요.",
          answer: "뛰어놀아요.",
          isWrong: false
        }
      ],
      [
        { id: "4-3-0", text: "급식", answer: "급식", isWrong: false },
        { id: "4-3-1", text: "시간에", answer: "시간에", isWrong: false },
        { id: "4-3-2", text: "마싯게", answer: "맛있게", isWrong: true },
        { id: "4-3-3", text: "먹어요.", answer: "먹어요.", isWrong: false }
      ]
    ],
    keysCovered: ["띄어쓰기", "백스페이스"]
  },
  // Set 10 → 3번: 틀린 어절 2개
  {
    id: 10,
    original: [
      "가족과 함께 제주도 여행을 갔어요.",
      "바다에서 조개를 주웠어요.",
      "한라산 꼭대기까지 올라갔어요.",
      "여행은 정말 즐겁고 신나요."
    ],
    words: [
      [
        { id: "10-0-0", text: "가족과", answer: "가족과", isWrong: false },
        { id: "10-0-1", text: "함께", answer: "함께", isWrong: false },
        { id: "10-0-2", text: "제주도", answer: "제주도", isWrong: false },
        { id: "10-0-3", text: "여행을", answer: "여행을", isWrong: false },
        { id: "10-0-4", text: "갓어요.", answer: "갔어요.", isWrong: true }
      ],
      [
        { id: "10-1-0", text: "바다에서", answer: "바다에서", isWrong: false },
        { id: "10-1-1", text: "조개를", answer: "조개를", isWrong: false },
        { id: "10-1-2", text: "주웠어요.", answer: "주웠어요.", isWrong: false }
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
      ],
      [
        { id: "10-3-0", text: "여행은", answer: "여행은", isWrong: false },
        { id: "10-3-1", text: "정말", answer: "정말", isWrong: false },
        { id: "10-3-2", text: "즐겁고", answer: "즐겁고", isWrong: false },
        { id: "10-3-3", text: "신나요.", answer: "신나요.", isWrong: false }
      ]
    ],
    keysCovered: ["쌍자음(Shift)", "한/영 전환", "백스페이스", "방향키"]
  },
  // Set 9 → 4번: 틀린 어절 3개
  {
    id: 9,
    original: [
      "운동장에서 친구들과 축구를 해요.",
      "줄넘기를 백 번이나 넘었어요.",
      "수영장에서 자유형을 연습해요.",
      "태권도를 열심히 배우고 있어요."
    ],
    words: [
      [
        {
          id: "9-0-0",
          text: "운동장에서",
          answer: "운동장에서",
          isWrong: false
        },
        { id: "9-0-1", text: "친구들과", answer: "친구들과", isWrong: false },
        { id: "9-0-2", text: "축구를", answer: "축구를", isWrong: false },
        { id: "9-0-3", text: "해요.", answer: "해요.", isWrong: false }
      ],
      [
        { id: "9-1-0", text: "줄넘기를", answer: "줄넘기를", isWrong: false },
        { id: "9-1-1", text: "백", answer: "백", isWrong: false },
        { id: "9-1-2", text: "번이나", answer: "번이나", isWrong: false },
        { id: "9-1-3", text: "너머써요.", answer: "넘었어요.", isWrong: true }
      ],
      [
        {
          id: "9-2-0",
          text: "수영장에서",
          answer: "수영장에서",
          isWrong: false
        },
        { id: "9-2-1", text: "자유형을", answer: "자유형을", isWrong: false },
        { id: "9-2-2", text: "연습해요.", answer: "연습해요.", isWrong: false }
      ],
      [
        { id: "9-3-0", text: "태권도를", answer: "태권도를", isWrong: false },
        { id: "9-3-1", text: "여름히", answer: "열심히", isWrong: true },
        { id: "9-3-2", text: "배우고", answer: "배우고", isWrong: false },
        { id: "9-3-3", text: "잇어요.", answer: "있어요.", isWrong: true }
      ]
    ],
    keysCovered: ["쌍자음(Shift)", "백스페이스", "방향키"]
  },
  // Set 6 → 5번: 틀린 어절 4개
  {
    id: 6,
    original: [
      "봄에는 꽃이 활짝 피어요.",
      "여름에는 수박을 먹으며 더위를 식혀요.",
      "가을에는 단풍이 빨갛게 물들어요.",
      "겨울에는 눈사람을 만들어요."
    ],
    words: [
      [
        { id: "6-0-0", text: "봄에는", answer: "봄에는", isWrong: false },
        { id: "6-0-1", text: "꽃이", answer: "꽃이", isWrong: false },
        { id: "6-0-2", text: "활짝", answer: "활짝", isWrong: false },
        { id: "6-0-3", text: "피어요.", answer: "피어요.", isWrong: false }
      ],
      [
        { id: "6-1-0", text: "여름에는", answer: "여름에는", isWrong: false },
        { id: "6-1-1", text: "수박을", answer: "수박을", isWrong: false },
        { id: "6-1-2", text: "먹으며", answer: "먹으며", isWrong: false },
        { id: "6-1-3", text: "더이를", answer: "더위를", isWrong: true },
        { id: "6-1-4", text: "식혀요.", answer: "식혀요.", isWrong: false }
      ],
      [
        { id: "6-2-0", text: "가을에는", answer: "가을에는", isWrong: false },
        { id: "6-2-1", text: "단풍이", answer: "단풍이", isWrong: false },
        { id: "6-2-2", text: "말갛게", answer: "빨갛게", isWrong: true },
        { id: "6-2-3", text: "물드러요.", answer: "물들어요.", isWrong: true }
      ],
      [
        { id: "6-3-0", text: "겨울에는", answer: "겨울에는", isWrong: false },
        { id: "6-3-1", text: "눈사람을", answer: "눈사람을", isWrong: false },
        { id: "6-3-2", text: "만드러요.", answer: "만들어요.", isWrong: true }
      ]
    ],
    keysCovered: ["쌍자음(Shift)", "백스페이스", "방향키"]
  },
  // Set 7 → 6번: 틀린 어절 4개
  {
    id: 7,
    original: [
      "동물원에 귀여운 동물이 많아요.",
      "기린은 목이 아주 길어요.",
      "코끼리는 코로 물을 뿜어요.",
      "원숭이는 나무를 타며 놀아요."
    ],
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
      ],
      [
        { id: "7-2-0", text: "코끼리는", answer: "코끼리는", isWrong: false },
        { id: "7-2-1", text: "코로", answer: "코로", isWrong: false },
        { id: "7-2-2", text: "물을", answer: "물을", isWrong: false },
        { id: "7-2-3", text: "부머요.", answer: "뿜어요.", isWrong: true }
      ],
      [
        { id: "7-3-0", text: "원숭이는", answer: "원숭이는", isWrong: false },
        { id: "7-3-1", text: "나무를", answer: "나무를", isWrong: false },
        { id: "7-3-2", text: "타며", answer: "타며", isWrong: false },
        { id: "7-3-3", text: "노라요.", answer: "놀아요.", isWrong: true }
      ]
    ],
    keysCovered: ["쌍자음(Shift)", "백스페이스", "방향키"]
  },
  // Set 3 → 7번: 틀린 어절 5개 (한/영 전환)
  {
    id: 3,
    original: [
      "오늘은 날씨가 맑고 화창해요.",
      "바람이 살랑살랑 불어와요.",
      "구름이 두둥실 떠다녀요.",
      "햇볕이 따뜻하게 내리쬐어요."
    ],
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
      ],
      [
        { id: "3-2-0", text: "cloud", answer: "구름이", isWrong: true },
        { id: "3-2-1", text: "두둥실", answer: "두둥실", isWrong: false },
        { id: "3-2-2", text: "떠다녀요.", answer: "떠다녀요.", isWrong: false }
      ],
      [
        { id: "3-3-0", text: "햇볕이", answer: "햇볕이", isWrong: false },
        { id: "3-3-1", text: "따뜻하게", answer: "따뜻하게", isWrong: false },
        {
          id: "3-3-2",
          text: "shine해요.",
          answer: "내리쬐어요.",
          isWrong: true
        }
      ]
    ],
    keysCovered: ["한/영 전환"]
  },
  // Set 2 → 8번: 틀린 어절 5개
  {
    id: 2,
    original: [
      "강아지가 꼬리를 흔들어요.",
      "뽀송뽀송한 털이 참 예뻐요.",
      "강아지는 뼈다귀를 좋아해요.",
      "같이 씩씩하게 산책해요."
    ],
    words: [
      [
        { id: "2-0-0", text: "강아지가", answer: "강아지가", isWrong: false },
        { id: "2-0-1", text: "꼬리를", answer: "꼬리를", isWrong: false },
        { id: "2-0-2", text: "흔들어요.", answer: "흔들어요.", isWrong: false }
      ],
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
      ],
      [
        { id: "2-3-0", text: "같이", answer: "같이", isWrong: false },
        { id: "2-3-1", text: "식식하게", answer: "씩씩하게", isWrong: true },
        { id: "2-3-2", text: "산책해요.", answer: "산책해요.", isWrong: false }
      ]
    ],
    keysCovered: ["쌍자음(Shift)", "백스페이스"]
  },
  // Set 5 → 9번: 틀린 어절 5개
  {
    id: 5,
    original: [
      "냉장고에 맛있는 음식이 가득해요.",
      "엄마가 떡볶이를 만들어 줘요.",
      "달콤한 케이크를 먹고 싶어요.",
      "과일을 먹으면 건강해져요."
    ],
    words: [
      [
        { id: "5-0-0", text: "냉장고에", answer: "냉장고에", isWrong: false },
        { id: "5-0-1", text: "마싯는", answer: "맛있는", isWrong: true },
        { id: "5-0-2", text: "음식이", answer: "음식이", isWrong: false },
        { id: "5-0-3", text: "가득해요.", answer: "가득해요.", isWrong: false }
      ],
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
      ],
      [
        { id: "5-3-0", text: "과일을", answer: "과일을", isWrong: false },
        { id: "5-3-1", text: "먹으면", answer: "먹으면", isWrong: false },
        {
          id: "5-3-2",
          text: "건강해져요.",
          answer: "건강해져요.",
          isWrong: false
        }
      ]
    ],
    keysCovered: ["방향키", "백스페이스"]
  },
  // Set 1 → 10번: 틀린 어절 9개 (가장 어려움)
  {
    id: 1,
    original: [
      "풀밭의 토끼가 깡총깡총 뛰고 있어요.",
      "어디서 온 토끼일까요?",
      "토끼가 낮잠을 자고 싶어요.",
      "잠자는 토끼를 깨우지 않도록 조심해요."
    ],
    words: [
      [
        { id: "1-0-0", text: "풀밭의", answer: "풀밭의", isWrong: false },
        { id: "1-0-1", text: "토기가", answer: "토끼가", isWrong: true },
        { id: "1-0-2", text: "강총강총", answer: "깡총깡총", isWrong: true },
        { id: "1-0-3", text: "뒤고", answer: "뛰고", isWrong: true },
        { id: "1-0-4", text: "잇어요.", answer: "있어요.", isWrong: true }
      ],
      [
        { id: "1-1-0", text: "어디서", answer: "어디서", isWrong: false },
        { id: "1-1-1", text: "온", answer: "온", isWrong: false },
        {
          id: "1-1-2",
          text: "토기일까요?",
          answer: "토끼일까요?",
          isWrong: true
        }
      ],
      [
        { id: "1-2-0", text: "토끼가", answer: "토끼가", isWrong: false },
        { id: "1-2-1", text: "낫잠을", answer: "낮잠을", isWrong: true },
        { id: "1-2-2", text: "자고", answer: "자고", isWrong: false },
        { id: "1-2-3", text: "십어요.", answer: "싶어요.", isWrong: true }
      ],
      [
        { id: "1-3-0", text: "잠자는", answer: "잠자는", isWrong: false },
        { id: "1-3-1", text: "토기를", answer: "토끼를", isWrong: true },
        { id: "1-3-2", text: "개우지", answer: "깨우지", isWrong: true },
        { id: "1-3-3", text: "않도록", answer: "않도록", isWrong: false },
        { id: "1-3-4", text: "조심해요.", answer: "조심해요.", isWrong: false }
      ]
    ],
    keysCovered: ["쌍자음(Shift)", "백스페이스"]
  }
];
