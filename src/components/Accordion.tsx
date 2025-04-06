import { ReactNode, useState } from "react";
import styled from "styled-components";
import ExpandMore from "@/assets/icons/expand_more.svg?react";

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader $isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <ExpandMore fill="#e88ca6" />
        </span>
      </AccordionHeader>

      <AccordionContent $isOpen={isOpen}>{children}</AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  // font-family: HSSanTokki20-Regular, serif;
  border: 1px solid #e6ece1;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6ece1;
  padding: 8px 16px;
  cursor: pointer;

  & > p {
    color: #44484d;
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.$isActive ? "rotate(180deg)" : undefined)};
  }
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  font-size: 14px;
  text-align: justify;

  background-color: #ffffff;
  max-height: ${(props) => (props.$isOpen ? "500px" : "0px")};
  transition: max-height 0.8s ease;
`;
