import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, VStack, HStack, Flex, Text, Spacer } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Container from "./Container";
import { Header } from "./Header";
import Session from "components/Session";
import Controller from "utils/controller";
import PlugIcon from "@cartridge/ui/src/components/icons/Plug";
import InfoIcon from "@cartridge/ui/src/components/icons/Info";
import LaptopIcon from "@cartridge/ui/src/components/icons/Laptop";
import { Banner } from "components/Banner";
import { constants } from "starknet";
import { Error, Policy, ResponseCodes } from "@cartridge/controller";
import { motion } from "framer-motion";
import { Status } from "utils/account";
import logout from "methods/logout";
import {
  SismoConnectButton,
  AuthType,
  SismoConnectClientConfig,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-react";

const Inheritance = ({
  chainId,
  policys,
  origin,
  onConnect,
  onCancel,
  onLogout,
}: {
  chainId: constants.StarknetChainId;
  policys: Policy[];
  origin: string;
  onConnect: ({
    policies,
    maxFee,
  }: {
    policies: Policy[];
    maxFee: string;
  }) => void;
  onCancel: (error: Error) => void;
  onLogout: () => void;
}) => {
  const [maxFee, setMaxFee] = useState(null);

  const connect = useCallback(
    async (values, actions) => {
      try {
        const approvals = policys.filter((_, i) => values[i]);
        onConnect({ policies: approvals, maxFee });
      } catch (e) {
        console.error(e);
      }
      actions.setSubmitting(false);
    },
    [origin, onConnect, policys, maxFee],
  );

  return (
    <Container>
      <Header
        chainId={chainId}
        onClose={() =>
          onCancel({
            code: ResponseCodes.CANCELED,
            message: "Cancelled",
          })
        }
        onLogout={onLogout}
      />
      <Banner
        title="Check Eligibility of Inheritance"
        description={`${origin} is requesting to connect to your Cartridge Controller`}
        icon={<PlugIcon boxSize="30px" />}
        chainId={chainId}
        py="20px"
      />
      {false && (
        <VStack w="full" overflow="hidden" borderRadius="6px" spacing="1px">
          <VStack bgColor="gray.700" w="full" p="12px" align="flex-start">
            <SismoConnectButton
              //You will need to register an appId in the Factory
              appId={"0x8f347ca31790557391cec39b06f02dc2"}
              //Request proofs from your users for a groupId
              claim={{
                groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a",
              }}
              //OR
              claims={[
                {
                  groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a",
                },
              ]}
              auth={{
                authType: AuthType.VAULT,
              }}
              //OR
              auths={[
                {
                  authType: AuthType.VAULT,
                },
              ]}
              signature={{
                message: "Your message",
              }}
              //After user redirection get a response containing his proofs
              onResponse={async (response: SismoConnectResponse) => {
                //Send the response to your server to verify it
                //thanks to the @sismo-core/sismo-connect-server package
              }}
              onResponseBytes={async (bytes: string) => {
                //Send the response to your contract to verify it
                //thanks to the @sismo-core/sismo-connect-solidity package
              }}
            />
            <Text variant="ibm-upper-bold" fontSize="10px" color="gray.200">
              Register Session
            </Text>
            <Text fontSize="11px" color="gray.200">
              Authorize your controller to perform actions from this
              application.
            </Text>
          </VStack>
          <HStack bgColor="gray.600" py="7px" px="12px" w="full">
            <LaptopIcon boxSize="18px" />
            <Text fontSize="13px">Register Session</Text>
            <Spacer />
          </HStack>
        </VStack>
      )}
      <Session
        chainId={chainId}
        action={"CREATE"}
        onCancel={() => {
          onCancel({ code: ResponseCodes.CANCELED, message: "Canceled" });
        }}
        onSubmit={connect}
        policies={policys}
        invalidPolicys={[]}
        isLoading={false}
        maxFee={maxFee}
        setMaxFee={setMaxFee}
      />
    </Container>
  );
};

export default Inheritance;
