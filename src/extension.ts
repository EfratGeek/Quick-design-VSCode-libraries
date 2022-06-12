import * as vscode from 'vscode';
import { completeClass } from './completion_class';
import CompletionClass from './class/CompletionClass';


export function activate() {
	console.log('Congratulations, your extension "efratfirstextension" is now active!');
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
                    return [];
                }

                let listClass = rawClasses[1].split(' ');
                let bootListClass: string[] = [];
                listClass.forEach(_class =>{
                    if(CompletionClass.isInBootstrap(_class)){
                        bootListClass.push(_class);
                    }
                });

				let _list: String[][]  = [];

				for(let key in bootListClass){
					_list.push(CompletionClass.getListByNumber(CompletionClass.getListOfBoot(bootListClass[key])));
				}

                let compList:vscode.CompletionItem[] = [];

                CompletionClass.getListTags().forEach(tag =>{        

                    if(linePrefix.includes('<'+tag +' ')){       
                        let tagList = CompletionClass.getListByNumber(CompletionClass.getListOfTag(tag)); 
						_list.push(tagList);
						let extendList = CompletionClass.getExtendList(_list);

                        for (let key in extendList){
                            let item = new vscode.CompletionItem(extendList[key],vscode.CompletionItemKind.Variable);
                            item.sortText = String(key);
                            compList.push(item);
                        }
                    }
                });  

                if(compList.length === 0)
                {
					if(_list.length === 0){
						_list.push(CompletionClass.getListByNumber(CompletionClass.getListOfTag('div')));
					}
					let extendList = CompletionClass.getExtendList(_list);
                    for (let key in extendList){
                        let item = new vscode.CompletionItem(extendList[key],vscode.CompletionItemKind.Variable);
                        item.sortText = String(key);
                        compList.push(item);
                    }
                }        

                return new vscode.CompletionList(compList);
            }
        }
    );
	// CompletionClass.getExtendList(CompletionClass.getListByNumber(CompletionClass.getListOfTag('div')),CompletionClass.getListByNumber(CompletionClass.getListOfTag('form')));
}

// this method is called when your extension is deactivated
export function deactivate() { }
