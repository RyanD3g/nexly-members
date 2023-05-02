import { Injectable } from "@nestjs/common";
import { ChangeTagImplementation } from "../../../repositories/Student/implementations/ChangeTag.service";
import { ITagName } from "./ChangeTags.DTO";

@Injectable()
export class ChangeTagsService {
    constructor(
        private implementation:ChangeTagImplementation,
    ){};

    async changed(data:ITagName){
        const createdTag = await this.implementation.changeTag(data);
        return createdTag;
    };
};
