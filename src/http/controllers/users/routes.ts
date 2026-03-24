import { app } from '@/app'
import { register } from './register'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function usersRoutes() {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /**Authenticated Routes */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
