import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  border-bottom: 1px solid #dfdfdf;

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: inherit;
  // margin: 5px 0;
`;
export const Relation = styled.span`
  color: #44484d;
`;
export const Name = styled.span`
  font-size: 16px;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  jusitfy-content: flex-start;
  gap: 8px;
`;
export const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  background-color: #ffffff;
`;

export const AccountLinks = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
`;

export const AccountButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin: 5px 0;
  padding: 0 12px;
  width: inherit;
  font-size: 12px;
  cursor: pointer;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
  background: white;
`;

export const KakaopayImg = styled.img`
  width: 50px;
`;

export const TossImg = styled.img`
  width: 70px;
`;
