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
export function compute(rawWord1: string, rawWord2: string): number;

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
export function computeWithoutCheck(rawWord1: string, rawWord2: string): number;