import Bootstrap from '../Json/bootstrap.json';
import Bootstrap2 from '../Json/bootstrap_2.json';
import GraphBoot from '../Json/GraphBoot.json';
import GraphChild from "../Json/GraphChild.json";
import GraphTag from "../Json/GraphTag.json";

class CompletionClass {

    static dictBootString: { [index: string]: string; } = Bootstrap.bootstrap;
    static dictBootNum: { [index: string]: number; } = Bootstrap2.bootstrap;
    static graphBoot = GraphBoot.bootstrap_pair;
    static graphChild = GraphChild.children;
    static graphTag = GraphTag.tag;


    static getDictBootNum() {
        return CompletionClass.dictBootString;
    }

    static getDictBootString() {
        return CompletionClass.dictBootNum;
    }

    static getGraphBoot() {
        return CompletionClass.graphBoot;
    }

    static getGraphChild() {
        return CompletionClass.graphChild;
    }

    static getGraphTag() {
        return CompletionClass.graphTag;
    }

    static getBootNum(style: string) {
        for (let key in CompletionClass.dictBootNum) {
            if (key === style) {
                return CompletionClass.dictBootNum[key];
            }
        }
    }

    static getBootStyle(num: number) {
        for (let key in CompletionClass.dictBootString) {
            if (Number(key) === num) {
                return CompletionClass.dictBootString[key];
            }
        }
    }

    static getListOfTag(tag: string) {
        return CompletionClass.graphTag.find(element => tag);
    }

    static getListOfBoot(style: string) {

    }
}
export default CompletionClass;
