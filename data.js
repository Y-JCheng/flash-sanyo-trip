// 行程資料：之後要改行程，只需要改這個檔案
// k（類型）: move 交通 / eat 吃 / see 玩 / stay 住宿
// jp: 日文與假名；map: Google 地圖搜尋字
window.TRIP = {
  title: "山陽紅葉帖",
  sub: "岡山・倉敷・尾道",
  days: [
    {
      id: "d1", season: { n: "地始凍", k: "ちはじめてこおる" }, date: "2026-11-15", label: "11/15", dow: "日",
      title: "抵達岡山・倉敷",
      stay: { name: "NAGI 倉敷", jp: "NAGI倉敷（なぎ くらしき）", addr: "〒710-0055 岡山県倉敷市阿知1-14-3", tel: "080-5913-9349", checkin: "15:00–21:00", checkout: "11:00", note: "從倉敷站步行約 2 分鐘；9:00 起可寄放行李", url: "https://maps.app.goo.gl/8WZjf1Aa1LwgEMpy9" },
      items: [
        { t: "15:05 抵達", k: "move", text: "搭 IT214 到岡山機場", jp: "岡山桃太郎空港（おかやま ももたろう くうこう）", note: "桃園 11:30 起飛，岡山 15:05 抵達（時刻依航空公司公告，出發前請再確認）。落地後要過入境審查、領行李，約需 1 小時。", map: "岡山桃太郎空港" },
        { k: "move", transit: true, text: "搭利木津巴士到倉敷站北口", jp: "リムジンバス → 倉敷駅北口（くらしきえき きたぐち）", note: "約 35 分鐘，¥1,150，可刷 ICOCA / Suica。巴士班次請以機場當天公告為準。", map: "倉敷駅北口" },
        { k: "stay", text: "到飯店放行李", jp: "NAGI倉敷（なぎ くらしき）", note: "從倉敷站步行約 2 分鐘。入住 15:00–21:00，退房 11:00。還沒到入住時間也可以先寄放行李（9:00 起）。", url: "https://maps.app.goo.gl/8WZjf1Aa1LwgEMpy9" },
        { k: "see", text: "逛倉敷 outlet", jp: "三井アウトレットパーク倉敷（みつい アウトレットパーク くらしき）", map: "三井アウトレットパーク倉敷", links: [{ n: "樓層導覽 Floor Guide", u: "https://mitsui-shopping-park.com/mop/kurashiki/search/floor1f.html" }] },
        { k: "see", text: "（可選）逛 AEON Mall 倉敷", jp: "イオンモール倉敷（いおんもーる くらしき）", note: "跟三井 outlet 二選一或都逛，看體力和時間。", url: "https://maps.google.com?q=Aeon%20Mall%20Kurashiki,%201%E7%95%AA%E5%9C%B0%20Mizue,%20Kurashiki,%20Okayama%20710-8560,%20Japan&ftid=0x355156fb06ab9a41:0xd5af4d941f17e7df" },
        { k: "eat", text: "晚餐：隨意吃，或選下面其中一家", jp: "",
          map: "倉敷駅 レストラン",
          recs: [
            { g: "吃", list: [
              { n: "Bukkake-Udon Furuichi", d: "烏龍麵，在倉敷站附近", u: "https://maps.app.goo.gl/DBcD72uDRCX2Nbyc8" },
              { n: "Okayama local cuisine TORAIYA", d: "岡山鄉土料理，在本町", u: "https://maps.app.goo.gl/3TbfURz2MdBjJmaNA"},
              { n: "Ringer Hut（リンガーハット）", d: "長崎強棒麵，在 Ario 倉敷 2 樓美食街（寿町）", u: "https://maps.app.goo.gl/m5NEpMgkE7AqwzybA" }
            ] }
          ] }
      ]
    },
    {
      id: "d2", season: { n: "地始凍", k: "ちはじめてこおる" }, date: "2026-11-16", label: "11/16", dow: "一",
      title: "倉敷一日",
      stay: { name: "NAGI 倉敷", jp: "NAGI倉敷（なぎ くらしき）", addr: "〒710-0055 岡山県倉敷市阿知1-14-3", tel: "080-5913-9349", checkin: "15:00–21:00", checkout: "11:00", note: "從倉敷站步行約 2 分鐘；9:00 起可寄放行李", url: "https://maps.app.goo.gl/8WZjf1Aa1LwgEMpy9" },
      items: [
        { t: "早上", k: "eat", text: "早餐：選下面其中一家", jp: "カフェ", note: "8:50 要到觀光案內所排隊買船票，早餐不要拖太晚。營業時間我還沒查，出發前請在地圖確認。",
          map: "倉敷 カフェ",
          recs: [
            { g: "吃", list: [
              { n: "Cafe Gewa", d: "在美觀地區，很近", u: "https://maps.app.goo.gl/UUpP5hhbKaY1HeoV6" },
              { n: "cafe BISCUIT", d: "在美觀地區，很近", u: "https://maps.app.goo.gl/3ZLZhNgRu6FftYnd9" }
            ] }
          ] },
        { t: "8:50 到・9:00 開賣", k: "see", text: "到觀光案內所買川舟流船票，開賣前 10 分鐘（8:50）先去排隊", jp: "倉敷館観光案内所（くらしきかん かんこうあんないじょ）", note: "9:00 開始賣票。只賣當天票，先到先買，早買才不會滿。", map: "倉敷館観光案内所" },
        { t: "9:30–17:00", k: "see", text: "搭船遊倉敷川", jp: "くらしき川舟流し（くらしき かわふねながし）", note: "約 20 分鐘，¥700，每 30 分鐘一班", map: "くらしき川舟流し" },
        { k: "see", text: "本町通、東町老街：帆布、雜貨、町家咖啡", jp: "本町通り（ほんまちどおり）・東町（ひがしまち）", map: "倉敷 本町通り",
          recs: [
            { g: "吃", list: [
              { n: "おむすびとくんせい", u: "https://maps.app.goo.gl/2Qc2iQrVtRhKh2wJA" },
              { n: "Curry Bread Specialty Shop Shirakabe", d: "咖哩麵包和可樂餅", u: "https://maps.app.goo.gl/wLYsgov1nDj3viVKA" },
              { n: "Yuurin-an Guesthouse & Cafe", d: "下午茶或午餐", u: "https://maps.app.goo.gl/cbWsZSbJwZ9wX8x96" },
              { n: "Ivy West Gate", d: "冰淇淋", u: "https://maps.app.goo.gl/2XE13dPSNZx86RA7A" },
              { n: "Irodori", d: "天婦羅", u: "https://maps.app.goo.gl/83oVFm8Wz3t5bEVN6" }
            ] },
            { g: "逛", list: [
              { n: "Heart Made Base", d: "日式傳統工藝單寧", u: "https://maps.app.goo.gl/9aeHgBtmybgEirwe7" },
              { n: "Hayashi Genjuro Shouten", d: "超好逛", u: "https://maps.app.goo.gl/kz4HjkCmfSQtc8s16" },
              { n: "Chapeaugraphy（シャポーグラフィー）", d: "帽子店", u: "https://maps.app.goo.gl/fSgyf6wZbkpRetF98" },
              { n: "Morita Brewery", d: "酒造", u: "https://maps.app.goo.gl/rbnJ7bBPrQ1fDTco6" },
              { n: "UramadO Kurashiki", d: "包包", u: "https://maps.app.goo.gl/FkeXj9a1NJav8upa6" },
              { n: "Nyochiku-do", d: "紙膠帶", u: "https://maps.app.goo.gl/fMBv2GihN75bokGv7" }
            ] },
            { g: "參觀", list: [
              { n: "Kurashiki Yoimachi Garden", d: "小竹林", u: "https://maps.app.goo.gl/zDV4HL1XtAJxUH2n7" }
            ] }
          ] },
        { k: "eat", text: "晚餐：Sawaraya（鰆魚料理），飯後散步看夜間點燈", jp: "鰆（さわら）料理", note: "記得訂位", url: "https://maps.app.goo.gl/pXb3qbkBSfRtVBzR7" }
      ]
    },
    {
      id: "d3", season: { n: "金盞香", k: "きんせんかさく" }, date: "2026-11-17", label: "11/17", dow: "二",
      title: "尾道市區",
      stay: { name: "Vessel Inn 福山站前", jp: "ベッセルイン福山駅前（ふくやまえきまえ）", addr: "〒720-0061 広島県福山市丸之内1-2-1", note: "就在福山站旁；入住、退房時間和電話還沒查到，請看訂房確認信。福山到尾道搭 JR 約 20 分鐘。", url: "https://maps.app.goo.gl/r5q5sRht3252f2et7" },
      items: [
        { k: "move", transit: true, text: "倉敷搭 JR 到福山", jp: "倉敷駅（くらしきえき）→ 福山駅（ふくやまえき）", map: "福山駅" },
        { k: "stay", text: "到飯店寄放行李", jp: "ベッセルイン福山駅前（ふくやまえきまえ）", note: "就在福山站旁。大行李先放飯店，出門只帶隨身包。入住時間請看訂房確認信。", url: "https://maps.app.goo.gl/r5q5sRht3252f2et7" },
        { k: "move", transit: true, text: "福山搭 JR 到尾道（約 20 分）", jp: "福山駅（ふくやまえき）→ 尾道駅（おのみちえき）", map: "尾道駅" },
        { k: "eat", text: "午餐：尾道拉麵 Onomichi Ramen Kuukai", jp: "尾道ラーメン（おのみち ラーメン）", note: "可以邊看海邊吃。推薦大家共點一份炒飯。", url: "https://maps.app.goo.gl/pHHmYL4QujtAEuY7A" },
        { k: "see", text: "搭纜車上千光寺公園看海景，再沿坡道慢慢走下來", jp: "千光寺（せんこうじ）公園", map: "千光寺公園",
          recs: [
            { g: "吃", list: [
              { n: "Petit Anon", d: "和式義大利麵", u: "https://maps.app.goo.gl/f4nAMH4RzuSY9rjS8" },
              { n: "Nekonotepan factory", d: "迷你麵包專賣", u: "https://maps.app.goo.gl/S58jVTyF3LuAUCHaA" },
              { n: "Hanutei", d: "老屋甜點", u: "https://maps.app.goo.gl/8Uay9e1SYgFNKxyQ9" }
            ] },
            { g: "喝", list: [
              { n: "Atmosphere", d: "荒廢公寓改建的流行咖啡廳", u: "https://maps.app.goo.gl/cpEbgXw99jvAVxE86" },
              { n: "Tea Stand Yamate (Tea Factory Gen)", d: "日式茶館", u: "https://maps.app.goo.gl/kB4xtuJhbhz3Noy59" }
            ] }
          ] },
        { k: "see", text: "尾道本通商店街、海邊步道", jp: "尾道本通り商店街（おのみち ほんどおり しょうてんがい）", map: "尾道本通り商店街",
          recs: [
            { g: "吃", list: [
              { n: "Five", d: "餐廳", u: "https://maps.app.goo.gl/TbhFrEd9oWy1hcgt6" },
              { n: "Takahara Seikichi diner", d: "餐廳", u: "https://maps.app.goo.gl/zPLD97Y7KJBLu1na6" },
              { n: "Koro Bakery", d: "麵包店", u: "https://maps.app.goo.gl/BUMivwGyg8HCRmng6" },
              { n: "Oyatsu-to-Yamaneko", d: "尾道布丁", u: "https://maps.app.goo.gl/BGihGvvSS5VHHCq58" },
              { n: "Karasawa Ice Cream", d: "冰淇淋最中", u: "https://maps.app.goo.gl/hJECQAJ6MNzV8Z2dA" }
            ] },
            { g: "喝", list: [
              { n: "Mexico", d: "昭和咖啡", u: "https://maps.app.goo.gl/8aXyfk1tNsuyzZGa6" },
              { n: "POUR specialty coffee", d: "外帶咖啡", u: "https://maps.app.goo.gl/FLdHpMc2waoCqZH36" }
            ] },
            { g: "逛", list: [
              { n: "Keima Kamaboko store", d: "特產魚板店", u: "https://maps.app.goo.gl/TA1qHYayc1Z2tfg18" },
              { n: "Onomichi Guest House Anago-no-Nedoko", d: "地圖是這家旅館；旁邊的小巷子走進去到底，有一間很可愛的小書店", u: "https://maps.app.goo.gl/bEccnZ8UqJDVm55L6" }
            ] }
          ] }
      ]
    },
    {
      id: "d4", season: { n: "金盞香", k: "きんせんかさく" }, date: "2026-11-18", label: "11/18", dow: "三",
      title: "生口島一日遊",
      stay: { name: "Vessel Inn 福山站前", jp: "ベッセルイン福山駅前（ふくやまえきまえ）", addr: "〒720-0061 広島県福山市丸之内1-2-1", note: "就在福山站旁；入住、退房時間和電話還沒查到，請看訂房確認信。尾道回福山搭 JR 約 20 分鐘。", url: "https://maps.app.goo.gl/r5q5sRht3252f2et7" },
      items: [
        { k: "move", transit: true, text: "尾道站前碼頭搭船到瀨戶田港", jp: "尾道 → 瀬戸田港（せとだこう）", note: "約 40 分鐘，一天約 6 班", map: "瀬戸田港" },
        { t: "9:00–17:00", k: "see", text: "耕三寺 ＋ 白色大理石庭園「未來心之丘」", jp: "耕三寺（こうさんじ）／未来心の丘（みらいこころのおか）", note: "逛約 1.5–2 小時；紅葉季，早點去人較少", map: "耕三寺" },
        { k: "see", text: "如果天氣冷，可以去平山郁夫美術館", jp: "平山郁夫美術館（ひらやま いくお びじゅつかん）", note: "室內可以取暖。開放時間和門票我還沒查，出發前請在地圖確認。", url: "https://maps.app.goo.gl/D68WXVuSrjEKTC16A" },
        { k: "eat", text: "瀨戶田潮町商店街：檸檬鍋、檸檬蛋糕、檸檬冰淇淋", jp: "瀬戸田しおまち商店街（せとだ しおまち しょうてんがい）／レモン", map: "瀬戸田しおまち商店街",
          recs: [
            { g: "吃", list: [
              { n: "Chidori", d: "檸檬鍋", u: "https://maps.app.goo.gl/nehoFYj96qHxkFvW9" },
              { n: "Shimagokoro SETODA Honten", d: "檸檬蛋糕", u: "https://maps.app.goo.gl/ESzwg83VdHgzTD4d6" },
              { n: "Setoda Baigetsudou", d: "柑橘大福", u: "https://maps.app.goo.gl/Hkay8LhuoC7p3iPbA" }
            ] },
            { g: "喝", list: [
              { n: "檸檬汁（瀨戶田町 530-3）", d: "地圖上沒有店名；地址 530-3，和 Chidori（530-2）很近", u: "https://maps.app.goo.gl/AHNNADFpNuppj6Qz5" },
              { n: "SOIL Setoda", d: "咖啡廳，有好風景", u: "https://maps.app.goo.gl/i4B2ZKV8a2P3v9Mi7" }
            ] },
            { g: "玩", list: [
              { n: "yubune", d: "錢湯", u: "https://maps.app.goo.gl/hEjUjaSaXiGZ6GGg9" }
            ] }
          ] },
        { k: "move", transit: true, text: "下午搭巴士回尾道站", jp: "瀬戸田港（せとだこう）→ 尾道駅（おのみちえき）", note: "搭「おのみちバス」（尾道駅～瀬戸田港線），巴士也會經過耕三寺附近。車程、車資和班次我還沒查到，請用交通 App 或 Google 地圖查，並且先記好最後一班的時間。", map: "瀬戸田港" },
        { k: "eat", text: "晚上在尾道吃晚餐、散步港邊", jp: "尾道（おのみち）", map: "尾道港" }
      ]
    },
    {
      id: "d5", season: { n: "金盞香", k: "きんせんかさく" }, date: "2026-11-19", label: "11/19", dow: "四",
      title: "惠予回國・鞆之浦",
      stay: { name: "鷗風亭", jp: "ホテル鷗風亭（鞆の浦）", addr: "〒720-0201 広島県福山市鞆町鞆136番地", tel: "084-982-1123", note: "入住、退房時間尚未查到，請向旅館確認" },
      items: [
        { k: "move", text: "早上從福山出發（住在福山，不用移動）", jp: "福山駅（ふくやまえき）", map: "福山駅" },
        { k: "move", transit: true, text: "【惠予】福山搭新幹線到岡山（約 15–20 分）→ 機場巴士（約 30 分），13:45 前到機場", jp: "福山 → 岡山駅（おかやまえき）→ 岡山桃太郎空港", note: "惠予今天回國，搭 IT215（15:55 起飛）。國際線建議起飛前 2 小時到機場，所以大約 11:30–12:00 從福山出發比較保險。巴士班次請以當天公告為準。", map: "岡山桃太郎空港" },
        { k: "see", text: "【媽媽、阿姨】（可選）福山城就在福山站旁邊，有時間早上逛逛", jp: "福山城（ふくやまじょう）", map: "福山城" },
        { k: "move", text: "【媽媽、阿姨】搭鷗風亭的免費接駁車到鞆之浦（要預約）", jp: "福山駅南口 乗車口 → ホテル鷗風亭（鞆の浦）", note: "福山站發車：12:00、14:45、16:15，約 30 分鐘。完全預約制，要在前一天以前打電話預約：084-982-1123（9:00–18:00）。出福山站南口後往左走，到巴士總站旁的乘車口（按「開地圖」就是上車位置）。以上是旅館 2025 年的時刻表，出發前請跟旅館確認。還沒決定搭哪一班的話，也可以改搭公車（鞆鉄巴士）：福山站前搭往「鞆の浦」的巴士，約 30 分鐘，白天大約每 15–20 分鐘一班，不用預約，車資約 ¥600（要以現場為準）。乘車處和班次請當天看福山站南口的站牌，或用交通 App 查。", url: "https://maps.app.goo.gl/zsp8S994Aj5AiEes8" },
        { k: "stay", text: "下午進鷗風亭泡湯休息", jp: "鞆の浦温泉（とものうら おんせん）", note: "地址和電話在下方「今晚住」。入住、退房時間尚未查到，請向旅館確認。", map: "ホテル鷗風亭 広島県福山市鞆町鞆136" },
        { k: "see", text: "傍晚到港邊散步看夕陽", jp: "鞆の浦 港（みなと）", map: "鞆の浦 常夜燈" }
      ]
    },
    {
      id: "d6", season: { n: "金盞香", k: "きんせんかさく" }, date: "2026-11-20", label: "11/20", dow: "五",
      title: "鞆之浦 → 岡山",
      stay: { name: "Airbnb（Ray Okayama）", jp: "奉還町（ほうかんちょう）Ray Okayama", addr: "〒700-0026 岡山県岡山市北区奉還町4-8-4 Ray Okayama", note: "Airbnb 的入住方式、時間和房東聯絡方式請看訂房訊息；抵達前先確認。", url: "https://maps.app.goo.gl/ohg2GcEE2YfRxL4m7" },
      items: [
        { k: "see", text: "早上慢慢逛鞆之浦：海港老街、常夜燈、福禪寺看海景", jp: "常夜燈（じょうやとう）／福禅寺（ふくぜんじ）", map: "福禅寺 対潮楼",
          recs: [
            { g: "吃", list: [
              { n: "Sabo Funabansho", d: "咖啡或定食", u: "https://maps.app.goo.gl/h47MZSAytREHLC9z8" }
            ] },
            { g: "參觀", list: [
              { n: "Fukuzenji Temple Taichoroh（福禪寺 對潮樓）", d: "看景", u: "https://maps.app.goo.gl/CJvFxiuYLJyF3aUMA" },
              { n: "Jōyatō Stone Lighthouse（常夜燈）", d: "鞆之浦的象徵", u: "https://maps.app.goo.gl/GbEYEtMQWEQQ7JHu6" },
              { n: "Masuya Seiemon House（桝屋清右衛門宅）", d: "坂本龍馬躲過的老屋", u: "https://maps.app.goo.gl/rdV8m7TyHP6N4G2L7" },
              { n: "Irohamaru Exhibition Hall（いろは丸展示館）", d: "坂本龍馬博物館", u: "https://maps.app.goo.gl/DRGYC8EYZx245ack7" },
              { n: "TOMOTERASU Tomocho Townscape Preservation Center", d: "民俗博物館", u: "https://maps.app.goo.gl/hyXGr6cvoaBNZu2q7" }
            ] }
          ] },
        { k: "eat", text: "午餐：在鞆之浦吃，或回福山再吃，自己決定", jp: "鞆の浦（とものうら）／福山（ふくやま）", note: "看搭哪一班接駁車：早班車（11:23 前）可以回福山再吃，晚班車（14:00 以後）可以先在鞆之浦吃。", map: "鞆の浦 ランチ" },
        { k: "move", text: "搭鷗風亭的免費接駁車回福山（約 30 分）", jp: "ホテル鷗風亭 → 福山駅（ふくやまえき）", note: "入住（check in）時，跟櫃台說明天想搭哪一班。從旅館出發：9:03、10:13、11:23、14:00、15:25，約 30 分鐘到福山站。以上是 2025 年時刻表，請向旅館確認。", map: "福山駅" },
        { k: "move", transit: true, text: "福山搭新幹線到岡山（十幾分鐘）", jp: "福山 → 岡山駅（おかやまえき）", map: "岡山駅" },
        { k: "stay", text: "先在岡山站或附近寄放行李", jp: "コインロッカー／荷物預かり", note: "先不去旅館，大行李寄放在車站。站內有置物櫃，大行李不一定放得下，到站先找；放不下就在站附近找行李寄放處（可在地圖搜尋「岡山駅 荷物預かり」）。晚餐後再來取。", map: "岡山駅 コインロッカー" },
        { k: "see", text: "逛街購物、逛藥妝店", jp: "ショッピング／ドラッグストア", map: "岡山駅 ドラッグストア" },
        { k: "see", text: "逛岡山城", jp: "岡山城（おかやまじょう）", map: "岡山城" },
        { t: "17:00–20:30", k: "see", text: "後樂園「秋之幻想庭園」紅葉點燈", jp: "後楽園（こうらくえん）秋の幻想庭園", note: "20:00 前入園；65 歲以上 ¥200", map: "岡山後楽園" },
        { k: "eat", text: "晚餐", jp: "", map: "岡山駅 レストラン" },
        { k: "move", text: "回岡山站取行李，搭計程車回旅館", jp: "岡山駅（おかやまえき）→ Ray Okayama（奉還町）", note: "旅館在奉還町，離岡山站不遠。在站前排班計程車上車，把旅館地址給司機看（按「開地圖」就是旅館位置）。", url: "https://maps.app.goo.gl/ohg2GcEE2YfRxL4m7" }
      ]
    },
    {
      id: "d7", season: { n: "金盞香", k: "きんせんかさく" }, date: "2026-11-21", label: "11/21", dow: "六",
      title: "回國",
      stay: null,
      items: [
        { t: "上午", k: "see", text: "白天的後樂園，或岡山站買伴手禮", jp: "後楽園（こうらくえん）／岡山駅（おかやまえき）", map: "岡山後楽園" },
        { t: "13:00 左右", k: "move", transit: true, text: "岡山站搭機場巴士（約 30 分），13:45 前到機場", jp: "岡山駅 → 岡山桃太郎空港", note: "IT215 15:55 起飛，國際線建議起飛前 2 小時（約 13:55）辦好登機。巴士班次請以當天公告為準。", map: "岡山桃太郎空港" },
        { t: "15:55 起飛", k: "move", text: "搭 IT215 回桃園", jp: "", note: "桃園 17:40 抵達（時刻依航空公司公告，出發前請再確認）", map: "岡山桃太郎空港" }
      ]
    }
  ],
  prep: {
    title: "入境手續：Visit Japan Web",
    intro: "出發前先在網路上填好「入國審查」和「海關申報」，到日本機場出示 QR Code 就能快速通關。每個人都要用自己的護照各填一份。表格都要用英文（半角英文字母和數字）填寫，姓名照護照上的拼音。",
    who: [
      { n: "惠予", p: "自己填。她的離境日是 11/19，比大家早回國。" },
      { n: "媽媽、阿姨們", p: "大家聚在一起，一個一個填，有問題可以互相幫忙。" }
    ],
    link: "https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/",
    linkText: "開啟 Visit Japan Web",
    steps: [
      { h: "建立帳號", p: "打開上方網站，用自己的 Email 註冊帳號並登入。" },
      { h: "登錄本人資料", p: "照護照上的英文拼音填姓名，並填護照號碼、有效期限等資料。" },
      { h: "登錄入國・歸國預定", p: "填入入境日期、航班、在日本的住宿，一律用英文（可直接抄下方「要填的資料」）。" },
      { h: "填寫「入國審查」", p: "完成後會產生一個 QR Code。" },
      { h: "填寫「海關申報」", p: "完成後會產生另一個 QR Code。" },
      { h: "截圖存起來", p: "把兩個 QR Code 都截圖存在手機相簿，沒有網路也能出示。" }
    ],
    info: [
      { k: "入境日", v: "Nov 15, 2026（11/15 日）" },
      { k: "入境地", v: "Okayama Airport（岡山機場）" },
      { k: "離境日", v: "Nov 21, 2026（11/21 六）；惠予是 Nov 19, 2026" },
      { k: "停留", v: "6 nights（6 晚）" },
      { k: "航班", v: "去程 IT214；回程 IT215（惠予 11/19、其他人 11/21）" },
      { k: "住宿名", v: "NAGI Kurashiki" },
      { k: "地址", v: "1-14-3 Achi, Kurashiki, Okayama 710-0055" },
      { k: "電話", v: "080-5913-9349（國碼 +81）" }
    ]
  },
  transitApp: "https://apps.apple.com/tw/app/japan-travel-visit-planner/id686373726?l=en-GB",
  tips: [
    { h: "交通怎麼查", p: "搭電車、新幹線、巴士：用「Japan Travel by NAVITIME」查，輸入出發站和目的地，就會列出班次、時間、月台和票價。走路：用 Google 地圖，每個行程的「開地圖」按鈕可以直接導航。", u: "https://apps.apple.com/tw/app/japan-travel-visit-planner/id686373726?l=en-GB", ul: "下載交通 App（iPhone）" },
    { h: "行李", p: "尾道坡道多、去生口島要搭船，大行李先放福山飯店，出門只帶隨身包。也可以用宅急便把大行李直接寄到下一間飯店。" },
    { h: "交通卡", p: "ICOCA 或 Suica 可以搭巴士和 JR，先儲值好比較方便。" },
    { h: "國際線", p: "建議起飛前 2 小時到機場。" },
    { h: "紅葉季", p: "耕三寺、後樂園中午前後人多，早點出門比較舒服。" }
  ],
  links: [
    { n: "岡山後樂園 秋之幻想庭園 2026", u: "https://www.okayama-kanko.jp/event/12434" },
    { n: "岡山機場利木津巴士", u: "https://travelist.jp/airport_OKJ/guide/posts/p1289" },
    { n: "くらしき川舟流し", u: "https://matcha-jp.com/jp/place-master/10897" },
    { n: "鰆魚與岡山地酒料理店（Hot Pepper 訂位）", u: "https://www.hotpepper.jp/strJ000631374/" },
    { n: "耕三寺 紅葉時期", u: "https://banzokubiology.com/?p=15836" },
    { n: "尾道～瀨戶田航線（JR西日本）", u: "https://www.westjr.co.jp/press/article/2026/07/23/items/260723_00_press_shimanami.pdf" }
  ],
  todos: [
    "打電話向鷗風亭預約 11/19 福山站去程的接駁車，要在前一天（11/18）以前預約：084-982-1123",
    "11/19 入住鷗風亭時，跟櫃台說 11/20 想搭哪一班回福山的接駁車"
  ]
};
