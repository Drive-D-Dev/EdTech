import { Axios } from "@/lib/axiosConfig";
import { BaseResponse } from "@/model/baseResponse";
import { QuestionResponse } from "@/model/questionResponse";
import useSWR from "swr";

const fetcher = async (setId: number) => {
  const response = await Axios.get<BaseResponse<QuestionResponse[]>>(
    `/question/fromSet/${setId}`
  );
  return response.data;
};
const GetQuestionAPI = (setId: number) =>
  useSWR([setId], ([setId]) => fetcher(setId));

export { GetQuestionAPI };
