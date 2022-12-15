import create from 'zustand';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const useAuthStore = create(set => ({
  isLoading: initialState.isLoading,
  isSignout: initialState.isSignout,
  userToken: initialState.userToken,

  restoreToken: async ({token}) => {
    set(state => ({
      ...state,
      userToken: token,
      isLoading: false,
    }));
  },
  login: async ({token}) => {
    set(state => ({
      ...state,
      userToken: token,
      isSignout: false,
    }));
  },
  logout: async () => {
    set(state => ({
      ...state,
      userToken: null,
      isSignout: true,
    }));
  },
}));

export default useAuthStore;
