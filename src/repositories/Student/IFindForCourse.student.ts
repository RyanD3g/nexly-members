import { Courses_Producer } from "@prisma/client";
import { ISearchDTO } from "src/useCases/students/searchByCourse/SearchCourse.DTO";

export abstract class AFindForCourse {
    abstract find(data:ISearchDTO): Promise<Courses_Producer[] | Object>;
};
