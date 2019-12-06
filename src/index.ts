import fs from "fs-extra";
import xml2js, {OptionsV2} from "xml2js";
import {Metadata} from "./metadata-types";

const defaultBuilderOptions: OptionsV2 = {
    xmldec: {
        version: "1.0",
        encoding: "UTF-8",
        standalone: undefined
    },
    renderOpts: {
        pretty: true,
        indent: "    ",
        newline: "\n"
    }
};

function readFile(file: string): Promise<Buffer> {
    return fs.readFile(file);
}

export type MetadataFile = { [root: string]: Metadata };

export function readMetadataXML(file: string): Promise<MetadataFile> {
    const parser: xml2js.Parser = new xml2js.Parser({});
    return readFile(file).then((data: Buffer) => parser.parseStringPromise(data.toString()));
}

export function writeMetadataXML(file: string, metadata: MetadataFile, options: OptionsV2 = defaultBuilderOptions): Promise<void> {
    const builder: xml2js.Builder = new xml2js.Builder(options);
    return fs.writeFile(file, `${builder.buildObject(metadata)}\n`);
}

export * from "./metadata-types";
export {OptionsV2} from "xml2js";
