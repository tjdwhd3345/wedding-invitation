import styled from "styled-components";

export const Heading1 = styled.p`
  font-size: 24px;
  line-height: 150%;
  padding: 10px;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 16px;
  line-height: 150%;
  padding: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  line-height: 1;
  margin: 0;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "start")};
  white-space: pre-line;
`;
