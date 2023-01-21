import styled from 'styled-components';

function Test() {
  return (
    <Container>
      <div>
        <Image src="images/hands.jpg" alt="" />
      </div>
      <div>
        <Image src="images/hands.jpg" alt="" />
      </div>
      <div>
        <Image src="images/hands.jpg" alt="" />
      </div>
      <div>
        <Image src="images/hands.jpg" alt="" />
      </div>
      <div>
        <Image src="images/hands.jpg" alt="" />
      </div>
      <div>
        <Image src="images/hands.jpg" alt="" />
      </div>
    </Container>
  );
}

export default Test;

const Container = styled.div`
  width: 100%;
  margin: 0px 0px 300px 0px;
  padding: 100px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 615px;
  height: 615px;
`;
