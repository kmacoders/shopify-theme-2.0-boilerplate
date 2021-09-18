import { qs } from '../dom/dom';

/**
 * Run script callback when a section is selected
 * @param {string} className: Root classname section
 * @param {Function} cb: Callback when this section is selected
 */
export const onSectionSelected = (className: string, cb: () => void): void => {
  qs(className) && cb();
};
