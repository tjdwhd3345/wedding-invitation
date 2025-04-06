import styled from "styled-components";
import data from "data.json";
import AccountWrap from "./AccountWrap.tsx";
import Accordion from "@/components/Accordion.tsx";

const Account = () => {
  const { hostInfo } = data;
  return (
    <HostInfoWrapper>
      {hostInfo.map((host, i) => (
        <Accordion title={host.host} key={i}>
          {host.accountInfo.map((account, j) => (
            <AccountWrap key={j} account={account} />
          ))}
        </Accordion>
      ))}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 90%;
  width: 100%;
  // padding: 20px;
`;
