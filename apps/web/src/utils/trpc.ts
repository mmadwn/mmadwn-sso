import { createTRPCContext } from "@trpc/tanstack-react-query";
import type { AppRouter } from "@mmadwn-sso/api/routers/index";

export const { TRPCProvider, useTRPC, useTRPCClient } =
	createTRPCContext<AppRouter>();
