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
    var k = new C(), l = [
        [
            "लाइ",
            -1,
            1
        ],
        [
            "लाई",
            -1,
            1
        ],
        [
            "सँग",
            -1,
            1
        ],
        [
            "संग",
            -1,
            1
        ],
        [
            "मार्फत",
            -1,
            1
        ],
        [
            "रत",
            -1,
            1
        ],
        [
            "का",
            -1,
            2
        ],
        [
            "मा",
            -1,
            1
        ],
        [
            "द्वारा",
            -1,
            1
        ],
        [
            "कि",
            -1,
            2
        ],
        [
            "पछि",
            -1,
            1
        ],
        [
            "की",
            -1,
            2
        ],
        [
            "ले",
            -1,
            1
        ],
        [
            "कै",
            -1,
            2
        ],
        [
            "सँगै",
            -1,
            1
        ],
        [
            "मै",
            -1,
            1
        ],
        [
            "को",
            -1,
            2
        ]
    ], h = [
        [
            "ँ",
            -1,
            -1
        ],
        [
            "ं",
            -1,
            -1
        ],
        [
            "ै",
            -1,
            -1
        ]
    ], c = [
        [
            "ँ",
            -1,
            1
        ],
        [
            "ं",
            -1,
            1
        ],
        [
            "ै",
            -1,
            2
        ]
    ], a = [
        [
            "थिए",
            -1,
            1
        ],
        [
            "छ",
            -1,
            1
        ],
        [
            "इछ",
            1,
            1
        ],
        [
            "एछ",
            1,
            1
        ],
        [
            "िछ",
            1,
            1
        ],
        [
            "ेछ",
            1,
            1
        ],
        [
            "नेछ",
            5,
            1
        ],
        [
            "हुनेछ",
            6,
            1
        ],
        [
            "इन्छ",
            1,
            1
        ],
        [
            "िन्छ",
            1,
            1
        ],
        [
            "हुन्छ",
            1,
            1
        ],
        [
            "एका",
            -1,
            1
        ],
        [
            "इएका",
            11,
            1
        ],
        [
            "िएका",
            11,
            1
        ],
        [
            "ेका",
            -1,
            1
        ],
        [
            "नेका",
            14,
            1
        ],
        [
            "दा",
            -1,
            1
        ],
        [
            "इदा",
            16,
            1
        ],
        [
            "िदा",
            16,
            1
        ],
        [
            "देखि",
            -1,
            1
        ],
        [
            "माथि",
            -1,
            1
        ],
        [
            "एकी",
            -1,
            1
        ],
        [
            "इएकी",
            21,
            1
        ],
        [
            "िएकी",
            21,
            1
        ],
        [
            "ेकी",
            -1,
            1
        ],
        [
            "देखी",
            -1,
            1
        ],
        [
            "थी",
            -1,
            1
        ],
        [
            "दी",
            -1,
            1
        ],
        [
            "छु",
            -1,
            1
        ],
        [
            "एछु",
            28,
            1
        ],
        [
            "ेछु",
            28,
            1
        ],
        [
            "नेछु",
            30,
            1
        ],
        [
            "नु",
            -1,
            1
        ],
        [
            "हरु",
            -1,
            1
        ],
        [
            "हरू",
            -1,
            1
        ],
        [
            "छे",
            -1,
            1
        ],
        [
            "थे",
            -1,
            1
        ],
        [
            "ने",
            -1,
            1
        ],
        [
            "एकै",
            -1,
            1
        ],
        [
            "ेकै",
            -1,
            1
        ],
        [
            "नेकै",
            39,
            1
        ],
        [
            "दै",
            -1,
            1
        ],
        [
            "इदै",
            41,
            1
        ],
        [
            "िदै",
            41,
            1
        ],
        [
            "एको",
            -1,
            1
        ],
        [
            "इएको",
            44,
            1
        ],
        [
            "िएको",
            44,
            1
        ],
        [
            "ेको",
            -1,
            1
        ],
        [
            "नेको",
            47,
            1
        ],
        [
            "दो",
            -1,
            1
        ],
        [
            "इदो",
            49,
            1
        ],
        [
            "िदो",
            49,
            1
        ],
        [
            "यो",
            -1,
            1
        ],
        [
            "इयो",
            52,
            1
        ],
        [
            "भयो",
            52,
            1
        ],
        [
            "ियो",
            52,
            1
        ],
        [
            "थियो",
            55,
            1
        ],
        [
            "दियो",
            55,
            1
        ],
        [
            "थ्यो",
            52,
            1
        ],
        [
            "छौ",
            -1,
            1
        ],
        [
            "इछौ",
            59,
            1
        ],
        [
            "एछौ",
            59,
            1
        ],
        [
            "िछौ",
            59,
            1
        ],
        [
            "ेछौ",
            59,
            1
        ],
        [
            "नेछौ",
            63,
            1
        ],
        [
            "यौ",
            -1,
            1
        ],
        [
            "थियौ",
            65,
            1
        ],
        [
            "छ्यौ",
            65,
            1
        ],
        [
            "थ्यौ",
            65,
            1
        ],
        [
            "छन्",
            -1,
            1
        ],
        [
            "इछन्",
            69,
            1
        ],
        [
            "एछन्",
            69,
            1
        ],
        [
            "िछन्",
            69,
            1
        ],
        [
            "ेछन्",
            69,
            1
        ],
        [
            "नेछन्",
            73,
            1
        ],
        [
            "लान्",
            -1,
            1
        ],
        [
            "छिन्",
            -1,
            1
        ],
        [
            "थिन्",
            -1,
            1
        ],
        [
            "पर्",
            -1,
            1
        ],
        [
            "इस्",
            -1,
            1
        ],
        [
            "थिइस्",
            79,
            1
        ],
        [
            "छस्",
            -1,
            1
        ],
        [
            "इछस्",
            81,
            1
        ],
        [
            "एछस्",
            81,
            1
        ],
        [
            "िछस्",
            81,
            1
        ],
        [
            "ेछस्",
            81,
            1
        ],
        [
            "नेछस्",
            85,
            1
        ],
        [
            "िस्",
            -1,
            1
        ],
        [
            "थिस्",
            87,
            1
        ],
        [
            "छेस्",
            -1,
            1
        ],
        [
            "होस्",
            -1,
            1
        ]
    ];
    this.l = function() {
        k.f = k.cursor;
        k.cursor = k.a;
        var d = k.a - k.cursor, n;
        k.d = k.cursor;
        n = k.h(l);
        if (0 != n) switch(k.c = k.cursor, n){
            case 1:
                if (!k.e()) break;
                break;
            case 2:
                a: {
                    n = k.a - k.cursor;
                    b: {
                        c: {
                            var v = k.a - k.cursor;
                            if (k.g("ए")) break c;
                            k.cursor = k.a - v;
                            if (!k.g("े")) break b;
                        }
                        break a;
                    }
                    k.cursor = k.a - n;
                    k.e();
                }
        }
        k.cursor = k.a - d;
        d = k.a - k.cursor;
        for(;;){
            n = k.a - k.cursor;
            v = k.a - k.cursor;
            var b = k.a - k.cursor, f;
            k.d = k.cursor;
            0 == k.h(h) ? f = p : (k.c = k.cursor, f = g);
            if (f && (k.cursor = k.a - b, b = void 0, k.d = k.cursor, b = k.h(c), 0 != b)) switch(k.c = k.cursor, b){
                case 1:
                    d: {
                        b = k.a - k.cursor;
                        if (k.g("यौ")) break d;
                        k.cursor = k.a - b;
                        if (k.g("छौ")) break d;
                        k.cursor = k.a - b;
                        if (k.g("नौ")) break d;
                        k.cursor = k.a - b;
                        if (!k.g("थे")) break;
                    }
                    if (!k.e()) break;
                    break;
                case 2:
                    !k.g("त्र") || k.e();
            }
            k.cursor = k.a - v;
            k.d = k.cursor;
            0 == k.h(a) ? v = p : (k.c = k.cursor, v = !k.e() ? p : g);
            if (v) continue;
            k.cursor = k.a - n;
            break;
        }
        k.cursor = k.a - d;
        k.cursor = k.f;
        return g;
    };
    this.stemWord = function(a) {
        k.p(a);
        this.l();
        return k.j;
    };
}
var stemmerInstance = new stem();
function stemmer(word) {
    return stemmerInstance.stemWord(word);
}
