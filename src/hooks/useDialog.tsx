import { useLayoutEffect, useRef, useState } from "react";
import { focusContainerRef } from "@utils/focus.utils";

export const useDialog = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isDialogOpen !== null && isDialogOpen) {
      focusContainerRef(dialogRef);
    }
  }, [isDialogOpen]);

  const showDialog = () => setDialogOpen(true);
  const hideDialog = () => setDialogOpen(false);
  return {
    isDialogOpen: isDialogOpen === true,
    dialogRef,
    showDialog,
    hideDialog,
  }
}
