export const recordPageView = async (path: string) => {
  try {
    // Skip recording views on development unless explicitly enabled
    if (process.env.NODE_ENV === 'development' && !process.env.RECORD_DEV_PAGEVIEWS) {
      return;
    }
    
    await fetch('/api/analytics/pageview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ path }),
    });
  } catch (error) {
    console.error('Failed to record page view:', error);
  }
};
