import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/*', async (ctx): Promise<void> => {
  ctx.body = 'Hello World!'
})

app.use(router.routes())

app.listen(3000)
