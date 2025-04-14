import { createClient } from "@wix/sdk";
import { products, collections } from '@wix/stores';
import { cookies } from "next/headers";


const refreshToken = JSON.parse(Cookie.get("refreshToken") || "{}");

export const wixClientServer = createClient({
  modules: {
    products,
    collections,
    // currentCart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});