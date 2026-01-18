"use client";

import { useState } from "react";
import termsAndConditionData from "@/data/termsAndConditions.json";
import { useStore } from "@/store/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// types
import type { TermsAndConditionsInfoType } from "@/types/auth";

const TermsAndConditionsInfo = (term: TermsAndConditionsInfoType) => {
  return (
    <div className="mb-4">
      <span className="mb-2 block text-sm font-semibold">{term.title}</span>
      <span className="block text-justify text-xs">{term.content}</span>
    </div>
  );
};

const TermsAndConditions = () => {
  // terms and conditions data
  const termsData = termsAndConditionData;

  // local state
  const [isChecked, setIsChecked] = useState(false);

  // state from store
  const setSignUpForm = useStore((state) => state.setSignUpForm);
  const termsAndConditions = useStore((state) => state.termsAndConditions);
  const closeTermsAndConditions = useStore(
    (state) => state.closeTermsAndConditions,
  );

  // handle confirm and close
  const handleConfirmAndClose = () => {
    setSignUpForm("agreeToTermsAndConditions", true);
    closeTermsAndConditions();
    setIsChecked(false);
  };

  return (
    <Dialog open={termsAndConditions} onOpenChange={closeTermsAndConditions}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>

          <DialogDescription>
            Last updated: {termsData.lastUpdated}
          </DialogDescription>

          <div className="h-52 w-full overflow-y-auto rounded-md border border-slate-300 p-2">
            {termsData.termsAndConditions.map(
              (term: TermsAndConditionsInfoType) => (
                <TermsAndConditionsInfo key={term.id} {...term} />
              ),
            )}
          </div>

          {/* Checkbox */}
          <div className="mt-4 flex items-start gap-2">
            <input
              type="checkbox"
              id="confirmAgreement"
              name="confirmAgreement"
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
              className="mt-0.5 size-5 cursor-pointer accent-green-600"
            />
            <label
              htmlFor="confirmAgreement"
              className="cursor-pointer text-xs font-medium"
            >
              By checking this box, I confirm that I have read and agree to the
              Terms and Conditions of ApprovEase.
            </label>
          </div>

          {/* Confirm button */}
          <div className="mt-4 flex justify-end">
            <Button
              disabled={!isChecked}
              onClick={handleConfirmAndClose}
              className="bg-slate-800 text-white hover:bg-slate-950"
            >
              Confirm
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditions;
