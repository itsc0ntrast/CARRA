import React from 'react';
import { RouterProvider, useRouter } from './app/router';
import { ToastProvider } from './components/common/Toast';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

import { HomePage } from './pages/HomePage';
import { CareersPage } from './pages/CareersPage';
import { CareerDetailPage } from './pages/CareerDetailPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { RecommendationsPage } from './pages/RecommendationsPage';
import { DashboardPage } from './pages/DashboardPage';
import { SavedCareersPage } from './pages/SavedCareersPage';
import { LearningHubPage } from './pages/LearningHubPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppRoutes: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    // Exact routes
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/careers') {
      return <CareersPage />;
    }
    if (currentPath.startsWith('/careers/')) {
      const slug = currentPath.replace('/careers/', '').split('?')[0];
      return <CareerDetailPage slug={slug} />;
    }
    if (currentPath === '/assessment') {
      return <AssessmentPage />;
    }
    if (currentPath === '/recommendations') {
      return <RecommendationsPage />;
    }
    if (currentPath === '/dashboard') {
      return <DashboardPage />;
    }
    if (currentPath === '/saved') {
      return <SavedCareersPage />;
    }
    if (currentPath === '/learning-hub') {
      return <LearningHubPage />;
    }
    if (currentPath === '/profile') {
      return <ProfilePage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }

    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172033] antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex-1" id="main-content">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </RouterProvider>
  );
}
