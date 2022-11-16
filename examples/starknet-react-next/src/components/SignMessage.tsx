import { useSignTypedData } from "@starknet-react/core";
import { TypedData } from "starknet/utils/typedData";

export function SignMessage() {
  const message: TypedData = {
    types: {
      StarkNetDomain: [
        { name: 'name', type: 'felt' },
        { name: 'version', type: 'felt' },
        { name: 'chainId', type: 'felt' },
      ],
      Person: [
        { name: 'name', type: 'felt' },
        { name: 'wallet', type: 'felt' },
      ],
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'felt' },
      ],
    },
    primaryType: 'Mail',
    domain: {
      name: 'StarkNet Mail',
      version: '1',
      chainId: 1,
    },
    message: {
      from: {
        name: 'Cow',
        wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
      },
      to: {
        name: 'Bob',
        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      },
      contents: 'Hello, Bob!',
    },
  };
  const { signTypedData, data } = useSignTypedData(message);

  return (
    <div css={{marginTop: "10px"}}>
      <button onClick={signTypedData}>Sign Message</button>
      {data && <p>Data: {data}</p>}
    </div>
  );
}
