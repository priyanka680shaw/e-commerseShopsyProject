import { useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SkeletonLoader from "./component/Skletion";
// Lazy Loading Components
const Layout = lazy(() => import("../layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const MensWear = lazy(() => import("./pages/MensWear"));
const WomensWear = lazy(() => import("./pages/WomensWear"));
const TopTrending = lazy(() => import("./pages/TopTrending"));
const KidsWear = lazy(() => import("./pages/KidsWear"));
const Addtocart = lazy(() => import("./pages/Addtocart"));
const BeautyProducts = lazy(() => import("./pages/BeautyProducts"));
const Sunglasses = lazy(() => import("./pages/Sunglasses"));
const PagenotFound = lazy(() => import("./pages/PagenotFound"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Routes with Suspense
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Suspense fallback={<SkeletonLoader />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <PagenotFound />
            </Suspense>
          }
        />
        <Route
          path="/menswear"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <MensWear />
            </Suspense>
          }
        />
        <Route
          path="/womenswear"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <WomensWear />
            </Suspense>
          }
        />
        <Route
          path="/toptrending"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <TopTrending />
            </Suspense>
          }
        />
        <Route
          path="/kidswear"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <KidsWear />
            </Suspense>
          }
        />
        <Route
          path="/addtocart"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Addtocart />
            </Suspense>
          }
        />
        <Route
          path="/beautyProducts"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <BeautyProducts />
            </Suspense>
          }
        />
        <Route
          path="/sunglasses"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <Sunglasses />
            </Suspense>
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer />
    </>
  );
}

export default App;
