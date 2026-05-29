import React, { Component } from 'react';
import { supabase } from '@/lib/supabase';
import { RefreshCcw, AlertTriangle } from 'lucide-react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log directly to Supabase error_logs table if possible
    try {
      supabase.from('error_logs').insert([{
        error_message: error.message,
        stack_trace: info.componentStack,
        url: typeof window !== 'undefined' ? window.location.href : 'unknown',
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
      }]).then();
    } catch (e) {
      console.error("Failed to log error to backend:", e);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 text-center">
          <div className="glass-tier-3 p-8 max-w-md w-full flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
               <AlertTriangle size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
              <p className="text-white/60 text-sm">We've encountered an unexpected error and have logged it for our engineers.</p>
            </div>
            
            <button 
              onClick={this.handleReload}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors font-medium w-full justify-center"
            >
              <RefreshCcw size={18} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
