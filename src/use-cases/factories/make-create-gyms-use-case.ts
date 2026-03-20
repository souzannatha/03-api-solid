import { PrismaGymRepository } from "@/repositories/prisma/prisma-gyms-repository"
import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms"
import { CreateGymUseCase } from "../create-gym"

export function makeCreateGymsUseCase() {
  const gymsRepository = new PrismaGymRepository()
  const useCase = new CreateGymUseCase(gymsRepository)

  return useCase
}
