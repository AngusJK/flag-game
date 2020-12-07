const flags = { afghanistan : { name: 'Afghanistan', flag: '🇦🇫' },
  albania: { name: 'Albania', flag: '🇦🇱' },
  algeria: { name: 'Algeria', flag: '🇩🇿' },
  angola: { name: 'Angola', flag: '🇦🇴' },
  antiguaandbarbuda: { name: 'Antigua and Barbuda', flag: '🇦🇬' },
  argentina: { name: 'Argentina', flag: '🇦🇷' },
  armenia: { name: 'Armenia', flag: '🇦🇲' },
  australia: { name: 'Australia', flag:'🇦🇺' },
  austria: { name: 'Austria', flag: '🇦🇹' },
  azerbaijan: { name: 'Azerbaijan', flag: '🇦🇿' },
  bahamas: { name: 'Bahamas', flag: '🇧🇸' },
  bahrain: { name: 'Bahrain', flag: '🇧🇭' },
  bangladesh: { name: 'Bangladesh', flag: '🇧🇩' },
  barbados: { name: 'Barbados', flag: '🇧🇧' },
  belarus: { name: 'Belarus', flag: '🇧🇾' },
  belgium: { name: 'Belgium', flag: '🇧🇪' },
  benin: { name: 'Benin', flag: '🇧🇯' },
  bhutan: { name: 'Bhutan', flag: '🇧🇹' },
  bolivia: { name: 'Bolivia', flag: '🇧🇴' },
  bosniaandherzegovina: { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  botswana: { name: 'Botswana', flag: '🇧🇼' },
  brazil: { name: 'Brazil', flag: '🇧🇷' },
  brunei: { name: 'Brunei', flag: '🇧🇳' },
  bulgaria: { name: 'Bulgaria', flag: '🇧🇬' },
  burkinafaso: { name: 'Burkina Faso', flag: '🇧🇫' },
  burundi: { name: 'Burundi', flag: '🇧🇮' },
  cambodia: { name: 'Cambodia', flag: '🇰🇭' },
  cameroon: { name: 'Cameroon', flag: '🇨🇲' },
  canada: { name: 'Canada', flag: '🇨🇦' },
  caboverde: { name: 'Cabo Verde', flag: '🇨🇻' },
  centralafricanrepublic: { name: 'Central African Republic', flag: '🇨🇫' },
  chad: { name: 'Chad', flag: '🇹🇩' },
  chile: { name: 'Chile', flag: '🇨🇱' },
  china: { name: 'China', flag: '🇨🇳' },
  colombia: { name: 'Colombia', flag: '🇨🇴' },
  comoros: { name: 'Comoros', flag: '🇰🇲' },
  democraticrepublicofthecongo: { name: 'Democratic Republic of the Congo', flag: '🇨🇩' }, 
  republicofthecongo: { name: 'Republic of the Congo', flag: '🇨🇬' },
  costarica: { name: 'Costa Rica', flag: '🇨🇷' },
  cotedivoire: { name: 'Côte d\'Ivoire', flag: '🇨🇮' },
  croatia: { name: 'Croatia', flag: '🇭🇷' },
  cuba: { name: 'Cuba', flag: '🇨🇺' },
  cyprus: { name: 'Cyprus', flag: '🇨🇾' },
  czechia: { name: 'Czechia', flag: '🇨🇿' },
  denmark: { name: 'Denmark', flag: '🇩🇰' },
  djibouti: { name: 'Djibouti', flag: '🇩🇯' },
  dominica: { name: 'Dominica', flag: '🇩🇲' },
  dominicanrepublic: { name: 'Dominican Repubulic', flag: '🇩🇴' },
  ecuador: '🇪🇨',
  egypt: '🇪🇬',
  elsalvador: '🇸🇻',
  equatorialguinea: '🇬🇶',
  eritrea: '🇪🇷',
  estonia: '🇪🇪',
  eswatini: '🇸🇿',
  ethiopia: '🇪🇹',
  fiji: '🇫🇯',
  finland: '🇫🇮',
  france: '🇫🇷',
  gabon: '🇬🇦',
  gambia: '🇬🇲',
  georgia: '🇬🇪',
  germany: '🇩🇪',
  ghana: '🇬🇭',
  greece: '🇬🇷',
  grenada: '🇬🇩',
  guatemala: '🇬🇹',
  guinea: '🇬🇳',
  guineabissau: '🇬🇼',
  guyana: '🇬🇾',
  haiti: '🇭🇹',
  honduras: '🇭🇳',
  hungary: '🇭🇺',
  iceland: '🇮🇸',
  india: '🇮🇳',
  indonesia: '🇮🇩',
  iran: '🇮🇷',
  iraq: '🇮🇶',
  ireland: '🇮🇪',
  israel: '🇮🇱',
  italy: '🇮🇹',
  jamaica: '🇯🇲',
  japan: '🇯🇵',
  jordan: '🇯🇴',
  kazakhstan: '🇰🇿',
  kenya: '🇰🇪',
  kiribati: '🇰🇮',
  kosovo: '🇽🇰',
  kuwait: '🇰🇼',
  kyrgyzstan: '🇰🇬',
  laos: '🇱🇦',
  latvia: '🇱🇻',
  lebanon: '🇱🇧',
  lesotho: '🇱🇸',
  liberia: '🇱🇷',
  libya: '🇱🇾',
  liechtenstein: '🇱🇮',
  lithuania: '🇱🇹',
  luxembourg: '🇱🇺',
  madagascar: '🇲🇬',
  malawi: '🇲🇼',
  malaysia: '🇲🇾',
  maldives: '🇲🇻',
  mali: '🇲🇱',
  malta: '🇲🇹',
  marshallislands: '🇲🇭',
  mauritania: '🇲🇷',
  mauritius: '🇲🇺',
  mexico: '🇲🇽',
  micronesia: '🇫🇲',
  moldova: '🇲🇩',
  monaco: '🇲🇨',
  mongolia: '🇲🇳',
  morocco: '🇲🇦',
  mozambique: '🇲🇿',
  myanmar: '🇲🇲',
  namibia: '🇳🇦',
  nauru: '🇳🇷',
  nepal: '🇳🇵',
  netherlands: '🇳🇱',
  newzealand: '🇳🇿',
  nicaragua: '🇳🇮',
  niger: '🇳🇪',
  nigeria: '🇳🇬',
  northkorea: '🇰🇵',
  northmacedonia: '🇲🇰',
  norway: '🇳🇴',
  oman: '🇴🇲',
  pakistan: '🇵🇰',
  palau: '🇵🇼',
  palestine: '🇵🇸',
  panama: '🇵🇦',
  papuanewguinea: '🇵🇬',
  paraguay: '🇵🇾',
  peru: '🇵🇪',
  philippines: '🇵🇭',
  poland: '🇵🇱',
  portugal: '🇵🇹',
  qatar: '🇶🇦',
  romania: '🇷🇴',
  russia: '🇷🇺',
  rwanda: '🇷🇼',
  samoa: '🇼🇸',
  sanmarino: '🇸🇲',
  saotomeandprincipe: '🇸🇹',
  saudiarabia: '🇸🇦',
  senegal: '🇸🇳',
  serbia: '🇷🇸',
  seychelles: '🇸🇨',
  sierraleone: '🇸🇱',
  singapore: '🇸🇬',
  slovakia: '🇸🇰',
  slovenia: '🇸🇮',
  solomonislands: '🇸🇧',
  somalia: '🇸🇴',
  southafrica: '🇿🇦',
  southkorea: '🇰🇷',
  southsudan: '🇸🇸',
  spain: '🇪🇸',
  srilanka: '🇱🇰',
  saintkittsandnevis: '🇰🇳',
  saintlucia: '🇱🇨',
  saintvincentandgrenadines: '🇻🇨',
  sudan: '🇸🇩',
  suriname: '🇸🇷',
  sweden: '🇸🇪',
  switzerland: '🇨🇭',
  syria: '🇸🇾',
  taiwan: '🇹🇼',
  tajikistan: '🇹🇯',
  tanzania: '🇹🇿',
  thailand: '🇹🇭',
  timorleste: '🇹🇱',
  togo: '🇹🇬',
  tonga: '🇹🇴',
  trinidadandtobago: '🇹🇹',
  tunisia: '🇹🇳',
  turkey: '🇹🇷',
  turkmenistan: '🇹🇲',
  tuvalu: '🇹🇻',
  uganda: '🇺🇬',
  ukraine: '🇺🇦',
  unitedarabemirates: '🇦🇪',
  unitedkingdom: '🇬🇧',
  unitedstatesofamerica: '🇺🇸',
  uruguay: '🇺🇾',
  uzbekistan: '🇺🇿',
  vanuatu: '🇻🇺',
  vaticancity: '🇻🇦',
  venezuela: '🇻🇪',
  vietnam: '🇻🇳',
  yemen: '🇾🇪',
  zambia: '🇿🇲',
  zimbabwe: '🇿🇼'
};

module.exports = flags;