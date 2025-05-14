import { createId } from '@paralleldrive/cuid2'
import { pgTable, real, text, timestamp } from 'drizzle-orm/pg-core'

export const expenses = pgTable('expenses', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  description: text('description').notNull(),
  type: text('type').notNull(),
  category: text('category').notNull(),
  price: real('price').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
