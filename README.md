Simple base45 (charset of Qr codes, alphanumeric mode) encoder/decoder.

Run as 'npm test' to get an idea of what it does. Accepts both utf8 and binary data (that is not valid UTF8).

typical use:

```
const b45 = require("base45-js");

const e = b45.encode(Buffer.from('Hello!','utf-8'))
console.log(e); // Will output %69 VD92EX0"

const d = b45.decode('%69 VD92EX0').toString()
console.log(d); // will output 'Hello!'
```
