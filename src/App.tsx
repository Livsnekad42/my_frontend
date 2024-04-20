import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import { useAppSelector, useAppDispatch } from './redux/hooks'
import {Todo, useGetAllPokemonQuery} from "./redux/todoSlice";

const App = () => {

    const [searchValue, setSearchValue] = useState<string>('')
    const { data, error, isLoading } = useGetAllPokemonQuery('')
    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

    return (
        <div className="App">
            <input type="text" onChange={(event) => setSearchValue(event.target.value)}/>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data.length ? (
                <ul>

                    {data.map((elem: Todo) => {
                        return (
                            <li>
                                {elem.title}
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </div>
    )
}

export default App;
