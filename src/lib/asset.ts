// public/ ichidagi asset yo'lini joriy base (BASE_URL) bilan to'g'ri hal qiladi.
// Dev'da BASE_URL = "/", GitHub Pages build'ida "/support-station/".
export const asset = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
