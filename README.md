# Back-end

Projeto **Back-end** desenvolvido com **Fastify**, **TypeScript**, **Drizzle ORM** e **PostgreSQL**, focado em uma estrutura moderna, segura e escalável para aplicações web.

---

## 🚀 Tecnologias

* **Fastify 5** — servidor rápido e eficiente
* **TypeScript** — tipagem estática para maior segurança
* **Drizzle ORM** — migrations e queries tipadas
* **PostgreSQL** — banco de dados principal
* **Zod** — validação de schemas
* **CUID2** — geração de IDs únicos
* **Dayjs** — manipulação de datas

---

## 📦 Scripts

| Comando      | Descrição                                 |
| ------------ | ----------------------------------------- |
| `pnpm dev`   | Inicia o servidor em modo desenvolvimento |
| `pnpm seed`  | Executa o seed do banco de dados          |
| `pnpm build` | Gera a build de produção                  |
| `pnpm start` | Inicia o servidor compilado               |

---

## 📁 Estrutura sugerida

```
src/
  http/
    server.ts
    routes/
  db/
    schema/
    seed.ts
  utils/
```

---

## ✨ Sobre o Projeto

Este back-end foi criado com foco em:

* Arquitetura simples, modular e escalável;
* Validações seguras utilizando Zod;
* Mapeamento de dados e migrations com Drizzle ORM;
* Inicialização rápida e eficiente com Fastify;
* Script de seed para popular dados iniciais no banco.

---

## 🔧 Pré-requisitos

* **Node.js 18+**
* **PNPM** instalado globalmente
* Banco **PostgreSQL** disponível
* Criar arquivo `.env` baseado em `.env.example` (se houver)

---

## ▶️ Como rodar o projeto

```bash
pnpm install
pnpm dev
```

Para rodar o seed:

```bash
pnpm seed
```

---

## 📄 Licença

Projeto distribuído sob a licença **ISC**.

---

Feito com 💙 utilizando Node.js.
