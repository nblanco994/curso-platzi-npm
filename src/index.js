const messages = [
    "fernando",
    "alejandra",
    "rafael",
    "barbara",
    "juan",
    "carla",
    "Rhonald",
    "niyuby",
    "pedro",
    "pepito",
    "pablo"
];

const randomNames = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomNames };