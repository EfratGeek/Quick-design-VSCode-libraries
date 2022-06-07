import { removeListener } from 'cluster';
import { removeAllListeners } from 'process';
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

    // get num of class bootstrap.
    // if is not in bootstrap return null.
    static getBootNum(style: string) {
        for (let key in CompletionClass.dictBootNum) {
            if (key === style) {
                return CompletionClass.dictBootNum[key];
            }
        }
        return null;
    }

    // get name class of key specific.
    // if is not a valid number of key, retutm null.
    static getBootStyle(num: number) {
        if (num > 1754 || num < 0) {
            return null;
        }
        // delete on right:
        if (num > 8 || num < 0) {
            return null;
        }

        for (let key in CompletionClass.dictBootString) {
            if (Number(key) === num) {
                return CompletionClass.dictBootString[key];
            }
        }
    }

    static getListTags() {
        let list: string[] = [];
        for (let key in CompletionClass.graphTag) {
            for (let dic in CompletionClass.graphTag[key]) {
                list.push(dic);
            }
        }
        return list;
    }

    static getListOfTag(tag: string) {
        let list_, list = [];
        for (let key in CompletionClass.graphTag) {
            for (let dic in CompletionClass.graphTag[key]) {
                if (tag === dic) {
                    list_ = CompletionClass.graphTag[key];
                }
            }
        }
        for (let key in list_) {
            for (let i in list_[key]) {
                list.push(list_[key][i]);
            }
        }
        return list;
    }

    static getListOfBoot(style: string) {
        let list_, list = [];
        for (let key in CompletionClass.graphBoot) {
            for (let dic in CompletionClass.graphBoot[key]) {
                if (style === CompletionClass.getBootStyle(Number(dic))) {
                    list_ = CompletionClass.graphBoot[key];
                }
            }
        }
        for (let key in list_) {
            for (let i in list_[key]) {
                list.push(list_[key][i]);
            }
        }
        return list;
    }

    static getListOfchild(style: string) {
        let list_, list = [];
        for (let key in CompletionClass.graphChild) {
            for (let dic in CompletionClass.graphChild[key]) {
                if (style === CompletionClass.getBootStyle(Number(dic))) {
                    list_ =  CompletionClass.graphChild[key];
                }
            }
        }
        for (let key in list_) {
            for (let i in list_[key]) {
                list.push(list_[key][i]);
            }
        }
        return list;
    }

    static findBigStyle(dict: { [index: string]: number; }) {
        let max = -1, style = '';
        for (let key in dict) {
            if (dict[key] > max) {
                max = dict[key];
                style = key;
            }
        }
        if (style !== '') {
            dict[style] = -2;
        }
        return style;
    }

    static getListByNumber(list: Array<Number>) {
        let dict = CompletionClass.dictBootNum;
        let _list = [];
        for (let index = 0; index < list.length; index++) {
            dict[CompletionClass.getBootStyle(index)] = Number(list[index]);
        }
        let style = this.findBigStyle(dict);
        while (style) {
            _list.push(style);
            style = CompletionClass.findBigStyle(dict);
        }
        return _list;
    }

    static getExtendList(...lists: Array<Number>){
        let dict = {};
        for (let index = 0; index < lists.length; index++) {
                            
        }
    }

}

export default CompletionClass;
