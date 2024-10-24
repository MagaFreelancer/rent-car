import { RootState } from '@/redux/store.ts';

export const getAuthStatus = (state: RootState) => state.user.status;
export const getAuthData = (state: RootState) => state.user.data;
