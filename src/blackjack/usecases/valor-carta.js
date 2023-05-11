
/**
 * 
 * @param {String} carta Recibe una carta
 * @returns {Number}  Retorna el valor de la carta
 */

export const valorCarta = ( carta ) => {
    if ( carta.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}