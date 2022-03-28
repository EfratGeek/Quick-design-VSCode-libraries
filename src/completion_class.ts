import * as vscode from 'vscode';


// eslint-disable-next-line @typescript-eslint/naming-convention
export function class_c() {return vscode.languages.registerCompletionItemProvider(
    'javascript',
    {
         provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

            const commitCharacterCompletion = new vscode.CompletionItem('class=');
			commitCharacterCompletion.commitCharacters = ['"'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `=` to get `class`');
            return[commitCharacterCompletion];
          
        }
    },
 
);} 

// eslint-disable-next-line @typescript-eslint/naming-convention
export function bootstrap_c(item:string) {return vscode.languages.registerCompletionItemProvider(
    'html',
    {
         provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('class="')) {
                return undefined;
            }
            return [
                new vscode.CompletionItem(item , vscode.CompletionItemKind.Text),
                //new vscode.CompletionItem(item, vscode.CompletionItemKind.Text),

            ];
        }
    },
    '"'
);} 