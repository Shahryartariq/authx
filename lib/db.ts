// lib/db.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client"; // path to your generated Prisma client

// Create PostgreSQL adapter
const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });

// Hot-reload safe Prisma client
declare global {
  var db: PrismaClient | undefined;
}

// Export as `db` for consistency
export const db = globalThis.db || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalThis.db = db;
