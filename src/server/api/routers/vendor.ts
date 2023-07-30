import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const vendorRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.vendor.findMany();
  }),
});
