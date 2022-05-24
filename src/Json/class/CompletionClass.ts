import Bootstrap from '../../Json/bootstrap.json';
import GraphBoot from '../../Json/GraphBoot.json';
import GraphChild from "../../Json/GraphChild.json";
import GraphTag from "../../Json/GraphTag.json";

class CompletionClass {
    dictBoot: any = {}; // building dictinary for bootstrap class
    // building 
    graphBoot: any = [{}];
    graphChild: any = [{}];
    graphTag: any = [{}];
    constructor() {
        // put the dictionary from json to variable dictBoot:
        this.dictBoot = Bootstrap.bootstrap;
        this.graphBoot = GraphBoot.bootstrap_pair;
        this.graphChild = GraphChild.bootstrap_pair;
        this.graphTag = GraphTag.tag;
    }
}
export default CompletionClass;
