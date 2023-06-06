import { Courses_Producer } from "@prisma/client";

export abstract class ACourseIsDelete {
    abstract isDelete(courseId:string): Promise<Courses_Producer[] | void>;
};
