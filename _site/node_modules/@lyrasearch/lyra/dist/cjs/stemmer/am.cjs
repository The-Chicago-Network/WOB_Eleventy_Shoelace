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
            "րորդ",
            -1,
            1
        ],
        [
            "երորդ",
            0,
            1
        ],
        [
            "ալի",
            -1,
            1
        ],
        [
            "ակի",
            -1,
            1
        ],
        [
            "որակ",
            -1,
            1
        ],
        [
            "եղ",
            -1,
            1
        ],
        [
            "ական",
            -1,
            1
        ],
        [
            "արան",
            -1,
            1
        ],
        [
            "են",
            -1,
            1
        ],
        [
            "եկեն",
            8,
            1
        ],
        [
            "երեն",
            8,
            1
        ],
        [
            "որէն",
            -1,
            1
        ],
        [
            "ին",
            -1,
            1
        ],
        [
            "գին",
            12,
            1
        ],
        [
            "ովին",
            12,
            1
        ],
        [
            "լայն",
            -1,
            1
        ],
        [
            "վուն",
            -1,
            1
        ],
        [
            "պես",
            -1,
            1
        ],
        [
            "իվ",
            -1,
            1
        ],
        [
            "ատ",
            -1,
            1
        ],
        [
            "ավետ",
            -1,
            1
        ],
        [
            "կոտ",
            -1,
            1
        ],
        [
            "բար",
            -1,
            1
        ]
    ], h = [
        [
            "ա",
            -1,
            1
        ],
        [
            "ացա",
            0,
            1
        ],
        [
            "եցա",
            0,
            1
        ],
        [
            "վե",
            -1,
            1
        ],
        [
            "ացրի",
            -1,
            1
        ],
        [
            "ացի",
            -1,
            1
        ],
        [
            "եցի",
            -1,
            1
        ],
        [
            "վեցի",
            6,
            1
        ],
        [
            "ալ",
            -1,
            1
        ],
        [
            "ըալ",
            8,
            1
        ],
        [
            "անալ",
            8,
            1
        ],
        [
            "ենալ",
            8,
            1
        ],
        [
            "ացնալ",
            8,
            1
        ],
        [
            "ել",
            -1,
            1
        ],
        [
            "ըել",
            13,
            1
        ],
        [
            "նել",
            13,
            1
        ],
        [
            "ցնել",
            15,
            1
        ],
        [
            "եցնել",
            16,
            1
        ],
        [
            "չել",
            13,
            1
        ],
        [
            "վել",
            13,
            1
        ],
        [
            "ացվել",
            19,
            1
        ],
        [
            "եցվել",
            19,
            1
        ],
        [
            "տել",
            13,
            1
        ],
        [
            "ատել",
            22,
            1
        ],
        [
            "ոտել",
            22,
            1
        ],
        [
            "կոտել",
            24,
            1
        ],
        [
            "ված",
            -1,
            1
        ],
        [
            "ում",
            -1,
            1
        ],
        [
            "վում",
            27,
            1
        ],
        [
            "ան",
            -1,
            1
        ],
        [
            "ցան",
            29,
            1
        ],
        [
            "ացան",
            30,
            1
        ],
        [
            "ացրին",
            -1,
            1
        ],
        [
            "ացին",
            -1,
            1
        ],
        [
            "եցին",
            -1,
            1
        ],
        [
            "վեցին",
            34,
            1
        ],
        [
            "ալիս",
            -1,
            1
        ],
        [
            "ելիս",
            -1,
            1
        ],
        [
            "ավ",
            -1,
            1
        ],
        [
            "ացավ",
            38,
            1
        ],
        [
            "եցավ",
            38,
            1
        ],
        [
            "ալով",
            -1,
            1
        ],
        [
            "ելով",
            -1,
            1
        ],
        [
            "ար",
            -1,
            1
        ],
        [
            "ացար",
            43,
            1
        ],
        [
            "եցար",
            43,
            1
        ],
        [
            "ացրիր",
            -1,
            1
        ],
        [
            "ացիր",
            -1,
            1
        ],
        [
            "եցիր",
            -1,
            1
        ],
        [
            "վեցիր",
            48,
            1
        ],
        [
            "աց",
            -1,
            1
        ],
        [
            "եց",
            -1,
            1
        ],
        [
            "ացրեց",
            51,
            1
        ],
        [
            "ալուց",
            -1,
            1
        ],
        [
            "ելուց",
            -1,
            1
        ],
        [
            "ալու",
            -1,
            1
        ],
        [
            "ելու",
            -1,
            1
        ],
        [
            "աք",
            -1,
            1
        ],
        [
            "ցաք",
            57,
            1
        ],
        [
            "ացաք",
            58,
            1
        ],
        [
            "ացրիք",
            -1,
            1
        ],
        [
            "ացիք",
            -1,
            1
        ],
        [
            "եցիք",
            -1,
            1
        ],
        [
            "վեցիք",
            62,
            1
        ],
        [
            "անք",
            -1,
            1
        ],
        [
            "ցանք",
            64,
            1
        ],
        [
            "ացանք",
            65,
            1
        ],
        [
            "ացրինք",
            -1,
            1
        ],
        [
            "ացինք",
            -1,
            1
        ],
        [
            "եցինք",
            -1,
            1
        ],
        [
            "վեցինք",
            69,
            1
        ]
    ], c = [
        [
            "որդ",
            -1,
            1
        ],
        [
            "ույթ",
            -1,
            1
        ],
        [
            "ուհի",
            -1,
            1
        ],
        [
            "ցի",
            -1,
            1
        ],
        [
            "իլ",
            -1,
            1
        ],
        [
            "ակ",
            -1,
            1
        ],
        [
            "յակ",
            5,
            1
        ],
        [
            "անակ",
            5,
            1
        ],
        [
            "իկ",
            -1,
            1
        ],
        [
            "ուկ",
            -1,
            1
        ],
        [
            "ան",
            -1,
            1
        ],
        [
            "պան",
            10,
            1
        ],
        [
            "ստան",
            10,
            1
        ],
        [
            "արան",
            10,
            1
        ],
        [
            "եղէն",
            -1,
            1
        ],
        [
            "յուն",
            -1,
            1
        ],
        [
            "ություն",
            15,
            1
        ],
        [
            "ածո",
            -1,
            1
        ],
        [
            "իչ",
            -1,
            1
        ],
        [
            "ուս",
            -1,
            1
        ],
        [
            "ուստ",
            -1,
            1
        ],
        [
            "գար",
            -1,
            1
        ],
        [
            "վոր",
            -1,
            1
        ],
        [
            "ավոր",
            22,
            1
        ],
        [
            "ոց",
            -1,
            1
        ],
        [
            "անօց",
            -1,
            1
        ],
        [
            "ու",
            -1,
            1
        ],
        [
            "ք",
            -1,
            1
        ],
        [
            "չեք",
            27,
            1
        ],
        [
            "իք",
            27,
            1
        ],
        [
            "ալիք",
            29,
            1
        ],
        [
            "անիք",
            29,
            1
        ],
        [
            "վածք",
            27,
            1
        ],
        [
            "ույք",
            27,
            1
        ],
        [
            "ենք",
            27,
            1
        ],
        [
            "ոնք",
            27,
            1
        ],
        [
            "ունք",
            27,
            1
        ],
        [
            "մունք",
            36,
            1
        ],
        [
            "իչք",
            27,
            1
        ],
        [
            "արք",
            27,
            1
        ]
    ], a = [
        [
            "սա",
            -1,
            1
        ],
        [
            "վա",
            -1,
            1
        ],
        [
            "ամբ",
            -1,
            1
        ],
        [
            "դ",
            -1,
            1
        ],
        [
            "անդ",
            3,
            1
        ],
        [
            "ությանդ",
            4,
            1
        ],
        [
            "վանդ",
            4,
            1
        ],
        [
            "ոջդ",
            3,
            1
        ],
        [
            "երդ",
            3,
            1
        ],
        [
            "ներդ",
            8,
            1
        ],
        [
            "ուդ",
            3,
            1
        ],
        [
            "ը",
            -1,
            1
        ],
        [
            "անը",
            11,
            1
        ],
        [
            "ությանը",
            12,
            1
        ],
        [
            "վանը",
            12,
            1
        ],
        [
            "ոջը",
            11,
            1
        ],
        [
            "երը",
            11,
            1
        ],
        [
            "ները",
            16,
            1
        ],
        [
            "ի",
            -1,
            1
        ],
        [
            "վի",
            18,
            1
        ],
        [
            "երի",
            18,
            1
        ],
        [
            "ների",
            20,
            1
        ],
        [
            "անում",
            -1,
            1
        ],
        [
            "երում",
            -1,
            1
        ],
        [
            "ներում",
            23,
            1
        ],
        [
            "ն",
            -1,
            1
        ],
        [
            "ան",
            25,
            1
        ],
        [
            "ության",
            26,
            1
        ],
        [
            "վան",
            26,
            1
        ],
        [
            "ին",
            25,
            1
        ],
        [
            "երին",
            29,
            1
        ],
        [
            "ներին",
            30,
            1
        ],
        [
            "ությանն",
            25,
            1
        ],
        [
            "երն",
            25,
            1
        ],
        [
            "ներն",
            33,
            1
        ],
        [
            "ուն",
            25,
            1
        ],
        [
            "ոջ",
            -1,
            1
        ],
        [
            "ությանս",
            -1,
            1
        ],
        [
            "վանս",
            -1,
            1
        ],
        [
            "ոջս",
            -1,
            1
        ],
        [
            "ով",
            -1,
            1
        ],
        [
            "անով",
            40,
            1
        ],
        [
            "վով",
            40,
            1
        ],
        [
            "երով",
            40,
            1
        ],
        [
            "ներով",
            43,
            1
        ],
        [
            "եր",
            -1,
            1
        ],
        [
            "ներ",
            45,
            1
        ],
        [
            "ց",
            -1,
            1
        ],
        [
            "ից",
            47,
            1
        ],
        [
            "վանից",
            48,
            1
        ],
        [
            "ոջից",
            48,
            1
        ],
        [
            "վից",
            48,
            1
        ],
        [
            "երից",
            48,
            1
        ],
        [
            "ներից",
            52,
            1
        ],
        [
            "ցից",
            48,
            1
        ],
        [
            "ոց",
            47,
            1
        ],
        [
            "ուց",
            47,
            1
        ]
    ], d = [
        209,
        4,
        128,
        0,
        18
    ], n = 0, v = 0;
    this.l = function() {
        n = v = k.a;
        var b = k.cursor;
        a: {
            b: for(;;){
                if (k.i(d, 1377, 1413)) break b;
                if (k.cursor >= k.a) break a;
                k.cursor++;
            }
            v = k.cursor;
            b: for(;;){
                if (k.k(d, 1377, 1413)) break b;
                if (k.cursor >= k.a) break a;
                k.cursor++;
            }
            b: for(;;){
                if (k.i(d, 1377, 1413)) break b;
                if (k.cursor >= k.a) break a;
                k.cursor++;
            }
            b: for(;;){
                if (k.k(d, 1377, 1413)) break b;
                if (k.cursor >= k.a) break a;
                k.cursor++;
            }
            n = k.cursor;
        }
        k.cursor = b;
        k.f = k.cursor;
        k.cursor = k.a;
        if (k.cursor < v) return p;
        b = k.f;
        k.f = v;
        var f = k.a - k.cursor;
        k.d = k.cursor;
        0 != k.h(a) && (k.c = k.cursor, !(n <= k.cursor) || k.e());
        k.cursor = k.a - f;
        f = k.a - k.cursor;
        k.d = k.cursor;
        0 != k.h(h) && (k.c = k.cursor, k.e());
        k.cursor = k.a - f;
        f = k.a - k.cursor;
        k.d = k.cursor;
        0 != k.h(l) && (k.c = k.cursor, k.e());
        k.cursor = k.a - f;
        f = k.a - k.cursor;
        k.d = k.cursor;
        0 != k.h(c) && (k.c = k.cursor, k.e());
        k.cursor = k.a - f;
        k.f = b;
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
