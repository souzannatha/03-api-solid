import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { makeValideteCheckInUseCase } from '@/use-cases/factories/make-validate-check-in-use-case'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const createCheckInParamsSchema = z.object({
    checkInId: z.coerce.string()
  })

  const { checkInId } = createCheckInParamsSchema.parse(request.params)

  const validatCheckInUseCase = makeValideteCheckInUseCase()

  await validatCheckInUseCase.execute({
    checkInId,
  })

  return reply.status(204).send()
}
