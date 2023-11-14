import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '14t3i8qn',
  dataset: 'program',
  useCdn: false,
  apiVersion: '2022-10-04',
})

export async function getProgram() {
  const program = await client.fetch(
    '*[_type == "program" && slug.current == "fagdag-mars-2023"] {\n    ...,\n    events[]{\n      ...,\n      bidrag[]->{\n        _id,\n        abstract,\n        title,\n        bidragsyter,\n        andreBidragsytere,\n        format->,\n        kategorier[]->\n      },\n      scene->,\n    },\n    tema->{\n      ...,\n      "mapImageUrl": map.asset->url,\n    }\n  }[0]',
  )
  return program
}
