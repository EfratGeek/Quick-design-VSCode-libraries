import * as vscode from 'vscode';
import CompletionClass from "./class/CompletionClass";



// eslint-disable-next-line @typescript-eslint/naming-convention
export function bootstrap_c( list: string[]) {
    return vscode.languages.registerCompletionItemProvider(
        '*',
        {
            
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            
                let compList = [];
                for (let key in list){
                    let item = new vscode.CompletionItem(list[key],vscode.CompletionItemKind.Text);
                    item.sortText = String(key);
                    compList.push(item);
                }

                const linePrefix = document.lineAt(position).text.substring(0, position.character);

                if (!linePrefix.endsWith('class="')) {
                    return undefined;
                }
                // let try_ = document.getText();    
                // if (!try_.endsWith('class="')) {
                //     return undefined;
                // }             
                return new vscode.CompletionList(compList);
            
            }
        }
    );
}


// complete first style in class 
export function completeClass(){
    return vscode.languages.registerCompletionItemProvider(
        '*',
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position){
                // const start: vscode.Position = new vscode.Position(position.line, 0);
                // const range: vscode.Range = new vscode.Range(start, position);
                // const text: string = document.getText(range);
                const linePrefix = document.lineAt(position).text.substring(0, position.character);
                const rawClasses: RegExpMatchArray | null = linePrefix.match(/class=["|']([\w- ]*$)/);
                if (!rawClasses) {
                    //|| rawClasses.length === 1
                    // console.log(rawClasses);
                    return [];
                }
                // console.log(rawClasses);
                let listClass = rawClasses[1].split(' ');
                let bootListClass: string[] = [];
                listClass.forEach(_class =>{
                    if(CompletionClass.isInBootstrap(_class)){
                        bootListClass.push(_class);
                    }
                });
                console.log(bootListClass);
                let compList:vscode.CompletionItem[] = [];
                CompletionClass.getListTags().forEach(tag =>{                        
                    if(linePrefix.includes('<'+tag +' ')){       
                        let _list= CompletionClass.getListByNumber(CompletionClass.getListOfTag(tag));                    
                        for (let key in _list){
                            let item = new vscode.CompletionItem(_list[key],vscode.CompletionItemKind.Variable);
                            item.sortText = String(key);
                            compList.push(item);
                        }
                    }
                });  
                if(compList.length === 0)
                {
                    let _list = CompletionClass.getListByNumber(CompletionClass.getListOfTag('div'));
                    for (let key in _list){
                        let item = new vscode.CompletionItem(_list[key],vscode.CompletionItemKind.Variable);
                        item.sortText = String(key);
                        compList.push(item);
                    }
                }            
                return new vscode.CompletionList(compList);
            }
        }
    );
}
