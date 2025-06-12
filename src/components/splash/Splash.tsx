import { useEffect, useRef } from "react"
import styles from './splash.module.scss';

export const Splash = () => {
  const splashRef = useRef<HTMLDivElement>(null);

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
