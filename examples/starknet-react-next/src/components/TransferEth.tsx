import { useAccount } from "@starknet-react/core";
import { useCallback, useState } from "react";
import { constants } from "starknet";

const ETH_CONTRACT =
  "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";

export const TransferEth = () => {
  const [chainId, setChainId] = useState<constants.StarknetChainId>(constants.StarknetChainId.TESTNET);
  const { account } = useAccount();
  const [accepted, setAccepted] = useState<boolean>();

  const executePointOne = useCallback(async () => {
    setAccepted(false);
    const res = await account.execute(
      [
        {
          contractAddress: ETH_CONTRACT,
          entrypoint: "approve",
          calldata: [account?.address, "0x16345785D8A0000", "0x0"],
        },
        {
          contractAddress: ETH_CONTRACT,
          entrypoint: "transfer",
          calldata: [account?.address, "0x16345785D8A0000", "0x0"],
        },
      ],
      undefined,
      {
        chainId,
      } as any
    );

    account.waitForTransaction(res.transaction_hash)
      .then(() => setAccepted(true))
      .catch((err) => console.error(err))
      .finally(() => console.log("done"));
  }, [account, chainId]);
  const executeOne = useCallback(async () => {
    setAccepted(false);
    const res = await account.execute(
      [
        {
          contractAddress: ETH_CONTRACT,
          entrypoint: "approve",
          calldata: [account?.address, "0xde0b6b3a7640000", "0x0"],
        },
        {
          contractAddress: ETH_CONTRACT,
          entrypoint: "transfer",
          calldata: [account?.address, "0xde0b6b3a7640000", "0x0"],
        },
      ],
      undefined,
      {
        chainId,
      } as any
    );

    account.waitForTransaction(res.transaction_hash)
      .then(() => setAccepted(true))
      .catch((err) => console.error(err))
      .finally(() => console.log("done"));
  }, [account, chainId]);
  const execute005 = useCallback(async () => {
    setAccepted(false);
    const res = await account.execute(
      [
        {
          contractAddress: ETH_CONTRACT,
          entrypoint: "approve",
          calldata: [account?.address, "0x11C37937E08000", "0x0"],
        },
        {
          contractAddress: ETH_CONTRACT,
          entrypoint: "transfer",
          calldata: [account?.address, "0x11C37937E08000", "0x0"],
        },
      ],
      undefined,
      {
        chainId,
      } as any
    );
    account.waitForTransaction(res.transaction_hash)
      .then(() => setAccepted(true))
      .catch((err) => console.error(err))
      .finally(() => console.log("done"));
  }, [account, chainId]);

  if (!account) {
    return null;
  }

  return (
    <>
      <h2>Transfer Eth</h2>
      <p>Address: {ETH_CONTRACT}</p>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="radio"
          id="testnet"
          name="network"
          value={constants.StarknetChainId.TESTNET}
          onChange={(evt) => setChainId(evt.target.value as constants.StarknetChainId)}
          defaultChecked
        />
        <label htmlFor="testnet">Testnet</label>
        <input
          type="radio"
          id="mainnet"
          name="network"
          value={constants.StarknetChainId.MAINNET}
          onChange={(evt) => setChainId(evt.target.value as constants.StarknetChainId)}
        />
        <label htmlFor="mainnet">Mainnet</label>
      </div>
      <button onClick={() => execute005()}>Transfer 0.005 ETH to self</button>
      <button style={{ marginLeft: "10px" }} onClick={() => executePointOne()}>Transfer 0.1 ETH to self</button>
      <button style={{ marginLeft: "10px" }} onClick={() => executeOne()}>Transfer 1.0 ETH to self</button>
      <p>Accepted: {accepted && accepted.toString()}</p>
    </>
  );
};
