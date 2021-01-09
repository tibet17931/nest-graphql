import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './cat.schema';
import { CatInput } from './inputs/cat.inputs';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }

    async create(createCatDto: CatInput): Promise<Cat> {
        console.log(createCatDto)
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        // console.log(data)
        return this.catModel.find().exec();
    }
}
