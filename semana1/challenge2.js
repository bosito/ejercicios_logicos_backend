const reverseInt = (number) => {
    //Implementación
    let string = "";

    if (typeof number === "number") {

        let arrayNumber = [...`${number}`];

        const isNegative = arrayNumber.includes("-");

        if (isNegative) {

            number = Math.abs(number);

        };

        arrayNumber = [...`${number}`];

        let indexCero = arrayNumber.indexOf("0");

        if (indexCero !== -1) {

            arrayNumber.splice(indexCero, 1);

        };

        if (isNegative) {

            arrayNumber.push("-");

        };

        arrayNumber.reverse();

        for (let index = 0; index < arrayNumber.length; index++) {

            string += arrayNumber[index];

        };

        const response = parseInt(string);

        return response;
    };

    throw new Error("Argumento no valido")
}

module.exports = {
    reverseInt
}