import { MouseEvent, useEffect, useRef } from "react";
import { useGame } from "@context";

interface DialogProps {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export const Dialog: React.FC<DialogProps> = ({ children, show, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { backManager } = useGame();

  useEffect(() => {
    if (show) {
      const handleBack = () => {
        onClose();
      };
      backManager.setCustomHandler(handleBack);
    } else {
      backManager.clearCustomHandler();
    }
  }, [show]);

  useEffect(() => {
    return () => {
      backManager.clearCustomHandler();
    }
  }, [])


  const onDialogClick = (event: MouseEvent) => {
    if (!panelRef.current) return;
    const target = event.target as Element;
    if (!target) return;
    if (!panelRef.current.contains(target)) {
      onClose();
    }
  }

  return (
    show && <div className="dialog" onClick={onDialogClick}>
      <div ref={panelRef} className="dialog-panel">
        {children}
      </div>
    </div>
  )
}
