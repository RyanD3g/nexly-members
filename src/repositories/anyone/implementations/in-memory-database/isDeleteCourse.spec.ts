import * as dayjs from "dayjs";
import { IsDeleteCourseInMemory } from "./isDeleteCourse.memory";

describe('Testando função de deletar cursos que já passaram da data', ()=>{
    let classForDelete:IsDeleteCourseInMemory;
    beforeAll(()=>{
        classForDelete = new IsDeleteCourseInMemory();
    });
    it('Deveria deletar um curso normalmente e deixar o outro normal', async()=>{
        const deleteNormal = await classForDelete.isDelete(dayjs().format('DD/MM/YYYY'));
        console.log(deleteNormal)
        expect(deleteNormal).toHaveLength(3);
    });
});
