import { Resolver, Query, Mutation, Args, Parent } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatType } from './dto/create-cat.dto';
import { CatInput } from './inputs/cat.inputs';
// import { CatType } from './dto/create-cat.dto';
// import { CatInput } from './inputs/cat.input';

@Resolver()
export class CatsResolver {
    constructor(private readonly catsService: CatsService) { }

    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query(() => [CatType])
    async cats(@Args('where') condition: any) {
        console.log(condition)
        return this.catsService.findAll();
    }

    @Mutation(() => CatType)
    async createCat(@Args('input') input: CatInput) {
        return this.catsService.create(input);
    }
}