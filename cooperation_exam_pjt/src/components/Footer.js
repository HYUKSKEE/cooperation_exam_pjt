import styled from 'styled-components';

function Footer() {
  return <Container>2023 designed by hyukskee</Container>;
}

export default Footer;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
  background-color: black;
  color: white;
`;
