# salesforce-metadata

[![npm version](https://badge.fury.io/js/salesforce-metadata.svg)](https://badge.fury.io/js/salesforce-metadata)

Read and write Salesforce Metadata files in TypeScript.

WARNING: this project is not stable yet and any API can change.

## Types
All the
[metadata types](https://github.com/kratoon3/salesforce-metadata/blob/master/src/metadata-types.ts)
were generated from
[salesforce-wsdl-consumer](https://github.com/kratoon3/salesforce-wsdl-consumer).

Every property is optional and explicitArray for reading an XML file is set to true 
(always put child nodes in an array).

## Usage
Currently, this version can only read and write XML Metadata files,
i.e. even though the Profile type extends Metadata type, the "fullName" property
from Metadata type won't be processed while reading and writing a file.

Exported functions:
* `readMetadataXML(file: string): Promise<MetadataFile>`  
* `writeMetadataXML(file: string, metadata: MetadataFile, options?: OptionsV2): Promise<void>`

```typescript
readMetadataXML(profilePath)
    .then((profile: {Profile: Profile}) => {
        profile.Profile.userPermissions?.forEach((perm: ProfileUserPermission) => {
            // ...
        });
        return writeMetadataXML(profilePath, profile);
    });
```
