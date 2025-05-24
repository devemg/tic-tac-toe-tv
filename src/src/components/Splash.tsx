import { manageMovement, NaviKeyboardEvent } from "@devemg/navi-lib";
import { useEffect, useRef } from "react"

export const Splash = () => {
  const splashRef = useRef<HTMLDivElement>(null);

  const handleKeyup = (e: KeyboardEvent) => {
    const event = e as NaviKeyboardEvent;
    event.naviBackKeys = ['XF86Back'];//10009 //inject with info to manage in the lib
    manageMovement(event);
  }


  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);
    return () => {
      document.removeEventListener('keyup', handleKeyup);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (splashRef.current) {
        splashRef.current.remove();
      }
    }, 3000);
  }, []);


  return (
    <div ref={splashRef} className="splash">
      <img src="/logo.svg" alt="TTT" />
      <h1>Tic Tac Toe</h1>
    </div>
  )
}
