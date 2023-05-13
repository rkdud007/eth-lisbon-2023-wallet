import ControllerConnector from "@cartridge/connector";
import { useAccount, useConnectors } from "@starknet-react/core";
import { useCallback } from "react";

export function Inheritance() {
  const { available } = useConnectors();

  const controllerConnector = available[0] as ControllerConnector;

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => controllerConnector.inheritance()}>
          Start Inheritance
        </button>
      </div>
    </>
  );
}
