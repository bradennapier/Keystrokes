import { Keystrokes } from './keystrokes.js'

export {
  KeyEvent,
  HandlerFn,
  HandlerObj,
  Handler,
  ActiveEvent,
  InactiveEvent,
  KeyPressedEvent,
  KeyReleasedEvent,
  OnActiveBinder,
  OnInactiveBinder,
  OnKeyPressedBinder,
  OnKeyReleasedBinder,
  KeystrokesOptions,
  Keystrokes,
} from './keystrokes.js'

export const globalKeystrokes = new Keystrokes()

export const bindKey: typeof globalKeystrokes.bindKey =
  (...args) => globalKeystrokes.bindKey(...args)

export const unbindKey: typeof globalKeystrokes.unbindKey =
  (...args) => globalKeystrokes.unbindKey(...args)

export const bindKeyCombo: typeof globalKeystrokes.bindKeyCombo =
  (...args) => globalKeystrokes.bindKeyCombo(...args)

export const unbindKeyCombo: typeof globalKeystrokes.unbindKeyCombo =
  (...args) => globalKeystrokes.unbindKeyCombo(...args)

export const checkKey: typeof globalKeystrokes.checkKey =
  (...args) => globalKeystrokes.checkKey(...args)

export const checkKeyCombo: typeof globalKeystrokes.checkKeyCombo =
  (...args) => globalKeystrokes.checkKeyCombo(...args)
