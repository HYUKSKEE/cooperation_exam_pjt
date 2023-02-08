import { Dispatch, SetStateAction } from 'react';
import request from './core/axiosInstance';

type examListData = {
  id: Number;
  title: string;
  question: string;
  imageUrl: string;
  answer: string[];
  isChecked: number;
};

export const getExam = (
  examType: string | undefined,
  qNum: string | undefined,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setExamList: Dispatch<React.SetStateAction<examListData | undefined>>,
  setCheckedNum: Dispatch<SetStateAction<number | undefined>>,
) => {
  return request({ url: `/${examType}/${qNum}` })
    .then((res: examListData) => {
      setExamList(res);
      setCheckedNum(res.isChecked);
    })
    .then(() => setIsLoading(false));
};

export const modifyDefaultAnswer = (
  examType: string,
  qNum: number,
  checkNum: number,
) => {
  request({
    method: 'patch',
    url: `/${examType}/${qNum}`,
    data: {
      isChecked: checkNum,
    },
  });
};

//export default { getExam, modifyDefaultAnswer };
