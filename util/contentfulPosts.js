import {CONTENT_TYPE_JOB} from "../core/contentful";
import * as contentType from "next/dist/telemetry/ci-info";

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
})

export async function fetchEntries() {
    const entries = await client.getEntries( {content_type: "post"})
    if (entries.items) {
        //console.log(entries.items)
        return entries.items
    }
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
