import { Movies_Modules } from "@prisma/client";
import { IGiveLikeDTO } from "src/useCases/students/giveLike/GiveLike.DTO";

export abstract class AGiveLike{
    abstract isExists(courseId:string): Promise<Boolean | Movies_Modules>;
    abstract like(data:IGiveLikeDTO): Promise<Object>;
};
