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
                // bring the line till the current Location
                const linePrefix = document.lineAt(position).text.substring(0, position.character);
                // check if match to class attributr.
                const rawClasses: RegExpMatchArray | null = linePrefix.match(/class=["|']([\w- ]*$)/);
                // if not return nothing.
                if (!rawClasses) {
                    //|| rawClasses.length === 1
                    return [];
                }
                // if yes put in list the class if empty will not put anything.
                let listClass = rawClasses[1].split(' ');
                let bootListClass: string[] = [];
                // put in new list jast classes existing in bootstrap.
                listClass.forEach(_class =>{
                    if(CompletionClass.isInBootstrap(_class)){
                        bootListClass.push(_class);
                    }
                });

				let _list: String[][]  = [];
                // put in _list lists of completion.
				for(let key in bootListClass){
					_list.push(CompletionClass.getListByNumber(CompletionClass.getListOfBoot(bootListClass[key])));
				}

                // list of CompletionItem for CompletionList.
                let compList:vscode.CompletionItem[] = [];

                // chek on type tag thet user be.
                CompletionClass.getListTags().forEach(tag =>{        

                    if(linePrefix.includes('<'+tag +' ')){       
                        let tagList = CompletionClass.getListByNumber(CompletionClass.getListOfTag(tag)); 
						_list.push(tagList);
                        // return the extend list of all lists.
						let extendList = CompletionClass.getExtendList(_list);

                        for (let key in extendList){
                            let item = new vscode.CompletionItem(extendList[key],vscode.CompletionItemKind.Variable);
                            item.sortText = String(key);
                            compList.push(item);
                        }
                    }
                });  

                // if do not know the tag.
                if(compList.length === 0)
                {
                    // if the class is empty.
					if(_list.length === 0){
						_list.push(CompletionClass.getListByNumber(CompletionClass.getListOfTag('div')));
					}
                    // return the extend list of all lists.
					let extendList = CompletionClass.getExtendList(_list);
                    for (let key in extendList){
                        let item = new vscode.CompletionItem(extendList[key],vscode.CompletionItemKind.Variable);
                        item.sortText = String(key);
                        compList.push(item);
                    }
                }        

                // send to user the class name for complate.
                return new vscode.CompletionList(compList);
            }
        }
    );
	// CompletionClass.getExtendList(CompletionClass.getListByNumber(CompletionClass.getListOfTag('div')),CompletionClass.getListByNumber(CompletionClass.getListOfTag('form')));
}

// this method is called when your extension is deactivated
export function deactivate() { }
