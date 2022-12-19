import React, { memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../routes";
// Route config

const Content = () => {
  return (
    <div>
      <Suspense fallback={false}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default memo(Content);
