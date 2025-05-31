// src/stores/themeStore.ts
import { persistentAtom } from '@nanostores/persistent';

// Define the type for your theme
export type Theme = 'light' | 'dark';

// Define the scoped key for localStorage
const THEME_STORAGE_KEY = 'urielcookies_theme';

// Create a persistent atom for the theme with the scoped key.
export const currentTheme = persistentAtom<Theme>(THEME_STORAGE_KEY, 'light');

export function toggleTheme() {
  const newTheme = currentTheme.get() === 'light' ? 'dark' : 'light';
  currentTheme.set(newTheme);
  // Update the class on the <html> element
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
}

export function clientThemeInit() {
  // This function is called on the client after Astro hydrates.
  // It ensures the <html> class matches the theme from the store (which loaded from localStorage).
  const themeValue = currentTheme.get();
  document.documentElement.classList.toggle('dark', themeValue === 'dark');
}