'use strict';

var levenshtein = {
    /**
     * Check requirements.  
     * Returns Levensthein distance between rawWord1 and rawWord2.
     * 
     * Requirements:
     * - rawWord1 must be not `Null`
     * - rawWord1 must be of type `String`
     * - rawWord2 must be not `Null`
     * - rawWord2 must be of type `String`
     * 
     * @param {*} rawWord1 
     * @param {*} rawWord2
     */
    compute(rawWord1, rawWord2) {
        const word1 = stringifyInput(rawWord1, 'rawWord1');
        const word2 = stringifyInput(rawWord2, 'rawWord2');

        return fastLevenshtein(word1, word2);
    },

    /**
     * Does NOT check requirements.  
     * Returns Levensthein distance between rawWord1 and rawWord2.
     * 
     * Requirements:
     * - rawWord1 must be not `Null`
     * - rawWord1 must be of type `String`
     * - rawWord2 must be not `Null`
     * - rawWord2 must be of type `String`
     * 
     * @param {*} rawWord1 
     * @param {*} rawWord2
     */
    computeWithoutCheck(rawWord1, rawWord2) {
        return fastLevenshtein(rawWord1, rawWord2);
    }
};

function fastLevenshtein(word1, word2) {
    var lengthWord1 = word1.length;
    var lengthWord2 = word2.length;

    // Skip empty word
    if (!lengthWord1 || !lengthWord2) {
        return Math.max(lengthWord1, lengthWord2);
    }

    var characterWord1;
    var charactersWord2 = [];
    var lastRow = [];
    var i, j;
 
    // Initialize
    for (j = 0; j < lengthWord2;) {
        charactersWord2[j] = word2.charCodeAt(j);
        lastRow[j] = ++j;
    }
 
    var upperLeftCell, upperCell, currentCell;
 
    for (i = 0; i < lengthWord1;) {
        upperCell = i;
        characterWord1 = word1.charCodeAt(i++);
        currentCell = i;
 
        for (j = 0; j < lengthWord2; ++j) {
            upperLeftCell = upperCell;
            upperCell = lastRow[j];
            currentCell = Math.min(currentCell + 1, Math.min(upperCell + 1, upperLeftCell + (charactersWord2[j] === characterWord1 ? 0 : 1)));
            lastRow[j] = currentCell;
        }
    }
 
    return currentCell;
}

function stringifyInput(rawValue, valueName = 'rawValue') {
    if (rawValue === null || rawValue === undefined) {
        throw new Error('Expecting ' + valueName + ' of type \'string\', found: \'' + rawValue + '\'');
    }

    if (typeof rawValue !== 'string') {
        throw new Error('Expecting ' + valueName + ' of type \'string\', found: \'' + (typeof rawValue) + '\'');
    }

    return rawValue;    
}

module.exports = levenshtein;