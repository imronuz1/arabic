export type ExtraWord = {ar:string,en:string,ru:string,uz:string};
export type Verb = {past:string,present:string,imperative:string,masdar:string,en:string,ru:string,uz:string};
export type Article = {title:string,topic:string,arabic:string[],english:string[]};

const parseWords=(rows:string):ExtraWord[]=>rows.trim().split("\n").map(row=>{const [ar,en,ru,uz]=row.split("|");return {ar,en,ru,uz}});
const parseVerbs=(rows:string):Verb[]=>rows.trim().split("\n").map(row=>{const [past,present,imperative,masdar,en,ru,uz]=row.split("|");return {past,present,imperative,masdar,en,ru,uz}});

export const extraWords:Record<string,ExtraWord[]>={
"09":parseWords(`بَائِعٌ|seller|продавец|sotuvchi
مَتْجَرٌ|shop|магазин|do‘kon
سِعْرٌ|price|цена|narx
نُقُودٌ|money|деньги|pul
رَخِيصٌ|cheap|дешёвый|arzon
غَالٍ|expensive|дорогой|qimmat
جَدِيدٌ|new|новый|yangi
قَدِيمٌ|old|старый|eski
كَبِيرٌ|big|большой|katta
صَغِيرٌ|small|маленький|kichik
كَمْ؟|how much?|сколько?|qancha?
هٰذَا|this (masculine)|этот|bu
هٰذِهِ|this (feminine)|эта|bu
ذٰلِكَ|that|тот|ana u
وَاحِدٌ|one|один|bir
اِثْنَانِ|two|два|ikki
ثَلَاثَةٌ|three|три|uch
خُبْزٌ|bread|хлеб|non
حَلِيبٌ|milk|молоко|sut
مَاءٌ|water|вода|suv
شَايٌ|tea|чай|choy
قَهْوَةٌ|coffee|кофе|qahva
أَرُزٌّ|rice|рис|guruch
تُفَّاحٌ|apples|яблоки|olmalar
مَوْزٌ|bananas|бананы|bananlar
بُرْتُقَالٌ|oranges|апельсины|apelsinlar
لَحْمٌ|meat|мясо|go‘sht
سَمَكٌ|fish|рыба|baliq
دَجَاجٌ|chicken|курица|tovuq
بَيْضٌ|eggs|яйца|tuxum
خُضْرَوَاتٌ|vegetables|овощи|sabzavotlar
فَوَاكِهُ|fruits|фрукты|mevalar
كِيسٌ|bag|пакет|xalta
زُجَاجَةٌ|bottle|бутылка|shisha
كِيلُوغْرَامٌ|kilogram|килограмм|kilogramm
نِصْفٌ|half|половина|yarim
كُلُّ|all / every|весь / каждый|hamma / har bir
بَعْضُ|some|некоторые|ba’zi
مَقَاسٌ|size|размер|o‘lcham
لَوْنٌ|color|цвет|rang
حِذَاءٌ|shoe|ботинок|oyoq kiyim
جَوْرَبٌ|sock|носок|paypoq
فُسْتَانٌ|dress|платье|ko‘ylak
حَقِيبَةٌ|bag|сумка|sumka
هَدِيَّةٌ|gift|подарок|sovg‘a
فَاتُورَةٌ|bill / receipt|счёт / чек|hisob / chek
بَاقِي النُّقُودِ|change|сдача|qaytim
صُنْدُوقُ الدَّفْعِ|checkout|касса|kassa
مَفْتُوحٌ|open|открытый|ochiq
مُغْلَقٌ|closed|закрытый|yopiq
أُرِيدُ|I want|я хочу|men xohlayman
أُفَضِّلُ|I prefer|я предпочитаю|men afzal ko‘raman
عِنْدَكُمْ|you have|у вас есть|sizda bor
مُمْتَازٌ|excellent|отличный|a’lo
مُنَاسِبٌ|suitable|подходящий|mos
جَيِّدٌ|good|хороший|yaxshi`),
"10":parseWords(`شَمْسٌ|sun|солнце|quyosh
قَمَرٌ|moon|луна|oy
نُجُومٌ|stars|звёзды|yulduzlar
غَيْمٌ|clouds|облака|bulutlar
سَحَابٌ|clouds|облака|bulutlar
مَطَرٌ|rain|дождь|yomg‘ir
ثَلْجٌ|snow|снег|qor
رِيحٌ|wind|ветер|shamol
رِيَاحٌ|winds|ветры|shamollar
عَاصِفَةٌ|storm|буря|bo‘ron
ضَبَابٌ|fog|туман|tuman
بَرْقٌ|lightning|молния|chaqmoq
رَعْدٌ|thunder|гром|momaqaldiroq
غَائِمٌ|cloudy|облачно|bulutli
مُمْطِرٌ|rainy|дождливо|yomg‘irli
مُشْمِسٌ|sunny|солнечно|quyoshli
عَاصِفٌ|windy|ветрено|shamolli
جَافٌّ|dry|сухой|quruq
رَطْبٌ|humid|влажный|nam
صَافٍ|clear|ясный|tiniq
الْيَوْمَ|today|сегодня|bugun
أَمْسِ|yesterday|вчера|kecha
صَبَاحٌ|morning|утро|ertalab
مَسَاءٌ|evening|вечер|kechqurun
لَيْلٌ|night|ночь|tun
نَهَارٌ|daytime|день|kunduz
أُسْبُوعٌ|week|неделя|hafta
شَهْرٌ|month|месяц|oy
سَنَةٌ|year|год|yil
فَصْلٌ|season|сезон|fasl
دَرَجَةٌ|degree|градус|daraja
نَشْرَةُ الْجَوِّ|weather forecast|прогноз погоды|ob-havo ma’lumoti
طَقْسٌ|weather|погода|ob-havo
مِنَاخٌ|climate|климат|iqlim
الظِّلُّ|shade|тень|soya
الْحَرَارَةُ|heat|жара|issiqlik
الْبُرُودَةُ|coldness|холод|sovuqlik
مِعْطَفٌ|coat|пальто|palto
قُبَّعَةٌ|hat|шапка|bosh kiyim
قُفَّازٌ|glove|перчатка|qo‘lqop
سُتْرَةٌ|jacket|куртка|kurtka
نَافِذَةٌ|window|окно|deraza
بَابٌ|door|дверь|eshik
حَدِيقَةٌ|garden|сад|bog‘
شَجَرَةٌ|tree|дерево|daraxt
زَهْرَةٌ|flower|цветок|gul
نَهْرٌ|river|река|daryo
جَبَلٌ|mountain|гора|tog‘
بَحْرٌ|sea|море|dengiz
مِظَلَّةُ الشَّمْسِ|sunshade|зонт от солнца|quyosh soyaboni
يَوْمٌ|day|день|kun`),
"11":parseWords(`بَيْتٌ|house|дом|uy
شَقَّةٌ|apartment|квартира|kvartira
شَارِعٌ|street|улица|ko‘cha
طَرِيقٌ|road|дорога|yo‘l
مَحَطَّةٌ|station|станция|bekat
مَطَارٌ|airport|аэропорт|aeroport
مَكْتَبٌ|office|офис|idora
مَتْجَرٌ|shop|магазин|do‘kon
مَطْعَمٌ|restaurant|ресторан|restoran
فُنْدُقٌ|hotel|гостиница|mehmonxona
مَدْرَسَةٌ|school|школа|maktab
مَكْتَبَةٌ|library|библиотека|kutubxona
حَدِيقَةٌ|park|парк|bog‘
مَسْجِدٌ|mosque|мечеть|masjid
صَدِيقٌ|friend|друг|do‘st
جَارٌ|neighbor|сосед|qo‘shni
طَالِبٌ|student|студент|talaba
طَالِبَةٌ|female student|студентка|talaba qiz
مُوَظَّفٌ|employee|сотрудник|xodim
سَائِقٌ|driver|водитель|haydovchi
تَاجِرٌ|merchant|торговец|savdogar
بَائِعٌ|seller|продавец|sotuvchi
أَبٌ|father|отец|ota
أُمٌّ|mother|мать|ona
أَخٌ|brother|брат|aka / uka
أُخْتٌ|sister|сестра|opa / singil
اِبْنٌ|son|сын|o‘g‘il
بِنْتٌ|daughter / girl|дочь / девочка|qiz
طِفْلٌ|child|ребёнок|bola
رَجُلٌ|man|мужчина|erkak
نِسَاءٌ|women|женщины|ayollar
عَائِلَةٌ|family|семья|oila
بَلَدٌ|country|страна|mamlakat
عَاصِمَةٌ|capital city|столица|poytaxt
مَكَانٌ|place|место|joy
قَرِيبٌ|near|близкий|yaqin
بَعِيدٌ|far|далёкий|uzoq
جَمِيلٌ|beautiful|красивый|chiroyli`),
"12":parseWords(`سَفَرٌ|travel|путешествие|sayohat
رِحْلَةٌ|trip|поездка|safar
مُسَافِرٌ|traveler|путешественник|sayohatchi
طَائِرَةٌ|airplane|самолёт|samolyot
قِطَارٌ|train|поезд|poyezd
حَافِلَةٌ|bus|автобус|avtobus
سَيَّارَةٌ|car|машина|mashina
سَفِينَةٌ|ship|корабль|kema
مَطَارٌ|airport|аэропорт|aeroport
مَحَطَّةٌ|station|станция|bekat
فُنْدُقٌ|hotel|гостиница|mehmonxona
غُرْفَةٌ|room|комната|xona
تَذْكِرَةٌ|ticket|билет|chipta
جَوَازُ سَفَرٍ|passport|паспорт|pasport
تَأْشِيرَةٌ|visa|виза|viza
حَجْزٌ|reservation|бронирование|band qilish
خَرِيطَةٌ|map|карта|xarita
عُنْوَانٌ|address|адрес|manzil
حَقِيبَةُ سَفَرٍ|suitcase|чемодан|chamadon
وَثِيقَةٌ|document|документ|hujjat
مِفْتَاحٌ|key|ключ|kalit
بِطَاقَةٌ|card|карта|karta
طَرِيقٌ|road|дорога|yo‘l
مَوْعِدٌ|appointment / time|время / встреча|vaqt / uchrashuv
وَقْتٌ|time|время|vaqt
مُبَكِّرًا|early|рано|erta
مُتَأَخِّرًا|late|поздно|kech
الْيَوْمَ|today|сегодня|bugun
غَدًا|tomorrow|завтра|ertaga
هُنَا|here|здесь|bu yerda
هُنَاكَ|there|там|u yerda
أَيْنَ؟|where?|где?|qayerda?
مَتَى؟|when?|когда?|qachon?
كَيْفَ؟|how?|как?|qanday?
قَرِيبٌ|near|близко|yaqin
بَعِيدٌ|far|далеко|uzoq
يَمِينٌ|right|направо|o‘ng
يَسَارٌ|left|налево|chap
مُبَاشِرٌ|direct|прямой|to‘g‘ri
ذَهَابٌ|departure / going|отъезд|ketish
عَوْدَةٌ|return|возвращение|qaytish
وُصُولٌ|arrival|прибытие|yetib kelish
مَغَادَرَةٌ|departure|отправление|jo‘nab ketish
رَقْمٌ|number|номер|raqam
سَائِقٌ|driver|водитель|haydovchi
رَاكِبٌ|passenger|пассажир|yo‘lovchi
مَدِينَةٌ|city|город|shahar
بَلَدٌ|country|страна|mamlakat
حُدُودٌ|border|граница|chegara
أَمْتِعَةٌ|luggage|багаж|yuklar
بَوَّابَةٌ|gate|выход на посадку|darvoza
مَقْعَدٌ|seat|место|o‘rindiq
نَافِذَةٌ|window|окно|deraza
مَكْتَبُ الِاسْتِقْبَالِ|reception desk|стойка регистрации|qabulxona
رِحْلَةُ الْعَوْدَةِ|return trip|обратная поездка|qaytish safari
مَسَاءً|in the evening|вечером|kechqurun
صَبَاحًا|in the morning|утром|ertalab
مُدَّةٌ|duration|длительность|muddat
سَاعَةٌ|hour|час|soat
دَقِيقَةٌ|minute|минута|daqiqa
ثَمَنٌ|price|цена|narx
مَجَّانًا|for free|бесплатно|bepul
بِأَمَانٍ|safely|безопасно|xavfsiz
جَدْوَلٌ|schedule|расписание|jadval`)
};

export const verbs:Record<string,Verb[]>={
"09":parseVerbs(`اِشْتَرَى|يَشْتَرِي|اِشْتَرِ|اِشْتِرَاءٌ|buy|покупать|sotib olmoq
بَاعَ|يَبِيعُ|بِعْ|بَيْعٌ|sell|продавать|sotmoq
دَفَعَ|يَدْفَعُ|اِدْفَعْ|دَفْعٌ|pay|платить|to‘lamoq
أَخَذَ|يَأْخُذُ|خُذْ|أَخْذٌ|take|брать|olmoq
أَعْطَى|يُعْطِي|أَعْطِ|إِعْطَاءٌ|give|давать|bermoq
اِخْتَارَ|يَخْتَارُ|اِخْتَرْ|اِخْتِيَارٌ|choose|выбирать|tanlamoq
سَأَلَ|يَسْأَلُ|اِسْأَلْ|سُؤَالٌ|ask|спрашивать|so‘ramoq
فَتَحَ|يَفْتَحُ|اِفْتَحْ|فَتْحٌ|open|открывать|ochmoq
وَجَدَ|يَجِدُ|جِدْ|وُجُودٌ|find|находить|topmoq
بَحَثَ|يَبْحَثُ|اِبْحَثْ|بَحْثٌ|search|искать|qidirmoq
قَالَ|يَقُولُ|قُلْ|قَوْلٌ|say|говорить|aytmoq
لَبِسَ|يَلْبَسُ|اِلْبَسْ|لُبْسٌ|wear|носить|kiymoq`),
"10":parseVerbs(`نَزَلَ|يَنْزِلُ|اِنْزِلْ|نُزُولٌ|fall / descend|спускаться|tushmoq
أَمْطَرَ|يُمْطِرُ|أَمْطِرْ|إِمْطَارٌ|rain|идти (о дожде)|yomg‘ir yog‘moq
خَرَجَ|يَخْرُجُ|اُخْرُجْ|خُرُوجٌ|go out|выходить|chiqmoq
بَقِيَ|يَبْقَى|اِبْقَ|بَقَاءٌ|stay / remain|оставаться|qolmoq
تَرَكَ|يَتْرُكُ|اُتْرُكْ|تَرْكٌ|leave|оставлять|qoldirmoq
حَضَرَ|يَحْضُرُ|اُحْضُرْ|حُضُورٌ|attend / arrive|присутствовать|kelmoq
أَحْضَرَ|يُحْضِرُ|أَحْضِرْ|إِحْضَارٌ|bring|приносить|olib kelmoq
حَضَّرَ|يُحَضِّرُ|حَضِّرْ|تَحْضِيرٌ|prepare|готовить|tayyorlamoq
تَكَلَّمَ|يَتَكَلَّمُ|تَكَلَّمْ|تَكَلُّمٌ|speak|разговаривать|gapirmoq
قَضَى|يَقْضِي|اِقْضِ|قَضَاءٌ|spend (time)|проводить (время)|o‘tkazmoq
تَغَيَّرَ|يَتَغَيَّرُ|تَغَيَّرْ|تَغَيُّرٌ|change|меняться|o‘zgarmoq
لَبِسَ|يَلْبَسُ|اِلْبَسْ|لُبْسٌ|wear|носить|kiymoq`),
"11":parseVerbs(`اِنْتَقَلَ|يَنْتَقِلُ|اِنْتَقِلْ|اِنْتِقَالٌ|move|переезжать|ko‘chmoq
زَارَ|يَزُورُ|زُرْ|زِيَارَةٌ|visit|посещать|tashrif buyurmoq
سَافَرَ|يُسَافِرُ|سَافِرْ|سَفَرٌ|travel|путешествовать|sayohat qilmoq
عَمِلَ|يَعْمَلُ|اِعْمَلْ|عَمَلٌ|work|работать|ishlamoq
دَرَسَ|يَدْرُسُ|اُدْرُسْ|دِرَاسَةٌ|study|учиться|o‘qimoq
سَكَنَ|يَسْكُنُ|اُسْكُنْ|سَكَنٌ|live / reside|жить|yashamoq
عَرَفَ|يَعْرِفُ|اِعْرِفْ|مَعْرِفَةٌ|know|знать|bilmoq
لَقِيَ|يَلْقَى|اِلْقَ|لِقَاءٌ|meet|встречать|uchrashmoq
تَزَوَّجَ|يَتَزَوَّجُ|تَزَوَّجْ|زَوَاجٌ|marry|жениться|uylanmoq
سَاعَدَ|يُسَاعِدُ|سَاعِدْ|مُسَاعَدَةٌ|help|помогать|yordam bermoq
رَأَى|يَرَى|رَ|رُؤْيَةٌ|see|видеть|ko‘rmoq
ذَهَبَ|يَذْهَبُ|اِذْهَبْ|ذَهَابٌ|go|идти|bormoq`),
"12":parseVerbs(`سَافَرَ|يُسَافِرُ|سَافِرْ|سَفَرٌ|travel|путешествовать|sayohat qilmoq
ذَهَبَ|يَذْهَبُ|اِذْهَبْ|ذَهَابٌ|go|идти|bormoq
عَادَ|يَعُودُ|عُدْ|عَوْدَةٌ|return|возвращаться|qaytmoq
وَصَلَ|يَصِلُ|صِلْ|وُصُولٌ|arrive|прибывать|yetib kelmoq
غَادَرَ|يُغَادِرُ|غَادِرْ|مُغَادَرَةٌ|depart|уезжать|jo‘nab ketmoq
حَجَزَ|يَحْجِزُ|اِحْجِزْ|حَجْزٌ|reserve|бронировать|band qilmoq
أَقَامَ|يُقِيمُ|أَقِمْ|إِقَامَةٌ|stay|проживать|yashamoq
قَبِلَ|يَقْبَلُ|اِقْبَلْ|قُبُولٌ|accept|принимать|qabul qilmoq
رَفَضَ|يَرْفُضُ|اُرْفُضْ|رَفْضٌ|refuse|отклонять|rad etmoq
فَقَدَ|يَفْقِدُ|اِفْقِدْ|فَقْدٌ|lose|терять|yo‘qotmoq
وَجَدَ|يَجِدُ|جِدْ|وُجُودٌ|find|находить|topmoq
فَتَحَ|يَفْتَحُ|اِفْتَحْ|فَتْحٌ|open|открывать|ochmoq
أَغْلَقَ|يُغْلِقُ|أَغْلِقْ|إِغْلَاقٌ|close|закрывать|yopmoq
حَاسَبَ|يُحَاسِبُ|حَاسِبْ|مُحَاسَبَةٌ|settle the bill|рассчитываться|hisob-kitob qilmoq`)
};

export const articles:Article[]=[
{title:"فِي السُّوقِ",topic:"Shopping",arabic:["ذَهَبَ أَحْمَدُ إِلَى السُّوقِ صَبَاحًا.","أَرَادَ أَنْ يَشْتَرِيَ خُبْزًا وَحَلِيبًا وَتُفَّاحًا.","سَأَلَ الْبَائِعَ عَنِ السِّعْرِ.","دَفَعَ النُّقُودَ وَعَادَ إِلَى الْبَيْتِ."],english:["Ahmad went to the market in the morning.","He wanted to buy bread, milk, and apples.","He asked the seller about the price.","He paid and returned home."]},
{title:"الْقَمِيصُ الْجَدِيدُ",topic:"Shopping",arabic:["يُرِيدُ عَلِيٌّ قَمِيصًا جَدِيدًا.","فِي الْمَتْجَرِ قَمِيصٌ أَبْيَضُ وَقَمِيصٌ أَزْرَقُ.","الْقَمِيصُ الْأَزْرَقُ مُنَاسِبٌ وَلَيْسَ غَالِيًا.","اِشْتَرَاهُ عَلِيٌّ وَهُوَ سَعِيدٌ."],english:["Ali wants a new shirt.","The shop has a white shirt and a blue shirt.","The blue shirt fits and is not expensive.","Ali bought it and is happy."]},
{title:"قَائِمَةُ الْمُشْتَرَيَاتِ",topic:"Shopping",arabic:["كَتَبَتْ مَرْيَمُ قَائِمَةً قَبْلَ الذَّهَابِ إِلَى السُّوقِ.","فِي الْقَائِمَةِ أَرُزٌّ وَبَيْضٌ وَخُضْرَوَاتٌ.","وَجَدَتْ كُلَّ شَيْءٍ فِي مَتْجَرٍ وَاحِدٍ.","وَضَعَتِ الْمُشْتَرَيَاتِ فِي حَقِيبَتِهَا."],english:["Maryam wrote a list before going to the market.","The list has rice, eggs, and vegetables.","She found everything in one shop.","She put the purchases in her bag."]},
{title:"عِنْدَ الْبَائِعِ",topic:"Shopping",arabic:["سَأَلَ الطَّالِبُ الْبَائِعَ: كَمْ ثَمَنُ هٰذَا الْكِتَابِ؟","قَالَ الْبَائِعُ: ثَمَنُهُ عَشَرَةُ رِيَالَاتٍ.","دَفَعَ الطَّالِبُ وَأَخَذَ الْكِتَابَ.","قَالَ: شُكْرًا، وَخَرَجَ مِنَ الْمَتْجَرِ."],english:["The student asked the seller: How much is this book?","The seller said: It costs ten riyals.","The student paid and took the book.","He said thank you and left the shop."]},
{title:"هَدِيَّةٌ لِلْأُمِّ",topic:"Shopping",arabic:["يُرِيدُ سَعِيدٌ هَدِيَّةً لِأُمِّهِ.","رَأَى حَقِيبَةً جَمِيلَةً فِي السُّوقِ.","اِشْتَرَى الْحَقِيبَةَ وَوَضَعَهَا فِي كِيسٍ.","فَرِحَتْ أُمُّهُ بِالْهَدِيَّةِ."],english:["Saeed wants a gift for his mother.","He saw a beautiful bag in the market.","He bought the bag and put it in a bag.","His mother was happy with the gift."]},
{title:"يَوْمٌ مُمْطِرٌ",topic:"Weather",arabic:["الْجَوُّ بَارِدٌ الْيَوْمَ وَالسَّمَاءُ غَائِمَةٌ.","نَزَلَ الْمَطَرُ عِنْدَ الظُّهْرِ.","أَخَذَتْ لَيْلَى مِظَلَّتَهَا قَبْلَ الْخُرُوجِ.","عَادَتْ إِلَى الْبَيْتِ وَمَلَابِسُهَا جَافَّةٌ."],english:["It is cold today and the sky is cloudy.","Rain fell at noon.","Layla took her umbrella before going out.","She returned home with dry clothes."]},
{title:"فِي الصَّيْفِ",topic:"Weather",arabic:["فِي الصَّيْفِ يَكُونُ الْجَوُّ حَارًّا.","يَذْهَبُ الْأَطْفَالُ إِلَى الشَّاطِئِ صَبَاحًا.","يَلْعَبُونَ قُرْبَ الْبَحْرِ وَيَشْرَبُونَ الْمَاءَ.","فِي الْمَسَاءِ يَعُودُونَ إِلَى الْبَيْتِ."],english:["In summer the weather is hot.","The children go to the beach in the morning.","They play near the sea and drink water.","In the evening they return home."]},
{title:"فِي الشِّتَاءِ",topic:"Weather",arabic:["فِي الشِّتَاءِ يَكُونُ الْجَوُّ بَارِدًا.","يَلْبَسُ عُمَرُ مِعْطَفًا وَقُفَّازَيْنِ.","يَبْقَى فِي الْبَيْتِ عِنْدَمَا تَهُبُّ الرِّيحُ.","يَقْرَأُ كِتَابًا وَيَشْرَبُ شَايًا دَافِئًا."],english:["In winter the weather is cold.","Umar wears a coat and gloves.","He stays home when the wind blows.","He reads a book and drinks warm tea."]},
{title:"صَبَاحُ الرَّبِيعِ",topic:"Weather",arabic:["الشَّمْسُ مُشْرِقَةٌ وَالْجَوُّ مُعْتَدِلٌ.","خَرَجَتْ نُورُ إِلَى الْحَدِيقَةِ.","رَأَتِ الْأَزْهَارَ وَالْأَشْجَارَ.","جَلَسَتْ تَحْتَ شَجَرَةٍ وَقَرَأَتْ كِتَابًا."],english:["The sun is shining and the weather is mild.","Nur went out to the garden.","She saw flowers and trees.","She sat under a tree and read a book."]},
{title:"نَشْرَةُ الْجَوِّ",topic:"Weather",arabic:["اِسْتَمَعَ خَالِدٌ إِلَى نَشْرَةِ الْجَوِّ.","غَدًا سَيَكُونُ الْجَوُّ غَائِمًا فِي الصَّبَاحِ.","وَبَعْدَ الظُّهْرِ سَيَنْزِلُ الْمَطَرُ.","لِذٰلِكَ وَضَعَ مِظَلَّةً فِي حَقِيبَتِهِ."],english:["Khalid listened to the weather forecast.","Tomorrow it will be cloudy in the morning.","It will rain in the afternoon.","So he put an umbrella in his bag."]},
{title:"صَدِيقِي الْجَدِيدُ",topic:"People and places",arabic:["اِسْمُ صَدِيقِي الْجَدِيدِ يُوسُفُ.","هُوَ طَالِبٌ فِي الْجَامِعَةِ.","يَسْكُنُ قَرِيبًا مِنَ الْمَدْرَسَةِ.","نَدْرُسُ مَعًا وَنَذْهَبُ إِلَى الْمَكْتَبَةِ."],english:["My new friend's name is Yusuf.","He is a university student.","He lives near the school.","We study together and go to the library."]},
{title:"مَدِينَتِي",topic:"People and places",arabic:["مَدِينَتِي صَغِيرَةٌ وَهَادِئَةٌ.","فِيهَا مَدْرَسَةٌ وَمُسْتَشْفًى وَسُوقٌ.","يَسْكُنُ أَصْدِقَائِي قَرِيبًا مِنْ بَيْتِي.","أُحِبُّ مَدِينَتِي وَالنَّاسَ فِيهَا."],english:["My city is small and quiet.","It has a school, hospital, and market.","My friends live near my home.","I love my city and its people."]},
{title:"زِيَارَةُ الْجَدَّةِ",topic:"People and places",arabic:["تَسْكُنُ جَدَّتِي فِي قَرْيَةٍ جَمِيلَةٍ.","نَزُورُهَا فِي عُطْلَةِ الْأُسْبُوعِ.","نَجْلِسُ مَعَهَا وَنَسْتَمِعُ إِلَى قِصَصِهَا.","عِنْدَ الْمَسَاءِ نَعُودُ إِلَى الْمَدِينَةِ."],english:["My grandmother lives in a beautiful village.","We visit her on the weekend.","We sit with her and listen to her stories.","In the evening we return to the city."]},
{title:"فِي الْمَكْتَبَةِ",topic:"People and places",arabic:["ذَهَبَتْ سَارَةُ إِلَى الْمَكْتَبَةِ.","وَجَدَتْ كِتَابًا عَنِ الْمُدُنِ وَالْبُلْدَانِ.","جَلَسَتْ قُرْبَ النَّافِذَةِ وَقَرَأَتْهُ.","ثُمَّ كَتَبَتْ أَسْمَاءَ أَمَاكِنَ جَدِيدَةٍ."],english:["Sara went to the library.","She found a book about cities and countries.","She sat near the window and read it.","Then she wrote the names of new places."]},
{title:"الطَّبِيبُ فِي الْمُسْتَشْفَى",topic:"People and places",arabic:["يَعْمَلُ الطَّبِيبُ فِي الْمُسْتَشْفَى.","يَأْتِي النَّاسُ إِلَيْهِ عِنْدَمَا يَمْرَضُونَ.","يَسْأَلُهُمْ عَنْ صِحَّتِهِمْ وَيُسَاعِدُهُمْ.","بَعْدَ الْعَمَلِ يَعُودُ إِلَى أُسْرَتِهِ."],english:["The doctor works at the hospital.","People come to him when they are ill.","He asks about their health and helps them.","After work he returns to his family."]},
{title:"إِلَى الْمَطَارِ",topic:"Travel",arabic:["سَتُسَافِرُ مَرْيَمُ غَدًا.","وَضَعَتْ مَلَابِسَهَا فِي الْحَقِيبَةِ.","أَخَذَتْ جَوَازَ السَّفَرِ وَالتَّذْكِرَةَ.","ذَهَبَتْ إِلَى الْمَطَارِ مُبَكِّرًا."],english:["Maryam will travel tomorrow.","She put her clothes in the suitcase.","She took her passport and ticket.","She went to the airport early."]},
{title:"فِي الْفُنْدُقِ",topic:"Travel",arabic:["وَصَلَ عَلِيٌّ إِلَى الْفُنْدُقِ مَسَاءً.","تَحَدَّثَ مَعَ الْمُوَظَّفِ فِي مَكْتَبِ الِاسْتِقْبَالِ.","أَخَذَ مِفْتَاحَ غُرْفَتِهِ.","كَانَتِ الْغُرْفَةُ نَظِيفَةً وَهَادِئَةً."],english:["Ali arrived at the hotel in the evening.","He spoke with the clerk at reception.","He took his room key.","The room was clean and quiet."]},
{title:"حَقِيبَتِي أَيْنَ؟",topic:"Travel",arabic:["وَصَلَ سَعِيدٌ إِلَى الْمَحَطَّةِ وَلَمْ يَجِدْ حَقِيبَتَهُ.","سَأَلَ السَّائِقَ: أَيْنَ حَقِيبَتِي؟","بَحَثَا عَنْهَا فِي الْحَافِلَةِ.","وَجَدَاهَا تَحْتَ مَقْعَدٍ وَفَرِحَ سَعِيدٌ."],english:["Saeed arrived at the station and could not find his bag.","He asked the driver: Where is my bag?","They looked for it on the bus.","They found it under a seat, and Saeed was happy."]},
{title:"رِحْلَةٌ بِالْقِطَارِ",topic:"Travel",arabic:["حَجَزَ عُمَرُ تَذْكِرَةً لِلْقِطَارِ.","وَصَلَ إِلَى الْمَحَطَّةِ قَبْلَ الْمَوْعِدِ.","جَلَسَ بِجَانِبِ النَّافِذَةِ وَشَاهَدَ الْمَدِينَةَ.","بَعْدَ سَاعَةٍ وَصَلَ إِلَى بَلَدَةٍ صَغِيرَةٍ."],english:["Umar booked a train ticket.","He arrived at the station before departure.","He sat beside the window and watched the city.","After an hour he reached a small town."]},
{title:"طَرِيقُ الْعَوْدَةِ",topic:"Travel",arabic:["اِنْتَهَتِ الرِّحْلَةُ وَحَانَ وَقْتُ الْعَوْدَةِ.","فَتَحَتْ لَيْلَى حَقِيبَتَهَا وَوَضَعَتِ الْهَدَايَا فِيهَا.","أَغْلَقَتِ الْحَقِيبَةَ وَرَاجَعَتْ تَذْكِرَتَهَا.","قَالَتْ: سَأَعُودُ إِلَى هٰذَا الْمَكَانِ يَوْمًا مَا."],english:["The trip ended and it was time to return.","Layla opened her suitcase and put gifts in it.","She closed the suitcase and checked her ticket.","She said: I will return to this place someday."]}
];
