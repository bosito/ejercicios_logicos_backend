function landMass(namePais, areaPais) {
    //Implementación
    const HEART_MASA = 148_940_000;

    let result = areaPais * 100 / HEART_MASA;

    result =  parseFloat(result.toFixed(2));

    const message = `${namePais} representa el ${result}% de la masa de la tierra`;

    const objResult = { percent: result, message: message };

    return objResult;
};

module.exports = landMass;