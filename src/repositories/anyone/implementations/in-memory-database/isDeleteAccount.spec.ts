import * as dayjs from "dayjs";
import { IsDeleteAccountInMemory } from "./isDeleteAccount.memory";

describe('Testando função de deletar cursos que já passaram da data', ()=>{
    let classForDelete:IsDeleteAccountInMemory;
    beforeAll(()=>{
        classForDelete = new IsDeleteAccountInMemory();
    });
    it('Deveria deletar um aluno normalmente e deixar o outro normalmente', async()=>{
        const deleteNormal = await classForDelete.isDelete(dayjs().format('DD/MM/YYYY'));
        expect(deleteNormal).toHaveLength(2);
    });
});