import { readFileSync } from 'node:fs';

export function homePage() {
  return readFileSync(new URL('../html/index.html', import.meta.url), 'utf8');
}
export function PageNotFound() {
  return readFileSync(new URL('../html/404.html', import.meta.url), 'utf8');
}