import React from "react"
import AdicionaFruta from "./adicionaFruta"
import Fruta from "./Fruta"

const ListaFrutas = () => {

    const frutas = [
        {id: 1, nome: 'Abacaxi', quantidade: 2},
        {id: 2, nome: 'Maçã', quantidade: 25}
    ]

    return (
        <>
            <h1>Lista de FRutas</h1>

            <AdicionaFruta />

            {frutas.map(fruta => (
                <Fruta key={fruta.id} fruta={fruta} />
            ))}
        </>
    )
}

export default ListaFrutas