(function () {
  var T = window.TRIP;
  var ICON = { move: "行", eat: "食", see: "遊", stay: "宿" };
  var $ = function (s) { return document.querySelector(s); };
  var DOW = ["日", "一", "二", "三", "四", "五", "六"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function store(k, v) {
    try {
      if (v === undefined) return JSON.parse(localStorage.getItem(k));
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) { return null; }
  }
  function mapUrl(q) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  }

  var tabs = T.days.map(function (d) { return { id: d.id, top: d.label, bot: "週" + d.dow }; });
  tabs.unshift({ id: "prep", top: "行前", bot: "入境" });
  tabs.push({ id: "tips", top: "提醒", bot: "" }, { id: "todo", top: "待辦", bot: "" });

  var t = today();
  var current = (T.days.filter(function (d) { return d.date === t; })[0] || T.days[0]).id;
  if (t < T.days[0].date) current = "prep";
  var saved = location.hash.slice(1);
  if (tabs.some(function (x) { return x.id === saved; })) current = saved;

  function renderTabs() {
    $("#sub").textContent = T.sub;
    $("#tabs").innerHTML = tabs.map(function (x) {
      return '<button data-id="' + x.id + '"' + (x.id === current ? ' class="on"' : "") + ">" +
        esc(x.top) + (x.bot ? "<small>" + esc(x.bot) + "</small>" : "") + "</button>";
    }).join("");
    var on = $("#tabs .on");
    if (on && on.scrollIntoView) on.scrollIntoView({ inline: "center", block: "nearest" });
  }

  function renderDay(d) {
    var h = '<div class="day-h"><h2>' + esc(d.label) + "（" + esc(d.dow) + "）" + esc(d.title) +
      (d.date === t ? '<span class="today">今天</span>' : "") + "</h2></div>";
    h += d.items.map(function (it) {
      return '<div class="item k-' + it.k + '"><div class="seal">' + ICON[it.k] + '</div><div class="bd">' +
        (it.t ? '<div class="t">' + esc(it.t) + "</div>" : "") +
        '<div class="tx">' + esc(it.text) + "</div>" +
        (it.jp ? '<div class="jp">' + esc(it.jp) + "</div>" : "") +
        ((it.url || it.map) ? '<a class="go" target="_blank" rel="noopener" href="' + esc(it.url || mapUrl(it.map)) + '">開地圖</a>' : "") +
        (it.links || []).map(function (l) { return ' <a class="go" target="_blank" rel="noopener" href="' + esc(l.u) + '">' + esc(l.n) + "</a>"; }).join("") +
        (it.transit ? ' <a class="go app" target="_blank" rel="noopener" href="' + esc(T.transitApp) + '">查班次（交通 App）</a>' : "") +
        (it.recs ? '<details class="acc"><summary>推薦店家（' + it.recs.map(function (g) { return g.g; }).join("・") + '）</summary><div class="acc-b">' + it.recs.map(function (g) {
          return '<div class="rg"><h4>' + esc(g.g) + "</h4>" + g.list.map(function (r) {
            return '<div class="pl"><div class="pn">' + esc(r.n) + "</div>" + '<div class="pd">' + esc(r.d || "") + "</div>" +
              '<a class="go sm" target="_blank" rel="noopener" href="' + esc(r.u) + '">開地圖</a></div>';
          }).join("") + "</div>";
        }).join("") + "</div></details>" : "") +
        (it.note ? '<details class="acc"><summary>注意事項</summary><div class="acc-b">' + esc(it.note) + "</div></details>" : "") +
        "</div></div>";
    }).join("");
    if (d.stay) {
      var st = d.stay, row = function (k, v) { return '<div class="row"><span>' + k + "</span><div>" + v + "</div></div>"; };
      var body = (st.addr ? row("地址", esc(st.addr) + '<br><a class="go" target="_blank" rel="noopener" href="' + esc(st.url || mapUrl(st.addr)) + '">開地圖</a>') : "") +
        (st.checkin ? row("入住", esc(st.checkin)) : "") +
        (st.checkout ? row("退房", esc(st.checkout)) : "") +
        (st.tel ? row("電話", '<a class="tel" href="tel:+81' + esc(st.tel.replace(/^0/, "").replace(/-/g, "")) + '">' + esc(st.tel) + "</a>") : "") +
        (st.note ? row("備註", esc(st.note)) : "");
      h += '<details class="stay acc"><summary><b>宿　今晚住：' + esc(st.name) + "</b>" +
        (st.jp ? '<div class="jp">' + esc(st.jp) + "</div>" : "") + "</summary>" +
        (body ? '<div class="acc-b">' + body + "</div>" : "") + "</details>";
    }
    var ids = T.days.map(function (x) { return x.id; }), i = ids.indexOf(d.id);
    h += '<div class="pager"><button data-go="' + (i - 1) + '"' + (i === 0 ? " disabled" : "") + '>← 前一天</button>' +
      '<button data-go="' + (i + 1) + '"' + (i === ids.length - 1 ? " disabled" : "") + ">後一天 →</button></div>";
    return h;
  }

  function renderTips() {
    return '<h2 class="sec">實用提醒</h2>' + T.tips.map(function (x) {
      return '<div class="card"><h3>' + esc(x.h) + "</h3><p>" + esc(x.p) + "</p>" + (x.u ? '<a class="go" target="_blank" rel="noopener" href="' + esc(x.u) + '">' + esc(x.ul || "開啟") + "</a>" : "") + "</div>";
    }).join("") + '<h2 class="sec">參考連結</h2>' + T.links.map(function (l) {
      return '<a class="lnk" target="_blank" rel="noopener" href="' + esc(l.u) + '">' + esc(l.n) + "</a>";
    }).join("");
  }

  function renderPrep() {
    var P = T.prep, done = store("prep") || {};
    return '<h2 class="sec">' + esc(P.title) + '</h2><p class="lead">' + esc(P.intro) + "</p>" +
      '<div class="who">' + (P.who || []).map(function (w) {
        return '<div class="w"><b>' + esc(w.n) + "</b><span>" + esc(w.p) + "</span></div>";
      }).join("") + "</div>" +
      '<a class="go prep-go" target="_blank" rel="noopener" href="' + esc(P.link) + '">' + esc(P.linkText) + "</a>" +
      '<h2 class="sec">步驟</h2>' + P.steps.map(function (x, i) {
        return '<label class="todo"><input type="checkbox" data-k="prep" data-i="' + i + '"' + (done[i] ? " checked" : "") +
          '><span><b>' + (i + 1) + "．" + esc(x.h) + "</b><br>" + esc(x.p) + "</span></label>";
      }).join("") +
      '<h2 class="sec">要填的資料</h2><div class="stay prep-info">' + P.info.map(function (r) {
        return '<div class="row"><span>' + esc(r.k) + "</span><div>" + esc(r.v) + "</div></div>";
      }).join("") + "</div>";
  }

  function renderTodo() {
    var done = store("todo") || {};
    return '<h2 class="sec">出發前待確認</h2>' + T.todos.map(function (x, i) {
      return '<label class="todo"><input type="checkbox" data-i="' + i + '"' + (done[i] ? " checked" : "") +
        "><span>" + esc(x) + "</span></label>";
    }).join("");
  }

  function render() {
    renderTabs();
    var v = $("#view");
    if (current === "tips") v.innerHTML = renderTips();
    else if (current === "prep") v.innerHTML = renderPrep();
    else if (current === "todo") v.innerHTML = renderTodo();
    else v.innerHTML = renderDay(T.days.filter(function (d) { return d.id === current; })[0]);
    window.scrollTo(0, 0);
  }

  $("#tabs").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    current = b.getAttribute("data-id");
    try { history.replaceState(null, "", "#" + current); } catch (x) {}
    render();
  });
  $("#view").addEventListener("click", function (e) {
    var b = e.target.closest("[data-go]");
    if (!b || b.disabled) return;
    current = T.days[+b.getAttribute("data-go")].id;
    try { history.replaceState(null, "", "#" + current); } catch (x) {}
    render();
  });
  $("#view").addEventListener("change", function (e) {
    var i = e.target.getAttribute("data-i");
    if (i === null) return;
    var key = e.target.getAttribute("data-k") || "todo";
    var done = store(key) || {};
    done[i] = e.target.checked;
    store(key, done);
  });

  render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();

// 背景：很淡的楓葉慢慢飄落，左右擺盪成之字形（純裝飾；系統設定「減少動態效果」時不顯示）
(function () {
  try {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  } catch (e) {}
  var LEAF = '<svg viewBox="0 0 24 24"><path d="M12 1.5l1.9 5 3.6-2-.9 5.2 5.1-1.6-3.3 4.1 2.6 2.7-5.4-.2-.8 2.7-2.6-1.2L12 22l-.2-4.8-2.6 1.2-.8-2.7-5.4.2 2.6-2.7-3.3-4.1 5.1 1.6-.9-5.2 3.6 2z"/></svg>';
  // 左邊位置(%)、大小(px)、下落秒數、延遲(負值=一開始就散在畫面上)、左右擺幅(px)、擺一趟秒數
  var P = [
    [8, 30, 85, -10, 46, 6.5], [22, 24, 100, -62, 38, 7.5], [38, 34, 92, -35, 56, 8],
    [52, 26, 108, -80, 42, 6], [66, 32, 88, -22, 50, 7], [80, 24, 96, -50, 36, 8.5],
    [92, 28, 104, -72, 44, 6.8]
  ];
  var box = document.createElement("div");
  box.id = "fall";
  box.setAttribute("aria-hidden", "true");
  box.innerHTML = P.map(function (a) {
    return '<i style="left:' + a[0] + "%;width:" + a[1] + "px;height:" + a[1] + "px;animation-duration:" + a[2] +
      "s;animation-delay:" + a[3] + "s;--dx:" + a[4] + "px;--sw:" + a[5] + 's">' + LEAF + "</i>";
  }).join("");
  document.body.insertBefore(box, document.body.firstChild);
})();
