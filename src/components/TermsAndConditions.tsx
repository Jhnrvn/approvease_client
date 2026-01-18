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

const TermsAnConditionsInfo = (term: TermsAndConditionsInfoType) => {
  return (
    <div className="mb-4">
      <span className="mb-2 text-sm font-semibold">{term.title}</span>
      <span className="text-justify text-xs">{term.content}</span>
    </div>
  );
};

const TermsAndConditions = () => {
  // terms and conditions data
  const termsData = JSON.parse(JSON.stringify(termsAndConditionData));

  // local state
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // state from store
  const setSignUpForm = useStore((state) => state.setSignUpForm);
  const termsAndConditions = useStore((state) => state.termsAndConditions);
  const closeTermsAndConditions = useStore(
    (state) => state.closeTermsAndConditions,
  );

  // handle confirm and close terms and conditions
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
          <p className="text-xs">Last updated: {termsData.lastUpdated}</p>

          <DialogDescription className="h-50">
            <div className="h-full w-full overflow-y-auto border border-slate-300 p-2">
              {/* render terms and conditions */}
              {termsData.termsAndConditions.map(
                (term: TermsAndConditionsInfoType) => (
                  <TermsAnConditionsInfo key={term.id} {...term} />
                ),
              )}
            </div>
          </DialogDescription>
          <div className="mt-4 flex gap-2">
            <input
              type="checkbox"
              id="confirmAgreement"
              name="confirmAgreement"
              onChange={() => setIsChecked(!isChecked)}
              className="size-5 cursor-pointer rounded-sm accent-green-600"
            />
            <p className="cursor-pointer text-xs font-medium">
              By checking this box, I confirm that I have read and agree to the
              Terms and Conditions of ApprovEase.
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              variant="default"
              disabled={!isChecked}
              onClick={handleConfirmAndClose}
              className="cursor-pointer bg-slate-800 text-white hover:bg-slate-950"
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
