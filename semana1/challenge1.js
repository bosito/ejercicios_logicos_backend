const reverseString = (str) => {
    //Implementación
    if (typeof str === "string" && str.length > 1 && str.length < 15  ) {

        const strReverse = str.split("").reverse();

        const response = strReverse.join("");

        return response;
    };

    throw new Error("Argumento no valido");
};

module.exports = {
    reverseString
}