// disable eslint for this file
// array of objects of frequently used hiragana characters and romaji grouped by rows
const hiraganaData = {
  basic: [
    [
      { character: 'あ', romaji: 'a' },
      { character: 'い', romaji: 'i' },
      { character: 'う', romaji: 'u' },
      { character: 'え', romaji: 'e' },
      { character: 'お', romaji: 'o' },
    ],
    [
      { character: 'か', romaji: 'ka' },
      { character: 'き', romaji: 'ki' },
      { character: 'く', romaji: 'ku' },
      { character: 'け', romaji: 'ke' },
      { character: 'こ', romaji: 'ko' },
    ],
    [
      { character: 'さ', romaji: 'sa' },
      { character: 'し', romaji: 'shi' },
      { character: 'す', romaji: 'su' },
      { character: 'せ', romaji: 'se' },
      { character: 'そ', romaji: 'so' },
    ],
    [
      { character: 'た', romaji: 'ta' },
      { character: 'ち', romaji: 'chi' },
      { character: 'つ', romaji: 'tsu' },
      { character: 'て', romaji: 'te' },
      { character: 'と', romaji: 'to' },
    ],
    [
      { character: 'な', romaji: 'na' },
      { character: 'に', romaji: 'ni' },
      { character: 'ぬ', romaji: 'nu' },
      { character: 'ね', romaji: 'ne' },
      { character: 'の', romaji: 'no' },
    ],
    [
      { character: 'は', romaji: 'ha' },
      { character: 'ひ', romaji: 'hi' },
      { character: 'ふ', romaji: 'fu' },
      { character: 'へ', romaji: 'he' },
      { character: 'ほ', romaji: 'ho' },
    ],
    [
      { character: 'ま', romaji: 'ma' },
      { character: 'み', romaji: 'mi' },
      { character: 'む', romaji: 'mu' },
      { character: 'め', romaji: 'me' },
      { character: 'も', romaji: 'mo' },
    ],
    [
      { character: 'や', romaji: 'ya' },
      { character: ' ', romaji: '' },
      { character: 'ゆ', romaji: 'yu' },
      { character: ' ', romaji: '' },
      { character: 'よ', romaji: 'yo' },
    ],
    [
      { character: 'ら', romaji: 'ra' },
      { character: 'り', romaji: 'ri' },
      { character: 'る', romaji: 'ru' },
      { character: 'れ', romaji: 're' },
      { character: 'ろ', romaji: 'ro' },
    ],
    [
      { character: 'わ', romaji: 'wa' },
      { character: ' ', romaji: '' },
      { character: ' ', romaji: '' },
      { character: ' ', romaji: '' },
      { character: ' ', romaji: '' },
      { character: 'を', romaji: 'wo' },
    ],
    [
      { character: 'ん', romaji: 'n' },
      { character: ' ', romaji: '' },
      { character: ' ', romaji: '' },
      { character: ' ', romaji: '' },
      { character: ' ', romaji: '' },
    ],
  ],
  dakuten: [
    [
      { character: 'が', romaji: 'ga' },
      { character: 'ぎ', romaji: 'gi' },
      { character: 'ぐ', romaji: 'gu' },
      { character: 'げ', romaji: 'ge' },
      { character: 'ご', romaji: 'go' },
    ],
    [
      { character: 'ざ', romaji: 'za' },
      { character: 'じ', romaji: 'ji' },
      { character: 'ず', romaji: 'zu' },
      { character: 'ぜ', romaji: 'ze' },
      { character: 'ぞ', romaji: 'zo' },
    ],
    [
      { character: 'だ', romaji: 'da' },
      { character: 'ぢ', romaji: 'ji' },
      { character: 'づ', romaji: 'zu' },
      { character: 'で', romaji: 'de' },
      { character: 'ど', romaji: 'do' },
    ],
    [
      { character: 'ば', romaji: 'ba' },
      { character: 'び', romaji: 'bi' },
      { character: 'ぶ', romaji: 'bu' },
      { character: 'べ', romaji: 'be' },
      { character: 'ぼ', romaji: 'bo' },
    ],
    [
      { character: 'ぱ', romaji: 'pa' },
      { character: 'ぴ', romaji: 'pi' },
      { character: 'ぷ', romaji: 'pu' },
      { character: 'ぺ', romaji: 'pe' },
      { character: 'ぽ', romaji: 'po' },
    ],
  ],
  smallKana: [
    [
      { character: 'きゃ', romaji: 'kya' },
      { character: 'きゅ', romaji: 'kyu' },
      { character: 'きょ', romaji: 'kyo' },
    ],
    [
      { character: 'しゃ', romaji: 'sha' },
      { character: 'しゅ', romaji: 'shu' },
      { character: 'しょ', romaji: 'sho' },
    ],
    [
      { character: 'ちゃ', romaji: 'cha' },
      { character: 'ちゅ', romaji: 'chu' },
      { character: 'ちょ', romaji: 'cho' },
    ],
    [
      { character: 'にゃ', romaji: 'nya' },
      { character: 'にゅ', romaji: 'nyu' },
      { character: 'にょ', romaji: 'nyo' },
    ],
    [
      { character: 'ひゃ', romaji: 'hya' },
      { character: 'ひゅ', romaji: 'hyu' },
      { character: 'ひょ', romaji: 'hyo' },
    ],
    [
      { character: 'みゃ', romaji: 'mya' },
      { character: 'みゅ', romaji: 'myu' },
      { character: 'みょ', romaji: 'myo' },
    ],
    [
      { character: 'りゃ', romaji: 'rya' },
      { character: 'りゅ', romaji: 'ryu' },
      { character: 'りょ', romaji: 'ryo' },
    ],
    [
      { character: 'ぎゃ', romaji: 'gya' },
      { character: 'ぎゅ', romaji: 'gyu' },
      { character: 'ぎょ', romaji: 'gyo' },
    ],
    [
      { character: 'じゃ', romaji: 'ja' },
      { character: 'じゅ', romaji: 'ju' },
      { character: 'じょ', romaji: 'jo' },
    ],
    [
      { character: 'びゃ', romaji: 'bya' },
      { character: 'びゅ', romaji: 'byu' },
      { character: 'びょ', romaji: 'byo' },
    ],
    [
      { character: 'ぴゃ', romaji: 'pya' },
      { character: 'ぴゅ', romaji: 'pyu' },
      { character: 'ぴょ', romaji: 'pyo' },
    ],
  ],
};

export default hiraganaData;
