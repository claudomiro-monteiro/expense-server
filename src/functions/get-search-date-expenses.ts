import dayjs from 'dayjs'
import { and, between, desc, gte, ilike, lte, or } from 'drizzle-orm'
import { db } from '../db'
import { expenses } from '../db/schema'

interface getSearchDateExpenseProps {
  searchText?: string
  dateInitial?: string
  dateFinal?: string
}

export const getSearchDateExpenses = async ({
  searchText,
  dateInitial,
  dateFinal,
}: getSearchDateExpenseProps) => {
  const dayInitial = dayjs(dateInitial).toDate()
  const dayFinal = dayjs(dateFinal).toDate()

  const result = await db
    .select()
    .from(expenses)
    .where(
      and(
        ilike(expenses.description, `%${searchText}%`),
        and(
          gte(expenses.createdAt, dayInitial),
          lte(expenses.createdAt, dayFinal)
        )
      )
    )
    .orderBy(desc(expenses.createdAt))

  return { searchdate: result }
}
