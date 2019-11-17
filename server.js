const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV!== 'production'
const app = next({ dev })
const handle= app.getRequestHandler()

app.prepare().then(() => {
    const server= new Koa()
    const router=new Router()

    // router.get('/test',(ctx)=>{ //特殊路径处理
    //     ctx.body={ success:true } //返回json
    //     ctx.set('Content-Type','application/json')
    // })

    //server.use(async (ctx,next)=>{ 
       //const path=ctx.path
       //const method=ctx.method
       //ctx.body=`<span>Koa Render ${method} ${path}</span>`
       //await next()  //处理下一个中间件
    //})

    //server.use(router.routes())

    server.use(async (ctx,next)=>{
        await handle(ctx.req,ctx.res)
        ctx.respond = false 
    })


    server.listen(3000,() => {
        console.log('koa server litening on 3000')
    })
})