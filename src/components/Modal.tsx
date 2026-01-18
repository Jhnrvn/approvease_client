"use client";

import { useStore } from "@/store/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const AuthModal = () => {
  // state from store
  const AuthModal = useStore((state) => state.authModal);
  const closeAuthModal = useStore((state) => state.closeAuthModal);

  return (
    <Dialog open={AuthModal.isOpen} onOpenChange={closeAuthModal}>
      <DialogContent className="w-200 bg-white sm:w-96">
        <DialogHeader>
          <DialogTitle>Invalid Credentials</DialogTitle>
          <DialogDescription>{AuthModal.message}</DialogDescription>
          <div className="mt-4 flex justify-end">
            <Button
              variant="default"
              onClick={closeAuthModal}
              className="cursor-pointer bg-slate-800 text-white hover:bg-slate-950"
            >
              Close
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
