import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import Axios from "axios";
import { z } from "zod";

// Definitions
import type { Rocket } from "./types";

export const rocketsRouter = createTRPCRouter({
  getRockets: publicProcedure.query(async () => {
    try {
      // Get the data from the API
      const { data }: { data: Rocket[] } = await Axios(
        `https://api.spacexdata.com/v4/rockets`,
      );

      // Return it.
      return data;
    } catch (err) {
      console.log("Error on getRockets", err);
      // In a real life environment of course you would return a proper 500, and the homepage should display that.
      return [];
    }
  }),
  getRocketInformation: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        // Get the data from the API
        const { data }: { data: Rocket } = await Axios(
          `https://api.spacexdata.com/v4/rockets/${input.id}`,
        );

        // Return it.
        return data;
      } catch (err) {
        console.log("Error on getRocketInformation", err);
        return null;
      }
    }),
});
