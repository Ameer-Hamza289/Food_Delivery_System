import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    prepareHeaders: (headers, { getState }: any) => {
      headers.set('accept', 'application/json')
      try {
        const { signedUp, loggedIn, token } = getState().reducer.user;
        if ((signedUp || loggedIn) && token) {
          headers.set('authorization', `Bearer ${token}`)
        } else {
          headers.set('authorization', '')
        }
      } catch (err) {
        headers.set('authorization', '')
      }
      return headers
    }
  }),
  endpoints: () => ({}),
  tagTypes: ['Profile']
})