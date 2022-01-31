//import { waitForDebugger } from 'inspector';
import * as vscode from 'vscode';
import { provider } from './provider';
import { pushGood, pushName } from './subscriptions';


export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "efratfirstextension" is now active!');

    const _pushGood=pushGood();
	context.subscriptions.push(
		_pushGood
	);

	const _pushName=pushName();
	context.subscriptions.push(
		_pushName
	);

	const _complet=provider();
	context.subscriptions.push(
		_complet
	);

}

// this method is called when your extension is deactivated
export function deactivate() { }
