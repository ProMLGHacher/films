import React from 'react'
import './Main.css'
import MoviesCategory from '../componets/MoviesCategory'
import Films from '../films/Films'

const Main = () => {
    return (
        <main>
            <MoviesCategory title={'НОВИНКИ'} />
            <Films />
        </main>
    )
}

export default Main
