/**
 * This function calculates total pric of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price );
    return sum;
}