import { groupBy } from 'lodash'

let arr = [
  {
    kanjiName: '刀',
    strokes: 2,
    grade: 2,
    freq: 1794,
    meanings: ['Sword', 'Saber', 'Knife'],
    on: ['とう'],
    kun: ['かたな', 'そり'],
    jlpt: 1,
    quizAnswers: ['Import', 'Vietnam', 'Sword', 'Sunshine'],
    similars: [
      {
        kanji: '力',
        meaning: 'power'
      },
      {
        kanji: '万',
        meaning: 'ten thousand'
      },
      {
        kanji: '刃',
        meaning: 'blade'
      },
      {
        kanji: '分',
        meaning: 'part'
      },
      {
        kanji: '匁',
        meaning: 'monme'
      },
      {
        kanji: '切',
        meaning: 'cut'
      },
      {
        kanji: '幼',
        meaning: 'infancy'
      },
      {
        kanji: '辺',
        meaning: 'environs'
      },
      {
        kanji: '加',
        meaning: 'add'
      },
      {
        kanji: '功',
        meaning: 'achievement'
      }
    ]
  },
  {
    kanjiName: '丁',
    strokes: 2,
    grade: 3,
    freq: 1312,
    meanings: [
      'Street',
      'Ward',
      'Town',
      'Counter For Guns, Tools, Leaves Or Cakes Of Something',
      'Even Number',
      '4th Calendar Sign'
    ],
    on: ['ちょう', 'てい', 'ちん', 'とう', 'ち'],
    kun: ['ひのと'],
    jlpt: 1,
    quizAnswers: ['Tatami', 'Street', 'Duty', 'Cylinder'],
    similars: [
      {
        kanji: '才',
        meaning: 'genius'
      },
      {
        kanji: '寸',
        meaning: 'measurement'
      },
      {
        kanji: '二',
        meaning: 'two'
      },
      {
        kanji: '十',
        meaning: 'ten'
      },
      {
        kanji: '七',
        meaning: 'seven'
      },
      {
        kanji: '一',
        meaning: 'one'
      },
      {
        kanji: '刊',
        meaning: 'publish'
      },
      {
        kanji: '庁',
        meaning: 'government office'
      },
      {
        kanji: '付',
        meaning: 'adhere'
      },
      {
        kanji: '払',
        meaning: 'pay'
      }
    ]
  },
  {
    kanjiName: '又',
    strokes: 2,
    grade: 8,
    freq: 1874,
    meanings: ['Or Again', 'Furthermore', 'On The Other Hand'],
    on: ['ゆう'],
    kun: ['また', 'また-', 'また.の-'],
    jlpt: 1,
    quizAnswers: ['Or Again', 'Rule', 'Department', 'Rule'],
    similars: [
      {
        kanji: '久',
        meaning: 'long time'
      },
      {
        kanji: '双',
        meaning: 'pair'
      },
      {
        kanji: '水',
        meaning: 'water'
      },
      {
        kanji: '人',
        meaning: 'person'
      },
      {
        kanji: '友',
        meaning: 'friend'
      },
      {
        kanji: '八',
        meaning: 'eight'
      },
      {
        kanji: '反',
        meaning: 'anti-'
      },
      {
        kanji: '支',
        meaning: 'branch'
      },
      {
        kanji: '了',
        meaning: 'complete'
      },
      {
        kanji: '入',
        meaning: 'enter'
      }
    ]
  },
  {
    kanjiName: '矢',
    strokes: 5,
    grade: 2,
    freq: 1294,
    meanings: ['Dart', 'Arrow'],
    on: ['し'],
    kun: ['や'],
    jlpt: 1,
    quizAnswers: ['Ordeal', 'Happen', 'Office', 'Dart'],
    similars: [
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '夫',
        meaning: 'husband'
      },
      {
        kanji: '天',
        meaning: 'heavens'
      },
      {
        kanji: '伏',
        meaning: 'prostrated'
      },
      {
        kanji: '仮',
        meaning: 'sham'
      },
      {
        kanji: '先',
        meaning: 'before'
      },
      {
        kanji: '休',
        meaning: 'rest'
      },
      {
        kanji: '気',
        meaning: 'spirit'
      },
      {
        kanji: '米',
        meaning: 'rice'
      }
    ]
  },
  {
    kanjiName: '羊',
    strokes: 6,
    grade: 3,
    freq: 1852,
    meanings: ['Sheep'],
    on: ['よう'],
    kun: ['ひつじ'],
    jlpt: 1,
    quizAnswers: ['Unseal', 'Sheep', 'Reign', 'Join'],
    similars: [
      {
        kanji: '半',
        meaning: 'half'
      },
      {
        kanji: '判',
        meaning: 'judgement'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '年',
        meaning: 'year'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '午',
        meaning: 'noon'
      },
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '祥',
        meaning: 'auspicious'
      },
      {
        kanji: '兼',
        meaning: 'concurrently'
      }
    ]
  },
  {
    kanjiName: '氏',
    strokes: 4,
    grade: 4,
    freq: 84,
    meanings: ['Family Name', 'Surname', 'Clan'],
    on: ['し'],
    kun: ['うじ', '-うじ'],
    jlpt: 1,
    quizAnswers: ['Park', 'Frustrate', 'Family Name', 'Law'],
    similars: [
      {
        kanji: '民',
        meaning: 'people'
      },
      {
        kanji: '代',
        meaning: 'substitute'
      },
      {
        kanji: '低',
        meaning: 'lower'
      },
      {
        kanji: '邸',
        meaning: 'residence'
      },
      {
        kanji: '手',
        meaning: 'hand'
      },
      {
        kanji: '千',
        meaning: 'thousand'
      },
      {
        kanji: '升',
        meaning: 'measuring box'
      },
      {
        kanji: '底',
        meaning: 'bottom'
      },
      {
        kanji: '仁',
        meaning: 'humanity'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      }
    ]
  },
  {
    kanjiName: '仮',
    strokes: 6,
    grade: 5,
    freq: 1039,
    meanings: ['Sham', 'Temporary', 'Interim', 'Assumed (name)', 'Informal'],
    on: ['か', 'け'],
    kun: ['かり', 'かり-'],
    jlpt: 1,
    quizAnswers: ['Pass Into', 'Extent', 'Sham', 'Spacious'],
    similars: [
      {
        kanji: '反',
        meaning: 'anti-'
      },
      {
        kanji: '休',
        meaning: 'rest'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '友',
        meaning: 'friend'
      },
      {
        kanji: '伏',
        meaning: 'prostrated'
      },
      {
        kanji: '版',
        meaning: 'printing block'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '板',
        meaning: 'plank'
      },
      {
        kanji: '例',
        meaning: 'example'
      }
    ]
  },
  {
    kanjiName: '級',
    strokes: 9,
    grade: 3,
    freq: 785,
    meanings: ['Class', 'Rank', 'Grade'],
    on: ['きゅう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Think Over', 'Dig', 'Class', 'Sever'],
    similars: [
      {
        kanji: '約',
        meaning: 'promise'
      },
      {
        kanji: '終',
        meaning: 'end'
      },
      {
        kanji: '紛',
        meaning: 'distract'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '純',
        meaning: 'genuine'
      },
      {
        kanji: '紙',
        meaning: 'paper'
      },
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '紀',
        meaning: 'chronicle'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      }
    ]
  },
  {
    kanjiName: '功',
    strokes: 5,
    grade: 4,
    freq: 857,
    meanings: ['Achievement', 'Merits', 'Success', 'Honor', 'Credit'],
    on: ['こう', 'く'],
    kun: ['いさお'],
    jlpt: 1,
    quizAnswers: ['Get Hungry', 'Chase', 'Ward', 'Achievement'],
    similars: [
      {
        kanji: '巧',
        meaning: 'adroit'
      },
      {
        kanji: '万',
        meaning: 'ten thousand'
      },
      {
        kanji: '切',
        meaning: 'cut'
      },
      {
        kanji: '坊',
        meaning: 'boy'
      },
      {
        kanji: '均',
        meaning: 'level'
      },
      {
        kanji: '坑',
        meaning: 'pit'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '坂',
        meaning: 'slope'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '式',
        meaning: 'style'
      }
    ]
  },
  {
    kanjiName: '第',
    strokes: 11,
    grade: 3,
    freq: 160,
    meanings: ['No.', 'Residence'],
    on: ['だい', 'てい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['No.', 'Sky', 'Curdle', 'Plate'],
    similars: [
      {
        kanji: '策',
        meaning: 'scheme'
      },
      {
        kanji: '筆',
        meaning: 'writing brush'
      },
      {
        kanji: '笑',
        meaning: 'laugh'
      },
      {
        kanji: '筋',
        meaning: 'muscle'
      },
      {
        kanji: '答',
        meaning: 'solution'
      },
      {
        kanji: '筒',
        meaning: 'cylinder'
      },
      {
        kanji: '等',
        meaning: 'etc.'
      },
      {
        kanji: '箇',
        meaning: 'counter for articles'
      },
      {
        kanji: '弟',
        meaning: 'younger brother'
      },
      {
        kanji: '笛',
        meaning: 'flute'
      }
    ]
  },
  {
    kanjiName: '暑',
    strokes: 12,
    grade: 3,
    freq: 1442,
    meanings: ['Sultry', 'Hot', 'Summer Heat'],
    on: ['しょ'],
    kun: ['あつ.い'],
    jlpt: 1,
    quizAnswers: ['Live With', 'Turkey', 'Sultry', 'Phenomenal'],
    similars: [
      {
        kanji: '署',
        meaning: 'signature'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      },
      {
        kanji: '晴',
        meaning: 'clear up'
      },
      {
        kanji: '晶',
        meaning: 'sparkle'
      },
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '題',
        meaning: 'topic'
      },
      {
        kanji: '者',
        meaning: 'someone'
      },
      {
        kanji: '著',
        meaning: 'renowned'
      },
      {
        kanji: '暫',
        meaning: 'temporarily'
      },
      {
        kanji: '顕',
        meaning: 'appear'
      }
    ]
  },
  {
    kanjiName: '整',
    strokes: 16,
    grade: 3,
    freq: 478,
    meanings: ['Organize', 'Arranging', 'Tune', 'Tone', 'Meter', 'Key (music)'],
    on: ['せい'],
    kun: ['ととの.える', 'ととの.う'],
    jlpt: 1,
    quizAnswers: ['Unimportant', 'Organize', 'Counter For Meal Courses', 'Sign (of The Times)'],
    similars: [
      {
        kanji: '歴',
        meaning: 'curriculum'
      },
      {
        kanji: '礎',
        meaning: 'cornerstone'
      },
      {
        kanji: '栓',
        meaning: 'plug'
      },
      {
        kanji: '難',
        meaning: 'difficult'
      },
      {
        kanji: '勅',
        meaning: 'imperial order'
      },
      {
        kanji: '啓',
        meaning: 'disclose'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '梅',
        meaning: 'plum'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      }
    ]
  },
  {
    kanjiName: '詩',
    strokes: 13,
    grade: 3,
    freq: 1196,
    meanings: ['Poem', 'Poetry'],
    on: ['し'],
    kun: ['うた'],
    jlpt: 1,
    quizAnswers: ['Wide(ly)', 'Yonder', 'Reservoir', 'Poem'],
    similars: [
      {
        kanji: '誌',
        meaning: 'document'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '請',
        meaning: 'solicit'
      },
      {
        kanji: '語',
        meaning: 'word'
      },
      {
        kanji: '読',
        meaning: 'read'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      },
      {
        kanji: '試',
        meaning: 'test'
      },
      {
        kanji: '訂',
        meaning: 'revise'
      },
      {
        kanji: '証',
        meaning: 'evidence'
      }
    ]
  },
  {
    kanjiName: '器',
    strokes: 15,
    grade: 4,
    freq: 525,
    meanings: [
      'Utensil',
      'Vessel',
      'Receptacle',
      'Implement',
      'Instrument',
      'Ability',
      'Container',
      'Tool',
      'Set'
    ],
    on: ['き'],
    kun: ['うつわ'],
    jlpt: 1,
    quizAnswers: ['Substance', 'Utensil', 'Err', 'Call'],
    similars: [
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '臨',
        meaning: 'look to'
      },
      {
        kanji: '距',
        meaning: 'long-distance'
      },
      {
        kanji: '嗣',
        meaning: 'heir'
      },
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '矯',
        meaning: 'rectify'
      },
      {
        kanji: '橋',
        meaning: 'bridge'
      },
      {
        kanji: '警',
        meaning: 'admonish'
      },
      {
        kanji: '啓',
        meaning: 'disclose'
      },
      {
        kanji: '患',
        meaning: 'afflicted'
      }
    ]
  },
  {
    kanjiName: '士',
    strokes: 3,
    grade: 4,
    freq: 526,
    meanings: ['Gentleman', 'Scholar', 'Samurai', 'Samurai Radical (no. 33)'],
    on: ['し'],
    kun: ['さむらい'],
    jlpt: 1,
    quizAnswers: ['Spot', 'Brush-stroke', 'Gentleman', 'Overdo'],
    similars: [
      {
        kanji: '土',
        meaning: 'soil'
      },
      {
        kanji: '工',
        meaning: 'craft'
      },
      {
        kanji: '王',
        meaning: 'king'
      },
      {
        kanji: '五',
        meaning: 'five'
      },
      {
        kanji: '二',
        meaning: 'two'
      },
      {
        kanji: '与',
        meaning: 'bestow'
      },
      {
        kanji: '三',
        meaning: 'three'
      },
      {
        kanji: '主',
        meaning: 'lord'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '巧',
        meaning: 'adroit'
      }
    ]
  },
  {
    kanjiName: '標',
    strokes: 15,
    grade: 4,
    freq: 686,
    meanings: [
      'Signpost',
      'Seal',
      'Mark',
      'Stamp',
      'Imprint',
      'Symbol',
      'Emblem',
      'Trademark',
      'Evidence',
      'Souvenir',
      'Target'
    ],
    on: ['ひょう'],
    kun: ['しるべ', 'しるし'],
    jlpt: 1,
    quizAnswers: ['Give To', 'Signpost', 'Division', 'Frivolous'],
    similars: [
      {
        kanji: '禁',
        meaning: 'prohibition'
      },
      {
        kanji: '漂',
        meaning: 'drift'
      },
      {
        kanji: '票',
        meaning: 'ballot'
      },
      {
        kanji: '棋',
        meaning: 'chess piece'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '桟',
        meaning: 'scaffold'
      },
      {
        kanji: '械',
        meaning: 'contraption'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '森',
        meaning: 'forest'
      }
    ]
  },
  {
    kanjiName: '鏡',
    strokes: 19,
    grade: 4,
    freq: 1506,
    meanings: ['Mirror', 'Speculum', 'Barrel-head', 'Round Rice-cake Offering'],
    on: ['きょう', 'けい'],
    kun: ['かがみ'],
    jlpt: 1,
    quizAnswers: ['Love', 'Mirror', 'Memory', 'Earth'],
    similars: [
      {
        kanji: '鐘',
        meaning: 'bell'
      },
      {
        kanji: '鎖',
        meaning: 'chain'
      },
      {
        kanji: '錯',
        meaning: 'confused'
      },
      {
        kanji: '境',
        meaning: 'boundary'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '錬',
        meaning: 'tempering'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      },
      {
        kanji: '錠',
        meaning: 'lock'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '鎮',
        meaning: 'tranquilize'
      }
    ]
  },
  {
    kanjiName: '養',
    strokes: 15,
    grade: 4,
    freq: 888,
    meanings: ['Foster', 'Bring Up', 'Rear', 'Develop', 'Nurture'],
    on: ['よう', 'りょう'],
    kun: ['やしな.う'],
    jlpt: 1,
    quizAnswers: ['Mark', 'Foster', 'Surmise', 'Example'],
    similars: [
      {
        kanji: '食',
        meaning: 'eat'
      },
      {
        kanji: '着',
        meaning: 'don'
      },
      {
        kanji: '義',
        meaning: 'righteousness'
      },
      {
        kanji: '差',
        meaning: 'distinction'
      },
      {
        kanji: '浪',
        meaning: 'wandering'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      }
    ]
  },
  {
    kanjiName: '謝',
    strokes: 17,
    grade: 5,
    freq: 1028,
    meanings: ['Apologize', 'Thank', 'Refuse'],
    on: ['しゃ'],
    kun: ['あやま.る'],
    jlpt: 1,
    quizAnswers: ['Many', 'Bid', 'Apologize', 'Hold In Arms'],
    similars: [
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '射',
        meaning: 'shoot'
      },
      {
        kanji: '謁',
        meaning: 'audience'
      },
      {
        kanji: '誠',
        meaning: 'sincerity'
      },
      {
        kanji: '諭',
        meaning: 'rebuke'
      },
      {
        kanji: '議',
        meaning: 'deliberation'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '課',
        meaning: 'chapter'
      }
    ]
  },
  {
    kanjiName: '松',
    strokes: 8,
    grade: 4,
    freq: 471,
    meanings: ['Pine Tree'],
    on: ['しょう'],
    kun: ['まつ'],
    jlpt: 1,
    quizAnswers: ['Fate', 'Un-', 'Exertion', 'Pine Tree'],
    similars: [
      {
        kanji: '机',
        meaning: 'desk'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '朴',
        meaning: 'crude'
      },
      {
        kanji: '私',
        meaning: 'private'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      }
    ]
  },
  {
    kanjiName: '基',
    strokes: 11,
    grade: 5,
    freq: 241,
    meanings: ['Fundamentals', 'Radical (chem)', 'Counter For Machines', 'Foundation'],
    on: ['き'],
    kun: ['もと', 'もとい'],
    jlpt: 1,
    quizAnswers: ['Extend', 'Fundamentals', 'Location', 'Pretend'],
    similars: [
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '碁',
        meaning: 'Go'
      },
      {
        kanji: '軽',
        meaning: 'lightly'
      },
      {
        kanji: '甚',
        meaning: 'tremendously'
      },
      {
        kanji: '茎',
        meaning: 'stalk'
      },
      {
        kanji: '勘',
        meaning: 'intuition'
      },
      {
        kanji: '幹',
        meaning: 'tree trunk'
      },
      {
        kanji: '幕',
        meaning: 'curtain'
      },
      {
        kanji: '塁',
        meaning: 'bases'
      },
      {
        kanji: '募',
        meaning: 'recruit'
      }
    ]
  },
  {
    kanjiName: '妥',
    strokes: 7,
    grade: 8,
    freq: 1102,
    meanings: ['Gentle', 'Peace', 'Depravity'],
    on: ['だ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Gentle', 'Impression', 'Obtain', 'Icicle'],
    similars: [
      {
        kanji: '桜',
        meaning: 'cherry'
      },
      {
        kanji: '委',
        meaning: 'committee'
      },
      {
        kanji: '安',
        meaning: 'relax'
      },
      {
        kanji: '浮',
        meaning: 'floating'
      },
      {
        kanji: '受',
        meaning: 'accept'
      },
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '乳',
        meaning: 'milk'
      },
      {
        kanji: '楼',
        meaning: 'watchtower'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      }
    ]
  },
  {
    kanjiName: '雰',
    strokes: 12,
    grade: 8,
    freq: 1341,
    meanings: ['Atmosphere', 'Fog'],
    on: ['ふん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Take', 'Seethe', 'Become Distressed', 'Atmosphere'],
    similars: [
      {
        kanji: '零',
        meaning: 'zero'
      },
      {
        kanji: '雲',
        meaning: 'cloud'
      },
      {
        kanji: '雪',
        meaning: 'snow'
      },
      {
        kanji: '震',
        meaning: 'quake'
      },
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '霧',
        meaning: 'fog'
      },
      {
        kanji: '電',
        meaning: 'electricity'
      },
      {
        kanji: '雷',
        meaning: 'thunder'
      },
      {
        kanji: '霊',
        meaning: 'spirits'
      },
      {
        kanji: '儒',
        meaning: 'Confucian'
      }
    ]
  },
  {
    kanjiName: '頑',
    strokes: 13,
    grade: 8,
    freq: 1247,
    meanings: ['Stubborn', 'Foolish', 'Firmly'],
    on: ['がん'],
    kun: ['かたく'],
    jlpt: 1,
    quizAnswers: ['Cipher', 'Music', 'Sort', 'Stubborn'],
    similars: [
      {
        kanji: '賛',
        meaning: 'approve'
      },
      {
        kanji: '煩',
        meaning: 'anxiety'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '頒',
        meaning: 'distribute'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '貧',
        meaning: 'poverty'
      },
      {
        kanji: '預',
        meaning: 'deposit'
      }
    ]
  },
  {
    kanjiName: '司',
    strokes: 5,
    grade: 4,
    freq: 759,
    meanings: ['Director', 'Official', 'Govt Office', 'Rule', 'Administer'],
    on: ['し'],
    kun: ['つかさど.る'],
    jlpt: 1,
    quizAnswers: ['Director', 'Suit', 'Features', 'Deliver'],
    similars: [
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '召',
        meaning: 'seduce'
      },
      {
        kanji: '加',
        meaning: 'add'
      },
      {
        kanji: '伺',
        meaning: 'pay respects'
      },
      {
        kanji: '吉',
        meaning: 'good luck'
      },
      {
        kanji: '合',
        meaning: 'fit'
      },
      {
        kanji: '同',
        meaning: 'same'
      },
      {
        kanji: '舌',
        meaning: 'tongue'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '台',
        meaning: 'pedestal'
      }
    ]
  },
  {
    kanjiName: '泣',
    strokes: 8,
    grade: 4,
    freq: 1380,
    meanings: ['Cry', 'Weep', 'Moan'],
    on: ['きゅう'],
    kun: ['な.く'],
    jlpt: 1,
    quizAnswers: ['Lie Down', 'Cry', 'Mouth', 'Wilderness'],
    similars: [
      {
        kanji: '翌',
        meaning: 'the following'
      },
      {
        kanji: '流',
        meaning: 'current'
      },
      {
        kanji: '渋',
        meaning: 'astringent'
      },
      {
        kanji: '決',
        meaning: 'decide'
      },
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '並',
        meaning: 'row'
      },
      {
        kanji: '位',
        meaning: 'rank'
      },
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '立',
        meaning: 'stand up'
      },
      {
        kanji: '注',
        meaning: 'pour'
      }
    ]
  },
  {
    kanjiName: '紀',
    strokes: 9,
    grade: 4,
    freq: 780,
    meanings: ['Chronicle', 'Account', 'Narrative', 'History', 'Annals', 'Geologic Period'],
    on: ['き'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Three (in Documents)', 'Chronicle', 'Just About', 'Intimacy'],
    similars: [
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '純',
        meaning: 'genuine'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '紙',
        meaning: 'paper'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '統',
        meaning: 'overall'
      },
      {
        kanji: '約',
        meaning: 'promise'
      },
      {
        kanji: '級',
        meaning: 'class'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '糸',
        meaning: 'thread'
      }
    ]
  },
  {
    kanjiName: '典',
    strokes: 8,
    grade: 4,
    freq: 1055,
    meanings: ['Code', 'Ceremony', 'Law', 'Rule'],
    on: ['てん', 'でん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Bough', 'Code', 'Rebel', '1-3pm'],
    similars: [
      {
        kanji: '皿',
        meaning: 'dish'
      },
      {
        kanji: '英',
        meaning: 'England'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '六',
        meaning: 'six'
      },
      {
        kanji: '旗',
        meaning: 'national flag'
      },
      {
        kanji: '真',
        meaning: 'true'
      },
      {
        kanji: '堪',
        meaning: 'withstand'
      },
      {
        kanji: '央',
        meaning: 'center'
      },
      {
        kanji: '具',
        meaning: 'tool'
      },
      {
        kanji: '血',
        meaning: 'blood'
      }
    ]
  },
  {
    kanjiName: '保',
    strokes: 9,
    grade: 5,
    freq: 146,
    meanings: ['Protect', 'Guarantee', 'Keep', 'Preserve', 'Sustain', 'Support'],
    on: ['ほ', 'ほう'],
    kun: ['たも.つ'],
    jlpt: 1,
    quizAnswers: ['Protect', 'Pilfer', 'Former Time', 'Pipe'],
    similars: [
      {
        kanji: '促',
        meaning: 'stimulate'
      },
      {
        kanji: '架',
        meaning: 'erect'
      },
      {
        kanji: '味',
        meaning: 'flavor'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '使',
        meaning: 'use'
      },
      {
        kanji: '仲',
        meaning: 'go-between'
      },
      {
        kanji: '某',
        meaning: 'so-and-so'
      },
      {
        kanji: '休',
        meaning: 'rest'
      },
      {
        kanji: '褒',
        meaning: 'praise'
      },
      {
        kanji: '師',
        meaning: 'expert'
      }
    ]
  },
  {
    kanjiName: '弁',
    strokes: 5,
    grade: 5,
    freq: 619,
    meanings: [
      'Valve',
      'Petal',
      'Braid',
      'Speech',
      'Dialect',
      'Discrimination',
      'Dispose Of',
      'Distinguish',
      'Conical Cap'
    ],
    on: ['べん', 'へん'],
    kun: ['かんむり', 'わきま.える', 'わ.ける', 'はなびら', 'あらそ.う'],
    jlpt: 1,
    quizAnswers: ['Affair', 'Valve', 'Inn', 'Disorder'],
    similars: [
      {
        kanji: '斗',
        meaning: 'Big Dipper'
      },
      {
        kanji: '井',
        meaning: 'well'
      },
      {
        kanji: '至',
        meaning: 'climax'
      },
      {
        kanji: '参',
        meaning: 'nonplussed'
      },
      {
        kanji: '糸',
        meaning: 'thread'
      },
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '到',
        meaning: 'arrival'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '光',
        meaning: 'ray'
      }
    ]
  },
  {
    kanjiName: '証',
    strokes: 12,
    grade: 5,
    freq: 306,
    meanings: ['Evidence', 'Proof', 'Certificate'],
    on: ['しょう'],
    kun: ['あかし'],
    jlpt: 1,
    quizAnswers: ['Evidence', 'Feather', 'Route', 'In Doubt'],
    similars: [
      {
        kanji: '誕',
        meaning: 'nativity'
      },
      {
        kanji: '謹',
        meaning: 'discreet'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '誇',
        meaning: 'boast'
      },
      {
        kanji: '試',
        meaning: 'test'
      },
      {
        kanji: '訂',
        meaning: 'revise'
      },
      {
        kanji: '訳',
        meaning: 'translate'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      }
    ]
  },
  {
    kanjiName: '冒',
    strokes: 9,
    grade: 8,
    freq: 1317,
    meanings: ['Risk', 'Face', 'Defy', 'Dare', 'Damage', 'Assume (a Name)'],
    on: ['ぼう'],
    kun: ['おか.す'],
    jlpt: 1,
    quizAnswers: ['Occasion', 'Trade', 'Risk', 'Ticket'],
    similars: [
      {
        kanji: '門',
        meaning: 'gate'
      },
      {
        kanji: '帽',
        meaning: 'cap'
      },
      {
        kanji: '晶',
        meaning: 'sparkle'
      },
      {
        kanji: '買',
        meaning: 'buy'
      },
      {
        kanji: '明',
        meaning: 'bright'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      },
      {
        kanji: '胆',
        meaning: 'gall bladder'
      },
      {
        kanji: '軸',
        meaning: 'axis'
      },
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      }
    ]
  },
  {
    kanjiName: '冗',
    strokes: 4,
    grade: 8,
    freq: 1782,
    meanings: ['Superfluous', 'Uselessness'],
    on: ['じょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Light', 'Cure', 'Radical', 'Superfluous'],
    similars: [
      {
        kanji: '穴',
        meaning: 'hole'
      },
      {
        kanji: '火',
        meaning: 'fire'
      },
      {
        kanji: '宅',
        meaning: 'home'
      },
      {
        kanji: '安',
        meaning: 'relax'
      },
      {
        kanji: '没',
        meaning: 'drown'
      },
      {
        kanji: '沈',
        meaning: 'sink'
      },
      {
        kanji: '完',
        meaning: 'perfect'
      },
      {
        kanji: '売',
        meaning: 'sell'
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)'
      },
      {
        kanji: '究',
        meaning: 'research'
      }
    ]
  },
  {
    kanjiName: '梅',
    strokes: 10,
    grade: 4,
    freq: 1232,
    meanings: ['Plum'],
    on: ['ばい'],
    kun: ['うめ'],
    jlpt: 1,
    quizAnswers: ['Plum', 'Condition', 'Exile', 'Condemn'],
    similars: [
      {
        kanji: '柳',
        meaning: 'willow'
      },
      {
        kanji: '柱',
        meaning: 'pillar'
      },
      {
        kanji: '侮',
        meaning: 'scorn'
      },
      {
        kanji: '栓',
        meaning: 'plug'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '毒',
        meaning: 'poison'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      },
      {
        kanji: '種',
        meaning: 'species'
      },
      {
        kanji: '楼',
        meaning: 'watchtower'
      }
    ]
  },
  {
    kanjiName: '結',
    strokes: 12,
    grade: 4,
    freq: 162,
    meanings: ['Tie', 'Bind', 'Contract', 'Join', 'Organize', 'Do Up Hair', 'Fasten'],
    on: ['けつ', 'けち'],
    kun: ['むす.ぶ', 'ゆ.う', 'ゆ.わえる'],
    jlpt: 1,
    quizAnswers: ['Circumstances', 'And So Forth', 'Counter For Occurrences', 'Tie'],
    similars: [
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '紹',
        meaning: 'introduce'
      },
      {
        kanji: '絡',
        meaning: 'entwine'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      }
    ]
  },
  {
    kanjiName: '是',
    strokes: 9,
    grade: 8,
    freq: 1045,
    meanings: ['Just So', 'This', 'Right', 'Justice'],
    on: ['ぜ', 'し'],
    kun: ['これ', 'この', 'ここ'],
    jlpt: 1,
    quizAnswers: ['Just So', 'Elder Sister', 'Top Of Head', 'Do Away With'],
    similars: [
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '提',
        meaning: 'propose'
      },
      {
        kanji: '堤',
        meaning: 'dike'
      },
      {
        kanji: '映',
        meaning: 'reflect'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      },
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '時',
        meaning: 'time'
      },
      {
        kanji: '暑',
        meaning: 'sultry'
      },
      {
        kanji: '暁',
        meaning: 'daybreak'
      }
    ]
  },
  {
    kanjiName: '渉',
    strokes: 11,
    grade: 8,
    freq: 499,
    meanings: ['Ford', 'Go Cross', 'Transit', 'Ferry', 'Import', 'Involve'],
    on: ['しょう'],
    kun: ['わた.る'],
    jlpt: 1,
    quizAnswers: ['Injury', 'Ford', 'Sutra', 'Emotion'],
    similars: [
      {
        kanji: '歩',
        meaning: 'walk'
      },
      {
        kanji: '淑',
        meaning: 'graceful'
      },
      {
        kanji: '洪',
        meaning: 'deluge'
      },
      {
        kanji: '渋',
        meaning: 'astringent'
      },
      {
        kanji: '涼',
        meaning: 'refreshing'
      },
      {
        kanji: '浜',
        meaning: 'seacoast'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '法',
        meaning: 'method'
      },
      {
        kanji: '泣',
        meaning: 'cry'
      },
      {
        kanji: '浅',
        meaning: 'shallow'
      }
    ]
  },
  {
    kanjiName: '虚',
    strokes: 11,
    grade: 8,
    freq: 1454,
    meanings: ['Void', 'Emptiness', 'Unpreparedness', 'Crack', 'Fissure', 'Untruth'],
    on: ['きょ', 'こ'],
    kun: ['むな.しい', 'うつ.ろ'],
    jlpt: 1,
    quizAnswers: ['Slow', 'Load', 'Suitable', 'Void'],
    similars: [
      {
        kanji: '戯',
        meaning: 'frolic'
      },
      {
        kanji: '並',
        meaning: 'row'
      },
      {
        kanji: '金',
        meaning: 'gold'
      },
      {
        kanji: '虐',
        meaning: 'tyrannize'
      },
      {
        kanji: '虞',
        meaning: 'fear'
      },
      {
        kanji: '虜',
        meaning: 'captive'
      },
      {
        kanji: '慮',
        meaning: 'prudence'
      },
      {
        kanji: '痘',
        meaning: 'pox'
      },
      {
        kanji: '膚',
        meaning: 'skin'
      },
      {
        kanji: '劇',
        meaning: 'drama'
      }
    ]
  },
  {
    kanjiName: '幻',
    strokes: 4,
    grade: 8,
    freq: 1564,
    meanings: ['Phantasm', 'Vision', 'Dream', 'Illusion', 'Apparition'],
    on: ['げん'],
    kun: ['まぼろし'],
    jlpt: 1,
    quizAnswers: ['Reach', 'Phantasm', 'Ocean', 'Evil'],
    similars: [
      {
        kanji: '幼',
        meaning: 'infancy'
      },
      {
        kanji: '糸',
        meaning: 'thread'
      },
      {
        kanji: '約',
        meaning: 'promise'
      },
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '却',
        meaning: 'instead'
      },
      {
        kanji: '玄',
        meaning: 'mysterious'
      },
      {
        kanji: '紛',
        meaning: 'distract'
      },
      {
        kanji: '紹',
        meaning: 'introduce'
      },
      {
        kanji: '劣',
        meaning: 'inferiority'
      },
      {
        kanji: '至',
        meaning: 'climax'
      }
    ]
  },
  {
    kanjiName: '弓',
    strokes: 3,
    grade: 2,
    freq: 1802,
    meanings: ['Bow', 'Bow (archery, Violin)'],
    on: ['きゅう'],
    kun: ['ゆみ'],
    jlpt: 1,
    quizAnswers: ['Current', 'Elder Sister', 'Argue', 'Bow'],
    similars: [
      {
        kanji: '引',
        meaning: 'pull'
      },
      {
        kanji: '弔',
        meaning: 'condolences'
      },
      {
        kanji: '己',
        meaning: 'self'
      },
      {
        kanji: '弟',
        meaning: 'younger brother'
      },
      {
        kanji: '号',
        meaning: 'nickname'
      },
      {
        kanji: '民',
        meaning: 'people'
      },
      {
        kanji: '包',
        meaning: 'wrap'
      },
      {
        kanji: '巧',
        meaning: 'adroit'
      },
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '弦',
        meaning: 'bowstring'
      }
    ]
  },
  {
    kanjiName: '汽',
    strokes: 7,
    grade: 2,
    freq: 2020,
    meanings: ['Vapor', 'Steam'],
    on: ['き'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Little', 'Shift', 'Vapor', 'Include'],
    similars: [
      {
        kanji: '汚',
        meaning: 'dirty'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '浄',
        meaning: 'clean'
      },
      {
        kanji: '泡',
        meaning: 'bubbles'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '注',
        meaning: 'pour'
      },
      {
        kanji: '浜',
        meaning: 'seacoast'
      },
      {
        kanji: '没',
        meaning: 'drown'
      }
    ]
  },
  {
    kanjiName: '僧',
    strokes: 13,
    grade: 8,
    freq: 1724,
    meanings: ['Buddhist Priest', 'Monk'],
    on: ['そう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Buddhist Priest', 'Summit', 'Seduce', 'Spring'],
    similars: [
      {
        kanji: '憎',
        meaning: 'hate'
      },
      {
        kanji: '層',
        meaning: 'stratum'
      },
      {
        kanji: '増',
        meaning: 'increase'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      },
      {
        kanji: '贈',
        meaning: 'presents'
      },
      {
        kanji: '曹',
        meaning: 'office'
      },
      {
        kanji: '晶',
        meaning: 'sparkle'
      },
      {
        kanji: '帽',
        meaning: 'cap'
      },
      {
        kanji: '縄',
        meaning: 'straw rope'
      }
    ]
  },
  {
    kanjiName: '禅',
    strokes: 13,
    grade: 8,
    freq: 1902,
    meanings: ['Zen', 'Silent Meditation'],
    on: ['ぜん', 'せん'],
    kun: ['しずか', 'ゆず.る'],
    jlpt: 1,
    quizAnswers: ['Explain Away', 'Zen', 'Annotate', 'Perish'],
    similars: [
      {
        kanji: '神',
        meaning: 'gods'
      },
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '弾',
        meaning: 'bullet'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '祥',
        meaning: 'auspicious'
      },
      {
        kanji: '悼',
        meaning: 'lament'
      },
      {
        kanji: '裸',
        meaning: 'naked'
      },
      {
        kanji: '複',
        meaning: 'duplicate'
      },
      {
        kanji: '補',
        meaning: 'supplement'
      },
      {
        kanji: '視',
        meaning: 'inspection'
      }
    ]
  },
  {
    kanjiName: '句',
    strokes: 5,
    grade: 5,
    freq: 1244,
    meanings: ['Phrase', 'Clause', 'Sentence', 'Passage', 'Paragraph', 'Counter For Haiku'],
    on: ['く'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Concentrated', 'Confer On', 'Phrase', 'More And More'],
    similars: [
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '局',
        meaning: 'bureau'
      },
      {
        kanji: '伺',
        meaning: 'pay respects'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '各',
        meaning: 'each'
      },
      {
        kanji: '仲',
        meaning: 'go-between'
      },
      {
        kanji: '合',
        meaning: 'fit'
      },
      {
        kanji: '向',
        meaning: 'yonder'
      },
      {
        kanji: '名',
        meaning: 'name'
      },
      {
        kanji: '如',
        meaning: 'likeness'
      }
    ]
  },
  {
    kanjiName: '節',
    strokes: 13,
    grade: 4,
    freq: 934,
    meanings: [
      'Node',
      'Season',
      'Period',
      'Occasion',
      'Verse',
      'Clause',
      'Stanza',
      'Honor',
      'Joint',
      'Knuckle',
      'Knob',
      'Knot',
      'Tune',
      'Melody'
    ],
    on: ['せつ', 'せち'],
    kun: ['ふし', '-ぶし', 'のっと'],
    jlpt: 1,
    quizAnswers: ['Worry', 'School', 'Catch', 'Node'],
    similars: [
      {
        kanji: '算',
        meaning: 'calculate'
      },
      {
        kanji: '筋',
        meaning: 'muscle'
      },
      {
        kanji: '範',
        meaning: 'pattern'
      },
      {
        kanji: '符',
        meaning: 'token'
      },
      {
        kanji: '筆',
        meaning: 'writing brush'
      },
      {
        kanji: '即',
        meaning: 'instant'
      },
      {
        kanji: '築',
        meaning: 'fabricate'
      },
      {
        kanji: '簡',
        meaning: 'simplicity'
      },
      {
        kanji: '簿',
        meaning: 'register'
      },
      {
        kanji: '等',
        meaning: 'etc.'
      }
    ]
  },
  {
    kanjiName: '昆',
    strokes: 8,
    grade: 8,
    freq: 1688,
    meanings: ['Descendants', 'Elder Brother', 'Insect'],
    on: ['こん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Type', 'Descendants', 'Daughter', 'Performance'],
    similars: [
      {
        kanji: '見',
        meaning: 'see'
      },
      {
        kanji: '混',
        meaning: 'mix'
      },
      {
        kanji: '貝',
        meaning: 'shellfish'
      },
      {
        kanji: '具',
        meaning: 'tool'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '易',
        meaning: 'easy'
      },
      {
        kanji: '児',
        meaning: 'newborn babe'
      },
      {
        kanji: '眠',
        meaning: 'sleep'
      },
      {
        kanji: '臭',
        meaning: 'stinking'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      }
    ]
  },
  {
    kanjiName: '閥',
    strokes: 14,
    grade: 8,
    freq: 1072,
    meanings: ['Clique', 'Lineage', 'Pedigree', 'Faction', 'Clan'],
    on: ['ばつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Storehouse', 'Specialty', 'Opinion', 'Clique'],
    similars: [
      {
        kanji: '閲',
        meaning: 'review'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '開',
        meaning: 'open'
      },
      {
        kanji: '閣',
        meaning: 'tower'
      },
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '闘',
        meaning: 'fight'
      },
      {
        kanji: '晶',
        meaning: 'sparkle'
      }
    ]
  },
  {
    kanjiName: '舌',
    strokes: 6,
    grade: 5,
    freq: 1830,
    meanings: ['Tongue', 'Reed', 'Clapper'],
    on: ['ぜつ'],
    kun: ['した'],
    jlpt: 1,
    quizAnswers: ['Tongue', 'Horse', 'Heap Up', 'Cloud'],
    similars: [
      {
        kanji: '乱',
        meaning: 'riot'
      },
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '古',
        meaning: 'old'
      },
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '居',
        meaning: 'reside'
      },
      {
        kanji: '舎',
        meaning: 'cottage'
      },
      {
        kanji: '含',
        meaning: 'contain'
      },
      {
        kanji: '司',
        meaning: 'director'
      },
      {
        kanji: '枯',
        meaning: 'wither'
      },
      {
        kanji: '各',
        meaning: 'each'
      }
    ]
  },
  {
    kanjiName: '宙',
    strokes: 8,
    grade: 6,
    freq: 1005,
    meanings: ['Mid-air', 'Air', 'Space', 'Sky', 'Memorization', 'Interval Of Time'],
    on: ['ちゅう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Branch Radical (no. 65)', 'Drink Up', 'Mid-air', 'Sting'],
    similars: [
      {
        kanji: '油',
        meaning: 'oil'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '富',
        meaning: 'wealth'
      },
      {
        kanji: '田',
        meaning: 'rice field'
      },
      {
        kanji: '盲',
        meaning: 'blind'
      },
      {
        kanji: '苗',
        meaning: 'seedling'
      },
      {
        kanji: '由',
        meaning: 'wherefore'
      },
      {
        kanji: '届',
        meaning: 'deliver'
      },
      {
        kanji: '抽',
        meaning: 'pluck'
      },
      {
        kanji: '留',
        meaning: 'detain'
      }
    ]
  },
  {
    kanjiName: '履',
    strokes: 15,
    grade: 8,
    freq: 1619,
    meanings: ['Perform', 'Complete', 'Footgear', 'Shoes', 'Boots', 'Put On (the Feet)'],
    on: ['り'],
    kun: ['は.く'],
    jlpt: 1,
    quizAnswers: ['Wind', 'Die', 'Argue', 'Perform'],
    similars: [
      {
        kanji: '復',
        meaning: 'restore'
      },
      {
        kanji: '覆',
        meaning: 'capsize'
      },
      {
        kanji: '腹',
        meaning: 'abdomen'
      },
      {
        kanji: '複',
        meaning: 'duplicate'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      },
      {
        kanji: '硬',
        meaning: 'stiff'
      },
      {
        kanji: '顔',
        meaning: 'face'
      },
      {
        kanji: '顧',
        meaning: 'look back'
      },
      {
        kanji: '線',
        meaning: 'line'
      },
      {
        kanji: '皆',
        meaning: 'all'
      }
    ]
  },
  {
    kanjiName: '善',
    strokes: 12,
    grade: 6,
    freq: 765,
    meanings: ['Virtuous', 'Good', 'Goodness'],
    on: ['ぜん'],
    kun: ['よ.い', 'い.い', 'よ.く', 'よし.とする'],
    jlpt: 1,
    quizAnswers: ['Virtuous', 'Climate', 'Dry', 'Bow'],
    similars: [
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '繕',
        meaning: 'darning'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '鉛',
        meaning: 'lead'
      },
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '普',
        meaning: 'universal'
      },
      {
        kanji: '言',
        meaning: 'say'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '悟',
        meaning: 'enlightenment'
      }
    ]
  },
  {
    kanjiName: '災',
    strokes: 7,
    grade: 5,
    freq: 976,
    meanings: ['Disaster', 'Calamity', 'Woe', 'Curse', 'Evil'],
    on: ['さい'],
    kun: ['わざわ.い'],
    jlpt: 1,
    quizAnswers: ['Disaster', 'Reduce', 'Provision', 'Stinger'],
    similars: [
      {
        kanji: '巡',
        meaning: 'patrol'
      },
      {
        kanji: '火',
        meaning: 'fire'
      },
      {
        kanji: '灰',
        meaning: 'ashes'
      },
      {
        kanji: '炎',
        meaning: 'inflammation'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      },
      {
        kanji: '炭',
        meaning: 'charcoal'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '俊',
        meaning: 'sagacious'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      }
    ]
  },
  {
    kanjiName: '率',
    strokes: 11,
    grade: 5,
    freq: 383,
    meanings: ['Ratio', 'Rate', 'Proportion', '%', 'Factor', 'Lead', 'Spearhead', 'Command'],
    on: ['そつ', 'りつ', 'しゅつ'],
    kun: ['ひき.いる'],
    jlpt: 1,
    quizAnswers: ['Tender', 'Ratio', 'Wise', 'Shoulder (a Gun)'],
    similars: [
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '幽',
        meaning: 'seclude'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '科',
        meaning: 'department'
      },
      {
        kanji: '楽',
        meaning: 'music'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '玄',
        meaning: 'mysterious'
      },
      {
        kanji: '畜',
        meaning: 'livestock'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      }
    ]
  },
  {
    kanjiName: '妨',
    strokes: 7,
    grade: 8,
    freq: 1482,
    meanings: ['Disturb', 'Prevent', 'Hamper', 'Obstruct'],
    on: ['ぼう'],
    kun: ['さまた.げる'],
    jlpt: 1,
    quizAnswers: ['Suitable', 'Paunch', 'Side', 'Disturb'],
    similars: [
      {
        kanji: '姉',
        meaning: 'elder sister'
      },
      {
        kanji: '坊',
        meaning: 'boy'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '防',
        meaning: 'ward off'
      },
      {
        kanji: '努',
        meaning: 'toil'
      },
      {
        kanji: '妙',
        meaning: 'exquisite'
      },
      {
        kanji: '芳',
        meaning: 'perfume'
      },
      {
        kanji: '妃',
        meaning: 'queen'
      },
      {
        kanji: '妊',
        meaning: 'pregnancy'
      },
      {
        kanji: '方',
        meaning: 'direction'
      }
    ]
  },
  {
    kanjiName: '裕',
    strokes: 12,
    grade: 8,
    freq: 1048,
    meanings: ['Abundant', 'Rich', 'Fertile'],
    on: ['ゆう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Cushion', 'Abundant', 'Kind', 'Skill'],
    similars: [
      {
        kanji: '溶',
        meaning: 'melt'
      },
      {
        kanji: '俗',
        meaning: 'vulgar'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '谷',
        meaning: 'valley'
      },
      {
        kanji: '啓',
        meaning: 'disclose'
      },
      {
        kanji: '格',
        meaning: 'status'
      },
      {
        kanji: '絡',
        meaning: 'entwine'
      },
      {
        kanji: '容',
        meaning: 'contain'
      },
      {
        kanji: '祈',
        meaning: 'pray'
      },
      {
        kanji: '沿',
        meaning: 'run alongside'
      }
    ]
  },
  {
    kanjiName: '尾',
    strokes: 7,
    grade: 8,
    freq: 875,
    meanings: ['Tail', 'End', 'Counter For Fish', 'Lower Slope Of Mountain'],
    on: ['び'],
    kun: ['お'],
    jlpt: 1,
    quizAnswers: ['Subdue', 'Call', 'Tail', 'Secretion'],
    similars: [
      {
        kanji: '尼',
        meaning: 'nun'
      },
      {
        kanji: '所',
        meaning: 'place'
      },
      {
        kanji: '毛',
        meaning: 'fur'
      },
      {
        kanji: '発',
        meaning: 'departure'
      },
      {
        kanji: '房',
        meaning: 'tassel'
      },
      {
        kanji: '塀',
        meaning: 'fence'
      },
      {
        kanji: '遅',
        meaning: 'slow'
      },
      {
        kanji: '耗',
        meaning: 'decrease'
      },
      {
        kanji: '啓',
        meaning: 'disclose'
      },
      {
        kanji: '尉',
        meaning: 'military officer'
      }
    ]
  },
  {
    kanjiName: '嫌',
    strokes: 13,
    grade: 8,
    freq: 1207,
    meanings: ['Dislike', 'Detest', 'Hate'],
    on: ['けん', 'げん'],
    kun: ['きら.う', 'きら.い', 'いや'],
    jlpt: 1,
    quizAnswers: ['Old Friend', 'Boundary', 'Dislike', 'Delve'],
    similars: [
      {
        kanji: '兼',
        meaning: 'concurrently'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '娠',
        meaning: 'with child'
      },
      {
        kanji: '謙',
        meaning: 'self-effacing'
      },
      {
        kanji: '様',
        meaning: 'Esq.'
      },
      {
        kanji: '嬢',
        meaning: 'lass'
      },
      {
        kanji: '媒',
        meaning: 'mediator'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      }
    ]
  },
  {
    kanjiName: '臭',
    strokes: 9,
    grade: 8,
    freq: 1760,
    meanings: [
      'Stinking',
      'Ill-smelling',
      'Suspicious Looking',
      'Odor',
      'Savor',
      'Fragrance',
      'Be Fragrant',
      'Stink',
      'Glow',
      'Be Bright'
    ],
    on: ['しゅう'],
    kun: ['くさ.い', '-くさ.い', 'にお.う', 'にお.い'],
    jlpt: 1,
    quizAnswers: ['Strange', 'Stinking', 'Matter', 'Complete'],
    similars: [
      {
        kanji: '具',
        meaning: 'tool'
      },
      {
        kanji: '泉',
        meaning: 'spring'
      },
      {
        kanji: '真',
        meaning: 'true'
      },
      {
        kanji: '夏',
        meaning: 'summer'
      },
      {
        kanji: '更',
        meaning: 'grow late'
      },
      {
        kanji: '映',
        meaning: 'reflect'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '貝',
        meaning: 'shellfish'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '東',
        meaning: 'east'
      }
    ]
  },
  {
    kanjiName: '穴',
    strokes: 5,
    grade: 6,
    freq: 1366,
    meanings: ['Hole', 'Aperture', 'Slit', 'Cave', 'Den'],
    on: ['けつ'],
    kun: ['あな'],
    jlpt: 1,
    quizAnswers: ['Field', 'Require', 'How Far', 'Hole'],
    similars: [
      {
        kanji: '宅',
        meaning: 'home'
      },
      {
        kanji: '安',
        meaning: 'relax'
      },
      {
        kanji: '突',
        meaning: 'stab'
      },
      {
        kanji: '定',
        meaning: 'determine'
      },
      {
        kanji: '実',
        meaning: 'reality'
      },
      {
        kanji: '冗',
        meaning: 'superfluous'
      },
      {
        kanji: '火',
        meaning: 'fire'
      },
      {
        kanji: '央',
        meaning: 'center'
      },
      {
        kanji: '氷',
        meaning: 'icicle'
      },
      {
        kanji: '文',
        meaning: 'sentence'
      }
    ]
  },
  {
    kanjiName: '笛',
    strokes: 11,
    grade: 3,
    freq: 1928,
    meanings: ['Flute', 'Clarinet', 'Pipe', 'Whistle', 'Bagpipe', 'Piccolo'],
    on: ['てき'],
    kun: ['ふえ'],
    jlpt: 1,
    quizAnswers: ['Put Up At', 'Revere', 'Structure', 'Flute'],
    similars: [
      {
        kanji: '算',
        meaning: 'calculate'
      },
      {
        kanji: '箇',
        meaning: 'counter for articles'
      },
      {
        kanji: '箱',
        meaning: 'box'
      },
      {
        kanji: '届',
        meaning: 'deliver'
      },
      {
        kanji: '範',
        meaning: 'pattern'
      },
      {
        kanji: '筒',
        meaning: 'cylinder'
      },
      {
        kanji: '策',
        meaning: 'scheme'
      },
      {
        kanji: '筋',
        meaning: 'muscle'
      },
      {
        kanji: '簡',
        meaning: 'simplicity'
      },
      {
        kanji: '皆',
        meaning: 'all'
      }
    ]
  },
  {
    kanjiName: '敵',
    strokes: 15,
    grade: 5,
    freq: 1205,
    meanings: ['Enemy', 'Foe', 'Opponent'],
    on: ['てき'],
    kun: ['かたき', 'あだ', 'かな.う'],
    jlpt: 1,
    quizAnswers: ['Leap', 'Race', 'Decimal Point', 'Enemy'],
    similars: [
      {
        kanji: '適',
        meaning: 'suitable'
      },
      {
        kanji: '商',
        meaning: 'make a deal'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '掌',
        meaning: 'manipulate'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '歓',
        meaning: 'delight'
      },
      {
        kanji: '摘',
        meaning: 'pinch'
      },
      {
        kanji: '滴',
        meaning: 'drip'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '痘',
        meaning: 'pox'
      }
    ]
  },
  {
    kanjiName: '挙',
    strokes: 10,
    grade: 4,
    freq: 257,
    meanings: ['Raise', 'Plan', 'Project', 'Behavior', 'Actions'],
    on: ['きょ'],
    kun: ['あ.げる', 'あ.がる', 'こぞ.る'],
    jlpt: 1,
    quizAnswers: ['Raise', 'Lower', 'Teach', 'Mouth'],
    similars: [
      {
        kanji: '誉',
        meaning: 'reputation'
      },
      {
        kanji: '産',
        meaning: 'products'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '済',
        meaning: 'settle (debt'
      },
      {
        kanji: '涯',
        meaning: 'horizon'
      },
      {
        kanji: '摩',
        meaning: 'chafe'
      },
      {
        kanji: '浄',
        meaning: 'clean'
      },
      {
        kanji: '掌',
        meaning: 'manipulate'
      },
      {
        kanji: '巻',
        meaning: 'scroll'
      },
      {
        kanji: '涙',
        meaning: 'tears'
      }
    ]
  },
  {
    kanjiName: '派',
    strokes: 9,
    grade: 6,
    freq: 164,
    meanings: ['Faction', 'Group', 'Party', 'Clique', 'Sect', 'School'],
    on: ['は'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Faction', 'Surpass', 'Pasture', 'Care'],
    similars: [
      {
        kanji: '染',
        meaning: 'dye'
      },
      {
        kanji: '液',
        meaning: 'fluid'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '淡',
        meaning: 'thin'
      },
      {
        kanji: '深',
        meaning: 'deep'
      },
      {
        kanji: '脈',
        meaning: 'vein'
      },
      {
        kanji: '涙',
        meaning: 'tears'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      }
    ]
  },
  {
    kanjiName: '素',
    strokes: 10,
    grade: 5,
    freq: 660,
    meanings: ['Elementary', 'Principle', 'Naked', 'Uncovered'],
    on: ['そ', 'す'],
    kun: ['もと'],
    jlpt: 1,
    quizAnswers: ['Halt', 'Status', 'Grieve', 'Elementary'],
    similars: [
      {
        kanji: '索',
        meaning: 'cord'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '孫',
        meaning: 'grandchild'
      },
      {
        kanji: '係',
        meaning: 'person in charge'
      },
      {
        kanji: '糸',
        meaning: 'thread'
      },
      {
        kanji: '潔',
        meaning: 'undefiled'
      },
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      },
      {
        kanji: '紫',
        meaning: 'purple'
      },
      {
        kanji: '執',
        meaning: 'tenacious'
      }
    ]
  },
  {
    kanjiName: '評',
    strokes: 12,
    grade: 5,
    freq: 454,
    meanings: ['Evaluate', 'Criticism', 'Comment'],
    on: ['ひょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Evaluate', 'Sort', 'Stretch', 'Blessing'],
    similars: [
      {
        kanji: '詳',
        meaning: 'detailed'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '語',
        meaning: 'word'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      }
    ]
  },
  {
    kanjiName: '批',
    strokes: 7,
    grade: 6,
    freq: 568,
    meanings: ['Criticism', 'Strike'],
    on: ['ひ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Expect', 'Criticism', 'Inside', 'Grade'],
    similars: [
      {
        kanji: '扶',
        meaning: 'aid'
      },
      {
        kanji: '択',
        meaning: 'choose'
      },
      {
        kanji: '把',
        meaning: 'grasp'
      },
      {
        kanji: '抑',
        meaning: 'repress'
      },
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '比',
        meaning: 'compare'
      },
      {
        kanji: '拠',
        meaning: 'foothold'
      },
      {
        kanji: '抱',
        meaning: 'embrace'
      },
      {
        kanji: '拡',
        meaning: 'broaden'
      },
      {
        kanji: '拐',
        meaning: 'kidnap'
      }
    ]
  },
  {
    kanjiName: '検',
    strokes: 12,
    grade: 5,
    freq: 290,
    meanings: ['Examination', 'Investigate'],
    on: ['けん'],
    kun: ['しら.べる'],
    jlpt: 1,
    quizAnswers: ['Fly', 'Vice-', 'Examination', 'Inaccessible Place'],
    similars: [
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '険',
        meaning: 'precipitous'
      },
      {
        kanji: '格',
        meaning: 'status'
      },
      {
        kanji: '様',
        meaning: 'Esq.'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '枯',
        meaning: 'wither'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      }
    ]
  },
  {
    kanjiName: '審',
    strokes: 15,
    grade: 8,
    freq: 412,
    meanings: ['Hearing', 'Judge', 'Trial'],
    on: ['しん'],
    kun: ['つまび.らか', 'つぶさ.に'],
    jlpt: 1,
    quizAnswers: ['Low Wainscoting', 'Hearing', 'Seed', 'Sell'],
    similars: [
      {
        kanji: '番',
        meaning: 'turn'
      },
      {
        kanji: '藩',
        meaning: 'clan'
      },
      {
        kanji: '富',
        meaning: 'wealth'
      },
      {
        kanji: '宿',
        meaning: 'inn'
      },
      {
        kanji: '福',
        meaning: 'blessing'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '箱',
        meaning: 'box'
      },
      {
        kanji: '畑',
        meaning: 'farm'
      },
      {
        kanji: '宙',
        meaning: 'mid-air'
      },
      {
        kanji: '猫',
        meaning: 'cat'
      }
    ]
  },
  {
    kanjiName: '条',
    strokes: 7,
    grade: 5,
    freq: 363,
    meanings: ['Article', 'Clause', 'Item', 'Stripe', 'Streak'],
    on: ['じょう', 'ちょう', 'でき'],
    kun: ['えだ', 'すじ'],
    jlpt: 1,
    quizAnswers: ['Acquiesce', 'Article', 'Drama', 'Nation'],
    similars: [
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '休',
        meaning: 'rest'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '体',
        meaning: 'body'
      },
      {
        kanji: '各',
        meaning: 'each'
      },
      {
        kanji: '合',
        meaning: 'fit'
      },
      {
        kanji: '未',
        meaning: 'un-'
      },
      {
        kanji: '米',
        meaning: 'rice'
      }
    ]
  },
  {
    kanjiName: '企',
    strokes: 6,
    grade: 8,
    freq: 278,
    meanings: ['Undertake', 'Scheme', 'Design', 'Attempt', 'Plan'],
    on: ['き'],
    kun: ['くわだ.てる', 'たくら.む'],
    jlpt: 1,
    quizAnswers: ['Look For', 'Undertake', 'Esteem', 'Push'],
    similars: [
      {
        kanji: '止',
        meaning: 'stop'
      },
      {
        kanji: '正',
        meaning: 'correct'
      },
      {
        kanji: '丘',
        meaning: 'hill'
      },
      {
        kanji: '征',
        meaning: 'subjugate'
      },
      {
        kanji: '兵',
        meaning: 'soldier'
      },
      {
        kanji: '盆',
        meaning: 'basin'
      },
      {
        kanji: '皿',
        meaning: 'dish'
      },
      {
        kanji: '垂',
        meaning: 'droop'
      },
      {
        kanji: '片',
        meaning: 'one-sided'
      },
      {
        kanji: '延',
        meaning: 'prolong'
      }
    ]
  },
  {
    kanjiName: '義',
    strokes: 13,
    grade: 5,
    freq: 415,
    meanings: ['Righteousness', 'Justice', 'Morality', 'Honor', 'Loyalty', 'Meaning'],
    on: ['ぎ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Dangerous', 'Draft', 'Righteousness', 'Be Filled Up'],
    similars: [
      {
        kanji: '儀',
        meaning: 'ceremony'
      },
      {
        kanji: '犠',
        meaning: 'sacrifice'
      },
      {
        kanji: '議',
        meaning: 'deliberation'
      },
      {
        kanji: '差',
        meaning: 'distinction'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '裁',
        meaning: 'tailor'
      },
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '赤',
        meaning: 'red'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      },
      {
        kanji: '着',
        meaning: 'don'
      }
    ]
  },
  {
    kanjiName: '罰',
    strokes: 14,
    grade: 8,
    freq: 1220,
    meanings: ['Penalty', 'Punishment'],
    on: ['ばつ', 'ばち', 'はつ'],
    kun: ['ばっ.する'],
    jlpt: 1,
    quizAnswers: ['Penalty', 'Unfold', 'Favor', 'Grind'],
    similars: [
      {
        kanji: '訂',
        meaning: 'revise'
      },
      {
        kanji: '豊',
        meaning: 'bountiful'
      },
      {
        kanji: '割',
        meaning: 'proportion'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '署',
        meaning: 'signature'
      },
      {
        kanji: '罪',
        meaning: 'guilt'
      },
      {
        kanji: '荷',
        meaning: 'baggage'
      }
    ]
  },
  {
    kanjiName: '誕',
    strokes: 15,
    grade: 6,
    freq: 1024,
    meanings: ['Nativity', 'Be Born', 'Declension', 'Lie', 'Be Arbitrary'],
    on: ['たん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Transcend', 'Nativity', 'Lead To', 'Shoulder (a Gun)'],
    similars: [
      {
        kanji: '証',
        meaning: 'evidence'
      },
      {
        kanji: '設',
        meaning: 'establishment'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '訳',
        meaning: 'translate'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '詠',
        meaning: 'recitation'
      }
    ]
  },
  {
    kanjiName: '脱',
    strokes: 11,
    grade: 8,
    freq: 782,
    meanings: ['Undress', 'Removing', 'Escape From', 'Get Rid Of', 'Be Left Out', 'Take Off'],
    on: ['だつ'],
    kun: ['ぬ.ぐ', 'ぬ.げる'],
    jlpt: 1,
    quizAnswers: ['Behave', 'A Stand', 'Undress', 'War'],
    similars: [
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '閲',
        meaning: 'review'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '悦',
        meaning: 'ecstasy'
      },
      {
        kanji: '胎',
        meaning: 'womb'
      },
      {
        kanji: '昭',
        meaning: 'shining'
      },
      {
        kanji: '況',
        meaning: 'condition'
      },
      {
        kanji: '祝',
        meaning: 'celebrate'
      },
      {
        kanji: '胞',
        meaning: 'placenta'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      }
    ]
  },
  {
    kanjiName: '宮',
    strokes: 10,
    grade: 3,
    freq: 367,
    meanings: ['Shinto Shrine', 'Constellations', 'Palace', 'Princess'],
    on: ['きゅう', 'ぐう', 'く', 'くう'],
    kun: ['みや'],
    jlpt: 1,
    quizAnswers: ['Settle (debt, Etc.)', 'Shinto Shrine', 'Impart', 'Burst Open'],
    similars: [
      {
        kanji: '官',
        meaning: 'bureaucrat'
      },
      {
        kanji: '営',
        meaning: 'camp'
      },
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '尚',
        meaning: 'esteem'
      },
      {
        kanji: '容',
        meaning: 'contain'
      },
      {
        kanji: '高',
        meaning: 'tall'
      },
      {
        kanji: '害',
        meaning: 'harm'
      },
      {
        kanji: '岩',
        meaning: 'boulder'
      },
      {
        kanji: '客',
        meaning: 'guest'
      },
      {
        kanji: '掌',
        meaning: 'manipulate'
      }
    ]
  },
  {
    kanjiName: '案',
    strokes: 10,
    grade: 4,
    freq: 206,
    meanings: [
      'Plan',
      'Suggestion',
      'Draft',
      'Ponder',
      'Fear',
      'Proposition',
      'Idea',
      'Expectation',
      'Worry',
      'Table',
      'Bench'
    ],
    on: ['あん'],
    kun: ['つくえ'],
    jlpt: 1,
    quizAnswers: ['Section', 'Plan', 'Become Employed', 'Meet'],
    similars: [
      {
        kanji: '突',
        meaning: 'stab'
      },
      {
        kanji: '実',
        meaning: 'reality'
      },
      {
        kanji: '宗',
        meaning: 'religion'
      },
      {
        kanji: '業',
        meaning: 'business'
      },
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '柔',
        meaning: 'tender'
      },
      {
        kanji: '定',
        meaning: 'determine'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      }
    ]
  },
  {
    kanjiName: '価',
    strokes: 8,
    grade: 5,
    freq: 250,
    meanings: ['Value', 'Price'],
    on: ['か', 'け'],
    kun: ['あたい'],
    jlpt: 1,
    quizAnswers: ['Value', 'Quote', 'Slip Out', 'Window'],
    similars: [
      {
        kanji: '伯',
        meaning: 'chief'
      },
      {
        kanji: '値',
        meaning: 'price'
      },
      {
        kanji: '徳',
        meaning: 'benevolence'
      },
      {
        kanji: '看',
        meaning: 'watch over'
      },
      {
        kanji: '畑',
        meaning: 'farm'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      },
      {
        kanji: '盾',
        meaning: 'shield'
      },
      {
        kanji: '猫',
        meaning: 'cat'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '田',
        meaning: 'rice field'
      }
    ]
  },
  {
    kanjiName: '統',
    strokes: 12,
    grade: 5,
    freq: 125,
    meanings: ['Overall', 'Relationship', 'Ruling', 'Governing'],
    on: ['とう'],
    kun: ['す.べる', 'ほび.る'],
    jlpt: 1,
    quizAnswers: ['Taper', 'Present', 'Overall', 'Desire'],
    similars: [
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '紀',
        meaning: 'chronicle'
      },
      {
        kanji: '緑',
        meaning: 'green'
      },
      {
        kanji: '締',
        meaning: 'tighten'
      },
      {
        kanji: '繊',
        meaning: 'slender'
      },
      {
        kanji: '絶',
        meaning: 'discontinue'
      }
    ]
  },
  {
    kanjiName: '策',
    strokes: 12,
    grade: 6,
    freq: 209,
    meanings: ['Scheme', 'Plan', 'Policy', 'Step', 'Means'],
    on: ['さく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Support', 'Shop', 'Young', 'Scheme'],
    similars: [
      {
        kanji: '第',
        meaning: 'No.'
      },
      {
        kanji: '筒',
        meaning: 'cylinder'
      },
      {
        kanji: '笑',
        meaning: 'laugh'
      },
      {
        kanji: '築',
        meaning: 'fabricate'
      },
      {
        kanji: '範',
        meaning: 'pattern'
      },
      {
        kanji: '箱',
        meaning: 'box'
      },
      {
        kanji: '等',
        meaning: 'etc.'
      },
      {
        kanji: '答',
        meaning: 'solution'
      },
      {
        kanji: '笛',
        meaning: 'flute'
      },
      {
        kanji: '符',
        meaning: 'token'
      }
    ]
  },
  {
    kanjiName: '藤',
    strokes: 18,
    grade: 8,
    freq: 291,
    meanings: ['Wisteria'],
    on: ['とう', 'どう'],
    kun: ['ふじ'],
    jlpt: 1,
    quizAnswers: ['Reputation', 'Replace', 'Wisteria', 'Trillion']
  },
  {
    kanjiName: '姿',
    strokes: 9,
    grade: 6,
    freq: 441,
    meanings: ['Figure', 'Form', 'Shape'],
    on: ['し'],
    kun: ['すがた'],
    jlpt: 1,
    quizAnswers: ['Figure', 'As Well As', 'Fish', 'Blow'],
    similars: [
      {
        kanji: '次',
        meaning: 'next'
      },
      {
        kanji: '婆',
        meaning: 'old woman'
      },
      {
        kanji: '盗',
        meaning: 'steal'
      },
      {
        kanji: '委',
        meaning: 'committee'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '挙',
        meaning: 'raise'
      },
      {
        kanji: '楼',
        meaning: 'watchtower'
      },
      {
        kanji: '資',
        meaning: 'assets'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      }
    ]
  },
  {
    kanjiName: '応',
    strokes: 7,
    grade: 5,
    freq: 266,
    meanings: ['Apply', 'Answer', 'Yes', 'Ok', 'Reply', 'Accept'],
    on: ['おう', 'よう', '-のう'],
    kun: ['あた.る', 'まさに', 'こた.える'],
    jlpt: 1,
    quizAnswers: ['Powder', 'Apply', 'Leg', 'Bird'],
    similars: [
      {
        kanji: '忘',
        meaning: 'forget'
      },
      {
        kanji: '志',
        meaning: 'intention'
      },
      {
        kanji: '忌',
        meaning: 'mourning'
      },
      {
        kanji: '恋',
        meaning: 'romance'
      },
      {
        kanji: '念',
        meaning: 'wish'
      },
      {
        kanji: '恐',
        meaning: 'fear'
      },
      {
        kanji: '恩',
        meaning: 'grace'
      },
      {
        kanji: '交',
        meaning: 'mingle'
      },
      {
        kanji: '広',
        meaning: 'wide'
      },
      {
        kanji: '心',
        meaning: 'heart'
      }
    ]
  },
  {
    kanjiName: '提',
    strokes: 12,
    grade: 5,
    freq: 254,
    meanings: ['Propose', 'Take Along', 'Carry In Hand'],
    on: ['てい', 'ちょう', 'だい'],
    kun: ['さ.げる'],
    jlpt: 1,
    quizAnswers: ['Propose', 'Frivolous', 'Person', 'Coil Around'],
    similars: [
      {
        kanji: '堤',
        meaning: 'dike'
      },
      {
        kanji: '揚',
        meaning: 'raise'
      },
      {
        kanji: '是',
        meaning: 'just so'
      },
      {
        kanji: '捜',
        meaning: 'search'
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '撮',
        meaning: 'snapshot'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      }
    ]
  },
  {
    kanjiName: '援',
    strokes: 12,
    grade: 8,
    freq: 312,
    meanings: ['Abet', 'Help', 'Save'],
    on: ['えん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['And', 'Abet', 'Conceal', 'Inside'],
    similars: [
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '揺',
        meaning: 'swing'
      },
      {
        kanji: '授',
        meaning: 'impart'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '暖',
        meaning: 'warmth'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '奨',
        meaning: 'exhort'
      },
      {
        kanji: '撲',
        meaning: 'slap'
      }
    ]
  },
  {
    kanjiName: '態',
    strokes: 14,
    grade: 5,
    freq: 353,
    meanings: ['Attitude', 'Condition', 'Figure', 'Appearance', 'Voice (of Verbs)'],
    on: ['たい'],
    kun: ['わざ.と'],
    jlpt: 1,
    quizAnswers: ['Attitude', 'Offer Prayers', 'Antlers', 'Firm'],
    similars: [
      {
        kanji: '能',
        meaning: 'ability'
      },
      {
        kanji: '恵',
        meaning: 'favor'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '恋',
        meaning: 'romance'
      },
      {
        kanji: '総',
        meaning: 'general'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '恥',
        meaning: 'shame'
      },
      {
        kanji: '怠',
        meaning: 'neglect'
      },
      {
        kanji: '通',
        meaning: 'traffic'
      }
    ]
  },
  {
    kanjiName: '賀',
    strokes: 12,
    grade: 5,
    freq: 1056,
    meanings: ['Congratulations', 'Joy'],
    on: ['が'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Congratulations', 'Table', 'Occasion', 'Bone'],
    similars: [
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '損',
        meaning: 'damage'
      },
      {
        kanji: '貨',
        meaning: 'freight'
      },
      {
        kanji: '賞',
        meaning: 'prize'
      },
      {
        kanji: '負',
        meaning: 'defeat'
      },
      {
        kanji: '貴',
        meaning: 'precious'
      },
      {
        kanji: '貧',
        meaning: 'poverty'
      },
      {
        kanji: '貸',
        meaning: 'lend'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      }
    ]
  },
  {
    kanjiName: '鬼',
    strokes: 10,
    grade: 8,
    freq: 1557,
    meanings: ['Ghost', 'Devil'],
    on: ['き'],
    kun: ['おに', 'おに-'],
    jlpt: 1,
    quizAnswers: ['Divination', 'Corner', 'Exchange', 'Ghost'],
    similars: [
      {
        kanji: '塊',
        meaning: 'clod'
      },
      {
        kanji: '魂',
        meaning: 'soul'
      },
      {
        kanji: '的',
        meaning: "bull's eye"
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '魅',
        meaning: 'fascination'
      },
      {
        kanji: '魚',
        meaning: 'fish'
      },
      {
        kanji: '見',
        meaning: 'see'
      },
      {
        kanji: '免',
        meaning: 'excuse'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '界',
        meaning: 'world'
      }
    ]
  },
  {
    kanjiName: '護',
    strokes: 20,
    grade: 5,
    freq: 351,
    meanings: ['Safeguard', 'Protect'],
    on: ['ご'],
    kun: ['まも.る'],
    jlpt: 1,
    quizAnswers: ['Investigate', 'Poetry', 'Safeguard', 'Both'],
    similars: [
      {
        kanji: '穫',
        meaning: 'harvest'
      },
      {
        kanji: '謹',
        meaning: 'discreet'
      },
      {
        kanji: '獲',
        meaning: 'seize'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '難',
        meaning: 'difficult'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '諸',
        meaning: 'various'
      },
      {
        kanji: '誕',
        meaning: 'nativity'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      }
    ]
  },
  {
    kanjiName: '裁',
    strokes: 12,
    grade: 6,
    freq: 297,
    meanings: ['Tailor', 'Judge', 'Decision', 'Cut Out (pattern)'],
    on: ['さい'],
    kun: ['た.つ', 'さば.く'],
    jlpt: 1,
    quizAnswers: ['Most', 'Disgrace', 'Tailor', 'Lean'],
    similars: [
      {
        kanji: '栽',
        meaning: 'plantation'
      },
      {
        kanji: '越',
        meaning: 'surpass'
      },
      {
        kanji: '茂',
        meaning: 'overgrown'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '歳',
        meaning: 'year-end'
      },
      {
        kanji: '義',
        meaning: 'righteousness'
      },
      {
        kanji: '款',
        meaning: 'goodwill'
      },
      {
        kanji: '械',
        meaning: 'contraption'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      }
    ]
  },
  {
    kanjiName: '崎',
    strokes: 11,
    grade: 8,
    freq: 533,
    meanings: ['Promontory', 'Cape', 'Spit'],
    on: ['き'],
    kun: ['さき', 'さい', 'みさき'],
    jlpt: 1,
    quizAnswers: ['Limit', 'A Light', 'Term', 'Promontory'],
    similars: [
      {
        kanji: '寄',
        meaning: 'draw near'
      },
      {
        kanji: '奇',
        meaning: 'strange'
      },
      {
        kanji: '岩',
        meaning: 'boulder'
      },
      {
        kanji: '岸',
        meaning: 'beach'
      },
      {
        kanji: '割',
        meaning: 'proportion'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '知',
        meaning: 'know'
      },
      {
        kanji: '店',
        meaning: 'store'
      },
      {
        kanji: '害',
        meaning: 'harm'
      },
      {
        kanji: '枯',
        meaning: 'wither'
      }
    ]
  },
  {
    kanjiName: '看',
    strokes: 9,
    grade: 6,
    freq: 1060,
    meanings: ['Watch Over', 'See'],
    on: ['かん'],
    kun: ['み.る'],
    jlpt: 1,
    quizAnswers: ['Prairie', 'Breed', 'Watch Over', 'Carry'],
    similars: [
      {
        kanji: '首',
        meaning: 'neck'
      },
      {
        kanji: '盾',
        meaning: 'shield'
      },
      {
        kanji: '着',
        meaning: 'don'
      },
      {
        kanji: '値',
        meaning: 'price'
      },
      {
        kanji: '春',
        meaning: 'springtime'
      },
      {
        kanji: '盲',
        meaning: 'blind'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '者',
        meaning: 'someone'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '香',
        meaning: 'incense'
      }
    ]
  },
  {
    kanjiName: '幹',
    strokes: 13,
    grade: 5,
    freq: 364,
    meanings: ['Tree Trunk', 'Main Part', 'Talent', 'Capability'],
    on: ['かん'],
    kun: ['みき'],
    jlpt: 1,
    quizAnswers: ['Diligent', 'Tree Trunk', 'Car', 'Crowded'],
    similars: [
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '乾',
        meaning: 'drought'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '軽',
        meaning: 'lightly'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '幕',
        meaning: 'curtain'
      },
      {
        kanji: '撃',
        meaning: 'beat'
      },
      {
        kanji: '輪',
        meaning: 'wheel'
      },
      {
        kanji: '輸',
        meaning: 'transport'
      }
    ]
  },
  {
    kanjiName: '張',
    strokes: 11,
    grade: 5,
    freq: 403,
    meanings: [
      'Lengthen',
      'Counter For Bows & Stringed Instruments',
      'Stretch',
      'Spread',
      'Put Up (tent)'
    ],
    on: ['ちょう'],
    kun: ['は.る', '-は.り', '-ば.り'],
    jlpt: 1,
    quizAnswers: ['Lengthen', 'Disgrace', 'Mainly', 'Proceed'],
    similars: [
      {
        kanji: '帳',
        meaning: 'notebook'
      },
      {
        kanji: '長',
        meaning: 'long'
      },
      {
        kanji: '脹',
        meaning: 'dilate'
      },
      {
        kanji: '集',
        meaning: 'gather'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      },
      {
        kanji: '歓',
        meaning: 'delight'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '漢',
        meaning: 'Sino-'
      },
      {
        kanji: '政',
        meaning: 'politics'
      },
      {
        kanji: '振',
        meaning: 'shake'
      }
    ]
  },
  {
    kanjiName: '沢',
    strokes: 7,
    grade: 8,
    freq: 296,
    meanings: ['Swamp', 'Marsh', 'Brilliance', 'Grace'],
    on: ['たく'],
    kun: ['さわ', 'うるお.い', 'うるお.す', 'つや'],
    jlpt: 1,
    quizAnswers: ['Drop', 'A Helping', 'Swamp', 'Nightfall'],
    similars: [
      {
        kanji: '決',
        meaning: 'decide'
      },
      {
        kanji: '泥',
        meaning: 'mud'
      },
      {
        kanji: '快',
        meaning: 'cheerful'
      },
      {
        kanji: '択',
        meaning: 'choose'
      },
      {
        kanji: '涙',
        meaning: 'tears'
      },
      {
        kanji: '泳',
        meaning: 'swim'
      },
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '況',
        meaning: 'condition'
      },
      {
        kanji: '尺',
        meaning: 'shaku'
      },
      {
        kanji: '沈',
        meaning: 'sink'
      }
    ]
  },
  {
    kanjiName: '施',
    strokes: 9,
    grade: 8,
    freq: 323,
    meanings: ['Give', 'Bestow', 'Perform', 'Alms'],
    on: ['し', 'せ'],
    kun: ['ほどこ.す'],
    jlpt: 1,
    quizAnswers: ['Give', 'Warn', 'Capital', 'Reign'],
    similars: [
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '匠',
        meaning: 'artisan'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '刻',
        meaning: 'engrave'
      },
      {
        kanji: '旋',
        meaning: 'rotation'
      },
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '遊',
        meaning: 'play'
      },
      {
        kanji: '廃',
        meaning: 'abolish'
      }
    ]
  },
  {
    kanjiName: '俳',
    strokes: 10,
    grade: 6,
    freq: 1137,
    meanings: ['Haiku', 'Actor'],
    on: ['はい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Scatter', 'Learn', 'Tablet', 'Haiku'],
    similars: [
      {
        kanji: '非',
        meaning: 'un-'
      },
      {
        kanji: '排',
        meaning: 'repudiate'
      },
      {
        kanji: '扉',
        meaning: 'front door'
      },
      {
        kanji: '罪',
        meaning: 'guilt'
      },
      {
        kanji: '作',
        meaning: 'make'
      },
      {
        kanji: '悲',
        meaning: 'grieve'
      },
      {
        kanji: '俗',
        meaning: 'vulgar'
      },
      {
        kanji: '勧',
        meaning: 'persuade'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      }
    ]
  },
  {
    kanjiName: '秀',
    strokes: 7,
    grade: 8,
    freq: 848,
    meanings: ['Excel', 'Excellence', 'Beauty', 'Surpass'],
    on: ['しゅう'],
    kun: ['ひい.でる'],
    jlpt: 1,
    quizAnswers: ['Excel', 'Convenience', 'Experiment', 'Rank'],
    similars: [
      {
        kanji: '委',
        meaning: 'committee'
      },
      {
        kanji: '透',
        meaning: 'transparent'
      },
      {
        kanji: '物',
        meaning: 'thing'
      },
      {
        kanji: '牧',
        meaning: 'breed'
      },
      {
        kanji: '季',
        meaning: 'seasons'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '本',
        meaning: 'book'
      },
      {
        kanji: '机',
        meaning: 'desk'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '未',
        meaning: 'un-'
      }
    ]
  },
  {
    kanjiName: '製',
    strokes: 14,
    grade: 5,
    freq: 488,
    meanings: ['Made In...', 'Manufacture'],
    on: ['せい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Rod', 'Genius', 'Made In...', 'Counter For Birds, Rabbits'],
    similars: [
      {
        kanji: '裂',
        meaning: 'split'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '制',
        meaning: 'system'
      },
      {
        kanji: '袋',
        meaning: 'sack'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '乗',
        meaning: 'ride'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '壊',
        meaning: 'demolition'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      }
    ]
  },
  {
    kanjiName: '狭',
    strokes: 9,
    grade: 8,
    freq: 1346,
    meanings: ['Cramped', 'Narrow', 'Contract', 'Tight'],
    on: ['きょう', 'こう'],
    kun: ['せま.い', 'せば.める', 'せば.まる', 'さ'],
    jlpt: 1,
    quizAnswers: ['Adore', 'Cramped', 'Unfold', 'Volume'],
    similars: [
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '笑',
        meaning: 'laugh'
      },
      {
        kanji: '従',
        meaning: 'accompany'
      },
      {
        kanji: '奥',
        meaning: 'heart'
      },
      {
        kanji: '僕',
        meaning: 'me'
      },
      {
        kanji: '炎',
        meaning: 'inflammation'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      }
    ]
  },
  {
    kanjiName: '載',
    strokes: 13,
    grade: 8,
    freq: 825,
    meanings: ['Ride', 'Board', 'Get On', 'Place', 'Spread', '10**44', 'Record', 'Publish'],
    on: ['さい'],
    kun: ['の.せる', 'の.る'],
    jlpt: 1,
    quizAnswers: ['Male', 'Ride', 'Top Of Head', 'Mislead'],
    similars: [
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '堤',
        meaning: 'dike'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      }
    ]
  },
  {
    kanjiName: '視',
    strokes: 11,
    grade: 6,
    freq: 362,
    meanings: ['Inspection', 'Regard As', 'See', 'Look At'],
    on: ['し'],
    kun: ['み.る'],
    jlpt: 1,
    quizAnswers: ['Squat', 'Boundary', 'Inspection', 'Resign'],
    similars: [
      {
        kanji: '褐',
        meaning: 'brown'
      },
      {
        kanji: '覚',
        meaning: 'memorize'
      },
      {
        kanji: '神',
        meaning: 'gods'
      },
      {
        kanji: '裸',
        meaning: 'naked'
      },
      {
        kanji: '見',
        meaning: 'see'
      },
      {
        kanji: '児',
        meaning: 'newborn babe'
      },
      {
        kanji: '祝',
        meaning: 'celebrate'
      },
      {
        kanji: '負',
        meaning: 'defeat'
      },
      {
        kanji: '規',
        meaning: 'standard'
      },
      {
        kanji: '現',
        meaning: 'present'
      }
    ]
  },
  {
    kanjiName: '環',
    strokes: 17,
    grade: 8,
    freq: 409,
    meanings: ['Ring', 'Circle', 'Link', 'Wheel'],
    on: ['かん'],
    kun: ['わ'],
    jlpt: 1,
    quizAnswers: ['Sea', 'Ring', 'Night', 'Spend'],
    similars: [
      {
        kanji: '堤',
        meaning: 'dike'
      },
      {
        kanji: '壊',
        meaning: 'demolition'
      },
      {
        kanji: '載',
        meaning: 'ride'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '敢',
        meaning: 'daring'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '敵',
        meaning: 'enemy'
      },
      {
        kanji: '獣',
        meaning: 'animal'
      }
    ]
  },
  {
    kanjiName: '展',
    strokes: 10,
    grade: 6,
    freq: 352,
    meanings: ['Unfold', 'Expand'],
    on: ['てん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Unfold', 'Item', 'Chemical', 'Non-'],
    similars: [
      {
        kanji: '殿',
        meaning: 'Mr.'
      },
      {
        kanji: '廷',
        meaning: 'courts'
      },
      {
        kanji: '尿',
        meaning: 'urine'
      },
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      },
      {
        kanji: '長',
        meaning: 'long'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '屋',
        meaning: 'roof'
      },
      {
        kanji: '居',
        meaning: 'reside'
      },
      {
        kanji: '先',
        meaning: 'before'
      }
    ]
  },
  {
    kanjiName: '株',
    strokes: 10,
    grade: 6,
    freq: 432,
    meanings: ['Stocks', 'Stump', 'Shares', 'Stock', 'Counter For Small Plants'],
    on: ['しゅ'],
    kun: ['かぶ'],
    jlpt: 1,
    quizAnswers: ['Conform', 'Stocks', 'Breed', 'Store'],
    similars: [
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '検',
        meaning: 'examination'
      },
      {
        kanji: '様',
        meaning: 'Esq.'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '桟',
        meaning: 'scaffold'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      }
    ]
  },
  {
    kanjiName: '影',
    strokes: 15,
    grade: 8,
    freq: 464,
    meanings: ['Shadow', 'Silhouette', 'Phantom'],
    on: ['えい'],
    kun: ['かげ'],
    jlpt: 1,
    quizAnswers: ['Accident', 'Shadow', 'Rent', 'About'],
    similars: [
      {
        kanji: '景',
        meaning: 'scenery'
      },
      {
        kanji: '膨',
        meaning: 'swell'
      },
      {
        kanji: '園',
        meaning: 'park'
      },
      {
        kanji: '彫',
        meaning: 'carve'
      },
      {
        kanji: '豊',
        meaning: 'bountiful'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '涼',
        meaning: 'refreshing'
      },
      {
        kanji: '就',
        meaning: 'concerning'
      },
      {
        kanji: '照',
        meaning: 'illuminate'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      }
    ]
  },
  {
    kanjiName: '響',
    strokes: 20,
    grade: 8,
    freq: 502,
    meanings: ['Echo', 'Sound', 'Resound', 'Ring', 'Vibrate'],
    on: ['きょう'],
    kun: ['ひび.く'],
    jlpt: 1,
    quizAnswers: ['Echo', 'Wait', 'Relationship', 'Young Of Animals'],
    similars: [
      {
        kanji: '郷',
        meaning: 'home town'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      },
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '縮',
        meaning: 'shrink'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '織',
        meaning: 'weave'
      },
      {
        kanji: '職',
        meaning: 'post'
      },
      {
        kanji: '賠',
        meaning: 'compensation'
      },
      {
        kanji: '滝',
        meaning: 'waterfall'
      },
      {
        kanji: '普',
        meaning: 'universal'
      }
    ]
  },
  {
    kanjiName: '票',
    strokes: 11,
    grade: 4,
    freq: 489,
    meanings: ['Ballot', 'Label', 'Ticket', 'Sign'],
    on: ['ひょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Ballot', 'Emulate', 'Forecasting', 'Shoes'],
    similars: [
      {
        kanji: '漂',
        meaning: 'drift'
      },
      {
        kanji: '標',
        meaning: 'signpost'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '桟',
        meaning: 'scaffold'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '崇',
        meaning: 'adore'
      },
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '某',
        meaning: 'so-and-so'
      }
    ]
  },
  {
    kanjiName: '訴',
    strokes: 12,
    grade: 8,
    freq: 427,
    meanings: ['Accusation', 'Sue', 'Complain Of Pain', 'Appeal To'],
    on: ['そ'],
    kun: ['うった.える'],
    jlpt: 1,
    quizAnswers: ['Sun', 'Form', 'Accusation', 'Reduce'],
    similars: [
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '訟',
        meaning: 'sue'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '詳',
        meaning: 'detailed'
      }
    ]
  },
  {
    kanjiName: '訟',
    strokes: 11,
    grade: 8,
    freq: 1061,
    meanings: ['Sue', 'Accuse'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Sue', 'Many', 'Rebuke', 'Dilute (acid)'],
    similars: [
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '設',
        meaning: 'establishment'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '誠',
        meaning: 'sincerity'
      },
      {
        kanji: '誇',
        meaning: 'boast'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      }
    ]
  },
  {
    kanjiName: '逮',
    strokes: 11,
    grade: 8,
    freq: 766,
    meanings: ['Apprehend', 'Chase'],
    on: ['たい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Apprehend', 'Suck', 'Form', 'Like Something'],
    similars: [
      {
        kanji: '迭',
        meaning: 'transfer'
      },
      {
        kanji: '途',
        meaning: 'route'
      },
      {
        kanji: '迷',
        meaning: 'astray'
      },
      {
        kanji: '逐',
        meaning: 'pursue'
      },
      {
        kanji: '送',
        meaning: 'escort'
      },
      {
        kanji: '速',
        meaning: 'quick'
      },
      {
        kanji: '求',
        meaning: 'request'
      },
      {
        kanji: '遂',
        meaning: 'consummate'
      },
      {
        kanji: '選',
        meaning: 'elect'
      },
      {
        kanji: '遠',
        meaning: 'distant'
      }
    ]
  },
  {
    kanjiName: '模',
    strokes: 14,
    grade: 6,
    freq: 668,
    meanings: ['Imitation', 'Copy', 'Mock'],
    on: ['も', 'ぼ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Genius', 'Boundary', 'Imitation', 'The Government'],
    similars: [
      {
        kanji: '棋',
        meaning: 'chess piece'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '植',
        meaning: 'plant'
      },
      {
        kanji: '膜',
        meaning: 'membrane'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '積',
        meaning: 'volume'
      },
      {
        kanji: '横',
        meaning: 'sideways'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '賛',
        meaning: 'approve'
      }
    ]
  },
  {
    kanjiName: '鮮',
    strokes: 17,
    grade: 8,
    freq: 355,
    meanings: ['Fresh', 'Vivid', 'Clear', 'Brilliant', 'Korea'],
    on: ['せん'],
    kun: ['あざ.やか'],
    jlpt: 1,
    quizAnswers: ['Sound', 'Office', 'Fresh', 'Width'],
    similars: [
      {
        kanji: '魚',
        meaning: 'fish'
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      },
      {
        kanji: '鯨',
        meaning: 'whale'
      },
      {
        kanji: '解',
        meaning: 'unravel'
      },
      {
        kanji: '塁',
        meaning: 'bases'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '瞬',
        meaning: 'wink'
      },
      {
        kanji: '賠',
        meaning: 'compensation'
      },
      {
        kanji: '魅',
        meaning: 'fascination'
      },
      {
        kanji: '楽',
        meaning: 'music'
      }
    ]
  },
  {
    kanjiName: '属',
    strokes: 12,
    grade: 5,
    freq: 912,
    meanings: ['Belong', 'Genus', 'Subordinate Official', 'Affiliated'],
    on: ['ぞく', 'しょく'],
    kun: ['さかん', 'つく', 'やから'],
    jlpt: 1,
    quizAnswers: ['Belong', 'Line', 'Defect', 'Nine'],
    similars: [
      {
        kanji: '嘱',
        meaning: 'entrust'
      },
      {
        kanji: '風',
        meaning: 'wind'
      },
      {
        kanji: '蚕',
        meaning: 'silkworm'
      },
      {
        kanji: '独',
        meaning: 'single'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '偶',
        meaning: 'accidentally'
      },
      {
        kanji: '蛮',
        meaning: 'barbarian'
      },
      {
        kanji: '局',
        meaning: 'bureau'
      },
      {
        kanji: '強',
        meaning: 'strong'
      },
      {
        kanji: '虫',
        meaning: 'insect'
      }
    ]
  },
  {
    kanjiName: '肥',
    strokes: 8,
    grade: 5,
    freq: 1469,
    meanings: ['Fertilizer', 'Get Fat', 'Fertile', 'Manure', 'Pamper'],
    on: ['ひ'],
    kun: ['こ.える', 'こえ', 'こ.やす', 'こ.やし', 'ふと.る'],
    jlpt: 1,
    quizAnswers: ['Fertilizer', 'Be Attached To', 'And So Forth', 'Couple'],
    similars: [
      {
        kanji: '色',
        meaning: 'color'
      },
      {
        kanji: '肢',
        meaning: 'limb'
      },
      {
        kanji: '胆',
        meaning: 'gall bladder'
      },
      {
        kanji: '胞',
        meaning: 'placenta'
      },
      {
        kanji: '用',
        meaning: 'utilize'
      },
      {
        kanji: '月',
        meaning: 'month'
      },
      {
        kanji: '脂',
        meaning: 'fat'
      },
      {
        kanji: '肌',
        meaning: 'texture'
      },
      {
        kanji: '服',
        meaning: 'clothing'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      }
    ]
  },
  {
    kanjiName: '絞',
    strokes: 12,
    grade: 8,
    freq: 1288,
    meanings: ['Strangle', 'Constrict', 'Wring'],
    on: ['こう'],
    kun: ['しぼ.る', 'し.める', 'し.まる'],
    jlpt: 1,
    quizAnswers: ['Ring', 'By Means Of', 'Lie Down', 'Strangle'],
    similars: [
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '統',
        meaning: 'overall'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '緑',
        meaning: 'green'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '締',
        meaning: 'tighten'
      },
      {
        kanji: '縁',
        meaning: 'affinity'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '級',
        meaning: 'class'
      }
    ]
  },
  {
    kanjiName: '輩',
    strokes: 15,
    grade: 8,
    freq: 1365,
    meanings: ['Comrade', 'Fellow', 'People', 'Companions'],
    on: ['はい'],
    kun: ['-ばら', 'やから', 'やかい', 'ともがら'],
    jlpt: 1,
    quizAnswers: ['Next', 'Result In', 'Gone', 'Comrade'],
    similars: [
      {
        kanji: '悼',
        meaning: 'lament'
      },
      {
        kanji: '非',
        meaning: 'un-'
      },
      {
        kanji: '揮',
        meaning: 'brandish'
      },
      {
        kanji: '悲',
        meaning: 'grieve'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '観',
        meaning: 'outlook'
      },
      {
        kanji: '硬',
        meaning: 'stiff'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      }
    ]
  },
  {
    kanjiName: '隠',
    strokes: 14,
    grade: 8,
    freq: 1089,
    meanings: ['Conceal', 'Hide', 'Cover'],
    on: ['いん', 'おん'],
    kun: ['かく.す', 'かく.し', 'かく.れる', 'かか.す', 'よ.る'],
    jlpt: 1,
    quizAnswers: ['Acreage', 'Conceal', 'Weary', 'Order'],
    similars: [
      {
        kanji: '穏',
        meaning: 'calm'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '秘',
        meaning: 'secret'
      },
      {
        kanji: '急',
        meaning: 'hurry'
      },
      {
        kanji: '偽',
        meaning: 'falsehood'
      },
      {
        kanji: '総',
        meaning: 'general'
      },
      {
        kanji: '浸',
        meaning: 'immersed'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '窯',
        meaning: 'kiln'
      }
    ]
  },
  {
    kanjiName: '授',
    strokes: 11,
    grade: 5,
    freq: 535,
    meanings: ['Impart', 'Instruct', 'Grant', 'Confer'],
    on: ['じゅ'],
    kun: ['さず.ける', 'さず.かる'],
    jlpt: 1,
    quizAnswers: ['Dissolve', 'Green', 'Relationship', 'Impart'],
    similars: [
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '受',
        meaning: 'accept'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '揺',
        meaning: 'swing'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '披',
        meaning: 'expose'
      },
      {
        kanji: '投',
        meaning: 'throw'
      }
    ]
  },
  {
    kanjiName: '創',
    strokes: 12,
    grade: 6,
    freq: 741,
    meanings: ['Genesis', 'Wound', 'Injury', 'Hurt', 'Start', 'Originate'],
    on: ['そう', 'しょう'],
    kun: ['つく.る', 'はじ.める', 'きず', 'けず.しける'],
    jlpt: 1,
    quizAnswers: ['World', 'Mr.', 'Elapse', 'Genesis'],
    similars: [
      {
        kanji: '倉',
        meaning: 'godown'
      },
      {
        kanji: '奇',
        meaning: 'strange'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '脱',
        meaning: 'undress'
      },
      {
        kanji: '館',
        meaning: 'building'
      },
      {
        kanji: '剣',
        meaning: 'sabre'
      },
      {
        kanji: '何',
        meaning: 'what'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '飾',
        meaning: 'decorate'
      }
    ]
  },
  {
    kanjiName: '往',
    strokes: 8,
    grade: 5,
    freq: 1421,
    meanings: ['Journey', 'Travel', 'Chase Away', 'Let Go', 'Going', 'Before', 'Formerly'],
    on: ['おう'],
    kun: ['い.く', 'いにしえ', 'さき.に', 'ゆ.く'],
    jlpt: 1,
    quizAnswers: ['Protect', 'Journey', 'Perverse', 'Clumsy'],
    similars: [
      {
        kanji: '住',
        meaning: 'dwell'
      },
      {
        kanji: '待',
        meaning: 'wait'
      },
      {
        kanji: '律',
        meaning: 'rhythm'
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice'
      },
      {
        kanji: '柱',
        meaning: 'pillar'
      },
      {
        kanji: '主',
        meaning: 'lord'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '行',
        meaning: 'going'
      },
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '狂',
        meaning: 'lunatic'
      }
    ]
  },
  {
    kanjiName: '較',
    strokes: 13,
    grade: 8,
    freq: 1172,
    meanings: ['Contrast', 'Compare'],
    on: ['かく', 'こう'],
    kun: ['くら.べる'],
    jlpt: 1,
    quizAnswers: ['Shirk', 'Contrast', 'Enshrine', 'Tone'],
    similars: [
      {
        kanji: '軟',
        meaning: 'soft'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      },
      {
        kanji: '敷',
        meaning: 'spread'
      },
      {
        kanji: '是',
        meaning: 'just so'
      },
      {
        kanji: '専',
        meaning: 'specialty'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '某',
        meaning: 'so-and-so'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '連',
        meaning: 'take along'
      }
    ]
  },
  {
    kanjiName: '鉛',
    strokes: 13,
    grade: 8,
    freq: 1710,
    meanings: ['Lead'],
    on: ['えん'],
    kun: ['なまり'],
    jlpt: 1,
    quizAnswers: ['Adventurous', 'Class', 'Lead', 'Mistake'],
    similars: [
      {
        kanji: '銘',
        meaning: 'inscription'
      },
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '鈴',
        meaning: 'small bell'
      },
      {
        kanji: '鈍',
        meaning: 'dull'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      }
    ]
  },
  {
    kanjiName: '故',
    strokes: 9,
    grade: 5,
    freq: 612,
    meanings: [
      'Happenstance',
      'Especially',
      'Intentionally',
      'Reason',
      'Cause',
      'Circumstances',
      'The Late',
      'Therefore',
      'Consequently'
    ],
    on: ['こ'],
    kun: ['ゆえ', 'ふる.い', 'もと'],
    jlpt: 1,
    quizAnswers: ['Idea', 'Sand', 'Happenstance', 'Decree'],
    similars: [
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '吹',
        meaning: 'blow'
      },
      {
        kanji: '政',
        meaning: 'politics'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '克',
        meaning: 'overcome'
      }
    ]
  },
  {
    kanjiName: '障',
    strokes: 14,
    grade: 6,
    freq: 742,
    meanings: ['Hinder', 'Hurt', 'Harm'],
    on: ['しょう'],
    kun: ['さわ.る'],
    jlpt: 1,
    quizAnswers: ['Sweet', 'Wife', 'Presents', 'Hinder'],
    similars: [
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      },
      {
        kanji: '禅',
        meaning: 'Zen'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '境',
        meaning: 'boundary'
      },
      {
        kanji: '滝',
        meaning: 'waterfall'
      },
      {
        kanji: '陪',
        meaning: 'obeisance'
      }
    ]
  },
  {
    kanjiName: '従',
    strokes: 10,
    grade: 6,
    freq: 601,
    meanings: [
      'Accompany',
      'Obey',
      'Submit To',
      'Comply',
      'Follow',
      'Secondary',
      'Incidental',
      'Subordinate'
    ],
    on: ['じゅう', 'しょう', 'じゅ'],
    kun: ['したが.う', 'したが.える', 'より'],
    jlpt: 1,
    quizAnswers: ['Accompany', 'Middle', 'Assets', 'Paint'],
    similars: [
      {
        kanji: '徒',
        meaning: 'on foot'
      },
      {
        kanji: '縦',
        meaning: 'vertical'
      },
      {
        kanji: '往',
        meaning: 'journey'
      },
      {
        kanji: '定',
        meaning: 'determine'
      },
      {
        kanji: '征',
        meaning: 'subjugate'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '彼',
        meaning: 'he'
      },
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '促',
        meaning: 'stimulate'
      }
    ]
  },
  {
    kanjiName: '我',
    strokes: 7,
    grade: 6,
    freq: 829,
    meanings: ['Ego', 'I', 'Selfish', 'Our', 'Oneself'],
    on: ['が'],
    kun: ['われ', 'わ', 'わ.が-', 'わが-'],
    jlpt: 1,
    quizAnswers: ['Fragment', 'Guard', 'Ego', 'Scatter'],
    similars: [
      {
        kanji: '成',
        meaning: 'turn into'
      },
      {
        kanji: '抄',
        meaning: 'extract'
      },
      {
        kanji: '払',
        meaning: 'pay'
      },
      {
        kanji: '兆',
        meaning: 'portent'
      },
      {
        kanji: '戒',
        meaning: 'commandment'
      },
      {
        kanji: '示',
        meaning: 'show'
      },
      {
        kanji: '伐',
        meaning: 'fell'
      },
      {
        kanji: '威',
        meaning: 'intimidate'
      },
      {
        kanji: '義',
        meaning: 'righteousness'
      },
      {
        kanji: '残',
        meaning: 'remainder'
      }
    ]
  },
  {
    kanjiName: '激',
    strokes: 16,
    grade: 6,
    freq: 560,
    meanings: ['Violent', 'Get Excited', 'Enraged', 'Chafe', 'Incite'],
    on: ['げき'],
    kun: ['はげ.しい'],
    jlpt: 1,
    quizAnswers: ['Violent', 'Sell', 'Current', 'Stage'],
    similars: [
      {
        kanji: '漸',
        meaning: 'steadily'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '敷',
        meaning: 'spread'
      },
      {
        kanji: '獣',
        meaning: 'animal'
      },
      {
        kanji: '戦',
        meaning: 'war'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '裏',
        meaning: 'back'
      }
    ]
  },
  {
    kanjiName: '励',
    strokes: 7,
    grade: 8,
    freq: 1254,
    meanings: ['Encourage', 'Be Diligent', 'Inspire'],
    on: ['れい'],
    kun: ['はげ.む', 'はげ.ます'],
    jlpt: 1,
    quizAnswers: ['Exalted', 'Be Informed', 'Encourage', 'Divide'],
    similars: [
      {
        kanji: '券',
        meaning: 'ticket'
      },
      {
        kanji: '医',
        meaning: 'doctor'
      },
      {
        kanji: '劣',
        meaning: 'inferiority'
      },
      {
        kanji: '効',
        meaning: 'merit'
      },
      {
        kanji: '欧',
        meaning: 'Europe'
      },
      {
        kanji: '物',
        meaning: 'thing'
      },
      {
        kanji: '粉',
        meaning: 'flour'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '協',
        meaning: 'co-'
      },
      {
        kanji: '勢',
        meaning: 'forces'
      }
    ]
  },
  {
    kanjiName: '討',
    strokes: 10,
    grade: 6,
    freq: 528,
    meanings: ['Chastise', 'Attack', 'Defeat', 'Destroy', 'Conquer'],
    on: ['とう'],
    kun: ['う.つ'],
    jlpt: 1,
    quizAnswers: ['Chastise', 'Stop-over', 'Rice', 'Enclosure'],
    similars: [
      {
        kanji: '訂',
        meaning: 'revise'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '訟',
        meaning: 'sue'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '言',
        meaning: 'say'
      },
      {
        kanji: '託',
        meaning: 'consign'
      }
    ]
  },
  {
    kanjiName: '徴',
    strokes: 14,
    grade: 8,
    freq: 850,
    meanings: ['Indications', 'Sign', 'Omen', 'Symptom', 'Collect', 'Seek', 'Refer To', 'Question'],
    on: ['ちょう', 'ち'],
    kun: ['しるし'],
    jlpt: 1,
    quizAnswers: ['Indications', 'Double', 'Generation', 'Seal'],
    similars: [
      {
        kanji: '微',
        meaning: 'delicate'
      },
      {
        kanji: '懲',
        meaning: 'penal'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '徒',
        meaning: 'on foot'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '徹',
        meaning: 'penetrate'
      },
      {
        kanji: '衛',
        meaning: 'defense'
      },
      {
        kanji: '政',
        meaning: 'politics'
      }
    ]
  },
  {
    kanjiName: '怪',
    strokes: 8,
    grade: 8,
    freq: 1634,
    meanings: ['Suspicious', 'Mystery', 'Apparition'],
    on: ['かい', 'け'],
    kun: ['あや.しい', 'あや.しむ'],
    jlpt: 1,
    quizAnswers: ['Suspicious', 'Hold', 'Injustice', 'All'],
    similars: [
      {
        kanji: '径',
        meaning: 'diameter'
      },
      {
        kanji: '経',
        meaning: 'sutra'
      },
      {
        kanji: '社',
        meaning: 'company'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '茎',
        meaning: 'stalk'
      },
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '悔',
        meaning: 'repent'
      },
      {
        kanji: '隆',
        meaning: 'hump'
      }
    ]
  },
  {
    kanjiName: '獣',
    strokes: 16,
    grade: 8,
    freq: 1714,
    meanings: ['Animal', 'Beast'],
    on: ['じゅう'],
    kun: ['けもの', 'けだもの'],
    jlpt: 1,
    quizAnswers: ['Leather', 'One Of A Pair', 'Air', 'Animal'],
    similars: [
      {
        kanji: '戦',
        meaning: 'war'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '豊',
        meaning: 'bountiful'
      },
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '獄',
        meaning: 'prison'
      },
      {
        kanji: '景',
        meaning: 'scenery'
      },
      {
        kanji: '濁',
        meaning: 'voiced'
      },
      {
        kanji: '濃',
        meaning: 'concentrated'
      },
      {
        kanji: '激',
        meaning: 'violent'
      },
      {
        kanji: '涼',
        meaning: 'refreshing'
      }
    ]
  },
  {
    kanjiName: '振',
    strokes: 10,
    grade: 8,
    freq: 614,
    meanings: ['Shake', 'Wave', 'Wag', 'Swing'],
    on: ['しん'],
    kun: ['ふ.る', 'ぶ.る', 'ふ.り', '-ぶ.り', 'ふ.るう'],
    jlpt: 1,
    quizAnswers: ['Oppress', 'Shake', 'Example', 'Rule'],
    similars: [
      {
        kanji: '娠',
        meaning: 'with child'
      },
      {
        kanji: '扶',
        meaning: 'aid'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '抹',
        meaning: 'rub'
      },
      {
        kanji: '探',
        meaning: 'grope'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '拷',
        meaning: 'torture'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '持',
        meaning: 'hold'
      },
      {
        kanji: '撲',
        meaning: 'slap'
      }
    ]
  },
  {
    kanjiName: '豚',
    strokes: 11,
    grade: 8,
    freq: 1864,
    meanings: ['Pork', 'Pig'],
    on: ['とん'],
    kun: ['ぶた'],
    jlpt: 1,
    quizAnswers: ['Invite', 'Cotton', 'Pork', 'Function'],
    similars: [
      {
        kanji: '脈',
        meaning: 'vein'
      },
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '嫁',
        meaning: 'marry into'
      },
      {
        kanji: '象',
        meaning: 'elephant'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '肢',
        meaning: 'limb'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      }
    ]
  },
  {
    kanjiName: '独',
    strokes: 9,
    grade: 5,
    freq: 365,
    meanings: ['Single', 'Alone', 'Spontaneously', 'Germany'],
    on: ['どく', 'とく'],
    kun: ['ひと.り'],
    jlpt: 1,
    quizAnswers: ['Dealer', 'Single', 'Set Free', 'Counter For Occurrences'],
    similars: [
      {
        kanji: '風',
        meaning: 'wind'
      },
      {
        kanji: '蚕',
        meaning: 'silkworm'
      },
      {
        kanji: '虫',
        meaning: 'insect'
      },
      {
        kanji: '蛮',
        meaning: 'barbarian'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '触',
        meaning: 'contact'
      },
      {
        kanji: '属',
        meaning: 'belong'
      },
      {
        kanji: '強',
        meaning: 'strong'
      },
      {
        kanji: '獄',
        meaning: 'prison'
      },
      {
        kanji: '程',
        meaning: 'extent'
      }
    ]
  },
  {
    kanjiName: '屈',
    strokes: 8,
    grade: 8,
    freq: 1434,
    meanings: ['Yield', 'Bend', 'Flinch', 'Submit'],
    on: ['くつ'],
    kun: ['かが.む', 'かが.める'],
    jlpt: 1,
    quizAnswers: ['Heavy', 'Yield', 'Rascal', 'Chamber'],
    similars: [
      {
        kanji: '堀',
        meaning: 'ditch'
      },
      {
        kanji: '掘',
        meaning: 'dig'
      },
      {
        kanji: '出',
        meaning: 'exit'
      },
      {
        kanji: '拙',
        meaning: 'bungling'
      },
      {
        kanji: '刷',
        meaning: 'printing'
      },
      {
        kanji: '局',
        meaning: 'bureau'
      },
      {
        kanji: '居',
        meaning: 'reside'
      },
      {
        kanji: '展',
        meaning: 'unfold'
      },
      {
        kanji: '席',
        meaning: 'seat'
      },
      {
        kanji: '剛',
        meaning: 'sturdy'
      }
    ]
  },
  {
    kanjiName: '暇',
    strokes: 13,
    grade: 8,
    freq: 1386,
    meanings: ['Spare Time', 'Rest', 'Leisure', 'Time', 'Leave Of Absence'],
    on: ['か'],
    kun: ['ひま', 'いとま'],
    jlpt: 1,
    quizAnswers: ['Spare Time', 'Bloom', 'Completed Poem', 'Withdraw'],
    similars: [
      {
        kanji: '昨',
        meaning: 'yesterday'
      },
      {
        kanji: '脹',
        meaning: 'dilate'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      },
      {
        kanji: '映',
        meaning: 'reflect'
      },
      {
        kanji: '最',
        meaning: 'utmost'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '昭',
        meaning: 'shining'
      },
      {
        kanji: '眠',
        meaning: 'sleep'
      },
      {
        kanji: '暖',
        meaning: 'warmth'
      },
      {
        kanji: '暁',
        meaning: 'daybreak'
      }
    ]
  },
  {
    kanjiName: '織',
    strokes: 18,
    grade: 5,
    freq: 608,
    meanings: ['Weave', 'Fabric'],
    on: ['しょく', 'しき'],
    kun: ['お.る', 'お.り', 'おり', '-おり', '-お.り'],
    jlpt: 1,
    quizAnswers: ['Govt', 'Weave', 'Previous', 'Main Point'],
    similars: [
      {
        kanji: '績',
        meaning: 'exploits'
      },
      {
        kanji: '識',
        meaning: 'discriminating'
      },
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '職',
        meaning: 'post'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      },
      {
        kanji: '線',
        meaning: 'line'
      },
      {
        kanji: '縮',
        meaning: 'shrink'
      },
      {
        kanji: '憶',
        meaning: 'recollection'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      }
    ]
  },
  {
    kanjiName: '惑',
    strokes: 12,
    grade: 8,
    freq: 777,
    meanings: ['Beguile', 'Delusion', 'Perplexity'],
    on: ['わく'],
    kun: ['まど.う'],
    jlpt: 1,
    quizAnswers: ['Refuse', 'Beguile', 'Inevitable', 'Middle'],
    similars: [
      {
        kanji: '感',
        meaning: 'emotion'
      },
      {
        kanji: '認',
        meaning: 'acknowledge'
      },
      {
        kanji: '憾',
        meaning: 'remorse'
      },
      {
        kanji: '患',
        meaning: 'afflicted'
      },
      {
        kanji: '恐',
        meaning: 'fear'
      },
      {
        kanji: '忠',
        meaning: 'loyalty'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '熟',
        meaning: 'mellow'
      },
      {
        kanji: '誌',
        meaning: 'document'
      },
      {
        kanji: '就',
        meaning: 'concerning'
      }
    ]
  },
  {
    kanjiName: '誘',
    strokes: 14,
    grade: 8,
    freq: 993,
    meanings: ['Entice', 'Lead', 'Tempt', 'Invite', 'Ask', 'Call For', 'Seduce', 'Allure'],
    on: ['ゆう'],
    kun: ['さそ.う', 'いざな.う'],
    jlpt: 1,
    quizAnswers: ['Exclusive', 'Entice', 'How Long', 'Outside'],
    similars: [
      {
        kanji: '該',
        meaning: 'above-stated'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '誠',
        meaning: 'sincerity'
      },
      {
        kanji: '論',
        meaning: 'argument'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '訳',
        meaning: 'translate'
      },
      {
        kanji: '設',
        meaning: 'establishment'
      },
      {
        kanji: '訟',
        meaning: 'sue'
      }
    ]
  },
  {
    kanjiName: '就',
    strokes: 12,
    grade: 6,
    freq: 624,
    meanings: ['Concerning', 'Settle', 'Take Position', 'Depart', 'Study', 'Per'],
    on: ['しゅう', 'じゅ'],
    kun: ['つ.く', 'つ.ける'],
    jlpt: 1,
    quizAnswers: ['Concerning', 'Purity', 'Set Free', 'Borough'],
    similars: [
      {
        kanji: '京',
        meaning: 'capital'
      },
      {
        kanji: '砂',
        meaning: 'sand'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '鼓',
        meaning: 'drum'
      },
      {
        kanji: '感',
        meaning: 'emotion'
      },
      {
        kanji: '熟',
        meaning: 'mellow'
      },
      {
        kanji: '影',
        meaning: 'shadow'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      },
      {
        kanji: '点',
        meaning: 'spot'
      }
    ]
  },
  {
    kanjiName: '睡',
    strokes: 13,
    grade: 8,
    freq: 1739,
    meanings: ['Drowsy', 'Sleep', 'Die'],
    on: ['すい'],
    kun: ['ねむ.る', 'ねむ.い'],
    jlpt: 1,
    quizAnswers: ['Drowsy', 'Import', 'Official', 'Guilt'],
    similars: [
      {
        kanji: '購',
        meaning: 'subscription'
      },
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '賦',
        meaning: 'levy'
      },
      {
        kanji: '垂',
        meaning: 'droop'
      },
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '墨',
        meaning: 'black ink'
      },
      {
        kanji: '暁',
        meaning: 'daybreak'
      },
      {
        kanji: '財',
        meaning: 'property'
      },
      {
        kanji: '盟',
        meaning: 'alliance'
      },
      {
        kanji: '時',
        meaning: 'time'
      }
    ]
  },
  {
    kanjiName: '症',
    strokes: 10,
    grade: 8,
    freq: 1111,
    meanings: ['Symptoms', 'Illness'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Drink', 'One Of A Pair', 'Symptoms', '10**48'],
    similars: [
      {
        kanji: '痘',
        meaning: 'pox'
      },
      {
        kanji: '病',
        meaning: 'ill'
      },
      {
        kanji: '征',
        meaning: 'subjugate'
      },
      {
        kanji: '堂',
        meaning: 'public chamber'
      },
      {
        kanji: '定',
        meaning: 'determine'
      },
      {
        kanji: '壮',
        meaning: 'robust'
      },
      {
        kanji: '度',
        meaning: 'degrees'
      },
      {
        kanji: '祉',
        meaning: 'welfare'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '疫',
        meaning: 'epidemic'
      }
    ]
  },
  {
    kanjiName: '締',
    strokes: 15,
    grade: 8,
    freq: 797,
    meanings: ['Tighten', 'Tie', 'Shut', 'Lock', 'Fasten'],
    on: ['てい'],
    kun: ['し.まる', 'し.まり', 'し.める', '-し.め', '-じ.め'],
    jlpt: 1,
    quizAnswers: ['Announce', 'Snout', 'Tighten', 'Sound'],
    similars: [
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '綱',
        meaning: 'hawser'
      },
      {
        kanji: '統',
        meaning: 'overall'
      },
      {
        kanji: '帝',
        meaning: 'sovereign'
      },
      {
        kanji: '緯',
        meaning: 'horizontal'
      }
    ]
  },
  {
    kanjiName: '迫',
    strokes: 8,
    grade: 8,
    freq: 773,
    meanings: ['Urge', 'Force', 'Imminent', 'Spur On'],
    on: ['はく'],
    kun: ['せま.る'],
    jlpt: 1,
    quizAnswers: ['Urge', 'Route', 'Receive', 'Master'],
    similars: [
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '道',
        meaning: 'road-way'
      },
      {
        kanji: '逸',
        meaning: 'deviate'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '白',
        meaning: 'white'
      },
      {
        kanji: '的',
        meaning: "bull's eye"
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '運',
        meaning: 'carry'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      }
    ]
  },
  {
    kanjiName: '端',
    strokes: 14,
    grade: 8,
    freq: 960,
    meanings: ['Edge', 'Origin', 'End', 'Point', 'Border', 'Verge', 'Cape'],
    on: ['たん'],
    kun: ['はし', 'は', 'はた', '-ばた', 'はな'],
    jlpt: 1,
    quizAnswers: ['Edge', 'Transmit', 'Stature', 'Flower'],
    similars: [
      {
        kanji: '帝',
        meaning: 'sovereign'
      },
      {
        kanji: '席',
        meaning: 'seat'
      },
      {
        kanji: '姉',
        meaning: 'elder sister'
      },
      {
        kanji: '常',
        meaning: 'usual'
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '儒',
        meaning: 'Confucian'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '岩',
        meaning: 'boulder'
      },
      {
        kanji: '音',
        meaning: 'sound'
      }
    ]
  },
  {
    kanjiName: '健',
    strokes: 11,
    grade: 4,
    freq: 572,
    meanings: ['Healthy', 'Health', 'Strength', 'Persistence'],
    on: ['けん'],
    kun: ['すこ.やか'],
    jlpt: 1,
    quizAnswers: ['Class', 'Can', 'Shake', 'Healthy'],
    similars: [
      {
        kanji: '建',
        meaning: 'build'
      },
      {
        kanji: '律',
        meaning: 'rhythm'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '信',
        meaning: 'faith'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '廷',
        meaning: 'courts'
      },
      {
        kanji: '傑',
        meaning: 'greatness'
      },
      {
        kanji: '嫌',
        meaning: 'dislike'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      }
    ]
  },
  {
    kanjiName: '康',
    strokes: 11,
    grade: 4,
    freq: 760,
    meanings: ['Ease', 'Peace'],
    on: ['こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Act', 'Ease', 'Number', 'Home'],
    similars: [
      {
        kanji: '隷',
        meaning: 'slave'
      },
      {
        kanji: '緑',
        meaning: 'green'
      },
      {
        kanji: '録',
        meaning: 'record'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '球',
        meaning: 'ball'
      },
      {
        kanji: '庸',
        meaning: 'commonplace'
      },
      {
        kanji: '床',
        meaning: 'bed'
      },
      {
        kanji: '対',
        meaning: 'vis-a-vis'
      },
      {
        kanji: '唐',
        meaning: "T'ang"
      }
    ]
  },
  {
    kanjiName: '郎',
    strokes: 9,
    grade: 8,
    freq: 569,
    meanings: ['Son', 'Counter For Sons'],
    on: ['ろう', 'りょう'],
    kun: ['おとこ'],
    jlpt: 1,
    quizAnswers: ['Big Brother', 'Son', 'Railway Car', 'Counter For Pairs Of Footwear'],
    similars: [
      {
        kanji: '廊',
        meaning: 'corridor'
      },
      {
        kanji: '郷',
        meaning: 'home town'
      },
      {
        kanji: '即',
        meaning: 'instant'
      },
      {
        kanji: '朗',
        meaning: 'melodious'
      },
      {
        kanji: '良',
        meaning: 'good'
      },
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '飾',
        meaning: 'decorate'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '館',
        meaning: 'building'
      },
      {
        kanji: '飲',
        meaning: 'drink'
      }
    ]
  },
  {
    kanjiName: '稚',
    strokes: 13,
    grade: 8,
    freq: 1560,
    meanings: ['Immature', 'Young'],
    on: ['ち', 'じ'],
    kun: ['いとけない', 'おさない', 'おくて', 'おでる'],
    jlpt: 1,
    quizAnswers: ['Write', 'Angry', 'Overthrow', 'Immature'],
    similars: [
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '穫',
        meaning: 'harvest'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      }
    ]
  },
  {
    kanjiName: '博',
    strokes: 12,
    grade: 4,
    freq: 794,
    meanings: ['Dr.', 'Command', 'Esteem', 'Win Acclaim', 'Ph.d.', 'Exposition', 'Fair'],
    on: ['はく', 'ばく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Nose', 'Dr.', 'Behind', 'Counter For Houses'],
    similars: [
      {
        kanji: '専',
        meaning: 'specialty'
      },
      {
        kanji: '薄',
        meaning: 'dilute'
      },
      {
        kanji: '縛',
        meaning: 'truss'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '恵',
        meaning: 'favor'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '導',
        meaning: 'guidance'
      },
      {
        kanji: '理',
        meaning: 'logic'
      },
      {
        kanji: '得',
        meaning: 'gain'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      }
    ]
  },
  {
    kanjiName: '潔',
    strokes: 15,
    grade: 5,
    freq: 1595,
    meanings: ['Undefiled', 'Pure', 'Clean', 'Righteous', 'Gallant'],
    on: ['けつ'],
    kun: ['いさぎよ.い'],
    jlpt: 1,
    quizAnswers: ['Appearance', 'Store', 'Err', 'Undefiled'],
    similars: [
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '法',
        meaning: 'method'
      },
      {
        kanji: '滋',
        meaning: 'nourishing'
      },
      {
        kanji: '索',
        meaning: 'cord'
      },
      {
        kanji: '漂',
        meaning: 'drift'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '済',
        meaning: 'settle (debt'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '漆',
        meaning: 'lacquer'
      }
    ]
  },
  {
    kanjiName: '隊',
    strokes: 12,
    grade: 4,
    freq: 605,
    meanings: ['Regiment', 'Party', 'Company', 'Squad'],
    on: ['たい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Super-', 'Individual', 'Regiment', 'Beg'],
    similars: [
      {
        kanji: '墜',
        meaning: 'crash'
      },
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      },
      {
        kanji: '嫁',
        meaning: 'marry into'
      },
      {
        kanji: '縁',
        meaning: 'affinity'
      },
      {
        kanji: '稼',
        meaning: 'earnings'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      },
      {
        kanji: '象',
        meaning: 'elephant'
      },
      {
        kanji: '陵',
        meaning: 'mausoleum'
      }
    ]
  },
  {
    kanjiName: '修',
    strokes: 10,
    grade: 5,
    freq: 603,
    meanings: ['Discipline', 'Conduct Oneself Well', 'Study', 'Master'],
    on: ['しゅう', 'しゅ'],
    kun: ['おさ.める', 'おさ.まる'],
    jlpt: 1,
    quizAnswers: ['Unreeling Cocoons', 'Club', 'Discipline', 'Fall'],
    similars: [
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '彩',
        meaning: 'coloring'
      },
      {
        kanji: '惨',
        meaning: 'wretched'
      },
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '参',
        meaning: 'nonplussed'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      },
      {
        kanji: '稼',
        meaning: 'earnings'
      },
      {
        kanji: '弊',
        meaning: 'abuse'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      }
    ]
  },
  {
    kanjiName: '奇',
    strokes: 8,
    grade: 8,
    freq: 1367,
    meanings: ['Strange', 'Strangeness', 'Curiosity'],
    on: ['き'],
    kun: ['く.しき', 'あや.しい', 'くし', 'めずら.しい'],
    jlpt: 1,
    quizAnswers: ['Middle', 'Always', 'Strange', 'Association'],
    similars: [
      {
        kanji: '何',
        meaning: 'what'
      },
      {
        kanji: '崎',
        meaning: 'promontory'
      },
      {
        kanji: '寄',
        meaning: 'draw near'
      },
      {
        kanji: '荷',
        meaning: 'baggage'
      },
      {
        kanji: '枯',
        meaning: 'wither'
      },
      {
        kanji: '河',
        meaning: 'river'
      },
      {
        kanji: '合',
        meaning: 'fit'
      },
      {
        kanji: '吉',
        meaning: 'good luck'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '右',
        meaning: 'right'
      }
    ]
  },
  {
    kanjiName: '妙',
    strokes: 7,
    grade: 8,
    freq: 1122,
    meanings: [
      'Exquisite',
      'Strange',
      'Queer',
      'Mystery',
      'Miracle',
      'Excellent',
      'Delicate',
      'Charming'
    ],
    on: ['みょう', 'びょう'],
    kun: ['たえ'],
    jlpt: 1,
    quizAnswers: ['Surmise', 'Exquisite', 'Suppose', 'Uproar'],
    similars: [
      {
        kanji: '妨',
        meaning: 'disturb'
      },
      {
        kanji: '少',
        meaning: 'few'
      },
      {
        kanji: '抄',
        meaning: 'extract'
      },
      {
        kanji: '努',
        meaning: 'toil'
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)'
      },
      {
        kanji: '砂',
        meaning: 'sand'
      },
      {
        kanji: '娠',
        meaning: 'with child'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '歩',
        meaning: 'walk'
      },
      {
        kanji: '威',
        meaning: 'intimidate'
      }
    ]
  },
  {
    kanjiName: '麗',
    strokes: 19,
    grade: 8,
    freq: 1758,
    meanings: ['Lovely', 'Beautiful', 'Graceful', 'Resplendent'],
    on: ['れい'],
    kun: ['うるわ.しい', 'うら.らか'],
    jlpt: 1,
    quizAnswers: ['Worry', 'Someone', 'Lovely', 'Retreat'],
    similars: [
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '標',
        meaning: 'signpost'
      },
      {
        kanji: '譲',
        meaning: 'defer'
      },
      {
        kanji: '轄',
        meaning: 'control'
      },
      {
        kanji: '袋',
        meaning: 'sack'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '敷',
        meaning: 'spread'
      },
      {
        kanji: '壊',
        meaning: 'demolition'
      },
      {
        kanji: '横',
        meaning: 'sideways'
      },
      {
        kanji: '裂',
        meaning: 'split'
      }
    ]
  },
  {
    kanjiName: '微',
    strokes: 13,
    grade: 8,
    freq: 1108,
    meanings: ['Delicate', 'Minuteness', 'Insignificance'],
    on: ['び'],
    kun: ['かす.か'],
    jlpt: 1,
    quizAnswers: ['Discharge', 'Bright', 'Arrive At', 'Delicate'],
    similars: [
      {
        kanji: '徴',
        meaning: 'indications'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '炭',
        meaning: 'charcoal'
      },
      {
        kanji: '懲',
        meaning: 'penal'
      },
      {
        kanji: '嫁',
        meaning: 'marry into'
      },
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '衆',
        meaning: 'masses'
      }
    ]
  },
  {
    kanjiName: '益',
    strokes: 10,
    grade: 5,
    freq: 674,
    meanings: ['Benefit', 'Gain', 'Profit', 'Advantage'],
    on: ['えき', 'やく'],
    kun: ['ま.す'],
    jlpt: 1,
    quizAnswers: ['Defeat', 'Benefit', 'Prepare', 'Meet'],
    similars: [
      {
        kanji: '盗',
        meaning: 'steal'
      },
      {
        kanji: '盛',
        meaning: 'boom'
      },
      {
        kanji: '粗',
        meaning: 'coarse'
      },
      {
        kanji: '血',
        meaning: 'blood'
      },
      {
        kanji: '盆',
        meaning: 'basin'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      },
      {
        kanji: '涯',
        meaning: 'horizon'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '猛',
        meaning: 'fierce'
      },
      {
        kanji: '塩',
        meaning: 'salt'
      }
    ]
  },
  {
    kanjiName: '憲',
    strokes: 16,
    grade: 6,
    freq: 551,
    meanings: ['Constitution', 'Law'],
    on: ['けん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Tome', 'Decree', 'Constitution', 'Play'],
    similars: [
      {
        kanji: '徳',
        meaning: 'benevolence'
      },
      {
        kanji: '聴',
        meaning: 'listen'
      },
      {
        kanji: '慮',
        meaning: 'prudence'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '誌',
        meaning: 'document'
      },
      {
        kanji: '億',
        meaning: 'hundred million'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '憶',
        meaning: 'recollection'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '寛',
        meaning: 'tolerant'
      }
    ]
  },
  {
    kanjiName: '衆',
    strokes: 12,
    grade: 6,
    freq: 450,
    meanings: ['Masses', 'Great Numbers', 'Multitude', 'Populace'],
    on: ['しゅう', 'しゅ'],
    kun: ['おお.い'],
    jlpt: 1,
    quizAnswers: ['Doctrine', 'Arrangement', 'Garden', 'Masses'],
    similars: [
      {
        kanji: '脈',
        meaning: 'vein'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '乗',
        meaning: 'ride'
      },
      {
        kanji: '微',
        meaning: 'delicate'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '炭',
        meaning: 'charcoal'
      },
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '象',
        meaning: 'elephant'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      }
    ]
  },
  {
    kanjiName: '傘',
    strokes: 12,
    grade: 8,
    freq: 1694,
    meanings: ['Umbrella'],
    on: ['さん'],
    kun: ['かさ'],
    jlpt: 1,
    quizAnswers: ['Proclaim', 'Efficiency', 'Umbrella', 'Whole'],
    similars: [
      {
        kanji: '璽',
        meaning: "emperor's seal"
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '卒',
        meaning: 'graduate'
      },
      {
        kanji: '座',
        meaning: 'squat'
      },
      {
        kanji: '新',
        meaning: 'new'
      },
      {
        kanji: '断',
        meaning: 'severance'
      },
      {
        kanji: '脳',
        meaning: 'brain'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '炊',
        meaning: 'cook'
      }
    ]
  },
  {
    kanjiName: '浜',
    strokes: 10,
    grade: 8,
    freq: 645,
    meanings: ['Seacoast', 'Beach', 'Seashore'],
    on: ['ひん'],
    kun: ['はま'],
    jlpt: 1,
    quizAnswers: ['Agree Upon', 'Seacoast', 'Appoint', 'Loom'],
    similars: [
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '洪',
        meaning: 'deluge'
      },
      {
        kanji: '汽',
        meaning: 'vapor'
      },
      {
        kanji: '注',
        meaning: 'pour'
      },
      {
        kanji: '法',
        meaning: 'method'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '泣',
        meaning: 'cry'
      },
      {
        kanji: '染',
        meaning: 'dye'
      },
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '活',
        meaning: 'lively'
      }
    ]
  },
  {
    kanjiName: '撃',
    strokes: 15,
    grade: 8,
    freq: 473,
    meanings: ['Beat', 'Attack', 'Defeat', 'Conquer'],
    on: ['げき'],
    kun: ['う.つ'],
    jlpt: 1,
    quizAnswers: ['Minus', 'Snout', 'Some', 'Beat'],
    similars: [
      {
        kanji: '幹',
        meaning: 'tree trunk'
      },
      {
        kanji: '軽',
        meaning: 'lightly'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '暫',
        meaning: 'temporarily'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      },
      {
        kanji: '某',
        meaning: 'so-and-so'
      },
      {
        kanji: '輪',
        meaning: 'wheel'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      }
    ]
  },
  {
    kanjiName: '攻',
    strokes: 7,
    grade: 8,
    freq: 532,
    meanings: ['Aggression', 'Attack', 'Criticize', 'Polish'],
    on: ['こう'],
    kun: ['せ.める'],
    jlpt: 1,
    quizAnswers: ['State', 'Aggression', 'Times', 'Vial'],
    similars: [
      {
        kanji: '政',
        meaning: 'politics'
      },
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '坂',
        meaning: 'slope'
      },
      {
        kanji: '坑',
        meaning: 'pit'
      },
      {
        kanji: '致',
        meaning: 'doth'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '城',
        meaning: 'castle'
      },
      {
        kanji: '契',
        meaning: 'pledge'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '教',
        meaning: 'teach'
      }
    ]
  },
  {
    kanjiName: '監',
    strokes: 15,
    grade: 8,
    freq: 408,
    meanings: ['Oversee', 'Official', 'Govt Office', 'Rule', 'Administer'],
    on: ['かん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Oversee', 'Stamp', 'Bout', 'Learn'],
    similars: [
      {
        kanji: '濫',
        meaning: 'excessive'
      },
      {
        kanji: '艦',
        meaning: 'warship'
      },
      {
        kanji: '堅',
        meaning: 'strict'
      },
      {
        kanji: '鑑',
        meaning: 'specimen'
      },
      {
        kanji: '覧',
        meaning: 'perusal'
      },
      {
        kanji: '臨',
        meaning: 'look to'
      },
      {
        kanji: '壁',
        meaning: 'wall'
      },
      {
        kanji: '睡',
        meaning: 'drowsy'
      },
      {
        kanji: '距',
        meaning: 'long-distance'
      },
      {
        kanji: '臣',
        meaning: 'retainer'
      }
    ]
  },
  {
    kanjiName: '催',
    strokes: 13,
    grade: 8,
    freq: 536,
    meanings: ['Sponsor', 'Hold (a Meeting)', 'Give (a Dinner)'],
    on: ['さい'],
    kun: ['もよう.す', 'もよお.す'],
    jlpt: 1,
    quizAnswers: ['Be Madly In Love', 'Pane', 'Import', 'Sponsor'],
    similars: [
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '雌',
        meaning: 'feminine'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '准',
        meaning: 'quasi-'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '勧',
        meaning: 'persuade'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      }
    ]
  },
  {
    kanjiName: '促',
    strokes: 9,
    grade: 8,
    freq: 998,
    meanings: ['Stimulate', 'Urge', 'Press', 'Demand', 'Incite'],
    on: ['そく'],
    kun: ['うなが.す'],
    jlpt: 1,
    quizAnswers: ['Stimulate', 'Possess', 'Outside', 'Coil'],
    similars: [
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '保',
        meaning: 'protect'
      },
      {
        kanji: '使',
        meaning: 'use'
      },
      {
        kanji: '徒',
        meaning: 'on foot'
      },
      {
        kanji: '従',
        meaning: 'accompany'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '仲',
        meaning: 'go-between'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '架',
        meaning: 'erect'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      }
    ]
  },
  {
    kanjiName: '江',
    strokes: 6,
    grade: 8,
    freq: 704,
    meanings: ['Creek', 'Inlet', 'Bay'],
    on: ['こう'],
    kun: ['え'],
    jlpt: 1,
    quizAnswers: ['Emotion', 'Fast', 'World', 'Creek'],
    similars: [
      {
        kanji: '壮',
        meaning: 'robust'
      },
      {
        kanji: '法',
        meaning: 'method'
      },
      {
        kanji: '注',
        meaning: 'pour'
      },
      {
        kanji: '汁',
        meaning: 'soup'
      },
      {
        kanji: '洪',
        meaning: 'deluge'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '海',
        meaning: 'sea'
      },
      {
        kanji: '汚',
        meaning: 'dirty'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '怪',
        meaning: 'suspicious'
      }
    ]
  },
  {
    kanjiName: '請',
    strokes: 15,
    grade: 8,
    freq: 524,
    meanings: ['Solicit', 'Invite', 'Ask'],
    on: ['せい', 'しん', 'しょう'],
    kun: ['こ.う', 'う.ける'],
    jlpt: 1,
    quizAnswers: ['Solicit', 'Amass', 'Engrave', 'Class (first)'],
    similars: [
      {
        kanji: '諸',
        meaning: 'various'
      },
      {
        kanji: '講',
        meaning: 'lecture'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '精',
        meaning: 'refined'
      },
      {
        kanji: '諭',
        meaning: 'rebuke'
      },
      {
        kanji: '情',
        meaning: 'feelings'
      },
      {
        kanji: '語',
        meaning: 'word'
      },
      {
        kanji: '誌',
        meaning: 'document'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      }
    ]
  },
  {
    kanjiName: '雄',
    strokes: 12,
    grade: 8,
    freq: 669,
    meanings: ['Masculine', 'Male', 'Hero', 'Leader', 'Superiority', 'Excellence'],
    on: ['ゆう'],
    kun: ['お-', 'おす', 'おん'],
    jlpt: 1,
    quizAnswers: ['Cloud', 'South', 'Experience', 'Masculine'],
    similars: [
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '准',
        meaning: 'quasi-'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '離',
        meaning: 'detach'
      },
      {
        kanji: '奪',
        meaning: 'rob'
      }
    ]
  },
  {
    kanjiName: '壊',
    strokes: 16,
    grade: 8,
    freq: 727,
    meanings: ['Demolition', 'Break', 'Destroy'],
    on: ['かい', 'え'],
    kun: ['こわ.す', 'こわ.れる', 'やぶ.る'],
    jlpt: 1,
    quizAnswers: ['Demolition', 'One Radical (no.1)', 'Proceed', 'Be Submerged'],
    similars: [
      {
        kanji: '懐',
        meaning: 'feelings'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '壌',
        meaning: 'lot'
      },
      {
        kanji: '環',
        meaning: 'ring'
      },
      {
        kanji: '衰',
        meaning: 'decline'
      },
      {
        kanji: '堪',
        meaning: 'withstand'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '夢',
        meaning: 'dream'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '堤',
        meaning: 'dike'
      }
    ]
  },
  {
    kanjiName: '診',
    strokes: 12,
    grade: 8,
    freq: 1019,
    meanings: ['Checkup', 'Seeing', 'Diagnose', 'Examine'],
    on: ['しん'],
    kun: ['み.る'],
    jlpt: 1,
    quizAnswers: ['New', 'Emptiness', 'Checkup', 'Counter For Carriages (e.g., In A Train)'],
    similars: [
      {
        kanji: '訟',
        meaning: 'sue'
      },
      {
        kanji: '談',
        meaning: 'discuss'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '該',
        meaning: 'above-stated'
      },
      {
        kanji: '誇',
        meaning: 'boast'
      },
      {
        kanji: '誠',
        meaning: 'sincerity'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '設',
        meaning: 'establishment'
      }
    ]
  },
  {
    kanjiName: '閣',
    strokes: 14,
    grade: 6,
    freq: 444,
    meanings: ['Tower', 'Tall Building', 'Palace'],
    on: ['かく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Abstain', 'Item', 'Blossom', 'Tower'],
    similars: [
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '略',
        meaning: 'abbreviation'
      },
      {
        kanji: '閲',
        meaning: 'review'
      },
      {
        kanji: '閥',
        meaning: 'clique'
      },
      {
        kanji: '酪',
        meaning: 'dairy products'
      },
      {
        kanji: '開',
        meaning: 'open'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '聞',
        meaning: 'hear'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      }
    ]
  },
  {
    kanjiName: '僚',
    strokes: 14,
    grade: 8,
    freq: 709,
    meanings: ['Colleague', 'Official', 'Companion'],
    on: ['りょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Stagecoach Stop', 'Colleague', 'Offer', 'Advantage'],
    similars: [
      {
        kanji: '寮',
        meaning: 'dormitory'
      },
      {
        kanji: '療',
        meaning: 'heal'
      },
      {
        kanji: '貸',
        meaning: 'lend'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '原',
        meaning: 'meadow'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '貧',
        meaning: 'poverty'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '貨',
        meaning: 'freight'
      },
      {
        kanji: '源',
        meaning: 'source'
      }
    ]
  },
  {
    kanjiName: '督',
    strokes: 13,
    grade: 8,
    freq: 534,
    meanings: ['Coach', 'Command', 'Urge', 'Lead', 'Supervise'],
    on: ['とく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Argument', 'Top', 'Negative', 'Coach'],
    similars: [
      {
        kanji: '省',
        meaning: 'government ministry'
      },
      {
        kanji: '叔',
        meaning: 'uncle'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      },
      {
        kanji: '賓',
        meaning: 'V.I.P.'
      },
      {
        kanji: '頻',
        meaning: 'repeatedly'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '昼',
        meaning: 'daytime'
      },
      {
        kanji: '盲',
        meaning: 'blind'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      },
      {
        kanji: '香',
        meaning: 'incense'
      }
    ]
  },
  {
    kanjiName: '街',
    strokes: 12,
    grade: 4,
    freq: 891,
    meanings: ['Boulevard', 'Street', 'Town'],
    on: ['がい', 'かい'],
    kun: ['まち'],
    jlpt: 1,
    quizAnswers: ['Inferior', 'Boulevard', 'Bear', 'Compound'],
    similars: [
      {
        kanji: '佳',
        meaning: 'excellent'
      },
      {
        kanji: '衝',
        meaning: 'collide'
      },
      {
        kanji: '待',
        meaning: 'wait'
      },
      {
        kanji: '往',
        meaning: 'journey'
      },
      {
        kanji: '徒',
        meaning: 'on foot'
      },
      {
        kanji: '倒',
        meaning: 'overthrow'
      },
      {
        kanji: '律',
        meaning: 'rhythm'
      },
      {
        kanji: '封',
        meaning: 'seal'
      },
      {
        kanji: '俸',
        meaning: 'stipend'
      },
      {
        kanji: '術',
        meaning: 'art'
      }
    ]
  },
  {
    kanjiName: '宗',
    strokes: 8,
    grade: 6,
    freq: 997,
    meanings: ['Religion', 'Sect', 'Denomination', 'Main Point', 'Origin', 'Essence'],
    on: ['しゅう', 'そう'],
    kun: ['むね'],
    jlpt: 1,
    quizAnswers: ['Destiny', 'Outlook', 'Frail', 'Religion'],
    similars: [
      {
        kanji: '完',
        meaning: 'perfect'
      },
      {
        kanji: '実',
        meaning: 'reality'
      },
      {
        kanji: '崇',
        meaning: 'adore'
      },
      {
        kanji: '案',
        meaning: 'plan'
      },
      {
        kanji: '執',
        meaning: 'tenacious'
      },
      {
        kanji: '宝',
        meaning: 'treasure'
      },
      {
        kanji: '定',
        meaning: 'determine'
      },
      {
        kanji: '守',
        meaning: 'guard'
      },
      {
        kanji: '宇',
        meaning: 'eaves'
      },
      {
        kanji: '害',
        meaning: 'harm'
      }
    ]
  },
  {
    kanjiName: '緊',
    strokes: 15,
    grade: 8,
    freq: 677,
    meanings: ['Tense', 'Solid', 'Hard', 'Reliable', 'Tight'],
    on: ['きん'],
    kun: ['し.める', 'し.まる'],
    jlpt: 1,
    quizAnswers: ['Learn', 'Exclude', 'Waste', 'Tense'],
    similars: [
      {
        kanji: '賢',
        meaning: 'intelligent'
      },
      {
        kanji: '堅',
        meaning: 'strict'
      },
      {
        kanji: '紫',
        meaning: 'purple'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '覧',
        meaning: 'perusal'
      },
      {
        kanji: '監',
        meaning: 'oversee'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '臣',
        meaning: 'retainer'
      },
      {
        kanji: '践',
        meaning: 'tread'
      },
      {
        kanji: '跳',
        meaning: 'hop'
      }
    ]
  },
  {
    kanjiName: '宴',
    strokes: 10,
    grade: 8,
    freq: 1675,
    meanings: ['Banquet', 'Feast', 'Party'],
    on: ['えん'],
    kun: ['うたげ'],
    jlpt: 1,
    quizAnswers: ['Banquet', 'Cherish', 'Garden', 'Vegetable'],
    similars: [
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '寛',
        meaning: 'tolerant'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      },
      {
        kanji: '安',
        meaning: 'relax'
      },
      {
        kanji: '宜',
        meaning: 'best regards'
      },
      {
        kanji: '宙',
        meaning: 'mid-air'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '覚',
        meaning: 'memorize'
      },
      {
        kanji: '混',
        meaning: 'mix'
      }
    ]
  },
  {
    kanjiName: '添',
    strokes: 11,
    grade: 8,
    freq: 1501,
    meanings: [
      'Annexed',
      'Accompany',
      'Marry',
      'Suit',
      'Meet',
      'Satisfy',
      'Attach',
      'Append',
      'Garnish',
      'Imitate'
    ],
    on: ['てん'],
    kun: ['そ.える', 'そ.う'],
    jlpt: 1,
    quizAnswers: ['Annexed', 'Participate', 'Just About', 'Consider'],
    similars: [
      {
        kanji: '恭',
        meaning: 'respect'
      },
      {
        kanji: '漏',
        meaning: 'leak'
      },
      {
        kanji: '漆',
        meaning: 'lacquer'
      },
      {
        kanji: '済',
        meaning: 'settle (debt'
      },
      {
        kanji: '泌',
        meaning: 'ooze'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '状',
        meaning: 'status quo'
      },
      {
        kanji: '液',
        meaning: 'fluid'
      },
      {
        kanji: '決',
        meaning: 'decide'
      },
      {
        kanji: '挙',
        meaning: 'raise'
      }
    ]
  },
  {
    kanjiName: '猛',
    strokes: 11,
    grade: 8,
    freq: 1301,
    meanings: ['Fierce', 'Rave', 'Rush', 'Become Furious', 'Wildness', 'Strength'],
    on: ['もう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Link', 'Chances', 'Cushion', 'Fierce'],
    similars: [
      {
        kanji: '征',
        meaning: 'subjugate'
      },
      {
        kanji: '盗',
        meaning: 'steal'
      },
      {
        kanji: '狂',
        meaning: 'lunatic'
      },
      {
        kanji: '盛',
        meaning: 'boom'
      },
      {
        kanji: '益',
        meaning: 'benefit'
      },
      {
        kanji: '盆',
        meaning: 'basin'
      },
      {
        kanji: '血',
        meaning: 'blood'
      },
      {
        kanji: '盤',
        meaning: 'tray'
      },
      {
        kanji: '塩',
        meaning: 'salt'
      },
      {
        kanji: '盟',
        meaning: 'alliance'
      }
    ]
  },
  {
    kanjiName: '烈',
    strokes: 10,
    grade: 8,
    freq: 1397,
    meanings: ['Ardent', 'Violent', 'Vehement', 'Furious', 'Severe', 'Extreme'],
    on: ['れつ'],
    kun: ['はげ.しい'],
    jlpt: 1,
    quizAnswers: ['Fate', 'Visible', 'Ardent', 'Unparalleled'],
    similars: [
      {
        kanji: '雨',
        meaning: 'rain'
      },
      {
        kanji: '列',
        meaning: 'file'
      },
      {
        kanji: '庶',
        meaning: 'commoner'
      },
      {
        kanji: '外',
        meaning: 'outside'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '為',
        meaning: 'do'
      },
      {
        kanji: '残',
        meaning: 'remainder'
      },
      {
        kanji: '裂',
        meaning: 'split'
      },
      {
        kanji: '蒸',
        meaning: 'steam'
      },
      {
        kanji: '偽',
        meaning: 'falsehood'
      }
    ]
  },
  {
    kanjiName: '索',
    strokes: 10,
    grade: 8,
    freq: 1127,
    meanings: ['Cord', 'Rope', 'Searching', 'Inquiring'],
    on: ['さく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Me', 'Cord', 'Tablet', 'Situation'],
    similars: [
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '宗',
        meaning: 'religion'
      },
      {
        kanji: '糸',
        meaning: 'thread'
      },
      {
        kanji: '孫',
        meaning: 'grandchild'
      },
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '係',
        meaning: 'person in charge'
      },
      {
        kanji: '紫',
        meaning: 'purple'
      },
      {
        kanji: '潔',
        meaning: 'undefiled'
      },
      {
        kanji: '室',
        meaning: 'room'
      }
    ]
  },
  {
    kanjiName: '詳',
    strokes: 13,
    grade: 8,
    freq: 1178,
    meanings: ['Detailed', 'Full', 'Minute', 'Accurate', 'Well-informed'],
    on: ['しょう'],
    kun: ['くわ.しい', 'つまび.らか'],
    jlpt: 1,
    quizAnswers: ['Faith', 'Detailed', 'Plane', 'Rare'],
    similars: [
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '誇',
        meaning: 'boast'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '謙',
        meaning: 'self-effacing'
      },
      {
        kanji: '謡',
        meaning: 'song'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '託',
        meaning: 'consign'
      }
    ]
  },
  {
    kanjiName: '魅',
    strokes: 15,
    grade: 8,
    freq: 1206,
    meanings: ['Fascination', 'Charm', 'Bewitch'],
    on: ['み'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Fascination', 'Join', '1-3pm', 'Character'],
    similars: [
      {
        kanji: '鬼',
        meaning: 'ghost'
      },
      {
        kanji: '楽',
        meaning: 'music'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '臭',
        meaning: 'stinking'
      },
      {
        kanji: '暖',
        meaning: 'warmth'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      }
    ]
  },
  {
    kanjiName: '渇',
    strokes: 11,
    grade: 8,
    freq: 1944,
    meanings: ['Thirst', 'Dry Up', 'Parch'],
    on: ['かつ'],
    kun: ['かわ.く'],
    jlpt: 1,
    quizAnswers: ['Agree Upon', 'Either', 'Another', 'Thirst'],
    similars: [
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '混',
        meaning: 'mix'
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)'
      },
      {
        kanji: '喝',
        meaning: 'hoarse'
      },
      {
        kanji: '褐',
        meaning: 'brown'
      },
      {
        kanji: '揚',
        meaning: 'raise'
      },
      {
        kanji: '測',
        meaning: 'fathom'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '易',
        meaning: 'easy'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      }
    ]
  },
  {
    kanjiName: '系',
    strokes: 7,
    grade: 6,
    freq: 567,
    meanings: ['Lineage', 'System'],
    on: ['けい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Take Up', 'Evidence', 'Rested', 'Lineage'],
    similars: [
      {
        kanji: '糸',
        meaning: 'thread'
      },
      {
        kanji: '係',
        meaning: 'person in charge'
      },
      {
        kanji: '孫',
        meaning: 'grandchild'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '索',
        meaning: 'cord'
      },
      {
        kanji: '紫',
        meaning: 'purple'
      },
      {
        kanji: '外',
        meaning: 'outside'
      },
      {
        kanji: '幼',
        meaning: 'infancy'
      },
      {
        kanji: '紀',
        meaning: 'chronicle'
      },
      {
        kanji: '級',
        meaning: 'class'
      }
    ]
  },
  {
    kanjiName: '旗',
    strokes: 14,
    grade: 4,
    freq: 1190,
    meanings: ['National Flag', 'Banner', 'Standard'],
    on: ['き'],
    kun: ['はた'],
    jlpt: 1,
    quizAnswers: ['Elapse', 'National Flag', 'Small', 'Branch'],
    similars: [
      {
        kanji: '棋',
        meaning: 'chess piece'
      },
      {
        kanji: '旋',
        meaning: 'rotation'
      },
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '典',
        meaning: 'code'
      },
      {
        kanji: '模',
        meaning: 'imitation'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '庸',
        meaning: 'commonplace'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '堪',
        meaning: 'withstand'
      }
    ]
  },
  {
    kanjiName: '乏',
    strokes: 4,
    grade: 8,
    freq: 1646,
    meanings: ['Destitution', 'Scarce', 'Limited'],
    on: ['ぼう'],
    kun: ['とぼ.しい', 'とも.しい'],
    jlpt: 1,
    quizAnswers: ['Acknowledge', 'Teachings', 'Negative', 'Destitution'],
    similars: [
      {
        kanji: '皮',
        meaning: 'pelt'
      },
      {
        kanji: '支',
        meaning: 'branch'
      },
      {
        kanji: '夕',
        meaning: 'evening'
      },
      {
        kanji: '片',
        meaning: 'one-sided'
      },
      {
        kanji: '芝',
        meaning: 'turf'
      },
      {
        kanji: '久',
        meaning: 'long time'
      },
      {
        kanji: '廷',
        meaning: 'courts'
      },
      {
        kanji: '奴',
        meaning: 'guy'
      },
      {
        kanji: '込',
        meaning: 'crowded'
      },
      {
        kanji: '生',
        meaning: 'life'
      }
    ]
  },
  {
    kanjiName: '覧',
    strokes: 17,
    grade: 6,
    freq: 1510,
    meanings: ['Perusal', 'See'],
    on: ['らん'],
    kun: ['み.る'],
    jlpt: 1,
    quizAnswers: ['Back', 'Government Ministry', 'Perusal', 'Polite Suffix'],
    similars: [
      {
        kanji: '賢',
        meaning: 'intelligent'
      },
      {
        kanji: '貴',
        meaning: 'precious'
      },
      {
        kanji: '監',
        meaning: 'oversee'
      },
      {
        kanji: '題',
        meaning: 'topic'
      },
      {
        kanji: '顕',
        meaning: 'appear'
      },
      {
        kanji: '観',
        meaning: 'outlook'
      },
      {
        kanji: '頭',
        meaning: 'head'
      },
      {
        kanji: '噴',
        meaning: 'erupt'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '現',
        meaning: 'present'
      }
    ]
  },
  {
    kanjiName: '懐',
    strokes: 16,
    grade: 8,
    freq: 1493,
    meanings: [
      'Pocket',
      'Feelings',
      'Heart',
      'Yearn',
      'Miss Someone',
      'Become Attached To',
      'Bosom',
      'Breast'
    ],
    on: ['かい', 'え'],
    kun: [
      'ふところ',
      'なつ.かしい',
      'なつ.かしむ',
      'なつ.く',
      'なつ.ける',
      'なず.ける',
      'いだ.く',
      'おも.う'
    ],
    jlpt: 1,
    quizAnswers: ['Passion', 'Sip', 'Pocket', 'Call On'],
    similars: [
      {
        kanji: '壊',
        meaning: 'demolition'
      },
      {
        kanji: '漂',
        meaning: 'drift'
      },
      {
        kanji: '濃',
        meaning: 'concentrated'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '装',
        meaning: 'attire'
      },
      {
        kanji: '農',
        meaning: 'agriculture'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '徳',
        meaning: 'benevolence'
      }
    ]
  },
  {
    kanjiName: '漏',
    strokes: 14,
    grade: 8,
    freq: 1298,
    meanings: ['Leak', 'Escape', 'Time'],
    on: ['ろう'],
    kun: ['も.る', 'も.れる', 'も.らす'],
    jlpt: 1,
    quizAnswers: ['Leak', 'Poland', 'Consider', 'Apartment'],
    similars: [
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '雨',
        meaning: 'rain'
      },
      {
        kanji: '潟',
        meaning: 'lagoon'
      },
      {
        kanji: '浦',
        meaning: 'bay'
      },
      {
        kanji: '怖',
        meaning: 'dreadful'
      },
      {
        kanji: '滋',
        meaning: 'nourishing'
      },
      {
        kanji: '渋',
        meaning: 'astringent'
      },
      {
        kanji: '庶',
        meaning: 'commoner'
      },
      {
        kanji: '漁',
        meaning: 'fishing'
      },
      {
        kanji: '窯',
        meaning: 'kiln'
      }
    ]
  },
  {
    kanjiName: '購',
    strokes: 17,
    grade: 8,
    freq: 945,
    meanings: ['Subscription', 'Buy'],
    on: ['こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Resign', 'Subscription', 'Skin', 'Money'],
    similars: [
      {
        kanji: '睡',
        meaning: 'drowsy'
      },
      {
        kanji: '構',
        meaning: 'posture'
      },
      {
        kanji: '賄',
        meaning: 'bribe'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '溝',
        meaning: 'gutter'
      },
      {
        kanji: '講',
        meaning: 'lecture'
      },
      {
        kanji: '晴',
        meaning: 'clear up'
      },
      {
        kanji: '貯',
        meaning: 'savings'
      },
      {
        kanji: '賦',
        meaning: 'levy'
      },
      {
        kanji: '星',
        meaning: 'star'
      }
    ]
  },
  {
    kanjiName: '飾',
    strokes: 13,
    grade: 8,
    freq: 1193,
    meanings: ['Decorate', 'Ornament', 'Adorn', 'Embellish'],
    on: ['しょく'],
    kun: ['かざ.る', 'かざ.り'],
    jlpt: 1,
    quizAnswers: ['Yonder', 'Decorate', 'Can', 'Reach'],
    similars: [
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '飢',
        meaning: 'hungry'
      },
      {
        kanji: '飽',
        meaning: 'sated'
      },
      {
        kanji: '飯',
        meaning: 'meal'
      },
      {
        kanji: '飲',
        meaning: 'drink'
      },
      {
        kanji: '餓',
        meaning: 'starve'
      },
      {
        kanji: '肺',
        meaning: 'lungs'
      },
      {
        kanji: '希',
        meaning: 'hope'
      },
      {
        kanji: '食',
        meaning: 'eat'
      },
      {
        kanji: '館',
        meaning: 'building'
      }
    ]
  },
  {
    kanjiName: '騒',
    strokes: 18,
    grade: 8,
    freq: 1069,
    meanings: ['Boisterous', 'Make Noise', 'Clamor', 'Disturb', 'Excite'],
    on: ['そう'],
    kun: ['さわ.ぐ', 'うれい', 'さわ.がしい'],
    jlpt: 1,
    quizAnswers: ['Existing', 'Story', 'Break', 'Boisterous'],
    similars: [
      {
        kanji: '験',
        meaning: 'verification'
      },
      {
        kanji: '駐',
        meaning: 'stop-over'
      },
      {
        kanji: '駄',
        meaning: 'burdensome'
      },
      {
        kanji: '騎',
        meaning: 'equestrian'
      },
      {
        kanji: '駅',
        meaning: 'station'
      },
      {
        kanji: '馬',
        meaning: 'horse'
      },
      {
        kanji: '駆',
        meaning: 'drive'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '鯨',
        meaning: 'whale'
      },
      {
        kanji: '蛮',
        meaning: 'barbarian'
      }
    ]
  },
  {
    kanjiName: '撮',
    strokes: 15,
    grade: 8,
    freq: 1023,
    meanings: ['Snapshot', 'Take Pictures'],
    on: ['さつ'],
    kun: ['と.る', 'つま.む', '-ど.り'],
    jlpt: 1,
    quizAnswers: ['Assume A Responsibility', 'Distinction', 'Incline', 'Snapshot'],
    similars: [
      {
        kanji: '最',
        meaning: 'utmost'
      },
      {
        kanji: '捜',
        meaning: 'search'
      },
      {
        kanji: '提',
        meaning: 'propose'
      },
      {
        kanji: '漫',
        meaning: 'cartoon'
      },
      {
        kanji: '揚',
        meaning: 'raise'
      },
      {
        kanji: '堤',
        meaning: 'dike'
      },
      {
        kanji: '趣',
        meaning: 'purport'
      },
      {
        kanji: '夏',
        meaning: 'summer'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '押',
        meaning: 'push'
      }
    ]
  },
  {
    kanjiName: '離',
    strokes: 19,
    grade: 8,
    freq: 555,
    meanings: ['Detach', 'Separation', 'Disjoin', 'Digress'],
    on: ['り'],
    kun: ['はな.れる', 'はな.す'],
    jlpt: 1,
    quizAnswers: ['Layer', 'Projection', 'Detach', 'Three (in Documents)'],
    similars: [
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      },
      {
        kanji: '擁',
        meaning: 'hug'
      },
      {
        kanji: '羅',
        meaning: 'gauze'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      }
    ]
  },
  {
    kanjiName: '融',
    strokes: 16,
    grade: 8,
    freq: 481,
    meanings: ['Dissolve', 'Melt'],
    on: ['ゆう'],
    kun: ['と.ける', 'と.かす'],
    jlpt: 1,
    quizAnswers: ['Beyond', 'Build', 'Dissolve', 'Endeavour'],
    similars: [
      {
        kanji: '繭',
        meaning: 'cocoon'
      },
      {
        kanji: '頼',
        meaning: 'trust'
      },
      {
        kanji: '蚕',
        meaning: 'silkworm'
      },
      {
        kanji: '高',
        meaning: 'tall'
      },
      {
        kanji: '嘱',
        meaning: 'entrust'
      },
      {
        kanji: '礎',
        meaning: 'cornerstone'
      },
      {
        kanji: '騒',
        meaning: 'boisterous'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '蛮',
        meaning: 'barbarian'
      },
      {
        kanji: '距',
        meaning: 'long-distance'
      }
    ]
  },
  {
    kanjiName: '華',
    strokes: 10,
    grade: 8,
    freq: 1085,
    meanings: [
      'Splendor',
      'Flower',
      'Petal',
      'Shine',
      'Luster',
      'Ostentatious',
      'Showy',
      'Gay',
      'Gorgeous'
    ],
    on: ['か', 'け'],
    kun: ['はな'],
    jlpt: 1,
    quizAnswers: ['Carving', 'Splendor', 'Force', 'Respect'],
    similars: [
      {
        kanji: '拝',
        meaning: 'worship'
      },
      {
        kanji: '奉',
        meaning: 'observance'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '芽',
        meaning: 'bud'
      },
      {
        kanji: '封',
        meaning: 'seal'
      },
      {
        kanji: '葉',
        meaning: 'leaf'
      },
      {
        kanji: '壌',
        meaning: 'lot'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '琴',
        meaning: 'harp'
      },
      {
        kanji: '草',
        meaning: 'grass'
      }
    ]
  },
  {
    kanjiName: '既',
    strokes: 10,
    grade: 8,
    freq: 1081,
    meanings: ['Previously', 'Already', 'Long Ago'],
    on: ['き'],
    kun: ['すで.に'],
    jlpt: 1,
    quizAnswers: ['Phase', 'Street', 'Previously', 'Male Name Suffix'],
    similars: [
      {
        kanji: '慨',
        meaning: 'rue'
      },
      {
        kanji: '概',
        meaning: 'outline'
      },
      {
        kanji: '暁',
        meaning: 'daybreak'
      },
      {
        kanji: '即',
        meaning: 'instant'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '先',
        meaning: 'before'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '焼',
        meaning: 'bake'
      },
      {
        kanji: '晩',
        meaning: 'nightfall'
      }
    ]
  },
  {
    kanjiName: '豪',
    strokes: 14,
    grade: 8,
    freq: 1104,
    meanings: ['Overpowering', 'Great', 'Powerful', 'Excelling', 'Australia'],
    on: ['ごう'],
    kun: ['えら.い'],
    jlpt: 1,
    quizAnswers: ['Overpowering', 'Suitable', 'Equal', 'Future'],
    similars: [
      {
        kanji: '稼',
        meaning: 'earnings'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '嫁',
        meaning: 'marry into'
      },
      {
        kanji: '亭',
        meaning: 'pavilion'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '縁',
        meaning: 'affinity'
      },
      {
        kanji: '談',
        meaning: 'discuss'
      },
      {
        kanji: '褒',
        meaning: 'praise'
      }
    ]
  },
  {
    kanjiName: '鑑',
    strokes: 23,
    grade: 8,
    freq: 1391,
    meanings: ['Specimen', 'Take Warning From', 'Learn From'],
    on: ['かん'],
    kun: ['かんが.みる', 'かがみ'],
    jlpt: 1,
    quizAnswers: ['Know', 'Vis-a-vis', 'Specimen', 'Walk Along'],
    similars: [
      {
        kanji: '艦',
        meaning: 'warship'
      },
      {
        kanji: '濫',
        meaning: 'excessive'
      },
      {
        kanji: '監',
        meaning: 'oversee'
      },
      {
        kanji: '錘',
        meaning: 'weight'
      },
      {
        kanji: '鐘',
        meaning: 'bell'
      },
      {
        kanji: '鋼',
        meaning: 'steel'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '鍛',
        meaning: 'forge'
      },
      {
        kanji: '錠',
        meaning: 'lock'
      }
    ]
  },
  {
    kanjiName: '尋',
    strokes: 12,
    grade: 8,
    freq: 1398,
    meanings: ['Inquire', 'Fathom', 'Look For'],
    on: ['じん'],
    kun: ['たず.ねる', 'ひろ'],
    jlpt: 1,
    quizAnswers: ['Explanation', 'Inquire', 'Ingredients', 'Braid'],
    similars: [
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '封',
        meaning: 'seal'
      },
      {
        kanji: '樹',
        meaning: 'timber'
      },
      {
        kanji: '訂',
        meaning: 'revise'
      },
      {
        kanji: '漢',
        meaning: 'Sino-'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '獄',
        meaning: 'prison'
      },
      {
        kanji: '河',
        meaning: 'river'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '舎',
        meaning: 'cottage'
      }
    ]
  },
  {
    kanjiName: '廊',
    strokes: 12,
    grade: 8,
    freq: 1598,
    meanings: ['Corridor', 'Hall', 'Tower'],
    on: ['ろう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Fault', 'Approximately', 'Bad', 'Corridor'],
    similars: [
      {
        kanji: '郎',
        meaning: 'son'
      },
      {
        kanji: '郷',
        meaning: 'home town'
      },
      {
        kanji: '都',
        meaning: 'metropolis'
      },
      {
        kanji: '斉',
        meaning: 'adjusted'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '即',
        meaning: 'instant'
      },
      {
        kanji: '節',
        meaning: 'node'
      },
      {
        kanji: '概',
        meaning: 'outline'
      },
      {
        kanji: '寡',
        meaning: 'widow'
      },
      {
        kanji: '郵',
        meaning: 'mail'
      }
    ]
  },
  {
    kanjiName: '驚',
    strokes: 22,
    grade: 8,
    freq: 1141,
    meanings: ['Wonder', 'Be Surprised', 'Frightened', 'Amazed'],
    on: ['きょう'],
    kun: ['おどろ.く', 'おどろ.かす'],
    jlpt: 1,
    quizAnswers: ['Wonder', 'Eat', 'To Best Of Ability', 'Group'],
    similars: [
      {
        kanji: '礁',
        meaning: 'reef'
      },
      {
        kanji: '騰',
        meaning: 'leaping up'
      },
      {
        kanji: '篤',
        meaning: 'fervent'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '警',
        meaning: 'admonish'
      },
      {
        kanji: '鳴',
        meaning: 'chirp'
      },
      {
        kanji: '難',
        meaning: 'difficult'
      },
      {
        kanji: '焦',
        meaning: 'char'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '薦',
        meaning: 'recommend'
      }
    ]
  },
  {
    kanjiName: '嘆',
    strokes: 13,
    grade: 8,
    freq: 1584,
    meanings: ['Sigh', 'Lament', 'Moan', 'Grieve', 'Sigh Of Admiration'],
    on: ['たん'],
    kun: ['なげ.く', 'なげ.かわしい'],
    jlpt: 1,
    quizAnswers: ['Sigh', 'Mutually', 'Live', 'Warp'],
    similars: [
      {
        kanji: '漢',
        meaning: 'Sino-'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '謹',
        meaning: 'discreet'
      },
      {
        kanji: '模',
        meaning: 'imitation'
      },
      {
        kanji: '操',
        meaning: 'maneuver'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '英',
        meaning: 'England'
      },
      {
        kanji: '蚊',
        meaning: 'mosquito'
      },
      {
        kanji: '呈',
        meaning: 'display'
      }
    ]
  },
  {
    kanjiName: '倉',
    strokes: 10,
    grade: 4,
    freq: 1114,
    meanings: ['Godown', 'Warehouse', 'Storehouse', 'Cellar', 'Treasury'],
    on: ['そう'],
    kun: ['くら'],
    jlpt: 1,
    quizAnswers: ['Multiple', 'Throne', 'Godown', 'Jurisdiction'],
    similars: [
      {
        kanji: '創',
        meaning: 'genesis'
      },
      {
        kanji: '合',
        meaning: 'fit'
      },
      {
        kanji: '含',
        meaning: 'contain'
      },
      {
        kanji: '昭',
        meaning: 'shining'
      },
      {
        kanji: '舎',
        meaning: 'cottage'
      },
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '的',
        meaning: "bull's eye"
      },
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '知',
        meaning: 'know'
      }
    ]
  },
  {
    kanjiName: '巣',
    strokes: 11,
    grade: 4,
    freq: 1588,
    meanings: ['Nest', 'Rookery', 'Hive', 'Cobweb', 'Den'],
    on: ['そう'],
    kun: ['す', 'す.くう'],
    jlpt: 1,
    quizAnswers: ['Yard', 'Reject', 'Nest', 'Support'],
    similars: [
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '戦',
        meaning: 'war'
      },
      {
        kanji: '裸',
        meaning: 'naked'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '獣',
        meaning: 'animal'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '漸',
        meaning: 'steadily'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      }
    ]
  },
  {
    kanjiName: '径',
    strokes: 8,
    grade: 4,
    freq: 1435,
    meanings: ['Diameter', 'Path', 'Method'],
    on: ['けい'],
    kun: ['みち', 'こみち', 'さしわたし', 'ただちに'],
    jlpt: 1,
    quizAnswers: ['Roll Up', 'Wither', 'Stiff', 'Diameter'],
    similars: [
      {
        kanji: '怪',
        meaning: 'suspicious'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '茎',
        meaning: 'stalk'
      },
      {
        kanji: '在',
        meaning: 'exist'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '往',
        meaning: 'journey'
      },
      {
        kanji: '征',
        meaning: 'subjugate'
      },
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice'
      }
    ]
  },
  {
    kanjiName: '救',
    strokes: 11,
    grade: 4,
    freq: 799,
    meanings: ['Salvation', 'Save', 'Help', 'Rescue', 'Reclaim'],
    on: ['きゅう'],
    kun: ['すく.う'],
    jlpt: 1,
    quizAnswers: ['Salvation', 'Plate', 'Be Ill', 'Rice'],
    similars: [
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '炎',
        meaning: 'inflammation'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '換',
        meaning: 'interchange'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '炊',
        meaning: 'cook'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      }
    ]
  },
  {
    kanjiName: '脈',
    strokes: 10,
    grade: 4,
    freq: 1477,
    meanings: ['Vein', 'Pulse', 'Hope'],
    on: ['みゃく'],
    kun: ['すじ'],
    jlpt: 1,
    quizAnswers: ['Vein', 'Wane', 'Don', 'Learn'],
    similars: [
      {
        kanji: '豚',
        meaning: 'pork'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '胸',
        meaning: 'bosom'
      },
      {
        kanji: '派',
        meaning: 'faction'
      },
      {
        kanji: '服',
        meaning: 'clothing'
      },
      {
        kanji: '衆',
        meaning: 'masses'
      },
      {
        kanji: '勝',
        meaning: 'victory'
      },
      {
        kanji: '脳',
        meaning: 'brain'
      },
      {
        kanji: '脱',
        meaning: 'undress'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      }
    ]
  },
  {
    kanjiName: '墓',
    strokes: 13,
    grade: 5,
    freq: 1337,
    meanings: ['Grave', 'Tomb'],
    on: ['ぼ'],
    kun: ['はか'],
    jlpt: 1,
    quizAnswers: ['Push', 'Grave', 'Introduce', 'Sign (of The Times)'],
    similars: [
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '幕',
        meaning: 'curtain'
      },
      {
        kanji: '募',
        meaning: 'recruit'
      },
      {
        kanji: '暮',
        meaning: 'evening'
      },
      {
        kanji: '慕',
        meaning: 'pining'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '軽',
        meaning: 'lightly'
      },
      {
        kanji: '幹',
        meaning: 'tree trunk'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '場',
        meaning: 'location'
      }
    ]
  },
  {
    kanjiName: '徳',
    strokes: 14,
    grade: 5,
    freq: 1091,
    meanings: ['Benevolence', 'Virtue', 'Goodness', 'Commanding Respect'],
    on: ['とく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Meanwhile', 'Benevolence', 'Interrupt', 'Passion'],
    similars: [
      {
        kanji: '聴',
        meaning: 'listen'
      },
      {
        kanji: '憲',
        meaning: 'constitution'
      },
      {
        kanji: '慮',
        meaning: 'prudence'
      },
      {
        kanji: '悪',
        meaning: 'bad'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '価',
        meaning: 'value'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '憩',
        meaning: 'recess'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      }
    ]
  },
  {
    kanjiName: '偵',
    strokes: 11,
    grade: 8,
    freq: 1857,
    meanings: ['Spy'],
    on: ['てい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Regret', 'Sensation', 'Spy', 'Jerk'],
    similars: [
      {
        kanji: '賀',
        meaning: 'congratulations'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '貨',
        meaning: 'freight'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '貸',
        meaning: 'lend'
      },
      {
        kanji: '貫',
        meaning: 'pierce'
      },
      {
        kanji: '負',
        meaning: 'defeat'
      }
    ]
  },
  {
    kanjiName: '綺',
    strokes: 14,
    grade: 9,
    freq: 2413,
    meanings: ['Figured Cloth', 'Beautiful'],
    on: ['き'],
    kun: ['あや'],
    jlpt: 1,
    quizAnswers: ['Public', 'Figured Cloth', 'Superior', 'Exalted']
  },
  {
    kanjiName: '序',
    strokes: 7,
    grade: 5,
    freq: 1160,
    meanings: ['Preface', 'Beginning', 'Order', 'Precedence', 'Occasion', 'Chance', 'Incidentally'],
    on: ['じょ'],
    kun: ['つい.で', 'ついで'],
    jlpt: 1,
    quizAnswers: ['Inlet', 'Load', 'Pour On', 'Preface'],
    similars: [
      {
        kanji: '列',
        meaning: 'file'
      },
      {
        kanji: '例',
        meaning: 'example'
      },
      {
        kanji: '交',
        meaning: 'mingle'
      },
      {
        kanji: '広',
        meaning: 'wide'
      },
      {
        kanji: '死',
        meaning: 'death'
      },
      {
        kanji: '庁',
        meaning: 'government office'
      },
      {
        kanji: '野',
        meaning: 'plains'
      },
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '夜',
        meaning: 'night'
      },
      {
        kanji: '刻',
        meaning: 'engrave'
      }
    ]
  },
  {
    kanjiName: '志',
    strokes: 7,
    grade: 5,
    freq: 823,
    meanings: ['Intention', 'Plan', 'Resolve', 'Aspire', 'Motive', 'Hopes', 'Shilling'],
    on: ['し'],
    kun: ['シリング', 'こころざ.す', 'こころざし'],
    jlpt: 1,
    quizAnswers: ['Temperament', 'Intention', 'Chamber', 'District'],
    similars: [
      {
        kanji: '応',
        meaning: 'apply'
      },
      {
        kanji: '忘',
        meaning: 'forget'
      },
      {
        kanji: '悪',
        meaning: 'bad'
      },
      {
        kanji: '念',
        meaning: 'wish'
      },
      {
        kanji: '恥',
        meaning: 'shame'
      },
      {
        kanji: '恐',
        meaning: 'fear'
      },
      {
        kanji: '心',
        meaning: 'heart'
      },
      {
        kanji: '忍',
        meaning: 'endure'
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)'
      },
      {
        kanji: '去',
        meaning: 'gone'
      }
    ]
  },
  {
    kanjiName: '恩',
    strokes: 10,
    grade: 5,
    freq: 1418,
    meanings: ['Grace', 'Kindness', 'Goodness', 'Favor', 'Mercy', 'Blessing', 'Benefit'],
    on: ['おん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Harmony', 'Grace', 'Wind Instrument', 'Ice'],
    similars: [
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '応',
        meaning: 'apply'
      },
      {
        kanji: '因',
        meaning: 'cause'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '悪',
        meaning: 'bad'
      },
      {
        kanji: '億',
        meaning: 'hundred million'
      },
      {
        kanji: '忌',
        meaning: 'mourning'
      },
      {
        kanji: '忠',
        meaning: 'loyalty'
      },
      {
        kanji: '恵',
        meaning: 'favor'
      }
    ]
  },
  {
    kanjiName: '桜',
    strokes: 10,
    grade: 5,
    freq: 1237,
    meanings: ['Cherry'],
    on: ['おう', 'よう'],
    kun: ['さくら'],
    jlpt: 1,
    quizAnswers: ['Suppress', 'Calling Card', 'Cherry', 'Circle'],
    similars: [
      {
        kanji: '妥',
        meaning: 'gentle'
      },
      {
        kanji: '楼',
        meaning: 'watchtower'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '桃',
        meaning: 'peach'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '柱',
        meaning: 'pillar'
      },
      {
        kanji: '述',
        meaning: 'mention'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '析',
        meaning: 'chop'
      }
    ]
  },
  {
    kanjiName: '眼',
    strokes: 11,
    grade: 5,
    freq: 1527,
    meanings: ['Eyeball'],
    on: ['がん', 'げん'],
    kun: ['まなこ', 'め'],
    jlpt: 1,
    quizAnswers: ['Distress', 'Heaven', 'Eyeball', 'Long'],
    similars: [
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '最',
        meaning: 'utmost'
      },
      {
        kanji: '鼻',
        meaning: 'nose'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '眠',
        meaning: 'sleep'
      },
      {
        kanji: '限',
        meaning: 'limit'
      },
      {
        kanji: '良',
        meaning: 'good'
      },
      {
        kanji: '臭',
        meaning: 'stinking'
      }
    ]
  },
  {
    kanjiName: '興',
    strokes: 16,
    grade: 5,
    freq: 734,
    meanings: ['Entertain', 'Revive', 'Retrieve', 'Interest', 'Pleasure'],
    on: ['こう', 'きょう'],
    kun: ['おこ.る', 'おこ.す'],
    jlpt: 1,
    quizAnswers: ['Entertain', 'Govern', 'Multiple', 'Godsend'],
    similars: [
      {
        kanji: '虞',
        meaning: 'fear'
      },
      {
        kanji: '停',
        meaning: 'halt'
      },
      {
        kanji: '兵',
        meaning: 'soldier'
      },
      {
        kanji: '疎',
        meaning: 'alienate'
      },
      {
        kanji: '偉',
        meaning: 'admirable'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '猿',
        meaning: 'monkey'
      },
      {
        kanji: '臨',
        meaning: 'look to'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      }
    ]
  },
  {
    kanjiName: '衛',
    strokes: 16,
    grade: 5,
    freq: 400,
    meanings: ['Defense', 'Protection'],
    on: ['えい', 'え'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Be Sharp', 'Spare', 'Defense', 'Hurry'],
    similars: [
      {
        kanji: '偉',
        meaning: 'admirable'
      },
      {
        kanji: '衝',
        meaning: 'collide'
      },
      {
        kanji: '違',
        meaning: 'difference'
      },
      {
        kanji: '街',
        meaning: 'boulevard'
      },
      {
        kanji: '停',
        meaning: 'halt'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '辞',
        meaning: 'resign'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '緯',
        meaning: 'horizontal'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      }
    ]
  },
  {
    kanjiName: '酸',
    strokes: 14,
    grade: 5,
    freq: 1218,
    meanings: ['Acid', 'Bitterness', 'Sour', 'Tart'],
    on: ['さん'],
    kun: ['す.い'],
    jlpt: 1,
    quizAnswers: ['Dance', 'Acid', 'Chop', 'Palace'],
    similars: [
      {
        kanji: '酬',
        meaning: 'repay'
      },
      {
        kanji: '酢',
        meaning: 'vinegar'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      },
      {
        kanji: '配',
        meaning: 'distribute'
      },
      {
        kanji: '俊',
        meaning: 'sagacious'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '唆',
        meaning: 'tempt'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      }
    ]
  },
  {
    kanjiName: '銭',
    strokes: 14,
    grade: 5,
    freq: 1008,
    meanings: ['Coin', '.01 Yen', 'Money'],
    on: ['せん', 'ぜん'],
    kun: ['ぜに', 'すき'],
    jlpt: 1,
    quizAnswers: ['Coin', 'World', 'Take The Form Of', 'Trust'],
    similars: [
      {
        kanji: '鋳',
        meaning: 'casting'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      }
    ]
  },
  {
    kanjiName: '飼',
    strokes: 13,
    grade: 5,
    freq: 1392,
    meanings: ['Domesticate', 'Raise', 'Keep', 'Feed'],
    on: ['し'],
    kun: ['か.う'],
    jlpt: 1,
    quizAnswers: ['Rend', 'Unreeling Cocoons', 'Domesticate', 'Ring'],
    similars: [
      {
        kanji: '飾',
        meaning: 'decorate'
      },
      {
        kanji: '飯',
        meaning: 'meal'
      },
      {
        kanji: '館',
        meaning: 'building'
      },
      {
        kanji: '飽',
        meaning: 'sated'
      },
      {
        kanji: '飢',
        meaning: 'hungry'
      },
      {
        kanji: '飲',
        meaning: 'drink'
      },
      {
        kanji: '餓',
        meaning: 'starve'
      },
      {
        kanji: '胴',
        meaning: 'trunk'
      },
      {
        kanji: '碁',
        meaning: 'Go'
      },
      {
        kanji: '胎',
        meaning: 'womb'
      }
    ]
  },
  {
    kanjiName: '傷',
    strokes: 13,
    grade: 6,
    freq: 845,
    meanings: [
      'Wound',
      'Hurt',
      'Injure',
      'Impair',
      'Pain',
      'Injury',
      'Cut',
      'Gash',
      'Scar',
      'Weak Point'
    ],
    on: ['しょう'],
    kun: ['きず', 'いた.む', 'いた.める'],
    jlpt: 1,
    quizAnswers: ['Governmental', 'Wound', 'Descend', 'Half'],
    similars: [
      {
        kanji: '働',
        meaning: 'work'
      },
      {
        kanji: '腸',
        meaning: 'intestines'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '揚',
        meaning: 'raise'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '陽',
        meaning: 'sunshine'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      },
      {
        kanji: '易',
        meaning: 'easy'
      },
      {
        kanji: '動',
        meaning: 'move'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      }
    ]
  },
  {
    kanjiName: '厳',
    strokes: 17,
    grade: 6,
    freq: 638,
    meanings: ['Stern', 'Strictness', 'Severity', 'Rigidity'],
    on: ['げん', 'ごん'],
    kun: ['おごそ.か', 'きび.しい', 'いか.めしい', 'いつくし'],
    jlpt: 1,
    quizAnswers: ['Again', 'Throw Away', 'Hundred', 'Stern'],
    similars: [
      {
        kanji: '敢',
        meaning: 'daring'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '潮',
        meaning: 'tide'
      },
      {
        kanji: '懐',
        meaning: 'feelings'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '棋',
        meaning: 'chess piece'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      },
      {
        kanji: '濃',
        meaning: 'concentrated'
      },
      {
        kanji: '散',
        meaning: 'scatter'
      },
      {
        kanji: '摂',
        meaning: 'vicarious'
      }
    ]
  },
  {
    kanjiName: '密',
    strokes: 11,
    grade: 6,
    freq: 815,
    meanings: ['Secrecy', 'Density (pop)', 'Minuteness', 'Carefulness'],
    on: ['みつ'],
    kun: ['ひそ.か'],
    jlpt: 1,
    quizAnswers: ['Station', 'Secrecy', 'Article', 'Wicked'],
    similars: [
      {
        kanji: '泌',
        meaning: 'ooze'
      },
      {
        kanji: '空',
        meaning: 'empty'
      },
      {
        kanji: '室',
        meaning: 'room'
      },
      {
        kanji: '帝',
        meaning: 'sovereign'
      },
      {
        kanji: '窓',
        meaning: 'window'
      },
      {
        kanji: '必',
        meaning: 'invariably'
      },
      {
        kanji: '幽',
        meaning: 'seclude'
      },
      {
        kanji: '宰',
        meaning: 'superintend'
      },
      {
        kanji: '綱',
        meaning: 'hawser'
      },
      {
        kanji: '寧',
        meaning: 'rather'
      }
    ]
  },
  {
    kanjiName: '暖',
    strokes: 13,
    grade: 6,
    freq: 1371,
    meanings: ['Warmth'],
    on: ['だん', 'のん'],
    kun: ['あたた.か', 'あたた.かい', 'あたた.まる', 'あたた.める'],
    jlpt: 1,
    quizAnswers: ['Warmth', 'Answer', 'Together', 'Imbibe'],
    similars: [
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      },
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '緩',
        meaning: 'slacken'
      },
      {
        kanji: '瞬',
        meaning: 'wink'
      },
      {
        kanji: '楽',
        meaning: 'music'
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      }
    ]
  },
  {
    kanjiName: '秘',
    strokes: 10,
    grade: 6,
    freq: 862,
    meanings: ['Secret', 'Conceal'],
    on: ['ひ'],
    kun: ['ひ.める', 'ひそ.か', 'かく.す'],
    jlpt: 1,
    quizAnswers: ['Conclusion', 'Support', 'Well', 'Secret'],
    similars: [
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '移',
        meaning: 'shift'
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls'
      },
      {
        kanji: '私',
        meaning: 'private'
      },
      {
        kanji: '松',
        meaning: 'pine tree'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '穏',
        meaning: 'calm'
      }
    ]
  },
  {
    kanjiName: '訳',
    strokes: 11,
    grade: 6,
    freq: 1050,
    meanings: ['Translate', 'Reason', 'Circumstance', 'Case'],
    on: ['やく'],
    kun: ['わけ'],
    jlpt: 1,
    quizAnswers: ['Translate', 'Be Informed', 'Accomplished', 'Virus'],
    similars: [
      {
        kanji: '詠',
        meaning: 'recitation'
      },
      {
        kanji: '記',
        meaning: 'scribe'
      },
      {
        kanji: '設',
        meaning: 'establishment'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '証',
        meaning: 'evidence'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '説',
        meaning: 'opinion'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      }
    ]
  },
  {
    kanjiName: '染',
    strokes: 9,
    grade: 6,
    freq: 837,
    meanings: ['Dye', 'Color', 'Paint', 'Stain', 'Print'],
    on: ['せん'],
    kun: ['そ.める', '-ぞ.め', '-ぞめ', 'そ.まる', 'し.みる', '-じ.みる', 'し.み', '-し.める'],
    jlpt: 1,
    quizAnswers: ['Consultation', 'Command', 'Reach', 'Dye'],
    similars: [
      {
        kanji: '派',
        meaning: 'faction'
      },
      {
        kanji: '深',
        meaning: 'deep'
      },
      {
        kanji: '決',
        meaning: 'decide'
      },
      {
        kanji: '米',
        meaning: 'rice'
      },
      {
        kanji: '来',
        meaning: 'come'
      },
      {
        kanji: '栄',
        meaning: 'flourish'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '浜',
        meaning: 'seacoast'
      },
      {
        kanji: '案',
        meaning: 'plan'
      },
      {
        kanji: '減',
        meaning: 'dwindle'
      }
    ]
  },
  {
    kanjiName: '筋',
    strokes: 12,
    grade: 6,
    freq: 744,
    meanings: ['Muscle', 'Sinew', 'Tendon', 'Fiber', 'Plot', 'Plan', 'Descent'],
    on: ['きん'],
    kun: ['すじ'],
    jlpt: 1,
    quizAnswers: ['Muscle', 'Imitate', 'Depend', 'Multiplication'],
    similars: [
      {
        kanji: '算',
        meaning: 'calculate'
      },
      {
        kanji: '節',
        meaning: 'node'
      },
      {
        kanji: '範',
        meaning: 'pattern'
      },
      {
        kanji: '符',
        meaning: 'token'
      },
      {
        kanji: '筒',
        meaning: 'cylinder'
      },
      {
        kanji: '笑',
        meaning: 'laugh'
      },
      {
        kanji: '第',
        meaning: 'No.'
      },
      {
        kanji: '笛',
        meaning: 'flute'
      },
      {
        kanji: '答',
        meaning: 'solution'
      },
      {
        kanji: '箱',
        meaning: 'box'
      }
    ]
  },
  {
    kanjiName: '垂',
    strokes: 8,
    grade: 6,
    freq: 1720,
    meanings: ['Droop', 'Suspend', 'Hang', 'Slouch'],
    on: ['すい'],
    kun: ['た.れる', 'た.らす', 'た.れ', '-た.れ', 'なんなんと.す'],
    jlpt: 1,
    quizAnswers: ['Droop', 'Arts', 'Rank', 'Shut'],
    similars: [
      {
        kanji: '佳',
        meaning: 'excellent'
      },
      {
        kanji: '乗',
        meaning: 'ride'
      },
      {
        kanji: '郵',
        meaning: 'mail'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '供',
        meaning: 'submit'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '年',
        meaning: 'year'
      },
      {
        kanji: '睡',
        meaning: 'drowsy'
      },
      {
        kanji: '差',
        meaning: 'distinction'
      }
    ]
  },
  {
    kanjiName: '宣',
    strokes: 9,
    grade: 6,
    freq: 695,
    meanings: ['Proclaim', 'Say', 'Announce'],
    on: ['せん'],
    kun: ['のたま.う'],
    jlpt: 1,
    quizAnswers: ['Proclaim', 'Country', 'Camp', 'Annoyed'],
    similars: [
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '恒',
        meaning: 'constancy'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '宴',
        meaning: 'banquet'
      },
      {
        kanji: '宜',
        meaning: 'best regards'
      },
      {
        kanji: '揮',
        meaning: 'brandish'
      },
      {
        kanji: '垣',
        meaning: 'hedge'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      }
    ]
  },
  {
    kanjiName: '忠',
    strokes: 8,
    grade: 6,
    freq: 1113,
    meanings: ['Loyalty', 'Fidelity', 'Faithfulness'],
    on: ['ちゅう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Loyalty', 'Darling', 'Quality', 'Lot'],
    similars: [
      {
        kanji: '患',
        meaning: 'afflicted'
      },
      {
        kanji: '怠',
        meaning: 'neglect'
      },
      {
        kanji: '惑',
        meaning: 'beguile'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '感',
        meaning: 'emotion'
      },
      {
        kanji: '忘',
        meaning: 'forget'
      },
      {
        kanji: '忌',
        meaning: 'mourning'
      },
      {
        kanji: '念',
        meaning: 'wish'
      },
      {
        kanji: '志',
        meaning: 'intention'
      },
      {
        kanji: '誌',
        meaning: 'document'
      }
    ]
  },
  {
    kanjiName: '拡',
    strokes: 8,
    grade: 6,
    freq: 611,
    meanings: ['Broaden', 'Extend', 'Expand', 'Enlarge'],
    on: ['かく', 'こう'],
    kun: ['ひろ.がる', 'ひろ.げる', 'ひろ.める'],
    jlpt: 1,
    quizAnswers: ['Foment', 'Perfection', 'Ticket', 'Broaden'],
    similars: [
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '持',
        meaning: 'hold'
      },
      {
        kanji: '拷',
        meaning: 'torture'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '広',
        meaning: 'wide'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '払',
        meaning: 'pay'
      },
      {
        kanji: '芸',
        meaning: 'technique'
      },
      {
        kanji: '去',
        meaning: 'gone'
      },
      {
        kanji: '扶',
        meaning: 'aid'
      }
    ]
  },
  {
    kanjiName: '操',
    strokes: 16,
    grade: 6,
    freq: 1016,
    meanings: ['Maneuver', 'Manipulate', 'Operate', 'Steer', 'Chastity', 'Virginity', 'Fidelity'],
    on: ['そう', 'さん'],
    kun: ['みさお', 'あやつ.る'],
    jlpt: 1,
    quizAnswers: ['Maneuver', 'Emotion', 'Nation', 'Similar'],
    similars: [
      {
        kanji: '藻',
        meaning: 'seaweed'
      },
      {
        kanji: '燥',
        meaning: 'parch'
      },
      {
        kanji: '繰',
        meaning: 'winding'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '謀',
        meaning: 'conspire'
      },
      {
        kanji: '拒',
        meaning: 'repel'
      },
      {
        kanji: '靴',
        meaning: 'shoes'
      },
      {
        kanji: '集',
        meaning: 'gather'
      }
    ]
  },
  {
    kanjiName: '熟',
    strokes: 15,
    grade: 6,
    freq: 1415,
    meanings: ['Mellow', 'Ripen', 'Mature', 'Acquire Skill'],
    on: ['じゅく'],
    kun: ['う.れる'],
    jlpt: 1,
    quizAnswers: ['Mellow', 'Liking', 'Full (month)', 'New'],
    similars: [
      {
        kanji: '塾',
        meaning: 'cram school'
      },
      {
        kanji: '熱',
        meaning: 'heat'
      },
      {
        kanji: '点',
        meaning: 'spot'
      },
      {
        kanji: '就',
        meaning: 'concerning'
      },
      {
        kanji: '郭',
        meaning: 'enclosure'
      },
      {
        kanji: '惑',
        meaning: 'beguile'
      },
      {
        kanji: '蒸',
        meaning: 'steam'
      },
      {
        kanji: '感',
        meaning: 'emotion'
      },
      {
        kanji: '京',
        meaning: 'capital'
      },
      {
        kanji: '享',
        meaning: 'enjoy'
      }
    ]
  },
  {
    kanjiName: '異',
    strokes: 11,
    grade: 6,
    freq: 631,
    meanings: [
      'Uncommon',
      'Different',
      'Queerness',
      'Strangeness',
      'Wonderful',
      'Curious',
      'Unusual'
    ],
    on: ['い'],
    kun: ['こと', 'こと.なる', 'け'],
    jlpt: 1,
    quizAnswers: ['Uncommon', 'Relay Station', 'Heaven', 'Absolve'],
    similars: [
      {
        kanji: '時',
        meaning: 'time'
      },
      {
        kanji: '翼',
        meaning: 'wing'
      },
      {
        kanji: '是',
        meaning: 'just so'
      },
      {
        kanji: '映',
        meaning: 'reflect'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '睡',
        meaning: 'drowsy'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '農',
        meaning: 'agriculture'
      },
      {
        kanji: '暴',
        meaning: 'outburst'
      },
      {
        kanji: '暁',
        meaning: 'daybreak'
      }
    ]
  },
  {
    kanjiName: '皇',
    strokes: 9,
    grade: 6,
    freq: 721,
    meanings: ['Emperor'],
    on: ['こう', 'おう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Reformation', 'Emperor', 'Car', 'Lower'],
    similars: [
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      },
      {
        kanji: '里',
        meaning: 'ri'
      },
      {
        kanji: '厘',
        meaning: 'rin'
      },
      {
        kanji: '時',
        meaning: 'time'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '住',
        meaning: 'dwell'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      },
      {
        kanji: '島',
        meaning: 'island'
      },
      {
        kanji: '埋',
        meaning: 'bury'
      }
    ]
  },
  {
    kanjiName: '盛',
    strokes: 11,
    grade: 6,
    freq: 712,
    meanings: ['Boom', 'Prosper', 'Copulate'],
    on: ['せい', 'じょう'],
    kun: ['も.る', 'さか.る', 'さか.ん'],
    jlpt: 1,
    quizAnswers: ['Person In Charge', 'Carry Out', 'Provision', 'Boom'],
    similars: [
      {
        kanji: '盆',
        meaning: 'basin'
      },
      {
        kanji: '益',
        meaning: 'benefit'
      },
      {
        kanji: '血',
        meaning: 'blood'
      },
      {
        kanji: '租',
        meaning: 'tariff'
      },
      {
        kanji: '猛',
        meaning: 'fierce'
      },
      {
        kanji: '盗',
        meaning: 'steal'
      },
      {
        kanji: '盤',
        meaning: 'tray'
      },
      {
        kanji: '盟',
        meaning: 'alliance'
      },
      {
        kanji: '塩',
        meaning: 'salt'
      },
      {
        kanji: '症',
        meaning: 'symptoms'
      }
    ]
  },
  {
    kanjiName: '漠',
    strokes: 13,
    grade: 8,
    freq: 1611,
    meanings: ['Vague', 'Obscure', 'Desert', 'Wide'],
    on: ['ばく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Inn', 'Pivot', 'Hall', 'Vague'],
    similars: [
      {
        kanji: '漢',
        meaning: 'Sino-'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '膜',
        meaning: 'membrane'
      },
      {
        kanji: '模',
        meaning: 'imitation'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      },
      {
        kanji: '寛',
        meaning: 'tolerant'
      },
      {
        kanji: '源',
        meaning: 'source'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '潮',
        meaning: 'tide'
      }
    ]
  },
  {
    kanjiName: '糖',
    strokes: 16,
    grade: 6,
    freq: 1471,
    meanings: ['Sugar'],
    on: ['とう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Revert', 'Tug', 'Sugar', 'Climate'],
    similars: [
      {
        kanji: '粧',
        meaning: 'cosmetics'
      },
      {
        kanji: '唐',
        meaning: "T'ang"
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '粘',
        meaning: 'sticky'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '誉',
        meaning: 'reputation'
      },
      {
        kanji: '精',
        meaning: 'refined'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      },
      {
        kanji: '枯',
        meaning: 'wither'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      }
    ]
  },
  {
    kanjiName: '納',
    strokes: 10,
    grade: 6,
    freq: 987,
    meanings: ['Settlement', 'Obtain', 'Reap', 'Pay', 'Supply', 'Store'],
    on: ['のう', 'なっ', 'な', 'なん', 'とう'],
    kun: ['おさ.める', '-おさ.める', 'おさ.まる'],
    jlpt: 1,
    quizAnswers: ['Sole', 'Settlement', 'Ability', 'Bountiful'],
    similars: [
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '綱',
        meaning: 'hawser'
      },
      {
        kanji: '網',
        meaning: 'netting'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      },
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '継',
        meaning: 'inherit'
      },
      {
        kanji: '絹',
        meaning: 'silk'
      },
      {
        kanji: '純',
        meaning: 'genuine'
      }
    ]
  },
  {
    kanjiName: '肺',
    strokes: 9,
    grade: 6,
    freq: 1387,
    meanings: ['Lungs'],
    on: ['はい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Wind', 'Lungs', 'Cool', 'Lap'],
    similars: [
      {
        kanji: '肪',
        meaning: 'obese'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '脚',
        meaning: 'skids'
      },
      {
        kanji: '胴',
        meaning: 'trunk'
      },
      {
        kanji: '用',
        meaning: 'utilize'
      },
      {
        kanji: '肢',
        meaning: 'limb'
      },
      {
        kanji: '胎',
        meaning: 'womb'
      },
      {
        kanji: '希',
        meaning: 'hope'
      },
      {
        kanji: '布',
        meaning: 'linen'
      },
      {
        kanji: '服',
        meaning: 'clothing'
      }
    ]
  },
  {
    kanjiName: '賃',
    strokes: 13,
    grade: 6,
    freq: 961,
    meanings: ['Fare', 'Fee', 'Hire', 'Rent', 'Wages', 'Charge'],
    on: ['ちん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Period', 'The', 'Excellent', 'Fare'],
    similars: [
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '積',
        meaning: 'volume'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '貨',
        meaning: 'freight'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '貴',
        meaning: 'precious'
      },
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '貸',
        meaning: 'lend'
      },
      {
        kanji: '横',
        meaning: 'sideways'
      }
    ]
  },
  {
    kanjiName: '貴',
    strokes: 12,
    grade: 6,
    freq: 970,
    meanings: ['Precious', 'Value', 'Prize', 'Esteem', 'Honor'],
    on: ['き'],
    kun: ['たっと.い', 'とうと.い', 'たっと.ぶ', 'とうと.ぶ'],
    jlpt: 1,
    quizAnswers: ['Brood Over', 'Precious', 'Scatter', 'Suit'],
    similars: [
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '遺',
        meaning: 'bequeath'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '貫',
        meaning: 'pierce'
      },
      {
        kanji: '買',
        meaning: 'buy'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '噴',
        meaning: 'erupt'
      },
      {
        kanji: '慣',
        meaning: 'accustomed'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '頭',
        meaning: 'head'
      }
    ]
  },
  {
    kanjiName: '吐',
    strokes: 6,
    grade: 8,
    freq: 1674,
    meanings: ['Spit', 'Vomit', 'Belch', 'Confess', 'Tell (lies)'],
    on: ['と'],
    kun: ['は.く', 'つ.く'],
    jlpt: 1,
    quizAnswers: ['Sell', 'Corner', 'Inferior', 'Spit'],
    similars: [
      {
        kanji: '呈',
        meaning: 'display'
      },
      {
        kanji: '亜',
        meaning: 'Asia'
      },
      {
        kanji: '壮',
        meaning: 'robust'
      },
      {
        kanji: '号',
        meaning: 'nickname'
      },
      {
        kanji: '叫',
        meaning: 'shout'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '吟',
        meaning: 'versify'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '呉',
        meaning: 'give'
      },
      {
        kanji: '堂',
        meaning: 'public chamber'
      }
    ]
  },
  {
    kanjiName: '奴',
    strokes: 5,
    grade: 8,
    freq: 1932,
    meanings: ['Guy', 'Slave', 'Manservant', 'Fellow'],
    on: ['ど'],
    kun: ['やつ', 'やっこ'],
    jlpt: 1,
    quizAnswers: ['Calling Card', 'Income', 'Guy', 'Course'],
    similars: [
      {
        kanji: '努',
        meaning: 'toil'
      },
      {
        kanji: '友',
        meaning: 'friend'
      },
      {
        kanji: '久',
        meaning: 'long time'
      },
      {
        kanji: '反',
        meaning: 'anti-'
      },
      {
        kanji: '怒',
        meaning: 'angry'
      },
      {
        kanji: '好',
        meaning: 'fond'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '如',
        meaning: 'likeness'
      },
      {
        kanji: '妃',
        meaning: 'queen'
      },
      {
        kanji: '没',
        meaning: 'drown'
      }
    ]
  },
  {
    kanjiName: '隷',
    strokes: 16,
    grade: 8,
    freq: 2009,
    meanings: ['Slave', 'Servant', 'Prisoner', 'Criminal', 'Follower'],
    on: ['れい'],
    kun: ['したが.う', 'しもべ'],
    jlpt: 1,
    quizAnswers: ['Tight', 'Slave', 'Occasional', 'Be Depressed'],
    similars: [
      {
        kanji: '康',
        meaning: 'ease'
      },
      {
        kanji: '款',
        meaning: 'goodwill'
      },
      {
        kanji: '録',
        meaning: 'record'
      },
      {
        kanji: '緑',
        meaning: 'green'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '耕',
        meaning: 'till'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      },
      {
        kanji: '泰',
        meaning: 'peaceful'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      }
    ]
  },
  {
    kanjiName: '芋',
    strokes: 6,
    grade: 8,
    freq: 2418,
    meanings: ['Potato'],
    on: ['う'],
    kun: ['いも'],
    jlpt: 1,
    quizAnswers: ['Department', 'Potato', 'Put On', 'Stiff'],
    similars: [
      {
        kanji: '芽',
        meaning: 'bud'
      },
      {
        kanji: '芸',
        meaning: 'technique'
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple'
      },
      {
        kanji: '王',
        meaning: 'king'
      },
      {
        kanji: '玉',
        meaning: 'jewel'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '坊',
        meaning: 'boy'
      },
      {
        kanji: '坑',
        meaning: 'pit'
      },
      {
        kanji: '芳',
        meaning: 'perfume'
      },
      {
        kanji: '持',
        meaning: 'hold'
      }
    ]
  },
  {
    kanjiName: '縮',
    strokes: 17,
    grade: 6,
    freq: 909,
    meanings: ['Shrink', 'Contract', 'Shrivel', 'Wrinkle', 'Reduce'],
    on: ['しゅく'],
    kun: ['ちぢ.む', 'ちぢ.まる', 'ちぢ.める', 'ちぢ.れる', 'ちぢ.らす'],
    jlpt: 1,
    quizAnswers: ['Warp', 'Print', 'Shrink', 'Consume'],
    similars: [
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '宿',
        meaning: 'inn'
      },
      {
        kanji: '織',
        meaning: 'weave'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      },
      {
        kanji: '継',
        meaning: 'inherit'
      },
      {
        kanji: '緩',
        meaning: 'slacken'
      },
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '絹',
        meaning: 'silk'
      }
    ]
  },
  {
    kanjiName: '縦',
    strokes: 16,
    grade: 6,
    freq: 1258,
    meanings: ['Vertical', 'Length', 'Height', 'Self-indulgent', 'Wayward'],
    on: ['じゅう'],
    kun: ['たて'],
    jlpt: 1,
    quizAnswers: ['Circumference', 'Vertical', 'Fasten', 'Talk'],
    similars: [
      {
        kanji: '緩',
        meaning: 'slacken'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      },
      {
        kanji: '綱',
        meaning: 'hawser'
      },
      {
        kanji: '線',
        meaning: 'line'
      },
      {
        kanji: '従',
        meaning: 'accompany'
      },
      {
        kanji: '網',
        meaning: 'netting'
      },
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '紹',
        meaning: 'introduce'
      }
    ]
  },
  {
    kanjiName: '粋',
    strokes: 10,
    grade: 8,
    freq: 1768,
    meanings: ['Chic', 'Style', 'Purity', 'Essence', 'Pith', 'Cream', 'Elite', 'Choice'],
    on: ['すい'],
    kun: ['いき'],
    jlpt: 1,
    quizAnswers: ['Drawing', 'Hour', 'Course', 'Chic'],
    similars: [
      {
        kanji: '断',
        meaning: 'severance'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '料',
        meaning: 'fee'
      },
      {
        kanji: '粉',
        meaning: 'flour'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '新',
        meaning: 'new'
      },
      {
        kanji: '数',
        meaning: 'number'
      },
      {
        kanji: '砕',
        meaning: 'smash'
      },
      {
        kanji: '卒',
        meaning: 'graduate'
      },
      {
        kanji: '科',
        meaning: 'department'
      }
    ]
  },
  {
    kanjiName: '聖',
    strokes: 13,
    grade: 6,
    freq: 1165,
    meanings: ['Holy', 'Saint', 'Sage', 'Master', 'Priest'],
    on: ['せい', 'しょう'],
    kun: ['ひじり'],
    jlpt: 1,
    quizAnswers: ['Perverse', 'Business', 'Chest', 'Holy'],
    similars: [
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '堂',
        meaning: 'public chamber'
      },
      {
        kanji: '班',
        meaning: 'squad'
      },
      {
        kanji: '呈',
        meaning: 'display'
      },
      {
        kanji: '轄',
        meaning: 'control'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      },
      {
        kanji: '吐',
        meaning: 'spit'
      },
      {
        kanji: '理',
        meaning: 'logic'
      },
      {
        kanji: '荘',
        meaning: 'villa'
      },
      {
        kanji: '取',
        meaning: 'take'
      }
    ]
  },
  {
    kanjiName: '磁',
    strokes: 14,
    grade: 6,
    freq: 1686,
    meanings: ['Magnet', 'Porcelain'],
    on: ['じ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Seduce', 'Cap', 'Braid', 'Magnet'],
    similars: [
      {
        kanji: '滋',
        meaning: 'nourishing'
      },
      {
        kanji: '硫',
        meaning: 'sulphur'
      },
      {
        kanji: '係',
        meaning: 'person in charge'
      },
      {
        kanji: '砂',
        meaning: 'sand'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '礁',
        meaning: 'reef'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '頭',
        meaning: 'head'
      },
      {
        kanji: '避',
        meaning: 'evade'
      },
      {
        kanji: '砲',
        meaning: 'cannon'
      }
    ]
  },
  {
    kanjiName: '射',
    strokes: 10,
    grade: 6,
    freq: 937,
    meanings: ['Shoot', 'Shine Into', 'Onto', 'Archery'],
    on: ['しゃ'],
    kun: ['い.る', 'さ.す', 'う.つ'],
    jlpt: 1,
    quizAnswers: ['Occupy', 'Set Free', 'Shoot', '10**8'],
    similars: [
      {
        kanji: '身',
        meaning: 'somebody'
      },
      {
        kanji: '謝',
        meaning: 'apologize'
      },
      {
        kanji: '餓',
        meaning: 'starve'
      },
      {
        kanji: '肪',
        meaning: 'obese'
      },
      {
        kanji: '専',
        meaning: 'specialty'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '敢',
        meaning: 'daring'
      },
      {
        kanji: '的',
        meaning: "bull's eye"
      },
      {
        kanji: '肌',
        meaning: 'texture'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      }
    ]
  },
  {
    kanjiName: '幕',
    strokes: 13,
    grade: 6,
    freq: 835,
    meanings: ['Curtain', 'Bunting', 'Act Of Play'],
    on: ['まく', 'ばく'],
    kun: ['とばり'],
    jlpt: 1,
    quizAnswers: ['Curtain', 'Draft', 'Expect', 'Cluster'],
    similars: [
      {
        kanji: '暮',
        meaning: 'evening'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '募',
        meaning: 'recruit'
      },
      {
        kanji: '慕',
        meaning: 'pining'
      },
      {
        kanji: '幹',
        meaning: 'tree trunk'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '輪',
        meaning: 'wheel'
      }
    ]
  },
  {
    kanjiName: '薦',
    strokes: 16,
    grade: 8,
    freq: 1082,
    meanings: ['Recommend', 'Mat', 'Advise', 'Encourage', 'Offer'],
    on: ['せん'],
    kun: ['すす.める'],
    jlpt: 1,
    quizAnswers: ['Incline', 'Species', 'Include', 'Recommend'],
    similars: [
      {
        kanji: '薫',
        meaning: 'send forth fragrance'
      },
      {
        kanji: '無',
        meaning: 'nothingness'
      },
      {
        kanji: '蒸',
        meaning: 'steam'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '庶',
        meaning: 'commoner'
      },
      {
        kanji: '華',
        meaning: 'splendor'
      },
      {
        kanji: '恭',
        meaning: 'respect'
      },
      {
        kanji: '熱',
        meaning: 'heat'
      },
      {
        kanji: '壌',
        meaning: 'lot'
      },
      {
        kanji: '驚',
        meaning: 'wonder'
      }
    ]
  },
  {
    kanjiName: '推',
    strokes: 11,
    grade: 6,
    freq: 507,
    meanings: ['Conjecture', 'Infer', 'Guess', 'Suppose', 'Support', 'Push (for)'],
    on: ['すい'],
    kun: ['お.す'],
    jlpt: 1,
    quizAnswers: ['Descendants', 'Beforehand', 'Conjecture', 'Music'],
    similars: [
      {
        kanji: '携',
        meaning: 'portable'
      },
      {
        kanji: '准',
        meaning: 'quasi-'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '準',
        meaning: 'semi-'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '擁',
        meaning: 'hug'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      }
    ]
  },
  {
    kanjiName: '揮',
    strokes: 12,
    grade: 6,
    freq: 946,
    meanings: ['Brandish', 'Wave', 'Wag', 'Swing', 'Shake'],
    on: ['き'],
    kun: ['ふる.う'],
    jlpt: 1,
    quizAnswers: ['Fathom', 'Brandish', 'Art', 'Admit'],
    similars: [
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '挿',
        meaning: 'insert'
      },
      {
        kanji: '輝',
        meaning: 'radiance'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '押',
        meaning: 'push'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '捕',
        meaning: 'catch'
      }
    ]
  },
  {
    kanjiName: '沿',
    strokes: 8,
    grade: 6,
    freq: 1121,
    meanings: ['Run Alongside', 'Follow Along', 'Run Along', 'Lie Along'],
    on: ['えん'],
    kun: ['そ.う', '-ぞ.い'],
    jlpt: 1,
    quizAnswers: ['Line', 'Run Alongside', 'Kind', 'Rape'],
    similars: [
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '活',
        meaning: 'lively'
      },
      {
        kanji: '沼',
        meaning: 'marsh'
      },
      {
        kanji: '治',
        meaning: 'reign'
      },
      {
        kanji: '谷',
        meaning: 'valley'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '洞',
        meaning: 'den'
      },
      {
        kanji: '客',
        meaning: 'guest'
      },
      {
        kanji: '落',
        meaning: 'fall'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      }
    ]
  },
  {
    kanjiName: '源',
    strokes: 13,
    grade: 6,
    freq: 738,
    meanings: ['Source', 'Origin'],
    on: ['げん'],
    kun: ['みなもと'],
    jlpt: 1,
    quizAnswers: ['Drink', 'Idea', 'Cushion', 'Source'],
    similars: [
      {
        kanji: '原',
        meaning: 'meadow'
      },
      {
        kanji: '寮',
        meaning: 'dormitory'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '療',
        meaning: 'heal'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '賓',
        meaning: 'V.I.P.'
      },
      {
        kanji: '僚',
        meaning: 'colleague'
      },
      {
        kanji: '瀬',
        meaning: 'rapids'
      },
      {
        kanji: '預',
        meaning: 'deposit'
      },
      {
        kanji: '順',
        meaning: 'obey'
      }
    ]
  },
  {
    kanjiName: '歓',
    strokes: 15,
    grade: 8,
    freq: 1065,
    meanings: ['Delight', 'Joy'],
    on: ['かん'],
    kun: ['よろこ.ぶ'],
    jlpt: 1,
    quizAnswers: ['Delight', 'Lamp', 'Becoming', 'Fee'],
    similars: [
      {
        kanji: '勧',
        meaning: 'persuade'
      },
      {
        kanji: '観',
        meaning: 'outlook'
      },
      {
        kanji: '集',
        meaning: 'gather'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '携',
        meaning: 'portable'
      },
      {
        kanji: '隻',
        meaning: 'vessels'
      },
      {
        kanji: '獲',
        meaning: 'seize'
      },
      {
        kanji: '穫',
        meaning: 'harvest'
      },
      {
        kanji: '敵',
        meaning: 'enemy'
      },
      {
        kanji: '帳',
        meaning: 'notebook'
      }
    ]
  },
  {
    kanjiName: '豆',
    strokes: 7,
    grade: 3,
    freq: 1422,
    meanings: ['Beans', 'Pea', 'Midget'],
    on: ['とう', 'ず'],
    kun: ['まめ', 'まめ-'],
    jlpt: 1,
    quizAnswers: ['Righteous', 'Occupation', 'Equal', 'Beans'],
    similars: [
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '亜',
        meaning: 'Asia'
      },
      {
        kanji: '亭',
        meaning: 'pavilion'
      },
      {
        kanji: '事',
        meaning: 'matter'
      },
      {
        kanji: '享',
        meaning: 'enjoy'
      },
      {
        kanji: '呼',
        meaning: 'call'
      },
      {
        kanji: '京',
        meaning: 'capital'
      },
      {
        kanji: '短',
        meaning: 'short'
      },
      {
        kanji: '喜',
        meaning: 'rejoice'
      }
    ]
  },
  {
    kanjiName: '腐',
    strokes: 14,
    grade: 8,
    freq: 1225,
    meanings: ['Rot', 'Decay', 'Sour'],
    on: ['ふ'],
    kun: ['くさ.る', '-くさ.る', 'くさ.れる', 'くさ.れ', 'くさ.らす', 'くさ.す'],
    jlpt: 1,
    quizAnswers: ['Counter For Beds', 'Rot', 'Blow', 'Spot'],
    similars: [
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '康',
        meaning: 'ease'
      },
      {
        kanji: '庶',
        meaning: 'commoner'
      },
      {
        kanji: '斎',
        meaning: 'purification'
      },
      {
        kanji: '痘',
        meaning: 'pox'
      },
      {
        kanji: '病',
        meaning: 'ill'
      },
      {
        kanji: '療',
        meaning: 'heal'
      },
      {
        kanji: '褒',
        meaning: 'praise'
      },
      {
        kanji: '敵',
        meaning: 'enemy'
      },
      {
        kanji: '砂',
        meaning: 'sand'
      }
    ]
  },
  {
    kanjiName: '彫',
    strokes: 11,
    grade: 8,
    freq: 1533,
    meanings: ['Carve', 'Engrave', 'Chisel'],
    on: ['ちょう'],
    kun: ['ほ.る', '-ぼ.り'],
    jlpt: 1,
    quizAnswers: ['Thick', 'Non-', 'Convert', 'Carve'],
    similars: [
      {
        kanji: '周',
        meaning: 'circumference'
      },
      {
        kanji: '週',
        meaning: 'week'
      },
      {
        kanji: '膨',
        meaning: 'swell'
      },
      {
        kanji: '猿',
        meaning: 'monkey'
      },
      {
        kanji: '園',
        meaning: 'park'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '克',
        meaning: 'overcome'
      },
      {
        kanji: '吉',
        meaning: 'good luck'
      },
      {
        kanji: '告',
        meaning: 'revelation'
      }
    ]
  },
  {
    kanjiName: '舎',
    strokes: 8,
    grade: 5,
    freq: 1170,
    meanings: ['Cottage', 'Inn', 'Hut', 'House', 'Mansion'],
    on: ['しゃ', 'せき'],
    kun: ['やど.る'],
    jlpt: 1,
    quizAnswers: ['Record', 'Replace', 'Grapple', 'Cottage'],
    similars: [
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '合',
        meaning: 'fit'
      },
      {
        kanji: '吉',
        meaning: 'good luck'
      },
      {
        kanji: '舌',
        meaning: 'tongue'
      },
      {
        kanji: '周',
        meaning: 'circumference'
      },
      {
        kanji: '含',
        meaning: 'contain'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '信',
        meaning: 'faith'
      },
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '全',
        meaning: 'whole'
      }
    ]
  },
  {
    kanjiName: '滞',
    strokes: 13,
    grade: 8,
    freq: 1107,
    meanings: ['Stagnate', 'Be Delayed', 'Overdue', 'Arrears'],
    on: ['たい', 'てい'],
    kun: ['とどこお.る'],
    jlpt: 1,
    quizAnswers: ['Limits', 'Regular', 'Rouse', 'Stagnate'],
    similars: [
      {
        kanji: '帯',
        meaning: 'sash'
      },
      {
        kanji: '漂',
        meaning: 'drift'
      },
      {
        kanji: '満',
        meaning: 'full'
      },
      {
        kanji: '席',
        meaning: 'seat'
      },
      {
        kanji: '締',
        meaning: 'tighten'
      },
      {
        kanji: '浦',
        meaning: 'bay'
      },
      {
        kanji: '準',
        meaning: 'semi-'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '沖',
        meaning: 'open sea'
      },
      {
        kanji: '怖',
        meaning: 'dreadful'
      }
    ]
  },
  {
    kanjiName: '己',
    strokes: 3,
    grade: 6,
    freq: 1098,
    meanings: ['Self'],
    on: ['こ', 'き'],
    kun: ['おのれ', 'つちのと', 'な'],
    jlpt: 1,
    quizAnswers: ['Find', 'Self', 'Retreat', 'Rear'],
    similars: [
      {
        kanji: '七',
        meaning: 'seven'
      },
      {
        kanji: '弓',
        meaning: 'bow'
      },
      {
        kanji: '包',
        meaning: 'wrap'
      },
      {
        kanji: '毛',
        meaning: 'fur'
      },
      {
        kanji: '妃',
        meaning: 'queen'
      },
      {
        kanji: '引',
        meaning: 'pull'
      },
      {
        kanji: '弔',
        meaning: 'condolences'
      },
      {
        kanji: '元',
        meaning: 'beginning'
      },
      {
        kanji: '尾',
        meaning: 'tail'
      },
      {
        kanji: '忌',
        meaning: 'mourning'
      }
    ]
  },
  {
    kanjiName: '厄',
    strokes: 4,
    grade: 8,
    freq: 2123,
    meanings: ['Unlucky', 'Misfortune', 'Bad Luck', 'Disaster'],
    on: ['やく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['A Helping', 'Bask In', 'Unlucky', 'Reflect'],
    similars: [
      {
        kanji: '危',
        meaning: 'dangerous'
      },
      {
        kanji: '犯',
        meaning: 'crime'
      },
      {
        kanji: '切',
        meaning: 'cut'
      },
      {
        kanji: '勺',
        meaning: 'ladle'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '犬',
        meaning: 'dog'
      },
      {
        kanji: '匹',
        meaning: 'equal'
      },
      {
        kanji: '区',
        meaning: 'ward'
      },
      {
        kanji: '大',
        meaning: 'large'
      },
      {
        kanji: '友',
        meaning: 'friend'
      }
    ]
  },
  {
    kanjiName: '亀',
    strokes: 11,
    grade: 8,
    freq: 1353,
    meanings: ['Tortoise', 'Turtle'],
    on: ['き', 'きゅう', 'きん'],
    kun: ['かめ'],
    jlpt: 1,
    quizAnswers: ['Commute', 'Government Office', 'Tortoise', 'Well']
  },
  {
    kanjiName: '剣',
    strokes: 10,
    grade: 8,
    freq: 1305,
    meanings: ['Sabre', 'Sword', 'Blade', 'Clock Hand'],
    on: ['けん'],
    kun: ['つるぎ'],
    jlpt: 1,
    quizAnswers: ['Sabre', 'Young Of Animals', 'Hold In The Mouth', 'Always'],
    similars: [
      {
        kanji: '利',
        meaning: 'profit'
      },
      {
        kanji: '使',
        meaning: 'use'
      },
      {
        kanji: '何',
        meaning: 'what'
      },
      {
        kanji: '命',
        meaning: 'fate'
      },
      {
        kanji: '奇',
        meaning: 'strange'
      },
      {
        kanji: '刺',
        meaning: 'thorn'
      },
      {
        kanji: '停',
        meaning: 'halt'
      },
      {
        kanji: '剰',
        meaning: 'surplus'
      },
      {
        kanji: '朴',
        meaning: 'crude'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      }
    ]
  },
  {
    kanjiName: '杉',
    strokes: 7,
    grade: 8,
    freq: 1095,
    meanings: ['Cedar', 'Cryptomeria'],
    on: ['さん'],
    kun: ['すぎ'],
    jlpt: 1,
    quizAnswers: ['View', 'Cedar', 'Pressure', 'Fee'],
    similars: [
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '机',
        meaning: 'desk'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '柳',
        meaning: 'willow'
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)'
      },
      {
        kanji: '彩',
        meaning: 'coloring'
      },
      {
        kanji: '松',
        meaning: 'pine tree'
      },
      {
        kanji: '林',
        meaning: 'grove'
      }
    ]
  },
  {
    kanjiName: '汁',
    strokes: 5,
    grade: 8,
    freq: 1843,
    meanings: ['Soup', 'Juice', 'Broth', 'Sap', 'Gravy', 'Pus'],
    on: ['じゅう'],
    kun: ['しる', '-しる', 'つゆ'],
    jlpt: 1,
    quizAnswers: ['Valley', 'Focus', 'Savings', 'Soup'],
    similars: [
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '斗',
        meaning: 'Big Dipper'
      },
      {
        kanji: '池',
        meaning: 'pond'
      },
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '汚',
        meaning: 'dirty'
      },
      {
        kanji: '河',
        meaning: 'river'
      },
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '半',
        meaning: 'half'
      },
      {
        kanji: '平',
        meaning: 'even'
      },
      {
        kanji: '汽',
        meaning: 'vapor'
      }
    ]
  },
  {
    kanjiName: '炎',
    strokes: 8,
    grade: 8,
    freq: 1242,
    meanings: ['Inflammation', 'Flame', 'Blaze'],
    on: ['えん'],
    kun: ['ほのお'],
    jlpt: 1,
    quizAnswers: ['Warp', 'Square', 'Inflammation', 'Match'],
    similars: [
      {
        kanji: '炊',
        meaning: 'cook'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      },
      {
        kanji: '淡',
        meaning: 'thin'
      },
      {
        kanji: '灰',
        meaning: 'ashes'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '断',
        meaning: 'severance'
      },
      {
        kanji: '釈',
        meaning: 'explanation'
      },
      {
        kanji: '数',
        meaning: 'number'
      }
    ]
  },
  {
    kanjiName: '為',
    strokes: 9,
    grade: 8,
    freq: 831,
    meanings: [
      'Do',
      'Change',
      'Make',
      'Benefit',
      'Welfare',
      'Be Of Use',
      'Reach To',
      'Try',
      'Practice',
      'Cost',
      'Serve As',
      'Good',
      'Advantage',
      'As A Result Of'
    ],
    on: ['い'],
    kun: ['ため', 'な.る', 'な.す', 'す.る', 'たり', 'つく.る', 'なり'],
    jlpt: 1,
    quizAnswers: ['Roll Up', 'Revert', 'Extraordinary', 'Do'],
    similars: [
      {
        kanji: '偽',
        meaning: 'falsehood'
      },
      {
        kanji: '点',
        meaning: 'spot'
      },
      {
        kanji: '烈',
        meaning: 'ardent'
      },
      {
        kanji: '潟',
        meaning: 'lagoon'
      },
      {
        kanji: '照',
        meaning: 'illuminate'
      },
      {
        kanji: '慈',
        meaning: 'mercy'
      },
      {
        kanji: '庶',
        meaning: 'commoner'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '州',
        meaning: 'state'
      },
      {
        kanji: '雨',
        meaning: 'rain'
      }
    ]
  },
  {
    kanjiName: '熊',
    strokes: 14,
    grade: 8,
    freq: 1105,
    meanings: ['Bear'],
    on: ['ゆう'],
    kun: ['くま'],
    jlpt: 1,
    quizAnswers: ['Omission', 'Suffer From', 'Suffering', 'Bear']
  },
  {
    kanjiName: '獄',
    strokes: 14,
    grade: 8,
    freq: 1529,
    meanings: ['Prison', 'Jail'],
    on: ['ごく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Prison', 'Defeat', 'Collect', 'Grant'],
    similars: [
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '猿',
        meaning: 'monkey'
      },
      {
        kanji: '訟',
        meaning: 'sue'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      },
      {
        kanji: '訳',
        meaning: 'translate'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '信',
        meaning: 'faith'
      }
    ]
  },
  {
    kanjiName: '酔',
    strokes: 11,
    grade: 8,
    freq: 1640,
    meanings: ['Drunk', 'Feel Sick', 'Poisoned', 'Elated', 'Spellbound'],
    on: ['すい'],
    kun: ['よ.う', 'よ.い', 'よ'],
    jlpt: 1,
    quizAnswers: ['Follow', 'Drunk', 'Appearance', 'Doctor'],
    similars: [
      {
        kanji: '酢',
        meaning: 'vinegar'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '配',
        meaning: 'distribute'
      },
      {
        kanji: '酷',
        meaning: 'cruel'
      },
      {
        kanji: '酬',
        meaning: 'repay'
      },
      {
        kanji: '酪',
        meaning: 'dairy products'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '昇',
        meaning: 'rise up'
      }
    ]
  },
  {
    kanjiName: '酢',
    strokes: 12,
    grade: 8,
    freq: 1955,
    meanings: ['Vinegar', 'Sour', 'Acid', 'Tart'],
    on: ['さく'],
    kun: ['す'],
    jlpt: 1,
    quizAnswers: ['Letter', 'Drawing', 'Rare', 'Vinegar'],
    similars: [
      {
        kanji: '酷',
        meaning: 'cruel'
      },
      {
        kanji: '酪',
        meaning: 'dairy products'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      },
      {
        kanji: '昨',
        meaning: 'yesterday'
      },
      {
        kanji: '酬',
        meaning: 'repay'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '配',
        meaning: 'distribute'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      }
    ]
  },
  {
    kanjiName: '盟',
    strokes: 13,
    grade: 6,
    freq: 587,
    meanings: ['Alliance', 'Oath'],
    on: ['めい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Alliance', 'Country', 'Capacity', 'Employment'],
    similars: [
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '明',
        meaning: 'bright'
      },
      {
        kanji: '聞',
        meaning: 'hear'
      },
      {
        kanji: '睡',
        meaning: 'drowsy'
      },
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '開',
        meaning: 'open'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '間',
        meaning: 'interval'
      }
    ]
  },
  {
    kanjiName: '遺',
    strokes: 15,
    grade: 6,
    freq: 647,
    meanings: ['Bequeath', 'Leave Behind', 'Reserve'],
    on: ['い', 'ゆい'],
    kun: ['のこ.す'],
    jlpt: 1,
    quizAnswers: ['Bequeath', 'Go Backwards', 'Severance', 'Down'],
    similars: [
      {
        kanji: '貴',
        meaning: 'precious'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '買',
        meaning: 'buy'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '貫',
        meaning: 'pierce'
      },
      {
        kanji: '鳴',
        meaning: 'chirp'
      },
      {
        kanji: '遣',
        meaning: 'dispatch'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      }
    ]
  },
  {
    kanjiName: '債',
    strokes: 13,
    grade: 8,
    freq: 728,
    meanings: ['Bond', 'Loan', 'Debt'],
    on: ['さい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Circle', 'Bond', 'Understand', 'Hand'],
    similars: [
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '積',
        meaning: 'volume'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '貸',
        meaning: 'lend'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '績',
        meaning: 'exploits'
      }
    ]
  },
  {
    kanjiName: '及',
    strokes: 3,
    grade: 8,
    freq: 544,
    meanings: ['Reach Out', 'Exert', 'Exercise', 'Cause'],
    on: ['きゅう'],
    kun: ['およ.ぶ', 'およ.び', 'および', 'およ.ぼす'],
    jlpt: 1,
    quizAnswers: ['Reach Out', 'Thong', 'Compared With', 'Gateway'],
    similars: [
      {
        kanji: '人',
        meaning: 'person'
      },
      {
        kanji: '入',
        meaning: 'enter'
      },
      {
        kanji: '久',
        meaning: 'long time'
      },
      {
        kanji: '八',
        meaning: 'eight'
      },
      {
        kanji: '匁',
        meaning: 'monme'
      },
      {
        kanji: '欠',
        meaning: 'lack'
      },
      {
        kanji: '反',
        meaning: 'anti-'
      },
      {
        kanji: '吸',
        meaning: 'suck'
      },
      {
        kanji: '友',
        meaning: 'friend'
      },
      {
        kanji: '火',
        meaning: 'fire'
      }
    ]
  },
  {
    kanjiName: '奈',
    strokes: 8,
    grade: 8,
    freq: 841,
    meanings: ['Nara', 'What?'],
    on: ['な', 'ない', 'だい'],
    kun: ['いかん', 'からなし'],
    jlpt: 1,
    quizAnswers: ['Continuation', 'Nara', 'Residence', 'Counter For Occurrences']
  },
  {
    kanjiName: '廃',
    strokes: 12,
    grade: 8,
    freq: 698,
    meanings: ['Abolish', 'Obsolete', 'Cessation', 'Discarding', 'Abandon'],
    on: ['はい'],
    kun: ['すた.れる', 'すた.る'],
    jlpt: 1,
    quizAnswers: ['Abolish', 'Locate', 'Canada', 'Summit'],
    similars: [
      {
        kanji: '発',
        meaning: 'departure'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '摩',
        meaning: 'chafe'
      },
      {
        kanji: '耗',
        meaning: 'decrease'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      }
    ]
  },
  {
    kanjiName: '摘',
    strokes: 14,
    grade: 8,
    freq: 564,
    meanings: ['Pinch', 'Pick', 'Pluck', 'Trim', 'Clip', 'Summarize'],
    on: ['てき'],
    kun: ['つ.む'],
    jlpt: 1,
    quizAnswers: ['Weapon', 'Angle', 'Can', 'Pinch'],
    similars: [
      {
        kanji: '滴',
        meaning: 'drip'
      },
      {
        kanji: '嫡',
        meaning: 'legitimate wife'
      },
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '据',
        meaning: 'set'
      },
      {
        kanji: '培',
        meaning: 'cultivate'
      },
      {
        kanji: '商',
        meaning: 'make a deal'
      },
      {
        kanji: '尚',
        meaning: 'esteem'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      }
    ]
  },
  {
    kanjiName: '核',
    strokes: 10,
    grade: 8,
    freq: 475,
    meanings: ['Nucleus', 'Core', 'Kernel'],
    on: ['かく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Spicy', 'Mainly', 'Tax', 'Nucleus'],
    similars: [
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '柄',
        meaning: 'design'
      },
      {
        kanji: '該',
        meaning: 'above-stated'
      },
      {
        kanji: '板',
        meaning: 'plank'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      },
      {
        kanji: '枢',
        meaning: 'hinge'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls'
      }
    ]
  },
  {
    kanjiName: '沖',
    strokes: 7,
    grade: 8,
    freq: 929,
    meanings: ['Open Sea', 'Offing', 'Rise High Into Sky'],
    on: ['ちゅう'],
    kun: ['おき', 'おきつ', 'ちゅう.する', 'わく'],
    jlpt: 1,
    quizAnswers: ['Climb Up', 'Open Sea', 'Crime', 'Powder'],
    similars: [
      {
        kanji: '況',
        meaning: 'condition'
      },
      {
        kanji: '河',
        meaning: 'river'
      },
      {
        kanji: '沼',
        meaning: 'marsh'
      },
      {
        kanji: '治',
        meaning: 'reign'
      },
      {
        kanji: '沿',
        meaning: 'run alongside'
      },
      {
        kanji: '中',
        meaning: 'in'
      },
      {
        kanji: '汁',
        meaning: 'soup'
      },
      {
        kanji: '台',
        meaning: 'pedestal'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '仲',
        meaning: 'go-between'
      }
    ]
  },
  {
    kanjiName: '縄',
    strokes: 15,
    grade: 8,
    freq: 1075,
    meanings: ['Straw Rope', 'Cord'],
    on: ['じょう'],
    kun: ['なわ', 'ただ.す'],
    jlpt: 1,
    quizAnswers: ['Pouch', 'Straw Rope', 'Opinion', '11am-1pm'],
    similars: [
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '縛',
        meaning: 'truss'
      },
      {
        kanji: '帽',
        meaning: 'cap'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      },
      {
        kanji: '絹',
        meaning: 'silk'
      },
      {
        kanji: '僧',
        meaning: 'Buddhist priest'
      }
    ]
  },
  {
    kanjiName: '津',
    strokes: 9,
    grade: 8,
    freq: 1036,
    meanings: ['Haven', 'Port', 'Harbor', 'Ferry'],
    on: ['しん'],
    kun: ['つ'],
    jlpt: 1,
    quizAnswers: ['Smoke', 'Arts', 'Haven', 'Rascal'],
    similars: [
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '拝',
        meaning: 'worship'
      },
      {
        kanji: '注',
        meaning: 'pour'
      },
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '律',
        meaning: 'rhythm'
      },
      {
        kanji: '羊',
        meaning: 'sheep'
      },
      {
        kanji: '浅',
        meaning: 'shallow'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '汁',
        meaning: 'soup'
      }
    ]
  },
  {
    kanjiName: '献',
    strokes: 13,
    grade: 8,
    freq: 637,
    meanings: ['Offering', 'Counter For Drinks', 'Present', 'Offer'],
    on: ['けん', 'こん'],
    kun: ['たてまつ.る'],
    jlpt: 1,
    quizAnswers: ['Offering', 'Humble', 'Several', 'Counter For Suits Of Clothing'],
    similars: [
      {
        kanji: '執',
        meaning: 'tenacious'
      },
      {
        kanji: '南',
        meaning: 'south'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '来',
        meaning: 'come'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      }
    ]
  },
  {
    kanjiName: '継',
    strokes: 13,
    grade: 8,
    freq: 743,
    meanings: ['Inherit', 'Succeed', 'Continue', 'Patch', 'Graft (tree)'],
    on: ['けい'],
    kun: ['つ.ぐ', 'まま-'],
    jlpt: 1,
    quizAnswers: ['Scribe', 'Temperature', 'Inherit', 'Skin'],
    similars: [
      {
        kanji: '緩',
        meaning: 'slacken'
      },
      {
        kanji: '結',
        meaning: 'tie'
      },
      {
        kanji: '紛',
        meaning: 'distract'
      },
      {
        kanji: '納',
        meaning: 'settlement'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '紹',
        meaning: 'introduce'
      },
      {
        kanji: '純',
        meaning: 'genuine'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      }
    ]
  },
  {
    kanjiName: '維',
    strokes: 14,
    grade: 8,
    freq: 643,
    meanings: ['Fiber', 'Tie', 'Rope'],
    on: ['い'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Control', 'Old Times', 'Flow Into', 'Fiber'],
    similars: [
      {
        kanji: '羅',
        meaning: 'gauze'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '縦',
        meaning: 'vertical'
      },
      {
        kanji: '准',
        meaning: 'quasi-'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '雌',
        meaning: 'feminine'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      }
    ]
  },
  {
    kanjiName: '伎',
    strokes: 6,
    grade: 8,
    freq: null,
    meanings: ['Deed', 'Skill'],
    on: ['ぎ', 'き'],
    kun: ['わざ', 'わざおぎ'],
    jlpt: 1,
    quizAnswers: ['Deed', 'Matter', 'Name', 'Memory']
  },
  {
    kanjiName: '踏',
    strokes: 15,
    grade: 8,
    freq: 723,
    meanings: ['Step', 'Trample', 'Carry Through', 'Appraise', 'Evade Payment'],
    on: ['とう'],
    kun: ['ふ.む', 'ふ.まえる'],
    jlpt: 1,
    quizAnswers: ['Step', 'Be Frightened', 'Control', 'Annoyed'],
    similars: [
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '踊',
        meaning: 'jump'
      },
      {
        kanji: '跳',
        meaning: 'hop'
      },
      {
        kanji: '跡',
        meaning: 'tracks'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '暦',
        meaning: 'calendar'
      },
      {
        kanji: '潜',
        meaning: 'submerge'
      },
      {
        kanji: '皆',
        meaning: 'all'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '暮',
        meaning: 'evening'
      }
    ]
  },
  {
    kanjiName: '鹿',
    strokes: 11,
    grade: 8,
    freq: 957,
    meanings: ['Deer'],
    on: ['ろく'],
    kun: ['しか', 'か'],
    jlpt: 1,
    quizAnswers: ['Equal', 'Fidelity', 'Down', 'Deer']
  },
  {
    kanjiName: '諾',
    strokes: 15,
    grade: 8,
    freq: 1490,
    meanings: ['Consent', 'Assent', 'Agreement'],
    on: ['だく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Start From', 'Consent', 'Sequel', 'Counter For Machines And Vehicles'],
    similars: [
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '語',
        meaning: 'word'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '詔',
        meaning: 'imperial edict'
      },
      {
        kanji: '詞',
        meaning: 'part of speech'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '調',
        meaning: 'tune'
      },
      {
        kanji: '講',
        meaning: 'lecture'
      },
      {
        kanji: '諮',
        meaning: 'consult with'
      }
    ]
  },
  {
    kanjiName: '跳',
    strokes: 13,
    grade: 8,
    freq: 1716,
    meanings: ['Hop', 'Leap Up', 'Spring', 'Jerk', 'Prance', 'Buck', 'Splash', 'Sputter', 'Snap'],
    on: ['ちょう'],
    kun: ['は.ねる', 'と.ぶ', '-と.び'],
    jlpt: 1,
    quizAnswers: ['Hop', 'Large Building', 'False', 'Corner'],
    similars: [
      {
        kanji: '践',
        meaning: 'tread'
      },
      {
        kanji: '跡',
        meaning: 'tracks'
      },
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '踊',
        meaning: 'jump'
      },
      {
        kanji: '桃',
        meaning: 'peach'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      },
      {
        kanji: '距',
        meaning: 'long-distance'
      },
      {
        kanji: '踏',
        meaning: 'step'
      },
      {
        kanji: '嚇',
        meaning: 'menacing'
      },
      {
        kanji: '緊',
        meaning: 'tense'
      }
    ]
  },
  {
    kanjiName: '昭',
    strokes: 9,
    grade: 3,
    freq: 697,
    meanings: ['Shining', 'Bright'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Root', 'Shining', 'Overnight Stay', 'Bureau'],
    similars: [
      {
        kanji: '照',
        meaning: 'illuminate'
      },
      {
        kanji: '昨',
        meaning: 'yesterday'
      },
      {
        kanji: '略',
        meaning: 'abbreviation'
      },
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '倉',
        meaning: 'godown'
      },
      {
        kanji: '景',
        meaning: 'scenery'
      },
      {
        kanji: '閣',
        meaning: 'tower'
      },
      {
        kanji: '沼',
        meaning: 'marsh'
      },
      {
        kanji: '昇',
        meaning: 'rise up'
      },
      {
        kanji: '早',
        meaning: 'early'
      }
    ]
  },
  {
    kanjiName: '償',
    strokes: 17,
    grade: 8,
    freq: 854,
    meanings: ['Reparation', 'Make Up For', 'Recompense', 'Redeem'],
    on: ['しょう'],
    kun: ['つぐな.う'],
    jlpt: 1,
    quizAnswers: ['Reparation', 'Government', 'Fall', 'Principle'],
    similars: [
      {
        kanji: '賞',
        meaning: 'prize'
      },
      {
        kanji: '賀',
        meaning: 'congratulations'
      },
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '額',
        meaning: 'forehead'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '貨',
        meaning: 'freight'
      },
      {
        kanji: '損',
        meaning: 'damage'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '質',
        meaning: 'substance'
      }
    ]
  },
  {
    kanjiName: '刑',
    strokes: 6,
    grade: 8,
    freq: 864,
    meanings: ['Punish', 'Penalty', 'Sentence', 'Punishment'],
    on: ['けい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Below', 'Utmost', 'Punish', 'Quality'],
    similars: [
      {
        kanji: '刊',
        meaning: 'publish'
      },
      {
        kanji: '型',
        meaning: 'mould'
      },
      {
        kanji: '制',
        meaning: 'system'
      },
      {
        kanji: '判',
        meaning: 'judgement'
      },
      {
        kanji: '形',
        meaning: 'shape'
      },
      {
        kanji: '列',
        meaning: 'file'
      },
      {
        kanji: '末',
        meaning: 'end'
      },
      {
        kanji: '干',
        meaning: 'dry'
      },
      {
        kanji: '到',
        meaning: 'arrival'
      },
      {
        kanji: '井',
        meaning: 'well'
      }
    ]
  },
  {
    kanjiName: '執',
    strokes: 11,
    grade: 8,
    freq: 800,
    meanings: ['Tenacious', 'Take Hold', 'Grasp', 'Take To Heart'],
    on: ['しつ', 'しゅう'],
    kun: ['と.る'],
    jlpt: 1,
    quizAnswers: ['Tenacious', 'Clumsy', 'Few', 'Take Up'],
    similars: [
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '献',
        meaning: 'offering'
      },
      {
        kanji: '達',
        meaning: 'accomplished'
      },
      {
        kanji: '報',
        meaning: 'report'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '宗',
        meaning: 'religion'
      },
      {
        kanji: '薪',
        meaning: 'fuel'
      },
      {
        kanji: '音',
        meaning: 'sound'
      }
    ]
  },
  {
    kanjiName: '塁',
    strokes: 12,
    grade: 8,
    freq: 651,
    meanings: ['Bases', 'Fort', 'Rampart', 'Walls', 'Base(ball)'],
    on: ['るい', 'らい', 'すい'],
    kun: ['とりで'],
    jlpt: 1,
    quizAnswers: ['Curve', 'Order', 'Bases', 'Have'],
    similars: [
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      },
      {
        kanji: '楽',
        meaning: 'music'
      },
      {
        kanji: '畳',
        meaning: 'tatami mat'
      },
      {
        kanji: '財',
        meaning: 'property'
      },
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '墨',
        meaning: 'black ink'
      },
      {
        kanji: '瞬',
        meaning: 'wink'
      },
      {
        kanji: '睡',
        meaning: 'drowsy'
      }
    ]
  },
  {
    kanjiName: '崩',
    strokes: 11,
    grade: 8,
    freq: 778,
    meanings: ['Crumble', 'Die', 'Demolish', 'Level'],
    on: ['ほう'],
    kun: ['くず.れる', '-くず.れ', 'くず.す'],
    jlpt: 1,
    quizAnswers: ['Counter For Vehicles', 'Crumble', 'Mingle', 'Set Free'],
    similars: [
      {
        kanji: '棚',
        meaning: 'shelf'
      },
      {
        kanji: '明',
        meaning: 'bright'
      },
      {
        kanji: '胃',
        meaning: 'stomach'
      },
      {
        kanji: '門',
        meaning: 'gate'
      },
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '膚',
        meaning: 'skin'
      },
      {
        kanji: '朗',
        meaning: 'melodious'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '畝',
        meaning: 'furrow'
      },
      {
        kanji: '肯',
        meaning: 'agreement'
      }
    ]
  },
  {
    kanjiName: '抗',
    strokes: 7,
    grade: 8,
    freq: 666,
    meanings: ['Confront', 'Resist', 'Defy', 'Oppose'],
    on: ['こう'],
    kun: ['あらが.う'],
    jlpt: 1,
    quizAnswers: ['Enter', 'Wisdom', 'Confront', 'Antiquity'],
    similars: [
      {
        kanji: '拡',
        meaning: 'broaden'
      },
      {
        kanji: '扶',
        meaning: 'aid'
      },
      {
        kanji: '坑',
        meaning: 'pit'
      },
      {
        kanji: '拷',
        meaning: 'torture'
      },
      {
        kanji: '抹',
        meaning: 'rub'
      },
      {
        kanji: '拠',
        meaning: 'foothold'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '打',
        meaning: 'strike'
      },
      {
        kanji: '批',
        meaning: 'criticism'
      }
    ]
  },
  {
    kanjiName: '抵',
    strokes: 8,
    grade: 8,
    freq: 1182,
    meanings: ['Resist', 'Reach', 'Touch'],
    on: ['てい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Entrails', 'My Husband', 'Image', 'Resist'],
    similars: [
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '底',
        meaning: 'bottom'
      },
      {
        kanji: '低',
        meaning: 'lower'
      },
      {
        kanji: '抑',
        meaning: 'repress'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '控',
        meaning: 'withdraw'
      },
      {
        kanji: '拝',
        meaning: 'worship'
      },
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '抱',
        meaning: 'embrace'
      }
    ]
  },
  {
    kanjiName: '旬',
    strokes: 6,
    grade: 8,
    freq: 1162,
    meanings: ['Decameron', 'Ten-day Period', 'Season (for Specific Products)'],
    on: ['じゅん', 'しゅん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Decameron', 'Long Time', 'Become Experienced', 'Sing'],
    similars: [
      {
        kanji: '旨',
        meaning: 'delicious'
      },
      {
        kanji: '白',
        meaning: 'white'
      },
      {
        kanji: '但',
        meaning: 'however'
      },
      {
        kanji: '伸',
        meaning: 'expand'
      },
      {
        kanji: '伯',
        meaning: 'chief'
      },
      {
        kanji: '百',
        meaning: 'hundred'
      },
      {
        kanji: '日',
        meaning: 'day'
      },
      {
        kanji: '旧',
        meaning: 'old times'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '殉',
        meaning: 'martyrdom'
      }
    ]
  },
  {
    kanjiName: '弾',
    strokes: 12,
    grade: 8,
    freq: 853,
    meanings: ['Bullet', 'Twang', 'Flip', 'Snap'],
    on: ['だん', 'たん'],
    kun: ['ひ.く', '-ひ.き', 'はず.む', 'たま', 'はじ.く', 'はじ.ける', 'ただ.す', 'はじ.きゆみ'],
    jlpt: 1,
    quizAnswers: ['Bullet', 'Dreadful', 'Few', 'Collision'],
    similars: [
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '禅',
        meaning: 'Zen'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '揮',
        meaning: 'brandish'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      }
    ]
  },
  {
    kanjiName: '聴',
    strokes: 17,
    grade: 8,
    freq: 781,
    meanings: ['Listen', 'Headstrong', 'Naughty', 'Careful Inquiry'],
    on: ['ちょう', 'てい'],
    kun: ['き.く', 'ゆる.す'],
    jlpt: 1,
    quizAnswers: ['Be Perplexed', 'Place', 'Listen', 'Seal'],
    similars: [
      {
        kanji: '徳',
        meaning: 'benevolence'
      },
      {
        kanji: '憲',
        meaning: 'constitution'
      },
      {
        kanji: '恥',
        meaning: 'shame'
      },
      {
        kanji: '慮',
        meaning: 'prudence'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '夢',
        meaning: 'dream'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '職',
        meaning: 'post'
      },
      {
        kanji: '憩',
        meaning: 'recess'
      },
      {
        kanji: '愚',
        meaning: 'foolish'
      }
    ]
  },
  {
    kanjiName: '遣',
    strokes: 13,
    grade: 8,
    freq: 664,
    meanings: ['Dispatch', 'Despatch', 'Send', 'Give', 'Donate', 'Do', 'Undertake'],
    on: ['けん'],
    kun: ['つか.う', '-つか.い', '-づか.い', 'つか.わす', 'や.る'],
    jlpt: 1,
    quizAnswers: ['Blend', 'Go Backwards', 'Expect', 'Dispatch'],
    similars: [
      {
        kanji: '造',
        meaning: 'create'
      },
      {
        kanji: '週',
        meaning: 'week'
      },
      {
        kanji: '過',
        meaning: 'overdo'
      },
      {
        kanji: '追',
        meaning: 'chase'
      },
      {
        kanji: '遺',
        meaning: 'bequeath'
      },
      {
        kanji: '還',
        meaning: 'send back'
      },
      {
        kanji: '臨',
        meaning: 'look to'
      },
      {
        kanji: '進',
        meaning: 'advance'
      },
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '避',
        meaning: 'evade'
      }
    ]
  },
  {
    kanjiName: '闘',
    strokes: 18,
    grade: 8,
    freq: 751,
    meanings: ['Fight', 'War'],
    on: ['とう'],
    kun: ['たたか.う', 'あらそ.う'],
    jlpt: 1,
    quizAnswers: ['Fight', 'Moist', 'Money', 'Counter For Letters, Notes, Documents, Etc.'],
    similars: [
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '豊',
        meaning: 'bountiful'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '閲',
        meaning: 'review'
      },
      {
        kanji: '閥',
        meaning: 'clique'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '景',
        meaning: 'scenery'
      },
      {
        kanji: '開',
        meaning: 'open'
      },
      {
        kanji: '樹',
        meaning: 'timber'
      }
    ]
  },
  {
    kanjiName: '陣',
    strokes: 10,
    grade: 8,
    freq: 828,
    meanings: ['Camp', 'Battle Array', 'Ranks', 'Position', 'Sudden', 'Brief Time'],
    on: ['じん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Title Or Inscription On Picture', 'Camp', 'Client', 'Younger Brother'],
    similars: [
      {
        kanji: '陳',
        meaning: 'exhibit'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '恒',
        meaning: 'constancy'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '悼',
        meaning: 'lament'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '神',
        meaning: 'gods'
      },
      {
        kanji: '岬',
        meaning: 'headland'
      }
    ]
  },
  {
    kanjiName: '臨',
    strokes: 18,
    grade: 6,
    freq: 722,
    meanings: ['Look To', 'Face', 'Meet', 'Confront', 'Attend', 'Call On'],
    on: ['りん'],
    kun: ['のぞ.む'],
    jlpt: 1,
    quizAnswers: ['Pick Up', 'Look To', 'Prepare', 'Announce'],
    similars: [
      {
        kanji: '距',
        meaning: 'long-distance'
      },
      {
        kanji: '器',
        meaning: 'utensil'
      },
      {
        kanji: '監',
        meaning: 'oversee'
      },
      {
        kanji: '遣',
        meaning: 'dispatch'
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '嘱',
        meaning: 'entrust'
      },
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '覧',
        meaning: 'perusal'
      },
      {
        kanji: '高',
        meaning: 'tall'
      }
    ]
  },
  {
    kanjiName: '削',
    strokes: 9,
    grade: 8,
    freq: 814,
    meanings: ['Plane', 'Sharpen', 'Whittle', 'Pare', 'Shave'],
    on: ['さく'],
    kun: ['けず.る', 'はつ.る', 'そ.ぐ'],
    jlpt: 1,
    quizAnswers: ['Have', 'Root', 'Breath', 'Plane'],
    similars: [
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '前',
        meaning: 'in front'
      },
      {
        kanji: '愉',
        meaning: 'pleasure'
      },
      {
        kanji: '剤',
        meaning: 'dose'
      },
      {
        kanji: '用',
        meaning: 'utilize'
      },
      {
        kanji: '斉',
        meaning: 'adjusted'
      },
      {
        kanji: '庸',
        meaning: 'commonplace'
      },
      {
        kanji: '浦',
        meaning: 'bay'
      },
      {
        kanji: '痛',
        meaning: 'pain'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      }
    ]
  },
  {
    kanjiName: '契',
    strokes: 9,
    grade: 8,
    freq: 898,
    meanings: ['Pledge', 'Promise', 'Vow'],
    on: ['けい'],
    kun: ['ちぎ.る'],
    jlpt: 1,
    quizAnswers: ['Pond', 'Bomb', 'Pledge', 'In Love'],
    similars: [
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '敢',
        meaning: 'daring'
      },
      {
        kanji: '政',
        meaning: 'politics'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      },
      {
        kanji: '教',
        meaning: 'teach'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      }
    ]
  },
  {
    kanjiName: '恵',
    strokes: 10,
    grade: 8,
    freq: 925,
    meanings: ['Favor', 'Blessing', 'Grace', 'Kindness'],
    on: ['けい', 'え'],
    kun: ['めぐ.む', 'めぐ.み'],
    jlpt: 1,
    quizAnswers: ['Favor', 'Private', 'Lost', 'Shallow'],
    similars: [
      {
        kanji: '悪',
        meaning: 'bad'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '専',
        meaning: 'specialty'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '博',
        meaning: 'Dr.'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '愚',
        meaning: 'foolish'
      },
      {
        kanji: '恥',
        meaning: 'shame'
      }
    ]
  },
  {
    kanjiName: '掲',
    strokes: 11,
    grade: 8,
    freq: 899,
    meanings: [
      'Put Up (a Notice)',
      'Put Up',
      'Hoist',
      'Display',
      'Hang Out',
      'Publish',
      'Describe'
    ],
    on: ['けい'],
    kun: ['かか.げる'],
    jlpt: 1,
    quizAnswers: ['Ability', 'State', 'Grade', 'Put Up (a Notice)'],
    similars: [
      {
        kanji: '揚',
        meaning: 'raise'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      },
      {
        kanji: '喝',
        meaning: 'hoarse'
      },
      {
        kanji: '提',
        meaning: 'propose'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '捜',
        meaning: 'search'
      },
      {
        kanji: '混',
        meaning: 'mix'
      },
      {
        kanji: '易',
        meaning: 'easy'
      }
    ]
  },
  {
    kanjiName: '葬',
    strokes: 12,
    grade: 8,
    freq: 754,
    meanings: ['Interment', 'Bury', 'Shelve'],
    on: ['そう'],
    kun: ['ほうむ.る'],
    jlpt: 1,
    quizAnswers: ['Disadvantage', 'Interment', 'Private', 'Former Time'],
    similars: [
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '塀',
        meaning: 'fence'
      },
      {
        kanji: '坪',
        meaning: 'two-mat area'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      },
      {
        kanji: '菊',
        meaning: 'chrysanthemum'
      },
      {
        kanji: '撲',
        meaning: 'slap'
      },
      {
        kanji: '舞',
        meaning: 'dance'
      },
      {
        kanji: '裁',
        meaning: 'tailor'
      },
      {
        kanji: '華',
        meaning: 'splendor'
      }
    ]
  },
  {
    kanjiName: '需',
    strokes: 14,
    grade: 8,
    freq: 935,
    meanings: ['Demand', 'Request', 'Need'],
    on: ['じゅ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['India', 'Sort', 'Demand', 'Yellow'],
    similars: [
      {
        kanji: '儒',
        meaning: 'Confucian'
      },
      {
        kanji: '震',
        meaning: 'quake'
      },
      {
        kanji: '霜',
        meaning: 'frost'
      },
      {
        kanji: '零',
        meaning: 'zero'
      },
      {
        kanji: '雲',
        meaning: 'cloud'
      },
      {
        kanji: '雰',
        meaning: 'atmosphere'
      },
      {
        kanji: '霊',
        meaning: 'spirits'
      },
      {
        kanji: '雷',
        meaning: 'thunder'
      },
      {
        kanji: '電',
        meaning: 'electricity'
      },
      {
        kanji: '雪',
        meaning: 'snow'
      }
    ]
  },
  {
    kanjiName: '宜',
    strokes: 8,
    grade: 8,
    freq: 1766,
    meanings: ['Best Regards', 'Good'],
    on: ['ぎ'],
    kun: ['よろ.しい', 'よろ.しく'],
    jlpt: 1,
    quizAnswers: ['Exclude', 'Best Regards', 'Fault', 'Mark'],
    similars: [
      {
        kanji: '畳',
        meaning: 'tatami mat'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '且',
        meaning: 'moreover'
      },
      {
        kanji: '阻',
        meaning: 'thwart'
      },
      {
        kanji: '宴',
        meaning: 'banquet'
      },
      {
        kanji: '寡',
        meaning: 'widow'
      },
      {
        kanji: '査',
        meaning: 'investigate'
      },
      {
        kanji: '祖',
        meaning: 'ancestor'
      },
      {
        kanji: '組',
        meaning: 'association'
      },
      {
        kanji: '官',
        meaning: 'bureaucrat'
      }
    ]
  },
  {
    kanjiName: '繰',
    strokes: 19,
    grade: 8,
    freq: 872,
    meanings: ['Winding', 'Reel', 'Spin', 'Turn (pages)', 'Look Up', 'Refer To'],
    on: ['そう'],
    kun: ['く.る'],
    jlpt: 1,
    quizAnswers: ['Till', 'Winding', 'Same Kind', 'Omit'],
    similars: [
      {
        kanji: '燥',
        meaning: 'parch'
      },
      {
        kanji: '操',
        meaning: 'maneuver'
      },
      {
        kanji: '藻',
        meaning: 'seaweed'
      },
      {
        kanji: '緯',
        meaning: 'horizontal'
      },
      {
        kanji: '縦',
        meaning: 'vertical'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '絡',
        meaning: 'entwine'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      }
    ]
  },
  {
    kanjiName: '避',
    strokes: 16,
    grade: 8,
    freq: 756,
    meanings: ['Evade', 'Avoid', 'Avert', 'Ward Off', 'Shirk', 'Shun'],
    on: ['ひ'],
    kun: ['さ.ける', 'よ.ける'],
    jlpt: 1,
    quizAnswers: ['Instruction', 'Sympathy', 'Evade', 'Enough'],
    similars: [
      {
        kanji: '壁',
        meaning: 'wall'
      },
      {
        kanji: '遅',
        meaning: 'slow'
      },
      {
        kanji: '辞',
        meaning: 'resign'
      },
      {
        kanji: '達',
        meaning: 'accomplished'
      },
      {
        kanji: '違',
        meaning: 'difference'
      },
      {
        kanji: '癖',
        meaning: 'mannerism'
      },
      {
        kanji: '硫',
        meaning: 'sulphur'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '遣',
        meaning: 'dispatch'
      }
    ]
  },
  {
    kanjiName: '妊',
    strokes: 7,
    grade: 8,
    freq: 1413,
    meanings: ['Pregnancy'],
    on: ['にん', 'じん'],
    kun: ['はら.む', 'みごも.る'],
    jlpt: 1,
    quizAnswers: ['Make Effort', 'Pregnancy', 'Sound', 'Lean'],
    similars: [
      {
        kanji: '姓',
        meaning: 'surname'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '在',
        meaning: 'exist'
      },
      {
        kanji: '圧',
        meaning: 'pressure'
      },
      {
        kanji: '好',
        meaning: 'fond'
      },
      {
        kanji: '左',
        meaning: 'left'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '妨',
        meaning: 'disturb'
      },
      {
        kanji: '狂',
        meaning: 'lunatic'
      }
    ]
  },
  {
    kanjiName: '娠',
    strokes: 10,
    grade: 8,
    freq: 1623,
    meanings: ['With Child', 'Pregnancy'],
    on: ['しん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Question', 'Male', 'Square', 'With Child'],
    similars: [
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '嬢',
        meaning: 'lass'
      },
      {
        kanji: '嫌',
        meaning: 'dislike'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '媒',
        meaning: 'mediator'
      }
    ]
  },
  {
    kanjiName: '致',
    strokes: 10,
    grade: 8,
    freq: 870,
    meanings: ['Doth', 'Do', 'Send', 'Forward', 'Cause', 'Exert', 'Incur', 'Engage'],
    on: ['ち'],
    kun: ['いた.す'],
    jlpt: 1,
    quizAnswers: ['Means', 'Doth', '(north) Korea', 'Be Defeated'],
    similars: [
      {
        kanji: '政',
        meaning: 'politics'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '棄',
        meaning: 'abandon'
      },
      {
        kanji: '契',
        meaning: 'pledge'
      },
      {
        kanji: '到',
        meaning: 'arrival'
      },
      {
        kanji: '至',
        meaning: 'climax'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '教',
        meaning: 'teach'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      }
    ]
  },
  {
    kanjiName: '奏',
    strokes: 9,
    grade: 6,
    freq: 1067,
    meanings: ['Play Music', 'Speak To A Ruler', 'Complete'],
    on: ['そう'],
    kun: ['かな.でる'],
    jlpt: 1,
    quizAnswers: ['Sort', 'Play Music', 'Soldier', 'Beautiful'],
    similars: [
      {
        kanji: '奉',
        meaning: 'observance'
      },
      {
        kanji: '耕',
        meaning: 'till'
      },
      {
        kanji: '泰',
        meaning: 'peaceful'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      },
      {
        kanji: '俸',
        meaning: 'stipend'
      },
      {
        kanji: '春',
        meaning: 'springtime'
      },
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '医',
        meaning: 'doctor'
      },
      {
        kanji: '奔',
        meaning: 'run'
      },
      {
        kanji: '禁',
        meaning: 'prohibition'
      }
    ]
  },
  {
    kanjiName: '伴',
    strokes: 7,
    grade: 8,
    freq: 886,
    meanings: ['Consort', 'Accompany', 'Bring With', 'Companion'],
    on: ['はん', 'ばん'],
    kun: ['ともな.う'],
    jlpt: 1,
    quizAnswers: ['Force', 'Surname', 'Consort', 'Live With'],
    similars: [
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '半',
        meaning: 'half'
      },
      {
        kanji: '南',
        meaning: 'south'
      },
      {
        kanji: '信',
        meaning: 'faith'
      },
      {
        kanji: '祈',
        meaning: 'pray'
      },
      {
        kanji: '岸',
        meaning: 'beach'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      }
    ]
  },
  {
    kanjiName: '併',
    strokes: 8,
    grade: 8,
    freq: 966,
    meanings: ['Join', 'Get Together', 'Unite', 'Collective'],
    on: ['へい'],
    kun: ['あわ.せる'],
    jlpt: 1,
    quizAnswers: ['Incline', 'Join', 'Plump', 'Enshrine'],
    similars: [
      {
        kanji: '伴',
        meaning: 'consort'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '半',
        meaning: 'half'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '羊',
        meaning: 'sheep'
      },
      {
        kanji: '従',
        meaning: 'accompany'
      },
      {
        kanji: '祥',
        meaning: 'auspicious'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '候',
        meaning: 'climate'
      }
    ]
  },
  {
    kanjiName: '却',
    strokes: 7,
    grade: 8,
    freq: 959,
    meanings: ['Instead', 'On The Contrary', 'Rather', 'Step Back', 'Withdraw', 'Retreat'],
    on: ['きゃく'],
    kun: ['かえ.って', 'しりぞ.く', 'しりぞ.ける'],
    jlpt: 1,
    quizAnswers: ['Red', 'Show', 'Instead', 'Give'],
    similars: [
      {
        kanji: '去',
        meaning: 'gone'
      },
      {
        kanji: '脚',
        meaning: 'skids'
      },
      {
        kanji: '玉',
        meaning: 'jewel'
      },
      {
        kanji: '充',
        meaning: 'allot'
      },
      {
        kanji: '坪',
        meaning: 'two-mat area'
      },
      {
        kanji: '毒',
        meaning: 'poison'
      },
      {
        kanji: '流',
        meaning: 'current'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '邪',
        meaning: 'wicked'
      }
    ]
  },
  {
    kanjiName: '慮',
    strokes: 15,
    grade: 8,
    freq: 916,
    meanings: ['Prudence', 'Thought', 'Concern', 'Consider', 'Deliberate', 'Fear'],
    on: ['りょ'],
    kun: ['おもんぱく.る', 'おもんぱか.る'],
    jlpt: 1,
    quizAnswers: ['Prudence', 'Convert', 'Cistern', 'Every'],
    similars: [
      {
        kanji: '虜',
        meaning: 'captive'
      },
      {
        kanji: '膚',
        meaning: 'skin'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '徳',
        meaning: 'benevolence'
      },
      {
        kanji: '憲',
        meaning: 'constitution'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '聴',
        meaning: 'listen'
      },
      {
        kanji: '億',
        meaning: 'hundred million'
      }
    ]
  },
  {
    kanjiName: '懸',
    strokes: 20,
    grade: 8,
    freq: 889,
    meanings: ['State Of Suspension', 'Hang', 'Depend', 'Consult', 'Distant', 'Far Apart'],
    on: ['けん', 'け'],
    kun: ['か.ける', 'か.かる'],
    jlpt: 1,
    quizAnswers: ['Far', 'Mount', 'Conceited', 'State Of Suspension'],
    similars: [
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '瞬',
        meaning: 'wink'
      },
      {
        kanji: '慈',
        meaning: 'mercy'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '総',
        meaning: 'general'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '照',
        meaning: 'illuminate'
      },
      {
        kanji: '愚',
        meaning: 'foolish'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      },
      {
        kanji: '賠',
        meaning: 'compensation'
      }
    ]
  },
  {
    kanjiName: '房',
    strokes: 8,
    grade: 8,
    freq: 808,
    meanings: [
      'Tassel',
      'Tuft',
      'Fringe',
      'Bunch',
      'Lock (hair)',
      'Segment (orange)',
      'House',
      'Room'
    ],
    on: ['ぼう'],
    kun: ['ふさ'],
    jlpt: 1,
    quizAnswers: ['Income', 'Raise', 'Tassel', 'Heal'],
    similars: [
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '芳',
        meaning: 'perfume'
      },
      {
        kanji: '坊',
        meaning: 'boy'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '塀',
        meaning: 'fence'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '肪',
        meaning: 'obese'
      },
      {
        kanji: '芽',
        meaning: 'bud'
      },
      {
        kanji: '妨',
        meaning: 'disturb'
      },
      {
        kanji: '所',
        meaning: 'place'
      }
    ]
  },
  {
    kanjiName: '扱',
    strokes: 6,
    grade: 8,
    freq: 1057,
    meanings: ['Handle', 'Entertain', 'Thresh', 'Strip'],
    on: ['そう', 'きゅう'],
    kun: ['あつか.い', 'あつか.う', 'あつか.る', 'こ.く'],
    jlpt: 1,
    quizAnswers: ['Association', 'Elapse', 'Energy', 'Handle'],
    similars: [
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '披',
        meaning: 'expose'
      },
      {
        kanji: '拠',
        meaning: 'foothold'
      },
      {
        kanji: '抄',
        meaning: 'extract'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '求',
        meaning: 'request'
      },
      {
        kanji: '扶',
        meaning: 'aid'
      },
      {
        kanji: '技',
        meaning: 'skill'
      },
      {
        kanji: '抑',
        meaning: 'repress'
      }
    ]
  },
  {
    kanjiName: '抑',
    strokes: 7,
    grade: 8,
    freq: 834,
    meanings: [
      'Repress',
      'Well',
      'Now',
      'In The First Place',
      'Push',
      'Shove',
      'Press',
      'Seal',
      'Do In Spite Of'
    ],
    on: ['よく'],
    kun: ['おさ.える'],
    jlpt: 1,
    quizAnswers: ['Attend', 'Increase', 'Repress', 'Silver'],
    similars: [
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      },
      {
        kanji: '抵',
        meaning: 'resist'
      },
      {
        kanji: '扱',
        meaning: 'handle'
      },
      {
        kanji: '批',
        meaning: 'criticism'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '仰',
        meaning: 'face-up'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '柳',
        meaning: 'willow'
      }
    ]
  },
  {
    kanjiName: '択',
    strokes: 7,
    grade: 8,
    freq: 847,
    meanings: ['Choose', 'Select', 'Elect', 'Prefer'],
    on: ['たく'],
    kun: ['えら.ぶ'],
    jlpt: 1,
    quizAnswers: ['Part Of Speech', 'Blessing', 'Choose', 'Owe'],
    similars: [
      {
        kanji: '沢',
        meaning: 'swamp'
      },
      {
        kanji: '扶',
        meaning: 'aid'
      },
      {
        kanji: '抹',
        meaning: 'rub'
      },
      {
        kanji: '戸',
        meaning: 'door'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '尺',
        meaning: 'shaku'
      },
      {
        kanji: '扱',
        meaning: 'handle'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '批',
        meaning: 'criticism'
      },
      {
        kanji: '抗',
        meaning: 'confront'
      }
    ]
  },
  {
    kanjiName: '描',
    strokes: 11,
    grade: 8,
    freq: 876,
    meanings: ['Sketch', 'Compose', 'Write', 'Draw', 'Paint'],
    on: ['びょう'],
    kun: ['えが.く', 'か.く'],
    jlpt: 1,
    quizAnswers: ['Contribute To', 'Back', 'Sketch', 'Master'],
    similars: [
      {
        kanji: '措',
        meaning: 'set aside'
      },
      {
        kanji: '猫',
        meaning: 'cat'
      },
      {
        kanji: '抽',
        meaning: 'pluck'
      },
      {
        kanji: '苗',
        meaning: 'seedling'
      },
      {
        kanji: '拍',
        meaning: 'clap'
      },
      {
        kanji: '指',
        meaning: 'finger'
      },
      {
        kanji: '横',
        meaning: 'sideways'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '借',
        meaning: 'borrow'
      },
      {
        kanji: '盾',
        meaning: 'shield'
      }
    ]
  },
  {
    kanjiName: '盤',
    strokes: 15,
    grade: 8,
    freq: 881,
    meanings: ['Tray', 'Shallow Bowl', 'Platter', 'Tub', 'Board', 'Phonograph Record'],
    on: ['ばん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Part', 'Tray', 'Guard', 'Loss'],
    similars: [
      {
        kanji: '般',
        meaning: 'carrier'
      },
      {
        kanji: '船',
        meaning: 'ship'
      },
      {
        kanji: '艇',
        meaning: 'rowboat'
      },
      {
        kanji: '益',
        meaning: 'benefit'
      },
      {
        kanji: '盗',
        meaning: 'steal'
      },
      {
        kanji: '艦',
        meaning: 'warship'
      },
      {
        kanji: '搬',
        meaning: 'conveyor'
      },
      {
        kanji: '航',
        meaning: 'navigate'
      },
      {
        kanji: '役',
        meaning: 'duty'
      },
      {
        kanji: '盆',
        meaning: 'basin'
      }
    ]
  },
  {
    kanjiName: '称',
    strokes: 10,
    grade: 8,
    freq: 985,
    meanings: ['Appellation', 'Praise', 'Admire', 'Name', 'Title', 'Fame'],
    on: ['しょう'],
    kun: ['たた.える', 'とな.える', 'あ.げる', 'かな.う', 'はか.り', 'はか.る', 'ほめ.る'],
    jlpt: 1,
    quizAnswers: ['Become Distressed', 'Organ', 'Girl', 'Appellation'],
    similars: [
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '移',
        meaning: 'shift'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '徐',
        meaning: 'gradually'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '除',
        meaning: 'exclude'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      }
    ]
  },
  {
    kanjiName: '緩',
    strokes: 15,
    grade: 8,
    freq: 933,
    meanings: ['Slacken', 'Loosen', 'Relax', 'Lessen', 'Be Moderate', 'Ease'],
    on: ['かん'],
    kun: ['ゆる.い', 'ゆる.やか', 'ゆる.む', 'ゆる.める'],
    jlpt: 1,
    quizAnswers: ['Slacken', 'Fee', 'Noon', 'Taper'],
    similars: [
      {
        kanji: '縦',
        meaning: 'vertical'
      },
      {
        kanji: '継',
        meaning: 'inherit'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '網',
        meaning: 'netting'
      },
      {
        kanji: '暖',
        meaning: 'warmth'
      },
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '絵',
        meaning: 'picture'
      },
      {
        kanji: '縁',
        meaning: 'affinity'
      }
    ]
  },
  {
    kanjiName: '託',
    strokes: 10,
    grade: 8,
    freq: 1021,
    meanings: ['Consign', 'Requesting', 'Entrusting With', 'Pretend', 'Hint'],
    on: ['たく'],
    kun: ['かこつ.ける', 'かこ.つ', 'かこ.つける'],
    jlpt: 1,
    quizAnswers: ['Famous', 'Consign', 'Revert', 'Street'],
    similars: [
      {
        kanji: '記',
        meaning: 'scribe'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '訂',
        meaning: 'revise'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '訟',
        meaning: 'sue'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      }
    ]
  },
  {
    kanjiName: '賄',
    strokes: 13,
    grade: 8,
    freq: 1282,
    meanings: ['Bribe', 'Board', 'Supply', 'Finance'],
    on: ['わい'],
    kun: ['まかな.う'],
    jlpt: 1,
    quizAnswers: ['Excel', 'Lost', 'Bribe', 'Be Sharp'],
    similars: [
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '晴',
        meaning: 'clear up'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      },
      {
        kanji: '胃',
        meaning: 'stomach'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      },
      {
        kanji: '明',
        meaning: 'bright'
      },
      {
        kanji: '財',
        meaning: 'property'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '購',
        meaning: 'subscription'
      },
      {
        kanji: '輸',
        meaning: 'transport'
      }
    ]
  },
  {
    kanjiName: '還',
    strokes: 16,
    grade: 8,
    freq: 910,
    meanings: ['Send Back', 'Return'],
    on: ['かん'],
    kun: ['かえ.る'],
    jlpt: 1,
    quizAnswers: ['Opportunity', 'Send Back', 'Linen', 'Die'],
    similars: [
      {
        kanji: '遠',
        meaning: 'distant'
      },
      {
        kanji: '園',
        meaning: 'park'
      },
      {
        kanji: '速',
        meaning: 'quick'
      },
      {
        kanji: '豊',
        meaning: 'bountiful'
      },
      {
        kanji: '遣',
        meaning: 'dispatch'
      },
      {
        kanji: '環',
        meaning: 'ring'
      },
      {
        kanji: '造',
        meaning: 'create'
      },
      {
        kanji: '票',
        meaning: 'ballot'
      },
      {
        kanji: '週',
        meaning: 'week'
      },
      {
        kanji: '署',
        meaning: 'signature'
      }
    ]
  },
  {
    kanjiName: '邦',
    strokes: 7,
    grade: 8,
    freq: 654,
    meanings: ['Home Country', 'Country', 'Japan'],
    on: ['ほう'],
    kun: ['くに'],
    jlpt: 1,
    quizAnswers: ['Luck', 'Compare', 'Circumstances', 'Home Country'],
    similars: [
      {
        kanji: '邪',
        meaning: 'wicked'
      },
      {
        kanji: '奉',
        meaning: 'observance'
      },
      {
        kanji: '郡',
        meaning: 'county'
      },
      {
        kanji: '麦',
        meaning: 'barley'
      },
      {
        kanji: '井',
        meaning: 'well'
      },
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '郵',
        meaning: 'mail'
      },
      {
        kanji: '都',
        meaning: 'metropolis'
      },
      {
        kanji: '耕',
        meaning: 'till'
      }
    ]
  },
  {
    kanjiName: '鈴',
    strokes: 13,
    grade: 8,
    freq: 880,
    meanings: ['Small Bell', 'Buzzer'],
    on: ['れい', 'りん'],
    kun: ['すず'],
    jlpt: 1,
    quizAnswers: ['Pray', 'Profess', 'Get', 'Small Bell'],
    similars: [
      {
        kanji: '鉛',
        meaning: 'lead'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      },
      {
        kanji: '銘',
        meaning: 'inscription'
      },
      {
        kanji: '鈍',
        meaning: 'dull'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      }
    ]
  },
  {
    kanjiName: '岐',
    strokes: 7,
    grade: 8,
    freq: 1428,
    meanings: ['Branch Off', 'Fork In Road', 'Scene', 'Arena', 'Theater'],
    on: ['き', 'ぎ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Emperor', 'Damage', 'Branch Off', 'Purity'],
    similars: [
      {
        kanji: '支',
        meaning: 'branch'
      },
      {
        kanji: '技',
        meaning: 'skill'
      },
      {
        kanji: '仮',
        meaning: 'sham'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      },
      {
        kanji: '度',
        meaning: 'degrees'
      },
      {
        kanji: '炭',
        meaning: 'charcoal'
      },
      {
        kanji: '版',
        meaning: 'printing block'
      },
      {
        kanji: '庭',
        meaning: 'courtyard'
      },
      {
        kanji: '枝',
        meaning: 'bough'
      },
      {
        kanji: '彼',
        meaning: 'he'
      }
    ]
  },
  {
    kanjiName: '隆',
    strokes: 11,
    grade: 8,
    freq: 1109,
    meanings: ['Hump', 'High', 'Noble', 'Prosperity'],
    on: ['りゅう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Warm', 'Hump', 'Airplane', 'Fault'],
    similars: [
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '隣',
        meaning: 'neighboring'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '怪',
        meaning: 'suspicious'
      },
      {
        kanji: '姓',
        meaning: 'surname'
      },
      {
        kanji: '径',
        meaning: 'diameter'
      },
      {
        kanji: '除',
        meaning: 'exclude'
      },
      {
        kanji: '陶',
        meaning: 'pottery'
      },
      {
        kanji: '栓',
        meaning: 'plug'
      }
    ]
  },
  {
    kanjiName: '控',
    strokes: 11,
    grade: 8,
    freq: 1000,
    meanings: ['Withdraw', 'Draw In', 'Hold Back', 'Refrain From', 'Be Moderate'],
    on: ['こう'],
    kun: ['ひか.える', 'ひか.え'],
    jlpt: 1,
    quizAnswers: ['Withdraw', 'Reflection', 'Figures', 'Mind'],
    similars: [
      {
        kanji: '空',
        meaning: 'empty'
      },
      {
        kanji: '搾',
        meaning: 'squeeze'
      },
      {
        kanji: '揺',
        meaning: 'swing'
      },
      {
        kanji: '抵',
        meaning: 'resist'
      },
      {
        kanji: '探',
        meaning: 'grope'
      },
      {
        kanji: '突',
        meaning: 'stab'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '接',
        meaning: 'touch'
      },
      {
        kanji: '握',
        meaning: 'grip'
      },
      {
        kanji: '援',
        meaning: 'abet'
      }
    ]
  },
  {
    kanjiName: '壁',
    strokes: 16,
    grade: 8,
    freq: 1037,
    meanings: ['Wall', 'Lining (stomach)', 'Fence'],
    on: ['へき'],
    kun: ['かべ'],
    jlpt: 1,
    quizAnswers: ['Experiment', 'Wall', 'Talent', 'Tube'],
    similars: [
      {
        kanji: '避',
        meaning: 'evade'
      },
      {
        kanji: '辞',
        meaning: 'resign'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '癖',
        meaning: 'mannerism'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '硫',
        meaning: 'sulphur'
      },
      {
        kanji: '監',
        meaning: 'oversee'
      },
      {
        kanji: '講',
        meaning: 'lecture'
      },
      {
        kanji: '競',
        meaning: 'emulate'
      },
      {
        kanji: '濫',
        meaning: 'excessive'
      }
    ]
  },
  {
    kanjiName: '棋',
    strokes: 12,
    grade: 8,
    freq: 1311,
    meanings: ['Chess Piece', 'Japanese Chess', 'Shogi'],
    on: ['き'],
    kun: ['ご'],
    jlpt: 1,
    quizAnswers: ['Chess Piece', 'Dainty', 'Complete', 'Care'],
    similars: [
      {
        kanji: '模',
        meaning: 'imitation'
      },
      {
        kanji: '旗',
        meaning: 'national flag'
      },
      {
        kanji: '標',
        meaning: 'signpost'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      },
      {
        kanji: '核',
        meaning: 'nucleus'
      },
      {
        kanji: '租',
        meaning: 'tariff'
      },
      {
        kanji: '植',
        meaning: 'plant'
      },
      {
        kanji: '堪',
        meaning: 'withstand'
      },
      {
        kanji: '査',
        meaning: 'investigate'
      }
    ]
  },
  {
    kanjiName: '渋',
    strokes: 11,
    grade: 8,
    freq: 1011,
    meanings: ['Astringent', 'Hesitate', 'Reluctant', 'Have Diarrhea'],
    on: ['じゅう', 'しゅう'],
    kun: ['しぶ', 'しぶ.い', 'しぶ.る'],
    jlpt: 1,
    quizAnswers: ['Astringent', 'Matter', 'Solve', 'Territory'],
    similars: [
      {
        kanji: '泣',
        meaning: 'cry'
      },
      {
        kanji: '洪',
        meaning: 'deluge'
      },
      {
        kanji: '渉',
        meaning: 'ford'
      },
      {
        kanji: '涼',
        meaning: 'refreshing'
      },
      {
        kanji: '浜',
        meaning: 'seacoast'
      },
      {
        kanji: '法',
        meaning: 'method'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '浅',
        meaning: 'shallow'
      },
      {
        kanji: '漏',
        meaning: 'leak'
      },
      {
        kanji: '装',
        meaning: 'attire'
      }
    ]
  },
  {
    kanjiName: '仙',
    strokes: 5,
    grade: 8,
    freq: 1157,
    meanings: ['Hermit', 'Wizard', 'Cent'],
    on: ['せん', 'せんと'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Frivolous', 'Hermit', 'Experience', 'Dealer'],
    similars: [
      {
        kanji: '両',
        meaning: 'both'
      },
      {
        kanji: '缶',
        meaning: 'tin can'
      },
      {
        kanji: '川',
        meaning: 'stream'
      },
      {
        kanji: '山',
        meaning: 'mountain'
      },
      {
        kanji: '凹',
        meaning: 'concave'
      },
      {
        kanji: '凶',
        meaning: 'villain'
      },
      {
        kanji: '印',
        meaning: 'stamp'
      },
      {
        kanji: '年',
        meaning: 'year'
      },
      {
        kanji: '島',
        meaning: 'island'
      },
      {
        kanji: '画',
        meaning: 'brush-stroke'
      }
    ]
  },
  {
    kanjiName: '充',
    strokes: 6,
    grade: 8,
    freq: 949,
    meanings: ['Allot', 'Fill'],
    on: ['じゅう'],
    kun: ['あ.てる', 'み.たす'],
    jlpt: 1,
    quizAnswers: ['Allot', 'Follow', 'Blessing', 'Be Frightened'],
    similars: [
      {
        kanji: '交',
        meaning: 'mingle'
      },
      {
        kanji: '立',
        meaning: 'stand up'
      },
      {
        kanji: '流',
        meaning: 'current'
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)'
      },
      {
        kanji: '売',
        meaning: 'sell'
      },
      {
        kanji: '却',
        meaning: 'instead'
      },
      {
        kanji: '劾',
        meaning: 'censure'
      },
      {
        kanji: '統',
        meaning: 'overall'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '老',
        meaning: 'old man'
      }
    ]
  },
  {
    kanjiName: '免',
    strokes: 8,
    grade: 8,
    freq: 1080,
    meanings: ['Excuse', 'Dismissal'],
    on: ['めん'],
    kun: ['まぬか.れる', 'まぬが.れる'],
    jlpt: 1,
    quizAnswers: ['Ruin', 'Carry', 'Bureau', 'Excuse'],
    similars: [
      {
        kanji: '勉',
        meaning: 'exertion'
      },
      {
        kanji: '晩',
        meaning: 'nightfall'
      },
      {
        kanji: '逸',
        meaning: 'deviate'
      },
      {
        kanji: '色',
        meaning: 'color'
      },
      {
        kanji: '児',
        meaning: 'newborn babe'
      },
      {
        kanji: '鬼',
        meaning: 'ghost'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      },
      {
        kanji: '負',
        meaning: 'defeat'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '規',
        meaning: 'standard'
      }
    ]
  },
  {
    kanjiName: '勧',
    strokes: 13,
    grade: 8,
    freq: 1068,
    meanings: ['Persuade', 'Recommend', 'Advise', 'Encourage', 'Offer'],
    on: ['かん', 'けん'],
    kun: ['すす.める'],
    jlpt: 1,
    quizAnswers: ['Rave', 'Other', 'Persuade', 'Graduate'],
    similars: [
      {
        kanji: '歓',
        meaning: 'delight'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '観',
        meaning: 'outlook'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '獲',
        meaning: 'seize'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '携',
        meaning: 'portable'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      },
      {
        kanji: '隻',
        meaning: 'vessels'
      }
    ]
  },
  {
    kanjiName: '圏',
    strokes: 12,
    grade: 8,
    freq: 1216,
    meanings: ['Sphere', 'Circle', 'Radius', 'Range'],
    on: ['けん'],
    kun: ['かこ.い'],
    jlpt: 1,
    quizAnswers: ['Sphere', 'Trade', 'Ream', 'Music'],
    similars: [
      {
        kanji: '巻',
        meaning: 'scroll'
      },
      {
        kanji: '遷',
        meaning: 'transition'
      },
      {
        kanji: '囲',
        meaning: 'surround'
      },
      {
        kanji: '港',
        meaning: 'harbor'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      },
      {
        kanji: '挙',
        meaning: 'raise'
      },
      {
        kanji: '券',
        meaning: 'ticket'
      },
      {
        kanji: '困',
        meaning: 'quandary'
      },
      {
        kanji: '僕',
        meaning: 'me'
      },
      {
        kanji: '記',
        meaning: 'scribe'
      }
    ]
  },
  {
    kanjiName: '奪',
    strokes: 14,
    grade: 8,
    freq: 974,
    meanings: ['Rob', 'Take By Force', 'Snatch Away', 'Dispossess', 'Plunder', 'Usurp'],
    on: ['だつ'],
    kun: ['うば.う'],
    jlpt: 1,
    quizAnswers: ['Condition', 'Mouth', 'Spirit', 'Rob'],
    similars: [
      {
        kanji: '奮',
        meaning: 'stirred up'
      },
      {
        kanji: '礁',
        meaning: 'reef'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '準',
        meaning: 'semi-'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '携',
        meaning: 'portable'
      },
      {
        kanji: '勧',
        meaning: 'persuade'
      },
      {
        kanji: '焦',
        meaning: 'char'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '隻',
        meaning: 'vessels'
      }
    ]
  },
  {
    kanjiName: '慎',
    strokes: 13,
    grade: 8,
    freq: 999,
    meanings: ['Humility', 'Be Careful', 'Discreet', 'Prudent'],
    on: ['しん'],
    kun: ['つつし.む', 'つつ.ましい', 'つつし', 'つつし.み'],
    jlpt: 1,
    quizAnswers: ['Humility', 'Piece', 'Mr.', 'Guard'],
    similars: [
      {
        kanji: '真',
        meaning: 'true'
      },
      {
        kanji: '恒',
        meaning: 'constancy'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '憤',
        meaning: 'aroused'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '慣',
        meaning: 'accustomed'
      },
      {
        kanji: '懐',
        meaning: 'feelings'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '視',
        meaning: 'inspection'
      },
      {
        kanji: '具',
        meaning: 'tool'
      }
    ]
  },
  {
    kanjiName: '拒',
    strokes: 8,
    grade: 8,
    freq: 863,
    meanings: ['Repel', 'Refuse', 'Reject', 'Decline'],
    on: ['きょ', 'ご'],
    kun: ['こば.む'],
    jlpt: 1,
    quizAnswers: ['Resources', 'Hurt', 'Dust', 'Repel'],
    similars: [
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '巨',
        meaning: 'gigantic'
      },
      {
        kanji: '拐',
        meaning: 'kidnap'
      },
      {
        kanji: '排',
        meaning: 'repudiate'
      },
      {
        kanji: '携',
        meaning: 'portable'
      },
      {
        kanji: '非',
        meaning: 'un-'
      },
      {
        kanji: '押',
        meaning: 'push'
      },
      {
        kanji: '操',
        meaning: 'maneuver'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '沖',
        meaning: 'open sea'
      }
    ]
  },
  {
    kanjiName: '枠',
    strokes: 8,
    grade: 8,
    freq: 922,
    meanings: ['Frame', 'Framework', 'Spindle', 'Spool', 'Bounding-box', '(kokuji)'],
    on: [],
    kun: ['わく'],
    jlpt: 1,
    quizAnswers: ['Appreciate', 'Line', 'Low', 'Frame'],
    similars: [
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '柳',
        meaning: 'willow'
      },
      {
        kanji: '砕',
        meaning: 'smash'
      },
      {
        kanji: '断',
        meaning: 'severance'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '卒',
        meaning: 'graduate'
      },
      {
        kanji: '松',
        meaning: 'pine tree'
      }
    ]
  },
  {
    kanjiName: '甲',
    strokes: 5,
    grade: 8,
    freq: 1073,
    meanings: ['Armor', 'High (voice)', 'A Grade', 'First Class', 'Former', 'Instep', 'Carapace'],
    on: ['こう', 'かん'],
    kun: ['きのえ'],
    jlpt: 1,
    quizAnswers: ['Goods', 'Blunt', 'Armor', 'Everything'],
    similars: [
      {
        kanji: '申',
        meaning: 'have the honor to'
      },
      {
        kanji: '早',
        meaning: 'early'
      },
      {
        kanji: '日',
        meaning: 'day'
      },
      {
        kanji: '目',
        meaning: 'eye'
      },
      {
        kanji: '伸',
        meaning: 'expand'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '門',
        meaning: 'gate'
      },
      {
        kanji: '昇',
        meaning: 'rise up'
      },
      {
        kanji: '東',
        meaning: 'east'
      }
    ]
  },
  {
    kanjiName: '斐',
    strokes: 12,
    grade: 9,
    freq: 2103,
    meanings: ['Beautiful', 'Patterned'],
    on: ['ひ', 'い'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Beautiful', 'Govt Office', 'Lively', 'And So Forth']
  },
  {
    kanjiName: '祉',
    strokes: 8,
    grade: 8,
    freq: 1063,
    meanings: ['Welfare', 'Happiness'],
    on: ['し'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Leave', 'Make A Living', 'Welfare', 'Floor'],
    similars: [
      {
        kanji: '社',
        meaning: 'company'
      },
      {
        kanji: '祖',
        meaning: 'ancestor'
      },
      {
        kanji: '征',
        meaning: 'subjugate'
      },
      {
        kanji: '祝',
        meaning: 'celebrate'
      },
      {
        kanji: '礼',
        meaning: 'salute'
      },
      {
        kanji: '祥',
        meaning: 'auspicious'
      },
      {
        kanji: '被',
        meaning: 'incur'
      },
      {
        kanji: '企',
        meaning: 'undertake'
      },
      {
        kanji: '止',
        meaning: 'stop'
      },
      {
        kanji: '江',
        meaning: 'creek'
      }
    ]
  },
  {
    kanjiName: '稲',
    strokes: 14,
    grade: 8,
    freq: 1038,
    meanings: ['Rice Plant'],
    on: ['とう', 'て'],
    kun: ['いね', 'いな-'],
    jlpt: 1,
    quizAnswers: ['Class', 'Rice Plant', 'Frozen', 'Yellow'],
    similars: [
      {
        kanji: '暦',
        meaning: 'calendar'
      },
      {
        kanji: '移',
        meaning: 'shift'
      },
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '殉',
        meaning: 'martyrdom'
      },
      {
        kanji: '替',
        meaning: 'exchange'
      },
      {
        kanji: '穏',
        meaning: 'calm'
      },
      {
        kanji: '類',
        meaning: 'sort'
      },
      {
        kanji: '縮',
        meaning: 'shrink'
      },
      {
        kanji: '積',
        meaning: 'volume'
      }
    ]
  },
  {
    kanjiName: '譲',
    strokes: 20,
    grade: 8,
    freq: 984,
    meanings: ['Defer', 'Turnover', 'Transfer', 'Convey'],
    on: ['じょう'],
    kun: ['ゆず.る'],
    jlpt: 1,
    quizAnswers: ['Troops', 'Class', 'Late', 'Defer'],
    similars: [
      {
        kanji: '壌',
        meaning: 'lot'
      },
      {
        kanji: '嬢',
        meaning: 'lass'
      },
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '謙',
        meaning: 'self-effacing'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '該',
        meaning: 'above-stated'
      },
      {
        kanji: '誕',
        meaning: 'nativity'
      },
      {
        kanji: '議',
        meaning: 'deliberation'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '請',
        meaning: 'solicit'
      }
    ]
  },
  {
    kanjiName: '謙',
    strokes: 17,
    grade: 8,
    freq: 1582,
    meanings: ['Self-effacing', 'Humble Oneself', 'Condescend', 'Be Modest'],
    on: ['けん'],
    kun: ['へりくだ.る'],
    jlpt: 1,
    quizAnswers: ['Self-effacing', 'Name', 'Err', 'Coal'],
    similars: [
      {
        kanji: '詳',
        meaning: 'detailed'
      },
      {
        kanji: '議',
        meaning: 'deliberation'
      },
      {
        kanji: '譲',
        meaning: 'defer'
      },
      {
        kanji: '課',
        meaning: 'chapter'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '謀',
        meaning: 'conspire'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      },
      {
        kanji: '談',
        meaning: 'discuss'
      },
      {
        kanji: '譜',
        meaning: 'musical score'
      }
    ]
  },
  {
    kanjiName: '躍',
    strokes: 21,
    grade: 8,
    freq: 900,
    meanings: ['Leap', 'Dance', 'Skip'],
    on: ['やく'],
    kun: ['おど.る'],
    jlpt: 1,
    quizAnswers: ['Leap', 'Further', 'Order', 'Coming & Going'],
    similars: [
      {
        kanji: '濯',
        meaning: 'laundry'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '雌',
        meaning: 'feminine'
      },
      {
        kanji: '距',
        meaning: 'long-distance'
      },
      {
        kanji: '羅',
        meaning: 'gauze'
      },
      {
        kanji: '離',
        meaning: 'detach'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      }
    ]
  },
  {
    kanjiName: '銃',
    strokes: 14,
    grade: 8,
    freq: 1013,
    meanings: ['Gun', 'Arms'],
    on: ['じゅう'],
    kun: ['つつ'],
    jlpt: 1,
    quizAnswers: ['Negate', 'School', 'Unimportant', 'Gun'],
    similars: [
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '錠',
        meaning: 'lock'
      },
      {
        kanji: '録',
        meaning: 'record'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '鈴',
        meaning: 'small bell'
      }
    ]
  },
  {
    kanjiName: '項',
    strokes: 12,
    grade: 8,
    freq: 884,
    meanings: ['Paragraph', 'Nape Of Neck', 'Clause', 'Item', 'Term (expression)'],
    on: ['こう'],
    kun: ['うなじ'],
    jlpt: 1,
    quizAnswers: ['Rival', 'Stop-over', 'Paragraph', 'Cover'],
    similars: [
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '頑',
        meaning: 'stubborn'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '現',
        meaning: 'present'
      },
      {
        kanji: '墳',
        meaning: 'tomb'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      }
    ]
  },
  {
    kanjiName: '鋼',
    strokes: 16,
    grade: 6,
    freq: 1246,
    meanings: ['Steel'],
    on: ['こう'],
    kun: ['はがね'],
    jlpt: 1,
    quizAnswers: ['Age', 'Emit', 'Steel', 'Be Favored With'],
    similars: [
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '鋳',
        meaning: 'casting'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '錠',
        meaning: 'lock'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '鐘',
        meaning: 'bell'
      },
      {
        kanji: '鏡',
        meaning: 'mirror'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '鈍',
        meaning: 'dull'
      }
    ]
  },
  {
    kanjiName: '顧',
    strokes: 21,
    grade: 8,
    freq: 1058,
    meanings: ['Look Back', 'Review', 'Examine Oneself', 'Turn Around'],
    on: ['こ'],
    kun: ['かえり.みる'],
    jlpt: 1,
    quizAnswers: ['Look Back', 'Word', 'Strength', 'Carry Out'],
    similars: [
      {
        kanji: '観',
        meaning: 'outlook'
      },
      {
        kanji: '奮',
        meaning: 'stirred up'
      },
      {
        kanji: '願',
        meaning: 'petition'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '頼',
        meaning: 'trust'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '頭',
        meaning: 'head'
      },
      {
        kanji: '類',
        meaning: 'sort'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '頒',
        meaning: 'distribute'
      }
    ]
  },
  {
    kanjiName: '駆',
    strokes: 14,
    grade: 8,
    freq: 1033,
    meanings: ['Drive', 'Run', 'Gallop', 'Advance', 'Inspire', 'Impel'],
    on: ['く'],
    kun: ['か.ける', 'か.る'],
    jlpt: 1,
    quizAnswers: ['Plate', 'Amount', 'Drive', 'Degrees'],
    similars: [
      {
        kanji: '駄',
        meaning: 'burdensome'
      },
      {
        kanji: '駐',
        meaning: 'stop-over'
      },
      {
        kanji: '騎',
        meaning: 'equestrian'
      },
      {
        kanji: '馬',
        meaning: 'horse'
      },
      {
        kanji: '駅',
        meaning: 'station'
      },
      {
        kanji: '験',
        meaning: 'verification'
      },
      {
        kanji: '騒',
        meaning: 'boisterous'
      },
      {
        kanji: '焦',
        meaning: 'char'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      },
      {
        kanji: '鮮',
        meaning: 'fresh'
      }
    ]
  },
  {
    kanjiName: '唱',
    strokes: 11,
    grade: 4,
    freq: 1123,
    meanings: ['Chant', 'Recite', 'Call Upon', 'Yell'],
    on: ['しょう'],
    kun: ['とな.える'],
    jlpt: 1,
    quizAnswers: ['Efficacy', 'Own', 'Purify', 'Chant'],
    similars: [
      {
        kanji: '帽',
        meaning: 'cap'
      },
      {
        kanji: '晶',
        meaning: 'sparkle'
      },
      {
        kanji: '僧',
        meaning: 'Buddhist priest'
      },
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '憎',
        meaning: 'hate'
      },
      {
        kanji: '冒',
        meaning: 'risk'
      },
      {
        kanji: '門',
        meaning: 'gate'
      },
      {
        kanji: '喝',
        meaning: 'hoarse'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      }
    ]
  },
  {
    kanjiName: '俊',
    strokes: 9,
    grade: 8,
    freq: 1007,
    meanings: ['Sagacious', 'Genius', 'Excellence'],
    on: ['しゅん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Help', 'Descend', 'Army', 'Sagacious'],
    similars: [
      {
        kanji: '唆',
        meaning: 'tempt'
      },
      {
        kanji: '酸',
        meaning: 'acid'
      },
      {
        kanji: '後',
        meaning: 'behind'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '仮',
        meaning: 'sham'
      },
      {
        kanji: '受',
        meaning: 'accept'
      },
      {
        kanji: '陵',
        meaning: 'mausoleum'
      },
      {
        kanji: '殺',
        meaning: 'kill'
      },
      {
        kanji: '般',
        meaning: 'carrier'
      },
      {
        kanji: '奥',
        meaning: 'heart'
      }
    ]
  },
  {
    kanjiName: '兼',
    strokes: 10,
    grade: 8,
    freq: 1164,
    meanings: ['Concurrently', 'And', 'Beforehand', 'In Advance'],
    on: ['けん'],
    kun: ['か.ねる', '-か.ねる'],
    jlpt: 1,
    quizAnswers: ['Concurrently', 'Minute', 'Run', 'Block'],
    similars: [
      {
        kanji: '嫌',
        meaning: 'dislike'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '業',
        meaning: 'business'
      },
      {
        kanji: '米',
        meaning: 'rice'
      },
      {
        kanji: '弟',
        meaning: 'younger brother'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '羊',
        meaning: 'sheep'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '判',
        meaning: 'judgement'
      }
    ]
  },
  {
    kanjiName: '剤',
    strokes: 10,
    grade: 8,
    freq: 1151,
    meanings: ['Dose', 'Medicine', 'Drug'],
    on: ['ざい', 'すい', 'せい'],
    kun: ['かる', 'けず.る'],
    jlpt: 1,
    quizAnswers: ['Counter For Branches', 'Company', 'Defect', 'Dose'],
    similars: [
      {
        kanji: '斉',
        meaning: 'adjusted'
      },
      {
        kanji: '卒',
        meaning: 'graduate'
      },
      {
        kanji: '削',
        meaning: 'plane'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '刻',
        meaning: 'engrave'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '痢',
        meaning: 'diarrhea'
      },
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      },
      {
        kanji: '規',
        meaning: 'standard'
      }
    ]
  },
  {
    kanjiName: '堀',
    strokes: 11,
    grade: 8,
    freq: 1285,
    meanings: ['Ditch', 'Moat', 'Canal'],
    on: ['くつ'],
    kun: ['ほり'],
    jlpt: 1,
    quizAnswers: ['Winter', 'Ditch', 'Slope', 'Shut Up'],
    similars: [
      {
        kanji: '掘',
        meaning: 'dig'
      },
      {
        kanji: '屈',
        meaning: 'yield'
      },
      {
        kanji: '塀',
        meaning: 'fence'
      },
      {
        kanji: '拙',
        meaning: 'bungling'
      },
      {
        kanji: '所',
        meaning: 'place'
      },
      {
        kanji: '坪',
        meaning: 'two-mat area'
      },
      {
        kanji: '房',
        meaning: 'tassel'
      },
      {
        kanji: '据',
        meaning: 'set'
      },
      {
        kanji: '出',
        meaning: 'exit'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      }
    ]
  },
  {
    kanjiName: '巡',
    strokes: 6,
    grade: 8,
    freq: 1262,
    meanings: ['Patrol', 'Go Around', 'Circumference'],
    on: ['じゅん'],
    kun: ['めぐ.る', 'めぐ.り'],
    jlpt: 1,
    quizAnswers: ['Clear', 'Ban', 'Fulfill', 'Patrol'],
    similars: [
      {
        kanji: '災',
        meaning: 'disaster'
      },
      {
        kanji: '込',
        meaning: 'crowded'
      },
      {
        kanji: '迅',
        meaning: 'swift'
      },
      {
        kanji: '辺',
        meaning: 'environs'
      },
      {
        kanji: '返',
        meaning: 'return'
      },
      {
        kanji: '近',
        meaning: 'near'
      },
      {
        kanji: '迎',
        meaning: 'welcome'
      },
      {
        kanji: '迫',
        meaning: 'urge'
      },
      {
        kanji: '迭',
        meaning: 'transfer'
      },
      {
        kanji: '述',
        meaning: 'mention'
      }
    ]
  },
  {
    kanjiName: '戒',
    strokes: 7,
    grade: 8,
    freq: 1062,
    meanings: ['Commandment'],
    on: ['かい'],
    kun: ['いまし.める'],
    jlpt: 1,
    quizAnswers: ['Inaccessible Place', 'Commandment', 'Solid', 'Fast'],
    similars: [
      {
        kanji: '威',
        meaning: 'intimidate'
      },
      {
        kanji: '械',
        meaning: 'contraption'
      },
      {
        kanji: '茂',
        meaning: 'overgrown'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      },
      {
        kanji: '不',
        meaning: 'negative'
      },
      {
        kanji: '井',
        meaning: 'well'
      },
      {
        kanji: '伐',
        meaning: 'fell'
      },
      {
        kanji: '我',
        meaning: 'ego'
      },
      {
        kanji: '赤',
        meaning: 'red'
      },
      {
        kanji: '弐',
        meaning: 'II'
      }
    ]
  },
  {
    kanjiName: '排',
    strokes: 11,
    grade: 8,
    freq: 1047,
    meanings: ['Repudiate', 'Exclude', 'Expel', 'Reject', 'Line Up', 'Arrange'],
    on: ['はい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Uselessness', 'Repudiate', 'Dwell', 'Resources'],
    similars: [
      {
        kanji: '扉',
        meaning: 'front door'
      },
      {
        kanji: '俳',
        meaning: 'haiku'
      },
      {
        kanji: '非',
        meaning: 'un-'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '罪',
        meaning: 'guilt'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      },
      {
        kanji: '拒',
        meaning: 'repel'
      }
    ]
  },
  {
    kanjiName: '携',
    strokes: 13,
    grade: 8,
    freq: 1017,
    meanings: ['Portable', 'Carry (in Hand)', 'Armed With', 'Bring Along'],
    on: ['けい'],
    kun: ['たずさ.える', 'たずさ.わる'],
    jlpt: 1,
    quizAnswers: ['Portable', 'Refer To', 'Field', 'Eat'],
    similars: [
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '準',
        meaning: 'semi-'
      },
      {
        kanji: '准',
        meaning: 'quasi-'
      },
      {
        kanji: '奪',
        meaning: 'rob'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '勧',
        meaning: 'persuade'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '隻',
        meaning: 'vessels'
      }
    ]
  },
  {
    kanjiName: '敏',
    strokes: 10,
    grade: 8,
    freq: 1042,
    meanings: ['Cleverness', 'Agile', 'Alert'],
    on: ['びん'],
    kun: ['さとい'],
    jlpt: 1,
    quizAnswers: ['Short', 'Cleverness', 'Wish', 'Store'],
    similars: [
      {
        kanji: '袋',
        meaning: 'sack'
      },
      {
        kanji: '乗',
        meaning: 'ride'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '牧',
        meaning: 'breed'
      },
      {
        kanji: '政',
        meaning: 'politics'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '走',
        meaning: 'run'
      },
      {
        kanji: '衣',
        meaning: 'garment'
      }
    ]
  },
  {
    kanjiName: '敷',
    strokes: 15,
    grade: 8,
    freq: 1212,
    meanings: ['Spread', 'Pave', 'Sit', 'Promulgate'],
    on: ['ふ'],
    kun: ['し.く', '-し.き'],
    jlpt: 1,
    quizAnswers: ['Put', 'Pierce', 'Spread', 'Trillion'],
    similars: [
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '激',
        meaning: 'violent'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '映',
        meaning: 'reflect'
      },
      {
        kanji: '楽',
        meaning: 'music'
      },
      {
        kanji: '関',
        meaning: 'connection'
      }
    ]
  },
  {
    kanjiName: '犠',
    strokes: 17,
    grade: 8,
    freq: 1189,
    meanings: ['Sacrifice'],
    on: ['ぎ', 'き'],
    kun: ['いけにえ'],
    jlpt: 1,
    quizAnswers: ['Delve', 'All', 'Sacrifice', 'Keep'],
    similars: [
      {
        kanji: '儀',
        meaning: 'ceremony'
      },
      {
        kanji: '義',
        meaning: 'righteousness'
      },
      {
        kanji: '議',
        meaning: 'deliberation'
      },
      {
        kanji: '特',
        meaning: 'special'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '桟',
        meaning: 'scaffold'
      },
      {
        kanji: '械',
        meaning: 'contraption'
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice'
      },
      {
        kanji: '鋳',
        meaning: 'casting'
      }
    ]
  },
  {
    kanjiName: '獲',
    strokes: 16,
    grade: 8,
    freq: 964,
    meanings: ['Seize', 'Get', 'Find', 'Earn', 'Acquire', 'Can', 'May', 'Able To'],
    on: ['かく'],
    kun: ['え.る'],
    jlpt: 1,
    quizAnswers: ['Seize', 'Regret', 'Supply', 'Records'],
    similars: [
      {
        kanji: '穫',
        meaning: 'harvest'
      },
      {
        kanji: '護',
        meaning: 'safeguard'
      },
      {
        kanji: '勧',
        meaning: 'persuade'
      },
      {
        kanji: '隻',
        meaning: 'vessels'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '歓',
        meaning: 'delight'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      }
    ]
  },
  {
    kanjiName: '茂',
    strokes: 8,
    grade: 8,
    freq: 1188,
    meanings: ['Overgrown', 'Grow Thick', 'Be Luxuriant'],
    on: ['も'],
    kun: ['しげ.る'],
    jlpt: 1,
    quizAnswers: ['Resources', 'Overgrown', 'Route', 'Manage'],
    similars: [
      {
        kanji: '城',
        meaning: 'castle'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      },
      {
        kanji: '越',
        meaning: 'surpass'
      },
      {
        kanji: '芸',
        meaning: 'technique'
      },
      {
        kanji: '赤',
        meaning: 'red'
      },
      {
        kanji: '花',
        meaning: 'flower'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '芳',
        meaning: 'perfume'
      }
    ]
  },
  {
    kanjiName: '繁',
    strokes: 16,
    grade: 8,
    freq: 1198,
    meanings: ['Luxuriant', 'Thick', 'Overgrown', 'Frequency', 'Complexity', 'Trouble'],
    on: ['はん'],
    kun: ['しげ.る', 'しげ.く'],
    jlpt: 1,
    quizAnswers: ['Train', 'Luxuriant', 'Truth', 'Rise'],
    similars: [
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '孫',
        meaning: 'grandchild'
      },
      {
        kanji: '紫',
        meaning: 'purple'
      },
      {
        kanji: '係',
        meaning: 'person in charge'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '索',
        meaning: 'cord'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '啓',
        meaning: 'disclose'
      },
      {
        kanji: '緊',
        meaning: 'tense'
      }
    ]
  },
  {
    kanjiName: '頻',
    strokes: 17,
    grade: 8,
    freq: 1590,
    meanings: ['Repeatedly', 'Recur'],
    on: ['ひん'],
    kun: ['しき.りに'],
    jlpt: 1,
    quizAnswers: ['Woman', 'Repeatedly', 'Perfect', 'Fly'],
    similars: [
      {
        kanji: '賓',
        meaning: 'V.I.P.'
      },
      {
        kanji: '顔',
        meaning: 'face'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '頑',
        meaning: 'stubborn'
      },
      {
        kanji: '質',
        meaning: 'substance'
      },
      {
        kanji: '類',
        meaning: 'sort'
      },
      {
        kanji: '顕',
        meaning: 'appear'
      },
      {
        kanji: '預',
        meaning: 'deposit'
      },
      {
        kanji: '煩',
        meaning: 'anxiety'
      },
      {
        kanji: '頼',
        meaning: 'trust'
      }
    ]
  },
  {
    kanjiName: '殖',
    strokes: 12,
    grade: 8,
    freq: 1362,
    meanings: ['Augment', 'Increase', 'Multiply', 'Raise'],
    on: ['しょく'],
    kun: ['ふ.える', 'ふ.やす'],
    jlpt: 1,
    quizAnswers: ['Dry', 'Inhabit', 'Augment', 'Second (1/60 Minute)'],
    similars: [
      {
        kanji: '植',
        meaning: 'plant'
      },
      {
        kanji: '値',
        meaning: 'price'
      },
      {
        kanji: '殉',
        meaning: 'martyrdom'
      },
      {
        kanji: '直',
        meaning: 'straightaway'
      },
      {
        kanji: '盾',
        meaning: 'shield'
      },
      {
        kanji: '置',
        meaning: 'placement'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      },
      {
        kanji: '循',
        meaning: 'sequential'
      },
      {
        kanji: '省',
        meaning: 'government ministry'
      },
      {
        kanji: '首',
        meaning: 'neck'
      }
    ]
  },
  {
    kanjiName: '衝',
    strokes: 15,
    grade: 8,
    freq: 972,
    meanings: [
      'Collide',
      'Brunt',
      'Highway',
      'Opposition (astronomy)',
      'Thrust',
      'Pierce',
      'Stab',
      'Prick'
    ],
    on: ['しょう'],
    kun: ['つ.く'],
    jlpt: 1,
    quizAnswers: ['Omen', 'Collide', 'Bear (a Burden)', 'Communicate'],
    similars: [
      {
        kanji: '働',
        meaning: 'work'
      },
      {
        kanji: '衡',
        meaning: 'equilibrium'
      },
      {
        kanji: '衛',
        meaning: 'defense'
      },
      {
        kanji: '種',
        meaning: 'species'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '復',
        meaning: 'restore'
      },
      {
        kanji: '得',
        meaning: 'gain'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '動',
        meaning: 'move'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      }
    ]
  },
  {
    kanjiName: '誉',
    strokes: 13,
    grade: 8,
    freq: 1064,
    meanings: ['Reputation', 'Praise', 'Honor', 'Glory'],
    on: ['よ'],
    kun: ['ほま.れ', 'ほ.める'],
    jlpt: 1,
    quizAnswers: ['Battle', 'Embrace', 'Reputation', 'Gentleness'],
    similars: [
      {
        kanji: '謄',
        meaning: 'mimeograph'
      },
      {
        kanji: '挙',
        meaning: 'raise'
      },
      {
        kanji: '信',
        meaning: 'faith'
      },
      {
        kanji: '警',
        meaning: 'admonish'
      },
      {
        kanji: '誓',
        meaning: 'vow'
      },
      {
        kanji: '糖',
        meaning: 'sugar'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '害',
        meaning: 'harm'
      },
      {
        kanji: '言',
        meaning: 'say'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      }
    ]
  },
  {
    kanjiName: '褒',
    strokes: 15,
    grade: 8,
    freq: 2073,
    meanings: ['Praise', 'Extol'],
    on: ['ほう'],
    kun: ['ほ.める'],
    jlpt: 1,
    quizAnswers: ['Outrage', 'Circuit', 'Primitive', 'Praise'],
    similars: [
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '保',
        meaning: 'protect'
      },
      {
        kanji: '硬',
        meaning: 'stiff'
      },
      {
        kanji: '礎',
        meaning: 'cornerstone'
      },
      {
        kanji: '勅',
        meaning: 'imperial order'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      },
      {
        kanji: '衰',
        meaning: 'decline'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      }
    ]
  },
  {
    kanjiName: '透',
    strokes: 10,
    grade: 8,
    freq: 1035,
    meanings: ['Transparent', 'Permeate', 'Filter', 'Penetrate'],
    on: ['とう'],
    kun: ['す.く', 'す.かす', 'す.ける', 'とう.る', 'とう.す'],
    jlpt: 1,
    quizAnswers: ['Transparent', 'In Pain', 'Line', 'Happen'],
    similars: [
      {
        kanji: '秀',
        meaning: 'excel'
      },
      {
        kanji: '迭',
        meaning: 'transfer'
      },
      {
        kanji: '述',
        meaning: 'mention'
      },
      {
        kanji: '迷',
        meaning: 'astray'
      },
      {
        kanji: '遂',
        meaning: 'consummate'
      },
      {
        kanji: '移',
        meaning: 'shift'
      },
      {
        kanji: '逸',
        meaning: 'deviate'
      },
      {
        kanji: '遠',
        meaning: 'distant'
      },
      {
        kanji: '造',
        meaning: 'create'
      },
      {
        kanji: '道',
        meaning: 'road-way'
      }
    ]
  },
  {
    kanjiName: '隣',
    strokes: 16,
    grade: 8,
    freq: 1083,
    meanings: ['Neighboring'],
    on: ['りん'],
    kun: ['とな.る', 'となり'],
    jlpt: 1,
    quizAnswers: ['Sharpness', 'Play (chess)', 'Break', 'Neighboring'],
    similars: [
      {
        kanji: '墜',
        meaning: 'crash'
      },
      {
        kanji: '隆',
        meaning: 'hump'
      },
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      },
      {
        kanji: '料',
        meaning: 'fee'
      },
      {
        kanji: '陶',
        meaning: 'pottery'
      },
      {
        kanji: '堕',
        meaning: 'degenerate'
      },
      {
        kanji: '瞬',
        meaning: 'wink'
      },
      {
        kanji: '挙',
        meaning: 'raise'
      },
      {
        kanji: '陸',
        meaning: 'land'
      }
    ]
  },
  {
    kanjiName: '雅',
    strokes: 13,
    grade: 8,
    freq: 1192,
    meanings: ['Gracious', 'Elegant', 'Graceful', 'Refined'],
    on: ['が'],
    kun: ['みや.び'],
    jlpt: 1,
    quizAnswers: ['Gracious', 'Tune', 'Chase', 'Occasion'],
    similars: [
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '擁',
        meaning: 'hug'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '難',
        meaning: 'difficult'
      },
      {
        kanji: '雌',
        meaning: 'feminine'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      }
    ]
  },
  {
    kanjiName: '徹',
    strokes: 15,
    grade: 8,
    freq: 968,
    meanings: ['Penetrate', 'Clear', 'Pierce', 'Strike Home', 'Sit Up (all Night)'],
    on: ['てつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Rumor', 'Penetrate', 'Suspend', 'Rare'],
    similars: [
      {
        kanji: '撤',
        meaning: 'remove'
      },
      {
        kanji: '散',
        meaning: 'scatter'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '罷',
        meaning: 'quit'
      },
      {
        kanji: '能',
        meaning: 'ability'
      },
      {
        kanji: '育',
        meaning: 'bring up'
      },
      {
        kanji: '微',
        meaning: 'delicate'
      },
      {
        kanji: '復',
        meaning: 'restore'
      },
      {
        kanji: '徴',
        meaning: 'indications'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      }
    ]
  },
  {
    kanjiName: '瀬',
    strokes: 19,
    grade: 8,
    freq: 1152,
    meanings: ['Rapids', 'Current', 'Torrent', 'Shallows', 'Shoal'],
    on: ['らい'],
    kun: ['せ'],
    jlpt: 1,
    quizAnswers: ['Rapids', 'Fathom', 'Heavy', 'Emptiness'],
    similars: [
      {
        kanji: '頼',
        meaning: 'trust'
      },
      {
        kanji: '頭',
        meaning: 'head'
      },
      {
        kanji: '類',
        meaning: 'sort'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '源',
        meaning: 'source'
      },
      {
        kanji: '煩',
        meaning: 'anxiety'
      },
      {
        kanji: '憤',
        meaning: 'aroused'
      },
      {
        kanji: '顔',
        meaning: 'face'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '頻',
        meaning: 'repeatedly'
      }
    ]
  },
  {
    kanjiName: '撤',
    strokes: 15,
    grade: 8,
    freq: 811,
    meanings: ['Remove', 'Withdraw', 'Disarm', 'Dismantle', 'Reject', 'Exclude'],
    on: ['てつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Hide', 'Remove', 'Outstanding', 'Cremate'],
    similars: [
      {
        kanji: '徹',
        meaning: 'penetrate'
      },
      {
        kanji: '散',
        meaning: 'scatter'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '罷',
        meaning: 'quit'
      },
      {
        kanji: '能',
        meaning: 'ability'
      },
      {
        kanji: '接',
        meaning: 'touch'
      },
      {
        kanji: '育',
        meaning: 'bring up'
      },
      {
        kanji: '教',
        meaning: 'teach'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      }
    ]
  },
  {
    kanjiName: '措',
    strokes: 11,
    grade: 8,
    freq: 818,
    meanings: ['Set Aside', 'Give Up', 'Suspend', 'Discontinue', 'Lay Aside', 'Except'],
    on: ['そ'],
    kun: ['お.く'],
    jlpt: 1,
    quizAnswers: ['Set Aside', 'Case', 'Rival', 'Wear Mustache'],
    similars: [
      {
        kanji: '描',
        meaning: 'sketch'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '借',
        meaning: 'borrow'
      },
      {
        kanji: '惜',
        meaning: 'pity'
      },
      {
        kanji: '挿',
        meaning: 'insert'
      },
      {
        kanji: '拍',
        meaning: 'clap'
      },
      {
        kanji: '指',
        meaning: 'finger'
      },
      {
        kanji: '著',
        meaning: 'renowned'
      },
      {
        kanji: '横',
        meaning: 'sideways'
      },
      {
        kanji: '揮',
        meaning: 'brandish'
      }
    ]
  },
  {
    kanjiName: '拠',
    strokes: 8,
    grade: 8,
    freq: 858,
    meanings: ['Foothold', 'Based On', 'Follow', 'Therefore'],
    on: ['きょ', 'こ'],
    kun: ['よ.る'],
    jlpt: 1,
    quizAnswers: ['Foothold', 'Wish', 'Horse', 'Usage'],
    similars: [
      {
        kanji: '扱',
        meaning: 'handle'
      },
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '処',
        meaning: 'dispose'
      },
      {
        kanji: '挑',
        meaning: 'challenge'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      },
      {
        kanji: '択',
        meaning: 'choose'
      },
      {
        kanji: '抄',
        meaning: 'extract'
      }
    ]
  },
  {
    kanjiName: '儀',
    strokes: 15,
    grade: 8,
    freq: 739,
    meanings: ['Ceremony', 'Rule', 'Affair', 'Case', 'A Matter'],
    on: ['ぎ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Fish', 'Occasion', 'Ceremony', 'Fault'],
    similars: [
      {
        kanji: '犠',
        meaning: 'sacrifice'
      },
      {
        kanji: '義',
        meaning: 'righteousness'
      },
      {
        kanji: '議',
        meaning: 'deliberation'
      },
      {
        kanji: '差',
        meaning: 'distinction'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '侍',
        meaning: 'waiter'
      },
      {
        kanji: '械',
        meaning: 'contraption'
      },
      {
        kanji: '餓',
        meaning: 'starve'
      }
    ]
  },
  {
    kanjiName: '樹',
    strokes: 16,
    grade: 6,
    freq: 988,
    meanings: ['Timber', 'Trees', 'Wood', 'Establish', 'Set Up'],
    on: ['じゅ'],
    kun: ['き'],
    jlpt: 1,
    quizAnswers: ['Souvenir', 'Ride At Anchor', 'Take Pleasure In', 'Timber'],
    similars: [
      {
        kanji: '枯',
        meaning: 'wither'
      },
      {
        kanji: '検',
        meaning: 'examination'
      },
      {
        kanji: '鼓',
        meaning: 'drum'
      },
      {
        kanji: '停',
        meaning: 'halt'
      },
      {
        kanji: '極',
        meaning: 'poles'
      },
      {
        kanji: '膨',
        meaning: 'swell'
      },
      {
        kanji: '短',
        meaning: 'short'
      },
      {
        kanji: '闘',
        meaning: 'fight'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '針',
        meaning: 'needle'
      }
    ]
  },
  {
    kanjiName: '棄',
    strokes: 13,
    grade: 8,
    freq: 901,
    meanings: ['Abandon', 'Throw Away', 'Discard', 'Resign', 'Reject', 'Sacrifice'],
    on: ['き'],
    kun: ['す.てる'],
    jlpt: 1,
    quizAnswers: ['Abandon', 'Rate', 'Appreciate', 'Seize'],
    similars: [
      {
        kanji: '葉',
        meaning: 'leaf'
      },
      {
        kanji: '致',
        meaning: 'doth'
      },
      {
        kanji: '乗',
        meaning: 'ride'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '度',
        meaning: 'degrees'
      },
      {
        kanji: '席',
        meaning: 'seat'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      },
      {
        kanji: '嬢',
        meaning: 'lass'
      },
      {
        kanji: '壌',
        meaning: 'lot'
      },
      {
        kanji: '敵',
        meaning: 'enemy'
      }
    ]
  },
  {
    kanjiName: '虎',
    strokes: 8,
    grade: 8,
    freq: 1653,
    meanings: ['Tiger', 'Drunkard'],
    on: ['こ'],
    kun: ['とら'],
    jlpt: 1,
    quizAnswers: ['Nook', 'Draft', 'Impregnable Position', 'Tiger']
  },
  {
    kanjiName: '蛍',
    strokes: 11,
    grade: 8,
    freq: 2031,
    meanings: ['Lightning-bug', 'Firefly'],
    on: ['けい'],
    kun: ['ほたる'],
    jlpt: 1,
    quizAnswers: ['Lightning-bug', 'Craft', 'Counter For Cannons', 'Roof'],
    similars: [
      {
        kanji: '営',
        meaning: 'camp'
      },
      {
        kanji: '堂',
        meaning: 'public chamber'
      },
      {
        kanji: '独',
        meaning: 'single'
      },
      {
        kanji: '党',
        meaning: 'party'
      },
      {
        kanji: '常',
        meaning: 'usual'
      },
      {
        kanji: '蚕',
        meaning: 'silkworm'
      },
      {
        kanji: '風',
        meaning: 'wind'
      },
      {
        kanji: '蛮',
        meaning: 'barbarian'
      },
      {
        kanji: '減',
        meaning: 'dwindle'
      },
      {
        kanji: '掌',
        meaning: 'manipulate'
      }
    ]
  },
  {
    kanjiName: '艦',
    strokes: 21,
    grade: 8,
    freq: 1363,
    meanings: ['Warship'],
    on: ['かん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Extraordinary', 'Warship', 'Degrees', 'Attain'],
    similars: [
      {
        kanji: '鑑',
        meaning: 'specimen'
      },
      {
        kanji: '濫',
        meaning: 'excessive'
      },
      {
        kanji: '監',
        meaning: 'oversee'
      },
      {
        kanji: '盤',
        meaning: 'tray'
      },
      {
        kanji: '堅',
        meaning: 'strict'
      },
      {
        kanji: '艇',
        meaning: 'rowboat'
      },
      {
        kanji: '姫',
        meaning: 'princess'
      },
      {
        kanji: '壁',
        meaning: 'wall'
      },
      {
        kanji: '塩',
        meaning: 'salt'
      },
      {
        kanji: '航',
        meaning: 'navigate'
      }
    ]
  },
  {
    kanjiName: '潜',
    strokes: 15,
    grade: 8,
    freq: 1329,
    meanings: ['Submerge', 'Conceal', 'Hide', 'Lower (voice)', 'Hush'],
    on: ['せん'],
    kun: ['ひそ.む', 'もぐ.る', 'かく.れる', 'くぐ.る', 'ひそ.める'],
    jlpt: 1,
    quizAnswers: ['Herd', 'Attach', 'Submerge', 'Hair'],
    similars: [
      {
        kanji: '替',
        meaning: 'exchange'
      },
      {
        kanji: '暦',
        meaning: 'calendar'
      },
      {
        kanji: '春',
        meaning: 'springtime'
      },
      {
        kanji: '賛',
        meaning: 'approve'
      },
      {
        kanji: '藩',
        meaning: 'clan'
      },
      {
        kanji: '諸',
        meaning: 'various'
      },
      {
        kanji: '清',
        meaning: 'pure'
      },
      {
        kanji: '番',
        meaning: 'turn'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '滝',
        meaning: 'waterfall'
      }
    ]
  },
  {
    kanjiName: '拳',
    strokes: 10,
    grade: 8,
    freq: 1935,
    meanings: ['Fist'],
    on: ['けん', 'げん'],
    kun: ['こぶし'],
    jlpt: 1,
    quizAnswers: ['Center', 'Nest Of Boxes', 'Forest', 'Fist']
  },
  {
    kanjiName: '仁',
    strokes: 4,
    grade: 6,
    freq: 1332,
    meanings: ['Humanity', 'Virtue', 'Benevolence', 'Charity', 'Man', 'Kernel'],
    on: ['じん', 'に', 'にん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Name', 'Become Experienced', 'Humanity', 'Rebuke'],
    similars: [
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '伝',
        meaning: 'transmit'
      },
      {
        kanji: '在',
        meaning: 'exist'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '行',
        meaning: 'going'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '代',
        meaning: 'substitute'
      },
      {
        kanji: '付',
        meaning: 'adhere'
      },
      {
        kanji: '低',
        meaning: 'lower'
      }
    ]
  },
  {
    kanjiName: '至',
    strokes: 6,
    grade: 6,
    freq: 996,
    meanings: ['Climax', 'Arrive', 'Proceed', 'Reach', 'Attain', 'Result In'],
    on: ['し'],
    kun: ['いた.る'],
    jlpt: 1,
    quizAnswers: ['Climax', 'Disperse', 'Half', 'Portion'],
    similars: [
      {
        kanji: '在',
        meaning: 'exist'
      },
      {
        kanji: '左',
        meaning: 'left'
      },
      {
        kanji: '屋',
        meaning: 'roof'
      },
      {
        kanji: '圧',
        meaning: 'pressure'
      },
      {
        kanji: '室',
        meaning: 'room'
      },
      {
        kanji: '到',
        meaning: 'arrival'
      },
      {
        kanji: '致',
        meaning: 'doth'
      },
      {
        kanji: '住',
        meaning: 'dwell'
      },
      {
        kanji: '社',
        meaning: 'company'
      },
      {
        kanji: '柱',
        meaning: 'pillar'
      }
    ]
  },
  {
    kanjiName: '誠',
    strokes: 13,
    grade: 6,
    freq: 1128,
    meanings: ['Sincerity', 'Admonish', 'Warn', 'Prohibit', 'Truth', 'Fidelity'],
    on: ['せい'],
    kun: ['まこと'],
    jlpt: 1,
    quizAnswers: ['Clear Out', 'End', 'Sincerity', 'Work'],
    similars: [
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '該',
        meaning: 'above-stated'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '試',
        meaning: 'test'
      },
      {
        kanji: '詠',
        meaning: 'recitation'
      },
      {
        kanji: '訟',
        meaning: 'sue'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      }
    ]
  },
  {
    kanjiName: '郷',
    strokes: 11,
    grade: 6,
    freq: 1077,
    meanings: ['Home Town', 'Village', 'Native Place', 'District'],
    on: ['きょう', 'ごう'],
    kun: ['さと'],
    jlpt: 1,
    quizAnswers: ['Middle', 'Cutting', 'Home Town', 'Occur'],
    similars: [
      {
        kanji: '郎',
        meaning: 'son'
      },
      {
        kanji: '廊',
        meaning: 'corridor'
      },
      {
        kanji: '響',
        meaning: 'echo'
      },
      {
        kanji: '即',
        meaning: 'instant'
      },
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '慨',
        meaning: 'rue'
      },
      {
        kanji: '節',
        meaning: 'node'
      },
      {
        kanji: '飾',
        meaning: 'decorate'
      },
      {
        kanji: '館',
        meaning: 'building'
      },
      {
        kanji: '食',
        meaning: 'eat'
      }
    ]
  },
  {
    kanjiName: '侵',
    strokes: 9,
    grade: 8,
    freq: 1025,
    meanings: ['Encroach', 'Invade', 'Raid', 'Trespass', 'Violate'],
    on: ['しん'],
    kun: ['おか.す'],
    jlpt: 1,
    quizAnswers: ['Encroach', 'Lend', 'Offense', 'Down'],
    similars: [
      {
        kanji: '浸',
        meaning: 'immersed'
      },
      {
        kanji: '寝',
        meaning: 'lie down'
      },
      {
        kanji: '受',
        meaning: 'accept'
      },
      {
        kanji: '急',
        meaning: 'hurry'
      },
      {
        kanji: '帰',
        meaning: 'homecoming'
      },
      {
        kanji: '掃',
        meaning: 'sweep'
      },
      {
        kanji: '段',
        meaning: 'grade'
      },
      {
        kanji: '後',
        meaning: 'behind'
      },
      {
        kanji: '仮',
        meaning: 'sham'
      },
      {
        kanji: '俊',
        meaning: 'sagacious'
      }
    ]
  },
  {
    kanjiName: '偽',
    strokes: 11,
    grade: 8,
    freq: 1171,
    meanings: ['Falsehood', 'Lie', 'Deceive', 'Pretend', 'Counterfeit', 'Forgery'],
    on: ['ぎ', 'か'],
    kun: ['いつわ.る', 'にせ', 'いつわ.り'],
    jlpt: 1,
    quizAnswers: ['Desire', 'Moon', 'Falsehood', 'Blame'],
    similars: [
      {
        kanji: '為',
        meaning: 'do'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      },
      {
        kanji: '焦',
        meaning: 'char'
      },
      {
        kanji: '窯',
        meaning: 'kiln'
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed'
      },
      {
        kanji: '潟',
        meaning: 'lagoon'
      },
      {
        kanji: '照',
        meaning: 'illuminate'
      },
      {
        kanji: '点',
        meaning: 'spot'
      },
      {
        kanji: '雨',
        meaning: 'rain'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      }
    ]
  },
  {
    kanjiName: '克',
    strokes: 7,
    grade: 8,
    freq: 1333,
    meanings: ['Overcome', 'Kindly', 'Skillfully'],
    on: ['こく'],
    kun: ['か.つ'],
    jlpt: 1,
    quizAnswers: ['Flat', 'Overcome', 'Sign (of The Times)', 'Hurt'],
    similars: [
      {
        kanji: '乱',
        meaning: 'riot'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '古',
        meaning: 'old'
      },
      {
        kanji: '兄',
        meaning: 'elder brother'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '況',
        meaning: 'condition'
      },
      {
        kanji: '砲',
        meaning: 'cannon'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '可',
        meaning: 'can'
      },
      {
        kanji: '老',
        meaning: 'old man'
      }
    ]
  },
  {
    kanjiName: '哲',
    strokes: 10,
    grade: 8,
    freq: 1093,
    meanings: ['Philosophy', 'Clear'],
    on: ['てつ'],
    kun: ['さとい', 'あきらか'],
    jlpt: 1,
    quizAnswers: ['Consider', 'Philosophy', 'Drink Up', 'Capacity'],
    similars: [
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '据',
        meaning: 'set'
      },
      {
        kanji: '誓',
        meaning: 'vow'
      },
      {
        kanji: '招',
        meaning: 'beckon'
      },
      {
        kanji: '逝',
        meaning: 'departed'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      }
    ]
  },
  {
    kanjiName: '喪',
    strokes: 12,
    grade: 8,
    freq: 885,
    meanings: ['Miss', 'Mourning'],
    on: ['そう'],
    kun: ['も'],
    jlpt: 1,
    quizAnswers: ['Rave', 'Book', 'Miss', 'Literary Radical (no. 67)'],
    similars: [
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '操',
        meaning: 'maneuver'
      },
      {
        kanji: '長',
        meaning: 'long'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '帳',
        meaning: 'notebook'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '革',
        meaning: 'leather'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '保',
        meaning: 'protect'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      }
    ]
  },
  {
    kanjiName: '堅',
    strokes: 12,
    grade: 8,
    freq: 1049,
    meanings: ['Strict', 'Hard', 'Solid', 'Tough', 'Tight', 'Reliable'],
    on: ['けん'],
    kun: ['かた.い', '-がた.い'],
    jlpt: 1,
    quizAnswers: ['Strict', 'Pagoda', 'Exemplar', 'Cherish'],
    similars: [
      {
        kanji: '監',
        meaning: 'oversee'
      },
      {
        kanji: '緊',
        meaning: 'tense'
      },
      {
        kanji: '茎',
        meaning: 'stalk'
      },
      {
        kanji: '臣',
        meaning: 'retainer'
      },
      {
        kanji: '賢',
        meaning: 'intelligent'
      },
      {
        kanji: '濫',
        meaning: 'excessive'
      },
      {
        kanji: '吐',
        meaning: 'spit'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '艦',
        meaning: 'warship'
      },
      {
        kanji: '覧',
        meaning: 'perusal'
      }
    ]
  },
  {
    kanjiName: '括',
    strokes: 9,
    grade: 8,
    freq: 1026,
    meanings: ['Fasten', 'Tie Up', 'Arrest', 'Constrict'],
    on: ['かつ'],
    kun: ['くく.る'],
    jlpt: 1,
    quizAnswers: ['Fasten', 'Home', 'Cleverness', 'Gap'],
    similars: [
      {
        kanji: '据',
        meaning: 'set'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '活',
        meaning: 'lively'
      },
      {
        kanji: '苦',
        meaning: 'suffering'
      },
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '居',
        meaning: 'reside'
      }
    ]
  },
  {
    kanjiName: '弧',
    strokes: 9,
    grade: 8,
    freq: 2371,
    meanings: ['Arc', 'Arch', 'Bow'],
    on: ['こ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Sad', 'Arc', 'Light', 'Explanation'],
    similars: [
      {
        kanji: '孤',
        meaning: 'orphan'
      },
      {
        kanji: '旋',
        meaning: 'rotation'
      },
      {
        kanji: '強',
        meaning: 'strong'
      },
      {
        kanji: '弦',
        meaning: 'bowstring'
      },
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '夜',
        meaning: 'night'
      },
      {
        kanji: '改',
        meaning: 'reformation'
      },
      {
        kanji: '弱',
        meaning: 'weak'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      }
    ]
  },
  {
    kanjiName: '挑',
    strokes: 9,
    grade: 8,
    freq: 989,
    meanings: ['Challenge', 'Contend For', 'Make Love To'],
    on: ['ちょう'],
    kun: ['いど.む'],
    jlpt: 1,
    quizAnswers: ['Study', 'Challenge', 'Exceed', 'Young'],
    similars: [
      {
        kanji: '桃',
        meaning: 'peach'
      },
      {
        kanji: '兆',
        meaning: 'portent'
      },
      {
        kanji: '拠',
        meaning: 'foothold'
      },
      {
        kanji: '抄',
        meaning: 'extract'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '求',
        meaning: 'request'
      },
      {
        kanji: '授',
        meaning: 'impart'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      }
    ]
  },
  {
    kanjiName: '揚',
    strokes: 12,
    grade: 8,
    freq: 1316,
    meanings: ['Raise', 'Elevate', 'Hoist', 'Praise', 'Extol', 'Fry In Deep Fat'],
    on: ['よう'],
    kun: ['あ.げる', '-あ.げ', 'あ.がる'],
    jlpt: 1,
    quizAnswers: ['Between', 'Inside', 'Raise', 'Precedent'],
    similars: [
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)'
      },
      {
        kanji: '提',
        meaning: 'propose'
      },
      {
        kanji: '陽',
        meaning: 'sunshine'
      },
      {
        kanji: '腸',
        meaning: 'intestines'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '募',
        meaning: 'recruit'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      }
    ]
  },
  {
    kanjiName: '握',
    strokes: 12,
    grade: 8,
    freq: 1003,
    meanings: ['Grip', 'Hold', 'Mould Sushi', 'Bribe'],
    on: ['あく'],
    kun: ['にぎ.る'],
    jlpt: 1,
    quizAnswers: ['Evade', 'Aloes', 'Grip', 'Consume'],
    similars: [
      {
        kanji: '屋',
        meaning: 'roof'
      },
      {
        kanji: '据',
        meaning: 'set'
      },
      {
        kanji: '控',
        meaning: 'withdraw'
      },
      {
        kanji: '窒',
        meaning: 'plug up'
      },
      {
        kanji: '室',
        meaning: 'room'
      },
      {
        kanji: '掘',
        meaning: 'dig'
      },
      {
        kanji: '抵',
        meaning: 'resist'
      },
      {
        kanji: '択',
        meaning: 'choose'
      },
      {
        kanji: '至',
        meaning: 'climax'
      },
      {
        kanji: '逝',
        meaning: 'departed'
      }
    ]
  },
  {
    kanjiName: '揺',
    strokes: 12,
    grade: 8,
    freq: 1079,
    meanings: ['Swing', 'Shake', 'Sway', 'Rock', 'Tremble', 'Vibrate'],
    on: ['よう'],
    kun: ['ゆ.れる', 'ゆ.る', 'ゆ.らぐ', 'ゆ.るぐ', 'ゆ.する', 'ゆ.さぶる', 'ゆ.すぶる', 'うご.く'],
    jlpt: 1,
    quizAnswers: ['Swing', 'Encircle', 'Noon', 'Frustrate'],
    similars: [
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '謡',
        meaning: 'song'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '授',
        meaning: 'impart'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '陶',
        meaning: 'pottery'
      },
      {
        kanji: '控',
        meaning: 'withdraw'
      },
      {
        kanji: '撲',
        meaning: 'slap'
      },
      {
        kanji: '摘',
        meaning: 'pinch'
      }
    ]
  },
  {
    kanjiName: '斎',
    strokes: 11,
    grade: 8,
    freq: 1155,
    meanings: ['Purification', 'Buddhist Food', 'Room', 'Worship', 'Avoid', 'Alike'],
    on: ['さい'],
    kun: ['とき', 'つつし.む', 'ものいみ', 'い.む', 'いわ.う', 'いつ.く'],
    jlpt: 1,
    quizAnswers: ['Fief', 'Normal', 'Nation', 'Purification'],
    similars: [
      {
        kanji: '余',
        meaning: 'too much'
      },
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '対',
        meaning: 'vis-a-vis'
      },
      {
        kanji: '除',
        meaning: 'exclude'
      },
      {
        kanji: '発',
        meaning: 'departure'
      },
      {
        kanji: '奔',
        meaning: 'run'
      },
      {
        kanji: '卒',
        meaning: 'graduate'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '徐',
        meaning: 'gradually'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      }
    ]
  },
  {
    kanjiName: '暫',
    strokes: 15,
    grade: 8,
    freq: 1112,
    meanings: ['Temporarily', 'A While', 'Moment', 'Long Time'],
    on: ['ざん'],
    kun: ['しばら.く'],
    jlpt: 1,
    quizAnswers: ['Temporarily', 'Catch', 'Forward', 'Worry'],
    similars: [
      {
        kanji: '軸',
        meaning: 'axis'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      },
      {
        kanji: '暑',
        meaning: 'sultry'
      },
      {
        kanji: '輪',
        meaning: 'wheel'
      },
      {
        kanji: '輸',
        meaning: 'transport'
      },
      {
        kanji: '暮',
        meaning: 'evening'
      },
      {
        kanji: '晶',
        meaning: 'sparkle'
      },
      {
        kanji: '幹',
        meaning: 'tree trunk'
      },
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '間',
        meaning: 'interval'
      }
    ]
  },
  {
    kanjiName: '析',
    strokes: 8,
    grade: 8,
    freq: 980,
    meanings: ['Chop', 'Divide', 'Tear', 'Analyze'],
    on: ['せき'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Carry', 'Chop', 'Get Used To', 'Feeling'],
    similars: [
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '柳',
        meaning: 'willow'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '断',
        meaning: 'severance'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '枢',
        meaning: 'hinge'
      },
      {
        kanji: '所',
        meaning: 'place'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '卒',
        meaning: 'graduate'
      }
    ]
  },
  {
    kanjiName: '枢',
    strokes: 8,
    grade: 8,
    freq: 1791,
    meanings: ['Hinge', 'Pivot', 'Door'],
    on: ['すう', 'しゅ'],
    kun: ['とぼそ', 'からくり'],
    jlpt: 1,
    quizAnswers: ['Be Offended', 'Hinge', 'Literary Work', 'Learn'],
    similars: [
      {
        kanji: '医',
        meaning: 'doctor'
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls'
      },
      {
        kanji: '板',
        meaning: 'plank'
      },
      {
        kanji: '柄',
        meaning: 'design'
      },
      {
        kanji: '枝',
        meaning: 'bough'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '朽',
        meaning: 'decay'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '村',
        meaning: 'village'
      }
    ]
  },
  {
    kanjiName: '軸',
    strokes: 12,
    grade: 8,
    freq: 1261,
    meanings: ['Axis', 'Pivot', 'Stem', 'Stalk', 'Counter For Book Scrolls'],
    on: ['じく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Copy', 'Mansion', 'Axis', 'Assist'],
    similars: [
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '暫',
        meaning: 'temporarily'
      },
      {
        kanji: '冒',
        meaning: 'risk'
      },
      {
        kanji: '暮',
        meaning: 'evening'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '門',
        meaning: 'gate'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      },
      {
        kanji: '曹',
        meaning: 'office'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      }
    ]
  },
  {
    kanjiName: '柄',
    strokes: 9,
    grade: 8,
    freq: 1140,
    meanings: [
      'Design',
      'Pattern',
      'Build',
      'Nature',
      'Character',
      'Handle',
      'Crank',
      'Grip',
      'Knob',
      'Shaft'
    ],
    on: ['へい'],
    kun: ['がら', 'え', 'つか'],
    jlpt: 1,
    quizAnswers: ['Middle', 'Design', 'Sheet', 'Printing'],
    similars: [
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '核',
        meaning: 'nucleus'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      },
      {
        kanji: '枢',
        meaning: 'hinge'
      },
      {
        kanji: '械',
        meaning: 'contraption'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '桟',
        meaning: 'scaffold'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '病',
        meaning: 'ill'
      },
      {
        kanji: '極',
        meaning: 'poles'
      }
    ]
  },
  {
    kanjiName: '滑',
    strokes: 13,
    grade: 8,
    freq: 1238,
    meanings: ['Slippery', 'Slide', 'Slip', 'Flunk'],
    on: ['かつ', 'こつ'],
    kun: ['すべ.る', 'なめ.らか'],
    jlpt: 1,
    quizAnswers: ['Mental Or Emotional State', 'Instruction', 'Slippery', 'Agriculture'],
    similars: [
      {
        kanji: '骨',
        meaning: 'skeleton'
      },
      {
        kanji: '消',
        meaning: 'extinguish'
      },
      {
        kanji: '清',
        meaning: 'pure'
      },
      {
        kanji: '宵',
        meaning: 'wee hours'
      },
      {
        kanji: '湖',
        meaning: 'lake'
      },
      {
        kanji: '渦',
        meaning: 'whirlpool'
      },
      {
        kanji: '情',
        meaning: 'feelings'
      },
      {
        kanji: '潮',
        meaning: 'tide'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '渋',
        meaning: 'astringent'
      }
    ]
  },
  {
    kanjiName: '潟',
    strokes: 15,
    grade: 8,
    freq: 1204,
    meanings: ['Lagoon'],
    on: ['せき'],
    kun: ['かた', '-がた'],
    jlpt: 1,
    quizAnswers: ['Arrival', 'Lagoon', 'Down', 'Drought'],
    similars: [
      {
        kanji: '漁',
        meaning: 'fishing'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '漏',
        meaning: 'leak'
      },
      {
        kanji: '測',
        meaning: 'fathom'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      },
      {
        kanji: '偽',
        meaning: 'falsehood'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '為',
        meaning: 'do'
      },
      {
        kanji: '鳴',
        meaning: 'chirp'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      }
    ]
  },
  {
    kanjiName: '焦',
    strokes: 12,
    grade: 8,
    freq: 973,
    meanings: ['Char', 'Hurry', 'Impatient', 'Irritate', 'Burn', 'Scorch', 'Singe'],
    on: ['しょう'],
    kun: ['こ.げる', 'こ.がす', 'こ.がれる', 'あせ.る'],
    jlpt: 1,
    quizAnswers: ['Eighth Sign Of Chinese Zodiac', 'Pretend', 'Big Brother', 'Char'],
    similars: [
      {
        kanji: '進',
        meaning: 'advance'
      },
      {
        kanji: '馬',
        meaning: 'horse'
      },
      {
        kanji: '礁',
        meaning: 'reef'
      },
      {
        kanji: '隻',
        meaning: 'vessels'
      },
      {
        kanji: '集',
        meaning: 'gather'
      },
      {
        kanji: '篤',
        meaning: 'fervent'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      },
      {
        kanji: '奪',
        meaning: 'rob'
      },
      {
        kanji: '歓',
        meaning: 'delight'
      },
      {
        kanji: '准',
        meaning: 'quasi-'
      }
    ]
  },
  {
    kanjiName: '範',
    strokes: 15,
    grade: 8,
    freq: 1088,
    meanings: ['Pattern', 'Example', 'Model'],
    on: ['はん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Mediate', 'Pattern', 'Low', 'Clothing'],
    similars: [
      {
        kanji: '算',
        meaning: 'calculate'
      },
      {
        kanji: '笛',
        meaning: 'flute'
      },
      {
        kanji: '節',
        meaning: 'node'
      },
      {
        kanji: '筒',
        meaning: 'cylinder'
      },
      {
        kanji: '筋',
        meaning: 'muscle'
      },
      {
        kanji: '策',
        meaning: 'scheme'
      },
      {
        kanji: '築',
        meaning: 'fabricate'
      },
      {
        kanji: '簡',
        meaning: 'simplicity'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      }
    ]
  },
  {
    kanjiName: '紛',
    strokes: 10,
    grade: 8,
    freq: 994,
    meanings: ['Distract', 'Be Mistaken For', 'Go Astray', 'Divert'],
    on: ['ふん'],
    kun: ['まぎ.れる', '-まぎ.れ', 'まぎ.らす', 'まぎ.らわす', 'まぎ.らわしい'],
    jlpt: 1,
    quizAnswers: ['Short', 'Condition', 'Distract', 'Sea'],
    similars: [
      {
        kanji: '約',
        meaning: 'promise'
      },
      {
        kanji: '終',
        meaning: 'end'
      },
      {
        kanji: '紙',
        meaning: 'paper'
      },
      {
        kanji: '純',
        meaning: 'genuine'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '級',
        meaning: 'class'
      },
      {
        kanji: '絡',
        meaning: 'entwine'
      },
      {
        kanji: '絵',
        meaning: 'picture'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '紹',
        meaning: 'introduce'
      }
    ]
  },
  {
    kanjiName: '糾',
    strokes: 9,
    grade: 8,
    freq: 1820,
    meanings: ['Twist', 'Ask', 'Investigate', 'Verify'],
    on: ['きゅう'],
    kun: ['ただ.す'],
    jlpt: 1,
    quizAnswers: ['Skip (pages)', 'Twist', 'Collapse', 'Polish'],
    similars: [
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '紀',
        meaning: 'chronicle'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '結',
        meaning: 'tie'
      },
      {
        kanji: '紙',
        meaning: 'paper'
      },
      {
        kanji: '純',
        meaning: 'genuine'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '約',
        meaning: 'promise'
      },
      {
        kanji: '級',
        meaning: 'class'
      }
    ]
  },
  {
    kanjiName: '綱',
    strokes: 14,
    grade: 8,
    freq: 1053,
    meanings: ['Hawser', 'Class (genus)', 'Rope', 'Cord', 'Cable'],
    on: ['こう'],
    kun: ['つな'],
    jlpt: 1,
    quizAnswers: ['Hawser', 'Village', 'Control', 'Report'],
    similars: [
      {
        kanji: '網',
        meaning: 'netting'
      },
      {
        kanji: '納',
        meaning: 'settlement'
      },
      {
        kanji: '縦',
        meaning: 'vertical'
      },
      {
        kanji: '締',
        meaning: 'tighten'
      },
      {
        kanji: '緩',
        meaning: 'slacken'
      },
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '継',
        meaning: 'inherit'
      }
    ]
  },
  {
    kanjiName: '網',
    strokes: 14,
    grade: 8,
    freq: 1194,
    meanings: ['Netting', 'Network'],
    on: ['もう'],
    kun: ['あみ'],
    jlpt: 1,
    quizAnswers: ['Netting', 'Government Office', 'Liking', 'Point'],
    similars: [
      {
        kanji: '綱',
        meaning: 'hawser'
      },
      {
        kanji: '納',
        meaning: 'settlement'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '経',
        meaning: 'sutra'
      },
      {
        kanji: '縦',
        meaning: 'vertical'
      },
      {
        kanji: '緩',
        meaning: 'slacken'
      },
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '継',
        meaning: 'inherit'
      },
      {
        kanji: '紙',
        meaning: 'paper'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      }
    ]
  },
  {
    kanjiName: '肝',
    strokes: 7,
    grade: 8,
    freq: 1118,
    meanings: ['Liver', 'Pluck', 'Nerve', 'Chutzpah'],
    on: ['かん'],
    kun: ['きも'],
    jlpt: 1,
    quizAnswers: ['Liver', 'Ingredients', 'Eight Radical (no. 12)', 'Manage'],
    similars: [
      {
        kanji: '用',
        meaning: 'utilize'
      },
      {
        kanji: '肺',
        meaning: 'lungs'
      },
      {
        kanji: '脚',
        meaning: 'skids'
      },
      {
        kanji: '肢',
        meaning: 'limb'
      },
      {
        kanji: '肪',
        meaning: 'obese'
      },
      {
        kanji: '胴',
        meaning: 'trunk'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '月',
        meaning: 'month'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '早',
        meaning: 'early'
      }
    ]
  },
  {
    kanjiName: '芝',
    strokes: 6,
    grade: 8,
    freq: 1052,
    meanings: ['Turf', 'Lawn'],
    on: ['し'],
    kun: ['しば'],
    jlpt: 1,
    quizAnswers: ['View', 'Error', 'Turf', 'Touch'],
    similars: [
      {
        kanji: '芳',
        meaning: 'perfume'
      },
      {
        kanji: '苗',
        meaning: 'seedling'
      },
      {
        kanji: '正',
        meaning: 'correct'
      },
      {
        kanji: '芽',
        meaning: 'bud'
      },
      {
        kanji: '芋',
        meaning: 'potato'
      },
      {
        kanji: '支',
        meaning: 'branch'
      },
      {
        kanji: '苦',
        meaning: 'suffering'
      },
      {
        kanji: '英',
        meaning: 'England'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '乏',
        meaning: 'destitution'
      }
    ]
  },
  {
    kanjiName: '裂',
    strokes: 12,
    grade: 8,
    freq: 1041,
    meanings: ['Split', 'Rend', 'Tear'],
    on: ['れつ'],
    kun: ['さ.く', 'さ.ける', '-ぎ.れ'],
    jlpt: 1,
    quizAnswers: ['Split', 'Thought', 'Means', 'Next'],
    similars: [
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '製',
        meaning: 'made in...'
      },
      {
        kanji: '袋',
        meaning: 'sack'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '敏',
        meaning: 'cleverness'
      },
      {
        kanji: '致',
        meaning: 'doth'
      },
      {
        kanji: '残',
        meaning: 'remainder'
      },
      {
        kanji: '灰',
        meaning: 'ashes'
      },
      {
        kanji: '陵',
        meaning: 'mausoleum'
      }
    ]
  },
  {
    kanjiName: '襲',
    strokes: 22,
    grade: 8,
    freq: 1130,
    meanings: ['Attack', 'Advance On', 'Succeed To', 'Pile', 'Heap'],
    on: ['しゅう'],
    kun: ['おそ.う', 'かさ.ね'],
    jlpt: 1,
    quizAnswers: ['Living', 'Special', 'Confirm', 'Attack'],
    similars: [
      {
        kanji: '脹',
        meaning: 'dilate'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '敵',
        meaning: 'enemy'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      },
      {
        kanji: '譲',
        meaning: 'defer'
      },
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '韻',
        meaning: 'rhyme'
      },
      {
        kanji: '散',
        meaning: 'scatter'
      },
      {
        kanji: '歓',
        meaning: 'delight'
      },
      {
        kanji: '望',
        meaning: 'ambition'
      }
    ]
  },
  {
    kanjiName: '貢',
    strokes: 10,
    grade: 8,
    freq: 956,
    meanings: ['Tribute', 'Support', 'Finance'],
    on: ['こう', 'く'],
    kun: ['みつ.ぐ'],
    jlpt: 1,
    quizAnswers: ['Spirit', 'Class (first)', 'Tribute', 'Range'],
    similars: [
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '貫',
        meaning: 'pierce'
      },
      {
        kanji: '現',
        meaning: 'present'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '貴',
        meaning: 'precious'
      }
    ]
  },
  {
    kanjiName: '趣',
    strokes: 15,
    grade: 8,
    freq: 1153,
    meanings: ['Purport', 'Gist', 'Elegance', 'Interest', 'Proceed To', 'Tend', 'Become'],
    on: ['しゅ'],
    kun: ['おもむき', 'おもむ.く'],
    jlpt: 1,
    quizAnswers: ['Big', 'Purport', 'Exist', 'Military'],
    similars: [
      {
        kanji: '赴',
        meaning: 'proceed'
      },
      {
        kanji: '超',
        meaning: 'transcend'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      },
      {
        kanji: '撮',
        meaning: 'snapshot'
      },
      {
        kanji: '取',
        meaning: 'take'
      },
      {
        kanji: '越',
        meaning: 'surpass'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      },
      {
        kanji: '走',
        meaning: 'run'
      },
      {
        kanji: '旗',
        meaning: 'national flag'
      },
      {
        kanji: '最',
        meaning: 'utmost'
      }
    ]
  },
  {
    kanjiName: '距',
    strokes: 12,
    grade: 8,
    freq: 1191,
    meanings: ['Long-distance', 'Spur', 'Fetlock'],
    on: ['きょ'],
    kun: ['へだ.たる', 'けづめ'],
    jlpt: 1,
    quizAnswers: ['Circuit', 'Resources', 'Long-distance', 'Result In'],
    similars: [
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '臨',
        meaning: 'look to'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '跡',
        meaning: 'tracks'
      },
      {
        kanji: '跳',
        meaning: 'hop'
      },
      {
        kanji: '践',
        meaning: 'tread'
      },
      {
        kanji: '器',
        meaning: 'utensil'
      },
      {
        kanji: '躍',
        meaning: 'leap'
      },
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '足',
        meaning: 'leg'
      }
    ]
  },
  {
    kanjiName: '露',
    strokes: 21,
    grade: 8,
    freq: 928,
    meanings: ['Dew', 'Tears', 'Expose', 'Russia'],
    on: ['ろ', 'ろう'],
    kun: ['つゆ'],
    jlpt: 1,
    quizAnswers: ['Spain', 'Dew', 'Receive', 'Notes'],
    similars: [
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '霧',
        meaning: 'fog'
      },
      {
        kanji: '雰',
        meaning: 'atmosphere'
      },
      {
        kanji: '零',
        meaning: 'zero'
      },
      {
        kanji: '雷',
        meaning: 'thunder'
      },
      {
        kanji: '諮',
        meaning: 'consult with'
      },
      {
        kanji: '震',
        meaning: 'quake'
      },
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '霊',
        meaning: 'spirits'
      },
      {
        kanji: '電',
        meaning: 'electricity'
      }
    ]
  },
  {
    kanjiName: '牧',
    strokes: 8,
    grade: 4,
    freq: 1360,
    meanings: ['Breed', 'Care For', 'Shepherd', 'Feed', 'Pasture'],
    on: ['ぼく'],
    kun: ['まき'],
    jlpt: 1,
    quizAnswers: ['Strength', 'Young', 'Grandchild', 'Breed'],
    similars: [
      {
        kanji: '物',
        meaning: 'thing'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '改',
        meaning: 'reformation'
      },
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '扶',
        meaning: 'aid'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '秀',
        meaning: 'excel'
      }
    ]
  },
  {
    kanjiName: '朗',
    strokes: 10,
    grade: 6,
    freq: 1374,
    meanings: ['Melodious', 'Clear', 'Bright', 'Serene', 'Cheerful'],
    on: ['ろう'],
    kun: ['ほが.らか', 'あき.らか'],
    jlpt: 1,
    quizAnswers: ['Single', 'Book', 'Melodious', 'Infancy'],
    similars: [
      {
        kanji: '良',
        meaning: 'good'
      },
      {
        kanji: '明',
        meaning: 'bright'
      },
      {
        kanji: '郎',
        meaning: 'son'
      },
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '期',
        meaning: 'period'
      },
      {
        kanji: '賄',
        meaning: 'bribe'
      },
      {
        kanji: '肯',
        meaning: 'agreement'
      },
      {
        kanji: '育',
        meaning: 'bring up'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '飲',
        meaning: 'drink'
      }
    ]
  },
  {
    kanjiName: '潮',
    strokes: 15,
    grade: 6,
    freq: 1231,
    meanings: ['Tide', 'Salt Water', 'Opportunity'],
    on: ['ちょう'],
    kun: ['しお', 'うしお'],
    jlpt: 1,
    quizAnswers: ['Put On', 'Burn', 'Tide', 'Rise'],
    similars: [
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '漸',
        meaning: 'steadily'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '湖',
        meaning: 'lake'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '清',
        meaning: 'pure'
      },
      {
        kanji: '酒',
        meaning: 'sake'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      },
      {
        kanji: '乾',
        meaning: 'drought'
      }
    ]
  },
  {
    kanjiName: '即',
    strokes: 7,
    grade: 8,
    freq: 1167,
    meanings: ['Instant', 'Namely', 'As Is', 'Conform', 'Agree', 'Adapt'],
    on: ['そく'],
    kun: ['つ.く', 'つ.ける', 'すなわ.ち'],
    jlpt: 1,
    quizAnswers: ['Instant', 'Refrigerate', 'Warm', 'Battle'],
    similars: [
      {
        kanji: '郎',
        meaning: 'son'
      },
      {
        kanji: '退',
        meaning: 'retreat'
      },
      {
        kanji: '郷',
        meaning: 'home town'
      },
      {
        kanji: '節',
        meaning: 'node'
      },
      {
        kanji: '朗',
        meaning: 'melodious'
      },
      {
        kanji: '既',
        meaning: 'previously'
      },
      {
        kanji: '廊',
        meaning: 'corridor'
      },
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '脚',
        meaning: 'skids'
      },
      {
        kanji: '却',
        meaning: 'instead'
      }
    ]
  },
  {
    kanjiName: '垣',
    strokes: 9,
    grade: 8,
    freq: 1539,
    meanings: ['Hedge', 'Fence', 'Wall'],
    on: ['えん'],
    kun: ['かき'],
    jlpt: 1,
    quizAnswers: ['More And More', 'Lean', 'Spot', 'Hedge'],
    similars: [
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '埋',
        meaning: 'bury'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '恒',
        meaning: 'constancy'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '者',
        meaning: 'someone'
      },
      {
        kanji: '理',
        meaning: 'logic'
      },
      {
        kanji: '責',
        meaning: 'blame'
      }
    ]
  },
  {
    kanjiName: '威',
    strokes: 9,
    grade: 8,
    freq: 1103,
    meanings: ['Intimidate', 'Dignity', 'Majesty', 'Menace', 'Threaten'],
    on: ['い'],
    kun: ['おど.す', 'おど.し', 'おど.かす'],
    jlpt: 1,
    quizAnswers: ['Width', 'Undo', 'Intimidate', 'Flourish'],
    similars: [
      {
        kanji: '戒',
        meaning: 'commandment'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '伐',
        meaning: 'fell'
      },
      {
        kanji: '成',
        meaning: 'turn into'
      },
      {
        kanji: '茂',
        meaning: 'overgrown'
      },
      {
        kanji: '式',
        meaning: 'style'
      },
      {
        kanji: '弐',
        meaning: 'II'
      },
      {
        kanji: '我',
        meaning: 'ego'
      },
      {
        kanji: '械',
        meaning: 'contraption'
      }
    ]
  },
  {
    kanjiName: '岳',
    strokes: 8,
    grade: 8,
    freq: 1334,
    meanings: ['Point', 'Peak', 'Mountain'],
    on: ['がく'],
    kun: ['たけ'],
    jlpt: 1,
    quizAnswers: ['Wait For', 'Limb', 'Quiet', 'Point'],
    similars: [
      {
        kanji: '缶',
        meaning: 'tin can'
      },
      {
        kanji: '年',
        meaning: 'year'
      },
      {
        kanji: '卸',
        meaning: 'wholesale'
      },
      {
        kanji: '郵',
        meaning: 'mail'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '垂',
        meaning: 'droop'
      },
      {
        kanji: '満',
        meaning: 'full'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '舎',
        meaning: 'cottage'
      }
    ]
  },
  {
    kanjiName: '慰',
    strokes: 15,
    grade: 8,
    freq: 1158,
    meanings: [
      'Consolation',
      'Amusement',
      'Seduce',
      'Cheer',
      'Make Sport Of',
      'Comfort',
      'Console'
    ],
    on: ['い'],
    kun: ['なぐさ.める', 'なぐさ.む'],
    jlpt: 1,
    quizAnswers: ['Spirit', 'Consolation', 'Portion', 'Standard'],
    similars: [
      {
        kanji: '尉',
        meaning: 'military officer'
      },
      {
        kanji: '感',
        meaning: 'emotion'
      },
      {
        kanji: '憾',
        meaning: 'remorse'
      },
      {
        kanji: '慈',
        meaning: 'mercy'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '認',
        meaning: 'acknowledge'
      },
      {
        kanji: '誌',
        meaning: 'document'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '慮',
        meaning: 'prudence'
      },
      {
        kanji: '辱',
        meaning: 'embarrass'
      }
    ]
  },
  {
    kanjiName: '懇',
    strokes: 17,
    grade: 8,
    freq: 1135,
    meanings: ['Sociable', 'Kind', 'Courteous', 'Hospitable', 'Cordial'],
    on: ['こん'],
    kun: ['ねんご.ろ'],
    jlpt: 1,
    quizAnswers: ['Shouldering', 'Pay', 'Sociable', 'Extinguish'],
    similars: [
      {
        kanji: '墾',
        meaning: 'ground-breaking'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '鶏',
        meaning: 'chicken'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '爵',
        meaning: 'baron'
      },
      {
        kanji: '浪',
        meaning: 'wandering'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '恨',
        meaning: 'regret'
      },
      {
        kanji: '癒',
        meaning: 'healing'
      }
    ]
  },
  {
    kanjiName: '懲',
    strokes: 18,
    grade: 8,
    freq: 1303,
    meanings: ['Penal', 'Chastise', 'Punish', 'Discipline'],
    on: ['ちょう'],
    kun: ['こ.りる', 'こ.らす', 'こ.らしめる'],
    jlpt: 1,
    quizAnswers: ['Bank', 'Polish', 'Grade', 'Penal'],
    similars: [
      {
        kanji: '徴',
        meaning: 'indications'
      },
      {
        kanji: '微',
        meaning: 'delicate'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '徳',
        meaning: 'benevolence'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '徒',
        meaning: 'on foot'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '犠',
        meaning: 'sacrifice'
      },
      {
        kanji: '儀',
        meaning: 'ceremony'
      },
      {
        kanji: '待',
        meaning: 'wait'
      }
    ]
  },
  {
    kanjiName: '摩',
    strokes: 15,
    grade: 8,
    freq: 1252,
    meanings: ['Chafe', 'Rub', 'Polish', 'Grind', 'Scrape'],
    on: ['ま'],
    kun: ['ま.する', 'さす.る', 'す.る'],
    jlpt: 1,
    quizAnswers: ['Block', 'Emptiness', 'Chafe', 'Art'],
    similars: [
      {
        kanji: '磨',
        meaning: 'grind'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '歴',
        meaning: 'curriculum'
      },
      {
        kanji: '暦',
        meaning: 'calendar'
      },
      {
        kanji: '魔',
        meaning: 'witch'
      },
      {
        kanji: '褒',
        meaning: 'praise'
      },
      {
        kanji: '廃',
        meaning: 'abolish'
      },
      {
        kanji: '挙',
        meaning: 'raise'
      },
      {
        kanji: '掌',
        meaning: 'manipulate'
      },
      {
        kanji: '誇',
        meaning: 'boast'
      }
    ]
  },
  {
    kanjiName: '擦',
    strokes: 17,
    grade: 8,
    freq: 1485,
    meanings: ['Grate', 'Rub', 'Scratch', 'Scrape', 'Chafe', 'Scour'],
    on: ['さつ'],
    kun: ['す.る', 'す.れる', '-ず.れ', 'こす.る', 'こす.れる'],
    jlpt: 1,
    quizAnswers: ['Imperial', 'Blood', 'Grate', 'Gun Barrel'],
    similars: [
      {
        kanji: '察',
        meaning: 'guess'
      },
      {
        kanji: '際',
        meaning: 'occasion'
      },
      {
        kanji: '祭',
        meaning: 'ritual'
      },
      {
        kanji: '探',
        meaning: 'grope'
      },
      {
        kanji: '搾',
        meaning: 'squeeze'
      },
      {
        kanji: '宗',
        meaning: 'religion'
      },
      {
        kanji: '崇',
        meaning: 'adore'
      },
      {
        kanji: '禁',
        meaning: 'prohibition'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '撲',
        meaning: 'slap'
      }
    ]
  },
  {
    kanjiName: '撲',
    strokes: 15,
    grade: 8,
    freq: 1283,
    meanings: ['Slap', 'Strike', 'Hit', 'Beat', 'Tell', 'Speak'],
    on: ['ぼく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Materials', 'Slap', 'Right', 'Official'],
    similars: [
      {
        kanji: '僕',
        meaning: 'me'
      },
      {
        kanji: '業',
        meaning: 'business'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '接',
        meaning: 'touch'
      },
      {
        kanji: '菊',
        meaning: 'chrysanthemum'
      },
      {
        kanji: '葬',
        meaning: 'interment'
      }
    ]
  },
  {
    kanjiName: '斉',
    strokes: 8,
    grade: 8,
    freq: 1209,
    meanings: ['Adjusted', 'Alike', 'Equal', 'Similar Variety Of'],
    on: ['せい', 'さい'],
    kun: ['そろ.う', 'ひと.しい', 'ひと.しく', 'あたる', 'はやい'],
    jlpt: 1,
    quizAnswers: ['Adjusted', 'Veil', 'Undergo', 'Japan'],
    similars: [
      {
        kanji: '済',
        meaning: 'settle (debt'
      },
      {
        kanji: '剤',
        meaning: 'dose'
      },
      {
        kanji: '卒',
        meaning: 'graduate'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '削',
        meaning: 'plane'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '斎',
        meaning: 'purification'
      },
      {
        kanji: '都',
        meaning: 'metropolis'
      },
      {
        kanji: '庸',
        meaning: 'commonplace'
      }
    ]
  },
  {
    kanjiName: '旨',
    strokes: 6,
    grade: 8,
    freq: 1166,
    meanings: ['Delicious', 'Relish', 'Show A Liking For', 'Purport', 'Will', 'Clever', 'Expert'],
    on: ['し'],
    kun: ['むね', 'うま.い'],
    jlpt: 1,
    quizAnswers: ['Heaven', 'Reason', 'Delicious', 'Injure'],
    similars: [
      {
        kanji: '白',
        meaning: 'white'
      },
      {
        kanji: '旬',
        meaning: 'decameron'
      },
      {
        kanji: '伯',
        meaning: 'chief'
      },
      {
        kanji: '但',
        meaning: 'however'
      },
      {
        kanji: '伸',
        meaning: 'expand'
      },
      {
        kanji: '日',
        meaning: 'day'
      },
      {
        kanji: '百',
        meaning: 'hundred'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '指',
        meaning: 'finger'
      },
      {
        kanji: '皆',
        meaning: 'all'
      }
    ]
  },
  {
    kanjiName: '沼',
    strokes: 8,
    grade: 8,
    freq: 1467,
    meanings: ['Marsh', 'Lake', 'Bog', 'Swamp', 'Pond'],
    on: ['しょう'],
    kun: ['ぬま'],
    jlpt: 1,
    quizAnswers: ['Go Along', 'Succeed', 'Marsh', 'Compared With'],
    similars: [
      {
        kanji: '沿',
        meaning: 'run alongside'
      },
      {
        kanji: '治',
        meaning: 'reign'
      },
      {
        kanji: '招',
        meaning: 'beckon'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '洞',
        meaning: 'den'
      },
      {
        kanji: '活',
        meaning: 'lively'
      },
      {
        kanji: '加',
        meaning: 'add'
      },
      {
        kanji: '召',
        meaning: 'seduce'
      },
      {
        kanji: '沖',
        meaning: 'open sea'
      },
      {
        kanji: '河',
        meaning: 'river'
      }
    ]
  },
  {
    kanjiName: '泰',
    strokes: 10,
    grade: 8,
    freq: 1281,
    meanings: ['Peaceful', 'Calm', 'Peace', 'Easy', 'Thailand', 'Extreme', 'Excessive', 'Great'],
    on: ['たい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Meal', 'View', 'Peaceful', 'Lumber'],
    similars: [
      {
        kanji: '奏',
        meaning: 'play music'
      },
      {
        kanji: '暴',
        meaning: 'outburst'
      },
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '漆',
        meaning: 'lacquer'
      },
      {
        kanji: '球',
        meaning: 'ball'
      },
      {
        kanji: '奉',
        meaning: 'observance'
      },
      {
        kanji: '赤',
        meaning: 'red'
      },
      {
        kanji: '恭',
        meaning: 'respect'
      },
      {
        kanji: '春',
        meaning: 'springtime'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      }
    ]
  },
  {
    kanjiName: '滅',
    strokes: 13,
    grade: 8,
    freq: 1222,
    meanings: ['Destroy', 'Ruin', 'Overthrow', 'Perish'],
    on: ['めつ'],
    kun: ['ほろ.びる', 'ほろ.ぶ', 'ほろ.ぼす'],
    jlpt: 1,
    quizAnswers: ['Study', 'Destroy', 'Shove', 'Revered'],
    similars: [
      {
        kanji: '減',
        meaning: 'dwindle'
      },
      {
        kanji: '浅',
        meaning: 'shallow'
      },
      {
        kanji: '派',
        meaning: 'faction'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '浜',
        meaning: 'seacoast'
      },
      {
        kanji: '威',
        meaning: 'intimidate'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '犠',
        meaning: 'sacrifice'
      }
    ]
  },
  {
    kanjiName: '滋',
    strokes: 12,
    grade: 8,
    freq: 1563,
    meanings: ['Nourishing', 'More & More', 'Be Luxuriant', 'Planting', 'Turbidity'],
    on: ['じ', 'し'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Nourishing', 'Plant', 'Hall', 'Goods'],
    similars: [
      {
        kanji: '磁',
        meaning: 'magnet'
      },
      {
        kanji: '泌',
        meaning: 'ooze'
      },
      {
        kanji: '潔',
        meaning: 'undefiled'
      },
      {
        kanji: '流',
        meaning: 'current'
      },
      {
        kanji: '法',
        meaning: 'method'
      },
      {
        kanji: '淡',
        meaning: 'thin'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '漏',
        meaning: 'leak'
      },
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '慈',
        meaning: 'mercy'
      }
    ]
  },
  {
    kanjiName: '炉',
    strokes: 8,
    grade: 8,
    freq: 1359,
    meanings: ['Hearth', 'Furnace', 'Kiln', 'Reactor'],
    on: ['ろ'],
    kun: ['いろり'],
    jlpt: 1,
    quizAnswers: ['Paint', 'Ford', 'Memory', 'Hearth'],
    similars: [
      {
        kanji: '灯',
        meaning: 'lamp'
      },
      {
        kanji: '釈',
        meaning: 'explanation'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      },
      {
        kanji: '粉',
        meaning: 'flour'
      },
      {
        kanji: '弟',
        meaning: 'younger brother'
      },
      {
        kanji: '炎',
        meaning: 'inflammation'
      },
      {
        kanji: '焼',
        meaning: 'bake'
      },
      {
        kanji: '炊',
        meaning: 'cook'
      },
      {
        kanji: '戸',
        meaning: 'door'
      },
      {
        kanji: '煩',
        meaning: 'anxiety'
      }
    ]
  },
  {
    kanjiName: '琴',
    strokes: 12,
    grade: 8,
    freq: 1591,
    meanings: ['Harp', 'Koto'],
    on: ['きん', 'ごん'],
    kun: ['こと'],
    jlpt: 1,
    quizAnswers: ['Town', 'Harp', 'Door', 'Occasion'],
    similars: [
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '球',
        meaning: 'ball'
      },
      {
        kanji: '赴',
        meaning: 'proceed'
      },
      {
        kanji: '契',
        meaning: 'pledge'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '班',
        meaning: 'squad'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '壌',
        meaning: 'lot'
      },
      {
        kanji: '華',
        meaning: 'splendor'
      },
      {
        kanji: '表',
        meaning: 'surface'
      }
    ]
  },
  {
    kanjiName: '寸',
    strokes: 3,
    grade: 6,
    freq: 1669,
    meanings: ['Measurement', 'Tenth Of A Shaku', 'A Little', 'Small'],
    on: ['すん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Signature', 'Measurement', 'Decline', 'Visiting'],
    similars: [
      {
        kanji: '丁',
        meaning: 'street'
      },
      {
        kanji: '才',
        meaning: 'genius'
      },
      {
        kanji: '下',
        meaning: 'below'
      },
      {
        kanji: '示',
        meaning: 'show'
      },
      {
        kanji: '払',
        meaning: 'pay'
      },
      {
        kanji: '付',
        meaning: 'adhere'
      },
      {
        kanji: '団',
        meaning: 'group'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '犬',
        meaning: 'dog'
      },
      {
        kanji: '不',
        meaning: 'negative'
      }
    ]
  },
  {
    kanjiName: '竜',
    strokes: 10,
    grade: 8,
    freq: 1195,
    meanings: ['Dragon', 'Imperial'],
    on: ['りゅう', 'りょう', 'ろう'],
    kun: ['たつ', 'いせ'],
    jlpt: 1,
    quizAnswers: ['Means', 'Metropolis', 'Aspire To', 'Dragon'],
    similars: [
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '滝',
        meaning: 'waterfall'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '境',
        meaning: 'boundary'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      }
    ]
  },
  {
    kanjiName: '縁',
    strokes: 15,
    grade: 8,
    freq: 1291,
    meanings: ['Affinity', 'Relation', 'Connection', 'Edge', 'Border', 'Verge', 'Brink'],
    on: ['えん', '-ねん'],
    kun: ['ふち', 'ふちど.る', 'ゆかり', 'よすが', 'へり', 'えにし'],
    jlpt: 1,
    quizAnswers: ['Affinity', 'Be In High Spirits', 'Occurrence', 'East'],
    similars: [
      {
        kanji: '緑',
        meaning: 'green'
      },
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '緩',
        meaning: 'slacken'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '縦',
        meaning: 'vertical'
      },
      {
        kanji: '紛',
        meaning: 'distract'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '継',
        meaning: 'inherit'
      },
      {
        kanji: '稼',
        meaning: 'earnings'
      }
    ]
  },
  {
    kanjiName: '翼',
    strokes: 17,
    grade: 8,
    freq: 1201,
    meanings: ['Wing', 'Plane', 'Flank'],
    on: ['よく'],
    kun: ['つばさ'],
    jlpt: 1,
    quizAnswers: ['Continually', 'Instruction', 'Ball', 'Wing'],
    similars: [
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '洪',
        meaning: 'deluge'
      },
      {
        kanji: '翌',
        meaning: 'the following'
      },
      {
        kanji: '習',
        meaning: 'learn'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '演',
        meaning: 'performance'
      },
      {
        kanji: '獣',
        meaning: 'animal'
      },
      {
        kanji: '戦',
        meaning: 'war'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      }
    ]
  },
  {
    kanjiName: '吉',
    strokes: 6,
    grade: 8,
    freq: 711,
    meanings: ['Good Luck', 'Joy', 'Congratulations'],
    on: ['きち', 'きつ'],
    kun: ['よし'],
    jlpt: 1,
    quizAnswers: ['Thick', 'Good Luck', 'Jump', 'Waste'],
    similars: [
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '古',
        meaning: 'old'
      },
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '苦',
        meaning: 'suffering'
      },
      {
        kanji: '周',
        meaning: 'circumference'
      },
      {
        kanji: '舎',
        meaning: 'cottage'
      },
      {
        kanji: '言',
        meaning: 'say'
      },
      {
        kanji: '石',
        meaning: 'stone'
      },
      {
        kanji: '占',
        meaning: 'fortune-telling'
      },
      {
        kanji: '右',
        meaning: 'right'
      }
    ]
  },
  {
    kanjiName: '刃',
    strokes: 3,
    grade: 8,
    freq: 1763,
    meanings: ['Blade', 'Sword', 'Edge'],
    on: ['じん', 'にん'],
    kun: ['は', 'やいば', 'き.る'],
    jlpt: 1,
    quizAnswers: ['Ability', 'Be At Peace', 'Blade', 'Go Along'],
    similars: [
      {
        kanji: '刀',
        meaning: 'sword'
      },
      {
        kanji: '小',
        meaning: 'little'
      },
      {
        kanji: '力',
        meaning: 'power'
      },
      {
        kanji: '辺',
        meaning: 'environs'
      },
      {
        kanji: '匁',
        meaning: 'monme'
      },
      {
        kanji: '不',
        meaning: 'negative'
      },
      {
        kanji: '少',
        meaning: 'few'
      },
      {
        kanji: '犬',
        meaning: 'dog'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '忍',
        meaning: 'endure'
      }
    ]
  },
  {
    kanjiName: '忍',
    strokes: 7,
    grade: 8,
    freq: 1700,
    meanings: ['Endure', 'Bear', 'Put Up With', 'Conceal', 'Secrete', 'Spy', 'Sneak'],
    on: ['にん'],
    kun: ['しの.ぶ', 'しの.ばせる'],
    jlpt: 1,
    quizAnswers: ['Endure', 'Govern', 'Liberate', 'Examine'],
    similars: [
      {
        kanji: '恋',
        meaning: 'romance'
      },
      {
        kanji: '恐',
        meaning: 'fear'
      },
      {
        kanji: '心',
        meaning: 'heart'
      },
      {
        kanji: '志',
        meaning: 'intention'
      },
      {
        kanji: '忘',
        meaning: 'forget'
      },
      {
        kanji: '忌',
        meaning: 'mourning'
      },
      {
        kanji: '応',
        meaning: 'apply'
      },
      {
        kanji: '怒',
        meaning: 'angry'
      },
      {
        kanji: '窓',
        meaning: 'window'
      },
      {
        kanji: '恩',
        meaning: 'grace'
      }
    ]
  },
  {
    kanjiName: '桃',
    strokes: 10,
    grade: 8,
    freq: 1784,
    meanings: ['Peach'],
    on: ['とう'],
    kun: ['もも'],
    jlpt: 1,
    quizAnswers: ['Pop', 'Piece', 'Peach', 'Drift'],
    similars: [
      {
        kanji: '挑',
        meaning: 'challenge'
      },
      {
        kanji: '桟',
        meaning: 'scaffold'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '桜',
        meaning: 'cherry'
      },
      {
        kanji: '兆',
        meaning: 'portent'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '松',
        meaning: 'pine tree'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '移',
        meaning: 'shift'
      }
    ]
  },
  {
    kanjiName: '侍',
    strokes: 8,
    grade: 8,
    freq: 1939,
    meanings: ['Waiter', 'Samurai', 'Wait Upon', 'Serve'],
    on: ['じ', 'し'],
    kun: ['さむらい', 'はべ.る'],
    jlpt: 1,
    quizAnswers: ['Attend', 'Answer', 'Waiter', 'Custom'],
    similars: [
      {
        kanji: '待',
        meaning: 'wait'
      },
      {
        kanji: '特',
        meaning: 'special'
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple'
      },
      {
        kanji: '佳',
        meaning: 'excellent'
      },
      {
        kanji: '供',
        meaning: 'submit'
      },
      {
        kanji: '持',
        meaning: 'hold'
      },
      {
        kanji: '付',
        meaning: 'adhere'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '玉',
        meaning: 'jewel'
      }
    ]
  },
  {
    kanjiName: '娯',
    strokes: 10,
    grade: 8,
    freq: 1827,
    meanings: ['Recreation', 'Pleasure'],
    on: ['ご'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Offset', 'Recreation', 'Discontinue', 'Elapse'],
    similars: [
      {
        kanji: '呉',
        meaning: 'give'
      },
      {
        kanji: '虞',
        meaning: 'fear'
      },
      {
        kanji: '姻',
        meaning: 'matrimony'
      },
      {
        kanji: '如',
        meaning: 'likeness'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      },
      {
        kanji: '研',
        meaning: 'polish'
      },
      {
        kanji: '架',
        meaning: 'erect'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '兵',
        meaning: 'soldier'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      }
    ]
  },
  {
    kanjiName: '斗',
    strokes: 4,
    grade: 8,
    freq: 1885,
    meanings: ['Big Dipper', 'Ten Sho (vol)', 'Sake Dipper', 'Dots And Cross Radical (no. 68)'],
    on: ['と', 'とう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Big Dipper', 'Finish', 'Pour', 'Have The Honor To'],
    similars: [
      {
        kanji: '汁',
        meaning: 'soup'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '弁',
        meaning: 'valve'
      },
      {
        kanji: '半',
        meaning: 'half'
      },
      {
        kanji: '平',
        meaning: 'even'
      },
      {
        kanji: '河',
        meaning: 'river'
      },
      {
        kanji: '斤',
        meaning: 'axe'
      },
      {
        kanji: '羊',
        meaning: 'sheep'
      },
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      }
    ]
  },
  {
    kanjiName: '朱',
    strokes: 6,
    grade: 8,
    freq: 1788,
    meanings: ['Vermilion', 'Cinnabar', 'Scarlet', 'Red', 'Bloody'],
    on: ['しゅ'],
    kun: ['あけ'],
    jlpt: 1,
    quizAnswers: ['Vermilion', 'Easy', 'Blaze', 'Plait'],
    similars: [
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '休',
        meaning: 'rest'
      },
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '未',
        meaning: 'un-'
      },
      {
        kanji: '末',
        meaning: 'end'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '体',
        meaning: 'body'
      },
      {
        kanji: '条',
        meaning: 'article'
      },
      {
        kanji: '床',
        meaning: 'bed'
      },
      {
        kanji: '気',
        meaning: 'spirit'
      }
    ]
  },
  {
    kanjiName: '丘',
    strokes: 5,
    grade: 8,
    freq: 1405,
    meanings: ['Hill', 'Knoll'],
    on: ['きゅう'],
    kun: ['おか'],
    jlpt: 1,
    quizAnswers: ['Moon', 'Stop', 'Hill', 'Cheer Up'],
    similars: [
      {
        kanji: '企',
        meaning: 'undertake'
      },
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '止',
        meaning: 'stop'
      },
      {
        kanji: '正',
        meaning: 'correct'
      },
      {
        kanji: '兵',
        meaning: 'soldier'
      },
      {
        kanji: '叫',
        meaning: 'shout'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '吐',
        meaning: 'spit'
      },
      {
        kanji: '血',
        meaning: 'blood'
      },
      {
        kanji: '延',
        meaning: 'prolong'
      }
    ]
  },
  {
    kanjiName: '梨',
    strokes: 11,
    grade: 8,
    freq: 1331,
    meanings: ['Pear Tree'],
    on: ['り'],
    kun: ['なし'],
    jlpt: 1,
    quizAnswers: ['10,000', 'Warn', 'Communicate', 'Pear Tree']
  },
  {
    kanjiName: '僕',
    strokes: 14,
    grade: 8,
    freq: 1236,
    meanings: ['Me', 'I (male)', 'Servant', 'Manservant'],
    on: ['ぼく'],
    kun: ['しもべ'],
    jlpt: 1,
    quizAnswers: ['Me', 'Neither', 'Alternative', 'Deify'],
    similars: [
      {
        kanji: '撲',
        meaning: 'slap'
      },
      {
        kanji: '業',
        meaning: 'business'
      },
      {
        kanji: '奥',
        meaning: 'heart'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      }
    ]
  },
  {
    kanjiName: '釣',
    strokes: 11,
    grade: 8,
    freq: 1542,
    meanings: ['Angling', 'Fish', 'Catch', 'Allure', 'Ensnare'],
    on: ['ちょう'],
    kun: ['つ.る', 'つ.り', 'つ.り-'],
    jlpt: 1,
    quizAnswers: ['Angling', 'Compare', 'Scour', 'Tender'],
    similars: [
      {
        kanji: '鉱',
        meaning: 'mineral'
      },
      {
        kanji: '鈴',
        meaning: 'small bell'
      },
      {
        kanji: '鈍',
        meaning: 'dull'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '銘',
        meaning: 'inscription'
      },
      {
        kanji: '鉛',
        meaning: 'lead'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '鋳',
        meaning: 'casting'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      }
    ]
  },
  {
    kanjiName: '嵐',
    strokes: 12,
    grade: 8,
    freq: 1910,
    meanings: ['Storm', 'Tempest'],
    on: ['らん'],
    kun: ['あらし'],
    jlpt: 1,
    quizAnswers: ['Soft', 'Leave', 'Coax', 'Storm']
  },
  {
    kanjiName: '姫',
    strokes: 10,
    grade: 8,
    freq: 1566,
    meanings: ['Princess'],
    on: ['き'],
    kun: ['ひめ', 'ひめ-'],
    jlpt: 1,
    quizAnswers: ['Rinse', 'Chamber', 'Exclusive', 'Princess'],
    similars: [
      {
        kanji: '臣',
        meaning: 'retainer'
      },
      {
        kanji: '如',
        meaning: 'likeness'
      },
      {
        kanji: '蔵',
        meaning: 'storehouse'
      },
      {
        kanji: '始',
        meaning: 'commence'
      },
      {
        kanji: '拒',
        meaning: 'repel'
      },
      {
        kanji: '巨',
        meaning: 'gigantic'
      },
      {
        kanji: '征',
        meaning: 'subjugate'
      },
      {
        kanji: '塩',
        meaning: 'salt'
      },
      {
        kanji: '艦',
        meaning: 'warship'
      },
      {
        kanji: '臓',
        meaning: 'entrails'
      }
    ]
  },
  {
    kanjiName: '棚',
    strokes: 12,
    grade: 8,
    freq: 1594,
    meanings: ['Shelf', 'Ledge', 'Rack', 'Mount', 'Mantle', 'Trellis'],
    on: ['ほう'],
    kun: ['たな', '-だな'],
    jlpt: 1,
    quizAnswers: ['Shelf', 'Vegetable', 'Gateway', 'Exclaim'],
    similars: [
      {
        kanji: '崩',
        meaning: 'crumble'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      },
      {
        kanji: '明',
        meaning: 'bright'
      },
      {
        kanji: '省',
        meaning: 'government ministry'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '胃',
        meaning: 'stomach'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      },
      {
        kanji: '曹',
        meaning: 'office'
      },
      {
        kanji: '増',
        meaning: 'increase'
      },
      {
        kanji: '層',
        meaning: 'stratum'
      }
    ]
  },
  {
    kanjiName: '砲',
    strokes: 10,
    grade: 8,
    freq: 1268,
    meanings: ['Cannon', 'Gun'],
    on: ['ほう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Low', 'Cannon', 'Regime', 'Witness'],
    similars: [
      {
        kanji: '砕',
        meaning: 'smash'
      },
      {
        kanji: '胞',
        meaning: 'placenta'
      },
      {
        kanji: '抱',
        meaning: 'embrace'
      },
      {
        kanji: '起',
        meaning: 'rouse'
      },
      {
        kanji: '克',
        meaning: 'overcome'
      },
      {
        kanji: '破',
        meaning: 'rend'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '石',
        meaning: 'stone'
      },
      {
        kanji: '巻',
        meaning: 'scroll'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      }
    ]
  },
  {
    kanjiName: '雷',
    strokes: 13,
    grade: 8,
    freq: 1491,
    meanings: ['Thunder', 'Lightning Bolt'],
    on: ['らい'],
    kun: ['かみなり', 'いかずち', 'いかづち'],
    jlpt: 1,
    quizAnswers: ['Government', 'Thunder', 'Deify', 'Week'],
    similars: [
      {
        kanji: '電',
        meaning: 'electricity'
      },
      {
        kanji: '霜',
        meaning: 'frost'
      },
      {
        kanji: '雰',
        meaning: 'atmosphere'
      },
      {
        kanji: '零',
        meaning: 'zero'
      },
      {
        kanji: '雪',
        meaning: 'snow'
      },
      {
        kanji: '雲',
        meaning: 'cloud'
      },
      {
        kanji: '霊',
        meaning: 'spirits'
      },
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      },
      {
        kanji: '細',
        meaning: 'dainty'
      }
    ]
  },
  {
    kanjiName: '芽',
    strokes: 8,
    grade: 4,
    freq: 1691,
    meanings: ['Bud', 'Sprout', 'Spear', 'Germ'],
    on: ['が'],
    kun: ['め'],
    jlpt: 1,
    quizAnswers: ['Bud', 'Goods', 'Net (profit)', 'Law'],
    similars: [
      {
        kanji: '芋',
        meaning: 'potato'
      },
      {
        kanji: '芳',
        meaning: 'perfume'
      },
      {
        kanji: '封',
        meaning: 'seal'
      },
      {
        kanji: '苦',
        meaning: 'suffering'
      },
      {
        kanji: '坊',
        meaning: 'boy'
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple'
      },
      {
        kanji: '芸',
        meaning: 'technique'
      },
      {
        kanji: '華',
        meaning: 'splendor'
      },
      {
        kanji: '葉',
        meaning: 'leaf'
      },
      {
        kanji: '拷',
        meaning: 'torture'
      }
    ]
  },
  {
    kanjiName: '澄',
    strokes: 15,
    grade: 8,
    freq: 1722,
    meanings: ['Lucidity', 'Be Clear', 'Clear', 'Clarify', 'Settle', 'Strain', 'Look Grave'],
    on: ['ちょう'],
    kun: ['す.む', 'す.ます', '-す.ます'],
    jlpt: 1,
    quizAnswers: ['Lucidity', 'Dry Up', 'Sentence', 'Billows'],
    similars: [
      {
        kanji: '登',
        meaning: 'ascend'
      },
      {
        kanji: '減',
        meaning: 'dwindle'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '短',
        meaning: 'short'
      },
      {
        kanji: '涼',
        meaning: 'refreshing'
      },
      {
        kanji: '沿',
        meaning: 'run alongside'
      },
      {
        kanji: '悦',
        meaning: 'ecstasy'
      },
      {
        kanji: '痘',
        meaning: 'pox'
      },
      {
        kanji: '溶',
        meaning: 'melt'
      },
      {
        kanji: '険',
        meaning: 'precipitous'
      }
    ]
  },
  {
    kanjiName: '矛',
    strokes: 5,
    grade: 8,
    freq: 1538,
    meanings: ['Halberd', 'Arms', 'Festival Float'],
    on: ['む', 'ぼう'],
    kun: ['ほこ'],
    jlpt: 1,
    quizAnswers: ['Buddha', 'Adjoin', 'Halberd', 'Put Out'],
    similars: [
      {
        kanji: '務',
        meaning: 'task'
      },
      {
        kanji: '柔',
        meaning: 'tender'
      },
      {
        kanji: '了',
        meaning: 'complete'
      },
      {
        kanji: '予',
        meaning: 'beforehand'
      },
      {
        kanji: '劣',
        meaning: 'inferiority'
      },
      {
        kanji: '名',
        meaning: 'name'
      },
      {
        kanji: '発',
        meaning: 'departure'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '祝',
        meaning: 'celebrate'
      },
      {
        kanji: '勇',
        meaning: 'courage'
      }
    ]
  },
  {
    kanjiName: '鐘',
    strokes: 20,
    grade: 8,
    freq: 1681,
    meanings: ['Bell', 'Gong', 'Chimes'],
    on: ['しょう'],
    kun: ['かね'],
    jlpt: 1,
    quizAnswers: ['Bell', 'Tend Toward', 'Dominion', 'Strength'],
    similars: [
      {
        kanji: '鏡',
        meaning: 'mirror'
      },
      {
        kanji: '鎖',
        meaning: 'chain'
      },
      {
        kanji: '錯',
        meaning: 'confused'
      },
      {
        kanji: '錬',
        meaning: 'tempering'
      },
      {
        kanji: '鎮',
        meaning: 'tranquilize'
      },
      {
        kanji: '境',
        meaning: 'boundary'
      },
      {
        kanji: '種',
        meaning: 'species'
      },
      {
        kanji: '錘',
        meaning: 'weight'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '鋼',
        meaning: 'steel'
      }
    ]
  },
  {
    kanjiName: '凶',
    strokes: 4,
    grade: 8,
    freq: 1673,
    meanings: ['Villain', 'Evil', 'Bad Luck', 'Disaster'],
    on: ['きょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Arrangement', 'Villain', 'Bomb', 'Offer Sympathy'],
    similars: [
      {
        kanji: '仙',
        meaning: 'hermit'
      },
      {
        kanji: '介',
        meaning: 'jammed in'
      },
      {
        kanji: '山',
        meaning: 'mountain'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '千',
        meaning: 'thousand'
      },
      {
        kanji: '斤',
        meaning: 'axe'
      },
      {
        kanji: '升',
        meaning: 'measuring box'
      },
      {
        kanji: '午',
        meaning: 'noon'
      },
      {
        kanji: '缶',
        meaning: 'tin can'
      },
      {
        kanji: '刈',
        meaning: 'reap'
      }
    ]
  },
  {
    kanjiName: '塊',
    strokes: 13,
    grade: 8,
    freq: 1800,
    meanings: ['Clod', 'Lump', 'Chunk', 'Clot', 'Mass'],
    on: ['かい', 'け'],
    kun: ['かたまり', 'つちくれ'],
    jlpt: 1,
    quizAnswers: ['Clod', 'Prussia', 'Soil', 'Line'],
    similars: [
      {
        kanji: '魂',
        meaning: 'soul'
      },
      {
        kanji: '鬼',
        meaning: 'ghost'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '醜',
        meaning: 'ugly'
      },
      {
        kanji: '増',
        meaning: 'increase'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '現',
        meaning: 'present'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      }
    ]
  },
  {
    kanjiName: '狩',
    strokes: 9,
    grade: 8,
    freq: 1785,
    meanings: ['Hunt', 'Raid', 'Gather'],
    on: ['しゅ'],
    kun: ['か.る', 'か.り', '-が.り'],
    jlpt: 1,
    quizAnswers: ['Award To', 'Reform', 'Late', 'Hunt'],
    similars: [
      {
        kanji: '守',
        meaning: 'guard'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      },
      {
        kanji: '侍',
        meaning: 'waiter'
      },
      {
        kanji: '院',
        meaning: 'Inst.'
      },
      {
        kanji: '将',
        meaning: 'leader'
      },
      {
        kanji: '崇',
        meaning: 'adore'
      },
      {
        kanji: '符',
        meaning: 'token'
      },
      {
        kanji: '狂',
        meaning: 'lunatic'
      },
      {
        kanji: '行',
        meaning: 'going'
      },
      {
        kanji: '村',
        meaning: 'village'
      }
    ]
  },
  {
    kanjiName: '魂',
    strokes: 14,
    grade: 8,
    freq: 1748,
    meanings: ['Soul', 'Spirit'],
    on: ['こん'],
    kun: ['たましい', 'たま'],
    jlpt: 1,
    quizAnswers: ['Strange', 'Pilfer', 'Soul', 'Confusion'],
    similars: [
      {
        kanji: '塊',
        meaning: 'clod'
      },
      {
        kanji: '鬼',
        meaning: 'ghost'
      },
      {
        kanji: '醜',
        meaning: 'ugly'
      },
      {
        kanji: '魔',
        meaning: 'witch'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '増',
        meaning: 'increase'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '頑',
        meaning: 'stubborn'
      },
      {
        kanji: '規',
        meaning: 'standard'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      }
    ]
  },
  {
    kanjiName: '脚',
    strokes: 11,
    grade: 8,
    freq: 1228,
    meanings: ['Skids', 'Leg', 'Undercarriage', 'Lower Part', 'Base'],
    on: ['きゃく', 'きゃ', 'かく'],
    kun: ['あし'],
    jlpt: 1,
    quizAnswers: ['Disappear', 'Assistant', 'Skids', 'Forbid'],
    similars: [
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '却',
        meaning: 'instead'
      },
      {
        kanji: '肺',
        meaning: 'lungs'
      },
      {
        kanji: '肪',
        meaning: 'obese'
      },
      {
        kanji: '肢',
        meaning: 'limb'
      },
      {
        kanji: '勝',
        meaning: 'victory'
      },
      {
        kanji: '然',
        meaning: 'sort of thing'
      },
      {
        kanji: '腕',
        meaning: 'arm'
      },
      {
        kanji: '膨',
        meaning: 'swell'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      }
    ]
  },
  {
    kanjiName: '也',
    strokes: 3,
    grade: 9,
    freq: 1404,
    meanings: ['To Be (classical)'],
    on: ['や', 'え'],
    kun: ['なり', 'か', 'また'],
    jlpt: 1,
    quizAnswers: ['Due', 'To Be (classical)', 'Instrument', 'Surface']
  },
  {
    kanjiName: '井',
    strokes: 4,
    grade: 8,
    freq: 339,
    meanings: ['Well', 'Well Crib', 'Town', 'Community'],
    on: ['せい', 'しょう'],
    kun: ['い'],
    jlpt: 1,
    quizAnswers: ['Row', 'Well', 'Width', 'Abandon'],
    similars: [
      {
        kanji: '元',
        meaning: 'beginning'
      },
      {
        kanji: '夫',
        meaning: 'husband'
      },
      {
        kanji: '干',
        meaning: 'dry'
      },
      {
        kanji: '天',
        meaning: 'heavens'
      },
      {
        kanji: '平',
        meaning: 'even'
      },
      {
        kanji: '末',
        meaning: 'end'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '示',
        meaning: 'show'
      },
      {
        kanji: '刊',
        meaning: 'publish'
      },
      {
        kanji: '未',
        meaning: 'un-'
      }
    ]
  },
  {
    kanjiName: '嬢',
    strokes: 16,
    grade: 8,
    freq: 2059,
    meanings: ['Lass', 'Girl', 'Miss', 'Daughter'],
    on: ['じょう'],
    kun: ['むすめ'],
    jlpt: 1,
    quizAnswers: ['Short', 'Disadvantage', 'Win', 'Lass'],
    similars: [
      {
        kanji: '壌',
        meaning: 'lot'
      },
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '譲',
        meaning: 'defer'
      },
      {
        kanji: '娠',
        meaning: 'with child'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '袋',
        meaning: 'sack'
      },
      {
        kanji: '嫌',
        meaning: 'dislike'
      },
      {
        kanji: '棄',
        meaning: 'abandon'
      },
      {
        kanji: '徴',
        meaning: 'indications'
      }
    ]
  },
  {
    kanjiName: '暦',
    strokes: 14,
    grade: 8,
    freq: 1765,
    meanings: ['Calendar', 'Almanac'],
    on: ['れき', 'りゃく'],
    kun: ['こよみ'],
    jlpt: 1,
    quizAnswers: ['Desk', 'Restless', 'Calendar', 'Rite'],
    similars: [
      {
        kanji: '替',
        meaning: 'exchange'
      },
      {
        kanji: '歴',
        meaning: 'curriculum'
      },
      {
        kanji: '潜',
        meaning: 'submerge'
      },
      {
        kanji: '稲',
        meaning: 'rice plant'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '番',
        meaning: 'turn'
      },
      {
        kanji: '春',
        meaning: 'springtime'
      },
      {
        kanji: '魔',
        meaning: 'witch'
      },
      {
        kanji: '摩',
        meaning: 'chafe'
      },
      {
        kanji: '賛',
        meaning: 'approve'
      }
    ]
  },
  {
    kanjiName: '眺',
    strokes: 11,
    grade: 8,
    freq: 1726,
    meanings: ['Stare', 'Watch', 'Look At', 'See', 'Scrutinize'],
    on: ['ちょう'],
    kun: ['なが.める'],
    jlpt: 1,
    quizAnswers: ['Carry Out', 'Cultivate', 'Paling', 'Stare'],
    similars: [
      {
        kanji: '財',
        meaning: 'property'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '県',
        meaning: 'prefecture'
      },
      {
        kanji: '則',
        meaning: 'rule'
      },
      {
        kanji: '見',
        meaning: 'see'
      },
      {
        kanji: '貝',
        meaning: 'shellfish'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      },
      {
        kanji: '貯',
        meaning: 'savings'
      },
      {
        kanji: '閥',
        meaning: 'clique'
      }
    ]
  },
  {
    kanjiName: '裸',
    strokes: 13,
    grade: 8,
    freq: 1796,
    meanings: ['Naked', 'Nude', 'Uncovered', 'Partially Clothed'],
    on: ['ら'],
    kun: ['はだか'],
    jlpt: 1,
    quizAnswers: ['Slow', 'Worship', 'Head (pimple)', 'Naked'],
    similars: [
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '褐',
        meaning: 'brown'
      },
      {
        kanji: '視',
        meaning: 'inspection'
      },
      {
        kanji: '神',
        meaning: 'gods'
      },
      {
        kanji: '課',
        meaning: 'chapter'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '複',
        meaning: 'duplicate'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '補',
        meaning: 'supplement'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      }
    ]
  },
  {
    kanjiName: '塾',
    strokes: 14,
    grade: 8,
    freq: 1297,
    meanings: ['Cram School', 'Private School'],
    on: ['じゅく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Cram School', 'Difference', 'Refrigerate', 'War'],
    similars: [
      {
        kanji: '熟',
        meaning: 'mellow'
      },
      {
        kanji: '郭',
        meaning: 'enclosure'
      },
      {
        kanji: '享',
        meaning: 'enjoy'
      },
      {
        kanji: '京',
        meaning: 'capital'
      },
      {
        kanji: '就',
        meaning: 'concerning'
      },
      {
        kanji: '整',
        meaning: 'organize'
      },
      {
        kanji: '壁',
        meaning: 'wall'
      },
      {
        kanji: '鼓',
        meaning: 'drum'
      },
      {
        kanji: '惑',
        meaning: 'beguile'
      },
      {
        kanji: '座',
        meaning: 'squat'
      }
    ]
  },
  {
    kanjiName: '卓',
    strokes: 8,
    grade: 8,
    freq: 1348,
    meanings: ['Eminent', 'Table', 'Desk', 'High'],
    on: ['たく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['All', 'Eminent', 'Sharp', 'Tar'],
    similars: [
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '早',
        meaning: 'early'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '悼',
        meaning: 'lament'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      },
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      }
    ]
  },
  {
    kanjiName: '菌',
    strokes: 11,
    grade: 8,
    freq: 1586,
    meanings: ['Germ', 'Fungus', 'Bacteria'],
    on: ['きん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Battle', 'Germ', 'Meet', 'Facility'],
    similars: [
      {
        kanji: '菊',
        meaning: 'chrysanthemum'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '暮',
        meaning: 'evening'
      },
      {
        kanji: '苗',
        meaning: 'seedling'
      },
      {
        kanji: '困',
        meaning: 'quandary'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '因',
        meaning: 'cause'
      }
    ]
  },
  {
    kanjiName: '陰',
    strokes: 11,
    grade: 8,
    freq: 1393,
    meanings: ['Shade', 'Yin', 'Negative', 'Sex Organs', 'Secret', 'Shadow'],
    on: ['いん'],
    kun: ['かげ', 'かげ.る'],
    jlpt: 1,
    quizAnswers: ['Emotion', 'Account', 'Shade', 'Look'],
    similars: [
      {
        kanji: '除',
        meaning: 'exclude'
      },
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '隆',
        meaning: 'hump'
      },
      {
        kanji: '険',
        meaning: 'precipitous'
      },
      {
        kanji: '徐',
        meaning: 'gradually'
      },
      {
        kanji: '附',
        meaning: 'affixed'
      },
      {
        kanji: '会',
        meaning: 'meeting'
      },
      {
        kanji: '絵',
        meaning: 'picture'
      },
      {
        kanji: '際',
        meaning: 'occasion'
      },
      {
        kanji: '陸',
        meaning: 'land'
      }
    ]
  },
  {
    kanjiName: '霊',
    strokes: 15,
    grade: 8,
    freq: 1458,
    meanings: ['Spirits', 'Soul'],
    on: ['れい', 'りょう'],
    kun: ['たま'],
    jlpt: 1,
    quizAnswers: ['Spirits', 'Imbibe', 'Fact', 'Send'],
    similars: [
      {
        kanji: '雲',
        meaning: 'cloud'
      },
      {
        kanji: '震',
        meaning: 'quake'
      },
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '雰',
        meaning: 'atmosphere'
      },
      {
        kanji: '雪',
        meaning: 'snow'
      },
      {
        kanji: '零',
        meaning: 'zero'
      },
      {
        kanji: '雷',
        meaning: 'thunder'
      },
      {
        kanji: '電',
        meaning: 'electricity'
      },
      {
        kanji: '霜',
        meaning: 'frost'
      },
      {
        kanji: '霧',
        meaning: 'fog'
      }
    ]
  },
  {
    kanjiName: '稼',
    strokes: 15,
    grade: 8,
    freq: 1264,
    meanings: ['Earnings', 'Work', 'Earn Money'],
    on: ['か'],
    kun: ['かせ.ぐ'],
    jlpt: 1,
    quizAnswers: ['Express', 'Support', 'Wear Mustache', 'Earnings'],
    similars: [
      {
        kanji: '嫁',
        meaning: 'marry into'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      },
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '象',
        meaning: 'elephant'
      },
      {
        kanji: '像',
        meaning: 'statue'
      },
      {
        kanji: '数',
        meaning: 'number'
      }
    ]
  },
  {
    kanjiName: '嫁',
    strokes: 13,
    grade: 8,
    freq: 1581,
    meanings: ['Marry Into', 'Bride'],
    on: ['か'],
    kun: ['よめ', 'とつ.ぐ', 'い.く', 'ゆ.く'],
    jlpt: 1,
    quizAnswers: ['Wash', 'Narrow', 'Surrender', 'Marry Into'],
    similars: [
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '稼',
        meaning: 'earnings'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      },
      {
        kanji: '象',
        meaning: 'elephant'
      },
      {
        kanji: '微',
        meaning: 'delicate'
      },
      {
        kanji: '娠',
        meaning: 'with child'
      },
      {
        kanji: '縁',
        meaning: 'affinity'
      }
    ]
  },
  {
    kanjiName: '溝',
    strokes: 13,
    grade: 8,
    freq: 1736,
    meanings: ['Gutter', 'Ditch', 'Sewer', 'Drain', '10**32'],
    on: ['こう'],
    kun: ['みぞ'],
    jlpt: 1,
    quizAnswers: ['Gutter', 'Pair', 'Call On', 'Imitate'],
    similars: [
      {
        kanji: '満',
        meaning: 'full'
      },
      {
        kanji: '構',
        meaning: 'posture'
      },
      {
        kanji: '清',
        meaning: 'pure'
      },
      {
        kanji: '講',
        meaning: 'lecture'
      },
      {
        kanji: '惜',
        meaning: 'pity'
      },
      {
        kanji: '涯',
        meaning: 'horizon'
      },
      {
        kanji: '情',
        meaning: 'feelings'
      },
      {
        kanji: '購',
        meaning: 'subscription'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '措',
        meaning: 'set aside'
      }
    ]
  },
  {
    kanjiName: '滝',
    strokes: 13,
    grade: 8,
    freq: 1478,
    meanings: ['Waterfall', 'Rapids', 'Cascade'],
    on: ['ろう', 'そう'],
    kun: ['たき'],
    jlpt: 1,
    quizAnswers: ['Merely', 'Waterfall', 'Route', 'Flee'],
    similars: [
      {
        kanji: '竜',
        meaning: 'dragon'
      },
      {
        kanji: '境',
        meaning: 'boundary'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '普',
        meaning: 'universal'
      },
      {
        kanji: '憶',
        meaning: 'recollection'
      },
      {
        kanji: '演',
        meaning: 'performance'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '流',
        meaning: 'current'
      },
      {
        kanji: '惜',
        meaning: 'pity'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      }
    ]
  },
  {
    kanjiName: '狂',
    strokes: 7,
    grade: 8,
    freq: 1425,
    meanings: ['Lunatic', 'Insane', 'Crazy', 'Confuse'],
    on: ['きょう'],
    kun: ['くる.う', 'くる.おしい', 'くるお.しい'],
    jlpt: 1,
    quizAnswers: ['Fetch', 'Lunatic', 'Capital', 'Die'],
    similars: [
      {
        kanji: '姓',
        meaning: 'surname'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '住',
        meaning: 'dwell'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '往',
        meaning: 'journey'
      },
      {
        kanji: '栓',
        meaning: 'plug'
      },
      {
        kanji: '王',
        meaning: 'king'
      }
    ]
  },
  {
    kanjiName: '翔',
    strokes: 12,
    grade: 9,
    freq: 1936,
    meanings: ['Soar', 'Fly'],
    on: ['しょう'],
    kun: ['かけ.る', 'と.ぶ'],
    jlpt: 1,
    quizAnswers: ['Grease', 'Call Out To', 'Thin', 'Soar']
  },
  {
    kanjiName: '墨',
    strokes: 14,
    grade: 8,
    freq: 1616,
    meanings: ['Black Ink', 'India Ink', 'Ink Stick', 'Mexico'],
    on: ['ぼく'],
    kun: ['すみ'],
    jlpt: 1,
    quizAnswers: ['Shameless', 'Black Ink', 'Utilize', 'Live With'],
    similars: [
      {
        kanji: '黒',
        meaning: 'black'
      },
      {
        kanji: '黙',
        meaning: 'silence'
      },
      {
        kanji: '睡',
        meaning: 'drowsy'
      },
      {
        kanji: '塁',
        meaning: 'bases'
      },
      {
        kanji: '曇',
        meaning: 'cloudy weather'
      },
      {
        kanji: '瞬',
        meaning: 'wink'
      },
      {
        kanji: '駐',
        meaning: 'stop-over'
      },
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '野',
        meaning: 'plains'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      }
    ]
  },
  {
    kanjiName: '鳩',
    strokes: 13,
    grade: 9,
    freq: 1637,
    meanings: ['Pigeon', 'Dove'],
    on: ['きゅう', 'く'],
    kun: ['はと', 'あつ.める'],
    jlpt: 1,
    quizAnswers: ['Fish', 'Desire', 'Pigeon', 'Phase']
  },
  {
    kanjiName: '穏',
    strokes: 16,
    grade: 8,
    freq: 1535,
    meanings: ['Calm', 'Quiet', 'Moderation'],
    on: ['おん'],
    kun: ['おだ.やか'],
    jlpt: 1,
    quizAnswers: ['Paunch', 'Calm', 'Shame', 'Mark'],
    similars: [
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '隠',
        meaning: 'conceal'
      },
      {
        kanji: '秘',
        meaning: 'secret'
      },
      {
        kanji: '移',
        meaning: 'shift'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '稲',
        meaning: 'rice plant'
      },
      {
        kanji: '急',
        meaning: 'hurry'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '恋',
        meaning: 'romance'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      }
    ]
  },
  {
    kanjiName: '魔',
    strokes: 21,
    grade: 8,
    freq: 1514,
    meanings: ['Witch', 'Demon', 'Evil Spirit'],
    on: ['ま'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Forward', 'Crooked', 'Venom', 'Witch'],
    similars: [
      {
        kanji: '魂',
        meaning: 'soul'
      },
      {
        kanji: '暦',
        meaning: 'calendar'
      },
      {
        kanji: '摩',
        meaning: 'chafe'
      },
      {
        kanji: '親',
        meaning: 'parent'
      },
      {
        kanji: '磨',
        meaning: 'grind'
      },
      {
        kanji: '顔',
        meaning: 'face'
      },
      {
        kanji: '質',
        meaning: 'substance'
      },
      {
        kanji: '類',
        meaning: 'sort'
      },
      {
        kanji: '賛',
        meaning: 'approve'
      },
      {
        kanji: '醜',
        meaning: 'ugly'
      }
    ]
  },
  {
    kanjiName: '寮',
    strokes: 15,
    grade: 8,
    freq: 1705,
    meanings: ['Dormitory', 'Hostel', 'Villa', 'Tea Pavillion'],
    on: ['りょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Dormitory', 'Curtail', 'Counter For Lights', 'Fruit'],
    similars: [
      {
        kanji: '療',
        meaning: 'heal'
      },
      {
        kanji: '僚',
        meaning: 'colleague'
      },
      {
        kanji: '賓',
        meaning: 'V.I.P.'
      },
      {
        kanji: '源',
        meaning: 'source'
      },
      {
        kanji: '原',
        meaning: 'meadow'
      },
      {
        kanji: '顔',
        meaning: 'face'
      },
      {
        kanji: '宿',
        meaning: 'inn'
      },
      {
        kanji: '寛',
        meaning: 'tolerant'
      },
      {
        kanji: '頑',
        meaning: 'stubborn'
      },
      {
        kanji: '貧',
        meaning: 'poverty'
      }
    ]
  },
  {
    kanjiName: '盆',
    strokes: 9,
    grade: 8,
    freq: 1654,
    meanings: ['Basin', 'Lantern Festival', 'Tray'],
    on: ['ぼん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Counter For Images', 'Basin', 'Boundary', 'Visit'],
    similars: [
      {
        kanji: '盛',
        meaning: 'boom'
      },
      {
        kanji: '血',
        meaning: 'blood'
      },
      {
        kanji: '益',
        meaning: 'benefit'
      },
      {
        kanji: '企',
        meaning: 'undertake'
      },
      {
        kanji: '皿',
        meaning: 'dish'
      },
      {
        kanji: '盗',
        meaning: 'steal'
      },
      {
        kanji: '猛',
        meaning: 'fierce'
      },
      {
        kanji: '租',
        meaning: 'tariff'
      },
      {
        kanji: '盤',
        meaning: 'tray'
      },
      {
        kanji: '盟',
        meaning: 'alliance'
      }
    ]
  },
  {
    kanjiName: '棟',
    strokes: 12,
    grade: 8,
    freq: 1406,
    meanings: ['Ridgepole', 'Ridge'],
    on: ['とう'],
    kun: ['むね', 'むな-'],
    jlpt: 1,
    quizAnswers: ['Ridgepole', 'Confer On', 'Semen', 'Distribute'],
    similars: [
      {
        kanji: '模',
        meaning: 'imitation'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      },
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '植',
        meaning: 'plant'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      },
      {
        kanji: '標',
        meaning: 'signpost'
      },
      {
        kanji: '棋',
        meaning: 'chess piece'
      }
    ]
  },
  {
    kanjiName: '寧',
    strokes: 14,
    grade: 8,
    freq: 1697,
    meanings: ['Rather', 'Preferably', 'Peaceful', 'Quiet', 'Tranquility'],
    on: ['ねい'],
    kun: ['むし.ろ'],
    jlpt: 1,
    quizAnswers: ['Taste', 'Repair', 'Rather', 'Duty'],
    similars: [
      {
        kanji: '富',
        meaning: 'wealth'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '宙',
        meaning: 'mid-air'
      },
      {
        kanji: '憲',
        meaning: 'constitution'
      },
      {
        kanji: '賓',
        meaning: 'V.I.P.'
      },
      {
        kanji: '油',
        meaning: 'oil'
      },
      {
        kanji: '寛',
        meaning: 'tolerant'
      },
      {
        kanji: '悼',
        meaning: 'lament'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '宿',
        meaning: 'inn'
      }
    ]
  },
  {
    kanjiName: '猿',
    strokes: 13,
    grade: 8,
    freq: 1772,
    meanings: ['Monkey'],
    on: ['えん'],
    kun: ['さる'],
    jlpt: 1,
    quizAnswers: ['Race', 'Monkey', 'Reward For', 'Set Free'],
    similars: [
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '獄',
        meaning: 'prison'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      },
      {
        kanji: '欲',
        meaning: 'longing'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '彫',
        meaning: 'carve'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '膨',
        meaning: 'swell'
      },
      {
        kanji: '訳',
        meaning: 'translate'
      },
      {
        kanji: '表',
        meaning: 'surface'
      }
    ]
  },
  {
    kanjiName: '瞳',
    strokes: 17,
    grade: 8,
    freq: 2069,
    meanings: ['Pupil (of Eye)'],
    on: ['どう', 'とう'],
    kun: ['ひとみ'],
    jlpt: 1,
    quizAnswers: ['Change', 'Hill', 'Stop-over', 'Pupil (of Eye)']
  },
  {
    kanjiName: '碁',
    strokes: 13,
    grade: 8,
    freq: 1609,
    meanings: ['Go'],
    on: ['ご'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Go', 'Greenhouse', 'Disappear', 'Graduate'],
    similars: [
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      },
      {
        kanji: '超',
        meaning: 'transcend'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '期',
        meaning: 'period'
      },
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '磨',
        meaning: 'grind'
      },
      {
        kanji: '荷',
        meaning: 'baggage'
      },
      {
        kanji: '界',
        meaning: 'world'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      }
    ]
  },
  {
    kanjiName: '租',
    strokes: 10,
    grade: 8,
    freq: 2089,
    meanings: ['Tariff', 'Crop Tax', 'Borrowing'],
    on: ['そ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Tariff', 'Revelation', 'Wealth', 'Wretched'],
    similars: [
      {
        kanji: '粗',
        meaning: 'coarse'
      },
      {
        kanji: '査',
        meaning: 'investigate'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '組',
        meaning: 'association'
      },
      {
        kanji: '和',
        meaning: 'harmony'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '祖',
        meaning: 'ancestor'
      },
      {
        kanji: '阻',
        meaning: 'thwart'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      }
    ]
  },
  {
    kanjiName: '幽',
    strokes: 9,
    grade: 8,
    freq: 1996,
    meanings: [
      'Seclude',
      'Confine To A Room',
      'Deep',
      'Profound',
      'Secluded',
      'Faint',
      'Dark',
      'Tranquil',
      'Calm'
    ],
    on: ['ゆう'],
    kun: ['ふか.い', 'かす.か', 'くら.い', 'しろ.い'],
    jlpt: 1,
    quizAnswers: ['Exchange', 'Region', 'Seclude', 'Winter'],
    similars: [
      {
        kanji: '率',
        meaning: 'ratio'
      },
      {
        kanji: '慈',
        meaning: 'mercy'
      },
      {
        kanji: '密',
        meaning: 'secrecy'
      },
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '糸',
        meaning: 'thread'
      },
      {
        kanji: '玄',
        meaning: 'mysterious'
      },
      {
        kanji: '幾',
        meaning: 'how many'
      },
      {
        kanji: '純',
        meaning: 'genuine'
      },
      {
        kanji: '畜',
        meaning: 'livestock'
      }
    ]
  },
  {
    kanjiName: '泡',
    strokes: 8,
    grade: 8,
    freq: 1872,
    meanings: ['Bubbles', 'Foam', 'Suds', 'Froth'],
    on: ['ほう'],
    kun: ['あわ'],
    jlpt: 1,
    quizAnswers: ['Sweet', 'Dot', 'Bubbles', 'Part Of Speech'],
    similars: [
      {
        kanji: '抱',
        meaning: 'embrace'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '浄',
        meaning: 'clean'
      },
      {
        kanji: '汽',
        meaning: 'vapor'
      },
      {
        kanji: '包',
        meaning: 'wrap'
      },
      {
        kanji: '港',
        meaning: 'harbor'
      },
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '紀',
        meaning: 'chronicle'
      },
      {
        kanji: '巻',
        meaning: 'scroll'
      },
      {
        kanji: '胞',
        meaning: 'placenta'
      }
    ]
  },
  {
    kanjiName: '癖',
    strokes: 18,
    grade: 8,
    freq: 1973,
    meanings: ['Mannerism', 'Habit', 'Vice', 'Trait', 'Fault', 'Kink'],
    on: ['へき'],
    kun: ['くせ', 'くせ.に'],
    jlpt: 1,
    quizAnswers: ['Mannerism', 'Admirable', 'Esteem', 'Potency'],
    similars: [
      {
        kanji: '辞',
        meaning: 'resign'
      },
      {
        kanji: '痘',
        meaning: 'pox'
      },
      {
        kanji: '避',
        meaning: 'evade'
      },
      {
        kanji: '壁',
        meaning: 'wall'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '碑',
        meaning: 'tombstone'
      },
      {
        kanji: '宰',
        meaning: 'superintend'
      },
      {
        kanji: '掌',
        meaning: 'manipulate'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '痢',
        meaning: 'diarrhea'
      }
    ]
  },
  {
    kanjiName: '鍛',
    strokes: 17,
    grade: 8,
    freq: 1793,
    meanings: ['Forge', 'Discipline', 'Train'],
    on: ['たん'],
    kun: ['きた.える'],
    jlpt: 1,
    quizAnswers: ['Our House', 'Forge', 'Trick', 'Perish'],
    similars: [
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '錬',
        meaning: 'tempering'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '鉛',
        meaning: 'lead'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '録',
        meaning: 'record'
      },
      {
        kanji: '鈴',
        meaning: 'small bell'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      }
    ]
  },
  {
    kanjiName: '錬',
    strokes: 16,
    grade: 8,
    freq: 2221,
    meanings: ['Tempering', 'Refine', 'Drill', 'Train', 'Polish'],
    on: ['れん'],
    kun: ['ね.る'],
    jlpt: 1,
    quizAnswers: ['Tempering', 'Tin Can', 'Stinger', 'Inspect'],
    similars: [
      {
        kanji: '鎮',
        meaning: 'tranquilize'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '鎖',
        meaning: 'chain'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '鏡',
        meaning: 'mirror'
      },
      {
        kanji: '鐘',
        meaning: 'bell'
      },
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '錠',
        meaning: 'lock'
      },
      {
        kanji: '録',
        meaning: 'record'
      }
    ]
  },
  {
    kanjiName: '穂',
    strokes: 15,
    grade: 8,
    freq: 1656,
    meanings: ['Ear', 'Ear (grain)', 'Head', 'Crest (wave)'],
    on: ['すい'],
    kun: ['ほ'],
    jlpt: 1,
    quizAnswers: ['Ear', 'Scatter', 'Agreeable', 'Counter For Houses'],
    similars: [
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '憩',
        meaning: 'recess'
      },
      {
        kanji: '種',
        meaning: 'species'
      },
      {
        kanji: '博',
        meaning: 'Dr.'
      },
      {
        kanji: '億',
        meaning: 'hundred million'
      },
      {
        kanji: '恵',
        meaning: 'favor'
      },
      {
        kanji: '縛',
        meaning: 'truss'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '働',
        meaning: 'work'
      }
    ]
  },
  {
    kanjiName: '帝',
    strokes: 9,
    grade: 8,
    freq: 1276,
    meanings: ['Sovereign', 'The Emperor', 'God', 'Creator'],
    on: ['てい'],
    kun: ['みかど'],
    jlpt: 1,
    quizAnswers: ['Entwine', 'Sovereign', 'Mediate', 'Cover'],
    similars: [
      {
        kanji: '常',
        meaning: 'usual'
      },
      {
        kanji: '締',
        meaning: 'tighten'
      },
      {
        kanji: '傍',
        meaning: 'bystander'
      },
      {
        kanji: '州',
        meaning: 'state'
      },
      {
        kanji: '市',
        meaning: 'market'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '党',
        meaning: 'party'
      },
      {
        kanji: '帰',
        meaning: 'homecoming'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '端',
        meaning: 'edge'
      }
    ]
  },
  {
    kanjiName: '瞬',
    strokes: 18,
    grade: 8,
    freq: 1265,
    meanings: ['Wink', 'Blink', 'Twinkle'],
    on: ['しゅん'],
    kun: ['またた.く', 'まじろ.ぐ'],
    jlpt: 1,
    quizAnswers: ['Noon', 'Wink', 'Heroism', 'Violent'],
    similars: [
      {
        kanji: '賠',
        meaning: 'compensation'
      },
      {
        kanji: '墨',
        meaning: 'black ink'
      },
      {
        kanji: '貯',
        meaning: 'savings'
      },
      {
        kanji: '暖',
        meaning: 'warmth'
      },
      {
        kanji: '塁',
        meaning: 'bases'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '贈',
        meaning: 'presents'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '隣',
        meaning: 'neighboring'
      }
    ]
  },
  {
    kanjiName: '菊',
    strokes: 11,
    grade: 8,
    freq: 1287,
    meanings: ['Chrysanthemum'],
    on: ['きく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Time', 'View', 'Stone', 'Chrysanthemum'],
    similars: [
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      },
      {
        kanji: '菌',
        meaning: 'germ'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '葬',
        meaning: 'interment'
      },
      {
        kanji: '薬',
        meaning: 'medicine'
      },
      {
        kanji: '薪',
        meaning: 'fuel'
      },
      {
        kanji: '来',
        meaning: 'come'
      },
      {
        kanji: '病',
        meaning: 'ill'
      }
    ]
  },
  {
    kanjiName: '誇',
    strokes: 13,
    grade: 8,
    freq: 1272,
    meanings: ['Boast', 'Be Proud', 'Pride', 'Triumphantly'],
    on: ['こ'],
    kun: ['ほこ.る'],
    jlpt: 1,
    quizAnswers: ['Boast', 'Futility', 'Promote', 'Assistant'],
    similars: [
      {
        kanji: '詳',
        meaning: 'detailed'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '訟',
        meaning: 'sue'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '証',
        meaning: 'evidence'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      }
    ]
  },
  {
    kanjiName: '庄',
    strokes: 6,
    grade: 9,
    freq: 1693,
    meanings: ['Level', 'In The Country', 'Manor', 'Village', 'Hamlet'],
    on: ['しょう', 'そ', 'そう', 'ほう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Carry', 'Early', 'Level', 'You']
  },
  {
    kanjiName: '阻',
    strokes: 8,
    grade: 8,
    freq: 1280,
    meanings: ['Thwart', 'Separate From', 'Prevent', 'Obstruct', 'Deter', 'Impede'],
    on: ['そ'],
    kun: ['はば.む'],
    jlpt: 1,
    quizAnswers: ['Crop', 'Thwart', 'Hold In Arms', 'Faction'],
    similars: [
      {
        kanji: '祖',
        meaning: 'ancestor'
      },
      {
        kanji: '且',
        meaning: 'moreover'
      },
      {
        kanji: '宜',
        meaning: 'best regards'
      },
      {
        kanji: '租',
        meaning: 'tariff'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '査',
        meaning: 'investigate'
      },
      {
        kanji: '組',
        meaning: 'association'
      },
      {
        kanji: '粗',
        meaning: 'coarse'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '防',
        meaning: 'ward off'
      }
    ]
  },
  {
    kanjiName: '黙',
    strokes: 15,
    grade: 8,
    freq: 1338,
    meanings: ['Silence', 'Become Silent', 'Stop Speaking', 'Leave As Is'],
    on: ['もく', 'ぼく'],
    kun: ['だま.る', 'もだ.す'],
    jlpt: 1,
    quizAnswers: ['Silence', 'Fire', 'Memory', 'Stomach'],
    similars: [
      {
        kanji: '黒',
        meaning: 'black'
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed'
      },
      {
        kanji: '然',
        meaning: 'sort of thing'
      },
      {
        kanji: '墨',
        meaning: 'black ink'
      },
      {
        kanji: '野',
        meaning: 'plains'
      },
      {
        kanji: '映',
        meaning: 'reflect'
      },
      {
        kanji: '照',
        meaning: 'illuminate'
      },
      {
        kanji: '暴',
        meaning: 'outburst'
      },
      {
        kanji: '燃',
        meaning: 'burn'
      },
      {
        kanji: '曇',
        meaning: 'cloudy weather'
      }
    ]
  },
  {
    kanjiName: '俵',
    strokes: 10,
    grade: 5,
    freq: 1481,
    meanings: ['Bag', 'Bale', 'Sack', 'Counter For Bags'],
    on: ['ひょう'],
    kun: ['たわら'],
    jlpt: 1,
    quizAnswers: ['Do Wrong', 'Ancestor', 'Word', 'Bag'],
    similars: [
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '袋',
        meaning: 'sack'
      },
      {
        kanji: '装',
        meaning: 'attire'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '猿',
        meaning: 'monkey'
      },
      {
        kanji: '娠',
        meaning: 'with child'
      },
      {
        kanji: '麦',
        meaning: 'barley'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '乗',
        meaning: 'ride'
      }
    ]
  },
  {
    kanjiName: '架',
    strokes: 9,
    grade: 8,
    freq: 1555,
    meanings: ['Erect', 'Frame', 'Mount', 'Support', 'Shelf', 'Construct'],
    on: ['か'],
    kun: ['か.ける', 'か.かる'],
    jlpt: 1,
    quizAnswers: ['Achieve', 'Low', 'Sing', 'Erect'],
    similars: [
      {
        kanji: '保',
        meaning: 'protect'
      },
      {
        kanji: '味',
        meaning: 'flavor'
      },
      {
        kanji: '硬',
        meaning: 'stiff'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '休',
        meaning: 'rest'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '加',
        meaning: 'add'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '林',
        meaning: 'grove'
      }
    ]
  },
  {
    kanjiName: '砕',
    strokes: 9,
    grade: 8,
    freq: 1579,
    meanings: ['Smash', 'Break', 'Crush', 'Familiar', 'Popular'],
    on: ['さい'],
    kun: ['くだ.く', 'くだ.ける'],
    jlpt: 1,
    quizAnswers: ['Autumn', 'Smash', 'Waist', 'Printing Block'],
    similars: [
      {
        kanji: '砲',
        meaning: 'cannon'
      },
      {
        kanji: '研',
        meaning: 'polish'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '破',
        meaning: 'rend'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '碑',
        meaning: 'tombstone'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      }
    ]
  },
  {
    kanjiName: '粘',
    strokes: 11,
    grade: 8,
    freq: 1410,
    meanings: ['Sticky', 'Glutinous', 'Greasy', 'Persevere'],
    on: ['ねん'],
    kun: ['ねば.る'],
    jlpt: 1,
    quizAnswers: ['Sticky', 'Important', 'Rare', 'War'],
    similars: [
      {
        kanji: '和',
        meaning: 'harmony'
      },
      {
        kanji: '枯',
        meaning: 'wither'
      },
      {
        kanji: '粗',
        meaning: 'coarse'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '店',
        meaning: 'store'
      },
      {
        kanji: '知',
        meaning: 'know'
      },
      {
        kanji: '糖',
        meaning: 'sugar'
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      }
    ]
  },
  {
    kanjiName: '欺',
    strokes: 12,
    grade: 8,
    freq: 1541,
    meanings: ['Deceit', 'Cheat', 'Delude'],
    on: ['ぎ'],
    kun: ['あざむ.く'],
    jlpt: 1,
    quizAnswers: ['Circumference', 'Deceit', 'Sense', 'One'],
    similars: [
      {
        kanji: '期',
        meaning: 'period'
      },
      {
        kanji: '勘',
        meaning: 'intuition'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      },
      {
        kanji: '碁',
        meaning: 'Go'
      },
      {
        kanji: '農',
        meaning: 'agriculture'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      },
      {
        kanji: '甚',
        meaning: 'tremendously'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '飲',
        meaning: 'drink'
      },
      {
        kanji: '敢',
        meaning: 'daring'
      }
    ]
  },
  {
    kanjiName: '詐',
    strokes: 12,
    grade: 8,
    freq: 1511,
    meanings: ['Lie', 'Falsehood', 'Deceive', 'Pretend'],
    on: ['さ'],
    kun: ['いつわ.る'],
    jlpt: 1,
    quizAnswers: ['Inlet', 'Lie', 'Compete With', 'Lead'],
    similars: [
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '詞',
        meaning: 'part of speech'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '詔',
        meaning: 'imperial edict'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      }
    ]
  },
  {
    kanjiName: '霧',
    strokes: 19,
    grade: 8,
    freq: 1747,
    meanings: ['Fog', 'Mist'],
    on: ['む', 'ぼう', 'ぶ'],
    kun: ['きり'],
    jlpt: 1,
    quizAnswers: ['Fog', 'Power', 'Dispute', 'Bird'],
    similars: [
      {
        kanji: '雰',
        meaning: 'atmosphere'
      },
      {
        kanji: '務',
        meaning: 'task'
      },
      {
        kanji: '震',
        meaning: 'quake'
      },
      {
        kanji: '霊',
        meaning: 'spirits'
      },
      {
        kanji: '露',
        meaning: 'dew'
      },
      {
        kanji: '雲',
        meaning: 'cloud'
      },
      {
        kanji: '雪',
        meaning: 'snow'
      },
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '霜',
        meaning: 'frost'
      },
      {
        kanji: '零',
        meaning: 'zero'
      }
    ]
  },
  {
    kanjiName: '柳',
    strokes: 9,
    grade: 8,
    freq: 1169,
    meanings: ['Willow'],
    on: ['りゅう'],
    kun: ['やなぎ'],
    jlpt: 1,
    quizAnswers: ['Blue', 'Willow', 'Sense', 'Little'],
    similars: [
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '梅',
        meaning: 'plum'
      },
      {
        kanji: '松',
        meaning: 'pine tree'
      },
      {
        kanji: '協',
        meaning: 'co-'
      },
      {
        kanji: '抑',
        meaning: 'repress'
      },
      {
        kanji: '机',
        meaning: 'desk'
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls'
      }
    ]
  },
  {
    kanjiName: '伊',
    strokes: 6,
    grade: 9,
    freq: 703,
    meanings: ['Italy', 'That One'],
    on: ['い'],
    kun: ['かれ'],
    jlpt: 1,
    quizAnswers: ['Vietnam', 'Italy', 'Inquire', 'Cancel']
  },
  {
    kanjiName: '佐',
    strokes: 7,
    grade: 8,
    freq: 474,
    meanings: ['Assistant', 'Help'],
    on: ['さ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Expensive', 'Knit', 'Assistant', 'Lost'],
    similars: [
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '佳',
        meaning: 'excellent'
      },
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '圧',
        meaning: 'pressure'
      },
      {
        kanji: '左',
        meaning: 'left'
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice'
      },
      {
        kanji: '垂',
        meaning: 'droop'
      },
      {
        kanji: '侮',
        meaning: 'scorn'
      },
      {
        kanji: '径',
        meaning: 'diameter'
      },
      {
        kanji: '征',
        meaning: 'subjugate'
      }
    ]
  },
  {
    kanjiName: '尺',
    strokes: 4,
    grade: 6,
    freq: 1940,
    meanings: ['Shaku', 'Japanese Foot', 'Measure', 'Scale', 'Rule'],
    on: ['しゃく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Bow', 'Marketing', 'Append', 'Shaku'],
    similars: [
      {
        kanji: '尽',
        meaning: 'exhaust'
      },
      {
        kanji: '史',
        meaning: 'history'
      },
      {
        kanji: '尼',
        meaning: 'nun'
      },
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '択',
        meaning: 'choose'
      },
      {
        kanji: '沢',
        meaning: 'swamp'
      },
      {
        kanji: '尿',
        meaning: 'urine'
      },
      {
        kanji: '木',
        meaning: 'tree'
      },
      {
        kanji: '天',
        meaning: 'heavens'
      },
      {
        kanji: '大',
        meaning: 'large'
      }
    ]
  },
  {
    kanjiName: '哀',
    strokes: 9,
    grade: 8,
    freq: 1715,
    meanings: ['Pathetic', 'Grief', 'Sorrow', 'Pathos', 'Pity', 'Sympathize'],
    on: ['あい'],
    kun: ['あわ.れ', 'あわ.れむ', 'かな.しい'],
    jlpt: 1,
    quizAnswers: ['How Long', 'Replace', 'Pathetic', 'No'],
    similars: [
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '衰',
        meaning: 'decline'
      },
      {
        kanji: '猿',
        meaning: 'monkey'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '京',
        meaning: 'capital'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '衣',
        meaning: 'garment'
      },
      {
        kanji: '吹',
        meaning: 'blow'
      },
      {
        kanji: '褒',
        meaning: 'praise'
      }
    ]
  },
  {
    kanjiName: '唇',
    strokes: 10,
    grade: 8,
    freq: 1992,
    meanings: ['Lips'],
    on: ['しん'],
    kun: ['くちびる'],
    jlpt: 1,
    quizAnswers: ['Reputation', 'Continually', 'Another', 'Lips'],
    similars: [
      {
        kanji: '知',
        meaning: 'know'
      },
      {
        kanji: '辱',
        meaning: 'embarrass'
      },
      {
        kanji: '啓',
        meaning: 'disclose'
      },
      {
        kanji: '俗',
        meaning: 'vulgar'
      },
      {
        kanji: '谷',
        meaning: 'valley'
      },
      {
        kanji: '君',
        meaning: 'mister'
      },
      {
        kanji: '和',
        meaning: 'harmony'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      }
    ]
  },
  {
    kanjiName: '塀',
    strokes: 12,
    grade: 8,
    freq: 1991,
    meanings: ['Fence', 'Wall', '(kokuji)'],
    on: ['へい', 'べい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Fence', 'Dilute (acid)', 'Shorten', 'Weak Point'],
    similars: [
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '堀',
        meaning: 'ditch'
      },
      {
        kanji: '南',
        meaning: 'south'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      },
      {
        kanji: '所',
        meaning: 'place'
      },
      {
        kanji: '葬',
        meaning: 'interment'
      },
      {
        kanji: '坪',
        meaning: 'two-mat area'
      },
      {
        kanji: '辞',
        meaning: 'resign'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '戻',
        meaning: 're-'
      }
    ]
  },
  {
    kanjiName: '墜',
    strokes: 15,
    grade: 8,
    freq: 1466,
    meanings: ['Crash', 'Fall (down)'],
    on: ['つい'],
    kun: ['お.ちる', 'お.つ'],
    jlpt: 1,
    quizAnswers: ['Fast', 'Hate', 'Make A Deal', 'Crash'],
    similars: [
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '隣',
        meaning: 'neighboring'
      },
      {
        kanji: '陸',
        meaning: 'land'
      },
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '堕',
        meaning: 'degenerate'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '遂',
        meaning: 'consummate'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      },
      {
        kanji: '嫁',
        meaning: 'marry into'
      },
      {
        kanji: '座',
        meaning: 'squat'
      }
    ]
  },
  {
    kanjiName: '如',
    strokes: 6,
    grade: 8,
    freq: 1704,
    meanings: ['Likeness', 'Like', 'Such As', 'As If', 'Better', 'Best', 'Equal'],
    on: ['じょ', 'にょ'],
    kun: ['ごと.し'],
    jlpt: 1,
    quizAnswers: ['In', 'School', 'Likeness', 'Exorcise'],
    similars: [
      {
        kanji: '始',
        meaning: 'commence'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '句',
        meaning: 'phrase'
      },
      {
        kanji: '石',
        meaning: 'stone'
      },
      {
        kanji: '加',
        meaning: 'add'
      },
      {
        kanji: '召',
        meaning: 'seduce'
      },
      {
        kanji: '娯',
        meaning: 'recreation'
      },
      {
        kanji: '姫',
        meaning: 'princess'
      },
      {
        kanji: '谷',
        meaning: 'valley'
      }
    ]
  },
  {
    kanjiName: '婆',
    strokes: 11,
    grade: 8,
    freq: 2435,
    meanings: ['Old Woman', 'Grandma', 'Wet Nurse'],
    on: ['ば'],
    kun: ['ばば', 'ばあ'],
    jlpt: 1,
    quizAnswers: ['Rave', 'Old Woman', 'Decimal Point', 'Bride'],
    similars: [
      {
        kanji: '波',
        meaning: 'waves'
      },
      {
        kanji: '姿',
        meaning: 'figure'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '浜',
        meaning: 'seacoast'
      },
      {
        kanji: '披',
        meaning: 'expose'
      },
      {
        kanji: '泣',
        meaning: 'cry'
      },
      {
        kanji: '没',
        meaning: 'drown'
      },
      {
        kanji: '渋',
        meaning: 'astringent'
      },
      {
        kanji: '深',
        meaning: 'deep'
      },
      {
        kanji: '涯',
        meaning: 'horizon'
      }
    ]
  },
  {
    kanjiName: '幣',
    strokes: 15,
    grade: 8,
    freq: 1803,
    meanings: [
      'Cash',
      'Bad Habit',
      'Humble Prefix',
      'Gift',
      'Shinto Offerings Of Cloth',
      'Rope',
      'Cut Paper'
    ],
    on: ['へい'],
    kun: ['ぬさ'],
    jlpt: 1,
    quizAnswers: ['Cash', 'Counter For Small Animals', 'Statue', 'Pattern After'],
    similars: [
      {
        kanji: '弊',
        meaning: 'abuse'
      },
      {
        kanji: '裕',
        meaning: 'abundant'
      },
      {
        kanji: '幕',
        meaning: 'curtain'
      },
      {
        kanji: '俗',
        meaning: 'vulgar'
      },
      {
        kanji: '炭',
        meaning: 'charcoal'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '修',
        meaning: 'discipline'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '常',
        meaning: 'usual'
      }
    ]
  },
  {
    kanjiName: '恨',
    strokes: 9,
    grade: 8,
    freq: 1877,
    meanings: ['Regret', 'Bear A Grudge', 'Resentment', 'Malice', 'Hatred'],
    on: ['こん'],
    kun: ['うら.む', 'うら.めしい'],
    jlpt: 1,
    quizAnswers: ['Rosin', 'Regret', 'Verification', 'Hurl'],
    similars: [
      {
        kanji: '浪',
        meaning: 'wandering'
      },
      {
        kanji: '限',
        meaning: 'limit'
      },
      {
        kanji: '良',
        meaning: 'good'
      },
      {
        kanji: '食',
        meaning: 'eat'
      },
      {
        kanji: '混',
        meaning: 'mix'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '慨',
        meaning: 'rue'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      },
      {
        kanji: '根',
        meaning: 'root'
      }
    ]
  },
  {
    kanjiName: '憩',
    strokes: 16,
    grade: 8,
    freq: 1731,
    meanings: ['Recess', 'Rest', 'Relax', 'Repose'],
    on: ['けい'],
    kun: ['いこ.い', 'いこ.う'],
    jlpt: 1,
    quizAnswers: ['Counter For Songs And Poems', 'Impregnable Position', 'Earth', 'Recess'],
    similars: [
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '億',
        meaning: 'hundred million'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '碑',
        meaning: 'tombstone'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '賀',
        meaning: 'congratulations'
      }
    ]
  },
  {
    kanjiName: '扇',
    strokes: 10,
    grade: 8,
    freq: 1805,
    meanings: ['Fan', 'Folding Fan'],
    on: ['せん'],
    kun: ['おうぎ'],
    jlpt: 1,
    quizAnswers: ['Performer', 'Portrait', 'Fan', 'Courage'],
    similars: [
      {
        kanji: '翁',
        meaning: 'venerable old man'
      },
      {
        kanji: '羽',
        meaning: 'feathers'
      },
      {
        kanji: '均',
        meaning: 'level'
      },
      {
        kanji: '扉',
        meaning: 'front door'
      },
      {
        kanji: '遍',
        meaning: 'everywhere'
      },
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '所',
        meaning: 'place'
      },
      {
        kanji: '協',
        meaning: 'co-'
      },
      {
        kanji: '局',
        meaning: 'bureau'
      }
    ]
  },
  {
    kanjiName: '扉',
    strokes: 12,
    grade: 8,
    freq: 1866,
    meanings: ['Front Door', 'Title Page', 'Front Page'],
    on: ['ひ'],
    kun: ['とびら'],
    jlpt: 1,
    quizAnswers: ['Front Door', 'General', 'System', 'Full Moon'],
    similars: [
      {
        kanji: '排',
        meaning: 'repudiate'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '非',
        meaning: 'un-'
      },
      {
        kanji: '俳',
        meaning: 'haiku'
      },
      {
        kanji: '罪',
        meaning: 'guilt'
      },
      {
        kanji: '啓',
        meaning: 'disclose'
      },
      {
        kanji: '所',
        meaning: 'place'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '居',
        meaning: 'reside'
      }
    ]
  },
  {
    kanjiName: '挿',
    strokes: 10,
    grade: 8,
    freq: 1908,
    meanings: ['Insert', 'Put In', 'Graft', 'Wear (sword)'],
    on: ['そう'],
    kun: ['さ.す', 'はさ.む'],
    jlpt: 1,
    quizAnswers: ['Dept', 'Insert', 'Language', 'A Sink'],
    similars: [
      {
        kanji: '押',
        meaning: 'push'
      },
      {
        kanji: '拍',
        meaning: 'clap'
      },
      {
        kanji: '指',
        meaning: 'finger'
      },
      {
        kanji: '揮',
        meaning: 'brandish'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '捕',
        meaning: 'catch'
      },
      {
        kanji: '措',
        meaning: 'set aside'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      }
    ]
  },
  {
    kanjiName: '掌',
    strokes: 12,
    grade: 8,
    freq: 1757,
    meanings: ['Manipulate', 'Rule', 'Administer', 'Conduct', 'Palm Of Hand'],
    on: ['しょう'],
    kun: ['てのひら', 'たなごころ'],
    jlpt: 1,
    quizAnswers: ['Business', 'Distant', 'Manipulate', 'Bright'],
    similars: [
      {
        kanji: '堂',
        meaning: 'public chamber'
      },
      {
        kanji: '党',
        meaning: 'party'
      },
      {
        kanji: '営',
        meaning: 'camp'
      },
      {
        kanji: '常',
        meaning: 'usual'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '宮',
        meaning: 'Shinto shrine'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '摩',
        meaning: 'chafe'
      },
      {
        kanji: '敵',
        meaning: 'enemy'
      },
      {
        kanji: '癖',
        meaning: 'mannerism'
      }
    ]
  },
  {
    kanjiName: '炊',
    strokes: 8,
    grade: 8,
    freq: 1777,
    meanings: ['Cook', 'Boil'],
    on: ['すい'],
    kun: ['た.く', '-だ.き'],
    jlpt: 1,
    quizAnswers: ['Years Old', 'Cook', 'Report', 'Discard'],
    similars: [
      {
        kanji: '炎',
        meaning: 'inflammation'
      },
      {
        kanji: '次',
        meaning: 'next'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '欧',
        meaning: 'Europe'
      },
      {
        kanji: '派',
        meaning: 'faction'
      },
      {
        kanji: '欲',
        meaning: 'longing'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      },
      {
        kanji: '釈',
        meaning: 'explanation'
      },
      {
        kanji: '数',
        meaning: 'number'
      },
      {
        kanji: '灯',
        meaning: 'lamp'
      }
    ]
  },
  {
    kanjiName: '爽',
    strokes: 11,
    grade: 8,
    freq: 2333,
    meanings: ['Refreshing', 'Bracing', 'Resonant', 'Sweet', 'Clear'],
    on: ['そう'],
    kun: ['あき.らか', 'さわ.やか', 'たがう'],
    jlpt: 1,
    quizAnswers: ['Route', 'Fold', 'Refreshing', 'Professional']
  },
  {
    kanjiName: '瞭',
    strokes: 17,
    grade: 8,
    freq: null,
    meanings: ['Clear'],
    on: ['りょう'],
    kun: ['あきらか'],
    jlpt: 1,
    quizAnswers: ['Affair', 'Age', 'Floor', 'Clear']
  },
  {
    kanjiName: '胴',
    strokes: 10,
    grade: 8,
    freq: 1904,
    meanings: ['Trunk', 'Torso', 'Hull (ship)', 'Hub Of Wheel'],
    on: ['どう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Harm', 'Trunk', 'Damp', 'Protect'],
    similars: [
      {
        kanji: '胎',
        meaning: 'womb'
      },
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '向',
        meaning: 'yonder'
      },
      {
        kanji: '肺',
        meaning: 'lungs'
      },
      {
        kanji: '同',
        meaning: 'same'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '洞',
        meaning: 'den'
      },
      {
        kanji: '伺',
        meaning: 'pay respects'
      },
      {
        kanji: '筒',
        meaning: 'cylinder'
      },
      {
        kanji: '脱',
        meaning: 'undress'
      }
    ]
  },
  {
    kanjiName: '虹',
    strokes: 9,
    grade: 8,
    freq: 2110,
    meanings: ['Rainbow'],
    on: ['こう'],
    kun: ['にじ'],
    jlpt: 1,
    quizAnswers: ['Rainbow', 'Acquiesce', 'Same', 'Result In']
  },
  {
    kanjiName: '帳',
    strokes: 11,
    grade: 3,
    freq: 1459,
    meanings: ['Notebook', 'Account Book', 'Album', 'Curtain', 'Veil', 'Net', 'Tent'],
    on: ['ちょう'],
    kun: ['とばり'],
    jlpt: 1,
    quizAnswers: ['Seal', 'Notebook', 'Look For', 'Therefore'],
    similars: [
      {
        kanji: '脹',
        meaning: 'dilate'
      },
      {
        kanji: '長',
        meaning: 'long'
      },
      {
        kanji: '張',
        meaning: 'counter for bows & stringed instruments'
      },
      {
        kanji: '集',
        meaning: 'gather'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      },
      {
        kanji: '歓',
        meaning: 'delight'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '農',
        meaning: 'agriculture'
      },
      {
        kanji: '味',
        meaning: 'flavor'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      }
    ]
  },
  {
    kanjiName: '蚊',
    strokes: 10,
    grade: 8,
    freq: 2121,
    meanings: ['Mosquito'],
    on: ['ぶん'],
    kun: ['か'],
    jlpt: 1,
    quizAnswers: ['Escort', 'Occupation', 'Battle', 'Mosquito'],
    similars: [
      {
        kanji: '蛇',
        meaning: 'snake'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      },
      {
        kanji: '虫',
        meaning: 'insect'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '跡',
        meaning: 'tracks'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '喚',
        meaning: 'yell'
      },
      {
        kanji: '唆',
        meaning: 'tempt'
      },
      {
        kanji: '呈',
        meaning: 'display'
      }
    ]
  },
  {
    kanjiName: '蛇',
    strokes: 11,
    grade: 8,
    freq: 1721,
    meanings: ['Snake', 'Serpent', 'Hard Drinker'],
    on: ['じゃ', 'だ', 'い', 'や'],
    kun: ['へび'],
    jlpt: 1,
    quizAnswers: ['Thought', 'Snake', 'Be Associated With', 'Bravery'],
    similars: [
      {
        kanji: '蚊',
        meaning: 'mosquito'
      },
      {
        kanji: '虫',
        meaning: 'insect'
      },
      {
        kanji: '跳',
        meaning: 'hop'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '跡',
        meaning: 'tracks'
      },
      {
        kanji: '売',
        meaning: 'sell'
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)'
      },
      {
        kanji: '喝',
        meaning: 'hoarse'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      }
    ]
  },
  {
    kanjiName: '辱',
    strokes: 10,
    grade: 8,
    freq: 1769,
    meanings: ['Embarrass', 'Humiliate', 'Shame'],
    on: ['じょく'],
    kun: ['はずかし.める'],
    jlpt: 1,
    quizAnswers: ['Exceed', 'Practice', 'Embarrass', 'Bid'],
    similars: [
      {
        kanji: '唇',
        meaning: 'lips'
      },
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '尉',
        meaning: 'military officer'
      },
      {
        kanji: '奉',
        meaning: 'observance'
      },
      {
        kanji: '封',
        meaning: 'seal'
      },
      {
        kanji: '冠',
        meaning: 'crown'
      },
      {
        kanji: '棒',
        meaning: 'rod'
      },
      {
        kanji: '禁',
        meaning: 'prohibition'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '表',
        meaning: 'surface'
      }
    ]
  },
  {
    kanjiName: '鉢',
    strokes: 13,
    grade: 8,
    freq: 1890,
    meanings: ['Bowl', 'Rice Tub', 'Pot', 'Crown'],
    on: ['はち', 'はつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Measure (ruler)', 'Settlement', 'Bowl', 'Chief'],
    similars: [
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      },
      {
        kanji: '錬',
        meaning: 'tempering'
      },
      {
        kanji: '鋳',
        meaning: 'casting'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      }
    ]
  },
  {
    kanjiName: '霜',
    strokes: 17,
    grade: 8,
    freq: 2151,
    meanings: ['Frost'],
    on: ['そう'],
    kun: ['しも'],
    jlpt: 1,
    quizAnswers: ['Bed', 'Frost', 'Supplement', 'Change'],
    similars: [
      {
        kanji: '雷',
        meaning: 'thunder'
      },
      {
        kanji: '電',
        meaning: 'electricity'
      },
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '震',
        meaning: 'quake'
      },
      {
        kanji: '雲',
        meaning: 'cloud'
      },
      {
        kanji: '藩',
        meaning: 'clan'
      },
      {
        kanji: '箱',
        meaning: 'box'
      },
      {
        kanji: '零',
        meaning: 'zero'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      },
      {
        kanji: '雰',
        meaning: 'atmosphere'
      }
    ]
  },
  {
    kanjiName: '飢',
    strokes: 10,
    grade: 8,
    freq: 1659,
    meanings: ['Hungry', 'Starve'],
    on: ['き'],
    kun: ['う.える'],
    jlpt: 1,
    quizAnswers: ['Hungry', 'Familiarity', 'Finish', 'Pasture'],
    similars: [
      {
        kanji: '飲',
        meaning: 'drink'
      },
      {
        kanji: '飯',
        meaning: 'meal'
      },
      {
        kanji: '食',
        meaning: 'eat'
      },
      {
        kanji: '飽',
        meaning: 'sated'
      },
      {
        kanji: '飾',
        meaning: 'decorate'
      },
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      },
      {
        kanji: '良',
        meaning: 'good'
      },
      {
        kanji: '餓',
        meaning: 'starve'
      },
      {
        kanji: '恨',
        meaning: 'regret'
      }
    ]
  },
  {
    kanjiName: '餓',
    strokes: 15,
    grade: 8,
    freq: 1754,
    meanings: ['Starve', 'Hungry', 'Thirst'],
    on: ['が'],
    kun: ['う.える'],
    jlpt: 1,
    quizAnswers: ['Chronicle', 'Starve', 'Die', 'Include'],
    similars: [
      {
        kanji: '飲',
        meaning: 'drink'
      },
      {
        kanji: '飾',
        meaning: 'decorate'
      },
      {
        kanji: '飯',
        meaning: 'meal'
      },
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '飽',
        meaning: 'sated'
      },
      {
        kanji: '飢',
        meaning: 'hungry'
      },
      {
        kanji: '儀',
        meaning: 'ceremony'
      },
      {
        kanji: '射',
        meaning: 'shoot'
      },
      {
        kanji: '義',
        meaning: 'righteousness'
      },
      {
        kanji: '犠',
        meaning: 'sacrifice'
      }
    ]
  },
  {
    kanjiName: '迅',
    strokes: 6,
    grade: 8,
    freq: 1888,
    meanings: ['Swift', 'Fast'],
    on: ['じん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Domestic Fowl And Animals', 'Swift', 'Launch Into', 'Get Up'],
    similars: [
      {
        kanji: '近',
        meaning: 'near'
      },
      {
        kanji: '迎',
        meaning: 'welcome'
      },
      {
        kanji: '迷',
        meaning: 'astray'
      },
      {
        kanji: '逆',
        meaning: 'inverted'
      },
      {
        kanji: '下',
        meaning: 'below'
      },
      {
        kanji: '巡',
        meaning: 'patrol'
      },
      {
        kanji: '述',
        meaning: 'mention'
      },
      {
        kanji: '辺',
        meaning: 'environs'
      },
      {
        kanji: '逓',
        meaning: 'relay'
      },
      {
        kanji: '込',
        meaning: 'crowded'
      }
    ]
  },
  {
    kanjiName: '騎',
    strokes: 18,
    grade: 8,
    freq: 1696,
    meanings: ['Equestrian', 'Riding On Horses', 'Counter For Equestrians'],
    on: ['き'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Equestrian', 'Temperament', 'Epoch', '10**40'],
    similars: [
      {
        kanji: '験',
        meaning: 'verification'
      },
      {
        kanji: '駆',
        meaning: 'drive'
      },
      {
        kanji: '駄',
        meaning: 'burdensome'
      },
      {
        kanji: '駐',
        meaning: 'stop-over'
      },
      {
        kanji: '騒',
        meaning: 'boisterous'
      },
      {
        kanji: '駅',
        meaning: 'station'
      },
      {
        kanji: '寄',
        meaning: 'draw near'
      },
      {
        kanji: '馬',
        meaning: 'horse'
      },
      {
        kanji: '崎',
        meaning: 'promontory'
      },
      {
        kanji: '痴',
        meaning: 'stupid'
      }
    ]
  },
  {
    kanjiName: '蓄',
    strokes: 13,
    grade: 8,
    freq: 1260,
    meanings: ['Amass', 'Raise', 'Hoard', 'Store'],
    on: ['ちく'],
    kun: ['たくわ.える'],
    jlpt: 1,
    quizAnswers: ['Volume', 'Favor', 'Timber', 'Amass'],
    similars: [
      {
        kanji: '畜',
        meaning: 'livestock'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '苗',
        meaning: 'seedling'
      },
      {
        kanji: '著',
        meaning: 'renowned'
      },
      {
        kanji: '富',
        meaning: 'wealth'
      },
      {
        kanji: '雷',
        meaning: 'thunder'
      },
      {
        kanji: '者',
        meaning: 'someone'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '描',
        meaning: 'sketch'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      }
    ]
  },
  {
    kanjiName: '尽',
    strokes: 6,
    grade: 8,
    freq: 1234,
    meanings: ['Exhaust', 'Use Up', 'Run Out Of', 'Deplete', 'Befriend', 'Serve'],
    on: ['じん', 'さん'],
    kun: [
      'つ.くす',
      '-つ.くす',
      '-づ.くし',
      '-つ.く',
      '-づ.く',
      '-ず.く',
      'つ.きる',
      'つ.かす',
      'さかづき',
      'ことごと.く',
      'つか',
      'つき'
    ],
    jlpt: 1,
    quizAnswers: ['Take Part In', 'Counter For Years', 'Floor', 'Exhaust'],
    similars: [
      {
        kanji: '尺',
        meaning: 'shaku'
      },
      {
        kanji: '冬',
        meaning: 'winter'
      },
      {
        kanji: '犬',
        meaning: 'dog'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '尼',
        meaning: 'nun'
      },
      {
        kanji: '昼',
        meaning: 'daytime'
      },
      {
        kanji: '屋',
        meaning: 'roof'
      },
      {
        kanji: '吟',
        meaning: 'versify'
      },
      {
        kanji: '尿',
        meaning: 'urine'
      },
      {
        kanji: '局',
        meaning: 'bureau'
      }
    ]
  },
  {
    kanjiName: '彩',
    strokes: 11,
    grade: 8,
    freq: 1251,
    meanings: ['Coloring', 'Paint', 'Makeup'],
    on: ['さい'],
    kun: ['いろど.る'],
    jlpt: 1,
    quizAnswers: ['Cloud', 'Juice', 'Luck', 'Coloring'],
    similars: [
      {
        kanji: '奥',
        meaning: 'heart'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '粉',
        meaning: 'flour'
      },
      {
        kanji: '修',
        meaning: 'discipline'
      },
      {
        kanji: '釈',
        meaning: 'explanation'
      },
      {
        kanji: '新',
        meaning: 'new'
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '断',
        meaning: 'severance'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      }
    ]
  },
  {
    kanjiName: '憶',
    strokes: 16,
    grade: 8,
    freq: 1324,
    meanings: ['Recollection', 'Think', 'Remember'],
    on: ['おく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Believe', 'Recollection', 'Discard', 'Report'],
    similars: [
      {
        kanji: '億',
        meaning: 'hundred million'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '滝',
        meaning: 'waterfall'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '織',
        meaning: 'weave'
      },
      {
        kanji: '識',
        meaning: 'discriminating'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '普',
        meaning: 'universal'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '複',
        meaning: 'duplicate'
      }
    ]
  },
  {
    kanjiName: '耐',
    strokes: 9,
    grade: 8,
    freq: 1295,
    meanings: ['-proof', 'Enduring'],
    on: ['たい'],
    kun: ['た.える'],
    jlpt: 1,
    quizAnswers: ['-proof', 'Plane', 'Flock', 'Arms'],
    similars: [
      {
        kanji: '制',
        meaning: 'system'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '侍',
        meaning: 'waiter'
      },
      {
        kanji: '冊',
        meaning: 'tome'
      },
      {
        kanji: '待',
        meaning: 'wait'
      },
      {
        kanji: '附',
        meaning: 'affixed'
      },
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '刷',
        meaning: 'printing'
      },
      {
        kanji: '雨',
        meaning: 'rain'
      },
      {
        kanji: '付',
        meaning: 'adhere'
      }
    ]
  },
  {
    kanjiName: '輝',
    strokes: 15,
    grade: 8,
    freq: 1259,
    meanings: ['Radiance', 'Shine', 'Sparkle', 'Gleam', 'Twinkle'],
    on: ['き'],
    kun: ['かがや.く'],
    jlpt: 1,
    quizAnswers: ['Happiness', 'Record', 'Fold', 'Radiance'],
    similars: [
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '揮',
        meaning: 'brandish'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '普',
        meaning: 'universal'
      },
      {
        kanji: '顔',
        meaning: 'face'
      },
      {
        kanji: '弾',
        meaning: 'bullet'
      },
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      }
    ]
  },
  {
    kanjiName: '脅',
    strokes: 10,
    grade: 8,
    freq: 1183,
    meanings: ['Threaten', 'Coerce'],
    on: ['きょう'],
    kun: ['おびや.かす', 'おど.す', 'おど.かす'],
    jlpt: 1,
    quizAnswers: ['Emit', 'Full', 'Threaten', 'Impossible'],
    similars: [
      {
        kanji: '硝',
        meaning: 'nitrate'
      },
      {
        kanji: '消',
        meaning: 'extinguish'
      },
      {
        kanji: '婿',
        meaning: 'bridegroom'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '背',
        meaning: 'stature'
      },
      {
        kanji: '宵',
        meaning: 'wee hours'
      },
      {
        kanji: '有',
        meaning: 'possess'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '賄',
        meaning: 'bribe'
      },
      {
        kanji: '習',
        meaning: 'learn'
      }
    ]
  },
  {
    kanjiName: '麻',
    strokes: 11,
    grade: 8,
    freq: 1142,
    meanings: ['Hemp', 'Flax', 'Numb'],
    on: ['ま', 'まあ'],
    kun: ['あさ'],
    jlpt: 1,
    quizAnswers: ['Hemp', 'Zero', 'Faith', 'Degrees'],
    similars: [
      {
        kanji: '摩',
        meaning: 'chafe'
      },
      {
        kanji: '磨',
        meaning: 'grind'
      },
      {
        kanji: '森',
        meaning: 'forest'
      },
      {
        kanji: '款',
        meaning: 'goodwill'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '床',
        meaning: 'bed'
      },
      {
        kanji: '棄',
        meaning: 'abandon'
      }
    ]
  },
  {
    kanjiName: '培',
    strokes: 11,
    grade: 8,
    freq: 1431,
    meanings: ['Cultivate', 'Foster'],
    on: ['ばい'],
    kun: ['つちか.う'],
    jlpt: 1,
    quizAnswers: ['Inn', 'Sharpen', 'Cultivate', 'Discern'],
    similars: [
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '坪',
        meaning: 'two-mat area'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '陪',
        meaning: 'obeisance'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      },
      {
        kanji: '喜',
        meaning: 'rejoice'
      },
      {
        kanji: '嫡',
        meaning: 'legitimate wife'
      },
      {
        kanji: '摘',
        meaning: 'pinch'
      },
      {
        kanji: '境',
        meaning: 'boundary'
      },
      {
        kanji: '苦',
        meaning: 'suffering'
      }
    ]
  },
  {
    kanjiName: '悔',
    strokes: 9,
    grade: 8,
    freq: 1460,
    meanings: ['Repent', 'Regret'],
    on: ['かい'],
    kun: ['く.いる', 'く.やむ', 'くや.しい'],
    jlpt: 1,
    quizAnswers: ['Rent', 'Fold', 'Repent', 'Home'],
    similars: [
      {
        kanji: '海',
        meaning: 'sea'
      },
      {
        kanji: '侮',
        meaning: 'scorn'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '毎',
        meaning: 'every'
      },
      {
        kanji: '怖',
        meaning: 'dreadful'
      },
      {
        kanji: '社',
        meaning: 'company'
      },
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '怪',
        meaning: 'suspicious'
      },
      {
        kanji: '涯',
        meaning: 'horizon'
      }
    ]
  },
  {
    kanjiName: '遂',
    strokes: 12,
    grade: 8,
    freq: 1423,
    meanings: ['Consummate', 'Accomplish', 'Attain', 'Commit (suicide)'],
    on: ['すい'],
    kun: ['と.げる', 'つい.に'],
    jlpt: 1,
    quizAnswers: ['Manner', 'Invariably', 'Consummate', 'Equal'],
    similars: [
      {
        kanji: '逐',
        meaning: 'pursue'
      },
      {
        kanji: '送',
        meaning: 'escort'
      },
      {
        kanji: '迷',
        meaning: 'astray'
      },
      {
        kanji: '逆',
        meaning: 'inverted'
      },
      {
        kanji: '迭',
        meaning: 'transfer'
      },
      {
        kanji: '透',
        meaning: 'transparent'
      },
      {
        kanji: '道',
        meaning: 'road-way'
      },
      {
        kanji: '遠',
        meaning: 'distant'
      },
      {
        kanji: '墜',
        meaning: 'crash'
      },
      {
        kanji: '逮',
        meaning: 'apprehend'
      }
    ]
  },
  {
    kanjiName: '班',
    strokes: 10,
    grade: 6,
    freq: 1592,
    meanings: ['Squad', 'Corps', 'Unit', 'Group'],
    on: ['はん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Obey', 'Squad', 'Fief', 'Die'],
    similars: [
      {
        kanji: '理',
        meaning: 'logic'
      },
      {
        kanji: '埋',
        meaning: 'bury'
      },
      {
        kanji: '聖',
        meaning: 'holy'
      },
      {
        kanji: '茎',
        meaning: 'stalk'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '荘',
        meaning: 'villa'
      },
      {
        kanji: '在',
        meaning: 'exist'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '毒',
        meaning: 'poison'
      }
    ]
  },
  {
    kanjiName: '斜',
    strokes: 11,
    grade: 8,
    freq: 1504,
    meanings: ['Diagonal', 'Slanting', 'Oblique'],
    on: ['しゃ'],
    kun: ['なな.め', 'はす'],
    jlpt: 1,
    quizAnswers: ['Profit', 'Earth', 'Diagonal', 'Retire'],
    similars: [
      {
        kanji: '科',
        meaning: 'department'
      },
      {
        kanji: '途',
        meaning: 'route'
      },
      {
        kanji: '叙',
        meaning: 'confer'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '余',
        meaning: 'too much'
      },
      {
        kanji: '俸',
        meaning: 'stipend'
      },
      {
        kanji: '料',
        meaning: 'fee'
      },
      {
        kanji: '棒',
        meaning: 'rod'
      },
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '鋼',
        meaning: 'steel'
      }
    ]
  },
  {
    kanjiName: '殴',
    strokes: 8,
    grade: 8,
    freq: 1622,
    meanings: ['Assault', 'Hit', 'Beat', 'Thrash'],
    on: ['おう'],
    kun: ['なぐ.る'],
    jlpt: 1,
    quizAnswers: ["Season's End", 'Do Wrong', 'Customer', 'Assault'],
    similars: [
      {
        kanji: '欧',
        meaning: 'Europe'
      },
      {
        kanji: '疫',
        meaning: 'epidemic'
      },
      {
        kanji: '役',
        meaning: 'duty'
      },
      {
        kanji: '板',
        meaning: 'plank'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '殺',
        meaning: 'kill'
      },
      {
        kanji: '枝',
        meaning: 'bough'
      },
      {
        kanji: '般',
        meaning: 'carrier'
      },
      {
        kanji: '友',
        meaning: 'friend'
      },
      {
        kanji: '没',
        meaning: 'drown'
      }
    ]
  },
  {
    kanjiName: '盾',
    strokes: 9,
    grade: 8,
    freq: 1476,
    meanings: ['Shield', 'Escutcheon', 'Pretext'],
    on: ['じゅん'],
    kun: ['たて'],
    jlpt: 1,
    quizAnswers: ['10**16', 'Surface', 'Impossible', 'Shield'],
    similars: [
      {
        kanji: '値',
        meaning: 'price'
      },
      {
        kanji: '首',
        meaning: 'neck'
      },
      {
        kanji: '看',
        meaning: 'watch over'
      },
      {
        kanji: '循',
        meaning: 'sequential'
      },
      {
        kanji: '猫',
        meaning: 'cat'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '盲',
        meaning: 'blind'
      },
      {
        kanji: '直',
        meaning: 'straightaway'
      },
      {
        kanji: '殖',
        meaning: 'augment'
      },
      {
        kanji: '植',
        meaning: 'plant'
      }
    ]
  },
  {
    kanjiName: '穫',
    strokes: 18,
    grade: 8,
    freq: 1642,
    meanings: ['Harvest', 'Reap'],
    on: ['かく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Tie In Bundles', 'Late', 'Sweep', 'Harvest'],
    similars: [
      {
        kanji: '獲',
        meaning: 'seize'
      },
      {
        kanji: '護',
        meaning: 'safeguard'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '勧',
        meaning: 'persuade'
      },
      {
        kanji: '歓',
        meaning: 'delight'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '隻',
        meaning: 'vessels'
      }
    ]
  },
  {
    kanjiName: '駒',
    strokes: 15,
    grade: 8,
    freq: 1452,
    meanings: ['Pony', 'Horse', 'Colt'],
    on: ['く'],
    kun: ['こま'],
    jlpt: 1,
    quizAnswers: ['Wait For', 'Pony', 'Rare', 'Follow']
  },
  {
    kanjiName: '紫',
    strokes: 12,
    grade: 8,
    freq: 1516,
    meanings: ['Purple', 'Violet'],
    on: ['し'],
    kun: ['むらさき'],
    jlpt: 1,
    quizAnswers: ['Purple', 'Deify', 'Leather', 'Brush (teeth)'],
    similars: [
      {
        kanji: '孫',
        meaning: 'grandchild'
      },
      {
        kanji: '緊',
        meaning: 'tense'
      },
      {
        kanji: '索',
        meaning: 'cord'
      },
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '係',
        meaning: 'person in charge'
      },
      {
        kanji: '歳',
        meaning: 'year-end'
      },
      {
        kanji: '繁',
        meaning: 'luxuriant'
      },
      {
        kanji: '糸',
        meaning: 'thread'
      }
    ]
  },
  {
    kanjiName: '抽',
    strokes: 8,
    grade: 8,
    freq: 1437,
    meanings: ['Pluck', 'Pull', 'Extract', 'Excel'],
    on: ['ちゅう'],
    kun: ['ひき-'],
    jlpt: 1,
    quizAnswers: ['Shiver', 'Pluck', 'Pole', 'Sign (of The Times)'],
    similars: [
      {
        kanji: '拍',
        meaning: 'clap'
      },
      {
        kanji: '油',
        meaning: 'oil'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '押',
        meaning: 'push'
      },
      {
        kanji: '苗',
        meaning: 'seedling'
      },
      {
        kanji: '描',
        meaning: 'sketch'
      },
      {
        kanji: '指',
        meaning: 'finger'
      },
      {
        kanji: '宙',
        meaning: 'mid-air'
      },
      {
        kanji: '田',
        meaning: 'rice field'
      },
      {
        kanji: '百',
        meaning: 'hundred'
      }
    ]
  },
  {
    kanjiName: '誓',
    strokes: 14,
    grade: 8,
    freq: 1567,
    meanings: ['Vow', 'Swear', 'Pledge'],
    on: ['せい'],
    kun: ['ちか.う'],
    jlpt: 1,
    quizAnswers: ['Ordeal', 'Seal', 'Class', 'Vow'],
    similars: [
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '信',
        meaning: 'faith'
      },
      {
        kanji: '轄',
        meaning: 'control'
      },
      {
        kanji: '警',
        meaning: 'admonish'
      },
      {
        kanji: '逝',
        meaning: 'departed'
      },
      {
        kanji: '誉',
        meaning: 'reputation'
      },
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '拝',
        meaning: 'worship'
      }
    ]
  },
  {
    kanjiName: '悟',
    strokes: 10,
    grade: 8,
    freq: 1411,
    meanings: ['Enlightenment', 'Perceive', 'Discern', 'Realize', 'Understand'],
    on: ['ご'],
    kun: ['さと.る'],
    jlpt: 1,
    quizAnswers: ['Join', 'Rice Paddy', 'Enlightenment', 'Skip'],
    similars: [
      {
        kanji: '害',
        meaning: 'harm'
      },
      {
        kanji: '語',
        meaning: 'word'
      },
      {
        kanji: '惜',
        meaning: 'pity'
      },
      {
        kanji: '周',
        meaning: 'circumference'
      },
      {
        kanji: '洞',
        meaning: 'den'
      },
      {
        kanji: '舎',
        meaning: 'cottage'
      },
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '言',
        meaning: 'say'
      },
      {
        kanji: '活',
        meaning: 'lively'
      },
      {
        kanji: '吉',
        meaning: 'good luck'
      }
    ]
  },
  {
    kanjiName: '拓',
    strokes: 8,
    grade: 8,
    freq: 1526,
    meanings: ['Clear (the Land)', 'Open', 'Break Up (land)'],
    on: ['たく'],
    kun: ['ひら.く'],
    jlpt: 1,
    quizAnswers: ['Vow', 'Clear (the Land)', 'Cancel', 'Compare'],
    similars: [
      {
        kanji: '招',
        meaning: 'beckon'
      },
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '搭',
        meaning: 'board'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '据',
        meaning: 'set'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '石',
        meaning: 'stone'
      },
      {
        kanji: '君',
        meaning: 'mister'
      }
    ]
  },
  {
    kanjiName: '拘',
    strokes: 8,
    grade: 8,
    freq: 1336,
    meanings: ['Arrest', 'Seize', 'Concerned', 'Adhere To', 'Despite'],
    on: ['こう'],
    kun: ['かか.わる'],
    jlpt: 1,
    quizAnswers: ['Minus', 'Ship', 'Tug', 'Arrest'],
    similars: [
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '招',
        meaning: 'beckon'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '据',
        meaning: 'set'
      },
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '抑',
        meaning: 'repress'
      },
      {
        kanji: '抱',
        meaning: 'embrace'
      }
    ]
  },
  {
    kanjiName: '礎',
    strokes: 18,
    grade: 8,
    freq: 1224,
    meanings: ['Cornerstone', 'Foundation Stone'],
    on: ['そ'],
    kun: ['いしずえ'],
    jlpt: 1,
    quizAnswers: ['Surpass', 'Cornerstone', 'Service', 'Coil Around'],
    similars: [
      {
        kanji: '歴',
        meaning: 'curriculum'
      },
      {
        kanji: '整',
        meaning: 'organize'
      },
      {
        kanji: '森',
        meaning: 'forest'
      },
      {
        kanji: '暦',
        meaning: 'calendar'
      },
      {
        kanji: '難',
        meaning: 'difficult'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '襟',
        meaning: 'collar'
      },
      {
        kanji: '褒',
        meaning: 'praise'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '頼',
        meaning: 'trust'
      }
    ]
  },
  {
    kanjiName: '鶴',
    strokes: 21,
    grade: 8,
    freq: 1369,
    meanings: ['Crane', 'Stork'],
    on: ['かく'],
    kun: ['つる'],
    jlpt: 1,
    quizAnswers: ['Interior', 'Put Up At', 'House', 'Crane']
  },
  {
    kanjiName: '刈',
    strokes: 4,
    grade: 8,
    freq: 1738,
    meanings: ['Reap', 'Cut', 'Clip', 'Trim', 'Prune'],
    on: ['がい', 'かい'],
    kun: ['か.る'],
    jlpt: 1,
    quizAnswers: ['Protect', 'Roll Of Cloth', 'Pull', 'Reap'],
    similars: [
      {
        kanji: '利',
        meaning: 'profit'
      },
      {
        kanji: '列',
        meaning: 'file'
      },
      {
        kanji: '竹',
        meaning: 'bamboo'
      },
      {
        kanji: '行',
        meaning: 'going'
      },
      {
        kanji: '奇',
        meaning: 'strange'
      },
      {
        kanji: '凶',
        meaning: 'villain'
      },
      {
        kanji: '川',
        meaning: 'stream'
      },
      {
        kanji: '千',
        meaning: 'thousand'
      },
      {
        kanji: '屯',
        meaning: 'barracks'
      },
      {
        kanji: '灯',
        meaning: 'lamp'
      }
    ]
  },
  {
    kanjiName: '剛',
    strokes: 10,
    grade: 8,
    freq: 1576,
    meanings: ['Sturdy', 'Strength'],
    on: ['ごう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Thaw', 'Sturdy', 'Right', 'Seat'],
    similars: [
      {
        kanji: '判',
        meaning: 'judgement'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '到',
        meaning: 'arrival'
      },
      {
        kanji: '端',
        meaning: 'edge'
      },
      {
        kanji: '綱',
        meaning: 'hawser'
      },
      {
        kanji: '結',
        meaning: 'tie'
      },
      {
        kanji: '割',
        meaning: 'proportion'
      },
      {
        kanji: '痢',
        meaning: 'diarrhea'
      },
      {
        kanji: '奥',
        meaning: 'heart'
      },
      {
        kanji: '活',
        meaning: 'lively'
      }
    ]
  },
  {
    kanjiName: '唯',
    strokes: 11,
    grade: 8,
    freq: 1292,
    meanings: ['Solely', 'Only', 'Merely', 'Simply'],
    on: ['ゆい', 'い'],
    kun: ['ただ'],
    jlpt: 1,
    quizAnswers: ['Hitherto', 'Products', 'Solely', 'Storehouse'],
    similars: [
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '准',
        meaning: 'quasi-'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '礁',
        meaning: 'reef'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      }
    ]
  },
  {
    kanjiName: '壇',
    strokes: 16,
    grade: 8,
    freq: 1512,
    meanings: ['Podium', 'Stage', 'Rostrum', 'Terrace'],
    on: ['だん', 'たん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Word', 'Busy', 'Some', 'Podium'],
    similars: [
      {
        kanji: '増',
        meaning: 'increase'
      },
      {
        kanji: '垣',
        meaning: 'hedge'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '曹',
        meaning: 'office'
      },
      {
        kanji: '暮',
        meaning: 'evening'
      },
      {
        kanji: '著',
        meaning: 'renowned'
      },
      {
        kanji: '境',
        meaning: 'boundary'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '塩',
        meaning: 'salt'
      }
    ]
  },
  {
    kanjiName: '尼',
    strokes: 5,
    grade: 8,
    freq: 1844,
    meanings: ['Nun'],
    on: ['に'],
    kun: ['あま'],
    jlpt: 1,
    quizAnswers: ['Nun', 'Futility', 'Twice', 'Discourse'],
    similars: [
      {
        kanji: '尾',
        meaning: 'tail'
      },
      {
        kanji: '泥',
        meaning: 'mud'
      },
      {
        kanji: '尺',
        meaning: 'shaku'
      },
      {
        kanji: '比',
        meaning: 'compare'
      },
      {
        kanji: '尿',
        meaning: 'urine'
      },
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '光',
        meaning: 'ray'
      },
      {
        kanji: '老',
        meaning: 'old man'
      },
      {
        kanji: '尽',
        meaning: 'exhaust'
      },
      {
        kanji: '所',
        meaning: 'place'
      }
    ]
  },
  {
    kanjiName: '概',
    strokes: 14,
    grade: 8,
    freq: 1335,
    meanings: ['Outline', 'Condition', 'Approximation', 'Generally'],
    on: ['がい'],
    kun: ['おおむ.ね'],
    jlpt: 1,
    quizAnswers: ['Protect', 'Real', 'Outline', 'Springtime'],
    similars: [
      {
        kanji: '慨',
        meaning: 'rue'
      },
      {
        kanji: '既',
        meaning: 'previously'
      },
      {
        kanji: '柱',
        meaning: 'pillar'
      },
      {
        kanji: '根',
        meaning: 'root'
      },
      {
        kanji: '暁',
        meaning: 'daybreak'
      },
      {
        kanji: '栓',
        meaning: 'plug'
      },
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '機',
        meaning: 'loom'
      },
      {
        kanji: '規',
        meaning: 'standard'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      }
    ]
  },
  {
    kanjiName: '浸',
    strokes: 10,
    grade: 8,
    freq: 1447,
    meanings: ['Immersed', 'Soak', 'Dip', 'Steep', 'Moisten', 'Wet', 'Dunk'],
    on: ['しん'],
    kun: ['ひた.す', 'ひた.る', 'つ.かる'],
    jlpt: 1,
    quizAnswers: ['Immersed', 'Cloud Up', 'Withdraw', 'Set'],
    similars: [
      {
        kanji: '寝',
        meaning: 'lie down'
      },
      {
        kanji: '侵',
        meaning: 'encroach'
      },
      {
        kanji: '掃',
        meaning: 'sweep'
      },
      {
        kanji: '沈',
        meaning: 'sink'
      },
      {
        kanji: '没',
        meaning: 'drown'
      },
      {
        kanji: '泳',
        meaning: 'swim'
      },
      {
        kanji: '受',
        meaning: 'accept'
      },
      {
        kanji: '波',
        meaning: 'waves'
      },
      {
        kanji: '授',
        meaning: 'impart'
      },
      {
        kanji: '液',
        meaning: 'fluid'
      }
    ]
  },
  {
    kanjiName: '淡',
    strokes: 11,
    grade: 8,
    freq: 1436,
    meanings: ['Thin', 'Faint', 'Pale', 'Fleeting'],
    on: ['たん'],
    kun: ['あわ.い'],
    jlpt: 1,
    quizAnswers: ['Estimate', 'Thin', 'Model', 'Employ'],
    similars: [
      {
        kanji: '派',
        meaning: 'faction'
      },
      {
        kanji: '深',
        meaning: 'deep'
      },
      {
        kanji: '炎',
        meaning: 'inflammation'
      },
      {
        kanji: '談',
        meaning: 'discuss'
      },
      {
        kanji: '漆',
        meaning: 'lacquer'
      },
      {
        kanji: '泳',
        meaning: 'swim'
      },
      {
        kanji: '泌',
        meaning: 'ooze'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '染',
        meaning: 'dye'
      },
      {
        kanji: '惨',
        meaning: 'wretched'
      }
    ]
  },
  {
    kanjiName: '煮',
    strokes: 12,
    grade: 8,
    freq: 1565,
    meanings: ['Boil', 'Cook'],
    on: ['しゃ'],
    kun: ['に.る', '-に', 'に.える', 'に.やす'],
    jlpt: 1,
    quizAnswers: ['Boil', 'Notify', 'Rouse', 'Omen'],
    similars: [
      {
        kanji: '薫',
        meaning: 'send forth fragrance'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '者',
        meaning: 'someone'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '都',
        meaning: 'metropolis'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '漁',
        meaning: 'fishing'
      },
      {
        kanji: '鳴',
        meaning: 'chirp'
      },
      {
        kanji: '塊',
        meaning: 'clod'
      }
    ]
  },
  {
    kanjiName: '覆',
    strokes: 18,
    grade: 8,
    freq: 1378,
    meanings: ['Capsize', 'Cover', 'Shade', 'Mantle', 'Be Ruined'],
    on: ['ふく'],
    kun: ['おお.う', 'くつがえ.す', 'くつがえ.る'],
    jlpt: 1,
    quizAnswers: ['Halt', 'Poor', 'Ninth Sign Of Chinese Zodiac', 'Capsize'],
    similars: [
      {
        kanji: '復',
        meaning: 'restore'
      },
      {
        kanji: '履',
        meaning: 'perform'
      },
      {
        kanji: '腹',
        meaning: 'abdomen'
      },
      {
        kanji: '複',
        meaning: 'duplicate'
      },
      {
        kanji: '暖',
        meaning: 'warmth'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '暫',
        meaning: 'temporarily'
      },
      {
        kanji: '硬',
        meaning: 'stiff'
      }
    ]
  },
  {
    kanjiName: '謀',
    strokes: 16,
    grade: 8,
    freq: 1370,
    meanings: [
      'Conspire',
      'Cheat',
      'Impose On',
      'Plan',
      'Devise',
      'Scheme',
      'Have In Mind',
      'Deceive'
    ],
    on: ['ぼう', 'む'],
    kun: ['はか.る', 'たばか.る', 'はかりごと'],
    jlpt: 1,
    quizAnswers: ['Service', 'Conspire', 'Help', 'Measure'],
    similars: [
      {
        kanji: '課',
        meaning: 'chapter'
      },
      {
        kanji: '謁',
        meaning: 'audience'
      },
      {
        kanji: '謙',
        meaning: 'self-effacing'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '硬',
        meaning: 'stiff'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      },
      {
        kanji: '語',
        meaning: 'word'
      },
      {
        kanji: '識',
        meaning: 'discriminating'
      }
    ]
  },
  {
    kanjiName: '陶',
    strokes: 11,
    grade: 8,
    freq: 1680,
    meanings: ['Pottery', 'Porcelain'],
    on: ['とう'],
    kun: ['すえ'],
    jlpt: 1,
    quizAnswers: ['Pottery', 'Bashful', 'Perspire', 'Stiff'],
    similars: [
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '揺',
        meaning: 'swing'
      },
      {
        kanji: '陛',
        meaning: 'highness'
      },
      {
        kanji: '缶',
        meaning: 'tin can'
      },
      {
        kanji: '除',
        meaning: 'exclude'
      },
      {
        kanji: '隆',
        meaning: 'hump'
      },
      {
        kanji: '謡',
        meaning: 'song'
      },
      {
        kanji: '隣',
        meaning: 'neighboring'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '栓',
        meaning: 'plug'
      }
    ]
  },
  {
    kanjiName: '隔',
    strokes: 13,
    grade: 8,
    freq: 1382,
    meanings: ['Isolate', 'Alternate', 'Distance', 'Separate', 'Gulf'],
    on: ['かく'],
    kun: ['へだ.てる', 'へだ.たる'],
    jlpt: 1,
    quizAnswers: ['Wide(ly)', 'Rank', 'Restrict', 'Isolate'],
    similars: [
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '調',
        meaning: 'tune'
      },
      {
        kanji: '課',
        meaning: 'chapter'
      },
      {
        kanji: '詳',
        meaning: 'detailed'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '陛',
        meaning: 'highness'
      },
      {
        kanji: '陳',
        meaning: 'exhibit'
      }
    ]
  },
  {
    kanjiName: '征',
    strokes: 8,
    grade: 8,
    freq: 1578,
    meanings: ['Subjugate', 'Attack The Rebellious', 'Collect Taxes'],
    on: ['せい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Subjugate', 'Outstanding', 'Stretch', 'Rich'],
    similars: [
      {
        kanji: '在',
        meaning: 'exist'
      },
      {
        kanji: '企',
        meaning: 'undertake'
      },
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '正',
        meaning: 'correct'
      },
      {
        kanji: '佳',
        meaning: 'excellent'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '径',
        meaning: 'diameter'
      },
      {
        kanji: '祉',
        meaning: 'welfare'
      },
      {
        kanji: '往',
        meaning: 'journey'
      },
      {
        kanji: '症',
        meaning: 'symptoms'
      }
    ]
  },
  {
    kanjiName: '陛',
    strokes: 10,
    grade: 6,
    freq: 1429,
    meanings: ['Highness', 'Steps (of Throne)'],
    on: ['へい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Close', 'Scenery', 'Bay', 'Highness'],
    similars: [
      {
        kanji: '陸',
        meaning: 'land'
      },
      {
        kanji: '階',
        meaning: 'storey'
      },
      {
        kanji: '隆',
        meaning: 'hump'
      },
      {
        kanji: '陶',
        meaning: 'pottery'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '堕',
        meaning: 'degenerate'
      },
      {
        kanji: '附',
        meaning: 'affixed'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '墜',
        meaning: 'crash'
      }
    ]
  },
  {
    kanjiName: '俗',
    strokes: 9,
    grade: 8,
    freq: 1610,
    meanings: ['Vulgar', 'Customs', 'Manners', 'Worldliness', 'Mundane Things'],
    on: ['ぞく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Pour', 'Vulgar', 'Custody', 'King'],
    similars: [
      {
        kanji: '谷',
        meaning: 'valley'
      },
      {
        kanji: '容',
        meaning: 'contain'
      },
      {
        kanji: '格',
        meaning: 'status'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '絡',
        meaning: 'entwine'
      },
      {
        kanji: '裕',
        meaning: 'abundant'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '船',
        meaning: 'ship'
      },
      {
        kanji: '唇',
        meaning: 'lips'
      }
    ]
  },
  {
    kanjiName: '桑',
    strokes: 10,
    grade: 8,
    freq: 1650,
    meanings: ['Mulberry'],
    on: ['そう'],
    kun: ['くわ'],
    jlpt: 1,
    quizAnswers: ['Baggage', 'Mulberry', 'Merit', 'Ride In'],
    similars: [
      {
        kanji: '柔',
        meaning: 'tender'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '条',
        meaning: 'article'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '森',
        meaning: 'forest'
      },
      {
        kanji: '検',
        meaning: 'examination'
      },
      {
        kanji: '染',
        meaning: 'dye'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '米',
        meaning: 'rice'
      }
    ]
  },
  {
    kanjiName: '潤',
    strokes: 15,
    grade: 8,
    freq: 1644,
    meanings: ['Wet', 'Be Watered', 'Profit By', 'Receive Benefits', 'Favor', 'Charm', 'Steep'],
    on: ['じゅん'],
    kun: ['うるお.う', 'うるお.す', 'うる.む'],
    jlpt: 1,
    quizAnswers: ['Dessicate', 'Exhausted', 'Wet', 'Occasion'],
    similars: [
      {
        kanji: '開',
        meaning: 'open'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '糧',
        meaning: 'provisions'
      },
      {
        kanji: '皇',
        meaning: 'emperor'
      },
      {
        kanji: '盟',
        meaning: 'alliance'
      },
      {
        kanji: '漫',
        meaning: 'cartoon'
      },
      {
        kanji: '問',
        meaning: 'question'
      }
    ]
  },
  {
    kanjiName: '珠',
    strokes: 10,
    grade: 8,
    freq: 1711,
    meanings: ['Pearl', 'Gem', 'Jewel'],
    on: ['しゅ'],
    kun: ['たま'],
    jlpt: 1,
    quizAnswers: ['Section', 'Mark', 'Fracture', 'Pearl'],
    similars: [
      {
        kanji: '執',
        meaning: 'tenacious'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '床',
        meaning: 'bed'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '報',
        meaning: 'report'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '業',
        meaning: 'business'
      },
      {
        kanji: '献',
        meaning: 'offering'
      }
    ]
  },
  {
    kanjiName: '衰',
    strokes: 10,
    grade: 8,
    freq: 1432,
    meanings: ['Decline', 'Wane', 'Weaken'],
    on: ['すい'],
    kun: ['おとろ.える'],
    jlpt: 1,
    quizAnswers: ['Fold', 'Dwell', 'Revere', 'Decline'],
    similars: [
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      },
      {
        kanji: '更',
        meaning: 'grow late'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '畝',
        meaning: 'furrow'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '衣',
        meaning: 'garment'
      }
    ]
  },
  {
    kanjiName: '奨',
    strokes: 13,
    grade: 8,
    freq: 1445,
    meanings: ['Exhort', 'Urge', 'Encourage'],
    on: ['しょう', 'そう'],
    kun: ['すす.める'],
    jlpt: 1,
    quizAnswers: ['Rejoice', 'Vessels', 'Finish', 'Exhort'],
    similars: [
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '将',
        meaning: 'leader'
      },
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '緑',
        meaning: 'green'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '暖',
        meaning: 'warmth'
      },
      {
        kanji: '授',
        meaning: 'impart'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      }
    ]
  },
  {
    kanjiName: '劣',
    strokes: 6,
    grade: 8,
    freq: 1620,
    meanings: ['Inferiority', 'Be Inferior To', 'Be Worse'],
    on: ['れつ'],
    kun: ['おと.る'],
    jlpt: 1,
    quizAnswers: ['Inferiority', 'Have', 'Transport', 'Shift'],
    similars: [
      {
        kanji: '少',
        meaning: 'few'
      },
      {
        kanji: '効',
        meaning: 'merit'
      },
      {
        kanji: '労',
        meaning: 'labor'
      },
      {
        kanji: '励',
        meaning: 'encourage'
      },
      {
        kanji: '犯',
        meaning: 'crime'
      },
      {
        kanji: '灰',
        meaning: 'ashes'
      },
      {
        kanji: '小',
        meaning: 'little'
      },
      {
        kanji: '父',
        meaning: 'father'
      },
      {
        kanji: '協',
        meaning: 'co-'
      },
      {
        kanji: '券',
        meaning: 'ticket'
      }
    ]
  },
  {
    kanjiName: '勘',
    strokes: 11,
    grade: 8,
    freq: 1494,
    meanings: ['Intuition', 'Perception', 'Check', 'Compare', 'Sixth Sense'],
    on: ['かん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Intuition', 'Honesty', 'Be Submerged', 'Birds'],
    similars: [
      {
        kanji: '甚',
        meaning: 'tremendously'
      },
      {
        kanji: '募',
        meaning: 'recruit'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '堪',
        meaning: 'withstand'
      },
      {
        kanji: '期',
        meaning: 'period'
      },
      {
        kanji: '農',
        meaning: 'agriculture'
      },
      {
        kanji: '幕',
        meaning: 'curtain'
      },
      {
        kanji: '碁',
        meaning: 'Go'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      }
    ]
  },
  {
    kanjiName: '妃',
    strokes: 6,
    grade: 8,
    freq: 1752,
    meanings: ['Queen', 'Princess'],
    on: ['ひ'],
    kun: ['きさき'],
    jlpt: 1,
    quizAnswers: ['Imitate', 'Assurance', 'Horn', 'Queen'],
    similars: [
      {
        kanji: '包',
        meaning: 'wrap'
      },
      {
        kanji: '妨',
        meaning: 'disturb'
      },
      {
        kanji: '妊',
        meaning: 'pregnancy'
      },
      {
        kanji: '己',
        meaning: 'self'
      },
      {
        kanji: '如',
        meaning: 'likeness'
      },
      {
        kanji: '毛',
        meaning: 'fur'
      },
      {
        kanji: '女',
        meaning: 'woman'
      },
      {
        kanji: '好',
        meaning: 'fond'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '姉',
        meaning: 'elder sister'
      }
    ]
  },
  {
    kanjiName: '峰',
    strokes: 10,
    grade: 8,
    freq: 1836,
    meanings: ['Summit', 'Peak'],
    on: ['ほう'],
    kun: ['みね', 'ね'],
    jlpt: 1,
    quizAnswers: ['Summit', 'Skill', 'Various', 'Revered'],
    similars: [
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '岸',
        meaning: 'beach'
      },
      {
        kanji: '隆',
        meaning: 'hump'
      },
      {
        kanji: '律',
        meaning: 'rhythm'
      },
      {
        kanji: '縫',
        meaning: 'sew'
      },
      {
        kanji: '峠',
        meaning: 'mountain peak'
      },
      {
        kanji: '怪',
        meaning: 'suspicious'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '奉',
        meaning: 'observance'
      },
      {
        kanji: '羊',
        meaning: 'sheep'
      }
    ]
  },
  {
    kanjiName: '巧',
    strokes: 5,
    grade: 8,
    freq: 1537,
    meanings: ['Adroit', 'Skilled', 'Ingenuity'],
    on: ['こう'],
    kun: ['たく.み', 'たく.む', 'うま.い'],
    jlpt: 1,
    quizAnswers: ['Hit', 'Adroit', 'Token', 'Make A Living'],
    similars: [
      {
        kanji: '士',
        meaning: 'gentleman'
      },
      {
        kanji: '工',
        meaning: 'craft'
      },
      {
        kanji: '功',
        meaning: 'achievement'
      },
      {
        kanji: '五',
        meaning: 'five'
      },
      {
        kanji: '王',
        meaning: 'king'
      },
      {
        kanji: '玉',
        meaning: 'jewel'
      },
      {
        kanji: '土',
        meaning: 'soil'
      },
      {
        kanji: '坂',
        meaning: 'slope'
      },
      {
        kanji: '坑',
        meaning: 'pit'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      }
    ]
  },
  {
    kanjiName: '邪',
    strokes: 8,
    grade: 8,
    freq: 1612,
    meanings: ['Wicked', 'Injustice', 'Wrong'],
    on: ['じゃ'],
    kun: ['よこし.ま'],
    jlpt: 1,
    quizAnswers: ['Wicked', 'Region', 'Satisfy', 'Abundant'],
    similars: [
      {
        kanji: '邦',
        meaning: 'home country'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '麦',
        meaning: 'barley'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '都',
        meaning: 'metropolis'
      },
      {
        kanji: '郵',
        meaning: 'mail'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '却',
        meaning: 'instead'
      },
      {
        kanji: '孝',
        meaning: 'filial piety'
      },
      {
        kanji: '井',
        meaning: 'well'
      }
    ]
  },
  {
    kanjiName: '駄',
    strokes: 14,
    grade: 8,
    freq: 1500,
    meanings: ['Burdensome', 'Pack Horse', 'Horse Load', 'Send By Horse', 'Trivial', 'Worthless'],
    on: ['だ', 'た'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Load', 'Bask In', 'Install', 'Burdensome'],
    similars: [
      {
        kanji: '駆',
        meaning: 'drive'
      },
      {
        kanji: '駅',
        meaning: 'station'
      },
      {
        kanji: '駐',
        meaning: 'stop-over'
      },
      {
        kanji: '馬',
        meaning: 'horse'
      },
      {
        kanji: '験',
        meaning: 'verification'
      },
      {
        kanji: '騎',
        meaning: 'equestrian'
      },
      {
        kanji: '騒',
        meaning: 'boisterous'
      },
      {
        kanji: '焦',
        meaning: 'char'
      },
      {
        kanji: '緊',
        meaning: 'tense'
      },
      {
        kanji: '曇',
        meaning: 'cloudy weather'
      }
    ]
  },
  {
    kanjiName: '廷',
    strokes: 7,
    grade: 8,
    freq: 1439,
    meanings: ['Courts', 'Imperial Court', 'Government Office'],
    on: ['てい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Courts', 'Follow', 'Visit', 'Three (in Documents)'],
    similars: [
      {
        kanji: '延',
        meaning: 'prolong'
      },
      {
        kanji: '庭',
        meaning: 'courtyard'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '皮',
        meaning: 'pelt'
      },
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '支',
        meaning: 'branch'
      },
      {
        kanji: '先',
        meaning: 'before'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      }
    ]
  },
  {
    kanjiName: '簿',
    strokes: 19,
    grade: 8,
    freq: 1358,
    meanings: ['Register', 'Record Book'],
    on: ['ぼ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Road', 'Register', 'Pills', 'Temper'],
    similars: [
      {
        kanji: '薄',
        meaning: 'dilute'
      },
      {
        kanji: '等',
        meaning: 'etc.'
      },
      {
        kanji: '縛',
        meaning: 'truss'
      },
      {
        kanji: '算',
        meaning: 'calculate'
      },
      {
        kanji: '符',
        meaning: 'token'
      },
      {
        kanji: '範',
        meaning: 'pattern'
      },
      {
        kanji: '簡',
        meaning: 'simplicity'
      },
      {
        kanji: '箱',
        meaning: 'box'
      },
      {
        kanji: '博',
        meaning: 'Dr.'
      },
      {
        kanji: '節',
        meaning: 'node'
      }
    ]
  },
  {
    kanjiName: '彰',
    strokes: 14,
    grade: 8,
    freq: 1310,
    meanings: ['Patent', 'Clear'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Seduce', 'Patent', 'Presume', 'Confuse'],
    similars: [
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '載',
        meaning: 'ride'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      },
      {
        kanji: '漸',
        meaning: 'steadily'
      }
    ]
  },
  {
    kanjiName: '漫',
    strokes: 14,
    grade: 8,
    freq: 1408,
    meanings: ['Cartoon', 'Involuntarily', 'Unrestrained', 'In Spite Of Oneself', 'Corrupt'],
    on: ['まん'],
    kun: ['みだり.に', 'そぞ.ろ'],
    jlpt: 1,
    quizAnswers: ['Cartoon', 'Except', 'Chapter', 'Error'],
    similars: [
      {
        kanji: '慢',
        meaning: 'ridicule'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '捜',
        meaning: 'search'
      },
      {
        kanji: '撮',
        meaning: 'snapshot'
      },
      {
        kanji: '潤',
        meaning: 'wet'
      },
      {
        kanji: '渡',
        meaning: 'transit'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      },
      {
        kanji: '混',
        meaning: 'mix'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      }
    ]
  },
  {
    kanjiName: '訂',
    strokes: 9,
    grade: 8,
    freq: 1690,
    meanings: ['Revise', 'Correct', 'Decide'],
    on: ['てい'],
    kun: ['ただ.す'],
    jlpt: 1,
    quizAnswers: ['Stratum', 'Manage', 'Revise', 'Transport'],
    similars: [
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '記',
        meaning: 'scribe'
      },
      {
        kanji: '言',
        meaning: 'say'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '詩',
        meaning: 'poem'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      }
    ]
  },
  {
    kanjiName: '諮',
    strokes: 16,
    grade: 8,
    freq: 1345,
    meanings: ['Consult With'],
    on: ['し'],
    kun: ['はか.る'],
    jlpt: 1,
    quizAnswers: ['Fee', 'Salt', 'Capacity', 'Consult With'],
    similars: [
      {
        kanji: '詔',
        meaning: 'imperial edict'
      },
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '談',
        meaning: 'discuss'
      },
      {
        kanji: '調',
        meaning: 'tune'
      },
      {
        kanji: '詳',
        meaning: 'detailed'
      },
      {
        kanji: '喜',
        meaning: 'rejoice'
      },
      {
        kanji: '詞',
        meaning: 'part of speech'
      }
    ]
  },
  {
    kanjiName: '銘',
    strokes: 14,
    grade: 8,
    freq: 1394,
    meanings: ['Inscription', 'Signature (of Artisan)'],
    on: ['めい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Inscription', 'Warn', 'Counter For Small Animals', 'Custody'],
    similars: [
      {
        kanji: '鉛',
        meaning: 'lead'
      },
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '鈍',
        meaning: 'dull'
      },
      {
        kanji: '鈴',
        meaning: 'small bell'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      }
    ]
  },
  {
    kanjiName: '堤',
    strokes: 12,
    grade: 8,
    freq: 1658,
    meanings: ['Dike', 'Bank', 'Embankment'],
    on: ['てい'],
    kun: ['つつみ'],
    jlpt: 1,
    quizAnswers: ['Dike', 'Army', 'Look Up', 'Moist'],
    similars: [
      {
        kanji: '提',
        meaning: 'propose'
      },
      {
        kanji: '是',
        meaning: 'just so'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '埋',
        meaning: 'bury'
      },
      {
        kanji: '載',
        meaning: 'ride'
      },
      {
        kanji: '環',
        meaning: 'ring'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      }
    ]
  },
  {
    kanjiName: '漂',
    strokes: 14,
    grade: 8,
    freq: 1492,
    meanings: ['Drift', 'Float (on Liquid)'],
    on: ['ひょう'],
    kun: ['ただよ.う'],
    jlpt: 1,
    quizAnswers: ['Drift', 'Listen', 'Defeat', 'Result In'],
    similars: [
      {
        kanji: '票',
        meaning: 'ballot'
      },
      {
        kanji: '標',
        meaning: 'signpost'
      },
      {
        kanji: '洪',
        meaning: 'deluge'
      },
      {
        kanji: '懐',
        meaning: 'feelings'
      },
      {
        kanji: '濃',
        meaning: 'concentrated'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '浦',
        meaning: 'bay'
      },
      {
        kanji: '戦',
        meaning: 'war'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '漸',
        meaning: 'steadily'
      }
    ]
  },
  {
    kanjiName: '翻',
    strokes: 18,
    grade: 8,
    freq: 1465,
    meanings: ['Flip', 'Turn Over', 'Wave', 'Flutter', 'Change (mind)'],
    on: ['ほん', 'はん'],
    kun: ['ひるがえ.る', 'ひるがえ.す'],
    jlpt: 1,
    quizAnswers: ['Flip', 'Tatami Mat', 'Recede', 'Defend'],
    similars: [
      {
        kanji: '番',
        meaning: 'turn'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '鶏',
        meaning: 'chicken'
      },
      {
        kanji: '漁',
        meaning: 'fishing'
      },
      {
        kanji: '畑',
        meaning: 'farm'
      },
      {
        kanji: '道',
        meaning: 'road-way'
      },
      {
        kanji: '衡',
        meaning: 'equilibrium'
      },
      {
        kanji: '億',
        meaning: 'hundred million'
      },
      {
        kanji: '徳',
        meaning: 'benevolence'
      },
      {
        kanji: '想',
        meaning: 'concept'
      }
    ]
  },
  {
    kanjiName: '軌',
    strokes: 9,
    grade: 8,
    freq: 1480,
    meanings: ['Rut', 'Wheel', 'Track', 'Model', 'Way Of Doing'],
    on: ['き'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Advance', 'Form', 'Rut', 'Proof'],
    similars: [
      {
        kanji: '乾',
        meaning: 'drought'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '某',
        meaning: 'so-and-so'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '早',
        meaning: 'early'
      }
    ]
  },
  {
    kanjiName: '后',
    strokes: 6,
    grade: 6,
    freq: 1583,
    meanings: ['Empress', 'Queen', 'After', 'Behind', 'Back', 'Later'],
    on: ['こう', 'ご'],
    kun: ['きさき'],
    jlpt: 1,
    quizAnswers: ['Empress', 'Cremate', 'Club', 'Abandon'],
    similars: [
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '合',
        meaning: 'fit'
      },
      {
        kanji: '谷',
        meaning: 'valley'
      },
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '何',
        meaning: 'what'
      },
      {
        kanji: '含',
        meaning: 'contain'
      },
      {
        kanji: '伺',
        meaning: 'pay respects'
      },
      {
        kanji: '作',
        meaning: 'make'
      },
      {
        kanji: '吉',
        meaning: 'good luck'
      },
      {
        kanji: '舌',
        meaning: 'tongue'
      }
    ]
  },
  {
    kanjiName: '奮',
    strokes: 16,
    grade: 6,
    freq: 1521,
    meanings: ['Stirred Up', 'Be Invigorated', 'Flourish'],
    on: ['ふん'],
    kun: ['ふる.う'],
    jlpt: 1,
    quizAnswers: ['Hold In The Mouth', 'Stirred Up', 'Be Inferior', 'Catch (cold)'],
    similars: [
      {
        kanji: '奪',
        meaning: 'rob'
      },
      {
        kanji: '観',
        meaning: 'outlook'
      },
      {
        kanji: '顧',
        meaning: 'look back'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '携',
        meaning: 'portable'
      },
      {
        kanji: '礁',
        meaning: 'reef'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '猫',
        meaning: 'cat'
      },
      {
        kanji: '笛',
        meaning: 'flute'
      }
    ]
  },
  {
    kanjiName: '亭',
    strokes: 9,
    grade: 8,
    freq: 1627,
    meanings: [
      'Pavilion',
      'Restaurant',
      'Mansion',
      'Arbor',
      'Cottage',
      'Vaudeville',
      'Music Hall',
      'Stage Name'
    ],
    on: ['てい', 'ちん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Shop', 'Pavilion', 'Fearful', 'Feat'],
    similars: [
      {
        kanji: '停',
        meaning: 'halt'
      },
      {
        kanji: '事',
        meaning: 'matter'
      },
      {
        kanji: '享',
        meaning: 'enjoy'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '喜',
        meaning: 'rejoice'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      },
      {
        kanji: '点',
        meaning: 'spot'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '可',
        meaning: 'can'
      },
      {
        kanji: '亜',
        meaning: 'Asia'
      }
    ]
  },
  {
    kanjiName: '仰',
    strokes: 6,
    grade: 8,
    freq: 1573,
    meanings: ['Face-up', 'Look Up', 'Depend', 'Seek', 'Respect', 'Rever', 'Drink', 'Take'],
    on: ['ぎょう', 'こう'],
    kun: ['あお.ぐ', 'おお.せ', 'お.っしゃる', 'おっしゃ.る'],
    jlpt: 1,
    quizAnswers: ['Face-up', 'Main Thing', 'Long Time', 'Bright'],
    similars: [
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '印',
        meaning: 'stamp'
      },
      {
        kanji: '低',
        meaning: 'lower'
      },
      {
        kanji: '伴',
        meaning: 'consort'
      },
      {
        kanji: '抑',
        meaning: 'repress'
      },
      {
        kanji: '柳',
        meaning: 'willow'
      },
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '例',
        meaning: 'example'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '仲',
        meaning: 'go-between'
      }
    ]
  },
  {
    kanjiName: '伯',
    strokes: 7,
    grade: 8,
    freq: 1741,
    meanings: ['Chief', 'Count', 'Earl', 'Uncle', 'Brazil'],
    on: ['はく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Co-', 'Chief', 'Parent', 'Accident'],
    similars: [
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '旬',
        meaning: 'decameron'
      },
      {
        kanji: '旧',
        meaning: 'old times'
      },
      {
        kanji: '但',
        meaning: 'however'
      },
      {
        kanji: '伸',
        meaning: 'expand'
      },
      {
        kanji: '白',
        meaning: 'white'
      },
      {
        kanji: '百',
        meaning: 'hundred'
      },
      {
        kanji: '旨',
        meaning: 'delicious'
      },
      {
        kanji: '皆',
        meaning: 'all'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      }
    ]
  },
  {
    kanjiName: '墳',
    strokes: 15,
    grade: 8,
    freq: 1822,
    meanings: ['Tomb', 'Mound'],
    on: ['ふん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Tallow', 'Tomb', 'Fix', 'Honor'],
    similars: [
      {
        kanji: '憤',
        meaning: 'aroused'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '噴',
        meaning: 'erupt'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '積',
        meaning: 'volume'
      }
    ]
  },
  {
    kanjiName: '壮',
    strokes: 6,
    grade: 8,
    freq: 1657,
    meanings: ['Robust', 'Manhood', 'Prosperity'],
    on: ['そう'],
    kun: ['さかん'],
    jlpt: 1,
    quizAnswers: ['Robust', 'Law', 'Stop-over', 'Breast'],
    similars: [
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '荘',
        meaning: 'villa'
      },
      {
        kanji: '吐',
        meaning: 'spit'
      },
      {
        kanji: '注',
        meaning: 'pour'
      },
      {
        kanji: '法',
        meaning: 'method'
      },
      {
        kanji: '呈',
        meaning: 'display'
      },
      {
        kanji: '状',
        meaning: 'status quo'
      },
      {
        kanji: '社',
        meaning: 'company'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '住',
        meaning: 'dwell'
      }
    ]
  },
  {
    kanjiName: '把',
    strokes: 7,
    grade: 8,
    freq: 1569,
    meanings: ['Grasp', 'Faggot', 'Bunch', 'Counter For Bundles'],
    on: ['は', 'わ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Grasp', 'Increase', 'Confirm', 'Embedded'],
    similars: [
      {
        kanji: '抽',
        meaning: 'pluck'
      },
      {
        kanji: '声',
        meaning: 'voice'
      },
      {
        kanji: '批',
        meaning: 'criticism'
      },
      {
        kanji: '色',
        meaning: 'color'
      },
      {
        kanji: '技',
        meaning: 'skill'
      },
      {
        kanji: '肥',
        meaning: 'fertilizer'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '押',
        meaning: 'push'
      },
      {
        kanji: '抱',
        meaning: 'embrace'
      },
      {
        kanji: '披',
        meaning: 'expose'
      }
    ]
  },
  {
    kanjiName: '搬',
    strokes: 13,
    grade: 8,
    freq: 1664,
    meanings: ['Conveyor', 'Carry', 'Transport'],
    on: ['はん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Ultra-', 'Dynasty', 'Extent', 'Conveyor'],
    similars: [
      {
        kanji: '般',
        meaning: 'carrier'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '授',
        meaning: 'impart'
      },
      {
        kanji: '役',
        meaning: 'duty'
      },
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '盤',
        meaning: 'tray'
      },
      {
        kanji: '疫',
        meaning: 'epidemic'
      },
      {
        kanji: '換',
        meaning: 'interchange'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '舶',
        meaning: 'liner'
      }
    ]
  },
  {
    kanjiName: '晶',
    strokes: 12,
    grade: 8,
    freq: 1613,
    meanings: ['Sparkle', 'Clear', 'Crystal'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Structure', 'Etc.', 'Sparkle', 'Make A Living'],
    similars: [
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '冒',
        meaning: 'risk'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      },
      {
        kanji: '暑',
        meaning: 'sultry'
      },
      {
        kanji: '贈',
        meaning: 'presents'
      },
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '帽',
        meaning: 'cap'
      },
      {
        kanji: '聞',
        meaning: 'hear'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      },
      {
        kanji: '僧',
        meaning: 'Buddhist priest'
      }
    ]
  },
  {
    kanjiName: '洞',
    strokes: 9,
    grade: 8,
    freq: 1618,
    meanings: ['Den', 'Cave', 'Excavation'],
    on: ['どう'],
    kun: ['ほら'],
    jlpt: 1,
    quizAnswers: ['Split', 'Den', 'Drop', 'Impregnable Position'],
    similars: [
      {
        kanji: '河',
        meaning: 'river'
      },
      {
        kanji: '治',
        meaning: 'reign'
      },
      {
        kanji: '沿',
        meaning: 'run alongside'
      },
      {
        kanji: '活',
        meaning: 'lively'
      },
      {
        kanji: '同',
        meaning: 'same'
      },
      {
        kanji: '沼',
        meaning: 'marsh'
      },
      {
        kanji: '尚',
        meaning: 'esteem'
      },
      {
        kanji: '滴',
        meaning: 'drip'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '悟',
        meaning: 'enlightenment'
      }
    ]
  },
  {
    kanjiName: '涯',
    strokes: 11,
    grade: 8,
    freq: 1525,
    meanings: ['Horizon', 'Shore', 'Limit', 'Bound'],
    on: ['がい'],
    kun: ['はて'],
    jlpt: 1,
    quizAnswers: ['Horizon', 'Dread', 'Change', 'Board'],
    similars: [
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '海',
        meaning: 'sea'
      },
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '注',
        meaning: 'pour'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '溝',
        meaning: 'gutter'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      },
      {
        kanji: '惰',
        meaning: 'lazy'
      },
      {
        kanji: '汽',
        meaning: 'vapor'
      },
      {
        kanji: '益',
        meaning: 'benefit'
      }
    ]
  },
  {
    kanjiName: '疫',
    strokes: 9,
    grade: 8,
    freq: 1661,
    meanings: ['Epidemic'],
    on: ['えき', 'やく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Epidemic', 'Concerning', 'Institution', 'Fetch'],
    similars: [
      {
        kanji: '疲',
        meaning: 'exhausted'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '没',
        meaning: 'drown'
      },
      {
        kanji: '交',
        meaning: 'mingle'
      },
      {
        kanji: '殴',
        meaning: 'assault'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '変',
        meaning: 'unusual'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '役',
        meaning: 'duty'
      },
      {
        kanji: '衣',
        meaning: 'garment'
      }
    ]
  },
  {
    kanjiName: '孔',
    strokes: 4,
    grade: 8,
    freq: 2052,
    meanings: ['Cavity', 'Hole', 'Slit', 'Very', 'Great', 'Exceedingly'],
    on: ['こう', 'く'],
    kun: ['あな'],
    jlpt: 1,
    quizAnswers: ['Plait', 'Vegetable', 'Burst Open', 'Cavity'],
    similars: [
      {
        kanji: '子',
        meaning: 'child'
      },
      {
        kanji: '乳',
        meaning: 'milk'
      },
      {
        kanji: '孤',
        meaning: 'orphan'
      },
      {
        kanji: '地',
        meaning: 'ground'
      },
      {
        kanji: '妃',
        meaning: 'queen'
      },
      {
        kanji: '孫',
        meaning: 'grandchild'
      },
      {
        kanji: '教',
        meaning: 'teach'
      },
      {
        kanji: '郭',
        meaning: 'enclosure'
      },
      {
        kanji: '化',
        meaning: 'change'
      },
      {
        kanji: '元',
        meaning: 'beginning'
      }
    ]
  },
  {
    kanjiName: '邸',
    strokes: 8,
    grade: 8,
    freq: 905,
    meanings: ['Residence', 'Mansion'],
    on: ['てい'],
    kun: ['やしき'],
    jlpt: 1,
    quizAnswers: ['Weak Point', 'Residence', 'Compound', 'Capture'],
    similars: [
      {
        kanji: '郵',
        meaning: 'mail'
      },
      {
        kanji: '岳',
        meaning: 'point'
      },
      {
        kanji: '氏',
        meaning: 'family name'
      },
      {
        kanji: '廷',
        meaning: 'courts'
      },
      {
        kanji: '邦',
        meaning: 'home country'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '午',
        meaning: 'noon'
      },
      {
        kanji: '年',
        meaning: 'year'
      },
      {
        kanji: '邪',
        meaning: 'wicked'
      },
      {
        kanji: '缶',
        meaning: 'tin can'
      }
    ]
  },
  {
    kanjiName: '郡',
    strokes: 10,
    grade: 4,
    freq: 965,
    meanings: ['County', 'District'],
    on: ['ぐん'],
    kun: ['こおり'],
    jlpt: 1,
    quizAnswers: ['Re-', 'County', 'Conceal', 'Bravery'],
    similars: [
      {
        kanji: '部',
        meaning: 'section'
      },
      {
        kanji: '君',
        meaning: 'mister'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '邦',
        meaning: 'home country'
      },
      {
        kanji: '計',
        meaning: 'plot'
      },
      {
        kanji: '都',
        meaning: 'metropolis'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '詔',
        meaning: 'imperial edict'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      }
    ]
  },
  {
    kanjiName: '釈',
    strokes: 11,
    grade: 8,
    freq: 1097,
    meanings: ['Explanation'],
    on: ['しゃく', 'せき'],
    kun: ['とく', 'す.てる', 'ゆる.す'],
    jlpt: 1,
    quizAnswers: ['Power', 'Explanation', 'Way', 'Stratum'],
    similars: [
      {
        kanji: '奥',
        meaning: 'heart'
      },
      {
        kanji: '彩',
        meaning: 'coloring'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '森',
        meaning: 'forest'
      },
      {
        kanji: '疑',
        meaning: 'doubt'
      },
      {
        kanji: '炉',
        meaning: 'hearth'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      }
    ]
  },
  {
    kanjiName: '肪',
    strokes: 8,
    grade: 8,
    freq: 1878,
    meanings: ['Obese', 'Fat'],
    on: ['ぼう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Obese', 'Rank', 'Braid', 'Sign Of The Rat'],
    similars: [
      {
        kanji: '肺',
        meaning: 'lungs'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '脹',
        meaning: 'dilate'
      },
      {
        kanji: '動',
        meaning: 'move'
      },
      {
        kanji: '脚',
        meaning: 'skids'
      },
      {
        kanji: '里',
        meaning: 'ri'
      },
      {
        kanji: '服',
        meaning: 'clothing'
      },
      {
        kanji: '月',
        meaning: 'month'
      },
      {
        kanji: '脈',
        meaning: 'vein'
      }
    ]
  },
  {
    kanjiName: '喚',
    strokes: 12,
    grade: 8,
    freq: 1120,
    meanings: ['Yell', 'Cry', 'Call', 'Scream', 'Summon'],
    on: ['かん'],
    kun: ['わめ.く'],
    jlpt: 1,
    quizAnswers: ['Curious', 'Courtyard', 'Form', 'Yell'],
    similars: [
      {
        kanji: '換',
        meaning: 'interchange'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '吹',
        meaning: 'blow'
      },
      {
        kanji: '蚊',
        meaning: 'mosquito'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '味',
        meaning: 'flavor'
      },
      {
        kanji: '呼',
        meaning: 'call'
      },
      {
        kanji: '牧',
        meaning: 'breed'
      }
    ]
  },
  {
    kanjiName: '媛',
    strokes: 12,
    grade: 8,
    freq: 1735,
    meanings: ['Beautiful Woman', 'Princess'],
    on: ['えん'],
    kun: ['ひめ'],
    jlpt: 1,
    quizAnswers: ['Beautiful Woman', 'Offense', 'Sky', 'Convenience']
  },
  {
    kanjiName: '貞',
    strokes: 9,
    grade: 8,
    freq: 1389,
    meanings: ['Upright', 'Chastity', 'Constancy', 'Righteousness'],
    on: ['てい'],
    kun: ['さだ'],
    jlpt: 1,
    quizAnswers: ['Upright', 'Disobey', 'Eternity', 'Extend'],
    similars: [
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '貝',
        meaning: 'shellfish'
      },
      {
        kanji: '負',
        meaning: 'defeat'
      },
      {
        kanji: '貫',
        meaning: 'pierce'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '買',
        meaning: 'buy'
      },
      {
        kanji: '賀',
        meaning: 'congratulations'
      }
    ]
  },
  {
    kanjiName: '玄',
    strokes: 5,
    grade: 8,
    freq: 1409,
    meanings: ['Mysterious', 'Occultness', 'Black', 'Deep', 'Profound'],
    on: ['げん'],
    kun: ['くろ', 'くろ.い'],
    jlpt: 1,
    quizAnswers: ['Mysterious', 'Dry', 'Invest In', 'Compete With'],
    similars: [
      {
        kanji: '広',
        meaning: 'wide'
      },
      {
        kanji: '弦',
        meaning: 'bowstring'
      },
      {
        kanji: '去',
        meaning: 'gone'
      },
      {
        kanji: '芸',
        meaning: 'technique'
      },
      {
        kanji: '拡',
        meaning: 'broaden'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple'
      },
      {
        kanji: '畜',
        meaning: 'livestock'
      },
      {
        kanji: '伝',
        meaning: 'transmit'
      },
      {
        kanji: '会',
        meaning: 'meeting'
      }
    ]
  },
  {
    kanjiName: '苗',
    strokes: 8,
    grade: 8,
    freq: 1713,
    meanings: ['Seedling', 'Sapling', 'Shoot'],
    on: ['びょう', 'みょう'],
    kun: ['なえ', 'なわ-'],
    jlpt: 1,
    quizAnswers: ['School', 'Seedling', 'Reside In', 'Total'],
    similars: [
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '抽',
        meaning: 'pluck'
      },
      {
        kanji: '猫',
        meaning: 'cat'
      },
      {
        kanji: '描',
        meaning: 'sketch'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '由',
        meaning: 'wherefore'
      },
      {
        kanji: '百',
        meaning: 'hundred'
      },
      {
        kanji: '田',
        meaning: 'rice field'
      },
      {
        kanji: '者',
        meaning: 'someone'
      }
    ]
  },
  {
    kanjiName: '渦',
    strokes: 12,
    grade: 8,
    freq: 1789,
    meanings: ['Whirlpool', 'Eddy', 'Vortex'],
    on: ['か'],
    kun: ['うず'],
    jlpt: 1,
    quizAnswers: ['Remains', 'Years Old', 'Whirlpool', 'Receive (a Blow)'],
    similars: [
      {
        kanji: '禍',
        meaning: 'calamity'
      },
      {
        kanji: '滴',
        meaning: 'drip'
      },
      {
        kanji: '活',
        meaning: 'lively'
      },
      {
        kanji: '洞',
        meaning: 'den'
      },
      {
        kanji: '滑',
        meaning: 'slippery'
      },
      {
        kanji: '溶',
        meaning: 'melt'
      },
      {
        kanji: '満',
        meaning: 'full'
      },
      {
        kanji: '沼',
        meaning: 'marsh'
      },
      {
        kanji: '高',
        meaning: 'tall'
      },
      {
        kanji: '治',
        meaning: 'reign'
      }
    ]
  },
  {
    kanjiName: '慈',
    strokes: 13,
    grade: 8,
    freq: 1811,
    meanings: ['Mercy'],
    on: ['じ'],
    kun: ['いつく.しむ'],
    jlpt: 1,
    quizAnswers: ['Mercy', 'Cut Fine', 'Mingle', 'Curdle'],
    similars: [
      {
        kanji: '機',
        meaning: 'loom'
      },
      {
        kanji: '慰',
        meaning: 'consolation'
      },
      {
        kanji: '認',
        meaning: 'acknowledge'
      },
      {
        kanji: '総',
        meaning: 'general'
      },
      {
        kanji: '憾',
        meaning: 'remorse'
      },
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '幾',
        meaning: 'how many'
      },
      {
        kanji: '滋',
        meaning: 'nourishing'
      },
      {
        kanji: '窓',
        meaning: 'window'
      },
      {
        kanji: '為',
        meaning: 'do'
      }
    ]
  },
  {
    kanjiName: '襟',
    strokes: 18,
    grade: 8,
    freq: 2030,
    meanings: ['Collar', 'Neck', 'Lapel', "One's Inner Feelings"],
    on: ['きん'],
    kun: ['えり'],
    jlpt: 1,
    quizAnswers: ['Member', 'Collar', 'Branch Off', 'Hear'],
    similars: [
      {
        kanji: '禁',
        meaning: 'prohibition'
      },
      {
        kanji: '礎',
        meaning: 'cornerstone'
      },
      {
        kanji: '森',
        meaning: 'forest'
      },
      {
        kanji: '磨',
        meaning: 'grind'
      },
      {
        kanji: '標',
        meaning: 'signpost'
      },
      {
        kanji: '裕',
        meaning: 'abundant'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '暦',
        meaning: 'calendar'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      }
    ]
  },
  {
    kanjiName: '蓮',
    strokes: 13,
    grade: 9,
    freq: 1839,
    meanings: ['Lotus'],
    on: ['れん'],
    kun: ['はす', 'はちす'],
    jlpt: 1,
    quizAnswers: ['Injury', 'Coil Around', 'Lotus', 'Large']
  },
  {
    kanjiName: '亮',
    strokes: 9,
    grade: 9,
    freq: 1821,
    meanings: ['Clear', 'Help'],
    on: ['りょう'],
    kun: ['あきらか'],
    jlpt: 1,
    quizAnswers: ['Clear', 'Request', 'Advantage', 'Soon']
  },
  {
    kanjiName: '聡',
    strokes: 14,
    grade: 9,
    freq: 1507,
    meanings: ['Wise', 'Fast Learner'],
    on: ['そう'],
    kun: ['さと.い', 'みみざと.い'],
    jlpt: 1,
    quizAnswers: ['Fluid', 'Department', 'Revelation', 'Wise']
  },
  {
    kanjiName: '浦',
    strokes: 10,
    grade: 8,
    freq: 977,
    meanings: ['Bay', 'Creek', 'Inlet', 'Gulf', 'Beach', 'Seacoast'],
    on: ['ほ'],
    kun: ['うら'],
    jlpt: 1,
    quizAnswers: ['Be Madly In Love', 'Bay', 'Man', 'Literary Work'],
    similars: [
      {
        kanji: '捕',
        meaning: 'catch'
      },
      {
        kanji: '補',
        meaning: 'supplement'
      },
      {
        kanji: '源',
        meaning: 'source'
      },
      {
        kanji: '前',
        meaning: 'in front'
      },
      {
        kanji: '泊',
        meaning: 'overnight stay'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '恒',
        meaning: 'constancy'
      },
      {
        kanji: '愉',
        meaning: 'pleasure'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '漂',
        meaning: 'drift'
      }
    ]
  },
  {
    kanjiName: '塚',
    strokes: 12,
    grade: 8,
    freq: 869,
    meanings: ['Hillock', 'Mound'],
    on: ['ちょう'],
    kun: ['つか', '-づか'],
    jlpt: 1,
    quizAnswers: ['Cost', 'In Doubt', 'Hillock', 'Return'],
    similars: [
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '嫁',
        meaning: 'marry into'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      },
      {
        kanji: '稼',
        meaning: 'earnings'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      },
      {
        kanji: '殻',
        meaning: 'husk'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '穀',
        meaning: 'cereals'
      },
      {
        kanji: '墜',
        meaning: 'crash'
      }
    ]
  },
  {
    kanjiName: '陥',
    strokes: 10,
    grade: 8,
    freq: 1154,
    meanings: ['Collapse', 'Fall Into', 'Cave In', 'Fall (castle)', 'Slide Into'],
    on: ['かん'],
    kun: ['おちい.る', 'おとしい.れる'],
    jlpt: 1,
    quizAnswers: ['Toil', 'Collapse', 'Reach', 'Ice'],
    similars: [
      {
        kanji: '階',
        meaning: 'storey'
      },
      {
        kanji: '伯',
        meaning: 'chief'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '旨',
        meaning: 'delicious'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '附',
        meaning: 'affixed'
      },
      {
        kanji: '旬',
        meaning: 'decameron'
      },
      {
        kanji: '指',
        meaning: 'finger'
      },
      {
        kanji: '白',
        meaning: 'white'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      }
    ]
  },
  {
    kanjiName: '貫',
    strokes: 11,
    grade: 8,
    freq: 1156,
    meanings: ['Pierce', '8 1/3lbs', 'Penetrate', 'Brace'],
    on: ['かん'],
    kun: ['つらぬ.く', 'ぬ.く', 'ぬき'],
    jlpt: 1,
    quizAnswers: ['Pierce', 'Banish', 'Problem', 'Engrave'],
    similars: [
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '貴',
        meaning: 'precious'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '慣',
        meaning: 'accustomed'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '順',
        meaning: 'obey'
      }
    ]
  },
  {
    kanjiName: '覇',
    strokes: 19,
    grade: 8,
    freq: 1173,
    meanings: ['Hegemony', 'Supremacy', 'Leadership', 'Champion'],
    on: ['は', 'はく'],
    kun: ['はたがしら'],
    jlpt: 1,
    quizAnswers: ['Hegemony', 'Shoulder-pole Load', 'Navigate', 'Drink'],
    similars: [
      {
        kanji: '暫',
        meaning: 'temporarily'
      },
      {
        kanji: '靴',
        meaning: 'shoes'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '輪',
        meaning: 'wheel'
      },
      {
        kanji: '軸',
        meaning: 'axis'
      },
      {
        kanji: '晴',
        meaning: 'clear up'
      },
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '園',
        meaning: 'park'
      },
      {
        kanji: '湖',
        meaning: 'lake'
      },
      {
        kanji: '革',
        meaning: 'leather'
      }
    ]
  },
  {
    kanjiName: '呂',
    strokes: 7,
    grade: 8,
    freq: 2055,
    meanings: ['Spine', 'Backbone'],
    on: ['ろ', 'りょ'],
    kun: ['せぼね'],
    jlpt: 1,
    quizAnswers: ['Grow Late', 'Rescue', 'Spine', 'Method']
  },
  {
    kanjiName: '擁',
    strokes: 16,
    grade: 8,
    freq: 1213,
    meanings: ['Hug', 'Embrace', 'Possess', 'Protect', 'Lead'],
    on: ['よう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Attempt', 'Leather', 'Hug', 'Pass Thru'],
    similars: [
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '羅',
        meaning: 'gauze'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '雌',
        meaning: 'feminine'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '携',
        meaning: 'portable'
      }
    ]
  },
  {
    kanjiName: '孤',
    strokes: 9,
    grade: 8,
    freq: 1239,
    meanings: ['Orphan', 'Alone'],
    on: ['こ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Orphan', 'Manipulate', 'Welcome', 'Part-'],
    similars: [
      {
        kanji: '弧',
        meaning: 'arc'
      },
      {
        kanji: '孫',
        meaning: 'grandchild'
      },
      {
        kanji: '旋',
        meaning: 'rotation'
      },
      {
        kanji: '彼',
        meaning: 'he'
      },
      {
        kanji: '波',
        meaning: 'waves'
      },
      {
        kanji: '妊',
        meaning: 'pregnancy'
      },
      {
        kanji: '皮',
        meaning: 'pelt'
      },
      {
        kanji: '妙',
        meaning: 'exquisite'
      },
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '斥',
        meaning: 'reject'
      }
    ]
  },
  {
    kanjiName: '賠',
    strokes: 15,
    grade: 8,
    freq: 1243,
    meanings: ['Compensation', 'Indemnify'],
    on: ['ばい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Compensation', 'Specialty', 'Heighten', 'Mistake'],
    similars: [
      {
        kanji: '貯',
        meaning: 'savings'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      },
      {
        kanji: '財',
        meaning: 'property'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      },
      {
        kanji: '轄',
        meaning: 'control'
      },
      {
        kanji: '瞬',
        meaning: 'wink'
      },
      {
        kanji: '昨',
        meaning: 'yesterday'
      }
    ]
  },
  {
    kanjiName: '鎖',
    strokes: 18,
    grade: 8,
    freq: 1250,
    meanings: ['Chain', 'Irons', 'Connection'],
    on: ['さ'],
    kun: ['くさり', 'とざ.す'],
    jlpt: 1,
    quizAnswers: ['Chain', 'Be Beyond', 'Forest', 'By Means Of'],
    similars: [
      {
        kanji: '鏡',
        meaning: 'mirror'
      },
      {
        kanji: '鐘',
        meaning: 'bell'
      },
      {
        kanji: '錬',
        meaning: 'tempering'
      },
      {
        kanji: '鎮',
        meaning: 'tranquilize'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '錯',
        meaning: 'confused'
      },
      {
        kanji: '僚',
        meaning: 'colleague'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      }
    ]
  },
  {
    kanjiName: '噴',
    strokes: 15,
    grade: 8,
    freq: 1270,
    meanings: ['Erupt', 'Spout', 'Emit', 'Flush Out'],
    on: ['ふん'],
    kun: ['ふ.く'],
    jlpt: 1,
    quizAnswers: ['Fear', 'Erupt', 'Modify', 'Plunder'],
    similars: [
      {
        kanji: '憤',
        meaning: 'aroused'
      },
      {
        kanji: '墳',
        meaning: 'tomb'
      },
      {
        kanji: '貴',
        meaning: 'precious'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '頼',
        meaning: 'trust'
      },
      {
        kanji: '頭',
        meaning: 'head'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '貸',
        meaning: 'lend'
      }
    ]
  },
  {
    kanjiName: '祥',
    strokes: 10,
    grade: 8,
    freq: 1273,
    meanings: ['Auspicious', 'Happiness', 'Blessedness', 'Good Omen', 'Good Fortune'],
    on: ['しょう'],
    kun: ['さいわ.い', 'きざ.し', 'よ.い', 'つまび.らか'],
    jlpt: 1,
    quizAnswers: ['Implore', 'Estimate', 'Auspicious', 'Wrap'],
    similars: [
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '祈',
        meaning: 'pray'
      },
      {
        kanji: '詳',
        meaning: 'detailed'
      },
      {
        kanji: '禅',
        meaning: 'Zen'
      },
      {
        kanji: '悩',
        meaning: 'trouble'
      },
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '南',
        meaning: 'south'
      },
      {
        kanji: '社',
        meaning: 'company'
      },
      {
        kanji: '伴',
        meaning: 'consort'
      },
      {
        kanji: '羊',
        meaning: 'sheep'
      }
    ]
  },
  {
    kanjiName: '牲',
    strokes: 9,
    grade: 8,
    freq: 1274,
    meanings: ['Animal Sacrifice', 'Offering'],
    on: ['せい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Animal Sacrifice', 'Belt', 'Recognize', 'Short'],
    similars: [
      {
        kanji: '特',
        meaning: 'special'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '住',
        meaning: 'dwell'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '狂',
        meaning: 'lunatic'
      },
      {
        kanji: '牧',
        meaning: 'breed'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      },
      {
        kanji: '往',
        meaning: 'journey'
      },
      {
        kanji: '栓',
        meaning: 'plug'
      }
    ]
  },
  {
    kanjiName: '秩',
    strokes: 10,
    grade: 8,
    freq: 1275,
    meanings: ['Regularity', 'Salary', 'Order'],
    on: ['ちつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Authority', 'Liquid', 'Loss', 'Regularity'],
    similars: [
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '牧',
        meaning: 'breed'
      },
      {
        kanji: '数',
        meaning: 'number'
      },
      {
        kanji: '族',
        meaning: 'tribe'
      }
    ]
  },
  {
    kanjiName: '唆',
    strokes: 10,
    grade: 8,
    freq: 1278,
    meanings: ['Tempt', 'Seduce', 'Instigate', 'Promote'],
    on: ['さ'],
    kun: ['そそ.る', 'そそのか.す'],
    jlpt: 1,
    quizAnswers: ['Tempt', 'Individual', 'Protruding', 'Quantity'],
    similars: [
      {
        kanji: '俊',
        meaning: 'sagacious'
      },
      {
        kanji: '吹',
        meaning: 'blow'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      },
      {
        kanji: '酸',
        meaning: 'acid'
      },
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '吸',
        meaning: 'suck'
      },
      {
        kanji: '兄',
        meaning: 'elder brother'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '味',
        meaning: 'flavor'
      },
      {
        kanji: '髪',
        meaning: 'hair of the head'
      }
    ]
  },
  {
    kanjiName: '膨',
    strokes: 16,
    grade: 8,
    freq: 1293,
    meanings: ['Swell', 'Get Fat', 'Thick'],
    on: ['ぼう'],
    kun: ['ふく.らむ', 'ふく.れる'],
    jlpt: 1,
    quizAnswers: ['Fishing', 'Swell', 'Censure', 'Play'],
    similars: [
      {
        kanji: '影',
        meaning: 'shadow'
      },
      {
        kanji: '彫',
        meaning: 'carve'
      },
      {
        kanji: '猿',
        meaning: 'monkey'
      },
      {
        kanji: '樹',
        meaning: 'timber'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '臓',
        meaning: 'entrails'
      },
      {
        kanji: '胴',
        meaning: 'trunk'
      },
      {
        kanji: '闘',
        meaning: 'fight'
      },
      {
        kanji: '膜',
        meaning: 'membrane'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      }
    ]
  },
  {
    kanjiName: '芳',
    strokes: 7,
    grade: 8,
    freq: 1302,
    meanings: ['Perfume', 'Balmy', 'Favorable', 'Fragrant'],
    on: ['ほう'],
    kun: ['かんば.しい'],
    jlpt: 1,
    quizAnswers: ['Perfume', 'Right', '-times', 'Chapter'],
    similars: [
      {
        kanji: '坊',
        meaning: 'boy'
      },
      {
        kanji: '芽',
        meaning: 'bud'
      },
      {
        kanji: '荒',
        meaning: 'laid waste'
      },
      {
        kanji: '英',
        meaning: 'England'
      },
      {
        kanji: '房',
        meaning: 'tassel'
      },
      {
        kanji: '茂',
        meaning: 'overgrown'
      },
      {
        kanji: '芋',
        meaning: 'potato'
      },
      {
        kanji: '妨',
        meaning: 'disturb'
      },
      {
        kanji: '坑',
        meaning: 'pit'
      },
      {
        kanji: '正',
        meaning: 'correct'
      }
    ]
  },
  {
    kanjiName: '恒',
    strokes: 9,
    grade: 8,
    freq: 1314,
    meanings: ['Constancy', 'Always'],
    on: ['こう'],
    kun: ['つね', 'つねに'],
    jlpt: 1,
    quizAnswers: ['Weapon', 'Roll Up', 'Statue', 'Constancy'],
    similars: [
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '悼',
        meaning: 'lament'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '垣',
        meaning: 'hedge'
      },
      {
        kanji: '泊',
        meaning: 'overnight stay'
      },
      {
        kanji: '但',
        meaning: 'however'
      },
      {
        kanji: '神',
        meaning: 'gods'
      }
    ]
  },
  {
    kanjiName: '倫',
    strokes: 10,
    grade: 8,
    freq: 1322,
    meanings: ['Ethics', 'Companion'],
    on: ['りん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Overwhelm', 'Ethics', 'Rescue', 'Reputation'],
    similars: [
      {
        kanji: '偏',
        meaning: 'partial'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      },
      {
        kanji: '輪',
        meaning: 'wheel'
      },
      {
        kanji: '論',
        meaning: 'argument'
      },
      {
        kanji: '希',
        meaning: 'hope'
      },
      {
        kanji: '愉',
        meaning: 'pleasure'
      },
      {
        kanji: '補',
        meaning: 'supplement'
      },
      {
        kanji: '編',
        meaning: 'compilation'
      },
      {
        kanji: '循',
        meaning: 'sequential'
      },
      {
        kanji: '備',
        meaning: 'equip'
      }
    ]
  },
  {
    kanjiName: '陳',
    strokes: 11,
    grade: 8,
    freq: 1323,
    meanings: ['Exhibit', 'State', 'Relate', 'Explain'],
    on: ['ちん'],
    kun: ['ひ.ねる'],
    jlpt: 1,
    quizAnswers: ['Arrive At', 'Unusual', 'Exhibit', 'Seal'],
    similars: [
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '限',
        meaning: 'limit'
      },
      {
        kanji: '更',
        meaning: 'grow late'
      },
      {
        kanji: '裸',
        meaning: 'naked'
      },
      {
        kanji: '媒',
        meaning: 'mediator'
      }
    ]
  },
  {
    kanjiName: '須',
    strokes: 12,
    grade: 8,
    freq: 1339,
    meanings: ['Ought', 'By All Means', 'Necessarily'],
    on: ['す', 'しゅ'],
    kun: ['すべから.く', 'すべし', 'ひげ', 'まつ', 'もち.いる', 'もと.める'],
    jlpt: 1,
    quizAnswers: ['Ought', 'Scenery', 'Flower', 'Edge']
  },
  {
    kanjiName: '偏',
    strokes: 11,
    grade: 8,
    freq: 1340,
    meanings: ['Partial', 'Side', 'Left-side Radical', 'Inclining', 'Biased'],
    on: ['へん'],
    kun: ['かたよ.る'],
    jlpt: 1,
    quizAnswers: ['Partial', 'Plaque', 'Sensation', 'Grow'],
    similars: [
      {
        kanji: '編',
        meaning: 'compilation'
      },
      {
        kanji: '倫',
        meaning: 'ethics'
      },
      {
        kanji: '備',
        meaning: 'equip'
      },
      {
        kanji: '遍',
        meaning: 'everywhere'
      },
      {
        kanji: '刷',
        meaning: 'printing'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '論',
        meaning: 'argument'
      },
      {
        kanji: '輪',
        meaning: 'wheel'
      },
      {
        kanji: '舗',
        meaning: 'shop'
      },
      {
        kanji: '借',
        meaning: 'borrow'
      }
    ]
  },
  {
    kanjiName: '遇',
    strokes: 12,
    grade: 8,
    freq: 1343,
    meanings: ['Meet', 'Encounter', 'Interview', 'Treat', 'Entertain', 'Receive', 'Deal With'],
    on: ['ぐう'],
    kun: ['あ.う'],
    jlpt: 1,
    quizAnswers: ['Meet', 'Force', 'Brush', 'Covetousness'],
    similars: [
      {
        kanji: '愚',
        meaning: 'foolish'
      },
      {
        kanji: '偶',
        meaning: 'accidentally'
      },
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '隅',
        meaning: 'corner'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '遭',
        meaning: 'encounter'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '開',
        meaning: 'open'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      }
    ]
  },
  {
    kanjiName: '糧',
    strokes: 18,
    grade: 8,
    freq: 1354,
    meanings: ['Provisions', 'Food', 'Bread'],
    on: ['りょう', 'ろう'],
    kun: ['かて'],
    jlpt: 1,
    quizAnswers: ['Another', 'Shape', 'Work', 'Provisions'],
    similars: [
      {
        kanji: '種',
        meaning: 'species'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      },
      {
        kanji: '類',
        meaning: 'sort'
      },
      {
        kanji: '積',
        meaning: 'volume'
      },
      {
        kanji: '潤',
        meaning: 'wet'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '縄',
        meaning: 'straw rope'
      },
      {
        kanji: '欄',
        meaning: 'column'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      }
    ]
  },
  {
    kanjiName: '殊',
    strokes: 10,
    grade: 8,
    freq: 1361,
    meanings: ['Particularly', 'Especially', 'Exceptionally'],
    on: ['しゅ'],
    kun: ['こと'],
    jlpt: 1,
    quizAnswers: ['Manage', 'Excellent', 'Exert', 'Particularly'],
    similars: [
      {
        kanji: '残',
        meaning: 'remainder'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '来',
        meaning: 'come'
      },
      {
        kanji: '様',
        meaning: 'Esq.'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '探',
        meaning: 'grope'
      },
      {
        kanji: '執',
        meaning: 'tenacious'
      }
    ]
  },
  {
    kanjiName: '慢',
    strokes: 14,
    grade: 8,
    freq: 1368,
    meanings: ['Ridicule', 'Laziness'],
    on: ['まん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Splendor', 'Ridicule', 'Explain Away', 'Elder Brother'],
    similars: [
      {
        kanji: '漫',
        meaning: 'cartoon'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '帽',
        meaning: 'cap'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      },
      {
        kanji: '捜',
        meaning: 'search'
      },
      {
        kanji: '憎',
        meaning: 'hate'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '隅',
        meaning: 'corner'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      }
    ]
  },
  {
    kanjiName: '没',
    strokes: 7,
    grade: 8,
    freq: 1385,
    meanings: ['Drown', 'Sink', 'Hide', 'Fall Into', 'Disappear', 'Die'],
    on: ['ぼつ', 'もつ'],
    kun: ['おぼ.れる', 'しず.む', 'ない'],
    jlpt: 1,
    quizAnswers: ['Drown', 'Prevail', 'Disclose', 'Thank For'],
    similars: [
      {
        kanji: '波',
        meaning: 'waves'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '疫',
        meaning: 'epidemic'
      },
      {
        kanji: '泳',
        meaning: 'swim'
      },
      {
        kanji: '次',
        meaning: 'next'
      },
      {
        kanji: '汽',
        meaning: 'vapor'
      },
      {
        kanji: '決',
        meaning: 'decide'
      },
      {
        kanji: '役',
        meaning: 'duty'
      },
      {
        kanji: '沢',
        meaning: 'swamp'
      },
      {
        kanji: '段',
        meaning: 'grade'
      }
    ]
  },
  {
    kanjiName: '怠',
    strokes: 9,
    grade: 8,
    freq: 1703,
    meanings: ['Neglect', 'Laziness'],
    on: ['たい'],
    kun: ['おこた.る', 'なま.ける'],
    jlpt: 1,
    quizAnswers: ['Neglect', 'Join', 'Rested', 'Exile'],
    similars: [
      {
        kanji: '忠',
        meaning: 'loyalty'
      },
      {
        kanji: '患',
        meaning: 'afflicted'
      },
      {
        kanji: '点',
        meaning: 'spot'
      },
      {
        kanji: '台',
        meaning: 'pedestal'
      },
      {
        kanji: '感',
        meaning: 'emotion'
      },
      {
        kanji: '惑',
        meaning: 'beguile'
      },
      {
        kanji: '悲',
        meaning: 'grieve'
      },
      {
        kanji: '総',
        meaning: 'general'
      },
      {
        kanji: '憾',
        meaning: 'remorse'
      },
      {
        kanji: '認',
        meaning: 'acknowledge'
      }
    ]
  },
  {
    kanjiName: '遭',
    strokes: 14,
    grade: 8,
    freq: 1554,
    meanings: ['Encounter', 'Meet', 'Party', 'Association', 'Interview', 'Join'],
    on: ['そう'],
    kun: ['あ.う', 'あ.わせる'],
    jlpt: 1,
    quizAnswers: ['Total', 'Sell', 'Encounter', 'Return To'],
    similars: [
      {
        kanji: '曹',
        meaning: 'office'
      },
      {
        kanji: '買',
        meaning: 'buy'
      },
      {
        kanji: '冒',
        meaning: 'risk'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '置',
        meaning: 'placement'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      },
      {
        kanji: '醜',
        meaning: 'ugly'
      },
      {
        kanji: '還',
        meaning: 'send back'
      },
      {
        kanji: '豊',
        meaning: 'bountiful'
      },
      {
        kanji: '草',
        meaning: 'grass'
      }
    ]
  },
  {
    kanjiName: '惰',
    strokes: 12,
    grade: 8,
    freq: 2336,
    meanings: ['Lazy', 'Laziness'],
    on: ['だ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Rain', 'Expand', 'Lazy', 'Acrid'],
    similars: [
      {
        kanji: '情',
        meaning: 'feelings'
      },
      {
        kanji: '清',
        meaning: 'pure'
      },
      {
        kanji: '惜',
        meaning: 'pity'
      },
      {
        kanji: '精',
        meaning: 'refined'
      },
      {
        kanji: '請',
        meaning: 'solicit'
      },
      {
        kanji: '青',
        meaning: 'blue'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '愉',
        meaning: 'pleasure'
      },
      {
        kanji: '涯',
        meaning: 'horizon'
      },
      {
        kanji: '憤',
        meaning: 'aroused'
      }
    ]
  },
  {
    kanjiName: '猟',
    strokes: 11,
    grade: 8,
    freq: 1851,
    meanings: ['Game-hunting', 'Shooting', 'Game', 'Bag'],
    on: ['りょう'],
    kun: ['かり', 'か.る'],
    jlpt: 1,
    quizAnswers: ['Society', 'Bear Up', 'Judgement', 'Game-hunting'],
    similars: [
      {
        kanji: '弾',
        meaning: 'bullet'
      },
      {
        kanji: '猶',
        meaning: 'furthermore'
      },
      {
        kanji: '禅',
        meaning: 'Zen'
      },
      {
        kanji: '脳',
        meaning: 'brain'
      },
      {
        kanji: '悩',
        meaning: 'trouble'
      },
      {
        kanji: '省',
        meaning: 'government ministry'
      },
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '飛',
        meaning: 'fly'
      },
      {
        kanji: '斉',
        meaning: 'adjusted'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      }
    ]
  },
  {
    kanjiName: '乃',
    strokes: 2,
    grade: 9,
    freq: 1978,
    meanings: ['From', 'Possessive Particle', 'Whereupon', 'Accordingly'],
    on: ['ない', 'だい', 'の', 'あい'],
    kun: ['の', 'すなわ.ち', 'なんじ'],
    jlpt: 1,
    quizAnswers: ['Pole', 'From', 'Hundred Million', 'Plant']
  },
  {
    kanjiName: '綾',
    strokes: 14,
    grade: 9,
    freq: 1759,
    meanings: ['Design', 'Figured Cloth', 'Twill'],
    on: ['りん'],
    kun: ['あや'],
    jlpt: 1,
    quizAnswers: ['Lack', 'Design', 'Sustain', 'Edge']
  },
  {
    kanjiName: '颯',
    strokes: 14,
    grade: 9,
    freq: null,
    meanings: ['Sudden', 'Quick', 'Sound Of The Wind'],
    on: ['さつ', 'そう'],
    kun: ['さっ.と'],
    jlpt: 1,
    quizAnswers: ['Congeal', 'Sudden', 'Shoulder (a Gun)', 'Continuation']
  },
  {
    kanjiName: '隼',
    strokes: 10,
    grade: 9,
    freq: 2224,
    meanings: ['Falcon'],
    on: ['しゅん', 'じゅん'],
    kun: ['はやぶさ'],
    jlpt: 1,
    quizAnswers: ['Renowned', 'Duty', 'Pain', 'Falcon']
  },
  {
    kanjiName: '輔',
    strokes: 14,
    grade: 9,
    freq: 1898,
    meanings: ['Help'],
    on: ['ほ', 'ふ'],
    kun: ['たす.ける'],
    jlpt: 1,
    quizAnswers: ['Quiet', 'Shake', 'Bed', 'Help']
  },
  {
    kanjiName: '寛',
    strokes: 13,
    grade: 8,
    freq: 1377,
    meanings: [
      'Tolerant',
      'Leniency',
      'Generosity',
      'Relax',
      'Feel At Home',
      'Be At Ease',
      'Broadminded'
    ],
    on: ['かん'],
    kun: ['くつろ.ぐ', 'ひろ.い', 'ゆる.やか'],
    jlpt: 1,
    quizAnswers: ['Current', 'Tolerant', 'Rave', 'Look'],
    similars: [
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '賓',
        meaning: 'V.I.P.'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '親',
        meaning: 'parent'
      },
      {
        kanji: '宴',
        meaning: 'banquet'
      },
      {
        kanji: '覚',
        meaning: 'memorize'
      },
      {
        kanji: '規',
        meaning: 'standard'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      }
    ]
  },
  {
    kanjiName: '胞',
    strokes: 9,
    grade: 8,
    freq: 1379,
    meanings: ['Placenta', 'Sac', 'Sheath'],
    on: ['ほう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Emergency', 'Placenta', 'Wheel', 'Damage'],
    similars: [
      {
        kanji: '飽',
        meaning: 'sated'
      },
      {
        kanji: '砲',
        meaning: 'cannon'
      },
      {
        kanji: '胸',
        meaning: 'bosom'
      },
      {
        kanji: '抱',
        meaning: 'embrace'
      },
      {
        kanji: '泡',
        meaning: 'bubbles'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '肥',
        meaning: 'fertilizer'
      },
      {
        kanji: '服',
        meaning: 'clothing'
      },
      {
        kanji: '肌',
        meaning: 'texture'
      },
      {
        kanji: '包',
        meaning: 'wrap'
      }
    ]
  },
  {
    kanjiName: '浄',
    strokes: 9,
    grade: 8,
    freq: 1383,
    meanings: ['Clean', 'Purify', 'Cleanse', 'Exorcise', 'Manchu Dynasty'],
    on: ['じょう', 'せい'],
    kun: ['きよ.める', 'きよ.い'],
    jlpt: 1,
    quizAnswers: ['Refuse', 'Recede', 'Clean', 'Region'],
    similars: [
      {
        kanji: '争',
        meaning: 'contend'
      },
      {
        kanji: '汽',
        meaning: 'vapor'
      },
      {
        kanji: '泡',
        meaning: 'bubbles'
      },
      {
        kanji: '性',
        meaning: 'sex'
      },
      {
        kanji: '津',
        meaning: 'haven'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '注',
        meaning: 'pour'
      },
      {
        kanji: '汚',
        meaning: 'dirty'
      },
      {
        kanji: '洋',
        meaning: 'ocean'
      }
    ]
  },
  {
    kanjiName: '随',
    strokes: 12,
    grade: 8,
    freq: 1396,
    meanings: [
      'Follow',
      'Though',
      'Notwithstanding',
      'While',
      'During',
      'Both',
      'All',
      'Obey',
      'Submit To',
      'Comply',
      'At The Mercy Of (the Waves)'
    ],
    on: ['ずい'],
    kun: ['まにま.に', 'したが.う'],
    jlpt: 1,
    quizAnswers: ['Follow', 'Day', 'Lake', 'West'],
    similars: [
      {
        kanji: '堕',
        meaning: 'degenerate'
      },
      {
        kanji: '通',
        meaning: 'traffic'
      },
      {
        kanji: '陳',
        meaning: 'exhibit'
      },
      {
        kanji: '迫',
        meaning: 'urge'
      },
      {
        kanji: '愉',
        meaning: 'pleasure'
      },
      {
        kanji: '有',
        meaning: 'possess'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '前',
        meaning: 'in front'
      },
      {
        kanji: '道',
        meaning: 'road-way'
      },
      {
        kanji: '髄',
        meaning: 'marrow'
      }
    ]
  },
  {
    kanjiName: '稿',
    strokes: 15,
    grade: 8,
    freq: 1400,
    meanings: ['Draft', 'Copy', 'Manuscript', 'Straw'],
    on: ['こう'],
    kun: ['わら', 'したがき'],
    jlpt: 1,
    quizAnswers: ['Strive', 'Woman', 'Draft', 'Tilt'],
    similars: [
      {
        kanji: '矯',
        meaning: 'rectify'
      },
      {
        kanji: '橋',
        meaning: 'bridge'
      },
      {
        kanji: '高',
        meaning: 'tall'
      },
      {
        kanji: '糖',
        meaning: 'sugar'
      },
      {
        kanji: '棺',
        meaning: 'coffin'
      },
      {
        kanji: '粘',
        meaning: 'sticky'
      },
      {
        kanji: '喜',
        meaning: 'rejoice'
      },
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '和',
        meaning: 'harmony'
      }
    ]
  },
  {
    kanjiName: '丹',
    strokes: 4,
    grade: 8,
    freq: 1402,
    meanings: ['Rust-colored', 'Red', 'Red Lead', 'Pills', 'Sincerity'],
    on: ['たん'],
    kun: ['に'],
    jlpt: 1,
    quizAnswers: ['Solid', 'Listen To', 'Stage', 'Rust-colored'],
    similars: [
      {
        kanji: '母',
        meaning: 'mother'
      },
      {
        kanji: '月',
        meaning: 'month'
      },
      {
        kanji: '勺',
        meaning: 'ladle'
      },
      {
        kanji: '毎',
        meaning: 'every'
      },
      {
        kanji: '凡',
        meaning: 'commonplace'
      },
      {
        kanji: '仁',
        meaning: 'humanity'
      },
      {
        kanji: '夕',
        meaning: 'evening'
      },
      {
        kanji: '丸',
        meaning: 'round'
      },
      {
        kanji: '舟',
        meaning: 'boat'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      }
    ]
  },
  {
    kanjiName: '壌',
    strokes: 16,
    grade: 8,
    freq: 1407,
    meanings: ['Lot', 'Earth', 'Soil'],
    on: ['じょう'],
    kun: ['つち'],
    jlpt: 1,
    quizAnswers: ['Lot', 'Perfect', 'Expel', 'Craw'],
    similars: [
      {
        kanji: '嬢',
        meaning: 'lass'
      },
      {
        kanji: '譲',
        meaning: 'defer'
      },
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '壊',
        meaning: 'demolition'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '華',
        meaning: 'splendor'
      },
      {
        kanji: '業',
        meaning: 'business'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      },
      {
        kanji: '琴',
        meaning: 'harp'
      }
    ]
  },
  {
    kanjiName: '舗',
    strokes: 15,
    grade: 8,
    freq: 1412,
    meanings: ['Shop', 'Store', 'Pave'],
    on: ['ほ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Counter For Copies Of A Newspaper Or Magazine', 'Value', 'Refuse', 'Shop'],
    similars: [
      {
        kanji: '諭',
        meaning: 'rebuke'
      },
      {
        kanji: '謀',
        meaning: 'conspire'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '捕',
        meaning: 'catch'
      },
      {
        kanji: '論',
        meaning: 'argument'
      },
      {
        kanji: '補',
        meaning: 'supplement'
      },
      {
        kanji: '硬',
        meaning: 'stiff'
      },
      {
        kanji: '樹',
        meaning: 'timber'
      },
      {
        kanji: '錬',
        meaning: 'tempering'
      },
      {
        kanji: '憩',
        meaning: 'recess'
      }
    ]
  },
  {
    kanjiName: '騰',
    strokes: 20,
    grade: 8,
    freq: 1420,
    meanings: ['Leaping Up', 'Jumping Up', 'Rising', 'Advancing', 'Going'],
    on: ['とう'],
    kun: ['あが.る', 'のぼ.る'],
    jlpt: 1,
    quizAnswers: ['About', 'Harden', 'Measure', 'Leaping Up'],
    similars: [
      {
        kanji: '驚',
        meaning: 'wonder'
      },
      {
        kanji: '篤',
        meaning: 'fervent'
      },
      {
        kanji: '鶏',
        meaning: 'chicken'
      },
      {
        kanji: '然',
        meaning: 'sort of thing'
      },
      {
        kanji: '焦',
        meaning: 'char'
      },
      {
        kanji: '臓',
        meaning: 'entrails'
      },
      {
        kanji: '謄',
        meaning: 'mimeograph'
      },
      {
        kanji: '勝',
        meaning: 'victory'
      },
      {
        kanji: '馬',
        meaning: 'horse'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      }
    ]
  },
  {
    kanjiName: '緯',
    strokes: 16,
    grade: 8,
    freq: 1430,
    meanings: ['Horizontal', 'Woof', 'Left & Right', '(parallels Of) Latitude', 'Prediction'],
    on: ['い'],
    kun: ['よこいと', 'ぬき'],
    jlpt: 1,
    quizAnswers: ['Horizontal', 'Insight', 'Cane', 'Grandchild'],
    similars: [
      {
        kanji: '偉',
        meaning: 'admirable'
      },
      {
        kanji: '結',
        meaning: 'tie'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '繰',
        meaning: 'winding'
      },
      {
        kanji: '締',
        meaning: 'tighten'
      },
      {
        kanji: '組',
        meaning: 'association'
      },
      {
        kanji: '紹',
        meaning: 'introduce'
      },
      {
        kanji: '網',
        meaning: 'netting'
      },
      {
        kanji: '堂',
        meaning: 'public chamber'
      },
      {
        kanji: '綱',
        meaning: 'hawser'
      }
    ]
  },
  {
    kanjiName: '艇',
    strokes: 13,
    grade: 8,
    freq: 1433,
    meanings: ['Rowboat', 'Small Boat'],
    on: ['てい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['House', 'Build', 'Outline', 'Rowboat'],
    similars: [
      {
        kanji: '般',
        meaning: 'carrier'
      },
      {
        kanji: '航',
        meaning: 'navigate'
      },
      {
        kanji: '廷',
        meaning: 'courts'
      },
      {
        kanji: '船',
        meaning: 'ship'
      },
      {
        kanji: '舶',
        meaning: 'liner'
      },
      {
        kanji: '従',
        meaning: 'accompany'
      },
      {
        kanji: '庭',
        meaning: 'courtyard'
      },
      {
        kanji: '彼',
        meaning: 'he'
      },
      {
        kanji: '盤',
        meaning: 'tray'
      },
      {
        kanji: '誕',
        meaning: 'nativity'
      }
    ]
  },
  {
    kanjiName: '披',
    strokes: 8,
    grade: 8,
    freq: 1438,
    meanings: ['Expose', 'Open'],
    on: ['ひ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Grass', 'Someone', 'Expose', 'Drip'],
    similars: [
      {
        kanji: '技',
        meaning: 'skill'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '波',
        meaning: 'waves'
      },
      {
        kanji: '疲',
        meaning: 'exhausted'
      },
      {
        kanji: '扱',
        meaning: 'handle'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '皮',
        meaning: 'pelt'
      },
      {
        kanji: '彼',
        meaning: 'he'
      },
      {
        kanji: '捜',
        meaning: 'search'
      },
      {
        kanji: '破',
        meaning: 'rend'
      }
    ]
  },
  {
    kanjiName: '錦',
    strokes: 16,
    grade: 8,
    freq: 1440,
    meanings: ['Brocade', 'Fine Dress', 'Honors'],
    on: ['きん'],
    kun: ['にしき'],
    jlpt: 1,
    quizAnswers: ['Abdomen', 'Compared With', 'Brocade', 'Opposite']
  },
  {
    kanjiName: '准',
    strokes: 10,
    grade: 8,
    freq: 1441,
    meanings: ['Quasi-', 'Semi-', 'Associate'],
    on: ['じゅん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Connect', 'Quasi-', 'Study', 'Mark'],
    similars: [
      {
        kanji: '推',
        meaning: 'conjecture'
      },
      {
        kanji: '準',
        meaning: 'semi-'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '携',
        meaning: 'portable'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      },
      {
        kanji: '勧',
        meaning: 'persuade'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      }
    ]
  },
  {
    kanjiName: '剰',
    strokes: 11,
    grade: 8,
    freq: 1448,
    meanings: ['Surplus', 'Besides'],
    on: ['じょう'],
    kun: ['あまつさえ', 'あま.り', 'あま.る'],
    jlpt: 1,
    quizAnswers: ['Surplus', '10**8', 'Migrate', 'Occupy'],
    similars: [
      {
        kanji: '乗',
        meaning: 'ride'
      },
      {
        kanji: '利',
        meaning: 'profit'
      },
      {
        kanji: '痢',
        meaning: 'diarrhea'
      },
      {
        kanji: '刺',
        meaning: 'thorn'
      },
      {
        kanji: '借',
        meaning: 'borrow'
      },
      {
        kanji: '剣',
        meaning: 'sabre'
      },
      {
        kanji: '荒',
        meaning: 'laid waste'
      },
      {
        kanji: '郵',
        meaning: 'mail'
      },
      {
        kanji: '垂',
        meaning: 'droop'
      },
      {
        kanji: '年',
        meaning: 'year'
      }
    ]
  },
  {
    kanjiName: '繊',
    strokes: 17,
    grade: 8,
    freq: 1451,
    meanings: ['Slender', 'Fine', 'Thin Kimono'],
    on: ['せん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Slender', 'Main', 'Renew', 'Jurisdiction'],
    similars: [
      {
        kanji: '績',
        meaning: 'exploits'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '統',
        meaning: 'overall'
      },
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '繕',
        meaning: 'darning'
      },
      {
        kanji: '織',
        meaning: 'weave'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '締',
        meaning: 'tighten'
      },
      {
        kanji: '戯',
        meaning: 'frolic'
      }
    ]
  },
  {
    kanjiName: '諭',
    strokes: 16,
    grade: 8,
    freq: 1461,
    meanings: ['Rebuke', 'Admonish', 'Charge', 'Warn', 'Persuade'],
    on: ['ゆ'],
    kun: ['さと.す'],
    jlpt: 1,
    quizAnswers: ['Unusual', 'Rebuke', 'Gigantic', 'Grain'],
    similars: [
      {
        kanji: '論',
        meaning: 'argument'
      },
      {
        kanji: '請',
        meaning: 'solicit'
      },
      {
        kanji: '愉',
        meaning: 'pleasure'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '謝',
        meaning: 'apologize'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '誇',
        meaning: 'boast'
      },
      {
        kanji: '謀',
        meaning: 'conspire'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      }
    ]
  },
  {
    kanjiName: '惨',
    strokes: 11,
    grade: 8,
    freq: 1463,
    meanings: ['Wretched', 'Disaster', 'Cruelty', 'Harsh'],
    on: ['さん', 'ざん'],
    kun: ['みじ.め', 'いた.む', 'むご.い'],
    jlpt: 1,
    quizAnswers: ['Damage', 'Wretched', 'All', 'Six'],
    similars: [
      {
        kanji: '参',
        meaning: 'nonplussed'
      },
      {
        kanji: '修',
        meaning: 'discipline'
      },
      {
        kanji: '淡',
        meaning: 'thin'
      },
      {
        kanji: '快',
        meaning: 'cheerful'
      },
      {
        kanji: '縁',
        meaning: 'affinity'
      },
      {
        kanji: '幾',
        meaning: 'how many'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '豪',
        meaning: 'overpowering'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      }
    ]
  },
  {
    kanjiName: '虐',
    strokes: 9,
    grade: 8,
    freq: 1464,
    meanings: ['Tyrannize', 'Oppress'],
    on: ['ぎゃく'],
    kun: ['しいた.げる'],
    jlpt: 1,
    quizAnswers: ['Tyrannize', 'Diligent', 'Long-lasting', 'Puckery Juice'],
    similars: [
      {
        kanji: '虚',
        meaning: 'void'
      },
      {
        kanji: '虞',
        meaning: 'fear'
      },
      {
        kanji: '劇',
        meaning: 'drama'
      },
      {
        kanji: '戯',
        meaning: 'frolic'
      },
      {
        kanji: '虜',
        meaning: 'captive'
      },
      {
        kanji: '尾',
        meaning: 'tail'
      },
      {
        kanji: '居',
        meaning: 'reside'
      },
      {
        kanji: '庭',
        meaning: 'courtyard'
      },
      {
        kanji: '膚',
        meaning: 'skin'
      },
      {
        kanji: '唐',
        meaning: "T'ang"
      }
    ]
  },
  {
    kanjiName: '据',
    strokes: 11,
    grade: 8,
    freq: 1468,
    meanings: ['Set', 'Lay A Foundation', 'Install', 'Equip', 'Squat Down', 'Sit Down'],
    on: ['きょ'],
    kun: ['す.える', 'す.わる'],
    jlpt: 1,
    quizAnswers: ['Radical', 'Judgement', 'Confront', 'Set'],
    similars: [
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '居',
        meaning: 'reside'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '摘',
        meaning: 'pinch'
      },
      {
        kanji: '活',
        meaning: 'lively'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '招',
        meaning: 'beckon'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      }
    ]
  },
  {
    kanjiName: '徐',
    strokes: 10,
    grade: 8,
    freq: 1470,
    meanings: ['Gradually', 'Slowly', 'Deliberately', 'Gently'],
    on: ['じょ'],
    kun: ['おもむ.ろに'],
    jlpt: 1,
    quizAnswers: ['Seven', 'Join', 'Evident', 'Gradually'],
    similars: [
      {
        kanji: '除',
        meaning: 'exclude'
      },
      {
        kanji: '余',
        meaning: 'too much'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '待',
        meaning: 'wait'
      },
      {
        kanji: '禁',
        meaning: 'prohibition'
      },
      {
        kanji: '侍',
        meaning: 'waiter'
      },
      {
        kanji: '行',
        meaning: 'going'
      },
      {
        kanji: '祭',
        meaning: 'ritual'
      },
      {
        kanji: '得',
        meaning: 'gain'
      },
      {
        kanji: '陰',
        meaning: 'shade'
      }
    ]
  },
  {
    kanjiName: '搭',
    strokes: 12,
    grade: 8,
    freq: 1472,
    meanings: ['Board', 'Load (a Vehicle)', 'Ride'],
    on: ['とう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Harmony', 'Board', 'Office', 'Other'],
    similars: [
      {
        kanji: '塔',
        meaning: 'pagoda'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '匿',
        meaning: 'hide'
      },
      {
        kanji: '措',
        meaning: 'set aside'
      },
      {
        kanji: '唇',
        meaning: 'lips'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '荷',
        meaning: 'baggage'
      }
    ]
  },
  {
    kanjiName: '鯉',
    strokes: 18,
    grade: 9,
    freq: 2369,
    meanings: ['Carp'],
    on: ['り'],
    kun: ['こい'],
    jlpt: 1,
    quizAnswers: ['Ring', 'Throne', 'Mineral', 'Carp']
  },
  {
    kanjiName: '緋',
    strokes: 14,
    grade: 9,
    freq: 2443,
    meanings: ['Scarlet', 'Cardinal'],
    on: ['ひ'],
    kun: ['あけ', 'あか'],
    jlpt: 1,
    quizAnswers: ['Taste', 'Nation', 'Scarlet', 'Overdo']
  },
  {
    kanjiName: '曙',
    strokes: 17,
    grade: 9,
    freq: 1518,
    meanings: ['Dawn', 'Daybreak'],
    on: ['しょ'],
    kun: ['あけぼの'],
    jlpt: 1,
    quizAnswers: ['Status Quo', 'Painting Brush', 'Pierce', 'Dawn']
  },
  {
    kanjiName: '胡',
    strokes: 9,
    grade: 9,
    freq: 1995,
    meanings: ['Barbarian', 'Foreign'],
    on: ['う', 'こ', 'ご'],
    kun: ['なんぞ'],
    jlpt: 1,
    quizAnswers: ['Course', 'Sleep', 'Placement', 'Barbarian']
  },
  {
    kanjiName: '帥',
    strokes: 9,
    grade: 8,
    freq: 2016,
    meanings: ['Commander', 'Leading Troops', 'Governor'],
    on: ['すい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Commander', 'Reside', 'Halt', 'Path'],
    similars: [
      {
        kanji: '師',
        meaning: 'expert'
      },
      {
        kanji: '追',
        meaning: 'chase'
      },
      {
        kanji: '仲',
        meaning: 'go-between'
      },
      {
        kanji: '印',
        meaning: 'stamp'
      },
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '常',
        meaning: 'usual'
      },
      {
        kanji: '帯',
        meaning: 'sash'
      },
      {
        kanji: '燥',
        meaning: 'parch'
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '隔',
        meaning: 'isolate'
      }
    ]
  },
  {
    kanjiName: '啓',
    strokes: 11,
    grade: 8,
    freq: 1403,
    meanings: ['Disclose', 'Open', 'Say'],
    on: ['けい'],
    kun: ['ひら.く', 'さと.す'],
    jlpt: 1,
    quizAnswers: ['Disclose', 'Bring Near', 'Spare', 'Kind'],
    similars: [
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '居',
        meaning: 'reside'
      },
      {
        kanji: '所',
        meaning: 'place'
      },
      {
        kanji: '唇',
        meaning: 'lips'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '扉',
        meaning: 'front door'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '裕',
        meaning: 'abundant'
      },
      {
        kanji: '知',
        meaning: 'know'
      },
      {
        kanji: '括',
        meaning: 'fasten'
      }
    ]
  },
  {
    kanjiName: '葵',
    strokes: 12,
    grade: 9,
    freq: 2122,
    meanings: ['Hollyhock'],
    on: ['き'],
    kun: ['あおい'],
    jlpt: 1,
    quizAnswers: ['Interior', 'Grease', 'The Late', 'Hollyhock']
  },
  {
    kanjiName: '駿',
    strokes: 17,
    grade: 9,
    freq: 1817,
    meanings: ['A Good Horse', 'Speed', 'A Fast Person'],
    on: ['しゅん', 'すん'],
    kun: ['すぐ.れる'],
    jlpt: 1,
    quizAnswers: ['A Good Horse', 'Scribe', 'Follow', 'Circumstances']
  },
  {
    kanjiName: '諒',
    strokes: 15,
    grade: 9,
    freq: null,
    meanings: ['Fact', 'Reality', 'Understand', 'Appreciate'],
    on: ['りょう'],
    kun: ['あきら.か', 'まことに'],
    jlpt: 1,
    quizAnswers: ['Rule', 'Weary', 'Headgear', 'Fact']
  },
  {
    kanjiName: '莉',
    strokes: 10,
    grade: 9,
    freq: null,
    meanings: ['Jasmine'],
    on: ['り', 'らい', 'れい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Dissolve', 'Stop In', 'Jasmine', 'Feces']
  },
  {
    kanjiName: '鯨',
    strokes: 19,
    grade: 8,
    freq: 1486,
    meanings: ['Whale'],
    on: ['げい'],
    kun: ['くじら'],
    jlpt: 1,
    quizAnswers: ['Meeting', 'Whale', 'Hurl', 'Close'],
    similars: [
      {
        kanji: '景',
        meaning: 'scenery'
      },
      {
        kanji: '鮮',
        meaning: 'fresh'
      },
      {
        kanji: '涼',
        meaning: 'refreshing'
      },
      {
        kanji: '楽',
        meaning: 'music'
      },
      {
        kanji: '魚',
        meaning: 'fish'
      },
      {
        kanji: '魅',
        meaning: 'fascination'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '験',
        meaning: 'verification'
      },
      {
        kanji: '影',
        meaning: 'shadow'
      },
      {
        kanji: '騒',
        meaning: 'boisterous'
      }
    ]
  },
  {
    kanjiName: '荘',
    strokes: 9,
    grade: 8,
    freq: 1489,
    meanings: ['Villa', 'Inn', 'Cottage', 'Feudal Manor', 'Solemn', 'Dignified'],
    on: ['そう', 'しょう', 'ちゃん'],
    kun: ['ほうき', 'おごそ.か'],
    jlpt: 1,
    quizAnswers: ['Heat', 'Control', 'Villa', 'Get Thin'],
    similars: [
      {
        kanji: '壮',
        meaning: 'robust'
      },
      {
        kanji: '茎',
        meaning: 'stalk'
      },
      {
        kanji: '型',
        meaning: 'mould'
      },
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '社',
        meaning: 'company'
      },
      {
        kanji: '在',
        meaning: 'exist'
      },
      {
        kanji: '至',
        meaning: 'climax'
      },
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '薄',
        meaning: 'dilute'
      }
    ]
  },
  {
    kanjiName: '栽',
    strokes: 10,
    grade: 8,
    freq: 1496,
    meanings: ['Plantation', 'Planting'],
    on: ['さい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Attire', 'Frivolous', 'In Pain', 'Plantation'],
    similars: [
      {
        kanji: '裁',
        meaning: 'tailor'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '域',
        meaning: 'range'
      },
      {
        kanji: '載',
        meaning: 'ride'
      },
      {
        kanji: '威',
        meaning: 'intimidate'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '茂',
        meaning: 'overgrown'
      },
      {
        kanji: '赤',
        meaning: 'red'
      },
      {
        kanji: '戒',
        meaning: 'commandment'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      }
    ]
  },
  {
    kanjiName: '拐',
    strokes: 8,
    grade: 8,
    freq: 1498,
    meanings: ['Kidnap', 'Falsify'],
    on: ['かい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Mark', 'Kidnap', 'Dealing In', 'Girl'],
    similars: [
      {
        kanji: '拒',
        meaning: 'repel'
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)'
      },
      {
        kanji: '損',
        meaning: 'damage'
      },
      {
        kanji: '沖',
        meaning: 'open sea'
      },
      {
        kanji: '抽',
        meaning: 'pluck'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      },
      {
        kanji: '詔',
        meaning: 'imperial edict'
      },
      {
        kanji: '招',
        meaning: 'beckon'
      },
      {
        kanji: '況',
        meaning: 'condition'
      },
      {
        kanji: '押',
        meaning: 'push'
      }
    ]
  },
  {
    kanjiName: '冠',
    strokes: 9,
    grade: 8,
    freq: 1503,
    meanings: ['Crown', 'Best', 'Peerless'],
    on: ['かん'],
    kun: ['かんむり'],
    jlpt: 1,
    quizAnswers: ['Crown', 'See', 'Plot', 'Weight'],
    similars: [
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '辱',
        meaning: 'embarrass'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '封',
        meaning: 'seal'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '対',
        meaning: 'vis-a-vis'
      },
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '完',
        meaning: 'perfect'
      },
      {
        kanji: '尉',
        meaning: 'military officer'
      },
      {
        kanji: '瓶',
        meaning: 'bottle'
      }
    ]
  },
  {
    kanjiName: '勲',
    strokes: 15,
    grade: 8,
    freq: 1513,
    meanings: ['Meritorious Deed', 'Merit'],
    on: ['くん'],
    kun: ['いさお'],
    jlpt: 1,
    quizAnswers: ['Meritorious Deed', 'Non-', 'Pursue', 'Peaceful'],
    similars: [
      {
        kanji: '動',
        meaning: 'move'
      },
      {
        kanji: '黙',
        meaning: 'silence'
      },
      {
        kanji: '黒',
        meaning: 'black'
      },
      {
        kanji: '薫',
        meaning: 'send forth fragrance'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      },
      {
        kanji: '働',
        meaning: 'work'
      },
      {
        kanji: '専',
        meaning: 'specialty'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      },
      {
        kanji: '然',
        meaning: 'sort of thing'
      },
      {
        kanji: '裏',
        meaning: 'back'
      }
    ]
  },
  {
    kanjiName: '酬',
    strokes: 13,
    grade: 8,
    freq: 1515,
    meanings: ['Repay', 'Reward', 'Retribution'],
    on: ['しゅう', 'しゅ', 'とう'],
    kun: ['むく.いる'],
    jlpt: 1,
    quizAnswers: ['Repay', 'Region', 'Be Madly In Love', 'Battle'],
    similars: [
      {
        kanji: '酢',
        meaning: 'vinegar'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      },
      {
        kanji: '酸',
        meaning: 'acid'
      },
      {
        kanji: '酪',
        meaning: 'dairy products'
      },
      {
        kanji: '酷',
        meaning: 'cruel'
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      },
      {
        kanji: '則',
        meaning: 'rule'
      },
      {
        kanji: '配',
        meaning: 'distribute'
      },
      {
        kanji: '遵',
        meaning: 'abide by'
      }
    ]
  },
  {
    kanjiName: '紋',
    strokes: 10,
    grade: 8,
    freq: 1519,
    meanings: ['Family Crest', 'Figures'],
    on: ['もん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Club', 'Family Crest', 'Cipher', 'Precipitate'],
    similars: [
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '統',
        meaning: 'overall'
      },
      {
        kanji: '納',
        meaning: 'settlement'
      },
      {
        kanji: '級',
        meaning: 'class'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '紀',
        meaning: 'chronicle'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '結',
        meaning: 'tie'
      }
    ]
  },
  {
    kanjiName: '卸',
    strokes: 9,
    grade: 8,
    freq: 1520,
    meanings: ['Wholesale'],
    on: ['しゃ'],
    kun: ['おろ.す', 'おろし', 'おろ.し'],
    jlpt: 1,
    quizAnswers: ['Wholesale', 'Unimportant', 'Noted', 'Drama'],
    similars: [
      {
        kanji: '御',
        meaning: 'honorable'
      },
      {
        kanji: '武',
        meaning: 'warrior'
      },
      {
        kanji: '郵',
        meaning: 'mail'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '年',
        meaning: 'year'
      },
      {
        kanji: '岳',
        meaning: 'point'
      },
      {
        kanji: '垂',
        meaning: 'droop'
      },
      {
        kanji: '缶',
        meaning: 'tin can'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      },
      {
        kanji: '鈍',
        meaning: 'dull'
      }
    ]
  },
  {
    kanjiName: '欄',
    strokes: 20,
    grade: 8,
    freq: 1523,
    meanings: ['Column', 'Handrail', 'Blank', 'Space'],
    on: ['らん'],
    kun: ['てすり'],
    jlpt: 1,
    quizAnswers: ['Column', 'Demand', 'Take Up', 'Impregnable Position'],
    similars: [
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '晶',
        meaning: 'sparkle'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      },
      {
        kanji: '聞',
        meaning: 'hear'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '糧',
        meaning: 'provisions'
      },
      {
        kanji: '願',
        meaning: 'petition'
      },
      {
        kanji: '韻',
        meaning: 'rhyme'
      },
      {
        kanji: '簡',
        meaning: 'simplicity'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      }
    ]
  },
  {
    kanjiName: '逸',
    strokes: 11,
    grade: 8,
    freq: 1524,
    meanings: [
      'Deviate',
      'Idleness',
      'Leisure',
      'Miss The Mark',
      'Evade',
      'Elude',
      'Parry',
      'Diverge'
    ],
    on: ['いつ'],
    kun: ['そ.れる', 'そ.らす', 'はぐ.れる'],
    jlpt: 1,
    quizAnswers: ['Deviate', 'Cancel', 'Skeleton', 'Spain'],
    similars: [
      {
        kanji: '勉',
        meaning: 'exertion'
      },
      {
        kanji: '迫',
        meaning: 'urge'
      },
      {
        kanji: '免',
        meaning: 'excuse'
      },
      {
        kanji: '魚',
        meaning: 'fish'
      },
      {
        kanji: '象',
        meaning: 'elephant'
      },
      {
        kanji: '負',
        meaning: 'defeat'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '透',
        meaning: 'transparent'
      },
      {
        kanji: '的',
        meaning: "bull's eye"
      },
      {
        kanji: '鬼',
        meaning: 'ghost'
      }
    ]
  },
  {
    kanjiName: '尚',
    strokes: 8,
    grade: 8,
    freq: 1531,
    meanings: ['Esteem', 'Furthermore', 'Still', 'Yet'],
    on: ['しょう'],
    kun: ['なお'],
    jlpt: 1,
    quizAnswers: ['Esteem', 'Imitate', 'Die', 'Drop'],
    similars: [
      {
        kanji: '向',
        meaning: 'yonder'
      },
      {
        kanji: '商',
        meaning: 'make a deal'
      },
      {
        kanji: '客',
        meaning: 'guest'
      },
      {
        kanji: '洞',
        meaning: 'den'
      },
      {
        kanji: '否',
        meaning: 'negate'
      },
      {
        kanji: '店',
        meaning: 'store'
      },
      {
        kanji: '谷',
        meaning: 'valley'
      },
      {
        kanji: '官',
        meaning: 'bureaucrat'
      },
      {
        kanji: '荷',
        meaning: 'baggage'
      },
      {
        kanji: '党',
        meaning: 'party'
      }
    ]
  },
  {
    kanjiName: '顕',
    strokes: 18,
    grade: 8,
    freq: 1536,
    meanings: ['Appear', 'Existing'],
    on: ['けん'],
    kun: ['あきらか', 'あらわ.れる'],
    jlpt: 1,
    quizAnswers: ['Tug', 'Refinement', 'Appear', 'Abandon'],
    similars: [
      {
        kanji: '題',
        meaning: 'topic'
      },
      {
        kanji: '頭',
        meaning: 'head'
      },
      {
        kanji: '暗',
        meaning: 'darkness'
      },
      {
        kanji: '願',
        meaning: 'petition'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '買',
        meaning: 'buy'
      },
      {
        kanji: '頻',
        meaning: 'repeatedly'
      },
      {
        kanji: '鎖',
        meaning: 'chain'
      },
      {
        kanji: '暑',
        meaning: 'sultry'
      },
      {
        kanji: '頼',
        meaning: 'trust'
      }
    ]
  },
  {
    kanjiName: '粛',
    strokes: 11,
    grade: 8,
    freq: 1549,
    meanings: ['Solemn', 'Quietly', 'Softly'],
    on: ['しゅく', 'すく'],
    kun: ['つつし.む'],
    jlpt: 1,
    quizAnswers: ['Ability', 'Favor', 'Solemn', 'Tall'],
    similars: [
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '耕',
        meaning: 'till'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '歯',
        meaning: 'tooth'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '弊',
        meaning: 'abuse'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '誠',
        meaning: 'sincerity'
      },
      {
        kanji: '新',
        meaning: 'new'
      },
      {
        kanji: '詳',
        meaning: 'detailed'
      }
    ]
  },
  {
    kanjiName: '愚',
    strokes: 13,
    grade: 8,
    freq: 1551,
    meanings: ['Foolish', 'Folly', 'Absurdity', 'Stupid'],
    on: ['ぐ'],
    kun: ['おろ.か'],
    jlpt: 1,
    quizAnswers: ['Foolish', 'Everything', 'Graduate', 'Satisfy'],
    similars: [
      {
        kanji: '遇',
        meaning: 'meet'
      },
      {
        kanji: '恵',
        meaning: 'favor'
      },
      {
        kanji: '恥',
        meaning: 'shame'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '偶',
        meaning: 'accidentally'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '黒',
        meaning: 'black'
      },
      {
        kanji: '悪',
        meaning: 'bad'
      },
      {
        kanji: '関',
        meaning: 'connection'
      }
    ]
  },
  {
    kanjiName: '庶',
    strokes: 11,
    grade: 8,
    freq: 1558,
    meanings: ['Commoner', 'All', 'Bastard'],
    on: ['しょ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Commoner', 'Cakes', 'Savings', 'Repel'],
    similars: [
      {
        kanji: '遮',
        meaning: 'intercept'
      },
      {
        kanji: '度',
        meaning: 'degrees'
      },
      {
        kanji: '席',
        meaning: 'seat'
      },
      {
        kanji: '点',
        meaning: 'spot'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '薫',
        meaning: 'send forth fragrance'
      },
      {
        kanji: '雨',
        meaning: 'rain'
      },
      {
        kanji: '烈',
        meaning: 'ardent'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '熱',
        meaning: 'heat'
      }
    ]
  },
  {
    kanjiName: '践',
    strokes: 13,
    grade: 8,
    freq: 1570,
    meanings: ['Tread', 'Step On', 'Trample', 'Practice', 'Carry Through'],
    on: ['せん'],
    kun: ['ふ.む'],
    jlpt: 1,
    quizAnswers: ['Tread', 'Sign', 'Dealer', 'Left'],
    similars: [
      {
        kanji: '跡',
        meaning: 'tracks'
      },
      {
        kanji: '跳',
        meaning: 'hop'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '路',
        meaning: 'path'
      },
      {
        kanji: '桟',
        meaning: 'scaffold'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '距',
        meaning: 'long-distance'
      },
      {
        kanji: '嚇',
        meaning: 'menacing'
      },
      {
        kanji: '踊',
        meaning: 'jump'
      }
    ]
  },
  {
    kanjiName: '呈',
    strokes: 7,
    grade: 8,
    freq: 1571,
    meanings: ['Display', 'Offer', 'Present', 'Send', 'Exhibit'],
    on: ['てい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Display', 'Sky', 'Disease', 'Road'],
    similars: [
      {
        kanji: '吐',
        meaning: 'spit'
      },
      {
        kanji: '叫',
        meaning: 'shout'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '吟',
        meaning: 'versify'
      },
      {
        kanji: '壮',
        meaning: 'robust'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '亜',
        meaning: 'Asia'
      },
      {
        kanji: '狂',
        meaning: 'lunatic'
      },
      {
        kanji: '生',
        meaning: 'life'
      }
    ]
  },
  {
    kanjiName: '疎',
    strokes: 12,
    grade: 8,
    freq: 1572,
    meanings: ['Alienate', 'Rough', 'Neglect', 'Shun', 'Sparse', 'Penetrate'],
    on: ['そ', 'しょ'],
    kun: ['うと.い', 'うと.む', 'まば.ら'],
    jlpt: 1,
    quizAnswers: ['Alienate', 'Flow', 'Middle', 'Talk'],
    similars: [
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '京',
        meaning: 'capital'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      },
      {
        kanji: '険',
        meaning: 'precipitous'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '使',
        meaning: 'use'
      },
      {
        kanji: '環',
        meaning: 'ring'
      },
      {
        kanji: '棄',
        meaning: 'abandon'
      }
    ]
  },
  {
    kanjiName: '疾',
    strokes: 10,
    grade: 8,
    freq: 1577,
    meanings: ['Rapidly'],
    on: ['しつ'],
    kun: ['はや.い'],
    jlpt: 1,
    quizAnswers: ['People', 'Army (incl. Counter)', 'Rapidly', 'Old Friend'],
    similars: [
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '疫',
        meaning: 'epidemic'
      },
      {
        kanji: '疲',
        meaning: 'exhausted'
      },
      {
        kanji: '痴',
        meaning: 'stupid'
      },
      {
        kanji: '痢',
        meaning: 'diarrhea'
      },
      {
        kanji: '廃',
        meaning: 'abolish'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '渓',
        meaning: 'mountain stream'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      }
    ]
  },
  {
    kanjiName: '謡',
    strokes: 16,
    grade: 8,
    freq: 1580,
    meanings: ['Song', 'Sing', 'Ballad', 'Noh Chanting'],
    on: ['よう'],
    kun: ['うた.い', 'うた.う'],
    jlpt: 1,
    quizAnswers: ['Measure', 'Song', 'Explain', 'Wheat'],
    similars: [
      {
        kanji: '詳',
        meaning: 'detailed'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '群',
        meaning: 'flock'
      },
      {
        kanji: '揺',
        meaning: 'swing'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '謙',
        meaning: 'self-effacing'
      },
      {
        kanji: '譜',
        meaning: 'musical score'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '話',
        meaning: 'tale'
      }
    ]
  },
  {
    kanjiName: '鎌',
    strokes: 18,
    grade: 8,
    freq: 1587,
    meanings: ['Sickle', 'Scythe', 'Trick'],
    on: ['れん', 'けん'],
    kun: ['かま'],
    jlpt: 1,
    quizAnswers: ['Sad', 'Division', 'Sickle', 'Flow Into']
  },
  {
    kanjiName: '酷',
    strokes: 14,
    grade: 8,
    freq: 1596,
    meanings: ['Cruel', 'Severe', 'Atrocious', 'Unjust'],
    on: ['こく'],
    kun: ['ひど.い'],
    jlpt: 1,
    quizAnswers: ['Short', 'Spring (season)', 'Cruel', 'People'],
    similars: [
      {
        kanji: '酢',
        meaning: 'vinegar'
      },
      {
        kanji: '酪',
        meaning: 'dairy products'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      },
      {
        kanji: '酵',
        meaning: 'fermentation'
      },
      {
        kanji: '枯',
        meaning: 'wither'
      },
      {
        kanji: '昨',
        meaning: 'yesterday'
      },
      {
        kanji: '酬',
        meaning: 'repay'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '捨',
        meaning: 'discard'
      }
    ]
  },
  {
    kanjiName: '叙',
    strokes: 9,
    grade: 8,
    freq: 1954,
    meanings: ['Confer', 'Relate', 'Narrate', 'Describe'],
    on: ['じょ'],
    kun: ['つい.ず', 'ついで'],
    jlpt: 1,
    quizAnswers: ['Confer', 'Function', 'Normal', 'Mother'],
    similars: [
      {
        kanji: '余',
        meaning: 'too much'
      },
      {
        kanji: '叔',
        meaning: 'uncle'
      },
      {
        kanji: '斜',
        meaning: 'diagonal'
      },
      {
        kanji: '殺',
        meaning: 'kill'
      },
      {
        kanji: '途',
        meaning: 'route'
      },
      {
        kanji: '示',
        meaning: 'show'
      },
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '仮',
        meaning: 'sham'
      },
      {
        kanji: '麦',
        meaning: 'barley'
      },
      {
        kanji: '変',
        meaning: 'unusual'
      }
    ]
  },
  {
    kanjiName: '且',
    strokes: 5,
    grade: 8,
    freq: null,
    meanings: ['Moreover', 'Also', 'Furthermore'],
    on: ['しょ', 'そ', 'しょう'],
    kun: ['か.つ'],
    jlpt: 1,
    quizAnswers: ['Moreover', 'Embedded', 'Single', 'Invite'],
    similars: [
      {
        kanji: '宜',
        meaning: 'best regards'
      },
      {
        kanji: '阻',
        meaning: 'thwart'
      },
      {
        kanji: '皿',
        meaning: 'dish'
      },
      {
        kanji: '助',
        meaning: 'help'
      },
      {
        kanji: '祖',
        meaning: 'ancestor'
      },
      {
        kanji: '査',
        meaning: 'investigate'
      },
      {
        kanji: '租',
        meaning: 'tariff'
      },
      {
        kanji: '典',
        meaning: 'code'
      },
      {
        kanji: '早',
        meaning: 'early'
      },
      {
        kanji: '卓',
        meaning: 'eminent'
      }
    ]
  },
  {
    kanjiName: '痴',
    strokes: 13,
    grade: 8,
    freq: 1663,
    meanings: ['Stupid', 'Foolish'],
    on: ['ち'],
    kun: ['し.れる', 'おろか'],
    jlpt: 1,
    quizAnswers: ['Stupid', 'Versus', 'Car', 'Key'],
    similars: [
      {
        kanji: '痢',
        meaning: 'diarrhea'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '知',
        meaning: 'know'
      },
      {
        kanji: '商',
        meaning: 'make a deal'
      },
      {
        kanji: '唐',
        meaning: "T'ang"
      },
      {
        kanji: '磨',
        meaning: 'grind'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '活',
        meaning: 'lively'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      }
    ]
  },
  {
    kanjiName: '茎',
    strokes: 8,
    grade: 8,
    freq: 2013,
    meanings: ['Stalk', 'Stem'],
    on: ['けい', 'きょう'],
    kun: ['くき'],
    jlpt: 1,
    quizAnswers: ['Lean', 'Brevity', 'Ship', 'Stalk'],
    similars: [
      {
        kanji: '荘',
        meaning: 'villa'
      },
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '径',
        meaning: 'diameter'
      },
      {
        kanji: '怪',
        meaning: 'suspicious'
      },
      {
        kanji: '堅',
        meaning: 'strict'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '至',
        meaning: 'climax'
      },
      {
        kanji: '毒',
        meaning: 'poison'
      },
      {
        kanji: '芸',
        meaning: 'technique'
      }
    ]
  },
  {
    kanjiName: '阿',
    strokes: 8,
    grade: 9,
    freq: 1126,
    meanings: ['Africa', 'Flatter', 'Fawn Upon', 'Corner', 'Nook', 'Recess'],
    on: ['あ', 'お'],
    kun: ['おもね.る', 'くま'],
    jlpt: 1,
    quizAnswers: ['Range', 'Overdo', 'Build', 'Africa']
  },
  {
    kanjiName: '悠',
    strokes: 11,
    grade: 8,
    freq: 1921,
    meanings: ['Permanence', 'Distant', 'Long Time', 'Leisure'],
    on: ['ゆう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Permanence', 'Service', 'Noble', 'Woof'],
    similars: [
      {
        kanji: '愁',
        meaning: 'distress'
      },
      {
        kanji: '修',
        meaning: 'discipline'
      },
      {
        kanji: '懲',
        meaning: 'penal'
      },
      {
        kanji: '総',
        meaning: 'general'
      },
      {
        kanji: '伏',
        meaning: 'prostrated'
      },
      {
        kanji: '移',
        meaning: 'shift'
      },
      {
        kanji: '念',
        meaning: 'wish'
      },
      {
        kanji: '応',
        meaning: 'apply'
      },
      {
        kanji: '怒',
        meaning: 'angry'
      },
      {
        kanji: '息',
        meaning: 'breath'
      }
    ]
  },
  {
    kanjiName: '杏',
    strokes: 7,
    grade: 9,
    freq: 2159,
    meanings: ['Apricot'],
    on: ['きょう', 'あん', 'こう'],
    kun: ['あんず'],
    jlpt: 1,
    quizAnswers: ['How Long', 'Apricot', 'District', 'Enclosure']
  },
  {
    kanjiName: '茜',
    strokes: 9,
    grade: 9,
    freq: 2422,
    meanings: ['Madder', 'Red Dye', 'Turkey Red'],
    on: ['せん'],
    kun: ['あかね'],
    jlpt: 1,
    quizAnswers: ['Mother', 'Madder', 'Mr.', 'Located In']
  },
  {
    kanjiName: '栞',
    strokes: 10,
    grade: 9,
    freq: null,
    meanings: ['Bookmark', 'Guidebook'],
    on: ['かん'],
    kun: ['しおり'],
    jlpt: 1,
    quizAnswers: ['Eighth Sign Of Chinese Zodiac', 'Sign Of The Rat', 'Bookmark', 'Flee']
  },
  {
    kanjiName: '伏',
    strokes: 6,
    grade: 8,
    freq: 1604,
    meanings: ['Prostrated', 'Bend Down', 'Bow', 'Cover', 'Lay (pipes)'],
    on: ['ふく'],
    kun: ['ふ.せる', 'ふ.す'],
    jlpt: 1,
    quizAnswers: ['Forward', 'Fix', 'Throw Away', 'Prostrated'],
    similars: [
      {
        kanji: '体',
        meaning: 'body'
      },
      {
        kanji: '仮',
        meaning: 'sham'
      },
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '伐',
        meaning: 'fell'
      },
      {
        kanji: '伝',
        meaning: 'transmit'
      },
      {
        kanji: '代',
        meaning: 'substitute'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '犬',
        meaning: 'dog'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '休',
        meaning: 'rest'
      }
    ]
  },
  {
    kanjiName: '鎮',
    strokes: 18,
    grade: 8,
    freq: 1617,
    meanings: ['Tranquilize', 'Ancient Peace-preservation Centers'],
    on: ['ちん'],
    kun: ['しず.める', 'しず.まる', 'おさえ'],
    jlpt: 1,
    quizAnswers: ['Hurry', 'Tranquilize', 'Possess', 'Craft'],
    similars: [
      {
        kanji: '錬',
        meaning: 'tempering'
      },
      {
        kanji: '鎖',
        meaning: 'chain'
      },
      {
        kanji: '錯',
        meaning: 'confused'
      },
      {
        kanji: '鐘',
        meaning: 'bell'
      },
      {
        kanji: '鏡',
        meaning: 'mirror'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '頑',
        meaning: 'stubborn'
      }
    ]
  },
  {
    kanjiName: '奉',
    strokes: 8,
    grade: 8,
    freq: 1624,
    meanings: ['Observance', 'Offer', 'Present', 'Dedicate'],
    on: ['ほう', 'ぶ'],
    kun: ['たてまつ.る', 'まつ.る', 'ほう.ずる'],
    jlpt: 1,
    quizAnswers: ['Clique', 'Route', 'Observance', 'Pampas Grass'],
    similars: [
      {
        kanji: '俸',
        meaning: 'stipend'
      },
      {
        kanji: '奏',
        meaning: 'play music'
      },
      {
        kanji: '耕',
        meaning: 'till'
      },
      {
        kanji: '棒',
        meaning: 'rod'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '邦',
        meaning: 'home country'
      },
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '華',
        meaning: 'splendor'
      },
      {
        kanji: '辱',
        meaning: 'embarrass'
      }
    ]
  },
  {
    kanjiName: '憂',
    strokes: 15,
    grade: 8,
    freq: 1625,
    meanings: ['Melancholy', 'Grieve', 'Lament', 'Be Anxious', 'Sad', 'Unhappy'],
    on: ['ゆう'],
    kun: ['うれ.える', 'うれ.い', 'う.い', 'う.き'],
    jlpt: 1,
    quizAnswers: ['Younger Brother', 'Need Not', 'Bathe', 'Melancholy'],
    similars: [
      {
        kanji: '優',
        meaning: 'tenderness'
      },
      {
        kanji: '愛',
        meaning: 'love'
      },
      {
        kanji: '慶',
        meaning: 'jubilation'
      },
      {
        kanji: '恥',
        meaning: 'shame'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '恐',
        meaning: 'fear'
      },
      {
        kanji: '夏',
        meaning: 'summer'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '恵',
        meaning: 'favor'
      },
      {
        kanji: '腹',
        meaning: 'abdomen'
      }
    ]
  },
  {
    kanjiName: '朴',
    strokes: 6,
    grade: 8,
    freq: 1626,
    meanings: ['Crude', 'Simple', 'Plain', 'Docile'],
    on: ['ぼく'],
    kun: ['ほう', 'ほお', 'えのき'],
    jlpt: 1,
    quizAnswers: ['Staple', 'Solid', 'Interest (on Money)', 'Crude'],
    similars: [
      {
        kanji: '杯',
        meaning: 'counter for cupfuls'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '私',
        meaning: 'private'
      },
      {
        kanji: '利',
        meaning: 'profit'
      },
      {
        kanji: '札',
        meaning: 'tag'
      },
      {
        kanji: '不',
        meaning: 'negative'
      },
      {
        kanji: '朽',
        meaning: 'decay'
      },
      {
        kanji: '机',
        meaning: 'desk'
      },
      {
        kanji: '松',
        meaning: 'pine tree'
      },
      {
        kanji: '刺',
        meaning: 'thorn'
      }
    ]
  },
  {
    kanjiName: '惜',
    strokes: 11,
    grade: 8,
    freq: 1641,
    meanings: ['Pity', 'Be Sparing Of', 'Frugal', 'Stingy', 'Regret'],
    on: ['せき'],
    kun: ['お.しい', 'お.しむ'],
    jlpt: 1,
    quizAnswers: ['In Doubt', 'Accompany', 'Store', 'Pity'],
    similars: [
      {
        kanji: '借',
        meaning: 'borrow'
      },
      {
        kanji: '情',
        meaning: 'feelings'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '措',
        meaning: 'set aside'
      },
      {
        kanji: '惰',
        meaning: 'lazy'
      },
      {
        kanji: '普',
        meaning: 'universal'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '慣',
        meaning: 'accustomed'
      },
      {
        kanji: '清',
        meaning: 'pure'
      },
      {
        kanji: '悟',
        meaning: 'enlightenment'
      }
    ]
  },
  {
    kanjiName: '佳',
    strokes: 8,
    grade: 8,
    freq: 1643,
    meanings: ['Excellent', 'Beautiful', 'Good', 'Pleasing', 'Skilled'],
    on: ['か'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Literature', 'Depend On', 'Forces', 'Excellent'],
    similars: [
      {
        kanji: '侍',
        meaning: 'waiter'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '垂',
        meaning: 'droop'
      },
      {
        kanji: '待',
        meaning: 'wait'
      },
      {
        kanji: '街',
        meaning: 'boulevard'
      },
      {
        kanji: '陸',
        meaning: 'land'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '位',
        meaning: 'rank'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '生',
        meaning: 'life'
      }
    ]
  },
  {
    kanjiName: '悼',
    strokes: 11,
    grade: 8,
    freq: 1645,
    meanings: ['Lament', 'Grieve Over'],
    on: ['とう'],
    kun: ['いた.む'],
    jlpt: 1,
    quizAnswers: ['Lament', 'Special', 'Erect', 'Connection'],
    similars: [
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '卓',
        meaning: 'eminent'
      },
      {
        kanji: '恒',
        meaning: 'constancy'
      },
      {
        kanji: '神',
        meaning: 'gods'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '禅',
        meaning: 'Zen'
      },
      {
        kanji: '裸',
        meaning: 'naked'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      }
    ]
  },
  {
    kanjiName: '該',
    strokes: 13,
    grade: 8,
    freq: 1648,
    meanings: ['Above-stated', 'The Said', 'That Specific'],
    on: ['がい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Hall', 'Above-stated', 'Uneasy', 'Variety'],
    similars: [
      {
        kanji: '訪',
        meaning: 'call on'
      },
      {
        kanji: '読',
        meaning: 'read'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '誠',
        meaning: 'sincerity'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '誌',
        meaning: 'document'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '詞',
        meaning: 'part of speech'
      }
    ]
  },
  {
    kanjiName: '赴',
    strokes: 9,
    grade: 8,
    freq: 1649,
    meanings: ['Proceed', 'Get', 'Become', 'Tend'],
    on: ['ふ'],
    kun: ['おもむ.く'],
    jlpt: 1,
    quizAnswers: ['All', '0.1', 'Proceed', 'Mislead'],
    similars: [
      {
        kanji: '走',
        meaning: 'run'
      },
      {
        kanji: '越',
        meaning: 'surpass'
      },
      {
        kanji: '超',
        meaning: 'transcend'
      },
      {
        kanji: '起',
        meaning: 'rouse'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      },
      {
        kanji: '赤',
        meaning: 'red'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '趣',
        meaning: 'purport'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      }
    ]
  },
  {
    kanjiName: '髄',
    strokes: 19,
    grade: 8,
    freq: 1652,
    meanings: ['Marrow', 'Pith', 'Essence'],
    on: ['ずい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Construct', 'Continually', 'Marrow', 'Relationship'],
    similars: [
      {
        kanji: '骨',
        meaning: 'skeleton'
      },
      {
        kanji: '随',
        meaning: 'follow'
      },
      {
        kanji: '宵',
        meaning: 'wee hours'
      },
      {
        kanji: '通',
        meaning: 'traffic'
      },
      {
        kanji: '過',
        meaning: 'overdo'
      },
      {
        kanji: '崩',
        meaning: 'crumble'
      },
      {
        kanji: '棚',
        meaning: 'shelf'
      },
      {
        kanji: '遭',
        meaning: 'encounter'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '適',
        meaning: 'suitable'
      }
    ]
  },
  {
    kanjiName: '傍',
    strokes: 12,
    grade: 8,
    freq: 1660,
    meanings: ['Bystander', 'Side', 'Besides', 'While', 'Nearby', 'Third Person'],
    on: ['ぼう'],
    kun: ['かたわ.ら', 'わき', 'おか-', 'はた', 'そば'],
    jlpt: 1,
    quizAnswers: ['You', 'Omit', 'Dealer', 'Bystander'],
    similars: [
      {
        kanji: '位',
        meaning: 'rank'
      },
      {
        kanji: '帝',
        meaning: 'sovereign'
      },
      {
        kanji: '僕',
        meaning: 'me'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '停',
        meaning: 'halt'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '締',
        meaning: 'tighten'
      },
      {
        kanji: '働',
        meaning: 'work'
      }
    ]
  },
  {
    kanjiName: '累',
    strokes: 11,
    grade: 8,
    freq: 1662,
    meanings: ['Accumulate', 'Involvement', 'Trouble', 'Tie Up', 'Continually'],
    on: ['るい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Gain', 'Employ', 'Home', 'Accumulate'],
    similars: [
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '索',
        meaning: 'cord'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      },
      {
        kanji: '思',
        meaning: 'think'
      },
      {
        kanji: '魅',
        meaning: 'fascination'
      },
      {
        kanji: '紫',
        meaning: 'purple'
      },
      {
        kanji: '糸',
        meaning: 'thread'
      },
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '係',
        meaning: 'person in charge'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      }
    ]
  },
  {
    kanjiName: '癒',
    strokes: 18,
    grade: 8,
    freq: 1667,
    meanings: ['Healing', 'Cure', 'Quench (thirst)', 'Wreak'],
    on: ['ゆ'],
    kun: ['い.える', 'いや.す', 'い.やす'],
    jlpt: 1,
    quizAnswers: ['If So', 'Calyx', 'Agree', 'Healing'],
    similars: [
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '痛',
        meaning: 'pain'
      },
      {
        kanji: '愉',
        meaning: 'pleasure'
      },
      {
        kanji: '痢',
        meaning: 'diarrhea'
      },
      {
        kanji: '削',
        meaning: 'plane'
      },
      {
        kanji: '前',
        meaning: 'in front'
      },
      {
        kanji: '庸',
        meaning: 'commonplace'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '億',
        meaning: 'hundred million'
      },
      {
        kanji: '療',
        meaning: 'heal'
      }
    ]
  },
  {
    kanjiName: '郭',
    strokes: 11,
    grade: 8,
    freq: 1670,
    meanings: ['Enclosure', 'Quarters', 'Fortification', 'Red-light District'],
    on: ['かく'],
    kun: ['くるわ'],
    jlpt: 1,
    quizAnswers: ['Thong', 'Me', 'Among', 'Enclosure'],
    similars: [
      {
        kanji: '享',
        meaning: 'enjoy'
      },
      {
        kanji: '塾',
        meaning: 'cram school'
      },
      {
        kanji: '熟',
        meaning: 'mellow'
      },
      {
        kanji: '鼓',
        meaning: 'drum'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '郵',
        meaning: 'mail'
      },
      {
        kanji: '亭',
        meaning: 'pavilion'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '郡',
        meaning: 'county'
      },
      {
        kanji: '部',
        meaning: 'section'
      }
    ]
  },
  {
    kanjiName: '尿',
    strokes: 7,
    grade: 8,
    freq: 1672,
    meanings: ['Urine'],
    on: ['にょう'],
    kun: ['ゆばり', 'いばり', 'しと'],
    jlpt: 1,
    quizAnswers: ['Sleeve', 'Five', 'Urine', 'Move'],
    similars: [
      {
        kanji: '水',
        meaning: 'water'
      },
      {
        kanji: '尺',
        meaning: 'shaku'
      },
      {
        kanji: '尼',
        meaning: 'nun'
      },
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '展',
        meaning: 'unfold'
      },
      {
        kanji: '啓',
        meaning: 'disclose'
      },
      {
        kanji: '泉',
        meaning: 'spring'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '変',
        meaning: 'unusual'
      },
      {
        kanji: '咲',
        meaning: 'blossom'
      }
    ]
  },
  {
    kanjiName: '賓',
    strokes: 15,
    grade: 8,
    freq: 1677,
    meanings: ['V.i.p.', 'Guest'],
    on: ['ひん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Draft', 'V.i.p.', 'Daytime', 'Thong'],
    similars: [
      {
        kanji: '寮',
        meaning: 'dormitory'
      },
      {
        kanji: '頻',
        meaning: 'repeatedly'
      },
      {
        kanji: '預',
        meaning: 'deposit'
      },
      {
        kanji: '顔',
        meaning: 'face'
      },
      {
        kanji: '源',
        meaning: 'source'
      },
      {
        kanji: '寛',
        meaning: 'tolerant'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '療',
        meaning: 'heal'
      },
      {
        kanji: '鎖',
        meaning: 'chain'
      },
      {
        kanji: '額',
        meaning: 'forehead'
      }
    ]
  },
  {
    kanjiName: '虜',
    strokes: 13,
    grade: 8,
    freq: 1678,
    meanings: ['Captive', 'Barbarian', 'Low Epithet For The Enemy'],
    on: ['りょ', 'ろ'],
    kun: ['とりこ', 'とりく'],
    jlpt: 1,
    quizAnswers: ['Perverse', 'Distant', 'Ahead', 'Captive'],
    similars: [
      {
        kanji: '膚',
        meaning: 'skin'
      },
      {
        kanji: '慮',
        meaning: 'prudence'
      },
      {
        kanji: '男',
        meaning: 'male'
      },
      {
        kanji: '虞',
        meaning: 'fear'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '虚',
        meaning: 'void'
      },
      {
        kanji: '勇',
        meaning: 'courage'
      },
      {
        kanji: '届',
        meaning: 'deliver'
      },
      {
        kanji: '横',
        meaning: 'sideways'
      },
      {
        kanji: '戯',
        meaning: 'frolic'
      }
    ]
  },
  {
    kanjiName: '憾',
    strokes: 16,
    grade: 8,
    freq: 1682,
    meanings: ['Remorse', 'Regret', 'Be Sorry'],
    on: ['かん'],
    kun: ['うら.む'],
    jlpt: 1,
    quizAnswers: ['Apologize', 'Shove', 'Remorse', 'Eat'],
    similars: [
      {
        kanji: '感',
        meaning: 'emotion'
      },
      {
        kanji: '認',
        meaning: 'acknowledge'
      },
      {
        kanji: '減',
        meaning: 'dwindle'
      },
      {
        kanji: '誌',
        meaning: 'document'
      },
      {
        kanji: '惑',
        meaning: 'beguile'
      },
      {
        kanji: '慰',
        meaning: 'consolation'
      },
      {
        kanji: '慈',
        meaning: 'mercy'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '怠',
        meaning: 'neglect'
      },
      {
        kanji: '患',
        meaning: 'afflicted'
      }
    ]
  },
  {
    kanjiName: '弥',
    strokes: 8,
    grade: 8,
    freq: 1687,
    meanings: ['All The More', 'Increasingly'],
    on: ['み', 'び'],
    kun: ['や', 'いや', 'いよ.いよ', 'わた.る'],
    jlpt: 1,
    quizAnswers: ['Fortune', 'Printing Block', 'All The More', 'Longing']
  },
  {
    kanjiName: '粗',
    strokes: 11,
    grade: 8,
    freq: 1689,
    meanings: ['Coarse', 'Rough', 'Rugged'],
    on: ['そ'],
    kun: ['あら.い', 'あら-'],
    jlpt: 1,
    quizAnswers: ['Butcher', 'Powder', 'Negate', 'Coarse'],
    similars: [
      {
        kanji: '租',
        meaning: 'tariff'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '査',
        meaning: 'investigate'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      },
      {
        kanji: '組',
        meaning: 'association'
      },
      {
        kanji: '祖',
        meaning: 'ancestor'
      },
      {
        kanji: '粘',
        meaning: 'sticky'
      },
      {
        kanji: '益',
        meaning: 'benefit'
      },
      {
        kanji: '精',
        meaning: 'refined'
      },
      {
        kanji: '料',
        meaning: 'fee'
      }
    ]
  },
  {
    kanjiName: '循',
    strokes: 12,
    grade: 8,
    freq: 1699,
    meanings: ['Sequential', 'Follow'],
    on: ['じゅん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Mutually', 'Support', 'Warm', 'Sequential'],
    similars: [
      {
        kanji: '盾',
        meaning: 'shield'
      },
      {
        kanji: '質',
        meaning: 'substance'
      },
      {
        kanji: '植',
        meaning: 'plant'
      },
      {
        kanji: '値',
        meaning: 'price'
      },
      {
        kanji: '積',
        meaning: 'volume'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '殖',
        meaning: 'augment'
      },
      {
        kanji: '猫',
        meaning: 'cat'
      },
      {
        kanji: '伯',
        meaning: 'chief'
      }
    ]
  },
  {
    kanjiName: '凝',
    strokes: 16,
    grade: 8,
    freq: 1712,
    meanings: ['Congeal', 'Freeze', 'Stiff', 'Be Absorbed In'],
    on: ['ぎょう'],
    kun: ['こ.る', 'こ.らす', 'こご.らす', 'こご.らせる', 'こご.る'],
    jlpt: 1,
    quizAnswers: ['Savings', 'Angry', 'Congeal', 'Summer'],
    similars: [
      {
        kanji: '擬',
        meaning: 'mimic'
      },
      {
        kanji: '疑',
        meaning: 'doubt'
      },
      {
        kanji: '釈',
        meaning: 'explanation'
      },
      {
        kanji: '礎',
        meaning: 'cornerstone'
      },
      {
        kanji: '数',
        meaning: 'number'
      },
      {
        kanji: '養',
        meaning: 'foster'
      },
      {
        kanji: '従',
        meaning: 'accompany'
      },
      {
        kanji: '炎',
        meaning: 'inflammation'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '炊',
        meaning: 'cook'
      }
    ]
  },
  {
    kanjiName: '昌',
    strokes: 8,
    grade: 9,
    freq: 1372,
    meanings: ['Prosperous', 'Bright', 'Clear'],
    on: ['しょう'],
    kun: ['さかん'],
    jlpt: 1,
    quizAnswers: ['Leave Behind', 'Stomach', 'Prosperous', 'Set Up']
  },
  {
    kanjiName: '旦',
    strokes: 5,
    grade: 8,
    freq: null,
    meanings: ['Daybreak', 'Dawn', 'Morning'],
    on: ['たん', 'だん'],
    kun: ['あき.らか', 'あきら', 'ただし', 'あさ', 'あした'],
    jlpt: 1,
    quizAnswers: ['Lie Down', 'Inspect', 'Passion', 'Daybreak']
  },
  {
    kanjiName: '愉',
    strokes: 12,
    grade: 8,
    freq: 1974,
    meanings: ['Pleasure', 'Happy', 'Rejoice'],
    on: ['ゆ'],
    kun: ['たの.しい', 'たの.しむ'],
    jlpt: 1,
    quizAnswers: ['Pleasure', 'Private', 'Protrude', 'Manner'],
    similars: [
      {
        kanji: '前',
        meaning: 'in front'
      },
      {
        kanji: '諭',
        meaning: 'rebuke'
      },
      {
        kanji: '補',
        meaning: 'supplement'
      },
      {
        kanji: '削',
        meaning: 'plane'
      },
      {
        kanji: '輸',
        meaning: 'transport'
      },
      {
        kanji: '怖',
        meaning: 'dreadful'
      },
      {
        kanji: '惰',
        meaning: 'lazy'
      },
      {
        kanji: '倫',
        meaning: 'ethics'
      },
      {
        kanji: '浦',
        meaning: 'bay'
      },
      {
        kanji: '情',
        meaning: 'feelings'
      }
    ]
  },
  {
    kanjiName: '抹',
    strokes: 8,
    grade: 8,
    freq: 2006,
    meanings: ['Rub', 'Paint', 'Erase'],
    on: ['まつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Rub', 'Facility', 'Resume', 'Phenomenal'],
    similars: [
      {
        kanji: '扶',
        meaning: 'aid'
      },
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '拷',
        meaning: 'torture'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '探',
        meaning: 'grope'
      },
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '末',
        meaning: 'end'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      }
    ]
  },
  {
    kanjiName: '栓',
    strokes: 10,
    grade: 8,
    freq: 2199,
    meanings: ['Plug', 'Bolt', 'Cork', 'Bung', 'Stopper'],
    on: ['せん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Chief', 'Plug', 'Ghost', 'Obtain'],
    similars: [
      {
        kanji: '柱',
        meaning: 'pillar'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '産',
        meaning: 'products'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '梅',
        meaning: 'plum'
      },
      {
        kanji: '座',
        meaning: 'squat'
      },
      {
        kanji: '枝',
        meaning: 'bough'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '牲',
        meaning: 'animal sacrifice'
      }
    ]
  },
  {
    kanjiName: '之',
    strokes: 3,
    grade: 9,
    freq: 1318,
    meanings: ['Of', 'This'],
    on: ['し'],
    kun: ['の', 'これ', 'ゆく', 'この'],
    jlpt: 1,
    quizAnswers: ['Bear In Mind', 'Rival', 'Engrave', 'Of']
  },
  {
    kanjiName: '遼',
    strokes: 15,
    grade: 9,
    freq: 2050,
    meanings: ['Distant'],
    on: ['りょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Remuneration', 'Distant', 'Variety', 'Attempt']
  },
  {
    kanjiName: '瑛',
    strokes: 12,
    grade: 9,
    freq: 2393,
    meanings: ['Sparkle Of Jewelry', 'Crystal'],
    on: ['えい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Show', 'Mechanism', 'Skin', 'Sparkle Of Jewelry']
  },
  {
    kanjiName: '那',
    strokes: 7,
    grade: 8,
    freq: 1621,
    meanings: ['What?'],
    on: ['な', 'だ'],
    kun: ['なに', 'なんぞ', 'いかん'],
    jlpt: 1,
    quizAnswers: ['Figure', 'What?', 'Barrier', 'Phenomenal']
  },
  {
    kanjiName: '拍',
    strokes: 8,
    grade: 8,
    freq: 1373,
    meanings: ['Clap', 'Beat (music)'],
    on: ['はく', 'ひょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Week', 'Write', 'Lord', 'Clap'],
    similars: [
      {
        kanji: '指',
        meaning: 'finger'
      },
      {
        kanji: '挿',
        meaning: 'insert'
      },
      {
        kanji: '担',
        meaning: 'shouldering'
      },
      {
        kanji: '泊',
        meaning: 'overnight stay'
      },
      {
        kanji: '者',
        meaning: 'someone'
      },
      {
        kanji: '押',
        meaning: 'push'
      },
      {
        kanji: '抽',
        meaning: 'pluck'
      },
      {
        kanji: '百',
        meaning: 'hundred'
      },
      {
        kanji: '春',
        meaning: 'springtime'
      },
      {
        kanji: '描',
        meaning: 'sketch'
      }
    ]
  },
  {
    kanjiName: '猶',
    strokes: 12,
    grade: 8,
    freq: 1799,
    meanings: ['Furthermore', 'Still', 'Yet'],
    on: ['ゆう', 'ゆ'],
    kun: ['なお'],
    jlpt: 1,
    quizAnswers: ['Consider', 'Furthermore', 'Coming & Going', 'Talk'],
    similars: [
      {
        kanji: '酒',
        meaning: 'sake'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '猫',
        meaning: 'cat'
      },
      {
        kanji: '省',
        meaning: 'government ministry'
      },
      {
        kanji: '皆',
        meaning: 'all'
      },
      {
        kanji: '留',
        meaning: 'detain'
      },
      {
        kanji: '番',
        meaning: 'turn'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      },
      {
        kanji: '西',
        meaning: 'west'
      },
      {
        kanji: '棚',
        meaning: 'shelf'
      }
    ]
  },
  {
    kanjiName: '宰',
    strokes: 10,
    grade: 8,
    freq: 1597,
    meanings: ['Superintend', 'Manager', 'Rule'],
    on: ['さい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Superintend', 'Due To', 'Get', 'Dispose Of'],
    similars: [
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '辞',
        meaning: 'resign'
      },
      {
        kanji: '泣',
        meaning: 'cry'
      },
      {
        kanji: '岸',
        meaning: 'beach'
      },
      {
        kanji: '宝',
        meaning: 'treasure'
      },
      {
        kanji: '寂',
        meaning: 'loneliness'
      },
      {
        kanji: '業',
        meaning: 'business'
      },
      {
        kanji: '癖',
        meaning: 'mannerism'
      },
      {
        kanji: '祈',
        meaning: 'pray'
      }
    ]
  },
  {
    kanjiName: '寂',
    strokes: 11,
    grade: 8,
    freq: 1599,
    meanings: ['Loneliness', 'Quietly', 'Mellow', 'Mature', 'Death Of A Priest'],
    on: ['じゃく', 'せき'],
    kun: ['さび', 'さび.しい', 'さび.れる', 'さみ.しい'],
    jlpt: 1,
    quizAnswers: ['Extreme', 'Stagecoach Stop', 'Commander', 'Loneliness'],
    similars: [
      {
        kanji: '叔',
        meaning: 'uncle'
      },
      {
        kanji: '淑',
        meaning: 'graceful'
      },
      {
        kanji: '定',
        meaning: 'determine'
      },
      {
        kanji: '突',
        meaning: 'stab'
      },
      {
        kanji: '宰',
        meaning: 'superintend'
      },
      {
        kanji: '守',
        meaning: 'guard'
      },
      {
        kanji: '実',
        meaning: 'reality'
      },
      {
        kanji: '叙',
        meaning: 'confer'
      },
      {
        kanji: '歩',
        meaning: 'walk'
      },
      {
        kanji: '宗',
        meaning: 'religion'
      }
    ]
  },
  {
    kanjiName: '縫',
    strokes: 16,
    grade: 8,
    freq: 1723,
    meanings: ['Sew', 'Stitch', 'Embroider'],
    on: ['ほう'],
    kun: ['ぬ.う'],
    jlpt: 1,
    quizAnswers: ['Become', 'Ice', 'Sew', 'Needle'],
    similars: [
      {
        kanji: '絵',
        meaning: 'picture'
      },
      {
        kanji: '遅',
        meaning: 'slow'
      },
      {
        kanji: '経',
        meaning: 'sutra'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '絡',
        meaning: 'entwine'
      },
      {
        kanji: '終',
        meaning: 'end'
      },
      {
        kanji: '達',
        meaning: 'accomplished'
      },
      {
        kanji: '緩',
        meaning: 'slacken'
      },
      {
        kanji: '結',
        meaning: 'tie'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      }
    ]
  },
  {
    kanjiName: '呉',
    strokes: 7,
    grade: 8,
    freq: 1729,
    meanings: ['Give', 'Do Something For', 'Kingdom Of Wu'],
    on: ['ご'],
    kun: ['く.れる', 'くれ'],
    jlpt: 1,
    quizAnswers: ['Journey', 'Soul', 'Give', 'Admit'],
    similars: [
      {
        kanji: '娯',
        meaning: 'recreation'
      },
      {
        kanji: '味',
        meaning: 'flavor'
      },
      {
        kanji: '号',
        meaning: 'nickname'
      },
      {
        kanji: '兵',
        meaning: 'soldier'
      },
      {
        kanji: '叫',
        meaning: 'shout'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '兄',
        meaning: 'elder brother'
      },
      {
        kanji: '史',
        meaning: 'history'
      },
      {
        kanji: '吹',
        meaning: 'blow'
      },
      {
        kanji: '吐',
        meaning: 'spit'
      }
    ]
  },
  {
    kanjiName: '凡',
    strokes: 3,
    grade: 8,
    freq: 1730,
    meanings: ['Commonplace', 'Ordinary', 'Mediocre'],
    on: ['ぼん', 'はん'],
    kun: ['およ.そ', 'おうよ.そ', 'すべ.て'],
    jlpt: 1,
    quizAnswers: ['Courage', 'Commonplace', 'Daytime', 'Carrier'],
    similars: [
      {
        kanji: '丸',
        meaning: 'round'
      },
      {
        kanji: '夕',
        meaning: 'evening'
      },
      {
        kanji: '勺',
        meaning: 'ladle'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '公',
        meaning: 'public'
      },
      {
        kanji: '不',
        meaning: 'negative'
      },
      {
        kanji: '犬',
        meaning: 'dog'
      },
      {
        kanji: '帆',
        meaning: 'sail'
      },
      {
        kanji: '仏',
        meaning: 'Buddha'
      },
      {
        kanji: '丹',
        meaning: 'rust-colored'
      }
    ]
  },
  {
    kanjiName: '恭',
    strokes: 10,
    grade: 8,
    freq: 1737,
    meanings: ['Respect', 'Reverent'],
    on: ['きょう'],
    kun: ['うやうや.しい'],
    jlpt: 1,
    quizAnswers: ['Respect', 'Status Quo', 'Ring', 'Raise'],
    similars: [
      {
        kanji: '慕',
        meaning: 'pining'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '蒸',
        meaning: 'steam'
      },
      {
        kanji: '赤',
        meaning: 'red'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '暴',
        meaning: 'outburst'
      },
      {
        kanji: '芋',
        meaning: 'potato'
      },
      {
        kanji: '無',
        meaning: 'nothingness'
      },
      {
        kanji: '薦',
        meaning: 'recommend'
      },
      {
        kanji: '赴',
        meaning: 'proceed'
      }
    ]
  },
  {
    kanjiName: '錯',
    strokes: 16,
    grade: 8,
    freq: 1740,
    meanings: ['Confused', 'Mix', 'Be In Disorder'],
    on: ['さく', 'しゃく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Longing', 'Confused', 'Connect', 'Explanation'],
    similars: [
      {
        kanji: '鏡',
        meaning: 'mirror'
      },
      {
        kanji: '鐘',
        meaning: 'bell'
      },
      {
        kanji: '鎖',
        meaning: 'chain'
      },
      {
        kanji: '鎮',
        meaning: 'tranquilize'
      },
      {
        kanji: '鋳',
        meaning: 'casting'
      },
      {
        kanji: '銅',
        meaning: 'copper'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '錘',
        meaning: 'weight'
      }
    ]
  },
  {
    kanjiName: '穀',
    strokes: 14,
    grade: 6,
    freq: 1744,
    meanings: ['Cereals', 'Grain'],
    on: ['こく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Cereals', 'Reliant', 'Woman', 'Ingredients'],
    similars: [
      {
        kanji: '殻',
        meaning: 'husk'
      },
      {
        kanji: '報',
        meaning: 'report'
      },
      {
        kanji: '殺',
        meaning: 'kill'
      },
      {
        kanji: '新',
        meaning: 'new'
      },
      {
        kanji: '款',
        meaning: 'goodwill'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '薪',
        meaning: 'fuel'
      },
      {
        kanji: '釈',
        meaning: 'explanation'
      },
      {
        kanji: '痢',
        meaning: 'diarrhea'
      },
      {
        kanji: '麦',
        meaning: 'barley'
      }
    ]
  },
  {
    kanjiName: '陵',
    strokes: 11,
    grade: 8,
    freq: 1746,
    meanings: ['Mausoleum', 'Imperial Tomb', 'Mound', 'Hill'],
    on: ['りょう'],
    kun: ['みささぎ'],
    jlpt: 1,
    quizAnswers: ['Establish', 'Discourse', 'Mausoleum', 'Scheme'],
    similars: [
      {
        kanji: '陸',
        meaning: 'land'
      },
      {
        kanji: '隊',
        meaning: 'regiment'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '俊',
        meaning: 'sagacious'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '麦',
        meaning: 'barley'
      },
      {
        kanji: '徒',
        meaning: 'on foot'
      },
      {
        kanji: '防',
        meaning: 'ward off'
      },
      {
        kanji: '殿',
        meaning: 'Mr.'
      },
      {
        kanji: '裂',
        meaning: 'split'
      }
    ]
  },
  {
    kanjiName: '弊',
    strokes: 15,
    grade: 8,
    freq: 1750,
    meanings: ['Abuse', 'Evil', 'Vice', 'Breakage'],
    on: ['へい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Childhood', 'Start From', 'Abuse', '1-3pm'],
    similars: [
      {
        kanji: '幣',
        meaning: 'cash'
      },
      {
        kanji: '磨',
        meaning: 'grind'
      },
      {
        kanji: '奥',
        meaning: 'heart'
      },
      {
        kanji: '修',
        meaning: 'discipline'
      },
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '新',
        meaning: 'new'
      },
      {
        kanji: '粉',
        meaning: 'flour'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      }
    ]
  },
  {
    kanjiName: '舶',
    strokes: 11,
    grade: 8,
    freq: 1753,
    meanings: ['Liner', 'Ship'],
    on: ['はく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['River', 'Liner', 'Loom', 'Need Not'],
    similars: [
      {
        kanji: '伯',
        meaning: 'chief'
      },
      {
        kanji: '般',
        meaning: 'carrier'
      },
      {
        kanji: '船',
        meaning: 'ship'
      },
      {
        kanji: '脂',
        meaning: 'fat'
      },
      {
        kanji: '殉',
        meaning: 'martyrdom'
      },
      {
        kanji: '泊',
        meaning: 'overnight stay'
      },
      {
        kanji: '航',
        meaning: 'navigate'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '宿',
        meaning: 'inn'
      },
      {
        kanji: '省',
        meaning: 'government ministry'
      }
    ]
  },
  {
    kanjiName: '窮',
    strokes: 15,
    grade: 8,
    freq: 1756,
    meanings: ['Hard Up', 'Destitute', 'Suffer', 'Perplexed', 'Cornered'],
    on: ['きゅう', 'きょう'],
    kun: ['きわ.める', 'きわ.まる', 'きわ.まり', 'きわ.み'],
    jlpt: 1,
    quizAnswers: ['Be Conducive To', 'Cheer Up', 'Turn Around', 'Hard Up'],
    similars: [
      {
        kanji: '寡',
        meaning: 'widow'
      },
      {
        kanji: '宵',
        meaning: 'wee hours'
      },
      {
        kanji: '宜',
        meaning: 'best regards'
      },
      {
        kanji: '宴',
        meaning: 'banquet'
      },
      {
        kanji: '身',
        meaning: 'somebody'
      },
      {
        kanji: '射',
        meaning: 'shoot'
      },
      {
        kanji: '空',
        meaning: 'empty'
      },
      {
        kanji: '墾',
        meaning: 'ground-breaking'
      },
      {
        kanji: '厳',
        meaning: 'stern'
      },
      {
        kanji: '謝',
        meaning: 'apologize'
      }
    ]
  },
  {
    kanjiName: '悦',
    strokes: 10,
    grade: 8,
    freq: 1762,
    meanings: ['Ecstasy', 'Joy', 'Rapture'],
    on: ['えつ'],
    kun: ['よろこ.ぶ', 'よろこ.ばす'],
    jlpt: 1,
    quizAnswers: ['Warrior', 'Ecstasy', 'Of Course', 'Appoint'],
    similars: [
      {
        kanji: '祝',
        meaning: 'celebrate'
      },
      {
        kanji: '党',
        meaning: 'party'
      },
      {
        kanji: '況',
        meaning: 'condition'
      },
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '説',
        meaning: 'opinion'
      },
      {
        kanji: '脱',
        meaning: 'undress'
      },
      {
        kanji: '沼',
        meaning: 'marsh'
      },
      {
        kanji: '営',
        meaning: 'camp'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '涼',
        meaning: 'refreshing'
      }
    ]
  },
  {
    kanjiName: '縛',
    strokes: 16,
    grade: 8,
    freq: 1764,
    meanings: ['Truss', 'Arrest', 'Bind', 'Tie', 'Restrain'],
    on: ['ばく'],
    kun: ['しば.る'],
    jlpt: 1,
    quizAnswers: ['Reign', 'Urban Prefecture', 'Have', 'Truss'],
    similars: [
      {
        kanji: '博',
        meaning: 'Dr.'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '線',
        meaning: 'line'
      },
      {
        kanji: '薄',
        meaning: 'dilute'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      },
      {
        kanji: '縄',
        meaning: 'straw rope'
      },
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '績',
        meaning: 'exploits'
      }
    ]
  },
  {
    kanjiName: '轄',
    strokes: 17,
    grade: 8,
    freq: 1771,
    meanings: ['Control', 'Wedge'],
    on: ['かつ'],
    kun: ['くさび'],
    jlpt: 1,
    quizAnswers: ['Posterity', 'Reservoir', 'Push', 'Control'],
    similars: [
      {
        kanji: '誓',
        meaning: 'vow'
      },
      {
        kanji: '害',
        meaning: 'harm'
      },
      {
        kanji: '賠',
        meaning: 'compensation'
      },
      {
        kanji: '軽',
        meaning: 'lightly'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '撃',
        meaning: 'beat'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      },
      {
        kanji: '幹',
        meaning: 'tree trunk'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      }
    ]
  },
  {
    kanjiName: '弦',
    strokes: 8,
    grade: 8,
    freq: 1773,
    meanings: ['Bowstring', 'Chord', 'Hypotenuse'],
    on: ['げん'],
    kun: ['つる'],
    jlpt: 1,
    quizAnswers: ['Bowstring', 'Myself', 'Previous', 'Single'],
    similars: [
      {
        kanji: '玄',
        meaning: 'mysterious'
      },
      {
        kanji: '去',
        meaning: 'gone'
      },
      {
        kanji: '芸',
        meaning: 'technique'
      },
      {
        kanji: '拡',
        meaning: 'broaden'
      },
      {
        kanji: '玉',
        meaning: 'jewel'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple'
      },
      {
        kanji: '広',
        meaning: 'wide'
      },
      {
        kanji: '張',
        meaning: 'counter for bows & stringed instruments'
      },
      {
        kanji: '弧',
        meaning: 'arc'
      }
    ]
  },
  {
    kanjiName: '窒',
    strokes: 11,
    grade: 8,
    freq: 1776,
    meanings: ['Plug Up', 'Obstruct'],
    on: ['ちつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Stratum', 'Avenue', 'Plug Up', 'Essence'],
    similars: [
      {
        kanji: '室',
        meaning: 'room'
      },
      {
        kanji: '空',
        meaning: 'empty'
      },
      {
        kanji: '屋',
        meaning: 'roof'
      },
      {
        kanji: '窓',
        meaning: 'window'
      },
      {
        kanji: '突',
        meaning: 'stab'
      },
      {
        kanji: '至',
        meaning: 'climax'
      },
      {
        kanji: '窃',
        meaning: 'stealth'
      },
      {
        kanji: '塗',
        meaning: 'paint'
      },
      {
        kanji: '握',
        meaning: 'grip'
      },
      {
        kanji: '窯',
        meaning: 'kiln'
      }
    ]
  },
  {
    kanjiName: '洪',
    strokes: 9,
    grade: 8,
    freq: 1778,
    meanings: ['Deluge', 'Flood', 'Vast'],
    on: ['こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Younger Brother', 'Right', 'Deluge', 'Pay'],
    similars: [
      {
        kanji: '法',
        meaning: 'method'
      },
      {
        kanji: '浜',
        meaning: 'seacoast'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '港',
        meaning: 'harbor'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '供',
        meaning: 'submit'
      },
      {
        kanji: '浅',
        meaning: 'shallow'
      },
      {
        kanji: '漂',
        meaning: 'drift'
      },
      {
        kanji: '渋',
        meaning: 'astringent'
      }
    ]
  },
  {
    kanjiName: '摂',
    strokes: 13,
    grade: 8,
    freq: 1779,
    meanings: ['Vicarious', 'Surrogate', 'Act In Addition To', 'Take In', 'Absorb'],
    on: ['せつ', 'しょう'],
    kun: ['おさ.める', 'かね.る', 'と.る'],
    jlpt: 1,
    quizAnswers: ['Either', 'Present', 'Vicarious', 'Prussia'],
    similars: [
      {
        kanji: '恥',
        meaning: 'shame'
      },
      {
        kanji: '敢',
        meaning: 'daring'
      },
      {
        kanji: '捕',
        meaning: 'catch'
      },
      {
        kanji: '厳',
        meaning: 'stern'
      },
      {
        kanji: '撮',
        meaning: 'snapshot'
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)'
      },
      {
        kanji: '措',
        meaning: 'set aside'
      },
      {
        kanji: '描',
        meaning: 'sketch'
      },
      {
        kanji: '提',
        meaning: 'propose'
      },
      {
        kanji: '票',
        meaning: 'ballot'
      }
    ]
  },
  {
    kanjiName: '飽',
    strokes: 13,
    grade: 8,
    freq: 1780,
    meanings: ['Sated', 'Tired Of', 'Bored', 'Satiate'],
    on: ['ほう'],
    kun: ['あ.きる', 'あ.かす', 'あ.く'],
    jlpt: 1,
    quizAnswers: ['Abbreviation', 'Sated', 'Blood', 'Part Of Speech'],
    similars: [
      {
        kanji: '飲',
        meaning: 'drink'
      },
      {
        kanji: '飾',
        meaning: 'decorate'
      },
      {
        kanji: '飢',
        meaning: 'hungry'
      },
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '飯',
        meaning: 'meal'
      },
      {
        kanji: '胞',
        meaning: 'placenta'
      },
      {
        kanji: '餓',
        meaning: 'starve'
      },
      {
        kanji: '食',
        meaning: 'eat'
      },
      {
        kanji: '朗',
        meaning: 'melodious'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      }
    ]
  },
  {
    kanjiName: '紳',
    strokes: 11,
    grade: 8,
    freq: 1790,
    meanings: ['Sire', 'Good Belt', 'Gentleman'],
    on: ['しん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Government', 'Sire', 'Have', 'Resume'],
    similars: [
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '縄',
        meaning: 'straw rope'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      },
      {
        kanji: '組',
        meaning: 'association'
      },
      {
        kanji: '線',
        meaning: 'line'
      },
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      }
    ]
  },
  {
    kanjiName: '庸',
    strokes: 11,
    grade: 8,
    freq: 2038,
    meanings: ['Commonplace', 'Ordinary', 'Employment'],
    on: ['よう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Trademark', 'Black', 'Commonplace', 'Rich'],
    similars: [
      {
        kanji: '痛',
        meaning: 'pain'
      },
      {
        kanji: '青',
        meaning: 'blue'
      },
      {
        kanji: '備',
        meaning: 'equip'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '育',
        meaning: 'bring up'
      },
      {
        kanji: '有',
        meaning: 'possess'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '斉',
        meaning: 'adjusted'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '前',
        meaning: 'in front'
      }
    ]
  },
  {
    kanjiName: '靖',
    strokes: 13,
    grade: 9,
    freq: 1390,
    meanings: ['Peaceful'],
    on: ['せい', 'じょう'],
    kun: ['やす.んじる'],
    jlpt: 1,
    quizAnswers: ['Ahead', 'Peaceful', 'Small', 'Accustomed']
  },
  {
    kanjiName: '嘉',
    strokes: 14,
    grade: 9,
    freq: 1553,
    meanings: ['Applaud', 'Praise', 'Esteem', 'Happy', 'Auspicious'],
    on: ['か'],
    kun: ['よみ.する', 'よい'],
    jlpt: 1,
    quizAnswers: ['Prohibit', 'Contend', 'Applaud', 'In Doubt']
  },
  {
    kanjiName: '搾',
    strokes: 13,
    grade: 8,
    freq: 2046,
    meanings: ['Squeeze'],
    on: ['さく'],
    kun: ['しぼ.る'],
    jlpt: 1,
    quizAnswers: ['Squeeze', 'Snout', 'Bag', 'Autumn'],
    similars: [
      {
        kanji: '控',
        meaning: 'withdraw'
      },
      {
        kanji: '溶',
        meaning: 'melt'
      },
      {
        kanji: '探',
        meaning: 'grope'
      },
      {
        kanji: '摘',
        meaning: 'pinch'
      },
      {
        kanji: '搭',
        meaning: 'board'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '容',
        meaning: 'contain'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      }
    ]
  },
  {
    kanjiName: '蝶',
    strokes: 15,
    grade: 9,
    freq: 2011,
    meanings: ['Butterfly'],
    on: ['ちょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Die', 'Counter For Long Cylindrical Things', 'Fork', 'Butterfly']
  },
  {
    kanjiName: '碑',
    strokes: 14,
    grade: 8,
    freq: 1792,
    meanings: ['Tombstone', 'Monument'],
    on: ['ひ'],
    kun: ['いしぶみ'],
    jlpt: 1,
    quizAnswers: ['Bear', 'Tombstone', 'Spouse', 'Red'],
    similars: [
      {
        kanji: '硬',
        meaning: 'stiff'
      },
      {
        kanji: '副',
        meaning: 'vice-'
      },
      {
        kanji: '賀',
        meaning: 'congratulations'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '砕',
        meaning: 'smash'
      },
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '損',
        meaning: 'damage'
      },
      {
        kanji: '悼',
        meaning: 'lament'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '員',
        meaning: 'employee'
      }
    ]
  },
  {
    kanjiName: '尉',
    strokes: 11,
    grade: 8,
    freq: 2007,
    meanings: ['Military Officer', 'Jailer', 'Old Man', 'Rank'],
    on: ['い', 'じょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Scroll', 'Answer', 'Military Officer', 'Send On A Mission'],
    similars: [
      {
        kanji: '慰',
        meaning: 'consolation'
      },
      {
        kanji: '辱',
        meaning: 'embarrass'
      },
      {
        kanji: '討',
        meaning: 'chastise'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '冠',
        meaning: 'crown'
      },
      {
        kanji: '屋',
        meaning: 'roof'
      },
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '歳',
        meaning: 'year-end'
      },
      {
        kanji: '隷',
        meaning: 'slave'
      },
      {
        kanji: '樹',
        meaning: 'timber'
      }
    ]
  },
  {
    kanjiName: '匠',
    strokes: 6,
    grade: 8,
    freq: 1718,
    meanings: ['Artisan', 'Workman', 'Carpenter'],
    on: ['しょう'],
    kun: ['たくみ'],
    jlpt: 1,
    quizAnswers: ['Model After', 'Artisan', 'Great', 'Love'],
    similars: [
      {
        kanji: '平',
        meaning: 'even'
      },
      {
        kanji: '升',
        meaning: 'measuring box'
      },
      {
        kanji: '斥',
        meaning: 'reject'
      },
      {
        kanji: '斤',
        meaning: 'axe'
      },
      {
        kanji: '医',
        meaning: 'doctor'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '来',
        meaning: 'come'
      },
      {
        kanji: '施',
        meaning: 'give'
      },
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      }
    ]
  },
  {
    kanjiName: '遥',
    strokes: 12,
    grade: 9,
    freq: 2376,
    meanings: ['Far Off', 'Distant', 'Long Ago'],
    on: ['よう'],
    kun: ['はる.か'],
    jlpt: 1,
    quizAnswers: ['Egg', 'Far Off', 'Mineral', 'Physiognomy']
  },
  {
    kanjiName: '智',
    strokes: 12,
    grade: 9,
    freq: 1002,
    meanings: ['Wisdom', 'Intellect', 'Reason'],
    on: ['ち'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Endeavour', 'Wisdom', 'Understand', '-fold']
  },
  {
    kanjiName: '賊',
    strokes: 13,
    grade: 8,
    freq: 2045,
    meanings: ['Burglar', 'Rebel', 'Traitor', 'Robber'],
    on: ['ぞく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Burglar', 'Big', 'Large', 'Heap Up'],
    similars: [
      {
        kanji: '財',
        meaning: 'property'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '賦',
        meaning: 'levy'
      },
      {
        kanji: '則',
        meaning: 'rule'
      },
      {
        kanji: '賄',
        meaning: 'bribe'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      },
      {
        kanji: '魅',
        meaning: 'fascination'
      },
      {
        kanji: '賠',
        meaning: 'compensation'
      },
      {
        kanji: '購',
        meaning: 'subscription'
      }
    ]
  },
  {
    kanjiName: '鼓',
    strokes: 13,
    grade: 8,
    freq: 1795,
    meanings: ['Drum', 'Beat', 'Rouse', 'Muster'],
    on: ['こ'],
    kun: ['つづみ'],
    jlpt: 1,
    quizAnswers: ['Contribute To', 'Cellar', 'Drum', 'Wealth'],
    similars: [
      {
        kanji: '喜',
        meaning: 'rejoice'
      },
      {
        kanji: '破',
        meaning: 'rend'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '樹',
        meaning: 'timber'
      },
      {
        kanji: '謡',
        meaning: 'song'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '枝',
        meaning: 'bough'
      },
      {
        kanji: '就',
        meaning: 'concerning'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      }
    ]
  },
  {
    kanjiName: '旋',
    strokes: 11,
    grade: 8,
    freq: 1801,
    meanings: ['Rotation', 'Go Around'],
    on: ['せん'],
    kun: ['め.ぐる', 'いばり'],
    jlpt: 1,
    quizAnswers: ['Deceased', 'Rotation', 'Multiple', 'Mind'],
    similars: [
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '度',
        meaning: 'degrees'
      },
      {
        kanji: '遊',
        meaning: 'play'
      },
      {
        kanji: '旗',
        meaning: 'national flag'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '定',
        meaning: 'determine'
      },
      {
        kanji: '施',
        meaning: 'give'
      },
      {
        kanji: '従',
        meaning: 'accompany'
      }
    ]
  },
  {
    kanjiName: '腸',
    strokes: 13,
    grade: 4,
    freq: 1807,
    meanings: ['Intestines', 'Guts', 'Bowels', 'Viscera'],
    on: ['ちょう'],
    kun: ['はらわた', 'わた'],
    jlpt: 1,
    quizAnswers: ['Intestines', 'Drink', 'Augment', 'Surmise'],
    similars: [
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '胆',
        meaning: 'gall bladder'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '陽',
        meaning: 'sunshine'
      },
      {
        kanji: '揚',
        meaning: 'raise'
      },
      {
        kanji: '易',
        meaning: 'easy'
      },
      {
        kanji: '賜',
        meaning: 'grant'
      },
      {
        kanji: '膜',
        meaning: 'membrane'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      }
    ]
  },
  {
    kanjiName: '槽',
    strokes: 15,
    grade: 8,
    freq: 1809,
    meanings: ['Vat', 'Tub', 'Tank'],
    on: ['そう'],
    kun: ['ふね'],
    jlpt: 1,
    quizAnswers: ['Close', 'Fat', 'Reputation', 'Vat'],
    similars: [
      {
        kanji: '曹',
        meaning: 'office'
      },
      {
        kanji: '僧',
        meaning: 'Buddhist priest'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '標',
        meaning: 'signpost'
      },
      {
        kanji: '増',
        meaning: 'increase'
      },
      {
        kanji: '層',
        meaning: 'stratum'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      },
      {
        kanji: '面',
        meaning: 'mask'
      },
      {
        kanji: '棋',
        meaning: 'chess piece'
      },
      {
        kanji: '晶',
        meaning: 'sparkle'
      }
    ]
  },
  {
    kanjiName: '伐',
    strokes: 6,
    grade: 8,
    freq: 1816,
    meanings: ['Fell', 'Strike', 'Attack', 'Punish'],
    on: ['ばつ', 'はつ', 'か', 'ぼち'],
    kun: ['き.る', 'そむ.く', 'う.つ'],
    jlpt: 1,
    quizAnswers: ['Uneasy', 'Transport', 'Fell', 'Class'],
    similars: [
      {
        kanji: '代',
        meaning: 'substitute'
      },
      {
        kanji: '伏',
        meaning: 'prostrated'
      },
      {
        kanji: '付',
        meaning: 'adhere'
      },
      {
        kanji: '休',
        meaning: 'rest'
      },
      {
        kanji: '成',
        meaning: 'turn into'
      },
      {
        kanji: '伝',
        meaning: 'transmit'
      },
      {
        kanji: '供',
        meaning: 'submit'
      },
      {
        kanji: '位',
        meaning: 'rank'
      },
      {
        kanji: '戒',
        meaning: 'commandment'
      },
      {
        kanji: '体',
        meaning: 'body'
      }
    ]
  },
  {
    kanjiName: '漬',
    strokes: 14,
    grade: 8,
    freq: 1818,
    meanings: ['Pickling', 'Soak', 'Moisten', 'Steep'],
    on: ['し'],
    kun: ['つ.ける', 'つ.かる', '-づ.け', '-づけ'],
    jlpt: 1,
    quizAnswers: ['Truth', 'Pickling', 'Labor', 'Reach'],
    similars: [
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '憤',
        meaning: 'aroused'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '演',
        meaning: 'performance'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '慣',
        meaning: 'accustomed'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '源',
        meaning: 'source'
      },
      {
        kanji: '績',
        meaning: 'exploits'
      }
    ]
  },
  {
    kanjiName: '坪',
    strokes: 8,
    grade: 8,
    freq: 1823,
    meanings: ['Two-mat Area', 'Approx. Thirty-six Sq Ft'],
    on: ['へい'],
    kun: ['つぼ'],
    jlpt: 1,
    quizAnswers: ['Connection', 'Two-mat Area', 'Rule', 'Expect'],
    similars: [
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '培',
        meaning: 'cultivate'
      },
      {
        kanji: '南',
        meaning: 'south'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '立',
        meaning: 'stand up'
      },
      {
        kanji: '坂',
        meaning: 'slope'
      },
      {
        kanji: '平',
        meaning: 'even'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      },
      {
        kanji: '塀',
        meaning: 'fence'
      },
      {
        kanji: '葬',
        meaning: 'interment'
      }
    ]
  },
  {
    kanjiName: '紺',
    strokes: 11,
    grade: 8,
    freq: 1825,
    meanings: ['Dark Blue', 'Navy'],
    on: ['こん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Dark Blue', 'Coming', 'Be Perplexed', 'View'],
    similars: [
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '結',
        meaning: 'tie'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '組',
        meaning: 'association'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '紹',
        meaning: 'introduce'
      }
    ]
  },
  {
    kanjiName: '羅',
    strokes: 19,
    grade: 8,
    freq: 1831,
    meanings: ['Gauze', 'Thin Silk', 'Rome', 'Arrange', 'Spread Out'],
    on: ['ら'],
    kun: ['うすもの'],
    jlpt: 1,
    quizAnswers: ['Magnate', 'Valley', 'Gauze', 'Take Part In'],
    similars: [
      {
        kanji: '維',
        meaning: 'fiber'
      },
      {
        kanji: '難',
        meaning: 'difficult'
      },
      {
        kanji: '擁',
        meaning: 'hug'
      },
      {
        kanji: '曜',
        meaning: 'weekday'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      },
      {
        kanji: '雌',
        meaning: 'feminine'
      },
      {
        kanji: '累',
        meaning: 'accumulate'
      },
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '離',
        meaning: 'detach'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      }
    ]
  },
  {
    kanjiName: '峡',
    strokes: 9,
    grade: 8,
    freq: 1833,
    meanings: ['Gorge', 'Ravine'],
    on: ['きょう', 'こう'],
    kun: ['はざま'],
    jlpt: 1,
    quizAnswers: ['Head', 'Increase', 'Adhere To', 'Gorge'],
    similars: [
      {
        kanji: '炭',
        meaning: 'charcoal'
      },
      {
        kanji: '岸',
        meaning: 'beach'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '微',
        meaning: 'delicate'
      },
      {
        kanji: '衰',
        meaning: 'decline'
      },
      {
        kanji: '徴',
        meaning: 'indications'
      },
      {
        kanji: '改',
        meaning: 'reformation'
      },
      {
        kanji: '岐',
        meaning: 'branch off'
      },
      {
        kanji: '放',
        meaning: 'set free'
      }
    ]
  },
  {
    kanjiName: '俸',
    strokes: 10,
    grade: 8,
    freq: 1834,
    meanings: ['Stipend', 'Salary'],
    on: ['ほう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Emotion', 'Country', 'Increase', 'Stipend'],
    similars: [
      {
        kanji: '奉',
        meaning: 'observance'
      },
      {
        kanji: '棒',
        meaning: 'rod'
      },
      {
        kanji: '体',
        meaning: 'body'
      },
      {
        kanji: '律',
        meaning: 'rhythm'
      },
      {
        kanji: '伴',
        meaning: 'consort'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '奏',
        meaning: 'play music'
      },
      {
        kanji: '街',
        meaning: 'boulevard'
      },
      {
        kanji: '斜',
        meaning: 'diagonal'
      },
      {
        kanji: '禁',
        meaning: 'prohibition'
      }
    ]
  },
  {
    kanjiName: '醸',
    strokes: 20,
    grade: 8,
    freq: 1838,
    meanings: ['Brew', 'Cause'],
    on: ['じょう'],
    kun: ['かも.す'],
    jlpt: 1,
    quizAnswers: ['Longing', 'Brew', 'Visible', 'Prussia'],
    similars: [
      {
        kanji: '嬢',
        meaning: 'lass'
      },
      {
        kanji: '壌',
        meaning: 'lot'
      },
      {
        kanji: '譲',
        meaning: 'defer'
      },
      {
        kanji: '農',
        meaning: 'agriculture'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '裏',
        meaning: 'back'
      },
      {
        kanji: '敷',
        meaning: 'spread'
      },
      {
        kanji: '酵',
        meaning: 'fermentation'
      },
      {
        kanji: '酷',
        meaning: 'cruel'
      },
      {
        kanji: '醜',
        meaning: 'ugly'
      }
    ]
  },
  {
    kanjiName: '弔',
    strokes: 4,
    grade: 8,
    freq: 1840,
    meanings: ['Condolences', 'Mourning', 'Funeral'],
    on: ['ちょう'],
    kun: ['とむら.う', 'とぶら.う'],
    jlpt: 1,
    quizAnswers: ['Answer', 'Condolences', 'Reciprocally', 'Inter-'],
    similars: [
      {
        kanji: '引',
        meaning: 'pull'
      },
      {
        kanji: '弓',
        meaning: 'bow'
      },
      {
        kanji: '弟',
        meaning: 'younger brother'
      },
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '井',
        meaning: 'well'
      },
      {
        kanji: '干',
        meaning: 'dry'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '与',
        meaning: 'bestow'
      },
      {
        kanji: '己',
        meaning: 'self'
      },
      {
        kanji: '十',
        meaning: 'ten'
      }
    ]
  },
  {
    kanjiName: '乙',
    strokes: 1,
    grade: 8,
    freq: 1841,
    meanings: ['The Latter', 'Duplicate', 'Strange', 'Witty', 'Fishhook Radical (no. 5)'],
    on: ['おつ', 'いつ'],
    kun: ['おと-', 'きのと'],
    jlpt: 1,
    quizAnswers: ['Catch', 'The Latter', 'Become Experienced', 'Board'],
    similars: [
      {
        kanji: '九',
        meaning: 'nine'
      },
      {
        kanji: '丸',
        meaning: 'round'
      },
      {
        kanji: '究',
        meaning: 'research'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '砕',
        meaning: 'smash'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '染',
        meaning: 'dye'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '瓶',
        meaning: 'bottle'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      }
    ]
  },
  {
    kanjiName: '遍',
    strokes: 12,
    grade: 8,
    freq: 1845,
    meanings: ['Everywhere', 'Times', 'Widely', 'Generally'],
    on: ['へん'],
    kun: ['あまね.く'],
    jlpt: 1,
    quizAnswers: ['Leave Behind', 'Everywhere', 'Depend', 'Surpass'],
    similars: [
      {
        kanji: '刷',
        meaning: 'printing'
      },
      {
        kanji: '偏',
        meaning: 'partial'
      },
      {
        kanji: '逓',
        meaning: 'relay'
      },
      {
        kanji: '逝',
        meaning: 'departed'
      },
      {
        kanji: '耐',
        meaning: '-proof'
      },
      {
        kanji: '通',
        meaning: 'traffic'
      },
      {
        kanji: '適',
        meaning: 'suitable'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '遅',
        meaning: 'slow'
      },
      {
        kanji: '捕',
        meaning: 'catch'
      }
    ]
  },
  {
    kanjiName: '衡',
    strokes: 16,
    grade: 8,
    freq: 1847,
    meanings: ['Equilibrium', 'Measuring Rod', 'Scale'],
    on: ['こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Hear', 'Politics', 'Equilibrium', 'Two'],
    similars: [
      {
        kanji: '衝',
        meaning: 'collide'
      },
      {
        kanji: '像',
        meaning: 'statue'
      },
      {
        kanji: '得',
        meaning: 'gain'
      },
      {
        kanji: '復',
        meaning: 'restore'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '側',
        meaning: 'side'
      },
      {
        kanji: '貨',
        meaning: 'freight'
      },
      {
        kanji: '解',
        meaning: 'unravel'
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      },
      {
        kanji: '術',
        meaning: 'art'
      }
    ]
  },
  {
    kanjiName: '款',
    strokes: 12,
    grade: 8,
    freq: 1854,
    meanings: ['Goodwill', 'Article', 'Section', 'Friendship', 'Collusion'],
    on: ['かん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Lesson', 'Goodwill', 'Ice', 'Hard'],
    similars: [
      {
        kanji: '赦',
        meaning: 'pardon'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '隷',
        meaning: 'slave'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '炭',
        meaning: 'charcoal'
      },
      {
        kanji: '穀',
        meaning: 'cereals'
      },
      {
        kanji: '諮',
        meaning: 'consult with'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      }
    ]
  },
  {
    kanjiName: '閲',
    strokes: 15,
    grade: 8,
    freq: 1855,
    meanings: ['Review', 'Inspection', 'Revision'],
    on: ['えつ'],
    kun: ['けみ.する'],
    jlpt: 1,
    quizAnswers: ['Review', 'Whole', 'Change', 'Perfection'],
    similars: [
      {
        kanji: '閥',
        meaning: 'clique'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '脱',
        meaning: 'undress'
      },
      {
        kanji: '閣',
        meaning: 'tower'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '闘',
        meaning: 'fight'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '盟',
        meaning: 'alliance'
      }
    ]
  },
  {
    kanjiName: '喝',
    strokes: 11,
    grade: 8,
    freq: 1858,
    meanings: ['Hoarse', 'Scold'],
    on: ['かつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Reduce', 'Hoarse', 'Wish', 'Give Birth'],
    similars: [
      {
        kanji: '謁',
        meaning: 'audience'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)'
      },
      {
        kanji: '褐',
        meaning: 'brown'
      },
      {
        kanji: '易',
        meaning: 'easy'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      },
      {
        kanji: '児',
        meaning: 'newborn babe'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '貴',
        meaning: 'precious'
      }
    ]
  },
  {
    kanjiName: '敢',
    strokes: 12,
    grade: 8,
    freq: 1859,
    meanings: ['Daring', 'Brave', 'Bold', 'Sad', 'Tragic', 'Pitiful'],
    on: ['かん'],
    kun: ['あ.えて', 'あ.えない', 'あ.えず'],
    jlpt: 1,
    quizAnswers: ['Put Up At', 'District', 'Daring', 'Family'],
    similars: [
      {
        kanji: '厳',
        meaning: 'stern'
      },
      {
        kanji: '契',
        meaning: 'pledge'
      },
      {
        kanji: '摂',
        meaning: 'vicarious'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '政',
        meaning: 'politics'
      },
      {
        kanji: '乾',
        meaning: 'drought'
      },
      {
        kanji: '取',
        meaning: 'take'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      },
      {
        kanji: '教',
        meaning: 'teach'
      },
      {
        kanji: '散',
        meaning: 'scatter'
      }
    ]
  },
  {
    kanjiName: '膜',
    strokes: 14,
    grade: 8,
    freq: 1804,
    meanings: ['Membrane'],
    on: ['まく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Negative', 'Prick', 'Amass', 'Membrane'],
    similars: [
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '模',
        meaning: 'imitation'
      },
      {
        kanji: '腹',
        meaning: 'abdomen'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '胆',
        meaning: 'gall bladder'
      },
      {
        kanji: '募',
        meaning: 'recruit'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '寛',
        meaning: 'tolerant'
      },
      {
        kanji: '賃',
        meaning: 'fare'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      }
    ]
  },
  {
    kanjiName: '盲',
    strokes: 8,
    grade: 8,
    freq: 1767,
    meanings: ['Blind', 'Blind Man', 'Ignoramus'],
    on: ['もう'],
    kun: ['めくら'],
    jlpt: 1,
    quizAnswers: ['Blind', 'Simplicity', 'Wild', 'Burning'],
    similars: [
      {
        kanji: '首',
        meaning: 'neck'
      },
      {
        kanji: '盾',
        meaning: 'shield'
      },
      {
        kanji: '看',
        meaning: 'watch over'
      },
      {
        kanji: '現',
        meaning: 'present'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '宙',
        meaning: 'mid-air'
      },
      {
        kanji: '直',
        meaning: 'straightaway'
      },
      {
        kanji: '者',
        meaning: 'someone'
      },
      {
        kanji: '目',
        meaning: 'eye'
      }
    ]
  },
  {
    kanjiName: '胎',
    strokes: 9,
    grade: 8,
    freq: 1861,
    meanings: ['Womb', 'Uterus'],
    on: ['たい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Womb', 'Violence', 'Art', 'Gold'],
    similars: [
      {
        kanji: '胴',
        meaning: 'trunk'
      },
      {
        kanji: '脱',
        meaning: 'undress'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '服',
        meaning: 'clothing'
      },
      {
        kanji: '台',
        meaning: 'pedestal'
      },
      {
        kanji: '肺',
        meaning: 'lungs'
      },
      {
        kanji: '名',
        meaning: 'name'
      },
      {
        kanji: '用',
        meaning: 'utilize'
      },
      {
        kanji: '昭',
        meaning: 'shining'
      },
      {
        kanji: '始',
        meaning: 'commence'
      }
    ]
  },
  {
    kanjiName: '酵',
    strokes: 14,
    grade: 8,
    freq: 1862,
    meanings: ['Fermentation'],
    on: ['こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Extend', 'Divining', 'Concentrate On', 'Fermentation'],
    similars: [
      {
        kanji: '酷',
        meaning: 'cruel'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '酢',
        meaning: 'vinegar'
      },
      {
        kanji: '配',
        meaning: 'distribute'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '皇',
        meaning: 'emperor'
      },
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '醜',
        meaning: 'ugly'
      },
      {
        kanji: '酸',
        meaning: 'acid'
      }
    ]
  },
  {
    kanjiName: '堕',
    strokes: 12,
    grade: 8,
    freq: 2087,
    meanings: ['Degenerate', 'Descend To', 'Lapse Into'],
    on: ['だ'],
    kun: ['お.ちる', 'くず.す', 'くず.れる'],
    jlpt: 1,
    quizAnswers: ['Relative', 'How Much', 'Discard', 'Degenerate'],
    similars: [
      {
        kanji: '随',
        meaning: 'follow'
      },
      {
        kanji: '陣',
        meaning: 'camp'
      },
      {
        kanji: '陸',
        meaning: 'land'
      },
      {
        kanji: '塑',
        meaning: 'model'
      },
      {
        kanji: '墜',
        meaning: 'crash'
      },
      {
        kanji: '悔',
        meaning: 'repent'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '陳',
        meaning: 'exhibit'
      },
      {
        kanji: '前',
        meaning: 'in front'
      }
    ]
  },
  {
    kanjiName: '遮',
    strokes: 14,
    grade: 8,
    freq: 1865,
    meanings: ['Intercept', 'Interrupt', 'Obstruct'],
    on: ['しゃ'],
    kun: ['さえぎ.る'],
    jlpt: 1,
    quizAnswers: ['Intercept', '10,000', 'Music', 'Rule'],
    similars: [
      {
        kanji: '庶',
        meaning: 'commoner'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '遠',
        meaning: 'distant'
      },
      {
        kanji: '違',
        meaning: 'difference'
      },
      {
        kanji: '造',
        meaning: 'create'
      },
      {
        kanji: '度',
        meaning: 'degrees'
      },
      {
        kanji: '席',
        meaning: 'seat'
      },
      {
        kanji: '点',
        meaning: 'spot'
      },
      {
        kanji: '熱',
        meaning: 'heat'
      },
      {
        kanji: '還',
        meaning: 'send back'
      }
    ]
  },
  {
    kanjiName: '凸',
    strokes: 5,
    grade: 8,
    freq: 2143,
    meanings: ['Convex', 'Beetle Brow', 'Uneven'],
    on: ['とつ'],
    kun: ['でこ'],
    jlpt: 1,
    quizAnswers: ['Convex', 'Impossible', 'Courtyard', 'Province'],
    similars: [
      {
        kanji: '凹',
        meaning: 'concave'
      },
      {
        kanji: '両',
        meaning: 'both'
      },
      {
        kanji: '画',
        meaning: 'brush-stroke'
      },
      {
        kanji: '早',
        meaning: 'early'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '仙',
        meaning: 'hermit'
      },
      {
        kanji: '中',
        meaning: 'in'
      },
      {
        kanji: '出',
        meaning: 'exit'
      },
      {
        kanji: '申',
        meaning: 'have the honor to'
      },
      {
        kanji: '山',
        meaning: 'mountain'
      }
    ]
  },
  {
    kanjiName: '凹',
    strokes: 5,
    grade: 8,
    freq: 2206,
    meanings: ['Concave', 'Hollow', 'Sunken'],
    on: ['おう'],
    kun: ['くぼ.む', 'へこ.む', 'ぼこ'],
    jlpt: 1,
    quizAnswers: ['Concave', 'Cluster', 'Cooperate', 'Help'],
    similars: [
      {
        kanji: '仙',
        meaning: 'hermit'
      },
      {
        kanji: '凸',
        meaning: 'convex'
      },
      {
        kanji: '両',
        meaning: 'both'
      },
      {
        kanji: '画',
        meaning: 'brush-stroke'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '伸',
        meaning: 'expand'
      },
      {
        kanji: '申',
        meaning: 'have the honor to'
      },
      {
        kanji: '用',
        meaning: 'utilize'
      },
      {
        kanji: '島',
        meaning: 'island'
      },
      {
        kanji: '出',
        meaning: 'exit'
      }
    ]
  },
  {
    kanjiName: '楓',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Maple'],
    on: ['ふう'],
    kun: ['かえで'],
    jlpt: 1,
    quizAnswers: ['Respiration', 'Maple', 'Letter', 'Ephemeral Thing']
  },
  {
    kanjiName: '哉',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['How', 'What', 'Alas', 'Question Mark', 'Exclamation Mark'],
    on: ['さい'],
    kun: ['かな', 'や'],
    jlpt: 1,
    quizAnswers: ['Woman', 'How', 'Tight', 'Seat']
  },
  {
    kanjiName: '蒼',
    strokes: 13,
    grade: 9,
    freq: 2276,
    meanings: ['Blue', 'Pale'],
    on: ['そう'],
    kun: ['あお.い'],
    jlpt: 1,
    quizAnswers: ['Stair', 'Diligent', 'Shouldering', 'Blue']
  },
  {
    kanjiName: '瑠',
    strokes: 14,
    grade: 8,
    freq: 2352,
    meanings: ['Lapis Lazuli'],
    on: ['る', 'りゅう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Lapis Lazuli', 'Season', 'Destiny', 'Immature']
  },
  {
    kanjiName: '萌',
    strokes: 11,
    grade: 9,
    freq: 2346,
    meanings: ['Show Symptoms Of', 'Sprout', 'Bud', 'Malt'],
    on: ['ほう'],
    kun: ['も.える', 'きざ.す', 'めばえ', 'きざ.し'],
    jlpt: 1,
    quizAnswers: ['View', 'Greet', 'Rumor', 'Show Symptoms Of']
  },
  {
    kanjiName: '硫',
    strokes: 12,
    grade: 8,
    freq: 1867,
    meanings: ['Sulphur'],
    on: ['りゅう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Sulphur', 'Absolve', 'Chart', 'Severance'],
    similars: [
      {
        kanji: '流',
        meaning: 'current'
      },
      {
        kanji: '砂',
        meaning: 'sand'
      },
      {
        kanji: '研',
        meaning: 'polish'
      },
      {
        kanji: '磁',
        meaning: 'magnet'
      },
      {
        kanji: '該',
        meaning: 'above-stated'
      },
      {
        kanji: '辞',
        meaning: 'resign'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '砲',
        meaning: 'cannon'
      },
      {
        kanji: '競',
        meaning: 'emulate'
      },
      {
        kanji: '校',
        meaning: 'exam'
      }
    ]
  },
  {
    kanjiName: '赦',
    strokes: 11,
    grade: 8,
    freq: 1868,
    meanings: ['Pardon', 'Forgiveness'],
    on: ['しゃ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Plate', 'Pardon', 'Three', 'Press'],
    similars: [
      {
        kanji: '変',
        meaning: 'unusual'
      },
      {
        kanji: '教',
        meaning: 'teach'
      },
      {
        kanji: '款',
        meaning: 'goodwill'
      },
      {
        kanji: '赤',
        meaning: 'red'
      },
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '契',
        meaning: 'pledge'
      },
      {
        kanji: '葬',
        meaning: 'interment'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '散',
        meaning: 'scatter'
      }
    ]
  },
  {
    kanjiName: '窃',
    strokes: 9,
    grade: 8,
    freq: 1871,
    meanings: ['Stealth', 'Steal', 'Secret', 'Private', 'Hushed'],
    on: ['せつ'],
    kun: ['ぬす.む', 'ひそ.か'],
    jlpt: 1,
    quizAnswers: ['Stealth', 'Make A Living', 'Angry', 'Learn'],
    similars: [
      {
        kanji: '突',
        meaning: 'stab'
      },
      {
        kanji: '空',
        meaning: 'empty'
      },
      {
        kanji: '究',
        meaning: 'research'
      },
      {
        kanji: '宅',
        meaning: 'home'
      },
      {
        kanji: '窒',
        meaning: 'plug up'
      },
      {
        kanji: '寡',
        meaning: 'widow'
      },
      {
        kanji: '案',
        meaning: 'plan'
      },
      {
        kanji: '搾',
        meaning: 'squeeze'
      },
      {
        kanji: '寄',
        meaning: 'draw near'
      },
      {
        kanji: '控',
        meaning: 'withdraw'
      }
    ]
  },
  {
    kanjiName: '慨',
    strokes: 13,
    grade: 8,
    freq: 1875,
    meanings: ['Rue', 'Be Sad', 'Sigh', 'Lament'],
    on: ['がい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Acrid', 'Vice-', 'Rue', 'Escort'],
    similars: [
      {
        kanji: '既',
        meaning: 'previously'
      },
      {
        kanji: '概',
        meaning: 'outline'
      },
      {
        kanji: '恨',
        meaning: 'regret'
      },
      {
        kanji: '暁',
        meaning: 'daybreak'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      },
      {
        kanji: '潤',
        meaning: 'wet'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '皇',
        meaning: 'emperor'
      },
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      }
    ]
  },
  {
    kanjiName: '扶',
    strokes: 7,
    grade: 8,
    freq: 1879,
    meanings: ['Aid', 'Help', 'Assist'],
    on: ['ふ'],
    kun: ['たす.ける'],
    jlpt: 1,
    quizAnswers: ['Counter For Beds', 'Lap', 'Value', 'Aid'],
    similars: [
      {
        kanji: '抹',
        meaning: 'rub'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      },
      {
        kanji: '択',
        meaning: 'choose'
      },
      {
        kanji: '技',
        meaning: 'skill'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '拷',
        meaning: 'torture'
      },
      {
        kanji: '牧',
        meaning: 'breed'
      },
      {
        kanji: '拝',
        meaning: 'worship'
      }
    ]
  },
  {
    kanjiName: '戯',
    strokes: 15,
    grade: 8,
    freq: 1880,
    meanings: ['Frolic', 'Play', 'Sport'],
    on: ['ぎ', 'げ'],
    kun: ['たわむ.れる', 'ざ.れる', 'じゃ.れる'],
    jlpt: 1,
    quizAnswers: ['Younger Brother', 'Strain', 'Frolic', 'Fluid'],
    similars: [
      {
        kanji: '虚',
        meaning: 'void'
      },
      {
        kanji: '茂',
        meaning: 'overgrown'
      },
      {
        kanji: '虞',
        meaning: 'fear'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '繊',
        meaning: 'slender'
      },
      {
        kanji: '歳',
        meaning: 'year-end'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '供',
        meaning: 'submit'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      },
      {
        kanji: '並',
        meaning: 'row'
      }
    ]
  },
  {
    kanjiName: '忌',
    strokes: 7,
    grade: 8,
    freq: 1882,
    meanings: ['Mourning', 'Abhor', 'Detestable', 'Death Anniversary'],
    on: ['き'],
    kun: ['い.む', 'い.み', 'い.まわしい'],
    jlpt: 1,
    quizAnswers: ['Turn Off', 'Dry Up', 'Mourning', 'Affair'],
    similars: [
      {
        kanji: '応',
        meaning: 'apply'
      },
      {
        kanji: '忘',
        meaning: 'forget'
      },
      {
        kanji: '念',
        meaning: 'wish'
      },
      {
        kanji: '忍',
        meaning: 'endure'
      },
      {
        kanji: '志',
        meaning: 'intention'
      },
      {
        kanji: '心',
        meaning: 'heart'
      },
      {
        kanji: '恋',
        meaning: 'romance'
      },
      {
        kanji: '忠',
        meaning: 'loyalty'
      },
      {
        kanji: '恩',
        meaning: 'grace'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      }
    ]
  },
  {
    kanjiName: '濁',
    strokes: 16,
    grade: 8,
    freq: 1883,
    meanings: ['Voiced', 'Uncleanness', 'Wrong', 'Nigori', 'Impurity'],
    on: ['だく', 'じょく'],
    kun: ['にご.る', 'にご.す'],
    jlpt: 1,
    quizAnswers: ['Ambition', 'Voiced', 'Pawn', 'And'],
    similars: [
      {
        kanji: '獣',
        meaning: 'animal'
      },
      {
        kanji: '漂',
        meaning: 'drift'
      },
      {
        kanji: '涼',
        meaning: 'refreshing'
      },
      {
        kanji: '豊',
        meaning: 'bountiful'
      },
      {
        kanji: '渦',
        meaning: 'whirlpool'
      },
      {
        kanji: '触',
        meaning: 'contact'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '濃',
        meaning: 'concentrated'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '測',
        meaning: 'fathom'
      }
    ]
  },
  {
    kanjiName: '奔',
    strokes: 8,
    grade: 8,
    freq: 1884,
    meanings: ['Run', 'Bustle'],
    on: ['ほん'],
    kun: ['はし.る'],
    jlpt: 1,
    quizAnswers: ['Old Japanese Coin', 'Cover', 'Run', 'World'],
    similars: [
      {
        kanji: '森',
        meaning: 'forest'
      },
      {
        kanji: '茶',
        meaning: 'tea'
      },
      {
        kanji: '奏',
        meaning: 'play music'
      },
      {
        kanji: '柄',
        meaning: 'design'
      },
      {
        kanji: '斎',
        meaning: 'purification'
      },
      {
        kanji: '来',
        meaning: 'come'
      },
      {
        kanji: '朱',
        meaning: 'vermilion'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '棒',
        meaning: 'rod'
      },
      {
        kanji: '条',
        meaning: 'article'
      }
    ]
  },
  {
    kanjiName: '肖',
    strokes: 7,
    grade: 8,
    freq: 1889,
    meanings: ['Resemblance'],
    on: ['しょう'],
    kun: ['あやか.る'],
    jlpt: 1,
    quizAnswers: ['Memorize', 'Build', 'Resemblance', 'Print'],
    similars: [
      {
        kanji: '削',
        meaning: 'plane'
      },
      {
        kanji: '宵',
        meaning: 'wee hours'
      },
      {
        kanji: '消',
        meaning: 'extinguish'
      },
      {
        kanji: '背',
        meaning: 'stature'
      },
      {
        kanji: '育',
        meaning: 'bring up'
      },
      {
        kanji: '青',
        meaning: 'blue'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '骨',
        meaning: 'skeleton'
      },
      {
        kanji: '硝',
        meaning: 'nitrate'
      },
      {
        kanji: '有',
        meaning: 'possess'
      }
    ]
  },
  {
    kanjiName: '朽',
    strokes: 6,
    grade: 8,
    freq: 1891,
    meanings: ['Decay', 'Rot', 'Remain In Seclusion'],
    on: ['きゅう'],
    kun: ['く.ちる'],
    jlpt: 1,
    quizAnswers: ['Low Number', 'Decay', 'Sky', 'Hopes'],
    similars: [
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      },
      {
        kanji: '本',
        meaning: 'book'
      },
      {
        kanji: '札',
        meaning: 'tag'
      },
      {
        kanji: '朴',
        meaning: 'crude'
      },
      {
        kanji: '机',
        meaning: 'desk'
      },
      {
        kanji: '板',
        meaning: 'plank'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '枢',
        meaning: 'hinge'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      }
    ]
  },
  {
    kanjiName: '殻',
    strokes: 11,
    grade: 8,
    freq: 1892,
    meanings: ['Husk', 'Nut Shell'],
    on: ['かく', 'こく', 'ばい'],
    kun: ['から', 'がら'],
    jlpt: 1,
    quizAnswers: ['Duty', 'Another', 'Husk', 'Tier'],
    similars: [
      {
        kanji: '穀',
        meaning: 'cereals'
      },
      {
        kanji: '塚',
        meaning: 'hillock'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '売',
        meaning: 'sell'
      },
      {
        kanji: '殺',
        meaning: 'kill'
      },
      {
        kanji: '疫',
        meaning: 'epidemic'
      },
      {
        kanji: '麦',
        meaning: 'barley'
      },
      {
        kanji: '壱',
        meaning: 'one (in documents)'
      },
      {
        kanji: '契',
        meaning: 'pledge'
      },
      {
        kanji: '変',
        meaning: 'unusual'
      }
    ]
  },
  {
    kanjiName: '享',
    strokes: 8,
    grade: 8,
    freq: 1893,
    meanings: ['Enjoy', 'Receive', 'Undergo', 'Answer (phone)', 'Take', 'Get', 'Catch'],
    on: ['きょう', 'こう'],
    kun: ['う.ける'],
    jlpt: 1,
    quizAnswers: ['Phenomenal', 'Some', 'Beauty', 'Enjoy'],
    similars: [
      {
        kanji: '亭',
        meaning: 'pavilion'
      },
      {
        kanji: '郭',
        meaning: 'enclosure'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '京',
        meaning: 'capital'
      },
      {
        kanji: '季',
        meaning: 'seasons'
      },
      {
        kanji: '亜',
        meaning: 'Asia'
      },
      {
        kanji: '塾',
        meaning: 'cram school'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '停',
        meaning: 'halt'
      },
      {
        kanji: '字',
        meaning: 'character'
      }
    ]
  },
  {
    kanjiName: '藩',
    strokes: 18,
    grade: 8,
    freq: 1896,
    meanings: ['Clan', 'Enclosure'],
    on: ['はん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Clan', 'Counter For Cannons', 'Ship', 'Time'],
    similars: [
      {
        kanji: '審',
        meaning: 'hearing'
      },
      {
        kanji: '番',
        meaning: 'turn'
      },
      {
        kanji: '潜',
        meaning: 'submerge'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '暮',
        meaning: 'evening'
      },
      {
        kanji: '暦',
        meaning: 'calendar'
      },
      {
        kanji: '霜',
        meaning: 'frost'
      },
      {
        kanji: '福',
        meaning: 'blessing'
      },
      {
        kanji: '蓄',
        meaning: 'amass'
      },
      {
        kanji: '著',
        meaning: 'renowned'
      }
    ]
  },
  {
    kanjiName: '媒',
    strokes: 12,
    grade: 8,
    freq: 1900,
    meanings: ['Mediator', 'Go-between'],
    on: ['ばい'],
    kun: ['なこうど'],
    jlpt: 1,
    quizAnswers: ['Sail', 'Counter For Long Cylindrical Things', 'Mediator', 'Stop'],
    similars: [
      {
        kanji: '某',
        meaning: 'so-and-so'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      },
      {
        kanji: '課',
        meaning: 'chapter'
      },
      {
        kanji: '娠',
        meaning: 'with child'
      },
      {
        kanji: '保',
        meaning: 'protect'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '閑',
        meaning: 'leisure'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      }
    ]
  },
  {
    kanjiName: '鶏',
    strokes: 19,
    grade: 8,
    freq: 1901,
    meanings: ['Chicken'],
    on: ['けい'],
    kun: ['にわとり', 'とり'],
    jlpt: 1,
    quizAnswers: ['Chicken', 'Electric Poles', 'Defect', 'Estimate'],
    similars: [
      {
        kanji: '騰',
        meaning: 'leaping up'
      },
      {
        kanji: '鳴',
        meaning: 'chirp'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '源',
        meaning: 'source'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '翻',
        meaning: 'flip'
      },
      {
        kanji: '漁',
        meaning: 'fishing'
      },
      {
        kanji: '親',
        meaning: 'parent'
      },
      {
        kanji: '類',
        meaning: 'sort'
      }
    ]
  },
  {
    kanjiName: '嘱',
    strokes: 15,
    grade: 8,
    freq: 1903,
    meanings: ['Entrust', 'Request', 'Send A Message'],
    on: ['しょく'],
    kun: ['しょく.する', 'たの.む'],
    jlpt: 1,
    quizAnswers: ['Entrust', 'Winter', 'Cause', 'Part Of Speech'],
    similars: [
      {
        kanji: '属',
        meaning: 'belong'
      },
      {
        kanji: '患',
        meaning: 'afflicted'
      },
      {
        kanji: '臨',
        meaning: 'look to'
      },
      {
        kanji: '融',
        meaning: 'dissolve'
      },
      {
        kanji: '器',
        meaning: 'utensil'
      },
      {
        kanji: '蛮',
        meaning: 'barbarian'
      },
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '蚕',
        meaning: 'silkworm'
      },
      {
        kanji: '独',
        meaning: 'single'
      },
      {
        kanji: '風',
        meaning: 'wind'
      }
    ]
  },
  {
    kanjiName: '迭',
    strokes: 8,
    grade: 8,
    freq: 1907,
    meanings: ['Transfer', 'Alternation'],
    on: ['てつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Wealth', 'Deliver', 'Transfer', 'Highly'],
    similars: [
      {
        kanji: '送',
        meaning: 'escort'
      },
      {
        kanji: '迷',
        meaning: 'astray'
      },
      {
        kanji: '途',
        meaning: 'route'
      },
      {
        kanji: '逮',
        meaning: 'apprehend'
      },
      {
        kanji: '知',
        meaning: 'know'
      },
      {
        kanji: '述',
        meaning: 'mention'
      },
      {
        kanji: '近',
        meaning: 'near'
      },
      {
        kanji: '透',
        meaning: 'transparent'
      },
      {
        kanji: '造',
        meaning: 'create'
      },
      {
        kanji: '逓',
        meaning: 'relay'
      }
    ]
  },
  {
    kanjiName: '椎',
    strokes: 12,
    grade: 8,
    freq: 1911,
    meanings: ['Chinquapin', 'Mallet', 'Spine'],
    on: ['つい', 'すい'],
    kun: ['つち', 'う.つ'],
    jlpt: 1,
    quizAnswers: ['Chinquapin', 'State', 'Texture', 'Possess']
  },
  {
    kanjiName: '絹',
    strokes: 13,
    grade: 6,
    freq: 1916,
    meanings: ['Silk'],
    on: ['けん'],
    kun: ['きぬ'],
    jlpt: 1,
    quizAnswers: ['Silk', 'A Stand', 'Hopes', 'Chill'],
    similars: [
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '組',
        meaning: 'association'
      },
      {
        kanji: '納',
        meaning: 'settlement'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      },
      {
        kanji: '縄',
        meaning: 'straw rope'
      },
      {
        kanji: '編',
        meaning: 'compilation'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      },
      {
        kanji: '緒',
        meaning: 'thong'
      },
      {
        kanji: '緯',
        meaning: 'horizontal'
      }
    ]
  },
  {
    kanjiName: '陪',
    strokes: 11,
    grade: 8,
    freq: 1917,
    meanings: ['Obeisance', 'Follow', 'Accompany', 'Attend On'],
    on: ['ばい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Quantity', 'Obeisance', 'Relieve (burden)', '11am-1pm'],
    similars: [
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '培',
        meaning: 'cultivate'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      },
      {
        kanji: '喜',
        meaning: 'rejoice'
      },
      {
        kanji: '嫡',
        meaning: 'legitimate wife'
      },
      {
        kanji: '滴',
        meaning: 'drip'
      },
      {
        kanji: '摘',
        meaning: 'pinch'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '俗',
        meaning: 'vulgar'
      }
    ]
  },
  {
    kanjiName: '剖',
    strokes: 10,
    grade: 8,
    freq: 1918,
    meanings: ['Divide'],
    on: ['ぼう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Property', 'Injury', 'Surpass', 'Divide'],
    similars: [
      {
        kanji: '部',
        meaning: 'section'
      },
      {
        kanji: '痢',
        meaning: 'diarrhea'
      },
      {
        kanji: '割',
        meaning: 'proportion'
      },
      {
        kanji: '度',
        meaning: 'degrees'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '席',
        meaning: 'seat'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '訂',
        meaning: 'revise'
      },
      {
        kanji: '奇',
        meaning: 'strange'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      }
    ]
  },
  {
    kanjiName: '譜',
    strokes: 19,
    grade: 8,
    freq: 1919,
    meanings: ['Musical Score', 'Music', 'Note', 'Staff', 'Table', 'Genealogy'],
    on: ['ふ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Substance', 'Wear', 'Again', 'Musical Score'],
    similars: [
      {
        kanji: '諸',
        meaning: 'various'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '議',
        meaning: 'deliberation'
      },
      {
        kanji: '評',
        meaning: 'evaluate'
      },
      {
        kanji: '謙',
        meaning: 'self-effacing'
      },
      {
        kanji: '請',
        meaning: 'solicit'
      },
      {
        kanji: '講',
        meaning: 'lecture'
      },
      {
        kanji: '詳',
        meaning: 'detailed'
      },
      {
        kanji: '識',
        meaning: 'discriminating'
      },
      {
        kanji: '普',
        meaning: 'universal'
      }
    ]
  },
  {
    kanjiName: '淑',
    strokes: 11,
    grade: 8,
    freq: 1922,
    meanings: ['Graceful', 'Gentle', 'Pure'],
    on: ['しゅく'],
    kun: ['しと.やか'],
    jlpt: 1,
    quizAnswers: ['Graceful', 'Occasion', 'Once Upon A Time', 'Darling'],
    similars: [
      {
        kanji: '渉',
        meaning: 'ford'
      },
      {
        kanji: '寂',
        meaning: 'loneliness'
      },
      {
        kanji: '叔',
        meaning: 'uncle'
      },
      {
        kanji: '湾',
        meaning: 'gulf'
      },
      {
        kanji: '渡',
        meaning: 'transit'
      },
      {
        kanji: '液',
        meaning: 'fluid'
      },
      {
        kanji: '叙',
        meaning: 'confer'
      },
      {
        kanji: '染',
        meaning: 'dye'
      },
      {
        kanji: '浅',
        meaning: 'shallow'
      },
      {
        kanji: '洪',
        meaning: 'deluge'
      }
    ]
  },
  {
    kanjiName: '帆',
    strokes: 6,
    grade: 8,
    freq: 1923,
    meanings: ['Sail'],
    on: ['はん'],
    kun: ['ほ'],
    jlpt: 1,
    quizAnswers: ['Injustice', 'Flee', 'Call', 'Sail'],
    similars: [
      {
        kanji: '冊',
        meaning: 'tome'
      },
      {
        kanji: '内',
        meaning: 'inside'
      },
      {
        kanji: '肉',
        meaning: 'meat'
      },
      {
        kanji: '刺',
        meaning: 'thorn'
      },
      {
        kanji: '雨',
        meaning: 'rain'
      },
      {
        kanji: '凡',
        meaning: 'commonplace'
      },
      {
        kanji: '耐',
        meaning: '-proof'
      },
      {
        kanji: '状',
        meaning: 'status quo'
      },
      {
        kanji: '私',
        meaning: 'private'
      },
      {
        kanji: '困',
        meaning: 'quandary'
      }
    ]
  },
  {
    kanjiName: '憤',
    strokes: 15,
    grade: 8,
    freq: 1863,
    meanings: ['Aroused', 'Resent', 'Be Indignant', 'Anger'],
    on: ['ふん'],
    kun: ['いきどお.る'],
    jlpt: 1,
    quizAnswers: ['Aroused', 'Shoot', 'Near', 'Throne'],
    similars: [
      {
        kanji: '噴',
        meaning: 'erupt'
      },
      {
        kanji: '漬',
        meaning: 'pickling'
      },
      {
        kanji: '墳',
        meaning: 'tomb'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '慣',
        meaning: 'accustomed'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '慎',
        meaning: 'humility'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      }
    ]
  },
  {
    kanjiName: '酌',
    strokes: 10,
    grade: 8,
    freq: 2271,
    meanings: ['Bar-tending', 'Serving Sake', 'The Host', 'Draw (water)', 'Ladle', 'Scoop', 'Pump'],
    on: ['しゃく'],
    kun: ['く.む'],
    jlpt: 1,
    quizAnswers: ['Bar-tending', 'Tatami Mat', 'Life', 'Blade'],
    similars: [
      {
        kanji: '酔',
        meaning: 'drunk'
      },
      {
        kanji: '的',
        meaning: "bull's eye"
      },
      {
        kanji: '配',
        meaning: 'distribute'
      },
      {
        kanji: '酬',
        meaning: 'repay'
      },
      {
        kanji: '酢',
        meaning: 'vinegar'
      },
      {
        kanji: '尊',
        meaning: 'revered'
      },
      {
        kanji: '酪',
        meaning: 'dairy products'
      },
      {
        kanji: '更',
        meaning: 'grow late'
      },
      {
        kanji: '貝',
        meaning: 'shellfish'
      },
      {
        kanji: '西',
        meaning: 'west'
      }
    ]
  },
  {
    kanjiName: '暁',
    strokes: 12,
    grade: 8,
    freq: 1924,
    meanings: ['Daybreak', 'Dawn', 'In The Event'],
    on: ['ぎょう', 'きょう'],
    kun: ['あかつき', 'さと.る'],
    jlpt: 1,
    quizAnswers: ['Daybreak', 'Association', 'Throw', 'Degrees'],
    similars: [
      {
        kanji: '焼',
        meaning: 'bake'
      },
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '星',
        meaning: 'star'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      },
      {
        kanji: '既',
        meaning: 'previously'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '時',
        meaning: 'time'
      },
      {
        kanji: '晩',
        meaning: 'nightfall'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      }
    ]
  },
  {
    kanjiName: '傑',
    strokes: 13,
    grade: 8,
    freq: 1926,
    meanings: ['Greatness', 'Excellence'],
    on: ['けつ'],
    kun: ['すぐ.れる'],
    jlpt: 1,
    quizAnswers: ['Residence', 'Heap Up', 'Greatness', 'Machine'],
    similars: [
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '様',
        meaning: 'Esq.'
      },
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '森',
        meaning: 'forest'
      },
      {
        kanji: '美',
        meaning: 'beauty'
      },
      {
        kanji: '乗',
        meaning: 'ride'
      },
      {
        kanji: '集',
        meaning: 'gather'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      }
    ]
  },
  {
    kanjiName: '錠',
    strokes: 16,
    grade: 8,
    freq: 1934,
    meanings: ['Lock', 'Fetters', 'Shackles'],
    on: ['じょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Association', 'Lock', 'Little', 'Arrows'],
    similars: [
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '鏡',
        meaning: 'mirror'
      },
      {
        kanji: '錬',
        meaning: 'tempering'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '録',
        meaning: 'record'
      }
    ]
  },
  {
    kanjiName: '凌',
    strokes: 10,
    grade: 9,
    freq: 2423,
    meanings: ['Endure', 'Keep (rain)out', 'Stave Off', 'Tide Over', 'Defy', 'Slight', 'Surpass'],
    on: ['りょう'],
    kun: ['しの.ぐ'],
    jlpt: 1,
    quizAnswers: ['Board', 'Primitive', 'Obtain', 'Endure']
  },
  {
    kanjiName: '瑞',
    strokes: 13,
    grade: 9,
    freq: 1873,
    meanings: ['Congratulations'],
    on: ['ずい', 'すい'],
    kun: ['みず-', 'しるし'],
    jlpt: 1,
    quizAnswers: ['Reason', 'Back', 'Congratulations', 'With']
  },
  {
    kanjiName: '璃',
    strokes: 15,
    grade: 8,
    freq: null,
    meanings: ['Glassy', 'Lapis Lazuli'],
    on: ['り'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Glassy', 'Behind', 'Party', 'Become Serious']
  },
  {
    kanjiName: '遷',
    strokes: 15,
    grade: 8,
    freq: 1937,
    meanings: ['Transition', 'Move', 'Change'],
    on: ['せん'],
    kun: ['うつ.る', 'うつ.す', 'みやこがえ'],
    jlpt: 1,
    quizAnswers: ['Transition', 'Pack Up', 'Refuse', 'Noted'],
    similars: [
      {
        kanji: '圏',
        meaning: 'sphere'
      },
      {
        kanji: '要',
        meaning: 'need'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '遭',
        meaning: 'encounter'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      },
      {
        kanji: '配',
        meaning: 'distribute'
      },
      {
        kanji: '較',
        meaning: 'contrast'
      },
      {
        kanji: '逸',
        meaning: 'deviate'
      },
      {
        kanji: '覆',
        meaning: 'capsize'
      },
      {
        kanji: '覇',
        meaning: 'hegemony'
      }
    ]
  },
  {
    kanjiName: '拙',
    strokes: 8,
    grade: 8,
    freq: 1938,
    meanings: ['Bungling', 'Clumsy', 'Unskillful'],
    on: ['せつ'],
    kun: ['つたな.い'],
    jlpt: 1,
    quizAnswers: ['Method', 'Bungling', 'Tire', 'Support'],
    similars: [
      {
        kanji: '掘',
        meaning: 'dig'
      },
      {
        kanji: '屈',
        meaning: 'yield'
      },
      {
        kanji: '出',
        meaning: 'exit'
      },
      {
        kanji: '堀',
        meaning: 'ditch'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '拡',
        meaning: 'broaden'
      },
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '両',
        meaning: 'both'
      },
      {
        kanji: '挿',
        meaning: 'insert'
      },
      {
        kanji: '拝',
        meaning: 'worship'
      }
    ]
  },
  {
    kanjiName: '峠',
    strokes: 9,
    grade: 8,
    freq: 1941,
    meanings: ['Mountain Peak', 'Mountain Pass', 'Climax', 'Crest', '(kokuji)'],
    on: [],
    kun: ['とうげ'],
    jlpt: 1,
    quizAnswers: ['Art', 'Sort', 'Mountain Peak', 'To Be'],
    similars: [
      {
        kanji: '崇',
        meaning: 'adore'
      },
      {
        kanji: '岸',
        meaning: 'beach'
      },
      {
        kanji: '違',
        meaning: 'difference'
      },
      {
        kanji: '峰',
        meaning: 'summit'
      },
      {
        kanji: '葉',
        meaning: 'leaf'
      },
      {
        kanji: '庶',
        meaning: 'commoner'
      },
      {
        kanji: '票',
        meaning: 'ballot'
      },
      {
        kanji: '崎',
        meaning: 'promontory'
      },
      {
        kanji: '寂',
        meaning: 'loneliness'
      },
      {
        kanji: '岐',
        meaning: 'branch off'
      }
    ]
  },
  {
    kanjiName: '篤',
    strokes: 16,
    grade: 8,
    freq: 1942,
    meanings: ['Fervent', 'Kind', 'Cordial', 'Serious', 'Deliberate'],
    on: ['とく'],
    kun: ['あつ.い'],
    jlpt: 1,
    quizAnswers: ['Relate', 'Ingredients', 'Fervent', 'Fate'],
    similars: [
      {
        kanji: '焦',
        meaning: 'char'
      },
      {
        kanji: '馬',
        meaning: 'horse'
      },
      {
        kanji: '騰',
        meaning: 'leaping up'
      },
      {
        kanji: '礁',
        meaning: 'reef'
      },
      {
        kanji: '驚',
        meaning: 'wonder'
      },
      {
        kanji: '鳴',
        meaning: 'chirp'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      },
      {
        kanji: '笛',
        meaning: 'flute'
      },
      {
        kanji: '等',
        meaning: 'etc.'
      },
      {
        kanji: '筒',
        meaning: 'cylinder'
      }
    ]
  },
  {
    kanjiName: '叔',
    strokes: 8,
    grade: 8,
    freq: 1950,
    meanings: ['Uncle', 'Youth'],
    on: ['しゅく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Pressed', 'Commute', 'Co-', 'Uncle'],
    similars: [
      {
        kanji: '寂',
        meaning: 'loneliness'
      },
      {
        kanji: '変',
        meaning: 'unusual'
      },
      {
        kanji: '叙',
        meaning: 'confer'
      },
      {
        kanji: '淑',
        meaning: 'graceful'
      },
      {
        kanji: '交',
        meaning: 'mingle'
      },
      {
        kanji: '督',
        meaning: 'coach'
      },
      {
        kanji: '投',
        meaning: 'throw'
      },
      {
        kanji: '麦',
        meaning: 'barley'
      },
      {
        kanji: '衣',
        meaning: 'garment'
      },
      {
        kanji: '坂',
        meaning: 'slope'
      }
    ]
  },
  {
    kanjiName: '雌',
    strokes: 14,
    grade: 8,
    freq: 1951,
    meanings: ['Feminine', 'Female'],
    on: ['し'],
    kun: ['め-', 'めす', 'めん'],
    jlpt: 1,
    quizAnswers: ['Supply', 'Quiet', 'Feminine', 'Bask In'],
    similars: [
      {
        kanji: '雑',
        meaning: 'miscellaneous'
      },
      {
        kanji: '催',
        meaning: 'sponsor'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '雇',
        meaning: 'employ'
      },
      {
        kanji: '雅',
        meaning: 'gracious'
      },
      {
        kanji: '維',
        meaning: 'fiber'
      },
      {
        kanji: '難',
        meaning: 'difficult'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '推',
        meaning: 'conjecture'
      }
    ]
  },
  {
    kanjiName: '堪',
    strokes: 12,
    grade: 8,
    freq: 1953,
    meanings: ['Withstand', 'Endure', 'Support', 'Resist'],
    on: ['かん', 'たん'],
    kun: ['た.える', 'たま.る', 'こら.える', 'こた.える'],
    jlpt: 1,
    quizAnswers: ['Equal', 'Withstand', 'Account', 'Ride At Anchor'],
    similars: [
      {
        kanji: '甚',
        meaning: 'tremendously'
      },
      {
        kanji: '垣',
        meaning: 'hedge'
      },
      {
        kanji: '勘',
        meaning: 'intuition'
      },
      {
        kanji: '棋',
        meaning: 'chess piece'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      },
      {
        kanji: '壊',
        meaning: 'demolition'
      },
      {
        kanji: '塊',
        meaning: 'clod'
      },
      {
        kanji: '墳',
        meaning: 'tomb'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      }
    ]
  },
  {
    kanjiName: '吟',
    strokes: 7,
    grade: 8,
    freq: 1956,
    meanings: ['Versify', 'Singing', 'Recital'],
    on: ['ぎん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Read', 'Versify', 'Ground', 'Mislead'],
    similars: [
      {
        kanji: '史',
        meaning: 'history'
      },
      {
        kanji: '呼',
        meaning: 'call'
      },
      {
        kanji: '呈',
        meaning: 'display'
      },
      {
        kanji: '今',
        meaning: 'now'
      },
      {
        kanji: '兄',
        meaning: 'elder brother'
      },
      {
        kanji: '吹',
        meaning: 'blow'
      },
      {
        kanji: '号',
        meaning: 'nickname'
      },
      {
        kanji: '吐',
        meaning: 'spit'
      },
      {
        kanji: '叫',
        meaning: 'shout'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      }
    ]
  },
  {
    kanjiName: '甚',
    strokes: 9,
    grade: 8,
    freq: 1961,
    meanings: ['Tremendously', 'Very', 'Great', 'Exceedingly'],
    on: ['じん'],
    kun: ['はなは.だ', 'はなは.だしい'],
    jlpt: 1,
    quizAnswers: ['Low Wainscoting', 'War', 'Tremendously', 'Frequent'],
    similars: [
      {
        kanji: '勘',
        meaning: 'intuition'
      },
      {
        kanji: '堪',
        meaning: 'withstand'
      },
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '期',
        meaning: 'period'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '募',
        meaning: 'recruit'
      },
      {
        kanji: '英',
        meaning: 'England'
      },
      {
        kanji: '花',
        meaning: 'flower'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      }
    ]
  },
  {
    kanjiName: '崇',
    strokes: 11,
    grade: 8,
    freq: 1970,
    meanings: ['Adore', 'Respect', 'Revere', 'Worship'],
    on: ['すう'],
    kun: ['あが.める'],
    jlpt: 1,
    quizAnswers: ['Encircle', 'Bad', 'Compilation', 'Adore'],
    similars: [
      {
        kanji: '宗',
        meaning: 'religion'
      },
      {
        kanji: '峠',
        meaning: 'mountain peak'
      },
      {
        kanji: '院',
        meaning: 'Inst.'
      },
      {
        kanji: '票',
        meaning: 'ballot'
      },
      {
        kanji: '完',
        meaning: 'perfect'
      },
      {
        kanji: '実',
        meaning: 'reality'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      },
      {
        kanji: '岸',
        meaning: 'beach'
      },
      {
        kanji: '献',
        meaning: 'offering'
      },
      {
        kanji: '漂',
        meaning: 'drift'
      }
    ]
  },
  {
    kanjiName: '漆',
    strokes: 14,
    grade: 8,
    freq: 1971,
    meanings: ['Lacquer', 'Varnish', 'Seven'],
    on: ['しつ'],
    kun: ['うるし'],
    jlpt: 1,
    quizAnswers: ['Key (music)', 'Hear', 'Lacquer', 'Boulder'],
    similars: [
      {
        kanji: '泰',
        meaning: 'peaceful'
      },
      {
        kanji: '粉',
        meaning: 'flour'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '淡',
        meaning: 'thin'
      },
      {
        kanji: '暴',
        meaning: 'outburst'
      },
      {
        kanji: '彩',
        meaning: 'coloring'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '桃',
        meaning: 'peach'
      },
      {
        kanji: '松',
        meaning: 'pine tree'
      }
    ]
  },
  {
    kanjiName: '岬',
    strokes: 8,
    grade: 8,
    freq: 1972,
    meanings: ['Headland', 'Cape', 'Spit', 'Promontory'],
    on: ['こう'],
    kun: ['みさき'],
    jlpt: 1,
    quizAnswers: ['Headland', 'Compound', 'Romance', 'Fidelity'],
    similars: [
      {
        kanji: '伸',
        meaning: 'expand'
      },
      {
        kanji: '神',
        meaning: 'gods'
      },
      {
        kanji: '卓',
        meaning: 'eminent'
      },
      {
        kanji: '申',
        meaning: 'have the honor to'
      },
      {
        kanji: '旧',
        meaning: 'old times'
      },
      {
        kanji: '甲',
        meaning: 'armor'
      },
      {
        kanji: '盲',
        meaning: 'blind'
      },
      {
        kanji: '但',
        meaning: 'however'
      },
      {
        kanji: '押',
        meaning: 'push'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      }
    ]
  },
  {
    kanjiName: '紡',
    strokes: 10,
    grade: 8,
    freq: 1876,
    meanings: ['Spinning'],
    on: ['ぼう'],
    kun: ['つむ.ぐ'],
    jlpt: 1,
    quizAnswers: ['Spinning', 'Wheel', 'Contain', 'Submit'],
    similars: [
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '統',
        meaning: 'overall'
      },
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '紀',
        meaning: 'chronicle'
      },
      {
        kanji: '紛',
        meaning: 'distract'
      },
      {
        kanji: '納',
        meaning: 'settlement'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '結',
        meaning: 'tie'
      }
    ]
  },
  {
    kanjiName: '礁',
    strokes: 17,
    grade: 8,
    freq: 1977,
    meanings: ['Reef', 'Sunken Rock'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Secretion', 'Reef', 'Crowded', 'Pull Out'],
    similars: [
      {
        kanji: '焦',
        meaning: 'char'
      },
      {
        kanji: '驚',
        meaning: 'wonder'
      },
      {
        kanji: '唯',
        meaning: 'solely'
      },
      {
        kanji: '確',
        meaning: 'assurance'
      },
      {
        kanji: '奪',
        meaning: 'rob'
      },
      {
        kanji: '篤',
        meaning: 'fervent'
      },
      {
        kanji: '雄',
        meaning: 'masculine'
      },
      {
        kanji: '鳴',
        meaning: 'chirp'
      },
      {
        kanji: '稚',
        meaning: 'immature'
      },
      {
        kanji: '携',
        meaning: 'portable'
      }
    ]
  },
  {
    kanjiName: '屯',
    strokes: 4,
    grade: 8,
    freq: 1980,
    meanings: ['Barracks', 'Police Station', 'Camp', 'Ton'],
    on: ['とん'],
    kun: ['たむろ'],
    jlpt: 1,
    quizAnswers: ['Barracks', 'Rend', 'Environs', 'Forest'],
    similars: [
      {
        kanji: '他',
        meaning: 'other'
      },
      {
        kanji: '毛',
        meaning: 'fur'
      },
      {
        kanji: '化',
        meaning: 'change'
      },
      {
        kanji: '川',
        meaning: 'stream'
      },
      {
        kanji: '千',
        meaning: 'thousand'
      },
      {
        kanji: '刈',
        meaning: 'reap'
      },
      {
        kanji: '乱',
        meaning: 'riot'
      },
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '包',
        meaning: 'wrap'
      },
      {
        kanji: '布',
        meaning: 'linen'
      }
    ]
  },
  {
    kanjiName: '姻',
    strokes: 9,
    grade: 8,
    freq: 1985,
    meanings: ['Matrimony', 'Marry'],
    on: ['いん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Consideration', 'Inquire', 'Matrimony', 'Noble'],
    similars: [
      {
        kanji: '因',
        meaning: 'cause'
      },
      {
        kanji: '娯',
        meaning: 'recreation'
      },
      {
        kanji: '菌',
        meaning: 'germ'
      },
      {
        kanji: '婚',
        meaning: 'marriage'
      },
      {
        kanji: '旬',
        meaning: 'decameron'
      },
      {
        kanji: '好',
        meaning: 'fond'
      },
      {
        kanji: '妃',
        meaning: 'queen'
      },
      {
        kanji: '姓',
        meaning: 'surname'
      },
      {
        kanji: '西',
        meaning: 'west'
      },
      {
        kanji: '妹',
        meaning: 'younger sister'
      }
    ]
  },
  {
    kanjiName: '擬',
    strokes: 17,
    grade: 8,
    freq: 1990,
    meanings: ['Mimic', 'Aim (a Gun) At', 'Nominate', 'Imitate'],
    on: ['ぎ'],
    kun: ['まが.い', 'もど.き'],
    jlpt: 1,
    quizAnswers: ['Mimic', 'Accompany', 'Able To', 'Method'],
    similars: [
      {
        kanji: '凝',
        meaning: 'congeal'
      },
      {
        kanji: '疑',
        meaning: 'doubt'
      },
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '提',
        meaning: 'propose'
      },
      {
        kanji: '釈',
        meaning: 'explanation'
      },
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '礎',
        meaning: 'cornerstone'
      },
      {
        kanji: '森',
        meaning: 'forest'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      }
    ]
  },
  {
    kanjiName: '睦',
    strokes: 13,
    grade: 8,
    freq: 1993,
    meanings: ['Intimate', 'Friendly', 'Harmonious'],
    on: ['ぼく', 'もく'],
    kun: ['むつ.まじい', 'むつ.む', 'むつ.ぶ'],
    jlpt: 1,
    quizAnswers: ['Intimate', 'Non-', 'Main Thing', 'Cost']
  },
  {
    kanjiName: '閑',
    strokes: 12,
    grade: 8,
    freq: 1994,
    meanings: ['Leisure'],
    on: ['かん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Pour', 'Verge', 'Leisure', 'Certain'],
    similars: [
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '開',
        meaning: 'open'
      },
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '閥',
        meaning: 'clique'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '閲',
        meaning: 'review'
      },
      {
        kanji: '間',
        meaning: 'interval'
      },
      {
        kanji: '最',
        meaning: 'utmost'
      },
      {
        kanji: '門',
        meaning: 'gate'
      }
    ]
  },
  {
    kanjiName: '曹',
    strokes: 11,
    grade: 8,
    freq: 1998,
    meanings: ['Office', 'Official', 'Comrade', 'Fellow'],
    on: ['そう', 'ぞう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Office', 'Go On Foot', 'Opinion', 'Sharp Eyes'],
    similars: [
      {
        kanji: '遭',
        meaning: 'encounter'
      },
      {
        kanji: '槽',
        meaning: 'vat'
      },
      {
        kanji: '増',
        meaning: 'increase'
      },
      {
        kanji: '冒',
        meaning: 'risk'
      },
      {
        kanji: '門',
        meaning: 'gate'
      },
      {
        kanji: '借',
        meaning: 'borrow'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '面',
        meaning: 'mask'
      },
      {
        kanji: '胃',
        meaning: 'stomach'
      },
      {
        kanji: '置',
        meaning: 'placement'
      }
    ]
  },
  {
    kanjiName: '詠',
    strokes: 12,
    grade: 8,
    freq: 2000,
    meanings: ['Recitation', 'Poem', 'Song', 'Composing'],
    on: ['えい'],
    kun: ['よ.む', 'うた.う'],
    jlpt: 1,
    quizAnswers: ['Chest', 'Knock', 'Capacity', 'Recitation'],
    similars: [
      {
        kanji: '訳',
        meaning: 'translate'
      },
      {
        kanji: '設',
        meaning: 'establishment'
      },
      {
        kanji: '誠',
        meaning: 'sincerity'
      },
      {
        kanji: '談',
        meaning: 'discuss'
      },
      {
        kanji: '訪',
        meaning: 'call on'
      },
      {
        kanji: '診',
        meaning: 'checkup'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '説',
        meaning: 'opinion'
      },
      {
        kanji: '諮',
        meaning: 'consult with'
      },
      {
        kanji: '詳',
        meaning: 'detailed'
      }
    ]
  },
  {
    kanjiName: '卑',
    strokes: 9,
    grade: 8,
    freq: 2003,
    meanings: ['Lowly', 'Base', 'Vile', 'Vulgar'],
    on: ['ひ'],
    kun: ['いや.しい', 'いや.しむ', 'いや.しめる'],
    jlpt: 1,
    quizAnswers: ['Dwelling', 'Lowly', 'Smoke', 'Shove'],
    similars: [
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      },
      {
        kanji: '鬼',
        meaning: 'ghost'
      },
      {
        kanji: '画',
        meaning: 'brush-stroke'
      },
      {
        kanji: '町',
        meaning: 'town'
      },
      {
        kanji: '界',
        meaning: 'world'
      },
      {
        kanji: '早',
        meaning: 'early'
      },
      {
        kanji: '昇',
        meaning: 'rise up'
      },
      {
        kanji: '的',
        meaning: "bull's eye"
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '碑',
        meaning: 'tombstone'
      }
    ]
  },
  {
    kanjiName: '侮',
    strokes: 8,
    grade: 8,
    freq: 2004,
    meanings: ['Scorn', 'Despise', 'Make Light Of', 'Contempt'],
    on: ['ぶ'],
    kun: ['あなど.る', 'あなず.る'],
    jlpt: 1,
    quizAnswers: ['Usa', 'Width', 'Send', 'Scorn'],
    similars: [
      {
        kanji: '悔',
        meaning: 'repent'
      },
      {
        kanji: '毎',
        meaning: 'every'
      },
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '海',
        meaning: 'sea'
      },
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '梅',
        meaning: 'plum'
      },
      {
        kanji: '狂',
        meaning: 'lunatic'
      },
      {
        kanji: '佳',
        meaning: 'excellent'
      },
      {
        kanji: '在',
        meaning: 'exist'
      }
    ]
  },
  {
    kanjiName: '鋳',
    strokes: 15,
    grade: 8,
    freq: 2005,
    meanings: ['Casting', 'Mint'],
    on: ['ちゅう', 'い', 'しゅ', 'しゅう'],
    kun: ['い.る'],
    jlpt: 1,
    quizAnswers: ['Kind', 'Attention', 'Casting', 'Get Used To'],
    similars: [
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      },
      {
        kanji: '錘',
        meaning: 'weight'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      },
      {
        kanji: '鋼',
        meaning: 'steel'
      },
      {
        kanji: '錯',
        meaning: 'confused'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      }
    ]
  },
  {
    kanjiName: '胆',
    strokes: 9,
    grade: 8,
    freq: 1449,
    meanings: ['Gall Bladder', 'Courage', 'Pluck', 'Nerve'],
    on: ['たん'],
    kun: ['きも'],
    jlpt: 1,
    quizAnswers: ['Gall Bladder', 'Strain', 'Pick', 'Distinction'],
    similars: [
      {
        kanji: '脂',
        meaning: 'fat'
      },
      {
        kanji: '腸',
        meaning: 'intestines'
      },
      {
        kanji: '但',
        meaning: 'however'
      },
      {
        kanji: '冒',
        meaning: 'risk'
      },
      {
        kanji: '膜',
        meaning: 'membrane'
      },
      {
        kanji: '腰',
        meaning: 'loins'
      },
      {
        kanji: '腹',
        meaning: 'abdomen'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      },
      {
        kanji: '帽',
        meaning: 'cap'
      },
      {
        kanji: '鼻',
        meaning: 'nose'
      }
    ]
  },
  {
    kanjiName: '浪',
    strokes: 10,
    grade: 8,
    freq: 1508,
    meanings: ['Wandering', 'Waves', 'Billows', 'Reckless', 'Unrestrained'],
    on: ['ろう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Trip', 'Wandering', 'System', 'Cost'],
    similars: [
      {
        kanji: '恨',
        meaning: 'regret'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      },
      {
        kanji: '食',
        meaning: 'eat'
      },
      {
        kanji: '良',
        meaning: 'good'
      },
      {
        kanji: '混',
        meaning: 'mix'
      },
      {
        kanji: '漠',
        meaning: 'vague'
      },
      {
        kanji: '根',
        meaning: 'root'
      },
      {
        kanji: '限',
        meaning: 'limit'
      },
      {
        kanji: '濃',
        meaning: 'concentrated'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      }
    ]
  },
  {
    kanjiName: '禍',
    strokes: 13,
    grade: 8,
    freq: 2010,
    meanings: ['Calamity', 'Misfortune', 'Evil', 'Curse'],
    on: ['か'],
    kun: ['わざわい'],
    jlpt: 1,
    quizAnswers: ['Decoration', 'Inter-', 'Dirty', 'Calamity'],
    similars: [
      {
        kanji: '渦',
        meaning: 'whirlpool'
      },
      {
        kanji: '祖',
        meaning: 'ancestor'
      },
      {
        kanji: '高',
        meaning: 'tall'
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '祉',
        meaning: 'welfare'
      },
      {
        kanji: '悟',
        meaning: 'enlightenment'
      },
      {
        kanji: '洞',
        meaning: 'den'
      },
      {
        kanji: '過',
        meaning: 'overdo'
      },
      {
        kanji: '尚',
        meaning: 'esteem'
      },
      {
        kanji: '神',
        meaning: 'gods'
      }
    ]
  },
  {
    kanjiName: '酪',
    strokes: 13,
    grade: 8,
    freq: 2012,
    meanings: ['Dairy Products', 'Whey', 'Broth', 'Fruit Juice'],
    on: ['らく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Respect', 'Head', 'Dairy Products', 'Outlook'],
    similars: [
      {
        kanji: '酷',
        meaning: 'cruel'
      },
      {
        kanji: '略',
        meaning: 'abbreviation'
      },
      {
        kanji: '酢',
        meaning: 'vinegar'
      },
      {
        kanji: '酔',
        meaning: 'drunk'
      },
      {
        kanji: '格',
        meaning: 'status'
      },
      {
        kanji: '閣',
        meaning: 'tower'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '酬',
        meaning: 'repay'
      },
      {
        kanji: '夏',
        meaning: 'summer'
      },
      {
        kanji: '畝',
        meaning: 'furrow'
      }
    ]
  },
  {
    kanjiName: '憧',
    strokes: 15,
    grade: 8,
    freq: 2259,
    meanings: ['Yearn After', 'Long For', 'Aspire To', 'Admire', 'Adore'],
    on: ['しょう', 'とう', 'どう'],
    kun: ['あこが.れる'],
    jlpt: 1,
    quizAnswers: ['Live', 'Suck', 'Resign', 'Yearn After']
  },
  {
    kanjiName: '慶',
    strokes: 15,
    grade: 8,
    freq: 1300,
    meanings: ['Jubilation', 'Congratulate', 'Rejoice', 'Be Happy'],
    on: ['けい'],
    kun: ['よろこ.び'],
    jlpt: 1,
    quizAnswers: ['Regret', 'Power', 'Jubilation', 'Picture'],
    similars: [
      {
        kanji: '愛',
        meaning: 'love'
      },
      {
        kanji: '康',
        meaning: 'ease'
      },
      {
        kanji: '憂',
        meaning: 'melancholy'
      },
      {
        kanji: '優',
        meaning: 'tenderness'
      },
      {
        kanji: '恋',
        meaning: 'romance'
      },
      {
        kanji: '応',
        meaning: 'apply'
      },
      {
        kanji: '悪',
        meaning: 'bad'
      },
      {
        kanji: '志',
        meaning: 'intention'
      },
      {
        kanji: '殿',
        meaning: 'Mr.'
      },
      {
        kanji: '変',
        meaning: 'unusual'
      }
    ]
  },
  {
    kanjiName: '亜',
    strokes: 7,
    grade: 8,
    freq: 1509,
    meanings: ['Asia', 'Rank Next', 'Come After', '-ous'],
    on: ['あ'],
    kun: ['つ.ぐ'],
    jlpt: 1,
    quizAnswers: ['Asia', 'Lie Down', 'Precise', 'Young'],
    similars: [
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '吐',
        meaning: 'spit'
      },
      {
        kanji: '享',
        meaning: 'enjoy'
      },
      {
        kanji: '事',
        meaning: 'matter'
      },
      {
        kanji: '証',
        meaning: 'evidence'
      },
      {
        kanji: '呈',
        meaning: 'display'
      },
      {
        kanji: '再',
        meaning: 'again'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '叫',
        meaning: 'shout'
      },
      {
        kanji: '血',
        meaning: 'blood'
      }
    ]
  },
  {
    kanjiName: '汰',
    strokes: 7,
    grade: 8,
    freq: null,
    meanings: ['Washing', 'Sieving', 'Filtering', 'Weeding Out', 'Luxury'],
    on: ['た', 'たい'],
    kun: ['おご.る', 'にご.る', 'よな.げる'],
    jlpt: 1,
    quizAnswers: ['Sun', 'Washing', 'Variety', 'Study']
  },
  {
    kanjiName: '梓',
    strokes: 11,
    grade: 9,
    freq: 2301,
    meanings: ['Catalpa Tree', 'Woodblock Printing'],
    on: ['し'],
    kun: ['あずさ'],
    jlpt: 1,
    quizAnswers: ['Hamlet', 'Catalpa Tree', 'Seed', 'Be Photographed']
  },
  {
    kanjiName: '沙',
    strokes: 7,
    grade: 8,
    freq: 1897,
    meanings: ['Sand'],
    on: ['さ', 'しゃ'],
    kun: ['すな', 'よなげる'],
    jlpt: 1,
    quizAnswers: ['Department', 'Incur', 'Sand', 'Give']
  },
  {
    kanjiName: '逝',
    strokes: 10,
    grade: 8,
    freq: 2018,
    meanings: ['Departed', 'Die'],
    on: ['せい'],
    kun: ['ゆ.く', 'い.く'],
    jlpt: 1,
    quizAnswers: ['Departed', 'Rise To Surface', 'Righteous', 'Lengthy'],
    similars: [
      {
        kanji: '近',
        meaning: 'near'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '逐',
        meaning: 'pursue'
      },
      {
        kanji: '拾',
        meaning: 'pick up'
      },
      {
        kanji: '達',
        meaning: 'accomplished'
      },
      {
        kanji: '誓',
        meaning: 'vow'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '遍',
        meaning: 'everywhere'
      }
    ]
  },
  {
    kanjiName: '匿',
    strokes: 10,
    grade: 8,
    freq: 2024,
    meanings: ['Hide', 'Shelter', 'Shield'],
    on: ['とく'],
    kun: ['かくま.う'],
    jlpt: 1,
    quizAnswers: ['Once Upon A Time', 'Dwelling', 'Hips', 'Hide'],
    similars: [
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '荷',
        meaning: 'baggage'
      },
      {
        kanji: '塔',
        meaning: 'pagoda'
      },
      {
        kanji: '搭',
        meaning: 'board'
      },
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '苦',
        meaning: 'suffering'
      },
      {
        kanji: '吉',
        meaning: 'good luck'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      },
      {
        kanji: '培',
        meaning: 'cultivate'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      }
    ]
  },
  {
    kanjiName: '寡',
    strokes: 14,
    grade: 8,
    freq: 2035,
    meanings: ['Widow', 'Minority', 'Few'],
    on: ['か'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['End', 'What', 'Several', 'Widow'],
    similars: [
      {
        kanji: '募',
        meaning: 'recruit'
      },
      {
        kanji: '寒',
        meaning: 'cold'
      },
      {
        kanji: '宜',
        meaning: 'best regards'
      },
      {
        kanji: '窮',
        meaning: 'hard up'
      },
      {
        kanji: '券',
        meaning: 'ticket'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '寛',
        meaning: 'tolerant'
      },
      {
        kanji: '家',
        meaning: 'house'
      },
      {
        kanji: '実',
        meaning: 'reality'
      },
      {
        kanji: '勘',
        meaning: 'intuition'
      }
    ]
  },
  {
    kanjiName: '痢',
    strokes: 12,
    grade: 8,
    freq: 2037,
    meanings: ['Diarrhea'],
    on: ['り'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Longing', 'Features', 'Messenger', 'Diarrhea'],
    similars: [
      {
        kanji: '痴',
        meaning: 'stupid'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '病',
        meaning: 'ill'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '剰',
        meaning: 'surplus'
      },
      {
        kanji: '利',
        meaning: 'profit'
      },
      {
        kanji: '刻',
        meaning: 'engrave'
      },
      {
        kanji: '郊',
        meaning: 'outskirts'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '症',
        meaning: 'symptoms'
      }
    ]
  },
  {
    kanjiName: '坑',
    strokes: 7,
    grade: 8,
    freq: 2040,
    meanings: ['Pit', 'Hole'],
    on: ['こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Pain', 'Walk', 'Turn', 'Pit'],
    similars: [
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '攻',
        meaning: 'aggression'
      },
      {
        kanji: '坊',
        meaning: 'boy'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '英',
        meaning: 'England'
      },
      {
        kanji: '芳',
        meaning: 'perfume'
      },
      {
        kanji: '功',
        meaning: 'achievement'
      },
      {
        kanji: '芋',
        meaning: 'potato'
      },
      {
        kanji: '坂',
        meaning: 'slope'
      },
      {
        kanji: '走',
        meaning: 'run'
      }
    ]
  },
  {
    kanjiName: '藍',
    strokes: 18,
    grade: 8,
    freq: 2043,
    meanings: ['Indigo'],
    on: ['らん'],
    kun: ['あい'],
    jlpt: 1,
    quizAnswers: ['Indigo', 'Put Into', 'Chronicle', 'Vacuum']
  },
  {
    kanjiName: '畔',
    strokes: 10,
    grade: 8,
    freq: 2049,
    meanings: ['Paddy Ridge', 'Levee'],
    on: ['はん'],
    kun: ['あぜ', 'くろ', 'ほとり'],
    jlpt: 1,
    quizAnswers: ['Disappear', 'Paddy Ridge', 'Due To', 'Rare'],
    similars: [
      {
        kanji: '界',
        meaning: 'world'
      },
      {
        kanji: '昇',
        meaning: 'rise up'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '塁',
        meaning: 'bases'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '農',
        meaning: 'agriculture'
      },
      {
        kanji: '南',
        meaning: 'south'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '幸',
        meaning: 'happiness'
      },
      {
        kanji: '思',
        meaning: 'think'
      }
    ]
  },
  {
    kanjiName: '唄',
    strokes: 10,
    grade: 8,
    freq: 2051,
    meanings: ['Song', 'Ballad'],
    on: ['ばい'],
    kun: ['うた', 'うた.う'],
    jlpt: 1,
    quizAnswers: ['Circle', 'Song', 'Reputation', 'Remove']
  },
  {
    kanjiName: '拷',
    strokes: 9,
    grade: 8,
    freq: 2057,
    meanings: ['Torture', 'Beat'],
    on: ['ごう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Twist', 'Torture', 'Mood', 'Image'],
    similars: [
      {
        kanji: '扶',
        meaning: 'aid'
      },
      {
        kanji: '持',
        meaning: 'hold'
      },
      {
        kanji: '抗',
        meaning: 'confront'
      },
      {
        kanji: '考',
        meaning: 'consider'
      },
      {
        kanji: '拡',
        meaning: 'broaden'
      },
      {
        kanji: '抹',
        meaning: 'rub'
      },
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '芽',
        meaning: 'bud'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '拝',
        meaning: 'worship'
      }
    ]
  },
  {
    kanjiName: '渓',
    strokes: 11,
    grade: 8,
    freq: 2063,
    meanings: ['Mountain Stream', 'Valley'],
    on: ['けい'],
    kun: ['たに', 'たにがわ'],
    jlpt: 1,
    quizAnswers: ['Paunch', '10**12', 'Exist', 'Mountain Stream'],
    similars: [
      {
        kanji: '奨',
        meaning: 'exhort'
      },
      {
        kanji: '援',
        meaning: 'abet'
      },
      {
        kanji: '採',
        meaning: 'pick'
      },
      {
        kanji: '涙',
        meaning: 'tears'
      },
      {
        kanji: '将',
        meaning: 'leader'
      },
      {
        kanji: '救',
        meaning: 'salvation'
      },
      {
        kanji: '染',
        meaning: 'dye'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      },
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '栄',
        meaning: 'flourish'
      }
    ]
  },
  {
    kanjiName: '廉',
    strokes: 13,
    grade: 8,
    freq: 2066,
    meanings: [
      'Bargain',
      'Reason',
      'Charge',
      'Suspicion',
      'Point',
      'Account',
      'Purity',
      'Honest',
      'Low Price',
      'Cheap',
      'Rested',
      'Contented',
      'Peaceful'
    ],
    on: ['れん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Hope', 'Wish', 'Amount', 'Bargain'],
    similars: [
      {
        kanji: '兼',
        meaning: 'concurrently'
      },
      {
        kanji: '嫌',
        meaning: 'dislike'
      },
      {
        kanji: '謙',
        meaning: 'self-effacing'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '業',
        meaning: 'business'
      },
      {
        kanji: '族',
        meaning: 'tribe'
      },
      {
        kanji: '様',
        meaning: 'Esq.'
      },
      {
        kanji: '珠',
        meaning: 'pearl'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      }
    ]
  },
  {
    kanjiName: '謹',
    strokes: 17,
    grade: 8,
    freq: 2068,
    meanings: ['Discreet', 'Reverently', 'Humbly'],
    on: ['きん'],
    kun: ['つつし.む'],
    jlpt: 1,
    quizAnswers: ['City', 'Discreet', 'Amidst', 'Sound'],
    similars: [
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '証',
        meaning: 'evidence'
      },
      {
        kanji: '護',
        meaning: 'safeguard'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      },
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '講',
        meaning: 'lecture'
      },
      {
        kanji: '語',
        meaning: 'word'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '調',
        meaning: 'tune'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      }
    ]
  },
  {
    kanjiName: '湧',
    strokes: 12,
    grade: 8,
    freq: 2070,
    meanings: ['Boil', 'Ferment', 'Seethe', 'Uproar', 'Breed'],
    on: ['ゆう', 'よう', 'ゆ'],
    kun: ['わ.く'],
    jlpt: 1,
    quizAnswers: ['Sail', 'Boil', 'Previous', 'Dry']
  },
  {
    kanjiName: '醜',
    strokes: 17,
    grade: 8,
    freq: 2074,
    meanings: ['Ugly', 'Unclean', 'Shame', 'Bad Looking'],
    on: ['しゅう'],
    kun: ['みにく.い', 'しこ'],
    jlpt: 1,
    quizAnswers: ['Ugly', 'Complete', 'Quit', 'Ingredients'],
    similars: [
      {
        kanji: '魂',
        meaning: 'soul'
      },
      {
        kanji: '塊',
        meaning: 'clod'
      },
      {
        kanji: '鬼',
        meaning: 'ghost'
      },
      {
        kanji: '晩',
        meaning: 'nightfall'
      },
      {
        kanji: '魔',
        meaning: 'witch'
      },
      {
        kanji: '酵',
        meaning: 'fermentation'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '横',
        meaning: 'sideways'
      },
      {
        kanji: '軸',
        meaning: 'axis'
      },
      {
        kanji: '酷',
        meaning: 'cruel'
      }
    ]
  },
  {
    kanjiName: '升',
    strokes: 4,
    grade: 8,
    freq: 2077,
    meanings: ['Measuring Box', '1.8 Liter'],
    on: ['しょう'],
    kun: ['ます'],
    jlpt: 1,
    quizAnswers: ['Go Out', 'Wish', 'Measuring Box', 'Canada'],
    similars: [
      {
        kanji: '斤',
        meaning: 'axe'
      },
      {
        kanji: '斥',
        meaning: 'reject'
      },
      {
        kanji: '午',
        meaning: 'noon'
      },
      {
        kanji: '千',
        meaning: 'thousand'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '匠',
        meaning: 'artisan'
      },
      {
        kanji: '半',
        meaning: 'half'
      },
      {
        kanji: '平',
        meaning: 'even'
      }
    ]
  },
  {
    kanjiName: '殉',
    strokes: 10,
    grade: 8,
    freq: 2080,
    meanings: ['Martyrdom', 'Follow By Resigning'],
    on: ['じゅん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Throw', 'Martyrdom', 'Equal', 'Palm'],
    similars: [
      {
        kanji: '殖',
        meaning: 'augment'
      },
      {
        kanji: '者',
        meaning: 'someone'
      },
      {
        kanji: '拍',
        meaning: 'clap'
      },
      {
        kanji: '百',
        meaning: 'hundred'
      },
      {
        kanji: '旬',
        meaning: 'decameron'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '省',
        meaning: 'government ministry'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '春',
        meaning: 'springtime'
      },
      {
        kanji: '伯',
        meaning: 'chief'
      }
    ]
  },
  {
    kanjiName: '煩',
    strokes: 13,
    grade: 8,
    freq: 2081,
    meanings: ['Anxiety', 'Trouble', 'Worry', 'Pain', 'Ill', 'Annoy', 'Nuisance', 'Irksome'],
    on: ['はん', 'ぼん'],
    kun: ['わずら.う', 'わずら.わす', 'うるさ.がる', 'うるさ.い'],
    jlpt: 1,
    quizAnswers: ['Substitute', 'Anxiety', 'Railway Car', 'Opposite'],
    similars: [
      {
        kanji: '頑',
        meaning: 'stubborn'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '賛',
        meaning: 'approve'
      },
      {
        kanji: '類',
        meaning: 'sort'
      },
      {
        kanji: '頒',
        meaning: 'distribute'
      },
      {
        kanji: '資',
        meaning: 'assets'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '首',
        meaning: 'neck'
      },
      {
        kanji: '預',
        meaning: 'deposit'
      }
    ]
  },
  {
    kanjiName: '劾',
    strokes: 8,
    grade: 8,
    freq: 2085,
    meanings: ['Censure', 'Criminal Investigation'],
    on: ['がい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Censure', 'Grow Up', 'Rationing', 'Large Building'],
    similars: [
      {
        kanji: '刻',
        meaning: 'engrave'
      },
      {
        kanji: '効',
        meaning: 'merit'
      },
      {
        kanji: '座',
        meaning: 'squat'
      },
      {
        kanji: '粉',
        meaning: 'flour'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '裁',
        meaning: 'tailor'
      },
      {
        kanji: '充',
        meaning: 'allot'
      },
      {
        kanji: '六',
        meaning: 'six'
      },
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      }
    ]
  },
  {
    kanjiName: '桟',
    strokes: 10,
    grade: 8,
    freq: 2093,
    meanings: ['Scaffold', 'Cleat', 'Frame', 'Jetty', 'Bolt (door)'],
    on: ['さん', 'せん'],
    kun: ['かけはし'],
    jlpt: 1,
    quizAnswers: ['Scaffold', 'Palace', 'Install', 'Autumn'],
    similars: [
      {
        kanji: '械',
        meaning: 'contraption'
      },
      {
        kanji: '残',
        meaning: 'remainder'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '禁',
        meaning: 'prohibition'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls'
      },
      {
        kanji: '桃',
        meaning: 'peach'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '標',
        meaning: 'signpost'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      }
    ]
  },
  {
    kanjiName: '婿',
    strokes: 12,
    grade: 8,
    freq: 2099,
    meanings: ['Bridegroom', 'Son-in-law'],
    on: ['せい'],
    kun: ['むこ'],
    jlpt: 1,
    quizAnswers: ['Solid', 'Bridegroom', 'Relax', 'Limit'],
    similars: [
      {
        kanji: '背',
        meaning: 'stature'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '宵',
        meaning: 'wee hours'
      },
      {
        kanji: '脅',
        meaning: 'threaten'
      },
      {
        kanji: '硝',
        meaning: 'nitrate'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '消',
        meaning: 'extinguish'
      },
      {
        kanji: '諭',
        meaning: 'rebuke'
      },
      {
        kanji: '踊',
        meaning: 'jump'
      },
      {
        kanji: '有',
        meaning: 'possess'
      }
    ]
  },
  {
    kanjiName: '慕',
    strokes: 14,
    grade: 8,
    freq: 2100,
    meanings: ['Pining', 'Yearn For', 'Love Dearly', 'Adore'],
    on: ['ぼ'],
    kun: ['した.う'],
    jlpt: 1,
    quizAnswers: ['Pining', 'Loss', 'Tears', 'Belly'],
    similars: [
      {
        kanji: '暮',
        meaning: 'evening'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '恭',
        meaning: 'respect'
      },
      {
        kanji: '幕',
        meaning: 'curtain'
      },
      {
        kanji: '募',
        meaning: 'recruit'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '薫',
        meaning: 'send forth fragrance'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '草',
        meaning: 'grass'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      }
    ]
  },
  {
    kanjiName: '罷',
    strokes: 15,
    grade: 8,
    freq: 2104,
    meanings: ['Quit', 'Stop', 'Leave', 'Withdraw', 'Go'],
    on: ['ひ'],
    kun: ['まか.り-', 'や.める'],
    jlpt: 1,
    quizAnswers: ['Split', 'Inception', 'Law', 'Quit'],
    similars: [
      {
        kanji: '能',
        meaning: 'ability'
      },
      {
        kanji: '徹',
        meaning: 'penetrate'
      },
      {
        kanji: '撤',
        meaning: 'remove'
      },
      {
        kanji: '胃',
        meaning: 'stomach'
      },
      {
        kanji: '散',
        meaning: 'scatter'
      },
      {
        kanji: '賜',
        meaning: 'grant'
      },
      {
        kanji: '買',
        meaning: 'buy'
      },
      {
        kanji: '見',
        meaning: 'see'
      },
      {
        kanji: '閉',
        meaning: 'closed'
      },
      {
        kanji: '育',
        meaning: 'bring up'
      }
    ]
  },
  {
    kanjiName: '矯',
    strokes: 17,
    grade: 8,
    freq: 2105,
    meanings: [
      'Rectify',
      'Straighten',
      'Correct',
      'Reform',
      'Cure',
      'Control',
      'Pretend',
      'Falsify'
    ],
    on: ['きょう'],
    kun: ['た.める'],
    jlpt: 1,
    quizAnswers: ['Plane', 'Portion', 'Rectify', 'Continually'],
    similars: [
      {
        kanji: '橋',
        meaning: 'bridge'
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '短',
        meaning: 'short'
      },
      {
        kanji: '高',
        meaning: 'tall'
      },
      {
        kanji: '詔',
        meaning: 'imperial edict'
      },
      {
        kanji: '器',
        meaning: 'utensil'
      },
      {
        kanji: '詞',
        meaning: 'part of speech'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '権',
        meaning: 'authority'
      }
    ]
  },
  {
    kanjiName: '某',
    strokes: 9,
    grade: 8,
    freq: 2106,
    meanings: ['So-and-so', 'One', 'A Certain', 'That Person'],
    on: ['ぼう'],
    kun: ['それがし', 'なにがし'],
    jlpt: 1,
    quizAnswers: ['So-and-so', 'Sequence', 'Excellent', 'Vision'],
    similars: [
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '媒',
        meaning: 'mediator'
      },
      {
        kanji: '菓',
        meaning: 'candy'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      },
      {
        kanji: '車',
        meaning: 'car'
      },
      {
        kanji: '保',
        meaning: 'protect'
      },
      {
        kanji: '更',
        meaning: 'grow late'
      },
      {
        kanji: '林',
        meaning: 'grove'
      }
    ]
  },
  {
    kanjiName: '囚',
    strokes: 5,
    grade: 8,
    freq: 2107,
    meanings: ['Captured', 'Criminal', 'Arrest', 'Catch'],
    on: ['しゅう'],
    kun: ['とら.われる'],
    jlpt: 1,
    quizAnswers: ['Get', 'Captured', 'Dot', 'Custom'],
    similars: [
      {
        kanji: '四',
        meaning: 'four'
      },
      {
        kanji: '困',
        meaning: 'quandary'
      },
      {
        kanji: '西',
        meaning: 'west'
      },
      {
        kanji: '因',
        meaning: 'cause'
      },
      {
        kanji: '由',
        meaning: 'wherefore'
      },
      {
        kanji: '田',
        meaning: 'rice field'
      },
      {
        kanji: '日',
        meaning: 'day'
      },
      {
        kanji: '目',
        meaning: 'eye'
      },
      {
        kanji: '図',
        meaning: 'map'
      },
      {
        kanji: '囲',
        meaning: 'surround'
      }
    ]
  },
  {
    kanjiName: '泌',
    strokes: 8,
    grade: 8,
    freq: 2112,
    meanings: ['Ooze', 'Flow', 'Soak In', 'Penetrate', 'Secrete'],
    on: ['ひつ', 'ひ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Polish', 'Ooze', 'Faith', 'Reward'],
    similars: [
      {
        kanji: '必',
        meaning: 'invariably'
      },
      {
        kanji: '滋',
        meaning: 'nourishing'
      },
      {
        kanji: '洋',
        meaning: 'ocean'
      },
      {
        kanji: '密',
        meaning: 'secrecy'
      },
      {
        kanji: '添',
        meaning: 'annexed'
      },
      {
        kanji: '淡',
        meaning: 'thin'
      },
      {
        kanji: '将',
        meaning: 'leader'
      },
      {
        kanji: '沈',
        meaning: 'sink'
      },
      {
        kanji: '泳',
        meaning: 'swim'
      },
      {
        kanji: '沼',
        meaning: 'marsh'
      }
    ]
  },
  {
    kanjiName: '漸',
    strokes: 14,
    grade: 8,
    freq: 2115,
    meanings: ['Steadily', 'Gradually Advancing', 'Finally', 'Barely'],
    on: ['ぜん'],
    kun: ['ようや.く', 'やや', 'ようよ.う', 'すす.む'],
    jlpt: 1,
    quizAnswers: ['Rice', 'Steadily', 'Red', 'Ride'],
    similars: [
      {
        kanji: '潮',
        meaning: 'tide'
      },
      {
        kanji: '激',
        meaning: 'violent'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '凍',
        meaning: 'frozen'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      }
    ]
  },
  {
    kanjiName: '藻',
    strokes: 19,
    grade: 8,
    freq: 2124,
    meanings: ['Seaweed', 'Duckweed'],
    on: ['そう'],
    kun: ['も'],
    jlpt: 1,
    quizAnswers: ['Land', 'Go Along', 'All', 'Seaweed'],
    similars: [
      {
        kanji: '操',
        meaning: 'maneuver'
      },
      {
        kanji: '燥',
        meaning: 'parch'
      },
      {
        kanji: '繰',
        meaning: 'winding'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '敬',
        meaning: 'awe'
      },
      {
        kanji: '落',
        meaning: 'fall'
      },
      {
        kanji: '蔵',
        meaning: 'storehouse'
      },
      {
        kanji: '漢',
        meaning: 'Sino-'
      },
      {
        kanji: '葉',
        meaning: 'leaf'
      }
    ]
  },
  {
    kanjiName: '妄',
    strokes: 6,
    grade: 8,
    freq: 2264,
    meanings: ['Delusion', 'Unnecessarily', 'Without Authority', 'Reckless'],
    on: ['もう', 'ぼう'],
    kun: ['みだ.りに'],
    jlpt: 1,
    quizAnswers: ['Copy', 'Delusion', 'Counter For Days', 'Entrust To'],
    similars: [
      {
        kanji: '立',
        meaning: 'stand up'
      },
      {
        kanji: '安',
        meaning: 'relax'
      },
      {
        kanji: '委',
        meaning: 'committee'
      },
      {
        kanji: '衣',
        meaning: 'garment'
      },
      {
        kanji: '卒',
        meaning: 'graduate'
      },
      {
        kanji: '毒',
        meaning: 'poison'
      },
      {
        kanji: '方',
        meaning: 'direction'
      },
      {
        kanji: '六',
        meaning: 'six'
      },
      {
        kanji: '充',
        meaning: 'allot'
      },
      {
        kanji: '女',
        meaning: 'woman'
      }
    ]
  },
  {
    kanjiName: '蛮',
    strokes: 12,
    grade: 8,
    freq: 2339,
    meanings: ['Barbarian'],
    on: ['ばん'],
    kun: ['えびす'],
    jlpt: 1,
    quizAnswers: ['Smoke', 'Render', 'Disobey', 'Barbarian'],
    similars: [
      {
        kanji: '風',
        meaning: 'wind'
      },
      {
        kanji: '蚕',
        meaning: 'silkworm'
      },
      {
        kanji: '独',
        meaning: 'single'
      },
      {
        kanji: '強',
        meaning: 'strong'
      },
      {
        kanji: '恋',
        meaning: 'romance'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '触',
        meaning: 'contact'
      },
      {
        kanji: '京',
        meaning: 'capital'
      },
      {
        kanji: '変',
        meaning: 'unusual'
      },
      {
        kanji: '部',
        meaning: 'section'
      }
    ]
  },
  {
    kanjiName: '倹',
    strokes: 10,
    grade: 8,
    freq: 2479,
    meanings: ['Frugal', 'Economy', 'Thrifty'],
    on: ['けん'],
    kun: ['つま.しい', 'つづまやか'],
    jlpt: 1,
    quizAnswers: ['Buy', 'Gateway', 'Image', 'Frugal'],
    similars: [
      {
        kanji: '険',
        meaning: 'precipitous'
      },
      {
        kanji: '使',
        meaning: 'use'
      },
      {
        kanji: '検',
        meaning: 'examination'
      },
      {
        kanji: '猿',
        meaning: 'monkey'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '作',
        meaning: 'make'
      },
      {
        kanji: '条',
        meaning: 'article'
      },
      {
        kanji: '休',
        meaning: 'rest'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '何',
        meaning: 'what'
      }
    ]
  },
  {
    kanjiName: '渥',
    strokes: 12,
    grade: 9,
    freq: 2257,
    meanings: ['Kindness', 'Moisten'],
    on: ['あく'],
    kun: ['あつ.い', 'うるお.う'],
    jlpt: 1,
    quizAnswers: ['Rear', 'True', 'Kindness', 'Double']
  },
  {
    kanjiName: '旭',
    strokes: 6,
    grade: 9,
    freq: 1417,
    meanings: ['Rising Sun', 'Morning Sun'],
    on: ['きょく'],
    kun: ['あさひ'],
    jlpt: 1,
    quizAnswers: ['Be Favored With', 'Curriculum', 'Bed', 'Rising Sun']
  },
  {
    kanjiName: '絢',
    strokes: 12,
    grade: 9,
    freq: 2315,
    meanings: ['Brilliant Fabric Design'],
    on: ['けん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Thin', 'Discuss', 'Rent', 'Brilliant Fabric Design']
  },
  {
    kanjiName: '鮎',
    strokes: 16,
    grade: 9,
    freq: 2201,
    meanings: ['Freshwater Trout', 'Smelt'],
    on: ['でん', 'ねん'],
    kun: ['あゆ', 'なまず'],
    jlpt: 1,
    quizAnswers: ['Deliver', 'Freshwater Trout', 'Counter For Vehicles', 'Technique']
  },
  {
    kanjiName: '惟',
    strokes: 11,
    grade: 9,
    freq: 2246,
    meanings: ['Consider', 'Reflect', 'Think'],
    on: ['い', 'ゆい'],
    kun: ['おも.んみる', 'これ', 'おも.うに'],
    jlpt: 1,
    quizAnswers: ['Division', 'Consider', 'Train', 'Parch']
  },
  {
    kanjiName: '亥',
    strokes: 6,
    grade: 9,
    freq: null,
    meanings: ['Sign Of The Hog', '9-11pm', 'Twelfth Sign Of The Chinese Zodiac'],
    on: ['がい', 'かい'],
    kun: ['い'],
    jlpt: 1,
    quizAnswers: ['Beginning', 'Agriculture', 'Arms', 'Sign Of The Hog']
  },
  {
    kanjiName: '郁',
    strokes: 9,
    grade: 9,
    freq: 1920,
    meanings: ['Cultural Progress', 'Perfume'],
    on: ['いく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Offense', 'Suburbs', 'Addition', 'Cultural Progress']
  },
  {
    kanjiName: '磯',
    strokes: 17,
    grade: 9,
    freq: 1444,
    meanings: ['Seashore', 'Beach'],
    on: ['き'],
    kun: ['いそ'],
    jlpt: 1,
    quizAnswers: ['One Radical (no.1)', 'Flock', 'Substitute', 'Seashore']
  },
  {
    kanjiName: '壱',
    strokes: 7,
    grade: 8,
    freq: 2351,
    meanings: ['One (in Documents)'],
    on: ['いち', 'いつ'],
    kun: ['ひとつ'],
    jlpt: 1,
    quizAnswers: ['Closed', 'Ask', 'Yellow', 'One (in Documents)'],
    similars: [
      {
        kanji: '売',
        meaning: 'sell'
      },
      {
        kanji: '老',
        meaning: 'old man'
      },
      {
        kanji: '志',
        meaning: 'intention'
      },
      {
        kanji: '宅',
        meaning: 'home'
      },
      {
        kanji: '穴',
        meaning: 'hole'
      },
      {
        kanji: '考',
        meaning: 'consider'
      },
      {
        kanji: '克',
        meaning: 'overcome'
      },
      {
        kanji: '充',
        meaning: 'allot'
      },
      {
        kanji: '元',
        meaning: 'beginning'
      },
      {
        kanji: '立',
        meaning: 'stand up'
      }
    ]
  },
  {
    kanjiName: '允',
    strokes: 4,
    grade: 9,
    freq: 2358,
    meanings: ['License', 'Sincerity', 'Permit'],
    on: ['いん'],
    kun: ['じょう', 'まこと.に', 'ゆるす'],
    jlpt: 1,
    quizAnswers: ['License', 'District', 'Discern', 'Gun Barrel']
  },
  {
    kanjiName: '胤',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Descendent', 'Issue', 'Offspring'],
    on: ['いん'],
    kun: ['たね'],
    jlpt: 1,
    quizAnswers: ['Twist', 'Forehead', 'Ephemeral Thing', 'Descendent']
  },
  {
    kanjiName: '韻',
    strokes: 19,
    grade: 8,
    freq: 2148,
    meanings: ['Rhyme', 'Elegance', 'Tone'],
    on: ['いん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Pole', 'Riot', 'Rhyme', 'Confuse'],
    similars: [
      {
        kanji: '賞',
        meaning: 'prize'
      },
      {
        kanji: '親',
        meaning: 'parent'
      },
      {
        kanji: '顔',
        meaning: 'face'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      },
      {
        kanji: '損',
        meaning: 'damage'
      },
      {
        kanji: '願',
        meaning: 'petition'
      },
      {
        kanji: '質',
        meaning: 'substance'
      },
      {
        kanji: '賀',
        meaning: 'congratulations'
      },
      {
        kanji: '償',
        meaning: 'reparation'
      },
      {
        kanji: '欄',
        meaning: 'column'
      }
    ]
  },
  {
    kanjiName: '卯',
    strokes: 5,
    grade: 9,
    freq: 2400,
    meanings: ['Sign Of The Hare Or Rabbit', 'Fourth Sign Of Chinese Zodiac', '5-7am', 'East'],
    on: ['ぼう', 'もう'],
    kun: ['う'],
    jlpt: 1,
    quizAnswers: ['Climb Up', 'Sign Of The Hare Or Rabbit', 'Domiciliary Register', 'Circuit']
  },
  {
    kanjiName: '丑',
    strokes: 4,
    grade: 9,
    freq: 2305,
    meanings: ['Sign Of The Ox Or Cow', '1-3am', 'Second Sign Of Chinese Zodiac'],
    on: ['ちゅう'],
    kun: ['うし'],
    jlpt: 1,
    quizAnswers: ['Take', 'Sign Of The Ox Or Cow', 'Grow Up', 'Honor']
  },
  {
    kanjiName: '叡',
    strokes: 16,
    grade: 9,
    freq: null,
    meanings: ['Intelligence', 'Imperial'],
    on: ['えい'],
    kun: ['あき.らか'],
    jlpt: 1,
    quizAnswers: ['Bottom', 'Place', 'Intelligence', 'Counter For Occurrences']
  },
  {
    kanjiName: '謁',
    strokes: 15,
    grade: 8,
    freq: null,
    meanings: ['Audience', 'Audience (with King)'],
    on: ['えつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Art', 'Even Number', 'World', 'Audience'],
    similars: [
      {
        kanji: '課',
        meaning: 'chapter'
      },
      {
        kanji: '喝',
        meaning: 'hoarse'
      },
      {
        kanji: '謀',
        meaning: 'conspire'
      },
      {
        kanji: '褐',
        meaning: 'brown'
      },
      {
        kanji: '誘',
        meaning: 'entice'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      },
      {
        kanji: '説',
        meaning: 'opinion'
      },
      {
        kanji: '読',
        meaning: 'read'
      },
      {
        kanji: '該',
        meaning: 'above-stated'
      },
      {
        kanji: '託',
        meaning: 'consign'
      }
    ]
  },
  {
    kanjiName: '艶',
    strokes: 19,
    grade: 8,
    freq: 2207,
    meanings: ['Glossy', 'Luster', 'Glaze', 'Polish', 'Charm', 'Colorful', 'Captivating'],
    on: ['えん'],
    kun: ['つや', 'なま.めかしい', 'あで.やか', 'つや.めく', 'なま.めく'],
    jlpt: 1,
    quizAnswers: ['Publish', 'Subside', 'Exist', 'Glossy']
  },
  {
    kanjiName: '苑',
    strokes: 8,
    grade: 9,
    freq: 2060,
    meanings: ['Garden', 'Farm', 'Park'],
    on: ['えん', 'おん'],
    kun: ['その', 'う.つ'],
    jlpt: 1,
    quizAnswers: ['Reside', 'Garden', 'Before', 'Seduce']
  },
  {
    kanjiName: '於',
    strokes: 8,
    grade: 9,
    freq: 2113,
    meanings: ['At', 'In', 'On', 'As For'],
    on: ['お', 'よ'],
    kun: ['おい.て', 'お.ける', 'ああ', 'より'],
    jlpt: 1,
    quizAnswers: ['Condemn', 'Frivolous', 'Pound', 'At']
  },
  {
    kanjiName: '旺',
    strokes: 8,
    grade: 8,
    freq: 2342,
    meanings: ['Flourishing', 'Successful', 'Beautiful', 'Vigorous'],
    on: ['おう', 'きょう', 'ごう'],
    kun: ['かがや.き', 'うつくし.い', 'さかん'],
    jlpt: 1,
    quizAnswers: ['As Well As', 'Be Aware Of', 'Docility', 'Flourishing']
  },
  {
    kanjiName: '翁',
    strokes: 10,
    grade: 8,
    freq: 2064,
    meanings: ['Venerable Old Man'],
    on: ['おう'],
    kun: ['おきな'],
    jlpt: 1,
    quizAnswers: ['Intercede', 'Interview', 'Venerable Old Man', 'Mingle'],
    similars: [
      {
        kanji: '羽',
        meaning: 'feathers'
      },
      {
        kanji: '扇',
        meaning: 'fan'
      },
      {
        kanji: '念',
        meaning: 'wish'
      },
      {
        kanji: '卵',
        meaning: 'egg'
      },
      {
        kanji: '公',
        meaning: 'public'
      },
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '約',
        meaning: 'promise'
      },
      {
        kanji: '翻',
        meaning: 'flip'
      },
      {
        kanji: '率',
        meaning: 'ratio'
      },
      {
        kanji: '機',
        meaning: 'loom'
      }
    ]
  },
  {
    kanjiName: '伽',
    strokes: 7,
    grade: 9,
    freq: 2323,
    meanings: ['Nursing', 'Attending', 'Entertainer'],
    on: ['か', 'が', 'きゃ', 'ぎゃ'],
    kun: ['とぎ'],
    jlpt: 1,
    quizAnswers: ['Margin', 'Interest (on Money)', 'Freight', 'Nursing']
  },
  {
    kanjiName: '箇',
    strokes: 14,
    grade: 8,
    freq: null,
    meanings: ['Counter For Articles'],
    on: ['か', 'こ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Counter For Articles', 'Garden', 'Grow Late', 'Plate'],
    similars: [
      {
        kanji: '筒',
        meaning: 'cylinder'
      },
      {
        kanji: '答',
        meaning: 'solution'
      },
      {
        kanji: '笛',
        meaning: 'flute'
      },
      {
        kanji: '個',
        meaning: 'individual'
      },
      {
        kanji: '第',
        meaning: 'No.'
      },
      {
        kanji: '管',
        meaning: 'pipe'
      },
      {
        kanji: '固',
        meaning: 'harden'
      },
      {
        kanji: '等',
        meaning: 'etc.'
      },
      {
        kanji: '算',
        meaning: 'calculate'
      },
      {
        kanji: '簡',
        meaning: 'simplicity'
      }
    ]
  },
  {
    kanjiName: '茄',
    strokes: 8,
    grade: 9,
    freq: null,
    meanings: ['Eggplant'],
    on: ['か'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Year-end', 'Eggplant', 'Probe', 'Warn']
  },
  {
    kanjiName: '霞',
    strokes: 17,
    grade: 9,
    freq: 1603,
    meanings: ['Be Hazy', 'Grow Dim', 'Blurred'],
    on: ['か', 'げ'],
    kun: ['かすみ', 'かす.む'],
    jlpt: 1,
    quizAnswers: ['Buddhist Sect', 'Germ', 'Be Hazy', 'Unreeling Cocoons']
  },
  {
    kanjiName: '魁',
    strokes: 14,
    grade: 9,
    freq: 2108,
    meanings: ['Charging Ahead Of Others'],
    on: ['かい'],
    kun: ['さきがけ', 'かしら'],
    jlpt: 1,
    quizAnswers: ['Get', 'Charging Ahead Of Others', 'Title Or Inscription On Picture', 'Lengthen']
  },
  {
    kanjiName: '凱',
    strokes: 12,
    grade: 9,
    freq: 2293,
    meanings: ['Victory Song'],
    on: ['がい', 'かい'],
    kun: ['かちどき', 'やわらぐ'],
    jlpt: 1,
    quizAnswers: ['Victory Song', 'Sell', 'Blue', 'Summon']
  },
  {
    kanjiName: '馨',
    strokes: 20,
    grade: 9,
    freq: 2164,
    meanings: ['Fragrant', 'Balmy', 'Favourable'],
    on: ['けい', 'きょう'],
    kun: ['かお.る', 'かおり'],
    jlpt: 1,
    quizAnswers: ['Male', 'Fragrant', 'Crown', 'Man']
  },
  {
    kanjiName: '嚇',
    strokes: 17,
    grade: 8,
    freq: 2141,
    meanings: ['Menacing', 'Dignity', 'Majesty', 'Threaten'],
    on: ['かく'],
    kun: ['おど.す'],
    jlpt: 1,
    quizAnswers: ['Center', 'Ashes', 'Part', 'Menacing'],
    similars: [
      {
        kanji: '跡',
        meaning: 'tracks'
      },
      {
        kanji: '喫',
        meaning: 'consume'
      },
      {
        kanji: '跳',
        meaning: 'hop'
      },
      {
        kanji: '践',
        meaning: 'tread'
      },
      {
        kanji: '赦',
        meaning: 'pardon'
      },
      {
        kanji: '嘆',
        meaning: 'sigh'
      },
      {
        kanji: '装',
        meaning: 'attire'
      },
      {
        kanji: '斎',
        meaning: 'purification'
      },
      {
        kanji: '蚊',
        meaning: 'mosquito'
      },
      {
        kanji: '銑',
        meaning: 'pig iron'
      }
    ]
  },
  {
    kanjiName: '褐',
    strokes: 13,
    grade: 8,
    freq: 2186,
    meanings: ['Brown', 'Woollen Kimono'],
    on: ['かつ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Brown', 'Fault', 'Dilute', 'Road-way'],
    similars: [
      {
        kanji: '裸',
        meaning: 'naked'
      },
      {
        kanji: '視',
        meaning: 'inspection'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      },
      {
        kanji: '喝',
        meaning: 'hoarse'
      },
      {
        kanji: '謁',
        meaning: 'audience'
      },
      {
        kanji: '複',
        meaning: 'duplicate'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '覚',
        meaning: 'memorize'
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)'
      },
      {
        kanji: '神',
        meaning: 'gods'
      }
    ]
  },
  {
    kanjiName: '叶',
    strokes: 5,
    grade: 9,
    freq: 2312,
    meanings: ['Grant', 'Answer'],
    on: ['きょう'],
    kun: ['かな.える', 'かな.う'],
    jlpt: 1,
    quizAnswers: ['Immature', 'Counter For Houses', 'Stagecoach Stop', 'Grant']
  },
  {
    kanjiName: '樺',
    strokes: 14,
    grade: 9,
    freq: 1982,
    meanings: ['Birch', 'Dark Red'],
    on: ['か'],
    kun: ['かば', 'かんば'],
    jlpt: 1,
    quizAnswers: ['Gap', 'Hail', 'Birch', 'Illuminate']
  },
  {
    kanjiName: '茅',
    strokes: 8,
    grade: 9,
    freq: 1895,
    meanings: ['Miscanthus Reed'],
    on: ['ぼう', 'みょう'],
    kun: ['かや', 'ちがや'],
    jlpt: 1,
    quizAnswers: ['Harmonize', 'Miscanthus Reed', 'Take', 'Party']
  },
  {
    kanjiName: '侃',
    strokes: 8,
    grade: 9,
    freq: null,
    meanings: ['Strong', 'Just', 'Righteous', 'Peace-loving'],
    on: ['かん'],
    kun: ['つよ.い'],
    jlpt: 1,
    quizAnswers: ['Strong', 'Fracture', 'Gigantic', 'Take Up']
  },
  {
    kanjiName: '棺',
    strokes: 12,
    grade: 8,
    freq: 2161,
    meanings: ['Coffin', 'Casket'],
    on: ['かん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Award To', 'Coffin', 'Ancient Laws', 'Extinguish'],
    similars: [
      {
        kanji: '官',
        meaning: 'bureaucrat'
      },
      {
        kanji: '管',
        meaning: 'pipe'
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '格',
        meaning: 'status'
      },
      {
        kanji: '枯',
        meaning: 'wither'
      },
      {
        kanji: '検',
        meaning: 'examination'
      },
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '極',
        meaning: 'poles'
      },
      {
        kanji: '党',
        meaning: 'party'
      },
      {
        kanji: '奇',
        meaning: 'strange'
      }
    ]
  },
  {
    kanjiName: '莞',
    strokes: 10,
    grade: 9,
    freq: null,
    meanings: ['Smiling', 'Reed Used To Cover Tatami'],
    on: ['かん'],
    kun: ['い'],
    jlpt: 1,
    quizAnswers: ['Encourage', 'Smiling', 'Person', 'Going']
  },
  {
    kanjiName: '巌',
    strokes: 20,
    grade: 9,
    freq: 1986,
    meanings: ['Rock', 'Crag', 'Boulder'],
    on: ['がん'],
    kun: ['いわ', 'いわお', 'けわ.しい'],
    jlpt: 1,
    quizAnswers: ['Strengthen', 'Spacious', 'Rock', 'Err']
  },
  {
    kanjiName: '嬉',
    strokes: 15,
    grade: 9,
    freq: 2274,
    meanings: ['Glad', 'Pleased', 'Rejoice'],
    on: ['き'],
    kun: ['うれ.しい', 'たの.しむ'],
    jlpt: 1,
    quizAnswers: ['Append', 'Write', 'Tea', 'Glad']
  },
  {
    kanjiName: '毅',
    strokes: 15,
    grade: 9,
    freq: 1770,
    meanings: ['Strong'],
    on: ['き', 'ぎ'],
    kun: ['つよ.い'],
    jlpt: 1,
    quizAnswers: ['Differ', 'Smoke', 'Strong', 'Overthrow']
  },
  {
    kanjiName: '稀',
    strokes: 12,
    grade: 9,
    freq: 2232,
    meanings: ['Rare', 'Phenomenal', 'Dilute (acid)'],
    on: ['き', 'け'],
    kun: ['まれ', 'まばら'],
    jlpt: 1,
    quizAnswers: ['Counter For Songs And Poems', 'Reject', 'Rare', 'Strange']
  },
  {
    kanjiName: '誼',
    strokes: 15,
    grade: 9,
    freq: null,
    meanings: ['Friendship', 'Intimacy'],
    on: ['ぎ'],
    kun: ['よしみ', 'よい'],
    jlpt: 1,
    quizAnswers: ['Wood', 'Japan', 'Friendship', 'Pin']
  },
  {
    kanjiName: '鞠',
    strokes: 17,
    grade: 9,
    freq: null,
    meanings: ['Ball'],
    on: ['きく', 'きゅう'],
    kun: ['まり'],
    jlpt: 1,
    quizAnswers: ['Commander', 'Bosom', 'Circle', 'Ball']
  },
  {
    kanjiName: '橘',
    strokes: 16,
    grade: 9,
    freq: 2053,
    meanings: ['Mandarin Orange'],
    on: ['きつ'],
    kun: ['たちばな'],
    jlpt: 1,
    quizAnswers: ['Mandarin Orange', 'Require', 'Foreign', 'Hold In Arms']
  },
  {
    kanjiName: '亨',
    strokes: 7,
    grade: 9,
    freq: 1952,
    meanings: ['Pass Through', 'Go Smoothly'],
    on: ['こう', 'きょう', 'ほう'],
    kun: ['とお.る'],
    jlpt: 1,
    quizAnswers: ['Chapter', 'Grade', 'Pass Through', 'Number']
  },
  {
    kanjiName: '匡',
    strokes: 6,
    grade: 9,
    freq: 2176,
    meanings: ['Correct', 'Save', 'Assist'],
    on: ['きょう', 'おう'],
    kun: ['すく.う'],
    jlpt: 1,
    quizAnswers: ['Correct', 'Spear', 'Discrepancy', 'Battle']
  },
  {
    kanjiName: '喬',
    strokes: 12,
    grade: 9,
    freq: 1962,
    meanings: ['High', 'Boasting'],
    on: ['きょう'],
    kun: ['たか.い'],
    jlpt: 1,
    quizAnswers: ['Err', 'Reign', 'Man', 'High']
  },
  {
    kanjiName: '尭',
    strokes: 8,
    grade: 9,
    freq: 2136,
    meanings: ['High', 'Far'],
    on: ['ぎょう'],
    kun: ['たか.い'],
    jlpt: 1,
    quizAnswers: ['Perfect', 'Dry', 'High', 'Circle']
  },
  {
    kanjiName: '桐',
    strokes: 10,
    grade: 9,
    freq: 1668,
    meanings: ['Paulownia'],
    on: ['とう', 'どう'],
    kun: ['きり'],
    jlpt: 1,
    quizAnswers: ['Paulownia', 'Reward', 'Thaw', 'Prepare']
  },
  {
    kanjiName: '斤',
    strokes: 4,
    grade: 8,
    freq: null,
    meanings: ['Axe', '1.32 Lb', 'Catty', 'Counter For Loaves Of Bread', 'Axe Radical (no. 69)'],
    on: ['きん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Minute', 'Fountain', 'Axe', 'Government Ministry'],
    similars: [
      {
        kanji: '升',
        meaning: 'measuring box'
      },
      {
        kanji: '斥',
        meaning: 'reject'
      },
      {
        kanji: '千',
        meaning: 'thousand'
      },
      {
        kanji: '午',
        meaning: 'noon'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '匠',
        meaning: 'artisan'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '平',
        meaning: 'even'
      },
      {
        kanji: '半',
        meaning: 'half'
      }
    ]
  },
  {
    kanjiName: '欣',
    strokes: 8,
    grade: 9,
    freq: 2071,
    meanings: ['Take Pleasure In', 'Rejoice'],
    on: ['きん', 'ごん', 'こん'],
    kun: ['よろこ.ぶ', 'よろこ.び'],
    jlpt: 1,
    quizAnswers: ['10**12', 'Write', 'Take Pleasure In', 'Abstain']
  },
  {
    kanjiName: '欽',
    strokes: 12,
    grade: 9,
    freq: 2181,
    meanings: ['Respect', 'Revere', 'Long For'],
    on: ['きん', 'こん'],
    kun: ['つつし.む'],
    jlpt: 1,
    quizAnswers: ['Respect', 'Surface', 'Symptoms', 'Adhere']
  },
  {
    kanjiName: '芹',
    strokes: 7,
    grade: 9,
    freq: 2158,
    meanings: ['Parsley'],
    on: ['きん'],
    kun: ['せり'],
    jlpt: 1,
    quizAnswers: ['Sensation', 'Reward', 'Throne', 'Parsley']
  },
  {
    kanjiName: '衿',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Neck', 'Collar', 'Lapel'],
    on: ['きん', 'こん'],
    kun: ['えり'],
    jlpt: 1,
    quizAnswers: ['Drip', 'Neck', 'Smear', 'Herbs']
  },
  {
    kanjiName: '玖',
    strokes: 7,
    grade: 9,
    freq: null,
    meanings: ['Beautiful Black Jewel', 'Nine'],
    on: ['きゅう', 'く'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Beautiful Black Jewel', 'Point To', 'Efficacy', 'Six']
  },
  {
    kanjiName: '虞',
    strokes: 13,
    grade: 8,
    freq: null,
    meanings: ['Fear', 'Uneasiness', 'Anxiety', 'Concern', 'Expectation', 'Consideration'],
    on: ['ぐ'],
    kun: [
      'おそれ',
      'おもんぱか.る',
      'はか.る',
      'うれ.える',
      'あざむ.く',
      'あやま.る',
      'のぞ.む',
      'たの.しむ'
    ],
    jlpt: 1,
    quizAnswers: ['Prefer', 'Inherit', 'Fear', 'Performance'],
    similars: [
      {
        kanji: '娯',
        meaning: 'recreation'
      },
      {
        kanji: '虜',
        meaning: 'captive'
      },
      {
        kanji: '虚',
        meaning: 'void'
      },
      {
        kanji: '呉',
        meaning: 'give'
      },
      {
        kanji: '虐',
        meaning: 'tyrannize'
      },
      {
        kanji: '敵',
        meaning: 'enemy'
      },
      {
        kanji: '戯',
        meaning: 'frolic'
      },
      {
        kanji: '劇',
        meaning: 'drama'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      },
      {
        kanji: '興',
        meaning: 'entertain'
      }
    ]
  },
  {
    kanjiName: '栗',
    strokes: 10,
    grade: 9,
    freq: 1550,
    meanings: ['Chestnut'],
    on: ['りつ', 'り'],
    kun: ['くり', 'おののく'],
    jlpt: 1,
    quizAnswers: ['Pass Thru', 'Chestnut', 'Physiognomy', 'Man']
  },
  {
    kanjiName: '薫',
    strokes: 16,
    grade: 8,
    freq: 1849,
    meanings: ['Send Forth Fragrance', 'Fragrant', 'Be Scented', 'Smoke (tobacco)'],
    on: ['くん'],
    kun: ['かお.る'],
    jlpt: 1,
    quizAnswers: ['Send Forth Fragrance', 'Hot', 'Strange', 'Camp'],
    similars: [
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '黒',
        meaning: 'black'
      },
      {
        kanji: '慕',
        meaning: 'pining'
      },
      {
        kanji: '勲',
        meaning: 'meritorious deed'
      },
      {
        kanji: '薦',
        meaning: 'recommend'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '博',
        meaning: 'Dr.'
      },
      {
        kanji: '載',
        meaning: 'ride'
      },
      {
        kanji: '薄',
        meaning: 'dilute'
      },
      {
        kanji: '鳴',
        meaning: 'chirp'
      }
    ]
  },
  {
    kanjiName: '袈',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['A Coarse Camlet'],
    on: ['け', 'か'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Brush-stroke', 'Trade', 'A Coarse Camlet', 'Production']
  },
  {
    kanjiName: '圭',
    strokes: 6,
    grade: 9,
    freq: 1837,
    meanings: ['Square Jewel', 'Corner', 'Angle', 'Edge'],
    on: ['けい', 'け'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Serve', 'Master', 'Square Jewel', 'Empty']
  },
  {
    kanjiName: '慧',
    strokes: 15,
    grade: 9,
    freq: 2168,
    meanings: ['Wise'],
    on: ['けい', 'え'],
    kun: ['さとい'],
    jlpt: 1,
    quizAnswers: ['Wise', 'Compare', 'Continuation', 'Trick']
  },
  {
    kanjiName: '桂',
    strokes: 10,
    grade: 9,
    freq: 1651,
    meanings: ['Japanese Judas-tree', 'Cinnamon Tree'],
    on: ['けい'],
    kun: ['かつら'],
    jlpt: 1,
    quizAnswers: ['Regulation', 'Chances', 'Japanese Judas-tree', 'Post']
  },
  {
    kanjiName: '絃',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['String', 'Cord', 'Samisen Music'],
    on: ['げん'],
    kun: ['いと'],
    jlpt: 1,
    quizAnswers: ['String', 'Revolve', 'Emulate', 'Close']
  },
  {
    kanjiName: '伍',
    strokes: 6,
    grade: 9,
    freq: 1881,
    meanings: ['Five', 'Five-man Squad', 'File', 'Line'],
    on: ['ご'],
    kun: ['いつつ'],
    jlpt: 1,
    quizAnswers: ['Five', 'Apartment', 'Square', 'Hot Spring']
  },
  {
    kanjiName: '梧',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Chinese Parasol Tree', 'Phoenix Tree'],
    on: ['ご'],
    kun: ['あおぎり'],
    jlpt: 1,
    quizAnswers: ['Zero', 'Finish', 'Chinese Parasol Tree', 'Egg']
  },
  {
    kanjiName: '瑚',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Ancestral Offering Receptacle', 'Coral'],
    on: ['こ', 'ご'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Push', 'Compare', 'Ancestral Offering Receptacle', 'Long']
  },
  {
    kanjiName: '侯',
    strokes: 9,
    grade: 8,
    freq: 2363,
    meanings: ['Marquis', 'Lord', 'Daimyo'],
    on: ['こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Marquis', 'Old', 'Floating', 'Street'],
    similars: [
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '倣',
        meaning: 'emulate'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '併',
        meaning: 'join'
      },
      {
        kanji: '健',
        meaning: 'healthy'
      },
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '娠',
        meaning: 'with child'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      }
    ]
  },
  {
    kanjiName: '倖',
    strokes: 10,
    grade: 9,
    freq: null,
    meanings: ['Happiness', 'Luck'],
    on: ['こう'],
    kun: ['しあわ.せ', 'さいわ.い'],
    jlpt: 1,
    quizAnswers: ['In Love', 'Guest', 'Period', 'Happiness']
  },
  {
    kanjiName: '宏',
    strokes: 7,
    grade: 9,
    freq: 1277,
    meanings: ['Wide', 'Large'],
    on: ['こう'],
    kun: ['ひろ.い'],
    jlpt: 1,
    quizAnswers: ['Spot', 'Wide', 'Leave To', 'Flour']
  },
  {
    kanjiName: '弘',
    strokes: 5,
    grade: 9,
    freq: 1059,
    meanings: ['Vast', 'Broad', 'Wide'],
    on: ['こう', 'ぐ'],
    kun: ['ひろ.い'],
    jlpt: 1,
    quizAnswers: ['Behave', 'Vast', 'Fee', 'Conserve']
  },
  {
    kanjiName: '昂',
    strokes: 8,
    grade: 9,
    freq: null,
    meanings: ['Rise'],
    on: ['こう', 'ごう'],
    kun: ['あ.がる', 'たか.い', 'たか.ぶる'],
    jlpt: 1,
    quizAnswers: ['Rise', 'Private', 'Features', 'Sail']
  },
  {
    kanjiName: '晃',
    strokes: 10,
    grade: 9,
    freq: 1666,
    meanings: ['Clear'],
    on: ['こう'],
    kun: ['あきらか'],
    jlpt: 1,
    quizAnswers: ['Clear', 'Model', 'Right', 'Answer (phone)']
  },
  {
    kanjiName: '浩',
    strokes: 10,
    grade: 9,
    freq: 1149,
    meanings: ['Wide Expanse', 'Abundance', 'Vigorous'],
    on: ['こう'],
    kun: ['おおき.い', 'ひろ.い'],
    jlpt: 1,
    quizAnswers: ['Texture', 'Long', 'Wide Expanse', 'Week']
  },
  {
    kanjiName: '紘',
    strokes: 10,
    grade: 9,
    freq: 1685,
    meanings: ['Large'],
    on: ['こう'],
    kun: ['おおづな', 'つな', 'つなぐ'],
    jlpt: 1,
    quizAnswers: ['Other', 'Large', 'Reign', 'Draft']
  },
  {
    kanjiName: '鴻',
    strokes: 17,
    grade: 9,
    freq: 2111,
    meanings: ['Large Bird', 'Wild Goose', 'Large', 'Great', 'Powerful', 'Prosperous'],
    on: ['こう', 'ごう'],
    kun: ['おおとり', 'ひしくい', 'おおがり'],
    jlpt: 1,
    quizAnswers: ['Restrict', 'Large Bird', 'Notes', 'Resources']
  },
  {
    kanjiName: '墾',
    strokes: 16,
    grade: 8,
    freq: null,
    meanings: ['Ground-breaking', 'Open Up Farmland'],
    on: ['こん'],
    kun: ['は.る', 'ひら.く'],
    jlpt: 1,
    quizAnswers: ['Ground-breaking', 'Master', 'Arrive', 'Rich'],
    similars: [
      {
        kanji: '懇',
        meaning: 'sociable'
      },
      {
        kanji: '浪',
        meaning: 'wandering'
      },
      {
        kanji: '恨',
        meaning: 'regret'
      },
      {
        kanji: '爵',
        meaning: 'baron'
      },
      {
        kanji: '根',
        meaning: 'root'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      },
      {
        kanji: '慨',
        meaning: 'rue'
      },
      {
        kanji: '墜',
        meaning: 'crash'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '粧',
        meaning: 'cosmetics'
      }
    ]
  },
  {
    kanjiName: '嵯',
    strokes: 13,
    grade: 9,
    freq: 2191,
    meanings: ['Steep', 'Craggy', 'Rugged'],
    on: ['さ', 'し'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Repel', 'Steep', 'Distress', 'Ritual']
  },
  {
    kanjiName: '瑳',
    strokes: 14,
    grade: 9,
    freq: null,
    meanings: ['Polish', 'Brilliant White Luster Of A Gem', 'Artful Smile'],
    on: ['さ'],
    kun: ['みが.く'],
    jlpt: 1,
    quizAnswers: ['Polish', 'Sunshine', 'Cliff', 'Test']
  },
  {
    kanjiName: '裟',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Buddhist Surplice'],
    on: ['さ', 'しゃ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Clot', 'Palace', 'Buddhist Surplice', 'Busy']
  },
  {
    kanjiName: '采',
    strokes: 8,
    grade: 8,
    freq: null,
    meanings: ['Dice', 'Form', 'Appearance', 'Take', 'Gather', 'Coloring'],
    on: ['さい'],
    kun: ['と.る', 'いろどり'],
    jlpt: 1,
    quizAnswers: ['Dice', 'Occasion', 'Shameless', 'Far']
  },
  {
    kanjiName: '冴',
    strokes: 7,
    grade: 9,
    freq: 2341,
    meanings: ['Be Clear', 'Serene', 'Cold', 'Skilful'],
    on: ['ご', 'こ'],
    kun: ['さ.える', 'こお.る', 'ひ.える'],
    jlpt: 1,
    quizAnswers: ['Time', 'School', 'Expression', 'Be Clear']
  },
  {
    kanjiName: '朔',
    strokes: 10,
    grade: 9,
    freq: 2318,
    meanings: ['Conjunction (astronomy)', 'First Day Of Month', 'North'],
    on: ['さく'],
    kun: ['ついたち'],
    jlpt: 1,
    quizAnswers: ['Proceed', 'Efficacy', 'Conjunction (astronomy)', 'Change']
  },
  {
    kanjiName: '笹',
    strokes: 11,
    grade: 9,
    freq: 1743,
    meanings: ['Bamboo Grass', '(kokuji)'],
    on: [],
    kun: ['ささ'],
    jlpt: 1,
    quizAnswers: ['War', 'Idea', 'Bamboo Grass', 'Hide']
  },
  {
    kanjiName: '皐',
    strokes: 11,
    grade: 9,
    freq: 2240,
    meanings: ['Swamp', 'Shore'],
    on: ['こう'],
    kun: ['さつき'],
    jlpt: 1,
    quizAnswers: ['Swamp', 'Value', 'Boiled Rice', 'View']
  },
  {
    kanjiName: '燦',
    strokes: 17,
    grade: 9,
    freq: null,
    meanings: ['Brilliant'],
    on: ['さん'],
    kun: ['さん.たる', 'あき.らか', 'きらめ.く', 'きら.めく'],
    jlpt: 1,
    quizAnswers: ['Brilliant', 'Beg', 'Pane', 'Germ']
  },
  {
    kanjiName: '蚕',
    strokes: 10,
    grade: 6,
    freq: 2272,
    meanings: ['Silkworm'],
    on: ['さん', 'てん'],
    kun: ['かいこ', 'こ'],
    jlpt: 1,
    quizAnswers: ['Left', 'Silkworm', 'Lightly', 'Grain'],
    similars: [
      {
        kanji: '風',
        meaning: 'wind'
      },
      {
        kanji: '独',
        meaning: 'single'
      },
      {
        kanji: '蛮',
        meaning: 'barbarian'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '強',
        meaning: 'strong'
      },
      {
        kanji: '虫',
        meaning: 'insect'
      },
      {
        kanji: '属',
        meaning: 'belong'
      },
      {
        kanji: '触',
        meaning: 'contact'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '短',
        meaning: 'short'
      }
    ]
  },
  {
    kanjiName: '嗣',
    strokes: 13,
    grade: 8,
    freq: 2310,
    meanings: ['Heir', 'Succeed'],
    on: ['し'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Heir', 'Word', 'Ahead', 'Gift'],
    similars: [
      {
        kanji: '胴',
        meaning: 'trunk'
      },
      {
        kanji: '品',
        meaning: 'goods'
      },
      {
        kanji: '器',
        meaning: 'utensil'
      },
      {
        kanji: '閣',
        meaning: 'tower'
      },
      {
        kanji: '飼',
        meaning: 'domesticate'
      },
      {
        kanji: '洞',
        meaning: 'den'
      },
      {
        kanji: '高',
        meaning: 'tall'
      },
      {
        kanji: '問',
        meaning: 'question'
      },
      {
        kanji: '唱',
        meaning: 'chant'
      },
      {
        kanji: '昭',
        meaning: 'shining'
      }
    ]
  },
  {
    kanjiName: '肢',
    strokes: 8,
    grade: 8,
    freq: 2289,
    meanings: ['Limb', 'Arms & Legs'],
    on: ['し'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Course', 'Stage', 'Limb', 'Nature'],
    similars: [
      {
        kanji: '服',
        meaning: 'clothing'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '肥',
        meaning: 'fertilizer'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '肺',
        meaning: 'lungs'
      },
      {
        kanji: '皇',
        meaning: 'emperor'
      },
      {
        kanji: '是',
        meaning: 'just so'
      },
      {
        kanji: '望',
        meaning: 'ambition'
      },
      {
        kanji: '脚',
        meaning: 'skids'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      }
    ]
  },
  {
    kanjiName: '賜',
    strokes: 15,
    grade: 8,
    freq: 2190,
    meanings: ['Grant', 'Gift', 'Boon', 'Results'],
    on: ['し'],
    kun: ['たまわ.る', 'たま.う', 'たも.う'],
    jlpt: 1,
    quizAnswers: ['Grant', 'Doubt', 'Owe', 'Blame'],
    similars: [
      {
        kanji: '贈',
        meaning: 'presents'
      },
      {
        kanji: '晩',
        meaning: 'nightfall'
      },
      {
        kanji: '褐',
        meaning: 'brown'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '腸',
        meaning: 'intestines'
      },
      {
        kanji: '買',
        meaning: 'buy'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      },
      {
        kanji: '易',
        meaning: 'easy'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      },
      {
        kanji: '財',
        meaning: 'property'
      }
    ]
  },
  {
    kanjiName: '爾',
    strokes: 14,
    grade: 9,
    freq: null,
    meanings: ['You', 'Thou', 'Second Person'],
    on: ['じ', 'に'],
    kun: ['なんじ', 'しかり', 'その', 'のみ', 'おれ', 'しか'],
    jlpt: 1,
    quizAnswers: ['You', 'Linen', 'Participate In', 'Mind']
  },
  {
    kanjiName: '蒔',
    strokes: 13,
    grade: 9,
    freq: 2368,
    meanings: ['Sow (seeds)'],
    on: ['し', 'じ'],
    kun: ['う.える', 'ま.く'],
    jlpt: 1,
    quizAnswers: ['Male', 'Sow (seeds)', 'True', 'Cloud']
  },
  {
    kanjiName: '汐',
    strokes: 6,
    grade: 9,
    freq: 2314,
    meanings: ['Eventide', 'Tide', 'Salt Water', 'Opportunity'],
    on: ['せき'],
    kun: ['しお', 'うしお', 'せい'],
    jlpt: 1,
    quizAnswers: ['Twilight', 'Reward', 'Eventide', 'Leaf']
  },
  {
    kanjiName: '偲',
    strokes: 11,
    grade: 9,
    freq: 2350,
    meanings: ['Recollect', 'Remember'],
    on: ['さい', 'し'],
    kun: ['しの.ぶ'],
    jlpt: 1,
    quizAnswers: ['Recollect', 'Sweet', 'Row', 'Put On']
  },
  {
    kanjiName: '紗',
    strokes: 10,
    grade: 9,
    freq: null,
    meanings: ['Gauze', 'Gossamer'],
    on: ['さ', 'しゃ'],
    kun: ['うすぎぬ'],
    jlpt: 1,
    quizAnswers: ['Gauze', 'Both', 'Badge', 'Line']
  },
  {
    kanjiName: '勺',
    strokes: 3,
    grade: 9,
    freq: null,
    meanings: ['Ladle', 'One Tenth Of A Go', 'Dip'],
    on: ['しゃく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Ladle', 'Net (profit)', 'Sell', 'Department'],
    similars: [
      {
        kanji: '凡',
        meaning: 'commonplace'
      },
      {
        kanji: '夕',
        meaning: 'evening'
      },
      {
        kanji: '丸',
        meaning: 'round'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '丹',
        meaning: 'rust-colored'
      },
      {
        kanji: '仏',
        meaning: 'Buddha'
      },
      {
        kanji: '不',
        meaning: 'negative'
      },
      {
        kanji: '分',
        meaning: 'part'
      },
      {
        kanji: '舟',
        meaning: 'boat'
      },
      {
        kanji: '公',
        meaning: 'public'
      }
    ]
  },
  {
    kanjiName: '爵',
    strokes: 17,
    grade: 8,
    freq: null,
    meanings: ['Baron', 'Peerage', 'Court Rank'],
    on: ['しゃく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Baron', 'Level', 'Hold', 'Impression'],
    similars: [
      {
        kanji: '測',
        meaning: 'fathom'
      },
      {
        kanji: '懇',
        meaning: 'sociable'
      },
      {
        kanji: '獣',
        meaning: 'animal'
      },
      {
        kanji: '漁',
        meaning: 'fishing'
      },
      {
        kanji: '魚',
        meaning: 'fish'
      },
      {
        kanji: '濁',
        meaning: 'voiced'
      },
      {
        kanji: '面',
        meaning: 'mask'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '得',
        meaning: 'gain'
      },
      {
        kanji: '博',
        meaning: 'Dr.'
      }
    ]
  },
  {
    kanjiName: '儒',
    strokes: 16,
    grade: 8,
    freq: 2162,
    meanings: ['Confucian'],
    on: ['じゅ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Besiege', 'Confucian', 'Origin', 'Camp'],
    similars: [
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '震',
        meaning: 'quake'
      },
      {
        kanji: '零',
        meaning: 'zero'
      },
      {
        kanji: '雲',
        meaning: 'cloud'
      },
      {
        kanji: '雰',
        meaning: 'atmosphere'
      },
      {
        kanji: '霜',
        meaning: 'frost'
      },
      {
        kanji: '科',
        meaning: 'department'
      },
      {
        kanji: '雪',
        meaning: 'snow'
      },
      {
        kanji: '霊',
        meaning: 'spirits'
      },
      {
        kanji: '電',
        meaning: 'electricity'
      }
    ]
  },
  {
    kanjiName: '愁',
    strokes: 13,
    grade: 8,
    freq: 2171,
    meanings: ['Distress', 'Grieve', 'Lament', 'Be Anxious'],
    on: ['しゅう'],
    kun: ['うれ.える', 'うれ.い'],
    jlpt: 1,
    quizAnswers: ['War', 'Distress', 'Beginning', 'Sink'],
    similars: [
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '悠',
        meaning: 'permanence'
      },
      {
        kanji: '秘',
        meaning: 'secret'
      },
      {
        kanji: '穏',
        meaning: 'calm'
      },
      {
        kanji: '移',
        meaning: 'shift'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)'
      },
      {
        kanji: '惑',
        meaning: 'beguile'
      },
      {
        kanji: '恋',
        meaning: 'romance'
      },
      {
        kanji: '税',
        meaning: 'tax'
      }
    ]
  },
  {
    kanjiName: '洲',
    strokes: 9,
    grade: 9,
    freq: 1979,
    meanings: ['Continent', 'Sandbar', 'Island', 'Country'],
    on: ['しゅう', 'す'],
    kun: ['しま'],
    jlpt: 1,
    quizAnswers: ['Another', 'Continent', 'Medicine', 'Seller']
  },
  {
    kanjiName: '峻',
    strokes: 10,
    grade: 9,
    freq: 1997,
    meanings: ['High', 'Steep'],
    on: ['しゅん'],
    kun: ['けわ.しい', 'たか.い'],
    jlpt: 1,
    quizAnswers: ['Not Yet', 'Sharp', 'Die', 'High']
  },
  {
    kanjiName: '竣',
    strokes: 12,
    grade: 9,
    freq: null,
    meanings: ['End', 'Finish'],
    on: ['どう', 'しゅん'],
    kun: ['わらわ', 'わらべ', 'おわ.る'],
    jlpt: 1,
    quizAnswers: ['Labor', 'Look For', 'Be Offended', 'End']
  },
  {
    kanjiName: '舜',
    strokes: 13,
    grade: 9,
    freq: 2384,
    meanings: ['Type Of Morning Glory', 'Rose Of Sharon', 'Althea'],
    on: ['しゅん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Commander', 'Condemn', 'Type Of Morning Glory', 'Vocation']
  },
  {
    kanjiName: '淳',
    strokes: 11,
    grade: 9,
    freq: 1629,
    meanings: ['Pure'],
    on: ['じゅん', 'しゅん'],
    kun: ['あつ.い'],
    jlpt: 1,
    quizAnswers: ['Prosperity', 'Supplement', 'Trademark', 'Pure']
  },
  {
    kanjiName: '遵',
    strokes: 15,
    grade: 8,
    freq: null,
    meanings: ['Abide By', 'Follow', 'Obey', 'Learn'],
    on: ['じゅん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Left', 'Abide By', 'Cellar', 'Send'],
    similars: [
      {
        kanji: '尊',
        meaning: 'revered'
      },
      {
        kanji: '運',
        meaning: 'carry'
      },
      {
        kanji: '道',
        meaning: 'road-way'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '迫',
        meaning: 'urge'
      },
      {
        kanji: '酌',
        meaning: 'bar-tending'
      },
      {
        kanji: '迷',
        meaning: 'astray'
      },
      {
        kanji: '酬',
        meaning: 'repay'
      },
      {
        kanji: '魚',
        meaning: 'fish'
      },
      {
        kanji: '酵',
        meaning: 'fermentation'
      }
    ]
  },
  {
    kanjiName: '渚',
    strokes: 11,
    grade: 9,
    freq: 2226,
    meanings: ['Strand', 'Beach', 'Shore'],
    on: ['しょ'],
    kun: ['なぎさ'],
    jlpt: 1,
    quizAnswers: ['Place', 'Strand', 'Skill', 'Resources']
  },
  {
    kanjiName: '恕',
    strokes: 10,
    grade: 9,
    freq: null,
    meanings: ['Excuse', 'Tolerate', 'Forgive'],
    on: ['じょ', 'しょ'],
    kun: ['ゆる.す'],
    jlpt: 1,
    quizAnswers: ['Future', 'Troops', 'Violence', 'Excuse']
  },
  {
    kanjiName: '宵',
    strokes: 10,
    grade: 8,
    freq: 2262,
    meanings: ['Wee Hours', 'Evening', 'Early Night'],
    on: ['しょう'],
    kun: ['よい'],
    jlpt: 1,
    quizAnswers: ['Included', 'Subdue', 'Powder', 'Wee Hours'],
    similars: [
      {
        kanji: '消',
        meaning: 'extinguish'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '骨',
        meaning: 'skeleton'
      },
      {
        kanji: '肯',
        meaning: 'agreement'
      },
      {
        kanji: '育',
        meaning: 'bring up'
      },
      {
        kanji: '硝',
        meaning: 'nitrate'
      },
      {
        kanji: '清',
        meaning: 'pure'
      },
      {
        kanji: '情',
        meaning: 'feelings'
      },
      {
        kanji: '宿',
        meaning: 'inn'
      },
      {
        kanji: '滑',
        meaning: 'slippery'
      }
    ]
  },
  {
    kanjiName: '抄',
    strokes: 7,
    grade: 8,
    freq: 2328,
    meanings: ['Extract', 'Selection', 'Summary', 'Copy', 'Spread Thin'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Lack', 'Public Chamber', 'Extract', 'Ambition'],
    similars: [
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '示',
        meaning: 'show'
      },
      {
        kanji: '払',
        meaning: 'pay'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '妙',
        meaning: 'exquisite'
      },
      {
        kanji: '少',
        meaning: 'few'
      },
      {
        kanji: '扱',
        meaning: 'handle'
      },
      {
        kanji: '我',
        meaning: 'ego'
      },
      {
        kanji: '秒',
        meaning: 'second (1/60 minute)'
      },
      {
        kanji: '挟',
        meaning: 'pinch'
      }
    ]
  },
  {
    kanjiName: '捷',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Victory', 'Fast'],
    on: ['しょう', 'そう'],
    kun: ['はや.い'],
    jlpt: 1,
    quizAnswers: ['Victory', 'Heart', 'Excellent', 'Non-']
  },
  {
    kanjiName: '梢',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Treetops', 'Twig'],
    on: ['しょう'],
    kun: ['こずえ', 'くすのき'],
    jlpt: 1,
    quizAnswers: ['Suck', 'Buddhist Sect', 'Treetops', 'Cushion']
  },
  {
    kanjiName: '硝',
    strokes: 12,
    grade: 8,
    freq: 2154,
    meanings: ['Nitrate', 'Saltpeter'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Nitrate', 'Fix', 'Rod', 'Kind'],
    similars: [
      {
        kanji: '請',
        meaning: 'solicit'
      },
      {
        kanji: '宵',
        meaning: 'wee hours'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '消',
        meaning: 'extinguish'
      },
      {
        kanji: '肖',
        meaning: 'resemblance'
      },
      {
        kanji: '備',
        meaning: 'equip'
      },
      {
        kanji: '諸',
        meaning: 'various'
      },
      {
        kanji: '骨',
        meaning: 'skeleton'
      },
      {
        kanji: '硫',
        meaning: 'sulphur'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      }
    ]
  },
  {
    kanjiName: '菖',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Iris'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Iris', 'Angle', 'Assist', 'Each Other']
  },
  {
    kanjiName: '蕉',
    strokes: 15,
    grade: 9,
    freq: 2033,
    meanings: ['Banana', 'Plantain'],
    on: ['しょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Banana', 'Fit', 'Master', 'Tend Toward']
  },
  {
    kanjiName: '詔',
    strokes: 12,
    grade: 8,
    freq: 2239,
    meanings: ['Imperial Edict'],
    on: ['しょう'],
    kun: ['みことのり'],
    jlpt: 1,
    quizAnswers: ['Ingredients', 'Present', 'Imperial Edict', 'Hill'],
    similars: [
      {
        kanji: '詞',
        meaning: 'part of speech'
      },
      {
        kanji: '説',
        meaning: 'opinion'
      },
      {
        kanji: '詰',
        meaning: 'packed'
      },
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '詐',
        meaning: 'lie'
      },
      {
        kanji: '訓',
        meaning: 'instruction'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '語',
        meaning: 'word'
      },
      {
        kanji: '諮',
        meaning: 'consult with'
      },
      {
        kanji: '設',
        meaning: 'establishment'
      }
    ]
  },
  {
    kanjiName: '丞',
    strokes: 6,
    grade: 9,
    freq: null,
    meanings: ['Help'],
    on: ['じょう', 'しょう'],
    kun: ['すく.う', 'たす.ける'],
    jlpt: 1,
    quizAnswers: ['Series', 'Yang Principle', 'Visit', 'Help']
  },
  {
    kanjiName: '穣',
    strokes: 18,
    grade: 9,
    freq: 2464,
    meanings: ['Good Crops', 'Prosperity', '10**28'],
    on: ['じょう'],
    kun: ['わら', 'ゆたか'],
    jlpt: 1,
    quizAnswers: ['Good Crops', 'Ask', 'Pull', 'Thick']
  },
  {
    kanjiName: '晋',
    strokes: 10,
    grade: 9,
    freq: 1655,
    meanings: ['Advance'],
    on: ['しん'],
    kun: ['すす.む'],
    jlpt: 1,
    quizAnswers: ['Abstain', 'Client', 'Advance', 'Sound']
  },
  {
    kanjiName: '榛',
    strokes: 14,
    grade: 9,
    freq: 2205,
    meanings: ['Hazelnut', 'Filbert'],
    on: ['しん', 'はん'],
    kun: ['はしばみ', 'はり'],
    jlpt: 1,
    quizAnswers: ['Gun Barrel', 'Spear', 'Boil', 'Hazelnut']
  },
  {
    kanjiName: '秦',
    strokes: 10,
    grade: 9,
    freq: 1894,
    meanings: ['Manchu Dynasty', 'Name Given To Naturalized Foreigners'],
    on: ['しん'],
    kun: ['はた'],
    jlpt: 1,
    quizAnswers: ['Level', 'Manchu Dynasty', 'Simple', 'Hope']
  },
  {
    kanjiName: '薪',
    strokes: 16,
    grade: 8,
    freq: 2182,
    meanings: ['Fuel', 'Firewood', 'Kindling'],
    on: ['しん'],
    kun: ['たきぎ', 'まき'],
    jlpt: 1,
    quizAnswers: ['Corner', 'Conserve', 'Fuel', 'Hail'],
    similars: [
      {
        kanji: '新',
        meaning: 'new'
      },
      {
        kanji: '歯',
        meaning: 'tooth'
      },
      {
        kanji: '断',
        meaning: 'severance'
      },
      {
        kanji: '菊',
        meaning: 'chrysanthemum'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '境',
        meaning: 'boundary'
      },
      {
        kanji: '執',
        meaning: 'tenacious'
      },
      {
        kanji: '穀',
        meaning: 'cereals'
      },
      {
        kanji: '楼',
        meaning: 'watchtower'
      },
      {
        kanji: '菜',
        meaning: 'vegetable'
      }
    ]
  },
  {
    kanjiName: '翠',
    strokes: 14,
    grade: 9,
    freq: 2200,
    meanings: ['Green', 'Kingfisher'],
    on: ['すい'],
    kun: ['かわせみ', 'みどり'],
    jlpt: 1,
    quizAnswers: ['Large', 'Ball', 'Fail', 'Green']
  },
  {
    kanjiName: '錘',
    strokes: 16,
    grade: 9,
    freq: null,
    meanings: ['Weight', 'Plumb Bob', 'Sinker', 'Spindle'],
    on: ['すい'],
    kun: ['つむ', 'おもり'],
    jlpt: 1,
    quizAnswers: ['Form', 'Inlet', 'Quote', 'Weight'],
    similars: [
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '鋳',
        meaning: 'casting'
      },
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '錯',
        meaning: 'confused'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '鑑',
        meaning: 'specimen'
      },
      {
        kanji: '鐘',
        meaning: 'bell'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      },
      {
        kanji: '銘',
        meaning: 'inscription'
      }
    ]
  },
  {
    kanjiName: '嵩',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Be Aggravated', 'Grow Worse', 'Grow Bulky', 'Swell'],
    on: ['すう', 'しゅう'],
    kun: ['かさ', 'かさ.む', 'たか.い'],
    jlpt: 1,
    quizAnswers: ['Be Aggravated', 'Affair', 'Ream', 'Reformation']
  },
  {
    kanjiName: '雛',
    strokes: 18,
    grade: 9,
    freq: 2241,
    meanings: ['Chick', 'Squab', 'Duckling', 'Doll'],
    on: ['すう', 'す', 'じゅ'],
    kun: ['ひな', 'ひよこ'],
    jlpt: 1,
    quizAnswers: ['Crop', 'Chick', 'Put Into', 'Tend Toward']
  },
  {
    kanjiName: '畝',
    strokes: 10,
    grade: 8,
    freq: 2327,
    meanings: ['Furrow', 'Thirty Tsubo', 'Ridge', 'Rib'],
    on: ['ぼう', 'ほ', 'も', 'む'],
    kun: ['せ', 'うね'],
    jlpt: 1,
    quizAnswers: ['Solely', 'Furrow', 'Discourse', 'Tier'],
    similars: [
      {
        kanji: '更',
        meaning: 'grow late'
      },
      {
        kanji: '夏',
        meaning: 'summer'
      },
      {
        kanji: '黄',
        meaning: 'yellow'
      },
      {
        kanji: '卑',
        meaning: 'lowly'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      },
      {
        kanji: '画',
        meaning: 'brush-stroke'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '衰',
        meaning: 'decline'
      },
      {
        kanji: '東',
        meaning: 'east'
      }
    ]
  },
  {
    kanjiName: '斥',
    strokes: 5,
    grade: 8,
    freq: 2231,
    meanings: ['Reject', 'Retreat', 'Recede', 'Withdraw', 'Repel', 'Repulse'],
    on: ['せき'],
    kun: ['しりぞ.ける'],
    jlpt: 1,
    quizAnswers: ['Make A Deal', 'Reject', 'Yearn For', 'Grow Old'],
    similars: [
      {
        kanji: '升',
        meaning: 'measuring box'
      },
      {
        kanji: '斤',
        meaning: 'axe'
      },
      {
        kanji: '近',
        meaning: 'near'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '匠',
        meaning: 'artisan'
      },
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '代',
        meaning: 'substitute'
      },
      {
        kanji: '外',
        meaning: 'outside'
      },
      {
        kanji: '千',
        meaning: 'thousand'
      },
      {
        kanji: '午',
        meaning: 'noon'
      }
    ]
  },
  {
    kanjiName: '碩',
    strokes: 14,
    grade: 9,
    freq: null,
    meanings: ['Large', 'Great', 'Eminent'],
    on: ['せき'],
    kun: ['おお.きい'],
    jlpt: 1,
    quizAnswers: ['Body', 'Kind', 'Origin', 'Large']
  },
  {
    kanjiName: '銑',
    strokes: 14,
    grade: 9,
    freq: null,
    meanings: ['Pig Iron'],
    on: ['せん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Play (chess)', 'Live', 'Pig Iron', 'Resign'],
    similars: [
      {
        kanji: '鉄',
        meaning: 'iron'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      },
      {
        kanji: '錘',
        meaning: 'weight'
      },
      {
        kanji: '鋭',
        meaning: 'pointed'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '鈍',
        meaning: 'dull'
      },
      {
        kanji: '鉱',
        meaning: 'mineral'
      },
      {
        kanji: '錠',
        meaning: 'lock'
      },
      {
        kanji: '鋳',
        meaning: 'casting'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      }
    ]
  },
  {
    kanjiName: '繕',
    strokes: 18,
    grade: 8,
    freq: 2195,
    meanings: ['Darning', 'Repair', 'Mend', 'Trim', 'Tidy Up', 'Adjust'],
    on: ['ぜん'],
    kun: ['つくろ.う'],
    jlpt: 1,
    quizAnswers: ['Darning', 'Estimate', 'Practice', 'West'],
    similars: [
      {
        kanji: '結',
        meaning: 'tie'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      },
      {
        kanji: '給',
        meaning: 'salary'
      },
      {
        kanji: '絵',
        meaning: 'picture'
      },
      {
        kanji: '繊',
        meaning: 'slender'
      },
      {
        kanji: '継',
        meaning: 'inherit'
      },
      {
        kanji: '紹',
        meaning: 'introduce'
      },
      {
        kanji: '絡',
        meaning: 'entwine'
      },
      {
        kanji: '縫',
        meaning: 'sew'
      },
      {
        kanji: '裕',
        meaning: 'abundant'
      }
    ]
  },
  {
    kanjiName: '塑',
    strokes: 13,
    grade: 8,
    freq: null,
    meanings: ['Model', 'Molding'],
    on: ['そ'],
    kun: ['でく'],
    jlpt: 1,
    quizAnswers: ['Even', 'Stage', 'Model', 'Minus'],
    similars: [
      {
        kanji: '粧',
        meaning: 'cosmetics'
      },
      {
        kanji: '尊',
        meaning: 'revered'
      },
      {
        kanji: '差',
        meaning: 'distinction'
      },
      {
        kanji: '粗',
        meaning: 'coarse'
      },
      {
        kanji: '望',
        meaning: 'ambition'
      },
      {
        kanji: '堕',
        meaning: 'degenerate'
      },
      {
        kanji: '糧',
        meaning: 'provisions'
      },
      {
        kanji: '謝',
        meaning: 'apologize'
      },
      {
        kanji: '墜',
        meaning: 'crash'
      },
      {
        kanji: '潤',
        meaning: 'wet'
      }
    ]
  },
  {
    kanjiName: '惣',
    strokes: 12,
    grade: 9,
    freq: 2211,
    meanings: ['All'],
    on: ['そう'],
    kun: ['すべ.て'],
    jlpt: 1,
    quizAnswers: ['Polite Suffix', 'All', 'Attention', 'Army']
  },
  {
    kanjiName: '綜',
    strokes: 14,
    grade: 9,
    freq: 2194,
    meanings: ['Rule', 'Synthesize'],
    on: ['そう'],
    kun: ['おさ.める', 'す.べる'],
    jlpt: 1,
    quizAnswers: ['Epoch', 'Me', 'Occasion', 'Rule']
  },
  {
    kanjiName: '黛',
    strokes: 16,
    grade: 9,
    freq: 2254,
    meanings: ['Blackened Eyebrows'],
    on: ['たい'],
    kun: ['まゆずみ'],
    jlpt: 1,
    quizAnswers: ['Bag', 'Take Up', 'Dark', 'Blackened Eyebrows']
  },
  {
    kanjiName: '鯛',
    strokes: 19,
    grade: 9,
    freq: 2446,
    meanings: ['Sea Bream', 'Red Snapper'],
    on: ['ちょう'],
    kun: ['たい'],
    jlpt: 1,
    quizAnswers: ['Performer', 'Sea Bream', 'Japanese Character Reading', 'Desire']
  },
  {
    kanjiName: '鷹',
    strokes: 24,
    grade: 9,
    freq: 1676,
    meanings: ['Hawk'],
    on: ['よう', 'おう'],
    kun: ['たか'],
    jlpt: 1,
    quizAnswers: ['Age', 'Resign', 'Move', 'Hawk']
  },
  {
    kanjiName: '啄',
    strokes: 10,
    grade: 9,
    freq: 2463,
    meanings: ['Peck', 'Pick Up'],
    on: ['たく', 'つく', 'とく'],
    kun: ['ついば.む', 'つつ.く'],
    jlpt: 1,
    quizAnswers: ['Either', 'Pawn', 'Forest', 'Peck']
  },
  {
    kanjiName: '琢',
    strokes: 11,
    grade: 9,
    freq: 2022,
    meanings: ['Polish'],
    on: ['たく'],
    kun: ['みが.く'],
    jlpt: 1,
    quizAnswers: ['Polish', 'Inside', 'Loins', 'Achievements']
  },
  {
    kanjiName: '只',
    strokes: 5,
    grade: 9,
    freq: 2288,
    meanings: ['Only', 'Free', 'In Addition'],
    on: ['し'],
    kun: ['ただ'],
    jlpt: 1,
    quizAnswers: ['Rank', 'Audacious', 'Only', 'Unusual']
  },
  {
    kanjiName: '但',
    strokes: 7,
    grade: 8,
    freq: 2404,
    meanings: ['However', 'But'],
    on: ['たん'],
    kun: ['ただ.し'],
    jlpt: 1,
    quizAnswers: ['Soul', 'Simplicity', 'Utensil', 'However'],
    similars: [
      {
        kanji: '伸',
        meaning: 'expand'
      },
      {
        kanji: '白',
        meaning: 'white'
      },
      {
        kanji: '旨',
        meaning: 'delicious'
      },
      {
        kanji: '伯',
        meaning: 'chief'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '旬',
        meaning: 'decameron'
      },
      {
        kanji: '旧',
        meaning: 'old times'
      },
      {
        kanji: '便',
        meaning: 'convenience'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      },
      {
        kanji: '胆',
        meaning: 'gall bladder'
      }
    ]
  },
  {
    kanjiName: '辰',
    strokes: 7,
    grade: 9,
    freq: 1600,
    meanings: [
      'Sign Of The Dragon',
      '7-9am',
      'Fifth Sign Of Chinese Zodiac',
      'Shin Dragon Radical (no. 161)'
    ],
    on: ['しん', 'じん'],
    kun: ['たつ'],
    jlpt: 1,
    quizAnswers: ['Heat', 'Manner', 'Sign Of The Dragon', 'Remarkable']
  },
  {
    kanjiName: '巽',
    strokes: 12,
    grade: 9,
    freq: 2061,
    meanings: ['Southeast'],
    on: ['そん'],
    kun: ['たつみ'],
    jlpt: 1,
    quizAnswers: ['Cow', 'Deep Red', 'Left', 'Southeast']
  },
  {
    kanjiName: '檀',
    strokes: 17,
    grade: 9,
    freq: 2291,
    meanings: ['Cedar', 'Sandlewood', 'Spindle Tree'],
    on: ['だん', 'たん'],
    kun: ['まゆみ'],
    jlpt: 1,
    quizAnswers: ['Superficial', 'Birth', 'Return', 'Cedar']
  },
  {
    kanjiName: '逐',
    strokes: 10,
    grade: 8,
    freq: 2230,
    meanings: ['Pursue', 'Drive Away', 'Chase', 'Accomplish', 'Attain', 'Commit'],
    on: ['ちく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Fortune', 'Disadvantage', 'Injury', 'Pursue'],
    similars: [
      {
        kanji: '遂',
        meaning: 'consummate'
      },
      {
        kanji: '迷',
        meaning: 'astray'
      },
      {
        kanji: '速',
        meaning: 'quick'
      },
      {
        kanji: '送',
        meaning: 'escort'
      },
      {
        kanji: '迭',
        meaning: 'transfer'
      },
      {
        kanji: '逝',
        meaning: 'departed'
      },
      {
        kanji: '逮',
        meaning: 'apprehend'
      },
      {
        kanji: '遠',
        meaning: 'distant'
      },
      {
        kanji: '退',
        meaning: 'retreat'
      },
      {
        kanji: '述',
        meaning: 'mention'
      }
    ]
  },
  {
    kanjiName: '嫡',
    strokes: 14,
    grade: 8,
    freq: 2130,
    meanings: ['Legitimate Wife', 'Direct Descent (non-bastard)'],
    on: ['ちゃく', 'てき'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Badge', 'Fruit', 'Literature', 'Legitimate Wife'],
    similars: [
      {
        kanji: '摘',
        meaning: 'pinch'
      },
      {
        kanji: '滴',
        meaning: 'drip'
      },
      {
        kanji: '商',
        meaning: 'make a deal'
      },
      {
        kanji: '培',
        meaning: 'cultivate'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '適',
        meaning: 'suitable'
      },
      {
        kanji: '陪',
        meaning: 'obeisance'
      },
      {
        kanji: '唐',
        meaning: "T'ang"
      },
      {
        kanji: '姉',
        meaning: 'elder sister'
      },
      {
        kanji: '尚',
        meaning: 'esteem'
      }
    ]
  },
  {
    kanjiName: '衷',
    strokes: 10,
    grade: 8,
    freq: 2229,
    meanings: ['Inmost', 'Heart', 'Mind', 'Inside'],
    on: ['ちゅう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Inmost', 'Class', 'Summon', 'Excellent'],
    similars: [
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '吹',
        meaning: 'blow'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '衰',
        meaning: 'decline'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      }
    ]
  },
  {
    kanjiName: '猪',
    strokes: 11,
    grade: 9,
    freq: 1684,
    meanings: ['Boar'],
    on: ['ちょ'],
    kun: ['い', 'いのしし'],
    jlpt: 1,
    quizAnswers: ['Boar', 'Invite', 'Rape', 'Craving']
  },
  {
    kanjiName: '暢',
    strokes: 14,
    grade: 9,
    freq: 2144,
    meanings: ['Stretch'],
    on: ['ちょう'],
    kun: ['のび.る'],
    jlpt: 1,
    quizAnswers: ['Stretch', 'Change', 'Suitable', 'Reliant']
  },
  {
    kanjiName: '脹',
    strokes: 12,
    grade: 9,
    freq: null,
    meanings: ['Dilate', 'Distend', 'Bulge', 'Fill Out', 'Swell'],
    on: ['ちょう'],
    kun: ['は.れる', 'ふく.らむ', 'ふく.れる'],
    jlpt: 1,
    quizAnswers: ['Printing Block', 'Assist', 'Bloom', 'Dilate'],
    similars: [
      {
        kanji: '帳',
        meaning: 'notebook'
      },
      {
        kanji: '長',
        meaning: 'long'
      },
      {
        kanji: '集',
        meaning: 'gather'
      },
      {
        kanji: '張',
        meaning: 'counter for bows & stringed instruments'
      },
      {
        kanji: '肪',
        meaning: 'obese'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '襲',
        meaning: 'attack'
      },
      {
        kanji: '隻',
        meaning: 'vessels'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      },
      {
        kanji: '肺',
        meaning: 'lungs'
      }
    ]
  },
  {
    kanjiName: '勅',
    strokes: 9,
    grade: 8,
    freq: 2157,
    meanings: ['Imperial Order'],
    on: ['ちょく'],
    kun: ['いまし.める', 'みことのり'],
    jlpt: 1,
    quizAnswers: ['End', 'Fetch', 'Bosom', 'Imperial Order'],
    similars: [
      {
        kanji: '速',
        meaning: 'quick'
      },
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '協',
        meaning: 'co-'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '刺',
        meaning: 'thorn'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '砂',
        meaning: 'sand'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '褒',
        meaning: 'praise'
      },
      {
        kanji: '喪',
        meaning: 'miss'
      }
    ]
  },
  {
    kanjiName: '朕',
    strokes: 10,
    grade: 8,
    freq: null,
    meanings: ['Majestic Plural', 'Imperial We'],
    on: ['ちん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Change', 'Army', 'Majestic Plural', 'Bowels'],
    similars: [
      {
        kanji: '勝',
        meaning: 'victory'
      },
      {
        kanji: '脈',
        meaning: 'vein'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '脱',
        meaning: 'undress'
      },
      {
        kanji: '豚',
        meaning: 'pork'
      },
      {
        kanji: '楽',
        meaning: 'music'
      },
      {
        kanji: '暖',
        meaning: 'warmth'
      },
      {
        kanji: '肝',
        meaning: 'liver'
      },
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '肢',
        meaning: 'limb'
      }
    ]
  },
  {
    kanjiName: '槻',
    strokes: 15,
    grade: 9,
    freq: 2008,
    meanings: ['Zelkova Tree'],
    on: ['き'],
    kun: ['つき'],
    jlpt: 1,
    quizAnswers: ['Select', 'Middle', 'Medicine', 'Zelkova Tree']
  },
  {
    kanjiName: '蔦',
    strokes: 14,
    grade: 9,
    freq: 2215,
    meanings: ['Vine', 'Ivy'],
    on: ['ちょう'],
    kun: ['つた'],
    jlpt: 1,
    quizAnswers: ['Vine', 'Product (x*y)', 'Grow Late', 'Pilfer']
  },
  {
    kanjiName: '椿',
    strokes: 13,
    grade: 9,
    freq: 1829,
    meanings: ['Camellia'],
    on: ['ちん', 'ちゅん'],
    kun: ['つばき'],
    jlpt: 1,
    quizAnswers: ['Condition', 'Grant', 'Counter For Large Animals', 'Camellia']
  },
  {
    kanjiName: '紬',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Pongee (a Knotted Silk Cloth)'],
    on: ['ちゅう'],
    kun: ['つむぎ', 'つむ.ぐ'],
    jlpt: 1,
    quizAnswers: [
      'Ship',
      'Request',
      'Counter For Letters, Notes, Documents, Etc.',
      'Pongee (a Knotted Silk Cloth)'
    ]
  },
  {
    kanjiName: '悌',
    strokes: 10,
    grade: 9,
    freq: 2474,
    meanings: ['Serving Our Elders'],
    on: ['てい', 'だい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Ride In', 'Character', 'Serving Our Elders', 'Expert']
  },
  {
    kanjiName: '禎',
    strokes: 13,
    grade: 9,
    freq: 2083,
    meanings: ['Happiness', 'Blessed', 'Good Fortune', 'Auspicious'],
    on: ['てい'],
    kun: ['さいわ.い'],
    jlpt: 1,
    quizAnswers: ['Send', 'Happiness', 'Times', 'Boundary']
  },
  {
    kanjiName: '逓',
    strokes: 10,
    grade: 8,
    freq: 1957,
    meanings: ['Relay', 'In Turn', 'Sending'],
    on: ['てい'],
    kun: ['かわ.る', 'たがいに'],
    jlpt: 1,
    quizAnswers: ['Drop', 'Frankness', 'Relay', 'Bear In Mind'],
    similars: [
      {
        kanji: '近',
        meaning: 'near'
      },
      {
        kanji: '途',
        meaning: 'route'
      },
      {
        kanji: '造',
        meaning: 'create'
      },
      {
        kanji: '逆',
        meaning: 'inverted'
      },
      {
        kanji: '迭',
        meaning: 'transfer'
      },
      {
        kanji: '送',
        meaning: 'escort'
      },
      {
        kanji: '制',
        meaning: 'system'
      },
      {
        kanji: '迷',
        meaning: 'astray'
      },
      {
        kanji: '遅',
        meaning: 'slow'
      },
      {
        kanji: '週',
        meaning: 'week'
      }
    ]
  },
  {
    kanjiName: '杜',
    strokes: 7,
    grade: 9,
    freq: 2062,
    meanings: ['Woods', 'Grove'],
    on: ['と', 'とう', 'ず'],
    kun: ['もり', 'ふさ.ぐ', 'やまなし'],
    jlpt: 1,
    quizAnswers: ['Sell', 'Blunt', 'Disappear', 'Woods']
  },
  {
    kanjiName: '痘',
    strokes: 12,
    grade: 8,
    freq: null,
    meanings: ['Pox', 'Smallpox'],
    on: ['とう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Big Brother', 'Pox', 'Solid', 'Slope'],
    similars: [
      {
        kanji: '短',
        meaning: 'short'
      },
      {
        kanji: '症',
        meaning: 'symptoms'
      },
      {
        kanji: '病',
        meaning: 'ill'
      },
      {
        kanji: '登',
        meaning: 'ascend'
      },
      {
        kanji: '癖',
        meaning: 'mannerism'
      },
      {
        kanji: '党',
        meaning: 'party'
      },
      {
        kanji: '剖',
        meaning: 'divide'
      },
      {
        kanji: '堂',
        meaning: 'public chamber'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '部',
        meaning: 'section'
      }
    ]
  },
  {
    kanjiName: '謄',
    strokes: 17,
    grade: 8,
    freq: 2295,
    meanings: ['Mimeograph', 'Copy'],
    on: ['とう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Mimeograph', 'Feel Bitter', 'Abundant', 'Chief'],
    similars: [
      {
        kanji: '誉',
        meaning: 'reputation'
      },
      {
        kanji: '朕',
        meaning: 'majestic plural'
      },
      {
        kanji: '勝',
        meaning: 'victory'
      },
      {
        kanji: '警',
        meaning: 'admonish'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      },
      {
        kanji: '誓',
        meaning: 'vow'
      },
      {
        kanji: '騰',
        meaning: 'leaping up'
      },
      {
        kanji: '胎',
        meaning: 'womb'
      },
      {
        kanji: '賠',
        meaning: 'compensation'
      },
      {
        kanji: '答',
        meaning: 'solution'
      }
    ]
  },
  {
    kanjiName: '寅',
    strokes: 11,
    grade: 9,
    freq: 1975,
    meanings: ['Sign Of The Tiger', '3-5am', 'Third Sign Of Chinese Zodiac'],
    on: ['いん'],
    kun: ['とら'],
    jlpt: 1,
    quizAnswers: ['Measure', 'Sign Of The Tiger', 'Stop', 'Finish']
  },
  {
    kanjiName: '酉',
    strokes: 7,
    grade: 9,
    freq: 2468,
    meanings: [
      'West',
      'Bird',
      'Sign Of The Bird',
      '5-7pm',
      'Tenth Sign Of Chinese Zodiac',
      'Sake Radical (no. 164)'
    ],
    on: ['ゆう'],
    kun: ['とり'],
    jlpt: 1,
    quizAnswers: ['Revered', 'West', 'Achieve', 'Thong']
  },
  {
    kanjiName: '惇',
    strokes: 11,
    grade: 9,
    freq: 2265,
    meanings: ['Sincere', 'Kind', 'Considerate'],
    on: ['しゅん', 'じゅん', 'とん'],
    kun: ['あつ.い'],
    jlpt: 1,
    quizAnswers: ['Puff', 'Experience', 'Sympathy', 'Sincere']
  },
  {
    kanjiName: '敦',
    strokes: 12,
    grade: 9,
    freq: 1695,
    meanings: ['Industry', 'Kindliness'],
    on: ['とん', 'たい', 'だん', 'ちょう'],
    kun: ['あつ.い'],
    jlpt: 1,
    quizAnswers: ['Industry', 'Stair', 'Looks', 'Raise']
  },
  {
    kanjiName: '凪',
    strokes: 6,
    grade: 9,
    freq: null,
    meanings: ['Lull', 'Calm', '(kokuji)'],
    on: [],
    kun: ['なぎ', 'な.ぐ'],
    jlpt: 1,
    quizAnswers: ['Thaw', 'Depth', 'Lull', 'Pleasing']
  },
  {
    kanjiName: '捺',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Press', 'Print', 'Affix A Seal', 'Stamp'],
    on: ['なつ', 'だつ'],
    kun: ['さ.す', 'お.す'],
    jlpt: 1,
    quizAnswers: ['Press', 'Recede', 'Toil', 'City']
  },
  {
    kanjiName: '楠',
    strokes: 13,
    grade: 9,
    freq: 1927,
    meanings: ['Camphor Tree'],
    on: ['なん', 'だん', 'ぜん', 'ねん'],
    kun: ['くす', 'くすのき'],
    jlpt: 1,
    quizAnswers: ['Relay Station', 'Camphor Tree', 'Control', 'Discrepancy']
  },
  {
    kanjiName: '弐',
    strokes: 6,
    grade: 8,
    freq: null,
    meanings: ['Ii', 'Two', 'Second'],
    on: ['に', 'じ'],
    kun: ['ふた.つ', 'そえ'],
    jlpt: 1,
    quizAnswers: ['Ii', 'Old', 'Distinction', 'Germ'],
    similars: [
      {
        kanji: '式',
        meaning: 'style'
      },
      {
        kanji: '武',
        meaning: 'warrior'
      },
      {
        kanji: '寿',
        meaning: 'longevity'
      },
      {
        kanji: '戒',
        meaning: 'commandment'
      },
      {
        kanji: '封',
        meaning: 'seal'
      },
      {
        kanji: '威',
        meaning: 'intimidate'
      },
      {
        kanji: '示',
        meaning: 'show'
      },
      {
        kanji: '寺',
        meaning: 'Buddhist temple'
      },
      {
        kanji: '代',
        meaning: 'substitute'
      },
      {
        kanji: '栽',
        meaning: 'plantation'
      }
    ]
  },
  {
    kanjiName: '巴',
    strokes: 4,
    grade: 9,
    freq: 2082,
    meanings: ['Comma-design'],
    on: ['は'],
    kun: ['ともえ', 'うずまき'],
    jlpt: 1,
    quizAnswers: ['Record', 'Semen', 'Comma-design', 'Pin']
  },
  {
    kanjiName: '萩',
    strokes: 12,
    grade: 9,
    freq: 1544,
    meanings: ['Bush Clover'],
    on: ['しゅう'],
    kun: ['はぎ'],
    jlpt: 1,
    quizAnswers: ['Grieve', 'Pillar', 'Encircle', 'Bush Clover']
  },
  {
    kanjiName: '肇',
    strokes: 14,
    grade: 9,
    freq: 1943,
    meanings: ['Beginning'],
    on: ['ちょう', 'じょう', 'とう'],
    kun: ['はじ.める', 'はじめ'],
    jlpt: 1,
    quizAnswers: ['Stage', 'Conduct', 'Thousand', 'Beginning']
  },
  {
    kanjiName: '頒',
    strokes: 13,
    grade: 8,
    freq: 2287,
    meanings: ['Distribute', 'Disseminate', 'Partition', 'Understand'],
    on: ['はん'],
    kun: ['わか.つ'],
    jlpt: 1,
    quizAnswers: ['Un-', 'Distribute', 'Food', 'Pair'],
    similars: [
      {
        kanji: '領',
        meaning: 'jurisdiction'
      },
      {
        kanji: '貧',
        meaning: 'poverty'
      },
      {
        kanji: '順',
        meaning: 'obey'
      },
      {
        kanji: '傾',
        meaning: 'lean'
      },
      {
        kanji: '煩',
        meaning: 'anxiety'
      },
      {
        kanji: '頂',
        meaning: 'place on the head'
      },
      {
        kanji: '貨',
        meaning: 'freight'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '頑',
        meaning: 'stubborn'
      },
      {
        kanji: '貿',
        meaning: 'trade'
      }
    ]
  },
  {
    kanjiName: '眉',
    strokes: 9,
    grade: 8,
    freq: 2177,
    meanings: ['Eyebrow'],
    on: ['び', 'み'],
    kun: ['まゆ'],
    jlpt: 1,
    quizAnswers: ['Spirit', 'Eyebrow', 'Arrive', 'Value']
  },
  {
    kanjiName: '柊',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Holly'],
    on: ['しゅ', 'しゅう'],
    kun: ['ひいらぎ'],
    jlpt: 1,
    quizAnswers: ['Learning', 'Spouse', 'Holly', 'Coal']
  },
  {
    kanjiName: '彦',
    strokes: 9,
    grade: 9,
    freq: 1117,
    meanings: ['Lad', 'Boy (ancient)'],
    on: ['げん'],
    kun: ['ひこ'],
    jlpt: 1,
    quizAnswers: ['Lad', 'Slice Off', 'Blunt', 'Repel']
  },
  {
    kanjiName: '彪',
    strokes: 11,
    grade: 9,
    freq: 2397,
    meanings: ['Spotted', 'Mottled', 'Patterned', 'Small Tiger'],
    on: ['ひょう', 'ひゅう'],
    kun: ['あや'],
    jlpt: 1,
    quizAnswers: ['Defeat', 'Spotted', 'Get Used To', 'Pills']
  },
  {
    kanjiName: '彬',
    strokes: 11,
    grade: 9,
    freq: 2174,
    meanings: ['Refined', 'Gentle'],
    on: ['ひん', 'ふん'],
    kun: ['うるわ.しい', 'あき.らか'],
    jlpt: 1,
    quizAnswers: ['Refined', 'Gentleness', 'Riot', 'Government Ministry']
  },
  {
    kanjiName: '芙',
    strokes: 7,
    grade: 9,
    freq: 2238,
    meanings: ['Lotus', 'Mt Fuji'],
    on: ['ふ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Lotus', 'Seal', 'Make Good', 'Fall']
  },
  {
    kanjiName: '賦',
    strokes: 15,
    grade: 8,
    freq: null,
    meanings: ['Levy', 'Ode', 'Prose', 'Poem', 'Tribute', 'Installment'],
    on: ['ふ', 'ぶ'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Quiver', 'Former Time', 'Escort', 'Levy'],
    similars: [
      {
        kanji: '睡',
        meaning: 'drowsy'
      },
      {
        kanji: '賊',
        meaning: 'burglar'
      },
      {
        kanji: '貯',
        meaning: 'savings'
      },
      {
        kanji: '財',
        meaning: 'property'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      },
      {
        kanji: '賄',
        meaning: 'bribe'
      },
      {
        kanji: '販',
        meaning: 'marketing'
      },
      {
        kanji: '敗',
        meaning: 'failure'
      },
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '武',
        meaning: 'warrior'
      }
    ]
  },
  {
    kanjiName: '附',
    strokes: 8,
    grade: 8,
    freq: 2396,
    meanings: ['Affixed', 'Attach', 'Refer To', 'Append'],
    on: ['ふ'],
    kun: ['つ.ける', 'つ.く'],
    jlpt: 1,
    quizAnswers: ['Guard', 'Refined', 'Give', 'Affixed'],
    similars: [
      {
        kanji: '除',
        meaning: 'exclude'
      },
      {
        kanji: '付',
        meaning: 'adhere'
      },
      {
        kanji: '村',
        meaning: 'village'
      },
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '耐',
        meaning: '-proof'
      },
      {
        kanji: '陰',
        meaning: 'shade'
      },
      {
        kanji: '降',
        meaning: 'descend'
      },
      {
        kanji: '代',
        meaning: 'substitute'
      },
      {
        kanji: '対',
        meaning: 'vis-a-vis'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      }
    ]
  },
  {
    kanjiName: '蕗',
    strokes: 16,
    grade: 9,
    freq: null,
    meanings: ['Butterbur', 'Bog Rhubarb'],
    on: ['ろ', 'る'],
    kun: ['ふき'],
    jlpt: 1,
    quizAnswers: ['Butterbur', 'Container', 'Decline', 'Evening']
  },
  {
    kanjiName: '丙',
    strokes: 5,
    grade: 8,
    freq: null,
    meanings: ['Third Class', '3rd', '3rd Calendar Sign'],
    on: ['へい'],
    kun: ['ひのえ'],
    jlpt: 1,
    quizAnswers: ['Steps', 'Third Class', 'Cakes', 'All'],
    similars: [
      {
        kanji: '内',
        meaning: 'inside'
      },
      {
        kanji: '刺',
        meaning: 'thorn'
      },
      {
        kanji: '札',
        meaning: 'tag'
      },
      {
        kanji: '木',
        meaning: 'tree'
      },
      {
        kanji: '柄',
        meaning: 'design'
      },
      {
        kanji: '西',
        meaning: 'west'
      },
      {
        kanji: '朽',
        meaning: 'decay'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '朴',
        meaning: 'crude'
      },
      {
        kanji: '両',
        meaning: 'both'
      }
    ]
  },
  {
    kanjiName: '碧',
    strokes: 14,
    grade: 9,
    freq: 2455,
    meanings: ['Blue', 'Green'],
    on: ['へき', 'ひゃく'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Blue', 'Level', 'Child', 'Old Times']
  },
  {
    kanjiName: '甫',
    strokes: 7,
    grade: 9,
    freq: 2270,
    meanings: ['For The First Time', 'Not Until'],
    on: ['ほ', 'ふ'],
    kun: ['はじ.めて'],
    jlpt: 1,
    quizAnswers: ['For The First Time', 'Rate', 'Either', 'Ferment']
  },
  {
    kanjiName: '倣',
    strokes: 10,
    grade: 8,
    freq: 2454,
    meanings: ['Emulate', 'Imitate'],
    on: ['ほう'],
    kun: ['なら.う'],
    jlpt: 1,
    quizAnswers: ['Purity', 'Emulate', 'Person', 'Dust'],
    similars: [
      {
        kanji: '放',
        meaning: 'set free'
      },
      {
        kanji: '侯',
        meaning: 'marquis'
      },
      {
        kanji: '依',
        meaning: 'reliant'
      },
      {
        kanji: '激',
        meaning: 'violent'
      },
      {
        kanji: '微',
        meaning: 'delicate'
      },
      {
        kanji: '旅',
        meaning: 'trip'
      },
      {
        kanji: '敷',
        meaning: 'spread'
      },
      {
        kanji: '牧',
        meaning: 'breed'
      },
      {
        kanji: '候',
        meaning: 'climate'
      },
      {
        kanji: '狭',
        meaning: 'cramped'
      }
    ]
  },
  {
    kanjiName: '朋',
    strokes: 8,
    grade: 9,
    freq: 2039,
    meanings: ['Companion', 'Friend'],
    on: ['ほう'],
    kun: ['とも'],
    jlpt: 1,
    quizAnswers: ['Dominate', 'Believe', 'Calyx', 'Companion']
  },
  {
    kanjiName: '鳳',
    strokes: 14,
    grade: 9,
    freq: 2163,
    meanings: ['Male Mythical Bird'],
    on: ['ほう', 'ふう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Ride', 'Enlist', 'Six', 'Male Mythical Bird']
  },
  {
    kanjiName: '鵬',
    strokes: 19,
    grade: 9,
    freq: 1707,
    meanings: ['Phoenix'],
    on: ['ほう'],
    kun: ['おおとり'],
    jlpt: 1,
    quizAnswers: ['Wilderness', 'Approach', 'Phoenix', 'Agriculture']
  },
  {
    kanjiName: '槙',
    strokes: 14,
    grade: 9,
    freq: 1983,
    meanings: ['Twig', 'Ornamental Evergreen'],
    on: ['てん', 'しん'],
    kun: ['まき', 'こずえ'],
    jlpt: 1,
    quizAnswers: ['Childhood', 'Carry', 'Construct', 'Twig']
  },
  {
    kanjiName: '柾',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Straight Grain', 'Spindle Tree', '(kokuji)'],
    on: [],
    kun: ['まさ', 'まさめ', 'まさき'],
    jlpt: 1,
    quizAnswers: ['Cipher', 'Province', 'Straight Grain', 'Daytime']
  },
  {
    kanjiName: '亦',
    strokes: 6,
    grade: 9,
    freq: null,
    meanings: ['Also', 'Again'],
    on: ['えき', 'やく'],
    kun: ['また'],
    jlpt: 1,
    quizAnswers: ['Account', 'Also', 'Battle', 'Lean']
  },
  {
    kanjiName: '繭',
    strokes: 18,
    grade: 8,
    freq: 2495,
    meanings: ['Cocoon'],
    on: ['けん'],
    kun: ['まゆ', 'きぬ'],
    jlpt: 1,
    quizAnswers: ['Roll Up', 'Cocoon', 'Business', 'Respiration'],
    similars: [
      {
        kanji: '蛮',
        meaning: 'barbarian'
      },
      {
        kanji: '融',
        meaning: 'dissolve'
      },
      {
        kanji: '羅',
        meaning: 'gauze'
      },
      {
        kanji: '索',
        meaning: 'cord'
      },
      {
        kanji: '細',
        meaning: 'dainty'
      },
      {
        kanji: '蚕',
        meaning: 'silkworm'
      },
      {
        kanji: '蓄',
        meaning: 'amass'
      },
      {
        kanji: '蛍',
        meaning: 'lightning-bug'
      },
      {
        kanji: '喜',
        meaning: 'rejoice'
      },
      {
        kanji: '素',
        meaning: 'elementary'
      }
    ]
  },
  {
    kanjiName: '麿',
    strokes: 18,
    grade: 9,
    freq: null,
    meanings: ['I', 'You', '(kokuji)'],
    on: [],
    kun: ['まろ'],
    jlpt: 1,
    quizAnswers: ['Breathe', 'Average', 'I', 'Occupied']
  },
  {
    kanjiName: '巳',
    strokes: 3,
    grade: 9,
    freq: 2142,
    meanings: ['Sign Of The Snake Or Serpent', '9-11am', 'Sixth Sign Of Chinese Zodiac'],
    on: ['し'],
    kun: ['み'],
    jlpt: 1,
    quizAnswers: ['Occur', 'To Be', 'Become', 'Sign Of The Snake Or Serpent']
  },
  {
    kanjiName: '稔',
    strokes: 13,
    grade: 9,
    freq: 1775,
    meanings: ['Harvest', 'Ripen'],
    on: ['ねん', 'じん', 'にん'],
    kun: ['みの.る', 'みのり'],
    jlpt: 1,
    quizAnswers: ['Affair', 'Sugary', 'Harvest', 'Compensate']
  },
  {
    kanjiName: '椋',
    strokes: 12,
    grade: 9,
    freq: null,
    meanings: ['Type Of Deciduous Tree', 'Grey Starling'],
    on: ['りょう'],
    kun: ['むく'],
    jlpt: 1,
    quizAnswers: ['Cloud Up', 'Limit', 'Dangerous', 'Type Of Deciduous Tree']
  },
  {
    kanjiName: '孟',
    strokes: 8,
    grade: 9,
    freq: 2127,
    meanings: ['Chief', 'Beginning'],
    on: ['もう', 'ぼう', 'みょう'],
    kun: ['かしら'],
    jlpt: 1,
    quizAnswers: ['Decree', 'Poverty', 'Chief', 'Publish']
  },
  {
    kanjiName: '耗',
    strokes: 10,
    grade: 8,
    freq: null,
    meanings: ['Decrease'],
    on: ['もう', 'こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Decrease', 'Sin', 'Month', 'Commandment'],
    similars: [
      {
        kanji: '析',
        meaning: 'chop'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '枠',
        meaning: 'frame'
      },
      {
        kanji: '耕',
        meaning: 'till'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '粋',
        meaning: 'chic'
      },
      {
        kanji: '断',
        meaning: 'severance'
      },
      {
        kanji: '術',
        meaning: 'art'
      },
      {
        kanji: '許',
        meaning: 'permit'
      },
      {
        kanji: '新',
        meaning: 'new'
      }
    ]
  },
  {
    kanjiName: '匁',
    strokes: 4,
    grade: 9,
    freq: null,
    meanings: ['Monme', '3.75 Grams', '(kokuji)'],
    on: [],
    kun: ['もんめ', 'め'],
    jlpt: 1,
    quizAnswers: ['A Helping', 'Mainly', 'Excellent', 'Monme'],
    similars: [
      {
        kanji: '欠',
        meaning: 'lack'
      },
      {
        kanji: '父',
        meaning: 'father'
      },
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '衣',
        meaning: 'garment'
      },
      {
        kanji: '水',
        meaning: 'water'
      },
      {
        kanji: '夫',
        meaning: 'husband'
      },
      {
        kanji: '天',
        meaning: 'heavens'
      },
      {
        kanji: '及',
        meaning: 'reach out'
      },
      {
        kanji: '大',
        meaning: 'large'
      }
    ]
  },
  {
    kanjiName: '冶',
    strokes: 7,
    grade: 8,
    freq: null,
    meanings: ['Melting', 'Smelting'],
    on: ['や'],
    kun: ['い.る'],
    jlpt: 1,
    quizAnswers: ['Respect', 'Brush', 'Melting', 'Pipe']
  },
  {
    kanjiName: '耶',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Question Mark'],
    on: ['や', 'じゃ'],
    kun: ['か'],
    jlpt: 1,
    quizAnswers: ['Question Mark', 'Oppose', 'Mat', 'Substance']
  },
  {
    kanjiName: '佑',
    strokes: 7,
    grade: 9,
    freq: 2250,
    meanings: ['Help', 'Assist'],
    on: ['ゆう', 'う'],
    kun: ['たす.ける'],
    jlpt: 1,
    quizAnswers: ['Art', 'Help', 'Investigate', 'Three (in Documents)']
  },
  {
    kanjiName: '宥',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Soothe', 'Calm', 'Pacify'],
    on: ['ゆう'],
    kun: ['なだ.める', 'ゆる.す'],
    jlpt: 1,
    quizAnswers: ['Passion', 'Gentleness', 'Soothe', 'Decision']
  },
  {
    kanjiName: '柚',
    strokes: 9,
    grade: 9,
    freq: 2489,
    meanings: ['Citron'],
    on: ['ゆ', 'ゆう', 'じく'],
    kun: ['ゆず'],
    jlpt: 1,
    quizAnswers: ['Membership', 'Path', 'Citron', 'Draw Near']
  },
  {
    kanjiName: '祐',
    strokes: 9,
    grade: 9,
    freq: 1706,
    meanings: ['Help'],
    on: ['ゆう', 'う'],
    kun: ['たす.ける'],
    jlpt: 1,
    quizAnswers: ['Interchange', 'Help', 'Life', 'Winter']
  },
  {
    kanjiName: '邑',
    strokes: 7,
    grade: 9,
    freq: 2452,
    meanings: ['Village', 'Rural Community', 'Right Village Radical (no. 163)'],
    on: ['ゆう'],
    kun: ['むら'],
    jlpt: 1,
    quizAnswers: ['Each Other', 'Village', 'Row', 'Noble']
  },
  {
    kanjiName: '楊',
    strokes: 13,
    grade: 9,
    freq: 1815,
    meanings: ['Willow'],
    on: ['よう'],
    kun: ['やなぎ'],
    jlpt: 1,
    quizAnswers: ['File', 'Spacious', 'Support', 'Willow']
  },
  {
    kanjiName: '窯',
    strokes: 15,
    grade: 8,
    freq: 2072,
    meanings: ['Kiln', 'Oven', 'Furnace'],
    on: ['よう'],
    kun: ['かま'],
    jlpt: 1,
    quizAnswers: ['Sugary', 'Thin', 'Migrate', 'Kiln'],
    similars: [
      {
        kanji: '空',
        meaning: 'empty'
      },
      {
        kanji: '宝',
        meaning: 'treasure'
      },
      {
        kanji: '薫',
        meaning: 'send forth fragrance'
      },
      {
        kanji: '室',
        meaning: 'room'
      },
      {
        kanji: '無',
        meaning: 'nothingness'
      },
      {
        kanji: '寒',
        meaning: 'cold'
      },
      {
        kanji: '察',
        meaning: 'guess'
      },
      {
        kanji: '窓',
        meaning: 'window'
      },
      {
        kanji: '庶',
        meaning: 'commoner'
      },
      {
        kanji: '廉',
        meaning: 'bargain'
      }
    ]
  },
  {
    kanjiName: '耀',
    strokes: 20,
    grade: 9,
    freq: 2253,
    meanings: ['Shine', 'Sparkle', 'Gleam', 'Twinkle'],
    on: ['よう'],
    kun: ['かがや.く', 'ひかり'],
    jlpt: 1,
    quizAnswers: ['Shine', 'Right', 'Hour', 'Miscellaneous']
  },
  {
    kanjiName: '蓉',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Lotus'],
    on: ['よう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Scheme', 'Lotus', 'Copy', 'Release']
  },
  {
    kanjiName: '濫',
    strokes: 18,
    grade: 8,
    freq: null,
    meanings: ['Excessive', 'Overflow', 'Spread Out'],
    on: ['らん'],
    kun: ['みだ.りに', 'みだ.りがましい'],
    jlpt: 1,
    quizAnswers: ['Weak Point', 'Air', 'Cloud', 'Excessive'],
    similars: [
      {
        kanji: '監',
        meaning: 'oversee'
      },
      {
        kanji: '艦',
        meaning: 'warship'
      },
      {
        kanji: '鑑',
        meaning: 'specimen'
      },
      {
        kanji: '堅',
        meaning: 'strict'
      },
      {
        kanji: '温',
        meaning: 'warm'
      },
      {
        kanji: '溝',
        meaning: 'gutter'
      },
      {
        kanji: '覧',
        meaning: 'perusal'
      },
      {
        kanji: '濃',
        meaning: 'concentrated'
      },
      {
        kanji: '濁',
        meaning: 'voiced'
      },
      {
        kanji: '涯',
        meaning: 'horizon'
      }
    ]
  },
  {
    kanjiName: '蘭',
    strokes: 19,
    grade: 9,
    freq: 1886,
    meanings: ['Orchid', 'Holland'],
    on: ['らん', 'ら'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Perfume', 'Orchid', 'Pay', 'Body']
  },
  {
    kanjiName: '吏',
    strokes: 6,
    grade: 8,
    freq: null,
    meanings: ['Officer', 'An Official'],
    on: ['り'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Buy', 'Past', 'Officer', 'Form'],
    similars: [
      {
        kanji: '束',
        meaning: 'bundle'
      },
      {
        kanji: '史',
        meaning: 'history'
      },
      {
        kanji: '使',
        meaning: 'use'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '克',
        meaning: 'overcome'
      },
      {
        kanji: '哀',
        meaning: 'pathetic'
      },
      {
        kanji: '故',
        meaning: 'happenstance'
      },
      {
        kanji: '木',
        meaning: 'tree'
      },
      {
        kanji: '衷',
        meaning: 'inmost'
      },
      {
        kanji: '可',
        meaning: 'can'
      }
    ]
  },
  {
    kanjiName: '李',
    strokes: 7,
    grade: 9,
    freq: 1147,
    meanings: ['Plum'],
    on: ['り'],
    kun: ['すもも'],
    jlpt: 1,
    quizAnswers: ['Take Pleasure In', 'Plum', 'Window', 'Rejoice']
  },
  {
    kanjiName: '琉',
    strokes: 11,
    grade: 9,
    freq: 2036,
    meanings: ['Precious Stone', 'Gem', 'Lapis Lazuli'],
    on: ['りゅう', 'る'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Push', 'Season', 'Seize', 'Precious Stone']
  },
  {
    kanjiName: '稜',
    strokes: 13,
    grade: 9,
    freq: 2091,
    meanings: ['Angle', 'Edge', 'Corner', 'Power', 'Majesty'],
    on: ['りょう', 'ろう'],
    kun: ['いつ', 'かど'],
    jlpt: 1,
    quizAnswers: ['Chart', 'Angle', 'Again', 'Get Caught In']
  },
  {
    kanjiName: '厘',
    strokes: 9,
    grade: 8,
    freq: 1835,
    meanings: ['Rin', '1/10 Sen', '1/10 Bu'],
    on: ['りん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Force', 'Resign', 'Garden', 'Rin'],
    similars: [
      {
        kanji: '埋',
        meaning: 'bury'
      },
      {
        kanji: '里',
        meaning: 'ri'
      },
      {
        kanji: '厚',
        meaning: 'thick'
      },
      {
        kanji: '皇',
        meaning: 'emperor'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '理',
        meaning: 'logic'
      },
      {
        kanji: '百',
        meaning: 'hundred'
      },
      {
        kanji: '専',
        meaning: 'specialty'
      },
      {
        kanji: '車',
        meaning: 'car'
      }
    ]
  },
  {
    kanjiName: '琳',
    strokes: 12,
    grade: 9,
    freq: null,
    meanings: ['Jewel', 'Tinkling Of Jewelry'],
    on: ['りん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Fluid', 'Answer', 'Jewel', 'Argument']
  },
  {
    kanjiName: '麟',
    strokes: 24,
    grade: 9,
    freq: null,
    meanings: ['Chinese Unicorn', 'Genius', 'Giraffe', 'Bright', 'Shining'],
    on: ['りん'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Chinese Unicorn', 'Offer', 'Counter For Suits Of Clothing', 'Pilfer']
  },
  {
    kanjiName: '伶',
    strokes: 7,
    grade: 9,
    freq: null,
    meanings: ['Actor'],
    on: ['れい', 'りょう'],
    kun: ['わざおぎ'],
    jlpt: 1,
    quizAnswers: ['Stream', 'Extreme', 'Actor', 'Renowned']
  },
  {
    kanjiName: '嶺',
    strokes: 17,
    grade: 9,
    freq: 1959,
    meanings: ['Peak', 'Summit'],
    on: ['れい', 'りょう'],
    kun: ['みね'],
    jlpt: 1,
    quizAnswers: ['Purity', 'Strengthen', 'Peak', 'Enshrine']
  },
  {
    kanjiName: '怜',
    strokes: 8,
    grade: 9,
    freq: 2450,
    meanings: ['Wise'],
    on: ['れい', 'れん', 'りょう'],
    kun: ['あわ.れむ', 'さと.い'],
    jlpt: 1,
    quizAnswers: ['Break', 'Column', 'Capital', 'Wise']
  },
  {
    kanjiName: '玲',
    strokes: 9,
    grade: 9,
    freq: 1931,
    meanings: ['Sound Of Jewels'],
    on: ['れい'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Elapse', 'Sound Of Jewels', 'End', 'Foreign']
  },
  {
    kanjiName: '楼',
    strokes: 13,
    grade: 8,
    freq: 2173,
    meanings: ['Watchtower', 'Lookout', 'High Building'],
    on: ['ろう'],
    kun: ['たかどの'],
    jlpt: 1,
    quizAnswers: ['Futility', 'Watchtower', 'Tall', 'How Much'],
    similars: [
      {
        kanji: '桜',
        meaning: 'cherry'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '委',
        meaning: 'committee'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '様',
        meaning: 'Esq.'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '柄',
        meaning: 'design'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '柱',
        meaning: 'pillar'
      }
    ]
  },
  {
    kanjiName: '禄',
    strokes: 12,
    grade: 9,
    freq: 2126,
    meanings: ['Fief', 'Allowance', 'Pension', 'Grant', 'Happiness'],
    on: ['ろく'],
    kun: ['さいわ.い', 'ふち'],
    jlpt: 1,
    quizAnswers: ['Withdraw', 'Fief', 'Employment', 'Die']
  },
  {
    kanjiName: '倭',
    strokes: 10,
    grade: 9,
    freq: 2098,
    meanings: ['Yamato', 'Ancient Japan'],
    on: ['わ', 'い'],
    kun: ['やまと', 'したが.う'],
    jlpt: 1,
    quizAnswers: ['Yamato', 'Pleasure', 'Surpass', 'Error']
  },
  {
    kanjiName: '亘',
    strokes: 6,
    grade: 9,
    freq: 1728,
    meanings: ['Span', 'Range', 'Extend Over'],
    on: ['こう', 'かん', 'せん'],
    kun: ['わた.る', 'もと.める'],
    jlpt: 1,
    quizAnswers: ['Acknowledge', 'Deceased', 'Region', 'Span']
  },
  {
    kanjiName: '侑',
    strokes: 8,
    grade: 9,
    freq: null,
    meanings: ['Urge To Eat'],
    on: ['ゆう', 'う'],
    kun: ['すす.める', 'たす.ける'],
    jlpt: 1,
    quizAnswers: ['Residence', 'Coming & Going', 'Urge To Eat', 'Conduct (business)']
  },
  {
    kanjiName: '勁',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Strong'],
    on: ['けい'],
    kun: ['つよ.い'],
    jlpt: 1,
    quizAnswers: ['Strong', 'School', 'Attire', 'Order']
  },
  {
    kanjiName: '奎',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Star', 'God Of Literature'],
    on: ['けい', 'き'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Star', 'Conditions', 'Odd Number', 'End']
  },
  {
    kanjiName: '崚',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Mountains Towering In A Row'],
    on: ['りょう'],
    kun: [],
    jlpt: 1,
    quizAnswers: [
      'Performance',
      'Counter For Machines And Vehicles',
      'Time',
      'Mountains Towering In A Row'
    ]
  },
  {
    kanjiName: '彗',
    strokes: 11,
    grade: 9,
    freq: 2294,
    meanings: ['Comet'],
    on: ['すい', 'え', 'けい', 'せい'],
    kun: ['ほうき'],
    jlpt: 1,
    quizAnswers: ['Institution', 'Be Favored With', 'Beginning', 'Comet']
  },
  {
    kanjiName: '昴',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['The Pleiades'],
    on: ['こう', 'ぼう'],
    kun: ['すばる'],
    jlpt: 1,
    quizAnswers: ['Suit', 'The Pleiades', 'Girl', 'Extinguish']
  },
  {
    kanjiName: '晏',
    strokes: 10,
    grade: 9,
    freq: null,
    meanings: ['Late', 'Quiet', 'Sets (sun)'],
    on: ['あん'],
    kun: ['おそ.い'],
    jlpt: 1,
    quizAnswers: ['Cloth', 'Late', 'Half', 'Place On The Head']
  },
  {
    kanjiName: '晨',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Morning', 'Early'],
    on: ['しん'],
    kun: ['あした', 'とき', 'あさ'],
    jlpt: 1,
    quizAnswers: ['Variety', 'Example', 'New', 'Morning']
  },
  {
    kanjiName: '晟',
    strokes: 10,
    grade: 9,
    freq: null,
    meanings: ['Clear'],
    on: ['せい', 'じょう'],
    kun: ['あきらか'],
    jlpt: 1,
    quizAnswers: ['Clear', 'Counter For Years', 'Dynasty', 'Few']
  },
  {
    kanjiName: '暉',
    strokes: 13,
    grade: 9,
    freq: 2285,
    meanings: ['Shine', 'Light'],
    on: ['き'],
    kun: ['かが.やく'],
    jlpt: 1,
    quizAnswers: ['Rear', 'Matter', 'Shine', 'Decline']
  },
  {
    kanjiName: '椰',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Coconut Tree'],
    on: ['や'],
    kun: ['やし'],
    jlpt: 1,
    quizAnswers: ['Principal', 'Shirk', 'Case', 'Coconut Tree']
  },
  {
    kanjiName: '毬',
    strokes: 11,
    grade: 9,
    freq: 2431,
    meanings: ['Burr', 'Ball'],
    on: ['きゅう'],
    kun: ['いが', 'まり'],
    jlpt: 1,
    quizAnswers: ['Chicken', 'Pass Thru', 'Revered', 'Burr']
  },
  {
    kanjiName: '洸',
    strokes: 9,
    grade: 9,
    freq: 2430,
    meanings: ['Sparkling Water'],
    on: ['こう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Meanwhile', 'Leave To', 'Party', 'Sparkling Water']
  },
  {
    kanjiName: '洵',
    strokes: 9,
    grade: 9,
    freq: null,
    meanings: ['Alike', 'Truth'],
    on: ['じゅん', 'しゅん'],
    kun: ['の.ぶ', 'まこと.に'],
    jlpt: 1,
    quizAnswers: ['Show', 'Renew', 'Counter For Birds, Rabbits', 'Alike']
  },
  {
    kanjiName: '滉',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Deep And Broad'],
    on: ['こう'],
    kun: ['ひろ.い'],
    jlpt: 1,
    quizAnswers: ['Nook', 'Deep And Broad', 'Ball', 'Government Office']
  },
  {
    kanjiName: '漱',
    strokes: 14,
    grade: 9,
    freq: 2054,
    meanings: ['Gargle', 'Rinse Mouth'],
    on: ['そう', 'しゅう', 'す'],
    kun: ['くちすす.ぐ', 'くちそそ.ぐ', 'うがい', 'すす.ぐ'],
    jlpt: 1,
    quizAnswers: ['Halt', 'Melody', 'Gargle', 'Fishery']
  },
  {
    kanjiName: '澪',
    strokes: 16,
    grade: 9,
    freq: null,
    meanings: ['Water Route', 'Shipping Channel'],
    on: ['れい'],
    kun: ['みお'],
    jlpt: 1,
    quizAnswers: ['Hundred', 'Deliberation', 'Rape', 'Water Route']
  },
  {
    kanjiName: '燎',
    strokes: 16,
    grade: 9,
    freq: null,
    meanings: ['Burn', 'Bonfire'],
    on: ['りょう'],
    kun: ['かがりび'],
    jlpt: 1,
    quizAnswers: ['Tight', 'View', 'Borrow', 'Burn']
  },
  {
    kanjiName: '燿',
    strokes: 18,
    grade: 9,
    freq: null,
    meanings: ['Shine'],
    on: ['よう'],
    kun: ['かがや.く', 'ひかり'],
    jlpt: 1,
    quizAnswers: ['Stop', 'History', 'Shine', 'Mixture']
  },
  {
    kanjiName: '瑶',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Beautiful As A Jewel'],
    on: ['よう'],
    kun: ['たま'],
    jlpt: 1,
    quizAnswers: ['Together', 'Divining', 'Request', 'Beautiful As A Jewel']
  },
  {
    kanjiName: '皓',
    strokes: 12,
    grade: 9,
    freq: 2428,
    meanings: ['White', 'Clear'],
    on: ['こう'],
    kun: ['しろ.い', 'ひか.る'],
    jlpt: 1,
    quizAnswers: ['White', 'Border', 'Back', 'Assets']
  },
  {
    kanjiName: '眸',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['Pupil Of The Eye'],
    on: ['ぼう', 'む'],
    kun: ['ひとみ'],
    jlpt: 1,
    quizAnswers: ['Exclusive', 'Pupil Of The Eye', 'Later', 'And Again']
  },
  {
    kanjiName: '笙',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['A Reed Instrument'],
    on: ['しょう', 'そう'],
    kun: ['ふえ'],
    jlpt: 1,
    quizAnswers: ['Harm', 'Protrude', 'A Reed Instrument', 'Anti-']
  },
  {
    kanjiName: '綸',
    strokes: 14,
    grade: 9,
    freq: null,
    meanings: ['Thread', 'Silk Cloth'],
    on: ['りん', 'かん'],
    kun: ['いと'],
    jlpt: 1,
    quizAnswers: ['Shade', 'Faith', 'Absolve', 'Thread']
  },
  {
    kanjiName: '脩',
    strokes: 11,
    grade: 9,
    freq: 2267,
    meanings: ['Dried Meat'],
    on: ['しゅう'],
    kun: ['おさ.める', 'なが.い', 'ほじし'],
    jlpt: 1,
    quizAnswers: ['Lap', 'Fruit', 'Eat', 'Dried Meat']
  },
  {
    kanjiName: '茉',
    strokes: 8,
    grade: 9,
    freq: null,
    meanings: ['Jasmine'],
    on: ['まつ', 'ばつ', 'ま'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Convert', 'Divining', 'Gold', 'Jasmine']
  },
  {
    kanjiName: '菫',
    strokes: 11,
    grade: 9,
    freq: null,
    meanings: ['The Violet'],
    on: ['きん'],
    kun: ['すみれ'],
    jlpt: 1,
    quizAnswers: ['Send For', 'The Violet', 'Heart', 'Implore']
  },
  {
    kanjiName: '詢',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Consult With'],
    on: ['じゅん', 'しゅん'],
    kun: ['はか.る', 'まこと'],
    jlpt: 1,
    quizAnswers: ['Drop', 'Diminish', 'Award To', 'Consult With']
  },
  {
    kanjiName: '諄',
    strokes: 15,
    grade: 9,
    freq: null,
    meanings: ['Tedious'],
    on: ['しゅん'],
    kun: ['ひちくど.い', 'くど.い', 'くどくど', 'ねんご.ろ'],
    jlpt: 1,
    quizAnswers: ['Perverse', 'Tedious', 'Miss', 'Character']
  },
  {
    kanjiName: '赳',
    strokes: 10,
    grade: 9,
    freq: 2114,
    meanings: ['Strong And Brave'],
    on: ['きゅう'],
    kun: [],
    jlpt: 1,
    quizAnswers: ['Ultra-', 'Number', 'Bear (a Burden)', 'Strong And Brave']
  },
  {
    kanjiName: '迪',
    strokes: 8,
    grade: 9,
    freq: null,
    meanings: ['Edify', 'Way', 'Path'],
    on: ['てき'],
    kun: ['みち', 'みちび.く', 'すす.む', 'いた.る'],
    jlpt: 1,
    quizAnswers: ['Counter For Houses', 'Chief', 'Edify', 'Circle']
  },
  {
    kanjiName: '頌',
    strokes: 13,
    grade: 9,
    freq: null,
    meanings: ['Eulogy'],
    on: ['しょう', 'じゅ', 'よう'],
    kun: ['かたち', 'たた.える', 'ほめ.る'],
    jlpt: 1,
    quizAnswers: ['Argue', 'Railway Car', 'Eulogy', 'Copy']
  },
  {
    kanjiName: '黎',
    strokes: 15,
    grade: 9,
    freq: 2335,
    meanings: ['Dark', 'Black', 'Many'],
    on: ['れい', 'り'],
    kun: ['くろ.い'],
    jlpt: 1,
    quizAnswers: ['Daughter', 'Strike', 'Dry', 'Dark']
  },
  {
    kanjiName: '凜',
    strokes: 15,
    grade: 9,
    freq: null,
    meanings: ['Cold', 'Strict', 'Severe'],
    on: ['りん'],
    kun: ['きびし.い'],
    jlpt: 1,
    quizAnswers: ['Hair Of The Head', 'Set', 'Cold', 'Beach']
  },
  {
    kanjiName: '熙',
    strokes: 15,
    grade: 9,
    freq: null,
    meanings: ['Bright', 'Sunny', 'Prosperous', 'Merry'],
    on: ['き'],
    kun: [
      'たのし.む',
      'ひか.る',
      'ひろ.い',
      'よろこ.ぶ',
      'かわ.く',
      'あきらか',
      'ひろ.める',
      'ひろ.まる'
    ],
    jlpt: 1,
    quizAnswers: ['Heart', 'Principal', 'Rinse', 'Bright']
  },

  {
    kanjiName: '了',
    strokes: 2,
    grade: 8,
    freq: 792,
    meanings: ['Complete', 'Finish'],
    on: ['りょう'],
    kun: [],
    wk_meanings: ['Finish', '^Complete', '^End'],
    jlpt: 2,
    quizAnswers: ['Complete', 'Pierce', 'Drop', 'Snap'],
    similars: [
      {
        kanji: '又',
        meaning: 'or again'
      },
      {
        kanji: '矛',
        meaning: 'halberd'
      },
      {
        kanji: '久',
        meaning: 'long time'
      },
      {
        kanji: '夕',
        meaning: 'evening'
      },
      {
        kanji: '子',
        meaning: 'child'
      },
      {
        kanji: '支',
        meaning: 'branch'
      },
      {
        kanji: '水',
        meaning: 'water'
      },
      {
        kanji: '乏',
        meaning: 'destitution'
      },
      {
        kanji: '友',
        meaning: 'friend'
      },
      {
        kanji: '予',
        meaning: 'beforehand'
      }
    ]
  },
  {
    kanjiName: '丸',
    strokes: 3,
    grade: 2,
    freq: 542,
    meanings: [
      'Round',
      'Full (month)',
      'Perfection',
      '-ship',
      'Pills',
      'Make Round',
      'Roll Up',
      'Curl Up',
      'Seduce',
      'Explain Away'
    ],
    on: ['がん'],
    kun: ['まる', 'まる.める', 'まる.い'],
    wk_meanings: ['Circle', '^Circular', '^Round'],
    jlpt: 2,
    quizAnswers: ['Wrong', 'Tie Up', 'Thing', 'Round'],
    similars: [
      {
        kanji: '勺',
        meaning: 'ladle'
      },
      {
        kanji: '九',
        meaning: 'nine'
      },
      {
        kanji: '夕',
        meaning: 'evening'
      },
      {
        kanji: '凡',
        meaning: 'commonplace'
      },
      {
        kanji: '公',
        meaning: 'public'
      },
      {
        kanji: '仏',
        meaning: 'Buddha'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '犬',
        meaning: 'dog'
      },
      {
        kanji: '丹',
        meaning: 'rust-colored'
      },
      {
        kanji: '不',
        meaning: 'negative'
      }
    ]
  },
  {
    kanjiName: '玉',
    strokes: 5,
    grade: 1,
    freq: 737,
    meanings: ['Jewel', 'Ball'],
    on: ['ぎょく'],
    kun: ['たま', 'たま-', '-だま'],
    wk_meanings: ['Ball'],
    jlpt: 2,
    quizAnswers: ['Fly', 'Jewel', 'Model', 'Admonish'],
    similars: [
      {
        kanji: '寺',
        meaning: 'Buddhist temple'
      },
      {
        kanji: '去',
        meaning: 'gone'
      },
      {
        kanji: '王',
        meaning: 'king'
      },
      {
        kanji: '芸',
        meaning: 'technique'
      },
      {
        kanji: '共',
        meaning: 'together'
      },
      {
        kanji: '芋',
        meaning: 'potato'
      },
      {
        kanji: '宝',
        meaning: 'treasure'
      },
      {
        kanji: '侍',
        meaning: 'waiter'
      },
      {
        kanji: '国',
        meaning: 'country'
      },
      {
        kanji: '三',
        meaning: 'three'
      }
    ]
  },
  {
    kanjiName: '久',
    strokes: 3,
    grade: 5,
    freq: 688,
    meanings: ['Long Time', 'Old Story'],
    on: ['きゅう', 'く'],
    kun: ['ひさ.しい'],
    wk_meanings: ['Long Time'],
    jlpt: 2,
    quizAnswers: ['Decline', 'Be Invigorated', 'Serve', 'Long Time'],
    similars: [
      {
        kanji: '反',
        meaning: 'anti-'
      },
      {
        kanji: '友',
        meaning: 'friend'
      },
      {
        kanji: '及',
        meaning: 'reach out'
      },
      {
        kanji: '八',
        meaning: 'eight'
      },
      {
        kanji: '夕',
        meaning: 'evening'
      },
      {
        kanji: '入',
        meaning: 'enter'
      },
      {
        kanji: '又',
        meaning: 'or again'
      },
      {
        kanji: '人',
        meaning: 'person'
      },
      {
        kanji: '皮',
        meaning: 'pelt'
      },
      {
        kanji: '冬',
        meaning: 'winter'
      }
    ]
  },
  {
    kanjiName: '戸',
    strokes: 4,
    grade: 2,
    freq: 575,
    meanings: ['Door', 'Counter For Houses', 'Door Radical (no. 63)'],
    on: ['こ'],
    kun: ['と'],
    wk_meanings: ['Door'],
    jlpt: 2,
    quizAnswers: ['Door', 'Equal', 'Experience', 'Yang Principle'],
    similars: [
      {
        kanji: '択',
        meaning: 'choose'
      },
      {
        kanji: '戻',
        meaning: 're-'
      },
      {
        kanji: '万',
        meaning: 'ten thousand'
      },
      {
        kanji: '切',
        meaning: 'cut'
      },
      {
        kanji: '肩',
        meaning: 'shoulder'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '所',
        meaning: 'place'
      },
      {
        kanji: '才',
        meaning: 'genius'
      },
      {
        kanji: '房',
        meaning: 'tassel'
      },
      {
        kanji: '尺',
        meaning: 'shaku'
      }
    ]
  },
  {
    kanjiName: '毛',
    strokes: 4,
    grade: 2,
    freq: 1179,
    meanings: ['Fur', 'Hair', 'Feather', 'Down'],
    on: ['もう'],
    kun: ['け'],
    wk_meanings: ['Fur', '^Hair'],
    jlpt: 2,
    quizAnswers: ['All The More', 'Duckling', 'Fur', 'Insert'],
    similars: [
      {
        kanji: '牛',
        meaning: 'cow'
      },
      {
        kanji: '手',
        meaning: 'hand'
      },
      {
        kanji: '午',
        meaning: 'noon'
      },
      {
        kanji: '先',
        meaning: 'before'
      },
      {
        kanji: '失',
        meaning: 'lose'
      },
      {
        kanji: '半',
        meaning: 'half'
      },
      {
        kanji: '生',
        meaning: 'life'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '包',
        meaning: 'wrap'
      },
      {
        kanji: '尾',
        meaning: 'tail'
      }
    ]
  },
  {
    kanjiName: '央',
    strokes: 5,
    grade: 3,
    freq: 582,
    meanings: ['Center', 'Middle'],
    on: ['おう'],
    kun: [],
    wk_meanings: ['Center', '^Centre'],
    jlpt: 2,
    quizAnswers: ['Dispose', 'Porcelain', 'Center', 'Round'],
    similars: [
      {
        kanji: '文',
        meaning: 'sentence'
      },
      {
        kanji: '英',
        meaning: 'England'
      },
      {
        kanji: '穴',
        meaning: 'hole'
      },
      {
        kanji: '大',
        meaning: 'large'
      },
      {
        kanji: '夫',
        meaning: 'husband'
      },
      {
        kanji: '史',
        meaning: 'history'
      },
      {
        kanji: '天',
        meaning: 'heavens'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '丈',
        meaning: 'length'
      },
      {
        kanji: '六',
        meaning: 'six'
      }
    ]
  },
  {
    kanjiName: '氷',
    strokes: 5,
    grade: 3,
    freq: 1450,
    meanings: ['Icicle', 'Ice', 'Hail', 'Freeze', 'Congeal'],
    on: ['ひょう'],
    kun: ['こおり', 'ひ', 'こお.る'],
    wk_meanings: ['Ice'],
    jlpt: 2,
    quizAnswers: ['Icicle', 'Conditions', 'Praise', 'Meter'],
    similars: [
      {
        kanji: '穴',
        meaning: 'hole'
      },
      {
        kanji: '水',
        meaning: 'water'
      },
      {
        kanji: '史',
        meaning: 'history'
      },
      {
        kanji: '父',
        meaning: 'father'
      },
      {
        kanji: '永',
        meaning: 'eternity'
      },
      {
        kanji: '火',
        meaning: 'fire'
      },
      {
        kanji: '状',
        meaning: 'status quo'
      },
      {
        kanji: '泳',
        meaning: 'swim'
      },
      {
        kanji: '吏',
        meaning: 'officer'
      },
      {
        kanji: '灰',
        meaning: 'ashes'
      }
    ]
  },
  {
    kanjiName: '皮',
    strokes: 5,
    grade: 3,
    freq: 1092,
    meanings: ['Pelt', 'Skin', 'Hide', 'Leather', 'Skin Radical (no. 107)'],
    on: ['ひ'],
    kun: ['かわ'],
    wk_meanings: ['Skin'],
    jlpt: 2,
    quizAnswers: ['Dismantle', 'Town', 'Pelt', 'Souvenir'],
    similars: [
      {
        kanji: '披',
        meaning: 'expose'
      },
      {
        kanji: '波',
        meaning: 'waves'
      },
      {
        kanji: '彼',
        meaning: 'he'
      },
      {
        kanji: '乏',
        meaning: 'destitution'
      },
      {
        kanji: '支',
        meaning: 'branch'
      },
      {
        kanji: '久',
        meaning: 'long time'
      },
      {
        kanji: '廷',
        meaning: 'courts'
      },
      {
        kanji: '仮',
        meaning: 'sham'
      },
      {
        kanji: '肢',
        meaning: 'limb'
      },
      {
        kanji: '破',
        meaning: 'rend'
      }
    ]
  },
  {
    kanjiName: '皿',
    strokes: 5,
    grade: 3,
    freq: 1812,
    meanings: ['Dish', 'A Helping', 'Plate'],
    on: ['べい'],
    kun: ['さら'],
    wk_meanings: ['Plate', '^Dish'],
    jlpt: 2,
    quizAnswers: ['Period', 'Trait', 'Arms', 'Dish'],
    similars: [
      {
        kanji: '血',
        meaning: 'blood'
      },
      {
        kanji: '典',
        meaning: 'code'
      },
      {
        kanji: '且',
        meaning: 'moreover'
      },
      {
        kanji: '止',
        meaning: 'stop'
      },
      {
        kanji: '亜',
        meaning: 'Asia'
      },
      {
        kanji: '盆',
        meaning: 'basin'
      },
      {
        kanji: '叫',
        meaning: 'shout'
      },
      {
        kanji: '企',
        meaning: 'undertake'
      },
      {
        kanji: '益',
        meaning: 'benefit'
      },
      {
        kanji: '吐',
        meaning: 'spit'
      }
    ]
  },
  {
    kanjiName: '竹',
    strokes: 6,
    grade: 1,
    freq: 593,
    meanings: ['Bamboo'],
    on: ['ちく'],
    kun: ['たけ'],
    wk_meanings: ['Bamboo'],
    jlpt: 2,
    quizAnswers: ['Bamboo', 'Learn From', 'Man', 'Clarinet'],
    similars: [
      {
        kanji: '利',
        meaning: 'profit'
      },
      {
        kanji: '何',
        meaning: 'what'
      },
      {
        kanji: '句',
        meaning: 'phrase'
      },
      {
        kanji: '占',
        meaning: 'fortune-telling'
      },
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '奇',
        meaning: 'strange'
      },
      {
        kanji: '仲',
        meaning: 'go-between'
      },
      {
        kanji: '刈',
        meaning: 'reap'
      },
      {
        kanji: '可',
        meaning: 'can'
      },
      {
        kanji: '化',
        meaning: 'change'
      }
    ]
  },
  {
    kanjiName: '糸',
    strokes: 6,
    grade: 1,
    freq: 1488,
    meanings: ['Thread'],
    on: ['し'],
    kun: ['いと'],
    wk_meanings: ['Thread'],
    jlpt: 2,
    quizAnswers: ['Thread', 'Black', 'Morning', 'Kindling'],
    similars: [
      {
        kanji: '系',
        meaning: 'lineage'
      },
      {
        kanji: '幼',
        meaning: 'infancy'
      },
      {
        kanji: '級',
        meaning: 'class'
      },
      {
        kanji: '約',
        meaning: 'promise'
      },
      {
        kanji: '係',
        meaning: 'person in charge'
      },
      {
        kanji: '紀',
        meaning: 'chronicle'
      },
      {
        kanji: '紅',
        meaning: 'crimson'
      },
      {
        kanji: '糾',
        meaning: 'twist'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      }
    ]
  },
  {
    kanjiName: '虫',
    strokes: 6,
    grade: 1,
    freq: 1351,
    meanings: ['Insect', 'Bug', 'Temper'],
    on: ['ちゅう', 'き'],
    kun: ['むし'],
    wk_meanings: ['Insect', '^Bug'],
    jlpt: 2,
    quizAnswers: ['Comet', 'Community', 'Wise', 'Insect'],
    similars: [
      {
        kanji: '叫',
        meaning: 'shout'
      },
      {
        kanji: '風',
        meaning: 'wind'
      },
      {
        kanji: '独',
        meaning: 'single'
      },
      {
        kanji: '蚕',
        meaning: 'silkworm'
      },
      {
        kanji: '蚊',
        meaning: 'mosquito'
      },
      {
        kanji: '呈',
        meaning: 'display'
      },
      {
        kanji: '亜',
        meaning: 'Asia'
      },
      {
        kanji: '足',
        meaning: 'leg'
      },
      {
        kanji: '強',
        meaning: 'strong'
      },
      {
        kanji: '蛇',
        meaning: 'snake'
      }
    ]
  },
  {
    kanjiName: '村',
    strokes: 7,
    grade: 1,
    freq: 253,
    meanings: ['Village', 'Town'],
    on: ['そん'],
    kun: ['むら'],
    wk_meanings: ['Village'],
    jlpt: 2,
    quizAnswers: ['Village', 'Counter For Haiku', 'Give Birth', 'Powerful'],
    similars: [
      {
        kanji: '材',
        meaning: 'lumber'
      },
      {
        kanji: '杯',
        meaning: 'counter for cupfuls'
      },
      {
        kanji: '朽',
        meaning: 'decay'
      },
      {
        kanji: '対',
        meaning: 'vis-a-vis'
      },
      {
        kanji: '朴',
        meaning: 'crude'
      },
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '府',
        meaning: 'borough'
      },
      {
        kanji: '附',
        meaning: 'affixed'
      },
      {
        kanji: '板',
        meaning: 'plank'
      },
      {
        kanji: '枢',
        meaning: 'hinge'
      }
    ]
  },
  {
    kanjiName: '貝',
    strokes: 7,
    grade: 1,
    freq: 1787,
    meanings: ['Shellfish'],
    on: ['ばい'],
    kun: ['かい'],
    wk_meanings: ['Shellfish', '^Shell'],
    jlpt: 2,
    quizAnswers: ['Mark', 'Varnish', 'Become Attached To', 'Shellfish'],
    similars: [
      {
        kanji: '見',
        meaning: 'see'
      },
      {
        kanji: '貞',
        meaning: 'upright'
      },
      {
        kanji: '県',
        meaning: 'prefecture'
      },
      {
        kanji: '則',
        meaning: 'rule'
      },
      {
        kanji: '負',
        meaning: 'defeat'
      },
      {
        kanji: '具',
        meaning: 'tool'
      },
      {
        kanji: '目',
        meaning: 'eye'
      },
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '財',
        meaning: 'property'
      }
    ]
  },
  {
    kanjiName: '池',
    strokes: 6,
    grade: 2,
    freq: 827,
    meanings: ['Pond', 'Cistern', 'Pool', 'Reservoir'],
    on: ['ち'],
    kun: ['いけ'],
    wk_meanings: ['Pond'],
    jlpt: 2,
    quizAnswers: ['Pond', 'Positive', 'Strike', 'Left-side Radical'],
    similars: [
      {
        kanji: '汁',
        meaning: 'soup'
      },
      {
        kanji: '沈',
        meaning: 'sink'
      },
      {
        kanji: '泊',
        meaning: 'overnight stay'
      },
      {
        kanji: '治',
        meaning: 'reign'
      },
      {
        kanji: '泥',
        meaning: 'mud'
      },
      {
        kanji: '沿',
        meaning: 'run alongside'
      },
      {
        kanji: '汗',
        meaning: 'sweat'
      },
      {
        kanji: '斗',
        meaning: 'Big Dipper'
      },
      {
        kanji: '江',
        meaning: 'creek'
      },
      {
        kanji: '他',
        meaning: 'other'
      }
    ]
  },
  {
    kanjiName: '羽',
    strokes: 6,
    grade: 2,
    freq: 748,
    meanings: ['Feathers', 'Counter For Birds, Rabbits'],
    on: ['う'],
    kun: ['は', 'わ', 'はね'],
    wk_meanings: ['Feather', '^Feathers', '^Wing', '^Wings'],
    jlpt: 2,
    quizAnswers: ['Cape', 'Help', 'Feathers', 'Chief'],
    similars: [
      {
        kanji: '扇',
        meaning: 'fan'
      },
      {
        kanji: '翁',
        meaning: 'venerable old man'
      },
      {
        kanji: '翌',
        meaning: 'the following'
      },
      {
        kanji: '習',
        meaning: 'learn'
      },
      {
        kanji: '均',
        meaning: 'level'
      },
      {
        kanji: '卵',
        meaning: 'egg'
      },
      {
        kanji: '弱',
        meaning: 'weak'
      },
      {
        kanji: '泌',
        meaning: 'ooze'
      },
      {
        kanji: '治',
        meaning: 'reign'
      },
      {
        kanji: '泡',
        meaning: 'bubbles'
      }
    ]
  },
  {
    kanjiName: '角',
    strokes: 7,
    grade: 2,
    freq: 805,
    meanings: ['Angle', 'Corner', 'Square', 'Horn', 'Antlers'],
    on: ['かく'],
    kun: ['かど', 'つの'],
    wk_meanings: ['Angle', '^Corner'],
    jlpt: 2,
    quizAnswers: ['Woof', 'Seek', 'Sphere', 'Angle'],
    similars: [
      {
        kanji: '色',
        meaning: 'color'
      },
      {
        kanji: '有',
        meaning: 'possess'
      },
      {
        kanji: '月',
        meaning: 'month'
      },
      {
        kanji: '伯',
        meaning: 'chief'
      },
      {
        kanji: '解',
        meaning: 'unravel'
      },
      {
        kanji: '触',
        meaning: 'contact'
      },
      {
        kanji: '留',
        meaning: 'detain'
      },
      {
        kanji: '届',
        meaning: 'deliver'
      },
      {
        kanji: '租',
        meaning: 'tariff'
      },
      {
        kanji: '免',
        meaning: 'excuse'
      }
    ]
  },
  {
    kanjiName: '谷',
    strokes: 7,
    grade: 2,
    freq: 508,
    meanings: ['Valley'],
    on: ['こく'],
    kun: ['たに', 'きわ.まる'],
    wk_meanings: ['Valley'],
    jlpt: 2,
    quizAnswers: ['Valley', 'Cut', 'Isolate', 'Cream'],
    similars: [
      {
        kanji: '俗',
        meaning: 'vulgar'
      },
      {
        kanji: '沿',
        meaning: 'run alongside'
      },
      {
        kanji: '各',
        meaning: 'each'
      },
      {
        kanji: '后',
        meaning: 'empress'
      },
      {
        kanji: '浴',
        meaning: 'bathe'
      },
      {
        kanji: '容',
        meaning: 'contain'
      },
      {
        kanji: '客',
        meaning: 'guest'
      },
      {
        kanji: '船',
        meaning: 'ship'
      },
      {
        kanji: '尚',
        meaning: 'esteem'
      },
      {
        kanji: '和',
        meaning: 'harmony'
      }
    ]
  },
  {
    kanjiName: '麦',
    strokes: 7,
    grade: 2,
    freq: 1615,
    meanings: ['Barley', 'Wheat'],
    on: ['ばく'],
    kun: ['むぎ'],
    wk_meanings: ['Wheat'],
    jlpt: 2,
    quizAnswers: ['See', 'Weeding Out', 'Barley', 'Be Moderate'],
    similars: [
      {
        kanji: '坂',
        meaning: 'slope'
      },
      {
        kanji: '表',
        meaning: 'surface'
      },
      {
        kanji: '抜',
        meaning: 'slip out'
      },
      {
        kanji: '版',
        meaning: 'printing block'
      },
      {
        kanji: '邪',
        meaning: 'wicked'
      },
      {
        kanji: '板',
        meaning: 'plank'
      },
      {
        kanji: '俵',
        meaning: 'bag'
      },
      {
        kanji: '矢',
        meaning: 'dart'
      },
      {
        kanji: '玉',
        meaning: 'jewel'
      },
      {
        kanji: '未',
        meaning: 'un-'
      }
    ]
  },
  {
    kanjiName: '林',
    strokes: 8,
    grade: 1,
    freq: 656,
    meanings: ['Grove', 'Forest'],
    on: ['りん'],
    kun: ['はやし'],
    wk_meanings: ['Forest', '^Woods'],
    jlpt: 2,
    quizAnswers: ['Frame', 'Stimulate', 'Grove', 'Guarantee'],
    similars: [
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '柄',
        meaning: 'design'
      },
      {
        kanji: '材',
        meaning: 'lumber'
      },
      {
        kanji: '板',
        meaning: 'plank'
      },
      {
        kanji: '来',
        meaning: 'come'
      },
      {
        kanji: '枚',
        meaning: 'sheet of...'
      },
      {
        kanji: '枝',
        meaning: 'bough'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      }
    ]
  },
  {
    kanjiName: '州',
    strokes: 6,
    grade: 3,
    freq: 386,
    meanings: ['State', 'Province'],
    on: ['しゅう', 'す'],
    kun: ['す'],
    wk_meanings: ['State', '^Province', '^County'],
    jlpt: 2,
    quizAnswers: ['Time', 'Samurai', 'Sit', 'State'],
    similars: [
      {
        kanji: '帝',
        meaning: 'sovereign'
      },
      {
        kanji: '川',
        meaning: 'stream'
      },
      {
        kanji: '必',
        meaning: 'invariably'
      },
      {
        kanji: '斥',
        meaning: 'reject'
      },
      {
        kanji: '料',
        meaning: 'fee'
      },
      {
        kanji: '斗',
        meaning: 'Big Dipper'
      },
      {
        kanji: '半',
        meaning: 'half'
      },
      {
        kanji: '外',
        meaning: 'outside'
      },
      {
        kanji: '不',
        meaning: 'negative'
      },
      {
        kanji: '礼',
        meaning: 'salute'
      }
    ]
  },
  {
    kanjiName: '血',
    strokes: 6,
    grade: 3,
    freq: 832,
    meanings: ['Blood'],
    on: ['けつ'],
    kun: ['ち'],
    wk_meanings: ['Blood'],
    jlpt: 2,
    quizAnswers: ['Oneself', 'Ease', 'Melting', 'Blood'],
    similars: [
      {
        kanji: '皿',
        meaning: 'dish'
      },
      {
        kanji: '盆',
        meaning: 'basin'
      },
      {
        kanji: '益',
        meaning: 'benefit'
      },
      {
        kanji: '亜',
        meaning: 'Asia'
      },
      {
        kanji: '猛',
        meaning: 'fierce'
      },
      {
        kanji: '盛',
        meaning: 'boom'
      },
      {
        kanji: '盗',
        meaning: 'steal'
      },
      {
        kanji: '全',
        meaning: 'whole'
      },
      {
        kanji: '佳',
        meaning: 'excellent'
      },
      {
        kanji: '供',
        meaning: 'submit'
      }
    ]
  },
  {
    kanjiName: '星',
    strokes: 9,
    grade: 2,
    freq: 844,
    meanings: ['Star', 'Spot', 'Dot', 'Mark'],
    on: ['せい', 'しょう'],
    kun: ['ほし', '-ぼし'],
    wk_meanings: ['Star'],
    jlpt: 2,
    quizAnswers: ['Pass Through', 'Star', 'Sudden', 'Ten'],
    similars: [
      {
        kanji: '皇',
        meaning: 'emperor'
      },
      {
        kanji: '里',
        meaning: 'ri'
      },
      {
        kanji: '時',
        meaning: 'time'
      },
      {
        kanji: '睡',
        meaning: 'drowsy'
      },
      {
        kanji: '昇',
        meaning: 'rise up'
      },
      {
        kanji: '昨',
        meaning: 'yesterday'
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '暁',
        meaning: 'daybreak'
      },
      {
        kanji: '塁',
        meaning: 'bases'
      }
    ]
  },
  {
    kanjiName: '札',
    strokes: 5,
    grade: 4,
    freq: 921,
    meanings: ['Tag', 'Paper Money', 'Counter For Bonds', 'Placard', 'Bid'],
    on: ['さつ'],
    kun: ['ふだ'],
    wk_meanings: ['Bill', '^Tag', '^Label', '^Note'],
    jlpt: 2,
    quizAnswers: ['State', 'Vat', 'Tag', 'Punishment'],
    similars: [
      {
        kanji: '朽',
        meaning: 'decay'
      },
      {
        kanji: '朴',
        meaning: 'crude'
      },
      {
        kanji: '机',
        meaning: 'desk'
      },
      {
        kanji: '区',
        meaning: 'ward'
      },
      {
        kanji: '元',
        meaning: 'beginning'
      },
      {
        kanji: '木',
        meaning: 'tree'
      },
      {
        kanji: '本',
        meaning: 'book'
      },
      {
        kanji: '化',
        meaning: 'change'
      },
      {
        kanji: '丙',
        meaning: 'third class'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      }
    ]
  },
  {
    kanjiName: '辺',
    strokes: 5,
    grade: 4,
    freq: 428,
    meanings: ['Environs', 'Boundary', 'Border', 'Vicinity'],
    on: ['へん'],
    kun: ['あた.り', 'ほと.り', '-べ'],
    wk_meanings: ['Area'],
    jlpt: 2,
    quizAnswers: ['Rejoice', 'Environs', 'Point', 'Distant'],
    similars: [
      {
        kanji: '込',
        meaning: 'crowded'
      },
      {
        kanji: '刃',
        meaning: 'blade'
      },
      {
        kanji: '近',
        meaning: 'near'
      },
      {
        kanji: '迎',
        meaning: 'welcome'
      },
      {
        kanji: '返',
        meaning: 'return'
      },
      {
        kanji: '巡',
        meaning: 'patrol'
      },
      {
        kanji: '迭',
        meaning: 'transfer'
      },
      {
        kanji: '述',
        meaning: 'mention'
      },
      {
        kanji: '迅',
        meaning: 'swift'
      },
      {
        kanji: '退',
        meaning: 'retreat'
      }
    ]
  },
  {
    kanjiName: '弱',
    strokes: 10,
    grade: 2,
    freq: 958,
    meanings: ['Weak', 'Frail'],
    on: ['じゃく'],
    kun: ['よわ.い', 'よわ.る', 'よわ.まる', 'よわ.める'],
    wk_meanings: ['Weak'],
    jlpt: 2,
    quizAnswers: ['Africa', 'Make', 'Weak', 'Mechanism'],
    similars: [
      {
        kanji: '沸',
        meaning: 'seethe'
      },
      {
        kanji: '汚',
        meaning: 'dirty'
      },
      {
        kanji: '羽',
        meaning: 'feathers'
      },
      {
        kanji: '弦',
        meaning: 'bowstring'
      },
      {
        kanji: '疾',
        meaning: 'rapidly'
      },
      {
        kanji: '弧',
        meaning: 'arc'
      },
      {
        kanji: '決',
        meaning: 'decide'
      },
      {
        kanji: '忌',
        meaning: 'mourning'
      },
      {
        kanji: '弟',
        meaning: 'younger brother'
      },
      {
        kanji: '求',
        meaning: 'request'
      }
    ]
  },
  {
    kanjiName: '黄',
    strokes: 11,
    grade: 2,
    freq: 1240,
    meanings: ['Yellow'],
    on: ['こう', 'おう'],
    kun: ['き', 'こ-'],
    wk_meanings: ['Yellow'],
    jlpt: 2,
    quizAnswers: ['Cook', 'Elude', 'Principle', 'Yellow'],
    similars: [
      {
        kanji: '貢',
        meaning: 'tribute'
      },
      {
        kanji: '責',
        meaning: 'blame'
      },
      {
        kanji: '項',
        meaning: 'paragraph'
      },
      {
        kanji: '横',
        meaning: 'sideways'
      },
      {
        kanji: '昔',
        meaning: 'once upon a time'
      },
      {
        kanji: '苗',
        meaning: 'seedling'
      },
      {
        kanji: '貫',
        meaning: 'pierce'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '塊',
        meaning: 'clod'
      },
      {
        kanji: '貴',
        meaning: 'precious'
      }
    ]
  },
  {
    kanjiName: '森',
    strokes: 12,
    grade: 1,
    freq: 609,
    meanings: ['Forest', 'Woods'],
    on: ['しん'],
    kun: ['もり'],
    wk_meanings: ['Forest', '^Woods'],
    jlpt: 2,
    quizAnswers: ['Cleverness', 'Evade', 'Institution', 'Forest'],
    similars: [
      {
        kanji: '禁',
        meaning: 'prohibition'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '株',
        meaning: 'stocks'
      },
      {
        kanji: '林',
        meaning: 'grove'
      },
      {
        kanji: '麻',
        meaning: 'hemp'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      },
      {
        kanji: '奔',
        meaning: 'run'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '奥',
        meaning: 'heart'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      }
    ]
  },
  {
    kanjiName: '雲',
    strokes: 12,
    grade: 2,
    freq: 1256,
    meanings: ['Cloud'],
    on: ['うん'],
    kun: ['くも', '-ぐも'],
    wk_meanings: ['Cloud'],
    jlpt: 2,
    quizAnswers: ['Sever', 'Record', 'Cloud', 'Meet'],
    similars: [
      {
        kanji: '曇',
        meaning: 'cloudy weather'
      },
      {
        kanji: '霊',
        meaning: 'spirits'
      },
      {
        kanji: '雰',
        meaning: 'atmosphere'
      },
      {
        kanji: '雪',
        meaning: 'snow'
      },
      {
        kanji: '震',
        meaning: 'quake'
      },
      {
        kanji: '需',
        meaning: 'demand'
      },
      {
        kanji: '電',
        meaning: 'electricity'
      },
      {
        kanji: '零',
        meaning: 'zero'
      },
      {
        kanji: '雷',
        meaning: 'thunder'
      },
      {
        kanji: '霜',
        meaning: 'frost'
      }
    ]
  },
  {
    kanjiName: '県',
    strokes: 9,
    grade: 3,
    freq: 140,
    meanings: ['Prefecture'],
    on: ['けん'],
    kun: ['か.ける'],
    wk_meanings: ['Prefecture'],
    jlpt: 2,
    quizAnswers: ['Prefecture', 'Queer', 'Promote', 'Everything'],
    similars: [
      {
        kanji: '貝',
        meaning: 'shellfish'
      },
      {
        kanji: '見',
        meaning: 'see'
      },
      {
        kanji: '具',
        meaning: 'tool'
      },
      {
        kanji: '眺',
        meaning: 'stare'
      },
      {
        kanji: '息',
        meaning: 'breath'
      },
      {
        kanji: '是',
        meaning: 'just so'
      },
      {
        kanji: '易',
        meaning: 'easy'
      },
      {
        kanji: '映',
        meaning: 'reflect'
      },
      {
        kanji: '臭',
        meaning: 'stinking'
      },
      {
        kanji: '界',
        meaning: 'world'
      }
    ]
  },
  {
    kanjiName: '軽',
    strokes: 12,
    grade: 3,
    freq: 790,
    meanings: ['Lightly', 'Trifling', 'Unimportant'],
    on: ['けい', 'きょう', 'きん'],
    kun: ['かる.い', 'かろ.やか', 'かろ.んじる'],
    wk_meanings: ['Lightweight', '^Light', '^Light Weight'],
    jlpt: 2,
    quizAnswers: ['Regularity', 'Lightly', 'Selfish', 'Rank'],
    similars: [
      {
        kanji: '幹',
        meaning: 'tree trunk'
      },
      {
        kanji: '墓',
        meaning: 'grave'
      },
      {
        kanji: '撃',
        meaning: 'beat'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '基',
        meaning: 'fundamentals'
      },
      {
        kanji: '転',
        meaning: 'revolve'
      },
      {
        kanji: '輪',
        meaning: 'wheel'
      },
      {
        kanji: '轄',
        meaning: 'control'
      },
      {
        kanji: '連',
        meaning: 'take along'
      },
      {
        kanji: '軸',
        meaning: 'axis'
      }
    ]
  },
  {
    kanjiName: '農',
    strokes: 13,
    grade: 3,
    freq: 385,
    meanings: ['Agriculture', 'Farmers'],
    on: ['のう'],
    kun: [],
    wk_meanings: ['Farming', '^Agriculture'],
    jlpt: 2,
    quizAnswers: ['Item', 'Agriculture', 'Shop', 'Exist'],
    similars: [
      {
        kanji: '濃',
        meaning: 'concentrated'
      },
      {
        kanji: '豊',
        meaning: 'bountiful'
      },
      {
        kanji: '畔',
        meaning: 'paddy ridge'
      },
      {
        kanji: '欺',
        meaning: 'deceit'
      },
      {
        kanji: '異',
        meaning: 'uncommon'
      },
      {
        kanji: '関',
        meaning: 'connection'
      },
      {
        kanji: '僕',
        meaning: 'me'
      },
      {
        kanji: '醸',
        meaning: 'brew'
      },
      {
        kanji: '振',
        meaning: 'shake'
      },
      {
        kanji: '映',
        meaning: 'reflect'
      }
    ]
  },
  {
    kanjiName: '鉄',
    strokes: 13,
    grade: 3,
    freq: 672,
    meanings: ['Iron'],
    on: ['てつ'],
    kun: ['くろがね'],
    wk_meanings: ['Iron'],
    jlpt: 2,
    quizAnswers: ['Entrust', 'Iron', '7-9am', 'Expert'],
    similars: [
      {
        kanji: '銑',
        meaning: 'pig iron'
      },
      {
        kanji: '銭',
        meaning: 'coin'
      },
      {
        kanji: '鉢',
        meaning: 'bowl'
      },
      {
        kanji: '鋳',
        meaning: 'casting'
      },
      {
        kanji: '銀',
        meaning: 'silver'
      },
      {
        kanji: '銃',
        meaning: 'gun'
      },
      {
        kanji: '針',
        meaning: 'needle'
      },
      {
        kanji: '鈴',
        meaning: 'small bell'
      },
      {
        kanji: '鉛',
        meaning: 'lead'
      },
      {
        kanji: '釣',
        meaning: 'angling'
      }
    ]
  },
  {
    kanjiName: '算',
    strokes: 14,
    grade: 2,
    freq: 361,
    meanings: ['Calculate', 'Divining', 'Number', 'Abacus', 'Probability'],
    on: ['さん'],
    kun: ['そろ'],
    wk_meanings: ['Calculate', '^Calculation'],
    jlpt: 2,
    quizAnswers: ['Finger', 'Beginning', 'Bride', 'Calculate'],
    similars: [
      {
        kanji: '笛',
        meaning: 'flute'
      },
      {
        kanji: '範',
        meaning: 'pattern'
      },
      {
        kanji: '節',
        meaning: 'node'
      },
      {
        kanji: '筋',
        meaning: 'muscle'
      },
      {
        kanji: '簡',
        meaning: 'simplicity'
      },
      {
        kanji: '鼻',
        meaning: 'nose'
      },
      {
        kanji: '臭',
        meaning: 'stinking'
      },
      {
        kanji: '箇',
        meaning: 'counter for articles'
      },
      {
        kanji: '頒',
        meaning: 'distribute'
      },
      {
        kanji: '筆',
        meaning: 'writing brush'
      }
    ]
  },
  {
    kanjiName: '線',
    strokes: 15,
    grade: 2,
    freq: 382,
    meanings: ['Line', 'Track'],
    on: ['せん'],
    kun: ['すじ'],
    wk_meanings: ['Line'],
    jlpt: 2,
    quizAnswers: ['Irksome', 'Undergo', 'Line', 'Secret'],
    similars: [
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      },
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '縛',
        meaning: 'truss'
      },
      {
        kanji: '縦',
        meaning: 'vertical'
      },
      {
        kanji: '織',
        meaning: 'weave'
      },
      {
        kanji: '複',
        meaning: 'duplicate'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      },
      {
        kanji: '泉',
        meaning: 'spring'
      },
      {
        kanji: '裸',
        meaning: 'naked'
      }
    ]
  },
  {
    kanjiName: '仲',
    strokes: 6,
    grade: 4,
    freq: 919,
    meanings: ['Go-between', 'Relationship'],
    on: ['ちゅう'],
    kun: ['なか'],
    wk_meanings: ['Relationship'],
    jlpt: 2,
    quizAnswers: ['Go-between', 'Podium', 'Guest', 'Fruit'],
    similars: [
      {
        kanji: '何',
        meaning: 'what'
      },
      {
        kanji: '中',
        meaning: 'in'
      },
      {
        kanji: '句',
        meaning: 'phrase'
      },
      {
        kanji: '右',
        meaning: 'right'
      },
      {
        kanji: '保',
        meaning: 'protect'
      },
      {
        kanji: '向',
        meaning: 'yonder'
      },
      {
        kanji: '命',
        meaning: 'fate'
      },
      {
        kanji: '使',
        meaning: 'use'
      },
      {
        kanji: '沖',
        meaning: 'open sea'
      },
      {
        kanji: '伸',
        meaning: 'expand'
      }
    ]
  },
  {
    kanjiName: '低',
    strokes: 7,
    grade: 4,
    freq: 435,
    meanings: ['Lower', 'Short', 'Humble'],
    on: ['てい'],
    kun: ['ひく.い', 'ひく.める', 'ひく.まる'],
    wk_meanings: ['Low'],
    jlpt: 2,
    quizAnswers: ['Kindness', 'Lower', 'Counter For Haiku', 'Distant'],
    similars: [
      {
        kanji: '任',
        meaning: 'responsibility'
      },
      {
        kanji: '抵',
        meaning: 'resist'
      },
      {
        kanji: '底',
        meaning: 'bottom'
      },
      {
        kanji: '仁',
        meaning: 'humanity'
      },
      {
        kanji: '氏',
        meaning: 'family name'
      },
      {
        kanji: '佐',
        meaning: 'assistant'
      },
      {
        kanji: '仕',
        meaning: 'attend'
      },
      {
        kanji: '仰',
        meaning: 'face-up'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '代',
        meaning: 'substitute'
      }
    ]
  },
  {
    kanjiName: '岸',
    strokes: 8,
    grade: 3,
    freq: 556,
    meanings: ['Beach'],
    on: ['がん'],
    kun: ['きし'],
    wk_meanings: ['Coast', '^Shore'],
    jlpt: 2,
    quizAnswers: ['Duty', 'Inhale', 'Beach', 'Instead'],
    similars: [
      {
        kanji: '峠',
        meaning: 'mountain peak'
      },
      {
        kanji: '峡',
        meaning: 'gorge'
      },
      {
        kanji: '崎',
        meaning: 'promontory'
      },
      {
        kanji: '伴',
        meaning: 'consort'
      },
      {
        kanji: '件',
        meaning: 'affair'
      },
      {
        kanji: '辛',
        meaning: 'spicy'
      },
      {
        kanji: '岩',
        meaning: 'boulder'
      },
      {
        kanji: '宰',
        meaning: 'superintend'
      },
      {
        kanji: '峰',
        meaning: 'summit'
      },
      {
        kanji: '炭',
        meaning: 'charcoal'
      }
    ]
  },
  {
    kanjiName: '波',
    strokes: 8,
    grade: 3,
    freq: 740,
    meanings: ['Waves', 'Billows', 'Poland'],
    on: ['は'],
    kun: ['なみ'],
    wk_meanings: ['Wave'],
    jlpt: 2,
    quizAnswers: ['Corps', 'Waves', 'Injustice', 'Generally'],
    similars: [
      {
        kanji: '没',
        meaning: 'drown'
      },
      {
        kanji: '披',
        meaning: 'expose'
      },
      {
        kanji: '婆',
        meaning: 'old woman'
      },
      {
        kanji: '疲',
        meaning: 'exhausted'
      },
      {
        kanji: '皮',
        meaning: 'pelt'
      },
      {
        kanji: '彼',
        meaning: 'he'
      },
      {
        kanji: '被',
        meaning: 'incur'
      },
      {
        kanji: '渡',
        meaning: 'transit'
      },
      {
        kanji: '染',
        meaning: 'dye'
      },
      {
        kanji: '洗',
        meaning: 'wash'
      }
    ]
  },
  {
    kanjiName: '拾',
    strokes: 9,
    grade: 3,
    freq: 1479,
    meanings: ['Pick Up', 'Gather', 'Find', 'Go On Foot', 'Ten'],
    on: ['しゅう', 'じゅう'],
    kun: ['ひろ.う'],
    wk_meanings: ['Pick Up'],
    jlpt: 2,
    quizAnswers: ['Pick Up', 'Try', 'Handle', 'Breed'],
    similars: [
      {
        kanji: '捨',
        meaning: 'discard'
      },
      {
        kanji: '哲',
        meaning: 'philosophy'
      },
      {
        kanji: '括',
        meaning: 'fasten'
      },
      {
        kanji: '拘',
        meaning: 'arrest'
      },
      {
        kanji: '搭',
        meaning: 'board'
      },
      {
        kanji: '若',
        meaning: 'young'
      },
      {
        kanji: '招',
        meaning: 'beckon'
      },
      {
        kanji: '折',
        meaning: 'fold'
      },
      {
        kanji: '拓',
        meaning: 'clear (the land)'
      },
      {
        kanji: '沿',
        meaning: 'run alongside'
      }
    ]
  },
  {
    kanjiName: '秒',
    strokes: 9,
    grade: 3,
    freq: 1015,
    meanings: ['Second (1/60 Minute)'],
    on: ['びょう'],
    kun: [],
    wk_meanings: ['Second'],
    jlpt: 2,
    quizAnswers: ['Destroy', 'Plane', 'Second (1/60 Minute)', 'Mind'],
    similars: [
      {
        kanji: '称',
        meaning: 'appellation'
      },
      {
        kanji: '秘',
        meaning: 'secret'
      },
      {
        kanji: '私',
        meaning: 'private'
      },
      {
        kanji: '秋',
        meaning: 'autumn'
      },
      {
        kanji: '杉',
        meaning: 'cedar'
      },
      {
        kanji: '移',
        meaning: 'shift'
      },
      {
        kanji: '粒',
        meaning: 'grains'
      },
      {
        kanji: '校',
        meaning: 'exam'
      },
      {
        kanji: '粉',
        meaning: 'flour'
      },
      {
        kanji: '秩',
        meaning: 'regularity'
      }
    ]
  },
  {
    kanjiName: '競',
    strokes: 20,
    grade: 4,
    freq: 610,
    meanings: ['Emulate', 'Compete With', 'Bid', 'Sell At Auction', 'Bout', 'Contest', 'Race'],
    on: ['きょう', 'けい'],
    kun: ['きそ.う', 'せ.る', 'くら.べる'],
    wk_meanings: ['Compete'],
    jlpt: 2,
    quizAnswers: ['Phrase', 'Yard', 'Emulate', 'The Others'],
    similars: [
      {
        kanji: '説',
        meaning: 'opinion'
      },
      {
        kanji: '喜',
        meaning: 'rejoice'
      },
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '諾',
        meaning: 'consent'
      },
      {
        kanji: '倍',
        meaning: 'double'
      },
      {
        kanji: '読',
        meaning: 'read'
      },
      {
        kanji: '調',
        meaning: 'tune'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      },
      {
        kanji: '話',
        meaning: 'tale'
      },
      {
        kanji: '磨',
        meaning: 'grind'
      }
    ]
  },
  {
    kanjiName: '令',
    strokes: 5,
    grade: 4,
    freq: 804,
    meanings: ['Orders', 'Ancient Laws', 'Command', 'Decree'],
    on: ['れい'],
    kun: [],
    wk_meanings: ['Orders'],
    jlpt: 2,
    quizAnswers: ['Defeat', 'Degree', 'Orders', 'Expression'],
    similars: [
      {
        kanji: '冷',
        meaning: 'cool'
      },
      {
        kanji: '込',
        meaning: 'crowded'
      },
      {
        kanji: '返',
        meaning: 'return'
      },
      {
        kanji: '太',
        meaning: 'plump'
      },
      {
        kanji: '入',
        meaning: 'enter'
      },
      {
        kanji: '勺',
        meaning: 'ladle'
      },
      {
        kanji: '八',
        meaning: 'eight'
      },
      {
        kanji: '凡',
        meaning: 'commonplace'
      },
      {
        kanji: '分',
        meaning: 'part'
      },
      {
        kanji: '公',
        meaning: 'public'
      }
    ]
  },
  {
    kanjiName: '根',
    strokes: 10,
    grade: 3,
    freq: 620,
    meanings: ['Root', 'Radical', 'Head (pimple)'],
    on: ['こん'],
    kun: ['ね', '-ね'],
    wk_meanings: ['Root'],
    jlpt: 2,
    quizAnswers: ['Benefit', 'Arrive', 'Ship', 'Root'],
    similars: [
      {
        kanji: '限',
        meaning: 'limit'
      },
      {
        kanji: '浪',
        meaning: 'wandering'
      },
      {
        kanji: '恨',
        meaning: 'regret'
      },
      {
        kanji: '更',
        meaning: 'grow late'
      },
      {
        kanji: '娘',
        meaning: 'daughter'
      },
      {
        kanji: '良',
        meaning: 'good'
      },
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '食',
        meaning: 'eat'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '概',
        meaning: 'outline'
      }
    ]
  },
  {
    kanjiName: '倍',
    strokes: 10,
    grade: 3,
    freq: 714,
    meanings: ['Double', 'Twice', 'Times', 'Fold'],
    on: ['ばい'],
    kun: [],
    wk_meanings: ['Double', '^Times', '^Multiply'],
    jlpt: 2,
    quizAnswers: ['Present', 'Room', 'Double', '(kokuji)'],
    similars: [
      {
        kanji: '陪',
        meaning: 'obeisance'
      },
      {
        kanji: '培',
        meaning: 'cultivate'
      },
      {
        kanji: '位',
        meaning: 'rank'
      },
      {
        kanji: '俗',
        meaning: 'vulgar'
      },
      {
        kanji: '信',
        meaning: 'faith'
      },
      {
        kanji: '善',
        meaning: 'virtuous'
      },
      {
        kanji: '嫡',
        meaning: 'legitimate wife'
      },
      {
        kanji: '舎',
        meaning: 'cottage'
      },
      {
        kanji: '告',
        meaning: 'revelation'
      },
      {
        kanji: '知',
        meaning: 'know'
      }
    ]
  },
  {
    kanjiName: '島',
    strokes: 10,
    grade: 3,
    freq: 245,
    meanings: ['Island'],
    on: ['とう'],
    kun: ['しま'],
    wk_meanings: ['Island'],
    jlpt: 2,
    quizAnswers: ['Awe', 'Serene', 'Island', 'Establish'],
    similars: [
      {
        kanji: '偶',
        meaning: 'accidentally'
      },
      {
        kanji: '鳥',
        meaning: 'bird'
      },
      {
        kanji: '皇',
        meaning: 'emperor'
      },
      {
        kanji: '甲',
        meaning: 'armor'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      },
      {
        kanji: '迫',
        meaning: 'urge'
      },
      {
        kanji: '里',
        meaning: 'ri'
      },
      {
        kanji: '自',
        meaning: 'oneself'
      },
      {
        kanji: '白',
        meaning: 'white'
      },
      {
        kanji: '画',
        meaning: 'brush-stroke'
      }
    ]
  },
  {
    kanjiName: '祭',
    strokes: 11,
    grade: 3,
    freq: 1124,
    meanings: ['Ritual', 'Offer Prayers', 'Celebrate', 'Deify', 'Enshrine', 'Worship'],
    on: ['さい'],
    kun: ['まつ.る', 'まつ.り', 'まつり'],
    wk_meanings: ['Festival'],
    jlpt: 2,
    quizAnswers: ['All', 'Face-up', 'Exert', 'Ritual'],
    similars: [
      {
        kanji: '察',
        meaning: 'guess'
      },
      {
        kanji: '際',
        meaning: 'occasion'
      },
      {
        kanji: '擦',
        meaning: 'grate'
      },
      {
        kanji: '除',
        meaning: 'exclude'
      },
      {
        kanji: '余',
        meaning: 'too much'
      },
      {
        kanji: '徐',
        meaning: 'gradually'
      },
      {
        kanji: '条',
        meaning: 'article'
      },
      {
        kanji: '禁',
        meaning: 'prohibition'
      },
      {
        kanji: '殊',
        meaning: 'particularly'
      },
      {
        kanji: '票',
        meaning: 'ballot'
      }
    ]
  },
  {
    kanjiName: '章',
    strokes: 11,
    grade: 3,
    freq: 990,
    meanings: ['Badge', 'Chapter', 'Composition', 'Poem', 'Design'],
    on: ['しょう'],
    kun: [],
    wk_meanings: ['Chapter'],
    jlpt: 2,
    quizAnswers: ['Ancestor', 'Form', 'Parch', 'Badge'],
    similars: [
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '童',
        meaning: 'juvenile'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '彰',
        meaning: 'patent'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '単',
        meaning: 'simple'
      },
      {
        kanji: '宣',
        meaning: 'proclaim'
      },
      {
        kanji: '軍',
        meaning: 'army'
      },
      {
        kanji: '意',
        meaning: 'idea'
      }
    ]
  },
  {
    kanjiName: '童',
    strokes: 12,
    grade: 3,
    freq: 1138,
    meanings: ['Juvenile', 'Child'],
    on: ['どう'],
    kun: ['わらべ'],
    wk_meanings: ['Juvenile'],
    jlpt: 2,
    quizAnswers: ['Good Fortune', 'Persistence', 'Leisure', 'Juvenile'],
    similars: [
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '厘',
        meaning: 'rin'
      },
      {
        kanji: '庫',
        meaning: 'warehouse'
      },
      {
        kanji: '重',
        meaning: 'heavy'
      },
      {
        kanji: '音',
        meaning: 'sound'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      },
      {
        kanji: '種',
        meaning: 'species'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '量',
        meaning: 'quantity'
      },
      {
        kanji: '埋',
        meaning: 'bury'
      }
    ]
  },
  {
    kanjiName: '階',
    strokes: 12,
    grade: 3,
    freq: 513,
    meanings: ['Storey', 'Stair', 'Counter For Storeys Of A Building'],
    on: ['かい'],
    kun: ['きざはし'],
    wk_meanings: ['Floor', '^Story', '^Storey'],
    jlpt: 2,
    quizAnswers: ['Storey', 'Manners', 'Bored', 'Study'],
    similars: [
      {
        kanji: '皆',
        meaning: 'all'
      },
      {
        kanji: '陥',
        meaning: 'collapse'
      },
      {
        kanji: '陛',
        meaning: 'highness'
      },
      {
        kanji: '稲',
        meaning: 'rice plant'
      },
      {
        kanji: '香',
        meaning: 'incense'
      },
      {
        kanji: '伯',
        meaning: 'chief'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '旨',
        meaning: 'delicious'
      },
      {
        kanji: '指',
        meaning: 'finger'
      },
      {
        kanji: '脂',
        meaning: 'fat'
      }
    ]
  },
  {
    kanjiName: '植',
    strokes: 12,
    grade: 3,
    freq: 699,
    meanings: ['Plant'],
    on: ['しょく'],
    kun: ['う.える', 'う.わる'],
    wk_meanings: ['Plant'],
    jlpt: 2,
    quizAnswers: ['Restaurant', 'Counter For Years', 'Plant', 'Contents'],
    similars: [
      {
        kanji: '殖',
        meaning: 'augment'
      },
      {
        kanji: '値',
        meaning: 'price'
      },
      {
        kanji: '模',
        meaning: 'imitation'
      },
      {
        kanji: '積',
        meaning: 'volume'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '循',
        meaning: 'sequential'
      },
      {
        kanji: '盾',
        meaning: 'shield'
      },
      {
        kanji: '直',
        meaning: 'straightaway'
      },
      {
        kanji: '相',
        meaning: 'inter-'
      },
      {
        kanji: '頼',
        meaning: 'trust'
      }
    ]
  },
  {
    kanjiName: '温',
    strokes: 12,
    grade: 3,
    freq: 838,
    meanings: ['Warm'],
    on: ['おん'],
    kun: ['あたた.か', 'あたた.かい', 'あたた.まる', 'あたた.める', 'ぬく'],
    wk_meanings: ['Warm'],
    jlpt: 2,
    quizAnswers: ['Warm', '(kokuji)', 'Soil', 'Ought'],
    similars: [
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '漫',
        meaning: 'cartoon'
      },
      {
        kanji: '潤',
        meaning: 'wet'
      },
      {
        kanji: '湯',
        meaning: 'hot water'
      },
      {
        kanji: '混',
        meaning: 'mix'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      },
      {
        kanji: '盗',
        meaning: 'steal'
      },
      {
        kanji: '測',
        meaning: 'fathom'
      },
      {
        kanji: '慢',
        meaning: 'ridicule'
      },
      {
        kanji: '漸',
        meaning: 'steadily'
      }
    ]
  },
  {
    kanjiName: '湯',
    strokes: 12,
    grade: 3,
    freq: 1356,
    meanings: ['Hot Water', 'Bath', 'Hot Spring'],
    on: ['とう'],
    kun: ['ゆ'],
    wk_meanings: ['Hot Water'],
    jlpt: 2,
    quizAnswers: ['Hospitable', 'Teachings', 'Sword', 'Hot Water'],
    similars: [
      {
        kanji: '揚',
        meaning: 'raise'
      },
      {
        kanji: '渇',
        meaning: 'thirst'
      },
      {
        kanji: '場',
        meaning: 'location'
      },
      {
        kanji: '陽',
        meaning: 'sunshine'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '腸',
        meaning: 'intestines'
      },
      {
        kanji: '湿',
        meaning: 'damp'
      },
      {
        kanji: '掲',
        meaning: 'put up (a notice)'
      },
      {
        kanji: '測',
        meaning: 'fathom'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      }
    ]
  },
  {
    kanjiName: '短',
    strokes: 12,
    grade: 3,
    freq: 689,
    meanings: ['Short', 'Brevity', 'Fault', 'Defect', 'Weak Point'],
    on: ['たん'],
    kun: ['みじか.い'],
    wk_meanings: ['Short'],
    jlpt: 2,
    quizAnswers: ['Wage', 'Short', 'Assent', 'What'],
    similars: [
      {
        kanji: '知',
        meaning: 'know'
      },
      {
        kanji: '痘',
        meaning: 'pox'
      },
      {
        kanji: '奇',
        meaning: 'strange'
      },
      {
        kanji: '託',
        meaning: 'consign'
      },
      {
        kanji: '登',
        meaning: 'ascend'
      },
      {
        kanji: '倹',
        meaning: 'frugal'
      },
      {
        kanji: '税',
        meaning: 'tax'
      },
      {
        kanji: '程',
        meaning: 'extent'
      },
      {
        kanji: '豆',
        meaning: 'beans'
      },
      {
        kanji: '和',
        meaning: 'harmony'
      }
    ]
  },
  {
    kanjiName: '泉',
    strokes: 9,
    grade: 6,
    freq: 1086,
    meanings: ['Spring', 'Fountain'],
    on: ['せん'],
    kun: ['いずみ'],
    wk_meanings: ['Spring', '^Fountain'],
    jlpt: 2,
    quizAnswers: ['Revere', 'Impregnable Position', 'Speak To A Ruler', 'Spring'],
    similars: [
      {
        kanji: '臭',
        meaning: 'stinking'
      },
      {
        kanji: '果',
        meaning: 'fruit'
      },
      {
        kanji: '更',
        meaning: 'grow late'
      },
      {
        kanji: '東',
        meaning: 'east'
      },
      {
        kanji: '巣',
        meaning: 'nest'
      },
      {
        kanji: '原',
        meaning: 'meadow'
      },
      {
        kanji: '夏',
        meaning: 'summer'
      },
      {
        kanji: '線',
        meaning: 'line'
      },
      {
        kanji: '軌',
        meaning: 'rut'
      },
      {
        kanji: '白',
        meaning: 'white'
      }
    ]
  },
  {
    kanjiName: '橋',
    strokes: 16,
    grade: 3,
    freq: 553,
    meanings: ['Bridge'],
    on: ['きょう'],
    kun: ['はし'],
    wk_meanings: ['Bridge'],
    jlpt: 2,
    quizAnswers: ['Aspire To', 'Slowly', 'Care', 'Bridge'],
    similars: [
      {
        kanji: '矯',
        meaning: 'rectify'
      },
      {
        kanji: '稿',
        meaning: 'draft'
      },
      {
        kanji: '高',
        meaning: 'tall'
      },
      {
        kanji: '格',
        meaning: 'status'
      },
      {
        kanji: '常',
        meaning: 'usual'
      },
      {
        kanji: '器',
        meaning: 'utensil'
      },
      {
        kanji: '権',
        meaning: 'authority'
      },
      {
        kanji: '詔',
        meaning: 'imperial edict'
      },
      {
        kanji: '棺',
        meaning: 'coffin'
      },
      {
        kanji: '営',
        meaning: 'camp'
      }
    ]
  },
  {
    kanjiName: '緑',
    strokes: 14,
    grade: 3,
    freq: 1180,
    meanings: ['Green'],
    on: ['りょく', 'ろく'],
    kun: ['みどり'],
    wk_meanings: ['Green'],
    jlpt: 2,
    quizAnswers: ['Green', 'Moreover', 'Braid', 'Consultation'],
    similars: [
      {
        kanji: '縁',
        meaning: 'affinity'
      },
      {
        kanji: '絞',
        meaning: 'strangle'
      },
      {
        kanji: '紋',
        meaning: 'family crest'
      },
      {
        kanji: '統',
        meaning: 'overall'
      },
      {
        kanji: '続',
        meaning: 'continue'
      },
      {
        kanji: '隷',
        meaning: 'slave'
      },
      {
        kanji: '康',
        meaning: 'ease'
      },
      {
        kanji: '練',
        meaning: 'practice'
      },
      {
        kanji: '奨',
        meaning: 'exhort'
      },
      {
        kanji: '紡',
        meaning: 'spinning'
      }
    ]
  },
  {
    kanjiName: '練',
    strokes: 14,
    grade: 3,
    freq: 788,
    meanings: ['Practice', 'Gloss', 'Train', 'Drill', 'Polish', 'Refine'],
    on: ['れん'],
    kun: ['ね.る', 'ね.り'],
    wk_meanings: ['Practice'],
    jlpt: 2,
    quizAnswers: ['Spout', 'Release', 'Practice', 'Hard Up'],
    similars: [
      {
        kanji: '線',
        meaning: 'line'
      },
      {
        kanji: '綿',
        meaning: 'cotton'
      },
      {
        kanji: '紳',
        meaning: 'sire'
      },
      {
        kanji: '棟',
        meaning: 'ridgepole'
      },
      {
        kanji: '紺',
        meaning: 'dark blue'
      },
      {
        kanji: '績',
        meaning: 'exploits'
      },
      {
        kanji: '縛',
        meaning: 'truss'
      },
      {
        kanji: '織',
        meaning: 'weave'
      },
      {
        kanji: '縄',
        meaning: 'straw rope'
      },
      {
        kanji: '細',
        meaning: 'dainty'
      }
    ]
  },
  {
    kanjiName: '億',
    strokes: 15,
    grade: 4,
    freq: 716,
    meanings: ['Hundred Million', '10**8'],
    on: ['おく'],
    kun: [],
    wk_meanings: ['Hundred Million'],
    jlpt: 2,
    quizAnswers: ['Hundred Million', 'For The First Time', 'Thing', 'Clear'],
    similars: [
      {
        kanji: '憶',
        meaning: 'recollection'
      },
      {
        kanji: '意',
        meaning: 'idea'
      },
      {
        kanji: '穂',
        meaning: 'ear'
      },
      {
        kanji: '憩',
        meaning: 'recess'
      },
      {
        kanji: '債',
        meaning: 'bond'
      },
      {
        kanji: '章',
        meaning: 'badge'
      },
      {
        kanji: '障',
        meaning: 'hinder'
      },
      {
        kanji: '煮',
        meaning: 'boil'
      },
      {
        kanji: '想',
        meaning: 'concept'
      },
      {
        kanji: '竜',
        meaning: 'dragon'
      }
    ]
  },
  {
    kanjiName: '課',
    strokes: 15,
    grade: 4,
    freq: 455,
    meanings: [
      'Chapter',
      'Lesson',
      'Section',
      'Department',
      'Division',
      'Counter For Chapters (of A Book)'
    ],
    on: ['か'],
    kun: [],
    wk_meanings: ['Section'],
    jlpt: 2,
    quizAnswers: ['Extinguish', 'Chapter', 'Grey Starling', 'Stanza'],
    similars: [
      {
        kanji: '謀',
        meaning: 'conspire'
      },
      {
        kanji: '謁',
        meaning: 'audience'
      },
      {
        kanji: '裸',
        meaning: 'naked'
      },
      {
        kanji: '誤',
        meaning: 'mistake'
      },
      {
        kanji: '謙',
        meaning: 'self-effacing'
      },
      {
        kanji: '訳',
        meaning: 'translate'
      },
      {
        kanji: '訴',
        meaning: 'accusation'
      },
      {
        kanji: '調',
        meaning: 'tune'
      },
      {
        kanji: '談',
        meaning: 'discuss'
      },
      {
        kanji: '許',
        meaning: 'permit'
      }
    ]
  },
  {
    kanjiName: '賞',
    strokes: 15,
    grade: 4,
    freq: 426,
    meanings: ['Prize', 'Reward', 'Praise'],
    on: ['しょう'],
    kun: ['ほ.める'],
    wk_meanings: ['Prize'],
    jlpt: 2,
    quizAnswers: ['Great', 'Prize', 'Esq.', 'Sad'],
    similars: [
      {
        kanji: '償',
        meaning: 'reparation'
      },
      {
        kanji: '賀',
        meaning: 'congratulations'
      },
      {
        kanji: '額',
        meaning: 'forehead'
      },
      {
        kanji: '韻',
        meaning: 'rhyme'
      },
      {
        kanji: '損',
        meaning: 'damage'
      },
      {
        kanji: '偵',
        meaning: 'spy'
      },
      {
        kanji: '員',
        meaning: 'employee'
      },
      {
        kanji: '親',
        meaning: 'parent'
      },
      {
        kanji: '貨',
        meaning: 'freight'
      },
      {
        kanji: '賓',
        meaning: 'V.I.P.'
      }
    ]
  },
  {
    kanjiName: '輪',
    strokes: 15,
    grade: 4,
    freq: 693,
    meanings: ['Wheel', 'Ring', 'Circle', 'Link', 'Loop', 'Counter For Wheels And Flowers'],
    on: ['りん'],
    kun: ['わ'],
    wk_meanings: ['Wheel', '^Ring', '^Loop'],
    jlpt: 2,
    quizAnswers: ['Wheel', 'Arms & Legs', 'Display', 'Humiliate'],
    similars: [
      {
        kanji: '輸',
        meaning: 'transport'
      },
      {
        kanji: '幹',
        meaning: 'tree trunk'
      },
      {
        kanji: '暫',
        meaning: 'temporarily'
      },
      {
        kanji: '倫',
        meaning: 'ethics'
      },
      {
        kanji: '朝',
        meaning: 'morning'
      },
      {
        kanji: '幕',
        meaning: 'curtain'
      },
      {
        kanji: '軽',
        meaning: 'lightly'
      },
      {
        kanji: '軒',
        meaning: 'flats'
      },
      {
        kanji: '論',
        meaning: 'argument'
      },
      {
        kanji: '軟',
        meaning: 'soft'
      }
    ]
  },
  {
    kanjiName: '像',
    strokes: 14,
    grade: 5,
    freq: 856,
    meanings: ['Statue', 'Picture', 'Image', 'Figure', 'Portrait'],
    on: ['ぞう'],
    kun: [],
    wk_meanings: ['Statue', '^Image'],
    jlpt: 2,
    quizAnswers: ['Reach To', 'Rostrum', 'Statue', 'What?'],
    similars: [
      {
        kanji: '象',
        meaning: 'elephant'
      },
      {
        kanji: '稼',
        meaning: 'earnings'
      },
      {
        kanji: '傷',
        meaning: 'wound'
      },
      {
        kanji: '衡',
        meaning: 'equilibrium'
      },
      {
        kanji: '修',
        meaning: 'discipline'
      },
      {
        kanji: '働',
        meaning: 'work'
      },
      {
        kanji: '復',
        meaning: 'restore'
      },
      {
        kanji: '勉',
        meaning: 'exertion'
    ]