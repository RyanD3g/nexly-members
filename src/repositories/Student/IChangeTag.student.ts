import { ITagName } from "src/useCases/students/changeTags/ChangeTags.DTO";

export abstract class AChangeTags{
    abstract changeTag(data:ITagName): Promise<Object>;
}
