import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getExpenses } from '../../functions/get-expenses'

export const getExpenseRoute: FastifyPluginAsyncZod = async app => {
  app.get('/', async () => {
    const { summary } = await getExpenses()

    return summary
  })
}
