import { getCurrentGuideLineProgress } from '@apis/guideline';
import { ProgressResponse } from '@apis/guideline/types';

import BoomerangBoard from '@components/CommunityBoard/BoomerangBoard';
import ForumPostBoard from '@components/ForumPost/ForumPostBoard';

import React from 'react';
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';

import { ConsultingHistory } from '@/components/ConsultingManagement/ConsultingHistory';
import { ConsultingScheduling } from '@/components/ConsultingManagement/ConsultingScheduling';
import { ConsultingStart } from '@/components/ConsultingManagement/ConsultingStart';
import { SelectMentor } from '@/components/ConsultingManagement/SelectMentor';
import Community from '@/pages/Community';
import { Consulting } from '@/pages/Consulting';
import { ConsultingManagement } from '@/pages/ConsultingManagement';
import { DocumentForm } from '@/pages/DocumentForm';
import { FullProgressGuide } from '@/pages/FullProgressGuide';
import { Guideline } from '@/pages/Guideline';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { Survey } from '@/pages/Survey';
import { Welcome } from '@/pages/Welcome';
import { ROUTER_PATH } from '@/routerPath';
import { CommunityPosting } from '@/templates/Community/CommunityPosting';
import axios from 'axios';

const PrivateRoute = (): React.ReactElement => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to={ROUTER_PATH.ROOT} />;
};

const guidelineLoader = async () => {
  try {
    const response: ProgressResponse = await getCurrentGuideLineProgress();

    return response;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      const data = err.response.data;
      // TODO: CODE ENUM 등록 필요
      if (data.code === 'PG004') {
        throw new Response(
          JSON.stringify({ code: data.code, message: data.message }),
          {
            status: 400,
          }
        );
      }
      // TODO : 로그인 에러시?
      // TODO: 공통 에러 처리 페이지 필요
    }
  }
};

export const router = createBrowserRouter([
  { index: true, path: ROUTER_PATH.ROOT, element: <Home /> },
  { path: ROUTER_PATH.WELCOME, element: <Welcome /> },
  {
    path: ROUTER_PATH.GUIDELINE,
    loader: guidelineLoader,
    element: <Guideline />,
    errorElement: <Survey />,
  },
  {
    path: ROUTER_PATH.JOURNEY_PREVIEW,
    element: <FullProgressGuide />,
  },
  { path: ROUTER_PATH.CONSULTING, element: <Consulting /> },
  { path: ROUTER_PATH.SURVEY, element: <Survey /> },
  { path: ROUTER_PATH.DOCUMENT_FORM, element: <DocumentForm /> },
  {
    element: <ConsultingManagement />,
    children: [
      {
        path: ROUTER_PATH.CONSULTING_HISTORY,
        element: <ConsultingHistory />,
      },
      {
        path: ROUTER_PATH.SELECT_MENTOR,
        element: <SelectMentor />,
      },
      {
        path: ROUTER_PATH.CONSULTING_SCHEDULING,
        element: <ConsultingScheduling />,
      },
      {
        path: ROUTER_PATH.CONSULTING_START,
        element: <ConsultingStart />,
      },
    ],
  },
  {
    element: <Community />,
    children: [
      {
        path: ROUTER_PATH.POSTING,
        element: <CommunityPosting />,
      },
      {
        path: ROUTER_PATH.POST_DETAIL,
        element: <ForumPostBoard />,
      },
      {
        path: ROUTER_PATH.COMMUNITY,
        element: <BoomerangBoard />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTER_PATH.USER,
        element: <div>private router</div>,
      },
    ],
  },
  {
    path: ROUTER_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);
