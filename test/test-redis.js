async function test() {
  const Redis = require('ioredis')

  const redis = new Redis({
    port: 6378,
    // password:123456,

  })

  //await redis.set('a',1234)
  await redis.setex('b',10,3333)  //设置有效时长 
  const keys = await redis.keys('*')
  //console.log(keys)
  console.log(await redis.get('b'))
}

test()