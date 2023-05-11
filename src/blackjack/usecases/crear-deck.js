import _ from 'underscore'

/**
 * 
 * @param {Array<string>} tiposDeCarta    Ejemplo : ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo : ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de carta
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error( 'tiposDeCarta tiene que ser un arreglo de string' );

    let deck =[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
