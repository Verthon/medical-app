import * as React from "react"
import { ErrorBoundary } from 'react-error-boundary';

//@ts-ignore
const Diagnostics = React.lazy(() => import("@med-mfe/diagnostics/App"));

export const DiagnosticsLoader = () => {
  return (
    <React.Suspense fallback="loading">
      <ErrorBoundary fallback={<h2>Failed to load Diagnostics application</h2>}>
        <Diagnostics />
      </ErrorBoundary>
    </React.Suspense>
  )
}