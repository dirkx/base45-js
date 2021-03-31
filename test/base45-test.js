const {equal, ok} = require('assert');
const {b45encode, b45decode } = require('../lib/base45.js');

function check(i,t) {
  const buf = Buffer.from(i, 'utf-8')
  const e = b45encode(buf)
  const d = b45decode(t)

  if (buf.compare(d)) throw new Error('Encode did not yield expected result:' + buf +" != " + d)
  if (t != e.toString('utf-8')) throw new Error('Encode did not yield expected result:' + t +" != " + e)
  if (i != d.toString('utf-8')) throw new Error('Encode did not yield expected result:' + t +" != " + d)

  console.log("base45('"+i+"')='"+t+"'")
  return true;

}

describe('RFC examples', () => {
  it('example 1 - Hello!!', () => ok(check("Hello!!","%69 VD92EX0")));
  it('example 2 - base-45', () => ok(check("base-45","UJCLQE7W581")));
  it('example 3 - ietf!', () => ok(check("ietf!","QED8WEX0")));
});


