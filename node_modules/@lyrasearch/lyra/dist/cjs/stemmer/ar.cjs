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
        var a, b = m.cursor;
        for(;;){
            var c = m.cursor;
            b: {
                c: {
                    var e = m.cursor;
                    m.c = m.cursor;
                    a = m.o(w);
                    if (0 != a) {
                        m.d = m.cursor;
                        switch(a){
                            case 1:
                                if (!m.e()) return;
                                break;
                            case 2:
                                if (!m.b("0")) return;
                                break;
                            case 3:
                                if (!m.b("1")) return;
                                break;
                            case 4:
                                if (!m.b("2")) return;
                                break;
                            case 5:
                                if (!m.b("3")) return;
                                break;
                            case 6:
                                if (!m.b("4")) return;
                                break;
                            case 7:
                                if (!m.b("5")) return;
                                break;
                            case 8:
                                if (!m.b("6")) return;
                                break;
                            case 9:
                                if (!m.b("7")) return;
                                break;
                            case 10:
                                if (!m.b("8")) return;
                                break;
                            case 11:
                                if (!m.b("9")) return;
                                break;
                            case 12:
                                if (!m.b("ء")) return;
                                break;
                            case 13:
                                if (!m.b("أ")) return;
                                break;
                            case 14:
                                if (!m.b("إ")) return;
                                break;
                            case 15:
                                if (!m.b("ئ")) return;
                                break;
                            case 16:
                                if (!m.b("آ")) return;
                                break;
                            case 17:
                                if (!m.b("ؤ")) return;
                                break;
                            case 18:
                                if (!m.b("ا")) return;
                                break;
                            case 19:
                                if (!m.b("ب")) return;
                                break;
                            case 20:
                                if (!m.b("ة")) return;
                                break;
                            case 21:
                                if (!m.b("ت")) return;
                                break;
                            case 22:
                                if (!m.b("ث")) return;
                                break;
                            case 23:
                                if (!m.b("ج")) return;
                                break;
                            case 24:
                                if (!m.b("ح")) return;
                                break;
                            case 25:
                                if (!m.b("خ")) return;
                                break;
                            case 26:
                                if (!m.b("د")) return;
                                break;
                            case 27:
                                if (!m.b("ذ")) return;
                                break;
                            case 28:
                                if (!m.b("ر")) return;
                                break;
                            case 29:
                                if (!m.b("ز")) return;
                                break;
                            case 30:
                                if (!m.b("س")) return;
                                break;
                            case 31:
                                if (!m.b("ش")) return;
                                break;
                            case 32:
                                if (!m.b("ص")) return;
                                break;
                            case 33:
                                if (!m.b("ض")) return;
                                break;
                            case 34:
                                if (!m.b("ط")) return;
                                break;
                            case 35:
                                if (!m.b("ظ")) return;
                                break;
                            case 36:
                                if (!m.b("ع")) return;
                                break;
                            case 37:
                                if (!m.b("غ")) return;
                                break;
                            case 38:
                                if (!m.b("ف")) return;
                                break;
                            case 39:
                                if (!m.b("ق")) return;
                                break;
                            case 40:
                                if (!m.b("ك")) return;
                                break;
                            case 41:
                                if (!m.b("ل")) return;
                                break;
                            case 42:
                                if (!m.b("م")) return;
                                break;
                            case 43:
                                if (!m.b("ن")) return;
                                break;
                            case 44:
                                if (!m.b("ه")) return;
                                break;
                            case 45:
                                if (!m.b("و")) return;
                                break;
                            case 46:
                                if (!m.b("ى")) return;
                                break;
                            case 47:
                                if (!m.b("ي")) return;
                                break;
                            case 48:
                                if (!m.b("لا")) return;
                                break;
                            case 49:
                                if (!m.b("لأ")) return;
                                break;
                            case 50:
                                if (!m.b("لإ")) return;
                                break;
                            case 51:
                                if (!m.b("لآ")) return;
                        }
                        break c;
                    }
                    m.cursor = e;
                    if (m.cursor >= m.a) break b;
                    m.cursor++;
                }
                continue;
            }
            m.cursor = c;
            break;
        }
        m.cursor = b;
    };
    var l = function l() {
        var a;
        a = m.cursor;
        m.f = m.cursor;
        m.cursor = m.a;
        m.d = m.cursor;
        if (0 != m.h(u)) {
            m.c = m.cursor;
            if (!m.b("ء")) return;
            m.cursor = m.f;
        }
        m.cursor = a;
        var b = m.cursor;
        for(;;){
            var c = m.cursor;
            b: {
                c: {
                    var e = m.cursor;
                    m.c = m.cursor;
                    a = m.o(y);
                    if (0 != a) {
                        m.d = m.cursor;
                        switch(a){
                            case 1:
                                if (!m.b("ا")) return;
                                break;
                            case 2:
                                if (!m.b("و")) return;
                                break;
                            case 3:
                                if (!m.b("ي")) return;
                        }
                        break c;
                    }
                    m.cursor = e;
                    if (m.cursor >= m.a) break b;
                    m.cursor++;
                }
                continue;
            }
            m.cursor = c;
            break;
        }
        m.cursor = b;
    };
    var h = function h() {
        var a;
        m.c = m.cursor;
        a = m.o(e);
        if (0 == a) return p;
        m.d = m.cursor;
        switch(a){
            case 1:
                if (!(3 < m.j.length) || !m.b("أ")) return p;
                break;
            case 2:
                if (!(3 < m.j.length) || !m.b("آ")) return p;
                break;
            case 3:
                if (!(3 < m.j.length) || !m.b("ا")) return p;
                break;
            case 4:
                if (!(3 < m.j.length) || !m.b("إ")) return p;
        }
        return g;
    };
    var c = function c() {
        m.c = m.cursor;
        if (0 == m.o(A)) return p;
        m.d = m.cursor;
        if (!(3 < m.j.length)) return p;
        var a = m.cursor;
        if (m.m("ا")) return p;
        m.cursor = a;
        return !m.e() ? p : g;
    };
    var a = function a() {
        var a;
        m.c = m.cursor;
        a = m.o(H);
        if (0 == a) return p;
        m.d = m.cursor;
        switch(a){
            case 1:
                if (!(5 < m.j.length) || !m.e()) return p;
                break;
            case 2:
                if (!(4 < m.j.length) || !m.e()) return p;
        }
        return g;
    };
    var d = function d() {
        var a;
        m.c = m.cursor;
        a = m.o(G);
        if (0 == a) return p;
        m.d = m.cursor;
        switch(a){
            case 1:
                if (!(3 < m.j.length) || !m.e()) return p;
                break;
            case 2:
                if (!(3 < m.j.length) || !m.b("ب")) return p;
                break;
            case 3:
                if (!(3 < m.j.length) || !m.b("ك")) return p;
        }
        return g;
    };
    var n = function n() {
        var a;
        m.c = m.cursor;
        a = m.o(E);
        if (0 == a) return p;
        m.d = m.cursor;
        switch(a){
            case 1:
                if (!(4 < m.j.length) || !m.b("ي")) return p;
                break;
            case 2:
                if (!(4 < m.j.length) || !m.b("ت")) return p;
                break;
            case 3:
                if (!(4 < m.j.length) || !m.b("ن")) return p;
                break;
            case 4:
                if (!(4 < m.j.length) || !m.b("أ")) return p;
        }
        return g;
    };
    var v = function v() {
        var a;
        m.d = m.cursor;
        a = m.h(O);
        if (0 == a) return p;
        m.c = m.cursor;
        switch(a){
            case 1:
                if (!(4 <= m.j.length) || !m.e()) return p;
                break;
            case 2:
                if (!(5 <= m.j.length) || !m.e()) return p;
                break;
            case 3:
                if (!(6 <= m.j.length) || !m.e()) return p;
        }
        return g;
    };
    var b = function b() {
        m.d = m.cursor;
        if (0 == m.h(M)) return p;
        m.c = m.cursor;
        return !(4 < m.j.length) || !m.e() ? p : g;
    };
    var f = function f() {
        m.d = m.cursor;
        if (0 == m.h(P)) return p;
        m.c = m.cursor;
        return !(5 <= m.j.length) || !m.e() ? p : g;
    };
    var q = function q() {
        m.d = m.cursor;
        if (0 == m.h(Q)) return p;
        m.c = m.cursor;
        return !(4 <= m.j.length) || !m.e() ? p : g;
    };
    var t = function t() {
        var a;
        m.d = m.cursor;
        a = m.h(R);
        if (0 == a) return p;
        m.c = m.cursor;
        switch(a){
            case 1:
                if (!(4 <= m.j.length) || !m.e()) return p;
                break;
            case 2:
                if (!(5 <= m.j.length) || !m.e()) return p;
                break;
            case 3:
                if (!(6 <= m.j.length) || !m.e()) return p;
        }
        return g;
    };
    var s = function s() {
        var a;
        m.d = m.cursor;
        a = m.h(S);
        if (0 == a) return p;
        m.c = m.cursor;
        switch(a){
            case 1:
                if (!(4 <= m.j.length) || !m.e()) return p;
                break;
            case 2:
                if (!(5 <= m.j.length) || !m.e()) return p;
                break;
            case 3:
                if (!(5 < m.j.length) || !m.e()) return p;
                break;
            case 4:
                if (!(6 <= m.j.length) || !m.e()) return p;
        }
        return g;
    };
    var r = function r() {
        var a;
        m.d = m.cursor;
        a = m.h(I);
        if (0 == a) return p;
        m.c = m.cursor;
        switch(a){
            case 1:
                if (!(4 <= m.j.length) || !m.e()) return p;
                break;
            case 2:
                if (!(6 <= m.j.length) || !m.e()) return p;
        }
        return g;
    };
    var m = new C(), w = [
        [
            "ـ",
            -1,
            1
        ],
        [
            "ً",
            -1,
            1
        ],
        [
            "ٌ",
            -1,
            1
        ],
        [
            "ٍ",
            -1,
            1
        ],
        [
            "َ",
            -1,
            1
        ],
        [
            "ُ",
            -1,
            1
        ],
        [
            "ِ",
            -1,
            1
        ],
        [
            "ّ",
            -1,
            1
        ],
        [
            "ْ",
            -1,
            1
        ],
        [
            "٠",
            -1,
            2
        ],
        [
            "١",
            -1,
            3
        ],
        [
            "٢",
            -1,
            4
        ],
        [
            "٣",
            -1,
            5
        ],
        [
            "٤",
            -1,
            6
        ],
        [
            "٥",
            -1,
            7
        ],
        [
            "٦",
            -1,
            8
        ],
        [
            "٧",
            -1,
            9
        ],
        [
            "٨",
            -1,
            10
        ],
        [
            "٩",
            -1,
            11
        ],
        [
            "ﺀ",
            -1,
            12
        ],
        [
            "ﺁ",
            -1,
            16
        ],
        [
            "ﺂ",
            -1,
            16
        ],
        [
            "ﺃ",
            -1,
            13
        ],
        [
            "ﺄ",
            -1,
            13
        ],
        [
            "ﺅ",
            -1,
            17
        ],
        [
            "ﺆ",
            -1,
            17
        ],
        [
            "ﺇ",
            -1,
            14
        ],
        [
            "ﺈ",
            -1,
            14
        ],
        [
            "ﺉ",
            -1,
            15
        ],
        [
            "ﺊ",
            -1,
            15
        ],
        [
            "ﺋ",
            -1,
            15
        ],
        [
            "ﺌ",
            -1,
            15
        ],
        [
            "ﺍ",
            -1,
            18
        ],
        [
            "ﺎ",
            -1,
            18
        ],
        [
            "ﺏ",
            -1,
            19
        ],
        [
            "ﺐ",
            -1,
            19
        ],
        [
            "ﺑ",
            -1,
            19
        ],
        [
            "ﺒ",
            -1,
            19
        ],
        [
            "ﺓ",
            -1,
            20
        ],
        [
            "ﺔ",
            -1,
            20
        ],
        [
            "ﺕ",
            -1,
            21
        ],
        [
            "ﺖ",
            -1,
            21
        ],
        [
            "ﺗ",
            -1,
            21
        ],
        [
            "ﺘ",
            -1,
            21
        ],
        [
            "ﺙ",
            -1,
            22
        ],
        [
            "ﺚ",
            -1,
            22
        ],
        [
            "ﺛ",
            -1,
            22
        ],
        [
            "ﺜ",
            -1,
            22
        ],
        [
            "ﺝ",
            -1,
            23
        ],
        [
            "ﺞ",
            -1,
            23
        ],
        [
            "ﺟ",
            -1,
            23
        ],
        [
            "ﺠ",
            -1,
            23
        ],
        [
            "ﺡ",
            -1,
            24
        ],
        [
            "ﺢ",
            -1,
            24
        ],
        [
            "ﺣ",
            -1,
            24
        ],
        [
            "ﺤ",
            -1,
            24
        ],
        [
            "ﺥ",
            -1,
            25
        ],
        [
            "ﺦ",
            -1,
            25
        ],
        [
            "ﺧ",
            -1,
            25
        ],
        [
            "ﺨ",
            -1,
            25
        ],
        [
            "ﺩ",
            -1,
            26
        ],
        [
            "ﺪ",
            -1,
            26
        ],
        [
            "ﺫ",
            -1,
            27
        ],
        [
            "ﺬ",
            -1,
            27
        ],
        [
            "ﺭ",
            -1,
            28
        ],
        [
            "ﺮ",
            -1,
            28
        ],
        [
            "ﺯ",
            -1,
            29
        ],
        [
            "ﺰ",
            -1,
            29
        ],
        [
            "ﺱ",
            -1,
            30
        ],
        [
            "ﺲ",
            -1,
            30
        ],
        [
            "ﺳ",
            -1,
            30
        ],
        [
            "ﺴ",
            -1,
            30
        ],
        [
            "ﺵ",
            -1,
            31
        ],
        [
            "ﺶ",
            -1,
            31
        ],
        [
            "ﺷ",
            -1,
            31
        ],
        [
            "ﺸ",
            -1,
            31
        ],
        [
            "ﺹ",
            -1,
            32
        ],
        [
            "ﺺ",
            -1,
            32
        ],
        [
            "ﺻ",
            -1,
            32
        ],
        [
            "ﺼ",
            -1,
            32
        ],
        [
            "ﺽ",
            -1,
            33
        ],
        [
            "ﺾ",
            -1,
            33
        ],
        [
            "ﺿ",
            -1,
            33
        ],
        [
            "ﻀ",
            -1,
            33
        ],
        [
            "ﻁ",
            -1,
            34
        ],
        [
            "ﻂ",
            -1,
            34
        ],
        [
            "ﻃ",
            -1,
            34
        ],
        [
            "ﻄ",
            -1,
            34
        ],
        [
            "ﻅ",
            -1,
            35
        ],
        [
            "ﻆ",
            -1,
            35
        ],
        [
            "ﻇ",
            -1,
            35
        ],
        [
            "ﻈ",
            -1,
            35
        ],
        [
            "ﻉ",
            -1,
            36
        ],
        [
            "ﻊ",
            -1,
            36
        ],
        [
            "ﻋ",
            -1,
            36
        ],
        [
            "ﻌ",
            -1,
            36
        ],
        [
            "ﻍ",
            -1,
            37
        ],
        [
            "ﻎ",
            -1,
            37
        ],
        [
            "ﻏ",
            -1,
            37
        ],
        [
            "ﻐ",
            -1,
            37
        ],
        [
            "ﻑ",
            -1,
            38
        ],
        [
            "ﻒ",
            -1,
            38
        ],
        [
            "ﻓ",
            -1,
            38
        ],
        [
            "ﻔ",
            -1,
            38
        ],
        [
            "ﻕ",
            -1,
            39
        ],
        [
            "ﻖ",
            -1,
            39
        ],
        [
            "ﻗ",
            -1,
            39
        ],
        [
            "ﻘ",
            -1,
            39
        ],
        [
            "ﻙ",
            -1,
            40
        ],
        [
            "ﻚ",
            -1,
            40
        ],
        [
            "ﻛ",
            -1,
            40
        ],
        [
            "ﻜ",
            -1,
            40
        ],
        [
            "ﻝ",
            -1,
            41
        ],
        [
            "ﻞ",
            -1,
            41
        ],
        [
            "ﻟ",
            -1,
            41
        ],
        [
            "ﻠ",
            -1,
            41
        ],
        [
            "ﻡ",
            -1,
            42
        ],
        [
            "ﻢ",
            -1,
            42
        ],
        [
            "ﻣ",
            -1,
            42
        ],
        [
            "ﻤ",
            -1,
            42
        ],
        [
            "ﻥ",
            -1,
            43
        ],
        [
            "ﻦ",
            -1,
            43
        ],
        [
            "ﻧ",
            -1,
            43
        ],
        [
            "ﻨ",
            -1,
            43
        ],
        [
            "ﻩ",
            -1,
            44
        ],
        [
            "ﻪ",
            -1,
            44
        ],
        [
            "ﻫ",
            -1,
            44
        ],
        [
            "ﻬ",
            -1,
            44
        ],
        [
            "ﻭ",
            -1,
            45
        ],
        [
            "ﻮ",
            -1,
            45
        ],
        [
            "ﻯ",
            -1,
            46
        ],
        [
            "ﻰ",
            -1,
            46
        ],
        [
            "ﻱ",
            -1,
            47
        ],
        [
            "ﻲ",
            -1,
            47
        ],
        [
            "ﻳ",
            -1,
            47
        ],
        [
            "ﻴ",
            -1,
            47
        ],
        [
            "ﻵ",
            -1,
            51
        ],
        [
            "ﻶ",
            -1,
            51
        ],
        [
            "ﻷ",
            -1,
            49
        ],
        [
            "ﻸ",
            -1,
            49
        ],
        [
            "ﻹ",
            -1,
            50
        ],
        [
            "ﻺ",
            -1,
            50
        ],
        [
            "ﻻ",
            -1,
            48
        ],
        [
            "ﻼ",
            -1,
            48
        ]
    ], u = [
        [
            "آ",
            -1,
            1
        ],
        [
            "أ",
            -1,
            1
        ],
        [
            "ؤ",
            -1,
            1
        ],
        [
            "إ",
            -1,
            1
        ],
        [
            "ئ",
            -1,
            1
        ]
    ], y = [
        [
            "آ",
            -1,
            1
        ],
        [
            "أ",
            -1,
            1
        ],
        [
            "ؤ",
            -1,
            2
        ],
        [
            "إ",
            -1,
            1
        ],
        [
            "ئ",
            -1,
            3
        ]
    ], z = [
        [
            "ال",
            -1,
            2
        ],
        [
            "بال",
            -1,
            1
        ],
        [
            "كال",
            -1,
            1
        ],
        [
            "لل",
            -1,
            2
        ]
    ], e = [
        [
            "أآ",
            -1,
            2
        ],
        [
            "أأ",
            -1,
            1
        ],
        [
            "أؤ",
            -1,
            1
        ],
        [
            "أإ",
            -1,
            4
        ],
        [
            "أا",
            -1,
            3
        ]
    ], A = [
        [
            "ف",
            -1,
            1
        ],
        [
            "و",
            -1,
            1
        ]
    ], H = [
        [
            "ال",
            -1,
            2
        ],
        [
            "بال",
            -1,
            1
        ],
        [
            "كال",
            -1,
            1
        ],
        [
            "لل",
            -1,
            2
        ]
    ], G = [
        [
            "ب",
            -1,
            1
        ],
        [
            "با",
            0,
            -1
        ],
        [
            "بب",
            0,
            2
        ],
        [
            "كك",
            -1,
            3
        ]
    ], E = [
        [
            "سأ",
            -1,
            4
        ],
        [
            "ست",
            -1,
            2
        ],
        [
            "سن",
            -1,
            3
        ],
        [
            "سي",
            -1,
            1
        ]
    ], x = [
        [
            "تست",
            -1,
            1
        ],
        [
            "نست",
            -1,
            1
        ],
        [
            "يست",
            -1,
            1
        ]
    ], O = [
        [
            "كما",
            -1,
            3
        ],
        [
            "هما",
            -1,
            3
        ],
        [
            "نا",
            -1,
            2
        ],
        [
            "ها",
            -1,
            2
        ],
        [
            "ك",
            -1,
            1
        ],
        [
            "كم",
            -1,
            2
        ],
        [
            "هم",
            -1,
            2
        ],
        [
            "هن",
            -1,
            2
        ],
        [
            "ه",
            -1,
            1
        ],
        [
            "ي",
            -1,
            1
        ]
    ], N = [
        [
            "ن",
            -1,
            1
        ]
    ], M = [
        [
            "ا",
            -1,
            1
        ],
        [
            "و",
            -1,
            1
        ],
        [
            "ي",
            -1,
            1
        ]
    ], P = [
        [
            "ات",
            -1,
            1
        ]
    ], Q = [
        [
            "ت",
            -1,
            1
        ]
    ], T = [
        [
            "ة",
            -1,
            1
        ]
    ], U = [
        [
            "ي",
            -1,
            1
        ]
    ], R = [
        [
            "كما",
            -1,
            3
        ],
        [
            "هما",
            -1,
            3
        ],
        [
            "نا",
            -1,
            2
        ],
        [
            "ها",
            -1,
            2
        ],
        [
            "ك",
            -1,
            1
        ],
        [
            "كم",
            -1,
            2
        ],
        [
            "هم",
            -1,
            2
        ],
        [
            "كن",
            -1,
            2
        ],
        [
            "هن",
            -1,
            2
        ],
        [
            "ه",
            -1,
            1
        ],
        [
            "كمو",
            -1,
            3
        ],
        [
            "ني",
            -1,
            2
        ]
    ], S = [
        [
            "ا",
            -1,
            1
        ],
        [
            "تا",
            0,
            2
        ],
        [
            "تما",
            0,
            4
        ],
        [
            "نا",
            0,
            2
        ],
        [
            "ت",
            -1,
            1
        ],
        [
            "ن",
            -1,
            1
        ],
        [
            "ان",
            5,
            3
        ],
        [
            "تن",
            5,
            2
        ],
        [
            "ون",
            5,
            3
        ],
        [
            "ين",
            5,
            3
        ],
        [
            "ي",
            -1,
            1
        ]
    ], V = [
        [
            "وا",
            -1,
            1
        ],
        [
            "تم",
            -1,
            1
        ]
    ], I = [
        [
            "و",
            -1,
            1
        ],
        [
            "تمو",
            0,
            2
        ]
    ], D = [
        [
            "ى",
            -1,
            1
        ]
    ], L = p, J = p, K = p;
    this.l = function() {
        J = K = g;
        L = p;
        var e = m.cursor, u;
        m.c = m.cursor;
        u = m.o(z);
        if (0 != u) switch(m.d = m.cursor, u){
            case 1:
                if (!(4 < m.j.length)) break;
                K = g;
                J = p;
                L = g;
                break;
            case 2:
                if (!(3 < m.j.length)) break;
                K = g;
                J = p;
                L = g;
        }
        m.cursor = e;
        k();
        m.f = m.cursor;
        m.cursor = m.a;
        e = m.a - m.cursor;
        b: {
            u = m.a - m.cursor;
            c: if (J) {
                d: {
                    var w = m.a - m.cursor;
                    e: {
                        for(var y = 1;;){
                            var A = m.a - m.cursor;
                            if (t()) {
                                y--;
                                continue;
                            }
                            m.cursor = m.a - A;
                            break;
                        }
                        if (!(0 < y)) {
                            f: {
                                y = m.a - m.cursor;
                                if (s()) break f;
                                m.cursor = m.a - y;
                                if (r()) break f;
                                m.cursor = m.a - y;
                                if (m.cursor <= m.f) break e;
                                m.cursor--;
                            }
                            break d;
                        }
                    }
                    m.cursor = m.a - w;
                    m.d = m.cursor;
                    0 == m.h(V) ? y = p : (m.c = m.cursor, y = !(5 <= m.j.length) || !m.e() ? p : g);
                    if (y) break d;
                    m.cursor = m.a - w;
                    if (!s()) break c;
                }
                break b;
            }
            m.cursor = m.a - u;
            if (K) {
                w = m.a - m.cursor;
                e: {
                    y = m.a - m.cursor;
                    m.d = m.cursor;
                    0 == m.h(T) ? A = p : (m.c = m.cursor, A = !(4 <= m.j.length) || !m.e() ? p : g);
                    if (A) break e;
                    m.cursor = m.a - y;
                    f: {
                        if (L) break f;
                        if (v()) {
                            g: {
                                A = m.a - m.cursor;
                                if (b()) break g;
                                m.cursor = m.a - A;
                                if (f()) break g;
                                m.cursor = m.a - A;
                                if (q()) break g;
                                m.cursor = m.a - A;
                                if (m.cursor <= m.f) break f;
                                m.cursor--;
                            }
                            break e;
                        }
                    }
                    m.cursor = m.a - y;
                    f: if (m.d = m.cursor, 0 == m.h(N) ? A = p : (m.c = m.cursor, A = !(5 < m.j.length) || !m.e() ? p : g), A) {
                        g: {
                            A = m.a - m.cursor;
                            if (b()) break g;
                            m.cursor = m.a - A;
                            if (f()) break g;
                            m.cursor = m.a - A;
                            if (!q()) break f;
                        }
                        break e;
                    }
                    m.cursor = m.a - y;
                    f: {
                        if (L) break f;
                        if (b()) break e;
                    }
                    m.cursor = m.a - y;
                    f() || (m.cursor = m.a - w);
                }
                m.d = m.cursor;
                0 == m.h(U) ? w = p : (m.c = m.cursor, w = !(3 <= m.j.length) || !m.e() ? p : g);
                if (w) break b;
            }
            m.cursor = m.a - u;
            m.d = m.cursor;
            0 != m.h(D) && (m.c = m.cursor, m.b("ي"));
        }
        m.cursor = m.a - e;
        m.cursor = m.f;
        e = m.cursor;
        u = m.cursor;
        h() || (m.cursor = u);
        u = m.cursor;
        c() || (m.cursor = u);
        b: {
            u = m.cursor;
            if (a()) break b;
            m.cursor = u;
            if (K && d()) break b;
            m.cursor = u;
            J && (u = m.cursor, n() || (m.cursor = u), m.c = m.cursor, 0 != m.o(x) && (m.d = m.cursor, 4 < m.j.length && (J = g, K = p, m.b("است"))));
        }
        m.cursor = e;
        l();
        return g;
    };
    this.stemWord = function(a) {
        m.p(a);
        this.l();
        return m.j;
    };
}
var stemmerInstance = new stem();
function stemmer(word) {
    return stemmerInstance.stemWord(word);
}
