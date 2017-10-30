'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const levenshtein = require('../src/levenshtein');

describe('levenshtein-computeWithoutCheck', function() {
    it('Check return with elligible value', function() {
        expect(levenshtein.compute('sdfghjk', '')).eq(7);
        expect(levenshtein.compute('', 'rf')).eq(2);
        expect(levenshtein.computeWithoutCheck('PWGGJIXFWRRNGJPRLXWBOROVCAJRGIKMIDQEBSYEQPNVKOMLNQXBTOGGAV', 'WTYFAOXNUYOQRCLCXHMWWNODXJXMQDSDLUAISRXDSJ')).eq(50);
        expect(levenshtein.computeWithoutCheck('PUPMLADEPADULBLQKLXRJKTWXMONDGV', 'WERCUAVINARJMPQJPKFVBFAMRCPPCXVA')).eq(29);
        expect(levenshtein.computeWithoutCheck('HAQINECQBFGHENHWMIYUWYWYNAQODBIXLMYTWVBXV', 'MSUBSXDNSJUFXLAJXPYVXLKYKPSGSMAYRJXIXEABIBWMGJ')).eq(41);
        expect(levenshtein.computeWithoutCheck('USXBOPFIHFEOXENSMETAEUSIDBOFQPTLNBALDXMGVSDUAXLFJCFISNJ', 'QXPGLMUWBTQXWXPJIBLNMITDAIUKOKFOCMFRBRKEWXFYSKLHIN')).eq(49);
        expect(levenshtein.computeWithoutCheck('NGXJPCFRNAICBNACRGUIWGWDFVTRIBMKBKFAHQNABLE', 'XFMYDXYTUCVPMUFCYUIKKOXUCEQKVLTMDSAYVWKNQFVABXPPS')).eq(43);
    });
});
