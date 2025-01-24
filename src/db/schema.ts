import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'

export const expenses = pgTable('expenses', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  description: text('description').notNull(),
  type: text('type').notNull(),
  category: text('category').notNull(),
  price: integer('price').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
