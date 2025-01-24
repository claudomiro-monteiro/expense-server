import { db } from '../db'
import { expenses } from '../db/schema'

export interface CreateExpenseRequest {
  description: string
  price: number
  type: string
  category: string
}

export async function createExpense({
  description,
  price,
  type,
  category,
}: CreateExpenseRequest) {
  const result = await db
    .insert(expenses)
    .values({ description, price, type, category })
    .returning()

  const expense = result[0]

  return {
    expense,
  }
}
