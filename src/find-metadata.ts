import find from "find";
import {describeMetadata, MetadataDescribe} from "./describe/describe-metadata";
import {MetadataType} from "./index";

/**
 * Find files for specific metadata type.
 */
export function findFilesByMetadataType(type: MetadataType, dir: string = "."): string[] {
    const metadataObject: MetadataDescribe | undefined = describeMetadata(type);
    if (!metadataObject) {
        throw Error(`${type} is not described. Probably not supported.`);
    }
    const directoryName: string = metadataObject.directoryName;
    const suffix: string = metadataObject.suffix ? `\.${metadataObject.suffix}(-meta?)\.xml` : "";
    return find.fileSync(new RegExp(`.*?/${directoryName}/.*?${suffix}`), dir);
}
