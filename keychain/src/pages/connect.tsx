import type { NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";

import Approval from "components/Approval";
import { Header } from "@cartridge/ui/lib/components/Header";
import { useRequests } from "hooks/account";
import { useUrlScopes } from "hooks/scope";
import Controller from "utils/account";

const DEFAULT_MAX_FEE = "1000000000000000"; // 0.001 ETH

const Connect: NextPage = () => {
  const [maxFee, setMaxFee] = useState(DEFAULT_MAX_FEE);
  const { validScopes, invalidScopes, isValidating } = useUrlScopes();
  const { url } = useRequests();
  const controller = useMemo(() => Controller.fromStore(), []);
  const router = useRouter();

  useEffect(() => {
    if (!controller) {
      router.replace("/welcome");
      return
    }
  }, [router, controller])

  const approve = useCallback(
    async (values, actions) => {
      try {
        const approvals = validScopes.filter((_, i) => values[i]);
        await controller.approve(url.href, approvals, maxFee);
        if (window.opener) {
          window.close();
        }
      } catch (e) {
        console.error(e);
      }
      actions.setSubmitting(false);
    },
    [url, validScopes, controller, maxFee],
  );

  if (!controller) {
    return <></>
  }

  return (
    <>
      <Header
        address={controller.address}
      />
      <Flex m={4} flex={1} flexDirection="column">
        <Approval
          action="APPROVE"
          title="APPROVE GAME"
          message={
            <>
              <strong>{url.href}</strong>
              {validScopes.length > 0
                ? " is requesting permission to submit transactions on your behalf"
                : " is requesting access to your account"}
            </>
          }
          onCancel={() => {
            if (window.opener) {
              window.close();
            }
          }}
          onSubmit={approve}
          scopes={validScopes}
          invalidScopes={invalidScopes}
          isLoading={isValidating}
          maxFee={maxFee}
          setMaxFee={setMaxFee}
        />
      </Flex>
    </>
  );
};

export default Connect;