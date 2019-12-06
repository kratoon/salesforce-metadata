import path from "path";
import {generateTypesFromMetadataWSDL} from "salesforce-wsdl-consumer";

// noinspection JSIgnoredPromiseFromCall
generateTypesFromMetadataWSDL({
    outputFile: path.join("src", "metadata-types.ts")
});

