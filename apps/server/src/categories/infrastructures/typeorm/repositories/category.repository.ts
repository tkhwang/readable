import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
@EntityRepository(Category)
export class CategoriesRepository extends Repository<Category> {}
