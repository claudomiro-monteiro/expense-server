import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { createExpense } from '../../functions/create-expense'

export const createExpenseRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/expense',
    {
      schema: {
        body: z.object({
          description: z.string(),
          price: z.number().multipleOf(0.01),
          type: z.string(),
          category: z.string(),
        }),
      },
    },
    async request => {
      const { description, price, type, category } = request.body

      const { expense } = await createExpense({
        description,
        price,
        type,
        category,
      })

      return expense
    }
  )
}
