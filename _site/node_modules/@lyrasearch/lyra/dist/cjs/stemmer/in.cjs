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
        return !l.n(c, 2325, 2399) ? p : g;
    };
    var l = new C(), h = [
        [
            "आँ",
            -1,
            -1
        ],
        [
            "ाँ",
            -1,
            -1
        ],
        [
            "इयाँ",
            1,
            -1
        ],
        [
            "आइयाँ",
            2,
            -1
        ],
        [
            "ाइयाँ",
            2,
            -1
        ],
        [
            "ियाँ",
            1,
            -1
        ],
        [
            "आं",
            -1,
            -1
        ],
        [
            "उआं",
            6,
            -1
        ],
        [
            "ुआं",
            6,
            -1
        ],
        [
            "ईं",
            -1,
            -1
        ],
        [
            "आईं",
            9,
            -1
        ],
        [
            "ाईं",
            9,
            -1
        ],
        [
            "एं",
            -1,
            -1
        ],
        [
            "आएं",
            12,
            -1
        ],
        [
            "उएं",
            12,
            -1
        ],
        [
            "ाएं",
            12,
            -1
        ],
        [
            "ताएं",
            15,
            -1,
            k
        ],
        [
            "अताएं",
            16,
            -1
        ],
        [
            "नाएं",
            15,
            -1,
            k
        ],
        [
            "अनाएं",
            18,
            -1
        ],
        [
            "ुएं",
            12,
            -1
        ],
        [
            "ओं",
            -1,
            -1
        ],
        [
            "आओं",
            21,
            -1
        ],
        [
            "उओं",
            21,
            -1
        ],
        [
            "ाओं",
            21,
            -1
        ],
        [
            "ताओं",
            24,
            -1,
            k
        ],
        [
            "अताओं",
            25,
            -1
        ],
        [
            "नाओं",
            24,
            -1,
            k
        ],
        [
            "अनाओं",
            27,
            -1
        ],
        [
            "ुओं",
            21,
            -1
        ],
        [
            "ां",
            -1,
            -1
        ],
        [
            "इयां",
            30,
            -1
        ],
        [
            "आइयां",
            31,
            -1
        ],
        [
            "ाइयां",
            31,
            -1
        ],
        [
            "ियां",
            30,
            -1
        ],
        [
            "ीं",
            -1,
            -1
        ],
        [
            "तीं",
            35,
            -1,
            k
        ],
        [
            "अतीं",
            36,
            -1
        ],
        [
            "आतीं",
            36,
            -1
        ],
        [
            "ातीं",
            36,
            -1
        ],
        [
            "ें",
            -1,
            -1
        ],
        [
            "ों",
            -1,
            -1
        ],
        [
            "इयों",
            41,
            -1
        ],
        [
            "आइयों",
            42,
            -1
        ],
        [
            "ाइयों",
            42,
            -1
        ],
        [
            "ियों",
            41,
            -1
        ],
        [
            "अ",
            -1,
            -1
        ],
        [
            "आ",
            -1,
            -1
        ],
        [
            "इ",
            -1,
            -1
        ],
        [
            "ई",
            -1,
            -1
        ],
        [
            "आई",
            49,
            -1
        ],
        [
            "ाई",
            49,
            -1
        ],
        [
            "उ",
            -1,
            -1
        ],
        [
            "ऊ",
            -1,
            -1
        ],
        [
            "ए",
            -1,
            -1
        ],
        [
            "आए",
            54,
            -1
        ],
        [
            "इए",
            54,
            -1
        ],
        [
            "आइए",
            56,
            -1
        ],
        [
            "ाइए",
            56,
            -1
        ],
        [
            "ाए",
            54,
            -1
        ],
        [
            "िए",
            54,
            -1
        ],
        [
            "ओ",
            -1,
            -1
        ],
        [
            "आओ",
            61,
            -1
        ],
        [
            "ाओ",
            61,
            -1
        ],
        [
            "कर",
            -1,
            -1,
            k
        ],
        [
            "अकर",
            64,
            -1
        ],
        [
            "आकर",
            64,
            -1
        ],
        [
            "ाकर",
            64,
            -1
        ],
        [
            "ा",
            -1,
            -1
        ],
        [
            "ऊंगा",
            68,
            -1
        ],
        [
            "आऊंगा",
            69,
            -1
        ],
        [
            "ाऊंगा",
            69,
            -1
        ],
        [
            "ूंगा",
            68,
            -1
        ],
        [
            "एगा",
            68,
            -1
        ],
        [
            "आएगा",
            73,
            -1
        ],
        [
            "ाएगा",
            73,
            -1
        ],
        [
            "ेगा",
            68,
            -1
        ],
        [
            "ता",
            68,
            -1,
            k
        ],
        [
            "अता",
            77,
            -1
        ],
        [
            "आता",
            77,
            -1
        ],
        [
            "ाता",
            77,
            -1
        ],
        [
            "ना",
            68,
            -1,
            k
        ],
        [
            "अना",
            81,
            -1
        ],
        [
            "आना",
            81,
            -1
        ],
        [
            "ाना",
            81,
            -1
        ],
        [
            "आया",
            68,
            -1
        ],
        [
            "ाया",
            68,
            -1
        ],
        [
            "ि",
            -1,
            -1
        ],
        [
            "ी",
            -1,
            -1
        ],
        [
            "ऊंगी",
            88,
            -1
        ],
        [
            "आऊंगी",
            89,
            -1
        ],
        [
            "ाऊंगी",
            89,
            -1
        ],
        [
            "एंगी",
            88,
            -1
        ],
        [
            "आएंगी",
            92,
            -1
        ],
        [
            "ाएंगी",
            92,
            -1
        ],
        [
            "ूंगी",
            88,
            -1
        ],
        [
            "ेंगी",
            88,
            -1
        ],
        [
            "एगी",
            88,
            -1
        ],
        [
            "आएगी",
            97,
            -1
        ],
        [
            "ाएगी",
            97,
            -1
        ],
        [
            "ओगी",
            88,
            -1
        ],
        [
            "आओगी",
            100,
            -1
        ],
        [
            "ाओगी",
            100,
            -1
        ],
        [
            "ेगी",
            88,
            -1
        ],
        [
            "ोगी",
            88,
            -1
        ],
        [
            "ती",
            88,
            -1,
            k
        ],
        [
            "अती",
            105,
            -1
        ],
        [
            "आती",
            105,
            -1
        ],
        [
            "ाती",
            105,
            -1
        ],
        [
            "नी",
            88,
            -1,
            k
        ],
        [
            "अनी",
            109,
            -1
        ],
        [
            "ु",
            -1,
            -1
        ],
        [
            "ू",
            -1,
            -1
        ],
        [
            "े",
            -1,
            -1
        ],
        [
            "एंगे",
            113,
            -1
        ],
        [
            "आएंगे",
            114,
            -1
        ],
        [
            "ाएंगे",
            114,
            -1
        ],
        [
            "ेंगे",
            113,
            -1
        ],
        [
            "ओगे",
            113,
            -1
        ],
        [
            "आओगे",
            118,
            -1
        ],
        [
            "ाओगे",
            118,
            -1
        ],
        [
            "ोगे",
            113,
            -1
        ],
        [
            "ते",
            113,
            -1,
            k
        ],
        [
            "अते",
            122,
            -1
        ],
        [
            "आते",
            122,
            -1
        ],
        [
            "ाते",
            122,
            -1
        ],
        [
            "ने",
            113,
            -1,
            k
        ],
        [
            "अने",
            126,
            -1
        ],
        [
            "आने",
            126,
            -1
        ],
        [
            "ाने",
            126,
            -1
        ],
        [
            "ो",
            -1,
            -1
        ],
        [
            "्",
            -1,
            -1
        ]
    ], c = [
        255,
        255,
        255,
        255,
        159,
        0,
        0,
        0,
        248,
        7
    ];
    this.l = function() {
        if (l.cursor >= l.a) return p;
        l.cursor++;
        l.f = l.cursor;
        l.cursor = l.a;
        l.d = l.cursor;
        if (0 == l.h(h)) return p;
        l.c = l.cursor;
        if (!l.e()) return p;
        l.cursor = l.f;
        return g;
    };
    this.stemWord = function(a) {
        l.p(a);
        this.l();
        return l.j;
    };
}
var stemmerInstance = new stem();
function stemmer(word) {
    return stemmerInstance.stemWord(word);
}
