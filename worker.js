export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // If root route, serve index.html
    if (url.pathname === '/' || url.pathname === '') {
      const indexUrl = new URL('/index.html', request.url);
      return env.ASSETS.fetch(new Request(indexUrl, request));
    }

    // If requesting a clean extensionless path (like /home, /about, /portfolio, /showcase)
    if (!url.pathname.includes('.')) {
      // Strip trailing slash if present (e.g. /home/ -> /home)
      const cleanPath = url.pathname.replace(/\/+$/, '');
      const htmlUrl = new URL(cleanPath + '.html', request.url);
      const response = await env.ASSETS.fetch(new Request(htmlUrl, request));
      if (response.status === 200) {
        return response;
      }
    }

    // Default: serve the static asset directly
    return env.ASSETS.fetch(request);
  },
};
