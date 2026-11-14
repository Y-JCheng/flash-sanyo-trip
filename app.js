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
  tabs.push({ id: "tips", top: "提醒", bot: "" }, { id: "todo", top: "待辦", bot: "" });

  var t = today();
  var current = (T.days.filter(function (d) { return d.date === t; })[0] || T.days[0]).id;
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
        (it.note ? '<div class="nt">' + esc(it.note) + "</div>" : "") +
        ((it.url || it.map) ? '<a class="go" target="_blank" rel="noopener" href="' + esc(it.url || mapUrl(it.map)) + '">開地圖</a>' : "") +
        "</div></div>";
    }).join("");
    if (d.stay) {
      h += '<div class="stay"><b>宿　今晚住：' + esc(d.stay.name) + "</b>" +
        (d.stay.jp ? '<div class="jp">' + esc(d.stay.jp) + "</div>" : "") +
        (d.stay.note ? "<div>" + esc(d.stay.note) + "</div>" : "") +
        (d.stay.url ? '<a class="go" target="_blank" rel="noopener" href="' + esc(d.stay.url) + '">開地圖</a>' : "") + "</div>";
    }
    var ids = T.days.map(function (x) { return x.id; }), i = ids.indexOf(d.id);
    h += '<div class="pager"><button data-go="' + (i - 1) + '"' + (i === 0 ? " disabled" : "") + '>← 前一天</button>' +
      '<button data-go="' + (i + 1) + '"' + (i === ids.length - 1 ? " disabled" : "") + ">後一天 →</button></div>";
    return h;
  }

  function renderTips() {
    return '<h2 class="sec">實用提醒</h2>' + T.tips.map(function (x) {
      return '<div class="card"><h3>' + esc(x.h) + "</h3><p>" + esc(x.p) + "</p></div>";
    }).join("") + '<h2 class="sec">參考連結</h2>' + T.links.map(function (l) {
      return '<a class="lnk" target="_blank" rel="noopener" href="' + esc(l.u) + '">' + esc(l.n) + "</a>";
    }).join("");
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
    var done = store("todo") || {};
    done[i] = e.target.checked;
    store("todo", done);
  });

  render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
