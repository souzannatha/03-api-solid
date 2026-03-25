import { app } from "@/app";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { search } from "./search";
import { nearby } from "./nearby";
import { create } from "./create";

export async function gymsRoutes() {
  app.get('/gyms/search', search)
  app.get('/gyms/nearby', nearby)

  app.post('/gyms', create)

}
