# About elliptic-curve-cryptography

The elliptic-curve-cryptography project allows users to learn about digital signatures and secure communication by performing core cryptographic functions.

Users can perform the following essential functions:
- Generate a public/private key pair (private keys are generated using 12 words from the [BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)
- Add an optional passphrase to increase security in case the mnemonic seed phrase is compromised
- Re-generate their public/private key pair from the mnemonic seed phrase (and passphrase if applicable)
- Sign messages using their private key
- Verify the authenticity of messages signed by themselves or others
- Generate shared keys for secure communication between multiple parties
- Encrypt/decrypt messages with shared keys

These cryptographic functions offer building blocks for understanding how digital signatures and cryptography can support secure communications.

## Commands
Some commands require certain parameters. Use the `node app.js --help` command to view all commands and required/optional parameters.

- `node app.js generateKeysAndSeed`: Create a set of keys and corresponding seed
- `node app.js generateKeysFromSeed`: Re-generate a key pair from existing seed (and passphrase if applicable)
- `node app.js generateSharedKey`: Create a shared key for encryption/decryption
- `node app.js signMessage`: Create a signed message
- `node app.js verifyMessage`: Verify a signed message
- `node app.js encryptMessage`: Encrypt a message
- `node app.js decryptMessage`: Decrypt a message

## Dependencies

- [Elliptic] (https://github.com/indutny/elliptic): Fast Elliptic Curve Cryptography in plain javascript
- [Chalk] (https://github.com/chalk/chalk): Terminal string styling done right
- [CryptoJS] (https://github.com/brix/crypto-js): JavaScript library of crypto standards.
- [Prompt] (https://github.com/flatiron/prompt): a beautiful command-line prompt for node.js
- [yargs] (https://github.com/yargs/yargs): yargs the modern, pirate-themed successor to optimist.