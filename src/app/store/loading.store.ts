import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const LoadingStore = signalStore(
  { providedIn: 'root' },
  withState({
    show: false,
    message: '',
  }),
  withMethods((store) => ({
    setState(show: boolean, message = '') {
      patchState(store, { show, message });
    },
    setMessage(message = '') {
      patchState(store, { message });
    },
  }))
);
