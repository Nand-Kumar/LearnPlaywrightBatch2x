// this is a comment 

//multi-line comment
/*
 * Multi-Line Comment (Block Comment) Briefing:
 * --------------------------------------------
 * 1. Syntax: Starts with forward-slash + asterisk (/*) and ends with asterisk + forward-slash
 * 2. Purpose: Used to write explanations spanning multiple lines or to temporarily disable blocks of code.
 * 3. Execution: Everything inside the comment block is completely ignored by the JavaScript engine.
 * 4. VS Code Shortcut:
 *    - Mac: Shift + Option + A (⇧⌥A)
 *    - Windows: Shift + Alt + A
 * 5. Note: Multi-line comments CANNOT be nested inside another multi-line comment.
 */

/*
   Example 1: Standard Multi-line Comment
   Author: Nand Kumar
   Course: Learn Playwright Batch 2x
   Topic: JavaScript Comments
*/

/**
 * Example 2: JSDoc Comment (Documentation Comment)
 * Starts with /** and is used to document functions, parameters, and return types in IDEs.
 * @param {string} username - The user's login name
 * @returns {boolean} - True if login is successful
 */
function login(username) {
    return /* inline block comment */ true;
}
