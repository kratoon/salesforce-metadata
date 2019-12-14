import {join} from "path";
import {findFilesByMetadataType, Metadata} from "../src";

describe("find-metadata", () => {
    it("ApexClass", () => {
        const classes: string[] = findFilesByMetadataType("ApexClass", join(__dirname, "mock"));
        expect(classes.length).toBe(2);
        const object: string[] = findFilesByMetadataType("CustomObject", join(__dirname, "mock"));
        expect(object.length).toBe(1);
        const compactLayouts: string[] = findFilesByMetadataType("CompactLayout", join(__dirname, "mock"));
        expect(compactLayouts.length).toBe(2);
        const customFields: string[] = findFilesByMetadataType("CustomField", join(__dirname, "mock"));
        expect(customFields.length).toBe(2);
        const webLinks: string[] = findFilesByMetadataType("WebLink", join(__dirname, "mock"));
        expect(webLinks.length).toBe(0);
    });
});
