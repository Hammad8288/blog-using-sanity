import { type SchemaTypeDefinition } from 'sanity'
import About from '../About'
import blog from '../blog'
import author from '../author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [About, blog , author],
}
