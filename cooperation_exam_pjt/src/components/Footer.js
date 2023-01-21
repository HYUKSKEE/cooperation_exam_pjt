import styled from 'styled-components';

function Footer() {
  return (
    <Container>ⓒ2023 designed by hyukskee | all rights reserved</Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 150px;
  text-align: center;
  line-height: 150px;
  background-color: #717171;
  color: #ebe9e9;
`;
