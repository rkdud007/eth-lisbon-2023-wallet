import React from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";

const Logout = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 16 16" fill="currentColor" __css={styles} {...rest}>
      <path
        d="M6.52493 12.6161C6.52493 12.9231 6.27797 13.1701 5.97101 13.1701H4.30922C3.0855 13.1701 2.09351 12.1781 2.09351 10.9544V5.04579C2.09351 3.82207 3.0855 2.83008 4.30922 2.83008H5.97101C6.27797 2.83008 6.52493 3.07796 6.52493 3.38401C6.52493 3.68982 6.27797 3.93794 5.97101 3.93794H4.30922C3.6999 3.93794 3.20136 4.43647 3.20136 5.04579V10.9544C3.20136 11.5637 3.6999 12.0622 4.30922 12.0622H5.97101C6.27797 12.0622 6.52493 12.3092 6.52493 12.6161ZM13.7606 7.62156L10.8271 4.48263C10.6172 4.25903 10.2667 4.24906 10.0445 4.45884C9.82159 4.66799 9.81089 5.01853 10.0207 5.24149L12.0735 7.44615H6.31952C6.03332 7.44615 5.78636 7.69542 5.78636 8.00008C5.78636 8.30474 6.03448 8.55401 6.31952 8.55401H12.0527L9.97729 10.7596C9.7674 10.9824 9.77823 11.3329 10.0011 11.5422C10.1301 11.6422 10.2663 11.6929 10.3817 11.6929C10.5288 11.6929 10.6759 11.6345 10.7849 11.5184L13.7184 8.37947C13.9614 8.16626 13.9614 7.8339 13.7606 7.62156Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Logout;