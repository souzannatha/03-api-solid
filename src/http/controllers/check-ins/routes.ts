import { app } from "@/app";
import { create } from "./create";
import { validate } from "./validate";
import { history } from "./history";
import { metrics } from "./metrics";
import { verifyJWT } from '@/http/middlewares/verify-jwt';
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export async function checkInsRoutes() {

  app.get('/check-ins/history', { onRequest: [verifyJWT] }, history)
  app.get('/check-ins/metrics', { onRequest: [verifyJWT] }, metrics)


  app.post(
    '/gyms/:gymId/check-ins',
    { onRequest: [verifyJWT] },
    create,
  )

  app.patch('/check-ins/:checkInId/validate', { onRequest: [verifyJWT, verifyUserRole('ADMIN')] }, validate)
}
