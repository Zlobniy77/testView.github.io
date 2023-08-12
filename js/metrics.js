setTimeout( () => {
    !function (e, t, a, n, g) {
        e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"});
        var m = t.getElementsByTagName(a)[0], r = t.createElement(a);
        r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-TC8Z28F3", m.parentNode.insertBefore(r, m)
    }(window, document, "script", "dataLayer");
}, 5000 );

setTimeout( () => {
    !function (e, t, c, n, r, a, s) {
        e[r] = e[r] || function () {
            (e[r].a = e[r].a || []).push(arguments)
        }, e[r].l = 1 * new Date;
        for (var i = 0; i < document.scripts.length; i++) if (document.scripts[i].src === n) return;
        a = t.createElement(c), s = t.getElementsByTagName(c)[0], a.async = 1, a.src = n, s.parentNode.insertBefore(a, s)
    }(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"), ym(94589243, "init", {
        clickmap: !0,
        trackLinks: !0,
        accurateTrackBounce: !0,
        webvisor: !0
    });
}, 7000 );


