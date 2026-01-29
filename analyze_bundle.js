const fs = require('fs');
try {
    const t = fs.readFileSync('temp_bundle.js', 'utf8');
    // Regex for strings starting with /api, /auth, /login, /payroll
    // Matches '...' or "..." or `...`
    const regex = /["'`](\/(?:api|auth|login|payroll)[^"'`]*)/g;
    const matches = [];
    let match;
    while ((match = regex.exec(t)) !== null) {
        matches.push(match[1]);
    }
    const unique = [...new Set(matches)];
    console.log(unique.join('\n'));
} catch (e) {
    console.error(e);
}
