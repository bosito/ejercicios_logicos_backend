const capitalizeLetters = (str) => {
    //Implementación
    if (typeof str === "string") {

        const arrayString = str.split(" ");
        let newArrayString = [];

        for (let index = 0; index < arrayString.length; index++) {

            const element = arrayString[index].split("");

            const firtsElement = element[0];

            element.splice(0,1,firtsElement.toLocaleUpperCase());

            const text = element.join("");

            newArrayString.push(text);
        };

        const response = newArrayString.join(" ");

        return response;

    };

    throw new Error("Argumento no valido");
};

module.exports = {
    capitalizeLetters
}