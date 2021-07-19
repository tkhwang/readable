import { InputType } from '@nestjs/graphql';
import { AddBookMarkInput } from '../add-bookmark/add-bookmark.input';

@InputType()
export class AddBookMarkWithAuthInput extends AddBookMarkInput {}
