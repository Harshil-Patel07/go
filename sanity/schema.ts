
import richText from './schemas/richText'
import comment from './schemas/comment'
import post from './schemas/post'
import postedBy from './schemas/postedBy'
import user from './schemas/user'
import { SchemaTypeDefinition } from 'sanity'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [richText, comment, post, postedBy, user],
}
