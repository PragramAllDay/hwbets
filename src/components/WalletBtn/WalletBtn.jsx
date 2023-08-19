import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@chakra-ui/react";
export const WalletBtn = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    fontSize={"1rem"}
                    color={"white"}
                    p={"1rem"}
                    bg={"brand.100"}
                    href={"#"}
                    rounded={"5px"}
                    fontWeight={900}
                    _hover={{
                      bg: "brand.300",
                      color: "white",
                    }}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    fontSize={"1rem"}
                    color={"white"}
                    p={"1rem"}
                    bg={"brand.100"}
                    href={"#"}
                    rounded={"5px"}
                    fontWeight={900}
                    _hover={{
                      bg: "brand.300",
                      color: "white",
                    }}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  {/* <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button> */}
                  <Button
                    fontSize={"1rem"}
                    color={"white"}
                    p={"1rem"}
                    bg={"brand.100"}
                    href={"#"}
                    rounded={"5px"}
                    fontWeight={900}
                    _hover={{
                      bg: "brand.300",
                      color: "white",
                    }}
                    onClick={openAccountModal}
                    type="button"
                  >
                    {account.displayName}
                    {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""} */}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
