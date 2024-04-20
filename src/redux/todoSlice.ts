// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export type Todo = {
    completed: boolean
    id: number
    title: string
    userId: number
}
// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/todos/' }),
    endpoints: (builder) => ({
        getAllPokemon: builder.query({
            query: () => ({
                url: "",
                method: "GET",
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPokemonQuery } = pokemonApi