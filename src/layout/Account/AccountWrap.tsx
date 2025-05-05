import Copy from "@/assets/icons/copy.svg?react";
import kakaopay from "@/assets/icons/kakaopay.png?url";
import toss from "@/assets/icons/toss.png?url";
import * as Styled from "./styled.ts";

interface IAccountProps {
  account: {
    name: string;
    relation: string;
    bank: string;
    account: string;
    kakaopayAccount?: string;
    tossAccount?: string;
  };
}
const AccountWrap = (props: IAccountProps) => {
  const { name, relation, bank, account, kakaopayAccount, tossAccount } = props.account;
  const handleCopy = () => {
    if (navigator.clipboard) {
      const text = account.replace(/-/g, "");
      navigator.clipboard.writeText(text).then(
        () => alert("계좌번호가 복사되었습니다.😉😉"),
        () => alert("계좌번호 복사에 실패했습니다.🥲🥲"),
      );
    } else {
      alert("계좌번호 복사에 실패했습니다.🥲🥲");
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Info>
        <Styled.Relation>{relation}</Styled.Relation>
        <Styled.Name>{name}</Styled.Name>
      </Styled.Info>
      <Styled.Details>
        <Styled.AccountInfo>
          <span>{bank}</span>
          <span>{account}</span>
        </Styled.AccountInfo>
        <Styled.CopyButton onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </Styled.CopyButton>
      </Styled.Details>
      <Styled.AccountLinks>
        {kakaopayAccount && (
          <Styled.AccountButton href={kakaopayAccount} target="_blank" rel="noreferrer">
            <Styled.KakaopayImg src={kakaopay} alt="kakaopay" />
          </Styled.AccountButton>
        )}
        {tossAccount && (
          <Styled.AccountButton href={tossAccount} target="_blank" rel="noreferrer">
            <Styled.TossImg src={toss} alt="toss" />
          </Styled.AccountButton>
        )}
      </Styled.AccountLinks>
    </Styled.Wrapper>
  );
};

export default AccountWrap;
