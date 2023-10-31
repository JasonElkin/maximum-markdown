const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function disableDigitShortcuts(element: HTMLElement) {
  element.addEventListener('keydown', (e) => {
    if (((e.ctrlKey === e.metaKey) === e.altKey) === false && e.key in digits) {
      e.stopPropagation();
    }
  });
}
