import * as vscode from 'vscode';
import CompletionClass from "./class/CompletionClass";

export function isTag(tagName:string, list: any[]){
    return vscode.languages.registerCompletionItemProvider(
        'html',{
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (!linePrefix.includes(tagName)) {
                    return undefined;
                }
                new vscode.CompletionItem(String(list), vscode.CompletionItemKind.Text);
            }
        }
    );
}