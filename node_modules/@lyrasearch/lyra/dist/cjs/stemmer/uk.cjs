/*@

  Russian stemming algorithm provided by Dr Martin Porter (snowball.tartarus.org):
  http://snowball.tartarus.org/algorithms/russian/stemmer.html

  Algorithm implementation in PHP provided by Dmitry Koterov (dklab.ru):
  http://forum.dklab.ru/php/advises/HeuristicWithoutTheDictionaryExtractionOfARootFromRussianWord.html

  Algorithm implementation adopted for Drupal by Algenon (4algenon@gmail.com):
  https://drupal.org/project/ukstemmer

  Algorithm implementation in Node by Zakharov Kyrylo
  https://github.com/Amice13

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
var vowel = new RegExp("[аеиоуюяіїє]");
var perfectiveGround = new RegExp("(?:[иы]в(?:ши(?:сь)?)?|(?<=[ая])(?:в(?:ши(?:сь)?)?))$");
// http://uk.wikipedia.org/wiki/Рефлексивне_дієслово
var reflexive = new RegExp("с[яьи]$");
// http://uk.wikipedia.org/wiki/Прикметник + http://wapedia.mobi/uk/Прикметник
var adjective = new RegExp("(?:[аеєуюя]|еє|ем|єє|ий|их|іх|ів|ій|ім|їй|ім|им|ими|іми|йми|ої|ою|ова|ове|ого|ому)$");
// http://uk.wikipedia.org/wiki/Дієприкметник
var participle = new RegExp("(?:[аіу]|ій|ий|им|ім|их|йми|ого|ому|ою)$");
// http://uk.wikipedia.org/wiki/Дієслово
var verb = new RegExp("(?:[еєую]|ав|али|ати|вши|ив|ити|ме|сь|ся|ши|учи|яти|ячи|ать|ять)$", "g");
// http://uk.wikipedia.org/wiki/Іменник
var noun = new RegExp("(?:[аеєіїийоуыьюя]|ам|ах|ами|ев|еві|еи|ей|ем|ею|єм|єю|ів|їв|ий|ием|ию|ия|иям|иях|ов|ові|ой|ом|ою|ью|ья|ям|ями|ях)$", "g");
var derivational = new RegExp("[^аеиоуюяіїє][аеиоуюяіїє]+[^аеиоуюяіїє]+[аеиоуюяіїє].*(?<=о)сть?$", "g");
var step2 = new RegExp("и$");
var step3 = new RegExp("ость$");
var step41 = new RegExp("ь$");
var step42 = new RegExp("ейше$");
var step43 = new RegExp("нн$");
var alterations = new RegExp("([гджзкстхцчш]|ст|дж|ждж|ьц|сі|ці|зі|он|ін|ів|ев|ок|шк)$");
var thisString;
var ukrstemmer = function(string) {
    var strict = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    thisString = string.toLowerCase();
    var wordStartIndex = string.match(vowel);
    if (wordStartIndex === null) return string;
    wordStartIndex = wordStartIndex.index;
    var wordStart = thisString.slice(0, wordStartIndex + 1);
    thisString = thisString.slice(wordStartIndex + 1);
    if (thisString === "") return string;
    // Step 1
    if (!replaceAndCheck(thisString, perfectiveGround, "")) {
        replaceAndCheck(thisString, reflexive, "");
        if (replaceAndCheck(thisString, adjective, "")) {
            replaceAndCheck(thisString, participle, "");
        } else {
            if (!replaceAndCheck(thisString, verb, "")) {
                replaceAndCheck(thisString, noun, "");
            }
        }
    }
    // Step 2
    replaceAndCheck(thisString, step2, "");
    // Step 3
    if (derivational.test(thisString)) {
        replaceAndCheck(thisString, step3, "");
    }
    // Step 4
    if (!replaceAndCheck(thisString, step41, "")) {
        replaceAndCheck(thisString, step42, "");
        replaceAndCheck(thisString, step43, "н");
    }
    if (strict) {
        replaceAndCheck(thisString, alterations, "");
    }
    return wordStart + thisString;
};
var replaceAndCheck = function(s, from, to) {
    var original = s;
    thisString = s.replace(from, to);
    return thisString !== original;
};
function stemmer(word) {
    return ukrstemmer(word);
}
