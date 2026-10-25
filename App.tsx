import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';

// Découpage du code : chaque page est chargée à la demande.
const LevelsPage = lazy(() => import('@/pages/LevelsPage'));
const LevelPage = lazy(() => import('@/pages/LevelPage'));
const LessonsPage = lazy(() => import('@/pages/LessonsPage'));
const LessonPage = lazy(() => import('@/pages/LessonPage'));
const ExercisesPage = lazy(() => import('@/pages/ExercisesPage'));
const QuizPage = lazy(() => import('@/pages/QuizPage'));
const ExamsPage = lazy(() => import('@/pages/ExamsPage'));
const ExamPage = lazy(() => import('@/pages/ExamPage'));
const ToolsPage = lazy(() => import('@/pages/ToolsPage'));
const ToolPage = lazy(() => import('@/pages/ToolPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const ProgressPage = lazy(() => import('@/pages/ProgressPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/levels', element: <LevelsPage /> },
      { path: '/levels/:levelId', element: <LevelPage /> },
      { path: '/lessons', element: <LessonsPage /> },
      { path: '/lessons/:lessonId', element: <LessonPage /> },
      { path: '/exercises', element: <ExercisesPage /> },
      { path: '/exercises/quiz/:lessonId', element: <QuizPage /> },
      { path: '/exams', element: <ExamsPage /> },
      { path: '/exams/:examId', element: <ExamPage /> },
      { path: '/tools', element: <ToolsPage /> },
      { path: '/tools/:toolId', element: <ToolPage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '/progress', element: <ProgressPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
