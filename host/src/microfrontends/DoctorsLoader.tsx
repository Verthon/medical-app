import * as React from "react"
import { ErrorBoundary } from 'react-error-boundary';

//@ts-ignore
const Doctors = React.lazy(() => import("@med-mfe/doctors/App"));

export const DoctorsLoader = () => {
  return (
    <React.Suspense fallback="loading">
      <ErrorBoundary fallback={<h2>Failed to load Doctors application</h2>}>
        <Doctors />
      </ErrorBoundary>
    </React.Suspense>
  )
}