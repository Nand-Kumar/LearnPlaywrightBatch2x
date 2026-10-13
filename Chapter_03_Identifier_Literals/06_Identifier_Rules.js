var $ =12;
var _a=10;
var p=15;

var abc123 = 13;

var Name = "Nand";
var name = "Nand Kumar";
var nand_kumar = "hello";

//Best Practice

var name = "Pramod";

var firstName = "Nand";
var lastName = "Kumar"; // camel case

var first_name = "Nand Kumar"; // snake case

// =======================================================
// ALL TYPES OF NAMING CASES & THEIR USE CASES
// =======================================================

// --- 1. VALID IN JAVASCRIPT ---

// 1. camelCase (lowerCamelCase)
// Format: First word is lowercase, every subsequent word starts with an uppercase letter.
// Use Cases:
//   - Standard JS variables & object properties (e.g., let userFirstName, page.url)
//   - Functions & methods (e.g., getUserData(), clickSubmitButton())
//   - Playwright locator variables & test helper functions (e.g., const loginButton = ...)
let userFirstName = "Nand";
let totalCartAmount = 500;

// 2. PascalCase (UpperCamelCase)
// Format: Every word starts with an uppercase letter (including the first word).
// Use Cases:
//   - JavaScript Classes & Constructor functions (e.g., class LoginPage {}, class BrowserManager {})
//   - Page Object Model (POM) class names in Playwright (e.g., CheckoutPage, DashboardPage)
//   - React / Vue / Frontend UI Components (e.g., <UserProfile />, <NavBar />)
//   - TypeScript Interfaces, Types, and Enums (e.g., interface UserResponse, enum TestStatus)
let UserFirstName = "Nand";
class LoginPage {}

// 3. snake_case (pothole_case)
// Format: All words are lowercase and separated by underscores (_).
// Use Cases:
//   - Database column & table names (SQL / PostgreSQL / MySQL: user_id, created_at)
//   - JSON API request/response payload keys (e.g., { access_token: "...", user_name: "..." })
//   - File & folder names in test suites (e.g., login_test.spec.js, chapter_01_Basics)
//   - Python & Ruby variables/functions
let user_first_name = "Nand";
let total_cart_amount = 500;

// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE / MACRO_CASE / CONSTANT_CASE)
// Format: All words are uppercase and separated by underscores (_).
// Use Cases:
//   - Global Constants & fixed configuration values (e.g., MAX_RETRY_COUNT, DEFAULT_TIMEOUT)
//   - Environment variables in .env files (e.g., process.env.BASE_URL, API_SECRET_KEY)
//   - Fixed status codes or action types (e.g., STATUS_SUCCESS, ERROR_NOT_FOUND)
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://example.com";

// 5. Camel_Snake_Case
// Format: Each word starts with an uppercase letter and is separated by underscores (_).
// Use Cases:
//   - Readable test case method names or legacy C/Ada identifiers (e.g., Verify_User_Login_Success)
//   - Sometimes used for grouping chapter/module folders (e.g., Chapter_02_Javascript_Concepts)
let User_First_Name = "Nand";

// 6. camel_Snake_Case
// Format: First word is lowercase, subsequent words are capitalized, separated by underscores (_).
// Use Cases:
//   - Hybrid naming in test scripts to separate prefix/module from action (e.g., auth_LoginUser, api_GetToken)
let user_First_Name = "Nand";

// 7. flatcase (lowercase)
// Format: All words are lowercase with no separators at all.
// Use Cases:
//   - Short/simple variable names, loop counters, or HTML attributes (e.g., onclick, onmouseover, username, maxlen)
//   - Package/module names or simple IDs
let userfirstname = "Nand";

// 8. UPPERFLATCASE (UPPERCASE)
// Format: All words are uppercase with no separators at all.
// Use Cases:
//   - Short acronyms, abbreviations, or single-word constants (e.g., JSON, HTML, URL, DOM, API, PID)
let USERFIRSTNAME = "Nand";

// 9. Hungarian Notation
// Format: Prefixes the variable name with its data type or semantic intent.
// Use Cases:
//   - Boolean flags prefixed with is/has/can/should (Very common in JS: isVisible, hasError, isLoggedIn)
//   - DOM / jQuery / Locator elements prefixed with '$' or 'el' (e.g., $submitButton, elHeader)
//   - Legacy/strict type hinting (e.g., strName for String, numAge for Number, arrItems for Array, fnCallback for Function)
let strUserName = "Nand";
let numUserAge = 25;
let isUserLoggedIn = true;
let $submitButton = "btn";

// 10. Leading / Trailing Underscore Convention (Dunder / Private style)
// Format: Single (_) or double (__) underscores before/after the name.
// Use Cases:
//   - Single leading underscore (_var): Signals an internal/private variable or unused function parameter (e.g., (_req, res) => {})
//   - Double underscore / Dunder (__var__): Reserved for JS engine internals & environment metadata (e.g., __dirname, __filename, __proto__)
let _internalCounter = 0;
let __protoValue__ = "dunder (double underscore) case";

// 11. StUdLyCaPs (SpongeCase / Alternating Case)
// Format: Random or alternating uppercase and lowercase letters.
// Use Cases:
//   - Mocking/satire text, obfuscation, or testing case-insensitivity in QA automation tests (Not used for clean production variables).
let uSeRfIrStNaMe = "Nand";


// --- 2. NOT VALID AS JS IDENTIFIERS (Contain '-' or '/' or '.' or spaces) ---
// (Cannot be used for direct JS variable names, but widely used in Web & Automation!)

// 12. kebab-case (dash-case / lisp-case / spinal-case)
// Format: All lowercase separated by hyphens (-).
// Use Cases:
//   - CSS class names & properties (e.g., .btn-primary, background-color, font-size)
//   - HTML attributes & Playwright test IDs (e.g., data-testid="login-submit-btn", aria-label)
//   - URLs & slugs (e.g., https://example.com/user-profile-settings)
//   - CLI flags & npm package names (e.g., npx playwright test --headed, @playwright/test)
// let user-first-name = "Nand";   // SyntaxError: Unexpected token '-'

// 13. TRAIN-CASE (COBOL-CASE / SCREAMING-KEBAB-CASE)
// Format: All uppercase separated by hyphens (-).
// Use Cases:
//   - COBOL programming, legacy mainframes, or specific custom tokens/serial keys (e.g., PROD-SERVER-01)
// let USER-FIRST-NAME = "Nand";   // SyntaxError: Unexpected token '-'

// 14. Train-Case (HTTP-Header-Case)
// Format: First letter of each word capitalized, separated by hyphens (-).
// Use Cases:
//   - HTTP Request & Response Headers in API testing (e.g., "Content-Type", "User-Agent", "Cache-Control", "X-Api-Key")
// let User-First-Name = "Nand";   // SyntaxError: Unexpected token '-'

// 15. dot.case
// Format: Words separated by dots (.).
// Use Cases:
//   - File extensions & Playwright spec files (e.g., login.spec.js, playwright.config.ts)
//   - Configuration properties / Java packages / App bundle IDs (e.g., com.company.app)
// let user.first.name = "Nand";   // SyntaxError: Unexpected token '.'

// 16. path/case
// Format: Words separated by forward slashes (/).
// Use Cases:
//   - File system directory paths, API endpoints/routes, and Git branch names (e.g., feature/login-page, tests/e2e/auth)
// let user/first/name = "Nand";   // SyntaxError: Unexpected token '/'

// 17. Title Case / Sentence case
// Format: Words separated by spaces.
// Use Cases:
//   - Playwright test descriptions & suite names: test("Verify user can login successfully", ...)
//   - UI text assertions and human-readable report labels
// let User First Name = "Nand";   // SyntaxError: Unexpected identifier