import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Flex, Container } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import Controller from "utils/controller";
import { useUrlTxns } from "hooks/transaction";
import TimerIcon from "@cartridge/ui/src/components/icons/Timer";

import { Header } from "components/Header";
import { Banner } from "components/Banner";
import Footer from "components/Footer";
import { Transaction, TransactionState } from "components/Transaction";

const Inheritance: NextPage = () => {
  const [txnResults, setTxnResults] = useState<TransactionState[]>([]);
  const [title, setTitle] = useState("Pending...");
  const [description, setDescription] = useState("This may take a second");

  const controller = useMemo(() => Controller.fromStore(), []);
  const { chainId, txns } = useUrlTxns();

  useEffect(() => {
    if (txnResults.length > 0 && txnResults.length === txns.length) {
      const errors = txnResults.filter((state) => state === "error");
      if (errors.length > 0) {
        setTitle("Error");
        setDescription("Something went wrong");
        return;
      }

      setTitle("Success!");
      setDescription("Your transaction was successful");
    }

    //pending
  }, [txnResults, txns]);

  return (
    <>
      <Header address={controller.address} />
      <Container w={["full", "full", "400px"]} centerContent>
        <Flex w="full" m={4} flexDirection="column" gap="18px">
          <Banner
            title={title}
            description={description}
            icon={<TimerIcon boxSize="30px" />}
          />
        </Flex>
        {txns.map((txn, idx) => (
          <Transaction
            key={idx}
            name={txn.name}
            chainId={chainId}
            hash={txn.hash}
            finalized={(state: TransactionState) => {
              setTxnResults([...txnResults, state]);
            }}
          />
        ))}
        <Footer showConfirm={false} cancelText="Close" onCancel={() => {}} />
      </Container>
    </>
  );
};

export default dynamic(() => Promise.resolve(Inheritance), { ssr: false });
