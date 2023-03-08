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
        var b;
        c.d = c.cursor;
        b = c.h(a);
        if (0 == b) return p;
        c.c = c.cursor;
        switch(b){
            case 1:
                a: {
                    b = c.a - c.cursor;
                    if (c.g("а")) break a;
                    c.cursor = c.a - b;
                    if (!c.g("я")) return p;
                }
                if (!c.e()) return p;
                break;
            case 2:
                if (!c.e()) return p;
        }
        return g;
    };
    var l = function l() {
        var a, b;
        c.d = c.cursor;
        0 == c.h(d) ? b = p : (c.c = c.cursor, b = !c.e() ? p : g);
        if (!b) return p;
        b = c.a - c.cursor;
        a: if (c.d = c.cursor, a = c.h(n), 0 == a) c.cursor = c.a - b;
        else switch(c.c = c.cursor, a){
            case 1:
                b: {
                    a = c.a - c.cursor;
                    if (c.g("а")) break b;
                    c.cursor = c.a - a;
                    if (!c.g("я")) {
                        c.cursor = c.a - b;
                        break a;
                    }
                }
                if (!c.e()) return p;
                break;
            case 2:
                if (!c.e()) return p;
        }
        return g;
    };
    var h = function h() {
        var a;
        c.d = c.cursor;
        a = c.h(b);
        if (0 == a) return p;
        c.c = c.cursor;
        switch(a){
            case 1:
                a: {
                    a = c.a - c.cursor;
                    if (c.g("а")) break a;
                    c.cursor = c.a - a;
                    if (!c.g("я")) return p;
                }
                if (!c.e()) return p;
                break;
            case 2:
                if (!c.e()) return p;
        }
        return g;
    };
    var c = new C(), a = [
        [
            "в",
            -1,
            1
        ],
        [
            "ив",
            0,
            2
        ],
        [
            "ыв",
            0,
            2
        ],
        [
            "вши",
            -1,
            1
        ],
        [
            "ивши",
            3,
            2
        ],
        [
            "ывши",
            3,
            2
        ],
        [
            "вшись",
            -1,
            1
        ],
        [
            "ившись",
            6,
            2
        ],
        [
            "ывшись",
            6,
            2
        ]
    ], d = [
        [
            "ее",
            -1,
            1
        ],
        [
            "ие",
            -1,
            1
        ],
        [
            "ое",
            -1,
            1
        ],
        [
            "ые",
            -1,
            1
        ],
        [
            "ими",
            -1,
            1
        ],
        [
            "ыми",
            -1,
            1
        ],
        [
            "ей",
            -1,
            1
        ],
        [
            "ий",
            -1,
            1
        ],
        [
            "ой",
            -1,
            1
        ],
        [
            "ый",
            -1,
            1
        ],
        [
            "ем",
            -1,
            1
        ],
        [
            "им",
            -1,
            1
        ],
        [
            "ом",
            -1,
            1
        ],
        [
            "ым",
            -1,
            1
        ],
        [
            "его",
            -1,
            1
        ],
        [
            "ого",
            -1,
            1
        ],
        [
            "ему",
            -1,
            1
        ],
        [
            "ому",
            -1,
            1
        ],
        [
            "их",
            -1,
            1
        ],
        [
            "ых",
            -1,
            1
        ],
        [
            "ею",
            -1,
            1
        ],
        [
            "ою",
            -1,
            1
        ],
        [
            "ую",
            -1,
            1
        ],
        [
            "юю",
            -1,
            1
        ],
        [
            "ая",
            -1,
            1
        ],
        [
            "яя",
            -1,
            1
        ]
    ], n = [
        [
            "ем",
            -1,
            1
        ],
        [
            "нн",
            -1,
            1
        ],
        [
            "вш",
            -1,
            1
        ],
        [
            "ивш",
            2,
            2
        ],
        [
            "ывш",
            2,
            2
        ],
        [
            "щ",
            -1,
            1
        ],
        [
            "ющ",
            5,
            1
        ],
        [
            "ующ",
            6,
            2
        ]
    ], v = [
        [
            "сь",
            -1,
            1
        ],
        [
            "ся",
            -1,
            1
        ]
    ], b = [
        [
            "ла",
            -1,
            1
        ],
        [
            "ила",
            0,
            2
        ],
        [
            "ыла",
            0,
            2
        ],
        [
            "на",
            -1,
            1
        ],
        [
            "ена",
            3,
            2
        ],
        [
            "ете",
            -1,
            1
        ],
        [
            "ите",
            -1,
            2
        ],
        [
            "йте",
            -1,
            1
        ],
        [
            "ейте",
            7,
            2
        ],
        [
            "уйте",
            7,
            2
        ],
        [
            "ли",
            -1,
            1
        ],
        [
            "или",
            10,
            2
        ],
        [
            "ыли",
            10,
            2
        ],
        [
            "й",
            -1,
            1
        ],
        [
            "ей",
            13,
            2
        ],
        [
            "уй",
            13,
            2
        ],
        [
            "л",
            -1,
            1
        ],
        [
            "ил",
            16,
            2
        ],
        [
            "ыл",
            16,
            2
        ],
        [
            "ем",
            -1,
            1
        ],
        [
            "им",
            -1,
            2
        ],
        [
            "ым",
            -1,
            2
        ],
        [
            "н",
            -1,
            1
        ],
        [
            "ен",
            22,
            2
        ],
        [
            "ло",
            -1,
            1
        ],
        [
            "ило",
            24,
            2
        ],
        [
            "ыло",
            24,
            2
        ],
        [
            "но",
            -1,
            1
        ],
        [
            "ено",
            27,
            2
        ],
        [
            "нно",
            27,
            1
        ],
        [
            "ет",
            -1,
            1
        ],
        [
            "ует",
            30,
            2
        ],
        [
            "ит",
            -1,
            2
        ],
        [
            "ыт",
            -1,
            2
        ],
        [
            "ют",
            -1,
            1
        ],
        [
            "уют",
            34,
            2
        ],
        [
            "ят",
            -1,
            2
        ],
        [
            "ны",
            -1,
            1
        ],
        [
            "ены",
            37,
            2
        ],
        [
            "ть",
            -1,
            1
        ],
        [
            "ить",
            39,
            2
        ],
        [
            "ыть",
            39,
            2
        ],
        [
            "ешь",
            -1,
            1
        ],
        [
            "ишь",
            -1,
            2
        ],
        [
            "ю",
            -1,
            2
        ],
        [
            "ую",
            44,
            2
        ]
    ], f = [
        [
            "а",
            -1,
            1
        ],
        [
            "ев",
            -1,
            1
        ],
        [
            "ов",
            -1,
            1
        ],
        [
            "е",
            -1,
            1
        ],
        [
            "ие",
            3,
            1
        ],
        [
            "ье",
            3,
            1
        ],
        [
            "и",
            -1,
            1
        ],
        [
            "еи",
            6,
            1
        ],
        [
            "ии",
            6,
            1
        ],
        [
            "ами",
            6,
            1
        ],
        [
            "ями",
            6,
            1
        ],
        [
            "иями",
            10,
            1
        ],
        [
            "й",
            -1,
            1
        ],
        [
            "ей",
            12,
            1
        ],
        [
            "ией",
            13,
            1
        ],
        [
            "ий",
            12,
            1
        ],
        [
            "ой",
            12,
            1
        ],
        [
            "ам",
            -1,
            1
        ],
        [
            "ем",
            -1,
            1
        ],
        [
            "ием",
            18,
            1
        ],
        [
            "ом",
            -1,
            1
        ],
        [
            "ям",
            -1,
            1
        ],
        [
            "иям",
            21,
            1
        ],
        [
            "о",
            -1,
            1
        ],
        [
            "у",
            -1,
            1
        ],
        [
            "ах",
            -1,
            1
        ],
        [
            "ях",
            -1,
            1
        ],
        [
            "иях",
            26,
            1
        ],
        [
            "ы",
            -1,
            1
        ],
        [
            "ь",
            -1,
            1
        ],
        [
            "ю",
            -1,
            1
        ],
        [
            "ию",
            30,
            1
        ],
        [
            "ью",
            30,
            1
        ],
        [
            "я",
            -1,
            1
        ],
        [
            "ия",
            33,
            1
        ],
        [
            "ья",
            33,
            1
        ]
    ], q = [
        [
            "ост",
            -1,
            1
        ],
        [
            "ость",
            -1,
            1
        ]
    ], t = [
        [
            "ейше",
            -1,
            1
        ],
        [
            "н",
            -1,
            2
        ],
        [
            "ейш",
            -1,
            1
        ],
        [
            "ь",
            -1,
            3
        ]
    ], s = [
        33,
        65,
        8,
        232
    ], r = 0, m = 0;
    this.l = function() {
        var a = c.cursor;
        for(;;){
            var b = c.cursor;
            b: {
                c: for(;;){
                    var d = c.cursor;
                    c.c = c.cursor;
                    if (c.m("ё")) {
                        c.d = c.cursor;
                        c.cursor = d;
                        break c;
                    }
                    c.cursor = d;
                    if (c.cursor >= c.a) break b;
                    c.cursor++;
                }
                if (!c.b("е")) return p;
                continue;
            }
            c.cursor = b;
            break;
        }
        c.cursor = a;
        r = m = c.a;
        a = c.cursor;
        a: {
            b: for(;;){
                if (c.i(s, 1072, 1103)) break b;
                if (c.cursor >= c.a) break a;
                c.cursor++;
            }
            m = c.cursor;
            b: for(;;){
                if (c.k(s, 1072, 1103)) break b;
                if (c.cursor >= c.a) break a;
                c.cursor++;
            }
            b: for(;;){
                if (c.i(s, 1072, 1103)) break b;
                if (c.cursor >= c.a) break a;
                c.cursor++;
            }
            b: for(;;){
                if (c.k(s, 1072, 1103)) break b;
                if (c.cursor >= c.a) break a;
                c.cursor++;
            }
            r = c.cursor;
        }
        c.cursor = a;
        c.f = c.cursor;
        c.cursor = c.a;
        if (c.cursor < m) return p;
        a = c.f;
        c.f = m;
        b = c.a - c.cursor;
        b: {
            d = c.a - c.cursor;
            if (k()) break b;
            c.cursor = c.a - d;
            d = c.a - c.cursor;
            var n;
            c.d = c.cursor;
            0 == c.h(v) ? n = p : (c.c = c.cursor, n = !c.e() ? p : g);
            n || (c.cursor = c.a - d);
            c: {
                d = c.a - c.cursor;
                if (l()) break c;
                c.cursor = c.a - d;
                if (h()) break c;
                c.cursor = c.a - d;
                c.d = c.cursor;
                0 != c.h(f) && (c.c = c.cursor, c.e());
            }
        }
        c.cursor = c.a - b;
        b = c.a - c.cursor;
        c.d = c.cursor;
        if (c.g("и")) {
            if (c.c = c.cursor, !c.e()) return p;
        } else c.cursor = c.a - b;
        b = c.a - c.cursor;
        c.d = c.cursor;
        0 != c.h(q) && (c.c = c.cursor, !(r <= c.cursor) || c.e());
        c.cursor = c.a - b;
        b = c.a - c.cursor;
        c.d = c.cursor;
        d = c.h(t);
        if (0 != d) switch(c.c = c.cursor, d){
            case 1:
                if (!c.e()) break;
                c.d = c.cursor;
                if (!c.g("н")) break;
                c.c = c.cursor;
                if (!c.g("н") || !c.e()) break;
                break;
            case 2:
                if (!c.g("н") || !c.e()) break;
                break;
            case 3:
                c.e();
        }
        c.cursor = c.a - b;
        c.f = a;
        c.cursor = c.f;
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
