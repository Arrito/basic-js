class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let result = '';
    let keyIndex = 0;
    message = message.toUpperCase(); // Приводим сообщение к верхнему регистру
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (/[A-Z]/.test(char)) {
        const shift = key[keyIndex % key.length].toUpperCase().charCodeAt(0) - 65;
        const base = 65;
        result += String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let result = '';
    let keyIndex = 0;
    message = message.toUpperCase(); // Приводим сообщение к верхнему регистру
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (/[A-Z]/.test(char)) {
        const shift = key[keyIndex % key.length].toUpperCase().charCodeAt(0) - 65;
        const base = 65;
        result += String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
