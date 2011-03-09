var hiragana = JSON.parse(
  '{"あ":"a", "い":"i", "う":"u", "え":"e", "お":"o",'+
   '"か":"ka", "き":"ki", "く":"ku", "け":"ke", "こ":"ko",'+

   '"さ":"sa", "し":"shi", "す":"su", "せ":"se", "そ":"so",'+
   '"た":"ta", "ち":"chi", "つ":"tsu", "て":"te", "と":"to",'+

   '"な":"na", "に":"ni", "ぬ":"nu", "ね":"ne", "の":"no",'+
   '"は":"ha", "ひ":"hi", "ふ":"fu", "へ":"he", "ほ":"ho",'+

   '"ま":"ma", "み":"mi", "む":"mu", "め":"me", "も":"mo",'+
   '"や":"ya", "ゆ":"yu", "よ":"yo",'+

   '"ら":"ra", "り":"ri", "る":"ru", "れ":"re", "ろ":"ro",'+
   '"わ":"wa", "を":"o", "ん":"n"}');

var available_words = [
  /* Level 1 */
  ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ',
  'あおい', 'うえ', 'あかい', 'えき', 'いいえ', 'ここ', 'かく', 'いけ', 'おおき', 'きく', 'こえ'],

  /* Level 2 */
  ['さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と',
  'かさ', 'あし', 'おかし', 'いす', 'そこ', 'たいいく', 'うち', 'くつ', 'つくえ'],

  /* Level 3 */
  ['かな', 'あの', 'にく', 'きぬ', 'はこ', 'ふね', 'へた', 'ほし', 'ふえ',
  'はな', 'なに', 'なか', 'くに', 'あに', 'はね', 'あね', 'その', 'はなし',
  'ひすい', 'ふかい', 'ふつか', 'へいき', 'にし', 'ぬう', 'はつか',
  'ひくい', 'ほか', 'ほね', 'なた', 'いぬ', 'あはし', 'ふたつ', 'にかい',
  'あかえ', 'ひとつ', 'ほし', 'あかいはね', 'ほそいあし', 'ちさいふね',
  'へたね', 'はこのなか', 'すきなひと', 'さかな', 'ねこ', 'はし', 'ひと'],

  /* Level 4 */
  ['ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ',
  'いま', 'かみ', 'うみ', 'むし', 'かいもの', 'やま', 'ゆき'],

  /* Level 5 */
  ['ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん',
  'さくら', 'くすり', 'くるま', 'れきし', 'しろい', 'かわ', 'ほん', 'みかん', 'しんかんせん']

];

