export abstract class ARedisProvider {
    abstract isCached(nameCamp:string): Promise<T>;
    abstract cache(data:T, nameCamp:string): Promise<T>;
    abstract updateDataCache(data:T, nameCamp:string): Promise<T>;
};
