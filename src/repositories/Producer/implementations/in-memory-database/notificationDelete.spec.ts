import * as dayjs from 'dayjs';
import { NotificationsProducerInMemory } from "./getNotifications.memory";

describe('Testando se notificação é deletada', ()=>{
    it('Deve apagar notificação antiga', async ()=>{
        const notification = new NotificationsProducerInMemory();
        const read = await notification.notifications({producerId:'456'});
        const deleted = await notification.getLifeByNotification(dayjs().format('YYYY-MM-DD'));
        expect(deleted).toHaveLength(2);
    });
});
