import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should to be able to fetch nearby gyms', async () => {

    await gymsRepository.create({
      title: 'Ner Gym',
      description: '',
      phone: '',
      latitude: -23.1735296,
      longitude: -50.6720835
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: '',
      phone: '',
      latitude: -23.0174311,
      longitude: -50.4076663
    })

    const { gyms } = await sut.execute({
      userLatitude: -23.1735296,
      userLongitude: -50.6720835
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Ner Gym' }),
    ])
  })
})
