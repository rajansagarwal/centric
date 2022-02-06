🌸🌸🌸
What if patient data could be democratized? Let's restore transparency within bureaucratic medical practices.

## 💡 Inspiration 
The fundamental issue with current Electronic Health Records is that they exist in the ownership of completely different practices (ie physicians, specialists, etc...) ~ without universalism, we are left with chronic relativism within medical relations. I was heavily inspired by the idea of universalism, at the discretion of patients.

The vision is simple. Create the future of robust and adaptable informatics for all of healthcare, tackling each point of care. With this, we aim to move away from the status quo from medical software and building communities for distribution and collaborative growth in the medical space.

## 🛠 What it does
Patients can now send data to a decentralized database for specialists to see, or contribute towards studies & other informatics-based projects in exchange for an **equity token: $BLOOM**.

The Bloom Network verifies your identity with a smart contract on the Ethereum Mainnet. Once the server mines data (including timestamps, indexes, identities, EHR formats and quantities of transactions), it gets sent to a custom API that displays JSON data with all the blocks' information. This is displayed on the web app, with individual dynamic routing for each individual block—this consists of EHR parsed data, validity, hashes and transaction information. Any connections with identified data and keywords are put into a matrix API, creating a knowledge graph based on any connections to solidify the universal nature. 

In order to make this information readable, the EHR is parsed, scanned and transformed into plain text, which is then summarized and published to the API. This makes information better to understand, especially with varying EHR formats. With the notion of restoration, you can create a stronger understanding across a larger demographic. 

Restoration, in its literal sense, can be implemented through cryptography. Information on the blockchain is permanent, which can act as a negative impact towards the system. As a result, the restoration of self-determination with data can use public and private keys to encrypt and decrypt data. The EHR may always exist on the chain, but can only be encrypted and decrypted at the discretion of the public key's owner, which is the patient in our case. In order to restore revoked content, all the patient needs to do is reuse the private key, acting as a single-user passphrase to encrypt and decrypt data.  

## 🌸 Restoration
So, this project has to have voided the theme, right? Guess again! The nature of restoration is bringing things back to how they should be. Data should be owned by the people, not be stored in databases across a wide variety of medical practices.

Restoration is exhibited through three key parts. Firstly, restoring the democratic nature of data to be owned by the people, rather than a large force. Secondly, restoring the decentralized nature of data, letting it exist everywhere at the discretion of the owner. Finally, restoring the universal nature of data, allowing for an interpretable data format that all can understand.  

## 🗺 How it was built
The API was built with JavaScript, using Sha256 for encryption and decryption. The web app was built in NextJS, and deployed serverless to a custom API endpoint with all dynamic information for new blocks. Finally, the text extraction and summarization was built in Python, on a Jupyter Notebook, using libraries such as pandas.

## 🔑 Challenges we ran into
The fundamental challenge was redesigning the projection for the project. While all the technical implementations were met, the vision from parsing to universal EHR took some time, especially at the last minute. Furthermore, this was my first time implementing image to text systems, which challenged my ability as a Python developer. Finally, adding a custom server to an API was a new concept for me, which required a significant amount of research and methodical implementation strategies.

## 🚀 Accomplishments that we're proud of
- implementing a custom API from personalized blockchain that connects to serverless web app
- adding metamask authentication with local storage
- image to text summarizer, with 98% accuracy rate
- encryption with private and public keys natively integrated

## 🔎 What we learned
- learned how to implement knowledge graphs with keyword matrixes & NLP
- solved async metamask crypto logins with individual block local storage
- how to adjust ideas on a large scale without high intensity adjustments

## 🤷‍♂️ What's next for The Bloom Network
- hosting mining server asynchronously
- adding new blocks manually on the web app
- visualization of restoration for private keys
