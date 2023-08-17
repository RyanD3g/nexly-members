import { Injectable } from "@nestjs/common";
import { ARedisProvider } from "../IRedis.provider";
import { redis } from "src/config/redis.config";

@Injectable()
export class CacheImplementation implements ARedisProvider {
    async updateDataCache<T extends any>(data: T, nameCamp: string, time?:number): Promise<void> {
        const updateData = await redis.set(nameCamp, JSON.stringify(data), "EX", time);
        await redis.quit();
    };
    async isCached(nameCamp: string): Promise<Object[] | null> {
        const isCached = await redis.get(nameCamp);
        if(isCached) JSON.parse(isCached);
        return null;
    };
    async cache<T extends any>(data: T, nameCamp: string, time?:number): Promise<T> {
        const saveData = await redis.set(nameCamp, JSON.stringify(data), "EX", time);
        await redis.quit();
        return data;
    };
};
