
/// <reference types="vite/client" />

// Add global window.clarity type declaration
interface Window {
  clarity?: (command: string, ...args: any[]) => void;
}
