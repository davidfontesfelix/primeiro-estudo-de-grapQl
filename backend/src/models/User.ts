import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(_Type => ID)
  id: string

  @Field()
  name: string
}