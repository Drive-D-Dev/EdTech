import { Axios } from "@/lib/axiosConfig";
import { BaseResponse } from "@/model/baseResponse";
import { QuestionResponse } from "@/model/questionResponse";
import { AxiosResponse } from "axios";

const getQuestionAPI = async (setId: number) => {
  const response = await Axios.get<BaseResponse<QuestionResponse>>(
    `/question/fromSet/${setId}`
  );
  return response.data;
};

export { getQuestionAPI };
