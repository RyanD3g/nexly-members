import { Courses_Student } from "@prisma/client";
import { IBuyCourse } from "src/useCases/students/BuyCourse/BuyCourse.DTO";

export abstract class ABuyCourse {
    abstract buy(data:IBuyCourse): Promise<Object>;
};
