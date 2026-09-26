export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // If requesting a clean extensionless path (like /home, /about, /portfolio, /showcase)
    if (url.pathname !== '/' && !url.pathname.includes('.')) {
      const htmlUrl = new URL(request.url);
      htmlUrl.pathname = url.pathname + '.html';
      const response = await env.ASSETS.fetch(new Request(htmlUrl, request));
      if (response.status === 200) {
        return response;
      }
    }

    // Default: serve the static asset directly
    return env.ASSETS.fetch(request);
  },
};
