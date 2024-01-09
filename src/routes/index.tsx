import { lazy } from 'react';
import { Navigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';

import LayoutPage from '@/pages/layout';
import LoginPage from '@/pages/login';
import RegisterForm from '@/pages/register';

import WrapperRouteComponent from './config';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'));
const Account = lazy(() => import(/* webpackChunkName: "UserInformation'"*/ '@/pages/account'));
const UserList = lazy(() => import(/* webpackChunkName: "user-manage'"*/ '@/pages/account/userManage'));
const Dashboard = lazy(() => import(/* webpackChunkName: "dashbord'"*/ '@/pages/dashboard'));
const IPSearch = lazy(() => import(/* webpackChunkName: "search'"*/ '@/pages/search'));
const DocumentList = lazy(() => import(/* webpackChunkName: "DocumentList'"*/ '@/pages/doucumentation/documentsList'));
const DocumentEditor = lazy(
  () => import(/* webpackChunkName: "DocumentEditor'"*/ '@/pages/doucumentation/documentEditor'),
);
const DocumentViewer = lazy(
  () => import(/* webpackChunkName: "DocumentViewer'"*/ '@/pages/doucumentation/documentViewer'),
);
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ '@/pages/guide'));
const RoutePermission = lazy(() => import(/* webpackChunkName: "route-permission"*/ '@/pages/permission/route'));
const FormPage = lazy(() => import(/* webpackChunkName: "form'"*/ '@/pages/components/form'));
const TablePage = lazy(() => import(/* webpackChunkName: "table'"*/ '@/pages/components/table'));
const SearchPage = lazy(() => import(/* webpackChunkName: "search'"*/ '@/pages/components/search'));
const TabsPage = lazy(() => import(/* webpackChunkName: "tabs'"*/ '@/pages/components/tabs'));
const AsidePage = lazy(() => import(/* webpackChunkName: "aside'"*/ '@/pages/components/aside'));
const RadioCardsPage = lazy(() => import(/* webpackChunkName: "radio-cards'"*/ '@/pages/components/radio-cards'));

const RenderRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<WrapperRouteComponent element={<LoginPage />} titleId="title.login" />} />
      <Route path="/register" element={<WrapperRouteComponent element={<RegisterForm />} titleId="title.register" />} />
      <Route path="/" element={<WrapperRouteComponent element={<LayoutPage />} titleId="title.dashboard" />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="account" element={<WrapperRouteComponent element={<Account />} titleId="title.account" />} />
        <Route
          path="users"
          element={<WrapperRouteComponent element={<UserList />} titleId="title.users" requiresSuperUser />}
        />
        <Route path="dashboard" element={<WrapperRouteComponent element={<Dashboard />} titleId="title.dashboard" />} />
        <Route path="search" element={<WrapperRouteComponent element={<IPSearch />} titleId="title.seach" />} />
        <Route
          path="documentation"
          element={<WrapperRouteComponent element={<DocumentList />} titleId="title.documentation" />}
        />
        <Route path="/document/new" element={<DocumentEditor />} />
        <Route path="/document/edit/:docId" element={<DocumentEditor />} />
        <Route path="/document/:docId" element={<DocumentViewer />} />
        <Route path="guide" element={<WrapperRouteComponent element={<Guide />} titleId="title.guide" />} />
        <Route
          path="permission/route"
          element={
            <WrapperRouteComponent element={<RoutePermission />} titleId="title.permission.route" requiresLogin />
          }
        />
        <Route path="component/form" element={<WrapperRouteComponent element={<FormPage />} titleId="title.form" />} />
        <Route
          path="component/table"
          element={<WrapperRouteComponent element={<TablePage />} titleId="title.table" />}
        />
        <Route
          path="component/search"
          element={<WrapperRouteComponent element={<SearchPage />} titleId="title.search" />}
        />
        <Route path="component/tabs" element={<WrapperRouteComponent element={<TabsPage />} titleId="title.tabs" />} />
        <Route
          path="component/aside"
          element={<WrapperRouteComponent element={<AsidePage />} titleId="title.aside" />}
        />
        <Route
          path="component/radio-cards"
          element={<WrapperRouteComponent element={<RadioCardsPage />} titleId="title.radioCards" />}
        />
        <Route path="*" element={<WrapperRouteComponent element={<NotFound />} titleId="title.notFound" />} />
      </Route>
    </Routes>
  );
};

export default RenderRouter;
