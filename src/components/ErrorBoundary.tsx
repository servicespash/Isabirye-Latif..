import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("CYMATIC_CORE_CRASH:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div className="p-10 text-red-500 font-mono">// SYSTEM_CRITICAL_FAILURE: {String(this.state.error)}</div>;
    }

    return this.props.children;
  }
}
