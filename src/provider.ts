import * as vscode from 'vscode';

export function provider() {
    return vscode.languages.registerCompletionItemProvider('text', {
       provideCompletionItems(
            document: vscode.TextDocument, position: vscode.Position,
          token: vscode.CancellationToken, context: vscode.CompletionContext
         ) {
           const simple = new vscode.CompletionItem('try it!');
           return [simple];
       }
    });
}

export function provider3() {return vscode.languages.registerCompletionItemProvider(
    'plaintext',
    {
         provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const linePrefix =new vscode.CompletionItem('try is good!');

            return [
               linePrefix
            ];
        }
    },
 
);} 