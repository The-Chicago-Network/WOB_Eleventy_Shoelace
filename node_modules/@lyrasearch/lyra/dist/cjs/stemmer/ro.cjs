/*
 * -----------------------------------------------------------------------------
 * GENERATED FILE - DO NOT EDIT!
 * This file has been compiled using the Snowball stemmer generator.
 * Don't edit this file directly.
 * -----------------------------------------------------------------------------
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "stemmer", {
    enumerable: true,
    get: function() {
        return stemmer;
    }
});
var g = !0, p = !1;
function C() {
    this.p = function(k) {
        this.j = k;
        this.cursor = 0;
        this.a = this.j.length;
        this.f = 0;
        this.c = this.cursor;
        this.d = this.a;
    };
    this.z = function() {
        return this.j;
    };
    this.w = function(k) {
        this.j = k.j;
        this.cursor = k.cursor;
        this.a = k.a;
        this.f = k.f;
        this.c = k.c;
        this.d = k.d;
    };
    this.i = function(k, l, h) {
        if (this.cursor >= this.a) return p;
        var c = this.j.charCodeAt(this.cursor);
        if (c > h || c < l) return p;
        c -= l;
        if (0 == (k[c >>> 3] & 1 << (c & 7))) return p;
        this.cursor++;
        return g;
    };
    this.n = function(k, l, h) {
        if (this.cursor <= this.f) return p;
        var c = this.j.charCodeAt(this.cursor - 1);
        if (c > h || c < l) return p;
        c -= l;
        if (0 == (k[c >>> 3] & 1 << (c & 7))) return p;
        this.cursor--;
        return g;
    };
    this.k = function(k, l, h) {
        if (this.cursor >= this.a) return p;
        var c = this.j.charCodeAt(this.cursor);
        if (c > h || c < l) return this.cursor++, g;
        c -= l;
        return 0 == (k[c >>> 3] & 1 << (c & 7)) ? (this.cursor++, g) : p;
    };
    this.q = function(k, l, h) {
        if (this.cursor <= this.f) return p;
        var c = this.j.charCodeAt(this.cursor - 1);
        if (c > h || c < l) return this.cursor--, g;
        c -= l;
        return 0 == (k[c >>> 3] & 1 << (c & 7)) ? (this.cursor--, g) : p;
    };
    this.m = function(k) {
        if (this.a - this.cursor < k.length || this.j.slice(this.cursor, this.cursor + k.length) != k) return p;
        this.cursor += k.length;
        return g;
    };
    this.g = function(k) {
        if (this.cursor - this.f < k.length || this.j.slice(this.cursor - k.length, this.cursor) != k) return p;
        this.cursor -= k.length;
        return g;
    };
    this.o = function(k) {
        for(var l = 0, h = k.length, c = this.cursor, a = this.a, d = 0, n = 0, v = p;;){
            var b = l + (h - l >>> 1), f = 0, q = d < n ? d : n, t = k[b], s;
            for(s = q; s < t[0].length; s++){
                if (c + q == a) {
                    f = -1;
                    break;
                }
                f = this.j.charCodeAt(c + q) - t[0].charCodeAt(s);
                if (0 != f) break;
                q++;
            }
            0 > f ? (h = b, n = q) : (l = b, d = q);
            if (1 >= h - l) {
                if (0 < l) break;
                if (h == l) break;
                if (v) break;
                v = g;
            }
        }
        for(;;){
            t = k[l];
            if (d >= t[0].length) {
                this.cursor = c + t[0].length;
                if (4 > t.length) return t[2];
                l = t[3](this);
                this.cursor = c + t[0].length;
                if (l) return t[2];
            }
            l = t[1];
            if (0 > l) return 0;
        }
    };
    this.h = function(k) {
        for(var l = 0, h = k.length, c = this.cursor, a = this.f, d = 0, n = 0, v = p;;){
            var b = l + (h - l >> 1), f = 0, q = d < n ? d : n, t = k[b], s;
            for(s = t[0].length - 1 - q; 0 <= s; s--){
                if (c - q == a) {
                    f = -1;
                    break;
                }
                f = this.j.charCodeAt(c - 1 - q) - t[0].charCodeAt(s);
                if (0 != f) break;
                q++;
            }
            0 > f ? (h = b, n = q) : (l = b, d = q);
            if (1 >= h - l) {
                if (0 < l) break;
                if (h == l) break;
                if (v) break;
                v = g;
            }
        }
        for(;;){
            t = k[l];
            if (d >= t[0].length) {
                this.cursor = c - t[0].length;
                if (4 > t.length) return t[2];
                l = t[3](this);
                this.cursor = c - t[0].length;
                if (l) return t[2];
            }
            l = t[1];
            if (0 > l) return 0;
        }
    };
    this.s = function(k, l, h) {
        var c = h.length - (l - k);
        this.j = this.j.slice(0, k) + h + this.j.slice(l);
        this.a += c;
        this.cursor >= l ? this.cursor += c : this.cursor > k && (this.cursor = k);
        return c;
    };
    this.t = function() {
        return 0 > this.c || this.c > this.d || this.d > this.a || this.a > this.j.length ? p : g;
    };
    this.b = function(k) {
        var l = p;
        this.t() && (this.s(this.c, this.d, k), l = g);
        return l;
    };
    this.e = function() {
        return this.b("");
    };
    this.r = function(k, l, h) {
        l = this.s(k, l, h);
        k <= this.c && (this.c += l);
        k <= this.d && (this.d += l);
    };
    this.u = function() {
        var k = "";
        this.t() && (k = this.j.slice(this.c, this.d));
        return k;
    };
    this.v = function() {
        return this.j.slice(0, this.a);
    };
}
function stem() {
    var k = function k() {
        var a, b = c.a - c.cursor;
        c.d = c.cursor;
        a = c.h(n);
        if (0 == a) return p;
        c.c = c.cursor;
        if (!(r <= c.cursor)) return p;
        switch(a){
            case 1:
                if (!c.b("abil")) return p;
                break;
            case 2:
                if (!c.b("ibil")) return p;
                break;
            case 3:
                if (!c.b("iv")) return p;
                break;
            case 4:
                if (!c.b("ic")) return p;
                break;
            case 5:
                if (!c.b("at")) return p;
                break;
            case 6:
                if (!c.b("it")) return p;
        }
        t = g;
        c.cursor = c.a - b;
        return g;
    };
    var l = function l() {
        var a;
        for(t = p;;){
            a = c.a - c.cursor;
            if (k()) continue;
            c.cursor = c.a - a;
            break;
        }
        c.d = c.cursor;
        a = c.h(v);
        if (0 != a && (c.c = c.cursor, s <= c.cursor)) {
            switch(a){
                case 1:
                    if (!c.e()) return;
                    break;
                case 2:
                    if (!c.g("ţ")) return;
                    c.c = c.cursor;
                    if (!c.b("t")) return;
                    break;
                case 3:
                    if (!c.b("ist")) return;
            }
            t = g;
        }
    };
    var h = function h() {
        var a;
        if (!(c.cursor < m)) {
            var d = c.f;
            c.f = m;
            c.d = c.cursor;
            a = c.h(b);
            if (0 != a) switch(c.c = c.cursor, a){
                case 1:
                    a: {
                        a = c.a - c.cursor;
                        if (c.q(q, 97, 259)) break a;
                        c.cursor = c.a - a;
                        if (!c.g("u")) {
                            c.f = d;
                            return;
                        }
                    }
                    if (!c.e()) return;
                    break;
                case 2:
                    if (!c.e()) return;
            }
            c.f = d;
        }
    };
    var c = new C(), a = [
        [
            "",
            -1,
            3
        ],
        [
            "I",
            0,
            1
        ],
        [
            "U",
            0,
            2
        ]
    ], d = [
        [
            "ea",
            -1,
            3
        ],
        [
            "aţia",
            -1,
            7
        ],
        [
            "aua",
            -1,
            2
        ],
        [
            "iua",
            -1,
            4
        ],
        [
            "aţie",
            -1,
            7
        ],
        [
            "ele",
            -1,
            3
        ],
        [
            "ile",
            -1,
            5
        ],
        [
            "iile",
            6,
            4
        ],
        [
            "iei",
            -1,
            4
        ],
        [
            "atei",
            -1,
            6
        ],
        [
            "ii",
            -1,
            4
        ],
        [
            "ului",
            -1,
            1
        ],
        [
            "ul",
            -1,
            1
        ],
        [
            "elor",
            -1,
            3
        ],
        [
            "ilor",
            -1,
            4
        ],
        [
            "iilor",
            14,
            4
        ]
    ], n = [
        [
            "icala",
            -1,
            4
        ],
        [
            "iciva",
            -1,
            4
        ],
        [
            "ativa",
            -1,
            5
        ],
        [
            "itiva",
            -1,
            6
        ],
        [
            "icale",
            -1,
            4
        ],
        [
            "aţiune",
            -1,
            5
        ],
        [
            "iţiune",
            -1,
            6
        ],
        [
            "atoare",
            -1,
            5
        ],
        [
            "itoare",
            -1,
            6
        ],
        [
            "ătoare",
            -1,
            5
        ],
        [
            "icitate",
            -1,
            4
        ],
        [
            "abilitate",
            -1,
            1
        ],
        [
            "ibilitate",
            -1,
            2
        ],
        [
            "ivitate",
            -1,
            3
        ],
        [
            "icive",
            -1,
            4
        ],
        [
            "ative",
            -1,
            5
        ],
        [
            "itive",
            -1,
            6
        ],
        [
            "icali",
            -1,
            4
        ],
        [
            "atori",
            -1,
            5
        ],
        [
            "icatori",
            18,
            4
        ],
        [
            "itori",
            -1,
            6
        ],
        [
            "ători",
            -1,
            5
        ],
        [
            "icitati",
            -1,
            4
        ],
        [
            "abilitati",
            -1,
            1
        ],
        [
            "ivitati",
            -1,
            3
        ],
        [
            "icivi",
            -1,
            4
        ],
        [
            "ativi",
            -1,
            5
        ],
        [
            "itivi",
            -1,
            6
        ],
        [
            "icităi",
            -1,
            4
        ],
        [
            "abilităi",
            -1,
            1
        ],
        [
            "ivităi",
            -1,
            3
        ],
        [
            "icităţi",
            -1,
            4
        ],
        [
            "abilităţi",
            -1,
            1
        ],
        [
            "ivităţi",
            -1,
            3
        ],
        [
            "ical",
            -1,
            4
        ],
        [
            "ator",
            -1,
            5
        ],
        [
            "icator",
            35,
            4
        ],
        [
            "itor",
            -1,
            6
        ],
        [
            "ător",
            -1,
            5
        ],
        [
            "iciv",
            -1,
            4
        ],
        [
            "ativ",
            -1,
            5
        ],
        [
            "itiv",
            -1,
            6
        ],
        [
            "icală",
            -1,
            4
        ],
        [
            "icivă",
            -1,
            4
        ],
        [
            "ativă",
            -1,
            5
        ],
        [
            "itivă",
            -1,
            6
        ]
    ], v = [
        [
            "ica",
            -1,
            1
        ],
        [
            "abila",
            -1,
            1
        ],
        [
            "ibila",
            -1,
            1
        ],
        [
            "oasa",
            -1,
            1
        ],
        [
            "ata",
            -1,
            1
        ],
        [
            "ita",
            -1,
            1
        ],
        [
            "anta",
            -1,
            1
        ],
        [
            "ista",
            -1,
            3
        ],
        [
            "uta",
            -1,
            1
        ],
        [
            "iva",
            -1,
            1
        ],
        [
            "ic",
            -1,
            1
        ],
        [
            "ice",
            -1,
            1
        ],
        [
            "abile",
            -1,
            1
        ],
        [
            "ibile",
            -1,
            1
        ],
        [
            "isme",
            -1,
            3
        ],
        [
            "iune",
            -1,
            2
        ],
        [
            "oase",
            -1,
            1
        ],
        [
            "ate",
            -1,
            1
        ],
        [
            "itate",
            17,
            1
        ],
        [
            "ite",
            -1,
            1
        ],
        [
            "ante",
            -1,
            1
        ],
        [
            "iste",
            -1,
            3
        ],
        [
            "ute",
            -1,
            1
        ],
        [
            "ive",
            -1,
            1
        ],
        [
            "ici",
            -1,
            1
        ],
        [
            "abili",
            -1,
            1
        ],
        [
            "ibili",
            -1,
            1
        ],
        [
            "iuni",
            -1,
            2
        ],
        [
            "atori",
            -1,
            1
        ],
        [
            "osi",
            -1,
            1
        ],
        [
            "ati",
            -1,
            1
        ],
        [
            "itati",
            30,
            1
        ],
        [
            "iti",
            -1,
            1
        ],
        [
            "anti",
            -1,
            1
        ],
        [
            "isti",
            -1,
            3
        ],
        [
            "uti",
            -1,
            1
        ],
        [
            "işti",
            -1,
            3
        ],
        [
            "ivi",
            -1,
            1
        ],
        [
            "ităi",
            -1,
            1
        ],
        [
            "oşi",
            -1,
            1
        ],
        [
            "ităţi",
            -1,
            1
        ],
        [
            "abil",
            -1,
            1
        ],
        [
            "ibil",
            -1,
            1
        ],
        [
            "ism",
            -1,
            3
        ],
        [
            "ator",
            -1,
            1
        ],
        [
            "os",
            -1,
            1
        ],
        [
            "at",
            -1,
            1
        ],
        [
            "it",
            -1,
            1
        ],
        [
            "ant",
            -1,
            1
        ],
        [
            "ist",
            -1,
            3
        ],
        [
            "ut",
            -1,
            1
        ],
        [
            "iv",
            -1,
            1
        ],
        [
            "ică",
            -1,
            1
        ],
        [
            "abilă",
            -1,
            1
        ],
        [
            "ibilă",
            -1,
            1
        ],
        [
            "oasă",
            -1,
            1
        ],
        [
            "ată",
            -1,
            1
        ],
        [
            "ită",
            -1,
            1
        ],
        [
            "antă",
            -1,
            1
        ],
        [
            "istă",
            -1,
            3
        ],
        [
            "ută",
            -1,
            1
        ],
        [
            "ivă",
            -1,
            1
        ]
    ], b = [
        [
            "ea",
            -1,
            1
        ],
        [
            "ia",
            -1,
            1
        ],
        [
            "esc",
            -1,
            1
        ],
        [
            "ăsc",
            -1,
            1
        ],
        [
            "ind",
            -1,
            1
        ],
        [
            "\xe2nd",
            -1,
            1
        ],
        [
            "are",
            -1,
            1
        ],
        [
            "ere",
            -1,
            1
        ],
        [
            "ire",
            -1,
            1
        ],
        [
            "\xe2re",
            -1,
            1
        ],
        [
            "se",
            -1,
            2
        ],
        [
            "ase",
            10,
            1
        ],
        [
            "sese",
            10,
            2
        ],
        [
            "ise",
            10,
            1
        ],
        [
            "use",
            10,
            1
        ],
        [
            "\xe2se",
            10,
            1
        ],
        [
            "eşte",
            -1,
            1
        ],
        [
            "ăşte",
            -1,
            1
        ],
        [
            "eze",
            -1,
            1
        ],
        [
            "ai",
            -1,
            1
        ],
        [
            "eai",
            19,
            1
        ],
        [
            "iai",
            19,
            1
        ],
        [
            "sei",
            -1,
            2
        ],
        [
            "eşti",
            -1,
            1
        ],
        [
            "ăşti",
            -1,
            1
        ],
        [
            "ui",
            -1,
            1
        ],
        [
            "ezi",
            -1,
            1
        ],
        [
            "\xe2i",
            -1,
            1
        ],
        [
            "aşi",
            -1,
            1
        ],
        [
            "seşi",
            -1,
            2
        ],
        [
            "aseşi",
            29,
            1
        ],
        [
            "seseşi",
            29,
            2
        ],
        [
            "iseşi",
            29,
            1
        ],
        [
            "useşi",
            29,
            1
        ],
        [
            "\xe2seşi",
            29,
            1
        ],
        [
            "işi",
            -1,
            1
        ],
        [
            "uşi",
            -1,
            1
        ],
        [
            "\xe2şi",
            -1,
            1
        ],
        [
            "aţi",
            -1,
            2
        ],
        [
            "eaţi",
            38,
            1
        ],
        [
            "iaţi",
            38,
            1
        ],
        [
            "eţi",
            -1,
            2
        ],
        [
            "iţi",
            -1,
            2
        ],
        [
            "\xe2ţi",
            -1,
            2
        ],
        [
            "arăţi",
            -1,
            1
        ],
        [
            "serăţi",
            -1,
            2
        ],
        [
            "aserăţi",
            45,
            1
        ],
        [
            "seserăţi",
            45,
            2
        ],
        [
            "iserăţi",
            45,
            1
        ],
        [
            "userăţi",
            45,
            1
        ],
        [
            "\xe2serăţi",
            45,
            1
        ],
        [
            "irăţi",
            -1,
            1
        ],
        [
            "urăţi",
            -1,
            1
        ],
        [
            "\xe2răţi",
            -1,
            1
        ],
        [
            "am",
            -1,
            1
        ],
        [
            "eam",
            54,
            1
        ],
        [
            "iam",
            54,
            1
        ],
        [
            "em",
            -1,
            2
        ],
        [
            "asem",
            57,
            1
        ],
        [
            "sesem",
            57,
            2
        ],
        [
            "isem",
            57,
            1
        ],
        [
            "usem",
            57,
            1
        ],
        [
            "\xe2sem",
            57,
            1
        ],
        [
            "im",
            -1,
            2
        ],
        [
            "\xe2m",
            -1,
            2
        ],
        [
            "ăm",
            -1,
            2
        ],
        [
            "arăm",
            65,
            1
        ],
        [
            "serăm",
            65,
            2
        ],
        [
            "aserăm",
            67,
            1
        ],
        [
            "seserăm",
            67,
            2
        ],
        [
            "iserăm",
            67,
            1
        ],
        [
            "userăm",
            67,
            1
        ],
        [
            "\xe2serăm",
            67,
            1
        ],
        [
            "irăm",
            65,
            1
        ],
        [
            "urăm",
            65,
            1
        ],
        [
            "\xe2răm",
            65,
            1
        ],
        [
            "au",
            -1,
            1
        ],
        [
            "eau",
            76,
            1
        ],
        [
            "iau",
            76,
            1
        ],
        [
            "indu",
            -1,
            1
        ],
        [
            "\xe2ndu",
            -1,
            1
        ],
        [
            "ez",
            -1,
            1
        ],
        [
            "ească",
            -1,
            1
        ],
        [
            "ară",
            -1,
            1
        ],
        [
            "seră",
            -1,
            2
        ],
        [
            "aseră",
            84,
            1
        ],
        [
            "seseră",
            84,
            2
        ],
        [
            "iseră",
            84,
            1
        ],
        [
            "useră",
            84,
            1
        ],
        [
            "\xe2seră",
            84,
            1
        ],
        [
            "iră",
            -1,
            1
        ],
        [
            "ură",
            -1,
            1
        ],
        [
            "\xe2ră",
            -1,
            1
        ],
        [
            "ează",
            -1,
            1
        ]
    ], f = [
        [
            "a",
            -1,
            1
        ],
        [
            "e",
            -1,
            1
        ],
        [
            "ie",
            1,
            1
        ],
        [
            "i",
            -1,
            1
        ],
        [
            "ă",
            -1,
            1
        ]
    ], q = [
        17,
        65,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        32,
        0,
        0,
        4
    ], t = p, s = 0, r = 0, m = 0;
    this.l = function() {
        var b = c.cursor;
        a: for(;;){
            var k = c.cursor;
            b: {
                c: for(;;){
                    var n = c.cursor;
                    d: if (c.i(q, 97, 259)) {
                        c.c = c.cursor;
                        e: {
                            var v = c.cursor;
                            if (c.m("u") && (c.d = c.cursor, c.i(q, 97, 259))) {
                                if (!c.b("U")) break a;
                                break e;
                            }
                            c.cursor = v;
                            if (!c.m("i")) break d;
                            c.d = c.cursor;
                            if (!c.i(q, 97, 259)) break d;
                            if (!c.b("I")) break a;
                        }
                        c.cursor = n;
                        break c;
                    }
                    c.cursor = n;
                    if (c.cursor >= c.a) break b;
                    c.cursor++;
                }
                continue;
            }
            c.cursor = k;
            break;
        }
        c.cursor = b;
        s = r = m = c.a;
        b = c.cursor;
        a: {
            b: {
                k = c.cursor;
                c: if (c.i(q, 97, 259)) {
                    d: {
                        n = c.cursor;
                        e: if (c.k(q, 97, 259)) {
                            f: for(;;){
                                if (c.i(q, 97, 259)) break f;
                                if (c.cursor >= c.a) break e;
                                c.cursor++;
                            }
                            break d;
                        }
                        c.cursor = n;
                        if (!c.i(q, 97, 259)) break c;
                        e: for(;;){
                            if (c.k(q, 97, 259)) break e;
                            if (c.cursor >= c.a) break c;
                            c.cursor++;
                        }
                    }
                    break b;
                }
                c.cursor = k;
                if (!c.k(q, 97, 259)) break a;
                c: {
                    k = c.cursor;
                    d: if (c.k(q, 97, 259)) {
                        e: for(;;){
                            if (c.i(q, 97, 259)) break e;
                            if (c.cursor >= c.a) break d;
                            c.cursor++;
                        }
                        break c;
                    }
                    c.cursor = k;
                    if (!c.i(q, 97, 259)) break a;
                    if (c.cursor >= c.a) break a;
                    c.cursor++;
                }
            }
            m = c.cursor;
        }
        c.cursor = b;
        b = c.cursor;
        a: {
            b: for(;;){
                if (c.i(q, 97, 259)) break b;
                if (c.cursor >= c.a) break a;
                c.cursor++;
            }
            b: for(;;){
                if (c.k(q, 97, 259)) break b;
                if (c.cursor >= c.a) break a;
                c.cursor++;
            }
            r = c.cursor;
            b: for(;;){
                if (c.i(q, 97, 259)) break b;
                if (c.cursor >= c.a) break a;
                c.cursor++;
            }
            b: for(;;){
                if (c.k(q, 97, 259)) break b;
                if (c.cursor >= c.a) break a;
                c.cursor++;
            }
            s = c.cursor;
        }
        c.cursor = b;
        c.f = c.cursor;
        c.cursor = c.a;
        b = c.a - c.cursor;
        c.d = c.cursor;
        k = c.h(d);
        if (0 != k && (c.c = c.cursor, r <= c.cursor)) switch(k){
            case 1:
                if (!c.e()) break;
                break;
            case 2:
                if (!c.b("a")) break;
                break;
            case 3:
                if (!c.b("e")) break;
                break;
            case 4:
                if (!c.b("i")) break;
                break;
            case 5:
                k = c.a - c.cursor;
                if (c.g("ab")) break;
                c.cursor = c.a - k;
                if (!c.b("i")) break;
                break;
            case 6:
                if (!c.b("at")) break;
                break;
            case 7:
                c.b("aţi");
        }
        c.cursor = c.a - b;
        b = c.a - c.cursor;
        l();
        c.cursor = c.a - b;
        b = c.a - c.cursor;
        b: {
            if (t) break b;
            c.cursor = c.a - (c.a - c.cursor);
            h();
        }
        c.cursor = c.a - b;
        b = c.a - c.cursor;
        c.d = c.cursor;
        0 != c.h(f) && (c.c = c.cursor, !(m <= c.cursor) || c.e());
        c.cursor = c.a - b;
        c.cursor = c.f;
        b = c.cursor;
        a: for(;;){
            n = c.cursor;
            b: if (c.c = c.cursor, k = c.o(a), 0 != k) {
                c.d = c.cursor;
                switch(k){
                    case 1:
                        if (!c.b("i")) break a;
                        break;
                    case 2:
                        if (!c.b("u")) break a;
                        break;
                    case 3:
                        if (c.cursor >= c.a) break b;
                        c.cursor++;
                }
                continue;
            }
            c.cursor = n;
            break;
        }
        c.cursor = b;
        return g;
    };
    this.stemWord = function(a) {
        c.p(a);
        this.l();
        return c.j;
    };
}
var stemmerInstance = new stem();
function stemmer(word) {
    return stemmerInstance.stemWord(word);
}
