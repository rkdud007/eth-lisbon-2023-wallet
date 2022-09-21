import React from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";

const Player = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 10 12" fill="currentColor" __css={styles} {...rest}>
      <path d="M5.00092 6.00064C6.47393 6.00064 7.66775 4.80661 7.66775 3.33381C7.66775 1.86102 6.47393 0.666992 5.00092 0.666992C3.52792 0.666992 2.3341 1.86102 2.3341 3.33381C2.3341 4.80661 3.52792 6.00064 5.00092 6.00064ZM5.00092 1.3337C6.10391 1.3337 7.00104 2.23083 7.00104 3.33381C7.00104 4.43659 6.10391 5.33393 5.00092 5.33393C3.89794 5.33393 3.00081 4.43596 3.00081 3.33381C3.00081 2.23083 3.89878 1.3337 5.00092 1.3337ZM6.05724 7.0007H3.94461C1.95095 7.0007 0.333984 8.61746 0.333984 10.6113C0.333984 11.0101 0.657337 11.3337 1.05611 11.3337H8.94615C9.34493 11.3343 9.66786 11.0113 9.66786 10.6113C9.66786 8.61746 8.0511 7.0007 6.05724 7.0007ZM8.9449 10.6676H1.05611C1.02569 10.6676 1.00069 10.6426 1.00069 10.6113C1.00069 8.98831 2.3216 7.6674 3.94461 7.6674H6.05515C7.68025 7.6674 9.00116 8.98831 9.00116 10.6113C9.00116 10.6426 8.97616 10.6676 8.9449 10.6676Z" />
    </Icon>
  );
};

export default Player;