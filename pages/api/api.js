const { publicEncrypt, privateDecrypt, generateKeyPairSync } = require('crypto');
const secure = require("crypto-js/sha256");

const keywords = ['pathogenic', 'heterozygous', 'autosomal'];

class Hash {
	constructor(index, time, graph, prev = '') {
		this.index = index;
		this.time = time;
		this.graph = graph;
    this.keywords = keywords[0];
		this.prev = prev;
		this.hash = this.calculate();
		this.nonce = 0;
	}

	calculate() {
		return secure(this.index + this.prev + this.time + JSON.stringify(this.data) + this.nonce).toString();
	}

	mining(difficulty) {
		while (
			this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
		) {
			this.nonce++;
			this.hash = this.calculate();
		}
	}
}

class Protocol {
	constructor() {
		this.protocol = [this.genesis()];
		this.difficulty = 4;
	}

	genesis() {
		return new Hash(0, "01/01/2020", "you alr know its ya boy genesis on chain", "0");
	}

	fetch() {
		return this.protocol[this.protocol.length - 1];
	}

	add(input) {
		input.prev = this.fetch().hash;
		input.hash = input.calculate();
		input.mining(this.difficulty);
		this.protocol.push(input);
	}

	validity() {
		for (let i = 1; i < this.protocol.length; i++) {
			const current = this.protocol[i];
			const last = this.protocol[i - 1];
			const decrypted1 = decryptedData1.toString('utf-8');
			const decrypted2 = decryptedData2.toString('utf-8');
			const decrypted3 = decryptedData3.toString('utf-8');

			if (current.hash !== current.calculate()) {
				return 'Not Mined. Current hash is invalid';
			} else if (current.prev !== last.hash) {
				return 'Not Mined. Previous hash is invalid';
			} else if (decrypted1 !== 'EGFR') {
				return 'Not Mined. Invalid Data';
			}
		} return 'Mined! Chain is Valid!';
	}
}

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
	modulusLength: 2048,
	publicKeyEncoding: {
		type: 'spki', format: 'pem',
	},
	privateKeyEncoding: {
		type: 'pkcs8', format: 'pem',
	},
});

const EGFR = 'EGFR';
const KCNQ1 = 'KCNQ1';
const CYPD26 = 'CYPD26';
let datum = new Protocol();

const encryptedData1 = publicEncrypt(
	publicKey,
	Buffer.from(EGFR)
);


const encryptedData2 = publicEncrypt(
	publicKey,
	Buffer.from(KCNQ1)
);


const encryptedData3 = publicEncrypt(
	publicKey,
	Buffer.from(CYPD26)
);

const decryptedData1 = privateDecrypt(
	privateKey,
	encryptedData1
);

const decryptedData2 = privateDecrypt(
	privateKey,
	encryptedData2
);

const decryptedData3 = privateDecrypt(
	privateKey,
	encryptedData3
);

datum.add(
	new Hash(1, "02/06/2022", {
		keywords: keywords[0],
		encrypted: encryptedData1.toString('hex'),
		pubKey: publicKey.length,
		privKey: privateKey.length,
		validity: datum.validity(),
	})
);

datum.add(
	new Hash(2, "02/06/2022", {
		keywords: keywords[1],
		encrypted: encryptedData2.toString('hex'),
		pubKey: publicKey.length,
		privKey: privateKey.length,
		validity: datum.validity(),
	})
);

datum.add(
	new Hash(3, "02/06/2022", {
		keywords: keywords[2],
		encrypted: encryptedData3.toString('hex'),
		pubKey: publicKey.length,
		privKey: privateKey.length,
		validity: datum.validity(),
	})
);

datum.add(
	new Hash(4, "02/06/2022", {
		keywords: keywords[2],
		encrypted: encryptedData3.toString('hex'),
		pubKey: publicKey.length,
		privKey: privateKey.length,
		validity: datum.validity(),
	})
);

datum.add(
	new Hash(5, "02/06/2022", {
		keywords: keywords[2],
		encrypted: encryptedData3.toString('hex'),
		pubKey: publicKey.length,
		privKey: privateKey.length,
		validity: datum.validity(),
	})
);

datum.add(
	new Hash(6, "02/06/2022", {
		keywords: keywords[2],
		encrypted: encryptedData3.toString('hex'),
		pubKey: publicKey.length,
		privKey: privateKey.length,
		validity: datum.validity(),
	})
);

datum.add(
	new Hash(7, "02/06/2022", {
		keywords: keywords[2],
		encrypted: encryptedData3.toString('hex'),
		pubKey: publicKey.length,
		privKey: privateKey.length,
		validity: datum.validity(),
	})
);

console.log('Patient Public Key for Data Encryption \n' + publicKey);
console.log('Doctor Private Key for Data Decryption \n' + privateKey);
console.log(JSON.stringify(datum, null, 5));