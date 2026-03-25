import request from 'supertest'

import { afterAll, beforeAll, describe, expect, it, test } from 'vitest'
import { app } from '@/app'

describe('Profile (e2e)', () => {
  beforeAll(async () => {

    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get user profile', async () => {

  })
})
