import {
    Metadata,
    readMetadataXML,
    writeMetadataXML
} from "../src";

describe("exports", () => {
    it("all", () => {
        const metadata: Metadata = {};
        expect(typeof readMetadataXML).toBe("function");
        expect(typeof writeMetadataXML).toBe("function");
        expect(typeof metadata).toBe("object");
    });
});
