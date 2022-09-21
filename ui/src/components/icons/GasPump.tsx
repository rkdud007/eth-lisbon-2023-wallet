import React from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";

const GasPump = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 14 14" __css={styles} {...rest}>
      <path d="M1.16671 1.99992C1.16671 1.07935 1.9128 0.333252 2.83337 0.333252H7.00004C7.91931 0.333252 8.66671 1.07935 8.66671 1.99992V6.99992H8.87504C10.1407 6.99992 11.1667 8.02596 11.1667 9.29159V10.1249C11.1667 10.4713 11.4454 10.7499 11.7917 10.7499C12.1381 10.7499 12.4167 10.4713 12.4167 10.1249V6.09106C11.698 5.92961 11.1667 5.27596 11.1667 4.49992V2.83325L10.3334 1.99992C10.1042 1.76971 10.1042 1.39679 10.3334 1.16659C10.5625 0.936377 10.9375 0.936377 11.1667 1.16659L13.1797 3.17961C13.4922 3.49211 13.6667 3.91398 13.6667 4.35669V10.1249C13.6667 11.1614 12.8282 11.9999 11.7917 11.9999C10.7552 11.9999 9.91671 11.1614 9.91671 10.1249V9.29159C9.91671 8.71606 9.45056 8.22648 8.87504 8.22648H8.66671V11.9999C9.12765 11.9999 9.50004 12.3723 9.50004 12.8333C9.50004 13.2942 9.12765 13.6666 8.66671 13.6666H1.16671C0.706551 13.6666 0.333374 13.2942 0.333374 12.8333C0.333374 12.3723 0.706551 11.9999 1.16671 11.9999V1.99992ZM2.83337 4.91659C2.83337 5.14575 3.02087 5.33325 3.25004 5.33325H6.58337C6.81254 5.33325 7.00004 5.14575 7.00004 4.91659V2.41659C7.00004 2.18638 6.81254 1.99992 6.58337 1.99992H3.25004C3.02087 1.99992 2.83337 2.18638 2.83337 2.41659V4.91659Z" />
    </Icon>
  );
};

export default GasPump;