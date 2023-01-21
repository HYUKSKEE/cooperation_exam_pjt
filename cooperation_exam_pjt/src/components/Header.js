import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <h1>협업 능력 평가 모의고사</h1>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid black;
`;
