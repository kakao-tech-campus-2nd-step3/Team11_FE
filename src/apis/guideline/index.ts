import { ProgressResponse } from '@apis/guideline/types';

import apiInstance from '@/apis';

export const setGuidelineType = async (
  isInsured: boolean,
  leaseType: string
) => {
  const response = await apiInstance.post('/api/v1/progress/type', {
    is_insured: isInsured,
    lease_type: leaseType,
  });

  return response.data;
};

export const getCurrentGuideLineProgress =
  async (): Promise<ProgressResponse> => {
    const response =
      await apiInstance.get<ProgressResponse>('/api/v1/progress');

    return response.data;
  };

export const checkASubProgress = async (mainStep: string, subStep: string) => {
  const response = await apiInstance.post(
    `/api/v1/progress/${mainStep}/${subStep}`
  );
  return response.data;
};

export const uncheckASubProgress = async (
  mainStep: string,
  subStep: string
) => {
  const response = await apiInstance.delete(
    `api/v1/progress/${mainStep}/${subStep}`
  );
  return response.data;
};
