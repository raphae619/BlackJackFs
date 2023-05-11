
/**
 * 
 * @param {Array<String>} deck Recibe el deck generado automatico
 * @returns {String}
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}