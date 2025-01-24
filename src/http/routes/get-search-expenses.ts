import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getSearchExpenses } from '../../functions/get-search-expenses'
import z from 'zod'

export const getSearchExpenseRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/search',
    {
      schema: {
        querystring: z.object({
          searchText: z.string(),
        }),
      },
    },
    async request => {
      const { searchText } = request.query
      // console.log(searchText)
      const { search } = await getSearchExpenses(searchText)

      return search
    }
  )
}
