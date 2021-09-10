/**
 * PingOne Platform API - Management
 * A bare-bones collection for the PingOne API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class UserName {
    /**
    * A string that specifies the family name of the user, or Last in most Western languages (for example, ‘Jensen’ given the full name ‘Ms. Barbara J Jensen, III’). This may be explicitly set to null when updating a name to unset it. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), space, dot, apostrophe, or hyphen (regex ^[\\p{L}\\p{M}\\p{N}\' .-]*$). It can have a length of no more than 256 characters (min/max=1/256).
    */
    'family'?: string;
    /**
    * A string that specifies the fully formatted name of the user (for example ‘Ms. Barbara J Jensen, III’). This can be explicitly set to null when updating a name to unset it. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), space, dot, apostrophe, or hyphen (regex ^[\\p{L}\\p{M}\\p{N}\' .-]*$). It can have a length of no more than 256 characters (min/max=1/256).
    */
    'formatted'?: string;
    /**
    * A string that specifies the given name of the user, or First in most Western languages (for example, ‘Barbara’ given the full name ‘Ms. Barbara J Jensen, III’). This may be explicitly set to null when updating a name to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex ^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$). It can have a length of no more than 256 characters (min/max=1/256).
    */
    'given'?: string;
    /**
    * A string that specifies the honorific prefix(es) of the user, or title in most Western languages (for example, ‘Ms.’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it.
    */
    'honorificPrefix'?: string;
    /**
    * A string that specifies the honorific suffix(es) of the user, or suffix in most Western languages (for example, ‘III’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it.
    */
    'honorificSuffix'?: string;
    /**
    * A string that specifies the the middle name(s) of the user (for exmple, ‘Jane’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex ^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$). It can have a length of no more than 256 characters (min/max=1/256).
    */
    'middle'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "family",
            "baseName": "family",
            "type": "string"
        },
        {
            "name": "formatted",
            "baseName": "formatted",
            "type": "string"
        },
        {
            "name": "given",
            "baseName": "given",
            "type": "string"
        },
        {
            "name": "honorificPrefix",
            "baseName": "honorificPrefix",
            "type": "string"
        },
        {
            "name": "honorificSuffix",
            "baseName": "honorificSuffix",
            "type": "string"
        },
        {
            "name": "middle",
            "baseName": "middle",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserName.attributeTypeMap;
    }
}
