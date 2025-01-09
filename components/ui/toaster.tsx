'use client';

import { useToast } from '@/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

export function Toaster() {
  const { toast } = useToast(); // Access the 'toast' property instead of 'toasts'

  return (
    <ToastProvider>
      {/* Render toasts here */} 
      <ToastViewport />
    </ToastProvider>
  );
}
