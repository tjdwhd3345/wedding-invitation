import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  overflow: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const From = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  color: #363636;
`;

export const Date = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 150%;
  color: #868686;
`;

export const Message = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 150%;
  color: #363636;
  word-wrap: break-word;
  text-align: left;
`;
