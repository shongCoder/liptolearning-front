import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingComponent from "../components/LoadingComponent";

const Main = lazy(() => import("../pages/MainPage"));
const Layout = lazy(() => import("../pages/layout/LayoutPage"));

const Loading = <LoadingComponent />;

const mainRouter = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={Loading}>
            <Main />
          </Suspense>
        ),
      },
    ],
  },
]);

export default mainRouter;
