import * as vscode from 'vscode';

// export function provider() {
//     return vscode.languages.registerCompletionItemProvider('text', {
//        provideCompletionItems(
//             document: vscode.TextDocument, position: vscode.Position,
//           token: vscode.CancellationToken, context: vscode.CompletionContext
//          ) {
//            const simple = new vscode.CompletionItem('try it!');
//            return [simple];
//        }
//     });
// }
// export function provider(){return vscode.languages.registerCompletionItemProvider(
//         'plantext',
//         {
//             provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext){
//               const simple = new vscode.CompletionItem('try it!');
//               return [simple];
//             }
//         },
//     );
// }
export function provider() {return vscode.languages.registerCompletionItemProvider(
    'plaintext',
    {
         provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const linePrefix =new vscode.CompletionItem('try it!');

            return [
               linePrefix
            ];
        }
    },
 
);} 
// }


export function provider4() {return vscode.languages.registerCompletionItemProvider(
    'plaintext',
    {
         provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const commitCharacterCompletion = new vscode.CompletionItem('class');
			commitCharacterCompletion.commitCharacters = ['='];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `=` to get `console.`');
            return[commitCharacterCompletion];
          
        }
    },
 
);} 

export function provider5() {return vscode.languages.registerCompletionItemProvider(
    'plaintext',
    {
         provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('class=')) {
                return undefined;
            }

            return [
                new vscode.CompletionItem('a1', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('a2', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('a3', vscode.CompletionItemKind.Method),
            ];
        }
    },
    '=' // triggered whenever a '.' is being typed
);} 

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

// export function provider6() {return vscode.languages.registerCompletionItemProvider(
//     'plaintext',
//     {
//          provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

//             // get all text until the `position` and check if it reads `console.`
//             // and if so then complete if `log`, `warn`, and `error`
//             const linePrefix = document.lineAt(position).text.substr(0, position.character);
//             if (!linePrefix.endsWith('class=')) {
//                 return undefined;
//             }
//             var list=['n','g'];
            
//             // for (let elment of list) {
//             //      new vscode.CompletionItem(elment, vscode.CompletionItemKind.Method);
//             //   }
//                  //new vscode.CompletionItem(list, vscode.CompletionList.arguments);
//                 // new vscode.CompletionItem('a2', vscode.CompletionItemKind.Method),
//                 // new vscode.CompletionItem('a3', vscode.CompletionItemKind.Method),
//             return[
//                 //for (var item in list){
//                     new vscode.CompletionItem();
//                 //}
//             ]
//         }
//     },
//     '=' // triggered whenever a '.' is being typed
// );}

export function provider7(item:string) {return vscode.languages.registerCompletionItemProvider(
    'plaintext',
    {
         provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('class="')) {
                return undefined;
            }
            return [
                new vscode.CompletionItem(item+'"', vscode.CompletionItemKind.Text),
                //new vscode.CompletionItem(item, vscode.CompletionItemKind.Text),

            ];
        }
    },
    '"'
);} 