import request from 'supertest'

import { afterAll, beforeAll, describe, expect, it, test } from 'vitest'
import { app } from '@/app'

describe('Authenticate (e2e)', () => {
  beforeAll(async () => {

    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate', async () => {

  })
})
