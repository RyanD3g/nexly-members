import { Courses_Producer } from "@prisma/client";

export abstract class AGetAllCourse {
    abstract getAll(): Promise<Courses_Producer[]>;
};
