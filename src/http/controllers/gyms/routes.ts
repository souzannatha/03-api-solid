import { app } from "@/app";
import { search } from "./search";
import { nearby } from "./nearby";
import { create } from "./create";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";
import { verifyJWT } from "@/http/middlewares/verify-jwt";

export async function gymsRoutes() {
  app.get('/gyms/search', search)
  app.get('/gyms/nearby', nearby)

  app.post('/gyms', { onRequest: [verifyJWT, verifyUserRole('ADMIN'),] }, create)

}
