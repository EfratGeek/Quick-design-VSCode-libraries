//import { waitForDebugger } from 'inspector';
import * as vscode from 'vscode';
import { provider,provider3 } from './provider';
import { pushGood, pushName } from './subscriptions';
import { provider1,provider2 } from './copy';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "efratfirstextension" is now active!');



    const _pushGood=pushGood();
	const _pushName=pushName();
	const _complet=provider();
	const _prov1=provider1();
	const _prov2=provider2();
	const _prov3=provider3();
	
	context.subscriptions.push(
		_complet,
		_pushGood,
		_pushName,
		_prov1,
		_prov2,
		_prov3
	);

}

// this method is called when your extension is deactivated
export function deactivate() { }
