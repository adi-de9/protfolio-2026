'use client';

interface ToastNotificationProps {
  message: string | null;
}

export default function ToastNotification({ message }: ToastNotificationProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-16 right-4 sm:right-8 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-charcoal border border-moss/50 text-alabaster font-mono text-xs shadow-2xl transition-[opacity,transform] duration-300 ease-out animate-in fade-in slide-in-from-top-2"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-moss" />
      </span>
      <span>{message}</span>
    </div>
  );
}
