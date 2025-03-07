import { Icon, useStyleConfig } from "@chakra-ui/react";

const MetaMask = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 18 18" __css={styles} {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.93793 8.08425L2.6737 8.27487L3.28236 8.98544L2.35663 11.8551L3.21914 14.7871L6.22092 13.9604L6.80316 14.437L7.9799 15.2579H10.0097L11.1987 14.436L11.7791 13.9604L14.7818 14.7861L15.6443 11.8579L14.712 8.98922L15.3263 8.27487L15.0621 8.08425L15.4848 7.69735L15.1574 7.4435L15.5811 7.11983L15.2999 6.90845L15.75 4.74935L15.0772 2.74219L10.7863 4.34735H7.21648L2.91717 2.74219L2.25 4.74841L2.70107 6.9075L2.4142 7.12077L2.8379 7.44256L2.51517 7.69735L2.93793 8.08425ZM7.35356 9.69205L8.31319 11.7015L5.0488 10.7419L7.35356 9.69205ZM10.6361 9.68686L9.67248 11.704L12.9391 10.7485L10.6361 9.68686Z"
        fill="white"
      />
    </Icon>
  );
};

export default MetaMask;
