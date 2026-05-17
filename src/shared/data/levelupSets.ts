import type { PracticeSet } from '../types';

export const levelupSets: PracticeSet[] = [
  {
    id: 1,
    original: [
      '봄 소풍을 가서 꽃밭을 구경했어요.',
      '나비가 꽃 위에 살포시 앉았어요.',
      '친구들과 함께 도시락을 먹었어요.',
      '즐거운 소풍이 끝나고 집에 왔어요.',
    ],
    words: [
      [
        { id: 'l1-0-0', text: '봄', answer: '봄', isWrong: false },
        { id: 'l1-0-1', text: '소풍을', answer: '소풍을', isWrong: false },
        { id: 'l1-0-2', text: '가서', answer: '가서', isWrong: false },
        { id: 'l1-0-3', text: '꽃받을', answer: '꽃밭을', isWrong: true },
        { id: 'l1-0-4', text: '구경했어요.', answer: '구경했어요.', isWrong: false },
      ],
      [
        { id: 'l1-1-0', text: '나비가', answer: '나비가', isWrong: false },
        { id: 'l1-1-1', text: '꽃', answer: '꽃', isWrong: false },
        { id: 'l1-1-2', text: '위에', answer: '위에', isWrong: false },
        { id: 'l1-1-3', text: '살포시', answer: '살포시', isWrong: false },
        { id: 'l1-1-4', text: '안잣어요.', answer: '앉았어요.', isWrong: true },
      ],
      [
        { id: 'l1-2-0', text: '친구들과', answer: '친구들과', isWrong: false },
        { id: 'l1-2-1', text: '함께', answer: '함께', isWrong: false },
        { id: 'l1-2-2', text: '도시락을', answer: '도시락을', isWrong: false },
        { id: 'l1-2-3', text: '먹었어요.', answer: '먹었어요.', isWrong: false },
      ],
      [
        { id: 'l1-3-0', text: '즐거운', answer: '즐거운', isWrong: false },
        { id: 'l1-3-1', text: '소풍이', answer: '소풍이', isWrong: false },
        { id: 'l1-3-2', text: '끝나고', answer: '끝나고', isWrong: false },
        { id: 'l1-3-3', text: '집에', answer: '집에', isWrong: false },
        { id: 'l1-3-4', text: '왓어요.', answer: '왔어요.', isWrong: true },
      ],
    ],
    keysCovered: ['쌍자음(Shift)', '백스페이스', '방향키'],
  },
  {
    id: 2,
    original: [
      '바닷가에서 모래성을 쌓았어요.',
      '파도가 쏴아 하고 밀려와요.',
      '조개껍데기를 주워서 모았어요.',
      '갈매기가 하늘 높이 날아가요.',
    ],
    words: [
      [
        { id: 'l2-0-0', text: '바닷가에서', answer: '바닷가에서', isWrong: false },
        { id: 'l2-0-1', text: '모래성을', answer: '모래성을', isWrong: false },
        { id: 'l2-0-2', text: '사아써요.', answer: '쌓았어요.', isWrong: true },
      ],
      [
        { id: 'l2-1-0', text: '파도가', answer: '파도가', isWrong: false },
        { id: 'l2-1-1', text: '솨아', answer: '쏴아', isWrong: true },
        { id: 'l2-1-2', text: '하고', answer: '하고', isWrong: false },
        { id: 'l2-1-3', text: '밀려와요.', answer: '밀려와요.', isWrong: false },
      ],
      [
        { id: 'l2-2-0', text: '조개껍데기를', answer: '조개껍데기를', isWrong: false },
        { id: 'l2-2-1', text: '주워서', answer: '주워서', isWrong: false },
        { id: 'l2-2-2', text: '모앗어요.', answer: '모았어요.', isWrong: true },
      ],
      [
        { id: 'l2-3-0', text: '갈매기가', answer: '갈매기가', isWrong: false },
        { id: 'l2-3-1', text: '하늘', answer: '하늘', isWrong: false },
        { id: 'l2-3-2', text: '높이', answer: '높이', isWrong: false },
        { id: 'l2-3-3', text: '날아가요.', answer: '날아가요.', isWrong: false },
      ],
    ],
    keysCovered: ['쌍자음(Shift)', '백스페이스'],
  },
  {
    id: 3,
    original: [
      '도서관에서 재미있는 책을 읽었어요.',
      '그림이 많아서 눈이 즐거워요.',
      '주인공이 모험을 떠나는 이야기예요.',
      '책을 다 읽고 독서 감상문을 썼어요.',
    ],
    words: [
      [
        { id: 'l3-0-0', text: '도서관에서', answer: '도서관에서', isWrong: false },
        { id: 'l3-0-1', text: '재미잇는', answer: '재미있는', isWrong: true },
        { id: 'l3-0-2', text: '책을', answer: '책을', isWrong: false },
        { id: 'l3-0-3', text: '익었어요.', answer: '읽었어요.', isWrong: true },
      ],
      [
        { id: 'l3-1-0', text: '그림이', answer: '그림이', isWrong: false },
        { id: 'l3-1-1', text: '마나서', answer: '많아서', isWrong: true },
        { id: 'l3-1-2', text: '눈이', answer: '눈이', isWrong: false },
        { id: 'l3-1-3', text: '즐거워요.', answer: '즐거워요.', isWrong: false },
      ],
      [
        { id: 'l3-2-0', text: '주인공이', answer: '주인공이', isWrong: false },
        { id: 'l3-2-1', text: '모험을', answer: '모험을', isWrong: false },
        { id: 'l3-2-2', text: '떠나는', answer: '떠나는', isWrong: false },
        { id: 'l3-2-3', text: '이야기예요.', answer: '이야기예요.', isWrong: false },
      ],
      [
        { id: 'l3-3-0', text: '책을', answer: '책을', isWrong: false },
        { id: 'l3-3-1', text: '다', answer: '다', isWrong: false },
        { id: 'l3-3-2', text: '읽고', answer: '읽고', isWrong: false },
        { id: 'l3-3-3', text: '독서', answer: '독서', isWrong: false },
        { id: 'l3-3-4', text: '감상문을', answer: '감상문을', isWrong: false },
        { id: 'l3-3-5', text: '서써요.', answer: '썼어요.', isWrong: true },
      ],
    ],
    keysCovered: ['쌍자음(Shift)', '백스페이스', '방향키'],
  },
  {
    id: 4,
    original: [
      '할머니 댁에 놀러 갔어요.',
      '맛있는 송편을 함께 빚었어요.',
      '마당에서 제기차기를 했어요.',
      '할머니가 옛날이야기를 해 주셨어요.',
    ],
    words: [
      [
        { id: 'l4-0-0', text: '할머니', answer: '할머니', isWrong: false },
        { id: 'l4-0-1', text: '댁에', answer: '댁에', isWrong: false },
        { id: 'l4-0-2', text: '노러', answer: '놀러', isWrong: true },
        { id: 'l4-0-3', text: '갓어요.', answer: '갔어요.', isWrong: true },
      ],
      [
        { id: 'l4-1-0', text: '마싯는', answer: '맛있는', isWrong: true },
        { id: 'l4-1-1', text: '송편을', answer: '송편을', isWrong: false },
        { id: 'l4-1-2', text: '함께', answer: '함께', isWrong: false },
        { id: 'l4-1-3', text: '비젓어요.', answer: '빚었어요.', isWrong: true },
      ],
      [
        { id: 'l4-2-0', text: '마당에서', answer: '마당에서', isWrong: false },
        { id: 'l4-2-1', text: '제기차기를', answer: '제기차기를', isWrong: false },
        { id: 'l4-2-2', text: '했어요.', answer: '했어요.', isWrong: false },
      ],
      [
        { id: 'l4-3-0', text: '할머니가', answer: '할머니가', isWrong: false },
        { id: 'l4-3-1', text: '옛날이야기를', answer: '옛날이야기를', isWrong: false },
        { id: 'l4-3-2', text: '해', answer: '해', isWrong: false },
        { id: 'l4-3-3', text: '주셧어요.', answer: '주셨어요.', isWrong: true },
      ],
    ],
    keysCovered: ['쌍자음(Shift)', '백스페이스', '방향키', '한/영 전환'],
  },
  {
    id: 5,
    original: [
      '우주에는 별이 정말 많아요.',
      '로켓을 타고 달나라에 가고 싶어요.',
      '우주인은 우주복을 입어요.',
      '언젠가 우주여행을 할 수 있을 거예요.',
    ],
    words: [
      [
        { id: 'l5-0-0', text: '우주에는', answer: '우주에는', isWrong: false },
        { id: 'l5-0-1', text: '별이', answer: '별이', isWrong: false },
        { id: 'l5-0-2', text: '정말', answer: '정말', isWrong: false },
        { id: 'l5-0-3', text: '마나요.', answer: '많아요.', isWrong: true },
      ],
      [
        { id: 'l5-1-0', text: 'rocket을', answer: '로켓을', isWrong: true },
        { id: 'l5-1-1', text: '타고', answer: '타고', isWrong: false },
        { id: 'l5-1-2', text: '달나라에', answer: '달나라에', isWrong: false },
        { id: 'l5-1-3', text: '가고', answer: '가고', isWrong: false },
        { id: 'l5-1-4', text: '십어요.', answer: '싶어요.', isWrong: true },
      ],
      [
        { id: 'l5-2-0', text: '우주인은', answer: '우주인은', isWrong: false },
        { id: 'l5-2-1', text: 'space복을', answer: '우주복을', isWrong: true },
        { id: 'l5-2-2', text: '입어요.', answer: '입어요.', isWrong: false },
      ],
      [
        { id: 'l5-3-0', text: '언젠가', answer: '언젠가', isWrong: false },
        { id: 'l5-3-1', text: '우주여행을', answer: '우주여행을', isWrong: false },
        { id: 'l5-3-2', text: '할', answer: '할', isWrong: false },
        { id: 'l5-3-3', text: '수', answer: '수', isWrong: false },
        { id: 'l5-3-4', text: '잇을', answer: '있을', isWrong: true },
        { id: 'l5-3-5', text: '거예요.', answer: '거예요.', isWrong: false },
      ],
    ],
    keysCovered: ['한/영 전환', '쌍자음(Shift)', '백스페이스'],
  },
  {
    id: 6,
    original: [
      '음악 시간에 리코더를 배웠어요.',
      '처음에는 소리가 잘 안 났어요.',
      '열심히 연습하니 예쁜 소리가 났어요.',
      '선생님께 칭찬을 받았어요.',
    ],
    words: [
      [
        { id: 'l6-0-0', text: '음악', answer: '음악', isWrong: false },
        { id: 'l6-0-1', text: '시간에', answer: '시간에', isWrong: false },
        { id: 'l6-0-2', text: 'recorder를', answer: '리코더를', isWrong: true },
        { id: 'l6-0-3', text: '배웟어요.', answer: '배웠어요.', isWrong: true },
      ],
      [
        { id: 'l6-1-0', text: '처음에는', answer: '처음에는', isWrong: false },
        { id: 'l6-1-1', text: '소리가', answer: '소리가', isWrong: false },
        { id: 'l6-1-2', text: '잘', answer: '잘', isWrong: false },
        { id: 'l6-1-3', text: '안', answer: '안', isWrong: false },
        { id: 'l6-1-4', text: '낫어요.', answer: '났어요.', isWrong: true },
      ],
      [
        { id: 'l6-2-0', text: '열심히', answer: '열심히', isWrong: false },
        { id: 'l6-2-1', text: '연습하니', answer: '연습하니', isWrong: false },
        { id: 'l6-2-2', text: '이쁜', answer: '예쁜', isWrong: true },
        { id: 'l6-2-3', text: '소리가', answer: '소리가', isWrong: false },
        { id: 'l6-2-4', text: '낫어요.', answer: '났어요.', isWrong: true },
      ],
      [
        { id: 'l6-3-0', text: '선생님께', answer: '선생님께', isWrong: false },
        { id: 'l6-3-1', text: '칭찬을', answer: '칭찬을', isWrong: false },
        { id: 'l6-3-2', text: '바닷어요.', answer: '받았어요.', isWrong: true },
      ],
    ],
    keysCovered: ['한/영 전환', '쌍자음(Shift)', '백스페이스', '방향키'],
  },
  {
    id: 7,
    original: [
      '미술 시간에 그림을 그렸어요.',
      '빨강, 파랑, 노랑을 섞었어요.',
      '붓으로 하늘을 파랗게 칠했어요.',
      '완성된 그림을 교실에 붙였어요.',
    ],
    words: [
      [
        { id: 'l7-0-0', text: '미술', answer: '미술', isWrong: false },
        { id: 'l7-0-1', text: '시간에', answer: '시간에', isWrong: false },
        { id: 'l7-0-2', text: '그림을', answer: '그림을', isWrong: false },
        { id: 'l7-0-3', text: '그렷어요.', answer: '그렸어요.', isWrong: true },
      ],
      [
        { id: 'l7-1-0', text: '빨강,', answer: '빨강,', isWrong: false },
        { id: 'l7-1-1', text: '파랑,', answer: '파랑,', isWrong: false },
        { id: 'l7-1-2', text: '노랑을', answer: '노랑을', isWrong: false },
        { id: 'l7-1-3', text: '서겄어요.', answer: '섞었어요.', isWrong: true },
      ],
      [
        { id: 'l7-2-0', text: '붓으로', answer: '붓으로', isWrong: false },
        { id: 'l7-2-1', text: '하늘을', answer: '하늘을', isWrong: false },
        { id: 'l7-2-2', text: '파랗게', answer: '파랗게', isWrong: false },
        { id: 'l7-2-3', text: '칠했어요.', answer: '칠했어요.', isWrong: false },
      ],
      [
        { id: 'l7-3-0', text: '완성된', answer: '완성된', isWrong: false },
        { id: 'l7-3-1', text: '그림을', answer: '그림을', isWrong: false },
        { id: 'l7-3-2', text: '교실에', answer: '교실에', isWrong: false },
        { id: 'l7-3-3', text: '부텃어요.', answer: '붙였어요.', isWrong: true },
      ],
    ],
    keysCovered: ['쌍자음(Shift)', '백스페이스', '방향키'],
  },
  {
    id: 8,
    original: [
      '비가 내리는 날 우산을 썼어요.',
      '빗물이 웅덩이에 고였어요.',
      '장화를 신고 웅덩이를 첨벙첨벙 밟았어요.',
      '집에 오니 옷이 다 젖었어요.',
    ],
    words: [
      [
        { id: 'l8-0-0', text: '비가', answer: '비가', isWrong: false },
        { id: 'l8-0-1', text: '내리는', answer: '내리는', isWrong: false },
        { id: 'l8-0-2', text: '날', answer: '날', isWrong: false },
        { id: 'l8-0-3', text: '우산을', answer: '우산을', isWrong: false },
        { id: 'l8-0-4', text: '써써요.', answer: '썼어요.', isWrong: true },
      ],
      [
        { id: 'l8-1-0', text: '빗물이', answer: '빗물이', isWrong: false },
        { id: 'l8-1-1', text: '웅덩이에', answer: '웅덩이에', isWrong: false },
        { id: 'l8-1-2', text: '고엿어요.', answer: '고였어요.', isWrong: true },
      ],
      [
        { id: 'l8-2-0', text: '장화를', answer: '장화를', isWrong: false },
        { id: 'l8-2-1', text: '신고', answer: '신고', isWrong: false },
        { id: 'l8-2-2', text: '웅덩이를', answer: '웅덩이를', isWrong: false },
        { id: 'l8-2-3', text: '첨벙첨벙', answer: '첨벙첨벙', isWrong: false },
        { id: 'l8-2-4', text: '발앗어요.', answer: '밟았어요.', isWrong: true },
      ],
      [
        { id: 'l8-3-0', text: '집에', answer: '집에', isWrong: false },
        { id: 'l8-3-1', text: '오니', answer: '오니', isWrong: false },
        { id: 'l8-3-2', text: '옷이', answer: '옷이', isWrong: false },
        { id: 'l8-3-3', text: '다', answer: '다', isWrong: false },
        { id: 'l8-3-4', text: '저젓어요.', answer: '젖었어요.', isWrong: true },
      ],
    ],
    keysCovered: ['쌍자음(Shift)', '백스페이스', '방향키'],
  },
  {
    id: 9,
    original: [
      '놀이공원에 가서 롤러코스터를 탔어요.',
      '너무 무서워서 눈을 꼭 감았어요.',
      '솜사탕이 달콤하고 맛있었어요.',
      '오늘은 정말 신나는 하루였어요.',
    ],
    words: [
      [
        { id: 'l9-0-0', text: '놀이공원에', answer: '놀이공원에', isWrong: false },
        { id: 'l9-0-1', text: '가서', answer: '가서', isWrong: false },
        { id: 'l9-0-2', text: 'roller코스터를', answer: '롤러코스터를', isWrong: true },
        { id: 'l9-0-3', text: '탓어요.', answer: '탔어요.', isWrong: true },
      ],
      [
        { id: 'l9-1-0', text: '너무', answer: '너무', isWrong: false },
        { id: 'l9-1-1', text: '무서워서', answer: '무서워서', isWrong: false },
        { id: 'l9-1-2', text: '눈을', answer: '눈을', isWrong: false },
        { id: 'l9-1-3', text: '꼭', answer: '꼭', isWrong: false },
        { id: 'l9-1-4', text: '감앗어요.', answer: '감았어요.', isWrong: true },
      ],
      [
        { id: 'l9-2-0', text: '솜사탕이', answer: '솜사탕이', isWrong: false },
        { id: 'l9-2-1', text: '달꼼하고', answer: '달콤하고', isWrong: true },
        { id: 'l9-2-2', text: '마싯었어요.', answer: '맛있었어요.', isWrong: true },
      ],
      [
        { id: 'l9-3-0', text: '오늘은', answer: '오늘은', isWrong: false },
        { id: 'l9-3-1', text: '정말', answer: '정말', isWrong: false },
        { id: 'l9-3-2', text: '신나는', answer: '신나는', isWrong: false },
        { id: 'l9-3-3', text: '하루엿어요.', answer: '하루였어요.', isWrong: true },
      ],
    ],
    keysCovered: ['한/영 전환', '쌍자음(Shift)', '백스페이스', '방향키'],
  },
  {
    id: 10,
    original: [
      '겨울 방학에 스키장에 갔어요.',
      '하얀 눈 위를 씽씽 달렸어요.',
      '눈 위에서 넘어져서 엉덩이가 아팠어요.',
      '뜨거운 코코아를 마시며 몸을 녹였어요.',
    ],
    words: [
      [
        { id: 'l10-0-0', text: '겨울', answer: '겨울', isWrong: false },
        { id: 'l10-0-1', text: '방학에', answer: '방학에', isWrong: false },
        { id: 'l10-0-2', text: 'ski장에', answer: '스키장에', isWrong: true },
        { id: 'l10-0-3', text: '갓어요.', answer: '갔어요.', isWrong: true },
      ],
      [
        { id: 'l10-1-0', text: '하얀', answer: '하얀', isWrong: false },
        { id: 'l10-1-1', text: '눈', answer: '눈', isWrong: false },
        { id: 'l10-1-2', text: '위를', answer: '위를', isWrong: false },
        { id: 'l10-1-3', text: '싱싱', answer: '씽씽', isWrong: true },
        { id: 'l10-1-4', text: '달렷어요.', answer: '달렸어요.', isWrong: true },
      ],
      [
        { id: 'l10-2-0', text: '눈', answer: '눈', isWrong: false },
        { id: 'l10-2-1', text: '위에서', answer: '위에서', isWrong: false },
        { id: 'l10-2-2', text: '너머져서', answer: '넘어져서', isWrong: true },
        { id: 'l10-2-3', text: '엉덩이가', answer: '엉덩이가', isWrong: false },
        { id: 'l10-2-4', text: '아팟어요.', answer: '아팠어요.', isWrong: true },
      ],
      [
        { id: 'l10-3-0', text: '뜨거운', answer: '뜨거운', isWrong: false },
        { id: 'l10-3-1', text: 'cocoa를', answer: '코코아를', isWrong: true },
        { id: 'l10-3-2', text: '마시며', answer: '마시며', isWrong: false },
        { id: 'l10-3-3', text: '몸을', answer: '몸을', isWrong: false },
        { id: 'l10-3-4', text: '녹엿어요.', answer: '녹였어요.', isWrong: true },
      ],
    ],
    keysCovered: ['한/영 전환', '쌍자음(Shift)', '백스페이스', '방향키'],
  },
];
