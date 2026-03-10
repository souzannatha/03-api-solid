import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()
const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Nathã Souza Lopos',
    email: 'souzanatha04@gmail.com',
  },
})
