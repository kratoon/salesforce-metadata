
import fs from "fs-extra";
import {join} from "path";
import {MetadataType} from "../metadata-types";

export interface MetadataDescribe {
    directoryName: string;
    inFolder: boolean;
    metaFile: boolean;
    suffix?: string;
    xmlName: string;
    childXmlNames?: string | string[];
}

export function describeMetadata(metadata: MetadataType): MetadataDescribe | undefined {
    const customObject: MetadataDescribe = describeCustomObject();
    if (customObject.childXmlNames?.includes(metadata)) {
        return describeCustomObjectChild(metadata);
    }
    return getDescribe()?.find((it: MetadataDescribe) => it.xmlName === metadata);
}

function describeCustomObjectChild(metadata: MetadataType): MetadataDescribe | undefined {
    if (!describedCustomObjectChildren) {
        const path: string = join(__dirname, "..", "resources",
            "metadata", "47", "custom-object-children-describe.json");
        describedCustomObjectChildren = JSON.parse(fs.readFileSync(path).toString());
    }
    // tslint:disable-next-line:no-non-null-assertion
    return describedCustomObjectChildren!.metadataObjects
        .find(it => it.xmlName === metadata);
}

function describeCustomObject(): MetadataDescribe {
    // tslint:disable-next-line:no-non-null-assertion
    return getDescribe().find(it => it.xmlName === "CustomObject")!;
}

let described: {metadataObjects: MetadataDescribe[]} | undefined;
let describedCustomObjectChildren: {metadataObjects: MetadataDescribe[]} | undefined;

function getDescribe(): MetadataDescribe[] {
    if (!described) {
        const path: string = join(__dirname, "..", "resources", "metadata", "47", "describe.json");
        described = JSON.parse(fs.readFileSync(path).toString());
    }
    // tslint:disable-next-line:no-non-null-assertion
    return described!.metadataObjects;
}
