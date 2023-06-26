import { Heading, SectionWrap } from 'components';

const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <Heading>{title}</Heading>
      {children}
    </SectionWrap>
  );
};

export default Section;
