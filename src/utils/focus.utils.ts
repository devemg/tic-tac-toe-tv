import React from "react";

export const focusContainerRef = (containerRef: React.RefObject<HTMLDivElement | null> | undefined) => {
    if (!containerRef) return;
    if (!containerRef.current) return;
    setTimeout(() => {
        if (!containerRef) return;
        if (!containerRef.current) return;
        const elementDefault = containerRef.current.querySelector('[navi-default]');
        // TODO: replace or move the code to navigation lib
        if (elementDefault) {
            if (elementDefault.querySelector('[data-marked]')) {
                (elementDefault.querySelector('[data-marked]') as HTMLElement).focus();
            } else {
                (elementDefault.querySelector('[navi-element]') as HTMLElement).focus();
            }
        } else {
            const element = containerRef.current.querySelector('[navi-element]');
            if (element) {
                (element as HTMLElement).focus();
            }
        }

    }, 100);
}