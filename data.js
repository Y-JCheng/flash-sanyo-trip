// 行程資料：之後要改行程，只需要改這個檔案
// k（類型）: move 交通 / eat 吃 / see 玩 / stay 住宿
// jp: 日文與假名；map: Google 地圖搜尋字
window.TRIP = {
  title: "快閃山陽之旅",
  sub: "岡山・倉敷・尾道",
  days: [
    {
      id: "d1", date: "2026-11-15", label: "11/15", dow: "日",
      title: "抵達岡山・倉敷",
      stay: { name: "NAGI 倉敷", jp: "NAGI倉敷（なぎ くらしき）", addr: "〒710-0055 岡山県倉敷市阿知1-14-3", tel: "080-5913-9349", checkin: "15:00–21:00", checkout: "11:00", note: "從倉敷站步行約 2 分鐘；9:00 起可寄放行李", url: "https://maps.app.goo.gl/8WZjf1Aa1LwgEMpy9" },
      items: [
        { t: "14:00 多", k: "move", text: "岡山機場落地", jp: "岡山桃太郎空港（おかやま ももたろう くうこう）", map: "岡山桃太郎空港" },
        { k: "move", transit: true, text: "搭利木津巴士到倉敷站北口", jp: "リムジンバス → 倉敷駅北口（くらしきえき きたぐち）", note: "約 35 分鐘，¥1,150，可刷 ICOCA / Suica", map: "倉敷駅北口" },
        { k: "stay", text: "到飯店放行李", jp: "NAGI倉敷（なぎ くらしき）", note: "從倉敷站步行約 2 分鐘。入住 15:00–21:00，退房 11:00。還沒到入住時間也可以先寄放行李（9:00 起）。", url: "https://maps.app.goo.gl/8WZjf1Aa1LwgEMpy9" },
        { k: "see", text: "逛倉敷 outlet", jp: "三井アウトレットパーク倉敷（みつい アウトレットパーク くらしき）", map: "三井アウトレットパーク倉敷", links: [{ n: "樓層導覽 Floor Guide", u: "https://mitsui-shopping-park.com/mop/kurashiki/search/floor1f.html" }] },
        { k: "eat", text: "晚餐：鰆魚料理", jp: "鰆（さわら）料理", note: "記得訂位", map: "倉敷 鰆料理" }
      ]
    },
    {
      id: "d2", date: "2026-11-16", label: "11/16", dow: "一",
      title: "倉敷一日",
      stay: { name: "NAGI 倉敷", jp: "NAGI倉敷（なぎ くらしき）", addr: "〒710-0055 岡山県倉敷市阿知1-14-3", tel: "080-5913-9349", checkin: "15:00–21:00", checkout: "11:00", note: "從倉敷站步行約 2 分鐘；9:00 起可寄放行李", url: "https://maps.app.goo.gl/8WZjf1Aa1LwgEMpy9" },
      items: [
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
      id: "d3", date: "2026-11-17", label: "11/17", dow: "二",
      title: "尾道市區",
      stay: { name: "福山", jp: "福山（ふくやま）", note: "飯店尚未填寫；福山到尾道搭 JR 約 20 分鐘" },
      items: [
        { k: "move", transit: true, text: "倉敷搭 JR 到福山", jp: "倉敷駅（くらしきえき）→ 福山駅（ふくやまえき）", map: "福山駅" },
        { k: "stay", text: "到飯店寄放行李", jp: "福山（ふくやま）", note: "飯店尚未填寫；訂好後會補上地址、入住時間和電話。大行李先放飯店，出門只帶隨身包。" },
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
      id: "d4", date: "2026-11-18", label: "11/18", dow: "三",
      title: "生口島一日遊",
      stay: { name: "福山", jp: "福山（ふくやま）", note: "飯店尚未填寫；尾道回福山搭 JR 約 20 分鐘" },
      items: [
        { k: "move", transit: true, text: "尾道站前碼頭搭船到瀨戶田港", jp: "尾道 → 瀬戸田港（せとだこう）", note: "約 40 分鐘，一天約 6 班來回，先記好回程班次", map: "瀬戸田港" },
        { t: "9:00–17:00", k: "see", text: "耕三寺 ＋ 白色大理石庭園「未來心之丘」", jp: "耕三寺（こうさんじ）／未来心の丘（みらいこころのおか）", note: "逛約 1.5–2 小時；紅葉季，早點去人較少", map: "耕三寺" },
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
        { k: "move", transit: true, text: "下午搭船回尾道", jp: "瀬戸田港 → 尾道", note: "看好回程班次", map: "尾道港" },
        { k: "eat", text: "晚上在尾道吃晚餐、散步港邊", jp: "尾道（おのみち）", map: "尾道港" }
      ]
    },
    {
      id: "d5", date: "2026-11-19", label: "11/19", dow: "四",
      title: "惠予回國・鞆之浦",
      stay: { name: "鞆之浦溫泉旅館", jp: "鞆の浦（とものうら）", note: "住宿尚未填寫" },
      items: [
        { k: "move", text: "早上從福山出發（住在福山，不用移動）", jp: "福山駅（ふくやまえき）", map: "福山駅" },
        { k: "move", transit: true, text: "【惠予】福山搭新幹線到岡山（約 15–20 分）→ 機場巴士（約 30 分），12:30 前到機場", jp: "福山 → 岡山駅（おかやまえき）→ 岡山桃太郎空港", note: "惠予今天回國", map: "岡山桃太郎空港" },
        { k: "see", text: "【媽媽、阿姨】（可選）福山城就在福山站旁邊，有時間早上逛逛", jp: "福山城（ふくやまじょう）", map: "福山城" },
        { k: "move", transit: true, text: "【媽媽、阿姨】福山搭巴士到鞆之浦", jp: "福山駅 → 鞆の浦（とものうら）", note: "約 30 分鐘", map: "鞆の浦" },
        { k: "stay", text: "下午進旅館泡湯休息", jp: "鞆の浦温泉（とものうら おんせん）", note: "旅館尚未填寫；訂好後會補上地址、入住時間和電話。", map: "鞆の浦 温泉" },
        { k: "see", text: "傍晚到港邊散步看夕陽", jp: "鞆の浦 港（みなと）", map: "鞆の浦 常夜燈" }
      ]
    },
    {
      id: "d6", date: "2026-11-20", label: "11/20", dow: "五",
      title: "鞆之浦 → 岡山",
      stay: { name: "岡山站附近", jp: "岡山駅（おかやまえき）", note: "住宿尚未填寫" },
      items: [
        { k: "see", text: "早上慢慢逛鞆之浦：海港老街、常夜燈、福禪寺看海景", jp: "常夜燈（じょうやとう）／福禅寺（ふくぜんじ）", note: "早上人少又安靜", map: "福禅寺 対潮楼" },
        { k: "eat", text: "中午在鞆之浦吃午餐", jp: "鞆の浦", map: "鞆の浦 ランチ" },
        { k: "move", transit: true, text: "搭巴士回福山（約 30 分）", jp: "鞆の浦 → 福山駅", map: "福山駅" },
        { k: "move", transit: true, text: "福山搭新幹線到岡山（十幾分鐘），飯店放行李", jp: "福山 → 岡山駅（おかやまえき）", map: "岡山駅" },
        { k: "see", text: "傍晚有空可逛岡山城", jp: "岡山城（おかやまじょう）", map: "岡山城" },
        { t: "17:00–20:30", k: "see", text: "後樂園「秋之幻想庭園」紅葉點燈", jp: "後楽園（こうらくえん）秋の幻想庭園", note: "20:00 前入園；65 歲以上 ¥200", map: "岡山後楽園" }
      ]
    },
    {
      id: "d7", date: "2026-11-21", label: "11/21", dow: "六",
      title: "回國",
      stay: null,
      items: [
        { t: "上午", k: "see", text: "白天的後樂園，或岡山站買伴手禮", jp: "後楽園（こうらくえん）／岡山駅（おかやまえき）", map: "岡山後楽園" },
        { t: "11:30 左右", k: "move", transit: true, text: "岡山站搭機場巴士（約 30 分），12:30 前到機場", jp: "岡山駅 → 岡山桃太郎空港", note: "國際線建議起飛前 2 小時到", map: "岡山桃太郎空港" },
        { t: "14:00 多", k: "move", text: "起飛", jp: "", map: "岡山桃太郎空港" }
      ]
    }
  ],
  prep: {
    title: "入境手續：Visit Japan Web",
    intro: "出發前先在網路上填好「入國審查」和「海關申報」，到日本機場出示 QR Code 就能快速通關。每個人都要用自己的護照各填一份。表格都要用英文（半角英文字母和數字）填寫，姓名照護照上的拼音。",
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
      { k: "離境日", v: "Nov 21, 2026（11/21 六）" },
      { k: "停留", v: "6 nights（6 晚）" },
      { k: "航班", v: "照機票上的班機編號（英文字母＋數字）" },
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
    "11/19、11/21 班機確切起飛時間",
    "大原美術館 11/16（週一）有沒有開",
    "11/15 晚上鰆魚料理店訂位（4 人）",
    "訂好倉敷、尾道、鞆之浦、岡山的住宿"
  ]
};
