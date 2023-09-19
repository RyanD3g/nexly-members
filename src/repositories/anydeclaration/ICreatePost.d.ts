export abstract class ACreatePost {
    abstract create(data:T): promise<T>;
};
