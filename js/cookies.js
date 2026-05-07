export function getCookie(name) {
  const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.trim().split('=');
    cookies[name] = value;
    return cookies;
  }, {});
  return cookies[name];
}

export function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000`;
}