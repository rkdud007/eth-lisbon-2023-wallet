import { describe, expect, it } from '@jest/globals'
import { constants } from 'starknet';
import migrations from 'utils/migrations';
import selectors from 'utils/selectors';
import Storage from 'utils/storage';

describe('migrations', () => {
    it('migrates 0.0.2 to 0.0.3', () => {
        const address = "0xdead";
        const deployment = {
            classHash: "0x04be79b3904b4e2775fd706fa037610b41d8f8708ce298aac3a470badf68176d",
            deployed: true,
            nonce: "0x01",
            registered: true,
            syncing: true,
        }

        // Create 0.0.2 state.
        Storage.set("version", "0.0.2");
        Storage.set("controller", { address: "0xdead" });
        Storage.set("@admin/http://localhost:3000", {});
        Storage.set(selectors['0.0.2'].deployment(constants.StarknetChainId.MAINNET), deployment);
        Storage.set("@session/http://localhost:3002", { "policies": [], "maxFee": null });

        migrations["0.0.2"]["0.0.3"](address)

        expect(Storage.get("version")).toBe("0.0.3");

        expect(Storage.get(selectors['0.0.3'].account(address))).toStrictEqual({ address: "0xdead" });
        expect(Storage.get(selectors['0.0.2'].account())).toBe(null);

        expect(Storage.get(selectors['0.0.3'].admin(address, "http://localhost:3000"))).toStrictEqual({});
        expect(Storage.get(selectors['0.0.2'].admin("http://localhost:3000"))).toBe(null);

        expect(Storage.get(selectors['0.0.3'].deployment(address, constants.StarknetChainId.MAINNET))).toStrictEqual(deployment);
        expect(Storage.get(selectors['0.0.2'].deployment(constants.StarknetChainId.MAINNET))).toBe(null);

        expect(Storage.get(selectors['0.0.3'].session(address, "http://localhost:3002"))).toStrictEqual({ "policies": [], "maxFee": null });
        expect(Storage.get(selectors['0.0.2'].session("http://localhost:3002"))).toBe(null);
    });
});
