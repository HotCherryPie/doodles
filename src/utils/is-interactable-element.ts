const ACTIONABLE_ROLES = new Set<string>([
  'button',
  'link',
  'checkbox',
  'radio',
  'switch',
  'tab',
  'menuitem',
  'menuitemcheckbox',
  'menuitemradio',
  'option',
  'treeitem',
  'gridcell',
  'combobox',
  'listbox',
  'slider',
  'spinbutton',
]);

const INTERACTABLE_ELEMENTS = [
  HTMLAnchorElement,
  HTMLAreaElement,
  HTMLAudioElement,
  HTMLButtonElement,
  HTMLIFrameElement,
  HTMLInputElement,
  HTMLSelectElement,
  HTMLTextAreaElement,
  HTMLVideoElement,
];

export const isInteractableElement = (
  element: unknown,
): element is HTMLElement => {
  if (!(element instanceof HTMLElement)) return false;

  if (INTERACTABLE_ELEMENTS.some((it) => element instanceof it)) return true;

  const role =
    element.attributes.getNamedItem('role')?.value.toLowerCase() ?? '';

  return ACTIONABLE_ROLES.has(role);
};
