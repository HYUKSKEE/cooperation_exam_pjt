import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Select() {
  return (
    <Container>
      <SelectBtnBox>
        <SelectBtn>백</SelectBtn>
        <SelectBtn>프</SelectBtn>
      </SelectBtnBox>
      <Link to="/question/1">
        <NextBtn>NEXT</NextBtn>
      </Link>
    </Container>
  );
}

export default Select;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SelectBtnBox = styled.div`
  margin: 0px 0px 50px 0px;
`;

const SelectBtn = styled.button`
  width: 125px;
  height: 125px;
  margin: 0px 10px 0px 10px;
  font-size: 36px;
  color: white;
  background-color: orange;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const NextBtn = styled.button`
  width: 270px;
  height: 100px;
  font-size: 36px;
  color: white;
  background-color: #2b5ff1;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
