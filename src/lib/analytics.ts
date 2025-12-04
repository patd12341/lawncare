import { supabase } from './supabase';

export const trackPageView = async (pagePath: string) => {
  try {
    const { data, error } = await supabase
      .from('analytics')
      .upsert(
        {
          page_path: pagePath,
          view_count: () => 'view_count + 1',
          last_viewed_at: new Date().toISOString()
        },
        { onConflict: 'page_path' }
      );

    if (error) {
      console.error('Error tracking page view:', error);
    }

    return data;
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

export const getAnalytics = async () => {
  try {
    // Get total page views
    const { data: analyticsData, error: analyticsError } = await supabase
      .from('analytics')
      .select('*')
      .order('view_count', { ascending: false });

    if (analyticsError) {
      throw analyticsError;
    }

    // Get blog post views
    const { data: blogData, error: blogError } = await supabase
      .from('blog_posts')
      .select('slug, view_count')
      .order('view_count', { ascending: false });

    if (blogError) {
      throw blogError;
    }

    // Get form submissions count
    const { count: submissionCount, error: submissionError } = await supabase
      .from('form_submissions')
      .select('*', { count: 'exact', head: true });

    if (submissionError) {
      throw submissionError;
    }

    return {
      totalPageViews: analyticsData.reduce((sum, item) => sum + item.view_count, 0),
      pageViews: analyticsData,
      blogViews: blogData,
      totalSubmissions: submissionCount || 0
    };
  } catch (error) {
    console.error('Error fetching analytics:', error);
    throw error;
  }
};