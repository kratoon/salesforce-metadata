
import {describeMetadata, MetadataDescribe} from "../../src/describe/describe-metadata";

describe("describe-metadata", () => {
    it("all", () => {
        const apexClass: MetadataDescribe | undefined = describeMetadata("ApexClass");
        expect(apexClass?.directoryName).toBe("classes");
        expect(apexClass?.inFolder).toBe(false);
        expect(apexClass?.metaFile).toBe(true);
        expect(apexClass?.suffix).toBe("cls");
        expect(apexClass?.xmlName).toBe("ApexClass");
        const customObject: MetadataDescribe | undefined = describeMetadata("CustomObject");
        expect(customObject?.directoryName).toBe("objects");
        expect(customObject?.inFolder).toBe(false);
        expect(customObject?.metaFile).toBe(false);
        expect(customObject?.suffix).toBe("object");
        expect(customObject?.xmlName).toBe("CustomObject");
        expect(customObject?.childXmlNames?.toString()).toBe([
            "CustomField",
            "Index",
            "BusinessProcess",
            "CompactLayout",
            "RecordType",
            "WebLink",
            "ValidationRule",
            "SharingReason",
            "ListView",
            "FieldSet"
        ].toString());
        const bundle: MetadataDescribe | undefined = describeMetadata("LightningComponentBundle");
        expect(bundle?.xmlName).toBe("LightningComponentBundle");
        expect(bundle?.directoryName).toBe("lwc");
        expect(bundle?.suffix).toBe(undefined);
    });
});
