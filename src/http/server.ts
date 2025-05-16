// import { getSearchExpenseRoute } from './routes/get-search-expenses'
import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { createExpenseRoute } from './routes/create-expense'
import { getExpenseRoute } from './routes/get-expenses'
import { getSearchDateExpenseRoute } from './routes/get-search-date-expenses'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createExpenseRoute)
app.register(getExpenseRoute)
app.register(getSearchDateExpenseRoute)

app
  .listen({
    port: 3333,
    host: 'RENDER' in process.env ? `0.0.0.0` : `localhost`,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
