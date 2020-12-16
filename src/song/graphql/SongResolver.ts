import {
    Arg,
    Query,
    Mutation,
    Resolver,
    Ctx,
} from "type-graphql";
import SongSchema from "./SongSchema";
import { ISong } from "../SongModel";

@Resolver((of) => SongSchema)
export class SongResolver {

    @Query(() => String)
    sample(@Ctx() ctx: any): String {
        const data = `Adwentowe
        [0018] Archanioł Boży
        [0021] Chrystus Król do nas
        [0355] Czekam na Ciebie dobry Boże
        [0022] Czekam na Ciebie Jezu mój 
        [0586] Emmanuelu Książ
        [0352] Gdy adwentowy ranek
        [0354] Gdy adwentowy wieczór
        [0023] Głos wdzięczny
        [0024] Grzechem Adama
        [0025] Hejnał wszyscy
        [0822] Marana tha
        [0408] Nie zamykajmy serc zbawienia
        [0029] Niebiosa rosę
        [0033] Oto Pan Bóg przyjdzie
        [0034] Po upadku człowieka 
        [0917] Poszli w ciemno
        [0035] Przybądź, Panie bo czekamy
        [0037] Raduj się, ziemio
        [0038] Spuśćcie, nam na ziemskie
        [0016] Spuśćcie, rosę niebiosa
        [0042] Zdrowaś Bądź, Maryja
        Asperges
        [0951] Chwała Ojcu
        [0001] Com przyrzekł Bogu
        [0004] Przez chrztu świętego
        [0005] Widziałem wodę płynącą
        Dialogi
        [0349] Akt oddania NSPJ
        [0778] Anioł Pański
        [0204] Błogosławiony jesteś Boże
        [0487] Chrystus Zmartwychwstał
        [0405] Dialog MBNP
        [0401] Domus Dei
        [0012] Jutrznia Wielka Sobota 
        [0067] Laudate Dominum
        [0860] Litania do JP II
        [0664] Litania do Najśw Serca Jezusa
        [0665] Litania do NMP
        [0284] Litania do Wszystkich Łacina
        [0397] Litania do Wszystkich Św.
        [0868] Modlitwa do Św. Michała
        [0003] Modlitwa Rzymska 
        [0933] Modlitwa ŚDM
        [0219] Modlitwa wiernych
        [0488] Niebo i ziemia się cieszą Alle
        [0032] Niech Pan przymie Prefacja
        [0020] Pod Twoją obronę
        [0953] Powstańmy
        [0478] Psalm Ślub 
        [0479] Psalmy
        [0861] Roczki
        [0360] Światło Chrystusa
        [0028] Triduum Paschalne do II nd
        [0027] Uwielbiajmy tajemnicę wiary
        [0031] Wierzę w jednego Boga 
        [0030] Zmiłuj się nad nami Panie 
        Do Ducha Św.
        [0190] O Duchu Święty Boże
        [0485] Przybądź Duchu Stw Ślub
        [0195] Przybądź Duchu Stworzycielu
        [0196] Przybądź Duchu Święty
        Do NMP
        [0350] Anielską pieśń dzwon grał
        [0800] Bądź pozdrowiona łaski pełna
        [0353] Biedny kto Ciebie
        [0357] Boga Rodzico przeczysta 
        [0920] Bogurodzica
        [0361] Brzmi cichej godziny
        [0801] Była cicha i piękna
        [0365] Chwalcie łąki umajone
        [0367] Ciebie na wieki
        [0368] Cześć Maryi
        [0369] Daj mi Jezusa
        [0370] Do Ciebie Matko
        [0373] Dzisiaj pozdrawiamy
        [0809] Gdy klęczę przed Tobą
        [0374] Gdy trwoga nas ogarnia
        [0375] Gdy zawrzała wojna w świecie
        [0377] Gwiazdo śliczna wspaniała
        [0378] Gwiazdo zaranna
        [0379] Idźmy tulmy
        [0815] Jest zakątek na tej ziemi
        [0384] Już się zbliżył miesiąc maj
        [0385] Królowej anielskiej
        [0414] Królowo nasza Śląska Gospo.
        [0915] Łask Pośredniczko
        [0866] Maryjo dziękujemy Ci
        [0391] Maryjo ja Twe dziecię
        [0399] Maryjo Królowo Polski
        [0395] Maryjo Matko
        [0396] Maryjo przyjmij dzięki
        [0810] Maryjo Tyś naszą nadzieją
        [0930] Matko Boska za nami wstawiaj
        [0400] Matko Najświętsza
        [0949] Matko niebieskiego Pana
        [0402] Matko Piekarska
        [0404] Matko Pomocy Nieustającej
        [0406] Matko sprawiedliwości
        [0407] Miłosierna Matko Boska
        [0569] My chcemy Boga
        [0419] Nasza Pani Piekarska
        [0409] Nie płacz już dziecino
        [0410] Niech nam błogosławi
        [0929] Niepokalane Serce Maryi
        [0412] O Fatimska nasza Pani
        [0413] O Maryjo czemu biegniesz 
        [0829] O Maryjo Królowo nasza
        [0417] O Maryjo witam (żegnam) Cię
        [0421] O Najświętsza Matko Boża
        [0422] O Pani nasza Królowo
        [0013] O Piekarska Nasza Pani
        [0424] O Serce Maryi
        [0831] Od jutrzenki Ty jesteś
        [0428] Pieśnią wesela witamy
        [0429] Po górach dolinach
        [0432] Pod Twój płaszcz
        [0436] Pozdrawiam Cię o Maryjo
        [0437] Przeradosna a miłosna
        [0441] Serdeczna Matko
        [0443] Stała Matka boleściwa
        [0445] Totus Tuus
        [0444] Tysiąc razy pozdrawiamy 
        [0850] Usłysz Bożej Matki głos
        [0011] W słonecznej światłości
        [0447] Weź w swą opiekę
        [0455] Witaj Maryjo śliczna Pani
        [0456] Witaj Matko uwielbiona
        [0459] Witaj święta i poczęta
        [0464] Z dalekiej Fatimy
        [0465] Z dawna Polski Tyś Królową
        [0466] Z śląskich kopalń
        [0856] Zapada zmrok
        [0468] Zawitaj Królowo Różańca
        [0471] Zdrowaś Maryjo
        [0472] Ze wzgórz Częstochowy
        Do NSPJ
        [0337] Bóg nad swym ludem
        [0952] Chryste Królu
        [0341] Chrystus Królem
        [0315] Jezu gdy patrzę
        [0316] Jezu miłości Twej
        [0268] Jezu ufam ufam Tobie 
        [0317] Każda żyjąca dusza
        [0318] Kochajmy Pana
        [0344] Króluj nam Chryste
        [0319] Najświętsze Serce Boże
        [0477] Najświętsze Serce Jezusa 
        [0321] Nazareński śliczny kwiecie
        [0322] Nie opuszczaj nas
        [0323] Niechaj Serce Jezusowe
        [0325] O niewysłowione szczęście
        [0327] O Serce Jezusa
        [0328] Pobłogosław Jezu drogi
        [0330] Serce Jezusa ciche pokorne
        [0331] Serce Twe Jezu
        [0333] Twemu Sercu cześć
        [0334] Witaj Krynico
        [0336] Z tej biednej ziemi
        
        
        Do Trójcy Św.
        [0197] Chwała Ojcu i Synowi
        [0198] Ciebie Boga wysławiamy
        [0199] Ciebie Boże wielbimy
        [0476] Już słońce schodzi ogniste
        [0919] Nierozdzielna
        Do Świętych
        [0501] Antoni Patronie Ty nasz
        [0495] Antoni rzeczy zgubionych
        [0006] Błogosławiony Papieżu Nasz
        [0873] Bóg bogaty w miłosierdzie
        [0546] Chwała wam Apostołowie
        [0937] Cóż to za orszak
        [0498] Gdy pomocy szukasz
        [0416] Jana wzmacnia wiara 
        [0872] Janie Pawle Drugi
        [0002] Janie Sarkandrze 
        [0418] Janie Sarkandrze schylamy 
        [0496] Jeżeli szukasz cudów
        [0544] Każdy górnik ciebie zna
        [0874] Oddany Maryi
        [0497] Piastunie Boga błogosławiony
        [0481] Szczęśliwy kto sobie Patrona
        [0499] Święty Antoni cudotwórco
        [0548] Święty(a) Patronie nasz
        [0500] Tryumfuj niebo 
        [0936] Wszechmocny Boże
        Eucharystyczne
        [0206] Bądź pochwalon na wieki
        [0207] Bądźże pozdrowiona
        [0210] Bóg kiedyś stał się
        [0211] By wywyższyć swe stworzenia
        [0869] Chleb niebiański
        [0212] Chrystus Pan karmi nas
        [0214] Chwalmy niewysłowiony
        [0215] Chwała i dziękczynienie
        [0217] Cóż Ci Jezu damy
        [0218] Cuda nad cuda
        [0221] Gdzie w uroczystej cichości
        [0223] Idzie idzie Bóg prawdziwy
        [0224] Idzie wieczny Bóg
        [0225] Ja wiem w kogo ja wierzę
        [0228] Jeden chleb
        [0229] Jezu drogi Tyś miłością
        [0230] Jezu Jezu do mnie przyjdź
        [0231] Jezu w Hostii
        [0232] Jezu zostań w nas
        [0233] Jezusa ukrytego
        [0234] Jezusowi cześć i chwała
        [0237] Kłaniam się Tobie
        [0239] Miłość Boża cię przyzywa
        [0241] Niech będzie chwała
        [0242] Niech żyje Jezus
        [0243] Niechaj będzie pochwalony
        [0943] Niechaj będzie pochwalony od
        [0245] O milcząca Hostio
        [0247] O Panie Ty nam dajesz
        [0248] O Panie Tyś moim Pasterzem
        [0250] O święta Uczto
        [0251] O zbawcza Hostio
        [0255] Pan Jezus już się zbliża
        [0256] Pan Wieczernik przygotował
        [0257] Pan zstąpił z nieba
        [0258] Panie dobry jak chleb
        [0411] Panie pragnienia ludzkich serc
        [0261] Pochwalon bądź
        [0262] Pokarmie aniołów
        [0266] Pójdź do Jezusa
        [0267] Pójdźcie błogosławić Pana
        [0269] Przed tak wielkim
        [0271] Przygotuję Ci serce
        [0272] Przyjdźcie do Mnie wszyscy
        [0277] Tobie ja żyję
        [0278] Twoja cześć chwała
        [0280] U drzwi Twoich
        [0281] Uklęknij na kolana
        [0282] Upadnij na kolana
        [0283] W sakramencie utajony
        [0285] Wielbię Ciebie
        [0286] Witaj Boże utajony
        [0287] Witaj Jezu w tej świętości
        [0288] Witam Cię witam
        [0292] Zbliżam się w pokorze
        [0293] Zróbcie Mu miejsce
        Giszowiec
        [0205] Albowiem tak Bóg umiłował
        [0072] Alleluja, wznoś pod niebo głos
        [0343] Amen jak Maryja
        [0160] Ave Maria - Gdy klęczę przed
        [0348] Ave Maryja - woła cały świat
        [0036] Będę śpiewał Tobie
        [0040] Blisko, blisko
        [0345] Blues Maryjny
        [0008] Bóg tak umiłował świat
        [0209] Chcę przestąpić Jego próg
        [0073] Chcę wywyższać Imię Twe
        [0070] Chlebem niebieskim
        [0216] Chrystus Pan, Boży Syn
        [0010] Chwalę Ciebie Panie 
        [0015] Chwalmy Pana w rytmie 
        [0220] Ciągle zaczynam od nowa
        [0222] Do Ciebie Panie woła
        [0346] Dobra Matko i Królowo
        [0226] Dotknij Panie moich oczu
        [0041] Duchu Święty przyjdź
        [0227] Duchu Żyjącego Boga
        [0235] Dzielmy się wiarą jak chlebem
        [0161] Dzięki Ci Maryjo
        [0236] Dzięki Jezu
        [0238] Dziś jest czas
        [0945] Flaga
        [0362] Godzien, o godzien jest Bóg
        [0363] Golgoto
        [0162] Gwiazdo Zaranna obleczona
        [0165] Hetmanka
        [0076] Hosanna
        [0240] Idzie mój Pan
        [0244] Im lepiej Cię poznaję
        [0932] Ja jestem Drogą Prawdą
        [0924] Jak dobrze jest dziękować
        [0074] Jak mi dobrze 
        [0056] Jeden jest tylko Pan
        [0080] Jeruzalem
        [0168] Jest na świecie miłość
        [0246] Jest w sercu moim
        [0249] Jesteś Królem
        [0364] Jesteś radością mojego życia 
        [0252] Jesteś, Panie, winnym 
        [0253] Jezioro Genezaret 
        [0254] Jezu, Tyś jest Światłością
        [0259] Jezus Chrystus moim Panem 
        [0078] Jezus daje nam zbawienie
        [0260] Jezus jest tu
        [0366] Jezus Królem 
        [0263] Jezus kocha Ciebie dziś
        [0170] Jezus swoją Matkę pozostawił
        [0081] Jezus, Najwyższe Imię
        [0208] Jeżeli to Twój głos
        [0371] Już teraz we mnie kwitną 
        [0480] Każdy może dziś do Jezusa
        [0938] Kiedyś wino i chleb
        [0082] Kocham Ciebie Jezu
        [0083] Kościół to nie tylko dom
        [0085] Król królów
        [0347] Królowa Jasnej Góry
        [0393] Krzyżu Święty Hymn o Krzyżu
        [0121] Laudato Si
        [0213] Lud Twój Panie
        [0201] Magnificat
        [0171] Magnificat - Jak pojąć
        [0939] Mama czuwa Mama wie
        [0931] Maryjo Tyś - gdy popatrzysz
        [0173] Maryjo, śliczna Pani
        [0090] Memu Bogu
        [0093] Miłość Twa
        [0026] Misericordias 
        [0376] Mój Zbawiciel
        [0950] Na jeziorze wielka burza
        [0264] Na wieki będzie trwać chwała 
        [0484] Naśladuj mnie
        [0380] Nie boję się gdy ciemno jest 
        [0095] Nie bój się, wypłyń na głębię
        [0265] Nie umiem dziękować Ci
        [0097] Niech miłość
        [0045] Niech miłość Twoja 
        [0381] Niechaj zstąpi Duch Twój
        [0270] Nim świt obudzi noc
        [0403] O wychwalajcie Go   
        [0273] O, Chrystusowa męko
        [0274] O, Jezu, cichy i pokorny
        [0382] O, o, o niebo jest w sercu mym
        [0175] O, Pani ufność nasza
        [0101] Oblubieniec
        [0275] Oczyść serce me
        [0276] Oddajmy cześć
        [0055] Ofiaruję Tobie Panie mój
        [0279] Ogrody
        [0289] On wskaże drogę
        [0290] Oto jest dzień
        [0291] Otwórz me oczy
        [0296] Otwórzmy serca
        [0202] Pan blisko jest oczekuj
        [0203] Pan jest mocą swojego 
        [0103] Pan jest pasterzem moim
        [0104] Pan wieczernik 
        [0108] Pana wielbić chcę
        [0111] Panie mój przychodzę dziś
        [0383] Panie proszę spraw  
        [0112] Panie, Twój tron
        [0298] Pewnej nocy 
        [0925] Pokochajcie Jezusa
        [0386] Potrzebuje cię Chrystus
        [0299] Póki mego życia
        [0113] Pragnę śpiewać Ci 
        [0948] Prawo miłości
        [0302] Przed obliczem Pana
        [0114] Przyjdź Duchu Święty ja pragn
        [0117] Psalm 148 Alleluja 
        [0304] Radością naszą jesteś Ty
        [0483] Rozpięty na ramionach
        [0305] Róże są dary łaski
        [0312] Ruah, Ruah, Ruah
        [0118] Ruszaj
        [0313] Sandały
        [0946] Schowaj mnie
        [0329] Serce wielkie nam daj,
        [0420] Sercem Kocham Jezusa
        [0119] Skała
        [0314] Słuchaj Izraelu
        [0320] Spocznij na mnie Duchu Pana
        [0311] Strażnik skarbów
        [0324] Szukajcie wpierw 
        [0326] Szymonie Cyrenejczyku
        [0194] Świeć gwiazdeczko
        [0122] Święte imię Jezus
        [0128] Świętemu Bogu oddaj cześć
        [0131] Ta Krew
        [0133] Tak mnie skrusz
        [0387] Taki duży taki mały 
        [0388] To mój Pan wiele mi uczynił
        [0332] To nasz Bóg
        [0137] To przykazanie
        [0942] To się dzisiaj stanie
        [0138] Tobie chór aniołów
        [0339] Ty jeden, Panie, wiesz
        [0061] Ty jesteś Miłością 
        [0143] Ty tylko mnie poprowadź
        [0335] Ty wyzwoliłeś nas Abba Ojcze
        [0482] Tyś jak skała
        [0338] Tyś w Wieczerniku
        [0060] Ubi caritas 
        [0176] Uczyńcie, co wam mówi Syn
        [0144] Uwielbiajcie Pana
        [0145] Uwielbiam Cię
        [0062] Uwielbiam Imię Twoje Panie
        [0149] W drogę z nami
        [0389] W lekkim powiewie 
        [0148] W Tobie jest światło
        [0152] Wejdźmy do Jego bram
        [0390] Wielbić Imię Pana dziś chcę
        [0039] Wielbić Pana chce
        [0153] Witaj Pokarmie
        [0928] Wspaniała Matko
        [0155] Wspaniały Dawco Miłości
        [0157] Z wielką ufnością
        [0392] Zbawienie przyszło przez
        [0158] Ziemia, którą mi dajesz
        [0159] Zjednoczeni w Duchu
        [0340] Zobaczcie, jak wielką miłością
        [0342] Zwiastunom z gór
        Giszowiec kolędy
        [0183] Biała ziemia 
        [0184] Bóg obiecał
        [0185] Choinek blask
        [0187] Dziś w stajence 
        [0188] Gdy zapada grudniowa noc
        [0189] Gwiazdy tańczyły
        [0191] Kiedyś tam
        [0192] Maleńki Jezu
        [0193] Ten szczególny dzień 
        [0200] Zwiastowanie
        Godzinki
        [0779] Godzinki
        Gorzkie żale
        [0771] Część I
        [0772] Część II
        [0773] Część III
        [0770] Pobudka
        Kolędy
        [0043] A wczora z wieczora
        [0044] Ach, ubogi żłobie
        [0046] Anioł, pasterzom mówił
        [0047] Bóg się rodzi
        [0048] Bóg się z Panny 
        [0049] Bracia, patrzcie jeno
        [0050] Cicha noc
        [0051] Cieszmy się i pod niebiosy
        [0052] Dlaczego dzisiaj wśród nocy
        [0053] Do Betlejemu 
        [0054] Do szopy, hej pasterze
        [0057] Dzisiaj w Betlejem
        [0058] Gdy się Chrystus rodzi
        [0059] Gdy śliczna Panna
        [0358] Hej w Dzień Narodzenia 
        [0106] Jakaż to gwiazda
        [0063] Jezus malusieńki
        [0064] Jezusa narodzonego
        [0068] Lulajże Jezuniu
        [0107] Mędrcy świata
        [0069] Mizerna cicha
        [0359] Największy Gazda 
        [0071] Narodził się Jezus Chrystus
        [0923] Nie było miejsca dla Ciebie 
        [0105] Nie tak bystro płynie
        [0075] O, gwiazdo betlejemska
        [0077] Pan z nieba i z łona
        [0079] Pasterze mili
        [0084] Pójdźmy wszyscy do stajenki
        [0086] Przybieżeli do Betlejem
        [0087] Przylecieli aniołowie
        [0088] Przystąpmy do szopy
        [0102] Rodzino święta
        [0089] Rozkwitnęła się lilija
        [0091] Śliczna Panienka
        [0622] Światło na oświecenie pogan
        [0092] Tryumfy Króla
        [0094] W żłobie leży
        [0096] Wesołą nowinę
        [0099] Wśród nocnej ciszy
        [0100] Z narodzenia Pana
        Nieszpory
        [0705] Boga naszego chwalcie
        [0700] Boże wejrzyj
        [0702] Całym Cię sercem
        [0704] Chwalcie o dziatki
        [0156] Ojcze nasz
        [0475] Prośby 
        [0935] Responsorium
        [0701] Rzekł Pan do pana mego
        [0703] Szczęśliwy i nie zna kaźni
        [0706] Wielbi dusza moja
        [0098] Wielbij duszo moja Pana 
        
        
        
        Pasyjne
        [0124] Ach mój Jezu  jak Ty klęczysz
        [0125] Ach mój Jezu ukochany
        [0126] Dobranoc głowo święta
        [0127] Gdy ja sobie tak rozważam
        [0019] Hosanna Synowi
        [0129] Jezu Chryste Panie miły
        [0130] Jużem dość pracował
        [0764] Kłaniamy Ci się Panie Jezu
        [0132] Krzyżu Chrystusa
        [0134] Krzyżu mój krzyżu
        [0135] Krzyżu święty nade wszystko
        [0136] Któryś za nas cierpiał
        [0154] Ludu mój ludu
        [0139] O głowo uwieńczona
        [0140] O Jezu mój
        [0141] O Krwi najdroższa
        [0142] Ogrodzie Oliwny
        [0394] Oto drzewo krzyża
        [0146] Panie Ty widzisz
        [0767] Rozmyślajmy dziś
        [0921] Sław języku tajemnicę
        [0150] W krzyżu cierpienie
        [0151] Wisi na krzyżu
        [0398] Wstanę i pójdę 
        [0768] Zastanów się o człowiecze
        Pokutne
        [0109] Bądź mi litościw
        [0110] Bliskie jest królestwo
        [0926] Duszo Chrystusowa
        [0116] Nawróć się ludu
        [0120] Przystąpcie bliżej
        [0123] Zmiłuj się nade mną
        Przygodne
        [0934] Błogosławieni ŚDM
        [0568] Boże coś Polskę
        [0573] Boże mocny
        [0574] Boże obdarz Kościół 
        [0575] Boże w dobroci
        [0007] Boże, lud Twój
        [0576] Bóg jest miłością
        [0579] Być bliżej Ciebie chcę
        [0580] Chrystus to nadzieja
        [0581] Chwalcie Pana wszyscy
        [0009] Co nam nakazuje nasza wiara
        [0584] Dobry Jezu racz wysłuchać
        [0587] Gdzie miłość wzajemna
        [0588] Głoś Imię Pana
        [0944] Idźcie na cały świat
        [0591] Jak miłe przybytki nam dał
        [0865] Jeszcze raz pozdrowić muszę
        [0593] Jezu ufam Tobie
        [0817] Jezus przez życie mnie 
        [0561] Kapłanów swoich dał nam Bóg
        [0549] Kiedy ranne wstają zorze
        [0115] Kiedy w jasną, spokojną
        [0594] Kiedyś o Jezu
        [0597] Kto się w opiekę
        [0017] Liczę na Ciebie Ojcze
        [0598] Ludu kapłański
        [0862] Miałem ci ja w sercu
        [0567] Miłosierdziem Twoim Panie
        [0147] Na zachód dzień się chyli
        [0870] Nasze plany i nadzieje
        [0415] Nie rzucim Chryste świątyń
        [0863] Niech Cię chwali Boże
        [0602] Niechaj z nami będzie Pan
        [0605] Ojcze chwała Tobie
        [0607] Ojcze z niebios
        [0066] Pałac
        [0833] Pan kiedyś stanął
        [0611] Panie przebacz nam
        [0613] Pod Twą obronę
        [0616] Przyjdź z pokłonem 
        [0864] Przyjmij Ojcze Hostię
        [0617] Przykazanie nowe 
        [0621] Spojrzyj z nieba
        [0557] Suplikacje
        [0625] Ty wszechmocny Panie
        [0489] Uroczysty dzień Komunii
        [0014] W każdym strapieniu
        [0628] W majestacie na niebieskim
        [0351] Wierzę w Ciebie Panie 
        [0553] Wszystkie nasze dzienne
        [0633] Wszystko Tobie oddać
        [0632] Wszytka moja nadzieja
        [0854] Wy jesteście na ziemi
        [0867] Zgromadzeni na modlitwie
        Uwielbienia
        [0294] Boże zmiłuj się nad nami
        [0295] Cały świat niech śpiewa
        [0297] Czego chcesz od nas Panie
        [0300] Dzięki o Panie
        [0301] Dziękujemy Ci Ojcze nasz
        [0303] Niech będzie Bóg uwielbiony
        [0306] Panie mój cóż Ci oddać
        [0307] Panie nasz Boże
        [0308] Radośnie Panu hymn
        [0309] Skosztujcie i zobaczcie
        [0310] Święty Święty Święty
        Wielkanocne
        [0163] Alleluja żyw już jest
        [0164] Chrystus zmartwychwstan jest
        [0927] Jezus Chrystus jest Panem
        [0182] Królu Boże Abrahama
        [0166] Nie zna śmierci Pan żywota
        [0167] Niech w święto radosne
        [0169] Otrzyjcie już łzy
        [0186] Pan Jezus w niebo 
        [0172] Raduj się nieba
        [0174] Wesel się Królowo miła
        [0177] Wesoły nam dzień
        [0178] Wstał Pan Chrystus
        [0179] Wysławiajmy Chrysta Pana
        [0180] Złóżcie troski
        [0922] Zmartwychwstał Pan
        [0181] Zwycięzca śmierci
        Za zmarłych
        [0916] Boże Sędzio Sprawiedliwy
        [0941] Bóg miłosierny daje odkupien
        [0641] Dobry Jezu a nasz Panie
        [0786] Dziś moją duszę
        [0940] Niech Aniołowie
        [0954] Psalm pogrzeb
        [0646] Salve Regina
        [0784] Wieczny odpoczynek
        [0486] Witaj Królowo Matko litości 
        Łacina
        [0900] Adoro te devote
        [0901] Attende Domine
        [0902] Ave Maria
        [0903] Ave Verum
        [0904] Credo
        [0065] Missa 
        [0907] O Salutaris Hostia
        [0908] Peter noster
        [0909] Regina Caeli Laetare
        [0910] Rorate coeli 
        [0911] Salve Regina 2
        [0912] Tantum ergo Sacramentum
        [0914] Veni Creator`;

        const regex = /(?<=\[).*?(?=])|((?<=\])(.*))/g;

        let groups: String[] = [];
        let songs: ISong[] = [];
        let arr = data.split(`\n`);
        let arr2 = arr.map(obj => {
            let res = obj.match(regex) || [];
            console.log(res, obj);
            if (!res.length && obj.length) { // group
                groups.push(obj)
            }
            else {
                let song = new ctx.songModel({
                    number: parseInt(res[0]),
                    name: res[1].substr(1)
                })

                // song.save()
                console.log({ song });
            }
            //return [res[0], res[1].substr(1)]
        });

        return JSON.stringify(groups)
    }

    @Query(() => SongSchema, { nullable: true })
    async songById(@Arg("id") id: string, @Ctx() ctx: any): Promise<ISong> {
        const songCollection = await ctx.songModel.findOne({ _id: id });

        return songCollection;
    }

    @Query(() => SongSchema, { nullable: true })
    async songByNumber(@Arg("number") number: number, @Ctx() ctx: any): Promise<ISong> {
        const songCollection = await ctx.songModel.findOne({ number: number });

        return songCollection;
    }

    @Query(() => [SongSchema], { nullable: true })
    async songList(@Ctx() ctx: any): Promise<ISong[]> {
        const songCollection = await ctx.songModel.find();

        return songCollection;
    }

    @Mutation(() => SongSchema)
    async addSong(
        @Arg("name") name: string,
        @Arg("number") number: number,
        @Ctx() ctx: any
    ): Promise<ISong> {
        const song = await new ctx.songModel({
            name,
            number,
        });

        return song.save();
    }
}
