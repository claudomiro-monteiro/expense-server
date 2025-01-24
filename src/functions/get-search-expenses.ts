// import dayjs from 'dayjs'
import { db } from '../db'
import { expenses } from '../db/schema'
import { desc, ilike } from 'drizzle-orm'

export const getSearchExpenses = async (searchText: string) => {
  const result = await db
    .select()
    .from(expenses)
    .where(
      ilike(expenses.description, `%${searchText}%`)
      // and(gte(expenses.createdAt, firstDay), lte(expenses.createdAt, lastDay))
    )
    .orderBy(desc(expenses.createdAt))

  return { search: result }
}
