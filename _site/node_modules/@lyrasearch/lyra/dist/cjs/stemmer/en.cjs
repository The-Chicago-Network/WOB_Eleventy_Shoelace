"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "stemmer", {
    enumerable: true,
    get: function() {
        return stemmer;
    }
});
var step2List = {
    ational: "ate",
    tional: "tion",
    enci: "ence",
    anci: "ance",
    izer: "ize",
    bli: "ble",
    alli: "al",
    entli: "ent",
    eli: "e",
    ousli: "ous",
    ization: "ize",
    ation: "ate",
    ator: "ate",
    alism: "al",
    iveness: "ive",
    fulness: "ful",
    ousness: "ous",
    aliti: "al",
    iviti: "ive",
    biliti: "ble",
    logi: "log"
};
var step3List = {
    icate: "ic",
    ative: "",
    alize: "al",
    iciti: "ic",
    ical: "ic",
    ful: "",
    ness: ""
};
// Consonant
var c = "[^aeiou]";
// Vowel
var v = "[aeiouy]";
// Consonant sequence
var C = c + "[^aeiouy]*";
// Vowel sequence
var V = v + "[aeiou]*";
// [C]VC... is m>0
var mgr0 = "^(" + C + ")?" + V + C;
// [C]VC[V] is m=1
var meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$";
// [C]VCVC... is m>1
var mgr1 = "^(" + C + ")?" + V + C + V + C;
// vowel in stem
var s_v = "^(" + C + ")?" + v;
function stemmer(w) {
    var stem;
    var suffix;
    var re;
    var re2;
    var re3;
    var re4;
    if (w.length < 3) {
        return w;
    }
    var firstch = w.substring(0, 1);
    if (firstch == "y") {
        w = firstch.toUpperCase() + w.substring(1);
    }
    re = /^(.+?)(ss|i)es$/;
    re2 = /^(.+?)([^s])s$/;
    if (re.test(w)) {
        w = w.replace(re, "$1$2");
    } else if (re2.test(w)) {
        w = w.replace(re2, "$1$2");
    }
    re = /^(.+?)eed$/;
    re2 = /^(.+?)(ed|ing)$/;
    if (re.test(w)) {
        var fp = re.exec(w);
        re = new RegExp(mgr0);
        if (re.test(fp[1])) {
            re = /.$/;
            w = w.replace(re, "");
        }
    } else if (re2.test(w)) {
        var fp1 = re2.exec(w);
        stem = fp1[1];
        re2 = new RegExp(s_v);
        if (re2.test(stem)) {
            w = stem;
            re2 = /(at|bl|iz)$/;
            re3 = new RegExp("([^aeiouylsz])\\1$");
            re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
            if (re2.test(w)) {
                w = w + "e";
            } else if (re3.test(w)) {
                re = /.$/;
                w = w.replace(re, "");
            } else if (re4.test(w)) {
                w = w + "e";
            }
        }
    }
    re = /^(.+?)y$/;
    if (re.test(w)) {
        var fp2 = re.exec(w);
        stem = fp2 === null || fp2 === void 0 ? void 0 : fp2[1];
        re = new RegExp(s_v);
        if (stem && re.test(stem)) {
            w = stem + "i";
        }
    }
    re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
    if (re.test(w)) {
        var fp3 = re.exec(w);
        stem = fp3 === null || fp3 === void 0 ? void 0 : fp3[1];
        suffix = fp3 === null || fp3 === void 0 ? void 0 : fp3[2];
        re = new RegExp(mgr0);
        if (stem && re.test(stem)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            w = stem + step2List[suffix];
        }
    }
    re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
    if (re.test(w)) {
        var fp4 = re.exec(w);
        stem = fp4 === null || fp4 === void 0 ? void 0 : fp4[1];
        suffix = fp4 === null || fp4 === void 0 ? void 0 : fp4[2];
        re = new RegExp(mgr0);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (stem && re.test(stem)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            w = stem + step3List[suffix];
        }
    }
    re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
    re2 = /^(.+?)(s|t)(ion)$/;
    if (re.test(w)) {
        var fp5 = re.exec(w);
        stem = fp5 === null || fp5 === void 0 ? void 0 : fp5[1];
        re = new RegExp(mgr1);
        if (stem && re.test(stem)) {
            w = stem;
        }
    } else if (re2.test(w)) {
        var fp6 = re2.exec(w);
        var _fp_, _ref;
        stem = (_ref = (_fp_ = fp6 === null || fp6 === void 0 ? void 0 : fp6[1]) !== null && _fp_ !== void 0 ? _fp_ : "" + (fp6 === null || fp6 === void 0 ? void 0 : fp6[2])) !== null && _ref !== void 0 ? _ref : "";
        re2 = new RegExp(mgr1);
        if (re2.test(stem)) {
            w = stem;
        }
    }
    re = /^(.+?)e$/;
    if (re.test(w)) {
        var fp7 = re.exec(w);
        stem = fp7 === null || fp7 === void 0 ? void 0 : fp7[1];
        re = new RegExp(mgr1);
        re2 = new RegExp(meq1);
        re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
        if (stem && (re.test(stem) || re2.test(stem) && !re3.test(stem))) {
            w = stem;
        }
    }
    re = /ll$/;
    re2 = new RegExp(mgr1);
    if (re.test(w) && re2.test(w)) {
        re = /.$/;
        w = w.replace(re, "");
    }
    if (firstch == "y") {
        w = firstch.toLowerCase() + w.substring(1);
    }
    return w;
}
