import { PrismaGymRepository } from "@/repositories/prisma/prisma-gyms-repository"
import { SearchGymUseCase } from "../search-gym"

export function makeSearchGymsUseCase() {
  const checkInsRepository = new PrismaGymRepository()
  const useCase = new SearchGymUseCase(checkInsRepository)

  return useCase
}
