import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 10px;
  margin-left: 20px;
  max-width: 320px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 8px;
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  color: var(--title-text-color);
  padding: 10px 0;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
`;
export const StatListItem = styled.li`
  padding: 8px 15px;
  color: var(--primary-bg-color);
  width: calc(100% / 5);
`;
export const StatListElementLabel = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
`;
export const StatListElementValue = styled.span`
  display: block;
`;
