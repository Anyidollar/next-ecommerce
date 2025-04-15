import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from '@wix/stores';
import { cookies } from "next/headers";


export const wixClientServer = async () =>{


let refreshToken:any
try {
const cookieStore = cookies();
const refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
    
} catch (error) {
    
}

 const wixClient = createClient({
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
return wixClient
}