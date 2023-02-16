import { Dispatch, SetStateAction } from 'react';
import BASE_URL from '../env';
import request from './core/axiosInstance';

type examListData = {
  id: number;
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
  console.log('BASE_URL :', BASE_URL);
  return request({ url: `/${examType}/${qNum}` })
    .then((res: examListData) => {
      setExamList(res);
      setCheckedNum(res.isChecked);
    })
    .then(() => setIsLoading(false));
};

export const modifyDefaultAnswer = (
  examType: string | undefined,
  qNum: string | undefined,
  checkNum: number | undefined,
) => {
  request({
    method: 'PATCH',
    url: `/${examType}/${qNum}`,
    data: {
      isChecked: checkNum,
    },
  });
};

export const postUserData = (
  id: number | undefined,
  userName: string | undefined,
  examType: string | undefined,
  checkNum: any,
) => {
  request({
    method: 'POST',
    url: `/userData`,
    data: {
      id: +1,
      name: userName,
      examType: examType,
      score: checkNum,
    },
  });
};
