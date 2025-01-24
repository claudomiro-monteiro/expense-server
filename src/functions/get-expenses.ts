import dayjs from 'dayjs'
import { db } from '../db'
import { expenses } from '../db/schema'
import { and, gte, lte, desc } from 'drizzle-orm'

export const getExpenses = async () => {
  const firstDayMonth = dayjs().startOf('month').toDate()
  const lastDayMonth = dayjs().endOf('month').toDate()

  const result = await db
    .select()
    .from(expenses)
    .where(
      and(
        gte(expenses.createdAt, firstDayMonth),
        lte(expenses.createdAt, lastDayMonth)
      )
    )
    .orderBy(desc(expenses.createdAt))

  return { summary: result }
}
