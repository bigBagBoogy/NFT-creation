const { network } = require("hardhat")
const { storeImages, storeTokenUriMetadata } = require("../utils/uploadToPinata")

const imagesLocation = "./images/" // = subfolder!?   the way this script is written currently it only accepts png's
let tokenUris = []
const pinataButton = select("#pinata")
function setup() {
    noCanvas()
    console.log("script connected!")
    pinataButton.mousePressed(handleTokenUris)
}

const metadataTemplate = {
    name: "",
    description: "",
    image: "",
    attributes: [
        // these attributes below are hardcoded!😔
        {
            trait_type: "Spacyness",
            value: 5000,
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
        tokenUriMetadata.description = `Space floatin' ${tokenUriMetadata.name} NFT!`
        tokenUriMetadata.image = `ipfs://${imageUploadResponses[imageUploadResponseIndex].IpfsHash}`
        console.log(`Uploading ${tokenUriMetadata.name}...`)
        const metadataUploadResponse = await storeTokenUriMetadata(tokenUriMetadata)
        tokenUris = `ipfs://${metadataUploadResponse.IpfsHash}`
    }
    console.log("Token URIs uploaded! They are:")
    console.log(tokenUris)
    return tokenUris
}

module.exports.tags = ["all", "randomipfs", "main"]
