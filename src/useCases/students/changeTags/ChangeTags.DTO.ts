import { IsNotEmpty } from "class-validator";

interface DetailsTags {
    categoryName:string,
}

export class ITagName {
    studentId:string;

    @IsNotEmpty()
    tagname:DetailsTags[];
};
