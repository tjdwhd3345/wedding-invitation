import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: #00000066;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  top: 0;
  z-index: 100;
  background-color: #e6ece1;
  padding: 56px 16px 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: clamp(240px, 90vw, 480px);
  position: relative;
  z-index: 100;
`;

export const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background-color: #e6ece1;
  background-color: #ffaac2;
  position: relative;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;

export const CloseIcon = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow: visible;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
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

export const DeleteIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #868686;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
`;

export const Message = styled.span`
  width: 100%;
  font-size: 14px;
  line-height: 150%;
  color: #363636;
  word-wrap: break-word;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 150%;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 100%;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 150%;
  border: 1px solid lightgray;
  border: none;
  border-radius: 8px;
  background-color: #e6ece1;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;
`;
