import * as vscode from 'vscode';
import { completeClass } from './completion_class';
import CompletionClass from './class/CompletionClass';
import { join } from 'path';


export function activate() {
    console.log('Congratulations, your extension "efratfirstextension" is now active!');
    return vscode.languages.registerCompletionItemProvider(
        '*',
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

                const page = document.getText(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(position.line, 0)));

                const emptyTags = ['base', 'area', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
                let charTag = [];
                // check the children/
                let cl = '';
                let end_ = '';
                let in_: number = 0;
                let stack: Array<string> = [];
                let t = false;
                let tt = '';
                let body = 0;
                for (let index = 0; index < page.length; index++) {
                    if (page[index] === '<'
                        && page[index + 1] === 'b'
                        && page[index + 2] === 'o'
                        && page[index + 3] === 'd'
                        && page[index + 4] === 'y') {
                        body = index;
                    }
                }
                for (let index = body; index < page.length; index++) {

                    if (page[index] === '<') {

                        if (page[index + 1] === '/') {
                            end_ += '</';
                            stack.push(end_);
                            end_ = '';
                        }
                        else {
                            stack.push(page[index]);
                            for (let i = index + 1; i < index + 10; i++) {
                                // if (page[i] !== ' ' || page[i] !== '>') {
                                if (page[i] !== ' ') {
                                    if (page[i] !== '>') {
                                        tt += page[i];
                                    }
                                    else {
                                        break;
                                    }
                                }
                                else {
                                    break;
                                }
                            }
                            emptyTags.forEach(elemnt => {
                                if (elemnt === tt) {
                                    t = true;
                                }
                            });
                            // console.log(tt);
                            tt = '';


                            for (let j = index; j < page.length; j++) {
                                if (page[j] === '>') {
                                    break;
                                }
                                if (page[j] === 'c' && page[j + 1] === 'l' && page[j + 2] === 'a' && page[j + 3] === 's' && page[j + 4] === 's' && page[j + 5] === '=' && page[j + 6] === '"') {
                                    for (let k = j + 7; k < page.length; k++) {
                                        if (page[k] !== '"') {
                                            cl = cl + page[k];
                                            in_ = k;
                                        }
                                        else {
                                            break;
                                        }
                                    }
                                    index = in_;
                                    stack.push(cl);
                                    cl = '';

                                    break;
                                }
                            }
                        }
                        if (t) {
                            stack.push('</');
                            t = false;
                        }
                    }
                }
                console.log(stack);
                let _list: String[][] = [];
                let str = '';
                let count = 0;
                let s1 = 0;

                for (let s = stack.length - 1; s >= 0; s--) {
                    if (stack[s] === '</') {
                        count++;
                    }
                    else {
                        if (stack[s] === '<') {
                            count--;
                            s1 = s + 1;
                            if (stack[s1] === '</') {
                                str = '';
                            }
                            if (stack[s1] === '<') {
                                str = '';
                            }
                        }
                        else {
                            str = stack[s];
                        }
                    }
                    if (count === -1) {
                        break;
                    }
                }
                console.log(str);

                let children = str.split(' ');
                let bootListClass: string[] = [];
                children.forEach(_class =>{
                    if (CompletionClass.isInBootstrap(_class)) {
                        bootListClass.push(_class);
                    }
                });


                // bring the line till the current Location
                const linePrefix = document.lineAt(position).text.substring(0, position.character);

                const tagit: RegExpMatchArray | null = linePrefix.match(/<(\w*)/);
                // check if match to class attributr.
                const rawClasses: RegExpMatchArray | null = linePrefix.match(/class=["|']([\w- ]*$)/);
                // if not return nothing.
                if (!rawClasses || !tagit) {
                    //|| rawClasses.length === 1
                    return [];
                }

                // if yes put in list the class if empty will not put anything.
                let listClass = rawClasses[1].split(' ');

                // put in new list jast classes existing in bootstrap.
                listClass.forEach(_class => {
                    if (CompletionClass.isInBootstrap(_class)) {
                        bootListClass.push(_class);
                    }
                });


                // put in _list lists of completion.
                for (let key in bootListClass) {
                    _list.push(CompletionClass.getListByNumber(CompletionClass.getListOfBoot(bootListClass[key])));
                }

                // list of CompletionItem for CompletionList.
                let compList: vscode.CompletionItem[] = [];

                // chek on type tag thet user be.
                CompletionClass.getListTags().forEach(tag => {

                    // if(linePrefix.includes('<'+tag +' ')){ 
                    if (tag === tagit[1]) {
                        let tagList = CompletionClass.getListByNumber(CompletionClass.getListOfTag(tag));
                        _list.push(tagList);
                        // return the extend list of all lists.
                        let extendList = CompletionClass.getExtendList(_list);

                        for (let key in extendList) {
                            let item = new vscode.CompletionItem(extendList[key], vscode.CompletionItemKind.Variable);
                            item.sortText = String(key);
                            compList.push(item);
                        }
                    }
                });

                // if do not know the tag.
                if (compList.length === 0) {
                    // if the class is empty.
                    if (_list.length === 0) {
                        _list.push(CompletionClass.getListByNumber(CompletionClass.getListOfTag('div')));
                    }
                    // return the extend list of all lists.
                    let extendList = CompletionClass.getExtendList(_list);
                    for (let key in extendList) {
                        let item = new vscode.CompletionItem(extendList[key], vscode.CompletionItemKind.Variable);
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
