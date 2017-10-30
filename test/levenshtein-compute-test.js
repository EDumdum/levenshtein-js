'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const levenshtein = require('../src/levenshtein');

describe('levenshtein-compute', function() {
    it('Check inelligible input (null, undefined, not a string or number)', function() {
        expect(function() { 
            levenshtein.compute(null, ''); 
        }).to.throw('Expecting rawWord1 of type \'string\', found: \'null\'');
        expect(function() { 
            levenshtein.compute(undefined, ''); 
        }).to.throw('Expecting rawWord1 of type \'string\', found: \'undefined\'');
        expect(function() { 
            levenshtein.compute([], ''); 
        }).to.throw('Expecting rawWord1 of type \'string\', found: \'object\'');
        expect(function() { 
            levenshtein.compute('', null); 
        }).to.throw('Expecting rawWord2 of type \'string\', found: \'null\'');
        expect(function() { 
            levenshtein.compute('', undefined); 
        }).to.throw('Expecting rawWord2 of type \'string\', found: \'undefined\'');
        expect(function() { 
            levenshtein.compute('', []); 
        }).to.throw('Expecting rawWord2 of type \'string\', found: \'object\'');
    });

    it('Check return with elligible value', function() {
        expect(levenshtein.compute('123', '')).eq(3);
        expect(levenshtein.compute('', 'abcdef')).eq(6);
        expect(levenshtein.compute('SJWTKISGIKFFYRXLKUMYYEXOQOGMSYJGWFSGAGIF', 'UNIWVGNDXLQYUYUPJDYDHGXWRGBWXGTAYDQVV')).eq(36);
        expect(levenshtein.compute('DCPOQPPJBTCGCUODPOAMOQTITKKPAEB', 'WQILUOTYLDYKEJNOYVDNHGGGPRTCBOMPLHFMSRULCEECHTCSWF')).eq(43);
        expect(levenshtein.compute('HLKCOYCVLKHQWPHJOGJJEDMJTMEGBEJTRVJYDBLRRKB', 'NCGLFIXTNAMHYIVSDLSWKYXLSUBFOVRKFBXSHW')).eq(39);
        expect(levenshtein.compute('EYKHTVRQYEAVACRPXVQJJUEFIVPCYRPWEMXFBIKHTUQINTTOY', 'NIMNULWAHIEUKFGWPNRNSASEVNKXTTPPMVPLYEYBUKCPUVYBXSOELIGJYBG')).eq(50);
        expect(levenshtein.compute('BEDIGOSJJYBLCULYUORGAXCQHXBWAKHNJUMRUHPFKCD', 'OEFLJMIFTVATYXDCFYDVQFCCFSEVEPTTJWMPEVMQXYNLIUDWLD')).eq(44);
    });
});
