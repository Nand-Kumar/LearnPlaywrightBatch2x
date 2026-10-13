// ============================================================================
// 1. ACCEPTED (VALID) IDENTIFIERS IN JAVASCRIPT
// ============================================================================

// --- A. Starting Characters (Letters, _, $) ---
let a = 1;                          // Single letter
let firstName = "Nand";             // camelCase (Standard JS convention)
let FirstName = "Nand";             // PascalCase (Used for classes/components)
let FIRST_NAME = "Nand";            // UPPER_SNAKE_CASE (Used for constants)
let _ = "single underscore";        // Single underscore is a valid identifier
let __ = "double underscore";       // Multiple underscores are valid
let _privateVar = 10;               // Leading underscore
let $ = "single dollar";            // Single dollar sign is valid (e.g., jQuery)
let $$ = "double dollar";           // Multiple dollar signs are valid
let $element = "button";            // Leading dollar sign
let _$mixed$_ = "valid";            // Any combination of _ and $

// --- B. Numbers / Digits (Allowed after the first character) ---
let user1 = "Alice";                // Ends with a digit
let a0b1c2 = "mixed";               // Digits mixed in the middle
let _123 = 123;                     // Valid because it starts with '_', not a digit
let $99 = 99;                       // Valid because it starts with '$', not a digit

// --- C. Case Sensitivity (All below are distinct identifiers) ---
let value = 1;
let Value = 2;
let vAlUe = 3;
let VALUE = 4;

// --- D. Unicode Characters (Letters from any language / script) ---
// JS supports characters with the Unicode property "ID_Start" and "ID_Continue"
let π = 3.14159;                    // Greek letter (Math symbol letter)
let α = "alpha";                    // Greek letter
let café = "coffee";                // Latin character with diacritic/accent
let naïve = true;                   // Diaeresis accent
let नमस्ते = "Hello in Hindi";        // Devanagari script (Starts with letter, contains vowel signs/matras)
let வணக்கம் = "Hello in Tamil";      // Tamil script
let 变量 = "Chinese variable";       // CJK (Chinese/Japanese/Korean) ideographs
let переменная = "Russian";         // Cyrillic script
let متغير = "Arabic";               // Arabic script
let Ⅶ = 7;                          // Roman numeral Unicode character (Letter_Number category)

// --- E. Unicode Escape Sequences (\uXXXX and \u{XXXXX}) ---
// You can write valid identifier characters using their Unicode hex codes
let \u007A = "This is 'z'";         // \u007A is 'z' (Same as: let z = ...)
let \u03C9 = "This is 'ω'";         // \u03C9 is 'ω' (omega)
let \u{62} = "This is 'b'";         // ES6 code point escape for 'b'
let my\u005Fvar = "my_var";         // \u005F is '_' (underscore)
let \u0024price = 500;              // \u0024 is '$' (dollar sign)

// --- F. Non-ASCII Digits (Unicode Decimal Numbers after 1st character) ---
// Unicode digits (Nd category) are allowed AFTER the first character
let var१२३ = "Devanagari digits 123"; // '१२३' are Hindi digits (valid after 1st char)
let item٣ = "Arabic digit 3";         // '٣' is Arabic-Indic digit 3

// --- G. Zero-Width Joiner (ZWJ) & Zero-Width Non-Joiner (ZWNJ) ---
// Allowed AFTER the first character (\u200C and \u200D)
let a\u200Cb = "Contains ZWNJ";     // Zero-width non-joiner inside identifier
let a\u200Db = "Contains ZWJ";      // Zero-width joiner inside identifier

// --- H. Contextual Keywords (Allowed as variable names!) ---
// These act as keywords in specific syntax, but are VALID as normal identifiers
let async = "valid variable name";
let as = "valid";
let from = "valid";
let get = "valid";
let set = "valid";
let of = "valid";
let meta = "valid";
let target = "valid";

// --- I. Global Properties / Built-in Names (Valid, though bad practice to shadow) ---
// 'undefined', 'NaN', 'Infinity' are global properties, NOT reserved keywords
let undefined_var = "valid";
let NaN_check = "valid";
let Infinity_loop = "valid";
let Number = "shadows built-in Number (valid syntax in local scope)";
let String = "shadows built-in String";
let console = "shadows console";

// --- J. Non-Strict Mode Only Keywords (Valid ONLY when "use strict" is NOT enabled) ---
let implements = "valid in non-strict mode";
let interface = "valid in non-strict mode";
let package = "valid in non-strict mode";
let private = "valid in non-strict mode";
let protected = "valid in non-strict mode";
let public = "valid in non-strict mode";
let static = "valid in non-strict mode";
let yield_val = "yield is valid in non-strict/non-generator";

// --- K. Private Class Fields (# prefix is ONLY valid inside a Class) ---
class User {
    #secretPassword = "123";        // Valid: '#' is part of a private identifier inside a class
    #getSecret() {                  // Valid: Private method identifier
        return this.#secretPassword;
    }
}

// --- L. No Length Limit ---
let a_very_long_identifier_name_that_keeps_going_and_going_1234567890_abcdefghijklmnopqrstuvwxyz = "valid";


// ============================================================================
// 2. NOT ACCEPTED (INVALID) IDENTIFIERS IN JAVASCRIPT
// (Commented out because they throw SyntaxError)
// ============================================================================

// --- A. Cannot Start with a Digit (ASCII or Unicode Digits) ---
// let 1user = "Nand";              // SyntaxError: Invalid or unexpected token
// let 0 = 10;                      // SyntaxError: Unexpected number
// let 99problems = true;           // SyntaxError: Invalid or unexpected token
// let १var = "Hindi digit 1";      // SyntaxError: Cannot start with a Unicode digit either
// let \u0031abc = "1abc";          // SyntaxError: \u0031 is '1', cannot start with a digit even if escaped!

// --- B. Cannot Contain Spaces or Whitespace ---
// let first name = "Nand";         // SyntaxError: Unexpected identifier 'name'
// let my\tvar = 10;                // SyntaxError: Tabs are not allowed

// --- C. Cannot Contain Emojis or Pictographs ---
// Emojis are symbols (Other_Symbol), NOT Unicode letters (ID_Start)
// let 🚀 = "rocket";               // SyntaxError: Invalid or unexpected token
// let user😀 = "smile";            // SyntaxError: Invalid or unexpected token
// let ❤️ = "heart";                // SyntaxError: Invalid or unexpected token

// --- D. Cannot Contain Currency Symbols (Except $) ---
// Only '$' is allowed. Other currency symbols are invalid!
// let ₹price = 100;                // SyntaxError: Indian Rupee symbol not allowed
// let €cost = 50;                  // SyntaxError: Euro symbol not allowed
// let £amount = 50;                // SyntaxError: Pound symbol not allowed
// let ¥yen = 50;                   // SyntaxError: Yen symbol not allowed

// --- E. Cannot Contain Mathematical / Punctuation / Operator Symbols ---
// let first-name = "Nand";         // SyntaxError: '-' is subtraction operator
// let a+b = 10;                    // SyntaxError: '+' is addition operator
// let a*b = 10;                    // SyntaxError: '*' is multiplication operator
// let user@name = "Nand";          // SyntaxError: '@' is not allowed
// let total% = 100;                // SyntaxError: '%' is modulus operator
// let isValid? = true;             // SyntaxError: '?' is ternary operator
// let not!valid = false;           // SyntaxError: '!' is logical NOT operator
// let my.var = 10;                 // SyntaxError: '.' is property access operator
// let a,b = 10;                    // Note: ',' is comma operator (declares 'a' as undefined, not part of one name)
// let [var] = 10;                  // Brackets are for destructuring, not identifier characters
// let (var) = 10;                  // Parentheses are grouping operators

// --- F. Cannot Use '#' Outside of a Class ---
// let #private = 10;               // SyntaxError: Private field '#private' must be declared in an enclosing class
// let user#1 = "Nand";             // SyntaxError: '#' cannot be used in the middle of an identifier

// --- G. Cannot Start with Zero-Width Joiner/Non-Joiner (ZWNJ / ZWJ) ---
// let \u200Cvar = "invalid";       // SyntaxError: ZWNJ is only allowed AFTER the first character
// let \u200Dvar = "invalid";       // SyntaxError: ZWJ is only allowed AFTER the first character

// --- H. Cannot Be a Reserved Keyword ---
// let break = 1;                   // SyntaxError: Unexpected token 'break'
// let case = 1;                    // SyntaxError: Unexpected token 'case'
// let catch = 1;                   // SyntaxError: Unexpected token 'catch'
// let class = 1;                   // SyntaxError: Unexpected token 'class'
// let const = 1;                   // SyntaxError: Unexpected token 'const'
// let continue = 1;                // SyntaxError: Unexpected token 'continue'
// let debugger = 1;                // SyntaxError: Unexpected token 'debugger'
// let default = 1;                 // SyntaxError: Unexpected token 'default'
// let delete = 1;                  // SyntaxError: Unexpected token 'delete'
// let do = 1;                      // SyntaxError: Unexpected token 'do'
// let else = 1;                    // SyntaxError: Unexpected token 'else'
// let enum = 1;                    // SyntaxError: Unexpected reserved word (Future reserved word)
// let export = 1;                  // SyntaxError: Unexpected token 'export'
// let extends = 1;                 // SyntaxError: Unexpected token 'extends'
// let false = 1;                   // SyntaxError: Unexpected token 'false'
// let finally = 1;                 // SyntaxError: Unexpected token 'finally'
// let for = 1;                     // SyntaxError: Unexpected token 'for'
// let function = 1;                // SyntaxError: Unexpected token 'function'
// let if = 1;                      // SyntaxError: Unexpected token 'if'
// let import = 1;                  // SyntaxError: Unexpected token 'import'
// let in = 1;                      // SyntaxError: Unexpected token 'in'
// let instanceof = 1;              // SyntaxError: Unexpected token 'instanceof'
// let let = 1;                     // SyntaxError: 'let' is disallowed as a lexically bound name
// let new = 1;                     // SyntaxError: Unexpected token 'new'
// let null = 1;                    // SyntaxError: Unexpected token 'null'
// let return = 1;                  // SyntaxError: Unexpected token 'return'
// let super = 1;                   // SyntaxError: Unexpected token 'super'
// let switch = 1;                  // SyntaxError: Unexpected token 'switch'
// let this = 1;                    // SyntaxError: Unexpected token 'this'
// let throw = 1;                   // SyntaxError: Unexpected token 'throw'
// let true = 1;                    // SyntaxError: Unexpected token 'true'
// let try = 1;                     // SyntaxError: Unexpected token 'try'
// let typeof = 1;                  // SyntaxError: Unexpected token 'typeof'
// let var = 1;                     // SyntaxError: Unexpected token 'var'
// let void = 1;                    // SyntaxError: Unexpected token 'void'
// let while = 1;                   // SyntaxError: Unexpected token 'while'
// let with = 1;                    // SyntaxError: Unexpected token 'with'

// --- I. Cannot Bypass Reserved Keywords Using Unicode Escapes ---
// Escaping a letter in a reserved word still counts as that reserved word!
// let \u0069f = 10;                // SyntaxError: \u0069f spells 'if' -> Unexpected escaped reserved word
// let \u0076ar = 20;               // SyntaxError: \u0076ar spells 'var' -> Unexpected escaped reserved word

// --- J. Invalid in Strict Mode ("use strict" / ES Modules / Classes) ---
// (If "use strict"; is at the top of the file, all of these throw SyntaxError)
/*
"use strict";
let implements = 1;                 // SyntaxError: Unexpected strict mode reserved word
let interface = 1;                  // SyntaxError: Unexpected strict mode reserved word
let package = 1;                    // SyntaxError: Unexpected strict mode reserved word
let private = 1;                    // SyntaxError: Unexpected strict mode reserved word
let protected = 1;                  // SyntaxError: Unexpected strict mode reserved word
let public = 1;                     // SyntaxError: Unexpected strict mode reserved word
let static = 1;                     // SyntaxError: Unexpected strict mode reserved word
let yield = 1;                      // SyntaxError: Unexpected strict mode reserved word
let eval = 1;                       // SyntaxError: Unexpected eval or arguments in strict mode
let arguments = 1;                  // SyntaxError: Unexpected eval or arguments in strict mode
*/

// --- K. Invalid in Async Functions / ES Modules ---
// let await = 1;                   // SyntaxError inside async functions or ES modules
