import * as vscode from 'vscode';




export function provider() {
    const prov = vscode.languages.registerCompletionItemProvider('text', {
       provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
           const simple = new vscode.CompletionItem('try it!');
           return [simple];
       }
    });
    return prov;
}