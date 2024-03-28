import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { ThemeType } from '../modules/@core/types/theme.type';

export const UiStore = signalStore(
  { providedIn: 'root' },
  withState({ theme: 'dark' }),
  withMethods((store) => ({
    setTheme(theme: ThemeType) {
      patchState(store, { theme });
    },
  }))
);
