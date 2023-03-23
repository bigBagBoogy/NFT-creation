const { network } = require("hardhat")
const { storeImages, storeTokenUriMetadata } = require("../utils/uploadToPinata")

const imagesLocation = "./images/randomNft/" // = subfolder!?
// the way this script is written currently it only accepts png's
// this code is currently broken >> see error way down below.
let tokenUris = []

const metadataTemplate = {
    name: "",
    description: "",
    image: "",
    attributes: [
        // these attributes below are hardcoded!😔
        {
            trait_type: "Resilience",
            value: 100,
        },
    ],
}
tokenUris = handleTokenUris() // here we call the 1st function
// ?? above we say tokenUris is a function, but below we say it's an array??
async function handleTokenUris() {
    tokenUris = []
    const { responses: imageUploadResponses, files } = await storeImages(imagesLocation)
    for (imageUploadResponseIndex in imageUploadResponses) {
        let tokenUriMetadata = { ...metadataTemplate }
        tokenUriMetadata.name = files[imageUploadResponseIndex].replace(".png", "")
        tokenUriMetadata.description = `bigBag ${tokenUriMetadata.name} Boogy!`
        tokenUriMetadata.image = `ipfs://${imageUploadResponses[imageUploadResponseIndex].IpfsHash}`
        console.log(`Uploading ${tokenUriMetadata.name}...`)
        const metadataUploadResponse = await storeTokenUriMetadata(tokenUriMetadata)
        tokenUris.push(`ipfs://${metadataUploadResponse.IpfsHash}`)
    }
    console.log("Token URIs uploaded! They are:")
    console.log(tokenUris)
    return tokenUris
}

module.exports.tags = ["all", "randomipfs", "main"]

// maarten@LAPTOP-L1E8IBDS:~/hh-fcc/basic-nft-fcc$ yarn hardhat run scripts/pinata.js
// yarn run v1.22.19
// $ /home/maarten/hh-fcc/basic-nft-fcc/node_modules/.bin/hardhat run scripts/pinata.js
// Uploading to IPFS
// Uploading maarten...

// /home/maarten/hh-fcc/basic-nft-fcc/scripts/pinata.js:32
//         tokenUris.push(`ipfs://${metadataUploadResponse.IpfsHash}`)
//                   ^
// TypeError: tokenUris.push is not a function
//     at handleTokenUris (/home/maarten/hh-fcc/basic-nft-fcc/scripts/pinata.js:32:19)
//     at processTicksAndRejections (node:internal/process/task_queues:95:5)
// error Command failed with exit code 1.
