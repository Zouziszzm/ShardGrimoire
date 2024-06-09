"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, etherlinkTestnet, polygon } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ConnectKitProvider,
  getDefaultConfig,
} from "connectkit";
import { ReactNode } from "react";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet, etherlinkTestnet, polygon],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(
        `https://lb.nodies.app/v1/5e9daed367d1454fab7c75f0ec8aceff`,
      ),
    },

    // Required API Keys
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,

    // Required App Info
    appName: "Your App Name",

    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="minimal">{children} </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
