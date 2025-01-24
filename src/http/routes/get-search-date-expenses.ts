import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getSearchDateExpenses } from '../../functions/get-search-date-expenses'

export const getSearchDateExpenseRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/searchdate',
    {
      schema: {
        querystring: z.object({
          searchText: z.string(),
          dateInitial: z.string(),
          dateFinal: z.string(),
        }),
      },
    },
    async request => {
      const { searchText, dateInitial, dateFinal } = request.query
      // console.log(dateInitial, dateFinal)
      const { searchdate } = await getSearchDateExpenses({
        searchText,
        dateInitial,
        dateFinal,
      })

      return searchdate
    }
  )
}
