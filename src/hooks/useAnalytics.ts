import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export interface AnalyticsEvent {
  id: string;
  type: 'PAGE_VIEW' | 'INTERACTION' | 'CUSTOM';
  name: string;
  path: string;
  timestamp: number;
  metadata?: Record<string, unknown>;
}

const STORAGE_KEY = 'cymatic_analytics_events';

export function useAnalytics() {
  const location = useLocation();

  // Track page views automatically on route change
  useEffect(() => {
    try {
      const events: AnalyticsEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const newEvent: AnalyticsEvent = {
        id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        type: 'PAGE_VIEW',
        name: `View: ${location.pathname}`,
        path: location.pathname,
        timestamp: Date.now(),
        metadata: { search: location.search }
      };

      // Keep last 100 events
      const updated = [newEvent, ...events].slice(0, 100);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Analytics storage error:', err);
    }
  }, [location.pathname, location.search]);

  // Track custom interaction events
  const trackEvent = useCallback((eventName: string, metadata?: Record<string, unknown>) => {
    try {
      const events: AnalyticsEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      const newEvent: AnalyticsEvent = {
        id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        type: 'INTERACTION',
        name: eventName,
        path: window.location.pathname,
        timestamp: Date.now(),
        metadata
      };

      const updated = [newEvent, ...events].slice(0, 100);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Analytics interaction tracking error:', err);
    }
  }, []);

  const getEvents = useCallback((): AnalyticsEvent[] => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }, []);

  return { trackEvent, getEvents };
}
