# About elliptic-curve-cryptography

The elliptic-curve-cryptography project allows users to learn about digital signatures and secure communication by performing core cryptographic functions.

Users can perform the following essential functions:
- Generate a public/private key pair (private keys are generated using 12 words from the BIP39 word list): https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt
- Add an optional passphrase to increase security in case their mnemonic seed phrase is compromised
- Re-generate their public/private key pair from the seed words (and passphrase if applicable)
- Sign messages using their private key
- Verify the authenticity of messages signed by themselves or others
- Generate shared keys for secure communication between multiple parties
- Encrypt /decrypt messages with shared keys

These cryptographic functions offer building blocks for understanding how digital signatures and cryptography can support secure communications.

## Commands
- `node scripts/app.js --help`: See a list of available commands and required/optional parameters
- `app.js generateKeysAndSeed`: Create a set of keys and corresponding seed
- `app.js generateKeysFromSeed`: Re-generate a key pair from existing seed (and passphrase if applicable)
- `app.js generateSharedKey`: Create a shared key for encryption/decryption
- `app.js signMessage`: Create a signed message
- `app.js verifyMessage`: Verify a signed message
- `app.js encryptMessage`: Encrypt a message
- `app.js decryptMessage`: Decrypt a message

## Dependencies

- [Elliptic] (https://github.com/indutny/elliptic): Fast Elliptic Curve Cryptography in plain javascript
- [Chalk] (https://github.com/chalk/chalk): Terminal string styling done right
- [CryptoJS] (https://github.com/brix/crypto-js): JavaScript library of crypto standards.
- [Prompt] (https://github.com/flatiron/prompt): a beautiful command-line prompt for node.js
- [yargs] (https://github.com/yargs/yargs): yargs the modern, pirate-themed successor to optimist.