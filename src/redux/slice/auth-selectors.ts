import { RootState } from '@/redux/store.ts';

export const getAuthStatus = (state: RootState) => state.user.status;
export const getAuthData = (state: RootState) => state.user.data;
export const getAuthIsLogged = (state: RootState) => state.user.isLogged;
export const getAuthError = (state: RootState) => state.user.error;
