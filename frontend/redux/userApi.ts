import { emptySplitApi } from "./emptySplitApi";

export interface LoginArgs {
  email: string
  password: string
}

export interface SignUpArgs {
  name: string
  username: string
  email: string
  password: string
}

export interface User {
  id: number
  profilePicture: File | string | null
  name: string
  username: string
  email: string
}

export const userApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<any, SignUpArgs>({
      query: (args) => {
        return {
          method: "POST",
          url: "/auth/local/register",
          body: args
        };
      },
    }),

    login: builder.mutation<any, LoginArgs>({
      query: ({ email, password }) => ({
        method: "POST",
        url: "/auth/local",
        body: {
          identifier: email,
          password,
        }
      }),
    }),

    getMyProfile: builder.query<User, void>({
      query: () => '/users/me',
      providesTags: ['Profile']
    }),

    updateProfile: builder.mutation<void, User>({
      query: (user) => {
        let form = new FormData()
        if (user.profilePicture) {
          form.append('profilePicture', user.profilePicture);
        }
        form.append('name', user.name);
        form.append('username', user.username);
        form.append('email', user.email);
        return ({
          method: "PUT",
          url: `/user/me`,
          body: form
        })
      },
      invalidatesTags: ['Profile']
    })
  })
})

export const { useSignUpMutation, useLoginMutation, useGetMyProfileQuery, useUpdateProfileMutation } = userApi