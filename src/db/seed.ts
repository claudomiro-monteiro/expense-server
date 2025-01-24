import { client, db } from '.'
import { expenses } from './schema'

async function seed() {
  await db.delete(expenses)

  await db.insert(expenses).values([
    {
      description: 'Desenvolvimento de site',
      category: 'Venda',
      type: 'income',
      price: 2000,
    },
    {
      description: 'Hamburguer',
      category: 'Alimentação',
      type: 'outcome',
      price: 20,
    },
    {
      description: 'Salario',
      category: 'Trabalho',
      type: 'income',
      price: 200,
    },
  ])
}

seed().finally(() => {
  client.end()
})
